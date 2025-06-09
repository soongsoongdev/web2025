import { useEffect, useState } from 'react';
import { getRecords } from '../utils/altitudeUtil';
import '../styles/altitude.css';

export default function AltitudeView() {
    const [alt, setAlt]   = useState(0);
    const [bg , setBg]    = useState('ground');

    /* ── 고도 애니메이션 : 조금 더 느리게 ── */
    useEffect(() => {
        const last = getRecords().at(-1);
        if (!last) return;

        const target = last.altitude;
        const step   = 50;          // ← 느린 상승
        const id = setInterval(() => {
            setAlt(v => {
                const next = v + step;
                if (next >= target) { clearInterval(id); return target; }
                return next;
            });
        }, 120);                    // 120 ms 간격
    }, []);

    /* ── 고도 → 배경 클래스 ── */
    useEffect(() => {
        if (alt >= 40000)      setBg('solar');
        else if (alt >= 20000) setBg('space');
        else if (alt >= 10000) setBg('aurora');
        else if (alt >=  5000) setBg('cloud');
        else                   setBg('ground');
    }, [alt]);

    /* ── 픽셀 산 컴포넌트 ── */
    const PixelMountain = ({ x = 0, rows = 10 }) => {
        const blocks = [];
        for (let r = 0; r < rows; r++) {
            const n = r + 1;                 // 아래 넓고 위 좁게
            const start = -n * 4;
            for (let i = 0; i < n * 2 - 1; i++) {
                blocks.push(
                    <div
                        key={`${r}-${i}`}
                        style={{
                            position: 'absolute',
                            width: 8,
                            height: 8,
                            background: '#1d3b0b',
                            left: x + start + i * 8,
                            bottom: r * 8,
                        }}
                    />
                );
            }
        }
        /*  눈 픽셀 3칸 얹기  */
        blocks.push(
            <div
                key="snow"
                style={{
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    background: '#e4e4e4',
                    left: x - 8,
                    bottom: rows * 8,
                    boxShadow: '8px 0 #e4e4e4, 16px 0 #e4e4e4',
                }}
            />
        );
        return <>{blocks}</>;
    };

    /* ── 조건별 장면 구성 ── */
    const scene = [];

    /* 산 : 0-4 999 m */
    if (alt < 5000) {
        scene.push(<PixelMountain key="m1" x={200} rows={12} />);
        scene.push(<PixelMountain key="m2" x={500} rows={14} />);
        scene.push(<PixelMountain key="m3" x={800} rows={10} />);
    }

    /* 구름 : 5 000-14 999 m */
    if (alt >= 5000 && alt < 15000) {
        [25, 60, 80].forEach((p, i) =>
            scene.push(
                <div
                    key={'c' + i}
                    className="pixel-cloud"
                    style={{ top: `${80 + 30 * i}px`, left: `${p}%` }}
                />
            )
        );
    }

    /* 별 : 20 000 m 이상 */
    if (alt >= 20000) {
        for (let i = 0; i < 25; i++)
            scene.push(
                <div
                    key={'s' + i}
                    className="pixel-star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            );
    }

    /* 위성·행성 */
    if (alt >= 35000 && alt < 40000)
        scene.push(<div key="sat" className="pixel-satellite" style={{ top: 80, left: '50%' }} />);
    if (alt >= 40000)
        scene.push(<div key="pl" className="pixel-planet" style={{ top: 120, left: '50%' }} />);

    return (
        <div className={`altitude-container ${bg}`}>
            {scene}
            <div className="altitude-box">
                <p className="altitude-label">현재 고도</p>
                <p className="altitude-value">{alt.toLocaleString()} m</p>
            </div>
        </div>
    );
}

import { useEffect, useState } from 'react';
import { getRecords } from '../utils/altitudeUtil';
import '../styles/journey.css';

function JourneyView() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const saved = getRecords();
        const sorted = saved.sort((a, b) => new Date(b.date) - new Date(a.date));
        setRecords(sorted);
    }, []);

    return (
        <div className="page-container" >
            <h2 className="journey-title">📚 나의 독서 여정</h2>
            <div className="record-list">
                {records.length === 0 && <p className="empty">기록이 없습니다.</p>}
                {records.map((r, i) => (
                    <div key={i} className="record-item">
                        <p className="title">📖 {r.title}</p>
                        <p className="info">페이지: {r.pages}p / 고도: {r.altitude}m</p>
                        {r.note && <p className="note">💬 {r.note}</p>}
                        <p className="date">{new Date(r.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JourneyView;

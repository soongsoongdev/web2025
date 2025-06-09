const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('toggleBtn');

let isSmiling = true; // 현재 표정 상태

function drawBear(smile = true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 얼굴
    ctx.fillStyle = '#a0522d';
    ctx.beginPath();
    ctx.arc(200, 150, 80, 0, Math.PI * 2);
    ctx.fill();

    // 귀
    ctx.beginPath();
    ctx.arc(130, 90, 30, 0, Math.PI * 2);
    ctx.arc(270, 90, 30, 0, Math.PI * 2);
    ctx.fill();

    // 귀 안쪽
    ctx.fillStyle = '#deb887';
    ctx.beginPath();
    ctx.arc(130, 90, 15, 0, Math.PI * 2);
    ctx.arc(270, 90, 15, 0, Math.PI * 2);
    ctx.fill();

    // 눈
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(170, 140, 7, 0, Math.PI * 2);
    ctx.arc(230, 140, 7, 0, Math.PI * 2);
    ctx.fill();

    // 코
    ctx.beginPath();
    ctx.arc(200, 170, 10, 0, Math.PI * 2);
    ctx.fill();

    // 입
    ctx.beginPath();
    if (smile) {
        // 웃는 입
        ctx.moveTo(190, 185);
        ctx.quadraticCurveTo(200, 195, 210, 185);
    } else {
        // 무표정 (직선)
        ctx.moveTo(190, 185);
        ctx.lineTo(210, 185);
    }
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// 초기 그리기
drawBear(isSmiling);

// 버튼 클릭 시 표정 토글
btn.addEventListener('click', () => {
    isSmiling = !isSmiling;
    drawBear(isSmiling);
});

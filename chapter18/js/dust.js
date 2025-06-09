const dustInfo = document.getElementById('dust-info');
const citySelect = document.getElementById('city-select');

const API_KEY = 'key'; // 실제 키
const baseURL = 'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc';

function fetchDust(city) {
    const url = `${baseURL}/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&numOfRows=100&pageNo=1&sidoName=${city}&ver=1.0`;

    fetch(url).then(res => res.json()).then(data => {
        const item = data.response.body.items[0];
        const html = `
        🗓 ${item.dataTime}<br/>
        📍 ${item.stationName}<br/>
        PM10: ${item.pm10Value}㎍/㎥ (${gradeText(item.pm10Grade)})<br/>
        PM2.5: ${item.pm25Value}㎍/㎥ (${gradeText(item.pm25Grade)})
      `;
        dustInfo.innerHTML = html;
    }).catch(err => {
        dustInfo.innerText = '데이터를 불러오지 못했습니다.';
        console.error(err);
    });
}

function gradeText(grade) {
    switch (grade) {
        case '1':
            return '좋음';
        case '2':
            return '보통';
        case '3':
            return '나쁨';
        case '4':
            return '매우나쁨';
        default:
            return '정보 없음';
    }
}

citySelect.addEventListener('change', () => {
    const selectedCity = citySelect.value;
    fetchDust(selectedCity);
});

// 초기 로딩
fetchDust(citySelect.value);

export const calculateAltitude = (pages) => {
    return pages * 10; // 1페이지 = 10m 고도
};

export const saveToStorage = (record) => {
    const data = JSON.parse(localStorage.getItem('godok_records')) || [];
    data.push(record);
    localStorage.setItem('godok_records', JSON.stringify(data));
};

export const getRecords = () => {
    return JSON.parse(localStorage.getItem('godok_records')) || [];
};

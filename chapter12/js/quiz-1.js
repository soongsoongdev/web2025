const url = 'data/products.json';
const result = document.querySelector('#result');

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let product = JSON.parse(xhr.responseText);
            console.log(product);
            result.innerHTML = `
        <p><strong>상품명:</strong> ${product.data.name}</p>
        <p><strong>생산년도:</strong> ${product.data.year}</p>
      `;
        } else {
            result.innerText = '상품 정보를 불러오지 못했습니다.';
        }
    }
};

// const cart = {
//     "p1111": {
//         "name": "Свитер 'Опиум'",
//         "url": "#",
//         "image": "images/pullover11",
//         "price": 650
//     }
// }
// let out = '<div class"productsRow">';
// for (let key in cart) {
//     out += `<div class="product">`;
//     out += `<div class="productText">`;
//     out += `<h2>${cart[key]['name']}</h2>`;
//     out += `<img src="${cart[key]['image']}">`;
//     out += `<p class="price">${cart[key]['price']}руб</p>`
//     out += `<button class="addButton" data-articul="${key}" В корзину</button>`;
//     out += `</div>`;
//     out += `</div>`;
// }

// out += `</div>`;
// document.querySelector('.main').innerHTML = out;

// const data = {};

// document.querySelector('.main').addEventListener('click', event => {
//     if (event.target.classList.contains('addButton')) {
//         let articul = event.target.dataset['articul'];
//         if (data[articul] !== undefined) {
//             data[articul]['count']++;
//         }
//         else {
//             data[articul] = cart[articul];
//             data[articul]['count'] = 1
//         }
//         localStorage.setItem('cart', JSON.stringify(data));
//     }
// })  
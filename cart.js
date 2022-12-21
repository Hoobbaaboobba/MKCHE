let carts = document.querySelectorAll('.addButton');
let removeBtn = document.querySelectorAll('.trash-box')

let products = [
    {
        name: 'Свитер "Опиум"',
        tag: 'pullover11',
        price: 650,
        inCart: 0,
        id: "pulloverOpium"
    },
    {
        name: 'Худи "Душегрейка"',
        tag: 'pullover12',
        price: 1000,
        inCart: 0,
        id: "pulloverSoul"
    },
    {
        name: 'Свитер "Эйфория"',
        tag: 'pullover13',
        price: 500,
        inCart: 0,
        id: "pulloverEuphoria"
    },
    {
        name: 'Свитер "Kiss of Cyprus"',
        tag: 'pullover14',
        price: 450,
        inCart: 0,
        id: "pulloverKissOfCyprus"
    },
    {
        name: 'Свитер "Феерия"',
        tag: 'pullover15',
        price: 200,
        inCart: 0,
        id: "pulloverFeeria"
    },
    {
        name: 'Шляпа "Алина"',
        tag: 'head11',
        price: 300,
        inCart: 0,
        id: "hatAlina"
    },
    {
        name: 'Берет "Крючком"',
        tag: 'head12',
        price: 600,
        inCart: 0,
    },
    {
        name: 'Шляпа "Из Альпаки"',
        tag: 'head13',
        price: 800,
        inCart: 0,
        id: "hatHook"
    },
    {
        name: 'Шляпа "Элиза"',
        tag: 'head14',
        price: 900,
        inCart: 0,
        id: "hatAlpaka"
    },
    {
        name: 'Курс "Шляпа & ушанка"',
        tag: 'head15',
        price: 950,
        inCart: 0,
        id: "hatElisa"
    },
    {
        name: 'Две шляпы по одному МК',
        tag: 'head16',
        price: 450,
        inCart: 0,
        id: "hatEar"
    },
    {
        name: 'Шляпа "Джулия"',
        tag: 'head17',
        price: 150,
        inCart: 0,
    },
    {
        name: 'Мастер-класс "Панама',
        tag: 'head18',
        price: 700,
        inCart: 0,
    },
    {
        name: 'Белая двойка дуэт <br> "Маечка и шазюбль"',
        tag: 'jumper13',
        price: 650,
        inCart: 0,
    },
    {
        name: 'Туника "Эйфория"',
        tag: 'jumper12',
        price: 300,
        inCart: 0,
    },
    {
        name: 'Шазюбль "Мастер-класс"',
        tag: 'jumper11',
        price: 115,
        inCart: 0,
    },
    {
        name: 'Маечка "Мастер-класс"',
        tag: 'jumper14',
        price: 150,
        inCart: 0,
    },
]

for (let i = 0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

for (let i = 0; i < removeBtn.length; i++)
{
    removeBtn[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if( productNumbers ) {
        document.querySelector('#count span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers')

    productNumbers = parseInt(productNumbers)

    if ( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#count span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#count span').textContent = 1;
    }

    setItems(product); 
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    let emptyCart = document.getElementById('emptyCart');

    if( cartItems && productContainer) {
        productContainer.innerHTML = '',
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <a class="productLink" href="${item.id}.html">
                <div class="product">
                    <img src="images/${item.tag}.png">
                    <div class="product-pullover">
                        <h4>${item.name}</h4>
                        <h3>${item.price * item.inCart}₽</h3>
                        <h5>Кол-во: ${item.inCart}</h3>
                    </div>
                </div>
            </a>
               `
        });

        productContainer.innerHTML += `
            <div class="total">
                <h3 class="basketTotal">
                    Итого
                </h3>
                <h1>${cartCost}₽</h1>
                <button id="buyButton">Оплатить</button>
            </div>
            <button class="trash-box" onclick="removeItems()"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_27_2)">
                <path d="M19.3342 2.9069H17.7494H14.2753V0H5.72477V2.9069H2.2507H0.665802V4.64562H2.38203L3.54118 20H16.459L17.6182 4.64562H19.3343V2.9069H19.3342ZM7.46349 1.73872H12.5366V2.9069H7.46349V1.73872ZM14.8467 18.2613H5.15355L4.12562 4.64562H5.72477H14.2753H15.8745L14.8467 18.2613Z" fill="black"/>
                <path d="M10.6955 7.61475H9.30457V15.292H10.6955V7.61475Z" fill="black"/>
                <path d="M8.02949 7.61475H6.63852V15.292H8.02949V7.61475Z" fill="black"/>
                <path d="M13.3616 7.61475H11.9706V15.292H13.3616V7.61475Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_27_2">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </button>
            `
        emptyCart.style.display = "none"
        
    }
}

onLoadCartNumbers();
displayCart();
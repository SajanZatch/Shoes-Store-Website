const product = [
    {
        id: 0,
        image: 'images/f-img-1.1.png',
        title: 'Nike Shoes',
        price: 120,
    },
    {
        id: 1,
        image: 'images/f-img-1.2.png',
        title: 'Nike Shoes',
        price: 60,
    },
    {
        id: 2,
        image: 'images/f-img-1.3.png',
        title: 'Nike Shoes',
        price: 230,
    },
    {
        id: 3,
        image: 'images/f-img-1.4.png',
        title: 'Nike Shoes',
        price: 100,
    },
    {
        id: 4,
        image: 'images/f-img-2.1.png',
        title: 'Nike Shoes',
        price: 100,
    },
    {
        id: 5,
        image: 'images/f-img-2.2.png',
        title: 'Nike Shoes',
        price: 100,
    },
    {
        id: 6,
        image: 'images/f-img-2.3.png',
        title: 'Nike Shoes',
        price: 113,
    },
    {
        id: 7,
        image: 'images/f-img-2.4.png',
        title: 'Nike Shoes',
        price: 131,
    },
    {
        id: 8,
        image: 'images/f-img-3.1.png',
        title: 'Nike Shoes',
        price: 104,
    },
    {
        id: 9,
        image: 'images/f-img-3.2.png',
        title: 'Nike Shoes',
        price: 45,
    },
    {
        id: 10,
        image: 'images/f-img-3.3.png',
        title: 'Nike Shoes',
        price: 345,
    },
    {
        id: 11,
        image: 'images/product-1.png',
        title: 'Nike Shoes',
        price: 532,
        
        
    },
    {
        id: 12,
        image: 'images/product-2.png',
        title: 'Nike Shoes',
        price: 230,
    },
    {
        id: 13,
        image: 'images/product-3.png',
        title: 'Nike Shoes',
        price: 100,
    }
];
const catagories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = catagories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>    
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')    

// ----------------cart ---------------------

var cart =[];

function addtocart(a){
    cart.push({...catagories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0, total =0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartitem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML= "$ "+0+".00";
    }
    else{
        document.getElementById("cartitem").innerHTML=cart.map((items)=>
        {
            var {image,title,price}= items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class= 'row-img'>
                     <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick ='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}
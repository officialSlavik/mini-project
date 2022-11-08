let slider = document.getElementById('slider')
let indeximg=0
let sliderpx=[
    'p1.png',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p5.jpg',
    'p6.jpg',
    'p7.jpg',
    'p8.jpg',
    'p9.jpg',
    'p10.jpg',
    'p11.jpg',
    'p12.jpg',
    'p13.jpg',
    'p14.jpg',
]
let greatimgslide = document.createElement('img')
setInterval(function(){
indeximg++

greatimgslide.setAttribute('src',sliderpx[indeximg])
if(indeximg > sliderpx.length-2){
    indeximg=0
}
slider.append(greatimgslide)

},1000)
////////////////////////////up for slider////////////////////////////////////////
let product = [
    {name:'apple' , price:784,id:1,pc:sliderpx[0],tedad:35},
    {name:'apple 11 pro' , price:120,id:2,pc:sliderpx[1],tedad:25},
    {name:'sumsong' , price:120,id:3,pc:sliderpx[2],tedad:15},
    {name:'sumsong A12' , price:1745,id:4,pc:sliderpx[3],tedad:45},
    {name:'apple 7' , price:1234,id:5,pc:sliderpx[4],tedad:14},
    {name:'apple 21 ' , price:4780,id:6,pc:sliderpx[5],tedad:58},
    {name:'xiomi' , price:1245,id:7,pc:sliderpx[6],tedad:7},
    {name:'redimi' , price:5260,id:8,pc:sliderpx[7],tedad:6},
    {name:'soni' , price:8000,id:9,pc:sliderpx[8],tedad:6},
    {name:'apple 5' , price:850,id:10,pc:sliderpx[9],tedad:7},
    {name:'apple 9' , price:1200,id:11,pc:sliderpx[10],tedad:8},
    {name:'sumsong A78' , price:580,id:12,pc:sliderpx[11],tedad:10},
    {name:'redmi' , price:160,id:13,pc:sliderpx[12],tedad:3},
    {name:'sony' , price:1560,id:14,pc:sliderpx[13],tedad:6}
]
let pdiv= document.getElementById('product-div')
let cardshop = []
product.forEach(function(product){
let divprodcut = document.createElement('div')
divprodcut.setAttribute('id' ,'product')
let imgdiv = document.createElement('img')
imgdiv.setAttribute('src' , product.pc)
let name = document.createElement('h2')
name.innerHTML="name: "+product.name
let price = document.createElement('h2')
price.innerHTML = " price: $"+ product.price
let tedad = document.createElement('h2')
tedad.innerHTML = document.createElement('h2')
tedad.innerHTML = 'tedad: ' + product.tedad
let button = document.createElement('button')
button.innerHTML = "add"
button.addEventListener('click', function(){
    addcard(product.id)
})
divprodcut.append(imgdiv,name,price,tedad,button)
pdiv.append(divprodcut)
})








function addcard(id){
let addcard = product.find(function(index){
    return id == index.id
})
let some = cardshop.some(function(some){
    return id == some.id
})
if(some == false){
    cardshop.push(addcard)

}
cardshop.forEach(function(add){


})
}
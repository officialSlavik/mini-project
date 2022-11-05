let books = [
    {writer:"sadegh hedaiat" , nameBook:"گفتو گو با صادق هدایت" , price:14 , id:0 , taghfif:"5%", img:"p1.jpg"},
    {writer:"sadegh hedaiat" , nameBook:"بوف کور" , price:7 , id:1 , taghfif:"2%", img:"p2.jpg"},
    {writer:"sadegh hedaiat" , nameBook:"مجموع داسنتانها" , price:3 , id:2 , taghfif:"3%", img:"p3.jpg"},
    {writer:"sadegh hedaiat" , nameBook:"صورتک ها" , price:18 , id:3 , taghfif:"8%", img:"p4.jpg"},
    {writer:"sadegh hedaiat" , nameBook:"خودکشی صادق هدایت" , price:5 , id:4 , taghfif:"13%", img:"p5.jpg"},
    {writer:"sadegh hedaiat" , nameBook:"حاجی اقا" , price:10 , id:5 , taghfif:"8%", img:"p6.jpg"},
    {writer:"sadegh hedaiat" , nameBook:"ترانه های خیام" , price:7 , id:6 , taghfif:"12%", img:"p7.jpg"},
    {writer:"sadegh hedaiat" , nameBook:"دیوار" , price:17 , id:7 , taghfif:"10%", img:"p8.jpg"},
]
let card =[

]
let home = document.getElementById('cardhome')
const productAdd = document.getElementById('product-add')
books.forEach(function(index){
    productAdd.insertAdjacentHTML('afterbegin' , '<div id ="product"> '+
    
    '<img src="'+ index.img+'"></img>'+
    '<h3>'+index.nameBook+'</h3>'+
    '<h3>'+index.writer+'</h3>'+
    '<h3>' +'$'+index.price+'</h3>'+
    '<button onclick="addcard('+ index.id+')">clcik</button>' +

    
    '</div>')
})
function addcard(l){
    let som1 = card.some(function(index){
        return index.name == books[l].nameBook
    })
let find = card.findIndex(function(index){

    return   index.name == books[l].nameBook
})
let productcard;
    if(som1 == false){
       
             productcard = {tedad : 0,name:books[l].nameBook , img:books[l].img , price:books[l].price , writer:books[l].writer , taghfif:books[l].taghfif,allprice:0}
            card.push(productcard)
            console.log(card);
 home.insertAdjacentHTML('afterbegin' , '<div id="product-home">'+
 '<img src = "'+productcard.img +'"></img>'+
 '<h2>'+productcard.name+'</h2>'+
 '<h2>'+productcard.taghfif+'</h2>'+
 '<h2>'+productcard.writer+'</h2>'+
 '<h2 >'+productcard.tedad+'</h2>'+
 
 
 
 
 '</div>')
    }
    else if(som1 == true){
      
card[find].tedad++
productcard.allprice = card[find].tedad * card[find].price
   }
      
    }






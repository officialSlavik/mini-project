let productadd = document.getElementById('product')
let card = document.getElementById('card')
let cardproduct=[]
let prodcut = [
    {name:'apple' , price:50,mojodi:5,id:1,tedadsefaresh:1},
    {name:'apple1' , price:90,mojodi:6,id:2,tedadsefaresh:1},
    {name:'apple2' , price:70,mojodi:4,id:3,tedadsefaresh:1},
    {name:'apple3' , price:60,mojodi:3,id:4,tedadsefaresh:1},
    {name:'apple4' , price:40,mojodi:7,id:5,tedadsefaresh:1},
    {name:'apple5' , price:30,mojodi:8,id:6,tedadsefaresh:1},
    {name:'apple6' , price:20,mojodi:2,id:7,tedadsefaresh:1},
]
prodcut.forEach(function(a){
  productadd.insertAdjacentHTML('beforeend','<div id="product-add">'+
  '<img src="88405785.webp" alt="">'+
  '<p id="name">'+a.name+'</p>'+
  '<p id="price">$'+a.price+'</p>'+
  '<p id="price">'+a.mojodi+'</p>'+
  '<button id="add" onclick="add('+a.id+')"> add to card</button>'+
  '<a href ="file:///C:/Users/slavik/Desktop/css/product.html?id='+a.id+' "id="add">Show More</a>'+  
  '</div>')
})
function add(id){
  let find = prodcut.find(function(index){
    return id == index.id
  })
  let istrue = cardproduct.some(function(how){
    return how.name == find.name
  })
  if(!istrue){
    let cardpush = { name:find.name,price:find.price,tedadsefaresh:1}
    cardproduct.push(cardpush)

    let div  =document.createElement('div')
    div.setAttribute('id' , 'product-card')
    let img = document.createElement('img')
    let name = document.createElement('p')
    let price = document.createElement('p')
    let tedad = document.createElement('p')
    let button = document.createElement('button')
    name.innerHTML=cardpush.name
    img.setAttribute('src' , '88405785.webp')
    setInterval(function(){
price.innerHTML = "$"+cardpush.price * cardpush.tedadsefaresh
tedad.innerHTML = cardpush.tedadsefaresh
    },1)
    button.setAttribute('id' , 'del')
    button.innerHTML = 'delet'
    div.append(img,name,price,tedad,button)
    card.append(div)
    button.addEventListener('click' , ()=>{
      cardpush.tedadsefaresh--
      if(cardpush.tedadsefaresh == 0){
        let findindex = cardproduct.findIndex(function(index1){
          return index1.name == cardpush.name 
        })
        cardproduct.splice(findindex,1)
        div.style.display='none'
      }
    })

}
else{
  
let findindex = cardproduct.findIndex(function(index1){
  return index1.name == find.name 
})
cardproduct[findindex].tedadsefaresh++
console.log(cardproduct);

}

}

let menu = document.getElementById('responsive-menu')
let f = document.getElementById('f')
let imgSlid=document.getElementById('imgslid')
let slider = document.getElementById('slider')
let divAsli = document.getElementById('product-asli')
let ccard = document.getElementById('aliadd')
let send = document.getElementById('send')
let price = document.getElementById('price')
let off = document.getElementById('off')
let darsad = 0 ; 
let t = document.getElementById('t')
let cardadd=[
]
let i = 0;
f.addEventListener('click' , ()=>{
    f.classList.toggle("change")
if(f.getAttribute('class') == "container"){
menu.style.display="none"
}
else{
    menu.style.display="grid"
}
})
let indexSlid=0
let sliderpc=[
    "p1.png",
    "p2.jpg",
    "p3.jpg",
    "p4.jpg",
    "p5.jpg",
    "p6.jpg",
    "p7.jpg",
    "p8.jpg",
    "p9.jpg",
    "p10.jpg",
    "p11.jpg",
    "p12.jpg",
    "p13.jpg",
    "p14.jpg",
    
  
]
setInterval(function(){
indexSlid++
imgSlid.setAttribute('src' , sliderpc[indexSlid])
if(indexSlid > 12){
    indexSlid=0
}
},1000)
let product = [
    {name:'apple 8' , price:1140, mojodi:7, pc:sliderpc[0],mm:7},
    {name:'nokia' , price:900 , mojodi:5, pc:sliderpc[1],mm:5},
    {name:'suny' , price:800 , mojodi:6, pc:sliderpc[2],mm:6},
    {name:'samsung A12' , price:500 , mojodi:4, pc:sliderpc[3],mm:4},
    {name:'samsung' , price:100 , mojodi:0, pc:sliderpc[4],mm:0},
    {name:'xiomi pro' , price:250 , mojodi:2, pc:sliderpc[5],mm:2},
    {name:'xiomi' , price:900 , mojodi:0, pc:sliderpc[6],mm:0},
    {name:'apple pro u' , price:5000 , mojodi:0, pc:sliderpc[7],mm:0},
    {name:'apple pro 7' , price:6000 , mojodi:3, pc:sliderpc[8],mm:3},
    {name:'apple pro 10' , price:12000 , mojodi:1, pc:sliderpc[9],mm:1},
    {name:'apple pro 11' , price:902 , mojodi:5, pc:sliderpc[10],mm:5},
    {name:"manitor" , price:4500,mojodi:4,pc:"p14.jpg" ,mm:4}
]

product.forEach(function(index){



    let div = document.createElement('div')
div.setAttribute('id' , 'product')
let img = document.createElement('img')
img.setAttribute('src' , index.pc)
let h1 = document.createElement('h2')
h1.innerHTML="name: " +index.name
let h2 = document.createElement('h2')
let mojodi = document.createElement('h3')
h2.innerHTML = "price: $"  + index.price
let button = document.createElement('button')
button.innerHTML="add to card"
div.append(img,h1,h2,mojodi,button)
divAsli.appendChild(div)
if(index.mojodi == 0){
    mojodi.innerHTML="mojodi: "+index.mojodi
mojodi.style.color="red"
}
else{
    mojodi.innerHTML="mojodi: "+index.mojodi
mojodi.style.color="green"
button.addEventListener('click' , ()=>{
    index.mojodi--
    index.mm--
    mojodi.innerHTML="mojodi: "+index.mojodi
    if(index.mojodi == 0){

        mojodi.innerHTML="mojodi: "+index.mojodi
        mojodi.style.color="red"
        mojodi = 0

    }

    let find = cardadd.some(function(w){
        return w.name == index.name
    })
    if(find == true){
        cardadd.some(function(o){
     if(o.name == index.name&& index.mm >-1){
        o.total++
        
     }
   
   
     
    
            
        })


    }
    else{
        let productadd ={name:index.name,price:index.price,img:index.pc ,total:1,pp:index.mm}
    cardadd.push(productadd) 
    let divadd = document.createElement('div')
    divadd.setAttribute('id' , 'card')
    let imgcard = document.createElement('img')
    imgcard.setAttribute('src' , index.pc)
    let namecard = document.createElement('h2')
    namecard.innerHTML=index.name
let allprice = document.createElement('h2')
allprice.innerHTML=index.price
let total = document.createElement('h2')
   
    total.innerHTML=productadd.total


    divadd.append(imgcard , namecard,allprice,total)
    ccard.append(divadd)

  
 setInterval(function(){
    total.innerHTML=productadd.total
    allprice.innerHTML=index.price * productadd.total

},1)


}


 
if(index.mm >-1){
    i += index.price
    price.innerHTML="price:$"+ i
}


if(i > 5000){
    send.innerHTML="price send: free"
    send.style.color="green"
}
else{
    send.innerHTML="price send:$500"
    send.style.color="red"

 
}



})
}


}) 
 send.innerHTML="price send:$500"
send.style.color="red"


off.addEventListener('click' , ()=>{

    let oof = [20,50,60,90,150,47]
    let r = Math.random() * 5;
    r = Math.floor(r);
    if(darsad == 0){
darsad = oof[r]


    }
    else{
        alert('hast')
    }
    })
    t.addEventListener('click' , ()=>{
        if(darsad !=0){
            let eamal = i - darsad
            price.innerHTML ="price :" + eamal


        }
        else{
            alert('please click click for off')
        }
    })

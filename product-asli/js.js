let productinf=[
    {name:'sadegh hedaiat',bookname:'zamiar',price:8,id:2,pc:'p2.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'zendebegor',price:5,id:3,pc:'p3.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'vagh vagh',price:47,id:4,pc:'p4.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'traneh',price:36,id:5,pc:'p5.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'dastan ha',price:12,id:6,pc:'p6.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'karavan',price:10,id:7,pc:'p7.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'alavieh',price:90,id:8,pc:'p8.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'iran',price:60,id:9,pc:'p9.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'germany',price:40,id:10,pc:'p10.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'boofkoor',price:40,id:11,pc:'p11.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'boofkoor',price:30,id:12,pc:'p12.jpg',tedad:0},
    {name:'sadegh hedaiat',bookname:'boofkoor',price:10,id:13,pc:'p13.jpg',tedad:0},
]
let card = []
let divcard = document.getElementById('responsiv-card')
let showp=document.getElementById('showp')
let pfrangment= document.createDocumentFragment()
productinf.forEach(function(product){
    let div = document.createElement('div')
    let button = document.createElement('button')
    let price = document.createElement('h2')
    let name = document.createElement('h2')
    let nameb = document.createElement('h2')
    let img = document.createElement('img')
    div.setAttribute('id' ,'product-information')
    price.classList.add('center')
    name.classList.add('center')
    nameb.classList.add('center')
    button.setAttribute('id' , 'add')
img.setAttribute('src',product.pc)
name.innerHTML=product.name
nameb.innerHTML=product.bookname
price.innerHTML=product.price
button.innerHTML='add to card'
button.setAttribute('class' , 'center')
    div.append(img,name,nameb,price,button)
    pfrangment.append(div)
    button.addEventListener('click',()=>{
        let cardadd = product
        let some = card.some(function(some){
            return some == product
        })

if(some == false){
    cardadd.tedad++
    card.push(cardadd)
    let divp = document.createElement('div')
    let imgp = document.createElement('img')
    let tedadp = document.createElement('h2')
    let namebp = document.createElement('h2')
    let namep = document.createElement('h2')
    let buttonp = document.createElement('button')
    let pricep = document.createElement('h2')
    divp.setAttribute('id' , 'card')
    imgp.setAttribute('src', product.pc)
    setInterval(function(){
        tedadp.innerHTML = product.tedad

        pricep.innerHTML= "$"+product.price * product.tedad
    },1)
    namebp.innerHTML=product.bookname
    namep.innerHTML=product.name
    buttonp.innerHTML='delete'
    buttonp.setAttribute('id','deletecard')
buttonp.addEventListener('click',()=>{
    if(cardadd.tedad> 1){
cardadd.tedad--
    }
    else{
        let find = card.findIndex(function(index1){
            return index1 == product

        })
        card.splice(find,1)
        cardadd.tedad=0
divp.style.display='none'        
    }
})
divp.append(imgp,namep,namebp,pricep,tedadp,buttonp)
divcard.append(divp)


}
if(some == true){
cardadd.tedad++
}

    })
})
showp.append(pfrangment)
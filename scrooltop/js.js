let scrol = document.getElementById('scrool')
let body = document.body
window.addEventListener('scroll',()=>{
    let scrooltop = window.scrollY
let documentheight = document.body.clientHeight 
let windowheitgh = window.innerHeight
let scroltop = scrooltop / (documentheight - windowheitgh)
let rond = Math.round(scroltop*100)

scrol.style.width=rond +"%"
})
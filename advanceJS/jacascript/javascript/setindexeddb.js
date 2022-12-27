const name = document.getElementById("name")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const data = indexedDB.open("schools" , 2)
let db = null

data.onsuccess=()=>{
    db = data.result
 
}


data.onupgradeneeded=()=>{
    db = data.result
    if(!db.objectStoreNames.contains("user")){
         db.createObjectStore("user",{keyPath:"id"})

    }
}


function get(){
    db = data.result

    let tx = db.transaction("user" , "readwrite")
    let store = tx.objectStore('user')
    let geteuser = store.getAll()
    geteuser.addEventListener('success' , (e)=>{
        let user  = e.target.result
        user.forEach(element => {
            console.log(element.name)
        });
       

    })

}
setTimeout(()=>{


db = data.result
submit.addEventListener('click' , ()=>{
    let user = {id:Math.floor(Math.random()*10000) , name:name.value,password:password.value}
    let tx = db.transaction("user" , "readwrite")
    let store = tx.objectStore('user')
    store.add(user)
})






get()
},100)





export {get }
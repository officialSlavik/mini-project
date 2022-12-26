const name = document.getElementById('name')
const password = document.getElementById('password')
const submit = document.getElementById('submit')
let t = document.getElementById('t')
let db =null
let database = indexedDB.open('schools' , 1)

database.onupgradeneeded = ()=>{
    db = database.result
if(!db.objectStoreNames.contains("user")){
    db.createObjectStore("user" , {keyPath:"id"})
}


}
database.onsuccess=()=>{
    db = database.result
    getuser()
   
}
submit.addEventListener('click' , ()=>{
    db = database.result
    let user = {id:Math.floor(Math.random() *1000) ,  name:name.value , password:password.value}
    let transaction = db.transaction("user" , "readwrite")
    let store = transaction.objectStore("user")
    store.add(user)
    getuser()
})

function getuser (){
    let transaction = db.transaction("user" , "readwrite")
    let store = transaction.objectStore("user")
    let request = store.getAll()
    request.addEventListener('success' , (e)=>{
        t.innerHTML = `
        <tr>
        <th>id</th>
        <th>name</th>
        <th>password</th>
        
            </tr>`
        let  users = e.target.result
        users.map(user =>{
            t.innerHTML += `    <tr>
            <th>${user.id}</th>
            <th>${user.name}</th>
            <th>${user.password}</th>
            
                </tr>`
        })

    })

}
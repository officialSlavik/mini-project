



const user = [
    {name:"Slavik" , id:5},
    {name:"Amir" , id:16},
]




function islogin(id){
    let islogin = user.some(user=> user.id === id)
    return islogin

}





export{islogin , user}
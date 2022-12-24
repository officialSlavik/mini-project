import { islogin , user } from "./islogin.js";


function sighnup(){
    let name = prompt('enter your name')
    let useradd = {
        id: Math.floor(Math.random()*100),
        name:name
    }

user.push(useradd)
console.log(user)

}
export{sighnup}
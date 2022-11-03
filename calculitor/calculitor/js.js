let div = document.getElementById('asli')
let calculitor = ["DEL",1,2,3,4,5,6,7,8,9,"+" , "-","*","/","=", 0]
let input = document.getElementById('input')
let plus = 0;
let taghsim = 0;
let menha = 0;
let zarb = 0;
calculitor.forEach(function(index){
let li = document.createElement('li')
li.innerHTML = index
div.append(li)
li.addEventListener('click' , ()=>{

if(index != '+'&&index != '*'&&index != '-'&&index != '='&& index !="/" && index !="DEL"){
input.value += index
}
///////////////////+/////////////////////////////////////
else if (index == '+'){
 
plus = input.value
input.value=""

}
else if (index == "=" && plus != 0){

    input.value = +input.value + +plus
}

///////////////////////////////////////////////////////

else if (index == '-'){
 
    menha = input.value
    input.value=""
    
    }
    else if (index == "=" && menha != 0){
    
        input.value = +menha - +input.value
    }
    else if (index == '*'){
 
        zarb= input.value
        input.value=""
        
        }
        else if (index == "=" && zarb != 0){
        
            input.value = +input.value * +zarb
        }


else if (index == '/'){
 
            taghsim = input.value
            input.value=""
            
            }
 else if (index == "=" && taghsim != 0){
            
                input.value =  taghsim / +input.value 
            }

            else if (index == "DEL"){
                input.value=""
                zarb = 0
                taghsim = 0
                menha=0
                plus = 0
            }



})


})

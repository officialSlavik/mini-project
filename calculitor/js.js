let div = document.getElementById('asli')
let calculitor = [7,8,9,4,5,6,1,2,3,"+" ,0, "-","*","/","=","DEL"]
let input = document.getElementById('input')
let plus = 0;
let li;
let taghsim = 0;
let menha = 0;
let zarb = 0;
calculitor.forEach(function(index){
li = document.createElement('li')
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
    zarb = 0
    taghsim = 0
    menha=0
    plus = 0
}

///////////////////////////////////////////////////////

else if (index == '-'){
 
    menha = input.value
    input.value=""
    
    }
    else if (index == "=" && menha != 0){
    
        input.value = +menha - +input.value
        zarb = 0
        taghsim = 0
        menha=0
        plus = 0
    }
    else if (index == '*'){
 
        zarb= input.value
        input.value=""
        
        }
        else if (index == "=" && zarb != 0){
        
            input.value = +input.value * +zarb
            zarb = 0
            taghsim = 0
            menha=0
            plus = 0
        }


else if (index == '/'){
 
            taghsim = input.value
            input.value=""
            
            }
 else if (index == "=" && taghsim != 0){
            
                input.value =  taghsim / +input.value 
                zarb = 0
                taghsim = 0
                menha=0
                plus = 0
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
function man(event){

    if(event.key == 0 ||event.key ==1||event.key ==2 ||event.key ==3 ||event.key ==4 ||event.key ==5 ||event.key ==6 ||event.key ==7 ||event.key ==8 ||event.key ==9  )
    input.value += event.key
    
    ////////////////////////////////////////////////////////////
    else if (event.key == "+"){
        plus = input.value
input.value=""
    }
    else if (event.key == 'Enter' && plus!=0){
        input.value = +plus + +input.value
        zarb = 0
        taghsim = 0
        menha=0
        plus = 0
    }
    /////////////////////////////////////////////////////////
    else if (event.key == "*"){
        zarb= input.value
        input.value=""
    }
    else if (event.key == 'Enter' && zarb!=0){
        input.value = +zarb * +input.value
        zarb = 0
        taghsim = 0
        menha=0
        plus = 0
    }
    ///////////////////////////////////////////
    else if (event.key == "-"){
        menha = input.value
        input.value=""
    }
    else if (event.key == 'Enter'&& menha!=0){
        input.value = +menha - +input.value
        zarb = 0
        taghsim = 0
        menha=0
        plus = 0
    }
    //////////////////////////////////////////////////////
    else if (event.key == "/"){
        taghsim = input.value
        input.value=""
    }
    else if (event.key == 'Enter' && taghsim!=0){
        input.value = +taghsim / +input.value
        zarb = 0
        taghsim = 0
        menha=0
        plus = 0
    }
    else if (event.key == 'Backspace'){
    alert('to soon')
    }
    else if (event.key == 'Delete'){
        input.value=""
                zarb = 0
                taghsim = 0
                menha=0
                plus = 0
    }
    
}

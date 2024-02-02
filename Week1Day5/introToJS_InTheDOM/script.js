function Hello (){
    alert('hello')
    var x = 5 
    
    console.log(x)

}
function thisInTheDom(element){
    // console.log(param)
    console.log(element.innerHTML)
    element.innerHTML = "Hello"
    
    
}


var body = document.querySelector("body")

function turnOff(element) {
    console.log(element.innerText)
    // element.innerText = "Off";
    if(element.innerHTML === "ON"){
        element.innerText = "Off"
        element.style.backgroundColor="red"
        body.style.backgroundColor="black"
    }else {
        element.innerText = "ON"
        element.style.backgroundColor="green"
    }
}
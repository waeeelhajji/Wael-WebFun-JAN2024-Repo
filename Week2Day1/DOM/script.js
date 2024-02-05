console.log("Hello from JS File")

var firsth1 = document.querySelector("h1")
var secondeH1 = document.querySelector(".secondeH1 p")
// console.log(firsth1)
secondeH1.innerHTML="Hello Againand Again"
console.log(secondeH1)
var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "top-20-small-dog-breeds.jpg";
    petImg.alt = "dog image";
    firsth1.classList.add("backGroudStyle")
    
}
function chooseLunch(element) {
    alert("You picked " + element.value);
}


var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}
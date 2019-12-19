var color1= document.querySelector('.color1');
var color2= document.querySelector('.color2');
var color= document.querySelector('h3');
var body= document.getElementById('dd');

console.log(color1.value);

function selectcolor(){
    console.log(color1.value);
    body.style.background="linear-gradient(to right,"+color1.value +","+color2.value+")";
    color.textContent=body.style.background+ ';'; 
}
color1.addEventListener('input',selectcolor);
color2.addEventListener('input',selectcolor);
var topbtt=document.getElementById('btt'),
formdiv = document.getElementById('form-col'),
formdive = document.getElementById('form-col1'),
scroll= scroll(top);
window.onscroll= function(){
    scrolldown();  
}

function scrolldown(){
    if(document.body.scrollTop > 20||document.documentElement.scrollTop > 20){
        topbtt.style.display='block';
    }else{
        topbtt.style.display='none';
    }
}
function totop(){
    document.documentElement.scrollTo(top);
}
function showSignupform() {
    formdiv.style.display='block';
}
function HideSignupForm() {
    formdiv.style.display='none';
    
}
function showSignform() {
    formdive.style.display='block';
}
function HideSignForm() {
    formdive.style.display='none';
    
}



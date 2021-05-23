//Getting the objects 
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

//Creation of function that will add element when button is clicked

btn.addEventListener('click',function() {
    let txt = input.value;
    if(txt === ""){
        alert('You must write something!')
    }
    else{
        let li =  document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        input.value='';
    }
})

//Function to mark down the down subject
list.addEventListener('click',function(e) {
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');
    }
})
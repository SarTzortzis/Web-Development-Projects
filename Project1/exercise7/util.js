
// changes the h4 on the top of index-page
window.onload = function dependsOnDay(){
    // POPUP ARGS
    var popup = document.querySelector('#popup');
    popup.classList.add('active');
    
    //DATE
    var welcome = document.querySelector('#welcome');
    var d = new Date();
    var day=d.getDay();
    
    if (day==1){
        welcome.innerText= "It's still Monday... stay strong!"
    }
    else if (day==2){
        welcome.innerText= "Tuesday? We got some more days until the Weekend"
    }
    else if (day==3){
        welcome.innerText= "We are in the half of the week!"
    }
    else if (day==4){
        welcome.innerText= "We are getting close to the weekend!"
    }
    else if (day==5){
        welcome.innerText= "Weekend is coming!!"
    }
    else if (day==6){
        welcome.innerText= "Have a nice Saturday!"
    }
    else {
        welcome.innerText= "Have a nice Sunday!"
    } 
}
// closes the disclaimer popup
function closePopup(){
    var popup = document.querySelector('#popup');
    popup.classList.remove('active');
};

// change the theme of the website (It is located on the top-right corner of index page)
var changed=0;
function changeTheme(){
    var container_cards = document.querySelector('#container-cards');
    var index_container = document.querySelector('#index-container');
    var card = document.querySelector('#card');
    

    if (changed==0){
        container_cards.style.background="#fff";
        index_container.style.background="#fff";
        welcome.style.color="#333";
        card.style.border="1px solid #222";
        changed=1;
    }
    else{
        container_cards.style.background="#222";
        index_container.style.background="#222";
        welcome.style.color="#fff";
        card.style.border="none";
        changed=0;
    }
}

// change a photo, it is located in "webDevelopment" Card on index page (small eye icon)
var changedPhoto=0;
function changePhoto(){
    var wdPhoto = document.getElementById('wdPhoto');
    if (changedPhoto==0){
        wdPhoto.src="../images/webdev.png";
        changedPhoto=1;
    }
    else{
        wdPhoto.src="../images/wdCard.png";
        changedPhoto=0;
    }
}
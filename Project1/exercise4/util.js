window.onload = function toggle(){
    var popup = document.getElementById('popup');
    popup.classList.add('active');
}

function closePopup(){
    console.log("test");
    var popup = document.getElementById('popup');
    popup.classList.remove('active');
};
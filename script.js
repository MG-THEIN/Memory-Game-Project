

var catImg = document.getElementById('cat');
var crocodileImg = document.getElementById('crocodile');
var dog1Img  = document.getElementById('dog1');
var dinosourImg = document.getElementById('dinosour');
var dog2Img = document.getElementById('dog2');
var lionImg = document.getElementById('lion');

var gridEl = document.querySelector('.grid');

gridEl.addEventListener('click', showFun);

var images = [catImg, crocodileImg, dog1Img, dinosourImg, dog2Img, lionImg];


function showFun(e){
    e.preventDefault();
    const item = e.target;
    const itemClass = item.classList[0]
    switch (itemClass){
        case "cat":
            catImg.src = "images/cat.jpg";
        
            if ((crocodileImg.getAttribute('src') == "images/pickme.jpeg") && 
                (dog1Img.getAttribute('src') == "images/pickme.jpeg") &&
                (dinosourImg.getAttribute('src') == "images/pickme.jpeg") &&
                (dog2Img.getAttribute('src') == "images/pickme.jpeg") &&
                (lionImg.getAttribute('src') == "images/pickme.jpeg")){
                    return;
                } else {
                    alert("You Lose");
                    // Restart
                    gridEl.classList.add('restart');
                    gridEl.addEventListener('transitionend', function(){
                        catImg.src = "images/pickme.jpeg";
                        crocodileImg.src = "images/pickme.jpeg";
                        dog1Img.src = "images/pickme.jpeg";
                        dinosourImg.src = "images/pickme.jpeg";
                        dog2Img.src = "images/pickme.jpeg";
                        lionImg.src = "images/pickme.jpeg";
                    });
                }
            break;

        case "crocodile":
            crocodileImg.src = "images/crocodile.jpg";

            if ((catImg.getAttribute('src') == "images/pickme.jpeg") && 
                (dog1Img.getAttribute('src') == "images/pickme.jpeg") &&
                (dinosourImg.getAttribute('src') == "images/pickme.jpeg") &&
                (dog2Img.getAttribute('src') == "images/pickme.jpeg") &&
                (lionImg.getAttribute('src') == "images/pickme.jpeg")){
                    return;
                } else {
                    alert("You Lose");
                }
            break;

        case "dog1":
            dog1Img.src = "images/dog.jpg";

            if (dog2Img.getAttribute('src') == "images/dog.jpg"){
                alert('You Won');
            }
            else if ((catImg.getAttribute('src') == "images/pickme.jpeg") && 
                (crocodileImg.getAttribute('src') == "images/pickme.jpeg") &&
                (dinosourImg.getAttribute('src') == "images/pickme.jpeg") &&
                (lionImg.getAttribute('src') == "images/pickme.jpeg")){
                    return;
                } else {
                    alert("You Lose");
                }
            break;

        case "dinosour":
            dinosourImg.src = "images/dinosour.jpeg";

            if ((catImg.getAttribute('src') == "images/pickme.jpeg") && 
                (crocodileImg.getAttribute('src') == "images/pickme.jpeg") &&
                (dog1Img.getAttribute('src') == "images/pickme.jpeg") &&
                (dog2Img.getAttribute('src') == "images/pickme.jpeg") &&
                (lionImg.getAttribute('src') == "images/pickme.jpeg")){
                    return;
                } else {
                    alert("You Lose");
                }
            break;

        case "dog2":
            dog2Img.src = "images/dog.jpg";

            if (dog1Img.getAttribute('src') == "images/dog.jpg"){
                alert('You Won');
            }
            else if ((catImg.getAttribute('src') == "images/pickme.jpeg") && 
                (crocodileImg.getAttribute('src') == "images/pickme.jpeg") &&
                (dinosourImg.getAttribute('src') == "images/pickme.jpeg") &&
                (lionImg.getAttribute('src') == "images/pickme.jpeg")){
                    return;
                } else {
                    alert("You Lose");
                }
            break;

        case "lion":
            lionImg.src = "images/lion.jpg";

            if ((catImg.getAttribute('src') == "images/pickme.jpeg") && 
                (crocodileImg.getAttribute('src') == "images/pickme.jpeg") &&
                (dog1Img.getAttribute('src') == "images/pickme.jpeg") &&
                (dinosourImg.getAttribute('src') == "images/pickme.jpeg") &&
                (dog2Img.getAttribute('src') == "images/pickme.jpeg")){
                    return;
                } else {
                    alert("You Lose");
                }
            break;

        
        default:
            return;
    }
}


/*
function showFun(e){
    e.preventDefault();
    const item = e.target;
    if (item.classList == 'cat') {
        catImg.src = "images/cat.jpg";
    } else if (item.classList == 'crocodile') {
        crocodileImg.src = "images/crocodile.jpg";
    } else if (item.classList == 'dog1') {
        dog1Img.src = "images/dog.jpg";
        if (dog2Img.getAttribute('src') == 'images/dog.jpg') {
            alert('You Won');
        } else if (dog2Img.getAttribute('src') == 'images/pickme.jpeg') return
        else alert('You Lose');
    } else if (item.classList == 'dinosour') {
        dinosourImg.src = "images/dinosour.jpeg";
    } else if (item.classList == 'dog2') {
        dog2Img.src = "images/dog.jpg";
    } else if (item.classList == 'lion') {
        lionImg.src = "images/lion.jpg";
    } else return

} */

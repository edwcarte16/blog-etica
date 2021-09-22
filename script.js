var boxSlider = document.getElementById('box-slider')
var rowRight = document.getElementById("row-right");
var rowLeft = document.getElementById("row-left");
var cont = 0;
rowRight.addEventListener('click', function(){
    if(cont <= 1){
        cont = cont+1;
    }
    else{
        cont = 0;
    }
    w = cont * -100;
    boxSlider.style.left = w+'vw';
})

rowLeft.addEventListener('click', function(){
    if(cont == 0){cont = 2}
    else{cont = cont-1;}
    w = cont * -100;
    boxSlider.style.left = w+'vw';
})
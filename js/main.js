    var offset = 0; // смещение от левого края
    var sliderLine= document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function(){
    offset +=1200;
    if(offset>4800) {
        offset=0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.prev').addEventListener('click', function(){
    offset -=1200;
    if(offset<0) {
        offset=4800;
    }
    sliderLine.style.left = -offset + 'px';
});
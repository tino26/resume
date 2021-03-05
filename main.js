function openPage(pageLink) {
    document.getElementById('dispFrame').src=pageLink;
}

function isInViewport(element) {
    const box = document.querySelector(element);
    const rect = box.getBoundingClientRect();

    const isInViewport = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    console.log(isInViewport);
}

function changeColor(buttonId){
    document.getElementById(buttonId).style.color="rgb(255, 136, 0)";
    var buttonsId=["home", "about", "works", "resume", "contact"];
    for(var i=0; i<buttonsId.length; i++){
        if(buttonsId[i]==buttonId){
            continue;
        }else{
            document.getElementById(buttonsId[i]).style.color="rgb(182, 179, 174)";
        }
    }
}

var tabBarH=document.getElementById('tabBar').clientHeight;
var veiwH=window.innerHeight-tabBarH;
function sizeView(){
    document.getElementById('dispFrame').width=window.innerWidth;
    document.getElementById('dispFrame').height=veiwH;
}

//smoothScroll
$(document).ready(function(){
    $('.smoothScroll').on('click', function(event) {
        if(this.hash !==" "){
            event.preventDefault();
            var target=this.hash;
            $('html, body').animate({
                'scrollTop': $(target).offset().top
            }, 800, function(){
                window.location.hash=target;
            });
        }
    });
});


//imgZoom
function zoomInImage(img){
    var modal=document.getElementById('imageModal');
    var modalContent=document.getElementById('zoomImg');
    modal.style.display = "block";
    modalContent.src=document.getElementById(img).src;
}

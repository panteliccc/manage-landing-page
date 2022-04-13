const btt = document.getElementById('btt');
const modal = document.getElementById('modal');
var ind = true;
btt.onclick = function(){
    if(ind == true){
        modal.style.display = 'block';
        btt.removeAttribute('class' , 'fas fa-bars');
        btt.setAttribute('class' , 'fas fa-times');
        ind = false;
    }
    else{
        modal.style.display = 'none';
        btt.removeAttribute('class' , 'fas fa-times');
        btt.setAttribute('class' , 'fas fa-bars');
        ind = true;
    }
}
var index = 0;
card();
function card() {
    var i;
    var card1 = document.getElementsByClassName("card");
    if(window.innerWidth > 745){
        for (i = 0; i < card1.length; i++) {
          card1[i].style.display = "block";
        }
        index++;
        if (index > card1.length) {index = 1}
        card1[index-1].style.display = 'none';  
        setTimeout(card, 2000);
    }
    else{
        for (i = 0; i < card1.length; i++) {
          card1[i].style.display = "none";
        }
        index++;
        if (index > card1.length) {index = 1}
        card1[index-1].style.display = 'block';  
        setTimeout(card, 2000);
    }
}
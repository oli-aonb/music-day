var btn = document.getElementsByClassName("myBtn");
var closeBtn = document.getElementsByClassName("close");


function buttonClick(event) {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = 'block';
}
for (var i = 0; i < btn.length; i++) {
   btn[i].onclick = buttonClick;
}

function closeBtnClick() {
    var id = this.getAttribute('data-modal');
    var modal = document.getElementById(id);
    modal.style.display = 'none';
}

for (var i = 0; i < closeBtn.length; i++) {
  	closeBtn[i].onclick = closeBtnClick;
}

window.onclick = function(event) {
    var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
    if (isModal) {
      event.target.style.display = "none";
    }
  };
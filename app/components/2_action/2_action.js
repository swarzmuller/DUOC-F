var actionInfoBtn = document.querySelectorAll('.action__info');

for (var i = 0; i < actionInfoBtn.length; i++) {
    actionInfoBtn[i].onclick = function () {
        this.classList.toggle('action__info_active');
    }
}

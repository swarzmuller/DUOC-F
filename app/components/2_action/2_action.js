var actionInfoBtn = document.querySelectorAll('.action__info');

actionInfoBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.toggle('action__info_active');
    })
})
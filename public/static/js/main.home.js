!function (a){
    function a() {
        window.onscroll = function (d) {
            var scroll = $(window).scrollToTop()
            document.getElementById('weight-container').style.width(100 + scroll/5)
        }
    }
}(this)
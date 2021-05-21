!function (a){
    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      }
    const zoomElement = document.querySelector(".zoom");
    let zoom = 1;
    const ZOOM_SPEED = 0.1;

    document.addEventListener("wheel", function (e) {
        if(!checkVisible(zoomElement)) return;
        if (e.deltaY > 0) {
            zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`; 
        } else {
            zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
        }
    });
}(this)
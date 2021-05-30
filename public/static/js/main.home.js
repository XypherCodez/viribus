!function (a){
  function b() {
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        const s = document.getElementById('greenRight');
        if(e.isIntersecting){
          s.classList.add('greenRightAnimation');
          return;
        }
        s.classList.remove('greenRightAnimation')
      })
    })
    obs.observe(document.getElementById('greenRight'))
  }
  b(0)
  window.onscroll = function (d) {
    if(!document.getElementById('greenRight').classList.contains('greenRightAnimation'))return;
    else {
      document.getElementById('img-phone-cust').width + 5
    }
  }
}(this)
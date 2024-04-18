function setSize() {
    let vid = document.getElementById('video');
    let w = window.innerWidth, h = window.innerHeight;
    if (true) vid.src='https://www.youtube.com/embed/EyOnl8oRDdA?autoplay=1';
    vid.width=w*1.25;
    vid.height=h*1.25;
    document.body.style.margin=`-${h/10}px 0 0 -${(w/10)-(w/50)}px`;
  }
  addEventListener("resize",setSize);
  addEventListener("scroll",() => { window.scrollTo(0,0); });
  setSize();
  document.getElementById('scriptMain').remove();

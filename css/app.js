const container = document.querySelector('.container');

window.addEventListener('resize', ()=> {
  if (window.innerWidth < 1143) {
    document.querySelector('.delivery').style.height = `${document.querySelector('.podio').clientHeight}px`
  } else {
    document.querySelector('.delivery').style.height = 'initial';
  }
})
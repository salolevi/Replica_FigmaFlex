const container = document.querySelector('.container');

window.addEventListener('resize', ()=> {
  if (document.body.clientWidth <= 1083) {
    document.querySelector('.delivery').style.height = `${document.querySelector('.podio').clientHeight}px`
  } else {
    document.querySelector('.delivery').style.height = 'initial';
  }
})
var requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }
})()
  var layer1 = document.querySelector('.layer-1')
  var layer2 = document.querySelector('.layer-2')
  var layer3 = document.querySelector('.layer-3')
  var layer4 = document.querySelector('.layer-4')
  var scrollContactHero = function scrollContactHero() {
    layer1.style.transform = 'translateY(' + window.pageYOffset * 0.75 + 'px) translateX(-50%)'
    layer2.style.transform = 'translateY(' + window.pageYOffset * 0.5 + 'px) translateX(-50%)'
    layer3.style.transform = 'translateY(' + window.pageYOffset * 0.25 + 'px) translateX(-50%)'  
    //layer4.style.transform = 'translateY(-' + window.pageYOffset * 2 + 'px) translateX(-50%)'  
    requestAnimFrame(scrollContactHero);
  }
  requestAnimFrame(scrollContactHero)


window.addEventListener('load', function() {
  document.querySelector('video').play()
})

















//Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.setAttribute('style', 'opacity: 0;');
  }, 500);
  setTimeout (() => {
    loader.parentNode.removeChild(loader);
    document.body.style.overflow = 'inital';
  },1000);
});

const coinSfx = new sfx('sfx/Mario Coin.wav');
const pipeSfx = new Sfx('sfx/Mario Pipe.wav');
const powerUpSfx = new Sfx('sfx/Mario Powerup.wav');
const container = document.querySelector('.content');
let ninja;

function Sfx(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  document.body.appendChild(this.sound);
  this.play = function() {
    this.play = function(); 
  };

  function Ninjas (name, age, height, color) {
    this.name = name;
    this.age = age; 
    this.height = height;
    this.color = color;

    this.coin = () => {
      //audio 
      coinSfx.play();

Const button = document.querySelector('#btnCoin');

      button.style.setProperty ('background-color', '#2ecc71');
      butoton.style.setPropery ('border-color', '#2ecc71');
      button.style.setProperty('color', 'var(--bg-color)');

      //coin effect 
      const coinImg = document.createElement('img');
      coninImg.setAttribute('src', ímgs/coin.png');




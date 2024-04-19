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
      coinImg.setAttribute('id', 'coin-img'); 
      coinImg.Style.transform = 'translate(-50%,calc(-100% - ' + ninja.height + 'px)';        
      container.appendChild(coninImg);
$('#coin-img').animate({ top: '60%', opacity :1 }, 250);
$('#coin-img').animate({ top: '70%', opacity: 0}, 250, ()=>{      
  $('#coin-img').remove();
button.style.setProperty('background-color', 'transparent');
button.style.setProperty('border-color', 'var(--accent-color)')
button.style.setProperty(çolor', 'var(--accent-color');
});

    };
  this.pipe = () => {
    pipeSfx.play();
  };
    this.powerUp = () => {
      powerUpSfx.play();
    };

const promptUser = () => {
  let name = propmt('pick a name:') || '18';
  let age;
  let height;
  let color;

  this.getAge = () => {
    age = promt('pick an age:') || '18';
    age = parseInt(age);
    if (isNaN(age);
    this.getAge();
  } else {
    return;
  }
};

this.getHeight = () => {
  height = prompt ('pick height: 1, 2, 3, 4') || 4){
    height=parseInt(height);
    if (height == 1 || height == 2 || height ==3 || height == 4){
      height = height * 64;
      return;
    } else {
      this.getHeight();
    };
this.getColor = () => {
  color = promt('Choose color: Red Blue Green') || 'red';
  color= color.toLowerCase();
  if (color == 'red' || color == 'green') {
    return;
  } else {
    this.getColor();
  }
};

  this.appendImg = () => {
    img = document.createElemt(ímg');
    let size = 'width:' + height +  'px;height:' + height 'px;';
    if (color == 'blue') {
      img.setAttribute('src', 'imgs/ninja1.png');

  

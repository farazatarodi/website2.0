// Movement comps
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Pop comps
const title = document.querySelector('.title');
const photo = document.querySelector('.photo img');
const contact = document.querySelector('.contact .button');
const info = document.querySelector('.info h3');
const socials = document.querySelector('.socials');
const degrees = document.querySelector('.degrees');
const text = document.querySelector('.text');

// Rotate comps
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');

// Shadow comps
const title_sh = document.querySelector('.title-sh');
const img_sh = document.querySelector('.img-sh');
const contact_sh = document.querySelector('.contact-sh button');
const info_sh = document.querySelector('.info-sh h3');
const allsocials_sh = document.querySelectorAll('.socials-sh button');
const degrees_sh = document.querySelector('.degrees-sh');
const text_sh = document.querySelector('.text-sh');

//Movement Animation
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 75;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 75;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

  // Rotate
  circle1.style.transform = `rotateZ(-${(xAxis + yAxis) * 20}deg)`;
  circle2.style.transform = `rotateZ(-${(xAxis + yAxis) * 20}deg)`;
  circle3.style.transform = `rotateZ(${(xAxis + yAxis) * 20}deg)`;
});

// Animate in
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';

  let base = 50;
  let offset = 25;

  // Pop Out
  title.style.transform = `translateZ(${base + offset}px)`;
  photo.style.transform = `translateZ(${base}px)`;
  contact.style.transform = `translateZ(${base + offset}px)`;
  info.style.transform = `translateZ(${base + offset}px)`;
  socials.style.transform = `translateZ(${base + offset}px)`;
  degrees.style.transform = `translateZ(${base + offset * 2}px)`;
  text.style.transform = `translateZ(${base + offset * 2}px)`;

  let shVal = 0.35;

  // Add Shadow
  title_sh.style.color = `rgba(0, 0, 0, ${shVal * 3})`;
  img_sh.style.background = `rgba(0, 0, 0, ${shVal * 3})`;
  info_sh.style.color = `rgba(0, 0, 0, ${shVal * 3})`;
  contact_sh.style.background = `rgba(0, 0, 0, ${shVal})`;
  allsocials_sh.forEach((el) => {
    el.style.background = `rgba(0, 0, 0, ${shVal})`;
  });
  degrees_sh.style.color = `rgba(0, 0, 0, ${shVal * 3})`;
  text_sh.style.color = `rgba(0, 0, 0, ${shVal * 3})`;
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // Pop Back
  title.style.transform = 'translateZ(0px)';
  photo.style.transform = 'translateZ(0px)';
  contact.style.transform = 'translateZ(0px)';
  info.style.transform = 'translateZ(0px)';
  socials.style.transform = 'translateZ(0px)';
  degrees.style.transform = 'translateZ(0px)';
  text.style.transform = 'translateZ(0px)';

  // Rotate back
  circle1.style.transform = 'rotateZ(0deg)';
  circle2.style.transform = 'rotateZ(0deg)';
  circle3.style.transform = 'rotateZ(0deg)';

  // Remove Shadow
  title_sh.style.color = 'rgba(0, 0, 0, 0)';
  img_sh.style.background = 'rgba(0, 0, 0, 0)';
  info_sh.style.color = 'rgba(0, 0, 0, 0)';
  contact_sh.style.background = 'rgba(0, 0, 0, 0)';
  allsocials_sh.forEach((el) => {
    el.style.background = 'rgba(0, 0, 0, 0)';
  });
  degrees_sh.style.color = `rgba(0, 0, 0, 0)`;
  text_sh.style.color = `rgba(0, 0, 0, 0)`;
});

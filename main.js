const myMine = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myMine, {
  interval: 10000,
  wrap: true
})

const image = document.querySelectorAll(".carousel-item>img");
const imgContainer = document.querySelectorAll(".carousel-item");

window.onload = window.onresize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  image.forEach(function(e) {
    if (width >= height) {
      e.style.width = `100%`;
      e.style.height = `auto`;
    }else {
      e.style.width = 'auto';
      e.style.height = `100vh`;
    }
  });
  imgContainer.forEach(e => {
    if (width >= height) {
      e.style.aspectRatio = `3/2`;
    }else {
      e.style.aspectRatio= 'auto';
    }
  })
};

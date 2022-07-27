const myMine = document.querySelector('#home')
const carousel = new bootstrap.Carousel(myMine, {
  interval: 7000,
  wrap: true
})

const image = document.querySelectorAll(".carousel-item>img");
const imgContainer = document.querySelectorAll(".carousel-item");

window.onload = () => {
  beautyBanner();
  fixGrid();
}
window.onresize = () => {
  beautyBanner();
  fixGrid();
}
function beautyBanner() {
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
}


const navbar = document.getElementById("navbar");
const butNav = document.querySelector(".navbar-toggler")
const blur = document.querySelector(".blur")

let condition = true;

window.onscroll = e => {
  if (window.pageYOffset >= 50) {
    navbar.classList.add("blur");
    condition = false;
  }else{
    navbar.classList.remove("blur");
    condition = true
  }
}

butNav.addEventListener("click", ()=> {
  if (condition) {
    if (navbar.classList.contains("blur")) {
      setTimeout(()=> {
        navbar.classList.toggle("blur");
      },550);
    }else{
      navbar.classList.toggle("blur");
    }
  }
})

const menuButton = document.querySelectorAll(".nav-item > a");

for(let i = 0; i < menuButton.length; i++) {
  const check = window.innerWidth <= 768;
  menuButton[i].addEventListener("click", ()=>{
    if (i=0) {
      condition=true;
      if (!check) {
        navbar.classList.remove("blur")
      }
    }else {
      condition=false;
      navbar.classList.add("blur");
    }
    if(check) butNav.click();
  });
}


const pop = document.querySelector(".pop");
const judulProduct = document.querySelector(".title-product")
const main = document.querySelector(".pop-image");
const table = document.querySelector(".table");


let ngasal= [];
/*$.getJSON('product.json', data => {
  for(const all of data) {
    ngasal.push(all);
  }
});*/

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState==4 && xhr.status == 200) {
    let data = JSON.parse(this.responseText);
    for(const all of data) {
    ngasal.push(all);
  }
  }
}

xhr.open('GET','product.json', true);
xhr.send();



console.log(ngasal)
function popUp(value) {
  console.log("oke");
  let date = ngasal[value];
  judulProduct.innerText = `${date.product}`;
  main.setAttribute("src",`${date.image}`);
  let tbody = document.createElement("tbody")
  for(const data of date.speck) {
    let tr = document.createElement("tr");
    for(const isi in data) {
      let td = document.createElement("td");
      td.innerHTML = `${data[isi]}`;
      tr.appendChild(td)
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  pop.classList.remove("d-none");
}

const imgProduct = document.querySelectorAll(".cover");

for (let i = 0; i < imgProduct.length; i++) {
  imgProduct[i].addEventListener("click",() => {
    popUp(i)
  })
}

const close= document.querySelector(".close");
close.addEventListener("click", () => {
  pop.classList.add("d-none");
  main.removeAttribute("src");
  table.innerHTML= "";
})

const grid = document.querySelectorAll('.cover');
const styleImg = getComputedStyle(grid[0]);
const galery = document.getElementById('gallery-content');

function fixGrid() {
  galery.style.setProperty('--width',`${styleImg.width}`);
}

/*

const root = document.querySelector(':root');

window.onload = window.onresize = () => {
  
};

*/




//butNav.click();
AOS.init({
 once: true,
 duration:800
});

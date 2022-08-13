// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');

// hamburger.addEventListener('click', ()=>{
//     hamburger.classList.toggle('.active');
//     navMenu.classList.toggle('.active');
// })

// document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',()=>{
//     hamburger.classList.remove('active');
//     navMenu.classList.remove('active');
// }))

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

//this part little hard 2 get but its 2 remove the menu after clicking on any link of them

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

//testing audio
// function playMe(){
//     document.getElementById('mySong').play();
//     document.getElementById('song-status').innerHTML = 'song is playing';
// }

// function pauseMe(){
//     document.getElementById('mySong').pause();
//     document.getElementById('song-status').innerHTML = 'song is paused';
// }


//with mobile its working good 2 make the section part disappear but its not there when its full screen:()
// let a;
// function show_hide(){
//     if(a===1){
//         document.getElementById('textIco').style.display='inline';
//         return a = 0;
//     } else {
//         document.getElementById('textIco').style.display = 'none';
//         return a=1;
//     }
// }


// let b;
// function show_hide(){
//     if(b===0){
//         document.getElementById('textIco').style.display='inline';
//         return b = 0;
//     } else {
//         document.getElementById('textIco').style.display = 'none';
//         return b=1;
//     }
// }


//this is working good, when i press hamburger menu the text ll disappear and when i remove it it ll appear 
function toggle(){
    let x = document.getElementById('textIco');

    if (x.style.display === 'none'){
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}




//popup
function togglePopup(){
    document.getElementById('popup-1').classList.toggle('active');
}


//scroll
let mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// to make the scroll smooth
mybutton.addEventListener("click", function () {
      window.mybutton({ top: 0, behavior: "smooth" });
    });



//another try 2 scroll
// const btn_top = document.getElementById("btn");

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 250) {
//     btn_top.style.display = "block";
//   } else {
//     btn_top.style.display = "none"; 
//   }
// });

// btn_top.addEventListener("click", function () {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });














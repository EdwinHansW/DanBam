$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 200) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar").css("background-color", "#000000ab"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $(".navbar").css("background-color", "transparent"); // if not, change it back to transparent
      }
    });
});

let mainNav = document.getElementById('myNav')
let navBarToggle = document.getElementById('Nav-menu')

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('inactive');
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if(slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
}

function ViewMore(){
  var viewMenu = document.getElementById("viewHide");
  var buttonViewMore = document.getElementById("viewButton");
  var buttonViewLess = document.getElementById("viewLess");
  
  viewMenu.style.display = "flex";
  buttonViewMore.style.display = "none";
  buttonViewLess.style.display = "block";
}

function viewLess(){
  var viewMenu = document.getElementById("viewHide");
  var buttonViewMore = document.getElementById("viewButton");
  var buttonViewLess = document.getElementById("viewLess");
  
  viewMenu.style.display = "none";
  buttonViewMore.style.display = "block";
  buttonViewLess.style.display = "none";
}

const nama = document.getElementById('name')
const errorName = document.getElementById('errorName')
const message = document.getElementById('message')
const errorMessage = document.getElementById('errorMessage')
const errorGender = document.getElementById('errorGender')
const errorBranch = document.getElementById('errorBranch')


form.addEventListener('submit', (e) => {
    let pesan = []
    const MINCHAR = 3
    const MAXCHAR = 100
    const MINMSG = 20
    const MAXMSG = 200
    let pesanMessage = []
    let pesanGender
    let pesanBranch
    // validasi inputan message
    if(nama.value.length < MINCHAR) {
      pesan.push(`Name must be longer than ${MINCHAR} character`)
      e.preventDefault()
    }
    if(nama.value.length > MAXCHAR) {
      pesan.push(`Name must be less than ${MAXCHAR} character`)
      e.preventDefault()
    }
    if(message.value.length < MINMSG){
      pesanMessage.push(`Message must be longer than ${MINMSG}`)
      e.preventDefault()
    }
    if(message.value.length > MAXMSG) {
      pesanMessage.push(`Message must be less than ${MAXMSG}`)
      e.preventDefault()
    }
    if(!($('#man').is(':checked') || $('#woman').is(':checked'))){
      pesanGender = 'Must choose one Gender'
      errorGender.innerText = pesanGender;
      e.preventDefault()
    }
    if(!($('#lippo').is(':checked') || $('#gading').is(':checked') || $('#grand').is(':checked'))){
      pesanBranch = 'Must choose one Branch'
      errorBranch.innerText = pesanBranch;
      e.preventDefault()
    }
    if(pesan.length > 0 || pesanMessage.length > 0) {
        e.preventDefault();
        errorName.innerText = pesan.join(',')
        errorMessage.innerText = pesanMessage.join(',')
    }
})
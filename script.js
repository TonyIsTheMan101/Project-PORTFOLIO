$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Counsellor", "Consigliere", "Berater", "Conseiller", "Consejero", "咨询师","Conselheiro","カウンセラー", "상담 전문가", "ผู้ให้คำปรึกษาปัญหา"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Counsellor", "Consigliere", "Berater", "Conseiller", "Consejero", "咨询师","Conselheiro","カウンセラー", "상담 전문가", "ผู้ให้คำปรึกษาปัญหา"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
   const form = document.querySelector('.contact form');
const nameInput = document.querySelector('.contact .name input');
const emailInput = document.querySelector('.contact .email input');
const subjectInput = document.querySelector('.contact .subject input');
const messageInput = document.querySelector('.contact .textarea textarea');
const button = document.querySelector('.contact button');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Disable the button to prevent multiple submissions
  button.disabled = true;

  // Show a loading indicator
  button.innerHTML = 'Sending...';

  // Send the form data to a server using an HTTP request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'send-email.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Success: show a success message
        button.innerHTML = 'Message sent!';
        form.reset();
        setTimeout(() => {
          button.disabled = false;
          button.innerHTML = 'Send message';
        }, 3000);
      } else {
        // Error: show an error message
        button.innerHTML = 'Error sending message';
        setTimeout(() => {
          button.disabled = false;
          button.innerHTML = 'Send message';
        }, 3000);
      }
    }
  };
  xhr.send(
    'name=' +
      encodeURIComponent(nameInput.value) +
      '&email=' +
      encodeURIComponent(emailInput.value) +
      '&subject=' +
      encodeURIComponent(subjectInput.value) +
      '&message=' +
      encodeURIComponent(messageInput.value)
  );
});
    const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("[name='name']").value;
    const email = form.querySelector("[name='email']").value;
    const subject = form.querySelector("[name='subject']").value;
    const message = form.querySelector("[name='message']").value;

    fetch("send-email.php", {
        method: "POST",
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        const status = data.status;
        const message = data.message;

        const messageElement = document.createElement("div");
        messageElement.textContent = message;

        if (status === "success") {
            messageElement.classList.add("success");
        } else {
            messageElement.classList.add("error");
        }

        form.parentNode.appendChild(messageElement);
    })
    .catch(error => console.error(error));
});



});

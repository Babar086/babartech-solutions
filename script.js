// ============================
// BABARTECH SOLUTIONS
// PREMIUM SCRIPT.JS
// ============================

// Loader

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.display = "none";

});

// ============================
// Scroll To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ============================
// Sticky Navbar Shadow
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.1)";

    }

});

// ============================
// Contact Form
// ============================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

// ============================
// Counter Animation
// ============================

const counters = document.querySelectorAll(".box h2");

counters.forEach(counter => {

    let count = 0;

    const target = parseInt(counter.innerText);

    const update = () => {

        if (count < target) {

            count++;

            counter.innerText = count + "+";

            setTimeout(update, 40);

        }

    };

    update();

});

// ============================
// Service Card Animation
// ============================

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ============================
// Portfolio Hover Effect
// ============================

const portfolio = document.querySelectorAll(".portfolio-card");

portfolio.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.boxShadow = "0 15px 30px rgba(37,99,235,.3)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    });

});

// ============================
// Active Navigation
// ============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ============================
// Smooth Fade Effect
// ============================

const fadeElements = document.querySelectorAll(

".service-card,.portfolio-card,.review,.why-box,.box"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

fadeElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "0.8s";

    observer.observe(el);

});

// ============================
// Welcome Message
// ============================

console.log("Welcome to BabarTech Solutions");

console.log("Designed by Babar Akram");

// ============================
// End
// ============================

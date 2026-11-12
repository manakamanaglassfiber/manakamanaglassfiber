
// BUSINESS DETAILS

const BUSINESS_PHONE = "9849275745, 9857071375";
const WHATSAPP_NUMBER = "9779857071375";
const BUSINESS_EMAIL = "manakamanaglassfiber@gmail.com";


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    }

});


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// PRODUCT FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedFilter = button.getAttribute("data-filter");

        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Show matching products
        productCards.forEach(function (card) {

            const category = card.getAttribute("data-category");

            if (selectedFilter === "all" || category === selectedFilter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    });

});


// DISPLAY BUSINESS PHONE AND EMAIL

const phoneElements = document.querySelectorAll("[data-business-phone]");
const emailElements = document.querySelectorAll("[data-business-email]");

phoneElements.forEach(function (element) {
    element.textContent = BUSINESS_PHONE;
});

emailElements.forEach(function (element) {
    element.textContent = BUSINESS_EMAIL;
});


// WHATSAPP ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const product = document.getElementById("productType").value;
    const message = document.getElementById("projectMessage").value.trim();

    if (!name || !phone || !product) {
        formStatus.textContent = "Please fill in all required fields.";
        return;
    }

    const whatsappMessage =
        "Hello Manakamana Glass Fiber!\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Interested In: " + product + "\n" +
        "Message: " + (message || "No additional message");

    const whatsappURL =
        "https://wa.me/" + WHATSAPP_NUMBER +
        "?text=" + encodeURIComponent(whatsappMessage);

    formStatus.textContent = "Opening WhatsApp...";

    window.open(whatsappURL, "_blank");

});


// FLOATING WHATSAPP BUTTON

const floatingWhatsApp = document.getElementById("floatingWhatsApp");

floatingWhatsApp.href = "https://wa.me/" + WHATSAPP_NUMBER;


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navbar Effect
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        });
    }

    // Handle "T M" click navigation
    const tmLink = document.getElementById("header-title");
    if (tmLink) {
        tmLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "index.html"; // Redirects back to home
        });
    }

    // Plus Sign and Popup Elements
    const plusSign = document.querySelector("#add");
    const popup = document.querySelector("#popup-container");

    if (plusSign) {
        plusSign.addEventListener("click", function () {
            popup.classList.toggle("active"); // Toggle popup visibility
            plusSign.classList.toggle("rotate"); // Apply rotation effect
        });
    }

    // Create Cursor Element
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    // Move Cursor on Mouse Move
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Ensure the cursor stays visible on interactive elements
    document.querySelectorAll("a, button, #add, input, textarea, .navbar, #header-title, .lightbox, .lightbox-img").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.style.display = "block"; // Keep custom cursor visible
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.display = "block";
        });
    });


});

// Open Lightbox
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = imgElement.src; // Set clicked image as the lightbox image
    lightbox.classList.add("active"); // Show lightbox

    // Ensure the custom cursor stays active
    cursor.style.display = "block";
}

// Close Lightbox when clicking outside the image
function closeLightbox(event) {
    const lightbox = document.getElementById("lightbox");

    // Ensure clicking the image itself does not close the lightbox
    if (event.target === lightbox) {
        lightbox.classList.remove("active"); // Hide lightbox
    }

    // Ensure the custom cursor stays active
    cursor.style.display = "block";
}

// Attach event listener to close lightbox
document.getElementById("lightbox").addEventListener("click", closeLightbox);

// /* =========================================================
//    MOBILE NAVIGATION
// ========================================================= */

// const menuBtn = document.getElementById("menuBtn");
// const navLinks = document.getElementById("navLinks");

// if (menuBtn && navLinks) {

//     menuBtn.addEventListener("click", () => {

//         navLinks.classList.toggle("show");

//         const icon = menuBtn.querySelector("i");

//         if (navLinks.classList.contains("show")) {

//             icon.classList.remove("fa-bars");
//             icon.classList.add("fa-xmark");

//         } else {

//             icon.classList.remove("fa-xmark");
//             icon.classList.add("fa-bars");

//         }

//     });

//     /* Close mobile menu after clicking a link */

//     document.querySelectorAll(".nav-links a").forEach((link) => {

//         link.addEventListener("click", () => {

//             navLinks.classList.remove("show");

//             const icon = menuBtn.querySelector("i");

//             icon.classList.remove("fa-xmark");
//             icon.classList.add("fa-bars");

//         });

//     });

// }

// /* =========================================================
//    ACTIVE NAVIGATION
// ========================================================= */

// const sections = document.querySelectorAll("section");
// const navigationLinks = document.querySelectorAll(".nav-links a");

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach((section) => {

//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;

//         if (window.scrollY >= sectionTop - 200) {

//             current = section.getAttribute("id");

//         }

//     });

//     navigationLinks.forEach((link) => {

//         link.classList.remove("active");

//         if (link.getAttribute("href") === `#${current}`) {

//             link.classList.add("active");

//         }

//     });

// });

// /* =========================================================
//    SCROLL ANIMATION
// ========================================================= */

// const observer = new IntersectionObserver(

//     (entries) => {

//         entries.forEach((entry) => {

//             if (entry.isIntersecting) {

//                 entry.target.classList.add("visible");

//             }

//         });

//     },

//     {
//         threshold: 0.12
//     }

// );

// document.querySelectorAll(".section").forEach((section) => {

//     observer.observe(section);

// });

// /* =========================================================
//    CONTACT FORM
// ========================================================= */

// const contactForm =
//     document.getElementById("contactForm");

// const formMessage =
//     document.getElementById("formMessage");

// if (contactForm) {

//     contactForm.addEventListener(
//         "submit",
//         async (event) => {

//             event.preventDefault();

//             /* Get form values */

//             const name =
//                 document
//                     .getElementById("name")
//                     .value
//                     .trim();

//             const email =
//                 document
//                     .getElementById("email")
//                     .value
//                     .trim();

//             const message =
//                 document
//                     .getElementById("message")
//                     .value
//                     .trim();

//             /* Validate fields */

//             if (!name || !email || !message) {

//                 formMessage.textContent =
//                     "Please fill in all fields.";

//                 return;

//             }

//             /* Show sending message */

//             formMessage.textContent =
//                 "Sending...";

//             try {

//                 /* Send information to Node.js */

//                 const response =
//                     await fetch(
//                         "/api/contact",
//                         {
//                             method: "POST",

//                             headers: {
//                                 "Content-Type":
//                                     "application/json"
//                             },

//                             body: JSON.stringify({

//                                 name: name,

//                                 email: email,

//                                 message: message

//                             })

//                         }
//                     );

//                 /* Get response from server */

//                 const data =
//                     await response.json();

//                 /* Check if server returned an error */

//                 if (!response.ok) {

//                     throw new Error(
//                         data.message ||
//                         "Something went wrong."
//                     );

//                 }

//                 /* Successful submission */

//                 formMessage.textContent =
//                     `Thanks ${name}! Your message has been received.`;

//                 /* Clear form */

//                 contactForm.reset();

//             } catch (error) {

//                 console.error(
//                     "Contact form error:",
//                     error
//                 );

//                 formMessage.textContent =
//                     "Unable to send your message. Please try again.";

//             }

//         }
//     );

// }

// /* =========================================================
//    TYPING EFFECT
// ========================================================= */

// const heroText =
//     document.querySelector(".hero h1 span");

// const words = [

//     "web experiences.",

//     "digital products.",

//     "beautiful websites.",

//     "full-stack apps."

// ];

// let wordIndex = 0;

// let characterIndex = 0;

// let deleting = false;

// function typeEffect() {

//     if (!heroText) {
//         return;
//     }

//     const currentWord =
//         words[wordIndex];

//     /* =========================
//        TYPING
//     ========================== */

//     if (!deleting) {

//         heroText.textContent =
//             currentWord.substring(
//                 0,
//                 characterIndex + 1
//             );

//         characterIndex++;

//         /* Word completely typed */

//         if (
//             characterIndex ===
//             currentWord.length
//         ) {

//             deleting = true;

//             setTimeout(
//                 typeEffect,
//                 1000
//             );

//             return;

//         }

//     }

//     /* =========================
//        DELETING
//     ========================== */

//     else {

//         heroText.textContent =
//             currentWord.substring(
//                 0,
//                 characterIndex - 1
//             );

//         characterIndex--;

//         /* Word completely deleted */

//         if (characterIndex === 0) {

//             deleting = false;

//             wordIndex++;

//             /* Start from first word again */

//             if (
//                 wordIndex >= words.length
//             ) {

//                 wordIndex = 0;

//             }

//         }

//     }

//     /* Typing speed */

//     setTimeout(
//         typeEffect,
//         deleting ? 45 : 90
//     );

// }

// /* Start typing effect */

// typeEffect();

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  /* Close mobile menu after clicking a link */

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");

      const icon = menuBtn.querySelector("i");

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    });
  });
}

/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================================================
   SCROLL ANIMATION
========================================================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },

  {
    threshold: 0.12,
  },
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    /* Get form values */

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    /* Validate fields */

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";

      return;
    }

    /* Show sending message */

    formMessage.textContent = "Sending...";

    try {
      /* Send form data to Node.js */

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: name,

          email: email,

          message: message,
        }),
      });

      /* Get server response */

      const data = await response.json();

      /* Check for server error */

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      /* =========================================
                   SUCCESS MESSAGE
                ========================================= */

      formMessage.textContent = `Thanks! Your message has been received.`;

      /* Clear form */

      contactForm.reset();

      /* =========================================
                   REMOVE SUCCESS MESSAGE AFTER 4 SECONDS
                ========================================= */

      setTimeout(() => {
        formMessage.textContent = "";
      }, 4000);
    } catch (error) {
      console.error("Contact form error:", error);

      /* Show error message */

      formMessage.textContent =
        "Unable to send your message. Please try again.";

      /* Remove error message after 4 seconds */

      setTimeout(() => {
        formMessage.textContent = "";
      }, 4000);
    }
  });
}

/* =========================================================
   TYPING EFFECT
========================================================= */

const heroText = document.querySelector(".hero h1 span");

const words = [
  "web experiences.",

  "digital products.",

  "beautiful websites.",

  "full-stack apps.",
];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;

function typeEffect() {
  if (!heroText) {
    return;
  }

  const currentWord = words[wordIndex];

  /* =========================================
       TYPING
    ========================================= */

  if (!deleting) {
    heroText.textContent = currentWord.substring(0, characterIndex + 1);

    characterIndex++;

    /* Word completely typed */

    if (characterIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1000);

      return;
    }
  } else {
    /* =========================================
       DELETING
    ========================================= */
    heroText.textContent = currentWord.substring(0, characterIndex - 1);

    characterIndex--;

    /* Word completely deleted */

    if (characterIndex === 0) {
      deleting = false;

      wordIndex++;

      /* Start from first word again */

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  /* Typing/deleting speed */

  setTimeout(typeEffect, deleting ? 45 : 90);
}

/* Start typing effect */

typeEffect();

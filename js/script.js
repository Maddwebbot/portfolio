// Loader for website
document.addEventListener("DOMContentLoaded", function () {
  // Simulate a loading time with a timeout
  setTimeout(function () {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
  }, 3000); // 3000ms = 3 seconds
});

// Animation script for when th viewport of the user come across an existing content then it will appear
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".onScroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Adjust the threshold as needed
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".onLoad");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Adjust the threshold as needed
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
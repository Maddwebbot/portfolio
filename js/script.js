/* Detect refresh before the page renders */
const navigation = performance.getEntriesByType("navigation")[0];
const isRefresh = navigation?.type === "reload";

if (isRefresh) {
  document.documentElement.classList.add("no-entrance-animation");
}

// Loader for website
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    if (isRefresh) {
      // Skip the loader on refresh
      loader.style.display = "none";
    } else {
      // Show loader for 3 seconds on normal navigation
      setTimeout(() => {
        loader.style.display = "none";
      }, 3000);
    }
  }

  // Select both animation types
  const elements = document.querySelectorAll(".onScroll, .onLoad");

  if (isRefresh) {
    // Show elements immediately without entrance animations
    elements.forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  // Observe elements as they enter the viewport
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
      threshold: 0.2,
    },
  );

  elements.forEach((element) => observer.observe(element));
});

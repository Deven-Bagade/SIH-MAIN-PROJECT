document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const moreContent = this.previousElementSibling;
      moreContent.style.display =
        moreContent.style.display === "block" ? "none" : "block";

      this.textContent = this.textContent === "Read More" ? "Read Less" : "Read More";
      this.classList.toggle("active");
    });
  });
});

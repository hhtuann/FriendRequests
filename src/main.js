document.querySelectorAll(".accept-btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.classList.contains("clicked")) {
      this.innerText = "Xem trang cá nhân";
      this.style.backgroundColor = "#243a51";
      this.style.color = "#6dabee";
      this.classList.add("clicked");

      this.addEventListener("mouseover", () => {
        this.style.backgroundColor = "#3a4d63";
      });
      this.addEventListener("mouseout", () => {
        this.style.backgroundColor = "#243a51";
      });
    } else {
      let friendNameLink = this.closest(".friend").querySelector(".friend-name a");
      if (friendNameLink) {
        window.location.href = friendNameLink.href;
      }
    }
  });
});
document.querySelectorAll(".decline-btn").forEach((button) => {
  button.addEventListener("click", function () {
    let box = this.closest(".friend");
    if (box) {
      box.remove();
    }
    let container = document.querySelector(".friends-container");
    if (container && container.querySelectorAll(".friend").length === 0) {
      let message = document.createElement("p");
      message.classList.add("no-more-friends");
      message.textContent = "Bạn đã xem hết";
      container.appendChild(message);
    }
  });
});
document.querySelector(".see-all").addEventListener("click", function () {
  alert("Không có gái xinh đâu mà xem :))")
})
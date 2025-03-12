const heart = document.getElementById("heart");

heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
    heart.innerHTML = heart.classList.contains("liked") ? "❤️" : "♡";
    alert("You have added a like... yaaay!!");
});
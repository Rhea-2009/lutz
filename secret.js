
  const tooltip = document.getElementById("tooltip");
  const hoverWords = document.querySelectorAll(".hover-word");

  hoverWords.forEach(word => {
    word.addEventListener("mousemove", (e) => {
      tooltip.style.display = "block";
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
      tooltip.textContent = word.getAttribute("data-tooltip");
    });

    word.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });

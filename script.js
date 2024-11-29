document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.querySelector(".share-button");
  const sharePopup = document.querySelector(".share-popup");

  shareButton.addEventListener("click", () => {
    // Toggle visibility of the popup
    sharePopup.classList.toggle("hidden");
  });

  // Close the popup when clicking outside of it
  document.addEventListener("click", (event) => {
    if (
      !shareButton.contains(event.target) &&
      !sharePopup.contains(event.target)
    ) {
      sharePopup.classList.add("hidden");
    }
  });
});

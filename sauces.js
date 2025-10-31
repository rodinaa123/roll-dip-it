const offer = document.getElementById("offer");
const offerText = document.getElementById("offer-text");
const closeOffer = document.getElementById("close-offer");

document.querySelectorAll(".sauce").forEach(sauce => {
  sauce.addEventListener("click", () => {
    const sauceName = sauce.dataset.sauce;
    offerText.textContent = `You chose ${sauceName}! 🎉 Enjoy 20% off your next combo!`;
    offer.style.display = "flex";
  });
});

closeOffer.addEventListener("click", () => {
  offer.style.display = "none";
});

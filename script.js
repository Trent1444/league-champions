// Variable that prevents brute force hacking by
// incrementing it onclick and returning it if it has already
// been clicked

let mageGenerated = 0;

// Creates mage cards when mage button is clicked

const generateMage = () => {
  if (mageGenerated > 1) return;
  mageGenerated++;
  if (mageGenerated === 1) {
    for (let i = 0; i < mage.length; i++) {
      const championCardSelector = document.querySelector(".championCard");
      const championCardElement = document.createElement("h2");
      championCardElement.innerText = mage[i].championName;
      championCardSelector.append(championCardElement);
      console.log(mage[i]);
    }
  }
};

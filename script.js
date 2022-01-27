// Variable that prevents brute force hacking by
// incrementing it onclick and returning it if it has already
// been clicked

let mageGenerated = 0;

// Creates mage cards when mage button is clicked

const generateMage = () => {
  marksmenGenerated = 0;
  if (mageGenerated > 1) return;
  mageGenerated++;
  if (mageGenerated === 1) {
    for (let i = 0; i < mage.length; i++) {
      const championCardSelector = document.querySelector(".championCard");
      const championCardElement = document.createElement("h2");
      championCardElement.classList.add("championCard");
      championCardElement.innerText = mage[i].championName;
      championCardSelector.append(championCardElement);
      console.log(mage[i]);
    }
  }
};

let marksmenGenerated = 0;

const generateMarksmen = () => {
  mageGenerated = 0;
  if (marksmenGenerated > 1) return;
  marksmenGenerated++;
  if (marksmenGenerated === 1) {
    for (let i = 0; i < marksmen.length; i++) {
      const championCardSelector = document.querySelector(".championCard");
      const championCardElement = document.createElement("h2");
      championCardElement.innerText = marksmen[i].championName;
      championCardSelector.append(championCardElement);
      console.log(marksmen[i]);
    }
  }
};

const check = () => {
  console.log(mageGenerated, marksmenGenerated);
};

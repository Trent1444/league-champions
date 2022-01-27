for (let i = 0; i < mage.length; i++) {
  const championCardSelector = document.querySelector(".championCard");
  const championCardElement = document.createElement("h2");
  championCardElement.innerText = "Hello!";
  championCardSelector.append(championCardElement);
  console.log(mage[i]);
}

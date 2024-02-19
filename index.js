window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  let words = [];

  // words from merriam webster -- https://www.merriam-webster.com/thesaurus/space
  fetch("synonyms.json").then((d)=>d.json()).then((r)=>{
    words=r;
    for (let i = 0; i < getRandomInt(25,50); i++) {
      let text = document.createElement("a");
      text.innerText = " a space is a " + words[getRandomInt(0,words.length)];
      container.appendChild(text);
      text.onclick = (e) => {e.target.style.backgroundColor="black";e.target.innerText = e.target.innerText.replaceAll(/[a-z]/g, "_");e.target.style.zIndex=100;e.target.style.border="none";};
    }
  });
});
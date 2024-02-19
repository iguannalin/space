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
    let ww = window.innerWidth/200;
    let hh = window.innerHeight/70;
    console.log(ww*hh);
    for (let i = 0; i < getRandomInt(ww*hh,ww*hh*2); i++) {
      console.log(i)
      let text = document.createElement("a");
      let rando = words[getRandomInt(0,words.length)];
      rando = ((rando[0].match('^[aieouAIEOU].*')) ? "an ": "a ") + rando;
      text.innerText = " a space is " + rando;
      container.appendChild(text);
      text.onclick = (e) => {e.target.style.backgroundColor="black";e.target.innerText = e.target.innerText.split("").map((l)=>l.replace(/[a-z]/g, Math.random()>0.7?" ":"_")).join("");e.target.style.zIndex=11;e.target.style.border="none";};
    }
  });
});
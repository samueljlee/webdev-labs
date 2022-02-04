/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/


const makeDyslexiaMode = () => {
  var background = document.querySelector("body");
  makeBigger();
  background.className("dyslexia-mode");
}

const makeBigger = () => {
  // alert("hello");
  // var h2Element = document.querySelector("h1");
  // var h2ElementStyle = window.getComputedStyle(h2Element, null).getPropertyValue('font-size');
  // var font = parseFloat(h2ElementStyle);
  // h2Element.style.fontSize = (font + 10) + "px";

  var h2Element = document.querySelector("h1");
  var h2ElementStyle = getComputedStyle(h2Element);
  
  var h2Font = h2ElementStyle.getPropertyValue('font-size');
  var newH2Font = parseFloat(h2Font);
  var newFont = (newH2Font + 10) + "px"
  h2Element.style.setProperty("font-size", newFont);

  var contentElement = document.querySelector(".content");
  var contentElementStyle = getComputedStyle(contentElement);

  var contentFont = contentElementStyle.getPropertyValue("font-size");
  var newContentFont = parseFloat(contentFont);
  var newContentFontFinal = (newContentFont + 10) + "px";
  contentElement.style.setProperty("font-size", newContentFontFinal);
  
};


document.querySelector("#dyslexia-toggle").addEventListener('click', makeDyslexiaMode);
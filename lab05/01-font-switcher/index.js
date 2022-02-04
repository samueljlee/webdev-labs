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

const makeSmaller = () => {
   var h2Element = document.querySelector("h1");
   var h2ElementStyle = getComputedStyle(h2Element);
   
   var h2Font = h2ElementStyle.getPropertyValue('font-size');
   var newH2Font = parseFloat(h2Font);
   var newFont = (newH2Font - 10) + "px"
   h2Element.style.setProperty("font-size", newFont);

   var contentElement = document.querySelector(".content");
   var contentElementStyle = getComputedStyle(contentElement);

   var contentFont = contentElementStyle.getPropertyValue("font-size");
   var newContentFont = parseFloat(contentFont);
   var newContentFontFinal = (newContentFont - 10) + "px";
   contentElement.style.setProperty("font-size", newContentFontFinal);

   
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);


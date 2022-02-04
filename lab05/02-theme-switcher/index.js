/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/


const makeDefault = () => {

   var backgroundNew = document.querySelector("body");
   backgroundNew.className = "default"




}

const makeDesert = () => {

   var backgroundNew = document.querySelector("body");
   backgroundNew.className = "desert"



}
const makeOcean = () => {

   var backgroundNew = document.querySelector("body");
   backgroundNew.className = "ocean"


}
const makeHighContrast = () => {

   var backgroundNew = document.querySelector("body");
   backgroundNew.className = "high-contrast"


}




document.querySelector('#default').addEventListener('click', makeDefault);
document.querySelector('#desert').addEventListener('click', makeDesert);
document.querySelector('#ocean').addEventListener('click', makeOcean);
document.querySelector('#high-contrast').addEventListener('click', makeHighContrast);


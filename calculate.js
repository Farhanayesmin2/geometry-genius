 // Create common function for Calculate function
    // Create a function for Number type input field.
 function getTheValue(number) {
    const getValueNumber = document.getElementById(number);
    const getValueNumberString = getValueNumber.value;
     const getTheNumber = parseInt(getValueNumberString);
     getValueNumber.value = " ";
    return getTheNumber;
} 
// Create a function for innerText Value.
function getTheInnerTextValue(innerValue) {
    const getValueInnerText = document.getElementById(innerValue);
    const getValueInnerTextString = getValueInnerText.innerText;
    const getTheTextValue = parseInt(getValueInnerTextString);
    return getTheTextValue;
} 


// Create a function for set the innerText
function setTheValueInnerText(number, newValue) {
    const setValueNumber = document.getElementById(number);
    const setValueNumberString = setValueNumber.innerText;
    const setTheTextNumber = parseInt(setValueNumberString);
    setValueNumber.innerText = newValue;
    return  newValue;
}
    


// Take a event handler

// document.getElementById('geometry-container').addEventListener("click", function (event) {



      
        
  
  
   
     
    
//     }  
   
     

//     });
       
document.getElementById('triangle-btn').addEventListener('click', function (event) {
    if (event.target.innerText == 'Calculate') {
        const geometryName = event.target.parentNode.parentNode.children[0].innerText;
        // Here, Math variable to Get 'Calculate' text from button click.

        const geometryCount = document.querySelectorAll("#area-calculation li");
        // querySelectorAll for get the all list item from id="area-calculation".
        
        //  Count the list item Length.
        const geometryCountLength = geometryCount.length + 1;
        
        const empty = geometryCountLength + ".  ";
        const name = empty + geometryName;
        const triangleForB = getTheValue('triangle-b');
        const triangleForH = getTheValue('triangle-h');
       
        const add = triangleForB + triangleForH;
        // Take a area-calculation list from id="area-calculation".
        const geometryList = document.getElementById('area-calculation');
        const li = document.createElement("li");
        li.id = "newClass";
        li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn px-2 " id="innerTextSet">${add}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
    
        
        
        `;
        const disabled = event.target.setAttribute("disabled", "true");
        // Change the color of disable button
     if (disabled != false) {
         event.target.style.backgroundColor = "rgb(203 213 225)";
     }

        geometryList.appendChild(li);
    }
 })
document.getElementById('rectangle-btn').addEventListener('click', function (event) {
    if (event.target.innerText == 'Calculate') {
        const geometryName = event.target.parentNode.parentNode.children[0].innerText;
        // Here, Math variable to Get 'Calculate' text from button click.

        const geometryCount = document.querySelectorAll("#area-calculation li");
        // querySelectorAll for get the all list item from id="area-calculation".
        
        //  Count the list item Length.
        const geometryCountLength = geometryCount.length + 1;
        
        const empty = geometryCountLength + ".  ";
        const name = empty + geometryName;

        // This is part for calculation.
        const rectangleForW = getTheValue('rectangle-w');
        const rectangleForI = getTheValue('rectangle-i');
        // Multiply the  rectangle area
        const add = rectangleForW * rectangleForI;

        // Take a area-calculation list from id="area-calculation".
        const geometryList = document.getElementById('area-calculation');
        const li = document.createElement("li");
        li.id = "newClass";
        li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn px-2 " id="innerTextSet">${add}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
         <br>
        
        
        `;
        const disabled = event.target.setAttribute("disabled", "true");
        // Change the color of disable button
     if (disabled != false) {
         event.target.style.backgroundColor = "rgb(203 213 225)";
     }

        geometryList.appendChild(li);
    }
 })










   


    

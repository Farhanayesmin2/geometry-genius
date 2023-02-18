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
    return newValue;
}

// Take a event handler
document
    .getElementById("triangle-btn")
    .addEventListener("click", function (event) {
 


 
                
       

        if (event.target.innerText == "Calculate") {
            const geometryName =
                event.target.parentNode.parentNode.children[0].innerText;
            // Here, Math variable to Get 'Calculate' text from button click.

            const geometryCount = document.querySelectorAll("#area-calculation li");
            // querySelectorAll for get the all list item from id="area-calculation".

            //  Count the list item Length.
            const geometryCountLength = geometryCount.length + 1;

            const empty = geometryCountLength + ".  ";
            const name = empty + geometryName;

            // This part for triangle calculation
            const fixedNumber = 0.5;
           const triangleForB = getTheValue("triangle-b");
 const triangleForH = getTheValue("triangle-h");

            const multiplyTriangle = fixedNumber * triangleForB * triangleForH;


            // Take a area-calculation list from id="area-calculation".
            const geometryList = document.getElementById("area-calculation");
            const li = document.createElement("li");
            li.id = "newClass";
            li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn px-2 " id="innerTextSet">${multiplyTriangle.toFixed(2)}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
    
        
        
        `;
            const disabled = event.target.setAttribute("disabled", "true");
            // Change the color of disable button
            if (disabled != false) {
                event.target.style.backgroundColor = "rgb(203 213 225)";
            }

            geometryList.appendChild(li);
            }
              
    });
document
    .getElementById("rectangle-btn")
    .addEventListener("click", function (event) {
        if (event.target.innerText == "Calculate") {
            const geometryName =
                event.target.parentNode.parentNode.children[0].innerText;
            // Here, Math variable to Get 'Calculate' text from button click.

            const geometryCount = document.querySelectorAll("#area-calculation li");
            // querySelectorAll for get the all list item from id="area-calculation".

            //  Count the list item Length.
            const geometryCountLength = geometryCount.length + 1;

            const empty = geometryCountLength + ".  ";
            const name = empty + geometryName;

            // This is part for calculation.
            const rectangleForW = getTheValue("rectangle-w");
            const rectangleForI = getTheValue("rectangle-i");
            // Multiply the  rectangle area
            const multiplyRectangle = rectangleForW * rectangleForI;

            // Take a area-calculation list from id="area-calculation".
            const geometryList = document.getElementById("area-calculation");
            const li = document.createElement("li");
            li.id = "newClass";
            li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn px-2 " id="innerTextSet">${multiplyRectangle.toFixed(2)}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
        `;
            const disabled = event.target.setAttribute("disabled", "true");
            // Change the color of disable button
            if (disabled != false) {
                event.target.style.backgroundColor = "rgb(203 213 225)";
            }

            geometryList.appendChild(li);
        }
    });
document
    .getElementById("parallelogram-btn")
    .addEventListener("click", function (event) {
        if (event.target.innerText == "Calculate") {
            const geometryName =
                event.target.parentNode.parentNode.children[0].innerText;
            // Here, Math variable to Get 'Calculate' text from button click.

            const geometryCount = document.querySelectorAll("#area-calculation li");
            // querySelectorAll for get the all list item from id="area-calculation".

            //  Count the list item Length.
            const geometryCountLength = geometryCount.length + 1;

            const empty = geometryCountLength + ".  ";
            const name = empty + geometryName;

            // This is part for calculation.
            const parallelogramFor10 = getTheInnerTextValue("number-10");
            const parallelogramFor12 = getTheInnerTextValue("number-12");

            // Multiply the  Parallelogram area
            const multiplyParallelogram = parallelogramFor10 * parallelogramFor12;

            // Take a area-calculation list from id="area-calculation".
            const geometryList = document.getElementById("area-calculation");
            const li = document.createElement("li");
            li.id = "newClass";
            li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn pl-1 " id="innerTextSet">${multiplyParallelogram}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
         
        
        
        `;
            const disabled = event.target.setAttribute("disabled", "true");
            // Change the color of disable button
            if (disabled != false) {
                event.target.style.backgroundColor = "rgb(203 213 225)";
            }

            geometryList.appendChild(li);
        }
    });
document
    .getElementById("rhombus-btn")
    .addEventListener("click", function (event) {
        if (event.target.innerText == "Calculate") {
            const geometryName =
                event.target.parentNode.parentNode.children[0].innerText;
            // Here, Math variable to Get 'Calculate' text from button click.

            const geometryCount = document.querySelectorAll("#area-calculation li");
            // querySelectorAll for get the all list item from id="area-calculation".

            //  Count the list item Length.
            const geometryCountLength = geometryCount.length + 1;

            const empty = geometryCountLength + ".  ";
            const name = empty + geometryName;

            // This is part for calculation.
            const fixedNumber = 0.5;
            const rhombusFor16 = getTheInnerTextValue("rhombus-16");
            const rhombusFor8 = getTheInnerTextValue("rhombus-8");

            // Multiply the Rhombus area
            const multiplyRhombus =fixedNumber * rhombusFor16 * rhombusFor8;

            // Take a area-calculation list from id="area-calculation".
            const geometryList = document.getElementById("area-calculation");
            const li = document.createElement("li");
            li.id = "newClass";
            li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn pl-1 " id="innerTextSet">${multiplyRhombus}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
         
        
        
        `;
            const disabled = event.target.setAttribute("disabled", "true");
            // Change the color of disable button
            if (disabled != false) {
                event.target.style.backgroundColor = "rgb(203 213 225)";
            }

            geometryList.appendChild(li);
        }
    });
document
    .getElementById("pentagon-btn")
    .addEventListener("click", function (event) {
        if (event.target.innerText == "Calculate") {
            const geometryName =
                event.target.parentNode.parentNode.children[0].innerText;
            // Here, Math variable to Get 'Calculate' text from button click.

            const geometryCount = document.querySelectorAll("#area-calculation li");
            // querySelectorAll for get the all list item from id="area-calculation".

            //  Count the list item Length.
            const geometryCountLength = geometryCount.length + 1;

            const empty = geometryCountLength + ".  ";
            const name = empty + geometryName;

            // This is part for calculation.
            const fixedNumber = 0.5;
            const pentagonFor6 = getTheInnerTextValue("pentagon-6");
            const pentagonFor10 = getTheInnerTextValue("pentagon-10");

            // Multiply the Pentagon area
            const multiplyPentagon =fixedNumber * pentagonFor6 * pentagonFor10;

            // Take a area-calculation list from id="area-calculation".
            const geometryList = document.getElementById("area-calculation");
            const li = document.createElement("li");
            li.id = "newClass";
            li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn pl-1 " id="innerTextSet">${multiplyPentagon}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
         
        
        
        `;
            const disabled = event.target.setAttribute("disabled", "true");
            // Change the color of disable button
            if (disabled != false) {
                event.target.style.backgroundColor = "rgb(203 213 225)";
            }

            geometryList.appendChild(li);
        }
    });
document
    .getElementById("ellipse-btn")
    .addEventListener("click", function (event) {
        if (event.target.innerText == "Calculate") {
            const geometryName =
                event.target.parentNode.parentNode.children[0].innerText;
            // Here, Math variable to Get 'Calculate' text from button click.

            const geometryCount = document.querySelectorAll("#area-calculation li");
            // querySelectorAll for get the all list item from id="area-calculation".

            //  Count the list item Length.
            const geometryCountLength = geometryCount.length + 1;

            const empty = geometryCountLength + ".  ";
            const name = empty + geometryName;

            // This is part for calculation.
            const fixedNumberOfPie = 3.1416;
            const ellipseFor10 = getTheInnerTextValue("ellipse-10");
            const ellipseFor4 = getTheInnerTextValue("ellipse-4");

            // Multiply the Ellipse area
            const multiplyEllipse =fixedNumberOfPie * ellipseFor10 * ellipseFor4;

            // Take a area-calculation list from id="area-calculation".
            const geometryList = document.getElementById("area-calculation");
            const li = document.createElement("li");
            li.id = "newClass";
            li.innerHTML = `
        <span >${name}</span><span class="centimeter-btn pl-1 " id="innerTextSet">${multiplyEllipse.toFixed(2)}cm<sup>2</sup> <span class="ps-2"> <button  class="btn btn-accent btn-xs">Convert m<sup>2</sup></button></span> 
         
         </span>
         
        
        
        `;
            const disabled = event.target.setAttribute("disabled", "true");
            // Change the color of disable button
            if (disabled != false) {
                event.target.style.backgroundColor = "rgb(203 213 225)";
            }

            geometryList.appendChild(li);
        }
    });

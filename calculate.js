// Take a event handler

document.getElementById('geometry-container').addEventListener("click", function (event) {

    if (event.target.innerText == 'Calculate') {
        const geometryName = event.target.parentNode.parentNode.children[0].innerText;
        // Here, Math variable to Get 'Calculate' text from button click.

        const geometryCount = document.querySelectorAll("#area-calculation li");
     // querySelectorAll for get the all list item from id="area-calculation".
        
        //  Count the list item Length.
        const geometryCountLength =geometryCount.length + 1;
        
        const empty =geometryCountLength + ".  ";
        const name = empty +geometryName;
      
    // Take a area-calculation list from id="area-calculation".
        const geometryList = document.getElementById('area-calculation');
        const li = document.createElement("li");
      // Here, Append the list items.
        li.append(name);
       geometryList.append(li);
        // Here,After select Disable the button.
        const disabled = event.target.setAttribute("disabled", "true");
        // Change the color of disable button
     if (disabled != false) {
         event.target.style.backgroundColor = "rgb(203 213 225)";
     }
    }   
    });
       

    // Create common function for Calculate function
    // Create a function for Number type input field.
 function getTheValue(number) {
    const getValueNumber = document.getElementById(number);
    const getValueNumberString = getValueNumber.value;
    const getTheNumber = parseInt(getValueNumberString);
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
    


    

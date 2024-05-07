const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.7/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


// for(currCode in countryList){
//     console.log(currCode, countryList[currCode]);
// }

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        // newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode ==="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change" , (evt)=>{
        updateFlag(evt.target);
    })
}  

const updateFlag = (element) =>{
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    // console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}

btn.addEventListener("click" , async (evt)=>{
    // btn ko click karne per jo automatic work ho rahe the vo na ho jo karenge ham karenge//

 evt.preventDefault();
 let amount = document.querySelector(".amount input");
 let amtVal = amount.value;
 if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value = "1";
 }
//  console.log(amtVal);

// console.log(fromCurr.value, toCurr.value); 
const URL = `${Base_url}/${toCurr.value.toLowerCase()}.json`; ///${fromCurr.value.toLowerCase()}
let response = await fetch(URL);
let data = await response.json();
console.log(data);
}) 
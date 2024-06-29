const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg") 

// for(currCode in countryList){
//     console.log(currCode, countryList[currCode]);
// }

window.addEventListener("load", ()=>{
    updateExchangeRate();
});

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
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
 evt.preventDefault();
 let amount = document.querySelector(".amount input");
 let amtVal = amount.value;
 if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value = "1";
 }
//  console.log(amtVal);

// console.log(fromCurr.value, toCurr.value);
const URL = `${Base_url}/${fromCurr.value.toLowerCase()}.json`;
// // /${fromCurr.value.toLowerCase()}
// // /${toCurr.value.toLowerCase()} //
let response = await fetch(URL);
console.log(response); 
let data = await response.json();
console.log(data)
// let rate  = data[fromCurr.value.toLowerCase()];
// console.log(rate);

// let finalAmount = amtVal * rate 
// // msg.innerText =  `1USD = 80INR`
// msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

}) 

const updateExchangeRate = () =>{
    // button event lishner uper ka code ya per paste 
}
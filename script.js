


// import 'dotenv/config'; 
// require('dotenv').config()
// import dotenv from 'dotenv';
// dotenv.config();
// console.log(process.env.API_KEY);

const API_KEY = 'bdebfcc3ca3618fdbc68f9d3';

const countryList = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW",
    "DOOM" : "DOOM"
}

const dropList = document.querySelectorAll('.drop-list');
const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');
const getButton = document.querySelector('form');

for(let i = 0; i < dropList.length; i++){
    for (let currencyCode in countryList){
        let selected = '';
        if(i == 0){
            selected = currencyCode == 'USD' ? 'selected' : '';
        }else if(i == 1){
            selected = currencyCode == 'CAD' ? 'selected' : '';
        }
        let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
        dropList[i].insertAdjacentHTML('beforeend', optionTag);
    }
    dropList[i].addEventListener('change', e => {
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(let code in countryList){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector('img');
            if (imgTag) {
                if (code === 'DOOM') {
                    imgTag.src = "../DOOM/images/doomIcon.png";
                } else {
                    imgTag.src = `https://flagsapi.com/${countryList[code]}/flat/64.png`;
                }
            }
        }
    }
}

getButton.addEventListener('load', e => {
    getExchangeRate();
});

getButton.addEventListener('click', e => {
    e.preventDefault();
    getExchangeRate();
});

// const exchangeIcon = document.querySelector('.drop-list .icon');
// if (exchangeIcon) {
//     exchangeIcon.addEventListener('click', () => {
//         let tempCode = fromCurrency.value;
//         fromCurrency.value = toCurrency.value;
//         toCurrency.value = tempCode;
//         loadFlag(fromCurrency);
//         loadFlag(toCurrency);
//         getExchangeRate();
//     });
// }

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    const exchangeRateText = document.querySelector('.exchange-rate');
    let amountVal = amount.value;
    // puts in a 1 by default if the user doesn't put in a value
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1" ;
        amountVal = 1;   
    }
    if (fromCurrency.value === 'DOOM' && toCurrency.value === 'DOOM') {
        window.location.href = '../DOOM/doom.html'; 
        return; 
    }
    // let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${fromCurrency.value}`; 
    let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateText.innerText = `${totalExchangeRate} ${toCurrency.value}`;
    })
}
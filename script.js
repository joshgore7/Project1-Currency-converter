

// import 'dotenv/config'; 
// require('dotenv').config()
// import dotenv from 'dotenv';
// dotenv.config();
// console.log(process.env.API_KEY);

const API_KEY = 'bdebfcc3ca3618fdbc68f9d3';

// dictionary of currency codes and their corresponding country codes
const countryList = {
    "USD": "US",
    "AED": "AE",
    "AFN": "AF",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "AN",
    "AOA": "AO",
    "ARS": "AR",
    "AUD": "AU",
    "AWG": "AW",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "BTN": "BT",
    "BWP": "BW",
    "BYN": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "EGP": "EG",
    "ERN": "ER",
    "ETB": "ET",
    "EUR": "FR",
    "FJD": "FJ",
    "GBP": "GB",
    "GEL": "GE",
    "GHS": "GH",
    "GIP": "GI",
    "GMD": "GM",
    "GNF": "GN",
    "GTQ": "GT",
    "GYD": "GY",
    "HKD": "HK",
    "HNL": "HN",
    "HRK": "HR",
    "HTG": "HT",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "IMP": "IM",
    "INR": "IN",
    "IQD": "IQ",
    "IRR": "IR",
    "ISK": "IS",
    "JEP": "JE",
    "JMD": "JM",
    "JOD": "JO",
    "JPY": "JP",
    "KES": "KE",
    "KGS": "KG",
    "KHR": "KH",
    "KID": "KI",
    "KMF": "KM",
    "KPW": "KP",
    "KRW": "KR",
    "KWD": "KW",
    "KYD": "KY",
    "KZT": "KZ",
    "LAK": "LA",
    "LBP": "LB",
    "LKR": "LK",
    "LRD": "LR",
    "LSL": "LS",
    "LYD": "LY",
    "MAD": "MA",
    "MDL": "MD",
    "MGA": "MG",
    "MKD": "MK",
    "MMK": "MM",
    "MNT": "MN",
    "MOP": "MO",
    "MRO": "MR",
    "MUR": "MU",
    "MVR": "MV",
    "MWK": "MW",
    "MXN": "MX",
    "MYR": "MY",
    "MZN": "MZ",
    "NAD": "NA",
    "NGN": "NG",
    "NIO": "NI",
    "NOK": "BV",
    "NPR": "NP",
    "NZD": "NZ",
    "OMR": "OM",
    "PAB": "PA",
    "PEN": "PE",
    "PGK": "PG",
    "PHP": "PH",
    "PKR": "PK",
    "PLN": "PL",
    "PYG": "PY",
    "QAR": "QA",
    "RON": "RO",
    "RSD": "RS",
    "RUB": "RU",
    "RWF": "RW",
    "SAR": "SA",
    "SBD": "SB",
    "SCR": "SC",
    "SDG": "SD",
    "SEK": "SE",
    "SGD": "SG",
    "SHP": "SH",
    "SLL": "SL",
    "SLE": "SL",
    "SOS": "SO",
    "SRD": "SR",
    "SSP": "SS",
    "STD": "ST",
    "STN": "ST",
    "SVC": "SV",
    "SYP": "SY",
    "SZL": "SZ",
    "THB": "TH",
    "TJS": "TJ",
    "TMT": "TM",
    "TND": "TN",
    "TOP": "TO",
    "TRY": "TR",
    "TTD": "TT",
    "TWD": "TW",
    "TZS": "TZ",
    "UAH": "UA",
    "UGX": "UG",
    "UYU": "UY",
    "UZS": "UZ",
    "VEF": "VE",
    "VES": "VE",
    "VND": "VN",
    "VUV": "VU",
    "WST": "WS",
    "XAF": "CF",
    "XCD": "AG",
    "XOF": "BE",
    "XPF": "NC",
    "YER": "YE",
    "ZAR": "ZA",
    "ZMK": "ZM",
    "ZWD": "ZW",
    "DOOM": "DOOM"
};


const dropList = document.querySelectorAll('.drop-list');
const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');
const getButton = document.querySelector('.exchange-btn');


// adds country codes to dropdown list
for(let i = 0; i < dropList.length; i++){
    for (let currencyCode in countryList){
        let selected = '';
        // defaults the selected currency to USD and CAD when page loads
        if(i == 0){
            selected = currencyCode == 'USD' ? 'selected' : '';
        }else if(i == 1){
            selected = currencyCode == 'CAD' ? 'selected' : '';
        }
        let optionTag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`;
        dropList[i].insertAdjacentHTML('beforeend', optionTag);
    }
    // adds flag when the selected country is changed
    dropList[i].addEventListener('change', country => {
        loadFlag(country.target);
    });
}
// loads the flag of the selected country from flagsapi.com
function loadFlag(country){
    for(let code in countryList){
        if(code == country.value){
            let imgTag = country.parentElement.querySelector('img');
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

//loads the flags when the page loads
document.addEventListener('DOMContentLoaded', () => {
    dropList.forEach(currency => {
        loadFlag(currency);
    });
});

// gets exchange rate when button is clicked, prevents page from refreshing
getButton.addEventListener('click', button => {
    button.preventDefault();
    getExchangeRate();
});

// calculates the exchange rate
function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    const exchangeRateText = document.querySelector('.exchange-rate');
    let amountVal = amount.value;
    // puts in a 1 by default if the user doesn't put in a value
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1" ;
        amountVal = 1;   
    }
    // runs Doom if the user selects DOOM for both currencies
    if (fromCurrency.value === 'DOOM' && toCurrency.value === 'DOOM') {
        window.location.href = '../DOOM/doom.html'; 
        return; 
    }
    // let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${fromCurrency.value}`; 
    let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);

        //displays the exchange
        exchangeRateText.innerText = `${totalExchangeRate} ${toCurrency.value}`;
    })
}
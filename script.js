

//валютные пары
let base = "";
let symbols = "";

//левые кнопки
let addButtonRUB = document.querySelector("#RUB");

addButtonRUB.addEventListener('click', function () {
    getCharacterData(base)
    return base = RUB
    
});

let addButtonUSD = document.querySelector("#USD");


addButtonUSD.addEventListener('click', function () {
    getCharacterData(base)
    return base = USD

});

let addButtonEUR = document.querySelector("#EUR");


addButtonEUR.addEventListener('click', function () {
    getCharacterData(base)
    return base = EUR

});

let addButtonGBR = document.querySelector("#GBR");

addButtonGBR.addEventListener('click', function () {
    getCharacterData(base)
    return base = GBR
});


// правые кнопки

let addButtonRUB1 = document.querySelector("#RUB1");

addButtonRUB1.addEventListener('click', function () {
    getCharacterData(symbols)
    return symbols = RUB

});

let addButtonUSD1 = document.querySelector("#USD1");


addButtonUSD1.addEventListener('click', function () {
    getCharacterData(symbols)
    return symbols = USD

});

let addButtonEUR1 = document.querySelector("#EUR1");


addButtonEUR1.addEventListener('click', function () {
    getCharacterData(symbols)
    return symbols = EUR

});

let addButtonGBR1 = document.querySelector("#GBR1");

addButtonGBR1.addEventListener('click', function () {
    getCharacterData(symbols)
    return symbols = GBR
    
});




// вытягиваем обьекты

const getCharacterData = async (base, symbols) => {
    if (base === symbols) {
        return 1;
    }

    const response = fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`);
    const data = await response.json;
    const result = await data;
    return console.log(result);

}

getCharacterData(base, symbols).then().catch()





/// функция для вытягивания обьектов 
// const rates = {};



// async function getCurrencies() {

//     const response = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
//     const data = await response.json();
//     const result = await data;
//     return console.log(result);

//     rates.RUB = result.rates.RUB
//     rates.USD = result.rates.USD
//     rates.EUR = result.rates.EUR
//     rates.GBP = result.rates.GBP
//     console.log(rates)
// }

// getCurrencies()







// const getCharacterData = async (base, symbols) => {
//     if (base === symbols) {
//         return 1;
//     }

    
//     const data = await response.json();
//     const result = await data;
//     return console.log(result);

// }

// getCharacterData(1).then().catch()


// //когда пользователь нажимает на баттон слева, то по клику перется значение id , которое переходит в состояние валюты
// // и подставляется в фетч , далее фечем скачиваются данные из аапи.
// при нажатии на кнопку вызывать аргумент функции в пару



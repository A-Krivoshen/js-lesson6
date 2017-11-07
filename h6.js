'use strict';
var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

// Задача 1


var hit = {name: positions[2], price: prices[2]};


console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

//Задача 2
var items = [];
for (let i = 0; i < positions.length; i++) {
  items[i] = {
    name: positions[i],
    price: prices[i]
  };
}
console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);
//Задача 3

function showDiscount(code, quantity) {

var profitIndex;

    if (quantity < 9) {
    profitIndex = 5;
  } else if (quantity < 49) {
     profitIndex = 7;
  } else if (quantity < 99) {
     profitIndex = 10;
  } else {
      profitIndex = 15;
  }


var profit = items[code].price * quantity * profitIndex / 100;
var total = items[code].price * quantity - profit;


return console.log(`${items[code].name} — стоимость партии из ${quantity} штук ${total} (${profitIndex}%) Q, ваша выгода ${profit} Q!`);
}

showDiscount(0,12);
showDiscount(3,97);


// Задача 4

items[3].ammount = 4;

function updateAmount(code, spent = 1){
  if(!('ammount' in items[code])) {
  return;
} else if (items[code].ammount === 0 || spent > items[code].ammount) {
  return console.log(`${items[code].name} закончился на складе`);
} else if (items[code].ammount > spent) {
  console.log(`${items[code].name} — остаток ${items[code].ammount -= spent} шт`);
} else if (items[code].ammount === spent) {
  console.log(`Это был последний ${items[code].name}, вам повезло`);
}
}
updateAmount(1, 17);
updateAmount(3, 3);
updateAmount(3, );

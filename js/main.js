// word1 = ['очень', 'никчёмный', 'совсем', 'слишком', 'ни разу не'];
// word2 = ['красивый', 'умный', 'эгоистичный', 'латентный', 'убогий'];
// word3 = ['ганджубас', 'арлекин', 'долбонавт', 'карась', 'чунгачгух'];

// function createName(){
//    let name1 = word1[Math.floor(Math.random() * word1.length)];
//    let name2 = word2[Math.floor(Math.random() * word2.length)];
//    let name3 = word3[Math.floor(Math.random() * word3.length)];
//    alert('Ты '+ name1 +' '+ name2 +' '+ name3);
// }

// function createName(){
//    let rand1 = Math.floor(Math.random() * word1.length);
//    let rand2 = Math.floor(Math.random() * word2.length);
//    let rand3 = Math.floor(Math.random() * word3.length);
//    alert('Ты '+ word1[rand1] +' '+word2[rand2] +' '+ word3[rand3]);
// }
// function createName() {
//    let rand1 = Math.floor(Math.random() * word1.length);
//    let rand2 = Math.floor(Math.random() * word2.length);
//    let rand3 = Math.floor(Math.random() * word3.length);
//    let phrase = 'Ты ' + word1[rand1] + ' ' + word2[rand2] + ' ' + word3[rand3];
//    window.alert(phrase)
// }

// createName();


let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 53, 55, 61, 51, 44, 69]
let costs = [25, 27, 25, 25, 25, 25, 33, 31, 25, 29, 27, 22, 31, 25, 25, 33, 21, 25, 25, 25, 28, 25, 24, 22, 20, 25, 30, 25, 25, 25, 27, 25]

let highScoreArray = [];
function printAndGetHighScore(scores) {
   let highScore = 0;
   let i = 0;
   while (i < scores.length) {
      console.log('Bubble solution #' + i + ' score: ' + scores[i]);
      if (highScore < scores[i]) {
         highScore = scores[i];
      }
      i = i + 1;
   }
   return highScore
}

let highScore = printAndGetHighScore(scores);
console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score: ' + highScore)

function getBestSolutions(highScore, scores) {
   for (let i = 0; i < scores.length; i++) {
      // let index = 0;
      if (scores[i] == highScore) {
         // highScoreArray[index] = scores[i];
         highScoreArray.push(i);
         // index = index + 1;
         //вопрос для Энди
      }
   }
   return highScoreArray
}

let bestSolutions = getBestSolutions(highScore, scores);
console.log('Solutions with highest score: ' + bestSolutions)

function getLowerCost(highScore, scores, costs) {
   let index;
   let cost = 100;
   for (let i = 0; i < scores.length; i++) {
      if (scores[i] == highScore) {
         if (costs[i] < cost) {
            index = i;
            cost = costs[i];
         }
      }
   }
   return index
   //знаю, что записанное под словом return браузером не читается, 
   //а возможно ли вернуть два независимых значения из функции?
}

let lowerCost = getLowerCost(highScore, scores, costs)
console.log('The lower costs solution is: #' + lowerCost)
//question about paramaters/arguments
//как замещается одно другим? 


let check = 10;

function change(check) {
   check--;
   return check;
}

let checkout = change(check);

console.log(check)
console.log(checkout)


function makeCars() {
   let makes = ['Нива', 'Nissan', 'Toyota', 'Opel', 'Лада'];
   let models = ['Silvia', 'Supra', 'Granta', '2112', 'Urban'];
   let years = ['2019', '2020', '1999', '2010', '2007'];
   let colors = ['white', 'blue', 'unvisible', 'red', 'deepgreen'];
   let convertible = [true, false];
   let mileage = ['ездила в командировки до луны и обратно', '0', 'стояла в гараже у деда'];


   let rand1 = makes[Math.floor(Math.random() * makes.length)];
   let rand2 = models[Math.floor(Math.random() * models.length)];
   let rand3 = years[Math.floor(Math.random() * years.length)];
   let rand4 = colors[Math.floor(Math.random() * colors.length)];
   let rand5 = convertible[Math.floor(Math.random() * convertible.length)];
   let rand6 = Math.floor(Math.random() * 5 + 1);
   let rand7 = mileage[Math.floor(Math.random() * mileage.length)];

   let car = {
      make: rand1,
      model: rand2,
      years: rand3,
      color: rand4,
      convertible: rand5,
      passangers: rand6,
      mileage: rand7
   };
   return car;
}

function displayCar(car) {
   console.log('Let me introduce the new car: ' + newCar.make + ' ' + newCar.model + ' ' + newCar.color)
}
let newCar = makeCars();
displayCar(newCar);
console.log(42);
displayCar(newCar);


let tesla = {
   make: 'Tesla',
   model: 'Rhoadster',
   year: 2020,
   color: 'white',
   started: false,
   start: function () {
      this.started = true;
   },
   stop: function () {
      this.started = false;
   },
   drive: function () {
      if (this.started) {
         alert('Zoom zoom')
      } else {
         alert('You need to start engine first')
      }
   }
};
let nissan = {
   make: 'Nissan',
   model: 'GTR',
   year: 2020,
   color: 'blue',
   started: false,
   start: function () {
      this.started = true;
   },
   stop: function () {
      this.started = false;
   },
   drive: function () {
      if (this.started) {
         alert('Zoom zoom')
      } else {
         alert('You need to start engine first')
      }
   }
};
let toyota = {
   make: 'Toyota',
   model: 'Camry',
   year: 2020,
   color: 'black',
   started: false,
   fuel: 0,
   start: function () {
      if(this.fuel >= 0.5){
         this.started = true;
         this.fuel = this.fuel - 0.5
      }else{
         alert('Where is my matherfukin fuel?')
      }

   },
   stop: function () {
      this.started = false;
   },
   drive: function () {
      if(this.fuel >= 1){
         if (this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom');
            this.fuel--;
         } else {
            alert('You need to start engine first')
         }
      }else{
         alert('Out of fuel! Please add fuel');
         this.stop();
      }

   },
   addFuel: function (amount){
      this.fuel = this.fuel + amount;
   }
};

for(let prop in tesla){
   console.log(prop +': '+tesla[prop])
}

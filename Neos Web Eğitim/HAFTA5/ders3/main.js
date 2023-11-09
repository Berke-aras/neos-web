//string Methods

//replace
let text = "Hello World 2023, Hello World";
console.log(text);

text = text.replace("2023", "2024");
console.log(text);

result = text.replace(/hello/i, "meraba");
console.log(result);

//replace All
result = result.replaceAll("World", "dünyag");
console.log(result);



//toUpperCase
let text2 = "MerHabA";
text2 = text2.toUpperCase();
console.log(text2);

// toLowerCase
text2 = text2.toLowerCase();
console.log(text2);


//trim boşluk silme  .trimStart  .trimEnd
let text3 = "        3          ";
console.log(text3);

text3 = text3.trim();
console.log(text3);



//charAt karakteri  getir
let text4 = "Merhaba";
console.log(text4[0]);
console.log(text4.charAt(0));
console.log(text4.charCodeAt(0));


// Arama Metodu
let text5 = "Yerimi Yerimi Bul Bul";
console.log(text5.indexOf("B"));
console.log(text5.indexOf("Yerimi"));
console.log(text5.lastIndexOf("Yerimi"));

console.log(text5.includes("a")) ;// var mı içinde

let mail = "blablabla@gmail.com";
console.log(mail.includes("@"));
console.log(mail.includes("."));

// console.log(text5.indexOf(/y/i)); calismayan


//startswşth();
let text6 = "Elma Armut"
console.log(text6.startsWith("E"));
console.log(text6.startsWith("A", 5));
// endsWith()

console.log(text6.endsWith("t"));

console.log("\n*****************************\n\n");

let sayi = 999999999999999;
let sayi2 = 9999999999999999;

console.log(sayi);
console.log(sayi2);
console.log(Number.MAX_SAFE_INTEGER);

sayi2 = 999999999999999999n; //bigInt
console.log(sayi2);




let sayi3 = 0.1;
let sayi4 = 0.2;
console.log(sayi3+sayi4);
console.log((sayi3 * 10 + sayi4 * 10) / 10);


sayi = 20;
sayi2 = 20;
sayi3 = "30";
sonuc = "Sonuç" + sayi + sayi2 + sayi3; //Sonuç202030
sonuc2 = "Sonuç" + (sayi + sayi2) + sayi3; //Sonuç4030

console.log(sayi + sayi2);
console.log(sayi + sayi2 + sayi3);
console.log(sonuc);
console.log(sonuc2);


sayi = 5;
console.log(Number.isSafeInteger(sayi)); 

sayi = 5000000000000000000000000000;
console.log(Number.isSafeInteger(sayi)); 

console.log("--------------")

sayi = 5
sayi2 = 9.2;
console.log(Number.isInteger(sayi));
console.log(Number.isInteger(sayi2));

console.log("\n\n------------------\n\n\n")

let meyve1 = "Elma"
let meyve2 = "Armut"
let meyve3 = "Muz"

const meyveler1 = ["Elma", "Armut", "Muz"];
const meyveler2 = [];

const meyveler = [
    "Elma",
    "Armut",
    "Muz",
    "Erik",
    "Vişne",
    "mandalina"
];


console.log(meyveler[0]);
console.log(meyveler[0][0]);

meyveler[0] = "Kiraz"
console.log(meyveler);

for (let i = 0; i < meyveler.length; i++) {
    console.log(meyveler[i]);
    
}

const sebzeler = new Array("pırasa", "karnıbahar", "lahana");
console.log(sebzeler);

console.log("--------------")


let meyve = meyveler[1];
console.log(meyve);


const cars = ["bmw", "mercedes", "tesla"];
console.log(typeof(cars));

let car = cars.toString();
console.log(typeof(car));
console.log(car);

//lengt sayım 1,2,3,4,5,6 .... n;
//lengt sayım 0,1,2,3,4,5 .... n-1;


console.log(cars[cars.length - 1]);

// cars[4] = "toyota";  // yanlis Kullanım
cars.push("toyota");
console.log(cars);

// check number to between 10-50
// check number>0 and number%2=1
// x,y,z numbers upper to down (else if)
// 2 midterm 1 finalterm
// ort > 50 succes
// finalterm >50
// if final ==70 ort lower than 50 , succes

let number = 30;

if (number > 10 && number < 50) {
  console.log("this number is between 10-50");
} else {
  console.log("bu sayi 10 ile 50 arasinda degil");
}

if (number > 0 && number % 2 == 1) {
  console.log("tek sayi ");
} else if (number > 0 && number % 2 == 0) {
  console.log("cift sayi");
} else {
  console.log("sayi negatif");
}

let vize1 = 50;
let vize2 = 50;

let final = 50;

let ort = (vize1 + vize2 + final) / 3;

if (final >= 70) {
  console.log("tebirkler her turlu basarili oldunuz");
} else if (final >= 50 && ort >= 50) {
  console.log("tebrikler dersi basari ile verdiniz.");
} else if (final >= 50 && ort <= 50) {
  console.log("tebrikler dersi basari ile verdiniz.");
} else {
  console.log("yaz okuluna hak kazandin.");
}

let x = 9300;
let y = 500;
let z = 1100;

//z>x>y
//y>z>x

if (z > y && y > x) {
  console.log(z + " " + y + " " + x);
} else if (x > y && y > z) {
  console.log(x + " " + y + " " + z);
} else if (y > x && x > z) {
  console.log(y + " " + x + " " + z);
} else if (x > z && z > y) {
  console.log(x + " " + z + " " + y);
} else if (z > y && y > x) {
  console.log(z + " " + x + " " + y);
} else if (y > z && z > x) {
  console.log(y + " " + z + " " + x);
}

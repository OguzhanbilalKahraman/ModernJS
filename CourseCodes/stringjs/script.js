let ad = "oguzhan";
let soyad = "kahraman";
let yas = 100;
let sehir = "ankara";

//backtick
//ternary operators
let emeklilik =
  65 - yas > 0
    ? "Emekliliğe " + (65 - yas) + "yıl kaldı."
    : "Zaten emekli oldunuz.";

let mesaj = `Benim adım  ${ad} ve soyadım ${soyad}. ${sehir}'de yasiyorum. ${emeklilik} `;

console.log(mesaj);

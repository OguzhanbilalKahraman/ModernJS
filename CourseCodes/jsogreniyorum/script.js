// yas >= 18
// mezuniyet == "lise" ya da mezuniyet =="üniversite"

let yas = 21;
let mezuniyet = "üniversite";

if ((yas >= 18 && mezuniyet == "lise") || mezuniyet == "üniversite") {
  console.log("ehliyet alabilir");
}

// and
// true , false => false
// true, true => true
else {
  console.log("ehliyet şartları tutmuyor.");
}

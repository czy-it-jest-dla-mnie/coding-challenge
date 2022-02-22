var lidl = {
	nazwa: "Lidl",
  iloscMiejscParkingowych: 35,
  produkty: [{
  	nazwa: "masło",
    cena: 5.99
  }, {
  	nazwa: "olej słonecznikowy",
    cena: 7.50
  }, {
  	nazwa: "kiełbasa podwawelska",
    cena: 13.99
  }, {
  	nazwa: "banany",
    cena: 3.49
  }, {
  	nazwa: "orzechy włoskie",
    cena: 11.79
  }]
};

var biedronka = {
	nazwa: "Biedronka",
  iloscMiejscParkingowych: 12,
  produkty: [{
  	nazwa: "wędlina",
    cena: 12.39
  },{
  	nazwa: "masło",
    cena: 4.99
  },{
  	nazwa: "awokado",
    cena: 12.49
  },{
  	nazwa: "olej rzepakowy",
    cena: 10.35
  },{
  	nazwa: "pizza mrożona",
    cena: 7.99
  }]
}

var aldi = {
	nazwa: "Aldi",
  iloscMiejscParkingowych: 40,
  produkty: [{
  	nazwa: "olej rzepakowy",
    cena: 8.25
  },{
  	nazwa: "masło",
    cena: 4.79
  }, {
  	nazwa: "seler",
    cena: 4.49
  }, {
  	nazwa: "pizza mrożona",
    cena: 7.99
  }, {
  	nazwa: "kiełbasa podwawelska",
    cena: 10.99
  }]
}

var sklepy = [lidl, biedronka, aldi]

// Dla rozpoczynająych swoją przygodę z JS

// Założenia - operuj na zmiennych lidl, biedronka i aldi

// zad 1.1: wypisz nazwy wszystkich sklepów

console.log(lidl.nazwa, biedronka.nazwa, aldi.nazwa);

// zad 1.2: wypisz ile produktów jest w każdym sklepie w formacie {nazwa sklepu}: {ilosc produktow}
console.log(`Lidl: ${lidl.produkty.length}, Biedronka: ${biedronka.produkty.length}, Aldi: ${aldi.produkty.length}`);

// zad 1.3: który sklep ma więcej miejsc parkingowych, lidl czy aldi
if (lidl.iloscMiejscParkingowych > aldi.iloscMiejscParkingowych) {
	console.log("Więcej miejsc parkingowych ma Lidl");
}else {
	console.log("Wiecej miejsc parkingowych ma Aldi");
}
// zad 1.4: ile jest wszystkich miejsc parkingowych w sumie przy biedrze, aldim i lidlu
console.log("Wszystkich miejsc parkingowych jest: " + (lidl.iloscMiejscParkingowych + biedronka.iloscMiejscParkingowych + aldi.iloscMiejscParkingowych));
// zad 1.5: jaka jest srednia liczba miejsc parkingowych przy biedrze aldim i lidlu
console.log("Średnia ilość miejsc parkingowych we wszystkich sklepach: " + (lidl.iloscMiejscParkingowych + biedronka.iloscMiejscParkingowych + aldi.iloscMiejscParkingowych)/3);



// Dla trochę bardziej wtajemniczonych

// Założenia - operuj na kolekcji sklepy - twój kod powinien zadziałać także gdybyśmy dorzucili nagle więcej sklepów

// zad 2.1: wypisz wszystkie produkty w formacie: {sklep}:{produkt}:{cena}
var i = 0;
var j = 0;
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
	console.log(sklepy[i].nazwa, sklepy[i].produkty[j].nazwa, sklepy[i].produkty[j].cena);
 }
}
// zad 2.2: wypisz nazwy wszystkich produktów, tak, żeby każda nazwa wystąpiła maksymalnie tylko 1 raz
var i = 0;
var j = 0;
var nazwyProduktu = [];
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
	if (!(nazwyProduktu.includes(sklepy[i].produkty[j].nazwa))){
  	nazwyProduktu.push(sklepy[i].produkty[j].nazwa);
  }
 }
}
console.log(nazwyProduktu);
// zad 2.3: wypisz nazwy wszystkich produktów w porządku alfabetycznym
console.log(nazwyProduktu.sort());
// zad 2.4: w którym sklepie jest najtańsze masło
var i = 0;
var j = 0;
var najnizszaCenaMasla = 1000;
var nazwaSklepu;
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
	if (sklepy[i].produkty[j].nazwa === "masło"){
  	if (sklepy[i].produkty[j].cena < najnizszaCenaMasla){
    	najnizszaCenaMasla = sklepy[i].produkty[j].cena;
      nazwaSklepu = sklepy[i].nazwa;
    }
  }
 }
}

console.log(`Najniższa cena masła jest w sklepie: ${nazwaSklepu} i kosztuje: ${najnizszaCenaMasla}`)
// zad 2.5: w który sklepie jest najdroższe masło
var i = 0;
var j = 0;
var najwyzszaCenaMasla = 0;
var nazwaSklepu;
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
	if (sklepy[i].produkty[j].nazwa === "masło"){
  	if (sklepy[i].produkty[j].cena > najwyzszaCenaMasla){
    	najwyzszaCenaMasla = sklepy[i].produkty[j].cena;
      nazwaSklepu = sklepy[i].nazwa;
    }
  }
 }
}

console.log(`Najwyższa cena masła jest w sklepie: ${nazwaSklepu} i kosztuje: ${najwyzszaCenaMasla}`)

// zad 2.6: w którym sklepie jest najtańsza podwawelska
var i = 0;
var j = 0;
var najnizszaCenaPodwawelskiej = 1000;
var nazwaSklepu;
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
	if (sklepy[i].produkty[j].nazwa === "kiełbasa podwawelska"){
  	if (sklepy[i].produkty[j].cena < najnizszaCenaPodwawelskiej){
    	najnizszaCenaPodwawelskiej = sklepy[i].produkty[j].cena;
      nazwaSklepu = sklepy[i].nazwa;
    }
  }
 }
}

console.log(`Najniższa cena kiełbasy podwawelskiej jest w sklepie: ${nazwaSklepu} i kosztuje: ${najnizszaCenaPodwawelskiej}`)
// zad 2.7: w którym sklepie jest najtańszy produkt
var i = 0;
var j = 0;
var najnizszaCena = 1000;
var nazwaSklepu;
var nazwaProduktu;
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
  	if (sklepy[i].produkty[j].cena < najnizszaCena){
    	najnizszaCena = sklepy[i].produkty[j].cena;
      nazwaSklepu = sklepy[i].nazwa;
      nazwaProduktu = sklepy[i].produkty[j].nazwa;
    }
  }
}

console.log(`Produkt z najniższą ceną to: ${nazwaProduktu}, znajduje się w sklepie ${nazwaSklepu} i kosztuje: ${najnizszaCena}`);

// zad 2.8: w którym sklepie jest najdroższy produkt
var i = 0;
var j = 0;
var najwyzszaCena = 0;
var nazwaSklepu;
var nazwaProduktu;
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
  	if (sklepy[i].produkty[j].cena > najwyzszaCena){
    	najwyzszaCena = sklepy[i].produkty[j].cena;
      nazwaSklepu = sklepy[i].nazwa;
      nazwaProduktu = sklepy[i].produkty[j].nazwa;
    }
  }
}

console.log(`Produkt z najwyzszą ceną to: ${nazwaProduktu}, znajduje się w sklepie ${nazwaSklepu} i kosztuje: ${najwyzszaCena}`);

// zad 2.9: ile wynosi średnia cen produktów w każdym sklepie
var i = 0;
var j = 0;
var sumaCen = 0;
var sumaProduktow = 0;
for (i = 0; i < sklepy.length; i++) {
	for (j = 0; j < sklepy[i].produkty.length; j++){
    	sumaCen += sklepy[i].produkty[j].cena;
      sumaProduktow += 1;
  }
}
console.log("Średnia cena wszystkich produktów wynosi: " + sumaCen/sumaProduktow);
// zad 2.10: wypisz sklepy od najtańszego do najdroższego (uwzględniajać średnią cenę produktów)
var i = 0;
var j = 0;
var srednia = 0;
var sredniaSklepy = [];

for (i = 0; i < sklepy.length; i++) {
	for (j=0; j < sklepy[i].produkty.length; j++){
  	srednia += sklepy[i].produkty[j].cena;
  }
  srednia = srednia/sklepy[i].produkty.length;
  sredniaSklepy.push(srednia, sklepy[i].nazwa);
  srednia = 0;
}

console.log(sredniaSklepy);
// zad 2.11: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z dwóch różnych produktów

// zad 2.12: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z trzech róznych produktów
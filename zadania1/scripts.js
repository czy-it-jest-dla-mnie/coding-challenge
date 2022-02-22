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

// ZADANIA 
// Założenia - operuj na zmiennych lidl, biedronka i aldi

// zad 1.1: wypisz nazwy wszystkich sklepów
console.log(lidl.nazwa)
console.log(aldi.nazwa)
console.log(biedronka.nazwa)

// zad 1.2: wypisz ile produktów jest w każdym sklepie w formacie {nazwa sklepu}: {ilosc produktow}
console.log(lidl.nazwa + ':' + lidl.produkty.length)
console.log(aldi.nazwa + ':' + aldi.produkty.length)
console.log(biedronka.nazwa + ':' + biedronka.produkty.length)

// zad 1.3: który sklep ma więcej miejsc parkingowych, lidl czy aldi
if(lidl.iloscMiejscParkingowych < aldi.iloscMiejscParkingowych) {
    console.log("Aldi ma więcej miejsc parkingowych niż Lidl");
} else if (lidl.iloscMiejscParkingowych > aldi.iloscMiejscParkingowych) {
    console.log("Lidl ma więcej miejsc parkingowych niż Aldi");
} else {
    console.log("Lidl ma tyle samo miejsc parkingowych co Aldi");
}

// zad 1.4: ile jest wszystkich miejsc parkingowych w sumie przy biedrze, aldim i lidlu
var iloscMiejscParkingowych = lidl.iloscMiejscParkingowych + aldi.iloscMiejscParkingowych + biedronka.iloscMiejscParkingowych
console.log(iloscMiejscParkingowych)

// zad 1.5: jaka jest srednia liczba miejsc parkingowych przy biedrze aldim i lidlu
var sredniaIloscMiejscParkingowych = iloscMiejscParkingowych / sklepy.length
console.log(sredniaIloscMiejscParkingowych)




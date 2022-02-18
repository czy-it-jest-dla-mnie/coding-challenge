var lidl = {
  nazwa: "Lidl",
  iloscMiejscParkingowych: 35,
  produkty: [
    {
      nazwa: "masło",
      cena: 5.99
    },
    {
      nazwa: "olej słonecznikowy",
      cena: 7.5
    },
    {
      nazwa: "kiełbasa podwawelska",
      cena: 13.99
    },
    {
      nazwa: "banany",
      cena: 3.49
    },
    {
      nazwa: "orzechy włoskie",
      cena: 11.79
    }
  ]
};

var biedronka = {
  nazwa: "Biedronka",
  iloscMiejscParkingowych: 12,
  produkty: [
    {
      nazwa: "wędlina",
      cena: 12.39
    },
    {
      nazwa: "masło",
      cena: 4.99
    },
    {
      nazwa: "awokado",
      cena: 12.49
    },
    {
      nazwa: "olej rzepakowy",
      cena: 10.35
    },
    {
      nazwa: "pizza mrożona",
      cena: 7.99
    }
  ]
};

var aldi = {
  nazwa: "Aldi",
  iloscMiejscParkingowych: 40,
  produkty: [
    {
      nazwa: "olej rzepakowy",
      cena: 8.25
    },
    {
      nazwa: "masło",
      cena: 4.79
    },
    {
      nazwa: "seler",
      cena: 4.49
    },
    {
      nazwa: "pizza mrożona",
      cena: 7.99
    },
    {
      nazwa: "kiełbasa podwawelska",
      cena: 10.99
    }
  ]
};

var sklepy = [lidl, biedronka, aldi];

// Dla rozpoczynająych swoją przygodę z JS

// Założenia - operuj na zmiennych lidl, biedronka i aldi

// zad 1.1: wypisz nazwy wszystkich sklepów

console.log( lidl.nazwa, biedronka.nazwa, aldi.nazwa);

// zad 1.2: wypisz ile produktów jest w każdym sklepie w formacie {nazwa sklepu}: {ilosc produktow}

// zad 1.3: który sklep ma więcej miejsc parkingowych, lidl czy aldi


if(lidl.iloscMiejscParkingowych > aldi.iloscMiejscParkingowych) {console.log("Lidl ma więcej miejsc parkingowych niż Aldi")}
else if (lidl.iloscMiejscParkingowych < aldi.iloscMiejscParkingowych){ console.log ("Lidl ma mniej miejsc parkingowych niż Aldi")

}
else {
console.log("Lidl ma tyle samo miejsc aprkingowych co Aldi")}


// zad 1.4: ile jest wszystkich miejsc parkingowych w sumie przy biedrze, aldim i lidlu

var sumaWszystkichMiejscPArkingowych = lidl.iloscMiejscParkingowych + aldi.iloscMiejscParkingowych + biedronka.iloscMiejscParkingowych;


// zad 1.5: jaka jest srednia liczba miejsc parkingowych przy biedrze aldim i lidlu

// Dla trochę bardziej wtajemniczonych

// Założenia - operuj na kolekcji sklepy - twój kod powinien zadziałać także gdybyśmy dorzucili nagle więcej sklepów

// zad 2.1: wypisz wszystkie produkty w formacie: {sklep}:{produkt}:{cena}

// zad 2.2: wypisz nazwy wszystkich produktów, tak, żeby każda nazwa wystąpiła maksymalnie tylko 1 raz

// zad 2.3: wypisz nazwy wszystkich produktów w porządku alfabetycznym

// zad 2.4: w którym sklepie jest najtańsze masło

// zad 2.5: w który sklepie jest najdroższe masło

// zad 2.6: w którym sklepie jest najtańsza podwawelska

// zad 2.7: w którym sklepie jest najtańszy produkt

// zad 2.8: w którym sklepie jest najdroższy produkt

// zad 2.9: ile wynosi średnia cen produktów w każdym sklepie

// zad 2.10: wypisz sklepy od najtańszego do najdroższego (uwzględniajać średnią cenę produktów)

// zad 2.11: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z dwóch różnych produktów

// zad 2.12: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z trzech róznych produktów
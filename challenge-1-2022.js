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
console.log("Zad 1.1: ", lidl.nazwa, biedronka.nazwa, aldi.nazwa)

// zad 1.2: wypisz ile produktów jest w każdym sklepie w formacie {nazwa sklepu}: {ilosc produktow}
console.log(
  "Zad 1.2: ", 
  lidl.nazwa + ": " + lidl.produkty.length,
  biedronka.nazwa + ": " + biedronka.produkty.length,
  aldi.nazwa + ": " + aldi.produkty.length)

// zad 1.3: który sklep ma więcej miejsc parkingowych, lidl czy aldi
if(lidl.iloscMiejscParkingowych > aldi.iloscMiejscParkingowych) {
  console.log("Zad 1.3: więcej miejsc parkingowych ma lidl");
} else if (lidl.iloscMiejscParkingowych > aldi.iloscMiejscParkingowych) {
  console.log("Zad 1.3: więcej miejsc parkingowych ma aldi");
} else {
  console.log("Zad 1.3: lidl i aldi maja po tyle samo miejsc parkingowych")
}

// zad 1.4: ile jest wszystkich miejsc parkingowych w sumie przy biedrze, aldim i lidlu
var sumaWszystkichMiejscParkingowych = lidl.iloscMiejscParkingowych + 
  biedronka.iloscMiejscParkingowych + 
  aldi.iloscMiejscParkingowych;

console.log("Zad 1.4: ilos wszystkich miejsc parkingowych to " + sumaWszystkichMiejscParkingowych);

// zad 1.5: jaka jest srednia liczba miejsc parkingowych przy biedrze aldim i lidlu

var iloscSklepow = 3;
var sredniaLiczbaMiejsc = sumaWszystkichMiejscParkingowych / iloscSklepow;

console.log("Zad 1.5: srednia liczba miejsc parkingowych to " + sredniaLiczbaMiejsc);

// Dla trochę bardziej wtajemniczonych

// Założenia - operuj na kolekcji sklepy - twój kod powinien zadziałać także gdybyśmy dorzucili nagle więcej sklepów

// zad 2.1: wypisz wszystkie produkty w formacie: {sklep}:{produkt}:{cena}
console.log("Zad 2.1:");

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  
  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    
    console.log(`${sklep.nazwa}:${produkt.nazwa}:${produkt.cena}`);
  }
}

// zad 2.2: wypisz nazwy wszystkich produktów, tak, żeby każda nazwa wystąpiła maksymalnie tylko 1 raz
console.log("Zad 2.2:");

var wypisaneNazwyProduktow = [];

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  
  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    
    if(wypisaneNazwyProduktow.indexOf(produkt.nazwa) == -1) {
      console.log(produkt.nazwa);
      wypisaneNazwyProduktow.push(produkt.nazwa);
    }
  }
}


// zad 2.3: wypisz nazwy wszystkich produktów w porządku alfabetycznym
console.log("Zad 2.3:");
var wszystkieNazwyProduktow = [];

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  
  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    
    if(wszystkieNazwyProduktow.indexOf(produkt.nazwa) == -1) {
      wszystkieNazwyProduktow.push(produkt.nazwa);
    }
  }
}

wszystkieNazwyProduktow.sort();
console.log(wszystkieNazwyProduktow);

// zad 2.4: w którym sklepie jest najtańsze masło
console.log("Zad 2.4:");
var minimalnaCenaMasla = null;
var sklepZNajtanszymMaslem = null

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  
  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    
    if(produkt.nazwa == "masło") {
      if(minimalnaCenaMasla == null || minimalnaCenaMasla > produkt.cena) {
        sklepZNajtanszymMaslem = sklep;
        minimalnaCenaMasla = produkt.cena;
      }
    }
  }
}

console.log("Sklep z najtanszym maslem to: " + sklepZNajtanszymMaslem.nazwa + " (" + minimalnaCenaMasla + ")");

// zad 2.5: w który sklepie jest najdroższe masło
console.log("Zad 2.5:");
var maksymalnaCenaMasla = null;
var sklepZNajdrozszymMaslem = null

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  
  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    
    if(produkt.nazwa == "masło") {
      if(maksymalnaCenaMasla == null || maksymalnaCenaMasla < produkt.cena) {
        sklepZNajdrozszymMaslem = sklep;
        maksymalnaCenaMasla = produkt.cena;
      }
    }
  }
}

console.log("Sklep z najdrozszym maslem to: " + sklepZNajdrozszymMaslem.nazwa + " (" + maksymalnaCenaMasla + ")");

// zad 2.6: w którym sklepie jest najtańsza podwawelska
// j.w. 

// zad 2.7: w którym sklepie jest najtańszy produkt
console.log("Zad 2.7:");
var sklepZNajtanszymProduktem = null;
var najtanszyProdukt = null;

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  
  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    
    if(najtanszyProdukt == null || najtanszyProdukt.cena > produkt.cena) {
      sklepZNajtanszymProduktem = sklep;
      najtanszyProdukt = produkt;
    }
  }
}

console.log("Sklep z najtanszym produktem to " + sklepZNajtanszymProduktem.nazwa);
console.log("Najtanszy produkt to: " + najtanszyProdukt.nazwa + " (" + najtanszyProdukt.cena + ")");

// zad 2.8: w którym sklepie jest najdroższy produkt
console.log("Zad 2.8:");
var sklepZNajdrozszymProduktem = null;
var najdrozszyProdukt = null;

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  
  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    
    if(najdrozszyProdukt == null || najdrozszyProdukt.cena < produkt.cena) {
      sklepZNajdrozszymProduktem = sklep;
      najdrozszyProdukt = produkt;
    }
  }
}

console.log("Sklep z najdrozszym produktem to " + sklepZNajdrozszymProduktem.nazwa);
console.log("Najdrozszy produkt to: " + najdrozszyProdukt.nazwa + " (" + najdrozszyProdukt.cena + ")");

// zad 2.9: ile wynosi średnia cen produktów w każdym sklepie
console.log("Zad 2.9:");
var srednieCeny = [];

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  var sumaCenProduktow = 0;

  for (var indexProduktu = 0; indexProduktu < sklep.produkty.length; indexProduktu++) {
    var produkt = sklep.produkty[indexProduktu];
    sumaCenProduktow = sumaCenProduktow + produkt.cena;
  }

  srednieCeny.push({
    nazwaSklepu: sklep.nazwa,
    sredniaCenaProduktow: sumaCenProduktow / sklep.produkty.length
  });
}

srednieCeny.forEach(function(sredniaCena) {
  console.log("Srednia cena w " + sredniaCena.nazwaSklepu + " to " + sredniaCena.sredniaCenaProduktow);
});

// zad 2.10: wypisz sklepy od najtańszego do najdroższego (uwzględniajać średnią cenę produktów)
console.log("Zad 2.9:");

var srednieCenyPosortowane = srednieCeny.slice();

srednieCenyPosortowane.sort(function(sklepA, sklepB) {
    if(sklepA.sredniaCenaProduktow > sklepB.sredniaCenaProduktow) {
      return 1;
    } else if (sklepA.sredniaCenaProduktow < sklepB.sredniaCenaProduktow) {
      return -1;
    } else {
      return 0;
    }
  });

srednieCenyPosortowane.forEach(function(sredniaCena) {
  console.log("Srednia cena w " + sredniaCena.nazwaSklepu + " to " + sredniaCena.sredniaCenaProduktow);
});

// zad 2.11: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z dwóch różnych produktów
console.log("Zad 2.11:");
var najtanszeZestawy2 = [];
var najdroszeZestawy2 = [];

for (var indexSklepu = 0; indexSklepu < sklepy.length; indexSklepu++) {
  var sklep = sklepy[indexSklepu];
  var produktyPosortowanePoCenie = sklep.produkty.slice();

  produktyPosortowanePoCenie.sort(function(produktA, produktB) {
    if(produktA.cena > produktB.cena) {
      return 1;
    } else if (produktA.cena < produktB.cena) {
      return -1;
    } else {
      return 0;
    }
  });

  var iloscProduktow = sklep.produkty.length;

  //zrobilem zalozenie ze kazdy sklep ma conajmniej dwa produkty w swojej ofercie
  najtanszeZestawy2.push({
    nazwaSklepu: sklep.nazwa,
    produktyWZestawie: [produktyPosortowanePoCenie[0], produktyPosortowanePoCenie[1]],
    cenaZestawu: produktyPosortowanePoCenie[0].cena + produktyPosortowanePoCenie[1].cena
  });

  najdroszeZestawy2.push({
    nazwaSklepu: sklep.nazwa,
    produktyWZestawie: [produktyPosortowanePoCenie[iloscProduktow-1], produktyPosortowanePoCenie[iloscProduktow-2]],
    cenaZestawu: produktyPosortowanePoCenie[iloscProduktow-1].cena + produktyPosortowanePoCenie[iloscProduktow-2].cena
  });
}

najtanszeZestawy2.sort(function(zestawA, zestawB) {
  if(zestawA.cenaZestawu > zestawB.cenaZestawu) {
    return 1;
  } else if (zestawA.cenaZestawu < zestawB.cenaZestawu) {
    return -1;
  } else {
    return 0;
  }
});

najdroszeZestawy2.sort(function(zestawA, zestawB) {
  if(zestawA.cenaZestawu > zestawB.cenaZestawu) {
    return -1;
  } else if (zestawA.cenaZestawu < zestawB.cenaZestawu) {
    return 1;
  } else {
    return 0;
  }
});

var najtanszyZestaw = najtanszeZestawy2[0];
console.log("Najtanszy zestaw dwoch produktow mozna kupic w " + najtanszyZestaw.nazwaSklepu + " za cene " + najtanszyZestaw.cenaZestawu);

console.log("Produkty w zestawie to:");

najtanszyZestaw.produktyWZestawie.forEach(function(produkt) {
  console.log(produkt.nazwa, produkt.cena);
});


var najdrozszyZestaw = najdroszeZestawy2[0];
console.log("Najdrozszy zestaw dwoch produktow mozna kupic w " + najdrozszyZestaw.nazwaSklepu + " za cene " + najdrozszyZestaw.cenaZestawu);

console.log("Produkty w zestawie to:");

najdrozszyZestaw.produktyWZestawie.forEach(function(produkt) {
  console.log(produkt.nazwa, produkt.cena);
});

// zad 2.12: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z trzech róznych produktów
// j.w. tylko zamiast dwoch produktow trzy
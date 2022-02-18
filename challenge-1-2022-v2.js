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

// Dla trochę bardziej wtajemniczonych

// Założenia - operuj na kolekcji sklepy - twój kod powinien zadziałać także gdybyśmy dorzucili nagle więcej sklepów

// zad 2.1: wypisz wszystkie produkty w formacie: {sklep}:{produkt}:{cena}
console.log("Zad 2.1:");

sklepy.forEach(sklep => sklep
    .produkty
    .forEach(produkt => console.log(`${sklep.nazwa}:${produkt.nazwa}:${produkt.cena}`)));


// zad 2.2: wypisz nazwy wszystkich produktów, tak, żeby każda nazwa wystąpiła maksymalnie tylko 1 raz
console.log("Zad 2.2:");

sklepy
  .flatMap(sklep => sklep.produkty)
  .map(produkt => produkt.nazwa)
  .filter((nazwa, index, wszystkieNazwy) => wszystkieNazwy.indexOf(nazwa) === index)
  .forEach(nazwa => console.log(nazwa));

// zad 2.3: wypisz nazwy wszystkich produktów w porządku alfabetycznym
console.log("Zad 2.3:");

var wszystkieNazwyProduktow = sklepy
  .flatMap(sklep => sklep.produkty)
  .map(produkt => produkt.nazwa)
  .filter((nazwa, index, wszystkieNazwy) => wszystkieNazwy.indexOf(nazwa) === index);

wszystkieNazwyProduktow.sort();
console.log(wszystkieNazwyProduktow);

// zad 2.4: w którym sklepie jest najtańsze masło
console.log("Zad 2.4:");

var sklepZNajtanszymMaslem = znajdzSklepZNajtanszymProduktem(sklepy, "masło");

console.log("Sklep z najtanszym maslem to: " + sklepZNajtanszymMaslem.sklep.nazwa + " (" + sklepZNajtanszymMaslem.produkt.cena + ")");

// zad 2.5: w który sklepie jest najdroższe masło
console.log("Zad 2.5:");

var sklepyZMaslem = sklepy
  .map(sklep => ({
    sklep: sklep,
    maslo: sklep.produkty.find(produkt => produkt.nazwa === "masło")
  }))
  .filter(sklepMaslo => sklepMaslo.maslo != null);

var sklepZNajdrozszymMaslem = sklepyZMaslem
  .sort((sklepA, sklepB) => sklepB.maslo.cena - sklepA.maslo.cena)[0]

console.log("Sklep z najdrozszym maslem to: " + sklepZNajdrozszymMaslem.sklep.nazwa + " (" + sklepZNajdrozszymMaslem.maslo.cena + ")");


// zad 2.6: w którym sklepie jest najtańsza podwawelska

console.log("Zad 2.6:")

var sklepZNajtanszaPodwawelska = znajdzSklepZNajtanszymProduktem(sklepy, "kiełbasa podwawelska");

console.log("Sklep z najtansza podwawelska to: " + sklepZNajtanszaPodwawelska.sklep.nazwa + " (" + sklepZNajtanszaPodwawelska.produkt.cena + ")");


function znajdzSklepZNajtanszymProduktem(sklepy, nazwaProduktu) {
  var sklepZProduktem = sklepy
    .map(sklep => ({
      sklep: sklep,
      produkt: sklep.produkty.find(produkt => produkt.nazwa === nazwaProduktu)
    }))
    .filter(sklepMaslo => sklepMaslo.produkt != null);

  return sklepZProduktem.sort((sklepA, sklepB) => sklepA.produkt.cena - sklepB.produkt.cena)[0]
}

// zad 2.7: w którym sklepie jest najtańszy produkt
console.log("Zad 2.7:");

var sklepZNajtanszymProduktem = sklepy
  .flatMap(sklep => sklep
    .produkty
    .map(produkt => ({
      sklep: sklep,
      produkt: produkt
    })))
  .sort((a, b)=> a.produkt.cena - b.produkt.cena)[0];

console.log("Sklep z najtanszym produktem to " + sklepZNajtanszymProduktem.sklep.nazwa);
console.log("Najtanszy produkt to: " + sklepZNajtanszymProduktem.produkt.nazwa + " (" + sklepZNajtanszymProduktem.produkt.cena + ")");

// zad 2.8: w którym sklepie jest najdroższy produkt
console.log("Zad 2.8:");

var sklepZNajdrozszymProduktem = sklepy
  .flatMap(sklep => sklep
    .produkty
    .map(produkt => ({
      sklep: sklep,
      produkt: produkt
    })))
  .sort((a, b)=> b.produkt.cena - a.produkt.cena)[0];

console.log("Sklep z najdrozszym produktem to " + sklepZNajdrozszymProduktem.sklep.nazwa);
console.log("Najdrozszy produkt to: " + sklepZNajdrozszymProduktem.produkt.nazwa + " (" + sklepZNajdrozszymProduktem.produkt.cena + ")");

// zad 2.9: ile wynosi średnia cen produktów w każdym sklepie
console.log("Zad 2.9:");

var srednieCeny = sklepy.map(sklep => ({
  nazwaSklepu: sklep.nazwa,
  sredniaCena: sklep.produkty.reduce((suma, produkt) => suma + produkt.cena, 0) / sklep.produkty.length
}))

srednieCeny.forEach(function(sredniaCena) {
  console.log("Srednia cena w " + sredniaCena.nazwaSklepu + " to " + sredniaCena.sredniaCena);
});

// zad 2.10: wypisz sklepy od najtańszego do najdroższego (uwzględniajać średnią cenę produktów)
console.log("Zad 2.10:");

var srednieCenyPosortowane = srednieCeny.slice();

srednieCenyPosortowane.sort((a, b)=> a.sredniaCena - b.sredniaCena);

srednieCenyPosortowane.forEach(function(sredniaCena) {
  console.log("Srednia cena w " + sredniaCena.nazwaSklepu + " to " + sredniaCena.sredniaCena);
});

// zad 2.11: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z dwóch różnych produktów
console.log("Zad 2.11:");

var sklepyZPosortowanymiProduktami = sklepy
  .map(sklep => {
    var produktyPosortowaneRosnaco = sklep.produkty.slice();
    produktyPosortowaneRosnaco.sort((a, b) => a.cena - b.cena);

    return {
      nazwaSklepu: sklep.nazwa,
      produktyPosortowaneRosnaco: produktyPosortowaneRosnaco
    };
  });

var sklepyZZestawami = sklepyZPosortowanymiProduktami.map(sklepZPosortowanymiProduktami => {
  var produkty = sklepZPosortowanymiProduktami.produktyPosortowaneRosnaco;
  var iloscProduktow = produkty.length;
  var najtanszyZestaw = [produkty[0], produkty[1]];
  var najdrozszyZestaw = [produkty[iloscProduktow-1], produkty[iloscProduktow-2]];

  return {
    nazwaSklepu: sklepZPosortowanymiProduktami.nazwaSklepu,
    najtanszyZestaw: najtanszyZestaw,
    cenaNajtanszegoZestawu: najtanszyZestaw.reduce((suma, produkt) => suma + produkt.cena, 0),
    najdrozszyZestaw: najdrozszyZestaw,
    cenaNajdrozszegoZestawu: najdrozszyZestaw.reduce((suma, produkt) => suma + produkt.cena, 0)
  };
});

var sklepZNajdrozszymZestawem = sklepyZZestawami
  .slice()
  .sort((a, b) => b.cenaNajdrozszegoZestawu - a.cenaNajdrozszegoZestawu)[0];

console.log(sklepZNajdrozszymZestawem);

var sklepZNajtanszymZestawem = sklepyZZestawami
  .slice()
  .sort((a, b) => a.cenaNajtanszegoZestawu - b.cenaNajtanszegoZestawu)[0];

console.log(sklepZNajtanszymZestawem);

// zad 2.12: w którym sklepie można kupić najtańszy/najdroższy zestaw złożony z trzech róznych produktów
// j.w. tylko zamiast dwoch produktow trzy



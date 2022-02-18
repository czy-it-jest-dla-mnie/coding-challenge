// zad 1.1: wypisz nazwy wszystkich sklepów
console.log(lidl.nazwa, biedronka.nazwa, aldi.nazwa);

// zad 1.2: wypisz ile produktów jest w każdym sklepie w formacie {nazwa sklepu}: {ilosc produktow}
console.log(lidl.nazwa, lidl.produkty.length);
console.log(biedronka.nazwa, biedronka.produkty.length);
console.log(aldi.nazwa, aldi.produkty.length);

// zad 1.3: który sklep ma więcej miejsc parkingowych, lidl czy aldi
if(lidl.iloscMiejscParkingowych > aldi.iloscMiejscParkingowych) {
      console.log("lidl ma więcej miejsc parkingowych");
} else {
      console.log("aldi ma więcej miejsc parkingowych");
}

// zad 1.4: ile jest wszystkich miejsc parkingowych w sumie przy biedrze, aldim i lidlu
var a = lidl.iloscMiejscParkingowych;
var b = biedronka.iloscMiejscParkingowych;
var c = aldi.iloscMiejscParkingowych;
var d = a + b + c;
console.log("wszystkie miejsca parkingowe", d);

// zad 1.5: jaka jest srednia liczba miejsc parkingowych przy biedrze aldim i lidlu
var e = d / sklepy.length;
console.log("średnia ilość miejsc parkingowych:", e);

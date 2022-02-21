// zad 1.1: wypisz nazwy wszystkich sklepów
console.log(lidl.nazwa, biedronka.nazwa, aldi.nazwa);

// zad 1.2: wypisz ile produktów jest w każdym sklepie w formacie {nazwa sklepu}: {ilosc produktow}
console.log(lidl.nazwa + ": " + lidl.produkty.length);
console.log(biedronka.nazwa + ": " + biedronka.produkty.length);
console.log(aldi.nazwa + ": " + aldi.produkty.length);


// zad 1.3: który sklep ma więcej miejsc parkingowych, lidl czy aldi
if(lidl.iloscMiejscParkingowych > aldi.iloscMiejscParkingowych) {
 console.log("lidl ma więcej miejsc parkingowych");
} else if(lidl.iloscMiejscParkingowych == aldi.iloscMiejscParkingowych) {
 console.log("lidl i aldi mają tyle samo miejsc parkingowych");
} else {
 console.log("aldi ma więcej miejsc parkingowych");
}

// zad 1.4: ile jest wszystkich miejsc parkingowych w sumie przy biedrze, aldim i lidlu
var lidlMiejsca = lidl.iloscMiejscParkingowych;
var biedronkaMiejsca = biedronka.iloscMiejscParkingowych;
var aldiMiejsca = aldi.iloscMiejscParkingowych;
var wszystkieMiejsca = lidlMiejsca + biedronkaMiejsca + aldiMiejsca;
console.log("wszystkie miejsca parkingowe" + ": " + wszystkieMiejsca);

// zad 1.5: jaka jest srednia liczba miejsc parkingowych przy biedrze aldim i lidlu
var sredniaMiejsc = wszystkieMiejsca / sklepy.length;
console.log("średnia ilość miejsc parkingowych" + ": " + sredniaMiejsc);


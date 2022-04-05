var users = [{
	name: 'Filip',
  surname: 'Paluch',
  age: 30,
  address: {
  	country: 'Italy',
  },
  emails: ['filip@gmail.com', 'paluch@gmail.com'],
  expenses: [
  	{
  		 title: 'Maslo',
       price: 5.99
  	},
    {
  		 title: 'Chleb',
       price: 4.80
  	},
    {
  		 title: 'Szynka',
       price: 18.50
  	}
  ]
},
{
  name: 'Damian',
  surname: 'Krychowski',
  age: 31,
  address: {
  	country: 'Poland'
  },
  emails: ['damian@gmail.com', 'krychowski@o2.pl'],
  expenses: [
  	{
  		 title: 'Woda',
       price: 15.99
  	},
    {
  		 title: 'Mieso',
       price: 43.00
  	}
  ]
},

{
  name: 'Jan',
  surname: 'Kowalski',
  age: 17,
  address: {
  	country: 'Poland'
  },
  emails: [],
  expenses: [
  	{
  		 title: 'Kawior',
       price: 150.99
  	},
    {
  		 title: 'Mieso',
       price: 67.40
  	}
  ]
},

{
  name: 'Jan',
  surname: 'Nowak',
  age: 25,
  address: {
  	country: 'Spain'
  },
  emails: ['jan.nowak@o2.pl'],
  expenses: [
  	{
  		 title: 'Pieczywo',
       price: 6.99
  	},
    {
  		 title: 'Schab',
       price: 27.40
  	}
  ]
}]

// 1. Wypisz w pętli 'for of' imiona wszystkich użytkowników
console.log('Zadanie 1')
for (var imie of users){
  console.log('Imię: ', imie.name)
}
console.log('')

// 2. Wypisz w pętli 'for' imiona wszystkich użytkowników
console.log('Zadanie 2')
for (var index = 0; index < users.length; index++){
  console.log('Imię: ',users[index].name)
  console.log('')
}
console.log('Wstawienie console.log do pętli rozdzieliło obu Janów')
console.log('')


// 3. Wypisz w pętli (dowolnej) imię i nazwisko wszystkich użytkownikow którzy mieszkają w Polsce
// Podpowiedz: użyj warunku 'if'
console.log('Zadanie 3')
for (var user of users){
    if(user.address.country =='Poland'){ 
      console.log('Mieszkaniec Polski: ', user.name, user.surname)
    }
}
console.log('')

// 4. Zsumuj wiek wszystkich użytkowników w pętli (dowolnej) i wypisz ostateczny wynik - wypisać powinnien się tylko jeden raz wynik końcowy.
console.log('Zadanie 4')
var sumaLat = 0
for (var user of users){
  sumaLat = user.age + sumaLat
}
console.log('suma lat wszystkich osób: ', sumaLat)
console.log('')

// 5. Policz za pomocą pętli (dowolnej) średnią wieku wszystkich użytkowników
console.log('Zadanie 5')
var sumaLat = 0
var nrPetli = 0
for (var user of users){
  nrPetli++
  sumaLat = user.age + sumaLat
}
//console.log(nrPetli)
console.log('średnia wieku: ', sumaLat/nrPetli)
console.log('')

// 6. Wypisz za pomocą pętli 'for of' wszystkie emaile wszystkich użytkowników
console.log('Zadanie 6')
for (var user of users){
  console.log('Email użytkownika: ',user.emails)
}
console.log('')

// 7. Wypisz za pomocą pętli 'while' wszystkie emaile które są na 'gmail' wszystkich użytkowników
console.log('Zadanie 7')


// 8. Podsumuj wszystkie wydatki wszystkich użytkowników i wypisz wartość końcową
console.log('Zadanie 7')

// 9. Podsumuj wydatki na mięso wszystkich użytkowników

// 10. Wyznacz i wypisz użytkownika który wydal najwięcej oraz wypisz tą kwotę


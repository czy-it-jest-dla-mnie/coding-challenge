/* ZADANIE DOMOWE */

/*1. Wypisz nazwiska pierwszych 2 użytkowników którzy są najmłodsi */

SELECT TOP 2 LastName
FROM Users
Where Age is not null
ORDER BY Age ASC

/*2. Wypisz wszystkie dane użytkowników którzy są poniżej 18 roku lub powyżej 30 i mieszkają w Polsce */

SELECT *
FROM Users
Where (Age < 18 OR Age > 30) AND Country = 'Poland'

/*3. Wypisz Imiona użytkowników w kolejności alfabetycznej */

SELECT FirstName
FROM Users
ORDER BY FirstName ASC

/*4. * Znajdz użytkownikow których wiek jest liczbą parzystą */

SELECT * 
FROM Users 
WHERE (Age % 2) = 0

/*5. * Wypisz połączone imię i nazwisko wszystkich użytkowników w formie jednej 
kolumny o nazwie 'UserName'. Format wypisanych danych to 'Filip Paluch' jako 
jedna kolumna zamiast dwóch kolumn. */

SELECT CONCAT(FirstName, ' ', LastName) 
AS UserName
FROM Users





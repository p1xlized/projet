create database Covoiturage
go
use Covoiturage

-- Cration des tables
create table Utilisateurs (
noUtilisateur int IDENTITY(1,1) NOT NULL PRIMARY KEY,
prenom varchar(30) NOT NULL,
nom varchar(30) NOT NULL,
adresse varchar(30) NOT NULL,
adresseCourriel varchar(30) NOT NULL,
numeroTelephonique numeric(10) NOT NULL,
motDePasse varchar(30) NOT NULL
)

create table Villes (
nomVille varchar(30) NOT NULL PRIMARY KEY
)

create table DeplacementsOfferts (
noDeplacementOffert int IDENTITY(1,1) NOT NULL PRIMARY KEY,
villeDestination varchar(30) NOT NULL REFERENCES Villes(nomVille),
villeDepart varchar(30) NOT NULL REFERENCES Villes(nomVille),
dateDepart date NOT NULL,
heure varchar NOT NULL,
nbrPlacesOffertes numeric(1) NOT NULL,
trajet varchar(30),
cout int,
interact varchar(30),
comptant varchar(30),
noUtilisateur int NOT NULL REFERENCES Utilisateurs(noUtilisateur)
)

create table DeplacementsDemandes (
noDeplacementDemande int IDENTITY(1,1) NOT NULL PRIMARY KEY,
villeDestination varchar(30) NOT NULL REFERENCES Villes(nomVille),
villeDepart varchar(30) NOT NULL REFERENCES Villes(nomVille),
dateDepart date NOT NULL,
heure varchar NOT NULL,
noUtilisateur int NOT NULL REFERENCES Utilisateurs(noUtilisateur)
)

create table Reservations (
noReservation int IDENTITY(1,1) NOT NULL PRIMARY KEY,
noDeplacementOffert int NOT NULL REFERENCES DeplacementsOfferts(noDeplacementOffert),
noUtilisateur int NOT NULL REFERENCES Utilisateurs(noUtilisateur)
)


-- TESTS SCRUD
insert into Utilisateurs values
('alex', '12343', '7348 rue bruh', 'a.a@gmail.com',4389657465,'salut123')
--
update Utilisateurs
set nom = 'amine'
where noUtilisateur = 1
--
DELETE from Utilisateurs
where noUtilisateur = 1
select * from Utilisateurs
--
insert into Utilisateurs values
('Rifat','Katranci', '8956 rue bossuet', 'rifatkatranci@gmail.com',5148281832,'salut123')
select * from Utilisateurs
select * from Utilisateurs
where noUtilisateur = 3
-- Suppression des tests SCRUD
DELETE from Utilisateurs
December 2, 2022

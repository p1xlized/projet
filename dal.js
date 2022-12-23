// obtenir demande(idDemande)
async function obtenirDemande(idDemande) {
  const demande = await knex('DeplacementsDemandes').where('noDeplacementDemande', idDemande);
  const dateRecu = demande[0].dateDepart
  const demandeTosend = {
      idDemande: demande[0].noDeplacementDemande,
      depart: demande[0].villeDestination,
      destination: demande[0].villeDepart,
      date: dateRecu,
      heure: demande[0].heure,
      idUtilisateur: demande[0].noUtilisateur,
  }

  return demandeTosend;
}

// obtenir toutes les demandes
async function obtenirDemandesAVenir() {
  const demandes = await knex('DeplacementsDemandes');
  const demandesTosend = [];
  demandes.forEach((demande) => {
      const demandeTosend = {
          idDemande: demande.noDeplacementDemande,
          depart: demande.villeDestination,
          destination: demande.villeDepart,
          date: demande.dateDepart,
          heure: demande.heure,
          idUtilisateur: demande.noUtilisateur,
      }
      demandesTosend.push(demandeTosend);
  })
  return demandesTosend;
}

// avoir les utilisateurs et leurs demandes
async function obtenirDemandesUtilisateur(idUtilisateur) {
  const demandes = await knex('DeplacementsDemandes').where("noUtilisateur", idUtilisateur);
  const demandesTosend = [];
  demandes.forEach((demande) => {
      const demandeTosend = {
          idDemande: demande.noDeplacementDemande,
          depart: demande.villeDestination,
          destination: demande.villeDepart,
          date: demande.dateDepart,
          heure: demande.heure,
          idUtilisateur: demande.noUtilisateur,
      }
      demandesTosend.push(demandeTosend);
  })
  return demandesTosend;
}

// obtenir les demandes d'un utilisateur
async function obtenirUtilisateurEtDemandes() {
  const Utilisateurs = await knex("Utilisateurs")
  const UtilisateursTosend = []
  for (let i = 0; i < Utilisateurs.length; i++) {
      await obtenirDemandesUtilisateur(Utilisateurs[i].noUtilisateur).then(
          (demandes) => {
              UtilisateursTosend.push({
                  idUtilisateur: Utilisateurs[i].noUtilisateur,
                  nom: Utilisateurs[i].nom,
                  prenom: Utilisateurs[i].prenom,
                  adresse: Utilisateurs[i].adresse,
                  courriel: Utilisateurs[i].adresseCourriel,
                  telephone: Utilisateurs[i].numeroTelephonique,
                  demandes: demandes,
              });
          }
      )
  }
  return UtilisateursTosend;
}

// add demandes and return id
async function ajouterDemande(demande) {
  await knex('DeplacementsDemandes').insert(demande);
  const demandes = await knex('DeplacementsDemandes');
  const idDemande = demandes[demandes.length - 1].noDeplacementDemande;
  console.log(idDemande);
}


//update demande and return number line updated
async function modifierDemande(demande) {
  const idDemande = demande.noDeplacementDemande;
  const nbLigne = await knex('DeplacementsDemandes').where('noDeplacementDemande', idDemande).update(demande);
  return nbLigne;
}

// delete demande and return number of line deleted
async function supprimerDemande(idDemande) {
  const NombreDemandesAvant = (await obtenirDemandesAVenir()).length
  await knex('DeplacementsDemandes').where('heure', '10:10').del();
  const NombreDemandesApres = (await obtenirDemandesAVenir()).length
  const NombreSupprimer = NombreDemandesAvant - NombreDemandesApres
  return NombreSupprimer;
}

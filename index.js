const express = require('express');
const canevas = require('./views/canevas');
const offres = require('./views/offres');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  let vue = canevas.genererEntete();
  vue += await canevas.genererAccueil();
  vue += canevas.genererPiedDePage();
  return res.send(vue);
});

app.get('/obtenirOffres', async (req, res) => {
  let vue = canevas.genererEntete();
  vue += await offres.genererOffres();
  vue += canevas.genererPiedDePage();
  res.send(vue);
});

app.get('/obtenirOffre/:idOffre', async (req, res) => {
  let vue = canevas.genererEntete();
  vue += await offres.genererOffre(req.params.idOffre);
  vue += canevas.genererPiedDePage();
  res.send(vue);
});

app.listen(5000, () => {
  console.log('Serveur en exécution');
  console.log('http://localhost:5000');
});
const data = await obtenirOffres()
const resultat = await data.json()
let offres = ' '
resultat.foreach( (result) => {
offres += `<div>
${result.depart}
</div><br>`
} )

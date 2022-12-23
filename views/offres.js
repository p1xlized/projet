const dal = require('../dal');

async function genererOffres() {
  const offres = await dal.obtenirOffres();

  const lignes = offres.map((offre) => `<p>depart: ${offre.depart} arrivee: ${offre.destination}</p>`).join('');
  const html = `
       ${lignes}
   `;

  return html;
}

async function genererOffre(idOffre) {
  const offres = await dal.obtenirOffre(idOffre);

  const lignes = offres.map((offre) => `<p>depart: ${offre.depart} arrivee: ${offre.destination}</p>`).join('');
  const html = `
      ${lignes}
  `;

  return html;
}

module.exports = {
  genererOffres,
  genererOffre,
};

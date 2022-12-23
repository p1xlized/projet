function genererEntete() {
  document.getElementById('nav').innerHTML = `
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Covoiturage</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <style>
      .fullheight {
        height:100%;
      }
      </style>
    </head>
    <body>
      <div class="columns">
        <div class="column">
        <a class="button" href="/">Accueil</a>
        </div>
        <div class="column">
          <a class="button" href="obtenirOffres">Les Offres</a>
        </div>
        <div class="column">
          <a class="button" href="obtenirOffre/2">Offre #2</a>
        </div>
        <div class="column">
          Formulaire
        </div>
      </div>
      <div class="container">
        <div class="notification is-primary">
  `;
  return html;
}

function genererAccueil() {
  document.getElementById('body').innerHTML = `
      <section class="hero">
        <div class="hero-body">
          <p class="title">
            Bienvenue dans l'application Covoiturage
          </p>
          <p class="subtitle">
          </p>
        </div>
      </section>
  `;

  return html;
}

function genererPiedDePage() {
  document.getElementById('pied').innerHTML = `
    </div>
  </div>
        <footer class="footer">
        <div class="content has-text-centered">
          <p>
          <strong>Val-Des-Lacs Covoiturage</strong> fait par <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Alex Paduret</a>.
          </p>
        </div>
      </footer>
    </body>
  </html>`;

  return html;
}


 document.getElementById('body').innerHTML = offres
module.exports = {
  genererEntete,
  genererAccueil,
  genererPiedDePage,
};

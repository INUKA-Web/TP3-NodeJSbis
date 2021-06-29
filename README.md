# TP3-NodeJSbis
Suite du cours / TP NodeJS

## Correction de l'exercice du TP précédent

> envoyer les paramètres en POST et non en GET : docs à http://expressjs.com/en/5x/api.html#app.post.method et http://expressjs.com/en/5x/api.html#req.body

- Modifier la page HTML pour qu'elle envoie le formulaire en POST
- dans `index.js`, rajouter 
  - `const bodyParser = require('body-parser')`
  - `app.use(bodyParser.urlencoded({ extended: true }))`
- dans `index.js`, remplacer le traitement de la requête en GET /disbonjour par :
  ```javascript
  app.post('/disbonjour', (req, res) => {
    res.send('Bonjour ' + req.body.personne)
  })
  ```


> faire en sorte que `/disbonjour` renvoie une page HTML (et pas juste du texte) : modifier le contenu de "req.send" en y rajoutant du code HTML

`res.send('<html><body><h1>Bonjour <span style="color:red">' + req.body.personne + '</span></h1></body></html>')`

> faire en sorte d'inclure l'horloge côté client qu'on a faite la semaine dernière dans la réponse de disbonjour :
  - rajouter une balise "script" dans la page HTML
  - servir le fichier de script en question à l'aide de http://expressjs.com/en/5x/api.html#res.sendFile (regarder ce qui a été fait pour servir le fichier index.html).

...

## Templating de pages Web

Utilisation de EJS avec Express

Exemple de tuto : https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-fr

**Préparation :**

1. Installer EJS : `npm i ejs` dans le répertoire de votre projet
2. Définir EJS comme moteur de rendu dans le serveur : ajouter l'instruction `app.set('view engine', 'ejs');` dans le fichier index.js
3. Créer un répertoire `views` dans le répertoire du projet, où vous mettrez les modèles (templates) avec une extension .ejs

**Création d'un template :**

Faire une page Web simple, et l'enregistrer dans `views` avec une extension .ejs

**Association de ce template avec une requête du serveur :**

1. Dans index.js, rajouter un objet JSON dans l'appel du template, avec les données à templater :
  `res.render('bonjour', {personne: req.body.personne})`
2. Dans le template, rajouter une variable qui utilise le nom de la propriété de l'objet JSON pour le placer dans la page HTML :
  `<h1>Bonjour <%= personne %></h1>`


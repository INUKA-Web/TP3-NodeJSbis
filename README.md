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


> faire en sorte d'inclure l'horloge côté client qu'on a faite la semaine dernière dans la réponse de disbonjour :
  - rajouter une balise "script" dans la page HTML
  - servir le fichier de script en question à l'aide de http://expressjs.com/en/5x/api.html#res.sendFile (regarder ce qui a été fait pour servir le fichier index.html).

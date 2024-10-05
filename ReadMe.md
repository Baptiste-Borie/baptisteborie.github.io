# Contenu de l'archive

Vous trouverez dans cet archive mon rendu pour le dm de css.
Un répo est également accessible à l'adresse :
https://github.com/Baptiste-Borie/baptisteborie.github.io

Le rendu est visible à l'adresse :

https://baptiste-borie.github.io/baptisteborie.github.io/

# Boostrap

Ne conaissant pas ce bootstrap et ayant fait ce DM à une époque ou n'avions pas encore eu le cours j'ai décidez de me limiter dans l'utilisation de bootsrap.

C'est donc le header composé de l'image "Mon service-Public.fr" qui utilise la grille bootsrap.

Elle divise cette zone en une ligne et 2 colonne. Sur l'élement de recherche j'ai également rajouté en bootsrap l'équivalent de :

```
display : flex;
justify-content : flex-end;
align-items : center;
```

# Gestion du style pour le reste de la page

Pour le reste de la page j'ai beaucoup utilisé `display : flex`et tout ses variantes. Je suis très familié avec CSS et surtour avec les flexbox donc cela me semblait être les solutions les plus simple à chaque fois.

Flexbox me permet notamment de très peu utilisé les règles `height` et `width`. Il existe un seul endroit ou j'ai joué avec les largeurs et les positions c'est pour les sous-menus. La règle CSS correspondante est `.navLi > ul` mais j'ai détaillé dans le code les choix et les calculs fait pour bien aligné ces sous menus.

Un des gros avantages de Flexbox est également la gestion du style pour mobile. Il me suffit de passer les élements de `row`à `column`.

Comme beaucoup de couleur se répétait j'ai fait le choix de défini un "set" de couleur pour la page :

```
:root {
  --dark-blue: #205597;
  --very-dark-blue: #24167d;
  --footer-color: #1b7dd6;
  --light-blue: #f0f6f8;
  --red: #a31f00;
}
```

Cette démarche me permet de cibler plus facilement des couleurs usuelles à l'aide de la règle `var(--dark-blue)` par exemple.

# Style général de la page

Je vais donc faire une explication rapide du style de la page :

- L'élement `header` est donc géré entièrement avec bootsrap.
- L'élément `nav` est lui une Flexbox ou les éléments sont disposés sur une ligne (`flex-direction: row`). Les `li` enfant direct ciblés avec la classe `.navLi` ont une `position: relative` pour permettre aux enfants de s'aligner dessus. Les sous-menus possède la proprieté: `display: none` ce qui entraine leur retrait du DOM de la page. À l'aide de la propriété `hover` on le passe en `display: block` au survol des menus parents.
- L'élément ayant pour identifiant : "location" est juste une flexBox disposé sur une ligne.
- L'élément `main` est une flexBox disposé lui en colonne. Il contient à l'intérieur d'autres élément flexBox.
- L'élément `aside` est une flexBox disposé en colonne également. Afin de cibler les différents div pour les couleurs j'ai utilisé les éléments `:first-child` et `:last-child` ainsi que d'autre selecteurs.
- L'élément `footer` a une largeur défini à `75%`. Sinon c'est également une flexBox dans lequel les éléments sont disposés sur une ligne. J'ai réutilisé `:last-child` afin de sélectionner la dernière div.

# Responsive

Afin de gagné légerement en clareté dans le projet j'ai décidé de faire le style à part dans le fichier `styleMobile.css`.

J'estime le screen être à une largeur d'environ `385px`. Mais afin de ne pas avoir de problème d'affichage j'ai choisi de passer en mode "mobile" à partir de `768px`.

Comme mentionné précédemment beaucoup d'élément changent l'orientation de la flexBox de ligne à colonne lors de ce changement de mode.

Je réajuste certaine largeur également comme les menus qui était fixe.

## Bonus

J'ai également mis en place pour le responsive le menu déroulant. Cela m'as demandé d'ajouter un peu de javascript pour l'événement de clique.

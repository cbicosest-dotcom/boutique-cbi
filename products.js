const PRODUCTS = [
  {
    "id": 1,
    "name": "Flyer Formation En Cosmetique",
    "category": "Formations & livres",
    "image": "assets/formation-professionnelle-flyer-formation-en-cosmetique.webp",
    "price": 0
  },
  {
    "id": 2,
    "name": "Formation En Chimie Industrielle",
    "category": "Formations & livres",
    "image": "assets/formation-professionnelle-formation-en-chimie-industrielle.webp",
    "price": 0
  },
  {
    "id": 3,
    "name": "Formation En Dermocosmetique Capillaire",
    "category": "Formations & livres",
    "image": "assets/formation-professionnelle-formation-en-dermocosmetique-capillaire.webp",
    "price": 0
  },
  {
    "id": 4,
    "name": "Formation En Dermocosmetique",
    "category": "Formations & livres",
    "image": "assets/formation-professionnelle-formation-en-dermocosmetique.webp",
    "price": 0
  },
  {
    "id": 5,
    "name": "Livre De Dermocosmetique Capillaire",
    "category": "Formations & livres",
    "image": "assets/formation-professionnelle-livre-de-dermocosmetique-capillaire.webp",
    "price": 0
  },
  {
    "id": 6,
    "name": "Livre De Matieres Premieres Cosmetique",
    "category": "Formations & livres",
    "image": "assets/formation-professionnelle-livre-de-matieres-premieres-cosmetique.webp",
    "price": 0
  },
  {
    "id": 8,
    "name": "Eau De Parfum 10",
    "category": "Parfumerie",
    "image": "assets/parfumerie-eau-de-parfum-10.webp",
    "price": 0
  },
  {
    "id": 9,
    "name": "Huile De Parfum Sensuel",
    "category": "Parfumerie",
    "image": "assets/parfumerie-huile-de-parfum-sensuel.webp",
    "price": 0
  },
  {
    "id": 10,
    "name": "Huile Parfum Passion",
    "category": "Parfumerie",
    "image": "assets/parfumerie-huile-parfum-passion.webp",
    "price": 0
  },
  {
    "id": 11,
    "name": "Parfum Coeur De Jardin",
    "category": "Parfumerie",
    "image": "assets/parfumerie-parfum-coeur-de-jardin.webp",
    "price": 0
  },
  {
    "id": 12,
    "name": "Parfum Essence",
    "category": "Parfumerie",
    "image": "assets/parfumerie-parfum-essence.webp",
    "price": 0
  },
  {
    "id": 13,
    "name": "Parfum Love L",
    "category": "Parfumerie",
    "image": "assets/parfumerie-parfum-love-l.webp",
    "price": 0
  },
  {
    "id": 14,
    "name": "Parfum Love You",
    "category": "Parfumerie",
    "image": "assets/parfumerie-parfum-love-you.webp",
    "price": 0
  },
  {
    "id": 15,
    "name": "Parfum Love",
    "category": "Parfumerie",
    "image": "assets/parfumerie-parfum-love.webp",
    "price": 0
  },
  {
    "id": 16,
    "name": "Parfum Passion 30",
    "category": "Parfumerie",
    "image": "assets/parfumerie-parfum-passion-30.webp",
    "price": 0
  },
  {
    "id": 17,
    "name": "Parfum Passion",
    "category": "Parfumerie",
    "image": "assets/parfumerie-parfum-passion.webp",
    "price": 0
  },
  {
    "id": 18,
    "name": "Baume Capillaire Nadi 18",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-baume-capillaire-nadi-18.webp",
    "price": 0
  },
  {
    "id": 19,
    "name": "Baume Capillaire Royal Crown",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-baume-capillaire-royal-crown.webp",
    "price": 0
  },
  {
    "id": 20,
    "name": "Baume Nadi 18 Vente En Gros",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-baume-nadi-18-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 21,
    "name": "Elixir Pousse Extreme Royal Crown",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-elixir-pousse-extreme-royal-crown.webp",
    "price": 0
  },
  {
    "id": 22,
    "name": "Gamme Royal Crown",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-gamme-royal-crown.webp",
    "price": 0
  },
  {
    "id": 23,
    "name": "Leave In Royal Crown",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-leave-in-royal-crown.webp",
    "price": 0
  },
  {
    "id": 24,
    "name": "Lotion Cappilaire Royal Crown",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-lotion-cappilaire-royal-crown.webp",
    "price": 0
  },
  {
    "id": 25,
    "name": "Masque Cappillaire Royal Crown",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-masque-cappillaire-royal-crown.webp",
    "price": 0
  },
  {
    "id": 26,
    "name": "Nadi 18",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-nadi-18.webp",
    "price": 0
  },
  {
    "id": 27,
    "name": "Serum Cappilaire Nadi Pro",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-serum-cappilaire-nadi-pro.webp",
    "price": 0
  },
  {
    "id": 28,
    "name": "Shampoing Antipelliculaire",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-shampoing-antipelliculaire.webp",
    "price": 0
  },
  {
    "id": 29,
    "name": "Shampoing Reparateur Royal Crown",
    "category": "Soins capillaires",
    "image": "assets/produits-capillaires-shampoing-reparateur-royal-crown.webp",
    "price": 0
  },
  {
    "id": 30,
    "name": "Deboucheur Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-deboucheur-faith-clean.webp",
    "price": 0
  },
  {
    "id": 31,
    "name": "Detartrant",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-detartrant.webp",
    "price": 0
  },
  {
    "id": 32,
    "name": "Detergent Liquide Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-detergent-liquide-faith-clean.webp",
    "price": 0
  },
  {
    "id": 33,
    "name": "Detergent Liquide",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-detergent-liquide.webp",
    "price": 0
  },
  {
    "id": 34,
    "name": "Eau De Javel",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-eau-de-javel.webp",
    "price": 0
  },
  {
    "id": 35,
    "name": "Lave Linge",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-linge.webp",
    "price": 0
  },
  {
    "id": 36,
    "name": "Lave Mains",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-mains.webp",
    "price": 0
  },
  {
    "id": 37,
    "name": "Lave Sol",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-sol.webp",
    "price": 0
  },
  {
    "id": 38,
    "name": "Lave Vitre Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-vitre-faith-clean.webp",
    "price": 0
  },
  {
    "id": 39,
    "name": "Liquide Vaisselle",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-liquide-vaisselle.webp",
    "price": 0
  },
  {
    "id": 40,
    "name": "Savon Liquide",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-savon-liquide.webp",
    "price": 0
  },
  {
    "id": 41,
    "name": "Souplne Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-souplne-faith-clean.webp",
    "price": 0
  },
  {
    "id": 42,
    "name": "Black Diamont Eclaircissant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-black-diamont-eclaircissant.webp",
    "price": 0
  },
  {
    "id": 43,
    "name": "Creme De Visage Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-fresh.webp",
    "price": 0
  },
  {
    "id": 44,
    "name": "Creme De Visage Nel'S Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-nel-s-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 45,
    "name": "Creme De Visage Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 46,
    "name": "Gel De Douche Fresh Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gel-de-douche-fresh-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 47,
    "name": "Gel Douche Clarifiant Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gel-douche-clarifiant-fresh.webp",
    "price": 0
  },
  {
    "id": 48,
    "name": "Gel Sparkle",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gel-sparkle.webp",
    "price": 0
  },
  {
    "id": 49,
    "name": "Gommage Corporel Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-corporel-fresh.webp",
    "price": 0
  },
  {
    "id": 50,
    "name": "Gommage Eclaircissant Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-eclaircissant-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 51,
    "name": "Gommage Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-tp.webp",
    "price": 0
  },
  {
    "id": 52,
    "name": "Gommage Visage Fresh Clarifiant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-visage-fresh-clarifiant.webp",
    "price": 0
  },
  {
    "id": 53,
    "name": "Huile Glow Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-fresh.webp",
    "price": 0
  },
  {
    "id": 54,
    "name": "Huile Glow Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-fresh.webp",
    "price": 0
  },
  {
    "id": 55,
    "name": "Huile Glow Visage",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-visage.webp",
    "price": 0
  },
  {
    "id": 56,
    "name": "Lait Fresh Clarifiant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lait-fresh-clarifiant.webp",
    "price": 0
  },
  {
    "id": 57,
    "name": "Lait Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lait-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 58,
    "name": "Lotion Et Creme Neils",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-et-creme-neils.webp",
    "price": 0
  },
  {
    "id": 59,
    "name": "Lotion Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-fresh.webp",
    "price": 0
  },
  {
    "id": 60,
    "name": "Lotion Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-tp.webp",
    "price": 0
  },
  {
    "id": 61,
    "name": "Lumeora",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lumeora.webp",
    "price": 0
  },
  {
    "id": 62,
    "name": "Mousse Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-mousse-tp.webp",
    "price": 0
  },
  {
    "id": 63,
    "name": "Recherche Representation",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-recherche-representation.webp",
    "price": 0
  },
  {
    "id": 64,
    "name": "Savon Antiseptique King Nature",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-antiseptique-king-nature.webp",
    "price": 0
  },
  {
    "id": 65,
    "name": "Savon Black Diamand Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-black-diamand-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 66,
    "name": "Savon Clarifiant Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-clarifiant-fresh.webp",
    "price": 0
  },
  {
    "id": 67,
    "name": "Savon Eclaircissant Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-eclaircissant-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 68,
    "name": "Savon Golden Glow Curcuma",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-curcuma.webp",
    "price": 0
  },
  {
    "id": 69,
    "name": "Savon Golden Glow Tomate",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-tomate.webp",
    "price": 0
  },
  {
    "id": 70,
    "name": "Savon Golden Glow Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 71,
    "name": "Savon Golden Glow",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow.webp",
    "price": 0
  },
  {
    "id": 72,
    "name": "Savon Lumeora Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-lumeora-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 73,
    "name": "Savon Lumeora",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-lumeora.webp",
    "price": 0
  },
  {
    "id": 74,
    "name": "Savon Sparkle",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-sparkle.webp",
    "price": 0
  },
  {
    "id": 75,
    "name": "Savon Super Eclaircissant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-super-eclaircissant.webp",
    "price": 0
  },
  {
    "id": 76,
    "name": "Savon Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 77,
    "name": "Savon Traitant A La Spiruline",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-traitant-a-la-spiruline.webp",
    "price": 0
  },
  {
    "id": 78,
    "name": "Serum Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-serum-tp.webp",
    "price": 0
  },
  {
    "id": 79,
    "name": "Sparkle Eclaircissant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-sparkle-eclaircissant.webp",
    "price": 0
  }
];

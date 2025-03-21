import type {WordRepository} from "@/domain/repositories/WordRepository.ts";

export class WordInMemoryRepository implements WordRepository {
  getLocation(): string {
    return [
      "grotte", "château", "forêt", "temple", "caverne", "montagne", "crypte",
      "tour", "ruines", "abîme", "portail", "sanctuaire", "donjon", "chemin",
      "tombeau", "labyrinthe", "autel", "pont", "sentier", "île", "lac",
      "trésor", "grimoire", "dragon", "sorcier", "gobelin", "pierre", "étoile",
      "taverne", "bateau", "fleur", "lame", "rocher", "bastion", "cité", "cercle",
      "fontaine", "miroir", "vallée", "rivière", "désert", "jungle", "manoir",
      "marais", "volcan", "palais", "arbre", 'mer'
    ];
  }

  getAdjectives(): string {
    return [
      "ancien", "sombre", "mystérieux", "profond", "lumineux", "maudit", "sacré",
      "perdu", "oublié", "secret", "mortel", "étrange", "magique", "enchanté",
      "sinistre", "brumeux", "macabre", "sauvage", "ténébreux", "brisé", "ardent",
      "spectral", "légendaire", "royal", "dangereux", "froid", "doré", "infernal",
      "céleste", "éternel", "silencieux", "émeraude", "argenté", "sanglant", "cristallin",
      "flamboyant", "glacial", "empoisonné", "funeste", "vénérable", "voilé"
    ]
  }

  getDetails(): string {
    return [
      "des Âmes", "du Destin", "de l'Oubli", "des Ombres", "des Secrets", "du Crépuscule",
      "de la Nuit", "du Temps", "des Vœux", "des Rêves", "du Chaos", "des Murmures",
      "des Flammes", "du Néant", "de l'Espoir", "des Esprits", "de la Brume", "des Échos",
      "de la Lune", "des Larmes", "du Vent", "des Étoiles", "de la Gloire", "des Fantômes",
      "de l'Aube", "du Pouvoir", "de la Destinée", "des Prophéties", "de la Magie", "des Légendes",
      "du Sang", "des Illusions", "des Anciens", "de la Folie", "des Damnés", "du Roi", "des Dieux"
    ];
  }

  getVerbs(): string {
    return [
      "explorer", "ouvrir", "examiner", "fouiller", "franchir", "escalader",
      "descendre", "emprunter", "suivre", "traverser", "contourner", "observer",
      "interroger", "attaquer", "éviter", "utiliser", "prendre", "boire",
      "manger", "lire", "décrypter", "voler", "négocier", "marchander", "aider",
      "sauver", "invoquer", "fuir", "se cacher", "chercher", "espionner", "pousser",
      "tirer", "activer", "désactiver", "briser", "réparer", "sauter", "creuser",
      "déchiffrer", "entrer dans", "s'approcher de", "s'éloigner de", "éclairer"
    ];
  }

  getObjects(): string {
    return [
      "la porte", "le coffre", "le passage", "l'escalier", "le livre", "la potion",
      "l'épée", "le bouclier", "le parchemin", "le levier", "la trappe", "la pièce",
      "le couloir", "le pont", "la statue", "l'artefact", "le cristal", "la torche",
      "la fenêtre", "le tableau", "le mur", "le sol", "le plafond", "la clé",
      "l'amulette", "le gardien", "le monstre", "le marchand", "le voyageur",
      "l'énigme", "le mécanisme", "la serrure", "le message", "la carte", "le sentier",
      "la grotte", "le château", "la forêt", "le temple", "la caverne", "la crypte"
    ];
  }

  getAdverbs(): string {
    return [
      "prudemment", "rapidement", "silencieusement", "attentivement", "furtivement",
      "courageusement", "discrètement", "agilement", "violemment", "doucement",
      "habilement", "patiemment", "en profondeur", "à distance", "sans hésiter",
      "avec précaution", "en silence", "à l'intérieur", "sur la gauche", "sur la droite",
      "au fond", "en haut", "en bas", "à travers", "au-delà", "derrière", "devant",
      "sans bruit", "dans l'ombre", "à la lumière", "sous terre", "malgré le danger"
    ];
  }
}

export interface Film { //tworze swoj wlasny typ danych
    id: Number;
    tytul: String;
    rok?: Number; // ?-dodajemy jak nie jest wymagane
    opis?: String;
  }
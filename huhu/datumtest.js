// Erstelle ein neues Date-Objekt für das aktuelle Datum
const heute = new Date();

// Hole den Tag, den Monat und das Jahr
const tag = heute.getDate();
const jahr = heute.getFullYear();

// Erstelle ein Array mit den Monatsnamen
const monate = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember"
];

// Hole den Monatsnamen aus dem Array
const monat = monate[heute.getMonth()];

// Setze das Datum im gewünschten Format zusammen
const datumString = `${tag}. ${monat} ${jahr}`;

// Ausgabe
console.log(datumString);

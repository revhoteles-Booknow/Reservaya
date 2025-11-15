const texts = {
  es: {
    title: "🏨 Reservaya",
    heroTitle: "Encuentra las Mejores Ofertas en Hoteles",
    heroSubtitle: "Compara millones de opciones y ahorra en tu próxima reserva.",
    destinationLabel: "Destino",
    checkinLabel: "Fecha de Entrada",
    checkoutLabel: "Fecha de Salida",
    guestsLabel: "Huéspedes",
    searchBtn: "Buscar Hoteles",
    aboutTitle: "Acerca de Reservaya",
    aboutText: "Reservaya es una plataforma independiente que te ayuda a encontrar las mejores ofertas en hoteles en todo el mundo. No somos un hotel ni una agencia: somos tu asistente de viajes inteligente."
  },
  en: {
    title: "🏨 Reservaya",
    heroTitle: "Find the Best Hotel Deals",
    heroSubtitle: "Compare millions of options and save on your next booking.",
    destinationLabel: "Destination",
    checkinLabel: "Check-in",
    checkoutLabel: "Check-out",
    guestsLabel: "Guests",
    searchBtn: "Search Hotels",
    aboutTitle: "About Reservaya",
    aboutText: "Reservaya is an independent platform that helps you find the best hotel deals worldwide. We are not a hotel or an agency: we are your smart travel assistant."
  },
  de: {
    title: "🏨 Reservaya",
    heroTitle: "Finde die besten Hotelangebote",
    heroSubtitle: "Vergleiche Millionen von Optionen und spare bei deiner nächsten Buchung.",
    destinationLabel: "Zielort",
    checkinLabel: "Anreisedatum",
    checkoutLabel: "Abreisedatum",
    guestsLabel: "Gäste",
    searchBtn: "Hotels suchen",
    aboutTitle: "Über Reservaya",
    aboutText: "Reservaya ist eine unabhängige Plattform, die dir hilft, die besten Hotelangebote weltweit zu finden. Wir sind kein Hotel oder eine Agentur: Wir sind dein intelligenter Reiseassistent."
  },
  fr: {
    title: "🏨 Reservaya",
    heroTitle: "Trouvez les meilleures offres d'hôtels",
    heroSubtitle: "Comparez des millions d'options et économisez sur votre prochaine réservation.",
    destinationLabel: "Destination",
    checkinLabel: "Date d'arrivée",
    checkoutLabel: "Date de départ",
    guestsLabel: "Invités",
    searchBtn: "Rechercher des hôtels",
    aboutTitle: "À propos de Reservaya",
    aboutText: "Reservaya est une plateforme indépendante qui vous aide à trouver les meilleures offres d'hôtels dans le monde entier. Nous ne sommes ni un hôtel ni une agence : nous sommes votre assistant de voyage intelligent."
  },
  it: {
    title: "🏨 Reservaya",
    heroTitle: "Trova le migliori offerte sugli hotel",
    heroSubtitle: "Confronta milioni di opzioni e risparmia sulla tua prossima prenotazione.",
    destinationLabel: "Destinazione",
    checkinLabel: "Data di arrivo",
    checkoutLabel: "Data di partenza",
    guestsLabel: "Ospiti",
    searchBtn: "Cerca hotel",
    aboutTitle: "Informazioni su Reservaya",
    aboutText: "Reservaya è una piattaforma indipendente che ti aiuta a trovare le migliori offerte sugli hotel in tutto il mondo. Non siamo né un hotel né un'agenzia: siamo il tuo assistente di viaggio intelligente."
  }
};

let currentLang = 'es';

function updateLanguage(lang) {
  currentLang = lang;

  document.getElementById("title").textContent = texts[lang].title;
  document.getElementById("hero-title").textContent = texts[lang].heroTitle;
  document.getElementById("hero-subtitle").textContent = texts[lang].heroSubtitle;
  document.getElementById("destination-label").textContent = texts[lang].destinationLabel;
  document.getElementById("checkin-label").textContent = texts[lang].checkinLabel;
  document.getElementById("checkout-label").textContent = texts[lang].checkoutLabel;
  document.getElementById("guests-label").textContent = texts[lang].guestsLabel;
  document.getElementById("search-btn").textContent = texts[lang].searchBtn;
  document.getElementById("about-title").textContent = texts[lang].aboutTitle;
  document.getElementById("about-text").textContent = texts[lang].aboutText;

  document.documentElement.lang = lang;
  document.getElementById("lang-select").value = lang;
}

document.getElementById("lang-select").addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

const today = new Date().toISOString().split('T')[0];
document.getElementById("checkin").min = today;
document.getElementById("checkout").min = today;

document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const destination = document.getElementById("destination").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;
  const affiliateId = '2657420';
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${destination}&checkin=${checkin}&checkout=${checkout}&group_adults=${guests}&aid=${affiliateId}`;
  window.open(bookingUrl, '_blank');
});

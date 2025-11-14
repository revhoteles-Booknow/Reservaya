// Textos en español e inglés
const texts = {
  es: {
    title: "Reservaya",
    heroTitle: "Encuentra las Mejores Ofertas en Hoteles",
    heroSubtitle: "Compara millones de opciones y ahorra en tu próxima reserva.",
    destinationLabel: "Destino",
    checkinLabel: "Fecha de Entrada",
    checkoutLabel: "Fecha de Salida",
    guestsLabel: "Huéspedes",
    searchBtn: "Buscar Hoteles",
    langBtn: "EN"
  },
  en: {
    title: "Reservaya",
    heroTitle: "Find the Best Hotel Deals",
    heroSubtitle: "Compare millions of options and save on your next booking.",
    destinationLabel: "Destination",
    checkinLabel: "Check-in",
    checkoutLabel: "Check-out",
    guestsLabel: "Guests",
    searchBtn: "Search Hotels",
    langBtn: "ES"
  }
};

let currentLang = 'es';

// Función para cambiar el idioma
function updateLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';

  // Actualizar textos
  document.getElementById("title").textContent = texts[newLang].title;
  document.getElementById("hero-title").textContent = texts[newLang].heroTitle;
  document.getElementById("hero-subtitle").textContent = texts[newLang].heroSubtitle;
  document.getElementById("destination-label").textContent = texts[newLang].destinationLabel;
  document.getElementById("checkin-label").textContent = texts[newLang].checkinLabel;
  document.getElementById("checkout-label").textContent = texts[newLang].checkoutLabel;
  document.getElementById("guests-label").textContent = texts[newLang].guestsLabel;
  document.getElementById("search-btn").textContent = texts[newLang].searchBtn;
  document.getElementById("lang-btn").textContent = texts[newLang].langBtn;

  // Cambiar el atributo 'lang' del <html> para accesibilidad
  document.documentElement.lang = newLang;

  currentLang = newLang;
}

// Evento para el botón de cambio de idioma
document.getElementById("lang-btn").addEventListener("click", updateLanguage);

// Fecha mínima para los campos de fecha
const today = new Date().toISOString().split('T')[0];
document.getElementById("checkin").min = today;
document.getElementById("checkout").min = today;

// Manejo del formulario (aquí integraremos el ID de afiliado)
document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const destination = document.getElementById("destination").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const guests = document.getElementById("guests").value;

  // Aquí irá la lógica para redirigir a Booking con tu ID de afiliado
  const affiliateId = '2657420'; // ← Tu ID de afiliado
  const bookingUrl = `https://www.booking.com/searchresults.es.html?ss=${destination}&checkin=${checkin}&checkout=${checkout}&group_adults=${guests}&aid=${affiliateId}`;

  window.open(bookingUrl, '_blank');
});

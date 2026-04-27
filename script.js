// Fake-Bewertungen
const fakeReviews = [
    {
        name: "Anna M.",
        rating: 5,
        comment: "Das Essen von YumYard ist unglaublich frisch und lecker! Die Zutaten schmecken wie frisch vom Markt."
    },
    {
        name: "Max K.",
        rating: 5,
        comment: "Absolut lecker! Das Essen ist so frisch, dass man den Geschmack der Natur spürt."
    },
    {
        name: "Lisa P.",
        rating: 4,
        comment: "Sehr frisches Essen, lecker zubereitet. YumYard macht einen tollen Job!"
    },
    {
        name: "Tom S.",
        rating: 5,
        comment: "Frisch und lecker – das Beste, was ich je gegessen habe. YumYard ist top!"
    }
];

// Lade Bewertungen aus localStorage
function loadReviews() {
    const storedReviews = localStorage.getItem('yumyardReviews');
    return storedReviews ? JSON.parse(storedReviews) : [];
}

// Speichere Bewertungen in localStorage
function saveReviews(reviews) {
    localStorage.setItem('yumyardReviews', JSON.stringify(reviews));
}

// Zeige alle Bewertungen an
function displayReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const userReviews = loadReviews();
    const allReviews = [...fakeReviews, ...userReviews];

    reviewsList.innerHTML = '';

    allReviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = `
            <h3>${review.name}</h3>
            <p>Bewertung: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p>
            <p>${review.comment}</p>
        `;
        reviewsList.appendChild(reviewDiv);
    });
}

// Formular absenden
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rating = parseInt(document.getElementById('rating').value);
    const comment = document.getElementById('comment').value;

    const newReview = { name, rating, comment };
    const userReviews = loadReviews();
    userReviews.push(newReview);
    saveReviews(userReviews);

    // Formular zurücksetzen
    document.getElementById('reviewForm').reset();

    // Bewertungen neu anzeigen
    displayReviews();
});

// Initiale Anzeige
displayReviews();

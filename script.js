const paintings = [
    {
        title: "Ocean Breeze",
        price: "$450",
        image: "https://via.placeholder.com/400x300?text=Ocean+Breeze",
        paymentLink: "https://buy.stripe.com/example1"
    },
    {
        title: "Mountain Silence",
        price: "$600",
        image: "https://via.placeholder.com/400x300?text=Mountain+Silence",
        paymentLink: "https://buy.stripe.com/example2"
    }
];

const container = document.getElementById('art-container');

paintings.forEach(art => {
    const card = document.createElement('div');
    card.className = 'art-card';
    card.innerHTML = `
        <img src="${art.image}" alt="${art.title}">
        <h3>${art.title}</h3>
        <p>${art.price}</p>
        <button class="buy-btn" onclick="window.location.href='${art.paymentLink}'">Purchase</button>
    `;
    container.appendChild(card);
});

function filterProducts() {
    const category = document.getElementById('filterCategory').value;
    const brand = document.getElementById('filterBrand').value.toLowerCase();
    const price = document.getElementById('filterPrice').value;

    document.querySelectorAll('.row.g-3 > [data-category]').forEach(function(card) {
        const cardCategory = card.getAttribute('data-category');
        const cardBrand = card.getAttribute('data-brand').toLowerCase();
        const cardPrice = parseFloat(card.getAttribute('data-price'));

        let show = true;

        if (category !== 'all' && cardCategory !== category) show = false;
        if (brand !== 'all' && cardBrand !== brand) show = false;

        if (price !== 'all') {
            if (price === 'low' && cardPrice > 10) show = false;
            if (price === 'mid' && (cardPrice < 10 || cardPrice > 15)) show = false;
            if (price === 'high' && cardPrice <= 15) show = false;
        }

        card.style.display = show ? '' : 'none';
    });
}

document.getElementById('filterCategory').addEventListener('change', filterProducts);
document.getElementById('filterBrand').addEventListener('change', filterProducts);
document.getElementById('filterPrice').addEventListener('change', filterProducts);

window.addEventListener('DOMContentLoaded', filterProducts);
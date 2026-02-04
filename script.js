document.addEventListener('DOMContentLoaded', function() {
    
    const allProducts = [
        { id: 'dell', name: "Dell Latitude 5580", category: "Electronics", img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1887&auto=format&fit=crop" },
        { id: 'ps4', name: "PS4 Slim 500GB", category: "Electronics", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop" },
        { id: 'cherry', name: "Cherry Mobile Nova 2", category: "Electronics", img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop" },
        { id: 'gpu', name: "RTX 2060 Super 8GB", category: "Electronics", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop" },
        { id: 'monitor', name: "Dell LCD Monitor", category: "Electronics", img: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=1964&auto=format&fit=crop" },
        { id: 'macbook', name: "Macbook Air", category: "Electronics", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2000&auto=format&fit=crop" },
        { id: 'ipad', name: "iPad Pro 11", category: "Electronics", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2030&auto=format&fit=crop" },
        
        { id: 'chair', name: "Modern Armchair", category: "Furniture", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop" },
        { id: 'sofa', name: "Green Velvet Sofa", category: "Furniture", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop" }
    ];

    const searchInput = document.getElementById('searchInput');
    const resultsBox = document.getElementById('searchResults');

    if (searchInput && resultsBox) {
        searchInput.addEventListener('keyup', function() {
            const query = searchInput.value.toLowerCase();
            resultsBox.innerHTML = ''; 

            if (query.length > 0) {
                const matches = allProducts.filter(product => 
                    product.name.toLowerCase().includes(query) || 
                    product.category.toLowerCase().includes(query)
                );

                if (matches.length > 0) {
                    resultsBox.style.display = 'block';
                    matches.forEach(product => {
                        const item = document.createElement('a');
                        item.classList.add('search-result-item');
                        item.href = `product.html?id=${product.id}`;
                        
                        item.innerHTML = `
                            <img src="${product.img}" alt="${product.name}">
                            <div class="result-text">
                                <h4>${product.name}</h4>
                                <span>${product.category}</span>
                            </div>
                        `;
                        resultsBox.appendChild(item);
                    });
                } else {
                    resultsBox.style.display = 'none';
                }
            } else {
                resultsBox.style.display = 'none';
            }
        });

        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.style.display = 'none';
            }
        });
    }

    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.style.cursor = 'pointer'; 
        item.addEventListener('click', function() {
            if (item.querySelector('.circle')) {
                window.location.href = 'categories.html';
            }
        });
    });

    setupFilter('categorySearchInput', '.product-card, .mini-cat');
    setupAllCarousels();
});

function setupAllCarousels() {
    const allWrappers = document.querySelectorAll('.carousel-wrapper');
    allWrappers.forEach(wrapper => {
        const scrollContainer = wrapper.querySelector('.product-scroll');
        const leftBtn = wrapper.querySelector('.left-btn');
        const rightBtn = wrapper.querySelector('.right-btn');
        if (scrollContainer && leftBtn && rightBtn) {
            const scrollAmount = 320;
            rightBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
            leftBtn.addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    });
}

function setupFilter(inputId, targets) {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener('keyup', function() {
            const term = input.value.toLowerCase();
            const items = document.querySelectorAll(targets);
            items.forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(term) ? "" : "none";
            });
        });
    }
}
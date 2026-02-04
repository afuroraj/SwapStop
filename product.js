document.addEventListener('DOMContentLoaded', function() {

    const products = {
        'dell': {
            brand: "Dell",
            title: "Dell Latitude 5580",
            img1: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1887&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
            condition: "Used - Like New",
            meta: "Electronics boosted 5 hours ago",
            specs: ["CPU - Core i5-7200U", "GPU - NVIDIA GeForce 940MX", "Storage - 512 GB SSD", "Ram - 8 GB DDR4"],
            desc: "Open to offers - looking to trade to iPhone 11 Pro. DM me if you're interested. Where to meet: Baguio City."
        },
        'ps4': {
            brand: "Sony",
            title: "PS4 Slim 500GB",
            img1: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=2069&auto=format&fit=crop",
            condition: "Used - Like New",
            meta: "Gaming boosted 2 hours ago",
            specs: ["Storage - 500 GB", "Controller - 1 DualShock 4", "Games - 3 Physical Discs", "Box - Included"],
            desc: "Barely used console. Finished Spiderman and never touched it again. Looking for a Nintendo Switch or cash."
        },
        'cherry': {
            brand: "Cherry Mobile",
            title: "Cherry Mobile Nova 2",
            img1: "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1854&auto=format&fit=crop",
            condition: "Brand New",
            meta: "Mobile boosted 1 day ago",
            specs: ["OS - Android 10", "Storage - 32GB ROM", "RAM - 3GB", "Screen - 5.5 Inch HD"],
            desc: "Won this at a company raffle. Never opened. Box is sealed. Open to swap with mountain bike parts."
        },
        'gpu': {
            brand: "NVIDIA (EVGA)",
            title: "RTX 2060 Super 8GB",
            img1: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=2070&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop",
            condition: "Slightly Used",
            meta: "Components boosted 30 mins ago",
            specs: ["VRAM - 8GB GDDR6", "Cores - 2176 CUDA", "Boost Clock - 1650 MHz", "Fans - Dual Fan Setup"],
            desc: "Never used for mining. Only used for light gaming. Upgraded to 40 series so selling this."
        },
        'monitor': {
            brand: "Dell",
            title: "Dell LCD Monitor",
            img1: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=1964&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop",
            condition: "Used - Like New",
            meta: "Peripherals boosted 1 hour ago",
            specs: ["Size - 24 Inch", "Resolution - 1920x1080 (FHD)", "Refresh Rate - 60Hz", "Panel - IPS"],
            desc: "No dead pixels. Perfect for office work or second monitor setup. Power cable and HDMI included."
        },
        'macbook': {
            brand: "Apple",
            title: "Macbook Air M1",
            img1: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2000&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop",
            condition: "Used - Good",
            meta: "Laptop boosted 6 hours ago",
            specs: ["Chip - Apple M1", "RAM - 8GB Unified", "SSD - 256GB", "Battery - 92% Health"],
            desc: "Small dent on the top corner but does not affect performance. Screen is flawless. Charger included."
        },
        'ipad': {
            brand: "Apple",
            title: "iPad Pro 11-inch",
            img1: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2030&auto=format&fit=crop",
            img2: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=2070&auto=format&fit=crop",
            condition: "Used - Fair",
            meta: "Tablets boosted yesterday",
            specs: ["Storage - 128GB", "Connectivity - WiFi Only", "Screen - Liquid Retina 120Hz", "Year - 2020 Model"],
            desc: "Screen has some hairline scratches visible only when off. Works perfectly. Good for digital art."
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && products[productId]) {
        const data = products[productId];

        document.title = "SwapStop - " + data.title; 
        const breadcrumbSpan = document.querySelector('.breadcrumb span');
        if (breadcrumbSpan) breadcrumbSpan.innerText = data.title; 

        document.querySelector('.product-title').innerText = data.title;
        document.querySelector('.meta-info').innerText = data.meta;
        document.querySelector('.condition-badge').innerText = data.condition;
        
        const detailsList = document.querySelector('.details-list');
        if (detailsList) {
            detailsList.innerHTML = `
                <p><strong>Condition</strong> ${data.condition}</p>
                <p><strong>Brand</strong> ${data.brand}</p>
            `;
        }

        const imgElements = document.querySelectorAll('.image-section img');
        if(imgElements.length >= 2) {
            imgElements[0].src = data.img1; 
            imgElements[0].alt = data.title + " Front View";

            imgElements[1].src = data.img2; 
            imgElements[1].alt = data.title + " Alternate View";
        }

        const specsList = document.querySelector('.specs-box ul');
        if(specsList) {
            specsList.innerHTML = ''; 
            data.specs.forEach(spec => {
                const li = document.createElement('li');
                const parts = spec.split('-');
                if(parts.length > 1) {
                    li.innerHTML = `<strong>${parts[0].trim()}</strong> - ${parts[1].trim()}`;
                } else {
                    li.innerHTML = spec;
                }
                specsList.appendChild(li);
            });
        }

        const descContainer = document.querySelector('.description-text');
        if(descContainer) {
            descContainer.innerHTML = `<p>${data.desc}</p>`;
        }
    } 
    const chatBtn = document.querySelector('.btn-chat');

    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            const isSignedIn = false; 
            if (isSignedIn) {
                alert("Opening chat with Ismael Wagayan...");
            } else {
                alert("Please sign in to start a chat.");
            }
        });
    }

});
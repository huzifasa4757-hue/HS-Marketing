const products = [
    { id: 1, name: "Product 1", price: "Rs. 1500", image: 'no1 1500.jpeg'},
    { id: 2, name: "Product 2", price: "Rs. 1500", image: "no2 1500.jpeg" },
    { id: 3, name: "Product 3", price: "Rs. 600", image: "no3 600.jpeg" },
    { id: 4, name: "Product 4", price: "Rs. 1600", image: "no 4 1600.jpeg" },
    { id: 5, name: "Product 5", price: "Rs. 1000", image: "no5 1000.jpeg" },
    { id: 6, name: "Product 6", price: "Rs. 1000", image: "no6 1000.jpeg" },
    { id: 7, name: "Product 7", price: "Rs. 1500", image: "no7 1500.jpeg" },
    { id: 8, name: "Product 8", price: "Rs. 1000", image: "no8 1000.jpeg" },
    { id: 9, name: "Product 9", price: "Rs. 2800", image: "no9 2800.jpeg" },
    { id: 10, name: "Product 10", price: "Rs. 500", image: "no 10 500.jpeg" },
    { id: 11, name: "Product 11", price: "Rs. 2000", image: "no11 2000.jpeg" },
    { id: 12, name: "Product 12", price: "Rs. 500", image: "no12 500.jpeg" },
    { id: 13, name: "Product 13", price: "Rs. 2000", image: "no 13 2000.jpeg" },
    { id: 14, name: "Product 14", price: "Rs. 1200", image: "no14 1200.jpeg" },
    { id: 15, name: "Product 15", price: "Rs. 1500", image: "no15 1500.jpeg" },
    { id: 16, name: "Product 16", price: "Rs. 1000", image: "no16 1000.jpeg" },
    { id: 17, name: "Product 17", price: "Rs. 600", image: "no 17 600.jpeg" },
    { id: 18, name: "Product 18", price: "Rs. 600", image: "n0 18 600.jpeg" },
    { id: 19, name: "Product 19", price: "Rs. 1000", image: "no 19 1000.jpeg" },
    { id: 20, name: "Product 20", price: "Rs. 1500", image: "no 20 1500.jpeg" },
    { id: 21, name: "Product 21", price: "Rs. 1500", image: "no 21 1500.jpeg" },
    { id: 22, name: "Product 22", price: "Rs. 1500", image: "no22 1500.jpeg" },
    { id: 23, name: "Product 23", price: "Rs. 1200", image: "no23 1200.jpeg" },
    { id: 24, name: "Product 24", price: "Rs. 1100", image: "no 24 1100.jpeg" },
    { id: 25, name: "Product 25", price: "Rs. 1300", image: "no 25 1300.jpeg" },
    { id: 26, name: "Product 26", price: "Rs. 1500", image: "no 26 1500.jpeg" },
    { id: 27, name: "Product 27", price: "Rs. 800", image: "no 27 800.jpeg" },
    { id: 28, name: "Product 28", price: "Rs. 2000", image: "no 28 2000.jpeg" },
    { id: 29, name: "Product 29", price: "Rs. 1500", image: "no 29 1500.jpeg" },
    { id: 30, name: "Product 30", price: "Rs. 1200", image: "n0 30 1200.jpeg" },
    { id: 31, name: "Product 31", price: "Rs. 600", image: "no31 600.jpeg" },
    { id: 32, name: "Product 32", price: "Rs. 600", image: "no32 600.jpeg" },
    { id: 33, name: "Product 33", price: "Rs. 700", image: "no 33 700.jpeg" },
    { id: 34, name: "Product 34", price: "Rs. 600", image: "no 34 '600.jpeg" },
    { id: 35, name: "Product 35", price: "Rs. 700", image: "no 35 700.jpeg" },
    { id: 36, name: "Product 36", price: "Rs. 1500", image: "no 36 1500.jpeg" },
    { id: 37, name: "Product 37", price: "Rs. 1000", image: "no 37 1000.jpeg" },
    { id: 38, name: "Product 38", price: "Rs. 1000", image: "no 38 1000.jpeg" },
    { id: 39, name: "Product 39", price: "Rs. 1500", image: "no 39 1500.jpeg" },
    { id: 40, name: "Product 40", price: "Rs. 700", image: "no 40 700.jpeg" },
    { id: 41, name: "Product 41", price: "Rs. 1000", image: "no 41 1000.jpeg" },
    { id: 42, name: "Product 42", price: "Rs. 1200", image: "no 42 1200.jpeg" },
    { id: 43, name: "Product 43", price: "Rs. 700", image: "no 43 700.jpeg" },
    { id: 44, name: "Product 44", price: "Rs. 1000", image: "no6 1000.jpeg" },
    { id: 45, name: "Product 45", price: "Rs. 2000", image: "no11 2000.jpeg" },
    { id: 46, name: "Product 46", price: "Rs. 1000", image: "no16 1000.jpeg" },
    { id: 47, name: "Product 47", price: "Rs. 1000", image: "no 38 1000.jpeg" },
    { id: 48, name: "Product 48", price: "Rs. 1500", image: "no 21 1500.jpeg" },
    { id: 49, name: "Product 49", price: "Rs. 1200", image: "no14 1200.jpeg" },
    { id: 50, name: "Product 50", price: "Rs. 1200", image: "no23 1200.jpeg" }
];

// Products ko HTML container mein daalne ka function
const container = document.getElementById('product-container');

function loadProducts() {
    container.innerHTML = ""; 
    products.forEach(item => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <button class="submit-btn" onclick="openModal('${item.name}')">Buy Now</button>
            </div>
        `;
    });
}

// Modal Form Logic
function openModal(name) {
    document.getElementById('modalProduct').value = name;
    document.getElementById('orderModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// Page load hote hi chalayein
window.onload = loadProducts;
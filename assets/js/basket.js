const basket = document.getElementById('basket')

function get(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    basket.innerHTML = ''
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'box'
        box.innerHTML = `
        <div class='boxes'>
        <img src="${item.image}" alt="">
<p>${item.title}</p>
<button onclick="removeItem(${index})">Remove</button>
</div>
        `;

        basket.append(box)
    })
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    get()
}
get()
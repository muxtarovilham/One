const products = document.getElementById('products')

let page = 1
let limit = 3

async function get(index) {
    let skip = (page-1)*limit
    const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4?limit=${limit}&page=${page}&skip=${skip}`)
    const data = await res.data
    db = data
    db.map(item => {
        const box = document.createElement('div')
        box.className = 'box'
        box.innerHTML = `
        <div class='boxes'>
        <img src="${item.image}" alt="">
<p>${item.title}</p>
<button onclick="addToCard(${item.id})">Add To Cart</button>
</div>
        `;

        products.append(box)

    })
page++
}
load.addEventListener('click', function () {
    get()
})

function addToCard(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == index))
    localStorage.setItem('cart', JSON.stringify(cart));
}

get()


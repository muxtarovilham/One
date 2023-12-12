const prod = document.getElementById('prod')
const btn = document.getElementById('btnz')
const search = document.getElementById('search')



async function get(index) {
    const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3`)
    const data = await res.data;
    db = data;
    db.map(item => {
        const boxz = document.createElement('div')
        boxz.className = 'boxz'
        boxz.innerHTML = `
        <div class='boxez'>
        <p>Email: ${item.email}</p>
<p style="color:red">Name: ${item.name}</p>
<p style="color:green">Password: ${item.password}</p>
</div>
        `;
        prod.appendChild(boxz);
        console.log(prod);
    });
   
}
get()
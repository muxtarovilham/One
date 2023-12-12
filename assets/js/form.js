const namee = document.getElementById('name');
const pass = document.getElementById('pass');
const inp4 = document.getElementById('email');
const form1 = document.getElementById('form1')



form1.addEventListener('submit', function (event) {
    event.preventDefault();


            axios.post("https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3", {
                name: namee.value,
                email: email.value,
                pass: pass.value,
            })
            .then(res => {
                    console.log(res.data);
                })
            })
const form = document.querySelector('form')

form.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const email = form.email.value
    const password = form.password.value
    // console.log(email,password);
    try{
        const res = await fetch('/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const data = await res.json()
        console.log(data);  
        if(data.user){
            location.assign('/')
        }
    }
    catch(err){
        console.log(err);
    }
})
const form = document.querySelector('form')

form.addEventListener('submit',async (e) => {
    e.preventDefault()
    const email = form.email.value
    const password = form.password.value

    try{
        const res = await fetch('/login',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const data = await res.json()
        console.log(data);
        if (data.user) {
            location.assign('/')
          }
    }
    catch(err){
        console.log(err);
    }
})
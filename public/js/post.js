const comments = document.querySelector('.comments__form')

comments.addEventListener('submit', async(e) => {
    e.preventDefault()
    const teaName= document.querySelector('.teaName').innerHTML
    const email = document.querySelector('.email').innerHTML
    const {comment} = e.target
    console.log(teaName);
    const res = await fetch('/',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({comment:comment.value, email, teaName})
    })
    const result = await res.json();
    console.log(result)
})
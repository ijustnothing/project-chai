const comments = document.querySelector('.comments__form');

comments.addEventListener('submit', async (e) => {
  e.preventDefault();
  const teaName = document.querySelector('.teaName').innerHTML;
  const email = document.querySelector('.email').innerHTML;
  const { comment } = e.target;
  console.log(teaName);
  console.log(email,comment.value)
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ comment: comment.value, email, teaName }),
  });
  const result = await res.json();
  console.log(result);
  const commentHtml = result.text
  const htmlAsString = await fetch('http://localhost:5000/template/post.hbs');
  const template = Handlebars.compile(await htmlAsString.text());
  const list = document.querySelector('.listComments');
  list.innerHTML += template({
    commentHtml
  });
  comment.value = ``    
});

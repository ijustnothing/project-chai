const form = document.querySelector('form');
const deleteAll = document.querySelectorAll('.delete');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = form.name.value;
  const loc = form.location.value;
  const text = form.text.value;

  const res = await fetch('/cabinet', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ name, location: loc, text }),
  });
  const data = await res.json();
  console.log(data);
  const id = data._id
  const htmlAsString = await fetch('http://localhost:5000/template/tea.hbs');
  const template = Handlebars.compile(await htmlAsString.text());
  const list = document.querySelector('.list');
  list.innerHTML += template({
    name,
    id
  });
  const buttons = list.querySelectorAll(`button`)
  buttons.forEach((el) => {
    el.addEventListener('click', async (e) => {
      e.preventDefault();
      const id = e.target.id;
      const li = e.target.parentElement;
      console.log(li);
      const res = await fetch(`/cabinet/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
      });
      const result = await res.json();
      if (result === 'ok') {
        li.remove();
      }
    });
  });  
});

deleteAll.forEach((el) => {
  el.addEventListener('click', async (e) => {
    e.preventDefault();
    const id = e.target.id;
    const li = e.target.parentElement;
    console.log(li);
    const res = await fetch(`/cabinet/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    const result = await res.json();
    if (result === 'ok') {
      li.remove();
    }
  });
});

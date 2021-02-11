// const linksTea = document.querySelectorAll('.linkTea');

// linksTea.forEach((el) => {
//   el.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const id = e.target.parentElement.id;
//     // console.log(id);
//     const res = await fetch(`/tea/${id}`, {
//       method: 'GET',
//       headers: { 'Content-type': 'application/json' },
//     });
//     const result = await res.json();
//     if (result) {
//       window.location = `/tea/${id}`
//     }
//   });
// });

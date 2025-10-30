// Filter books live as you type
document.getElementById('search').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.book').forEach(book => {
    const visible = book.innerText.toLowerCase().includes(term);
    book.style.display = visible ? 'block' : 'none';
  });
});

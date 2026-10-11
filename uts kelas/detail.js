// Membaca ?id= dari URL lalu mengisi halaman detail dari data.js
const params = new URLSearchParams(window.location.search);
let id = parseInt(params.get('id'), 10);
if (isNaN(id) || id < 0 || id >= activities.length) id = 0;
const a = activities[id];

document.title = a.title + ' – GreenLife';
document.getElementById('dImg').src = a.img;
document.getElementById('dImg').alt = a.title;
document.getElementById('dCat').textContent = a.category;
document.getElementById('dTitle').textContent = a.title;
document.getElementById('dDate').textContent = a.date;
document.getElementById('dPlace').textContent = a.place;

const textBox = document.getElementById('dText');
for (let i = 0; i < a.text.length; i++) {
  const p = document.createElement('p');
  p.textContent = a.text[i];
  textBox.appendChild(p);
}
const list = document.getElementById('dBenefits');
for (let i = 0; i < a.benefits.length; i++) {
  const li = document.createElement('li');
  li.textContent = a.benefits[i];
  list.appendChild(li);
}
if (a.source) {
  const link = document.getElementById('dSource');
  link.href = a.source.url;
  link.textContent = a.source.label + ' ↗';
  link.classList.remove('hidden');
}
// Navigasi kegiatan sebelumnya / berikutnya
const prev = document.getElementById('prevLink');
const next = document.getElementById('nextLink');
if (id > 0) { prev.href = 'detail.html?id=' + (id - 1); prev.textContent = '← ' + activities[id - 1].title; }
if (id < activities.length - 1) { next.href = 'detail.html?id=' + (id + 1); next.textContent = activities[id + 1].title + ' →'; }

// ===== Interaksi 1: Filter kegiatan =====
const grid = document.getElementById('kegiatanGrid');
const info = document.getElementById('filterInfo');

function renderActivities(filter) {
  let html = '';
  let count = 0;
  for (let i = 0; i < activities.length; i++) {
    const a = activities[i];
    if (filter === 'Semua' || a.category === filter) {
      count++;
      html += `
      <article class="kegiatan-card bg-mist rounded-xl overflow-hidden">
        <a href="detail.html?id=${i}" aria-label="Lihat detail: ${a.title}"><img src="${a.img}" alt="${a.title}" class="w-full h-56 object-contain bg-forest/10 hover:opacity-90 transition"></a>
        <div class="p-4">
          <span class="text-xs font-semibold bg-forest text-white px-2 py-1 rounded-full">${a.category}</span>
          <h3 class="font-bold text-lg mt-2"><a href="detail.html?id=${i}" class="hover:underline">${a.title}</a></h3>
          <p class="text-sm mt-1">${a.date} &bull; ${a.place}</p>
          <a href="detail.html?id=${i}" class="inline-block mt-3 text-sm font-semibold text-moss hover:underline">Lihat detail</a>
        </div>
      </article>`;
    }
  }
  grid.innerHTML = html;
  info.textContent = `Menampilkan ${count} dari ${activities.length} kegiatan`;
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderActivities(btn.dataset.filter);
  });
});
renderActivities('Semua');

// ===== Interaksi 2: Galeri + Modal gambar =====
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const galleryGrid = document.getElementById('galleryGrid');

const GALLERY_LIMIT = 12;   // jumlah foto yang tampil di galeri
for (let i = 0; i < Math.min(GALLERY_LIMIT, activities.length); i++) {
  const a = activities[i];
  const img = document.createElement('img');
  img.src = a.img;
  img.alt = a.title;
  img.className = 'gallery-img w-full aspect-square object-contain bg-forest/10';
  img.addEventListener('click', () => openModal(img.src, a.title));
  galleryGrid.appendChild(img);
}
function openModal(src, caption) {
  modalImg.src = src; modalImg.alt = caption; modalCaption.textContent = caption;
  modal.classList.remove('hidden'); modal.classList.add('flex');
}
function closeModal() { modal.classList.add('hidden'); modal.classList.remove('flex'); }
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== Interaksi 3: Animated counter (pengulangan) =====
function animateCounter(el) {
  const target = Number(el.dataset.target);
  const steps = 60;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    el.textContent = Math.round(target * step / steps).toLocaleString('id-ID');
    if (step >= steps) clearInterval(timer);
  }, 25);
}
const counterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(en => { if (en.isIntersecting) { animateCounter(en.target); obs.unobserve(en.target); } });
}, { threshold: 0.4 });
document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

// ===== Interaksi 4: Validasi form relawan =====
const form = document.getElementById('relawanForm');
const success = document.getElementById('formSuccess');

function setError(id, message) {
  document.querySelector(`.err[data-for="${id}"]`).textContent = message;
  document.getElementById(id).classList.toggle('invalid', message !== '');
  return message === '';
}
function validateForm() {
  const nama = document.getElementById('nama').value.trim();
  const usia = Number(document.getElementById('usia').value);
  const email = document.getElementById('email').value.trim();
  const program = document.getElementById('programMinat').value;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const results = [
    setError('nama', nama === '' ? 'Nama wajib diisi.' : nama.length < 3 ? 'Nama minimal 3 huruf.' : ''),
    setError('usia', !usia ? 'Usia wajib diisi.' : (usia < 12 || usia > 80) ? 'Usia harus 12–80 tahun.' : ''),
    setError('email', email === '' ? 'Email wajib diisi.' : !emailOk ? 'Format email belum benar.' : ''),
    setError('programMinat', program === '' ? 'Pilih salah satu program.' : '')
  ];
  return results.every(Boolean);
}
form.addEventListener('submit', e => {
  e.preventDefault();
  if (validateForm()) {
    success.textContent = `Terima kasih, ${document.getElementById('nama').value.trim()}! Pendaftaranmu di program ${document.getElementById('programMinat').value} berhasil.`;
    success.classList.remove('hidden');
    form.reset();
  } else {
    success.classList.add('hidden');
  }
});

// ===== Interaksi 5: Accordion FAQ =====
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(it => {   // tutup semua dulu
      it.classList.remove('open');
      it.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) { item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
  });
});

// ===== Menu mobile =====
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('menuList').classList.toggle('hidden');
});
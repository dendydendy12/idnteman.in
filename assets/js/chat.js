document.addEventListener('DOMContentLoaded', function () {
  const daftarCeritaContainer = document.getElementById('daftarCerita');
  const modalTambahCerita = document.getElementById('modalTambahCerita');
  const tambahCeritaBtn = document.getElementById('tambahCeritaBtn');
  const tutupModalBtn = document.getElementById('tutupModal');
  const formTambahCerita = document.getElementById('formTambahCerita');

  let ceritaCounter = 1;

  tambahCeritaBtn.addEventListener('click', function () {
    modalTambahCerita.style.display = 'block';
  });

  tutupModalBtn.addEventListener('click', function () {
    modalTambahCerita.style.display = 'none';
  });

  formTambahCerita.addEventListener('submit', function (e) {
    e.preventDefault();

    const judul = document.getElementById('judul').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const kode = document.getElementById('kode').value;

    tambahkanCerita(judul, deskripsi, kode);
    modalTambahCerita.style.display = 'none';
    formTambahCerita.reset();
  });

  function tambahkanCerita(judul, deskripsi, kode) {
    const ceritaElement = document.createElement('div');
    ceritaElement.classList.add('cerita');
    ceritaElement.innerHTML = `
      <h2>${judul}</h2>
      <p>${deskripsi}</p>
      <pre><code>${kode}</code></pre>
    `;
    daftarCeritaContainer.appendChild(ceritaElement);
  }
});

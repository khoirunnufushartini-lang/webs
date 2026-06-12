document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('daftar-item');

    // Memanggil data dari file JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderItems(data.items);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
            container.innerHTML = '<p style="color: white; text-align: center;">Gagal memuat data menu.</p>';
        });

    // Fungsi untuk merender HTML secara dinamis
    function renderItems(items) {
        container.innerHTML = ''; 
        
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${item.gambar}" alt="${item.nama}" class="card-img">
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p>${item.deskripsi}</p>
                    <span class="kategori">${item.kategori}</span>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
});
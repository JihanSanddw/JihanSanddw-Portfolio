function showNavbar() {
    const navbar = document.getElementById('navbar');
    // Menampilkan navbar (mengubah display menjadi 'flex' atau 'block' sesuai CSS)
    navbar.style.display = 'flex'; 
    // Jika Anda menggunakan transisi, Anda mungkin perlu menambahkan class tertentu di sini
    // navbar.classList.add('active');
}

function hideNavbar() {
    const navbar = document.getElementById('navbar');
    // Menyembunyikan navbar
    navbar.style.display = 'none';
    // Jika Anda menggunakan transisi, Anda mungkin perlu menghapus class tertentu di sini
    // navbar.classList.remove('active');
}

// Opsional: Jika Anda ingin menggunakan satu fungsi untuk menampilkan/menyembunyikan
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    
    // Logika untuk beralih (toggle) antara 'flex' dan 'none'
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
}
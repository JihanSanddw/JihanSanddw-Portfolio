document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("inputNama").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("sendMessage").value = "";
    }, 5);
})

function showNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'flex'; 
}

function hideNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'none';
}

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    
    // Logika untuk beralih (toggle) antara 'flex' dan 'none'
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
}
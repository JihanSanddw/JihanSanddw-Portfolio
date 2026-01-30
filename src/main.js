document.getElementById("btn").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("inputNama").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("sendMessage").value = "";
    }, 5);
})
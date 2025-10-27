// Membuat sticky notes jatuh secara acak
function tambahPesan() {
    const nama = document.getElementById("inputNama").value.trim();
    const pesan = document.getElementById("inputPesan").value.trim();

    if (nama === "" || pesan === "") return;

    const item = document.createElement("li");
    item.textContent = nama + ": " + pesan;

    document.getElementById("daftar-pesan").appendChild(item);

    document.getElementById("inputNama").value = "";
    document.getElementById("inputPesan").value = "";
}

    // Hapus note setelah selesai jatuh agar tidak memenuhi halaman
    setTimeout(() => {
        note.remove();
    }, 6000);
}

// Buat sticky notes secara berkala
setInterval(buatStickyNote, 1500);

// Kontrol musik
const musik = document.getElementById("bgm");

// Jika browser blok autoplay, tambahkan event klik
document.body.addEventListener("click", () => {
    if (musik.paused) {
        musik.play();
    }
});

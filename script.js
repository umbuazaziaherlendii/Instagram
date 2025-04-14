
// Menambahkan event listener untuk gambar surat yang dapat diklik
document.getElementById('letter').addEventListener('click', function() {
    // Menampilkan animasi love dan kalimat
    const animationContainer = document.getElementById('animationContainer');
    const loveText = document.getElementById('loveText');
    
    // Menampilkan container animasi love
    animationContainer.style.display = 'block';
    
    // Menampilkan kalimat "I love you sayangkuu" setelah 2 detik
    setTimeout(function() {
        loveText.style.display = 'block';
    }, 2000);
});

function hideMessageBox() {
    document.querySelector('.message-box').style.display = 'none';
    document.getElementById('HBD').classList.remove('poo');
    document.getElementById('HBD').style.display = 'block';
    document.getElementById('a2').classList.remove('a1');
    
    setTimeout(() => {
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach(balloon => {
            balloon.style.display = 'none'; // ซ่อนลูกโป่ง
        });
    }, 2000);
}

for (let i = 0; i < 40; i++) {
    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    // Randomize balloon color
    const colors = ['#ff6347', '#ffcc33', '#6bffb3', '#9d84f7', '#ff9a9e'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random horizontal positions
    balloon.style.left = Math.random() * 100 + 'vw'; 
    balloon.style.bottom = '-50px'; // เริ่มจากล่างจอ
    balloon.style.bottom = Math.random() * 70 + 'vh'; 
    balloon.style.width = Math.random() * 20 + 30 + 'px';
    balloon.style.height = balloon.style.width;

    document.body.appendChild(balloon);

    function goToNextPage() {
    window.location.href = "10.html"; // เปลี่ยน "nextpage.html" เป็นลิงก์ที่ต้องการ
}

}
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Xin chúc mừng! 🎉',
        text: 'Em đã bị tôi lừa 😘',
        imageUrl: 'https://cf.shopee.vn/file/823c7f991e294dba508ac5d8193394ea',
        imageWidth: 200,
        imageHeight: 200,
        background: '#fff0f5',
        confirmButtonText: 'Cay không người đẹp?😂',
        confirmButtonColor: '#ff66b2'
    });
});

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

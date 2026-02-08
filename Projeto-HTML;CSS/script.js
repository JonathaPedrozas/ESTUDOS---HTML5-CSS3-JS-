window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo img');
    const scrollY = window.scrollY;

    // Verifica se a rolagem passou de 50px
    if (scrollY > 50) {
        header.style.padding = '9px 30px'; // Diminui o padding do header em 40%
        header.style.fontSize = '0.72em'; // Diminui o tamanho da fonte no header em 40%
        logo.style.maxWidth = '72px'; // Diminui o tamanho da logo em 40% (de 120px para 72px)
    } else {
        header.style.padding = '15px 30px'; // Padding original do header
        header.style.fontSize = '1.2em'; // Tamanho da fonte original do header
        logo.style.maxWidth = '120px'; // Tamanho original da logo
    }
});

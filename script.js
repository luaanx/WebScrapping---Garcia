document.querySelector('.pokemon-gus-container .gus-outer-container').style.backgroundColor = 'red';

const imagensSite = document.querySelector('.results');

imagensSite.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'IMG') {
        event.target.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 3)';
    }
});

imagensSite.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'IMG') {
        event.target.style.boxShadow = 'none';
    }
});

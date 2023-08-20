const backgroundImage = document.querySelector('.bg-image');
const rightPannel = document.querySelector('.right-pannel');



rightPannel.addEventListener('mouseenter', () => addBlur(backgroundImage));

rightPannel.addEventListener('mouseleave', () => removeBlur(backgroundImage));


function addBlur(image) {
    image.style.cssText = 'filter: blur(8px)';
}

function removeBlur(image) {
    image.style.cssText = '';
}


//backgroundImage.style.cssText = 'filter: blur(8px);';
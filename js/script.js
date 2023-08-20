const backgroundImage = document.querySelector('.bg-image');
const rightPannel = document.querySelector('.right-pannel');



rightPannel.addEventListener('mouseenter', () => addBlur(backgroundImage));

rightPannel.addEventListener('mouseleave', () => removeBlur(backgroundImage));


function addBlur(image) {

    let x = 1;

    let interval = setInterval( () => { 

        if (x > 11) clearInterval(interval); 

        image.style.cssText = `filter: blur(${x}px)`;

        x++;

    }, 50);

}

function removeBlur(image) {
    
    let x = 10;

    let interval = setInterval( () => { 

        if (x === 0) clearInterval(interval); 

        image.style.cssText = `filter: blur(${x}px)`;

        x--;

    }, 50);

}


//backgroundImage.style.cssText = 'filter: blur(8px);';
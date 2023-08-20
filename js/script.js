const backgroundImage = document.querySelector('.bg-image');
const rightPannel = document.querySelector('.right-pannel');
const leftPannel = document.querySelector('.left-pannel');
const password = document.querySelector('#pass');
const confirmPassword = document.querySelector('#conf_pass');
const warningP = document.querySelector('.small.no-match');
const btn = document.querySelector('button');


/* Background Blur start*/ 

rightPannel.addEventListener('mouseenter', () => addBlur(backgroundImage));
leftPannel.addEventListener('mouseenter', () => removeBlur(backgroundImage));

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

/* Background Blur end*/ 


/* Check if passwords match*/

confirmPassword.addEventListener('keyup', function() { 

    if (confirmPassword.value !== password.value) {

        password.style.cssText = 'border: 2px solid red;'
        confirmPassword.style.cssText = 'border: 2px solid red;'
        warningP.textContent = 'Passwords do not match!';
        btn.disabled = true;

    } else {

        password.style.cssText = 'border: 2px solid green;'
        confirmPassword.style.cssText = 'border: 2px solid green;'
        warningP.textContent = '';
        btn.disabled = false;

    }
})

function turnalloff() {
    const allButtons = document.querySelectorAll('.is-off-or-on-button, .music-off-or-on-button, .requestnow-button, .schedule-button, .tech-button');

    allButtons.forEach(button => {
        button.innerHTML = button.getAttribute('data-default'); 
        button.classList.remove('is-off-or-on'); 
    });
}

function off_or_on() {
    /*
    const buttonElement = document.querySelector('.is-off-or-on-button');

    if (buttonElement.innerText === 'Gaming On') {
        buttonElement.innerHTML = 'Gaming Off';
        buttonElement.classList.add('is-off-or-on'); 
    } else {
        buttonElement.innerHTML = 'Gaming On';
        buttonElement.classList.remove('is-off-or-on');
    }
    */
    
    const buttonElement = document.querySelector('.is-off-or-on-button');

    if (buttonElement.classList.contains('is-off-or-on')) {
        buttonElement.innerHTML = 'Gaming On';
        buttonElement.classList.remove('is-off-or-on');
    } else {
        buttonElement.innerHTML = 'Gaming Off';
        buttonElement.classList.add('is-off-or-on');
    } 
}
function musicoffon() {
    const buttonElement = document.querySelector('.music-off-or-on-button');

    if (buttonElement.classList.contains('is-off-or-on')) {
        buttonElement.innerHTML = 'Music On';
        buttonElement.classList.remove('is-off-or-on');
    } else {
        buttonElement.innerHTML = 'Music Off';
        buttonElement.classList.add('is-off-or-on')
    }
}
function requestnow() {
    const buttonElement = document.querySelector('.requestnow-button');

    if (buttonElement.classList.contains('is-off-or-on')) {
        buttonElement.innerHTML = 'Request now';
        buttonElement.classList.remove('is-off-or-on');
    } else {
        buttonElement.innerHTML = 'Request later';
        buttonElement.classList.add('is-off-or-on')
    }
}
function schedule() {
    const buttonElement = document.querySelector('.schedule-button');

    if (buttonElement.classList.contains('is-off-or-on')) {
        buttonElement.innerHTML = 'Schedule now';
        buttonElement.classList.remove('is-off-or-on');
    } else {
        buttonElement.innerHTML = 'Schedule later';
        buttonElement.classList.add('is-off-or-on')
    }
}
function tech() {
    const buttonElement = document.querySelector('.tech-button');

    if (buttonElement.classList.contains('is-off-or-on')) {
        buttonElement.innerHTML = 'Tech on';
        buttonElement.classList.remove('is-off-or-on');
    } else {
        buttonElement.innerHTML = 'Tech off';
        buttonElement.classList.add('is-off-or-on')
    }
}
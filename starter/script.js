'use strict';

//Creating a new modal project
// select all the element that we need to create a new modal
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModals = function () {
    console.log('click'); //check if button was clicked
    //remove class
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// add event listener to the buttons that open the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModals);
    //close button function
    const closeButton = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    closeBtn.addEventListener('click', closeButton);

    // add event listener to the overlay (function)
    const closeOverlayModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    overlay.addEventListener('click', closeOverlayModal);


    // add event listener to the ESC key // keyboard event


    document.addEventListener('keydown', function (e) {
        //console.log('key was pressed'); // check if key was pressed before
        //console.log(e.key); // show which key/button was pressed
        if (e.key === 'Escape') {
            if (!modal.classList.contains('hidden')) {
                closeButton();
            }
        }
    }
    );
}
//working with classes is what you should always do in terms of eventhandling, NB!!!!

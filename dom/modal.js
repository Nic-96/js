const openButton = document.querySelector('#openOverlay');
const body = document.body;

openButton.addEventListener('click', function(e) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add('overlay');
    body.appendChild(overlayElement);

    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('modal-container');
    overlayElement.appendChild(overlayContainer);

    const overlayCloseBtn = document.createElement('a');
    overlayCloseBtn.classList.add('close');
    overlayContainer.appendChild(overlayCloseBtn);
    overlayCloseBtn.href = '#';

    const overlayContent = document.createElement('div');
    overlayContent.classList.add('content');
    overlayContainer.appendChild(overlayContent);

    overlayCloseBtn.textContent = 'x';
    overlayContent.textContent = 'Hello world!';

    overlayCloseBtn.addEventListener ('click', function(e) {
        e.preventDefault();
        body.removeChild(overlayElement);
    })

    overlayElement.addEventListener('click', function(e) {
        if (e.target == overlayElement) {
            body.removeChild(overlayElement);
        }
    })

})
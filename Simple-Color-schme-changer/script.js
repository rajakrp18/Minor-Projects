const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector("body");
// console.log(body);

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;

        }
        if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id;

        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;

        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;

        }
        else {
            body.style.backgroundColor = event.target.id;
        }
    });
});

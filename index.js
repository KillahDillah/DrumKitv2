// document.querySelector("button").addEventListener('click', handleClick);

// function handleClick() {
//     alert('heyo');
// }

//handleClick is not passed as a function, but as an input, because we don't want the function to run when the browser first reads it
// we want to pass the function to then be run when the correct button ('click') is clicked.


//this works the same as above, but with much less code!
// document.querySelectorAll('button').addEventListener('click', function () {
//     alert('heyo');
// })
// ////////////////////////////////////////// //
// NOW ADD EVENTLISTENER TO EACH BUTTON //
// How I did it

let buttons = document.querySelectorAll('.drum'); // targeting drum because if another button were to be added later that IS NOT  part of the drum kit, that button would also be selected
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        this.style.color = 'white';
        // var audio = new Audio('sounds/tom-1.mp3');  //creates Audio object
        // audio.play();
    })
}

//How instructor did it
// for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function() {
//         console.log(this)
//     });
// }

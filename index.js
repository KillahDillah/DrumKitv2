document.querySelector("button").addEventListener('click', handleClick);
//handleClick is not passed as a function, but as an input, because we don't want the function to run when the browser first reads it
// we want to pass the function to then be run when the correct button ('click') is clicked.


function handleClick() {
    alert('heyo');
}
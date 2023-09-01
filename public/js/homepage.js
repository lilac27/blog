console.log("hello");


const comment = document.querySelectorAll('.comment');
const button = document.querySelectorAll('.button');

console.log(comment);
const commentFormHandler = async (event) => {

 console.log("ran");
}

button.forEach((element, number)=> {
    console.log(element, number);
    element.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(comment[number].value);
    } )
}
) 

console.log("hello");

const comment = document.querySelectorAll('.comment');
const button = document.querySelectorAll('.button');

console.log(comment);

button.forEach((element, number) => {
    element.addEventListener("click", async (event) => {
        event.preventDefault();
        
        // Get the comment text from the corresponding textarea
        const commentText = comment[number].value;

        // Check if the comment text is not empty
        if (commentText.trim() !== '') {
            try {
                // Send a POST request to your API endpoint to create a new comment
                const response = await fetch('/api/comments', {
                    method: 'POST',
                    body: JSON.stringify({ text: commentText }), // Make sure to match your server's expected request body
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    // Comment was successfully created
                    console.log('Comment posted successfully');
                    // You can optionally refresh the page or update the comment list here
                } else {
                    console.error('Failed to post comment');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            // Comment text is empty
            console.log('Comment text is empty');
        }
    });
});
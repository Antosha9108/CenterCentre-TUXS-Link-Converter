




// grabs the input and removes the spaces
// adds the string to the file variable
// concatenates the string with address and .pdf extension
// spits it back out into the dom

function updateFileName() {
    //grab a string from input 
    var input = document.getElementById('notes-input').value;
    // grab 2 elements for output 
    var fileNameElement = document.getElementById('file-name');
    var fileLinkElement = document.getElementById('file-link')
    // Remove punctuation with regex,spaces from the input and replace with dashes
    var fileName = input.replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').split(' ').join('-').replace('---', '-')
    //we need second regex because spaces around hyphens are preserved, and when the hyphens are removed the spaces remain causing -- in the output
    var fileLink = `https://asset.uie.com/pdf/${fileName}.pdf`

    // Update the content of the file-name <p> element
    fileNameElement.textContent = fileName;
    fileLinkElement.textContent = fileLink;

    // Show the "Copy to Clipboard" button if there is a file name
    var copyButton = document.getElementById('copy-file-name-button');
    if (fileName.trim() !== '') {
        copyButton.style.display = 'inline-block'; // Show the button
    } else {
        copyButton.style.display = 'none'; // Hide the button
    }

    // Show the "Copy to Clipboard" button if there is a file name
    var copyButton2 = document.getElementById('copy-file-link-button');
    if (fileLink.trim() !== '') {
        copyButton2.style.display = 'inline-block'; // Show the button
    } else {
        copyButton2.style.display = 'none'; // Hide the button
    }


}

// Add event listener to form submission
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior


    // Call the function to update the file name
    updateFileName();
});

// copy to clipboard functions
function copyFileNameFunction() {
    // Get the text to copy
    var copyText = document.getElementById("file-name").textContent;

    // Create a temporary textarea element
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = copyText;

    // Append the textarea to the body
    document.body.appendChild(tempTextArea);

    // Select the text inside the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Alert the user
    alert("Copied the text: " + copyText);
}

function copyFileLinkFunction() {
    // Get the text to copy
    var copyText = document.getElementById("file-link").textContent;

    // Create a temporary textarea element
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = copyText;

    // Append the textarea to the body
    document.body.appendChild(tempTextArea);

    // Select the text inside the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Alert the user
    alert("Copied the text: " + copyText);
}

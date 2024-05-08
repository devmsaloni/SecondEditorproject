document.addEventListener('DOMContentLoaded', function() {
    const runButton = document.getElementById('Runcode');
    const clearButton = document.getElementById('Clearcode');
 const htmlInput = document.getElementById('htmlinput');
    const cssInput = document.getElementById('cssinput');
    const javascriptInput = document.getElementById('javascriptinput');
    const outputSection = document.querySelector('.output');

    runButton.addEventListener('click', function() {
        // Get the code from the input fields
        const htmlCode = htmlInput.value;
        const cssCode = cssInput.value;
        const jsCode = javascriptInput.value;

        // Create a new iframe to display the output
        const iframe = document.createElement('iframe');
        iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
        
        // Set styles for the iframe
        iframe.style.width = '98vw'; // Set width to 100% of the container
        iframe.style.height = '100%'; // Set height to 300 pixels
        
        outputSection.innerHTML = '';
        outputSection.appendChild(iframe);

        // Write the code to the iframe
        const iframeContent = `
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>${htmlCode}</body>
            <script>${jsCode}</script>
            </html>
        `;
        iframe.contentDocument.open();
        iframe.contentDocument.write(iframeContent);
        iframe.contentDocument.close();
    });

    clearButton.addEventListener('click', function() {
        // Clear all input fields
        htmlInput.value = '';
        cssInput.value = '';
        javascriptInput.value = '';
        outputSection.innerHTML = '';
    });

   
});

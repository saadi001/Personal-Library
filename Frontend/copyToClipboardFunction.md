```js
import copyToClipboardFunctionTest from "./testCopy";

const modernCopyToClipboardFunction = async (textToCopy) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    // console.log("Text copied to clipboard:", textToCopy);
  } catch (err) {
    copyToClipboardFunctionTest(textToCopy);
    // console.error("Unable to copy to clipboard:", err);
    // Handle the error or provide user feedback
  }
};

export default modernCopyToClipboardFunction;
```

```js
// Function to copy text to clipboard using the Clipboard API
const copyToClipboardFunction = (textToCopy) => {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea");

  // Set the value of the textarea to the text you want to copy
  textarea.value = textToCopy;

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();

  try {
    // Execute the 'copy' command to copy the selected text to the clipboard
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy to clipboard:", err);
  }

  // Remove the temporary textarea from the document
  document.body.removeChild(textarea);
};

export default copyToClipboardFunction;
```

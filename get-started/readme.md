# Get Started
This tutorial will build an extension that allows the user to change the background color of the currently focused page. It will use many of the extension platform's components to give an introductory demonstration of their relationships

To start, create a new directory to hold the extension's files.

## Create the manifest
Extensions start with their manifest. Create a file called **manifest.json** and include the following code.

```json
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3
}
```

## Add functionality
### Register the background script in the manifest
Background scripts must be registered in the manifest. Registering a background script in the manifest tells the extension which file to reference, and how that file should behave.

```json
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  }
}
```

Chrome is aware that the extension includes a service worker. When the extension is reloaded, Chrome will scan the specified file for additional instructions, such as important events it needs to listen for.

### Create the background script
Create a new file named **background.js** and add the following code.

```javascript
// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Change the default background color to %cgreen', `color: ${color}`);
});
```

This extension will need information from a persistent variable as soon as it's installed. Start by including a listening event for **runtime.onInstalled** in the background script. Inside the onInstalled listener, the extension will set a value using the **storage** API. This will allow multiple extension components to access that value and update it. 
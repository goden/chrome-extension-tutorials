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
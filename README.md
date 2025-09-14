# Flowbite HTML to JSX Converter

A Chrome browser extension that enhances [Flowbite](https://flowbite.com/) component documentation by adding a "Copy JSX" button to easily convert HTML code snippets into JSX format.

## Screenshots

### Copy JSX Button

![Copy JSX Button](./src/images/copyJsxButton.png)

The extension adds a "Copy JSX" button to each code snippet on Flowbite documentation pages. The button seamlessly integrates with Flowbite's design system, appearing alongside the existing copy buttons.

### Code Transformation

![Code Transformation](./src/images/dif.png)

When you click the "Copy JSX" button, the extension automatically transforms Flowbite's HTML code into JSX format. The transformation handles:

- Converting HTML class attributes to JSX className
- Preserving proper indentation and code structure
- Maintaining all component functionality
- Ensuring the code is ready to use in React applications

## Features

- Adds a "Copy JSX" button next to code snippets on Flowbite documentation pages
- Seamlessly integrates with the existing Flowbite documentation UI
- Works on all component documentation pages (`https://flowbite.com/docs/components/*`)

## Installation

This extension is not yet published to the Chrome Web Store. To use it in development mode:

1. Clone this repository:

   ```bash
   git clone https://github.com/dimuthadithya/JSX.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the folder containing this extension

## Project Structure

- `manifest.json` - Extension configuration and permissions
- `content.js` - Content script that injects the "Copy JSX" button into Flowbite documentation pages

## Development

The extension uses Manifest V3 and injects a content script that runs on Flowbite component documentation pages. The script adds a "Copy JSX" button that matches Flowbite's UI design.

## License

This project is open source. Feel free to use, modify, and distribute as needed.

## Author

Created by [dimuthadithya](https://github.com/dimuthadithya)

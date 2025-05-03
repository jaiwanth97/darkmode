# DarkMode Chrome Extension

## Overview

DarkMode is a lightweight Chrome extension that allows users to toggle dark mode on any website with a single click. The extension applies a carefully designed dark theme to web pages, reducing eye strain during night-time browsing and conserving battery life on OLED displays.

**Note:** This project is currently a work in progress. It may not work properly with dynamic websites that use JavaScript to modify the DOM after the initial page load.

## Features

-  One-click toggle dark mode
-  Persistent settings across browser sessions
-  Instant application with no page reloads required
-  Carefully designed dark color scheme for optimal readability
-  Image and video brightness adjustment

## Known Limitations

-  Limited compatibility with dynamic websites that modify the DOM after initial load
-  May not handle all types of web components or complex UI elements
-  Some websites with custom styling may not display correctly in dark mode

## Installation

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension directory
5. The extension icon should appear in your browser toolbar

## Usage

1. Click on the DarkMode extension icon in your browser toolbar
2. Use the toggle switch to enable or disable dark mode
3. The setting will automatically apply to the current tab
4. Your preference is saved and will be applied to all websites

## How It Works

DarkMode uses CSS injection to override website styles with dark mode equivalents. The extension:

- Changes background colors to dark variants
- Adjusts text colors for better contrast
- Modifies link and button colors for visibility
- Applies a brightness filter to images and videos
- Preserves your preference across browsing sessions

### Future Improvements

The current implementation has limitations with dynamic websites. Planned improvements include:
- MutationObserver implementation to detect DOM changes
- Better handling of shadow DOM elements
- Customizable color schemes
- Site-specific styling exceptions

## Files Structure

- `manifest.json` - Extension configuration
- `popup.html` - UI for the toggle popup
- `popup.js` - Logic for the popup interface
- `content.js` - Script that applies dark mode to websites
- `darkmode.css` - CSS rules for dark mode styling

## Contributing

Contributions are welcome! Key areas that need improvement:

- Handling dynamic website content
- Performance optimization
- Support for complex UI frameworks
- Custom styling for popular websites

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Privacy

DarkMode respects your privacy:
- No data collection
- No tracking
- No analytics
- No external dependencies

## Support

Found a bug or have a suggestion? Please [open an issue](https://github.com/jaiwanth97/darkmode/issues) on GitHub.

---

Made with ❤️ for night owls everywhere

// Initialize dark mode on page load
(function() {
    // Check if dark mode was previously enabled
    chrome.storage.local.get(['darkModeEnabled'], (result) => {
        if (result.darkModeEnabled) {
            enableDarkMode();
        }
    });
    
    // Listen for messages from popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "toggleDarkMode") {
            if (message.enabled) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
            sendResponse({success: true});
        }
        return true; // Keep message channel open for async response
    });
})();

// Function to enable dark mode
function enableDarkMode() {
    // Add class to html element
    document.documentElement.classList.add('dark-mode');
    
    // Apply styles if not already applied
    if (!document.getElementById('dark-mode-styles')) {
        injectDarkModeStyles();
    }
}

// Function to disable dark mode
function disableDarkMode() {
    // Remove class from html element
    document.documentElement.classList.remove('dark-mode');
    
    // Remove injected styles
    const styleElement = document.getElementById('dark-mode-styles');
    if (styleElement) {
        styleElement.remove();
    }
}

// Function to inject dark mode styles
function injectDarkModeStyles() {
    const styleElement = document.createElement('style');
    styleElement.id = 'dark-mode-styles';
    styleElement.textContent = `
    /* These styles override website styles */
    html.dark-mode,
    html.dark-mode body {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
    }
    
    html.dark-mode *:not(img):not(video):not(canvas) {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
        border-color: #444 !important;
    }
    
    html.dark-mode a,
    html.dark-mode a *,
    html.dark-mode button,
    html.dark-mode button * {
        color: #809fff !important;
    }
    
    html.dark-mode input,
    html.dark-mode textarea,
    html.dark-mode select {
        background-color: #333 !important;
        color: #fff !important;
    }
    
    html.dark-mode img,
    html.dark-mode video,
    html.dark-mode canvas {
        filter: brightness(0.8) !important;
    }
    `;
    document.head.appendChild(styleElement);
}
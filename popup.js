document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const mainBox = document.getElementById("main_box");
    
    // Check saved dark mode state
    chrome.storage.local.get(['darkModeEnabled'], (result) => {
        if (result.darkModeEnabled) {
            document.body.classList.add("darkMode");
        }
    });
    
    // Toggle dark mode when clicking the slider
    mainBox.addEventListener("click", () => {
        // Toggle UI in popup
        document.body.classList.toggle("darkMode");
        
        // Get current state after toggle
        const isDarkMode = document.body.classList.contains("darkMode");
        
        // Save state
        chrome.storage.local.set({darkModeEnabled: isDarkMode});
        
        // Send message to content script
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "toggleDarkMode",
                enabled: isDarkMode
            });
        });
    });
});
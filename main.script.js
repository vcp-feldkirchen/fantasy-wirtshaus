let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.openPopup("popupRectangle", 'Hello world!', {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    })

WA.openTab('example.com');
WA.onEnterZone('npcZone', () => {
    WA.sendChatMessage("Hello, how can I help you?", 'Mr.Teddy');
});
WA.onLeaveZone('npcZone', () => {
    WA.sendChatMessage("GoodBye", 'Mr.Teddy');
});
WA.sendChatMessage("test", 'test');


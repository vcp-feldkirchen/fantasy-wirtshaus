WA.onEnterZone('npcZone', () => {
    WA.sendChatMessage("Hello, how can I help you?", 'Mr.Teddy');
});
WA.onLeaveZone('npcZone', () => {
    WA.sendChatMessage("GoodBye", 'Mr.Teddy');
});
WA.sendChatMessage("test", 'test');


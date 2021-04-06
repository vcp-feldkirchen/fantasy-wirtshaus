onEnterZone('npcZone', () => {
    WA.sendChatMessage("Hello, how can I help you?", 'Mr.Teddy');
}
onLeaveZone('npcZone', () => {
    WA.sendChatMessage("GoodBye", 'Mr.Teddy');
}
WA.sendChatMessage("test", 'test');

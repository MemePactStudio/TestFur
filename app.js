document.getElementById('getFortune').addEventListener('click', function() {
    const userName = document.getElementById('userName').value;
    const fortuneMessages = [
        "Great fortune is coming your way!",
        "Be cautious in your investments.",
        "Luck favors the bold, but not the reckless.",
        "A rise in value is in your near future.",
        "Unexpected gains will find you soon."
    ];
    const randomFortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
    document.getElementById('fortuneResult').textContent = `${userName}, ${randomFortune}`;
});
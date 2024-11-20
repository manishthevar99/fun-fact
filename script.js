const facts = [
    "At 21, I have a deep love for mountains and enjoy exploring their majestic beauty.",
    "I am passionate about hiking and have already visited several breathtaking mountain ranges.",
    "I find peace and inspiration in the tranquility of mountainous landscapes.",
    "I am eager to learn more about the flora and fauna unique to mountain ecosystems.",
    "My dream is to conquer some of the world's most famous peaks in the coming years."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});

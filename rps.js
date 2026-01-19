// Rock Paper Scissors CLI Game

const choices = ["rock", "paper", "scissors"];

// Get player input from command line
const playerChoice = process.argv[2]?.toLowerCase();

if (!choices.includes(playerChoice)) {
console.log("❌ Invalid choice.");
console.log("Usage: node rps.js <rock|paper|scissors>");
process.exit(1);
}

// Generate computer choice
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Determine winner
let result;

if (playerChoice === computerChoice) {
    result = "It's a tie!";
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    result = "🎉 You win!";
} else {
    result = "💻 Computer wins!";
}

// Output result
console.log(`You chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(result);
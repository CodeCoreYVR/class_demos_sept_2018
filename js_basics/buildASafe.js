// Build a safe to guard the secret number "714".
// - Require the first argument to be the password.
// - If the script is used without an argument, log "Password argument is required"
// - If the password is correct (opensesame), log the safe's secret number.
//   Otherwise, log a failure message.

const args = process.argv.slice(2);
const password = args[0];

// if (typeof password === "undefined") {
// if (password === undefined) {
if (!password) {
  console.log("Password required!");
} else if (password === "supersecret") {
  console.log("The number is: 42");
} else {
  console.log("Password is invalid");
}

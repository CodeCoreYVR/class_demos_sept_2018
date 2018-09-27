module.exports = function(data) {
  const lines = data.toString().split('\n');
  const linesWithNumbers = [];
  for(let i = 0; i < lines.length; i++) {
    linesWithNumbers.push(`${i + 1}   | ${lines[i]}`);
  }
  return linesWithNumbers.join('\n');
}

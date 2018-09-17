function reverse(string) {
  if(string.length === 0) {
    return "";
  } else {
    return string.slice(-1) + reverse(string.slice(0, -1));
  }
}

function reverse(string) {
  if(string.length === 0) {
    return "";
  } else {
    const indexOfLastChar = string.length - 1;
    return string.slice(indexOfLastChar) + 
           reverse(string.slice(0, indexOfLastChar));
  }
}
console.log(reverse("Hello World"));
console.log(reverse("H"));
console.log(reverse(""));
console.log(reverse("hey"));
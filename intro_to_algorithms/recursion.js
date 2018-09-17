let counter = 0;
function d() {
  if(counter < 20) {
    console.log('D');
    counter++;
    d();
  }
}

d();
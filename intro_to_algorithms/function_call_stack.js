function a() {
  console.log("I'm in A");
}

function b() {
  a();
  console.log("I'm in B");
}

function c() {
  b();
  console.log("I'm in C");
}

function d() {
  c();
  console.log("I'm in D");
}

d();
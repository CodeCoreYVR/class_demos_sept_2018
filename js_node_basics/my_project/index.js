const QRCode = require("qrcode");

QRCode.toFile("hello.png", "Hello CodeCore Students", (err) => {
  if (err) throw err;
});
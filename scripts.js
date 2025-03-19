window.addEventListener("load", (event) => {
  let qrContainer = document.getElementById("qrContainer");
  let qrColor = document.getElementById("qrColor").value;
  let bgColor = document.getElementById("bgColor").value;

  new QRCode(qrContainer, {
    text: "qrcodegenerator-placeholder.com",
    width: 200,
    height: 200,
    colorDark: qrColor,
    colorLight: bgColor
  });
});

function generateQR() {
    let text = document.getElementById("qrText").value;
    let qrContainer = document.getElementById("qrContainer");
    let qrColor = document.getElementById("qrColor").value;
    let bgColor = document.getElementById("bgColor").value;

    if (!text) {
      text = "qrcodegenerator-placeholder.com";
    }

    qrContainer.innerHTML = ""; // Limpiar QR anterior
    new QRCode(qrContainer, {
      text: text,
      width: 200,
      height: 200,
      colorDark: qrColor,
      colorLight: bgColor
    });
  }

function downloadQR() {
    let qrCanvas = document.querySelector("#qrContainer img");
    if (!qrCanvas) {
      alert("Primero genera un QR");
      return;
    }
    let link = document.createElement("a");
    link.href = qrCanvas.src;
    link.download = "codigoQR.png";
    link.click();
  }

function copyQR() {
    let qrImg = document.querySelector("#qrContainer img");
    if (!qrImg) {
      alert("Genera un QR primero");
      return;
    }
    fetch(qrImg.src)
      .then(res => res.blob())
      .then(blob => navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]))
      .then(() => alert("¡QR copiado!"))
      .catch(err => console.error("Error copiando QR", err));
  }

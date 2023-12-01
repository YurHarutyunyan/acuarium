function runNemo() {
    const image = document.getElementById('nemo');
    const imageWidth = image.width;
    const imageHeight = image.height;
    const newWidth = Math.random() * (500);
    const newHeight = Math.random() * (250);

    image.style.transform = `translate(${newWidth}px, ${newHeight}px)`;
  }
  
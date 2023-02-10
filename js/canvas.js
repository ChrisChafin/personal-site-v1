const html = document.documentElement;
// canvas
const canvas = document.getElementById("main-hero-lightpass");
// canvas context
const canvasContext = canvas.getContext("2d");
// frame count
const numberOfFrames = 147;
//current frame
const currFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
);
// preload img method so we don't have to make a new request for every frame we scroll
const preloadImages = () => {
    for (let i = 1; i < numberOfFrames; i++) {
        const img = new Image();
        img.src = currFrame(i) ;
    }
};
// create and draw the image
const img = new Image();
img.src = currFrame(1);
// canvas dimensions
canvas.width = 1200;
canvas.height = 750;
// draw image
img.onload = function() {
    canvasContext.drawImage(img, 0, 0);
}
// update image method
const updateImg = index => {
    img.src = currFrame(index);
    canvasContext.drawImage(img, 0, 0);
}
// event listener for scroll position
window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        numberOfFrames - 1,
        Math.ceil(scrollPercent * numberOfFrames)
      );
    // callback
    requestAnimationFrame(() =>{
        updateImg(frameIndex + 1)
    });
});
// run preload messages
preloadImages();
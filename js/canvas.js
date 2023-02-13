//window
var $window = $(window);
// html
const html = document.documentElement;
// canvas
const canvasMobile = document.getElementById("main-hero-mobile");
const canvasDesktop = document.getElementById("main-hero-desktop");
// canvas context
const canvasContextDesktop = canvasDesktop.getContext("2d");
const canvasContextMobile = canvasMobile.getContext("2d");
// small img url
const smallFrame = index => (
    `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/small/${index.toString().padStart(4, '0')}.jpg`
);
// large img url
const largeFrame = index => (
    `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${index.toString().padStart(4, '0')}.jpg`
);
//check screen width
function checkWidth(canvasMobile, canvasDesktop) {
    var windowSize = $(window).width();
    if (windowSize > 768){
        //desktop
        const largeFrame = index => (
            `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${index.toString().padStart(4, '0')}.jpg`
        );
        //frames
        numberOfFrames = 215;    
        // canvas dimensions
        canvasDesktop.width = 1464;
        canvasDesktop.height = 824;
        // create and draw the image
        const img = new Image();
        img.src = largeFrame(1);
        // draw image
        img.onload = function() {
            canvasContextDesktop.drawImage(img, 0, 0);
        }
        // preload img method so we don't have to make a new request for every frame we scroll
        const preloadImages = () => {
            for (let i = 1; i < numberOfFrames; i++) {
                const img = new Image();
                img.src = largeFrame(i) ;
            }
        };        
        // update image method
        const updateImg = index => {
            img.src = largeFrame(index);
            canvasContextDesktop.drawImage(img, 0, 0);
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
        preloadImages(numberOfFrames);                  
    } else {
        //mobile
        const smallFrame = index => (
            `https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/small/${index.toString().padStart(4, '0')}.jpg`
        );        
        //frames
        numberOfFrames = 211;        
        // canvas dimensions
        canvasMobile.width = 400;
        canvasMobile.height = 456;
        // create and draw the image
        const img = new Image();
        img.src = smallFrame(1);
        // draw image
        img.onload = function() {
            canvasContextMobile.drawImage(img, 0, 0);
        }
        // preload img method so we don't have to make a new request for every frame we scroll
        const preloadImages = () => {
            for (let i = 1; i < numberOfFrames; i++) {
                const img = new Image();
                img.src = smallFrame(i) ;
            }
        };        
        // update image method
        const updateImg = index => {
            img.src = smallFrame(index);
            canvasContextMobile.drawImage(img, 0, 0);
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
        preloadImages(numberOfFrames);             
    }
    return windowSize;
}
checkWidth(canvasMobile, canvasDesktop);

// Bind event listener to window resize
$(window).resize(function(){
    checkWidth(canvasMobile, canvasDesktop);
});
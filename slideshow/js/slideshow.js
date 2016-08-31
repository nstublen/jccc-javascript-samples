/**
 * Created by neal on 8/24/16.
 */

/*
 Use a timer to animate the image tray to the left to
 display the image on the right (shift 864px). Wait a couple
 of seconds and move the tray back to the right, but shift
 the images so the transition is not evident. The tray should
 then be updated with the next set of images and give the
 appearance of an infinitely scrolling set of images.
 */
function initializeSlideshow() {

    var images = [
        "http://wallpoper.com/images/00/39/26/85/green-fish_00392685.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/b8/Picasso.triggerfish.arp.jpg",
        "http://imgs.mi9.com/uploads/landscape/3828/underwater-fish-in-hawaii_1920x1200_58008.jpg",
        "http://wallpoper.com/images/00/44/28/57/underwater-maui-hawaii_00442857.jpg"
    ];

    var $tray = document.getElementById("tray");
    var $imageLeft = document.getElementById("left-image");
    var $imageRight = document.getElementById("right-image");

    // "Push" the tray back to the right. First, we copy the image
    // from the right <img> element into the left <img> element.
    // Next, we disable the transition animation and push the tray
    // back to its natural position with a zero left offset. Since
    // the left and right <img> tags are displaying the same image,
    // the user can't tell that the tray position has changed.
    // However, we can load the next image into the <img> tag on
    // the right by bumping the image index and reselecting the
    // images we display.
    function resetRight() {
        var imageSrc = $imageRight.getAttribute("src");
        $imageLeft.setAttribute("src", imageSrc);

        $tray.style.transition = "";
        $tray.style.left = "0";

        imageIndex += 1;
        selectImages(imageIndex);
    }

    // Select the images for display by using an offset into the
    // array of image URLs.
    function selectImages(firstIndex) {
        $imageLeft.setAttribute("src", images[firstIndex % images.length]);
        $imageRight.setAttribute("src", images[(firstIndex + 1) % images.length])
    }

    // Slide the tray to the left by enabling a transition
    // animation and updating the tray's left offset.
    function slideLeft() {
        $tray.style.transition = "left 500ms ease-in-out";
        $tray.style.left = "-864px";
    }

    // Select the initial two images.
    var imageIndex = 0;
    selectImages(imageIndex);

    // Set an interval timer that will slide the tray to the left
    // every two seconds. Every time the tray slides to the left,
    // set a one and a half second timer that will reset the tray
    // back to its original position.
    setInterval(function () {
        slideLeft();
        setTimeout(function () {
            resetRight();
        }, 1500);
    }, 2000);

    // As an alternative, we could have used the "load" event on
    // the <img> tags to trigger the tray movement.
    /*
    $imageLeft.addEventListener("load", function () {
        if ($tray.style.left == "-864px") {
            resetRight();
        }
    });

    $imageRight.addEventListener("load", function () {
        setTimeout(function () {
            slideLeft();
            setTimeout(resetRight, 1000);
        }, 1000);
    });
    */
}

window.addEventListener("load", initializeSlideshow);

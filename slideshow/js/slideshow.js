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

}

window.addEventListener("load", initializeSlideshow);

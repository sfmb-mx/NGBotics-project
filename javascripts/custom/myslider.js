/*******************************************
* - PREPARE PLACEHOLDER FOR SLIDER  -
* ******************************************/
jQuery(document).ready(function() {
    jQuery('#rev_slider_3_1').show().revolution(
        {
            dottedOverlay:"none",
            delay:9000,
            startwidth:1200,
            startheight:500,
            hideThumbs:0,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:3,


            simplifyAll:"off",

            navigationType:"bullet",
            navigationArrows:"none",
            navigationStyle:"round",

            touchenabled:"on",
            onHoverStop:"on",
            nextSlideOnWindowFocus:"off",

            swipe_threshold: 75,
            swipe_min_touches: 1,
            drag_block_vertical: true,



            keyboardNavigation:"off",

            navigationHAlign:"right",
            navigationVAlign:"center",
            navigationHOffset:20,
            navigationVOffset:0,

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,

            shadow:0,
            fullWidth:"off",
            fullScreen:"on",

            spinner:"spinner0",

            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,

            shuffle:"off",


            forceFullWidth:"off",
            fullScreenAlignForce:"off",
            minFullScreenHeight:"",
            hideTimerBar:"on",
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"on",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,

            fullScreenOffsetContainer: "#pseudo-header",
            fullScreenOffset: "",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0
        });
}); //ready

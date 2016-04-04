$(document).foundation();
$(function() {
    console.log( "ready!" );
    $('#fullpage').fullpage({
    	anchors:['nav_CV', 'nav_webdesign', 'nav_ux', 'nav_logo', 'nav_photo'],
    	onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 1 && direction =='down'){
                $('#nav').toggleClass('open');
            }

            else if(index == 2 && direction == 'up'){
                
                $('#nav').toggleClass('open');
            }
        }
    });
});
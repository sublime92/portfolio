
$(document).ready(function(){

    $('#slides').superslides({
        animation : 'fade',
        play: 3000
    });

    let typed = new Typed(".typed",{
        strings: ["Student.","Web Developer.","Embedded Developer.", "Electrical Engineer."],
        typeSpeed:75,
        loop:true,
        startDelay: 1000,
        showCursor: false
    });

    $(".items").isotope({
        filter:'*',
        animationOptions: {
            duration: 500,
            easing:'linear',
            queue:false
        }
    })

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});
});

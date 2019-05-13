$(function(){

	// Tính vị trí màn hình khi cuộn chuột
	$(window).scroll(function(){
		vitri = $('html,body').scrollTop();
		console.log(vitri);
		//Cuộn chuột cho All Products
		if(vitri > 1300){
			$('.row_all').addClass('bum');
		}
		else if(vitri < 1300){
			$('.row_all').removeClass('bum');
		}
	})
	// JS Cho Menu	
	$('.nutmenu').click(function(){
		$('.menuphai').addClass('ra');
		return false;
	})
	$('.dong').click(function(){
		$('.menuphai').removeClass('ra');
		return false;
	})
	//Hiệu Ứng Scroll Chuột
	$('.btn.btn-default.whitebut').click(function(){
		$('html,body').animate({
			scrollTop:$('.allproducts').offset().top
		},2000,"easeInBounce");
		$('.menuphai').removeClass('ra');
		return false;
	})
	$('.x2').click(function(){
		$('html,body').animate({
			scrollTop:$('.bs').offset().top
		},2000,"easeOutElastic");
		$('.menuphai').removeClass('ra');
		return false;
	})
	$('.x3').click(function(){
		$('html,body').animate({
			scrollTop:$('.allproducts').offset().top
		},2000,"easeOutElastic");
		$('.menuphai').removeClass('ra');
		return false;
	})
	$('.x5').click(function(){
		$('html,body').animate({
			scrollTop:$('.footer').offset().top
		},2000,"easeInOutCirc");
		$('.menuphai').removeClass('ra');
		return false;
	})
	$('.x1').click(function(){
		$('html,body').animate({
			scrollTop:0
		}, 2000,"easeInBounce");
		$('.menuphai').removeClass('ra');
		return false;
	})
})
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});


























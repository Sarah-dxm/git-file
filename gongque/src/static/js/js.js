$(function(){
			$('#fullpage').fullpage({
				css3:true,
	    anchors: ['firstPage', 'sePage', 'thirdPage', 'fourthPage','fifthPage','sixthPage'],
	    menu: '#myMenu',
});
		$(".ppp").parent().css("width",$("body").css("width"));
		$(".lunbo").lunbos("fade");
		$(".fp-tableCell").css("width",$("body").css("width"));
		//city1中进与不进中相片的切换
		$(".city1 .out ul li").hover(function(){
			$(this).children(".zz").css("opacity","1");
		},function(){
			$(this).children(".zz").css("opacity","0");
		})
		//socity4与product5中进与不进中相片的切换
		$(".out1 ul li").hover(function(){
			$(this).children(".zz").css("opacity","1");
		},function(){
			$(this).children(".zz").css("opacity","0");
		})
		//city1中进中的相关操作
		$(".city1 .out ul li").click(function(){
			$(".city1").addClass("back");
			$(".city1 .outt").css("display","none");
			$(".city1 .slide").css({"display":"block","z-index":99});
			$(".city1 .fp-controlArrow").css("display","block");
			$(".city1 .fp-slides").css("display","block");
			$.fn.fullpage.moveTo(2,$(this).index());
			$.fn.fullpage.setAllowScrolling(false);
		})
		$(".city1 .local .fan").click(function(){
			$(".city1").removeClass("back");
			$(".city1 .slide").parents(".fp-slides").css({"display":"none"});
			$(".city1 .slide").css({"display":"none"});$(".city1 .outt").css("display","block");
			$.fn.fullpage.setAllowScrolling(true);
		})
		$(".pagelun div").click(function(){
			$(this).addClass("focus").siblings().removeClass("focus");
			if($(this).text()==1){
				$(".im1").css("display","block");
				$(".im2").css("display","none");
			}else{
				$(".im1").css("display","none");
				$(".im2").css("display","block")
			}
		})
		$(".page2 img").click(function(){
			var src="static/img/in2/nav/in_0";
			$(".page2 img").each(function(index,elem){
			$(elem).attr("src",src+(index+1)+".png");
		})
			$(this).attr("src",src+($(this).index()+1)+"_h.png");
			$(".edu ul li").eq($(this).index()).css("display","block").siblings().css("display","none")
		})
		//build2中相关的jquery代码
		$(".buil2 .jinn").click(function(){
			$(".out2").css("display","none");
			$(".build-jin").css("display","block");
			$(".build-jin .local").css("display","block");
			$(".buil2").css("background-image","url(static/img/info2/bg_01.jpg)");
			$.fn.fullpage.setAllowScrolling(false);
		})
		$(".buil2 .fan").click(function(){
			$(".out2").css("display","block");
			$(".build-jin").css("display","none");
			$(".build-jin .local").css("display","none");
			$(".buil2").css("background-image","url(static/img/bg_04.jpg)");
			$.fn.fullpage.setAllowScrolling(true);
		})
		$(".builcheck img").click(function(){
			var src="static/img/info2/bg_0";
			if($(this).index()==0){
				$(this).attr("src",src+"7.jpg").siblings().attr("src",src+"4.jpg");
				$("#page3InfoOperImg").attr("src",src+"7-2.png");
			}else{
				$(this).attr("src",src+"5.jpg").siblings().attr("src",src+"6.jpg");
				$("#page3InfoOperImg").attr("src",src+"7-1.png");
			}
		})
		//yunlin3相关代码
		$(".out3 .jinn").click(function(){
			$(".out3").css("display","none");
			$(".yunlin-jin").css("display","block");
			$(".yunlin3>div").css("background-image","url(static/img/info3/bg_02.jpg)");
			$.fn.fullpage.setAllowScrolling(false);
		})
		$(".yunlin-jin .fan").click(function(){
			$(".out3").css("display","block");
			$(".yunlin-jin").css("display","none");
			$(".yunlin3>div").css("background-image","url(static/img/bg_05.jpg)");
			$.fn.fullpage.setAllowScrolling(true);
		})
		
})
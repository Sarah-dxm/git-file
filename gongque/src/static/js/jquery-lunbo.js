;(function($){
	$.fn.lunbos=function(type){
		var box=this;
		var item=box.find(".item1");
		var w=parseInt(item.outerWidth());
		var ww=parseInt(box.outerWidth());
		var index=0;
		var pages=box.find(".page span");
		if(type=="fade"){
			fadeset();
			autoplay();
		}
		//type=fade时，轮播样式的设置
		function fadeset(){
			item.css({"display":"none","position":"absolute"});
			item.eq(0).css({"display":"block"});
			
		}
		//向前的实现
		function fadebefore(){
			index--;
			if(index<0){
				index=item.length-1;
			}
			item.eq(index).fadeIn(300).siblings(".item1").fadeOut(300);
			getindex();
		}
		//向后的实现
		function fadeafter(){
			index++;
			if(index>3){
				index=0;
			}
			if(index>item.length-1){
				index=0;
			}
			item.eq(index).fadeIn(300).siblings(".item1").fadeOut(300);
			getindex();
		}
		//自动播放的实现
		function autoplay(){
			var t=setInterval(function(){
			fadeafter();
			},2000);
			box.hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(function(){
				fadeafter();
			
			},2000);
			})
		}
		function getindex(){
			if(pages.eq(index).attr("class")=='onn'){
				return false;
			}else{
				pages.eq(index).addClass("onn").siblings().removeClass("onn");
				if(index==pages.length){
					pages.eq(0).addClass("onn").siblings().removeClass("onn");
				}
			}
		}
		pages.each(function(ind,elem){
			$(this).click(function(){
				pages.eq(ind).addClass("onn").siblings().removeClass("onn");
				item.eq(ind).fadeIn(300).siblings(".item1").fadeOut(300);
				index=ind;
			})
		})
	}
})(jQuery)

;(function($){
	$.fn.lunbo=function(type){
		var box=this;
		var item=box.children(".item");
		var btnl=box.children(".btnl");
		var btnr=box.children(".btnr");
		var index=0;
		var outside="<div class='outside'></div>"
		if(type=="fade"){
			fadeset();
			btnl.on("click",fadebefore) ;
			btnr.on("click",fadeafter);
			autoplay();
		}else{
			setstyle();
			btnl.on("click",before);
			btnr.on("click",after);
			play();
		}
		//type=fade时，轮播样式的设置
		function fadeset(){
			item.css({"display":"none","position":"absolute"});
			item.eq(0).css("display","block");
			box.children("button").css("margin-top","260px")
		}
		//向前的实现
		function fadebefore(){
			index--;
			if(index<0){
				index=item.length-1;
			}
			item.eq(index).fadeIn(300).siblings(".item").fadeOut(300);
		}
		//向后的实现
		function fadeafter(){
			index++;
			if(index>item.length-1){
				index=0;
			}
			item.eq(index).fadeIn(300).siblings(".item").fadeOut(300);
		}
		//自动播放的实现
		function autoplay(){
			var t=setInterval(function(){
				btnr.trigger("click");
			},1000);
			box.hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(function(){
				btnr.trigger("click");
			},1000);
			})
		}
		//设置轮播的默认样式
		function setstyle(){
			item.appendTo($(".outside"));
			var newclone=item.eq(0).clone();
			$(".outside").append(newclone);
			item=$(".outside .item");
			var wid=item.length*item.width();
			item.css("display","inline-block");
			$(".outside").css({"width":wid,"position":"relative"});
			box.css({"overflow":"hidden"});
		}
		function before(){
			index--;
			var w=item.outerWidth();
			if(index<0){
				index=item.length-1;
				$(".outside").css("left",-index*w);
				index--;
			}
			$(".outside").stop().animate({"left":-index*w},1000);
		}
		function after(){
			index++;
				var w=item.outerWidth();
			if(index>item.length-1){
				index=0;
				$(".outside").css("left",-index*w);
				index++;
			}
			$(".outside").stop().animate({"left":-index*w},1000);
		}
		function play(){
			var t=setInterval(function(){
				btnr.trigger("click");
			},1000);
			box.hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(function(){
				btnr.trigger("click");
			},1000);
			})
		}
	}
})(jQuery)

$(function(){
	
	
	$("#jl-sectionOne,#jl-sectionTwo,#jl-sectionThree,#jl-sectionFour,#jl-sectionFive,#jl-sectionSix").css("height", $(window).height());
	
	
	$("#jl-nav").css("z-index", 1);
	// 导航条固定顶部
	$("#jl-nav").navFixed();
	//平滑滚动导航
	$('#jl-down a, nav a').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-$("#jl-nav").outerHeight(true)}, 600);
		event.preventDefault();
	});

	
});


	
(function($){
	$.fn.myScroll=function(options){
		var defaults={
			optClass:'mark-color',   
			moveBoxId:'#boxImg',
			changeRadiusClass:'.boxnum',   //要改变翻滚圆点 的标签
			currentNumId:1,
			perImgWidth:950,
			speed:500,
			licount:2
		};
		var opts=$.extend({},defaults,options);
				
		//改变滚动选中圆点样式
		$(opts.changeRadiusClass).removeClass(opts.optClass);  //先把所有标识为红色圆点清除
		$("#num"+opts.currentNumId).addClass(opts.optClass); //选中圆点的标签添加样式
		
		 //图片移动 （按照图片宽度*当前到第几个圆点标识）
		 //因默认展示第一张图，scrollLeft从0开始；所以-1
	    var viewWidth=opts.perImgWidth*(opts.currentNumId-1);
	    console.log(viewWidth);
        $(opts.moveBoxId).animate({"scrollLeft":viewWidth},opts.speed);	
	}
})(jQuery);
  
 $(function(){ 
 	
 	 //圆点点击滚动
  	 $(".boxnum").click(function(){
  	 	  //获取当前圆点编号，滚到第几张图片 如num1,为获取1这个标识
  	 	  var currentNumId=parseInt($(this).attr("id").substr(3)); 
  	 	  console.log(currentNumId);
  	 	  $(this).myScroll({'currentNumId':currentNumId});
  	 });
  	 
  	 //左右滚动
  	 $(".boxLeft,.boxRight").click(function(){
		var leftOrRight=$(this).attr("class");
		var liId=parseInt($(".mark-color").attr("id").substr(3)); 
		var currentNumId=0;	
		/*if(leftOrRight=="boxLeft")
			currentNumId=((liId-1)==0)?5:(liId-1);
		if(leftOrRight=="boxRight")
			currentNumId=((liId+1)==6)?1:(liId+1);	*/
		if(leftOrRight=="boxLeft")
			currentNumId=((liId-1)==0)?2:(liId-1);
		if(leftOrRight=="boxRight")
			currentNumId=((liId+1)==3)?1:(liId+1);	
  	 	$(this).myScroll({'currentNumId':currentNumId});
	});
	
	var ani=setInterval(function(){
    	 $(".boxRight").click();
    },2000);
		
	$(".box").mouseover(function(){
		clearInterval(ani);
		$("#boxImg").stop();
	}).mouseout(function(){
		ani=setInterval(function(){
    	 $(".boxRight").click();
      },2000); 
	}); 
  	
 });
	

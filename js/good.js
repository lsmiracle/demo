$(function(){
	  //滑过商品时让其对应的的商品规格显示
	 $(".productList-img").hover(
	  	function(){
	  	 	$(this).children(".productList-type").toggle();
	  	 	$(this).next(".productList-infro").toggle();
	  });
	  
	  //给尺寸的信息栏定位
	var left;
	//for(var i=0;i<$(".good-content-list>.productList").length;i++){
	  	for(var j=0;j<$(".size-infro>li").length;j++){
	  		let index = $(this).index();
		 	$(".size-infro>li")[j].style.left = left+"px";
		 	left += 55;
	   }
	  //	left = 0;
	//}
	   //滑过商品型号显示信息描述
	$(".productList .size>li").hover(function(){
	  	 let index = $(this).index();
	  	$($(this).parent().siblings(".size-infro").children()[index]).toggle();
	});
	  //滑过商品种类，让其显示在放置商品放大效果的位置
	$(".size-img>li>img").mouseover(function(){
	  	let index = $(this).index();
	  	let src = $(this).attr("src");
	  	$(this).parents(".productList-type").prev().children("img").attr("src",src);
	  	$(this).css("border","1px solid black");
	});
	
	 $(".size-img>li>img").mouseout(function(){
	 	$(".size-img>li>img").css("border","none");
	 });
	  
});
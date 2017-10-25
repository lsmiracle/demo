$(function(){
	//获取保存的cookie
	var str = getCookie("user");
	var user = JSON.parse(str);
	$("#myName").text(user.userName);
	if($("#myName").text()==user.userName){
		$("#myName").attr("href","shopCar.html");
		$("#myAccount").text("我的账户");
		$("#myAccount").attr("href","shopCar.html");
	}
	 //给导航栏的所属信息定位
	 $(".header-nav").css("position","absolute");
	  var left = 300;
	 for(var i=0;i<$(".header-nav").length;i++){
	 	$(".header-nav")[i].style.left = left+"px";
	 	left += 87;
	 }
	  //滑过导航时显示其所属信息
	 $(".header-bottom-left>a").hover(
	 	function(){
	 	 let index = $(this).index();
	 	 $($(".header-nav")[index-1]).toggle();
	  });
	   //活动开始
	  let d = new Date();
	      d = d.getDay();
	      
	  $(".liClass").click(function(){
	  	  $(this).css("border-bottom","4px solid black");
	  	  let index = $(this).index();
          for(var i=0;i<$(".weekLi").length;i++){
          	if(i==index){
          		$($(".weekLi")[i]).show();
          		let newHeight = $(this).outerHeight();
          		$("#weekLiId").css("height","newHeight");
          	}else{
          		$($(".liClass")[i]).css("border-bottom","none");
          	    $($(".weekLi")[i]).hide();
          	}
          }  
	  });
})

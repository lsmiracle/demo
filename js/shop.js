function leftTimer(year, month, day, hour, minute, second) {
	var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); //计算剩余的毫秒数
	var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
	var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
	var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
	var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
	days = checkTime(days);
	hours = checkTime(hours);
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	setInterval("leftTimer(2017,10,14,0,0,0)", 1000);
	//document.getElementById("timer").innerHTML = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
	$(".days").text(days);
	$(".hours").text(hours);
	$(".minutes").text(minutes);
	$(".seconds").text(seconds);
}

function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
	if(i < 10) {
		i = "0" + i;
	}
	return i;
}

$(function(){
		//商品尺寸信息信息定位
    var left = 0;
    for(var i=0;i<$(".shop-size-infro>li").length;i++){
    	$(".shop-size-infro>li")[i].style.left = left+"px";
	 	left += 80;
    }
	//滑过商品尺寸，显示详细信息
	
	$(".shop-size>span").mouseenter(function(){
		let index = $(this).index();
		$($(".shop-size-infro>li")[index-1]).show();
	});
	$(".shop-size>span").mouseleave(function(){
		let index = $(this).index();
		$($(".shop-size-infro>li")[index-1]).hide();
	});
	$(".shop-size>span").click(function(){
		$(".shop-size>span").removeClass("active");
		$(this).addClass("active");
		$(".size-choice p")[1].style.display = "none";
	  });
	  
	//购买商品数量
	$("#plus").click(function(){
		$("#plus").prev().text(Number($("#plus").prev().text())+1);
	});
	$("#subtract").click(function(){
		if($("#subtract").next().text()!=1){
			$("#subtract").next().text(Number($("#subtract").next().text())-1);
		}
	});
	
	//加入购物车
	$("#add-car").click(function(){
		if($(".shop-size .active").length==1){
			let num1 = Number($("#plus").prev().text());
			let num2 = Number($(".shop-price>p:first>span").text());
			let num3 = Number($(".header-bottom-right>a:first").text());
			let num4 = Number($(".header-bottom-right .tatol").text());
			let num = num4+num1*num2;
			$(".header-bottom-right>a:first").text(num3+1);
			$(".header-bottom-right .tatol").text(num);
		}else{
			$(".size-choice p")[1].style.display = "block";
		}
	});
	//点击细节图让其放大显示
	$(".shop-content-left ul>li").click(function(){
		let src = $(this).children("img").attr("src");
		$("#shop-content-left-top>img").attr("src",src);
	});
});

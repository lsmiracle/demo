$(function(){
	//点击尺寸修改，显示能修改的尺寸信息
	$(".color-add-size-infor>input").click(function(){
		$(this).addClass("change");
		$(this).parent().addClass("styleChange");
		$(this).parents(".goods-detail").find(".shopCar-size").css("display","block");
		//判断尺寸是XL或者M...,点击修改，显示的页面尺寸与前边尺寸一样让其样式改变
		let text1 = $(this).prev().children("p:last").children().text();
		for(var i=0;i<$(this).parent().next().find(".shopCar-size-list>li").length;i++){
			if($($(this).parent().next().find(".shopCar-size-list>li")[i]).text()==text1){
				$($(this).parent().next().find(".shopCar-size-list>li")[i]).addClass("choiceSize");
				continue;
			}
		}
		//点击选中的尺寸，让其背景变黑，其他尺寸恢复正常
		$(".shopCar-size-list>li").click(function(){
			let that = this;
			$(that).parent().children().removeClass("choiceSize");
			$(that).addClass("choiceSize");
		});
		//点击确定按钮，让显示尺寸内容变成当前选中的尺寸
		$(this).parent().next().find("input").click(function(){
			let that = this;
			$(that).parent().prev().children("input").removeClass("change");
			$(that).parent().prev().removeClass("styleChange");
			if($(that).prev().find(".shopCar-size-list .choiceSize").length==1){
				let text2 = $(that).prev().find(".shopCar-size-list .choiceSize").text();
				$(that).parent().prev().find(".size").text(text2);
			};
			$(that).parent().css("display","none");
		});
		//点击关闭×，该显示框关闭
	   $(".close").click(function(){
	   	    let that = this;
			$(that).parent().prev().children("input").removeClass("change");
			$(that).parent().prev().removeClass("styleChange");
			$(that).parent().css("display","none");
	    });
	});
	//购买商品数量
	$(".shopCar-data-plus").click(function(){
		$(this).prev().text(Number($(this).prev().text())+1);
		let numDate1 = Number($(this).parent().prev().children(".unitPrice").text());
	    let numDate2 = Number($(this).prev().text());
	    let numDate = numDate1*numDate2;
	    $(this).parent().siblings(".goods-data-price").children(".total-price").text(numDate);
	});
	$(".shopCar-data-subtract").click(function(){
		if($(this).next().text()!=1){
			$(this).next().text(Number($(this).next().text())-1);
		    let numDate1 = Number($(this).parent().prev().children(".unitPrice").text());
	        let numDate2 = Number($(this).next().text());
	        let numDate = numDate1*numDate2;
	        $(this).parent().siblings(".goods-data-price").children(".total-price").text(numDate);
		    $(".shopCar-data-subtract").css("color","#000");
		}else if($(".shopCar-data-subtract").next().text()==1){
			$(".shopCar-data-subtract").css("color","#999");
		};
	});
	//点击删除按钮，删除商品
	$(".delete-good").click(function(){
	   $(this).next("div").css("display","block");
	});
	$(".cancel").click(function(){
	     $(this).parent().css("display","none");
	});
    $(".confirm").click(function(){
	    $(this).parent().css("display","none");
	    $(this).parents(".goods-detail").remove();
    });
	
	//点击心愿行的任意一个，人让其对应的部分显示，其余的隐藏
	$(".status>p").click(function(){
		$(".status>p").css("background","none");
		$(this).css("background","#eee");
		let index = $(this).index();
		$("#detailBox>div").css("display","none");
		$($("#detailBox>div")[index]).css("display","block");
	});
	//点击input带有radio的按钮，给其增加一个属性，判断其祖先元素下增加的其属性的个数，大于等于1的让go-shopping的第一个隐藏，第二个显示
    $("#detailBox input:radio").click(function(){
    	$(this).addClass("hits");
    	if($("#detailBox .hits").length!=0){
    		$(".shopOne").css("display","none");
    		$(".shopTwo").css("display","block");
    	}
    });
   /*//实现单选和反选及全选
	$(".checkAll").click(function(){
		$(".goods-detail :radio").checked($("#checkAll")[0].checked);
	});
	
	$(".goods-detail :radio").click(function(){
		$(".goods-detail :radio").backControl($("#checkAll")[0]);
	});
	*/
});

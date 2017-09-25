
//单选按钮事件

define(function(require) {
	$(".radio-qky").on("click",function(){
		$(this).toggleClass("select").siblings().removeClass("select");
	})

})


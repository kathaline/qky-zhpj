/****
特殊模块，路径导航组交互事件
****/ 

define(function(require,exports) {
	$(".cont_a").each(function(i) {
		$(this).on("click","a",function(){
		$(this).toggleClass("active").siblings().removeClass("active");
		 $("#ljcont_ul li").eq(i+1).html($(this).html());
		});  
    });
	$("#ljtag_btn").on("click",function(){
		$(".table_lj").slideToggle();
		$(this).find("i").toggleClass("r180");
		if($(this).attr("isc")=="no"){
			$(this).find("span").html("展<br>开<br>条<br>件");$(this).attr("isc","yes");
		}else{
			$(this).find("span").html("收<br>起<br>条<br>件");$(this).attr("isc","no");
		}
	});
});
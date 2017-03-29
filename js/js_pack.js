/*
原始版: 2016-4 by yhc
修改版 1.0 2016-6-17 hhf
修改 2016-9-20 yhc
*/
$(window).resize(function(){resizeWin();footinbottom();popZise()});function TxtOF(o){if(o.value==o.defaultValue){o.value="";o.style.color="#333"}}function TxtOB(o){if(o.value==""){o.value=o.defaultValue;o.style.color="#666"}}function PassOF(o){$(o).hide();$(o).prev("input").focus()}function PassOB(o){if(o.value==""){$(o).next("b").show()}}function popOut(i){$(i).fadeOut("fast")}function popIn(i){$(i).fadeIn("fast")}function popZise(){$(".pop_bg").height($(window).height()>$(document.body).height()?$(window).height():($(document.body).height())+40)}$(document).ready(function(){$(".show_s_list").click(function(){$(this).children(".arrow-down").toggleClass("arrow-up",1000);$(".names_list").slideToggle("1000")});$("a.head").click(function(){$(this).toggleClass("head-hid");$(".r-s-list").slideToggle("1000")})});$(".tan_cont li").each(function(i){$(this).attr("isclick","no");$(this).click(function(){if($(this).attr("isclick")=="no"){$(this).find(".ischoose").fadeIn(200);$(this).attr("isclick","yes")}else{$(this).find(".ischoose").fadeOut(200);$(this).attr("isclick","no")}})});$(window).on("resize",function(){initPageSize()});$(function(){function changeClass(){var windowWidth=$(window).width();if($(window).width()>1200){$("body").attr("class","ai-w-big")}else{$("body").attr("class","ai-w-small")}}$(document).ready(function(){changeClass()});$(window).resize(function(){changeClass()})});function getViewSize(){var w=0,h=0,o,d=document;if(window.innerWidth){o=window;w=o.innerWidth;h=o.innerHeight}else{if(d.documentElement&&d.documentElement.clientWidth){o=d.documentElement;w=o.clientWidth;h=o.clientHeight}}return{width:w,height:h}}jQuery(document).ready(function($){var offset=300,offset_opacity=1200,scroll_top_duration=700,$back_to_top=$(".cd-top");$back_to_top.on("click",function(event){event.preventDefault();$("body,html").animate({scrollTop:0,},scroll_top_duration)})});$(function(){$(".stu_inf-guide .nav li").on("click",function(){$(this).addClass("active").siblings().removeClass("active");console.log($(".title").eq($(this).index()).offset().top);$("body,html").stop(true,true).animate({"scrollTop":$(".title").eq($(this).index()).offset().top-90},1000)})});function selectTag(showContent,selfObj){var tag=document.getElementById("tags").getElementsByTagName("label");var taglength=tag.length;for(i=0;i<taglength;i++){tag[i].className=""}selfObj.parentNode.className="selectTag";for(i=0;j=document.getElementById("tagContent"+i);i++){j.style.display="none"}document.getElementById(showContent).style.display="block"};

//展开收起-详情
$(document).ready(function(){
  $('.rep_more-btn').each(function (index){    
    $('.rep_more-btn0'+index).click(function(){
      $('.rep_more-con0'+index).slideToggle('fast');
    });
  });
  });
function changeVal(obj){
    val=obj.value; 
    if(val=="点击查看详情"){
        obj.value="收起详情";
    }else if(val=="收起详情"){
        obj.value="点击查看详情";
    }
}

/*返回top*/
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 100,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});



function footinbottom(header,content,foot){
	var body_h=$(content).outerHeight()+$(header).outerHeight()+$(foot).outerHeight();
	if($(window).height()>=body_h){
		var foot_mt=$(window).height()-body_h;
	  $(foot).css("margin-top",foot_mt+"px");
	  
	}
	$(content).css({"margin-top":$(header).outerHeight()+"px"});
}	


// 站点设置
$(window).load(function(){
	footinbottom(".qky_newheader",".qky_content",".qky_footer");
});
//$(window).resize(function(){resizeWin();footinbottom();popZise()});
$(window).on('resize',function(){
	footinbottom(".qky_newheader",".qky_content",".qky_footer");

});

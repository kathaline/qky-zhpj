$(document).ready(function(){
 
  var len=8;
  var arr=$(".set-height .col-sm-3:not(:hidden)");
    if(arr.length<=len){
      $(".seth_div").hide();
        }
    if(arr.length>len){
    $('.set-height .col-sm-3:gt('+(len-1)+')').hide();
    }
   $(".seth_btn").click(function(){
        var arr=$(".set-height .col-sm-3:not(:hidden)");
      if(arr.length>len){
         $('.set-height .col-sm-3:gt('+(len-1)+')').hide();
         $(".seth_btn").html("请展开更多管理员 ▼");
         $(".seth_div").css({"position": "absolute","right": "0","top":"102px","display":"block",});
      }
       else{
         $('.set-height .col-sm-3:gt('+(len-1)+')').show();
         $(".seth_btn").html("请收起更多管理员 ▲");
         $(".seth_div").css({"position": "relative","left":"auto" ,"top":"auto","right": "auto","float": "left",});
       }
   });
 });
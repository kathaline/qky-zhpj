$(document).ready(function(){
 
  var len=8;//要显示的数量
  var arr=$(".set-height .col-sm-3:not(:hidden)");
    if(arr.length<=len){
        $(".seth_btn").hide();
        }
    if(arr.length>len){
    $('.set-height .col-sm-3:gt('+(len-1)+')').hide();
    }
   $(".seth_btn").click(function(){
        var arr=$(".set-height .col-sm-3:not(:hidden)");
      if(arr.length>len){
         $('.set-height .col-sm-3:gt('+(len-1)+')').hide();
         $(".seth_btn").val("展开更多管理员");
      }
       else{
         $('.set-height .col-sm-3:gt('+(len-1)+')').show();
         $(".seth_btn").val("收起更多管理员");
       }
   });
 });
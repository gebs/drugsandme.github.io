$.fn.entitle=function(){var t=$(this).siblings(".item-name").text();$(this).addClass("entitled"),$("#top-title").css({position:"relative"}),$("#top-title").children("h2").replaceWith('<h2 class="item-name">'+t+" </h2>");var e=$("#top-title h2").width()+20+"px";$("#top-title").animate({width:e},{duration:500,queue:!1}),$("#item-picker").animate({width:"13em"},{duration:300,queue:!1}),$(this).delay(470).queue(function(t){$(".item").addClass("no-display"),$(this).parents().removeClass("no-display"),t()}),$("#item-picker").addClass("hidden-sm hidden-xs")},$.fn.unEntitle=function(){$("#top-title").animate({width:0},{duration:500,queue:!1}),$("#item-picker").animate({width:"100%"},{duration:500,queue:!1}),$(this).removeClass("entitled"),$(".item").removeClass("no-display"),$("#top-title").delay(470).queue(function(t){$("#item-picker").removeClass("hidden-sm hidden-xs"),$("#top-title").children("h2").replaceWith('<h2 class="item-name"></h2>'),$(this).css("position","absolute"),t()})},$(document).ready(function(){$("#searchText").on("input",function(){$(".item-link").hasClass("entitled")&&$(".entitled").unEntitle(),$(window).keyup(function(){"use strict";var t=document.getElementById("searchText").value.toLowerCase();$(".item ul:contains('"+t+"')").parentsUntil(this,".item").removeClass("no-display"),$(".item ul:not(:contains('"+t+"'))").parentsUntil(this,".item").addClass("no-display"),$(".tag:contains('"+t+"')").each(function(){var t=$(this).text();$(this).parentsUntil(this,".item").children(".item-name").replaceWith('<h2 class="item-name">'+t+" </h2>")})})}),$(".item-link").click(function(){var t=$(this).siblings("ul").children().last().text();$(this).hasClass("entitled")?($(this).unEntitle(),$("#info").removeClass(t)):($(this).entitle(),$("#info").load("./"+t+".html"),$("#info").addClass(t))}),$("#top-title").click(function(){$(".entitled").unEntitle()});var t=$("#top-title h2").width()+205,e=$("#wrapper").width();t>=e?(console.log("too small"),console.log(t+", "+e),$("#item-picker").addClass("no-display")):$("#item-picker").removeClass("no-display")});
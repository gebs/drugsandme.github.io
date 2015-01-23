
//makes whatever is brought into function, the title, sliding icon to the right, and making a title
$.fn.entitle = function(){
     var current = $(this).siblings('.item-name').text();
    $(this).addClass('entitled');
    $('.item').addClass('no-display');
    $(this).parents().removeClass('no-display');
    $('#top-title').css({'position' : 'relative'});
    $('#top-title').children('h2').replaceWith('<h2 class="item-name">'+ current +' </h2>');
    $('#item-picker').css({
        'width': '13em'
    });
    $('#item-picker').addClass('hidden-sm hidden-xs');
    var slide = $('#top-title h2').width() + 20 + 'px';
    $('#top-title').animate({"width" : slide},500,function(){});

};

// opposite of entitle
$.fn.unEntitle = function(){
    $('#item-picker').removeClass('hidden-sm hidden-xs');
    $('#top-title').animate({"width" : 0},{duration: 500, queue: false});
    $('#item-picker').animate({'width': '100%'},{duration: 500, queue: false});
    $(this).removeClass('entitled');
    $('.item').removeClass('no-display');
    $('#top-title').delay(470).queue(function(next){
        $('#top-title').children('h2').delay('slow').replaceWith('<h2 class="item-name"></h2>');
        $(this).css('position' ,'absolute');
        next();
    });
        
};




$(document).ready(function() {


    $("#info").load("./information.html"); 
        

//FRONTPAGE - search ---------------------------------------------------------------------------------------------
//      SEARCH       ---------------------------------------------------------------------------------------------
    $('#searchText').on('input', function(){

        //unentitle item if any is entitled
        if($('.item-link').hasClass('entitled')){
            $('.entitled').unEntitle();
            console.log($('.entitled'));
        }

        $(window).keyup(function(){
            "use strict";
            var searchquery = document.getElementById("searchText").value.toLowerCase();
            
            //hide and show items
            $(".item ul:contains('" + searchquery + "')").parentsUntil(this, '.item').removeClass('no-display');
            $(".item ul:not(:contains('" + searchquery + "'))").parentsUntil(this, '.item').addClass('no-display');


           //changes h2 to tag names 
            $(".tag:contains('" + searchquery + "')").each(function(){
                var current = $(this).text();
                $(this).parentsUntil(this, '.item').children('.item-name').replaceWith('<h2 class="item-name">'+ current +' </h2>');

    	        //capitalise first letter of element
    	        //$('.item-name').css('textTransform', 'capitalize');


            });

    		

        });
    });


//When a drug is in titlemode and clicked on, this will make the icon transition to a title 
        $('.item-link').click(function(){
            if ($(this).hasClass('entitled'))
                $(this).unEntitle();
            else
                $(this).entitle();
        });


        $('#top-title').click(function() {
            $('.entitled').unEntitle();
        });


        var titleWidth = $('#top-title h2').width() + 205;
        var wrapperWidth = $('#wrapper').width();
        
        if (titleWidth >= wrapperWidth) {
            console.log('too small');
            console.log(titleWidth + ", " + wrapperWidth);
        
            $('#item-picker').addClass('no-display');
        }
        else    
            $('#item-picker').removeClass('no-display');







});
   

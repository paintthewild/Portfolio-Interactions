console.log("Here is my message")

$( document ).ready(function() {
    $('.circle').mouseenter(
        function() {
            $("body").css('background-color', '#4EA0BE');
            
        }
    )
    
    $('.circle').mouseleave(
        function() {
            $("body").css('background-color', 'white');
        }
    )
    
    $('.rect').mouseenter(
        function() {
            $("body").css('background-color', '#A692B2');
            
        }
    )
    
    $('.rect').mouseleave(
        function() {
            $("body").css('background-color', 'white');
        }
    )
    
    $('.squiggle').mouseenter(
        function() {
            $("body").css('background-color', 'black');
            
        }
    )
    
    $('.squiggle').mouseleave(
        function() {
            $("body").css('background-color', 'white');
        }
    )
})


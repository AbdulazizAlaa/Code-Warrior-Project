//iniatlizing ace code editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/textmate");
editor.getSession().setMode("ace/mode/javascript");
editor.resize(true);


$(document).ready(function(){
    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
        console.log("ripple");
    });
    
    var compileButton = $("#submit");
    
    compileButton.click(function(e){
        var code = editor.getValue();
        var url = "http://localhost:85/codewarrior/parser/compile?code_text="+code;
        
        $.getJSON(url, function(e){
            
            alert("Success Your request reached the server");
            
        });
        
    });
    Draw(0);
});

    
function Draw(level) {

    var mainCanvas = document.getElementById("canvas");  
    
    if(level == 0)
    {
        var mapTile = [
        
            {number:0, x:50, y:200, context:''},
            {number:0, x:105, y:200, context:''},
            {number:0, x:105, y:255, context:''},
            {number:0, x:160, y:255, context:''},
            {number:0, x:215, y:255, context:''},
            {number:0, x:215, y:310, context:''},

        ];
        
        for(var i = 0; i < mapTile.length; i++)
        {
            mapTile[i].number = i+1;
            mapTile[i].context = mainCanvas.getContext("2d");
            mapTile[i].context.fillStyle = "#2DD881";
            mapTile[i].context.fillRect(mapTile[i].x, mapTile[i].y,50,50);
            mapTile[i].context.fillStyle = "#FFFFFF";
            mapTile[i].context.font = "15px Arial";
            mapTile[i].context.fillText(mapTile[i].number, mapTile[i].x+20, mapTile[i].y+30);
        }
            
        
    }
}
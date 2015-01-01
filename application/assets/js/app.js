//iniatlizing ace code editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/textmate");
editor.getSession().setMode("ace/mode/javascript");
editor.resize(true);


$(document).ready(function(){
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
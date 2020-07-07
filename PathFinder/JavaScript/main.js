$(document).ready(function(){
    
    $('#btn1').click(function(){

        var value = $("#algorithm-panel option:selected");
        
        switch(value.text())
        {
            case "Djikstra" : Dijikstra();
                                break;
            case "A*" : Algorithm();
                break;

        }
        
    });

});

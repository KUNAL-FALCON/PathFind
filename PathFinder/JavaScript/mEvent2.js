$(document).ready(function() {

    var k = document.getElementsByName("algo");
    if(true) {
        
        destination.push(strt); 
        $(document).on("dblclick" , function(event) {
            
            var xc = Math.floor(mouseX / w);
            var yc = Math.floor(mouseY / h);

            if(xc >= 0 && yc >= 0 && xc < col && yc < row && grid[xc][yc] != end && grid[xc][yc] != strt) {
                grid[xc][yc].showyou(color(255 , 0, 0));
                grid[xc][yc].wall = false;

                destination.push(grid[xc][yc]); 
            }
            
        });  
    }
})
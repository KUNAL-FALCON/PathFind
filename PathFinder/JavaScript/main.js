$(document).ready(function() {

    $('#strt').click(function() {
        document.getElementById("clr").disabled = true;
        document.getElementById("strt").disabled = true;
        document.getElementById("can").disabled = false;


        var value = $("#algorithm-panel option:selected");

        switch (value.text()) {
            case "Dijkstra":
                Dijkstra();
                break;

            case "A*":
                Astar();
                break;
        }
    });

    $('#clr').click(function() {

        for (var i = 0; i < col; i++) {
            for (var j = 0; j < row; j++) {
                grid[i][j].wall = false;
                grid[i][j].showyou(color(255));
            }
        }
        strt.showyou(color(0, 255, 0));
        end.showyou(color(255, 0, 0));
    });

    $('#can').click(function() {
        abort = true;
    });

});
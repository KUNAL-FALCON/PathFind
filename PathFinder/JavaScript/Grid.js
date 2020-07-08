//Grid Implementation

var row = 21;
var col = 45;

var grid = new Array(col);
var h, w;


class Cell {

    constructor(i, j) {
        this.i = i;
        this.j = j;

        this.f = Infinity;
        this.h = Infinity;
        this.g = Infinity;

        this.wall = false;
        this.visited = false;
        this.neighbours = [];
        this.camefrom = null;
    }

    showyou(col) {
        fill(col);
        if (this.wall) fill(124, 125, 125);

        strokeWeight(1);
        stroke(124, 125, 125);

        rect(this.i * w, this.j * h, w, h);
    }


    addneighbours(grid) {
        var i = this.i;
        var j = this.j;

        if (i < col - 1 && grid[i + 1][j].wall == false) {
            this.neighbours.push(grid[i + 1][j]);
        }
        if (i > 0 && grid[i - 1][j].wall == false) {
            this.neighbours.push(grid[i - 1][j]);
        }
        if (j < row - 1 && grid[i][j + 1].wall == false) {
            this.neighbours.push(grid[i][j + 1]);
        }
        if (j > 0 && grid[i][j - 1].wall == false) {
            this.neighbours.push(grid[i][j - 1]);
        }
        //add diagonals also
        var diag = $("#diagonal-panel option:selected")
        if (diag.text() == "Allowed") {

            if (i < col - 1 && j < row - 1 && grid[i + 1][j + 1].wall == false && !(grid[i + 1][j].wall == true && grid[i][j + 1].wall == true)) {
                this.neighbours.push(grid[i + 1][j + 1]);
            }
            if (i > 0 && j > 0 && grid[i - 1][j - 1].wall == false && !(grid[i - 1][j].wall == true && grid[i][j - 1].wall == true)) {
                this.neighbours.push(grid[i - 1][j - 1]);
            }
            if (i > 0 && j < row - 1 && grid[i - 1][j + 1].wall == false && !(grid[i - 1][j].wall == true && grid[i][j + 1].wall == true)) {
                this.neighbours.push(grid[i - 1][j + 1]);
            }
            if (j > 0 && i < col - 1 && grid[i + 1][j - 1].wall == false && !(grid[i + 1][j].wall == true && grid[i][j - 1].wall == true)) {
                this.neighbours.push(grid[i + 1][j - 1]);
            }
        }
    }
}

function setup() {

    createCanvas(1360, 650);
    h = height / row;
    w = width / col;

    for (var i = 0; i < col; i++) grid[i] = new Array(row);

    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {

            grid[i][j] = new Cell(i, j);
            grid[i][j].showyou(color(255));

        }
    }
    strt = grid[2][10];
    end = grid[29][5];

    strt.wall = false;
    end.wall = false;

    strt.showyou(color(0, 255, 0));
    end.showyou(color(255, 0, 0));
}
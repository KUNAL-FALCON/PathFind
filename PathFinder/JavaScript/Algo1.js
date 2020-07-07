function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function QItem(x , y , w) {
    this.row = x;
    this.col = y;
    this.dist = w;
}

async function Dijikstra() {

    var que = new Queue();
    var source = new QItem(0 , 0 , 0);
    
    var ok = false;
    for(var i = 0 ; i < col ; i++) {
        for(var j = 0 ; j < col ; j++ ) {

            if(grid[i][j] == strt) {

                source.row = i;
                source.col = j;
                ok = true; break;
            }
        }
        if(ok) break;
    }
    for(var i = 0 ; i < col ; i++) {
        for(var j = 0 ; j < row ; j++ ) {

            grid[i][j].showyou(color(255));
            grid[i][j].camefrom = null;
            grid[i][j].visited = false;
        }
    }

    que.enqueue(source);
    var cSet = [];
    var check = false;

    while(!que.isEmpty()) {
        
        var p = que.front();
        que.dequeue();
        cSet.push(p);

        if(grid[p.row][p.col] === end) {
            check = true;
            var x = grid[p.row][p.col];
            
            noFill();
            stroke(0 , 0, 255);
            strokeWeight(w / 7);
            beginShape();
            vertex(x.i * w + w / 2 , x.j * h + h / 2);

            x = x.camefrom;
            while(true) {
                vertex(x.i * w + w / 2 , x.j * h + h / 2);
                x = x.camefrom;

                if(x == strt || x == null) {
                    vertex(x.i * w + w / 2 , x.j * h + h / 2);
                    break;
                }
            }
            endShape();
            //end.showyou(color(255, 0, 0));
            break;
        }

        if(p.row - 1 >= 0 && grid[p.row - 1][p.col].visited == false) {
        
		
            var q = new QItem(p.row - 1 , p.col , p.dist + 1);
            que.enqueue(q);
            grid[p.row - 1][p.col].visited = true;
            grid[p.row - 1][p.col].camefrom = grid[p.row][p.col];
        }

        if(p.row + 1 < col && grid[p.row + 1][p.col].visited == false) {
        
            var q = new QItem(p.row + 1 , p.col , p.dist + 1);
            que.enqueue(q);
            grid[p.row + 1][p.col].visited = true;
            grid[p.row + 1][p.col].camefrom = grid[p.row][p.col];
    
        }
    
        if(p.col - 1 >= 0 && grid[p.row][p.col - 1].visited == false) {
            
            var q = new QItem(p.row , p.col - 1 , p.dist + 1);
            que.enqueue(q);
            grid[p.row][p.col - 1].visited = true;
            grid[p.row][p.col - 1].camefrom = grid[p.row][p.col];
        }
    
        if(p.col + 1 < row && grid[p.row][p.col + 1].visited == false) {
            
            var q = new QItem(p.row , p.col + 1 , p.dist + 1);
            que.enqueue(q);
            grid[p.row][p.col + 1].visited = true;
            grid[p.row][p.col + 1].camefrom = grid[p.row][p.col];
        }

        if(que.isEmpty()) {
            check = true;
            if(grid[p.row][p.col] === end) {
                check = true;
                var x = grid[p.row][p.col];
    
                noFill();
                stroke(0 , 0, 255);
                strokeWeight(w / 7);
                beginShape();

                x = x.camefrom;
                while(true) {

                    vertex(x.i * w + w / 2 , x.j * h + h / 2);
                    x = x.camefrom;
    
                    if(x == strt || x == null) {
                        vertex(x.i * w + w / 2 , x.j * h + h / 2);
                        break;
                    }
                }
                //end.showyou(color(255, 0, 0));
                endShape();
                break;
            }
        }
        
        if(!check) {

            for(var i = 0 ; i < que.items.length ; i++) 
                grid[que.items[i].row][que.items[i].col].showyou(color(177, 250, 82));
           
            for(var i=0;i<cSet.length;i++)
		        grid[cSet[i].row][cSet[i].col].showyou(color(74, 247, 244));
            
            strt.showyou(color( 0 , 255 , 0));
            end.showyou(color(255 , 0, 0));
            await sleep(25);    
        }
        
    }
    
}

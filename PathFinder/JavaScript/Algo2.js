var check = false;

async function Algorithm() {

    pqueue = new priority_queue();
    check = false;

    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {

            grid[i][j].g = Infinity;
            grid[i][j].f = Infinity;
            grid[i][j].h = Infinity;
            grid[i][j].visited = false;
            grid[i][j].neighbours = [];
        }
    }

    strt.g = 0;
    strt.f = Math.abs(strt.i - end.i) + Math.abs(strt.j - end.j);  
    pqueue.enqueue(strt.i, strt.j);

    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {
            grid[i][j].showyou(color(255));
        }
    }

    var closedset = [];

    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {
            grid[i][j].addneighbours(grid);
        }
    }

    while (!pqueue.isEmpty()) {

        var current = pqueue.front().element;

        if (current === end) {
            check = true;

            var path = [];
            var temp = current;
            path.push(current);

            while (temp.camefrom) {
                path.push(temp.camefrom);
                temp = temp.camefrom;
            }

            /*swal({
                title: "Congratulations!!",
                text: "Found the path with length=" + path.length,
                icon: "success",
                button: "yes!",
            });*/

            noFill();
            stroke(255, 245, 102);
            strokeWeight(w / 5);
            beginShape();
            for (var i = 0; i < path.length; i++) {
                vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
            }
            endShape();
            break;
        } else {
            pqueue.dequeue();
            
            closedset.push(current);
            
            var neigh = current.neighbours;

            for (var i = 0; i < neigh.length; i++) {
                var neighbor = neigh[i];
                if (!neighbor.visited) {
                    neighbor.visited = true;
                    var tempG = current.g + 1;

                    if (tempG < neighbor.g) {
                        neighbor.g = tempG;
                        neighbor.camefrom = current;

                    }
                    var temph = Math.abs(neighbor.i - end.i) + Math.abs(neighbor.j - end.j); //dist(neighbor.i, neighbor.j, end.i, end.j); Math.abs(neighbor.i - end.i) + Math.abs(neighbor.j - end.j); //Math.sqrt((neighbor.i - end.i) * (neighbor.i - end.i) + (neighbor.j - end.j) * (neighbor.j - end.j)); //Math.abs(neighbor.i - end.i) + Math.abs(neighbor.j - end.j);
                    var newcost = neighbor.g + temph;

                    if (newcost < neighbor.f) {
                        neighbor.h = temph;
                        neighbor.f = newcost;
                        pqueue.enqueue(neighbor.i, neighbor.j);
                    }
                }
            } 
        }

        if (!check) {
            for (var i = 0; i < pqueue.items.length; i++) {
                //if in neighbour of current node,colour them green
                pqueue.items[i].element.showyou(color(177, 250, 82));
            }

            for (var i = 0; i < closedset.length; i++) {
                //if already visited colour them blue
                closedset[i].showyou(color(74, 247, 244));
            }
            strt.showyou(color(0, 255, 0));
            end.showyou(color(255, 0, 0));
            await sleep(25);
        }
    }
    if (!check && pqueue.isEmpty()) {
        /*swal({
            title: "Sorry",
            text: "No Path Found!",
            icon: "error",
            button: "no!",
        });*/
        //console.log("No path Exist!");
        strt.showyou(color(0, 255, 0));
        end.showyou(color(255, 0, 0));
        //for stopping the calling of draw() function again.
    }
}
//end of the code!!
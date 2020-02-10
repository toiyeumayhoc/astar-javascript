class Astar{
    constructor(maze) {
        this.maze = maze;
    }

    executeAstar(){
        let open = new CellSet();
        let close = new CellSet();
        let maze = this.maze;
        open.add(this.maze.start);
        let animate = setInterval(runAstar,10);
        function runAstar(){
            console.log(maze);

            if(open.set.size ==0){
                alert("KHONG TIM THAY DUONG DI");
                clearInterval(animate);
            }
            open.show("yellow");
            close.show("yellow");
            let min = open.getMin();
            open.remove(min);
            close.add(min);

            if (min.x == maze.end.x && min.y ==maze.end.y) {
                open.show("yellow");
                close.show("yellow");
                console.log("end");
                let parent = min.p;
                console.log(min);
                while(!(parent.x === maze.start.x && parent.y === maze.start.y)){
                    console.log(parent);
                    parent.showColor("green");
                    parent = parent.p;

                }
                console.log(parent);
                clearInterval(animate);
                return;
            }
            let neighbors = maze.getNeighBors(min);
            console.log(neighbors);
            for(let neighbor of neighbors){
                console.log(!close.hasCell(neighbor));
                if (!close.hasCell(neighbor)) {

                    neighbor.p = min;
                    neighbor.g = min.g + 1;
                    neighbor.h = Math.abs(maze.end.x - neighbor.x) + Math.abs(maze.end.y - neighbor.y);
                    neighbor.f = neighbor.g + neighbor.h;
                    if (!open.hasCell(neighbor)) {
                        open.add(neighbor);
                    } else {
                        open.update(neighbor);
                    }
                }
            }
            console.log(open);

        }
    }
}




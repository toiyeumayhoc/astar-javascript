class Maze {

    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.mazeCell = new Array(this.rows);
        this.initMaze();
        this.clickValue = -1;
    }

    initMaze() {

        for (let i = 0; i < this.rows; i++) {
            this.mazeCell[i] = new Array(this.cols);
            for (let j = 0; j < this.cols; j++) {
                this.mazeCell[i][j] = new Cell(i, j);
            }
        }
        this.mazeCell[0][0].value = 2;
        this.mazeCell[this.rows - 1][this.cols - 1].value = 3;
        this.start = this.mazeCell[0][0];
        this.end = this.mazeCell[this.rows - 1][this.cols - 1];

    }


    setWall(x,y){
        if(this.mazeCell[x][y].isWall()){
            this.mazeCell[x][y].value = 0;
        } else {
            this.mazeCell[x][y].value = 1;
        }
    }

    setStart(x,y){
        this.mazeCell[x][y].value = 2;
        this.start.value = 0;
        this.start.show();
        this.start = this.mazeCell[x][y];
    }

    setEnd(x,y){
        this.mazeCell[x][y].value = 3;
        this.end.value = 0;
        this.end.show();
        this.end = this.mazeCell[x][y];
    }

    setClickValue(value){
        this.clickValue = value;
    }

    setValueForClickedCell(x,y){
        if(this.clickValue===-1) return;
        if(this.mazeCell[x][y].isStart()||this.mazeCell[x][y].isEnd()) return;
        switch (this.clickValue) {
            case 1: this.setWall(x,y);
            break;
            case 2: this.setStart(x,y);
            break;
            case 3: this.setEnd(x,y);
            break;
            default: break;
        }
        this.mazeCell[x][y].show();
    }

    getNeighBors(currentCell) {
        let neighbors = new Set();
        neighbors.add(this.getNeighbor(currentCell.x - 1, currentCell.y));
        neighbors.add(this.getNeighbor(currentCell.x, currentCell.y - 1));
        neighbors.add(this.getNeighbor(currentCell.x + 1, currentCell.y));
        neighbors.add(this.getNeighbor(currentCell.x , currentCell.y+1));
        // neighbors.add(this.getNeighbor(currentCell.x - 1, currentCell.y-1));
        // neighbors.add(this.getNeighbor(currentCell.x - 1, currentCell.y+1));
        // neighbors.add(this.getNeighbor(currentCell.x +1, currentCell.y-1));
        // neighbors.add(this.getNeighbor(currentCell.x + 1, currentCell.y+1));
        neighbors.delete(undefined);
        return neighbors;
    }

    getNeighbor(x, y) {

        if (x >= 0 && x < this.rows && y >= 0 && y < this.cols) {
            let neighbor = this.mazeCell[x][y];
            if (neighbor.value != 1) {
                return neighbor;
            }
        }
        return undefined;
    }

    show() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.mazeCell[i][j].show();
            }
        }
    }


}
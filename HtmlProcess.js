class HtmlProcess{
    constructor(maze,mazeWidth, mazeHeight){
        this.maze = maze;
        this.mazeWidth = mazeWidth;
        this.mazeHeight = mazeHeight;
        this.initMaze();
    }

    clickCell = function(cellId){
        this.maze.setValueForClickedCell(
            Number(cellId.split("x")[1].split("y")[0]),Number(cellId.split("y")[1]));
    }

    initMaze(){
        let mazeDiv = document.getElementById("mainMaze");
        mazeDiv.style.width = this.mazeWidth+"px";
        mazeDiv.style.height = this.mazeHeight+"px";
        mazeDiv.style.border = "1px solid";
        mazeDiv.style.display = "table";
        mazeDiv.style.margin = "auto";
        for(let i =0; i<this.maze.rows;i++){
            let cellRow = document.createElement("div");
            cellRow.id = "row"+i;
            cellRow.style.display = "table-row";
            mazeDiv.appendChild(cellRow);
            for(let j =0 ; j<this.maze.cols; j++)
            {
                let cell = document.createElement("div");
                cell.id = "cellx"+i+"y"+j;
                cell.style.display = "table-cell";
                cell.style.width = (this.mazeWidth/this.maze.cols - 2) + "px";
                cell.style.height = (this.mazeHeight/this.maze.rows - 2) + "px";
                cell.style.border = "1px solid";
                cell.addEventListener('click',function () {
                    let clickx = Number(cell.id.split("x")[1].split("y")[0]);
                    let clicky = Number(cell.id.split("y")[1]);
                    maze.setValueForClickedCell(clickx,clicky);
                },false);
                cellRow.appendChild(cell);
            }
        }
    }
}
class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.f = 0;
        this.p = undefined;
        this.g = 0;
        this.h = 0;
        this.value = 0;
    }


    isStart() {
        if (this.value === 2) {
            return true;
        }
        return false;
    }

    isEnd() {
        if (this.value === 3) {
            return true;
        }
        return false;
    }

    isWall() {
        if (this.value === 1) {
            return true;
        }
        return false;
    }


    show() {
        switch (this.value) {
            case 0 :
                document.getElementById("cellx" + this.x +"y"+ this.y).style.backgroundColor = "white";
                break;
            case 1 :
                document.getElementById("cellx" + this.x +"y"+ this.y).style.backgroundColor = "black";
                break;
            case 2 :
                document.getElementById("cellx" + this.x +"y"+ this.y).style.backgroundColor = "red";
                break;
            case 3 :
                document.getElementById("cellx" + this.x +"y"+ this.y).style.backgroundColor = "blue";
                break;
            default :
                document.getElementById("cellx" + this.x +"y"+ this.y).style.backgroundColor = "white";
                break;
        }
    }

    showColor(color) {
        if (this.value!=2&&this.value!=3) {
            document.getElementById("cellx" + this.x +"y"+ this.y).style.backgroundColor = color;
        }


    }
}
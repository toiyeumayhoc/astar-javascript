class CellSet {
    constructor() {
        this.set = new Set();
    }

    add(cell) {
        this.set.add(cell);
    }

    hasCell(cell) {
        for (let setCell of this.set) {
            if (setCell.x == cell.x && setCell.y == cell.y) {
                return true;
            }
        }
        return false;
    }

    remove(cell) {
        for (let setCell of this.set) {
            if (setCell.x == cell.x && setCell.y == cell.y) {
                this.set.delete(setCell);
                break;
            }
        }
    }

    update(cell) {
        for (let cellSet of this.set) {
            if (cellSet.x == cell.x && cellSet.y == cell.y) {
                if (cellSet.g > cell.g) {
                    this.set.delete(cellSet);
                    this.set.add(cell);

                }
                break;
            }
        }
    }

    getMin() {
        let setValues = this.set.values();
        let min = setValues.next().value;
        let next = setValues.next();
        while (!next.done) {
            if (next.value.f < min.f) {
                min = next.value;
            }
            next = setValues.next();
        }
        return min;
    }

    show(color) {
        console.log("show color");
        for(let c of this.set){
            console.log(c);
            c.showColor(color);
        }
    }
}
import Cell from "./Cell";

export default class Grid {
    cells: Array<Cell>;
    width: number;
    height: number;

    constructor(w: number, h: number) {
        this.cells = [];
        this.width  = w;
        this.height = h;
    }

    addCell(c: Cell) {
        this.cells.push(c)
    }

    getCell(x: number, y: number) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return null;

        return this.cells[x + y * this.width]
    }
}
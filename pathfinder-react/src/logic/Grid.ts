import Cell from "./Cell";
import PathfinderEngine from "./PathfinderEngine";

export default class Grid {
    cells: Array<Cell>;
    width: number;
    height: number;

    engine: PathfinderEngine;

    constructor(engineRef: PathfinderEngine, w: number, h: number) {
        this.cells = [];
        this.width  = w;
        this.height = h;
        this.engine = engineRef;
    }

    foreach(f: (c: Cell) => void) {
        this.cells.forEach(c => f(c));
    }

    addCell(c: Cell) {
        this.cells.push(c)
    }

    getCell(x: number, y: number) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return null;

        return this.cells[x + y * this.width]
    }

    resetAllCells() {
        this.engine.start = null;
        this.engine.end = null;
        this.cells.forEach(c => c.reset())
    }

    resetNonUserCells() {
        this.cells.forEach(c => c.resetColor())
    }
}
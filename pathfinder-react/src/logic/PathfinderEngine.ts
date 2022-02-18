import Cell from "./Cell";
import Grid from "./Grid";

export default class PathfinderEngine {
    grid: Grid | null = null;;

    constructor() {
        
    }

    makeGrid(w: number, h: number) {
        this.grid = new Grid(w, h);
    }

    newCell(ref: HTMLDivElement, x: number, y: number) {
        const c = new Cell(ref, x, y);
        this.grid!.addCell(c);
    }
}
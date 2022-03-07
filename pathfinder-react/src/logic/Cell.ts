import Grid from "./Grid";
import PathfinderEngine from "./PathfinderEngine";

export default class Cell {
    ref: HTMLDivElement;
    x: number;
    y: number;

    weight: number = 1;
    blocked: boolean = false;

    grid: Grid;
    engine: PathfinderEngine;

    constructor(ref: HTMLDivElement, x: number, y: number, grid: Grid, engine: PathfinderEngine) {
        this.ref = ref;
        this.x = x;
        this.y = y;
        this.grid = grid;
        this.engine = engine;
    }

    setWeight(val: number) {
        this.weight = val;
        this.ref.innerText = "" + this.weight;
    }

    setBlocked(val: boolean) {
        this.blocked = val;
        this.ref.style.backgroundColor = this.blocked ? "#000000" : "#00000000";
    }

    isBlocked(): boolean {
        return this.blocked;
    }

    setColor(val: string) {
        if (this.engine.start === this || this.engine.end === this || this.blocked) return;

        this.ref.style.backgroundColor = val
    }

    setColorForced(val: string) {
        this.ref.style.backgroundColor = val
    }

    relativeCell(offsetX: number, offsetY: number) {
        const x = this.x + offsetX;
        const y = this.y + offsetY;

        return this.grid.getCell(x, y);
    }

    neighbours(diagonal: boolean = false) {
        const maxDist = diagonal ? 2 : 1;
        
        const neighbours = []
        for (let y: number = -1; y <= 1; y++) {
            for (let x: number = -1; x <= 1; x++) {
                const nc = this.relativeCell(x, y);
                if (nc != null) {
                    const dist = Math.abs(x) + Math.abs(y);
                    if (dist <= maxDist && dist > 0) {
                        neighbours.push(nc);
                    }
                }
            }
        }

        return neighbours;
    }

    reset() {
        this.weight = 1;
        this.ref.innerText = "";
        this.blocked = false;
        this.resetColor();
    }

    resetColor() {
        this.setColor("#00000000");
    }

    equals(other: Cell) {
        return this.x == other.x && this.y == other.y;
    }
}
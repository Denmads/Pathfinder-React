import Grid from "./Grid";

export default class Cell {
    ref: HTMLDivElement;
    x: number;
    y: number;

    weight: number = 1;
    blocked: boolean = false;

    grid: Grid;

    constructor(ref: HTMLDivElement, x: number, y: number, grid: Grid) {
        this.ref = ref;
        this.x = x;
        this.y = y;
        this.grid = grid;
    }

    setWeight(val: number) {
        this.weight = val;
        this.ref.innerText = "" + this.weight;
    }

    setBlocked(val: boolean) {
        this.blocked = val;
        this.ref.style.backgroundColor = this.blocked ? "#000000" : "none";
    }

    setColor(val: string) {
        this.ref.style.backgroundColor = val
    }

    relativeCell(offsetX: number, offsetY: number) {
        const x = this.x + offsetX;
        const y = this.y + offsetY;

        return this.grid.getCell(x, y);
    }

    neighbours(diagonal: boolean) {
        const maxDist = diagonal ? 2 : 1;
        
        const neighbours = []
        for (let y: number = -1; y <= 1; y++) {
            for (let x: number = -1; x <= 1; x++) {
                const nc = this.relativeCell(this.x + x, this.y + y);
                if (nc != null) {
                    const dist = Math.abs(x) + Math.abs(y);
                    if (dist <= maxDist) {
                        neighbours.push(nc);
                    }
                }
            }
        }

        return neighbours;
    }
}
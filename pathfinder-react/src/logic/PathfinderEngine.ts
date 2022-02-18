import Astar from "./algorithms/Astar";
import Cell from "./Cell";
import Grid from "./Grid";
import Algorithm from "./Algorithm"

export default class PathfinderEngine {
    grid: Grid | null = null;
    selectedAlgorithm: string = "";

    algorithm: {id: string, algorithm: Algorithm}[] = [
        {id: "astar", algorithm: new Astar()}
    ]

    setSelectedAlgorithm(selected: string) {
        this.selectedAlgorithm = selected;
    }

    makeGrid(w: number, h: number) {
        this.grid = new Grid(w, h);
    }

    newCell(ref: HTMLDivElement, x: number, y: number) {
        const c = new Cell(ref, x, y, this.grid!);
        this.grid!.addCell(c);
    }

    onCellClicked(x: number, y: number) {

    }
}
import Grid from "../Grid";
import LayoutGenerator from "../LayoutGenerator";

export default class Maze implements LayoutGenerator {
    
    generate(grid: Grid) {

        grid.resetAllCells()

        const prob = 0.6;

        for (let x = 0; x < grid.width; x+=2) {
            this.makeLine(grid, x, 0, x, grid.height-1)
        }

        for (let y = 0; y < grid.height; y+=2) {
            this.makeLine(grid, 0, y, grid.width-1, y)
        }

        for (let y = 1; y < grid.height; y++) {
            for (let x = 1; x + (y % 2) < grid.width; x+=2) {
                if (Math.random() < prob) {
                    grid.getCell(x + (y % 2), y)!.setBlocked(false);
                }
            }
        }
    }

    makeLine(grid: Grid, xs: number, ys: number, xe: number, ye: number) {
        for (let x = xs; x <= xe; x++) {
            for (let y = ys; y <= ye; y++) {
                grid.getCell(x, y)!.setBlocked(true)
            }
        }
    }

    displayName() {
        return "Maze";
    }
}
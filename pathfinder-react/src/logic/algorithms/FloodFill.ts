import Algorithm from '../Algorithm'
import Cell from '../Cell';
import RunContext from '../RunContext';

export default class FloodFill implements Algorithm {

    notCheckedColor: string = "#33ccff"
    checkedColor: string = "#ff9900"

    init(ctx: RunContext) {
        ctx.createVariable("not_checked", [ctx.start])
        ctx.createVariable("checked", [])

        ctx.start.setColor(this.notCheckedColor)
    }
    
    step(ctx: RunContext) {
        let cell = this.notChecked(ctx).shift()
        let nbrs = cell.neighbours()
        for (let i = 0; i < nbrs.length; i++) {
            let nc = nbrs[i];
            if (!this.inArr(this.checked(ctx), nc) && !this.inArr(this.notChecked(ctx), nc) && !nc.isBlocked()) {
                this.notChecked(ctx).push(nc)
                nc.setColor(this.notCheckedColor)
            }
        }
        this.checked(ctx).push(cell)
        cell.setColor(this.checkedColor)

    }

    isCompleted(ctx: RunContext) {
        return this.checked(ctx).filter((c: Cell) => c.equals(ctx.end)).length > 0
    }

    displayName() {
        return "Flood Fill"
     }

    private notChecked(ctx: RunContext) {
        return ctx.getVariable("not_checked")
    }

    private checked(ctx: RunContext) {
        return ctx.getVariable("checked")
    }

    private inArr(arr: Cell[], c: Cell) {
        return arr.filter((ca: Cell) => ca.equals(c)).length > 0
    }
}
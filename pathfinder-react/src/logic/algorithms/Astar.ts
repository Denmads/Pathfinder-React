import Algorithm from '../Algorithm'
import Cell from '../Cell';
import RunContext from '../RunContext';

class Node {
    cell: Cell;
    parent: Node | null;
    start: Cell;
    end: Cell;

    constructor(c: Cell, p: Node | null, ctx: RunContext) {
        this.cell = c;
        this.parent = p;
        this.start = ctx.start;
        this.end = ctx.end;
    }

    gScore(): number {
        if (this.parent == null) return this.cell.weight;
        return this.parent.gScore() + this.cell.weight; 
    }

    hScore(): number {
        const sqrX = (this.end.x - this.cell.x) * (this.end.x - this.cell.x);
        const sqrY = (this.end.y - this.cell.y) * (this.end.y - this.cell.y);
        return Math.sqrt(sqrX + sqrY);
    }

    fScore(): number {
        return this.gScore() + this.hScore();
    }
}

export default class Astar implements Algorithm {

    notCheckedColor: string = "#33ccff"
    checkedColor: string = "#ff9900"
    pathColor: string = "#712fbd"

    varOpen: string = "open";
    varClosed: string = "closed"; 
    varComplete: string = "complete"

    init(ctx: RunContext) {
        ctx.createVariable(this.varOpen, [])
        ctx.createVariable(this.varClosed, [])
        ctx.createVariable(this.varComplete, false);

        this.addToOpen(ctx, new Node(ctx.start, null, ctx))
    }
    
    step(ctx: RunContext) {
        let node = this.openArr(ctx).shift()
        this.addToClosed(ctx, node)
        let nbrs: Cell[] = node.cell.neighbours(true);
        for (let i = 0; i < nbrs.length; i++) {
            let nc = nbrs[i];
            if (!nc.isBlocked() && !this.inArrCell(this.closedArr(ctx), nc)) {
                let nn: Node = new Node(nc, node, ctx);
                if (!this.inArr(this.openArr(ctx), nn)) {
                    this.addToOpen(ctx, nn);
                }
                else {
                    let existing = this.getByCell(nn.cell, this.openArr(ctx))
                    if (nn.gScore() < existing.gScore()) {
                        existing.parent = node;
                        this.openArr(ctx).sort((a: Node, b: Node) => {
                            return a.fScore() - b.fScore()
                        });
                    }
                }
            }
        }
    }

    isCompleted(ctx: RunContext) {
        if (ctx.getVariable(this.varComplete)) {
            return true;
        }
        else {
            let foundPath: boolean = this.inArrCell(this.closedArr(ctx), ctx.end);
            let done = this.openArr(ctx).length == 0;
        
            if (!done && !foundPath) return false;
            
            ctx.updateVariable(this.varComplete, true);

            if (foundPath) {
                let node: Node | null = this.getByCell(ctx.end, this.closedArr(ctx));

                while (node != null) {
                    node.cell.setColor(this.pathColor)
                    node = node.parent;
                }
            }   
            else {
                alert("No possible path!");
            }

            return true;
        }
    }

    displayName() {
        return "A* Pathfinding"
    }

    openArr(ctx: RunContext) {
        return ctx.getVariable(this.varOpen)
    }

    closedArr(ctx: RunContext) {
        return ctx.getVariable(this.varClosed)
    }

    addToOpen(ctx: RunContext, n: Node) {
        const open: Node[] = ctx.getVariable(this.varOpen)
        open.push(n)
        open.sort((a: Node, b: Node) => {
            return a.fScore() - b.fScore()
        })
        n.cell.setColor(this.notCheckedColor)
    }

    addToClosed(ctx: RunContext, n: Node) {
        const closed: Node[] = ctx.getVariable(this.varClosed)
        closed.push(n)
        n.cell.setColor(this.checkedColor)
    }

    private inArrCell(arr: Node[], c: Cell) {
        return arr.filter((na: Node) => na.cell.equals(c)).length > 0
    }

    private inArr(arr: Node[], n: Node) {
        return arr.filter((na: Node) => na.cell.equals(n.cell)).length > 0
    }

    private getByCell(cell: Cell, arr: Node[]) {
        let filtered = arr.filter((n: Node) => n.cell.equals(cell));
        return filtered[0];
    }
}
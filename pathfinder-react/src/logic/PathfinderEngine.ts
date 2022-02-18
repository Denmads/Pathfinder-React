import Astar from "./algorithms/Astar";
import Cell from "./Cell";
import Grid from "./Grid";
import Algorithm from "./Algorithm"
import LayoutGenerator from "./LayoutGenerator";
import RoomAndHallways from "./layoutgenerators/RoomAndHallways";
import RunContext from "./RunContext";

export default class PathfinderEngine {
    grid: Grid | null = null;
    selectedAlgorithm: string = "";
    selectedTool: string = "";
    toolSetting: string = "1";

    algorithms: {id: string, algorithm: Algorithm}[] = [
        {id: "astar", algorithm: new Astar()}
    ]

    layouts: {id:  string, generator: LayoutGenerator}[] = [
        {id: "rah", generator: new RoomAndHallways()}
    ]

    tools: {id: string, name: string}[] = [
        {id: "wall", name: "Wall"},
        {id: "start", name: "Start"},
        {id: "end", name: "End"},
        {id: "weight", name: "Weight"},
        {id: "erase", name: "Erase"}
    ]

    start: Cell | null = null;
    end: Cell | null = null;

    startColor: string = "#289946";
    endColor: string = "#993b28";

    runningCtx: RunContext | null = null;
    runId: any | null = null;

    stepRate: number = 1;

    run() {
        if (this.isRunning() && this.runId == null) {
            this.runId = setInterval(() => this.runningCtx!.step(), 1000 / this.stepRate)
            return
        }

        if (this.start == null || this.end == null) return;

        const algo = this.algorithms.filter(v => v.id === this.selectedAlgorithm)[0]
        this.runningCtx = new RunContext(this.start, this.end, algo.algorithm)
        this.runningCtx.init()

        this.runId = setInterval(() => this.runningCtx!.step(), 1000 / this.stepRate)
        
    }

    step() {
        if (this.isRunning()) {
            clearInterval(this.runId)
            this.runId = null;
            this.runningCtx!.step()

            return
        }

        if (this.start == null || this.end == null) return; 

        const algo = this.algorithms.filter(v => v.id === this.selectedAlgorithm)[0]
        this.runningCtx = new RunContext(this.start, this.end, algo.algorithm)
        this.runningCtx.init()
        this.runningCtx.step()
    }

    stop() {
        if (!this.isRunning()) return;

        if (this.runId != null) clearInterval(this.runId);

        this.grid?.resetNonUserCells();
        this.runningCtx = null;
        this.runId = null;
    }

    private isRunning() {
        return this.runningCtx != null
    }

    setSelectedAlgorithm(selected: string) {
        this.selectedAlgorithm = selected;
    }

    getAllAlgorithms() : {name: string, id: string}[] {
        return this.algorithms.map(al => {
            return {
                name: al.algorithm.displayName(),
                id: al.id
            }
        })
    }

    runLayoutGenerator(id: string) {
        this.layouts.filter(v => v.id === id)[0].generator.generate(this.grid!);
    }

    getAllLayouts() {
        return this.layouts.map(v => ({id: v.id, name: v.generator.displayName()}))
    }

    setSelectedTool(tool: string) {
        this.selectedTool = tool;
    }

    setToolSetting(val: string) {
        this.toolSetting = val
    }

    getAllTools() {
        return this.tools
    }

    makeGrid(w: number, h: number) {
        this.grid = new Grid(this, w, h);
    }

    newCell(ref: HTMLDivElement, x: number, y: number) {
        const c = new Cell(ref, x, y, this.grid!, this);
        this.grid!.addCell(c);
    }

    onCellClicked(x: number, y: number) {
        if (this.isRunning() || this.selectedTool === "") return; 
        
        const cell = this.grid!.getCell(x, y)!

        switch (this.selectedTool) {
            case "wall":
                cell.setBlocked(!cell.isBlocked())
                break
            case "start":
                const old = this.start;
                this.start = null;

                if (cell.isBlocked())
                    cell.setBlocked(false)

                if (old != null)
                    old.resetColor();

                cell.setColor(this.startColor)
                this.start = cell;
                break
            case "end":
                const oldE = this.end;
                this.end = null;

                if (cell.isBlocked())
                    cell.setBlocked(false)

                if (oldE != null)
                    oldE.resetColor();

                cell.setColor(this.endColor)
                this.end = cell;
                break
            case "weight":
                const we = parseFloat(this.toolSetting)
                cell.setWeight(we)
                break
            case "erase":
                if (this.start === cell)
                    this.start = null

                if (this.end === cell)
                    this.end = null

                cell.reset()
        }
    }
}
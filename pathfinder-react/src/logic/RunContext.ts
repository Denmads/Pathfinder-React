import Cell from "./Cell";
import Algorithm from "./Algorithm";

export default class RunContext {
    variables: Map<string, any> = new Map<string, any>();
    start: Cell;
    end: Cell;

    private usedAlgorithm: Algorithm;

    constructor(start: Cell, end: Cell, algo: Algorithm) {
        this.start = start;
        this.end = end;
        this.usedAlgorithm = algo;
    }

    init() {
        this.usedAlgorithm.init(this);
    }

    step() {
        this.usedAlgorithm.step(this);
    }

    createVariable(name: string, initialValue: any) {
        this.variables.set(name, initialValue);
    }

    getVariable(name: string) {
        return this.variables.get(name);
    }

    updateVariable(name: string, newValue: any) {
        this.variables.set(name, newValue);
    }
}
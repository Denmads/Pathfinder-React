export default class Cell {
    ref: HTMLDivElement;
    x: number;
    y: number;

    weight: number = 1;
    blocked: boolean = false;

    constructor(ref: HTMLDivElement, x: number, y: number) {
        this.ref = ref;
        this.x = x;
        this.y = y;
    }

    setWeight(val: number) {
        this.weight = val;
        this.ref.innerText = "" + this.weight;
    }

    setBlocked(val: boolean) {
        this.blocked = val;
        this.ref.style.background = this.blocked ? "#000000" : "none";
    }
}
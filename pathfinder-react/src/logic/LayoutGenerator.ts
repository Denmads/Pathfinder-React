import Grid from "./Grid";

export default interface LayoutGenerator {
    generate: (grid: Grid) => void,
    displayName: () => string
}
import RunContext from "./RunContext";

export default interface Algorithm {
    init: (ctx: RunContext) => void,
    step: (ctx: RunContext) => void,
    isCompleted: (ctx: RunContext) => void,
    displayName: () => string
}
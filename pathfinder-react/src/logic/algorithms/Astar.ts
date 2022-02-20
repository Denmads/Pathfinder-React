import Algorithm from '../Algorithm'
import RunContext from '../RunContext';

export default class Astar implements Algorithm {
    init(ctx: RunContext) {

    }
    
    step(ctx: RunContext) {

    }

    isCompleted(ctx: RunContext) {
        return true;
    }

    displayName() {
        return "A* Pathfinding"
    }
}
import Grid from "../Grid";
import LayoutGenerator from "../LayoutGenerator";

export default class RoomAndHallways implements LayoutGenerator {
    generate(grid: Grid) {
        grid.foreach(c => {
            c.setBlocked(true)
        })

        
    }

    displayName() {
        return "Rooms and Hallways";
    }
}
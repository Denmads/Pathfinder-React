import Grid from "../Grid";
import LayoutGenerator from "../LayoutGenerator";

export default class RoomAndHallways implements LayoutGenerator {
    
    generate(grid: Grid) {
        grid.foreach(c => {
            c.setBlocked(true)
        })

        const roomSize = 3;
        const roomProb = 0.5;

        const spacePerRoom = roomSize + Math.floor(roomSize / 2) * 2

        const rooms = []
        const edges = []
        for (let x = 0; x < Math.floor(grid.width / spacePerRoom); x++) {
            for (let y = 0; y < Math.floor(grid.height / spacePerRoom); y++) {
                let x_pos = x * spacePerRoom + Math.floor(spacePerRoom / 2)
                let y_pos = y * spacePerRoom + Math.floor(spacePerRoom / 2)

                if (Math.random() < roomProb) {
                    rooms.push([x_pos, y_pos])
                }

                for (let x_diff = -1; x_diff < 2; x_diff++) {
                    for (let y_diff = -1; y_diff < 2; y_diff++) {
                        if (Math.abs(x_diff) + Math.abs(y_diff) == 1) {
                            if (Math.random() < roomProb) {
                                let end_x = x_pos + x_diff * spacePerRoom
                                let end_y = y_pos + y_diff * spacePerRoom
                                if (end_x >= 0 && end_x < grid.width && end_y >= 0 && end_y < grid.height) {
                                    edges.push({
                                        start: [x_pos, y_pos],
                                        end: [end_x, end_y],
                                        dir: [x_diff, y_diff]
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }

        for (let i = 0; i < rooms.length; i++) {
            let room = rooms[i];
            let center = grid.getCell(room[0], room[1])!
            center.setBlocked(false);

            for (let x = -Math.floor(roomSize / 2); x <= Math.floor(roomSize / 2); x++) {
                for (let y = -Math.floor(roomSize / 2); y <= Math.floor(roomSize / 2); y++) {
                    center.relativeCell(x, y)!.setBlocked(false)
                }
            }
        }

        for (let i = 0; i < edges.length; i++) {
            let edge = edges[i];

            let cell = grid.getCell(edge["start"][0], edge["start"][1])!;
            cell.setBlocked(false);

            let current = cell;
            while (current.x != edge["end"][0] || current.y != edge["end"][1]) {
                current = current.relativeCell(edge["dir"][0], edge["dir"][1])!
                current.setBlocked(false);
            }
        }
    }

    displayName() {
        return "Rooms and Hallways";
    }
}
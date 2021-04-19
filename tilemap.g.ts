// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202040404040404040404040405020202020303030303030303030101060202020202020202020202020207010602020202020202020202020202070106020202020202020202020202020701060202020202020202020202020207010602020202020202020202020202070106020202020202020202020202020701060202020202020202020202020207080602020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
2 2 2 2 2 2 2 2 2 . . . 2 . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . . . . . . 2 . . . 2 . . . 
. . . . . . . . 2 . . . 2 . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.builtin.forestTiles10], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010303010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101020202020202020202020101010101010202020202020202020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.castle.rock2,sprites.castle.rock1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

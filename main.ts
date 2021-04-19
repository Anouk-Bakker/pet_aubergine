scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(aubergine, tiles.getTileLocation(8, 0))
})
let aubergine: Sprite = null
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 c 7 c c 7 7 . . . . 
    . . . 7 7 c c 7 7 c c 7 . . . . 
    . . . 7 7 c c c 7 c c c c . . . 
    . . . . c c f c c f c c c . . . 
    . . . c c c f c c f c c c . . . 
    . . . c c c c c c c c c c . . . 
    . . . . c c f c c f c c c . . . 
    . . . . c c c f f c c c c . . . 
    . . . . c c c c c c c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . c c c c . . . . . . 
    `)
game.splash("Welcome to the one ", "and only...")
game.setDialogCursor(img`
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
    `)
game.splash("PET AUBERGINE GAME")
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 c 7 c c 7 7 . . . . 
    . . . 7 7 c c 7 7 c c 7 . . . . 
    . . . 7 7 c c c 7 c c c c . . . 
    . . . . c c f c c f c c c . . . 
    . . . c c c f c c f c c c . . . 
    . . . c c c c c c c c c c . . . 
    . . . . c c f c c f c c c . . . 
    . . . . c c c f f c c c c . . . 
    . . . . c c c c c c c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . c c c c . . . . . . 
    `)
game.showLongText("Exciting isn't it?", DialogLayout.Bottom)
aubergine = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 c 7 c c 7 7 . . . . 
    . . . 7 7 c c 7 7 c c 7 . . . . 
    . . . 7 7 c c c 7 c c c c . . . 
    . . . . c c f c c f c c c . . . 
    . . . c c c f c c f c c c . . . 
    . . . c c c c c c c c c c . . . 
    . . . . c c f c c f c c c . . . 
    . . . . c c c f f c c c c . . . 
    . . . . c c c c c c c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . c c c c . . . . . . 
    `, SpriteKind.Player)
aubergine.say("Hi there!")
pause(2000)
let Name = game.askForString("What would you like to call me?")
aubergine.say("Thank you!", 5000)
aubergine.startEffect(effects.confetti, 3000)
pause(1000)
aubergine.say("I like " + ("" + Name) + "!", 5000)
pause(5000)
scene.setBackgroundColor(0)
aubergine.setPosition(17, 17)
controller.moveSprite(aubergine, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(aubergine, tiles.getTileLocation(0, 8))
scene.cameraFollowSprite(aubergine)

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
let mySprite = 0
sprites.create(img`
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
    `, SpriteKind.Player).say("Hi there!")
let Name = game.askForString("What name would you like to give me?")
sprites.create(img`
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
    `, SpriteKind.Player).say("Thank you!", 5000)
pause(1000)
sprites.create(img`
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
    `, SpriteKind.Player).say("I do not mind being called " + Name)

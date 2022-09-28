scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths9, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level10`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level11`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level erroerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 6 6 6 6 6 6 . . . . . . . 
    . . . 6 5 5 5 5 6 . . . . . . . 
    . . . 6 4 5 5 4 6 . . . . . . . 
    . . . 6 5 5 5 5 6 . . . . . . . 
    . . . 2 2 5 5 2 2 . . . . . . . 
    . . 2 2 . 2 2 . 2 2 . . . . . . 
    . . 2 . . 2 2 . . 2 . . . . . . 
    . . 5 . . 2 2 . . 5 . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 6 6 . . . . . . . . . 
    . . . . 6 6 6 6 . . . . . . . . 
    . . . . 6 . . 6 . . . . . . . . 
    . . . . 5 . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)

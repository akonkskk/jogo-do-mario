input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("start")
    game.setLife(3)
    sprite = game.createSprite(0, 4)
    faça_alguma_coisa(images.createBigImage(`
        . . . . . . . . . .
        . . . # . . . . . .
        . . . . . . . . . #
        . . # # # . . . # #
        . . . . . . . # # #
        `))
})
function faça_alguma_coisa (image: Image) {
    faça_alguma_coisa(images.createBigImage(`
        . . . . . . . . . .
        . . . # . . . . . .
        . . . . . . . . . #
        . . # # # . . . # #
        . . . . . . . # # #
        `))
}
input.onGesture(Gesture.Shake, function () {
    sprite.change(LedSpriteProperty.Y, 1)
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
basic.showString("Super Mario")
basic.showString("Press A ")
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)

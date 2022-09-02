input.onButtonPressed(Button.A, function () {
    health += 1
    basic.showIcon(IconNames.Heart)
})
let health = 9
let sleep = 10
basic.forever(function () {
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # # .
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . # . .
        . # # . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . # . .
        . # # . .
        . # . # .
        . . . . .
        `)
    if (health == 0) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . # . .
            . . # # .
            `)
    }
})
basic.forever(function () {
    health += -1
    basic.pause(100)
})

let green = 0
let blue = 0
let red = 0
let item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    red = 0
    blue = 0
    green = 0
    for (let index = 0; index < 255; index++) {
        red += 1
        item.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        red += -1
        green += 1
        item.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        blue += 1
        green += -1
        item.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        blue += -1
        red += 1
        item.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        red += -1
        item.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
})

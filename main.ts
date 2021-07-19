input.onButtonPressed(Button.A, function () {
    Nota_1 = Nota_1 + 1
    basic.showNumber(Nota_1)
})
input.onButtonPressed(Button.AB, function () {
    Resultado = Nota_1 + Nota_2
    Resultado = Resultado / 2
    if (Resultado >= 7) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(Resultado)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.No)
        basic.showNumber(Resultado)
        basic.pause(2000)
    }
    Nota_1 = 0
    Nota_2 = 0
    Resultado = 0
    basic.showString("Let's go!")
})
input.onButtonPressed(Button.B, function () {
    Nota_2 = Nota_2 + 1
    basic.showNumber(Nota_2)
})
let Resultado = 0
let Nota_2 = 0
let Nota_1 = 0
Nota_1 = 0
Nota_2 = 0
Resultado = 0
basic.showString("Let's go!")

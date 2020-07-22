function updateColonne (colX: number) {
    for (let index = 0; index <= 4; index++) {
        if (led.point(colX, index)) {
            led.unplot(colX, index)
            if (index + directions_colonnes[colX] > 4) {
                directions_colonnes[colX] = -1
            } else if (index + directions_colonnes[colX] < 0) {
                directions_colonnes[colX] = 1
            }
            led.plot(colX, index + directions_colonnes[colX])
            break;
        }
    }
}
let directions_colonnes: number[] = []
directions_colonnes = [1, 1, 1, 1, 1]
let apparitionX = 0
led.plot(0, 0)
led.plot(1, 1)
led.plot(2, 2)
led.plot(3, 3)
led.plot(4, 4)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        updateColonne(index)
    }
    basic.pause(100)
})

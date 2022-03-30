let birak = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    birak = parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
    if (birak < 7.57575757576) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
basic.forever(function () {
    basic.showNumber(parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1)))
})

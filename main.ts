input.onButtonPressed(Button.A, function () {
    while (false) {
        OLED.clear()
        OLED.writeString("P0=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P0))
        OLED.writeString("<+++>")
        OLED.writeString("P1=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P1))
        OLED.writeString("<+++>")
        OLED.writeString("P2=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P2))
        OLED.writeString("<+++>")
        OLED.writeString("P3")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P3))
        OLED.writeString("<+++>")
        basic.pause(200)
    }
})
function Linefollow () {
    Loop = true
    ค่าแสงP0 = 0
    ค่าแสงP1 = 0
    ค่าแสงP2 = 0
    ค่าแสงP3 = 0
    if (true) {
    	
    } else {
    	
    }
}
function ไป () {
	
}
let ค่าแสงP3 = 0
let ค่าแสงP2 = 0
let ค่าแสงP1 = 0
let ค่าแสงP0 = 0
let Loop = false
led.enable(false)
OLED.init(128, 64)
while (!(input.buttonIsPressed(Button.A))) {
	
}

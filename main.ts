input.onButtonPressed(Button.A, function () {
    while (true) {
        OLED.clear()
        OLED.writeString("P0=")
        OLED.writeNum(MySensor.digitalRead(MySensor.digitalPort.P0))
        OLED.writeString("<+++>")
        OLED.writeString("P1=")
        OLED.writeNum(MySensor.digitalRead(MySensor.digitalPort.P1))
        OLED.writeString("<+++>")
        OLED.writeString("P2=")
        OLED.writeNum(MySensor.digitalRead(MySensor.digitalPort.P2))
        OLED.writeString("<+++>")
        OLED.writeString("P3")
        OLED.writeNum(MySensor.digitalRead(MySensor.digitalPort.P3))
        OLED.writeString("<+++>")
        basic.pause(200)
    }
})
function Linefollow () {
	
}
function ไป () {
	
}
led.enable(false)
OLED.init(128, 64)
while (!(input.buttonIsPressed(Button.AB))) {
	
}
ไป()

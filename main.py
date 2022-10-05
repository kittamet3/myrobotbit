def on_button_pressed_a():
    while True:
        OLED.clear()
        OLED.write_string("P0=")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P0))
        OLED.write_string("<+++>")
        MyRobotBit.time_pause(1897)
input.on_button_pressed(Button.A, on_button_pressed_a)

def ไป():
    MyRobotBit.motor_ab(motorDIR.FORWARD, 50, 50)
    MyRobotBit.time_pause(760)
    MyRobotBit.rotate_notime(Turn.LEFT, 50)
    MyRobotBit.time_pause(100)
    MyRobotBit.motor_off(motorSEL.M12, StopMode.BRAKE)
    MyRobotBit.time_pause(100000)
    MyRobotBit.motor_ab
while not (input.button_is_pressed(Button.AB)):
    pass
ไป()
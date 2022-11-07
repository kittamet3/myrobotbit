def Turn_Right():
    MyRobotBit.rotate_notime(Turn.RIGHT, 50)
    basic.pause(760)
    MotorStop()
def MotorStop():
    MyRobotBit.motor_off(motorSEL.M12, StopMode.BRAKE)
    basic.pause(200)
def Forward():
    MyRobotBit.motor_ab(motorDIR.FORWARD, 55, 50)
def Right_Line():
    MyRobotBit.rotate_notime(Turn.RIGHT, 40)
    basic.pause(110)
    MotorStop()
def Left_Line():
    MyRobotBit.rotate_notime(Turn.LEFT, 40)
    basic.pause(110)
    MotorStop()

def on_button_pressed_a():
    while True:
        OLED.clear()
        OLED.write_string("P0=")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P0))
        OLED.write_string("<+++>")
        OLED.write_string("P1=")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P1))
        OLED.write_string("<+++>")
        OLED.write_string("P2=")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P2))
        OLED.write_string("<+++>")
        OLED.write_string("P3=")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P3))
        basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Uturn():
    MyRobotBit.rotate_notime(Turn.RIGHT, 50)
    basic.pause(1200)
    MotorStop()
def Turn_Left():
    MyRobotBit.rotate_notime(Turn.LEFT, 50)
    basic.pause(760)
    MotorStop()
def GoStart():
    MyRobotBit.motor_ab(motorDIR.FORWARD, 50, 50)
    basic.pause(500)
def Reverse_Line():
    MyRobotBit.motor_ab(motorDIR.REVERSE, 50, 50)
    basic.pause(350)
    MotorStop()

def on_button_pressed_ab():
    GoStart()
    Linefollow()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def Linefollow():
    global Loop, ค่าแสงP0, ค่าแสงP1, ค่าแสงP2, ค่าแสงP3
    Loop = True
    ค่าแสงP0 = 442
    ค่าแสงP1 = 492
    ค่าแสงP2 = 503
    ค่าแสงP3 = 575
    while Loop:
        if MySensor.analog_read(MySensor.analogPort.P0) > ค่าแสงP0 and MySensor.analog_read(MySensor.analogPort.P1) > ค่าแสงP1 and (MySensor.analog_read(MySensor.analogPort.P2) > ค่าแสงP2 and MySensor.analog_read(MySensor.analogPort.P3) > ค่าแสงP3):
            Forward()
        elif MySensor.analog_read(MySensor.analogPort.P0) < ค่าแสงP0 and MySensor.analog_read(MySensor.analogPort.P1) > ค่าแสงP1 and (MySensor.analog_read(MySensor.analogPort.P2) > ค่าแสงP2 and MySensor.analog_read(MySensor.analogPort.P3) > ค่าแสงP3):
            Reverse_Line()
            Right_Line()
        elif MySensor.analog_read(MySensor.analogPort.P0) > ค่าแสงP0 and MySensor.analog_read(MySensor.analogPort.P1) > ค่าแสงP1 and (MySensor.analog_read(MySensor.analogPort.P2) > ค่าแสงP2 and MySensor.analog_read(MySensor.analogPort.P3) < ค่าแสงP3):
            Reverse_Line()
            Left_Line()
        elif MySensor.analog_read(MySensor.analogPort.P0) > ค่าแสงP0 and MySensor.analog_read(MySensor.analogPort.P1) > ค่าแสงP1 and (MySensor.analog_read(MySensor.analogPort.P2) < ค่าแสงP2 and MySensor.analog_read(MySensor.analogPort.P3) > ค่าแสงP3):
            Reverse_Line()
            Right_Line()
        elif MySensor.analog_read(MySensor.analogPort.P0) > ค่าแสงP0 and MySensor.analog_read(MySensor.analogPort.P1) < ค่าแสงP1 and (MySensor.analog_read(MySensor.analogPort.P2) > ค่าแสงP2 and MySensor.analog_read(MySensor.analogPort.P3) > ค่าแสงP3):
            Reverse_Line()
            Left_Line()
        elif MySensor.analog_read(MySensor.analogPort.P0) > ค่าแสงP0 and MySensor.analog_read(MySensor.analogPort.P1) < ค่าแสงP1 and (MySensor.analog_read(MySensor.analogPort.P2) < ค่าแสงP2 and MySensor.analog_read(MySensor.analogPort.P3) > ค่าแสงP3):
            Loop = False
            Reverse_Line()
            MotorStop()
        MotorStop()
ค่าแสงP3 = 0
ค่าแสงP2 = 0
ค่าแสงP1 = 0
ค่าแสงP0 = 0
Loop = False
led.enable(False)
OLED.init(128, 64)
while not (input.button_is_pressed(Button.A)):
    pass
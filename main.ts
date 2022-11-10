function Box1 () {
    GoStart()
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Servo_Kick()
}
// เลี้ยวขวา90องศา
function Turn_Right () {
    MyRobotBit.Rotate(Turn.Right, Slow_Speed, Turn_ms)
    MotorStop()
}
// มอเตอร์หยุด
function MotorStop () {
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
    basic.pause(50)
}
function go_to_wins () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
    basic.pause(500)
    MotorStop()
}
function Points_2 () {
    Turn_Right()
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Uturn()
    Line_Reverse()
}
function Line_Reverse () {
    Loop = true
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Speed)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.Rotate(Turn.Right, 15, 50)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            MyRobotBit.Rotate(Turn.Left, 15, 50)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Slow_Speed)
            basic.pause(400)
            MotorStop()
        }
    }
    MotorStop()
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
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
        OLED.writeString("P3=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P3))
        OLED.writeString("P4=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P4))
        OLED.writeString("<+++>")
        OLED.writeString("P10=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P10))
        OLED.writeString("<+++>")
        basic.pause(500)
    }
})
// ถอยหลังเมื่อวางถุงยังชีพเสร็จ
function Go_15_CM () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Slow_Speed)
    basic.pause(500)
    MotorStop()
}
// หมุนซ้าย180องศา
function Uturn () {
    MyRobotBit.Rotate(Turn.Left, Slow_Speed, Uturn_ms)
    MotorStop()
}
// เลี้ยวซ้าย90องศา
function Turn_Left () {
    MyRobotBit.Rotate(Turn.Left, Slow_Speed, Turn_ms)
    MotorStop()
}
function Finish () {
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Go_30_CM()
    Turn_Left()
    Linefollow()
    Go_30_CM()
    Linefollow()
    Turn_Right()
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Linefollow()
}
function Box4 () {
    Uturn()
    Line_Reverse()
    Linefollow()
    Servo_Kick()
}
function GoStart () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
    basic.pause(500)
}
function Points_1 () {
    Uturn()
    Line_Reverse()
    Go_15_CM()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Turn_Right()
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Uturn()
    Line_Reverse()
}
function Servo_Kick () {
    MyServo.ServoRun(Servo.Servo11, 45)
    basic.pause(800)
    MyServo.ServoRun(Servo.Servo11, 105)
    basic.pause(300)
    MotorStop()
}
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    Box1()
    Box2()
    Box3()
    Box4()
    Points_1()
    Points_2()
    Finish()
    go_to_wins()
})
function Box3 () {
    Uturn()
    Line_Reverse()
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Uturn()
    Line_Reverse()
    Go_30_CM()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Turn_Right()
    Linefollow()
    Servo_Kick()
}
function Linefollow () {
    Loop = true
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Speed)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Speed)
            basic.pause(650)
            MyRobotBit.RotateNOTIME(Turn.Right, 25)
            basic.pause(120)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Speed)
            basic.pause(650)
            MyRobotBit.RotateNOTIME(Turn.Left, 25)
            basic.pause(120)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.Rotate(Turn.Right, Slow_Speed, Rotate_Line_ms)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.Rotate(Turn.Left, Slow_Speed, Rotate_Line_ms)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MyRobotBit.Rotate(Turn.Right, Slow_Speed, Rotate_Line_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MyRobotBit.Rotate(Turn.Left, Slow_Speed, Rotate_Line_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MyRobotBit.Rotate(Turn.Right, Slow_Speed, Rotate_Line_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MyRobotBit.Rotate(Turn.Left, Slow_Speed, Rotate_Line_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MyRobotBit.Rotate(Turn.Left, Slow_Speed, Rotate_Line_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Reverse_Error_ms)
            MyRobotBit.Rotate(Turn.Right, Slow_Speed, Rotate_Line_ms)
            MotorStop()
        }
    }
    MotorStop()
}
function Box2 () {
    Uturn()
    Line_Reverse()
    Go_15_CM()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Go_30_CM()
    Linefollow()
    Turn_Right()
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Servo_Kick()
}
function Go_30_CM () {
    MyRobotBit.MotorON(motorSEL.M12, motorDIR.Forward, Slow_Speed)
    basic.pause(1350)
    MotorStop()
}
let Loop = false
let Read_P10 = 0
let Read_P4 = 0
let Read_P3 = 0
let Read_P2 = 0
let Read_P1 = 0
let Read_P0 = 0
let Slow_Reverse = 0
let Slow_Speed = 0
let Rotate_Line_ms = 0
let Reverse_Error_ms = 0
let Uturn_ms = 0
let Turn_ms = 0
let Speed = 0
led.enable(false)
OLED.init(128, 64)
Speed = 50
Turn_ms = 500
Uturn_ms = 900
Reverse_Error_ms = 420
Rotate_Line_ms = 50
Slow_Speed = 30
Slow_Reverse = 30
Read_P0 = 224
Read_P1 = 295
Read_P2 = 298
Read_P3 = 302
Read_P4 = 231
Read_P10 = 233

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
    Forward_Box()
    Servo_Kick()
}
function Go_Points () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
    basic.pause(970)
}
// เลี้ยวขวา90องศา
function Turn_Right () {
    MyRobotBit.RotateNOTIME(Turn.Right, 30)
    basic.pause(Turn_ms)
    MotorStop()
}
function Follow_Finish () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
    basic.pause(600)
}
// มอเตอร์หยุด
function MotorStop () {
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
    basic.pause(50)
}
function Go_Box3 () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
    basic.pause(1400)
}
function go_to_wins () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
    basic.pause(650)
}
function Points_2 () {
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Line_Reverse()
    Turn_Right()
    Line_Reverse()
    Follow_Finish()
}
function Line_Reverse () {
    Loop = true
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.MotorAB(motorDIR.Reverse, Slow_Speed_A, Slow_Speed_B)
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) > Read_P10) {
            MyRobotBit.RotateNOTIME(Turn.Right, 10)
            basic.pause(120)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P4) > Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            MyRobotBit.RotateNOTIME(Turn.Left, 10)
            basic.pause(120)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P4) < Read_P4 && MySensor.analogRead(MySensor.analogPort.P10) < Read_P10) {
            Loop = false
            MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
            basic.pause(200)
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
// เลี้ยวซ้าย90องศา
function Turn_Left () {
    MyRobotBit.RotateNOTIME(Turn.Left, 30)
    basic.pause(Turn_ms)
    MotorStop()
}
function Finish () {
    Turn_Left()
    Linefollow()
    through_obstacles()
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
    Uturn_Left()
    Line_Reverse()
    Linefollow()
    Forward_Box()
    Servo_Kick()
}
function GoStart () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
    basic.pause(500)
}
function Points_1 () {
    Uturn_Right()
    Line_Reverse()
    Go_Points()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Turn_Right()
    Linefollow()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    Turn_Left()
    Line_Reverse()
}
// หมุนขวา180องศา
function Uturn_Right () {
    MyRobotBit.RotateNOTIME(Turn.Right, Turn_Speed)
    basic.pause(Uturn_ms)
    MotorStop()
}
function Servo_Kick () {
    MyServo.ServoRun(Servo.Servo11, 47)
    basic.pause(800)
    MyServo.ServoRun(Servo.Servo11, 100)
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
    basic.pause(200)
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
function through_obstacles () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
    basic.pause(800)
}
function Box3 () {
    Reverse_Box()
    Line_Reverse()
    Turn_Right()
    Line_Reverse()
    Go_Box3()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Turn_Left()
    Linefollow()
    Forward_Box()
    Servo_Kick()
}
function Linefollow () {
    Loop = true
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, 30)
            basic.pause(650)
            MotorStop()
            MyRobotBit.RotateNOTIME(Turn.Right, 30)
            basic.pause(120)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, 30)
            basic.pause(650)
            MotorStop()
            MyRobotBit.RotateNOTIME(Turn.Left, 30)
            basic.pause(120)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) > Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) > Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) > Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > Read_P0 && MySensor.analogRead(MySensor.analogPort.P1) < Read_P1 && (MySensor.analogRead(MySensor.analogPort.P2) < Read_P2 && MySensor.analogRead(MySensor.analogPort.P3) < Read_P3)) {
            Loop = false
            MotorStop()
            MyRobotBit.MotorON(motorSEL.M12, motorDIR.Reverse, Slow_Reverse)
            basic.pause(Forward_Error_ms)
            MotorStop()
        }
    }
    MotorStop()
}
// ถอยหลังเมื่อวางถุงยังชีพเสร็จ
function Reverse_Box () {
    MyRobotBit.MotorAB(motorDIR.Reverse, Slow_Speed_A, Slow_Speed_B)
    basic.pause(1100)
    MotorStop()
}
// หมุนซ้าย180องศา
function Uturn_Left () {
    MyRobotBit.RotateNOTIME(Turn.Left, Turn_Speed)
    basic.pause(Uturn_ms)
    MotorStop()
}
function Box2 () {
    Reverse_Box()
    Turn_Left()
    Line_Reverse()
    Linefollow()
    through_obstacles()
    Linefollow()
    Turn_Right()
    Linefollow()
    Turn_Right()
    Line_Reverse()
    Linefollow()
    Forward_Box()
    Servo_Kick()
}
// เดินหน้าวางถุงยังชีพ
function Forward_Box () {
    MyRobotBit.MotorAB(motorDIR.Forward, Motor_A, Motor_B)
    basic.pause(100)
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
let Slow_Speed_B = 0
let Slow_Speed_A = 0
let Forward_Error_ms = 0
let Uturn_ms = 0
let Turn_ms = 0
let Turn_Speed = 0
let Motor_B = 0
let Motor_A = 0
led.enable(false)
OLED.init(128, 64)
Motor_A = 59
Motor_B = 55
Turn_Speed = 30
Turn_ms = 500
Uturn_ms = 1150
Forward_Error_ms = 330
Slow_Speed_A = 30
Slow_Speed_B = 30
Turn_Speed = 30
Slow_Reverse = 30
Read_P0 = 274
Read_P1 = 262
Read_P2 = 558
Read_P3 = 258
Read_P4 = 221
Read_P10 = 214

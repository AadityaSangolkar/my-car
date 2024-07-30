input.onButtonPressed(Button.A, function () {
    DriveForward(1)
})
function DriveForward (Seconds: number) {
    servos.P1.run(50)
    servos.P2.run(-50)
    control.waitMicros(Seconds * 1000000)
    servos.P1.stop()
    servos.P2.stop()
}

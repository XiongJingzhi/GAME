var Scene = function(game) {
    var paddle = Paddle(game)
    ball = Ball(game)
    blocks = loadLevel(1, game)
    game.registerAction('f', function(){
        ball.fire()
    })
    game.registerAction('a', function(){
        paddle.moveLeft()
    })
    game.registerAction('d', function(){
        paddle.moveRight()
    })
    game.updata = function() {
        if (paused) {
            return
        }
        if(paddle.collide(ball)) {
            ball.speedY *= -1
        }
        ball.move()
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i]
            if(block.collide(ball)) {
                block.kill()
                ball.rebound()
                game.score += 10
            }
        }
    }
    game.draw = function() {
        game.ctx.fillStyle = "#554"
        game.ctx.fillRect(0, 0, 500, 350)
        game.drawImage(paddle)
        game.drawImage(ball)
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i]
            if(block.alive) {
                game.drawImage(block)
            }
        }
        game.ctx.font = "20px serif"
        game.ctx.fillText(`Scroe:${game.score}`, 400, 50)
    }
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, event)
        // 检查是否点中了 ball
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        // log(x, y, 'move')
        if (enableDrag) {
            log(x, y, 'drag')
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, 'up')
        enableDrag = false
    })
}
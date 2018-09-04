var __main = function(){
    paused = false
    var iamges = {
        'ball': 'ball.png',
        'block': 'block.png',
        'paddle': 'paddle.png',
    }
    var game = Game(30, iamges, function(){
        Scene(game)
    })
    enableDebugMode(true, game)
}

__main()

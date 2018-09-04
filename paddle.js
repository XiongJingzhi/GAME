var Paddle = function(game) {
    var image = game.imgByName('paddle')
    var o = {
        x : 100,
        y : 250,
        speed : 10,
    }
    o.image = image
    o.width = image.width
    o.height = image.height
    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x> 500 - o.width) {
            x = 500 - o.width
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(o.x - o.speed)
    }
    o.moveRight = function() {
        o.move(o.x + o.speed)
    }
    var aInb = function(x, x1, x2) {
        return x >= x1 && x <= x2
    }
    o.collide = function(ball) {
        var a = o
        var b = ball
        if (aInb(a.x, b.x, b.x + b.width) || aInb(b.x, a.x, a.x + a.width)) {
            if (aInb(a.y, b.y, b.y + b.height) || aInb(b.y, a.y, a.y + a.height)) {
                return true
            }
        }
        return false
    }
    return o
}
var Ball = function(game) {
    var image = game.imgByName('ball')
    var o = {
        x: 100,
        y: 250,
        speedX: 10,
        speedY: 10,
        fired: false,
    }
    o.image = image
    o.width = image.width
    o.height = image.height
    o.move = function() {
        if(o.fired) {
            if(o.x < 0 || o.x > 500 - o.image.width) {
                o.speedX = -o.speedX
            }
            if(o.y < 0 || o.y > 260) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.fire = function() {
        o.fired = true
    }
    
    o.rebound = function() {
        o.speedY = -o.speedY
    }
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.width
        var yIn = y >= o.y && y <= o.y + o.height
        return xIn && yIn
    }
    return o
}
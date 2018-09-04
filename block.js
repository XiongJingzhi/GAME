var Block = function(position, game){
    var p = position
    var image = game.imgByName('block')
    var o = {
        x: p[0],
        y: p[1],
        alive: true,
        lifes: p[2] || 1,
    }
    o.image = image
    o.width = image.width
    o.height = image.height
    o.kill = function() {
        o.lifes -= 1
        if(o.lifes < 1) {
            o.alive = false
        }
    }
    o.collide = function(b){
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}
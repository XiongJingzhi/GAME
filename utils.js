var $ = s => document.querySelector(s)
var log = function() {
    console.log.apply(console, arguments)
}

var imgFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var loadLevel = function(n, game){
    n = n -1
    var level = levels[n]
    var blocks = []
    for (let i = 0; i < level.length; i++) {
        var p = level[i]
        let b = Block(p, game)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode =function(enable, game) {
    if(!enable) {
        return
    }
    window.addEventListener('keydown', function(e){
        if(e.key == 'p') {
            paused = !paused
        } else if('123456'.includes(e.key)){
            blocks = loadLevel(Number(e.key), game)
        } 
    })
    var s = document.querySelector('#id-input-speed')
    s.addEventListener('input', function(e){
        log("input start")
        var value = e.target.value
        log(value)
        window.fps = Number(value / 2 + 10)
    })
}

var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}
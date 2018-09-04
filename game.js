var Game = function(fps, images, runCallback) {
    var canvas = $('#id-canvas')
    var ctx = canvas.getContext('2d')
    var g = {
        actions:{},
        keydowns:{},
        score: 0,
        images: {},
    }
    window.fps = fps
    g.canvas = canvas
    g.ctx = ctx
    g.drawImage = function(Image) {
        g.ctx.drawImage(Image.image, Image.x, Image.y)
    }
    window.addEventListener('keydown', function(e){
        g.keydowns[e.key] = true
    })
    window.addEventListener('keyup', function(e){
        g.keydowns[e.key] = false
    })
    g.registerAction = function(key, callback){
        g.actions[key] = callback
    }
    var runloop = function(){
        var actions = Object.keys(g.actions)
        for (let index = 0; index < actions.length; index++) {
            let key = actions[index]
            if (g.keydowns[key]) {
                // 按键按下调用注册函数callback
                g.actions[key]()
            }
        }
        g.updata()
        g.ctx.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.draw()
        setTimeout(function(){
            runloop()
            // log('run fps', window.fps)
        },1000/window.fps)
    }
    var count = 0
    var names = Object.keys(images)
    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function() {
            count++
            g.images[name] = img
            if (count == names.length) {
                // log(g.images)
                g.run()
            }
        }
    }
    g.imgByName = function(name) {
        var img = g.images[name]
        var image = {
            image: img,
            width: img.width,
            height: img.height,
        }
        return img
    }
    g.run =function() {
        runCallback()
        setTimeout(function(){
            runloop()
        },1000/window.fps)
    }
    return g
}

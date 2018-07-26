/*
ctx
img
wFps  横向的帧数
hFps  纵向的帧数
x
y
speed
*/

(function(w){

    function Bird(ctx, img, wFps, hFps, x, y, speed){

        this.ctx = ctx;
        this.img = img;
        this.wFps = wFps;
        this.hFps = hFps;
        //当前的帧数
        this.wFpsNow = 0;
        this.hFpsNow = 0;

        console.log(img);
        this.width = this.img.width/this.wFps;
        this.height = this.img.height/this.hFps;

        //鸟的起始位置
        this.x = x;
        this.y = y;

        //鸟初始下落的速度
        this.speed = speed || 2;
        //鸟下落的增量
        this.speedPlus = 0.5;

    }

    Bird.prototype = {

        constructor: Bird,

        draw: function(){

            //确定最小偏移角度: 速度1时的角度
            var baseR = 10*Math.PI/180;
            //确定最大偏移角度
            var maxR = Math.PI/4;

            var birdR = baseR*this.speed;

            if(birdR > maxR){

                birdR = maxR;

            }

            this.ctx.save();

            this.ctx.translate( this.x + this.width/2, this.y + this.height/2 );
            this.ctx.rotate(birdR);

            this.ctx.drawImage( this.img, this.width*this.wFpsNow, this.height*this.hFpsNow, this.width, this.height, -this.width/2, -this.height/2, this.width, this.height );
            this.ctx.strokeRect( -this.width/2, -this.height/2, this.width,this.height );

            this.ctx.restore();

        },

        updata: function(){

            this.wFpsNow++;
            if(this.wFpsNow === this.wFps){

                this.wFpsNow = 0;

            }
            this.y += this.speed;
            this.speed += this.speedPlus;
            this.bindEvent();
        },

        bindEvent: function(){

            var _this = this;

            _this.ctx.canvas.onclick = function(){

                _this.speed = -6;

            }

        }

    }

    var bird = null;

    w.getBird = function(ctx, img, wFps, hFps, x, y, speed){

        if(!bird){

            bird = new Bird(ctx, img, wFps, hFps, x, y, speed);

        }

        return bird;

    }

    //w.Bird = Bird;

})(window);
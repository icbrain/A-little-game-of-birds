/*
绘制蓝天背景
params ctx 绘制环境
params img 背景图片
params speed 背景速度
*/

(function(w){

    function Sky(ctx, img, speed){
        //每实例一次Sky Sky.len的值加一
        Sky.len++;
        this.ctx = ctx;
        this.img = img;
        this.speed = speed || 2;
        this.width = this.img.width;
        this.height = this.img.height;
        this.x = this.width*(Sky.len - 1);   //绘制的图片x轴坐标
        this.y = 0;  //绘制的图片y轴坐标
    }

    //背景的实例个数
    Sky.len = 0;

    Sky.prototype = {

        constructor: Sky,
        //绘制图片
        draw: function(){

            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        },
        //更新图片的位置
        updata: function(){

            this.x += -this.speed;

            if(this.x <= -this.width){

                this.x = this.width*(Sky.len - 1);

            }

        }

    }
    //w.Sky = Sky;

    w.getSky = function(ctx, img, speed){

        return new Sky(ctx, img, speed);

    }


})(window);

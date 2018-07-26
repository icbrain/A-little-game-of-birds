(function(w){

    function Land(ctx, img, speed){
        //每实例一次Land Land.len的值加一
        Land.len++;
        this.ctx = ctx;
        this.img = img;
        this.speed = speed || 2;
        this.width = this.img.width;
        this.height = this.img.height;
        this.x = this.width*(Land.len - 1);   //绘制的图片x轴坐标
        this.y = this.ctx.canvas.height - this.height;  //绘制的图片y轴坐标
    }

    //背景的实例个数
    Land.len = 0;

    Land.prototype = {

        constructor: Land,
        //绘制图片
        draw: function(){

            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        },
        //更新图片的位置
        updata: function(){

            this.x += -this.speed;

            if(this.x <= -this.width){

                this.x = this.width*(Land.len - 1);

            }

        }

    }

    w.getLand = function(ctx, img, speed){

        return new Land(ctx, img, speed);

    }

    //w.Land = Land;

})(window)
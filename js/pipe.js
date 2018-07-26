/*
1. 管子是成对出现的, x轴是可以共享的
2. 上边管子的y轴坐标确定了,我们可以简单的计算出下边管子的y轴坐标
3. 两个管子之间的距离固定


参数:
ctx
imgUp
imgDown
iLandHeight
iSpace
iSpeed
*/



(function(w){

    function Pipe(ctx, imgUp, imgDown, iLandHeight, iSpace, iSpeed){

        Pipe.len++;
        this.ctx = ctx;
        this.imgUp = imgUp;
        this.imgDown = imgDown;
        this.landHeight = iLandHeight;
        //两个管子之间的距离
        this.space = iSpace || 150;
        this.speed = iSpeed || 2;
        this.width = this.imgUp.width;
        this.height = this.imgUp.height;

        this.x = 300 + this.width*3*(Pipe.len - 1);
        this.minHeight = 50;
        //每一对新管子的高度都是随机的
        this.init();
    }

    Pipe.len = 0;
    Pipe.i = 0;

    Pipe.prototype = {

        constructor: Pipe,

        init: function(){

            //随机管子的y轴高度
            //算出管子的最大高度
            this.maxHeight = this.ctx.canvas.height - this.landHeight - this.minHeight - this.space;
            //在最大高度和最小高度之间的随机数
            this.downHeight = this.getRandom(this.maxHeight, this.minHeight)

            //上边管子的y轴坐标
            this.downY = this.downHeight - this.height;
            //下边管子的y轴坐标
            this.upY = this.downHeight + this.space;



        },

        getRandom: function(num1, num2){

            return Math.round(Math.random()*(num1 - num2) + num2);
            //return Math.floor(Math.random()*(num1-num2)) + num2;

        },

        draw: function(){

            this.ctx.drawImage( this.imgDown, this.x, this.downY, this.width, this.height );
            this.ctx.drawImage( this.imgUp, this.x, this.upY, this.width, this.height );

            this.ctx.rect(this.x, this.downY, this.width, this.height);
            this.ctx.rect(this.x, this.upY, this.width, this.height);

        },



        updata: function(){

            this.x += -this.speed;

            this.ctx.font = "bold 24px '宋体'";
            this.ctx.textBaseline = 'top';
            this.ctx.fillText("得分:" + Pipe.i, 0, 0);

            if(this.x <= -this.width){
                //重新计算管子的高度
                this.init();
                this.x += this.width*3*Pipe.len;
                Pipe.i++;

            }

        }

    }

    w.getPipe = function(ctx, imgUp, imgDown, iLandHeight, iSpace, iSpeed){

        return new Pipe(ctx, imgUp, imgDown, iLandHeight, iSpace, iSpeed);

    }

    //w.Pipe = Pipe;

})(window)
//实例化所有角色: 鸟1 天空2 大地4 管子6
//控制场景开始
//判断结束


(function(w){

    function Scene(ctx, imgObj, speed){

        this.ctx = ctx;
        this.imgObj = imgObj;
        this.speed = speed;
        this.bird = null;
        this.roles = [];
        this.listeners = [];
        this.initRoles();
    }


    Scene.prototype = {

        constructor: Scene,

        initRoles: function(){

            //俩天空
            for(var i = 0; i < 2; i++){

                this.roles.push( getSky( this.ctx,this.imgObj.sky ) );

            }

            //六根管子

            for(var i = 0; i < 6; i++){
                // /ctx, imgUp, imgDown, iLandHeight, iSpace, iSpeed
                this.roles.push( getPipe( this.ctx, this.imgObj.pipeUp, this.imgObj.pipeDown, this.imgObj.land.height, 150 ) );

            }

            //四个大地

            for(var i = 0; i < 4; i++){

                this.roles.push( getLand( this.ctx, this.imgObj.land ) );

            }

            //一个鸟
            //ctx, img, wFps, hFps, x, y, speed
            //console.log(this.imgObj.bird);
            //this.bird = getBird( this.ctx, this.imgObj.bird, 3, 1, 10, 10 );
            //this.roles.push( this.bird );
            this.roles.push( getBird( this.ctx, this.imgObj.bird, 3, 1, 10, 10 ) );

        },

        addListener: function(listerner){

            this.listeners.push(listerner);

        },

        triggerBirdDeath: function(){

            this.listeners.forEach(function( listen ){

                listen();

            })

        },


        draw: function(timer){

            this.bird = getBird();

            var birdPointX = this.bird.x + this.bird.width/2;
            var birdPointY = this.bird.y + this.bird.height/2;

            if( birdPointY < 0 || birdPointY > this.ctx.canvas.height - this.imgObj.land.height || this.ctx.isPointInPath(birdPointX, birdPointY) ){

                //并没清除定时器
                /*clearInterval(timer);
                getOver( this.ctx ).draw();*/
                this.triggerBirdDeath();

            }else{
                //重绘六根管子的路径
                this.ctx.beginPath();
                this.roles.forEach(function( role ){

                    role.draw();
                    role.updata();

                })

            }

        }

    }

    w.getScene = function(ctx, imgObj, speed){

        return new Scene( ctx, imgObj, speed );

    }

})(window);
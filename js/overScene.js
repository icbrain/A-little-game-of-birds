(function(w){

    function OverScene(ctx){

        this.ctx = ctx;

    }

    OverScene.prototype = {

        constructor: OverScene,

        draw: function(){

            this.ctx.save();

            this.ctx.beginPath();
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

            this.ctx.beginPath();
            this.ctx.font = "bold 120px '宋体'";
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            this.ctx.textAlign = "center";
            this.ctx.textBaseLine = "middle";
            this.ctx.fillText("GAME OVER", this.ctx.canvas.width/2, this.ctx.canvas.height/2);

            this.ctx.restore();

        }

    }


    w.getOver = function(ctx){
        //暴露实例对象给外部
        return new OverScene(ctx);

    }

    /*w.OverScene = OverScene;*/


})(window);
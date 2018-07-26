/*
处理所有图片
所有图片onload完毕 调用回调
imgUrl = {'sky': 'images/sky.png', 'land': 'images/land.png', 'bird': 'images/bird.png','pipeDown': 'images/pipeDown.png', 'pipeUp': 'images/pipeUp.png'}

imgObj = {
        'sky': '<img src="images/sky.png">'
        ...
}
整体思路: imgUrl 转成 imgObj
 */

function imgLoaded(imgUrl, fn){

    var imgObj = {};
    var oTempImg = null;
    var iLoadNum = iImgNum = 0;

    for(var k in imgUrl){

        iImgNum++;
        oTempImg = new Image();
        oTempImg.src = imgUrl[ k ];
        imgObj[k] = oTempImg;

        oTempImg.onload = function(){

            iLoadNum++;

            if(iLoadNum === iImgNum){

                fn && fn(imgObj);

            }

        }


    }

}



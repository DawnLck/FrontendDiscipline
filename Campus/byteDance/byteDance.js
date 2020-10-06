var CommonButton = function(params,callback){
    var A = params[0] || '';
    var content = params[1] || '';
    var anchorX = params[2] || 0,
        anchorY = params[3]
    var button = new global.BUTTON();

    button.setText(content);
    button.setAnchor()
    button.KeyInputDown(function(){
       //todo
    });
    //todo
    return button;
};

//资源整合
1. img -> resource
2. img -> pngexpress -> spritsheet -> game.addResource
3. zip.reader() -> zip1 / zip2(loading)

请求数减少

浏览器url

function funcString(str){
    let arr = str.split(' ');
    let result = [];
    let length = arr.length;
    for(let i=length-1;i>-1;i++){
        result.push(arr[i]);
    }
    return result.join(' ');
}

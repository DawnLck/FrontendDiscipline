var A = 10000;
var B = 10000;
for(A = 1; A < 10000;A++){
    for(B = 1;B < 10000;B++){
        var result = 0;
        for(var j = 1;j <= B;j++){
            var tem = parseInt(A / j);
            if(!tem){
                break;
            }
            var next = parseInt(A / (j+1));
            if(tem === next){
                var max = parseInt(A / tem);
                if(max >= B){
                    result += tem * (B - j + 1);
                    j = B;
                }else{
                    result += tem * (max - j + 1);
                    j = max;
                }
            }else{
                result += tem;
            }
        }
        var result2 = 0;
        for(var i = 1; i <= B; i++){
            result2 += parseInt(A/i);
        }
        if(result !== result2){
            console.log('A: '+A+' B:'+B);
        }
    }
}


data() {
  return {
    listData: [],
    listTotal: []
  }
},
/* 长数组分段加载 */
methods: {
  loadData: function(index, size) {
    let _this = this;
    this.$get('article/list', {
      p: index, //页码
      size: size //分页大小
    }).then(function(res) {
      _this.listTotal.concat(res.listData);
    });
  }
}

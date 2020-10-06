let parseQueryString = function (url, key) {
    let paramString = url.split('?')[1];
    let params = paramString.split('&');
    let obj = {};
    for (let i = 0, length = params.length; i < length; i++) {
        let tem = params[i].split('=');
        if (obj[tem[1]]) {
            return obj[tem[1]];
        }
        else {
            obj[tem[0]]= tem[1];
            if (tem[0] === key) {
                if (tem[1] || tem[1] === null) {
                    return tem[1];
                } else {
                    return "_EMPTY_"
                }
            }
        }
    }
    return "_EMPTY_";
};

console.log(parseQueryString('https://www.didichuxing.com/path?key1=a&key2=123&key_3=key2', 'key_3'));

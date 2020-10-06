let url = '';
let xhr = new XMLHttpRequest();
//如果是IE6及以下，xhr = new ActiveXObject('Microsoft.XMLHTTP');
xhr.setRequestHeader('Content-type','application/xml-www-form-urlencoded');
xhr.open('post', url, true);
xhr.send();
xhr.onreadystatechange(function () {
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      console.log('Send Successfully');
    }else{
      console.log('Send Failed');
    }
  }
});

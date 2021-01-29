

setTimeout(function () {
    alert("残念!時間切れ!");
    window.open('about:blank', '_self').close();
}, 10000);


// カウントダウンする秒数
var sec = 10;
 
// 1秒おきにカウントダウン
var cnt = sec;
var id = setInterval(function(){
  cnt--;
  if(cnt >= 0){ 
      msg = "残り時間" + " " + cnt;
      var timer = document.getElementById("timer");  
      timer.innerHTML = msg;
    }
}, 1000);


var countUpValue = 100;

function message() {
    countUpValue--;
    var count = countUpValue; 

    if(countUpValue < "0"){
        alert("やったね！");
    }else{
        msg = count;
        var comment = document.getElementById("comment");  
        comment.innerHTML = msg;
    }

}

  

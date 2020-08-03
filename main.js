// 数値が一桁のとき、先に「0」を挿入する
function setNumber(num) {
    let set;
    if (num < 10) {
        set = '0' + num;
    } else {
        set = num;
    }
    return set;
}

// 「:」を点滅させる
$(function(){
    setInterval(function(){
        $('.flashing').fadeOut(500,function(){$(this).fadeIn(500)});
    },1000);
});

// 時間を取得
function showClock() {
    let time = new Date(); // 現在の日時を取得
    let month = time.getMonth();
    let day = time.getDate();
    document.getElementById('day').innerHTML = `${month} 月 ${day} 日`;
    let hour = setNumber(time.getHours()); // 時
    let min  = setNumber(time.getMinutes()); // 分
    let sec  = setNumber(time.getSeconds()); // 秒
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}
setInterval('showClock()', 1000);
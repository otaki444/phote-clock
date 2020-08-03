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

    let month = time.getMonth(); // 月
    let date = time.getDate(); // 日

    let day = time.getDay(); // 曜日(数値で取得)
    const dayList = ['日', '月', '火', '水', '木', '金', '土'];
    const days = dayList[day]; // dayの数値からdayListの曜日を取得

    let hour = setNumber(time.getHours()); // 時
    let min  = setNumber(time.getMinutes()); // 分

    document.getElementById('day').innerHTML = `${month} 月 ${date} 日（${days}）`;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = min;
}
setInterval('showClock()', 1000);

// 背景画像の変更
const pics = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'];
let picsNum = -1;

function slide(){
    // 4枚の画像を使用するため、0~3を繰り返す処理
    if (picsNum === 3){
        picsNum = 0;
    } else {
        picsNum ++;
    }
    //「main」idのcssを更新
    document.getElementById('main').style.cssText = `background: url(${pics[picsNum]}) center; background-size: cover;`;

}
// 3秒ごとに更新
setInterval(slide, 60000);

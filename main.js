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
function slide(){
    // 背景画像をランダムで表示(0~9の10枚の中からランダムで取得)
    picsNum = Math.floor(Math.random()* 9);
    //「main」idのcssを更新
    document.getElementById('main').style.cssText = `background: url(images/image${[picsNum]}.jpg) center; background-size: cover;`;

}
// 60秒ごとに更新
setInterval(slide, 60000);

const full = document.querySelector('#fullBtn');
const release = document.querySelector('#releaseBtn');
document.getElementById('releaseBtn').style.display="none";

full.addEventListener('click', (event) => {
    // フルスクリーン表示にする
    if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
        document.getElementById('fullBtn').style.display="none";
        document.getElementById('releaseBtn').style.display="block";
    } else if (document.body.webkitRequestFullscreen) {
        // safari chrome
        document.body.webkitRequestFullscreen();
        document.getElementById('fullBtn').style.display="none";
        document.getElementById('releaseBtn').style.display="block";
    }
});

release.addEventListener('click', (event) => {
    // フルスクリーン解除
    if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById('releaseBtn').style.display="none";
        document.getElementById('fullBtn').style.display="block";
    } else if (document.webkitCancelFullScreen) {
        // safari chrome
        document.webkitCancelFullScreen();
        document.getElementById('releaseBtn').style.display="none";
        document.getElementById('fullBtn').style.display="block";
    }
});


let scroll_top = document.body.scrollTop;
let timeStamp = 0;
console.log(1)


window.addEventListener('scroll',function (e) {
    console.log(scroll(e))
    if(scroll(e)  === 1 && document.getElementsByClassName('home-header')[0].className.indexOf('close') === -1){
        document.getElementsByClassName('home-header')[0].classList.add('close');
    }
    if(scroll(e)  === -1 && document.getElementsByClassName('home-header')[0].className.indexOf('close') !== -1){
        document.getElementsByClassName('home-header')[0].classList.remove('close');
    }

    scroll_top = document.body.scrollTop;


})

// 判断滚动手势 加入防抖
function scroll( event ) {
    if(document.body.scrollTop == scroll_top || event.timeStamp - timeStamp < 50){
        return 0;
    }else { // 下滑
        if(document.body.scrollTop > scroll_top){
            return 1
        }else {
            return -1
        }
    }
}

//动画测试快
setTimeout(function () {
    var doms = document.getElementsByClassName('skill-mastery');
    for(var index = 0; index < doms.length; index ++ ){
        console.log(doms[index])
        doms[index].classList.add('active');
    }
},2000)

function flowLeft(e) {
    document.getElementsByClassName('simple-intro')[0].classList.add('flow-left');
    document.getElementsByClassName('profession-skills')[0].classList.remove('flow-right');

}
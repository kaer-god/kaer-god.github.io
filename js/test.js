let inner_dom = document.getElementById('inner');// 内层dom
let outer_dom = document.getElementById('outer');// 外层dom
let interval_index;

let speed = 0;
let start = 0;
let scroll = 0;
let pre_scroll = 0;// 上次滚动距离
let timeStamp = 0; //时间戳
let  a = 0.05;

let last_points = [{},{},{}]; // 记录最后2个点

inner_dom.addEventListener("touchstart", function (e) {
    if(interval_index) {
        clearInterval(interval_index);
    }

    start = e.changedTouches[0].pageY;
    last_points[0] = {y: 0, timeStamp: e.timeStamp}
    last_points[1] = {y:0, timeStamp: e.timeStamp}
    last_points[2] = {y:0, timeStamp: e.timeStamp}

    timeStamp = e.timeStamp;
}, false);

inner_dom.addEventListener("touchmove", function (e) {
    if(interval_index) {
        clearInterval(interval_index);
        scroll = pre_scroll;
    }
    scroll = 0;
    e.stopPropagation();
    e.preventDefault();

    scroll = start - e.changedTouches[0].pageY ;
    inner_dom.scrollTop = inner_dom.scrollTop + scroll;
    start = e.changedTouches[0].pageY;

    last_points[0] = last_points[1];
    last_points[1] = last_points[2];
    last_points[2] = {y: inner_dom.scrollTop + scroll, timeStamp: e.timeStamp};
    fun_speed();
    console.log(inner_dom.scrollTop,scroll)
}, false)

inner_dom.addEventListener("touchend", function (e) {
    // speed = (last_points[0].y - last_points[1].y)/ (last_points[0].timeStamp - last_points[1].timeStamp);
    // console.log(last_points)
    // e.stopPropagation();
    // e.preventDefault();
    // scroll = start - e.changedTouches[0].pageY ;
    // inner_dom.scrollTop = inner_dom.scrollTop + scroll;
    // start = e.changedTouches[0].pageY;
    // console.log(e.timeStamp);

    // fun_speed()
}, false);


function fun_speed (){
    pre_scroll = scroll;
    let speed_last = (last_points[1].y - last_points[2].y)/ (last_points[1].timeStamp - last_points[2].timeStamp);
    a = speed_last > 0 ? a : -a;

    let time = speed_last/a; //速度衰减时间

    // 设置定时器 10ms
    interval_index = setInterval(function () {
        console.log('time', time);
        if(time > 0){
            scroll = speed_last * 10 - (10 * a) * 5;
            time = time - 10;
            speed_last  = speed_last - 10 * a;
            inner_dom.scrollTop = inner_dom.scrollTop + scroll;
        }else {
            clearInterval(interval_index);
        }
    },40)
}
// function move (vm,dom,word_distance,reduced_distance) {
//         //startY 滑动起点Y坐标
//         //star_y_state 判断是否移动了滑动起点，true 为移动了
//         //y_dis 上次终点坐标和起点坐标的Y距离
//         //max_move_length 最大允许滑动长度
//         //tran_y 当前滑动距离
// //        time 上一次的时间戳
// //        reduced_distance 减去的滑动距离
//
//         var star_y_state = false;
//         var startY = 0;
//         var Y_dis = 0;
//         var timeStamp = 0;
//         dom.addEventListener("touchstart", function(e) {
//
//             startY = e.changedTouches[0].pageY;
//             star_y_state = true;
//             Y_dis = 0;
//             timeStamp = e.timeStamp;
//         }, false);
//         dom.addEventListener("touchmove", function(e) {
//             var data = getDistance(vm[word_distance], startY, star_y_state, Y_dis,
//                 document.getElementById('product-window-detail').offsetHeight - (!!reduced_distance ? reduced_distance : window.innerHeight), e);
//             vm[word_distance] = data.tran_y;
//             star_y_state = data.star_y_state;
//             Y_dis = data.Y_dis;
//             timeStamp = e.timeStamp;
//
//         }, false);
//         dom.addEventListener("touchend", function(e) {
//
//             startY = e.changedTouches[0].pageY;
//             star_y_state = true;
//             Y_dis = 0;
//             timeStamp = e.timeStamp;
//             console.log(e)
//         }, false);
//
// //    获取本次滚动距离
//         function getDistance(tran_y,startY, star_y_state, Y_dis, max_move_length,e){
//             var moveEndY = 0;//终点坐标
//             var Y = 0;//滚动距离
//
//             e.stopPropagation();
//             e.preventDefault();
//             if(max_move_length > 0) {
//                 moveEndY = e.changedTouches[0].pageY;
//                 if(!star_y_state) {
//                     if(startY - moveEndY + tran_y > max_move_length) {
//                         Y = -(max_move_length - tran_y);
//                     } else {
//                         Y = moveEndY - startY - Y_dis;
//                     }
//                 } else {
//                     Y = moveEndY - startY;
//                 }
//
//                 tran_y = tran_y + Y;
//
//                 if(tran_y > 0) {
//                     tran_y = 0;
//                 }
//                 if(-tran_y > max_move_length) {
//                     tran_y = -max_move_length;
//                 }
//                 var data = {
//                     tran_y       : tran_y,
//                     star_y_state : false,
//                     Y_dis        : moveEndY - startY
//                 }
//             } else {
//                 var data = {
//                     tran_y       : 0,
//                     star_y_state : false,
//                     Y_dis        : 0
//                 }
//             }
//             return data;
//         }
//
// }

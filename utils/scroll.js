class ScrollTop {
    inner:''
    outer:''
    constructor(outer,inner){
        this.inner = inner;
        this.outer = outer;
        this.init();
        console.log(2);
        return this;
    }
    init (){
        let inner_dom = this.inner || document.getElementById('inner');// 内层dom
        let outer_dom =this.outer || document.getElementById('outer');// 外层dom
        let interval_index;

        let speed = 0;
        let start = 0;
        let scroll = 0;
        let pre_scroll = 0;// 上次滚动距离
        let timeStamp = 0; //时间戳
        let a = 0.007;

        let last_points = [{}, {}, {}]; // 记录最后2个点
        inner_dom.addEventListener("touchstart", function (e) {
            if (interval_index) {
                clearInterval(interval_index);
            }

            start = e.changedTouches[0].pageY;
            last_points[0] = {y: 0, timeStamp: e.timeStamp}
            last_points[1] = {y: 0, timeStamp: e.timeStamp}
            last_points[2] = {y: 0, timeStamp: e.timeStamp}

            timeStamp = e.timeStamp;
        }, false);

        inner_dom.addEventListener("touchmove", function (e) {
            console.log('time', e.timeStamp);

            if (interval_index) {
                clearInterval(interval_index);
                scroll = pre_scroll;
            }
            scroll = 0;
            e.stopPropagation();
            e.preventDefault();

            scroll = start - e.changedTouches[0].pageY;
            inner_dom.scrollTop = inner_dom.scrollTop + scroll;
            start = e.changedTouches[0].pageY;

            last_points[0] = last_points[1];
            last_points[1] = last_points[2];
            last_points[2] = {y: inner_dom.scrollTop + scroll, timeStamp: e.timeStamp};
            fun_speed();
            console.log(inner_dom.scrollTop, scroll)
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
        function fun_speed() {
            pre_scroll = scroll;
            let speed_last = (last_points[1].y - last_points[2].y) / (last_points[1].timeStamp - last_points[2].timeStamp);
            a = speed_last > 0 ? a : -a;

            let time = speed_last / a; //速度衰减时间

            // 设置定时器 10ms
            interval_index = setInterval(function () {
                if (time > 0) {
                    scroll = speed_last * 30 - (30 * a) * 15;
                    time = time - 30;
                    speed_last = speed_last - 30 * a;
                    inner_dom.scrollTop = inner_dom.scrollTop + scroll;

                } else {
                    clearInterval(interval_index);
                }
            }, 30)
        }
    }

}
new ScrollTop();

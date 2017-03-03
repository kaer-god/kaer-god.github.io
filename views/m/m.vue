<template>
  <div id="app">
    <div>哈哈哈</div>
    <router-view class="view"></router-view>
  </div>
</template>

<style lang="stylus">
  @import './../node_modules/purecss/build/base-min.css';
  @import './../node_modules/purecss/build/grids-min.css';
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html, body {
    font-size: 14px;
    line-height: 1.3;
    color: #333;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  html .pure-g [class *="pure-u"] {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  ul, ol { list-style: none; }
  em { font-style: normal; }
  input { -webkit-appearance: none; border: 0; outline: none; background: transparent; color: inherit; }
  .text-ellipsis { display: block; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .text-line-ellipsis { overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; /*多行文本溢出,在元素上加上class="text-line-ellipsis"后,还需添加这个属性-webkit-line-clamp: 2;数字2代表两行文本,几行文本就把数字改为几 */ }
  .noscroll, .noscroll body { overflow: hidden; }
  .noscroll body { position: relative; }
</style>

<script>
//  import router from './_router';
  module.exports = {
  }
</script>

<script setup>
import {onMounted,ref} from "vue";
import CodeMirror from "codemirror";

// codemirror配置
const l = ref(null);
onMounted(() => {
  const editor=CodeMirror.fromTextArea(l.value, {
    mode: "markdown",// 模式
    theme: "solarized", // 主题
    lineWrapping: true,// 自动换行
    scrollPastEnd: true,// 允许用户将一个编辑器高度的空白区域滚动到编辑器底部的视图
    lineNumbers: true,// 显示左边行号（默认false,即不显示）
    styleActiveLine: true, // 当前行背景高亮
  });
})
</script>

<template>

  <div class="text">
    <textarea ref="l"></textarea>
  </div>

</template>

<style scoped>
.text{
  width: 500px;
  height: 500px;
}
</style>
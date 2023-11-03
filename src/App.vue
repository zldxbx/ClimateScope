<template>
  <router-view></router-view>
</template>

<script>
// 移除 AdminLogin 的引入，因为它将通过路由来管理
export default {
  name: 'App'
}
</script>

<style>
/* 您的样式保持不变 */
html, body {
  height: 100%;           /* 设置为视口的高度 */
  margin: 0;              /* 移除默认边距 */
  padding: 0;             /* 移除默认内边距 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* 确保 #app 也填满整个视口 */
  min-height: 100%;
  display: flex;
  flex-direction: column;

  /* 添加背景图像 */
  background-image: url('./assets/Background.gif'); /* 确保路径正确 */
  background-size: cover; /* 背景图像覆盖整个容器 */
  background-repeat: no-repeat; /* 背景图像不重复 */
  background-position: center center; /* 背景图像居中 */
  background-attachment: fixed; /* 背景图像在视口中固定 */
}
</style>

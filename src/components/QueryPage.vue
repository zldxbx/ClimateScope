<template>
    <div class="QueryPage">
      <back-button class="back-button" @click="GoBack">←</back-button>
      <h1>Query Page</h1>
      <!-- 注册表单的内容 -->
      <div>
      <button @click="Query1">Query1</button>
      </div>
      <div>
      <button @click="Query2">Query2</button>
      </div>
      <div>
      <button @click="Query3">Query3</button>
      </div>
      <div>
      <button @click="Query4">Query4</button>
      </div>
      <div>
      <button @click="Query4">Data retrieval</button>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'QueryPage',
    methods: {
      Query1(){
          alert('You will be redirected to query1 window！');
        //   this.$router.push({ name: 'AdminLogin' });
      },
      Query2(){
          alert('You will be redirected to query2 window！');
        //   this.$router.push({ name: 'AdminLogin' });
      },
      Query3(){
          alert('You will be redirected to query3 window！');
        //   this.$router.push({ name: 'AdminLogin' });
      },
      Query4(){
          alert('You will be redirected to query4 window！');
        //   this.$router.push({ name: 'AdminLogin' });
      },
      GoBack(){
        this.$router.push({ name: 'AdminLogin' });
    }
    }
  }
  </script>
  
  <style scoped>
  .QueryPage {
    width: 1300px;
    margin: auto;
    text-align: center;
  }
  .back-button {
  position: absolute;
  top: 0.01%;
  left: 1%;
  background-color: transparent;
  border-width: 1px;
  color: #000000;
  cursor: pointer;
  font-size: 50px; /* 可以调小这个值，如果按钮仍然太大 */
  padding: 5px 10px; /* 减少内填充，从而减小感应区域 */
  /* 如果您有设置 line-height，可能需要减小它来适应新的 padding 和 font-size */
  /* line-height: 1; */
}

.back-button:hover {
  color: #716a6a; /* 鼠标悬停时颜色变深 */
}
  button {
    width: 30%;
    height: 30%;
    padding: 10px;
    background-color: #000000; /* 黑色 */
    color: #ffffff;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #2a2828; /* 黑色 */
;
  }
  h1 {
  font-weight: bold;        /* 加粗文字 */
  font-size: 3em;           /* 增大字体大小，这里的 2em 是一个示例，您可以根据需求调整 */
  margin-bottom: 20px;      /* 增加标题与下面内容的间距 */
  color:#000000
}
  
  h3 {
    margin: 0 0 5px;
  }
  </style>
  
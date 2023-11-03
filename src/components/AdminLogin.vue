<template>
  
  <div class="AdminLogin">
    <h1>ClimateScope: Historical Weather Events Analysis Platform</h1>
    <p>
    </p>
    <div class="input-group">
      <h3>Username</h3>
      <input type="text" v-model="username" placeholder="Type in the your username...">
      <help-button class="help-button" title="If you are a tourist, do not type any character">?</help-button>
    </div>

    <div class="input-group">
      <h3>Password</h3>
      <input type="password" v-model="password" placeholder="Type in your Password...">
      <help-button class="help-button" title="If you are a tourist, do not type any character">?</help-button>
    </div>

    <button @click="handleButtonClick">Login as administrator</button>
    <a class="link-text" @click="handleLinkClick">Don't have an account?</a>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  props: {
    msg: String
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleButtonClick() {
      if(this.username!= null && this.username.length>=7){
        this.$router.push({ name: 'QueryPage' });
        return;
      }
      else{
        alert('Welcome tourist, You will be redirected to Tourist Query Page！')
        this.$router.push({ name: 'QueryPage' });
        return;
      }
        
    },
    // 移除了之前的 handleLinkClick 方法
    handleLinkClick() {
      this.$router.push({ name: 'AdminRegister' });
    }
  }
}
</script>

<style scoped>
.help-button {
  width: 40px;
  cursor: pointer; /* 更改鼠标样式为指针 */
  background-color: transparent; /* 透明背景 */
  border: none; /* 无边框 */
  font-size: 16px; /* 调整图标大小 */
  margin-left: 10px; /* 或者根据需要调整间距 */
  color: #ffffff;
}

.help-button:hover {
  color: #f8f2f2; /* 鼠标悬停时更改图标颜色 */
}

.AdminLogin {
  width: 1300px;
  margin: auto;
  text-align: center;
}

.input-group {
  margin-bottom: 15px; /* 保持输入组之间的间距 */
}

input[type="text"],
input[type="password"] {
  width: 60%;
  padding: 8px;
  margin-top: 5px;
}

button {
    width: 30%;
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

.link-text {
  display: block;
  margin-top: 10px;
  text-decoration: underline;
  color: #e8e0e0;
  cursor: pointer;
}
h1 {
  font-weight: bold;        /* 加粗文字 */
  font-size: 3em;           /* 增大字体大小，这里的 2em 是一个示例，您可以根据需求调整 */
  margin-bottom: 20px; 
  color: #000000;     /* 增加标题与下面内容的间距 */
}
h3 {
  font-weight: bold;        
  font-size: 2em;           
  margin-bottom: 10px;     
  color:#000000
  /* margin: 0 0 5px; */
}

/* 其他样式保持不变 */
</style>

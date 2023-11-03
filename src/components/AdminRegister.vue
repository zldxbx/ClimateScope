<template>
  <div class="AdminRegister">
    <back-button class="back-button" @click="GoBack">←</back-button>
    <h1>Registration  Page</h1>
    <!-- 注册表单的内容 -->
    <div class="input-group">
      <h3>Username</h3>
      <input type="text" v-model="username" placeholder="Type in your username...">
      <help-button class="help-button" title="UserName consist of 7 arbitrary characters">?</help-button>
    </div>

    <div class="input-group">
      <h3>Password</h3>
      <input type="password" v-model="password" placeholder="Type in your password...">
      <help-button class="help-button" title="Password consist of 9 arbitrary characters">?</help-button>
    </div>
    <div>
    <button @click="handleRegister">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminRegister',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleRegister() {
      if (this.username.length < 7) {
        alert('The username cannot be less than 7 chars!');
        return;
      }
      if (this.password.length <9) {
        alert('The password cannot be less than 9 chars!');
        return;
      }
      alert(`Hi ${this.username}, you have registered to our Administrator group, welcome!`);
      this.$router.push({ name: 'AdminLogin' });
    },
    GoBack(){
        this.$router.push({ name: 'AdminLogin' });
    }
  }
}
</script>

<style scoped>
.AdminRegister {
  width: 1300px;
  margin: auto;
  text-align: center;
}
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
.back-button {
  position: absolute;
  top: 0.01%;
  left: 1%;
  background-color: transparent;
  border-width: 1px;
  color: #000000;
  cursor: pointer;
  font-size: 50px;
  padding: 5px 10px;
}

.back-button:hover {
  color: #716a6a; /* 鼠标悬停时颜色变深 */
}

.input-group {
  margin-bottom: 15px;
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
    background-color: #2a2828;
  }
  h1 {
  font-weight: bold;        
  font-size: 3em;
  margin-bottom: 20px;     
  color:#000000
}

h3 {
  font-weight: bold;        
  font-size: 2em;           
  margin-bottom: 10px;     
  color:#000000
  /* margin: 0 0 5px; */
}
</style>

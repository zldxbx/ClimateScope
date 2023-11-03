<template>
    <div class="Retrieval">
      <back-button class="back-button" @click="GoBack">←</back-button>
      <h1>Retrieval  Page</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Retrieval',
    methods: {
      GoBack(){
          this.$router.push({ name: 'QueryPage' });
      }
    }
  }
  </script>
  
  <style scoped>
  .Retrieval {
    width: 1300px;
    margin: auto;
    text-align: Top;
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
  
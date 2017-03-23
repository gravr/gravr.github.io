<template>
  <div id="app">
    <router-view class="page"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
html,
body,
#app,
.page {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 480px;
  margin: 0 auto;
}
</style>

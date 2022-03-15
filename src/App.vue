<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<template class="home">
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <br>
  </header>

<div id="app">
    <router-view></router-view>
</div>
 
</template>


<script>
export default {
    data() {
        return {
            message: 'Home',
    }
    },

}
</script>

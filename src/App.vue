<template>
  <div id="nav">
  </div>
    <Header class="header"></Header>
  <router-view>
  </router-view>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  name:"App",
  components:{
    Header,
    Footer,
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0px;
  padding: 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.header{
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 999;
}
</style>

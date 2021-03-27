<template>
  <div id="app">
    <HelloWorld msg="Yaman Koudmani" bio="Yaman Koudmani is a Computer Science student who loves tinkering with new technologies. He spends most of his time working on various computer projects, whether it is tinkering with new Operating Systems or repairing old computers, he finds joy in discovering new things in the realm of technology. This is just basic text as the website is still under construction used to test spacing. Thanks for visiting."/>
    <img src="./assets/Yaman.jpg">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  border-radius: 25%;
}
</style>

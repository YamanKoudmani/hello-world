<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    bio: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  display: inline;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  margin: 50px auto 50px auto;
}
a {
  color: #42b983;
}
</style>

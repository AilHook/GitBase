<template>
  <h1>{{ mess }}</h1>
</template>
<!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->
<script>
export default {
  name: 'MainFrame',
  data () {
    return {
      mess: 'Welcome To Main Frame'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 20px;
}

a {
  color: #42b983;
}
</style>
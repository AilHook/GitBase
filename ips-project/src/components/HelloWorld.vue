<template>
  <!-- 这里router-link to="login"会把路由导航到http://localhost:8080/#/login   -->
  <router-link to="login"><h1>{{ msg }}</h1></router-link>
  
</template>
<!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome Alex'
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
  text-align: center;
}

a {
  color: skyblue;
}
</style>

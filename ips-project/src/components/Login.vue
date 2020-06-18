<template>
    <div id="Login">
        <div>
            <el-input style="width:200px;margin:10px;" v-model="userName" placeholder="请输入账号" clearable></el-input>
        </div>
        <div>
            <el-input style="width:200px;margin:10px;" placeholder="请输入密码" v-model="password" show-password clearable></el-input>
        </div>
        <div>
            <el-button type="primary" icon = "el-icon-user" style="width:200px;margin:10px;" @click="login">登录</el-button>
        </div>
        
    </div>
</template>


<script>
export default {
  data() {
    return {
      userName: '',
      password:''
    }
  },
  methods:{
    login(){
      if(this.userName === '' || this.password === '')
      {
        alert('账号或密码不能为空');
      }
      else
      {
        localStorage.setItem('password', this.password);
        localStorage.setItem('username', this.username);
        const loginUrl = '/api/login';
        var params = new URLSearchParams();
        params.append('username', this.username);
        params.append('password', this.password);
        this.axios({
          method: 'post',
          url: loginUrl,
          data: params
        })
        .then(res => {
            console.log(res)
            if (res.status === 200) {
              // console.log(res.code)
              if (res.data.code === 2) {
                alert('账号或密码错误');
                this.username = ''
                this.password = ''
              } else if (res.data.userInfo.username === 'admin') {
                this.$router.push('/main')
              } else {
                alert('登录成功');
                
              }
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style>

</style>
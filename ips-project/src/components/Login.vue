<template>
    <div id="Login">
        <div>
            <el-input style="width:200px;margin:10px;" v-model="userName" placeholder="请输入账号" clearable></el-input>
        </div>
        <div>
            <el-input style="width:200px;margin:10px;" placeholder="请输入密码" v-model="password" show-password clearable></el-input>
        </div>
        <div>
            <!-- <router-link :to="{name:'MainFrame'}"><el-button type="primary" icon = "el-icon-user" style="width:200px;margin:10px;" @click="login">登录</el-button></router-link> -->
            <el-button type="primary" icon = "el-icon-user" style="width:200px;margin:10px;" @click="login">登录</el-button>
        </div>
    </div>
</template>


<script>

import axios from 'axios';
import router from '../router'

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
        localStorage.setItem('username', this.userName);
        const loginUrl = 'http://localhost:8081/api/login';
        var params = new URLSearchParams();
        params.append('username', this.userName);
        params.append('password', this.password);
        axios({
          method: 'post',
          url: loginUrl,
          data: params
        })
        .then(res => {
            // console.log(res)
            if (res.data.status === 200) {
              console.log(res.data)
              if (res.data.code !== 1) {
                alert('账号或密码错误');
                this.userName = ''
                this.password = ''
              } else {
                // alert(res.data.content.id+"\n"+res.data.content.name+"\n"+res.data.content.password+"\n"+res.data.content.profession);
                router.push({path:'/MainFrame'});
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
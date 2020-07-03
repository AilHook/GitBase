<template>
    <div id="login">
      <div>
        <h1 style="margin:5px;">IPS</h1>
      </div>
      <div>
          <el-input style="width:200px;margin:10px;" v-model="userName" placeholder="Account..." clearable></el-input>
      </div>
      <div>
          <el-input style="width:200px;margin:10px;" placeholder="Password..." v-model="password" show-password clearable></el-input>
      </div>
      <div>
          <!-- <router-link :to="{name:'MainFrame'}"><el-button type="primary" icon = "el-icon-user" style="width:200px;margin:10px;" @click="login">登录</el-button></router-link> -->
          <el-button type="primary" icon = "el-icon-user" style="width:200px;margin:10px; font-size: 16px; font-weight: bold;  font-family: 'Courier New', Courier, monospace;"  @click="login" >Sign in</el-button>
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
        this.$message.error('账号或密码不能为空');
        // alert('账号或密码不能为空');
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
                this.$message.error('账号或密码错误');
                this.userName = ''
                this.password = ''
              } else {
                this.$message({message: '登录成功', type: 'success'});
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
#login
{
  background: lightskyblue;
  width: 300px;
  height: 220px;
  padding: 30px;
  /* display: table-cell; */
  margin: 300px auto;
  border-radius:5px;
  opacity: 0.8;
  /* vertical-align: middle; */
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}
h1
{
  text-align: center;
  color: white;
  font-size: 20px;
  
}

</style>
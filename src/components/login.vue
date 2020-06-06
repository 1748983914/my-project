<template>


  <body class="gray-bg">

  <div class="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>

        <h1 class="logo-name">e</h1>

      </div>
      <h3>欢迎登录党建信息管理平台</h3>

      <form class="m-t" role="form" action="">
        <div class="form-group">
          <input type="text" v-model="username" class="form-control" placeholder="用户名">
        </div>
        <div class="form-group">
          <input type="password" v-model="password" class="form-control" placeholder="密码">
        </div>
        <div><label> <input type="radio" checked="checked"  v-model="optionsRadios" value="1" id="optionsRadios1" name="optionsRadios">困难党员管理员
        </label>
          <label> <input type="radio" value="0" v-model="optionsRadios" id="optionsRadios2" name="optionsRadios"> 上级管理员 </label></div>

        <button @click="list1($event)" class="btn btn-primary block full-width m-b demo1">

          <strong>登录</strong></button>

        <a href="#">
          <small>忘记密码?</small>
        </a>
        <p class="text-muted text-center">
          <small>还没有账号?</small>
        </p>
        <a class="btn btn-sm btn-white btn-block" href="register.html">创建一个帐户</a>
      </form>

    </div>
  </div>


  </body>

</template>

<script>

  import {aaa} from '../assets/va'

  export default {
    name: "login",
    data() {
      return {
        id: '',
        username: '',
        password: '',
        optionsRadios: '',
      }
    },
    created() {

    },
    methods: {
      list1(event) {
        event.preventDefault();
        this.$axios.get('/login/login', {
          params: {

            username: this.username,
            password: this.password,
            optionsRadios: this.optionsRadios
          }

        }).then((response) => {
          this.id = response.data.id;
          if (response.data) {
            console.log(response.data);
            this.id = response.data.id;
            if(this.optionsRadios=='1'){

              this.$router.push({
                name: 'success',
                query: {
                  id: this.id
                }
              })
            }
            if(this.optionsRadios=='0'){

              this.$router.push({
                name: 'success2',
                query: {
                  id: this.id
                }
              })
            }

          } else {
            aaa();
          }

        })

      },


    }
  }
</script>

<style scoped>

</style>

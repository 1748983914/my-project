<template id="leftBox">

  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element">
          <!--  <img alt="image" class="rounded-circle" src="/static/img/profile_small.jpg"/>-->
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              <span class="block m-t-xs font-bold">困难党员管理员</span>
             <!-- <span class="text-muted text-xs block"> <b class="caret"></b></span>-->
            </a>
           <!-- <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a class="dropdown-item" href="profile.html">个人信息</a></li>
              <li><a class="dropdown-item" href="contacts.html">好友</a></li>
              <li><a class="dropdown-item" href="mailbox.html">信箱</a></li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="login.html">登出</a></li>
            </ul>-->
          </div>
          <div class="logo-element">
            IN+
          </div>
        </li>
        <li >
          <a href="#" class="active"><i class="fa fa-table"></i> <span class="nav-label">困难党员管理</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level ">

            <li class="active" ><a @click="a">困难党员上报</a></li>
            <li class="active" ><a @click="b">领导入户慰问</a></li>
          </ul>
        </li>
<!--        <li >
          <a href="#" ><i class="fa fa-sitemap"></i> <span class="nav-label">菜单 </span><span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="#">三级菜单 <span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li>
                  <a href="#">三级菜单</a>
                </li>
                <li>
                  <a href="#">三级菜单</a>
                </li>
                <li>
                  <a href="#">三级菜单</a>
                </li>

              </ul>
            </li>
            <li><a href="#">二级菜单</a></li>
            <li>
              <a href="#">二级菜单</a></li>
            <li>
              <a href="#">二级菜单</a></li>
          </ul>
        </li>-->
      </ul>

    </div>
  </nav>
</template>

<script>
    export default {
        name: "leftBox",
      data(){
          return{
            id:''
          }

      },
      created() {
          this.id=this.$route.query.id;
/*
        console.log(this.$route.query);
        console.log(this.$route.query);
        console.log(this.$route.query);*/
      },
      methods:{
          a(el){
            el.preventDefault();
            this.$router.push({
              path: '/success/mainbox',
              query: {
                id: this.id
              }
            })
          },
        b(el){
          el.preventDefault();
          this.$router.push({
            path: '/success/mainbox2',
            query: {
              id: this.id
            }
          })
        },

      }
    }
</script>

<style>

</style>

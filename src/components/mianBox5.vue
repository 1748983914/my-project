<template id="mainBox">
  <div>
    <div class="wrapper wrapper-content animated fadeInRight">

      <div class="row">
        <div class="col-lg-12">
          <div class="ibox ">
            <div class="ibox-title">
              <h5>困难党员申报列表</h5>

              <div class="ibox-tools">
                <a class="collapse-link">
                  <i class="fa fa-chevron-up"></i>
                </a>
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i class="fa fa-wrench"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                  <li><a class="dropdown-item" data-toggle="modal" data-target="#myModal" @click="openAdd()">添加</a>
                  </li>

                </ul>
                <a class="close-link">
                  <i class="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div>
              <!--添加领导信息-->
              <div class="modal inmodal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" @click="close()"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                      </button>
                      <h4 class="modal-title"><a :class="addselect">添加领导信息</a><a :class="updataselect">修改领导信息</a></h4>
                    </div>

                    <div class="modal-body  ">


                      <div class="form-group row">
                        <label class="col-lg-2 col-form-label">姓名</label>
                        <div class="form-inline">
                          &nbsp; &nbsp; &nbsp; <input type="text" placeholder="请输入姓名" maxlength="100" v-model="name"
                                                      class="form-control">
                        </div>
                      </div>
                      <input v-model="id" type="hidden">
                      <div class="form-group row"><label class="col-lg-2 col-form-label">手机号码</label>

                        <div class="col-lg-10"><input type="text" placeholder="请输入手机号码" maxlength="100" v-model="number"
                                                      class="form-control">
                        </div>
                      </div>

                      <div class="form-group row"><label class="col-lg-2 col-form-label">部门</label>

                        <div class="col-lg-10"><input type="radio" v-model="depart" value="事业部">事业部&nbsp;&nbsp;&nbsp;
                          <input type="radio" v-model="depart" value="管理部">管理部&nbsp;&nbsp;&nbsp;
                          <input type="radio" v-model="depart" value="业务部">业务部&nbsp;&nbsp;&nbsp;
                          <input type="radio" v-model="depart" value="财务部">财务部&nbsp;&nbsp;&nbsp;
                          <input type="radio" v-model="depart" value="综合管理部">综合管理部&nbsp;&nbsp;&nbsp;
                          <input type="radio" v-model="depart" value="综合业务部">综合业务部&nbsp;&nbsp;&nbsp;
                        </div>
                      </div>


                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-white" data-dismiss="modal" @click="close()">关闭</button>
                      <button type="button" class="btn btn-primary" data-animation="bounceOutDown" :data-dismiss="text"
                              @click="add11()">保存
                      </button>

                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div class="ibox-content">
              <form role="form" class="form-inline">
                <div class="form-group">
                  <input v-model="selectname" type="input" placeholder="请输入需要查找的姓名"
                         class="form-control">

                </div>
              </form>
              <table class="footable table table-stripped toggle-arrow-tiny">
                <thead>
                <tr>

                  <th style="display: none">id</th>
                  <th>姓名</th>
                  <th>电话</th>
                  <th>部门</th>
                  <th>操作</th>

                </tr>
                </thead>
                <tbody>
                <tr v-for="item in list" :key="item.id">

                  <td style="display: none">{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.number}}</td>
                  <td>{{item.depart}}</td>
                  <td style="width: 300px;">

                    <a class="btn btn-primary btn-xs" style="color: white" data-toggle="modal"
                       data-target="#myModal" @click="updata1(item.id)">修改</a>
                    <a class="btn btn-danger btn-xs" style="color: white" @click="del(item.id)">删除</a>
                  </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td colspan="10">

                    <zpagenav v-bind:page="page" v-bind:page-size="pageSize" v-bind:total="total"
                              v-bind:max-page="maxPage" v-on:pagehandler="pageHandler">
                    </zpagenav>
                  </td>
                </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {bbb} from '../assets/va'
  // axios.defaults.baseURL = 'http://127.0.0.1:8080';
  export default {
    name: "mianBox",
    data() {
      return {
        userid: '',
        year: '',
        name: '',
        sex: '男',
        birthday: '',
        joinparty: '',
        depart: '',
        income: '',
        introduction: '',
        statusname: '',
        number: '',
        text: '',

        list: [],

        page: 1,  //显示的是哪一页
        pageSize: 9, //每一页显示的数据条数
        total: null, //记录总数
        maxPage: null, //最大页数


        list1: [],
        n: "",
        page1: 1,  //显示的是哪一页
        pageSize1: 9, //每一页显示的数据条数
        total1: null, //记录总数
        maxPage1: null, //最大页数

        addselect: 'show',
        updataselect: 'hidden',

        selectname: '', //查询的名字
        flag: ''
      }
    },
    created() {
      this.pageHandler(1, null, "lishi");
      this.userid = this.$route.query.id;

    },
    watch: {
      'selectname': function name() {
        this.pageHandler(1, this.selectname);
      }
    },
    methods: {

      //分页查询
      pageHandler(page, name) {
        this.page = page;
        this.$axios.get('/party/getAllParty', {
          params: {
            page: this.page,
            pageSize: this.pageSize,
            name: name
          }
        })
          .then((response) => {
            console.log(response);
            this.list = response.data.list;
            this.total = response.data.total;
            this.maxPage = response.data.pages;
            this.pageSize = response.data.pageSize;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      checkvalue(value) {
        this.depart = '';
        this.depart = value;
      },
      openAdd() {
        this.addselect = 'show';
        this.updataselect = 'hidden';
      },

      del(id) {
        this.$swal({
          title: "你确定？",
          text: "你将删除此领导信息！",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的，删除",
          closeOnConfirm: false
        }).then((res) => {
          if (res.value) {
            this.$axios.get('/party/deleteParty', {
              params: {id: id}
            })
              .then((response) => {
                this.pageHandler(1, this.selectname)
                swal("删除", "此领导信息已被删除。", "success");
              })
              .catch(function (error) {
                console.log(error);
              })
          }
        })

      },
      add11() {
        this.text = '';
        if (this.isEmpty(this.name)) {
          swal("输入非法",
            "姓名不能为空",
            "error"
          );

        } else if (this.isEmpty(this.number)) {
          swal(
            "输入非法",
            "手机号码不能为空",
            "error"
          );

        }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.number))) {
          swal(
            "输入非法",
            "请输入正确手机号码",
            "error"
          );
        }else if (this.isEmpty(this.depart)) {
          swal("输入非法",
            "部门名称不能为空",
            "error"
          );
        } else {

          this.text = "modal";
          this.$axios.get('/party/updataOraddParty', {
            params: {
              userid: this.userid,
              id: this.id,
              name: this.name,
              depart: this.depart,
              number: this.number
            }
          })
            .then((response) => {
              this.close();
              this.pageHandler(this.page, this.selectname)
              if (response.data === "addsuccess") {
                swal("添加", "困难党员添加成功", "success");
              } else {
                swal("修改", "困难党员修改成功", "success");

              }

            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      add22(id) {
        this.$swal({
          title: "你确定？",
          text: "你将此困难党员信息提交",
          showCancelButton: true,
          confirmButtonColor: "#1ab394",
          confirmButtonText: '是的，提交',
          showLoaderOnConfirm: true
        }).then((result) => {
          if (result.value) {
            this.$axios.get('/info/submit', {
              params: {

                id: id,

              }
            })
              .then((response) => {
                this.pageHandler(this.page, this.statusname, this.flag)
                swal("通过", "此困难党员信息已提交申请", "success");
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        });
      }
      ,
      updata1(id) {
        this.addselect = 'hidden';
        this.updataselect = 'show';
        for (var i = 0; i < this.list.length; i++) {

          if (this.list[i].id === id) {

            this.id = this.list[i].id;
            this.name = this.list[i].name;
            this.depart = this.list[i].depart;
            this.number = this.list[i].number;
          }

        }
      },
      close() {
        this.id = '',
          this.name = '',

          this.depart = '',
          this.number = ''

      },
      userIsEmpty(year, name, sex, birthday, joinparty, depart, statusname, income, introduction) {
        var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        if (this.isEmpty(year)) {
          swal({
            title: "输入非法",
            text: "年份不可为空"
          });
          return true;
        } else if (this.isEmpty(name)) {
          swal({
            title: "输入非法",
            text: "姓名不能为空"
          });
          return true;
        } else if (this.isEmpty(sex)) {
          swal({
            title: "输入非法",
            text: "性别不能为空"
          });
          return true;
        } else if (this.isEmpty(birthday)) {
          swal({
            title: "输入非法",
            text: "出生日期不能为空"
          });
          return true;
        } else if (this.isEmpty(joinparty)) {
          swal({
            title: "输入非法",
            text: "入党日期不能为空"
          });
          return true;
        } else if (this.isEmpty(depart)) {
          swal({
            title: "输入非法",
            text: "单位不能为空"
          });
          return true;
        } else if (this.isEmpty(income)) {
          swal({
            title: "输入非法",
            text: "收入不能为空"
          });
          return true;
        } else if (!reg.test(income)) {
          swal({
            title: "输入非法",
            text: "请输入小数点后两位的数字"
          });
          this.income = "";
          return true;
        } else if (this.isEmpty(introduction)) {
          swal({
            title: "输入非法",
            text: "困难情况说明不能为空"
          });
          return true;
        }
        return false;
      },
      isEmpty(obj) {
        if (typeof obj == "undefined" || obj == null || obj == "") {
          return true;
        } else {
          return false;
        }
      }


    }

  }


</script>

<style scoped>
  tbody > tr:hover {
    background-color: #DEDEDE;
    color: #fff;

  }

  tbody > tr.checked {
    background-color: #DEDEDE;
    color: #fff;

  }

  .hidden {
    display: none;
  }

  .show {
    display: block;
  }
</style>

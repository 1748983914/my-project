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
                  <li><a class="dropdown-item" data-toggle="modal" data-target="#myModal" @click="getYear()">添加</a>
                  </li>

                </ul>
                <a class="close-link">
                  <i class="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div>
              <!--添加困难党员-->
              <div class="modal inmodal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" @click="close()"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                      </button>
                      <h4 class="modal-title"><a :class="addselect">添加困难党员</a><a :class="updataselect">修改困难党员</a></h4>
                    </div>

                    <div class="modal-body  ">

                      <div class="form-group row"><label class="col-lg-2 col-form-label">年份</label>

                        <div class="col-lg-10"><input type="text" placeholder="请输入年份" v-model="year"
                                                      class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-lg-2 col-form-label">姓名</label>
                        <div class="form-inline">
                          &nbsp; &nbsp; &nbsp; <input type="text" placeholder="请输入姓名" maxlength="100" v-model="name"
                                                      class="form-control">
                          &nbsp; &nbsp; &nbsp; &nbsp;
                          <button class="btn btn-primary" data-toggle="modal" data-target="#myModal2"
                                  @click="pageHandler1(1)">添加
                          </button>
                        </div>
                      </div>
                      <div class="form-group row"><label class="col-lg-2 col-form-label">性别</label>

                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label> <input type="radio" checked="checked"
                                                                                v-model="sex" value="男"
                                                                                id="optionsRadios1"
                                                                                name="optionsRadios">男
                        </label>
                          <label> <input type="radio" value="女" v-model="sex" id="optionsRadios2" name="optionsRadios">
                            女 </label></div>

                      </div>
                      <div class="form-group row"><label class="col-lg-2 col-form-label">出生年月</label>

                        <div class="col-lg-10"><input type="date" placeholder="请输入出生年月" v-model="birthday"
                                                      class="form-control">
                        </div>
                      </div>
                      <div class="form-group row"><label class="col-lg-2 col-form-label">入党时间</label>

                        <div class="col-lg-10"><input type="date" placeholder="请输入党时间" v-model="joinparty"
                                                      class="form-control">
                        </div>
                      </div>
                      <div class="form-group row"><label class="col-lg-2 col-form-label">工作单位</label>

                        <div class="col-lg-10"><input type="text" placeholder="请输入工作单位" maxlength="100" v-model="depart"
                                                      class="form-control">
                        </div>
                      </div>
                      <div class="form-group row"><label class="col-lg-2 col-form-label">家庭每月人均收入</label>

                        <div class="col-lg-10"><input type="text" placeholder="请输入家庭每月人均收入" maxlength="100"
                                                      v-model="income"
                                                      class="form-control">

                        </div>
                      </div>
                      <div class="form-group row"><label class="col-lg-2 col-form-label">困难情况说明</label>

                        <div class="col-lg-10"><input type="text" v-model="introduction" maxlength="200"
                                                      placeholder="请输入困难情况说明" class="form-control">
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


              <div class="modal inmodal" id="myModal2" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content animated bounceInRight">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span
                        aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                      </button>
                      <h4 class="modal-title"><a>选择困难党员</a></h4>
                    </div>
                    <div class="modal-body form-inline ">
                      <table class="footable table table-stripped toggle-arrow-tiny">
                        <thead>
                        <tr>
                          <th style="display: none">id</th>
                          <th>姓名</th>
                          <th>性别</th>
                          <th>出生年月</th>
                          <th>入党时间</th>
                          <th>单位</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index ) in list1" :class="{checked:index==n}" @click="changeList(index)"
                            :key="item.id">
                          <td style="display: none">{{item.id}}</td>
                          <td>{{item.name}}</td>
                          <td>{{item.sex}}</td>
                          <td>{{item.birthday}}</td>
                          <td>{{item.joinpartytime}}</td>
                          <td>{{item.depart}}</td>

                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                          <td colspan="6">
                            <zpagenav v-bind:page="page1" v-bind:page-size="pageSize1" v-bind:total="total1"
                                      v-bind:max-page="maxPage1" v-on:pagehandler="pageHandler1">
                            </zpagenav>
                          </td>
                        </tr>
                        </tfoot>
                      </table>


                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal"
                              @click="select()">确定
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="ibox-content">
              <!-- <div class="form-group  row"><label class="col-sm-2 col-form-label">正常</label>

                 <div class="col-sm-10"><input type="text" class="form-control"></div>
               </div>-->
              <form role="form" class="form-inline">
                <div class="form-group">
                  <a class="btn btn-primary" style="color: white" @click="pageHandler(1,selectname,null)">全部</a>&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-primary" style="color: white"
                     @click="pageHandler(1,selectname,'daishenpi')">查询待审批</a>&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-primary" style="color: white" @click="pageHandler(1,selectname,'tongguo' )">查询通过</a>&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-primary" style="color: white" @click="pageHandler(1,selectname,'caogao' )">查询草稿</a>&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-primary" style="color: white" @click="pageHandler(1,selectname,'tuihui')">查询退回</a>&nbsp;&nbsp;&nbsp;
                  <a class="btn btn-primary" style="color: white"
                     @click="pageHandler(1,selectname,'yiwancheng')">查询已完成</a>&nbsp;&nbsp;&nbsp;
                  <!-- <label for="exampleInputEmail1" class="col-sm-2 col-form-label">电子邮件地址</label>-->
                  <input v-model="selectname" type="input" placeholder="请输入需要查找的姓名"
                         class="form-control">

                </div>
              </form>
              <table class="footable table table-stripped toggle-arrow-tiny">
                <thead>
                <tr>

                  <th style="display: none">id</th>
                  <th>年份</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>出生年月</th>
                  <th>入党时间</th>
                  <th>工作单位</th>
                  <th>家庭每月人均收入</th>
                  <th>困难情况说明</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <!--
                                <tr v-for="(item,index ) in list"  :class="{checked:index==n}" @click="changeList(index)" :key="item.id">
                -->
                <tr v-for="item in list" :key="item.id">

                  <td style="display: none">{{item.id}}</td>
                  <td>{{item.year}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.sex}}</td>
                  <td>{{item.birthday}}</td>
                  <td>{{item.joinparty}}</td>
                  <td>{{item.depart}}</td>
                  <td>{{item.income}}</td>
                  <td>{{item.introduction}}</td>
                  <td>{{item.statusname}}</td>
                  <td style="width: 300px;">
                    <a v-if="item.statusname==='草稿'||item.statusname==='退回'" class="btn btn-primary btn-xs" style="color: white"
                       @click="add22(item.id)">提交上级审批</a>
                    <a v-if="item.statusname==='草稿'||item.statusname==='退回'" class="btn btn-primary btn-xs" style="color: white"
                       data-toggle="modal"
                       data-target="#myModal" @click="updata1(item.id)">修改</a>
                    <!--v-if="item.statusname==='退回'"-->
                    <a v-if="item.statusname==='草稿'||item.statusname==='退回'" class="btn btn-danger btn-xs" style="color: white"
                       @click="del(item.id)">删除</a>


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


              <!--    <div>
                    <div class="modal inmodal" id="myModal1" tabindex="-1" role="dialog" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content animated bounceInRight">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"
                                    @click="close()"><span
                              aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title"><a>修改</a></h4>
                          </div>
                          <div class="modal-body form-inline">

                            <br><br>
                            <div class="col-sm-10 form-group"><label> 年月:&nbsp&nbsp<input type="month"

                                                                                          class="form-control"
                                                                                          v-model="year"></label>
                            </div>


                            <br><br>

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-white" data-dismiss="modal" @click="">关闭</button>
                            <button type="button" class="btn btn-primary"  :data-dismiss="modal"
                                    @click="update11()">保存更改
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>-->
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

        addselect: '',
        updataselect: '',

        selectname: '', //查询的名字
        flag: ''
      }
    },
    created() {
      this.pageHandler(1);
      this.userid = this.$route.query.id;

    },
    watch: {
      'selectname': function name() {
        this.pageHandler(1, this.selectname, this.flag);
      }
    },
    methods: {
      //获得当前年
      getYear() {
        this.addselect = 'show';
        this.updataselect = 'hidden';
        this.$axios.get('/info/time')
          .then((response) => {
            console.log(response);
            this.year = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      //分页查询
      pageHandler(page, name, flag) {
        this.page = page;
        this.flag = flag
        this.$axios.get('/info/info', {
          params: {
            page: this.page,
            pageSize: this.pageSize,
            name: name,
            flag: this.flag
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
      //分页查询 所有党员的信息
      pageHandler1(page1) {
        this.page1 = page1;
        this.$axios.get('/info/memberinfo', {
          params: {
            page: this.page1,
            pageSize: this.pageSize1
          }
        })
          .then((response) => {
            console.log(response);
            this.list1 = response.data.list;
            this.total1 = response.data.total;
            this.maxPage1 = response.data.pages;
            this.pageSize1 = response.data.pageSize;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      changeList(index) {
        this.n = index;

      },
      select() {
        console.log(this.list1[this.n].name);
        this.name = this.list1[this.n].name;
        this.sex = this.list1[this.n].sex;
        this.birthday = this.list1[this.n].birthday;
        this.joinparty = this.list1[this.n].joinpartytime;
        this.depart = this.list1[this.n].depart;
      },
      del(id) {
        this.$swal({
          title: "你确定？",
          text: "你将删除此困难党员信息！",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的，删除",
          closeOnConfirm: false
        }).then((res) => {
          if (res.value) {
            this.$axios.get('/info/delinfo', {
              params: {id: id}
            })
              .then((response) => {
                this.pageHandler(this.page, this.statusname, this.flag)
                swal("删除", "此困难党员信息已被删除。", "success");
              })
              .catch(function (error) {
                console.log(error);
              })
          }
        })

      },
      add11() {
        this.text = "";
        if (this.isEmpty(this.year)) {
          swal("输入非法",
            "年份不能为空",
            "error"
          );
          return
        }
        if (this.isEmpty(this.name)) {
          swal("输入非法",
            "姓名不能为空",
            "error"
          );
          return
        }
        if (this.isEmpty(this.sex)) {
          swal("输入非法",
            "性别不能为空",
            "error"
          );
          return
        }
        if (this.isEmpty(this.birthday)) {
          swal("输入非法",
            "出生年月不能为空",
            "error"
          );
          return
        }
        if (this.isEmpty(this.joinparty)) {
          swal("输入非法",
            "入党日期不能为空",
            "error"
          );
          return
        }
        if (this.isEmpty(this.depart)) {
          swal("输入非法",
            "部门名称不能为空",
            "error"
          );
          return
        }
        var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        if (this.isEmpty(this.income)) {
          swal("输入非法",
            "收入不能为空",
            "error"
          );
          return
        }else if (!reg.test(this.income)) {
          swal(
             "输入非法",
             "收入请输入小数点后两位的数字",
            "error"
          );
          this.income = "";
          return ;
        }
        if (this.isEmpty(this.introduction)) {
          swal("输入非法",
            "困难情况说明不能为空",
            "error"
          );
          return
        }

        this.text = "modal";
        this.$axios.get('/info/addinfo', {
          params: {
            userid: this.userid,
            id: this.id,
            year: this.year,
            birthday: this.birthday,
            name: this.name,
            sex: this.sex,
            joinparty: this.joinparty,
            depart: this.depart,
            income: this.income,
            introduction: this.introduction,
            statusname: '草稿'
          }
        })
          .then((response) => {
            this.close();
            this.pageHandler(this.page, this.statusname, this.flag)
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
      ,
      add22(id) {
        this.$swal({
          title: "你确定？",
          text: "你将此困难党员信息提交上级审批",
          showCancelButton: true,
          confirmButtonColor: "#1ab394",
          confirmButtonText: '是的，提交上级审批',
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
                swal("提交上级审批", "此困难党员信息提交上级审批", "success");
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
            this.year = this.list[i].year;
            this.id = this.list[i].id;
            this.name = this.list[i].name;
            this.sex = this.list[i].sex;
            this.birthday = this.list[i].birthday;
            this.joinparty = this.list[i].joinparty;
            this.depart = this.list[i].depart;
            this.income = this.list[i].income;
            this.introduction = this.list[i].introduction;
          }

        }
      }
      ,
      close() {
        this.id = '',
          this.year = '',
          this.name = '',
          this.sex = '男',
          this.birthday = '',
          this.joinparty = '',
          this.depart = '',
          this.income = '',
          this.introduction = '',


          this.statusname = ''
      }
      ,
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
      }
      ,
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

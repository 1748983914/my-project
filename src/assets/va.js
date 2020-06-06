


function aaa () {
  swal({
    title: "输入非法",
    text:"请检查用户名或密码",
    ty
  });
}

function bbb(id){

  swal({
    title: "你确定？",
    text: "你将无法恢复这个虚构的文件！",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是的，删除",
    closeOnConfirm: false
  }, function (id) {
    $.ajax({
      url: "http://localhost:8080/info/delinfo",
      data: {id:id},
      dataType: "json",
      type: "post",
      success: function (res) {

      }
  });

    swal("删除", "您的虚构文件已被删除。", "success");

  });

}

function ccc(id){

  var flag="0";
  swal({
    title: "你确定？",
    text: "你将为此困难党员删除此慰问领导！",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "是的，删除",
    closeOnConfirm: false
  }, function () {
    $.ajax({
      url: "http://localhost:8080/condolence/deleteleader",
      data: {id:id},

      type: "post",
      success: function (res) {

        swal("删除", "此困难党员的此慰问领导已被删除。", "success");
        flag="1";
      }
    });



  });
return flag;
}
export {
  aaa,
  bbb,
  ccc
}


var descriptor = {
  "blocks": [
    ["R", "%s の温度は？", "temp", "192.168.1.3"],
    [" ", "%s と伝える", "tell", "test"]
  ],
  "menus": {}
};

var ext = {
  temp: function(ip, callback) {
    var acurl = 'http://' + ip + ':1880/temp'
    window.alert(acurl);
    $.ajax({
          url: acurl,
          dataType: 'html',
          success: function(data) {
              callback(data);
          },
          error:function(data){
              callback("error");
          }
    });
  },
  tell: function(t){
    window.alert(t);
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


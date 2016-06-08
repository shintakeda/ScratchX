var descriptor = {
  "blocks": [
    ["r", "%s の温度は？", "temp", "192.168.1.3"],
    [" ", "%s と伝える", "tell", "test"]
  ],
  "menus": {}
};

var ext = {
  temp: function(ip, callback) {
    $.ajax({
//          url: 'http://' + ip + ':1880/temp',
          url:'http://localhost/test.html',
          type:'GET',
          dataType: 'text',
          success: function(data) {
              callback(JSON.stringify(data));
          },
          error:function(data){
              callback(JSON.stringify(data));
          }
    });
  },
  tell: function(t){
    window.alert(t);
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


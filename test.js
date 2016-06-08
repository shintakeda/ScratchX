var descriptor = {
  "blocks": [
    ["R", "%s の温度は？", "temp", "192.168.1.3"],
    [" ", "%s と伝える", "tell", "test"]
  ],
  "menus": {}
};

var ext = {
  temp: function(ip, callback) {
    $.ajax({
          url: 'http://' + ip + ':1880/temp',
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


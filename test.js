var descriptor = {
  "blocks": [
    ["R", "%s の温度は？", "temp", "168.204.180.252"]
  ],
  "menus": {}
};

var ext = {
  temp: function(ip, callback) {
    $.ajax({
          url:'http://'+ip+'/temp?callback=temp',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback($(':hidden[name="temperature"]').val());
          }
    });
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


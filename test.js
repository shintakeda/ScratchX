var descriptor = {
  "blocks": [
    ["R", "%s の明かりは？", "light", "160.204.91.132"]
  ],
  "menus": {}
};

var ext = {
  light: function(ip, callback) {
    $.ajax({
          url:'http://'+ip+':1880/light?callback=light',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback($(':hidden[name="light"]').val());
          }
    });
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


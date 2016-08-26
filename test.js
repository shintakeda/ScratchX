var descriptor = {
  "blocks": [
    ["R", "%s の温度は？", "temp", "160.204.180.252"],
    ["R", "%s のCO2濃度は？", "co2", "160.204.180.129"]
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
  },
  co2: function(ip, callback) {
    $.ajax({
          url:'http://'+ip+'/co2?callback=co2',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback($(':hidden[name="co2"]').val());
          }
    });
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


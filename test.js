var descriptor = {
  "blocks": [
    ["R", "%s の温度は？", "temp", "192.168.1.3"],
    [" ", "%s と伝える", "tell", "test"],
    ['R', '東京の気温', 'temp_of_tokyo']
  ],
  "menus": {}
};

var ext = {
  temp: function(ip, callback) {
    $.ajax({
          url: 'http://192.168.1.3:1880/temp',
          type:'GET',
          dataType: 'json',
          success: function(data) {
              callback(data.temp);
          },
          error:function(data){
              callback(data.temp);
          }
    });
  },
  tell: function(t){
    window.alert(t);
  },
  temp_of_tokyo:function(callback) {
    var param = {
      q: "tokyo",
      appid: "ddd98c6a715c25fd4a3b45e64c34bb10",
      units: "metric"
    };
    // 気象情報 API にアクセス
    $.get("http://api.openweathermap.org/data/2.5/weather", param, function(data) {
      callback(data.main.temp);
    });
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


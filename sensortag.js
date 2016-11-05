var descriptor = {
  "blocks": [
    /* 温度 */
    ["R", "%s の温度", "temp", "160.204.91.132"],
    /* 湿度 */
    ["R", "%s の湿度", "humi", "160.204.91.132"],
    /* 気圧 */
    ["R", "%s の気圧", "baro", "160.204.91.132"],
    /* 加速度 */
    ["w", "%s の加速度を取得", "acce", "160.204.91.132"],
    ["R", "x座標の加速度", "accex"],
    ["R", "y座標の加速度", "accey"],
    ["R", "z座標の加速度", "accez"],
    /* 磁気 */
    ["w", "%s の磁気を取得", "megn", "160.204.91.132"],
    ["R", "x座標の磁気", "megnx"],
    ["R", "y座標の磁気", "megny"],
    ["R", "z座標の磁気", "megnz"],
    /* 角速度 */
    ["w", "%s の角速度を取得", "gyro", "160.204.91.132"],
    ["R", "x座標の角速度", "gyrox"],
    ["R", "y座標の角速度", "gyroy"],
    ["R", "z座標の角速度", "gyroz"],
    /* 照度 */
    ["R", "%s の照度", "light", "160.204.91.132"]
  ],
  "menus": {}
};

var ext = {
  /* 温度 */
  temp: function(ip, callback) {
    $.ajax({
          url:'http://'+ip+':1880/temp?callback=temp',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback($(':hidden[name="temp"]').val());
          }
    });
  },
  /* 湿度 */
  humi: function(ip, callback) {
    $.ajax({
          url:'http://'+ip+':1880/humi?callback=humi',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback($(':hidden[name="humi"]').val());
          }
    });
  },
  /* 気圧 */
  baro: function(ip, callback) {
    $.ajax({
          url:'http://'+ip+':1880/baro?callback=baro',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback($(':hidden[name="baro"]').val());
          }
    });
  },
  /* 加速度 */
  acce: function(ip,callback) {
    $.ajax({
          url:'http://'+ip+':1880/acce?callback=acce',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback('');
          }
    });
  },
  accex: function(callback) {
    callback($(':hidden[name="accex"]').val());
  },
  accey: function(callback) {
    callback($(':hidden[name="accey"]').val());
  },
  accez: function(callback) {
    callback($(':hidden[name="accez"]').val());
  },
  /* 磁気 */
  megn: function(ip,callback) {
    $.ajax({
          url:'http://'+ip+':1880/megn?callback=megn',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback('');
          }
    });
  },
  megnx: function(callback) {
    callback($(':hidden[name="megnx"]').val());
  },
  megny: function(callback) {
    callback($(':hidden[name="megny"]').val());
  },
  megnz: function(callback) {
    callback($(':hidden[name="megnz"]').val());
  },
  /* 角速度 */
  gyro: function(ip,callback) {
    $.ajax({
          url:'http://'+ip+':1880/gyro?callback=gyro',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          async:false,
          complete:function(data) {
              callback('');
          }
    });
  },
  gyrox: function(callback) {
    callback($(':hidden[name="gyrox"]').val());
  },
  gyroy: function(callback) {
    callback($(':hidden[name="gyroy"]').val());
  },
  gyroz: function(callback) {
    callback($(':hidden[name="gyroz"]').val());
  },
  /* 照度 */
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


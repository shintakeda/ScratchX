(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var ip_list = {
          "A":"160.204.91.135",
          "B":"160.204.91.134",
          "C":"160.204.91.133",
          "D":"160.204.91.132"
      };

  var ip_key = new Array();
  for(key in ip_list){
      ip_key.push(key);
  }


  /* 温度 */
  ext.temp = function(place, callback) {

    $.ajax({
            url:'http://'+ip_list[place]+':1880/temp.json',
            dataType:'jsonp',
            jsonpCallback:'temp',
            timeout:5000,
            success: function(data){
                        //console.log(data['temp']);
                        callback(data['temp']);
                     },
            error : function(){
                        //console.log("error");
                    },
            complete: function(data){
                        //console.log("complete");
                      }
    });
  };

  /* 湿度 */
  ext.humi = function(place, callback) {

    $.ajax({
            url:'http://'+ip_list[place]+':1880/humi.json',
            dataType:'jsonp',
            jsonpCallback:'humi',
            timeout:5000,
            success: function(data){
                        //console.log(data['humi']);
                        callback(data['humi']);
                     },
            error : function(){
                        //console.log("error");
                    },
            complete: function(data){
                        //console.log("complete");
                      }
    });
  };

  /* 気圧 */
  ext.baro = function(place, callback) {

    $.ajax({
            url:'http://'+ip_list[place]+':1880/baro.json',
            dataType:'jsonp',
            jsonpCallback:'baro',
            timeout:5000,
            success: function(data){
                        //console.log(data['baro']);
                        callback(data['baro']);
                     },
            error : function(){
                        //console.log("error");
                    },
            complete: function(data){
                        //console.log("complete");
                      }
    });
  };

  /* 加速度 */
  ext.acce = function(place,callback) {

    $.ajax({
          url:'http://'+ip_list[place]+':1880/acce?callback=acce',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          complete:function(data) {
              callback('');
          }
    });
  };
  ext.accex = function(callback) {
    callback($(':hidden[name="accex"]').val());
  };
  ext.accey = function(callback) {
    callback($(':hidden[name="accey"]').val());
  };
  ext.accez = function(callback) {
    callback($(':hidden[name="accez"]').val());
  };

  /* 磁気 */
  ext.megn = function(place,callback) {

    $.ajax({
          url:'http://'+ip_list[place]+':1880/megn?callback=megn',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          complete:function(data) {
              callback('');
          }
    });
  };
  ext.megnx = function(callback) {
    callback($(':hidden[name="megnx"]').val());
  };
  ext.megny = function(callback) {
    callback($(':hidden[name="megny"]').val());
  };
  ext.megnz = function(callback) {
    callback($(':hidden[name="megnz"]').val());
  };

  /* 角速度 */
  ext.gyro = function(place,callback) {

    $.ajax({
          url:'http://'+ip_list[place]+':1880/gyro?callback=gyro',
          type:'get',
          timeout:5000,
          cache:false,
          dataType:'jsonp',
          complete:function(data) {
              callback('');
          }
    });
  };
  ext.gyrox = function(callback) {
    callback($(':hidden[name="gyrox"]').val());
  };
  ext.gyroy = function(callback) {
    callback($(':hidden[name="gyroy"]').val());
  };
  ext.gyroz = function(callback) {
    callback($(':hidden[name="gyroz"]').val());
  };

  /* 照度 */
  ext.light = function(place, callback) {

    $.ajax({
            url:'http://'+ip_list[place]+':1880/light.json',
            dataType:'jsonp',
            jsonpCallback:'light',
            timeout:5000,
            success: function(data){
                        //console.log(data['light']);
                        callback(data['light']);
                     },
            error : function(){
                        //console.log("error");
                    },
            complete: function(data){
                        //console.log("complete");
                      }
    });
  };

  /* 超音波距離 */
  ext.distance = function(place, callback) {

    $.ajax({
            url:'http://'+ip_list[place]+':1880/distance.json',
            dataType:'jsonp',
            jsonpCallback:'distance',
            timeout:5000,
            success: function(data){
                        //console.log(data['light']);
                        callback(data['distance']);
                     },
            error : function(){
                        //console.log("error");
                    },
            complete: function(data){
                        //console.log("complete");
                      }
    });
  };

var descriptor = {
  "blocks": [
    /* 温度 */
    ["R", "%m.menu の温度", "temp", "A"],
    /* 湿度 */
    ["R", "%m.menu の湿度", "humi", "A"],
    /* 気圧 */
    ["R", "%m.menu の気圧", "baro", "A"],
    /* 加速度 */
    ["w", "%m.menu の加速度を取得", "acce", "A"],
    ["R", "x座標の加速度", "accex"],
    ["R", "y座標の加速度", "accey"],
    ["R", "z座標の加速度", "accez"],
    /* 磁気 */
    ["w", "%m.menu の磁気を取得", "megn", "A"],
    ["R", "x座標の磁気", "megnx"],
    ["R", "y座標の磁気", "megny"],
    ["R", "z座標の磁気", "megnz"],
    /* 角速度 */
    ["w", "%m.menu の角速度を取得", "gyro", "A"],
    ["R", "x座標の角速度", "gyrox"],
    ["R", "y座標の角速度", "gyroy"],
    ["R", "z座標の角速度", "gyroz"],
    /* 照度 */
    ["R", "%m.menu の照度", "light", "A"],
    /* 超音波距離センサ */
    ["R", "%m.menu の超音波距離センサ", "distance", "A"]
  ],
  "menus": {
     menu: ip_key
   }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});

(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  /* 温度 */
  ext.temp = function(ip, callback) {

    $.ajax({
            url:'http://'+ip+':1880/temp.json',
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
  ext.humi = function(ip, callback) {

    $.ajax({
            url:'http://'+ip+':1880/humi.json',
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
  ext.baro = function(ip, callback) {

    $.ajax({
            url:'http://'+ip+':1880/baro.json',
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
  ext.acce = function(ip,callback) {

    $.ajax({
          url:'http://'+ip+':1880/acce?callback=acce',
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
  ext.megn = function(ip,callback) {

    $.ajax({
          url:'http://'+ip+':1880/megn?callback=megn',
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
  ext.gyro = function(ip,callback) {

    $.ajax({
          url:'http://'+ip+':1880/gyro?callback=gyro',
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
  ext.light = function(ip, callback) {

    $.ajax({
            url:'http://'+ip+':1880/light.json',
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
  ext.distance = function(ip, callback) {

    $.ajax({
            url:'http://'+ip+':1880/distance.json',
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
    ["R", "%s の温度", "temp", "172.10.10.3"],
    /* 湿度 */
    ["R", "%s の湿度", "humi", "172.10.10.3"],
    /* 気圧 */
    ["R", "%s の気圧", "baro", "172.10.10.3"],
    /* 加速度 */
    ["w", "%s の加速度を取得", "acce", "172.10.10.3"],
    ["R", "x座標の加速度", "accex"],
    ["R", "y座標の加速度", "accey"],
    ["R", "z座標の加速度", "accez"],
    /* 磁気 */
    ["w", "%s の磁気を取得", "megn", "172.10.10.3"],
    ["R", "x座標の磁気", "megnx"],
    ["R", "y座標の磁気", "megny"],
    ["R", "z座標の磁気", "megnz"],
    /* 角速度 */
    ["w", "%s の角速度を取得", "gyro", "172.10.10.3"],
    ["R", "x座標の角速度", "gyrox"],
    ["R", "y座標の角速度", "gyroy"],
    ["R", "z座標の角速度", "gyroz"],
    /* 照度 */
    ["R", "%s の照度", "light", "172.10.10.3"],
    /* 超音波距離センサ */
    ["R", "%s の超音波距離センサ", "distance", "172.10.10.3"]
  ],
  "menus": {
     menu: ["A","B","C","D"]
   }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});

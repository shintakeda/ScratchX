(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var token = '6f0c32510e55c54b2a3220c28346a4e5';
  var token2 = 'b63d4b190cb2297e2932b41d0137feb7';

  /* 4-Digit Display */
  ext.fdd = function(place, num) {

    var place = place-1;

    console.log("place:"+place);
    console.log("num:"+num);
    $.ajax({
          url:'https://us.wio.seeed.io/v1/node/Grove4DigitUART0/display_digits/'+ place +'/'+ num +'?access_token='+token,
          type:'POST',
          timeout:5000,
          dataType:'json',
          success: function(data){
            console.log(data.result);
          },
          error : function(){
            console.log('error');
          }
    });
  };
  /* 4-Digit Display Colon */
  ext.fddc = function(dis) {
    var dis_val = 0
    if (dis == '表示する') {
      dis_val = 1;
    }

    $.ajax({
          url:'https://us.wio.seeed.io/v1/node/Grove4DigitUART0/display_point/' + dis_val + '?access_token='+token,
          type:'POST',
          timeout:5000,
          dataType:'json',
          success: function(data){
            console.log(data.result);
          },
          error : function(){
            console.log('error');
          }
    });
  };

  /* temperature */
  ext.temp = function(callback) {
    $.ajax({
          url:'https://us.wio.seeed.io/v1/node/GroveTempA0/temp?access_token='+token,
          type:'GET',
          timeout:5000,
          dataType:'json',
          success:function(data){
              callback(data.temperature);
          },
              error:function(){
              console.log("temp error");
              callback("null");
          }
    });
  };

  /* Gyrol */
  ext.gyx = function(callback) {
    $.ajax({
          url:'https://us.wio.seeed.io/v1/node/GroveGyroITG3200I2C0/gyro?access_token='+token2,
          type:'GET',
          timeout:5000,
          dataType:'json',
          success:function(data){
              callback(data.gx);
          },
              error:function(){
              console.log("gyrox error");
              callback("null");
          }
    });
  };
  ext.gyy = function(callback) {
    $.ajax({
          url:'https://us.wio.seeed.io/v1/node/GroveGyroITG3200I2C0/gyro?access_token='+token2,
          type:'GET',
          timeout:5000,
          dataType:'json',
          success:function(data){
              callback(data.gy);
          },
              error:function(){
              console.log("gyroy error");
              callback("null");
          }
    });
  };

  ext.gyz = function(callback) {
    $.ajax({
          url:'https://us.wio.seeed.io/v1/node/GroveGyroITG3200I2C0/gyro?access_token='+token2,
          type:'GET',
          timeout:5000,
          dataType:'json',
          success:function(data){
              callback(data.gz);
          },
              error:function(){
              console.log("gyrox error");
              callback("null");
          }
    });
  };

var descriptor = {
  "blocks": [
    /* 4-Digit Display */
    [" ", "数字表示機の%n 番目に%n を表示する", "fdd", "",""],
    [" ", "数字表示機の:を %m.display", "fddc", "表示する"],
    ["R", "気温", "temp"],
    ["R", "x座標の角速度", "gyx"],
    ["R", "y座標の角速度", "gyy"],
    ["R", "z座標の角速度", "gyz"]
  ],
  "menus": {
     display:["表示する","表示しない"]
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});

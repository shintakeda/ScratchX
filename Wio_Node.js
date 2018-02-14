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
  ext.gyrol = function(callback) {
    $.ajax({
          url:'https://us.wio.seeed.io/v1/node/GroveGyroITG3200I2C0/gyro?access_token='+token2,
          type:'GET',
          timeout:5000,
          dataType:'json',
          success:function(data){
              if($('hidden[name=gx]').length){
                  $('hidden[name=gx]').val(data.gx);
              }else{
                  var inputgx = '<input type="hidden" name="gx" value=">' + data.gx + '">';
                  $(document.body).append(inputgx);
              }
              if($('hidden[name=gy]').length){
                  $('hidden[name=gy]').val(data.gy);
              }else{
                  var inputgy = '<input type="hidden" name="gy" value=">' + data.gy + '">';
                  $(document.body).append(inputgy);
              }
              if($('hidden[name=gz]').length){
                  $('hidden[name=gz]').val(data.gz);
              }else{
                  var inputgz = '<input type="hidden" name="gz" value=">' + data.gz + '">';
                  $(document.body).append(inputgz);
              }
              callback('');
          },
              error:function(){
              console.log("gyro error");
              callback("null");
          }
    });
  };

  ext.gx = function(callback) {
    callback($(':hidden[name="gx"]').val());
  };
  ext.gy = function(callback) {
    callback($(':hidden[name="gy"]').val());
  };
  ext.gz = function(callback) {
    callback($(':hidden[name="gz"]').val());
  };

var descriptor = {
  "blocks": [
    /* 4-Digit Display */
    [" ", "数字表示機の%n 番目に%n を表示する", "fdd", "",""],
    [" ", "数字表示機の:を %m.display", "fddc", "表示する"],
    ["R", "気温", "temp"],
    [" ", "角加速度取得", "gyrol"],
    ["R", "x座標の角速度", "gx"],
    ["R", "y座標の角速度", "gy"],
    ["R", "z座標の角速度", "gz"]
  ],
  "menus": {
     display:["表示する","表示しない"]
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});

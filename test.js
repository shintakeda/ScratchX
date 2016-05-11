
var descriptor = {
  "blocks": [
    [" ", "%s と言う", "say", "こんにちは!"]
    [" ", "%s とアラートする", "tell", "こんにちは!"]
  ],
  "menus": {}
}

var ext = {
  say: function(message) {
    window.alert(message);
  }
  tell:function(message) {
    window.alert(message);
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


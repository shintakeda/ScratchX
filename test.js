var descriptor = {
  "blocks": [
    [" ", "%s と言う", "say", "こんにちは!"],
    [" ", "%s と伝える", "tell", "test"]
  ],
  "menus": {}
};

var ext = {
  say: function(message) {
    window.alert(message);
  },
  tell: function(t){
    window.alert(t);
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


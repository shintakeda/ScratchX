var descriptor = {
  "blocks": [
    [" ", "%s と言う", "say", "こんにちは!"]
  ],
  "menus": {}
}

var ext = {
  say: function(message) {
    window.alert(message);
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

var descriptor2 = {
  "blocks": [
    [" ", "%s とアラートする", "say", "こんにちは!"]
  ],
  "menus": {}
}

var ext2 = {
  say: function(message) {
    window.alert(message);
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor2, ext2);

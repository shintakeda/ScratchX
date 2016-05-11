(function(ext) {
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
})({});

(function(ext) {
var descriptor2 = {
  "blocks": [
    [" ", "%s とアラートする", "tell", "こんにちは!"]
  ],
  "menus": {}
}

var ext2 = {
  tell: function(message) {
    window.alert(message);
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor2, ext2);
})({});
var descriptor = {
  "blocks": [
    [" ", "%s と言う", "say", "こんにちは!"]
  ],
  "menus": {}
}


ext.say = function(message) {
    window.alert(message);
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


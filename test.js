var descriptor = {
  "blocks": [
    [" ", "%s と言う", "say", "こんにちは!"],
    [" ", "%s と伝える", "tell", "こんばんは!"]
  ],
  "menus": {}
}


ext.say = function(message) {
    window.alert(message);
};

ext.tell = function(message) {
    window.alert(message);
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);


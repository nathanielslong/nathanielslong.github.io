var m = require("mithril");

var root = document.body;
var count = 0;

var hello = {
  view: function() {
    return m("main", [
      m("h1", {class: "title"}, "My first app"),
      m("button", {onclick: function() {count++}}, count + " clicks")
    ])
  }
}

m.mount(root, hello);

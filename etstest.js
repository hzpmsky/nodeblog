/**
 * Created by web-01 on 2017/11/26.
 */
const ejs = require("ejs");
console.log(ejs.render("Hello,<%= name%>", {name: "EJS"}));

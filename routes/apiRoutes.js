
var tableData = require("../data/tableData");
var waitListData = require("../data/waitListData");


module.exports = function (app) {
    app.get("/", function(req, res) {
        console.log(tableData);
        console.log(res);
        res.JSON(tableData);

    })
}


exports.view = function(req, res) {
    var data = {data: []};
    res.render("index", data);
}

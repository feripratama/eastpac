

module.exports = function(app)
{
    var ctrl = require("../controllers/Web3NodeController")
    app.route("/new-account").post(ctrl.CreateNewToken);
    app.route("/unlock-account").post(ctrl.UnlockAccount);
    app.route("/account-balance").post(ctrl.AccountBalance);

}


var PowerLink3 = require("visonic-powerlink3");

var userCodeEnv = process.env.USER_CODE;
var panelWebNameEnv = process.env.PANEL_WEB_NAME;

var powerLink3 = new PowerLink3({
        host: "visonic.tycomonitor.com",
        userCode: userCodeEnv,
        appType: "com.visonic.PowerMaxApp",
        userId: "generated-guid",
        panelWebName: panelWebNameEnv
});

powerLink3.getStatus(function (error, status) {

        if (error) {
                console.log(`Error getting status: ${error}`);
                return;
        }

        console.log(`Status: ${status}`); //=> Status: disarmed

        if (status == PowerLink3.STATUSES.DISARMED){
                powerLink3.setStatus(PowerLink3.STATUSES.ARMED_HOME, function (error) {

                        if (error) {
                                console.log(`Error getting status: ${error}`);
                                return;
                        }

                        console.log(`Status set successfully`);
                 });
        }
});


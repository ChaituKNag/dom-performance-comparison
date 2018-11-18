angular.module("App", [])
    .controller('AppController', AppController);

function AppController() {
    var ctrl = this;
    ctrl.rows = [];

    ctrl.generate = function () {
        ctrl.rows = [];
        for(var i = 0; i< 1000; i++) {
            var random = Math.ceil(Math.random()*100 + 1);
            ctrl.rows.push([]);
            for(var j = 0; j< random; j++) {
                ctrl.rows[i].push(j);
            }
        }

        console.log(ctrl.rows);
    }

    
}
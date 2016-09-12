(function() {
    var facebookConfig = angular.module('facebookConfig', []);
    facebookConfig.constant('fb', {
        name: 'samark',
        lastname: 'chai',
        age: 27,
        address: {
            no: 71,
            phone: 0845134582,
            item: {
                file: 'axx',
            }
        }
    });
    facebookConfig.constant('lang', {
        th: {
            login: 'เข้าสู่ระบบ',
            click: 'กด'
        },
        en: {
            login: 'login',
            click: 'click'
        }


    });
}());
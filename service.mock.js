$.mockjax({
    url: bathpath + 'v1/user/login',
    contentType: "application/json",
    responseTime: 500,
    response: function(req) {
        var username = req.data.username
        role = ''
        switch (username) {
            case 'driver':
                role = 'driver'
                break;
            case 'customer':
                role = 'bigCustomer'
                break;

            case 'waiter':
                role = 'waiter'
                break;

            default:
                break;
        }
        this.responseText = {
            "code": 1,
            "msg": "操作成功",
            "errorMsg": null,
            "content": {
                user: {
                    role: role
                }
            }
        }
    }
})

$.mockjax({
    url: bathpath + 'v1/menu/driver',
    contentType: "application/json",
    responseTime: 500,
    responseText: {
        "code": 1,
        "msg": "操作成功",
        "errorMsg": null,
        "content": [
            { name: '首页', url: 'driver.html' },
            { name: '订单管理', url: 'driver_order.html' },
            { name: '个人资料', url: 'driver_info.html' },
            { name: '个人资料123', url: 'driver_info.html' }
        ]
    }
})

$.mockjax({
    url: bathpath + 'v1/menu/bigCustomer',
    contentType: "application/json",
    responseTime: 500,
    responseText: {
        "code": 1,
        "msg": "操作成功",
        "errorMsg": null,
        "content": [
            { name: '首页', url: 'bogCustomer.html' },
            { name: '我的订单', url: 'bogCustomer_order.html' }
        ]
    }
})

$.mockjax({
    url: bathpath + 'v1/menu/waiter',
    contentType: "application/json",
    responseTime: 500,
    responseText: {
        "code": 1,
        "msg": "操作成功",
        "errorMsg": null,
        "content": [
            { name: '首页', url: 'waiter.html' },
            { name: '司机管理', url: 'waiter_dirverMgr.html' }
        ]
    }
})
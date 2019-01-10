bathpath = 'http://localhost/api/'

function ajaxdatacheck(data) {
    if (data.code == -1) {
        toastr.warning('会话超时，请重新登陆', '亲~', {
            "positionClass": "toast-top-right",
            "timeOut": 3000,
            "progressBar": true
        })
        window.setTimeout('window.location.href="login.html"', 3000)
        return false
    } else if (data.code == -2) {
        swal({
            title: '系统已锁定',
            text: data.errorMsg || data.msg,
            type: "warning"
        }, function() {
            window.location.href = "lockscreen.html"
        })
        return false
    } else if (data.code == -3) {
        loadPage('home.html', '主页|fa-home|home.html')
        $.cookie('unlockSafePwdVal', false)
        swal({
            title: '您无权访问,系统将锁定,重新进入需要输入登录密码',
            text: data.errorMsg || data.msg,
            type: "warning"
        }, function() {
            window.location.href = "lockscreen.html"
        })
        return false
    } else if (data.code == -4) {
        $('body').empty().html('<h1>' + data.errorMsg || data.msg + '</h1><p><a href="provider.html">重试</a></p>')
        return false
    }
    return true
}

function setNavBar(breadcrumb) {

}

function loadPage(page, breadcrumb) {

    $('#main-body').load(page, function(response, status, xhr) {
        if (status == "error") {
            var msg = "loadPage " + page + ", but there was an error: "
            $('#main-body').html(msg + xhr.status + " " + xhr.statusText)
        }

        setNavBar(breadcrumb)
        $('#main-body').show()
        $('#main-body').removeClass('animated').removeClass('bounce').addClass('animated')
            .addClass('fadeInRight')

        /*
         * bounce ,flash ,pulse ,rubberBand ,shake ,swing ,tada ,wobble ,bounceIn
         * ,bounceInDown ,bounceInLeft ,bounceInRight ,bounceInUp ,bounceOut
         * ,bounceOutDown ,bounceOutLeft ,bounceOutRight ,bounceOutUp ,fadeIn
         * ,fadeInDown ,fadeInDownBig ,fadeInLeft ,fadeInLeftBig ,fadeInRight
         * ,fadeInRightBig ,fadeInUp ,fadeInUpBig ,fadeOut ,fadeOutDown
         * ,fadeOutDownBig ,fadeOutLeft ,fadeOutLeftBig ,fadeOutRight
         * ,fadeOutRightBig ,fadeOutUp ,fadeOutUpBig ,flip ,flipInX ,flipInY
         * ,flipOutX ,flipOutY ,lightSpeedIn ,lightSpeedOut ,rotateIn
         * ,rotateInDownLeft ,rotateInDownRight ,rotateInUpLeft ,rotateInUpRight
         * ,rotateOut ,rotateOutDownLeft ,rotateOutDownRight ,rotateOutUpLeft
         * ,rotateOutUpRight ,slideInDown ,slideInLeft ,slideInRight ,slideOutLeft
         * ,slideOutRight ,slideOutUp ,hinge ,rollIn ,rollOut
         */
    })
}
$(function() {

    drawMenu()

})

function drawMenu() {
    var user = JSON.parse($.cookie('user'))

    $.getJSON({
            url: bathpath + 'v1/menu/' + user.role,
            type: 'post',
            data: {
                param: '1'
            }
        })
        .done(function(data) {
            if (ajaxdatacheck(data)) {
                if (data.code == 1) {
                    // swal({
                    //     title: '操作成功',
                    //     type: "success"
                    // })
                    menu_html = ''
                    $(data.content).each(function(i, menu) {
                        menu_html += '<li onclick="loadPage(\'' + menu.url + '\')"><a href="#"><i class="fa fa-list"></i> <span class="nav-label">' + menu.name + '</span></a></li>'
                    })
                    $('#side-menu').append(menu_html)
                } else {
                    swal({
                        title: '加载菜单失败',
                        text: data.errorMsg || data.msg,
                        type: "warning"
                    })
                }
            }
        })
        .fail(function(e) {
            console.error(e)
        })
        .always(function() {
            console.log('done!')
        })
}
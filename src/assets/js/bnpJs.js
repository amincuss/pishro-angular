function ShowMessage(message, messagetype) {
    var cssclass;
    switch (messagetype) {
        case 'موفق':
            cssclass = 'alert-success'
            break;
        case 'خطا':
            cssclass = 'alert-danger'
            break;
        case 'هشدار':
            cssclass = 'alert-warning'
            break;
        default:
            cssclass = 'alert-info'
    }
    $('#alert_container').append('<div id="alert_div" style="margin: 0 0.5%; -webkit-box-shadow: 3px 4px 6px #999;" class="alert fade in ' + cssclass + '"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>' + messagetype + '!</strong> <span>' + message + '</span></div>');
}
//----------------------------------------------------------------------------
//************************************ اعلان متغيرها ***********
//----------------------------------------------------------------------------
var milisecTimer = 0;
var secondsTimer = 0;
var milisectTimer = 0;
var secondstTimer = 10;
//----------------------------------------------------------------------------
//************************************ نمايش زمان باقيمانده ***********
//----------------------------------------------------------------------------
window.onload = displayTimer();


//----------------------------------------------------------------------------
//**************************** Reset Dispaly Timer ***************************
//----------------------------------------------------------------------------
function ResetDisplayTimer() {
    if (document.getElementById("b_Timer")) {
        milisecTimer = 0;
        secondsTimer = 0;
        milisectTimer = 0;
        secondstTimer = 10;
        document.getElementById("b_Timer").value = "10:00"
    }
}

//----------------------------------------------------------------------------
//***************************** زمان باقيمانده *****************************
//----------------------------------------------------------------------------
function displayTimer() {
    if (document.getElementById("b_Timer")) {
        if (document.getElementById("b_Timer").value != "--:--") {
            if ((milisectTimer == 1 && secondstTimer == 0) || secondstTimer < 0) {
                document.getElementById("b_Timer").value = "--:--";
                window.location.href = "/";
            }
            else if (milisectTimer == 0) {
                milisectTimer = 60;
                secondstTimer -= 1;
            }


            milisectTimer -= 1;

            if (document.getElementById("b_Timer").value != "--:--") {

                if (milisectTimer >= 10)
                    document.getElementById("b_Timer").value = "0" + secondstTimer + ':' + milisectTimer;
                else
                    document.getElementById("b_Timer").value = "0" + secondstTimer + ':' + "0" + milisectTimer;

                setTimeout("displayTimer()", 1000);
            }

            //bgColor = "#ffffff";
            //if (secondstTimer < 2)
            //   bgColor = "#F8BCB6";
            //else if (secondstTimer < 5)
            //   bgColor = "#E8E6B8";

            //document.getElementById("b_Timer").style.
      //      debugger;
        }
    }
}
//----------------------------------------------------------------------------
//***************************** EnterToTab *****************************
//----------------------------------------------------------------------------
//function b_enterToTab(e) {
//    if (window.event && window.event.keyCode == 13) {
//        window.event.keyCode = 9;
//    }
//}

///*!
// * Retina.js v1.3.0
// *
// * Copyright 2014 Imulus, LLC
// * Released under the MIT license
// *
// * Retina.js is an open source script that makes it easy to serve
// * high-resolution images to devices with retina displays.
// */

//$(document).ready(function () {
//    var $submenu = $('.submenu');
//    var $mainmenu = $('.mainmenu');
//    $submenu.hide();
//    //$submenu.click().delay(400).slideDown(700);
//    $submenu.on('click', 'li', function () {
//        $submenu.siblings().find('li').removeClass('chosen');
//        $(this).addClass('chosen');
//    });
//    $mainmenu.on('click', 'li', function () {
//        $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
//    });
//    $mainmenu.children('li:last-child').on('click', function () {
//        $mainmenu.fadeOut().delay(500).fadeIn();
//    });
//});


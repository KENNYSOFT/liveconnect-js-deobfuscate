'use strict';
var selectArr = [];
var callbackArr = [];

function cusDD(a, b, c) {
    var d = false;
    for (var e = 0; e < selectArr.length; e++) {
        if (selectArr[e] == a) {
            callbackArr[e] = c;
            d = true;
            break;
        }
    }
    if (!d) {
        selectArr.push(a);
        callbackArr.push(c);
    }
    var f = '';
    if (!b) {
        f = 'cusDD_default';
    } else if (b == 'slick dark') {
        f = 'cusDD_slick_d';
    } else if (b == 'slick light') {
        f = 'cusDD_slick_l';
    } else {
        f = b;
    }
    for (var g = 0; g < $(a).length; g++) {
        var h = $($(a)[g]);
        h.addClass(f + ' cusDD').changeElementType('div');
        h = $($(a)[g]);
        h.find('option').wrapAll('<div class=\'cusDD_options\' />');
        h.find('option').addClass('cusDD_opt').each(function() {
            $(this).changeElementType('div');
        });
        h.prepend('<div class=\'cusDD_select\' name=title><div class=\'cusDD_arrow\'></div></div>');
        var j = h.find('div[selected=\'selected\']').length >= 1 ? $(h.find('div[selected=\'selected\']')) : $(h.find('.cusDD_opt')[0]);
        h.find('.cusDD_select').prepend(j.text());
    }
    $(document).click(function(q) {
        $('.cusDD_options').slideUp(200);
        $('.cusDD_arrow').removeClass('active');
    });
    $(a).click(function(q) {
        var r = a;
        $('.cusDD').not(r).find('.cusDD_options').slideUp(200);
        $('.cusDD').not(r).find('.cusDD_arrow').removeClass('active');
        console.log(' select : ', r);
        q.stopPropagation();
        if ($(q.target).attr('id') == 'qualitySelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#qualityPopup').css('display', 'block');
            return;
        }
        if ($(q.target).attr('id') == 'ccSelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#subtitlePopup').css('display', 'block');
            return;
        }
        var s = 200;
        if ($(this).find('.cusDD_options').children()) {
            if ($(this).find('.cusDD_options').children().length > 30) {
                s = 0;
            }
        }
        $(this).find('.cusDD_options').slideToggle(s);
        $(this).find('.cusDD_arrow').toggleClass('active');
    });
    $(a).find('.cusDD_opt').click(function() {
        $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
        if (c) {
            c($(this).data(), $(this));
        }
    });
}
$.fn.changeElementType = function(b) {
    var c = {};
    $.each(this[0].attributes, function(d, e) {
        c[e.nodeName] = e.nodeValue;
    });
    this.replaceWith(function() {
        return $('<' + b + '/>', c).append($(this).contents());
    });
};

function cusDDselectOption(a, b, c) {
    $(a).find('.cusDD_opt').each(function() {
        if ($(this).data().id == b) {
            $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
            if ($(this).data().id) {
                $($(this).parent()).siblings('.cusDD_select').data().id = $(this).data().id;
            }
            if (c) {
                var d = '#' + $(this).parent().parent().attr('id');
                for (var e = 0; e < selectArr.length; e++) {
                    if (selectArr[e] == d) {
                        if (callbackArr[e]) {
                            callbackArr[e]($(this).data());
                        }
                    }
                }
            }
        }
    });
}
var RSAnd = 'https://api.liveconnect.co.kr';
var YPP3z = 'pub-c-bf51339c-bf9b-4e3e-8f44-dadc40e90d23';
var KSPdf = 'sub-c-80f91ce6-c710-11ea-8107-5e100a74f828';
var Nierw = 'ap-northeast-2';
var Yacaw = 'AKIARWRY6LMTIMTBNHGW';
var Ytcsw = 'xmZ2EWmIIKs85VR8kaDZHnEfKwYMiMeHUSRM2UdK';
var ChatFilter = function() {
    var c = function() {
        var g = true;
        return function(h, i) {
            var j = g ? function() {
                if (i) {
                    var k = i.apply(h, arguments);
                    i = null;
                    return k;
                }
            } : function() {};
            g = false;
            return j;
        };
    }();
    var d = c(this, function() {
        var g;
        try {
            var h = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
            g = h();
        } catch (o) {
            g = window;
        }
        var i = g.console = g.console || {};
        var j = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
        for (var k = 0; k < j.length; k++) {
            var l = c.constructor.prototype.bind(c);
            var m = j[k];
            var n = i[m] || l;
            l.__proto__ = c.bind(c);
            l.toString = n.toString.bind(n);
            i[m] = l;
        }
    });
    d();
    var e = '';
    var f = false;
    return {
        loadChatFilterData: function g(h) {
            if (f) {
                if (h) {
                    h();
                }
                return;
            }
            var i = new XMLHttpRequest();
            switch (Tira) {
                case 'IDLE':
                    i.open('GET', '/static/filtering/chat_filtering_idle.txt');
                    break;
                case '210417_cix':
                    i.open('GET', '/static/filtering/chat_filtering_cix.txt');
                    break;
                case '210424_mamamoo':
                    i.open('GET', '/static/filtering/chat_filtering_mamamoo.txt');
                    break;
                case '210604_parkyuchun_1':
                case '210604_parkyuchun_2':
                    i.open('GET', '/static/filtering/chat_filtering_parkyuchun.txt');
                    break;
                case '210606_cravity':
                    i.open('GET', '/static/filtering/chat_filtering_cravity.txt');
                    break;
                default:
                    if (Tira.indexOf('everglow') !== -1) {
                        i.open('GET', '/static/filtering/chat_filtering_everglow.txt');
                    } else {
                        i.open('GET', '/static/filtering/chat_filtering.txt');
                    }
                    break;
            }
            i.overrideMimeType('text/plain; charset=utf-8');
            i.onreadystatechange = function() {
                if (i.readyState == XMLHttpRequest.DONE) {
                    if (i.status == 200 || i.status == 201) {
                        e = i.responseText.replace(/(\r\n\t|\n|\r\t)/gm, '|');
                        e = e.replace(/[\r]/gm, '');
                        if (e[e.length - 1] == '|') {
                            e = e.substr(0, e.length - 1);
                        }
                        f = true;
                        if (h) {
                            h();
                        }
                    }
                }
            };
            i.send();
        },
        filteringChatText: function h(i) {
            if (!f) {
                return;
            }
            var j = 'gi';
            var k = new RegExp(e, j);
            return i.replace(k, '***');
        },
        checkFilteringData: function i() {
            return f;
        },
        checkNickname: function j(k) {
            if (!f) {
                return;
            }
            var l = 'gi';
            var m = new RegExp(e, l);
            return m.test(k);
        }
    };
}();
var NicknameFilter = function() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Tira;
    var b = '';
    if (a == '210424_mamamoo') {
        b = '솔라, ソラ, SOLARSIDO, 솔라시도, Solar-sido, 계약, 해체, 에릭남, 개비덥, 알비답, 김진우, 김도훈'.split(',');
        b = b.map(function(d) {
            return d.replace(/ /gi, '');
        }).join('|');
    }
    return {
        hasForbidden: function d(e) {
            if (b === '') {
                return false;
            }
            var f = new RegExp(b, 'gi');
            return f.test(e);
        }
    };
}();
var requestCnt = 0;
var serverLoading = null;

function request_to_server(a, b, c, d, e) {
    var f = new XMLHttpRequest();
    f.open(a, b, true);
    f.withCredentials = true;
    f.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    f.timeout = 60000;
    if (c) {
        var g = new FormData();
        for (var h in c) {
            g.append(h, c[h]);
        }
        f.send(g);
    } else {
        f.send();
    }
    $('#loadingDiv').css('display', 'block');
    requestCnt++;
    if (!serverLoading) {
        serverLoading = setInterval(function() {
            if (!requestCnt) {
                $('#loadingDiv').css('display', 'none');
                clearInterval(serverLoading);
                serverLoading = null;
            }
        }, 100);
    }
    f.onreadystatechange = function() {
        if (f.readyState == XMLHttpRequest.DONE) {
            requestCnt--;
            if (f.status == 200 || f.status == 201) {
                if (d) {
                    d(JSON.parse(f.responseText));
                }
            } else {
                console.log(f);
                if (f.status == 0) {} else if (!e) {
                    if (f.responseText) {
                        console.log(JSON.parse(f.responseText));
                    }
                } else {
                    try {
                        var i = JSON.parse(f.responseText);
                        e(i, f.status);
                    } catch (l) {
                        e(f.responseText, f.status);
                    }
                }
            }
        } else {}
    };
    f.ontimeout = function(i) {
        console.log(i);
        alertPopup('fail', 'Request timeout', 'Please try again', 'OK', function() {
            location.reload();
        });
    };
}

function getCookie(a) {
    var b = null;
    if (document.cookie && document.cookie !== '') {
        var c = document.cookie.split(';');
        for (var d = 0; d < c.length; d++) {
            var e = jQuery.trim(c[d]);
            if (e.substring(0, a.length + 1) === a + '=') {
                b = decodeURIComponent(e.substring(a.length + 1));
                break;
            }
        }
    }
    return b;
}

function setCookie(a, b, c) {
    var e = new Date();
    e.setTime(e.getTime() + c * 60 * 1000);
    var f = 'expires=' + e.toUTCString();
    document.cookie = a + '=' + b + ';' + f + ';path=/';
}

function setUserDefinedCookie(a, b, c) {
    var d = new Date();
    var e = 10;
    if (c !== undefined) {
        exmins = limit;
    }
    d.setTime(d.getTime() + e * 24 * 60 * 60 * 1000);
    var f = 'expires=' + d.toUTCString();
    document.cookie = encodeURIComponent(a) + '=' + encodeURIComponent(b) + ';' + f + ';path=/';
}

function removeCookie(a) {
    setCookie(a, null, 0);
}
Date.prototype.format = function(a) {
    if (!this.valueOf()) {
        return ' ';
    }
    var b = this;
    return a.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|mss|ap)/gi, function(c) {
        switch (c) {
            case 'yyyy':
                return b.getFullYear();
            case 'yy':
                return (b.getFullYear() % 1000).zf(2);
            case 'MM':
                return (b.getMonth() + 1).zf(2);
            case 'dd':
                return b.getDate().zf(2);
            case 'HH':
                return b.getHours().zf(2);
            case 'hh':
                return ((h = b.getHours() % 12) ? h : 12).zf(2);
            case 'mm':
                return b.getMinutes().zf(2);
            case 'ss':
                return b.getSeconds().zf(2);
            case 'mss':
                return b.getUTCMilliseconds();
            case 'ap':
                return b.getHours() < 12 ? 'AM' : 'PM';
            default:
                return c;
        }
    });
};
String.prototype.string = function(a) {
    var b = '';
    var c = 0;
    while (c++ < a) {
        b += this;
    }
    return b;
};
String.prototype.zf = function(a) {
    return '0'.string(a - this.length) + this;
};
Number.prototype.zf = function(a) {
    return this.toString().zf(a);
};

function set_uuid() {
    function a() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    return a() + a() + '-' + a() + '-' + a() + '-' + a() + '-' + a() + a() + a();
}

function createDeviceId(a) {
    var b = set_uuid();
    setCookie(a + '_device_id', b, 20160);
    return b;
}

function clearPopupData(a) {
    var b = $('#' + a);
    b.css('display', 'none').find('#popupTitle, #popupDesc').text('');
}

function alertPopup(a, b, c, d) {
    var e = setInterval(function() {
        clearInterval(e);
        $('#loadingDiv').css('display', 'none');
        $('#alertPopup').css('display', 'block');
        $('#alertPopup p[name=title]').text(a);
        $('#alertPopup p[name=desc]').text(b);
        $('#alertPopup button[name=okbtn]').text(c);
        $('#alertPopup button[name=okbtn],#alertPopup button[name=closebtn]').click(function() {
            $('#alertPopup button[name=okbtn]').unbind('click');
            clearPopupData('alertPopup');
            if (d) {
                d();
                d = null;
            }
        });
    }, 100);
}

function checkInterparkApp() {
    if (navigator.userAgent.toLowerCase().indexOf('interpark') !== -1) {
        return true;
    }
    return false;
}

function getQueryStringObject() {
    var c = window.location.search.substr(1).split('&');
    if (c == '') {
        return {};
    }
    var d = {};
    for (var e = 0; e < c.length; ++e) {
        var f = c[e].split('=', 2);
        if (f.length == 1) {
            d[f[0]] = '';
        } else {
            d[f[0]] = decodeURIComponent(f[1].replace(/\+/g, ' '));
        }
    }
    return d;
}

function checkIEbrowser() {
    var a = window.navigator.userAgent.toLowerCase();
    var b = a.indexOf('trident');
    if (b > -1) {
        return true;
    }
    return false;
}

function checkEdgeBrowser() {
    var a = window.navigator.userAgent.toLowerCase();
    if (a.indexOf('edg') !== -1 || a.indexOf('edge') !== -1) {
        return true;
    } else {
        return false;
    }
}

function checkMobileAndTablet() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) {
            return true;
        } else {
            var b = navigator.userAgent.toLowerCase();
            var c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
            if (!c) {
                return isIpadOS();
            } else {
                return c;
            }
        }
    }
}

function isMobile() {
    var a = false;
    (function(b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
            a = true;
        }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return a;
}

function isIOS() {
    return (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream;
}

function isIpadOS() {
    return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) || window.navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
}

function isTablet() {
    var a = navigator.userAgent.toLowerCase();
    return /(tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(a);
}

function userSessionCheck(a, b, c) {
    request_to_server('POST', RSAnd + '/user_auth/session_check/', a, function(d) {
        if (b) {
            b(d);
        }
    }, function(d) {
        if (c) {
            c(d);
        }
    });
}

function hasClassName(a, b) {
    return new RegExp('(?:^|\\s+)' + b + '(?:\\s+|$)').test(a.className);
}

function addClassName(a, b) {
    if (!hasClassName(a, b)) {
        a.className = a.className ? [a.className, b].join(' ') : b;
    }
}

function removeClassName(a, b) {
    if (hasClassName(a, b)) {
        var d = a.className;
        d = d.replace(new RegExp('(?:^|\\s+)' + b + '(?:\\s+|$)', 'g'), ' ');
        d = d.replace(new RegExp('^\\s+', 'g'), '');
        d = d.replace(new RegExp('\\s+$', 'g'), '');
        a.className = d.replace(new RegExp('\\s+', 'g'), ' ');
    }
}

function getOrientation() {
    if (!isMobile()) {
        return false;
    }
    if (isIOS()) {
        switch (window.orientation) {
            case -90:
            case 90:
                return 'landscape';
            default:
                return 'portrait';
        }
    } else {
        return screen.orientation.type.toLowerCase();
    }
}

function checkMobile() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) {
            return true;
        } else {
            var b = navigator.userAgent.toLowerCase();
            var c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
            if (!c) {
                return isIpadOS();
            } else {
                return c;
            }
        }
    }
}

function isChrome() {
    var a = window.navigator.userAgent.toLowerCase();
    var b = a.indexOf('chrome') !== -1 || a.indexOf('crios') !== -1;
    var c = a.indexOf('edg') !== -1 || a.indexOf('edge') !== -1;
    return b && !c;
}

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function isSafari() {
    var a = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && navigator.userAgent.indexOf('CriOS') == -1 && navigator.userAgent.indexOf('FxiOS') == -1;
    return a;
}

function delayStopLoadingPanelFactory() {
    var a;
    return function() {
        clearTimeout(a);
        $('#loadingWrap .pl_loader').addClass('stop');
        a = setTimeout(function() {
            $('#loadingWrap .pl_loader').removeClass('stop');
        }, 1000);
    };
}
var delayStopLoadingPanel = delayStopLoadingPanelFactory();

function isWindow() {
    var a = window.navigator.userAgent.toLowerCase();
    var b = checkMobileAndTablet();
    return !b && a.indexOf('win') != -1;
}

function isMac() {
    var a = window.navigator.userAgent.toLowerCase();
    var b = checkMobileAndTablet();
    return !b && a.indexOf('mac') != -1;
}

function injectDeviceContentHeightToCSS() {
    var a = window.innerHeight * 0.01;
    var b = window.document.documentElement;
    b.style.setProperty('--vh', ''.concat(a, 'px'));
}

function addClassToElementByEnv(a) {
    var b = a || window.document.body;
    var c = '';
    var d = [];
    if (isIOS()) {
        d.push('ios');
    }
    if (isAndroid()) {
        d.push('android');
    }
    if (isTablet() || isIpadOS()) {
        d.push('tablet');
    }
    if (isChrome()) {
        d.push('chrome');
    }
    if (isSafari()) {
        d.push('safari');
    }
    if (checkEdgeBrowser()) {
        d.push('edge');
    }
    if (isMac()) {
        d.push('macos');
    }
    if (isWindow()) {
        d.push('window');
    }
    c = d.join(' ');
    b.className += ' ' + c;
}

function debounce(a, b) {
    var c;
    return function() {
        var d = arguments;
        var e = this;
        var f = arguments;
        clearTimeout(c);
        c = setTimeout(function() {
            return a.apply(e, d);
        }, b);
    };
}
var POPUP_CONFIG = {
    failToGetPlayerCode: function failToGetPlayerCode(a, b) {
        var c = null;
        var d = a;
        if (d == 'zh_Hans') {
            d = 'cn';
        }
        if (b) {
            c = b;
        }
        var e = {
            ko: {
                title: '알림',
                desc: '잠시 후 다시 시도해주세요.',
                btnTxt: '확인',
                okCallback: c
            },
            en: {
                title: 'Notification',
                desc: 'Please try again later',
                btnTxt: 'OK',
                okCallback: c
            },
            ja: {
                title: 'お知らせ',
                desc: 'しばらくしてから再度お試しください',
                btnTxt: '確認',
                okCallback: c
            },
            jp: {
                title: 'お知らせ',
                desc: 'しばらくしてから再度お試しください',
                btnTxt: '確認',
                okCallback: c
            },
            cn: {
                title: '提醒',
                desc: '请稍后再试一次',
                btnTxt: '确认',
                okCallback: c
            }
        };
        if (!e[d]) {
            return e.en;
        }
        return e[d];
    },
    duplicatedNickname: function duplicatedNickname(a, b) {
        var c = null;
        var d = a;
        if (d == 'zh_Hans') {
            d = 'cn';
        }
        if (b) {
            c = b;
        }
        var e = {
            ko: {
                title: '알림',
                desc: '잠시 후 다시 시도해주세요.',
                btnTxt: '확인',
                okCallback: c
            },
            en: {
                title: 'Notification',
                desc: 'Please try again later',
                btnTxt: 'OK',
                okCallback: c
            },
            ja: {
                title: 'お知らせ',
                desc: 'しばらくしてから再度お試しください',
                btnTxt: '確認',
                okCallback: c
            },
            jp: {
                title: 'お知らせ',
                desc: 'しばらくしてから再度お試しください',
                btnTxt: '確認',
                okCallback: c
            },
            cn: {
                title: '提醒',
                desc: '请稍后再试一次',
                btnTxt: '确认',
                okCallback: c
            }
        };
        if (!e[d]) {
            return e.en;
        }
        return e[d];
    },
    permissionDenied: function permissionDenied(a, b) {
        var c = null;
        var d = a;
        if (d == 'zh_Hans') {
            d = 'cn';
        }
        if (d == 'ja') {
            d = 'jp';
        }
        if (b) {
            c = b;
        }
        var e = {
            ko: {
                title: '알림',
                desc: '권한이 없습니다.',
                btnTxt: '확인',
                okCallback: c
            },
            en: {
                title: 'Notification',
                desc: 'Permission Denied',
                btnTxt: 'OK',
                okCallback: c
            },
            jp: {
                title: 'お知らせ',
                desc: '権限がありません',
                btnTxt: '確認',
                okCallback: c
            },
            cn: {
                title: '提醒',
                desc: '你没有权限访问',
                btnTxt: '确认',
                okCallback: c
            }
        };
        if (!e[d]) {
            return e.en;
        }
        return e[d];
    },
    authorizedByCode: function authorizedByCode(a) {
        var b = a;
        if (b == 'zh_Hans') {
            b = 'cn';
        }
        if (b == 'ja') {
            b = 'jp';
        }
        var c = {
            ko: {
                idText: 'ID',
                ticketText: '인증코드',
                authPopupTitle: '코드 인증'
            },
            jp: {
                idText: 'ID',
                ticketText: '認証コード',
                authPopupTitle: 'コード認証'
            },
            en: {
                idText: 'ID',
                ticketText: 'Auth code',
                authPopupTitle: 'Code authentication'
            },
            cn: {
                idText: 'ID',
                ticketText: 'Auth code',
                authPopupTitle: 'Code authentication'
            }
        };
        if (!c[b]) {
            return c.en;
        }
        return c[b];
    },
    authorizedByEmployeeNumber: function authorizedByEmployeeNumber(a) {
        var b = a;
        if (b == 'zh_Hans') {
            b = 'cn';
        }
        if (b == 'ja') {
            b = 'jp';
        }
        var c = {
            ko: {
                idText: 'ID',
                ticketText: '사원번호',
                authPopupTitle: '사원번호 인증'
            },
            jp: {
                idText: 'ID',
                ticketText: '사원번호',
                authPopupTitle: '사원번호 인증'
            },
            en: {
                idText: 'ID',
                ticketText: '사원번호',
                authPopupTitle: '사원번호 인증'
            },
            cn: {
                idText: 'ID',
                ticketText: '사원번호',
                authPopupTitle: '사원번호 인증'
            }
        };
        if (!c[b]) {
            return c.ko;
        }
        return c[b];
    }
};
var CHAT_MESSAGE_CONFIG = {
    placeholderOnMuteChat: function placeholderOnMuteChat(a) {
        var b = a;
        if (b == 'zh_Hans') {
            b = 'cn';
        }
        var c = {
            ko: '채팅을 사용할 수 없습니다.',
            en: 'Live chat is currently unavailable.',
            ja: 'チャットを使用できません',
            jp: 'チャットを使用できません',
            cn: '不能用聊天'
        };
        if (!c[b]) {
            return c.en;
        }
        return c[b];
    }
};

function createElementFromHTML(a) {
    var b = document.createElement('div');
    b.innerHTML = a.trim();
    return b.firstChild;
}
var BatchAuthUtil = {
    contentIdList: ['c67149eb-30fe-400c-98a3-a88a5b45e510', 'ff422c67-3389-4172-b31b-c624e1e187c5', '3bde171c-6e79-4e41-9392-3d1608535d85'],
    cookieGroup: {
        'c67149eb-30fe-400c-98a3-a88a5b45e510': ['c67149eb-30fe-400c-98a3-a88a5b45e510', 'ff422c67-3389-4172-b31b-c624e1e187c5', '3bde171c-6e79-4e41-9392-3d1608535d85'],
        'ff422c67-3389-4172-b31b-c624e1e187c5': ['c67149eb-30fe-400c-98a3-a88a5b45e510', 'ff422c67-3389-4172-b31b-c624e1e187c5', '3bde171c-6e79-4e41-9392-3d1608535d85'],
        '3bde171c-6e79-4e41-9392-3d1608535d85': ['c67149eb-30fe-400c-98a3-a88a5b45e510', 'ff422c67-3389-4172-b31b-c624e1e187c5', '3bde171c-6e79-4e41-9392-3d1608535d85']
    },
    isTargetEvent: function isTargetEvent() {
        var a = this.contentIdList;
        var b = DCvi;
        var c = false;
        if (a.indexOf(b) > -1) {
            c = true;
        }
        return c;
    },
    setCookieOnDeviceId: function setCookieOnDeviceId(a) {
        var b = this.cookieGroup;
        var c = this.contentIdList;
        var d = DCvi;
        var e = b[d];
        if (c.indexOf(d) < 0) {
            return;
        }
        if (!e) {
            return;
        }
        e.forEach(function(f, g) {
            if (a) {
                setCookie(f + '_device_id', a, 20160);
            }
        });
    },
    setCookiesOnGroup: function setCookiesOnGroup(a, b, c, d, e) {
        var f = a || [];
        var g = Array.isArray(f);
        if (!f || !g || g && f.length == 0) {
            return;
        }
        var h = 0;
        var j = f.length;
        var k = null;
        var l = null;
        var m = null;
        var n = null;
        var o = null;
        for (h = 0; h < j; h++) {
            k = f[h];
            l = k.content || {};
            m = k.user || {};
            n = l.id || null;
            o = m.user_id || null;
            if (n) {
                if (b) {
                    setCookie(n + '_customer_id', b, 20160);
                }
                if (c) {
                    setCookie(n + '_ticket_id', c, 20160);
                }
                if (d && o) {
                    setCookie(n + '_user_id', o, 20160);
                }
                if (e) {
                    setCookie(n + '_content_id', n, 20160);
                }
            }
        }
    }
};
var DREAMCONCERT_UTIL = {
    initArtistRoomLabel: function initArtistRoomLabel(a, b) {
        var c = document.querySelector('#player-artist-room-label');
        if (this.isDreamConcert(b) && c) {
            var d = '';
            var e = this.getArtistChannel(a);
            if (e === this.channels.rookie) {
                d = 'DREAM RISING';
            } else if (e === this.channels.all) {
                d = 'DREAM CONCERT';
            } else {
                d = a.replace(/\_/g, ' ');
            }
            c.textContent = d;
        }
    },
    getArtistRomm: function getArtistRomm() {
        var a = getQueryStringObject();
        if (this.matchArtistId[a === null || a === void 0 ? void 0 : a.user_id]) {
            return this.matchArtistId[a === null || a === void 0 ? void 0 : a.user_id];
        }
        return a === null || a === void 0 ? void 0 : a.artist_room;
    },
    contentId: 'fc6170aa-6f67-4076-b0f1-19250bee49dc',
    isDreamConcert: function isDreamConcert(a) {
        return this.contentId === a;
    },
    userChannel: 20,
    channels: {
        rookie: '1',
        ab6ix: '2',
        ace: '3',
        aespa: '4',
        cix: '5',
        itzy: '6',
        nctDream: '7',
        goldenChild: '8',
        kimJaehwan: '9',
        dreamcatcher: '10',
        laboum: '11',
        momoland: '12',
        bravegirls: '13',
        astro: '14',
        ohMyGirl: '15',
        onf: '16',
        wei: '17',
        wekiMeki: '18',
        ForteDiQuattro: '19',
        haSungWoon: '20',
        all: '21'
    },
    getChannelTable: function getChannelTable() {
        return {
            dream_rising: this.channels.rookie,
            ARIAZ: this.channels.rookie,
            PIXY: this.channels.rookie,
            T1419: this.channels.rookie,
            DKB: this.channels.rookie,
            DRIPPIN: this.channels.rookie,
            Sinchontiger: this.channels.rookie,
            AleXa: this.channels.rookie,
            KINGDOM: this.channels.rookie,
            HOT_ISSUE: this.channels.rookie,
            AB6IX: this.channels.ab6ix,
            'A.C.E': this.channels.ace,
            aespa: this.channels.aespa,
            CIX: this.channels.cix,
            ITZY: this.channels.itzy,
            NCT_DREAM: this.channels.nctDream,
            Golden_Child: this.channels.goldenChild,
            KIM_JAEHWAN: this.channels.kimJaehwan,
            DREAMCATCHER: this.channels.dreamcatcher,
            LABOUM: this.channels.laboum,
            MOMOLAND: this.channels.momoland,
            BraveGirls: this.channels.bravegirls,
            ASTRO: this.channels.astro,
            OH_MY_GIRL: this.channels.ohMyGirl,
            ONF: this.channels.onf,
            WEi: this.channels.wei,
            Weki_Meki: this.channels.wekiMeki,
            Forte_di_Quattro: this.channels.ForteDiQuattro,
            HA_SUNG_WOON: this.channels.haSungWoon
        };
    },
    matchArtistId: {
        '2fe55c76-ed0b-4f6f-b181-ad192bbf323f': 'AB6IX',
        '0f1dbb05-f2e6-46ac-a1d9-fbb228a9fc6f': 'A.C.E',
        'f134d872-6908-49a1-8c5c-1702e2ea01f4': 'aespa',
        '14c2489f-6ad4-4d83-8d21-1942052fd717': 'CIX',
        'cb0e547f-3efc-4dfa-a435-2db6cb115fc3': 'ITZY',
        '0a13c7e3-f5ce-4be6-80d6-6966bf5cf3dc': 'NCT_DREAM',
        '3ae66a0b-8cd6-41b0-bf3d-60edfff5f029': 'Golden_Child',
        '8910cf32-1e41-418f-885a-637b73cf7f7b': 'KIM_JAEHWAN',
        'ada7fca2-0d55-4587-ae6a-14a8bbc31bad': 'DREAMCATCHER',
        '17b7f7fa-b6eb-4da8-8d0c-60b543554060': 'LABOUM',
        '53f0e121-304c-4f39-8e2c-8e7cc523ae57': 'MOMOLAND',
        'f7017d7d-9b13-4e21-8a71-b1925eb464f4': 'BraveGirls',
        '818fb6d2-13d1-46af-b688-d0761a4cccbe': 'ASTRO',
        '6dd8697b-6b64-46a0-aa9b-9be1c6fb174b': 'OH_MY_GIRL',
        '8dc98163-4e94-4a4d-8358-ab2534db70a7': 'ONF',
        '907bbaa6-2d17-4891-82d6-7033f762f81a': 'WEi',
        '2c81c847-df63-43df-9d27-c54aa584e131': 'Weki_Meki',
        '9a8f0e18-3671-486d-8697-f3b2e89ac1fd': 'Forte_di_Quattro',
        '0d971cce-657a-41a3-a62b-e6d291cb0a0d': 'HA_SUNG_WOON',
        '17c8097f-efc9-4eac-8927-1a71ec0cecde': 'DKB',
        '2f337bb3-fd13-42ac-a7e6-245baff4bf91': 'PIXY',
        '42a04f80-70c6-4431-9a7e-ec457f85bcd0': 'ARIAZ',
        '6ebbcfeb-0fdd-4d87-9ca2-f1a1abe1897f': 'T1419',
        '92902712-2790-45e7-a793-8fd329ae3071': 'AleXa',
        '9e086e38-3ebc-41a3-a577-b97eea76f9e7': 'DRIPPIN',
        'a075abbb-d638-46aa-9212-d6cebe846c8e': 'HOT_ISSUE',
        'a90ded41-afe8-451d-8097-914b7c0968c1': 'KINGDOM',
        'da8f4405-8c7e-4abc-baec-75873e93c0ec': 'Sinchontiger'
    },
    getArtistChannel: function getArtistChannel(a) {
        return this.getChannelTable()[a] || this.channels.all;
    },
    getUserChannel: function getUserChannel(a) {
        return this.getChannelTable()[a] || this.channels.all;
    }
};
var ARTIST_ROOM_SELECTOR = {
    contentId: 'f3a82d31-a083-4679-88e1-c0961a925afb',
    title: 'dev_demo_event',
    imgSet: {
        'f3a82d31-a083-4679-88e1-c0961a925afb': [{
            value: null,
            url: 'all_room.jpg',
            label: 'DREAM CONCERT'
        }, {
            value: 'dream_rising',
            url: 'rookie.jpg',
            label: 'DREAM RISING'
        }, {
            value: 'AB6IX',
            url: 'artist_thumb_af4ca22b-8cf0-4c70-bfd6-7cdf9f3732c8.jpg',
            label: 'AB6IX'
        }, {
            value: 'A.C.E',
            url: 'artist_thumb_7035b00b-f1fd-400a-a963-222dcab5544e.jpg',
            label: 'A.C.E'
        }, {
            value: 'aespa',
            url: 'artist_thumb_94dbc46a-ea0e-4646-bcdb-ca7d950c7387.jpg',
            label: 'aespa'
        }, {
            value: 'CIX',
            url: 'artist_thumb_b1f01d75-cd90-4b0a-b32f-51fee33cacf4.jpg',
            label: 'CIX'
        }, {
            value: 'ITZY',
            url: 'artist_thumb_01aa300a-1d65-4c84-8d89-af4e6327d733.jpg',
            label: 'ITZY'
        }, {
            value: 'NCT_DREAM',
            url: 'artist_thumb_fe609759-5df5-4a42-a90f-c2efc00214c2.jpg',
            label: 'NCT DREAM'
        }, {
            value: 'Golden_Child',
            url: 'artist_thumb_f2cc345f-910d-48c7-a691-0e5ca0835861.jpg',
            label: 'Golden Child'
        }, {
            value: 'KIM_JAEHWAN',
            url: 'artist_thumb_4c9ab299-2ec3-44b0-9969-eeb8ed399b16.jpg',
            label: 'KIM JAEHWAN'
        }, {
            value: 'DREAMCATCHER',
            url: 'artist_thumb_a9ee4603-c3da-4895-81d6-6b62d12fdda7.jpg',
            label: 'DREAMCATCHER'
        }, {
            value: 'LABOUM',
            url: 'artist_thumb_b130e9d5-903d-423c-9990-666e8263a2c7.jpg',
            label: 'LABOUM'
        }, {
            value: 'MOMOLAND',
            url: 'artist_thumb_bc9f3648-81a2-4065-a579-2f70f0e54128.jpg',
            label: 'MOMOLAND'
        }, {
            value: 'BraveGirls',
            url: 'artist_thumb_918fc390-27b4-44d5-86ce-408a0290f41c.jpg',
            label: 'BraveGirls'
        }, {
            value: 'ASTRO',
            url: 'artist_thumb_b59b42b3-9aed-4cdb-aabb-4e1594595569.jpg',
            label: 'ASTRO'
        }, {
            value: 'OH_MY_GIRL',
            url: 'artist_thumb_aa6fdeaf-adba-4d23-b711-3a5c0eee0be6.jpg',
            label: 'OH MY GIRL'
        }, {
            value: 'ONF',
            url: 'artist_thumb_32f5cf50-b20e-4d79-bed4-e51fadf80abd.jpg',
            label: 'ONF'
        }, {
            value: 'WEi',
            url: 'artist_thumb_895438cc-655f-4aae-8d39-3f2e821e41f0.jpg',
            label: 'WEi'
        }, {
            value: 'Weki_Meki',
            url: 'artist_thumb_4558a78e-7fa7-4ba4-a61d-82c744a9981d.jpg',
            label: 'Weki Meki'
        }, {
            value: 'Forte_di_Quattro',
            url: 'artist_thumb_9807bf10-4cd0-4016-954d-c8ef0951e5ad.jpg',
            label: 'Forte di Quattro'
        }, {
            value: 'HA_SUNG_WOON',
            url: 'artist_thumb_24372ef7-3f65-4700-bd15-e28e3206a9c8.jpg',
            label: 'HA SUNG WOON'
        }],
        'fc6170aa-6f67-4076-b0f1-19250bee49dc': [{
            value: null,
            url: 'all_room.jpg',
            label: 'DREAM CONCERT'
        }, {
            value: 'dream_rising',
            url: 'rookie.jpg',
            label: 'DREAM RISING'
        }, {
            value: 'AB6IX',
            url: 'artist_thumb_2fe55c76-ed0b-4f6f-b181-ad192bbf323f.jpg',
            label: 'AB6IX'
        }, {
            value: 'A.C.E',
            url: 'artist_thumb_0f1dbb05-f2e6-46ac-a1d9-fbb228a9fc6f.jpg',
            label: 'A.C.E'
        }, {
            value: 'aespa',
            url: 'artist_thumb_f134d872-6908-49a1-8c5c-1702e2ea01f4.jpg',
            label: 'aespa'
        }, {
            value: 'CIX',
            url: 'artist_thumb_14c2489f-6ad4-4d83-8d21-1942052fd717.jpg',
            label: 'CIX'
        }, {
            value: 'ITZY',
            url: 'artist_thumb_cb0e547f-3efc-4dfa-a435-2db6cb115fc3.jpg',
            label: 'ITZY'
        }, {
            value: 'NCT_DREAM',
            url: 'artist_thumb_0a13c7e3-f5ce-4be6-80d6-6966bf5cf3dc.jpg',
            label: 'NCT DREAM'
        }, {
            value: 'Golden_Child',
            url: 'artist_thumb_3ae66a0b-8cd6-41b0-bf3d-60edfff5f029.jpg',
            label: 'Golden Child'
        }, {
            value: 'KIM_JAEHWAN',
            url: 'artist_thumb_8910cf32-1e41-418f-885a-637b73cf7f7b.jpg',
            label: 'KIM JAEHWAN'
        }, {
            value: 'DREAMCATCHER',
            url: 'artist_thumb_ada7fca2-0d55-4587-ae6a-14a8bbc31bad.jpg',
            label: 'DREAMCATCHER'
        }, {
            value: 'LABOUM',
            url: 'artist_thumb_17b7f7fa-b6eb-4da8-8d0c-60b543554060.jpg',
            label: 'LABOUM'
        }, {
            value: 'MOMOLAND',
            url: 'artist_thumb_53f0e121-304c-4f39-8e2c-8e7cc523ae57.jpg',
            label: 'MOMOLAND'
        }, {
            value: 'BraveGirls',
            url: 'artist_thumb_f7017d7d-9b13-4e21-8a71-b1925eb464f4.jpg',
            label: 'BraveGirls'
        }, {
            value: 'ASTRO',
            url: 'artist_thumb_818fb6d2-13d1-46af-b688-d0761a4cccbe.jpg',
            label: 'ASTRO'
        }, {
            value: 'OH_MY_GIRL',
            url: 'artist_thumb_6dd8697b-6b64-46a0-aa9b-9be1c6fb174b.jpg',
            label: 'OH MY GIRL'
        }, {
            value: 'ONF',
            url: 'artist_thumb_8dc98163-4e94-4a4d-8358-ab2534db70a7.jpg',
            label: 'ONF'
        }, {
            value: 'WEi',
            url: 'artist_thumb_907bbaa6-2d17-4891-82d6-7033f762f81a.jpg',
            label: 'WEi'
        }, {
            value: 'Weki_Meki',
            url: 'artist_thumb_2c81c847-df63-43df-9d27-c54aa584e131.jpg',
            label: 'Weki Meki'
        }, {
            value: 'Forte_di_Quattro',
            url: 'artist_thumb_9a8f0e18-3671-486d-8697-f3b2e89ac1fd.jpg',
            label: 'Forte di Quattro'
        }, {
            value: 'HA_SUNG_WOON',
            url: 'artist_thumb_0d971cce-657a-41a3-a62b-e6d291cb0a0d.jpg',
            label: 'HA SUNG WOON'
        }]
    },
    elements: {
        selectedImg: $('#img-artist-room-selected'),
        selectedRoomName: $('#artist-room-name-selected'),
        btnRoomSeletor: $('#btn-artist-room-selector'),
        popup: $('#modal-artichat-select')
    },
    value: null,
    cookiePrefix: 'drcrt2021_artist_room',
    init: function init(a, b) {
        var c = null;
        var d = this.imgSet;
        var e = this.cookiePrefix;
        if (!d[a]) {
            return;
        }
        this.contentId = a;
        this.title = b;
        var f = getCookie(e);
        if (!f || f == 'null') {
            setUserDefinedCookie(e, null);
            this.value = null;
        } else {
            this.value = f;
        }
        this._renderContents();
        this._addEventListeners();
        c = this.elements.popup.find('.artist-room-thumb[data-value=\''.concat(this.value, '\']'));
        this._update(c);
    },
    _addEventListeners: function _addEventListeners() {
        var a = this.elements;
        var b = a.btnRoomSeletor;
        var c = a.popup;
        b.on('click', function() {
            c.show();
        }.bind(this));
        c.on('click', '.artist-room-thumb', function(d) {
            var f = $(d.target);
            var g = f.closest('.artist-room-thumb');
            this._update(g);
            c.fadeOut(150);
        }.bind(this));
    },
    _update: function _update(a) {
        var b = a;
        var c = this.elements.popup.find('.content-list');
        var d = this.title;
        var e = b.data('url');
        var f = b.data('label');
        var g = 'https://resource.liveconnect.co.kr/events/imgs/'.concat(d, '/').concat(e);
        var h = this.cookiePrefix;
        var i = this.elements.selectedImg;
        var j = this.elements.selectedRoomName;
        i.attr('src', g);
        j.text(f);
        if (!a || a.length == 0) {
            return;
        }
        c.find('.artist-room-thumb').removeClass('selected');
        b.addClass('selected');
        this.value = b.data('value');
        if (this.value == 'null' || this.value == null || this.value == '') {
            this.value = null;
        }
        setUserDefinedCookie(h, this.value);
    },
    _renderContents: function _renderContents() {
        var a = this.contentId;
        var b = this.title;
        var c = this.imgSet[a];
        var d = 0;
        var e = c.length;
        var f = this.elements.popup;
        var g = function j(k) {
            return '<li class="artist-room-thumb" data-value="'.concat(k.value, '" data-label="').concat(k.label, '" data-url="').concat(k.url, '">\n        <img class="artist-room-thumb-img" src="https://resource.liveconnect.co.kr/events/imgs/').concat(b, '/').concat(k.url, '" />\n        <div class="artist-room-label">').concat(k.label, '</div>\n      </li>');
        };
        var h = '';
        for (d = 0; d < e; d++) {
            h += g(c[d]);
        }
        f.find('.content-list').html(h);
    }
};
var YoutubeSrcUtil = {
    contentId: null,
    elements: {
        btnGroup: $('#btn-group_yt'),
        youtubeWrap: $('#ifr-youtube-wrap'),
        iframe: $('#ifr-youtube-wrap').find('iframe')
    },
    sources: {
        'fc6170aa-6f67-4076-b0f1-19250bee49dc': [{
            label: 'DREAM CONCERT',
            src: 'https://www.youtube.com/embed/H8Bt_vlnHyU'
        }, {
            label: 'LEE TEUK',
            src: 'https://www.youtube.com/embed/I9yqhxJThpI'
        }, {
            label: 'A.C.E',
            src: 'https://www.youtube.com/embed/ymvpmIiDlR8'
        }, {
            label: 'aespa',
            src: 'https://www.youtube.com/embed/hzDWqD2Y5QA'
        }, {
            label: 'NCT DREAM',
            src: 'https://www.youtube.com/embed/bo1ZN7z57sM'
        }, {
            label: 'Brave Girls',
            src: 'https://www.youtube.com/embed/krHg_NLBfgw'
        }, {
            label: 'AleXa',
            src: 'https://www.youtube.com/embed/UMoj4I3VjAU'
        }, {
            label: 'HA SUNG WOON',
            src: 'https://www.youtube.com/embed/Iba5b3WMEpI'
        }, {
            label: 'DKB',
            src: 'https://www.youtube.com/embed/IeSK8PgxE18'
        }, {
            label: 'KINGDOM',
            src: 'https://www.youtube.com/embed/Ba_u3dOJi4I'
        }]
    },
    init: function init(a) {
        var b = a;
        var c = this.sources;
        if (!c[a]) {
            return;
        }
        this.contentId = a;
        this._render();
        this._attachEvents();
    },
    _render: function _render() {
        var a = '';
        var b = this.elements.btnGroup;
        var c = this.sources[this.contentId];
        var d = 0;
        var e = c.length;
        var f = function g(h) {
            return '<button class="btn_default btn-yt-src" data-yt-src="'.concat(h.src, '">\n        <span class="fc_btn_text">').concat(h.label, '</span>\n      </button>');
        };
        for (d = 0; d < e; d++) {
            a += f(c[d]);
        }
        b.html(a);
        b.find('.btn-yt-src').eq(0).addClass('active');
    },
    _attachEvents: function _attachEvents() {
        var a = this.elements.btnGroup;
        var b = this.elements.youtubeWrap;
        var c = this.elements.iframe;
        a.on('click', 'button.btn_default', function(d) {
            var f = $(d.target);
            var g = f.closest('.btn-yt-src');
            var h = g.data('yt-src');
            if (c.attr('src') == h) {
                return;
            }
            g.siblings('.btn-yt-src').removeClass('active');
            g.addClass('active');
            c.attr('src', h);
        });
    }
};
var b = autyp === 'None' || !autyp || autyp == '' ? null : autyp;
var c = stcud === undefined || stcud === '' || stcud === null ? null : stcud;

function d() {
    $('#dayWrap').css('display', 'none');
    $('#readyBtn').css('display', 'none');
    $('#enterBtn').css('display', 'none');
    $('#authBtn').css('display', 'none');
    $('#authMsg1').css('display', 'none');
    $('#authMsg2').css('display', 'none');
    $('#endBtn').css('display', 'inline-block');
    removeCookie(DCvi + '_customer_id');
    removeCookie(DCvi + '_ticket_id');
    removeCookie(DCvi + '_user_id');
    removeCookie(DCvi + '_chat_id');
}
if (ddv) {
    $(document).ready(function() {
        d();
    });
} else {
    var e = function w(x, y, z) {
        request_to_server('POST', RSAnd + '/user_auth/customer_login/', x, function(A) {
            o = JSON.parse(JSON.stringify(A.Data.content));
            p = JSON.parse(JSON.stringify(A.Data.user));
            if (A.Data.allowed_events) {
                q = JSON.parse(JSON.stringify(A.Data.allowed_events));
            }
            if (y) {
                y();
            }
        }, function() {
            if (z) {
                z();
            }
        });
    };
    var f = function x(y, z, A) {
        request_to_server('POST', RSAnd + '/user_auth/nickname/', y, function(B) {
            if (z) {
                z(B);
            }
        }, function(B, C) {
            if (A) {
                A(B, C);
            }
        });
    };
    var g = function y(z, A, B) {
        request_to_server('POST', RSAnd + '/user_auth/player_enter/', z, function(C) {
            if (A) {
                A(C);
            }
        }, function(C) {
            if (B) {
                B(C);
            }
        });
    };
    var h = function z(A) {
        var B = /[\/\\:*?<>|"]/gi;
        if (B.test(A)) {
            return true;
        } else {
            return false;
        }
    };
    var i = function A(B) {
        if (B.search(/\s/) != -1) {
            return true;
        } else {
            return false;
        }
    };
    var j = function B() {
        $('#loadingDiv').css('display', 'block');
        var C = egl;
        var D = POPUP_CONFIG.failToGetPlayerCode(C, null);
        var E = p;
        var F = o;
        var G = (F && F.id ? F.id : null) || DCvi;
        var H = {
            user_id: null,
            content_id: null,
            device_id: null
        };
        var I = null;
        var J = null;
        if (E && E.user_id) {
            H.user_id = E.user_id;
        }
        if (u) {
            H.device_id = u;
        }
        if (G) {
            H.content_id = G;
        }
        g(H, function(K) {
            $('#loadingDiv').css('display', 'none');
            console.log(K);
            I = K && K.Data ? K.Data : null;
            J = I && I.content ? I.content.player_code : null;
            if (J) {
                setCookie(DCvi + '_user_id', p.user_id, 20160);
                setCookie(DCvi + '_chat_id', p.chat_id, 20160);
                setCookie(DCvi + '_content_id', DCvi, 20160);
                BatchAuthUtil.setCookiesOnGroup(q, false, false, true, true);
                var L = LUEz1 + '/' + J;
                if (ARTIST_ROOM_SELECTOR.imgSet[DCvi]) {
                    if (ARTIST_ROOM_SELECTOR.value) {
                        L += '?artist_room='.concat(ARTIST_ROOM_SELECTOR.value);
                    }
                }
                location.href = L;
            } else if (D) {
                alertPopup(D.title, D.desc, D.btnTxt, D.okCallback);
            }
        }, function(K) {
            $('#loadingDiv').css('display', 'none');
            console.log(K);
            if (D) {
                alertPopup(D.title, D.desc, D.btnTxt, D.okCallback);
            }
        });
    };
    var k = function C(D, E) {
        if (b == 'code') {
            if (E == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                D.text('사원번호를 입력해 주세요.');
            } else {
                switch (egl) {
                    case 'ko':
                        D.text('인증코드를 입력해 주세요.');
                        break;
                    case 'en':
                        D.text('Enter authentication code.');
                        break;
                    case 'ja':
                    case 'jp':
                        D.text('認証コードを入力してください');
                        break;
                    case 'cn':
                        D.text('Enter authentication code');
                        break;
                }
            }
        } else {
            switch (egl) {
                case 'ko':
                    D.text('인터파크ID와 예매번호를 입력해 주세요.');
                    break;
                case 'en':
                    D.text('Enter INTERPARK ID and reservation number.');
                    break;
                case 'ja':
                case 'jp':
                    D.text('INTERPARK IDと購入番号を入力してください。');
                    break;
                case 'cn':
                    D.text('请输入INTERPARK账户和预订号码');
                    break;
            }
        }
    };
    var l = function D(E, F) {
        if (b == 'code') {
            if (F == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                E.text('사원번호가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
            } else {
                switch (egl) {
                    case 'ko':
                        E.text('인증코드가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                        break;
                    case 'en':
                        E.text('Authentication code is not valid. Please check and try again.');
                        break;
                    case 'ja':
                    case 'jp':
                        E.text('認証コードが正しくありません。確認後、正確に入力してください。');
                        break;
                    case 'cn':
                        E.text('Authentication code is not valid. Please check and try again.');
                        break;
                }
            }
        } else {
            switch (egl) {
                case 'ko':
                    E.text('인터파크ID 혹은 예매번호가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                    break;
                case 'en':
                    E.text('INTERPARK ID or reservation number is not valid. Please check and try again.');
                    break;
                case 'ja':
                case 'jp':
                    E.text('INTERPARK IDまたは購入番号が正しくありません。確認後、正確に入力してください。');
                    break;
                case 'cn':
                    E.text('INTERPARK账号和预订号码为无效。请输入正确的信息。');
                    break;
            }
        }
    };
    var m = function E(F) {
        $('#authPopup').css('display', 'none');
        $('#authBtn').css('display', 'none');
        $('#authMsg1').css('display', 'none');
        $('#authMsg2').css('display', 'none');
        $('#readyBtn').css('display', 'inline-block');
        $('#nicknamePopup').css('display', 'none');
        if (b == 'code') {
            switch (egl) {
                case 'ko':
                    alertPopup('알림', '인증이 완료되었습니다.', '확인');
                    break;
                case 'en':
                    alertPopup('Notification', 'Verification completed.', 'OK');
                    break;
                case 'ja':
                case 'jp':
                    alertPopup('お知らせ', '認証が完了しました。', '確認');
                    break;
                case 'cn':
                    alertPopup('提醒', '购票认证已完毕', '确认');
                    break;
            }
        } else {
            switch (egl) {
                case 'ko':
                    alertPopup('알림', '티켓 인증이 완료되었습니다.', '확인');
                    break;
                case 'en':
                    alertPopup('Notification', 'Ticket verification completed.', 'OK');
                    break;
                case 'ja':
                case 'jp':
                    alertPopup('お知らせ', '観覧券認証が完了しました', '確認');
                    break;
                case 'cn':
                    alertPopup('提醒', '购票认证已完毕', '确认');
                    break;
            }
        }
    };
    var n = function F(G, H) {
        ChatFilter.loadChatFilterData(function() {
            s = G;
            if (G == 'enter') {
                $('#loginPopup').css('display', 'none');
            } else if (G == 'auth') {
                $('#authPopup').css('display', 'none');
            }
            if (H) {
                $('#nickname').val(H);
            }
            switch (egl) {
                case 'ko':
                    $('#nicknameFailTxt').text('채팅 닉네임은 본 공연의 채팅사용을 위해 필요하며 1회용 닉네임입니다. (본 공연시에만 사용하며, 공연 종료 후 삭제됩니다.)');
                    break;
                case 'en':
                    $('#nicknameFailTxt').text('Nickname is required to join LIVE CHAT for this show and it is for single-use. (Valid only during the show, and will become invalid and deleted after the show.)');
                    break;
                case 'ja':
                case 'jp':
                    $('#nicknameFailTxt').text('ニックネームはライブ内でチャット使用のために必要であり、一回用のニックネームです。(ライブ内で使用され、ライブ終了後に削除されます。)');
                    break;
                case 'cn':
                    $('#nicknameFailTxt').text('账户名用于本演出的聊天功能，是单次性账户名。 (仅限用于本演出，演出结束后会删除。)');
                    break;
            }
            $('#nicknamePopup').css('display', 'block');
            $('#nickname').focus();
        });
    };
    if (checkIEbrowser() || isIOS() && checkEdgeBrowser() || checkInterparkApp()) {
        $('#enterBtn').css('display', 'none');
        $('#notSupportedBrowser').css('display', 'inline-block');
    }
    var o = null;
    var p = null;
    var q = null;
    var r = null;
    var s = '';
    var t = 0;
    var u = getCookie(DCvi + '_device_id');
    if (!u) {
        u = createDeviceId(DCvi);
        BatchAuthUtil.setCookieOnDeviceId(u);
    }
    $(document).ready(function() {
        var enterBtn = $('#enterBtn');
        var authBtn = $('#authBtn');
        var readyBtn = $('#readyBtn');
        var notSupportedBrowser = $('#notSupportedBrowser');
        var dayWrap = $('#dayWrap');
        var loginBtn = $('#loginBtn');
        var loginPopup = $('#loginPopup');
        var nicknamePopup = $('#nicknamePopup');
        var authPopup = $('#authPopup');
        var authMsg1 = $('#authMsg1');
        var authMsg2 = $('#authMsg2');
        var customerId = $('#customerId');
        var ticketId = $('#ticketId');
        var nickname = $('#nickname');
        var nicknameFailTxt = $('#nicknameFailTxt');
        var loginFailTxt = $('#loginFailTxt');
        var chk_save = $('#chk_save');
        var chk_save2 = $('#chk_save2');
        var createNickBtn = $('#createNickBtn');
        var authCustomerId = $('#authCustomerId');
        var authTicketId = $('#authTicketId');
        var authFailTxt = $('#authFailTxt');
        var authCheckBtn = $('#authCheckBtn');
        var a4 = new Date(parseInt(ete));
        var a5 = new Date(parseInt(cte));
        var a6 = new Date();
        var a7 = uath;
        var a8 = true;
        var a9 = {
            requestCreateNickname: null
        };
        var aa = false;
        authMsg1.css('display', 'none');
        authMsg2.css('display', 'none');
        ARTIST_ROOM_SELECTOR.init(DCvi, Tira);
        YoutubeSrcUtil.init(DCvi);
        var ab = function ai(aj) {
            authMsg1.css('display', 'none');
            authMsg2.css('display', 'none');
            authBtn.css('display', 'none');
            if (aj) {
                enterBtn.css('display', 'inline-block');
                readyBtn.css('display', 'none');
            } else {
                enterBtn.css('display', 'none');
                readyBtn.css('display', 'inline-block');
            }
            if (rtd) {
                enterBtn.css('display', 'inline-block');
            }
        };
        var ac = function aj() {
            a9.requestCreateNickname = setTimeout(function() {
                console.log('@@@RESET');
                nicknameFailTxt.text('');
                a8 = true;
            }, 1000);
        };
        var ad = function ak() {
            authCustomerId.text('');
            authTicketId.text('');
            authFailTxt.text('');
            chk_save.prop('checked', true);
            authPopup.css('display', 'block');
            if (!authCustomerId.val() && getCookie(DCvi + '_customer_id')) {
                authCustomerId.val(getCookie(DCvi + '_customer_id'));
            }
            if (!authTicketId.val() && getCookie(DCvi + '_ticket_id')) {
                authTicketId.val(getCookie(DCvi + '_ticket_id'));
            }
            authCustomerId.focus();
        };
        var ae = function al() {
            var am = egl;
            var an = DCvi;
            var ao = null;
            if (c !== null) {
                ao = POPUP_CONFIG.authorizedByCode(am);
                if (an == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                    ao = POPUP_CONFIG.authorizedByEmployeeNumber(am);
                }
                $('.popupbox .label_customer_id').text(ao.idText);
                $('.popupbox .label_ticket_id').text(ao.ticketText);
                customerId.prop('autofocus', false).prop('readonly', true).val(c);
                authCustomerId.prop('autofocus', false).prop('readonly', true).val(c);
                authPopup.find('.pop-tt.auth').text(ao.authPopupTitle);
            }
        };
        var af = function am(an, ao) {
            var ap = DCvi;
            if (!BatchAuthUtil.isTargetEvent(ap)) {
                return;
            }
            if (an && !ao) {
                ad();
            }
            if (!an && !ao) {
                enterBtn.click();
            }
        };
        ae();
        t = a5.getTime() - a6.getTime();
        if (a4 < a5) {
            dayWrap.css('display', 'none');
            if (!checkIEbrowser() && !(isIOS() && checkEdgeBrowser()) && !checkInterparkApp()) {
                enterBtn.css('display', 'inline-block');
            }
            readyBtn.css('display', 'none');
            authBtn.css('display', 'none');
            authMsg1.css('display', 'none');
            authMsg2.css('display', 'none');
        } else {
            if (dsev) {
                dayWrap.css('display', 'none');
            } else {
                dayWrap.css('display', 'block');
            }
            enterBtn.css('display', 'none');
            if (!a7) {
                ab(false);
            }
            var ag = function ap() {
                var aq = new Date();
                aq.setTime(aq.getTime() + t);
                aa = a4 <= aq;
                if (a4 <= aq) {
                    dayWrap.css('display', 'none');
                    enterBtn.css('display', 'inline-block');
                    readyBtn.css('display', 'none');
                    authBtn.css('display', 'none');
                    authMsg1.css('display', 'none');
                    authMsg2.css('display', 'none');
                    if (r) {
                        clearInterval(r);
                        return;
                    }
                } else {
                    if (!rtd) {
                        enterBtn.css('display', 'none');
                    }
                    if (!a7) {
                        ab(false);
                    }
                }
                var ar = (a4 - aq) / 1000;
                var as = parseInt(ar / 60 / 60 / 24);
                var at = parseInt(ar / 60 / 60 % 24);
                var au = parseInt(ar / 60 % 60);
                var av = parseInt(ar % 60);
                if (as < 10) {
                    as = '0' + as;
                }
                if (at < 10) {
                    at = '0' + at;
                }
                if (au < 10) {
                    au = '0' + au;
                }
                if (av < 10) {
                    av = '0' + av;
                }
                if (document.getElementById('day')) {
                    document.getElementById('day').innerHTML = as;
                }
                if (document.getElementById('hour')) {
                    document.getElementById('hour').innerHTML = at;
                }
                if (document.getElementById('minute')) {
                    document.getElementById('minute').innerHTML = au;
                }
                if (document.getElementById('second')) {
                    document.getElementById('second').innerHTML = av;
                }
            };
            ag();
            r = setInterval(ag, 1000);
        }
        if (checkIEbrowser() || isIOS() && checkEdgeBrowser() || checkInterparkApp()) {
            enterBtn.css('display', 'none');
            notSupportedBrowser.css('display', 'inline-block');
        } else {
            var ah = {
                content_id: DCvi,
                user_id: getCookie(DCvi + '_user_id'),
                device_id: getCookie(DCvi + '_device_id')
            };
            if (a4 > a5) {
                if (!a7) {
                    ab(false);
                } else if (!ah.user_id) {
                    authBtn.css('display', 'inline-block');
                    if (!dsev) {
                        authMsg1.css('display', 'block');
                        authMsg2.css('display', 'block');
                    }
                }
            }
            userSessionCheck(ah, function(as) {
                p = JSON.parse(JSON.stringify(as.Data.user));
                o = JSON.parse(JSON.stringify(as.Data.content));
                if (o.status == 'end') {
                    clearInterval(r);
                    d();
                } else if (o.is_chat_used) {
                    if (p.nickname) {
                        if (a4 > a5) {
                            if (!a7) {
                                ab(false);
                            } else {
                                readyBtn.css('display', 'inline-block');
                            }
                        }
                        authBtn.css('display', 'none');
                        authMsg1.css('display', 'none');
                        authMsg2.css('display', 'none');
                    } else if (a4 > a5) {
                        if (!a7) {
                            ab(false);
                        } else {
                            authBtn.css('display', 'inline-block');
                            if (BatchAuthUtil.isTargetEvent()) {
                                readyBtn.show();
                            }
                        }
                        if (!dsev && a7) {
                            authMsg1.css('display', 'block');
                            authMsg2.css('display', 'block');
                        }
                    }
                } else if (a4 > a5) {
                    if (!a7) {
                        ab(false);
                    } else {
                        authBtn.css('display', 'inline-block');
                        af(true, false);
                    }
                    if (!dsev && a7) {
                        authMsg1.css('display', 'block');
                        authMsg2.css('display', 'block');
                    }
                }
            }, function(as) {
                if (as.Data) {
                    if (as.Data.content.status == 'end') {
                        clearInterval(r);
                        d();
                    } else if (a4 > a5) {
                        if (!a7) {
                            ab(false);
                        } else {
                            authBtn.css('display', 'inline-block');
                            af(true, false);
                        }
                        if (!dsev && a7) {
                            authMsg1.css('display', 'block');
                            authMsg2.css('display', 'block');
                        }
                    } else {
                        af(false, false);
                        authBtn.css('display', 'none');
                        authMsg1.css('display', 'none');
                        authMsg2.css('display', 'none');
                    }
                }
            });
        }
        enterBtn.on('click', function() {
            customerId.val('');
            ticketId.val('');
            loginFailTxt.text('');
            chk_save2.prop('checked', true);
            ae();
            var at = {
                user_id: getCookie(DCvi + '_user_id'),
                device_id: getCookie(DCvi + '_device_id'),
                content_id: DCvi
            };
            if (!a7) {
                if (at.user_id) {
                    if (o && o.is_chat_used) {
                        n('enter', p.nickname);
                    } else {
                        j();
                    }
                } else {
                    loginBtn.click();
                }
                return;
            }
            userSessionCheck(at, function(av) {
                o = JSON.parse(JSON.stringify(av.Data.content));
                p = JSON.parse(JSON.stringify(av.Data.user));
                if (o.is_chat_used) {
                    n('enter', p.nickname);
                } else {
                    j();
                }
            }, function(av) {
                if (av.Data) {
                    if (av.Data.content.status == 'end') {
                        clearInterval(r);
                        d();
                    } else {
                        removeCookie(DCvi + '_user_id');
                        removeCookie(DCvi + '_chat_id');
                        loginPopup.css('display', 'block');
                        nicknamePopup.css('display', 'none');
                        if (!customerId.val() && getCookie(DCvi + '_customer_id')) {
                            customerId.val(getCookie(DCvi + '_customer_id'));
                        }
                        if (!ticketId.val() && getCookie(DCvi + '_ticket_id')) {
                            ticketId.val(getCookie(DCvi + '_ticket_id'));
                        }
                        customerId.focus();
                    }
                }
            });
        });
        $('#loginPopup button[name=closebtn]').on('click', function() {
            loginPopup.css('display', 'none');
        });
        loginBtn.on('click', function() {
            var at = customerId.val().trim();
            var au = ticketId.val().trim();
            if (a7 && (!at || !au)) {
                k(loginFailTxt, DCvi);
                return;
            }
            var av = {
                customer_id: at,
                ticket_id: au,
                content_id: DCvi,
                device_id: u
            };
            if (!a7) {
                av.customer_id = null;
                av.ticket_id = null;
            }
            e(av, function() {
                if (a7) {
                    if (chk_save2.prop('checked')) {
                        setCookie(DCvi + '_customer_id', av.customer_id, 20160);
                        setCookie(DCvi + '_ticket_id', av.ticket_id, 20160);
                    } else {
                        removeCookie(DCvi + '_customer_id');
                        removeCookie(DCvi + '_ticket_id');
                    }
                    setCookie(DCvi + '_ticket_id', av.ticket_id, 20160);
                    BatchAuthUtil.setCookiesOnGroup(q, false, av.ticket_id, false, false);
                }
                if (o.is_chat_used) {
                    n('enter', p.nickname);
                } else {
                    j();
                }
            }, function() {
                l(loginFailTxt, DCvi);
            });
        });
        $('#nicknamePopup button[name=closebtn]').on('click', function() {
            nickname.val('');
            nicknameFailTxt.text('');
            nicknamePopup.css('display', 'none');
        });
        createNickBtn.on('click', function() {
            var at = nickname.val();
            if (!at) {
                switch (egl) {
                    case 'ko':
                        nicknameFailTxt.text('닉네임을 입력해주세요.');
                        break;
                    case 'en':
                        nicknameFailTxt.text('Please enter your nickname.');
                        break;
                    case 'ja':
                    case 'jp':
                        nicknameFailTxt.text('ニックネームを入力してください');
                        break;
                    case 'cn':
                        nicknameFailTxt.text('请输入账户名');
                        break;
                }
                return;
            }
            if (h(at)) {
                switch (egl) {
                    case 'ko':
                        nicknameFailTxt.text('닉네임에는 특수문자를 포함할 수 없습니다.');
                        break;
                    case 'en':
                        nicknameFailTxt.text('Nickname cannot contain any special characters.');
                        break;
                    case 'ja':
                    case 'jp':
                        nicknameFailTxt.text('ニックネームに特殊文字を含めることはできません');
                        break;
                    case 'cn':
                        nicknameFailTxt.text('账户名不能添加特殊文字');
                        break;
                }
            } else if (i(at)) {
                switch (egl) {
                    case 'ko':
                        nicknameFailTxt.text('닉네임에는 공백을 포함할 수 없습니다.');
                        break;
                    case 'en':
                        nicknameFailTxt.text('Nickname cannot contain any space.');
                        break;
                    case 'ja':
                    case 'jp':
                        nicknameFailTxt.text('ニックネームに空白を含めることはできません');
                        break;
                    case 'cn':
                        nicknameFailTxt.text('账户名不包含空白');
                        break;
                }
            } else if (at.length < 2 || at.length > 12) {
                switch (egl) {
                    case 'ko':
                        nicknameFailTxt.text('닉네임은 2~12자로 입력해 주세요.');
                        break;
                    case 'en':
                        nicknameFailTxt.text('Please enter 2 to 12 characters.');
                        break;
                    case 'ja':
                    case 'jp':
                        nicknameFailTxt.text('ニックネームは2〜12文字に入力してください');
                        break;
                    case 'cn':
                        nicknameFailTxt.text('账户名仅限2~12字节');
                        break;
                }
            } else if (NicknameFilter.hasForbidden(at) || ChatFilter.checkNickname(at)) {
                switch (egl) {
                    case 'ko':
                        nicknameFailTxt.text('사용할 수 없는 닉네임입니다.');
                        break;
                    case 'en':
                        nicknameFailTxt.text('This nickname cannot be used.');
                        break;
                    case 'ja':
                    case 'jp':
                        nicknameFailTxt.text('使用できないニックネームです');
                        break;
                    case 'cn':
                        nicknameFailTxt.text('不能使用该账户名。');
                        break;
                }
            } else {
                clearTimeout(a9.requestCreateNickname);
                if (!a8) {
                    nicknameFailTxt.text(POPUP_CONFIG.duplicatedNickname(egl).desc);
                    ac();
                }
                if (!a8) {
                    return;
                }
                var au = {
                    user_id: p.user_id,
                    device_id: u,
                    nickname: at,
                    content_id: DCvi
                };
                $('#loadingDiv').css('display', 'block');
                f(au, function() {
                    a8 = true;
                    clearTimeout(a9.requestCreateNickname);
                    if (s == 'auth') {
                        m(DCvi);
                        if (aa) {
                            readyBtn.css('display', 'none');
                        }
                    } else if (s == 'enter') {
                        $('#loadingDiv').css('display', 'none');
                        nicknamePopup.css('display', 'none');
                        var aI = '';
                        var aJ = '';
                        var aK = '';
                        switch (egl) {
                            case 'ko':
                                aJ = '알림';
                                aI = '닉네임 생성이 완료되었습니다.';
                                aK = '확인';
                                break;
                            case 'en':
                                aJ = 'Notification';
                                aI = 'Nickname successfully created.';
                                aK = 'OK';
                                break;
                            case 'ja':
                            case 'jp':
                                aJ = 'お知らせ';
                                aI = 'ニックネーム作成を完了しました';
                                aK = '確認';
                                break;
                            case 'cn':
                                aJ = '提醒';
                                aI = '账户名生成完毕';
                                aK = '确认';
                                break;
                        }
                        alertPopup(aJ, aI, aK, j);
                    }
                }, function(aI, aJ) {
                    a8 = false;
                    ac();
                    var aK = aI && aI.Message == 'nickname duplicated.' || aJ == 409;
                    if (aK) {
                        switch (egl) {
                            case 'ko':
                                nicknameFailTxt.text('이미 사용 중인 닉네임입니다.');
                                break;
                            case 'en':
                                nicknameFailTxt.text('This nickname is already taken.');
                                break;
                            case 'ja':
                            case 'jp':
                                nicknameFailTxt.text('既に使用中のニックネームです');
                                break;
                            case 'cn':
                                nicknameFailTxt.text('此用户名已被注册');
                                break;
                        }
                    } else if (aJ === 403) {
                        switch (egl) {
                            case 'ko':
                                nicknameFailTxt.text('사용할 수 없는 닉네임입니다.');
                                break;
                            case 'en':
                                nicknameFailTxt.text('This nickname cannot be used.');
                                break;
                            case 'ja':
                            case 'jp':
                                nicknameFailTxt.text('使用できないニックネームです');
                                break;
                            case 'cn':
                                nicknameFailTxt.text('不能使用该账户名。');
                                break;
                        }
                    } else {
                        switch (egl) {
                            case 'ko':
                                nicknameFailTxt.text('닉네임 생성에 실패하였습니다. 다시 시도해 주세요.');
                                break;
                            case 'en':
                                nicknameFailTxt.text('Failed to create a nickname. Please try again.');
                                break;
                            case 'ja':
                            case 'jp':
                                nicknameFailTxt.text('ニックネーム作成に失敗しました。もう一度入力してください。');
                                break;
                            case 'cn':
                                nicknameFailTxt.text('生成账户名失败，请重新输入');
                                break;
                        }
                    }
                });
            }
        });
        $('#customerId,#ticketId').on('keydown', function(at) {
            if (at.keyCode == 13) {
                loginBtn.click();
            }
        });
        nickname.on('keydown', function(at) {
            if (at.keyCode == 13) {
                createNickBtn.click();
            }
        });
        authBtn.on('click', ad);
        authCheckBtn.on('click', function() {
            var at = authCustomerId.val().trim();
            var au = authTicketId.val().trim();
            if (!at || !au) {
                k(authFailTxt, DCvi);
                return;
            }
            var av = {
                customer_id: at,
                ticket_id: au,
                content_id: DCvi,
                device_id: u
            };
            e(av, function() {
                if (chk_save.prop('checked')) {
                    setCookie(DCvi + '_customer_id', av.customer_id, 20160);
                    setCookie(DCvi + '_ticket_id', av.ticket_id, 20160);
                    BatchAuthUtil.setCookiesOnGroup(q, av.customer_id, av.ticket_id, false, false);
                    if (p) {
                        setCookie(DCvi + '_user_id', p.user_id, 20160);
                        BatchAuthUtil.setCookiesOnGroup(q, null, null, true, false);
                    }
                } else {
                    removeCookie(DCvi + '_customer_id');
                    removeCookie(DCvi + '_ticket_id');
                    removeCookie(DCvi + '_user_id');
                }
                if (o.is_chat_used) {
                    n('auth', p.nickname);
                } else {
                    m(DCvi);
                }
            }, function() {
                l(authFailTxt, DCvi);
            });
        });
        $('#authCustomerId, #authTicketId').on('keydown', function(at) {
            if (at.keyCode == 13) {
                authCheckBtn.click();
            }
        });
        $('#authPopup button[name=closebtn]').on('click', function() {
            authPopup.css('display', 'none');
        });
        if (rtd) {
            enterBtn.css('display', 'inline-block');
            readyBtn.remove();
            authBtn.remove();
            authMsg1.remove();
            authMsg2.remove();
        }
    });
    window.onpageshow = function(H) {
        var I = null;
        var J = window.performance;
        var K = J && J.getEntriesByType ? J.getEntriesByType('navigation') : null;
        var L = K && K[0] ? K[0].type : null;
        console.log(L);
        if (H.persisted || L == 'back_forward' || I == 2) {
            location.reload();
        }
    };
}
window.onpageshow = function(a) {
    var b = performance.getEntriesByType('navigation');
    var c = b[0];
    var d = null;
    if (c) {
        var e = c.toJSON();
        if (e) {
            d = e.type;
        }
    }
    if (a.persisted || window.performance && window.performance.navigation.type == 2 || d == 2) {
        location.reload();
    }
};
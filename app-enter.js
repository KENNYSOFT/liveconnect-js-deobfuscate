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
    $(document).click(function(o) {
        $('.cusDD_options').slideUp(200);
        $('.cusDD_arrow').removeClass('active');
    });
    $(a).click(function(o) {
        var p = a;
        $('.cusDD').not(p).find('.cusDD_options').slideUp(200);
        $('.cusDD').not(p).find('.cusDD_arrow').removeClass('active');
        console.log(' select : ', p);
        o.stopPropagation();
        if ($(o.target).attr('id') == 'qualitySelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#qualityPopup').css('display', 'block');
            return;
        }
        if ($(o.target).attr('id') == 'ccSelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#subtitlePopup').css('display', 'block');
            return;
        }
        var q = 200;
        if ($(this).find('.cusDD_options').children()) {
            if ($(this).find('.cusDD_options').children().length > 30) {
                q = 0;
            }
        }
        $(this).find('.cusDD_options').slideToggle(q);
        $(this).find('.cusDD_arrow').toggleClass('active');
    });
    $(a).find('.cusDD_opt').click(function() {
        $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
        if (c) {
            c($(this).data(), $(this));
        }
    });
}
var d = function() {
    var f = true;
    return function(g, h) {
        var i = f ? function() {
            if (h) {
                var k = h.apply(g, arguments);
                h = null;
                return k;
            }
        } : function() {};
        f = false;
        return i;
    };
}();
var e = d(this, function() {
    var f;
    try {
        var g = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
        f = g();
    } catch (n) {
        f = window;
    }
    var h = f.console = f.console || {};
    var i = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    for (var j = 0; j < i.length; j++) {
        var k = d.constructor.prototype.bind(d);
        var l = i[j];
        var m = h[l] || k;
        k.__proto__ = d.bind(d);
        k.toString = m.toString.bind(m);
        h[l] = k;
    }
});
e();
$.fn.changeElementType = function(f) {
    var g = {};
    $.each(this[0].attributes, function(i, j) {
        g[j.nodeName] = j.nodeValue;
    });
    this.replaceWith(function() {
        return $('<' + f + '/>', g).append($(this).contents());
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
    var a = '';
    var b = false;
    return {
        loadChatFilterData: function c(d) {
            if (b) {
                if (d) {
                    d();
                }
                return;
            }
            var e = new XMLHttpRequest();
            switch (Tira) {
                case 'IDLE':
                    e.open('GET', '/static/filtering/chat_filtering_idle.txt');
                    break;
                case '210417_cix':
                    e.open('GET', '/static/filtering/chat_filtering_cix.txt');
                    break;
                case '210424_mamamoo':
                    e.open('GET', '/static/filtering/chat_filtering_mamamoo.txt');
                    break;
                case '210604_parkyuchun_1':
                case '210604_parkyuchun_2':
                    e.open('GET', '/static/filtering/chat_filtering_parkyuchun.txt');
                    break;
                case '210606_cravity':
                    e.open('GET', '/static/filtering/chat_filtering_cravity.txt');
                    break;
                default:
                    if (Tira.indexOf('everglow') !== -1) {
                        e.open('GET', '/static/filtering/chat_filtering_everglow.txt');
                    } else {
                        e.open('GET', '/static/filtering/chat_filtering.txt');
                    }
                    break;
            }
            e.overrideMimeType('text/plain; charset=utf-8');
            e.onreadystatechange = function() {
                if (e.readyState == XMLHttpRequest.DONE) {
                    if (e.status == 200 || e.status == 201) {
                        a = e.responseText.replace(/(\r\n\t|\n|\r\t)/gm, '|');
                        a = a.replace(/[\r]/gm, '');
                        if (a[a.length - 1] == '|') {
                            a = a.substr(0, a.length - 1);
                        }
                        b = true;
                        if (d) {
                            d();
                        }
                    }
                }
            };
            e.send();
        },
        filteringChatText: function d(e) {
            if (!b) {
                return;
            }
            var f = 'gi';
            var g = new RegExp(a, f);
            return e.replace(g, '***');
        },
        checkFilteringData: function e() {
            return b;
        },
        checkNickname: function f(g) {
            if (!b) {
                return;
            }
            var h = 'gi';
            var i = new RegExp(a, h);
            return i.test(g);
        }
    };
}();
var NicknameFilter = function() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Tira;
    var b = '';
    if (a == '210424_mamamoo') {
        b = '솔라, ソラ, SOLARSIDO, 솔라시도, Solar-sido, 계약, 해체, 에릭남, 개비덥, 알비답, 김진우, 김도훈'.split(',');
        b = b.map(function(c) {
            return c.replace(/ /gi, '');
        }).join('|');
    }
    return {
        hasForbidden: function c(d) {
            if (b === '') {
                return false;
            }
            var e = new RegExp(b, 'gi');
            return e.test(d);
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
                        var j = JSON.parse(f.responseText);
                        e(j, f.status);
                    } catch (l) {
                        e(f.responseText, f.status);
                    }
                }
            }
        } else {}
    };
    f.ontimeout = function(j) {
        console.log(j);
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
            return !c ? isIpadOS() : c;
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
var EVENT_SELELCTOR = {
    contentId: 'c67149eb-30fe-400c-98a3-a88a5b45e510',
    title: '210803_dreamconcertvod_1',
    imgSet: {
        'c67149eb-30fe-400c-98a3-a88a5b45e510': [{
            value: 'c67149eb-30fe-400c-98a3-a88a5b45e510',
            playerUrl: 'dreamconcert2021_vod/db9c4a80-2764-4005-9972-7930c3a3c3c2',
            url: '1.jpg',
            label: 'DREAM RISING'
        }, {
            value: 'ff422c67-3389-4172-b31b-c624e1e187c5',
            playerUrl: 'dreamconcert2021_vod2/7b921e25-0d74-4b98-899c-a699127e094c',
            url: '2.jpg',
            label: 'RED CARPET'
        }, {
            value: '3bde171c-6e79-4e41-9392-3d1608535d85',
            playerUrl: 'dreamconcert2021_vod3/631db9d3-55f6-44c6-8f46-c05fdb03088e',
            url: '3.jpg',
            label: 'DREAM CONCERT'
        }]
    },
    elements: {
        selectedImg: $('#img-artist-room-selected'),
        selectedRoomName: $('#artist-room-name-selected'),
        btnRoomSeletor: $('#btn-artist-room-selector'),
        popup: $('#modal-artichat-select')
    },
    imgUrlPrefix: 'event_thumb_',
    value: null,
    cookiePrefix: 'drcrt2021_vod_event',
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
            this.value = 'c67149eb-30fe-400c-98a3-a88a5b45e510';
        } else {
            this.value = f;
        }
        this.elements.popup.addClass('event-select');
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
        var g = 'https://resource.liveconnect.co.kr/events/imgs/'.concat(d, '/').concat(this.imgUrlPrefix).concat(e);
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
        var g = this.imgUrlPrefix;
        var h = function k(l) {
            return '<li class="artist-room-thumb" data-value="'.concat(l.value, '" data-label="').concat(l.label, '" data-url="').concat(l.url, '" data-player-url="').concat(l.playerUrl, '">\n        <img class="artist-room-thumb-img" src="https://resource.liveconnect.co.kr/events/imgs/').concat(b, '/').concat(g).concat(l.url, '" />\n        <div class="artist-room-label">').concat(l.label, '</div>\n      </li>');
        };
        var j = '';
        for (d = 0; d < e; d++) {
            j += h(c[d]);
        }
        f.find('.content-list').html(j);
    },
    getPlayerUrl: function getPlayerUrl() {
        var a = this.imgSet[this.contentId];
        var b = null;
        var c = null;
        var d = '';
        var e = 0;
        var f = a.length;
        for (e = 0; e < f; e++) {
            var g = a[e];
            if (g.value === this.value) {
                b = g;
                break;
            }
        }
        c = b.playerUrl;
        d = ''.concat(window.location.origin, '/').concat(c);
        return d;
    }
};
var AddParamtoUrl = function AddParamtoUrl(a, b, c) {
    var d = new RegExp('([?&])' + b + '=.*?(&|$)', 'i');
    var e = a.indexOf('?') !== -1 ? '&' : '?';
    if (a.match(d)) {
        return a.replace(d, '$1' + b + '=' + c + '$2');
    } else {
        return a + e + b + '=' + c;
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
    var e = function x(y, z, A) {
        request_to_server('POST', RSAnd + '/user_auth/customer_login/', y, function(B) {
            p = JSON.parse(JSON.stringify(B.Data.content));
            q = JSON.parse(JSON.stringify(B.Data.user));
            if (B.Data.allowed_events) {
                r = JSON.parse(JSON.stringify(B.Data.allowed_events));
            }
            if (z) {
                z();
            }
        }, function() {
            if (A) {
                A();
            }
        });
    };
    var f = function y(z, A, B) {
        request_to_server('POST', RSAnd + '/user_auth/nickname/', z, function(C) {
            if (A) {
                A(C);
            }
        }, function(C, D) {
            if (B) {
                B(C, D);
            }
        });
    };
    var g = function z(A, B, C) {
        request_to_server('POST', RSAnd + '/user_auth/player_enter/', A, function(D) {
            if (B) {
                B(D);
            }
        }, function(D) {
            if (C) {
                C(D);
            }
        });
    };
    var h = function A(B) {
        var C = /[\/\\:*?<>|"]/gi;
        if (C.test(B)) {
            return true;
        } else {
            return false;
        }
    };
    var i = function B(C) {
        return C.search(/\s/) != -1 ? true : false;
    };
    var j = function C() {
        $('#loadingDiv').css('display', 'block');
        var D = egl;
        var E = POPUP_CONFIG.failToGetPlayerCode(D, null);
        var F = q;
        var G = p;
        var H = (G && G.id ? G.id : null) || DCvi;
        var I = {
            user_id: null,
            content_id: null,
            device_id: null
        };
        var J = null;
        var K = null;
        if (F && F.user_id) {
            I.user_id = F.user_id;
        }
        if (v) {
            I.device_id = v;
        }
        if (H) {
            I.content_id = H;
        }
        g(I, function(L) {
            $('#loadingDiv').css('display', 'none');
            console.log(L);
            J = L && L.Data ? L.Data : null;
            K = J && J.content ? J.content.player_code : null;
            if (K) {
                setCookie(DCvi + '_user_id', q.user_id, 20160);
                setCookie(DCvi + '_chat_id', q.chat_id, 20160);
                setCookie(DCvi + '_content_id', DCvi, 20160);
                BatchAuthUtil.setCookiesOnGroup(r, false, false, true, true);
                var M = LUEz1 + '/' + K;
                if (ARTIST_ROOM_SELECTOR.imgSet[DCvi]) {
                    if (ARTIST_ROOM_SELECTOR.value) {
                        M += '?artist_room='.concat(ARTIST_ROOM_SELECTOR.value);
                    }
                }
                if (EVENT_SELELCTOR.imgSet[DCvi]) {
                    if (EVENT_SELELCTOR.value) {
                        M = EVENT_SELELCTOR.getPlayerUrl();
                    }
                }
                location.href = M;
            } else if (E) {
                alertPopup(E.title, E.desc, E.btnTxt, E.okCallback);
            }
        }, function(L) {
            $('#loadingDiv').css('display', 'none');
            console.log(L);
            if (E) {
                alertPopup(E.title, E.desc, E.btnTxt, E.okCallback);
            }
        });
    };
    var k = function D(E, F) {
        if (b == 'code') {
            if (F == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                E.text('사원번호를 입력해 주세요.');
            } else {
                switch (egl) {
                    case 'ko':
                        E.text('인증코드를 입력해 주세요.');
                        break;
                    case 'en':
                        E.text('Enter authentication code.');
                        break;
                    case 'ja':
                    case 'jp':
                        E.text('認証コードを入力してください');
                        break;
                    case 'cn':
                        E.text('Enter authentication code');
                        break;
                }
            }
        } else {
            switch (egl) {
                case 'ko':
                    E.text('인터파크ID와 예매번호를 입력해 주세요.');
                    break;
                case 'en':
                    E.text('Enter INTERPARK ID and reservation number.');
                    break;
                case 'ja':
                case 'jp':
                    E.text('INTERPARK IDと購入番号を入力してください。');
                    break;
                case 'cn':
                    E.text('请输入INTERPARK账户和预订号码');
                    break;
            }
        }
    };
    var l = function E(F, G) {
        if (b == 'code') {
            if (G == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                F.text('사원번호가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
            } else {
                switch (egl) {
                    case 'ko':
                        F.text('인증코드가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                        break;
                    case 'en':
                        F.text('Authentication code is not valid. Please check and try again.');
                        break;
                    case 'ja':
                    case 'jp':
                        F.text('認証コードが正しくありません。確認後、正確に入力してください。');
                        break;
                    case 'cn':
                        F.text('Authentication code is not valid. Please check and try again.');
                        break;
                }
            }
        } else {
            switch (egl) {
                case 'ko':
                    F.text('인터파크ID 혹은 예매번호가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                    break;
                case 'en':
                    F.text('INTERPARK ID or reservation number is not valid. Please check and try again.');
                    break;
                case 'ja':
                case 'jp':
                    F.text('INTERPARK IDまたは購入番号が正しくありません。確認後、正確に入力してください。');
                    break;
                case 'cn':
                    F.text('INTERPARK账号和预订号码为无效。请输入正确的信息。');
                    break;
            }
        }
    };
    var m = function F(G) {
        var H = G.getFullYear();
        var I = G.getMonth() + 1;
        var J = G.getDate();
        var K = (I > 9 ? '' : '0') + I;
        var L = (J > 9 ? '' : '0') + J;
        var M = G.getHours();
        var N = G.getMinutes();
        var O = M >= 12 ? 'PM' : 'AM';
        M = M % 12;
        M = M ? M : 12;
        N = N < 10 ? '0' + N : N;
        var P = M + ':' + N + ' ' + O;
        return H + '.' + K + '.' + L + ' ' + P + '(KST)';
    };
    var n = function G(H) {
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
    var o = function H(I, J) {
        ChatFilter.loadChatFilterData(function() {
            t = I;
            if (I == 'enter') {
                $('#loginPopup').css('display', 'none');
            } else if (I == 'auth') {
                $('#authPopup').css('display', 'none');
            }
            if (J) {
                $('#nickname').val(J);
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
    var p = null;
    var q = null;
    var r = null;
    var s = null;
    var t = '';
    var u = 0;
    var v = getCookie(DCvi + '_device_id');
    if (!v) {
        v = createDeviceId(DCvi);
        BatchAuthUtil.setCookieOnDeviceId(v);
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
        var event_start_time = $('#event-start-time');
        var a6 = new Date(parseInt(ete));
        var a7 = new Date(parseInt(cte));
        var a8 = new Date();
        var a9 = uath;
        var aa = true;
        var ab = {
            requestCreateNickname: null
        };
        var ac = false;
        var ad = m(new Date(EVENT_START_TIME));
        authMsg1.css('display', 'none');
        authMsg2.css('display', 'none');
        event_start_time.text(ad);
        ARTIST_ROOM_SELECTOR.init(DCvi, Tira);
        EVENT_SELELCTOR.init(DCvi, Tira);
        YoutubeSrcUtil.init(DCvi);
        var ae = function al(am) {
            authMsg1.css('display', 'none');
            authMsg2.css('display', 'none');
            authBtn.css('display', 'none');
            if (am) {
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
        var af = function am() {
            ab.requestCreateNickname = setTimeout(function() {
                console.log('@@@RESET');
                nicknameFailTxt.text('');
                aa = true;
            }, 1000);
        };
        var ag = function an() {
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
        var ah = function ao() {
            var ap = egl;
            var aq = DCvi;
            var ar = null;
            if (c !== null) {
                ar = POPUP_CONFIG.authorizedByCode(ap);
                if (aq == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                    ar = POPUP_CONFIG.authorizedByEmployeeNumber(ap);
                }
                $('.popupbox .label_customer_id').text(ar.idText);
                $('.popupbox .label_ticket_id').text(ar.ticketText);
                customerId.prop('autofocus', false).prop('readonly', true).val(c);
                authCustomerId.prop('autofocus', false).prop('readonly', true).val(c);
                authPopup.find('.pop-tt.auth').text(ar.authPopupTitle);
            }
        };
        var ai = function ap(aq, ar) {
            var as = DCvi;
            if (!BatchAuthUtil.isTargetEvent(as)) {
                return;
            }
            if (aq && !ar) {}
            if (!aq && !ar) {}
        };
        ah();
        u = a7.getTime() - a8.getTime();
        if (a6 < a7) {
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
            if (!a9) {
                ae(false);
            }
            var aj = function au() {
                var av = new Date();
                av.setTime(av.getTime() + u);
                ac = a6 <= av;
                if (a6 <= av) {
                    dayWrap.css('display', 'none');
                    enterBtn.css('display', 'inline-block');
                    readyBtn.css('display', 'none');
                    authBtn.css('display', 'none');
                    authMsg1.css('display', 'none');
                    authMsg2.css('display', 'none');
                    if (s) {
                        clearInterval(s);
                        return;
                    }
                } else {
                    if (!rtd) {
                        enterBtn.css('display', 'none');
                    }
                    if (!a9) {
                        ae(false);
                    }
                }
                var aw = (a6 - av) / 1000;
                var ax = parseInt(aw / 60 / 60 / 24);
                var ay = parseInt(aw / 60 / 60 % 24);
                var az = parseInt(aw / 60 % 60);
                var aA = parseInt(aw % 60);
                if (ax < 10) {
                    ax = '0' + ax;
                }
                if (ay < 10) {
                    ay = '0' + ay;
                }
                if (az < 10) {
                    az = '0' + az;
                }
                if (aA < 10) {
                    aA = '0' + aA;
                }
                if (document.getElementById('day')) {
                    document.getElementById('day').innerHTML = ax;
                }
                if (document.getElementById('hour')) {
                    document.getElementById('hour').innerHTML = ay;
                }
                if (document.getElementById('minute')) {
                    document.getElementById('minute').innerHTML = az;
                }
                if (document.getElementById('second')) {
                    document.getElementById('second').innerHTML = aA;
                }
            };
            aj();
            s = setInterval(aj, 1000);
        }
        if (checkIEbrowser() || isIOS() && checkEdgeBrowser() || checkInterparkApp()) {
            enterBtn.css('display', 'none');
            notSupportedBrowser.css('display', 'inline-block');
        } else {
            var ak = {
                content_id: DCvi,
                user_id: getCookie(DCvi + '_user_id'),
                device_id: getCookie(DCvi + '_device_id')
            };
            if (a6 > a7) {
                if (!a9) {
                    ae(false);
                } else if (!ak.user_id) {
                    authBtn.css('display', 'inline-block');
                    if (!dsev) {
                        authMsg1.css('display', 'block');
                        authMsg2.css('display', 'block');
                    }
                }
            }
            userSessionCheck(ak, function(aw) {
                q = JSON.parse(JSON.stringify(aw.Data.user));
                p = JSON.parse(JSON.stringify(aw.Data.content));
                if (p.status == 'end') {
                    clearInterval(s);
                    d();
                } else if (p.is_chat_used) {
                    if (q.nickname) {
                        if (a6 > a7) {
                            if (!a9) {
                                ae(false);
                            } else {
                                readyBtn.css('display', 'inline-block');
                            }
                        }
                        authBtn.css('display', 'none');
                        authMsg1.css('display', 'none');
                        authMsg2.css('display', 'none');
                    } else if (a6 > a7) {
                        if (!a9) {
                            ae(false);
                        } else {
                            authBtn.css('display', 'inline-block');
                            if (BatchAuthUtil.isTargetEvent()) {
                                readyBtn.show();
                            }
                        }
                        if (!dsev && a9) {
                            authMsg1.css('display', 'block');
                            authMsg2.css('display', 'block');
                        }
                    }
                } else if (a6 > a7) {
                    if (!a9) {
                        ae(false);
                    } else {
                        authBtn.css('display', 'inline-block');
                        ai(true, false);
                    }
                    if (!dsev && a9) {
                        authMsg1.css('display', 'block');
                        authMsg2.css('display', 'block');
                    }
                }
            }, function(aw) {
                if (aw.Data) {
                    if (aw.Data.content.status == 'end') {
                        clearInterval(s);
                        d();
                    } else if (a6 > a7) {
                        if (!a9) {
                            ae(false);
                        } else {
                            authBtn.css('display', 'inline-block');
                            ai(true, false);
                        }
                        if (!dsev && a9) {
                            authMsg1.css('display', 'block');
                            authMsg2.css('display', 'block');
                        }
                    } else {
                        ai(false, false);
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
            ah();
            var aw = {
                user_id: getCookie(DCvi + '_user_id'),
                device_id: getCookie(DCvi + '_device_id'),
                content_id: DCvi
            };
            if (!a9) {
                if (aw.user_id) {
                    if (p && p.is_chat_used) {
                        o('enter', q.nickname);
                    } else {
                        j();
                    }
                } else {
                    loginBtn.click();
                }
                return;
            }
            userSessionCheck(aw, function(az) {
                p = JSON.parse(JSON.stringify(az.Data.content));
                q = JSON.parse(JSON.stringify(az.Data.user));
                if (p.is_chat_used) {
                    o('enter', q.nickname);
                } else {
                    j();
                }
            }, function(az) {
                if (az.Data) {
                    if (az.Data.content.status == 'end') {
                        clearInterval(s);
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
            var aw = customerId.val().trim();
            var ax = ticketId.val().trim();
            if (a9 && (!aw || !ax)) {
                k(loginFailTxt, DCvi);
                return;
            }
            var ay = {
                customer_id: aw,
                ticket_id: ax,
                content_id: DCvi,
                device_id: v
            };
            if (!a9) {
                ay.customer_id = null;
                ay.ticket_id = null;
            }
            e(ay, function() {
                if (a9) {
                    if (chk_save2.prop('checked')) {
                        setCookie(DCvi + '_customer_id', ay.customer_id, 20160);
                        setCookie(DCvi + '_ticket_id', ay.ticket_id, 20160);
                    } else {
                        removeCookie(DCvi + '_customer_id');
                        removeCookie(DCvi + '_ticket_id');
                    }
                    setCookie(DCvi + '_ticket_id', ay.ticket_id, 20160);
                    BatchAuthUtil.setCookiesOnGroup(r, false, ay.ticket_id, false, false);
                }
                if (p.is_chat_used) {
                    o('enter', q.nickname);
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
            var aw = nickname.val();
            if (!aw) {
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
            if (h(aw)) {
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
            } else if (i(aw)) {
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
            } else if (aw.length < 2 || aw.length > 12) {
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
            } else if (NicknameFilter.hasForbidden(aw) || ChatFilter.checkNickname(aw)) {
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
                clearTimeout(ab.requestCreateNickname);
                if (!aa) {
                    nicknameFailTxt.text(POPUP_CONFIG.duplicatedNickname(egl).desc);
                    af();
                }
                if (!aa) {
                    return;
                }
                var ax = {
                    user_id: q.user_id,
                    device_id: v,
                    nickname: aw,
                    content_id: DCvi
                };
                $('#loadingDiv').css('display', 'block');
                f(ax, function() {
                    aa = true;
                    clearTimeout(ab.requestCreateNickname);
                    if (t == 'auth') {
                        n(DCvi);
                        if (ac) {
                            readyBtn.css('display', 'none');
                        }
                    } else if (t == 'enter') {
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
                    aa = false;
                    af();
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
        $('#customerId,#ticketId').on('keydown', function(aw) {
            if (aw.keyCode == 13) {
                loginBtn.click();
            }
        });
        nickname.on('keydown', function(aw) {
            if (aw.keyCode == 13) {
                createNickBtn.click();
            }
        });
        authBtn.on('click', ag);
        authCheckBtn.on('click', function() {
            var aw = authCustomerId.val().trim();
            var ax = authTicketId.val().trim();
            if (!aw || !ax) {
                k(authFailTxt, DCvi);
                return;
            }
            var ay = {
                customer_id: aw,
                ticket_id: ax,
                content_id: DCvi,
                device_id: v
            };
            e(ay, function() {
                if (chk_save.prop('checked')) {
                    setCookie(DCvi + '_customer_id', ay.customer_id, 20160);
                    setCookie(DCvi + '_ticket_id', ay.ticket_id, 20160);
                    BatchAuthUtil.setCookiesOnGroup(r, ay.customer_id, ay.ticket_id, false, false);
                    if (q) {
                        setCookie(DCvi + '_user_id', q.user_id, 20160);
                        BatchAuthUtil.setCookiesOnGroup(r, null, null, true, false);
                    }
                } else {
                    removeCookie(DCvi + '_customer_id');
                    removeCookie(DCvi + '_ticket_id');
                    removeCookie(DCvi + '_user_id');
                }
                if (p.is_chat_used) {
                    o('auth', q.nickname);
                } else {
                    n(DCvi);
                }
            }, function() {
                l(authFailTxt, DCvi);
            });
        });
        $('#authCustomerId, #authTicketId').on('keydown', function(aw) {
            if (aw.keyCode == 13) {
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
    window.onpageshow = function(I) {
        var J = null;
        var K = window.performance;
        var L = K && K.getEntriesByType ? K.getEntriesByType('navigation') : null;
        var M = L && L[0] ? L[0].type : null;
        console.log(M);
        if (I.persisted || M == 'back_forward' || J == 2) {
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
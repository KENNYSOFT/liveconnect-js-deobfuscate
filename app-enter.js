'use strict';
var selectArr = [],
    callbackArr = [];

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
    if (!b) f = 'cusDD_default';
    else {
        if (b == 'slick dark') f = 'cusDD_slick_d';
        else {
            if (b == 'slick light') {
                f = 'cusDD_slick_l';
            } else f = b;
        }
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
    $(document).click(function(m) {
        $('.cusDD_options').slideUp(200);
        $('.cusDD_arrow').removeClass('active');
    });
    $(a).click(function(m) {
        var n = a;
        $('.cusDD').not(n).find('.cusDD_options').slideUp(200);
        $('.cusDD').not(n).find('.cusDD_arrow').removeClass('active');
        console.log(' select : ', n);
        m.stopPropagation();
        if ($(m.target).attr('id') == 'qualitySelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#qualityPopup').css('display', 'block');
            return;
        }
        if ($(m.target).attr('id') == 'ccSelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#subtitlePopup').css('display', 'block');
            return;
        }
        var o = 200;
        if ($(this).find('.cusDD_options').children()) {
            if ($(this).find('.cusDD_options').children().length > 30) {
                o = 0;
            }
        }
        $(this).find('.cusDD_options').slideToggle(o);
        $(this).find('.cusDD_arrow').toggleClass('active');
    });
    $(a).find('.cusDD_opt').click(function() {
        $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
        if (c) c($(this).data(), $(this));
    });
}(function(a) {
    a.fn.changeElementType = function(b) {
        var c = {};
        a.each(this[0].attributes, function(d, e) {
            c[e.nodeName] = e.nodeValue;
        });
        this.replaceWith(function() {
            return a('<' + b + '/>', c).append(a(this).contents());
        });
    };
})(jQuery);

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
                        if (callbackArr[e]) callbackArr[e]($(this).data());
                    }
                }
            }
        }
    });
}
var RSAnd = 'https://api.liveconnect.co.kr',
    YPP3z = 'pub-c-bf51339c-bf9b-4e3e-8f44-dadc40e90d23',
    KSPdf = 'sub-c-80f91ce6-c710-11ea-8107-5e100a74f828',
    Nierw = 'ap-northeast-2',
    Yacaw = 'AKIARWRY6LMTIMTBNHGW',
    Ytcsw = 'xmZ2EWmIIKs85VR8kaDZHnEfKwYMiMeHUSRM2UdK';
switch (Tira) {
    case '[JSH]LIVE_MULTI':
        var DCvi = '303fff52-27a7-4991-9cc8-4c34ae28417a';
        break;
    case '[JSH]LIVE_SINGLE':
        var DCvi = '186accfb-f3f4-441d-adee-0d78e34e9d18';
        break;
    case '[JSH]VOD':
        var DCvi = 'a9731791-ae47-429f-a599-ca07353bb501';
        break;
    case '[TEST]event_test':
        var DCvi = '13748634-68a6-4a78-b05c-e5cf3272eb5e';
        break;
    case '[TEST]multiview_test':
        var DCvi = '8a201ab9-fab1-4d61-bdac-bd6bcd78c368';
        break;
    case '[TEST]MULVW-3CAM':
        var DCvi = '487a1162-30a5-4888-be0e-e670d6b91a60';
        break;
    case '[TEST]vod_test':
        var DCvi = 'd4141fc6-5b17-4034-819e-ba2f6fd631e0';
        break;
    case '200817_guckkasten':
        var DCvi = '66d65700-0799-4007-9289-ecbd17699128';
        break;
    case '200819_leeyongshin':
        var DCvi = 'd8f2dfa4-8e0f-4b40-9ae6-92a7b3d15af5';
        break;
    case '200905_2pm':
        var DCvi = 'd7a8f442-e734-4069-92c2-49e9c528297e';
        break;
    case '200906_pentagon':
        var DCvi = '71aad509-9790-4cde-8a9c-9092fc734845';
        break;
    case '200913_izone':
        var DCvi = '78bc66bd-0ce3-4f20-ad70-81214a977c51';
        break;
    case '200924_thepromiseoftheday':
        var DCvi = '1eb2193c-733f-49fc-b1f2-385219759eda';
        break;
    case '200925_thepromiseoftheday':
        var DCvi = '58b5bc53-a16a-4886-8a9a-8e25f407a1bd';
        break;
    case '200926_thepromiseoftheday':
        var DCvi = '36853e07-ebac-4576-a6a8-15eca6822945';
        break;
    case '200926_thepromiseoftheday_2':
        var DCvi = 'b882911c-a45e-46e1-acd6-fbbcb874cad4';
        break;
    case '200927_woodz':
        var DCvi = '8febe59f-1915-4f25-8a27-3e72d52129c8';
        break;
    case '201011_cix':
        var DCvi = 'd6a2863d-9bd6-4b34-ad92-3ca1c8a0eba4';
        break;
    case '201017_khj':
        var DCvi = '3f6d28f4-0c1d-4c31-97bf-55b2a14a113e';
        break;
    case '201026_maybehappyending':
        var DCvi = '7c90cda7-4037-477b-bc59-15016890756e';
        break;
    case '201030_memth':
        var DCvi = 'c94be74c-f6e1-43b0-b637-5e50df9e9d79';
        break;
    case '201030_sinbiapt':
        var DCvi = '6fce5920-eb64-49df-9a8d-d67c25632f36';
        break;
    case '201031_sinbiapt':
        var DCvi = '9eb6375e-38f8-4a7e-abce-15d3cedef40e';
        break;
    case '201101_littlebasketball':
        var DCvi = '22575e2c-83e0-4d40-a4d7-731eabb41bee';
        break;
    case '201101_sinbiapt':
        var DCvi = '3e158308-4a46-4115-8411-38160c223a00';
        break;
    case '201102_littlebasketball':
        var DCvi = 'f30bdaaa-a3fe-4151-8e15-4fb9802c26fa';
        break;
    case '201105_maybehappyending':
        var DCvi = 'a462ed03-1979-49a5-95de-13de9cf7a642';
        break;
    case '201108_gidle':
        var DCvi = '56762a8f-9162-44bf-aec2-d8349f902ef1';
        break;
    case '201108_victon':
        var DCvi = '717d72f3-a23b-4824-aacc-8cdb17cdb4b7';
        break;
    case '201109_teacher':
        var DCvi = 'd1469f24-5e03-40db-9289-7be2c0423b1d';
        break;
    case '201121_joyangel':
        var DCvi = '3b43a92a-fc61-4676-a70d-14bffd9b98ae';
        break;
    case '201121_ohmygirl_p':
        var DCvi = '4fd7d315-9ee5-4e5b-bf03-467e0d8123b2';
        break;
    case '201121_xia':
        var DCvi = '70bebcdc-b7a9-4478-ad60-ac8925042df6';
        break;
    case '201122_ohmygirl':
        var DCvi = '6ad7b0cb-e353-4cd3-b724-7cba3f34d737';
        break;
    case '201122_xia':
        var DCvi = 'c1ae68f0-a65e-44ea-8793-9cc24c8442bd';
        break;
    case '201205_b1a4':
        var DCvi = 'b1bc33a2-3f99-428f-8063-33ebe6d01c72';
        break;
    case '201205_theboyz':
        var DCvi = '35328d37-f99d-4725-98cb-bc2e445ab869';
        break;
    case '201211_littlebasketball_vod':
        var DCvi = 'ec851af1-b551-4076-bab8-60ed51c38e74';
        break;
    case '201211_teacher_vod':
        var DCvi = 'fd094607-5731-466b-8631-37e08d8cbcff';
        break;
    case '201213_pentagon':
        var DCvi = 'd4a8782e-5c73-4a7d-93f9-0876989d7c76';
        break;
    case '201218_woodz_vod':
        var DCvi = 'ffd0a6a3-777e-48d8-8471-8229d66bcb7d';
        break;
    case '201225_yoonjisung':
        var DCvi = '1c4b0fed-bc2b-4101-8771-19cc94dca0fd';
        break;
    case '201226_pentagon_vod':
        var DCvi = '46554765-6d6b-4d43-99eb-5bbe0823613a';
        break;
    case '201226_xia':
        var DCvi = '5dc04bcd-bcdd-4add-b7bb-26995c7a166e';
        break;
    case '201227_apink':
        var DCvi = 'c67e2edc-3a6f-4091-9b4b-28fde50495a8';
        break;
    case '201227_xia':
        var DCvi = '3e1562d4-7f5a-4e37-b13c-9726eca336bc';
        break;
    case '210108_gentleman':
        var DCvi = '26a2c6a7-de48-42fc-becb-105e7455affd';
        break;
    case '210109_gentleman_1':
        var DCvi = '954f0cf8-c2ff-4658-9f81-d37e6cfc94ff';
        break;
    case '210109_gentleman_2':
        var DCvi = 'f5e6cfd4-ba43-4c9a-9dba-e0973496f2b2';
        break;
    case '210110_gentleman':
        var DCvi = 'bcdc9ea3-4663-43f1-9c72-59152640b266';
        break;
    case '210115_gentleman':
        var DCvi = '401b170c-a8d6-4213-a761-b14dd9152ad3';
        break;
    case '210115_killerparty':
        var DCvi = '21e7d09f-ca8e-4585-9529-e221e5e7f3c6';
        break;
    case '210116_gentleman_1':
        var DCvi = 'f30aa9c1-9342-4113-8134-5a75a8464651';
        break;
    case '210116_gentleman_2':
        var DCvi = '30ced1cf-60b7-4736-88b1-2ed024f5a51c';
        break;
    case '210116_killerparty':
        var DCvi = '1ac6d7e6-3043-4991-8517-36f1152e0cc7';
        break;
    case '210117_gentleman':
        var DCvi = '4bb96f7c-3dc1-421b-986f-fc823a081335';
        break;
    case '210123_btob4u':
        var DCvi = '7dff265c-25a8-4dc4-baa6-e354056bd997';
        break;
    case '210227_mona':
        var DCvi = '65efef4a-cd76-468a-a6f4-f42589cf02b6';
        break;
    case '210313_boyhood':
        var DCvi = 'd59c47cf-bf61-4c4f-b9ca-91667c044279';
        break;
    case '210313_izone':
        var DCvi = 'ac820489-d611-40e6-ba4f-539b4f83a0bf';
        break;
    case '210314_izone':
        var DCvi = '4f2bcf78-c4ad-4d6d-89b3-551d83525fff';
        break;
    case '210320_hwangyunseong_1':
        var DCvi = '51905d9b-3b05-4667-b9e1-4fa5391d06fb';
        break;
    case '210320_hwangyunseong_2':
        var DCvi = '562b8381-ebc8-496a-aa85-ba404e76459e';
        break;
    case '210320_sacconcert':
        var DCvi = '68de58a5-38e5-41d4-a33b-41e70d554138';
        break;
    case '210321_leesieun':
        var DCvi = '1f176c81-c0e5-463a-ae70-5938a250e396';
        break;
    case '210326_sinbiapt':
        var DCvi = '30e05e26-728d-4afd-838e-2e7fc18bc805';
        break;
    case '210327_hyukoh':
        var DCvi = 'c291b33a-291c-4935-b7e9-01c72b74b2d8';
        break;
    case '210327_sinbiapt':
        var DCvi = 'cd6f57e3-d512-4692-82e9-7aee2571a48a';
        break;
    case '210328_sinbiapt':
        var DCvi = 'eab1a962-c951-40a3-8e17-77d3398c0161';
        break;
    case '210407_lunarsolar':
        var DCvi = '270638ff-f1e5-4717-bf80-52bed1a491e6';
        break;
    case '210410_sungdameb':
        var DCvi = '4b5d825b-4c0d-4cbd-898a-46a5adfcb7e4';
        break;
    case '210411_boyhood':
        var DCvi = 'dcb519d5-e770-4377-960d-edc6cf169c68';
        break;
    case '210415_parkseojin':
        var DCvi = 'fabb3e81-e293-4088-91a1-68efca8193ef';
        break;
    case '210417_cix':
        var DCvi = '2e282fdc-a1ee-49b8-8ee0-a4178a74eb82';
        break;
    case '210418_marychou':
        var DCvi = '4861a19c-18c1-469e-aa3c-3bf913ed901f';
        break;
    case '210424_mamamoo':
        var DCvi = 'e2431386-a908-4f7d-a2ae-acdc11c9a9b7';
        break;
    case 'dev_demo_event':
        var DCvi = 'f3a82d31-a083-4679-88e1-c0961a925afb';
        break;
    case 'dev_demo_event_01':
        var DCvi = 'c5f88688-08ed-4e43-af96-c3caa464a17c';
        break;
    case 'dev_demo_event_02':
        var DCvi = 'e48fcdad-a485-4f0d-9ef4-df37b43bb560';
        break;
}
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
            }(),
            d = c(this, function() {
                var g;
                try {
                    var h = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                    g = h();
                } catch (q) {
                    g = window;
                }
                var i = g.console = g.console || {},
                    j = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
                for (var k = 0; k < j.length; k++) {
                    var l = c.constructor.prototype.bind(c),
                        m = j[k],
                        n = i[m] || l;
                    l.__proto__ = c.bind(c);
                    l.toString = n.toString.bind(n);
                    i[m] = l;
                }
            });
        d();
        var e = '',
            f = false;
        return {
            loadChatFilterData: function g(h) {
                if (f) {
                    if (h) h();
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
                    default:
                        i.open('GET', '/static/filtering/chat_filtering.txt');
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
                            if (h) h();
                        }
                    }
                };
                i.send();
            },
            filteringChatText: function h(i) {
                if (!f) return;
                var j = 'gi',
                    k = new RegExp(e, j);
                return i.replace(k, '***');
            },
            checkFilteringData: function i() {
                return f;
            },
            checkNickname: function j(k) {
                if (!f) return;
                var l = 'gi',
                    m = new RegExp(e, l);
                return m.test(k);
            }
        };
    }(),
    NicknameFilter = function() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Tira,
            b = '';
        if (a == '210424_mamamoo') {
            b = '솔라, ソラ, SOLARSIDO, 솔라시도, Solar-sido, 계약, 해체, 에릭남, 개비덥, 알비답, 김진우, 김도훈'.split(',');
            b = b.map(function(c) {
                return c.replace(/ /gi, '');
            }).join('|');
        }
        return {
            hasForbidden: function d(e) {
                if (b === '') return false;
                var f = new RegExp(b, 'gi');
                return f.test(e);
            }
        };
    }();
(function(a) {
    function b() {
        a('#dayWrap').css('display', 'none');
        a('#readyBtn').css('display', 'none');
        a('#enterBtn').css('display', 'none');
        a('#authBtn').css('display', 'none');
        a('#authMsg1').css('display', 'none');
        a('#authMsg2').css('display', 'none');
        a('#endBtn').css('display', 'inline-block');
        removeCookie(DCvi + '_customer_id');
        removeCookie(DCvi + '_ticket_id');
        removeCookie(DCvi + '_user_id');
        removeCookie(DCvi + '_chat_id');
    }
    if (ddv) a(document).ready(function() {
        b();
    });
    else {
        var c = function s(t, u, v) {
                request_to_server('POST', RSAnd + '/user_auth/customer_login/', t, function(x) {
                    m = JSON.parse(JSON.stringify(x.Data.content));
                    n = JSON.parse(JSON.stringify(x.Data.user));
                    if (u) u();
                }, function() {
                    if (v) v();
                });
            },
            d = function t(u, v, w) {
                request_to_server('POST', RSAnd + '/user_auth/nickname/', u, function(x) {
                    if (v) v(x);
                }, function(x, y) {
                    if (w) w(x, y);
                });
            },
            e = function u(v, w, x) {
                request_to_server('POST', RSAnd + '/user_auth/player_enter/', v, function(y) {
                    if (w) w(y);
                }, function(y) {
                    if (x) x(y);
                });
            },
            f = function v(w) {
                var x = /[\/\\:*?<>|"]/gi;
                if (x.test(w)) {
                    return true;
                } else {
                    return false;
                }
            },
            g = function w(x) {
                return x.search(/\s/) != -1 ? true : false;
            },
            h = function x() {
                a('#loadingDiv').css('display', 'block');
                var y = egl,
                    z = POPUP_CONFIG.failToGetPlayerCode(y, null),
                    A = n,
                    B = m,
                    C = (B && B.id ? B.id : null) || DCvi,
                    D = {
                        user_id: null,
                        content_id: null,
                        device_id: null
                    },
                    E = null,
                    F = null;
                if (A && A.user_id) D.user_id = A.user_id;
                if (r) D.device_id = r;
                if (C) D.content_id = C;
                e(D, function(G) {
                    a('#loadingDiv').css('display', 'none');
                    console.log(G);
                    E = G && G.Data ? G.Data : null;
                    F = E && E.content ? E.content.player_code : null;
                    if (F) {
                        setCookie(DCvi + '_user_id', n.user_id, 20160);
                        setCookie(DCvi + '_chat_id', n.chat_id, 20160);
                        setCookie(DCvi + '_content_id', DCvi, 20160);
                        location.href = LUEz1 + '/' + F;
                    } else if (z) {
                        alertPopup(z.title, z.desc, z.btnTxt, z.okCallback);
                    }
                }, function(G) {
                    a('#loadingDiv').css('display', 'none');
                    console.log(G);
                    if (z) {
                        alertPopup(z.title, z.desc, z.btnTxt, z.okCallback);
                    }
                });
            },
            i = function y(z, A) {
                if (A == '2e282fdc-a1ee-49b8-8ee0-a4178a74eb82') {
                    switch (egl) {
                        case 'ko':
                            z.text('인증코드를 입력해 주세요.');
                            break;
                        case 'en':
                            z.text('Enter authentication code.');
                            break;
                        case 'ja':
                        case 'jp':
                            z.text('認証コードを入力してください');
                            break;
                        case 'cn':
                            z.text('Enter authentication code');
                            break;
                    }
                } else {
                    switch (egl) {
                        case 'ko':
                            z.text('인터파크ID와 예매번호를 입력해 주세요.');
                            break;
                        case 'en':
                            z.text('Enter INTERPARK ID and reservation number.');
                            break;
                        case 'ja':
                        case 'jp':
                            z.text('INTERPARK IDと購入番号を入力してください。');
                            break;
                        case 'cn':
                            z.text('请输入INTERPARK账户和预订号码');
                            break;
                    }
                }
            },
            j = function z(A, B) {
                if (B == '2e282fdc-a1ee-49b8-8ee0-a4178a74eb82') {
                    switch (egl) {
                        case 'ko':
                            A.text('인증코드가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                            break;
                        case 'en':
                            A.text('Authentication code is not valid. Please check and try again.');
                            break;
                        case 'ja':
                        case 'jp':
                            A.text('認証コードが正しくありません。確認後、正確に入力してください。');
                            break;
                        case 'cn':
                            A.text('Authentication code is not valid. Please check and try again.');
                            break;
                    }
                } else {
                    switch (egl) {
                        case 'ko':
                            A.text('인터파크ID 혹은 예매번호가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                            break;
                        case 'en':
                            A.text('INTERPARK ID or reservation number is not valid. Please check and try again.');
                            break;
                        case 'ja':
                        case 'jp':
                            A.text('INTERPARK IDまたは購入番号が正しくありません。確認後、正確に入力してください。');
                            break;
                        case 'cn':
                            A.text('INTERPARK账号和预订号码为无效。请输入正确的信息。');
                            break;
                    }
                }
            },
            k = function A(B) {
                a('#authPopup').css('display', 'none');
                a('#authBtn').css('display', 'none');
                a('#authMsg1').css('display', 'none');
                a('#authMsg2').css('display', 'none');
                a('#readyBtn').css('display', 'inline-block');
                a('#nicknamePopup').css('display', 'none');
                if (B && B == '2e282fdc-a1ee-49b8-8ee0-a4178a74eb82') {
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
            },
            l = function B(C, D) {
                ChatFilter.loadChatFilterData(function() {
                    p = C;
                    if (C == 'enter') a('#loginPopup').css('display', 'none');
                    else if (C == 'auth') {
                        a('#authPopup').css('display', 'none');
                    }
                    if (D) {
                        a('#nickname').val(D);
                    }
                    switch (egl) {
                        case 'ko':
                            a('#nicknameFailTxt').text('채팅 닉네임은 본 공연의 채팅사용을 위해 필요하며 1회용 닉네임입니다. (본 공연시에만 사용하며, 공연 종료 후 삭제됩니다.)');
                            break;
                        case 'en':
                            a('#nicknameFailTxt').text('Nickname is required to join LIVE CHAT for this show and it is for single-use. (Valid only during the show, and will become invalid and deleted after the show.)');
                            break;
                        case 'ja':
                        case 'jp':
                            a('#nicknameFailTxt').text('ニックネームはライブ内でチャット使用のために必要であり、一回用のニックネームです。(ライブ内で使用され、ライブ終了後に削除されます。)');
                            break;
                        case 'cn':
                            a('#nicknameFailTxt').text('账户名用于本演出的聊天功能，是单次性账户名。 (仅限用于本演出，演出结束后会删除。)');
                            break;
                    }
                    a('#nicknamePopup').css('display', 'block');
                    a('#nickname').focus();
                });
            };
        if (checkIEbrowser() || isIOS() && checkEdgeBrowser() || checkInterparkApp()) {
            a('#enterBtn').css('display', 'none');
            a('#notSupportedBrowser').css('display', 'inline-block');
        }
        var m = null,
            n = null,
            o = null,
            p = '',
            q = 0,
            r = getCookie(DCvi + '_device_id');
        if (!r) {
            r = createDeviceId(DCvi);
        }
        a(document).ready(function() {
            var C = ['e48fcdad-a485-4f0d-9ef4-df37b43bb560'],
                D = a('#enterBtn'),
                E = a('#authBtn'),
                F = a('#readyBtn'),
                G = a('#notSupportedBrowser'),
                H = a('#dayWrap'),
                I = a('#loginBtn'),
                J = a('#loginPopup'),
                K = a('#nicknamePopup'),
                L = a('#authPopup'),
                M = a('#authMsg1'),
                N = a('#authMsg2'),
                O = a('#customerId'),
                P = a('#ticketId'),
                Q = a('#nickname'),
                R = a('#nicknameFailTxt'),
                S = a('#loginFailTxt'),
                T = a('#chk_save'),
                U = a('#chk_save2'),
                V = a('#createNickBtn'),
                W = a('#authCustomerId'),
                X = a('#authTicketId'),
                Y = a('#authFailTxt'),
                Z = a('#authCheckBtn'),
                a0 = new Date(parseInt(ete)),
                a1 = new Date(parseInt(cte)),
                a2 = new Date(),
                a3 = uath,
                a4 = true,
                a5 = {
                    requestCreateNickname: null
                },
                a6 = false;
            M.css('display', 'none');
            N.css('display', 'none');
            var a7 = function ae(af) {
                    M.css('display', 'none');
                    N.css('display', 'none');
                    E.css('display', 'none');
                    if (af) {
                        D.css('display', 'inline-block');
                        F.css('display', 'none');
                    } else {
                        D.css('display', 'none');
                        F.css('display', 'inline-block');
                    }
                    if (rtd) D.css('display', 'inline-block');
                },
                a8 = function af() {
                    a5.requestCreateNickname = setTimeout(function() {
                        console.log('@@@RESET');
                        R.text('');
                        a4 = true;
                    }, 1000);
                },
                a9 = function ag() {
                    W.text('');
                    X.text('');
                    Y.text('');
                    T.prop('checked', true);
                    L.css('display', 'block');
                    if (!W.val() && getCookie(DCvi + '_customer_id')) {
                        W.val(getCookie(DCvi + '_customer_id'));
                    }
                    if (!X.val() && getCookie(DCvi + '_ticket_id')) {
                        X.val(getCookie(DCvi + '_ticket_id'));
                    }
                    W.focus();
                },
                aa = function ah() {
                    var ai = egl,
                        aj = DCvi,
                        ak = null;
                    if (aj == '2e282fdc-a1ee-49b8-8ee0-a4178a74eb82') {
                        ak = POPUP_CONFIG.authorizedByCode(ai);
                        a('.popupbox .label_customer_id').text(ak.idText);
                        a('.popupbox .label_ticket_id').text(ak.ticketText);
                        O.prop('autofocus', false).prop('readonly', true).val('UNIVERSE');
                        W.prop('autofocus', false).prop('readonly', true).val('UNIVERSE');
                        L.find('.pop-tt.auth').text(ak.authPopupTitle);
                    }
                },
                ab = function ai(aj, ak) {
                    var al = DCvi;
                    if (C.indexOf(al) < 0) return;
                    if (aj && !ak) {
                        a9();
                    }
                    if (!aj && !ak) {
                        D.click();
                    }
                };
            aa();
            q = a1.getTime() - a2.getTime();
            if (a0 < a1) {
                H.css('display', 'none');
                if (!checkIEbrowser() && !(isIOS() && checkEdgeBrowser()) && !checkInterparkApp()) {
                    D.css('display', 'inline-block');
                }
                F.css('display', 'none');
                E.css('display', 'none');
                M.css('display', 'none');
                N.css('display', 'none');
            } else {
                if (dsev) {
                    H.css('display', 'none');
                } else {
                    H.css('display', 'block');
                }
                D.css('display', 'none');
                if (!a3) {
                    a7(false);
                }
                var ac = function am() {
                    var an = new Date();
                    an.setTime(an.getTime() + q);
                    a6 = a0 <= an;
                    if (a0 <= an) {
                        H.css('display', 'none');
                        D.css('display', 'inline-block');
                        F.css('display', 'none');
                        E.css('display', 'none');
                        M.css('display', 'none');
                        N.css('display', 'none');
                        if (o) {
                            clearInterval(o);
                            return;
                        }
                    } else {
                        if (!rtd) {
                            D.css('display', 'none');
                        }
                        if (!a3) {
                            a7(false);
                        }
                    }
                    var ao = (a0 - an) / 1000,
                        ap = parseInt(ao / 60 / 60 / 24),
                        aq = parseInt(ao / 60 / 60 % 24),
                        ar = parseInt(ao / 60 % 60),
                        as = parseInt(ao % 60);
                    if (ap < 10) {
                        ap = '0' + ap;
                    }
                    if (aq < 10) {
                        aq = '0' + aq;
                    }
                    if (ar < 10) {
                        ar = '0' + ar;
                    }
                    if (as < 10) {
                        as = '0' + as;
                    }
                    if (document.getElementById('day')) {
                        document.getElementById('day').innerHTML = ap;
                    }
                    if (document.getElementById('hour')) {
                        document.getElementById('hour').innerHTML = aq;
                    }
                    if (document.getElementById('minute')) {
                        document.getElementById('minute').innerHTML = ar;
                    }
                    if (document.getElementById('second')) {
                        document.getElementById('second').innerHTML = as;
                    }
                };
                ac();
                o = setInterval(ac, 1000);
            }
            if (checkIEbrowser() || isIOS() && checkEdgeBrowser() || checkInterparkApp()) {
                D.css('display', 'none');
                G.css('display', 'inline-block');
            } else {
                var ad = {
                    content_id: DCvi,
                    user_id: getCookie(DCvi + '_user_id'),
                    device_id: getCookie(DCvi + '_device_id')
                };
                if (a0 > a1) {
                    if (!a3) a7(false);
                    else {
                        if (!ad.user_id) {
                            E.css('display', 'inline-block');
                            if (!dsev) {
                                M.css('display', 'block');
                                N.css('display', 'block');
                            }
                        }
                    }
                }
                userSessionCheck(ad, function(ap) {
                    n = JSON.parse(JSON.stringify(ap.Data.user));
                    m = JSON.parse(JSON.stringify(ap.Data.content));
                    if (m.status == 'end') {
                        clearInterval(o);
                        b();
                    } else {
                        if (m.is_chat_used) {
                            if (n.nickname) {
                                if (a0 > a1) {
                                    if (!a3) {
                                        a7(false);
                                    } else {
                                        F.css('display', 'inline-block');
                                    }
                                }
                                E.css('display', 'none');
                                M.css('display', 'none');
                                N.css('display', 'none');
                            } else {
                                if (a0 > a1) {
                                    if (!a3) {
                                        a7(false);
                                    } else E.css('display', 'inline-block');
                                    if (!dsev && a3) {
                                        M.css('display', 'block');
                                        N.css('display', 'block');
                                    }
                                }
                            }
                        } else {
                            if (a0 > a1) {
                                if (!a3) {
                                    a7(false);
                                } else {
                                    E.css('display', 'inline-block');
                                    ab(true, false);
                                }
                                if (!dsev && a3) {
                                    M.css('display', 'block');
                                    N.css('display', 'block');
                                }
                            }
                        }
                    }
                }, function(ap) {
                    if (ap.Data) {
                        if (ap.Data.content.status == 'end') {
                            clearInterval(o);
                            b();
                        } else {
                            if (a0 > a1) {
                                if (!a3) a7(false);
                                else {
                                    E.css('display', 'inline-block');
                                    ab(true, false);
                                }
                                if (!dsev && a3) {
                                    M.css('display', 'block');
                                    N.css('display', 'block');
                                }
                            } else {
                                ab(false, false);
                                E.css('display', 'none');
                                M.css('display', 'none');
                                N.css('display', 'none');
                            }
                        }
                    }
                });
            }
            D.on('click', function() {
                O.val('');
                P.val('');
                S.text('');
                U.prop('checked', true);
                aa();
                var ap = {
                    user_id: getCookie(DCvi + '_user_id'),
                    device_id: getCookie(DCvi + '_device_id'),
                    content_id: DCvi
                };
                if (!a3) {
                    if (ap.user_id) {
                        if (m && m.is_chat_used) l('enter', n.nickname);
                        else {
                            h();
                        }
                    } else {
                        I.click();
                    }
                    return;
                }
                userSessionCheck(ap, function(av) {
                    m = JSON.parse(JSON.stringify(av.Data.content));
                    n = JSON.parse(JSON.stringify(av.Data.user));
                    if (m.is_chat_used) {
                        l('enter', n.nickname);
                    } else {
                        h();
                    }
                }, function(av) {
                    if (av.Data) {
                        if (av.Data.content.status == 'end') {
                            clearInterval(o);
                            b();
                        } else {
                            removeCookie(DCvi + '_user_id');
                            removeCookie(DCvi + '_chat_id');
                            J.css('display', 'block');
                            K.css('display', 'none');
                            if (!O.val() && getCookie(DCvi + '_customer_id')) {
                                O.val(getCookie(DCvi + '_customer_id'));
                            }
                            if (!P.val() && getCookie(DCvi + '_ticket_id')) {
                                P.val(getCookie(DCvi + '_ticket_id'));
                            }
                            O.focus();
                        }
                    }
                });
            });
            a('#loginPopup button[name=closebtn]').on('click', function() {
                J.css('display', 'none');
            });
            I.on('click', function() {
                var ap = O.val().trim(),
                    aq = P.val().trim();
                if (a3 && (!ap || !aq)) {
                    i(S, DCvi);
                    return;
                }
                var ar = {
                    customer_id: ap,
                    ticket_id: aq,
                    content_id: DCvi,
                    device_id: r
                };
                if (!a3) {
                    ar.customer_id = null;
                    ar.ticket_id = null;
                }
                c(ar, function() {
                    if (a3) {
                        if (U.prop('checked')) {
                            setCookie(DCvi + '_customer_id', ar.customer_id, 20160);
                            setCookie(DCvi + '_ticket_id', ar.ticket_id, 20160);
                        } else {
                            removeCookie(DCvi + '_customer_id');
                            removeCookie(DCvi + '_ticket_id');
                        }
                        setCookie(DCvi + '_ticket_id', ar.ticket_id, 20160);
                    }
                    if (m.is_chat_used) {
                        l('enter', n.nickname);
                    } else h();
                }, function() {
                    j(S, DCvi);
                });
            });
            a('#nicknamePopup button[name=closebtn]').on('click', function() {
                Q.val('');
                R.text('');
                K.css('display', 'none');
            });
            V.on('click', function() {
                var ap = Q.val();
                if (!ap) {
                    switch (egl) {
                        case 'ko':
                            R.text('닉네임을 입력해주세요.');
                            break;
                        case 'en':
                            R.text('Please enter your nickname.');
                            break;
                        case 'ja':
                        case 'jp':
                            R.text('ニックネームを入力してください');
                            break;
                        case 'cn':
                            R.text('请输入账户名');
                            break;
                    }
                    return;
                }
                if (f(ap)) {
                    switch (egl) {
                        case 'ko':
                            R.text('닉네임에는 특수문자를 포함할 수 없습니다.');
                            break;
                        case 'en':
                            R.text('Nickname cannot contain any special characters.');
                            break;
                        case 'ja':
                        case 'jp':
                            R.text('ニックネームに特殊文字を含めることはできません');
                            break;
                        case 'cn':
                            R.text('账户名不能添加特殊文字');
                            break;
                    }
                } else {
                    if (g(ap)) {
                        switch (egl) {
                            case 'ko':
                                R.text('닉네임에는 공백을 포함할 수 없습니다.');
                                break;
                            case 'en':
                                R.text('Nickname cannot contain any space.');
                                break;
                            case 'ja':
                            case 'jp':
                                R.text('ニックネームに空白を含めることはできません');
                                break;
                            case 'cn':
                                R.text('账户名不包含空白');
                                break;
                        }
                    } else {
                        if (ap.length < 2 || ap.length > 12) {
                            switch (egl) {
                                case 'ko':
                                    R.text('닉네임은 2~12자로 입력해 주세요.');
                                    break;
                                case 'en':
                                    R.text('Please enter 2 to 12 characters.');
                                    break;
                                case 'ja':
                                case 'jp':
                                    R.text('ニックネームは2〜12文字に入力してください');
                                    break;
                                case 'cn':
                                    R.text('账户名仅限2~12字节');
                                    break;
                            }
                        } else {
                            if (NicknameFilter.hasForbidden(ap)) {
                                switch (egl) {
                                    case 'ko':
                                        R.text('사용할 수 없는 닉네임입니다.');
                                        break;
                                    case 'en':
                                        R.text('This nickname cannot be used.');
                                        break;
                                    case 'ja':
                                    case 'jp':
                                        R.text('使用できないニックネームです');
                                        break;
                                    case 'cn':
                                        R.text('不能使用该账户名。');
                                        break;
                                }
                            } else {
                                if (ChatFilter.checkNickname(ap)) {
                                    switch (egl) {
                                        case 'ko':
                                            R.text('닉네임에 비속어가 포함되어 있습니다.');
                                            break;
                                        case 'en':
                                            R.text('Nickname contains inappropriate words.');
                                            break;
                                        case 'ja':
                                        case 'jp':
                                            R.text('ニックネームに使用できない言葉が含まれています');
                                            break;
                                        case 'cn':
                                            R.text('账户名不包含辱骂等词语');
                                            break;
                                    }
                                } else {
                                    clearTimeout(a5.requestCreateNickname);
                                    if (!a4) {
                                        R.text(POPUP_CONFIG.duplicatedNickname(egl).desc);
                                        a8();
                                    }
                                    if (!a4) return;
                                    var aq = {
                                        user_id: n.user_id,
                                        device_id: r,
                                        nickname: ap,
                                        content_id: DCvi
                                    };
                                    a('#loadingDiv').css('display', 'block');
                                    d(aq, function() {
                                        a4 = true;
                                        clearTimeout(a5.requestCreateNickname);
                                        if (p == 'auth') {
                                            k(DCvi);
                                            if (a6) F.css('display', 'none');
                                        } else {
                                            if (p == 'enter') {
                                                a('#loadingDiv').css('display', 'none');
                                                K.css('display', 'none');
                                                var aE = '',
                                                    aF = '',
                                                    aG = '';
                                                switch (egl) {
                                                    case 'ko':
                                                        aF = '알림';
                                                        aE = '닉네임 생성이 완료되었습니다.';
                                                        aG = '확인';
                                                        break;
                                                    case 'en':
                                                        aF = 'Notification';
                                                        aE = 'Nickname successfully created.';
                                                        aG = 'OK';
                                                        break;
                                                    case 'ja':
                                                    case 'jp':
                                                        aF = 'お知らせ';
                                                        aE = 'ニックネーム作成を完了しました';
                                                        aG = '確認';
                                                        break;
                                                    case 'cn':
                                                        aF = '提醒';
                                                        aE = '账户名生成完毕';
                                                        aG = '确认';
                                                        break;
                                                }
                                                alertPopup(aF, aE, aG, h);
                                            }
                                        }
                                    }, function(aE, aF) {
                                        a4 = false;
                                        a8();
                                        var aG = aE && aE.Message == 'nickname duplicated.' || aF == 409;
                                        if (aG) {
                                            switch (egl) {
                                                case 'ko':
                                                    R.text('이미 사용 중인 닉네임입니다.');
                                                    break;
                                                case 'en':
                                                    R.text('This nickname is already taken.');
                                                    break;
                                                case 'ja':
                                                case 'jp':
                                                    R.text('既に使用中のニックネームです');
                                                    break;
                                                case 'cn':
                                                    R.text('此用户名已被注册');
                                                    break;
                                            }
                                        } else {
                                            switch (egl) {
                                                case 'ko':
                                                    R.text('닉네임 생성에 실패하였습니다. 다시 시도해 주세요.');
                                                    break;
                                                case 'en':
                                                    R.text('Failed to create a nickname. Please try again.');
                                                    break;
                                                case 'ja':
                                                case 'jp':
                                                    R.text('ニックネーム作成に失敗しました。もう一度入力してください。');
                                                    break;
                                                case 'cn':
                                                    R.text('生成账户名失败，请重新输入');
                                                    break;
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            });
            a('#customerId,#ticketId').on('keydown', function(ap) {
                if (ap.keyCode == 13) {
                    I.click();
                }
            });
            Q.on('keydown', function(ap) {
                if (ap.keyCode == 13) {
                    V.click();
                }
            });
            E.on('click', a9);
            Z.on('click', function() {
                var ap = W.val().trim(),
                    aq = X.val().trim();
                if (!ap || !aq) {
                    i(Y, DCvi);
                    return;
                }
                var ar = {
                    customer_id: ap,
                    ticket_id: aq,
                    content_id: DCvi,
                    device_id: r
                };
                c(ar, function() {
                    if (T.prop('checked')) {
                        setCookie(DCvi + '_customer_id', ar.customer_id, 20160);
                        setCookie(DCvi + '_ticket_id', ar.ticket_id, 20160);
                        if (n) {
                            setCookie(DCvi + '_user_id', n.user_id, 20160);
                        }
                    } else {
                        removeCookie(DCvi + '_customer_id');
                        removeCookie(DCvi + '_ticket_id');
                        removeCookie(DCvi + '_user_id');
                    }
                    if (m.is_chat_used) {
                        l('auth', n.nickname);
                    } else k(DCvi);
                }, function() {
                    j(Y, DCvi);
                });
            });
            a('#authCustomerId, #authTicketId').on('keydown', function(ap) {
                if (ap.keyCode == 13) {
                    Z.click();
                }
            });
            a('#authPopup button[name=closebtn]').on('click', function() {
                L.css('display', 'none');
            });
            if (rtd) {
                D.css('display', 'inline-block');
                F.remove();
                E.remove();
                M.remove();
                N.remove();
            }
        });
        window.onpageshow = function(C) {
            var D = null,
                E = window.performance,
                F = E && E.getEntriesByType ? E.getEntriesByType('navigation') : null,
                G = F && F[0] ? F[0].type : null;
            console.log(G);
            if (C.persisted || G == 'back_forward' || D == 2) {
                location.reload();
            }
        };
    }
})(jQuery);
window.onpageshow = function(a) {
    var b = performance.getEntriesByType('navigation'),
        c = b[0],
        d = null;
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
var requestCnt = 0,
    serverLoading = null;

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
    } else f.send();
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
                if (f.status == 0) {} else {
                    if (!e) {
                        if (f.responseText) {
                            console.log(JSON.parse(f.responseText));
                        }
                    } else {
                        try {
                            var i = JSON.parse(f.responseText);
                            e(i, f.status);
                        } catch (k) {
                            e(f.responseText, f.status);
                        }
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

function removeCookie(a) {
    setCookie(a, null, 0);
}
Date.prototype.format = function(a) {
    if (!this.valueOf()) return ' ';
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
    var b = '',
        c = 0;
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
    if (navigator.userAgent.toLowerCase().indexOf('interpark') !== -1) return true;
    return false;
}

function getQueryStringObject() {
    var c = window.location.search.substr(1).split('&');
    if (c == '') return {};
    var d = {};
    for (var e = 0; e < c.length; ++e) {
        var f = c[e].split('=', 2);
        if (f.length == 1) d[f[0]] = '';
        else d[f[0]] = decodeURIComponent(f[1].replace(/\+/g, ' '));
    }
    return d;
}

function checkIEbrowser() {
    var a = window.navigator.userAgent.toLowerCase(),
        b = a.indexOf('trident');
    if (b > -1) {
        return true;
    }
    return false;
}

function checkEdgeBrowser() {
    var a = window.navigator.userAgent.toLowerCase();
    if (a.indexOf('edg') !== -1 || a.indexOf('edge') !== -1) return true;
    else {
        return false;
    }
}

function checkMobileAndTablet() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) {
            return true;
        } else {
            var b = navigator.userAgent.toLowerCase(),
                c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
            return !c ? isIpadOS() : c;
        }
    }
}

function isMobile() {
    var a = false;
    (function(b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) a = true;
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
        if (b) b(d);
    }, function(d) {
        if (c) c(d);
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
    if (isIOS()) switch (window.orientation) {
        case -90:
        case 90:
            return 'landscape';
        default:
            return 'portrait';
    } else return screen.orientation.type.toLowerCase();
}

function checkMobile() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) return true;
        else {
            var b = navigator.userAgent.toLowerCase(),
                c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
            if (!c) return isIpadOS();
            else {
                return c;
            }
        }
    }
}

function isChrome() {
    var a = window.navigator.userAgent.toLowerCase(),
        b = a.indexOf('chrome') !== -1 || a.indexOf('crios') !== -1,
        c = a.indexOf('edg') !== -1 || a.indexOf('edge') !== -1;
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
    var a = window.navigator.userAgent.toLowerCase(),
        b = checkMobileAndTablet();
    return !b && a.indexOf('win') != -1;
}

function isMac() {
    var a = window.navigator.userAgent.toLowerCase(),
        b = checkMobileAndTablet();
    return !b && a.indexOf('mac') != -1;
}

function injectDeviceContentHeightToCSS() {
    var a = window.innerHeight * 0.01,
        b = window.document.documentElement;
    b.style.setProperty('--vh', ''.concat(a, 'px'));
}

function addClassToElementByEnv(a) {
    var b = a || window.document.body,
        c = '',
        d = [];
    if (isIOS()) d.push('ios');
    if (isAndroid()) d.push('android');
    if (isTablet() || isIpadOS()) d.push('tablet');
    if (isChrome()) d.push('chrome');
    if (isSafari()) d.push('safari');
    if (checkEdgeBrowser()) d.push('edge');
    if (isMac()) d.push('macos');
    if (isWindow()) d.push('window');
    c = d.join(' ');
    b.className += ' ' + c;
}

function debounce(a, b) {
    var c;
    return function() {
        var d = arguments,
            e = this,
            f = arguments;
        clearTimeout(c);
        c = setTimeout(function() {
            return a.apply(e, d);
        }, b);
    };
}
var POPUP_CONFIG = {
        failToGetPlayerCode: function failToGetPlayerCode(a, b) {
            var c = null,
                d = a;
            if (d == 'zh_Hans') d = 'cn';
            if (b) c = b;
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
            if (!e[d]) return e.en;
            return e[d];
        },
        duplicatedNickname: function duplicatedNickname(a, b) {
            var c = null,
                d = a;
            if (d == 'zh_Hans') d = 'cn';
            if (b) c = b;
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
            if (!e[d]) return e.en;
            return e[d];
        },
        permissionDenied: function permissionDenied(a, b) {
            var c = null,
                d = a;
            if (d == 'zh_Hans') d = 'cn';
            if (d == 'ja') d = 'jp';
            if (b) c = b;
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
            if (!e[d]) return e.en;
            return e[d];
        },
        authorizedByCode: function authorizedByCode(a) {
            var b = a;
            if (b == 'zh_Hans') b = 'cn';
            if (b == 'ja') b = 'jp';
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
            if (!c[b]) return c.en;
            return c[b];
        }
    },
    CHAT_MESSAGE_CONFIG = {
        placeholderOnMuteChat: function placeholderOnMuteChat(a) {
            var b = a;
            if (b == 'zh_Hans') b = 'cn';
            var c = {
                ko: '채팅을 사용할 수 없습니다.',
                en: 'Live chat is currently unavailable.',
                ja: 'チャットを使用できません',
                jp: 'チャットを使用できません',
                cn: '不能用聊天'
            };
            if (!c[b]) return c.en;
            return c[b];
        }
    };

function createElementFromHTML(a) {
    var b = document.createElement('div');
    b.innerHTML = a.trim();
    return b.firstChild;
}
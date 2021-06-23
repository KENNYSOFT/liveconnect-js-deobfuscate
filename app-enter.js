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
    $(document).click(function(n) {
        $('.cusDD_options').slideUp(200);
        $('.cusDD_arrow').removeClass('active');
    });
    $(a).click(function(n) {
        var o = a;
        $('.cusDD').not(o).find('.cusDD_options').slideUp(200);
        $('.cusDD').not(o).find('.cusDD_arrow').removeClass('active');
        console.log(' select : ', o);
        n.stopPropagation();
        if ($(n.target).attr('id') == 'qualitySelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#qualityPopup').css('display', 'block');
            return;
        }
        if ($(n.target).attr('id') == 'ccSelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#subtitlePopup').css('display', 'block');
            return;
        }
        var p = 200;
        if ($(this).find('.cusDD_options').children()) {
            if ($(this).find('.cusDD_options').children().length > 30) {
                p = 0;
            }
        }
        $(this).find('.cusDD_options').slideToggle(p);
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
    case '1623651443480_mbcidollive':
        var DCvi = '36afb480-109a-4a43-9d84-0b9704b49d01';
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
    case '210505_sinbiapt':
        var DCvi = 'a428ef32-1cc3-4ddb-8b68-e58ff591e39a';
        break;
    case '210508_popcorn':
        var DCvi = 'd4b32f7f-bd9c-4a69-b5ee-74433f263e3c';
        break;
    case '210514_hike101':
        var DCvi = '114f7f81-0f8a-4725-b824-6b29c639b86e';
        break;
    case '210514_hike201':
        var DCvi = 'be86100e-bc6f-4d6c-8821-5c5ef95cb45b';
        break;
    case '210514_hike301':
        var DCvi = 'f75219c8-f3cb-492c-ad68-a1fd940b131e';
        break;
    case '210515_hike101':
        var DCvi = 'a50c8232-e98f-4ea1-a891-7272e7adf413';
        break;
    case '210515_hike201':
        var DCvi = '4487013d-39f3-4f61-8c9c-b34cd8087b66';
        break;
    case '210515_hike301':
        var DCvi = '35f3a20e-31f0-45c0-9d51-6b0d1a6a119c';
        break;
    case '210516_kangdaniel':
        var DCvi = '866bdbec-6069-4ebb-bead-71370637e78d';
        break;
    case '210523_kimeunbi':
        var DCvi = '659fe4f6-23c1-45d8-abc7-7d6a51727d01';
        break;
    case '210529_heyman':
        var DCvi = '2a3b9f0f-48d7-445b-a545-5c85855d5401';
        break;
    case '210604_parkyuchun_1':
        var DCvi = '82c3d6bf-03f4-48cb-9196-03ea101073d2';
        break;
    case '210604_parkyuchun_2':
        var DCvi = '7be5cc80-26b3-45ec-9dd5-2b0316383a68';
        break;
    case '210605_jaejooboy':
        var DCvi = '1999c3ae-6cfd-44e8-93f8-fd10adf20c47';
        break;
    case '210606_cravity':
        var DCvi = '7581d019-5802-46aa-81fe-4dbcdd975d32';
        break;
    case '210621_littlebasketball':
        var DCvi = 'f9c407b3-b39b-40ef-95ca-7929bea1ff12';
        break;
    case '210621_littlebasketballvod':
        var DCvi = '4301fd1f-c506-41a6-880a-ddcad89feb50';
        break;
    case '210624_elenateacher':
        var DCvi = 'b4660382-f71e-4c2f-8177-02f2bddd05e8';
        break;
    case '210624_elenateachervod':
        var DCvi = 'ddd7b6e0-0e0d-48aa-92e1-a43ec378ff4c';
        break;
    case '210625_woowahan':
        var DCvi = '7f328115-ae26-499c-9e66-3724fa9a709e';
        break;
    case '210626_dreamconcert':
        var DCvi = 'fc6170aa-6f67-4076-b0f1-19250bee49dc';
        break;
    case '210626_yngandrich':
        var DCvi = '7b9cdeaf-70c4-44db-a5c0-edcbca193ce1';
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
    case 'dev_demo_vod':
        var DCvi = 'b36f6b04-98b0-4c57-b29e-2f4ab19c18ee';
        break;
}
var ChatFilter = function() {
    var c = function() {
        var g = true;
        return function(i, j) {
            var k = g ? function() {
                if (j) {
                    var l = j.apply(i, arguments);
                    j = null;
                    return l;
                }
            } : function() {};
            g = false;
            return k;
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
        b = b.map(function(c) {
            return c.replace(/ /gi, '');
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
                        var j = JSON.parse(f.responseText);
                        e(j, f.status);
                    } catch (n) {
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
    return a.indexOf('edg') !== -1 || a.indexOf('edge') !== -1 ? true : false;
}

function checkMobileAndTablet() {
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
var HIKE_UTIL = {
    contentIdList: ['114f7f81-0f8a-4725-b824-6b29c639b86e', 'be86100e-bc6f-4d6c-8821-5c5ef95cb45b', 'f75219c8-f3cb-492c-ad68-a1fd940b131e', 'a50c8232-e98f-4ea1-a891-7272e7adf413', '4487013d-39f3-4f61-8c9c-b34cd8087b66', '35f3a20e-31f0-45c0-9d51-6b0d1a6a119c'],
    cookieGroup: {
        '114f7f81-0f8a-4725-b824-6b29c639b86e': ['114f7f81-0f8a-4725-b824-6b29c639b86e', 'be86100e-bc6f-4d6c-8821-5c5ef95cb45b', 'f75219c8-f3cb-492c-ad68-a1fd940b131e'],
        'be86100e-bc6f-4d6c-8821-5c5ef95cb45b': ['114f7f81-0f8a-4725-b824-6b29c639b86e', 'be86100e-bc6f-4d6c-8821-5c5ef95cb45b', 'f75219c8-f3cb-492c-ad68-a1fd940b131e'],
        'f75219c8-f3cb-492c-ad68-a1fd940b131e': ['114f7f81-0f8a-4725-b824-6b29c639b86e', 'be86100e-bc6f-4d6c-8821-5c5ef95cb45b', 'f75219c8-f3cb-492c-ad68-a1fd940b131e'],
        'a50c8232-e98f-4ea1-a891-7272e7adf413': ['a50c8232-e98f-4ea1-a891-7272e7adf413', '4487013d-39f3-4f61-8c9c-b34cd8087b66', '35f3a20e-31f0-45c0-9d51-6b0d1a6a119c'],
        '4487013d-39f3-4f61-8c9c-b34cd8087b66': ['a50c8232-e98f-4ea1-a891-7272e7adf413', '4487013d-39f3-4f61-8c9c-b34cd8087b66', '35f3a20e-31f0-45c0-9d51-6b0d1a6a119c'],
        '35f3a20e-31f0-45c0-9d51-6b0d1a6a119c': ['a50c8232-e98f-4ea1-a891-7272e7adf413', '4487013d-39f3-4f61-8c9c-b34cd8087b66', '35f3a20e-31f0-45c0-9d51-6b0d1a6a119c']
    },
    isHikeEvent: function isHikeEvent() {
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
    var e = function v(w, x, y) {
        request_to_server('POST', RSAnd + '/user_auth/customer_login/', w, function(z) {
            o = JSON.parse(JSON.stringify(z.Data.content));
            p = JSON.parse(JSON.stringify(z.Data.user));
            if (z.Data.allowed_events) {
                q = JSON.parse(JSON.stringify(z.Data.allowed_events));
            }
            if (x) {
                x();
            }
        }, function() {
            if (y) {
                y();
            }
        });
    };
    var f = function w(x, y, z) {
        request_to_server('POST', RSAnd + '/user_auth/nickname/', x, function(A) {
            if (y) {
                y(A);
            }
        }, function(A, B) {
            if (z) {
                z(A, B);
            }
        });
    };
    var g = function x(y, z, A) {
        request_to_server('POST', RSAnd + '/user_auth/player_enter/', y, function(B) {
            if (z) {
                z(B);
            }
        }, function(B) {
            if (A) {
                A(B);
            }
        });
    };
    var h = function y(z) {
        var A = /[\/\\:*?<>|"]/gi;
        if (A.test(z)) {
            return true;
        } else {
            return false;
        }
    };
    var i = function z(A) {
        return A.search(/\s/) != -1 ? true : false;
    };
    var j = function A() {
        $('#loadingDiv').css('display', 'block');
        var B = egl;
        var C = POPUP_CONFIG.failToGetPlayerCode(B, null);
        var D = p;
        var E = o;
        var F = (E && E.id ? E.id : null) || DCvi;
        var G = {
            user_id: null,
            content_id: null,
            device_id: null
        };
        var H = null;
        var I = null;
        if (D && D.user_id) {
            G.user_id = D.user_id;
        }
        if (u) {
            G.device_id = u;
        }
        if (F) {
            G.content_id = F;
        }
        g(G, function(J) {
            $('#loadingDiv').css('display', 'none');
            console.log(J);
            H = J && J.Data ? J.Data : null;
            I = H && H.content ? H.content.player_code : null;
            if (I) {
                setCookie(DCvi + '_user_id', p.user_id, 20160);
                setCookie(DCvi + '_chat_id', p.chat_id, 20160);
                setCookie(DCvi + '_content_id', DCvi, 20160);
                HIKE_UTIL.setCookiesOnGroup(q, false, false, true, true);
                var K = LUEz1 + '/' + I;
                if (ARTIST_ROOM_SELECTOR.imgSet[DCvi]) {
                    if (ARTIST_ROOM_SELECTOR.value) {
                        K += '?artist_room='.concat(ARTIST_ROOM_SELECTOR.value);
                    }
                }
                location.href = K;
            } else if (C) {
                alertPopup(C.title, C.desc, C.btnTxt, C.okCallback);
            }
        }, function(J) {
            $('#loadingDiv').css('display', 'none');
            console.log(J);
            if (C) {
                alertPopup(C.title, C.desc, C.btnTxt, C.okCallback);
            }
        });
    };
    var k = function B(C, D) {
        if (b == 'code') {
            if (D == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                C.text('사원번호를 입력해 주세요.');
            } else {
                switch (egl) {
                    case 'ko':
                        C.text('인증코드를 입력해 주세요.');
                        break;
                    case 'en':
                        C.text('Enter authentication code.');
                        break;
                    case 'ja':
                    case 'jp':
                        C.text('認証コードを入力してください');
                        break;
                    case 'cn':
                        C.text('Enter authentication code');
                        break;
                }
            }
        } else {
            switch (egl) {
                case 'ko':
                    C.text('인터파크ID와 예매번호를 입력해 주세요.');
                    break;
                case 'en':
                    C.text('Enter INTERPARK ID and reservation number.');
                    break;
                case 'ja':
                case 'jp':
                    C.text('INTERPARK IDと購入番号を入力してください。');
                    break;
                case 'cn':
                    C.text('请输入INTERPARK账户和预订号码');
                    break;
            }
        }
    };
    var l = function C(D, E) {
        if (b == 'code') {
            if (E == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                D.text('사원번호가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
            } else {
                switch (egl) {
                    case 'ko':
                        D.text('인증코드가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                        break;
                    case 'en':
                        D.text('Authentication code is not valid. Please check and try again.');
                        break;
                    case 'ja':
                    case 'jp':
                        D.text('認証コードが正しくありません。確認後、正確に入力してください。');
                        break;
                    case 'cn':
                        D.text('Authentication code is not valid. Please check and try again.');
                        break;
                }
            }
        } else {
            switch (egl) {
                case 'ko':
                    D.text('인터파크ID 혹은 예매번호가 유효하지 않습니다. 확인 후 정확히 입력해주세요.');
                    break;
                case 'en':
                    D.text('INTERPARK ID or reservation number is not valid. Please check and try again.');
                    break;
                case 'ja':
                case 'jp':
                    D.text('INTERPARK IDまたは購入番号が正しくありません。確認後、正確に入力してください。');
                    break;
                case 'cn':
                    D.text('INTERPARK账号和预订号码为无效。请输入正确的信息。');
                    break;
            }
        }
    };
    var m = function D(E) {
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
    var n = function E(F, G) {
        ChatFilter.loadChatFilterData(function() {
            s = F;
            if (F == 'enter') {
                $('#loginPopup').css('display', 'none');
            } else if (F == 'auth') {
                $('#authPopup').css('display', 'none');
            }
            if (G) {
                $('#nickname').val(G);
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
        HIKE_UTIL.setCookieOnDeviceId(u);
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
        var a2 = new Date(parseInt(ete));
        var a3 = new Date(parseInt(cte));
        var a4 = new Date();
        var a5 = uath;
        var a6 = true;
        var a7 = {
            requestCreateNickname: null
        };
        var a8 = false;
        authMsg1.css('display', 'none');
        authMsg2.css('display', 'none');
        ARTIST_ROOM_SELECTOR.init(DCvi, Tira);
        var a9 = function ag(ah) {
            authMsg1.css('display', 'none');
            authMsg2.css('display', 'none');
            authBtn.css('display', 'none');
            if (ah) {
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
        var aa = function ah() {
            a7.requestCreateNickname = setTimeout(function() {
                console.log('@@@RESET');
                nicknameFailTxt.text('');
                a6 = true;
            }, 1000);
        };
        var ab = function ai() {
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
        var ac = function aj() {
            var ak = egl;
            var al = DCvi;
            var am = null;
            if (c !== null) {
                am = POPUP_CONFIG.authorizedByCode(ak);
                if (al == '7f328115-ae26-499c-9e66-3724fa9a709e') {
                    am = POPUP_CONFIG.authorizedByEmployeeNumber(ak);
                }
                $('.popupbox .label_customer_id').text(am.idText);
                $('.popupbox .label_ticket_id').text(am.ticketText);
                customerId.prop('autofocus', false).prop('readonly', true).val(c);
                authCustomerId.prop('autofocus', false).prop('readonly', true).val(c);
                authPopup.find('.pop-tt.auth').text(am.authPopupTitle);
            }
        };
        var ad = function ak(al, am) {
            var an = DCvi;
            if (!HIKE_UTIL.isHikeEvent(an)) {
                return;
            }
            if (al && !am) {
                ab();
            }
            if (!al && !am) {
                enterBtn.click();
            }
        };
        ac();
        t = a3.getTime() - a4.getTime();
        if (a2 < a3) {
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
            if (!a5) {
                a9(false);
            }
            var ae = function an() {
                var ao = new Date();
                ao.setTime(ao.getTime() + t);
                a8 = a2 <= ao;
                if (a2 <= ao) {
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
                    if (!a5) {
                        a9(false);
                    }
                }
                var ap = (a2 - ao) / 1000;
                var aq = parseInt(ap / 60 / 60 / 24);
                var ar = parseInt(ap / 60 / 60 % 24);
                var as = parseInt(ap / 60 % 60);
                var at = parseInt(ap % 60);
                if (aq < 10) {
                    aq = '0' + aq;
                }
                if (ar < 10) {
                    ar = '0' + ar;
                }
                if (as < 10) {
                    as = '0' + as;
                }
                if (at < 10) {
                    at = '0' + at;
                }
                if (document.getElementById('day')) {
                    document.getElementById('day').innerHTML = aq;
                }
                if (document.getElementById('hour')) {
                    document.getElementById('hour').innerHTML = ar;
                }
                if (document.getElementById('minute')) {
                    document.getElementById('minute').innerHTML = as;
                }
                if (document.getElementById('second')) {
                    document.getElementById('second').innerHTML = at;
                }
            };
            ae();
            r = setInterval(ae, 1000);
        }
        if (checkIEbrowser() || isIOS() && checkEdgeBrowser() || checkInterparkApp()) {
            enterBtn.css('display', 'none');
            notSupportedBrowser.css('display', 'inline-block');
        } else {
            var af = {
                content_id: DCvi,
                user_id: getCookie(DCvi + '_user_id'),
                device_id: getCookie(DCvi + '_device_id')
            };
            if (a2 > a3) {
                if (!a5) {
                    a9(false);
                } else if (!af.user_id) {
                    authBtn.css('display', 'inline-block');
                    if (!dsev) {
                        authMsg1.css('display', 'block');
                        authMsg2.css('display', 'block');
                    }
                }
            }
            userSessionCheck(af, function(aq) {
                p = JSON.parse(JSON.stringify(aq.Data.user));
                o = JSON.parse(JSON.stringify(aq.Data.content));
                if (o.status == 'end') {
                    clearInterval(r);
                    d();
                } else if (o.is_chat_used) {
                    if (p.nickname) {
                        if (a2 > a3) {
                            if (!a5) {
                                a9(false);
                            } else {
                                readyBtn.css('display', 'inline-block');
                            }
                        }
                        authBtn.css('display', 'none');
                        authMsg1.css('display', 'none');
                        authMsg2.css('display', 'none');
                    } else if (a2 > a3) {
                        if (!a5) {
                            a9(false);
                        } else {
                            authBtn.css('display', 'inline-block');
                            if (HIKE_UTIL.isHikeEvent()) {
                                readyBtn.show();
                            }
                        }
                        if (!dsev && a5) {
                            authMsg1.css('display', 'block');
                            authMsg2.css('display', 'block');
                        }
                    }
                } else if (a2 > a3) {
                    if (!a5) {
                        a9(false);
                    } else {
                        authBtn.css('display', 'inline-block');
                        ad(true, false);
                    }
                    if (!dsev && a5) {
                        authMsg1.css('display', 'block');
                        authMsg2.css('display', 'block');
                    }
                }
            }, function(aq) {
                if (aq.Data) {
                    if (aq.Data.content.status == 'end') {
                        clearInterval(r);
                        d();
                    } else if (a2 > a3) {
                        if (!a5) {
                            a9(false);
                        } else {
                            authBtn.css('display', 'inline-block');
                            ad(true, false);
                        }
                        if (!dsev && a5) {
                            authMsg1.css('display', 'block');
                            authMsg2.css('display', 'block');
                        }
                    } else {
                        ad(false, false);
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
            ac();
            var aq = {
                user_id: getCookie(DCvi + '_user_id'),
                device_id: getCookie(DCvi + '_device_id'),
                content_id: DCvi
            };
            if (!a5) {
                if (aq.user_id) {
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
            userSessionCheck(aq, function(au) {
                o = JSON.parse(JSON.stringify(au.Data.content));
                p = JSON.parse(JSON.stringify(au.Data.user));
                if (o.is_chat_used) {
                    n('enter', p.nickname);
                } else {
                    j();
                }
            }, function(au) {
                if (au.Data) {
                    if (au.Data.content.status == 'end') {
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
            var aq = customerId.val().trim();
            var ar = ticketId.val().trim();
            if (a5 && (!aq || !ar)) {
                k(loginFailTxt, DCvi);
                return;
            }
            var as = {
                customer_id: aq,
                ticket_id: ar,
                content_id: DCvi,
                device_id: u
            };
            if (!a5) {
                as.customer_id = null;
                as.ticket_id = null;
            }
            e(as, function() {
                if (a5) {
                    if (chk_save2.prop('checked')) {
                        setCookie(DCvi + '_customer_id', as.customer_id, 20160);
                        setCookie(DCvi + '_ticket_id', as.ticket_id, 20160);
                    } else {
                        removeCookie(DCvi + '_customer_id');
                        removeCookie(DCvi + '_ticket_id');
                    }
                    setCookie(DCvi + '_ticket_id', as.ticket_id, 20160);
                    HIKE_UTIL.setCookiesOnGroup(q, false, as.ticket_id, false, false);
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
            var aq = nickname.val();
            if (!aq) {
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
            if (h(aq)) {
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
            } else if (i(aq)) {
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
            } else if (aq.length < 2 || aq.length > 12) {
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
            } else if (NicknameFilter.hasForbidden(aq) || ChatFilter.checkNickname(aq)) {
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
                clearTimeout(a7.requestCreateNickname);
                if (!a6) {
                    nicknameFailTxt.text(POPUP_CONFIG.duplicatedNickname(egl).desc);
                    aa();
                }
                if (!a6) {
                    return;
                }
                var ar = {
                    user_id: p.user_id,
                    device_id: u,
                    nickname: aq,
                    content_id: DCvi
                };
                $('#loadingDiv').css('display', 'block');
                f(ar, function() {
                    a6 = true;
                    clearTimeout(a7.requestCreateNickname);
                    if (s == 'auth') {
                        m(DCvi);
                        if (a8) {
                            readyBtn.css('display', 'none');
                        }
                    } else if (s == 'enter') {
                        $('#loadingDiv').css('display', 'none');
                        nicknamePopup.css('display', 'none');
                        var aB = '';
                        var aC = '';
                        var aD = '';
                        switch (egl) {
                            case 'ko':
                                aC = '알림';
                                aB = '닉네임 생성이 완료되었습니다.';
                                aD = '확인';
                                break;
                            case 'en':
                                aC = 'Notification';
                                aB = 'Nickname successfully created.';
                                aD = 'OK';
                                break;
                            case 'ja':
                            case 'jp':
                                aC = 'お知らせ';
                                aB = 'ニックネーム作成を完了しました';
                                aD = '確認';
                                break;
                            case 'cn':
                                aC = '提醒';
                                aB = '账户名生成完毕';
                                aD = '确认';
                                break;
                        }
                        alertPopup(aC, aB, aD, j);
                    }
                }, function(aB, aC) {
                    a6 = false;
                    aa();
                    var aD = aB && aB.Message == 'nickname duplicated.' || aC == 409;
                    if (aD) {
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
                    } else if (aC === 403) {
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
        $('#customerId,#ticketId').on('keydown', function(aq) {
            if (aq.keyCode == 13) {
                loginBtn.click();
            }
        });
        nickname.on('keydown', function(aq) {
            if (aq.keyCode == 13) {
                createNickBtn.click();
            }
        });
        authBtn.on('click', ab);
        authCheckBtn.on('click', function() {
            var aq = authCustomerId.val().trim();
            var ar = authTicketId.val().trim();
            if (!aq || !ar) {
                k(authFailTxt, DCvi);
                return;
            }
            var as = {
                customer_id: aq,
                ticket_id: ar,
                content_id: DCvi,
                device_id: u
            };
            e(as, function() {
                if (chk_save.prop('checked')) {
                    setCookie(DCvi + '_customer_id', as.customer_id, 20160);
                    setCookie(DCvi + '_ticket_id', as.ticket_id, 20160);
                    HIKE_UTIL.setCookiesOnGroup(q, as.customer_id, as.ticket_id, false, false);
                    if (p) {
                        setCookie(DCvi + '_user_id', p.user_id, 20160);
                        HIKE_UTIL.setCookiesOnGroup(q, null, null, true, false);
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
        $('#authCustomerId, #authTicketId').on('keydown', function(aq) {
            if (aq.keyCode == 13) {
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
    window.onpageshow = function(F) {
        var G = null;
        var H = window.performance;
        var I = H && H.getEntriesByType ? H.getEntriesByType('navigation') : null;
        var J = I && I[0] ? I[0].type : null;
        console.log(J);
        if (F.persisted || J == 'back_forward' || G == 2) {
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
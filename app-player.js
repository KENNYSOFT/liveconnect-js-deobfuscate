var selectArr = [],
    callbackArr = [];

function cusDD(a, b, c) {
    var d = false;
    for (var e = 0; e < selectArr.length; e++) {
        if (selectArr[e] == a) {
            if ('QZaCQ' !== 'QZaCQ') {
                function k() {
                    if (c.keyCode == 13) return e('#chatSendBtn').click(), false;
                }
            } else {
                callbackArr[e] = c, d = true;
                break;
            }
        }
    }
    if (!d) {
        if ('KBnXQ' === 'RQohq') {
            function l() {
                if (this._player.currentPosition) {
                    var m = this._player.currentPosition - 10;
                    m < 0 && (m = 0), this._player.currentPosition = m;
                }
            }
        } else selectArr.push(a), callbackArr.push(c);
    }
    var f = '';
    if (!b) {
        if ('jdpQe' === 'jdpQe') f = 'cusDD_default';
        else {
            function m() {
                c = d;
            }
        }
    } else {
        if (b == 'slick dark') {
            if ('OYYKV' !== 'OYYKV') {
                function n() {
                    if (!h._player._video.paused) {
                        var o = o._player.view;
                        p._player.view = q(this).data().view, r(this).siblings().each(function() {
                            if (o == u(this).data().view) return;
                        }), t();
                    }
                }
            } else f = 'cusDD_slick_d';
        } else {
            if (b == 'slick light') {
                if ('HmYFl' !== 'HmYFl') {
                    function o() {
                        var p = this._player.subtitleTrack;
                        this._player.subtitleTrack = -1, this._bfSendSubTime = c, d(function() {
                            this._player.subtitleTrack = p;
                        }.bind(this), 100);
                    }
                } else f = 'cusDD_slick_l';
            } else {
                if ('XHprA' !== 'newaQ') f = b;
                else {
                    function p() {
                        this._logData = [];
                    }
                }
            }
        }
    }
    for (var g = 0; g < $(a).length; g++) {
        var h = $($(a)[g]);
        h.addClass(f + ' cusDD').changeElementType('div'), h = $($(a)[g]), h.find('option').wrapAll('<div class=\'cusDD_options\' />'), h.find('option').addClass('cusDD_opt').each(function() {
            $(this).changeElementType('div');
        }), h.prepend('<div class=\'cusDD_select\' name=title><div class=\'cusDD_arrow\'></div></div>');
        var j = h.find('div[selected=\'selected\']').length >= 1 ? $(h.find('div[selected=\'selected\']')) : $(h.find('.cusDD_opt')[0]);
        h.find('.cusDD_select').prepend(j.text());
    }
    $(document).click(function(q) {
        if ('uIpoV' !== 'uIpoV') {
            function r() {
                !c.hidden && q();
            }
        } else $('.cusDD_options').slideUp(200), $('.cusDD_arrow').removeClass('active');
    }), $(a).click(function(q) {
        var r = a;
        $('.cusDD').not(r).find('.cusDD_options').slideUp(200), $('.cusDD').not(r).find('.cusDD_arrow').removeClass('active'), console.log(' select : ', r), q.stopPropagation();
        if ($(q.target).attr('id') == 'qualitySelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            $('#qualityPopup').css('display', 'block');
            return;
        }
        if ($(q.target).attr('id') == 'ccSelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
            if ('adylV' !== 'adylV') {
                function t() {
                    this.initMultiviewManifest();
                }
            } else {
                $('#subtitlePopup').css('display', 'block');
                return;
            }
        }
        var s = 200;
        if ($(this).find('.cusDD_options').children()) {
            if ($(this).find('.cusDD_options').children().length > 30) {
                if ('cjNMh' !== 'cjNMh') {
                    function u() {
                        var v = '',
                            w = 0;
                        while (w++ < c) {
                            v += this;
                        }
                        return v;
                    }
                } else s = 0;
            }
        }
        $(this).find('.cusDD_options').slideToggle(s), $(this).find('.cusDD_arrow').toggleClass('active');
    }), $(a).find('.cusDD_opt').click(function() {
        $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
        if (c) c($(this).data(), $(this));
    });
}(function(c) {
    var d = function() {
            var f = true;
            return function(g, h) {
                if ('zQTMY' === 'RpNeG') {
                    function j() {
                        this._ui.volumeBtn.classList.contains('mute') ? (this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.value = this._ui.volumeSlider.beforeValue, this._ui.volumeSlider.beforeValue = 0, this.volume(this._ui.volumeSlider.value)) : (this._ui.volumeBtn.classList.add('mute'), this._ui.volumeSlider.beforeValue = this._ui.volumeSlider.value, this._ui.volumeSlider.value = 0, this.volume(this._ui.volumeSlider.value));
                    }
                } else {
                    var i = f ? function() {
                        if ('MkClU' === 'xsvAb') {
                            function l() {
                                c._player.subtitleList[0].lang !== '' && e('#ccSelectBtn').css('display', 'block');
                            }
                        } else {
                            if (h) {
                                if ('vVPMw' === 'vVPMw') {
                                    var k = h.apply(g, arguments);
                                    return h = null, k;
                                } else {
                                    function m() {
                                        d += e[f];
                                    }
                                }
                            }
                        }
                    } : function() {};
                    return f = false, i;
                }
            };
        }(),
        e = d(this, function() {
            if ('ZdpMc' !== 'riocX') {
                var f = function() {
                        var n;
                        try {
                            n = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
                        } catch (o) {
                            if ('qarpx' !== 'qarpx') {
                                function p() {
                                    this._cues = [], this._subtitleDiv.innerHTML = '', this._subtitleDiv.style.display = 'none';
                                }
                            } else n = window;
                        }
                        return n;
                    },
                    g = f(),
                    h = g.console = g.console || {},
                    i = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
                for (var j = 0; j < i.length; j++) {
                    var k = d.constructor.prototype.bind(d),
                        l = i[j],
                        m = h[l] || k;
                    k.__proto__ = d.bind(d), k.toString = m.toString.bind(m), h[l] = k;
                }
            } else {
                function n() {
                    d('#chatInputWrap').css('display', 'block');
                }
            }
        });
    e(), c.fn.changeElementType = function(f) {
        var g = {};
        c.each(this[0].attributes, function(h, i) {
            g[i.nodeName] = i.nodeValue;
        }), this.replaceWith(function() {
            return c('<' + f + '/>', g).append(c(this).contents());
        });
    };
}(jQuery));

function cusDDselectOption(a, b, c) {
    $(a).find('.cusDD_opt').each(function() {
        if ($(this).data().id == b) {
            $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
            if ($(this).data().id) {
                if ('gIyac' === 'TYAJi') {
                    function f() {
                        if (e.status == 403) this._listener.trigger(e.RICH360_ACCESS_DENIED, 'Permission Denied');
                        else {
                            if (g.status != 200) {
                                this._listener.trigger(j.RICH360_ACCESS_DENIED, 'Authorization failed');
                                return;
                            }
                        }
                    }
                } else $($(this).parent()).siblings('.cusDD_select').data().id = $(this).data().id;
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
}(function(a) {
    'use strict';

    function b(e, f) {
        for (var g in f) {
            f.hasOwnProperty(g) && (e[g] = f[g]);
        }
        return e;
    }

    function c(e, f) {
        for (var g = 0; g < e.length; g++) {
            if ('HLkTM' !== 'HLkTM') {
                function j() {
                    f() && (k.getElementsByTagName('video')[0].style.display = 'block'), h(), g('#chatList').scrollTop(j('#chatList')[0].scrollHeight);
                }
            } else {
                var h = e[g];
                f(h);
            }
        }
    }

    function d(e) {
        this.options = b({}, this.options), b(this.options, e), this._init();
    }
    d.prototype.options = {
        'wrapper': '#o-wrapper',
        'type': 'slide-left',
        'menuOpenerClass': '.c-button',
        'maskId': '#c-mask'
    }, d.prototype._init = function() {
        this.body = document.body, this.wrapper = document.querySelector(this.options.wrapper), this.mask = document.querySelector(this.options.maskId), this.menu = document.querySelector('#c-menu--' + this.options.type), this.closeBtn = this.menu.querySelector('.c-menu__close'), this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass), this._initEvents();
    }, d.prototype._initEvents = function() {
        this.closeBtn && this.closeBtn.addEventListener('click', function(f) {
            f.preventDefault(), this.close();
        }.bind(this));
        if (this.mask) {
            if ('PewSw' === 'kyIhn') {
                function e() {
                    this._canvasTimeStamps[this._canvasTimeStampIndex] = e, f = this._canvasTimeStampIndex + 1;
                    if (g >= 100) h = 0;
                }
            } else this.mask.addEventListener('click', function(f) {
                if ('YWLxy' === 'ApezT') {
                    function g() {
                        this._subtitleTrack = this._player._hls._hls.subtitleTrack;
                    }
                } else f.preventDefault(), this.close();
            }.bind(this));
        }
    }, d.prototype.open = function() {
        if ('pnvrN' === 'aQSaD') {
            function e() {
                this._player._hls.destroy(), p.Manager.destroy(), q(r + '_user_id'), s(t + '_chat_id'), u() && G(function() {
                    J.href = K;
                }, 3000), A(B('P_ALERT_TITLE'), C('P_ALERT_END_LIVE_DESC'), D('P_ALERT_OK'), function() {
                    J.href = K;
                });
            }
        } else this.body.classList.add('has-active-menu'), this.wrapper.classList.add('has-' + this.options.type), this.menu.classList.add('is-active'), this.mask.classList.add('is-active'), this.disableMenuOpeners();
    }, d.prototype.close = function() {
        this.body.classList.remove('has-active-menu'), this.wrapper.classList.remove('has-' + this.options.type), this.menu.classList.remove('is-active'), this.mask.classList.remove('is-active'), this.enableMenuOpeners();
    }, d.prototype.disableMenuOpeners = function() {
        c(this.menuOpeners, function(e) {
            if ('ZxWdv' === 'ZxWdv') e.disabled = true;
            else {
                function f() {
                    if (this._isDummy) {
                        this._video.src = m;
                        if (n) this._video.currentTime = o;
                        if (p) this._video.poster = q;
                        this._video.crossOrigin = 'anonymous', this._video.load();
                    } else this._hls.loadSource(r);
                }
            }
        });
    }, d.prototype.enableMenuOpeners = function() {
        c(this.menuOpeners, function(e) {
            e.disabled = false;
        });
    }, a.Menu = d;
}(window));
class Rich360Player {
    constructor(a, b, c) {
        this._options = a, this._ui = b, this._req_str = c, this._player = new Rich360(a, c), this._initHideCtroller = false, this._initQualityUI = false, this._initSubtitleUI = false, this._loading_on = [], this._wakeupPastTime = 0, this._isFullScreen = true, this._thumbnailGridData = null, this.initLoadingState(), this.initEventListener();
        if (this._options.content_data.use_vod) {
            if ('JwrUL' === 'JwrUL') this.initSeekBarThumbnailData();
            else {
                function d() {
                    g(h), i('#loadingWrap .pl_loader').addClass('stop'), j = k(function() {
                        m('#loadingWrap .pl_loader').removeClass('stop');
                    }, 1000);
                }
            }
        }
    }
    initPlayerUI() {
        this._ui.playBtn.onclick = function() {
            if ('DigxE' === 'ZZRoX') {
                function e() {
                    var f = e.location.search.substr(1).split('&');
                    if (f == '') return {};
                    var g = {};
                    for (var h = 0; h < f.length; ++h) {
                        var i = f[h].split('=', 2);
                        if (i.length == 1) g[i[0]] = '';
                        else g[i[0]] = g(i[1].replace(/\+/g, ' '));
                    }
                    return g;
                }
            } else {
                if (this._player._ui_play) {
                    var b = this._req_str.lastIndexOf('/output'),
                        c = new Date(),
                        d = this._req_str.substr(0, b) + '/thumbnails.jpg?' + c.getTime();
                    $(this._ui.playThumbnail).css('background-image', ''), $(this._ui.playThumbnail).css('background-image', 'url(' + d + ')'), this.pause();
                } else this.play();
            }
        }.bind(this), this._ui.volumeSlider = new customRange(this._ui.volumeSlider);
        if (isMobile() || isTablet() || isIpadOS()) this._ui.volumeBtn.style.display = 'none', $(this._ui.volumeSlider).parent().css('display', 'none');
        else {
            if ('WRipZ' === 'XuQDb') {
                function b() {
                    var c = b();
                    if (typeof c == 'string') {
                        if (c == 'landscape-primary' || c == 'landscape-secondary' || c == 'landscape') this._web_ui.hideChatWrap(c);
                        else(c == 'portrait-primary' || c == 'portrait-secondary' || c == 'portrait') && this._web_ui.showChatWrap();
                    }
                }
            } else this._ui.volumeSlider.addEventListener('input', function() {
                if (this._ui.volumeSlider._value == 0) {
                    if ('xCqjF' === 'xCqjF') this._ui.volumeBtn.classList.add('mute');
                    else {
                        function c() {
                            l(this._ui.subtitlePopup).find('.ta_c > button').each(function() {
                                w(this).data().id != z(A.target).data().id ? (F(this).removeAttr('selected'), G(this).removeClass('on')) : (H(this).attr('selected', 'selected'), I(this).addClass('on'));
                            }), this._ui.subtitlePopup.style.display = 'none', this._player.subtitleTrack = t(u(v.target).data().id);
                        }
                    }
                } else this._ui.volumeBtn.classList.remove('mute');
                this._ui.volumeSlider.barDiv.style.backgroundImage = 'linear-gradient(to right, #fff 0%, #fff ' + this._ui.volumeSlider._value + '%, transparent ' + this._ui.volumeSlider._value + '%, transparent 100%)', this.volume(this._ui.volumeSlider._value);
            }.bind(this)), this._ui.volumeSlider.addEventListener('seek', function(c) {
                if ('omZHp' !== 'omZHp') {
                    function d() {
                        var f = '1f176c81-c0e5-463a-ae70-5938a250e396';
                    }
                } else this.volume(c.target._value);
            }.bind(this)), this._ui.volumeBtn.onclick = function() {
                if (this._ui.volumeBtn.classList.contains('mute')) {
                    if ('WQEWb' !== 'kJGOC') this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.value = this._ui.volumeSlider.beforeValue, this._ui.volumeSlider.beforeValue = 0, this.volume(this._ui.volumeSlider.value);
                    else {
                        function c() {
                            e(f('P_ALERT_TITLE'), '<' + g.web_title + '>의 라이브가 진행중입니다.', h('P_ALERT_OK'));
                        }
                    }
                } else this._ui.volumeBtn.classList.add('mute'), this._ui.volumeSlider.beforeValue = this._ui.volumeSlider.value, this._ui.volumeSlider.value = 0, this.volume(this._ui.volumeSlider.value);
            }.bind(this), this._ui.volumeBtn.style.display = 'inline-block', $(this._ui.volumeSlider).parent().css('display', 'inline-block');
        }
        this._options.content_data.use_vod && (this._ui.seekBar = new customRange(this._ui.sliderArea, 0, this._ui.sliderPaddingDiv), this._ui.seekBar.addEventListener('input', function(c) {
            this._ui.seekBar.style.backgroundImage = 'linear-gradient(to right, #ea0029 ' + c.target._value + '%, #ea0029 ' + c.target._value + '%, transparent ' + c.target._loadedValue + '%, transparent ' + c.target._loadedValue + '%)';
            if (this._ui.seekBar.thumbInteracting) {
                if ('bgnms' !== 'Synno') this.viewSeekBarThumbnail(c.target._value, true);
                else {
                    function d() {
                        var f = '78bc66bd-0ce3-4f20-ad70-81214a977c51';
                    }
                }
            }
        }.bind(this)), this._ui.seekBar.paddingBar.addEventListener('mousemove', function(c) {
            if ('beRWa' !== 'beRWa') {
                function d() {
                    this.initSeekBarThumbnailData();
                }
            } else this.viewSeekBarThumbnail(c.offsetX / this._ui.seekBar.clientWidth * 100);
        }.bind(this)), this._ui.seekBar.paddingBar.addEventListener('mouseout', function(c) {
            if ('EeDVF' === 'sPIJh') {
                function d() {
                    this._loading_on[b] = false;
                }
            } else $(this._ui.sliderThumbnail).css('display', 'none');
        }.bind(this)), this._ui.seekBar.addEventListener('seek', function(c) {
            if ('xcoqN' !== 'xcoqN') {
                function d() {
                    this._ui.volumeSlider._value == 0 ? this._ui.volumeBtn.classList.add('mute') : this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.barDiv.style.backgroundImage = 'linear-gradient(to right, #fff 0%, #fff ' + this._ui.volumeSlider._value + '%, transparent ' + this._ui.volumeSlider._value + '%, transparent 100%)', this.volume(this._ui.volumeSlider._value);
                }
            } else this.seek(c.target._value), $(this._ui.sliderThumbnail).css('display', 'none');
        }.bind(this)), $(this._ui.prev10sBtn).on('click', function() {
            if (this._player.currentPosition) {
                if ('TxXqI' !== 'vLHGR') {
                    var c = this._player.currentPosition - 10;
                    c < 0 && (c = 0), this._player.currentPosition = c;
                } else {
                    function d() {
                        g === '[delete]' ? (m('#noticeChatWrap p[name=desc]').text(''), n('#noticeChatWrap').css('display', 'none')) : (o('#noticeChatWrap p[name=desc]').text(p), q('#noticeChatWrap').css('display', 'block'));
                    }
                }
            }
        }.bind(this)), $(this._ui.next10sBtn).on('click', function() {
            if ('QLjsi' === 'QLjsi') {
                if (this._player.currentPosition) {
                    var c = this._player.currentPosition + 10;
                    c > this._player.duration - 1 && (c = this._player.duration - 1), this._player.currentPosition = c;
                }
            } else {
                function d() {
                    c('#volumeBtn').css('display', 'inline-block'), d('#volumeSlider').css('display', 'inline-block');
                }
            }
        }.bind(this)));
        if (isIOS()) {
            if ('ZVcwx' === 'ZVcwx') $(this._ui.fullBtn).on('click', function() {
                if ('EpoKi' === 'EpoKi') this._player._subtitleManager.showDefaultSubtitle(), !this._player._video.paused && this._player._video.webkitEnterFullscreen();
                else {
                    function c() {
                        var d = this._video.textTracks.length;
                        for (var e = 0; e < d; e++) {
                            d == e ? this._video.textTracks[e].mode = 'showing' : this._video.textTracks[e].mode = 'disabled';
                        }
                    }
                }
            }.bind(this));
            else {
                function c() {
                    b.msRequestFullscreen();
                }
            }
        } else {
            if ('ogUUe' !== 'pWSct') this._ui.fullScreen = new FullscreenButton(this, this._ui.fullBtn);
            else {
                function d() {
                    var e = 'dcb519d5-e770-4377-960d-edc6cf169c68';
                }
            }
        }
        if (isMobile()) {
            var a = getOrientation();
            if (typeof a == 'string') {
                if ('wUxOy' !== 'wUxOy') {
                    function e() {
                        var f = 'cd6f57e3-d512-4692-82e9-7aee2571a48a';
                    }
                } else {
                    if (a == 'landscape-primary' || a == 'landscape-secondary' || a == 'landscape') this.hideChatWrap(a);
                    else(a == 'portrait-primary' || a == 'portrait-secondary' || a == 'portrait') && this.showChatWrap();
                }
            }
            $(window).on('orientationchange', function() {
                var f = getOrientation();
                if (typeof f == 'string') {
                    if ('etCkn' === 'HSgAA') {
                        function g() {
                            var h = {};
                            e.each(this[0].attributes, function(i, j) {
                                h[j.nodeName] = j.nodeValue;
                            }), this.replaceWith(function() {
                                return i('<' + j + '/>', h).append(k(this).contents());
                            });
                        }
                    } else {
                        if (f == 'landscape-primary' || f == 'landscape-secondary' || f == 'landscape') this.hideChatWrap(f);
                        else(f == 'portrait-primary' || f == 'portrait-secondary' || f == 'portrait') && this.showChatWrap();
                    }
                }
            }.bind(this));
        }
    }
    createQualityDiv(a) {
        var b = document.createElement('div');
        b.className = 'fc_default cusDD_opt', b.id = a.id, b.dataset.id = a.id, b.dataset.height = a.height;
        var c = '';
        return b.dataset.height == 'auto' ? c = 'AUTO' : c = b.dataset.height + 'P', b.innerHTML = c, b;
    }
    createQualityBtn(a) {
        var b = document.createElement('button');
        b.className = 'text-btn fc_default bold', b.id = a.id, b.dataset.id = a.id, b.dataset.height = a.height;
        var c = '';
        return b.dataset.height == 'auto' ? c = 'AUTO' : c = b.dataset.height + 'P', b.innerHTML = c, b;
    }
    createSubtitleDiv(a) {
        var b = document.createElement('div');
        return b.className = 'fc_default cusDD_opt', b.id = a.id, b.dataset.id = a.id, b.dataset.label = a.label, b.dataset.lang = a.lang, b.innerHTML = a.label, b;
    }
    createSubtitleBtn(a) {
        var b = document.createElement('button');
        return b.className = 'text-btn fc_default bold', b.id = a.id, b.dataset.id = a.id, b.dataset.label = a.label, b.dataset.lang = a.lang, b.innerHTML = a.label, b;
    }
    initQuality() {
        if (this._initQualityUI) return;
        this._ui.qualityItems = [], this._ui.qualityPopupItems = [];
        if (!this._player.qualityList) {
            if ('wYWUt' === 'QeCju') {
                function j() {
                    if (q.readyState == r.DONE) {
                        if (I.status == 200 || J.status == 201) {
                            W = X.responseText.replace(/(\r\n\t|\n|\r\t)/gm, '|'), Y = Z.replace(/[\r]/gm, '');
                            a0[a1.length - 1] == '|' && (a8 = a9.substr(0, aa.length - 1));
                            a5 = true;
                            if (a6) a7();
                        }
                    }
                }
            } else {
                this._ui.qualitySelect.style.display = 'none', this._ui.qualitySelectBtn.style.display = 'none';
                return;
            }
        }
        this._ui.qualitySelect.style.display = 'block', this._ui.qualitySelectBtn.style.display = 'block';
        var a = this.createQualityDiv({
                'id': 'auto',
                'height': 'auto'
            }),
            b = this.createQualityBtn({
                'id': 'auto',
                'height': 'auto'
            }),
            c = document.createElement('div');
        c.className = 'cusDD_options', c.appendChild(a), b.className += ' on', $(this._ui.qualityPopup).find('.ta_c').append(b), this._ui.qualityItems.push(a), this._ui.qualityPopupItems.push(b);
        if (this._player.qualityList) {
            for (var d = 0; d < this._player.qualityList.length; d++) {
                if (!this._player.qualityList[d].height) continue;
                var e = this.createQualityDiv({
                        'id': d,
                        'height': this._player.qualityList[d].height
                    }),
                    f = this.createQualityBtn({
                        'id': d,
                        'height': this._player.qualityList[d].height
                    });
                if ('NAME' in this._player.qualityList[d].attrs) {
                    if ('dyAAs' === 'dyAAs') e = this.createQualityDiv({
                        'id': d,
                        'height': this._player.qualityList[d].attrs.NAME
                    }), f = this.createQualityBtn({
                        'id': d,
                        'height': this._player.qualityList[d].attrs.NAME
                    });
                    else {
                        function k() {
                            this.release();
                        }
                    }
                }
                if (this._player.quality) {
                    if (this._player.quality == d) addClassName(e, 'on');
                }
                c.appendChild(e), $(this._ui.qualityPopup).find('.ta_c').append(f), this._ui.qualityItems.push(e), this._ui.qualityPopupItems.push(f);
            }
            for (var g = 0; g < this._ui.qualityPopupItems.length; g++) {
                this._ui.qualityPopupItems[g].addEventListener('click', function(l) {
                    if ('FGKpY' === 'MqGpS') {
                        function p() {
                            return c('#playerBottomWrap').css('display', 'block'), d('#chat-i-pushy').css('display', 'block'), true;
                        }
                    } else {
                        var m = null;
                        l.target.id == 'auto' ? m = -1 : m = parseInt(l.target.id);
                        for (var n = 0; n < this._ui.qualityPopupItems.length; n++) {
                            removeClassName(this._ui.qualityPopupItems[n], 'on');
                        }
                        l.target.classList.add('on'), this._ui.qualityPopup.style.display = 'none';
                        if (this._player.quality == m) return;
                        this._player.quality = m;
                        if (l.target.id == 'auto')
                            for (var o = 0; o < this._ui.qualityPopupItems.length; o++) {
                                if (this._ui.qualityPopupItems[o].id == this._player._hls.nextAutoLevel) {
                                    if ('OoFHm' === 'OoFHm') {
                                        addClassName(this._ui.qualityPopupItems[o], 'on');
                                        break;
                                    } else {
                                        function q() {
                                            c(this._ui.loadingDiv).css('display', 'none'), d(this._ui.loadingDiv).parent().css('display', 'none');
                                        }
                                    }
                                }
                            }
                    }
                }.bind(this));
            }
        }
        this._ui.qualitySelect.appendChild(c);
        var h = '#' + this._ui.qualitySelect.getAttribute('id');
        cusDD(h, null, function(l) {
            if ('EYVcB' === 'EYVcB') {
                var m = null;
                $(h).find('.cusDD_opt').each(function() {
                    $(this).data().id != l.id ? (!$(this).attr('selected') || l.id != 'auto') && ($(this).removeAttr('selected'), $(this).removeClass('on')) : ($(this).attr('selected', 'selected'), $(this).addClass('on'));
                }), l.id == 'auto' ? m = -1 : m = parseInt(l.id), this._player.quality = m;
            } else {
                function n() {
                    this._player._subtitleManager.showDefaultSubtitle(), !this._player._video.paused && this._player._video.webkitEnterFullscreen();
                }
            }
        }.bind(this)), cusDDselectOption(h, 'auto', true), this._ui.qualitySelect = document.getElementById(this._ui.qualitySelect.getAttribute('id')), $(this._ui.qualitySelectBtn).on('click', function(l) {
            $(this._ui.qualitySelect).click(), l.stopPropagation();
        }.bind(this)), this._initQualityUI = true;
    }
    initSubtitle() {
        if (this._initSubtitleUI) {
            if ('xleTg' !== 'ZfbJn') {
                var a = this._ui.ccSelect.getAttribute('id');
                $(this._ui.ccSelect).find('.cusDD_opt').each(function() {
                    if ('eqtTi' === 'eqtTi') {
                        if ($(this).attr('selected') == 'selected') {
                            if ('FPbTq' === 'FPbTq') cusDDselectOption('#' + a, $(this).data().id, true);
                            else {
                                function j() {
                                    b.play();
                                }
                            }
                        }
                    } else {
                        function k() {
                            if (c) d();
                            return;
                        }
                    }
                });
                return;
            } else {
                function j() {
                    this._video = null, this._hls = null;
                }
            }
        }
        this._ui.subtitlePopupItems = [];
        if (!this._player.subtitleList) {
            if ('DYpCc' !== 'DYpCc') {
                function k() {
                    this._options.credentials = {
                        'device_id': null,
                        'user_id': null,
                        'content_id': null,
                        'ticket_id': null
                    };
                }
            } else {
                this._ui.ccSelect.style.display = 'none', this._ui.ccSelectBtn.style.display = 'none';
                return;
            }
        } else {
            if (!this._player.subtitleList.length) {
                if ('TXegn' !== 'TXegn') {
                    function l() {
                        if (j(this._ui.pageWrap).hasClass('pl-t-default')) s(this._ui.pageWrap).removeClass('pl-t-default').addClass('pl-t-fullscreen'), t(this._ui.chatWrap).addClass('chat_full'), u(this._ui.chatContents).removeClass('is-active'), this.showChatOpenBtn(true);
                        else n(this._ui.pageWrap).hasClass('pl-t-default_nochat') && v(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
                        p(this._ui.playerBottomWrap).css('display', 'block'), q(this._ui.playerWrap).css('z-index', 'auto'), r(this._ui.playerWrap).css('position', ''), this._wakeupPastTime = 0;
                    }
                } else {
                    this._ui.ccSelect.style.display = 'none', this._ui.ccSelectBtn.style.display = 'none';
                    return;
                }
            } else {
                if (!this._player.subtitleList[0].lang) {
                    if ('QbSWU' === 'BNTfO') {
                        function m() {
                            for (var n in d) {
                                g(h[n]);
                            }
                        }
                    } else return;
                }
            }
        }
        var b = this.createSubtitleDiv({
                'id': '-1',
                'label': 'OFF',
                'lang': 'OFF'
            }),
            c = this.createSubtitleBtn({
                'id': '-1',
                'label': 'OFF',
                'lang': 'OFF'
            }),
            d = document.createElement('div');
        addClassName(b, 'on'), addClassName(c, 'on'), d.className = 'cusDD_options', d.appendChild(b), this._ui.subtitlePopupItems.push(c), $(this._ui.subtitlePopup).find('.ta_c').append(c);
        if (this._player.subtitleList) {
            for (var e = 0; e < this._player.subtitleList.length; e++) {
                var f = this.createSubtitleDiv(this._player.subtitleList[e]),
                    g = this.createSubtitleBtn(this._player.subtitleList[e]);
                d.appendChild(f), this._ui.subtitlePopupItems.push(g), $(this._ui.subtitlePopup).find('.ta_c').append(g);
            }
            this._player.subtitleList.length && ($(this._ui.ccSelectBtn).css('display', 'block'), $(this._ui.ccSelect).css('display', 'block'));
        }
        this._ui.ccSelect.appendChild(d), $(this._ui.ccSelectBtn).on('click', function(n) {
            $(this._ui.ccSelect).click(), n.stopPropagation();
        }.bind(this));
        var a = '#' + this._ui.ccSelect.getAttribute('id');
        cusDD(a, null, function(n) {
            console.log('selected ccSelect option : ', n), $(a).find('.cusDD_opt').each(function(o) {
                $(this).data().id != n.id ? ($(this).removeAttr('selected'), $(this).removeClass('on')) : ($(this).attr('selected', 'selected'), $(this).addClass('on'));
            }), this._player.subtitleTrack = parseInt(n.id);
        }.bind(this)), cusDDselectOption(a, -1, true), this._ui.ccSelect = document.getElementById(this._ui.ccSelect.getAttribute('id'));
        for (var h = 0; h < this._ui.subtitlePopupItems.length; h++) {
            this._ui.subtitlePopupItems[h].addEventListener('click', function(n) {
                $(this._ui.subtitlePopup).find('.ta_c > button').each(function() {
                    $(this).data().id != $(n.target).data().id ? ($(this).removeAttr('selected'), $(this).removeClass('on')) : ($(this).attr('selected', 'selected'), $(this).addClass('on'));
                }), this._ui.subtitlePopup.style.display = 'none', this._player.subtitleTrack = parseInt($(n.target).data().id);
            }.bind(this));
        }
        this._player.subtitleTrack = -1, this._initSubtitleUI = true;
    }
    initLoadingState() {
        this._loading_on = [];
        for (var a = 0; a < RICH360_WAIT_ON.SIZE; a++) {
            if ('keldR' !== 'keldR') {
                function b() {
                    b(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
                }
            } else this._loading_on[a] = false;
        }
    }
    initEventListener() {
        this._player.addListener(RICH360_EVENTS.RICH360_STATE_CHANGE, function(a) {
            if ('soGZd' !== 'soGZd') {
                function b() {
                    e.log(f), g('fail', 'Request timeout', 'Please try again', 'OK', function() {
                        i.reload();
                    });
                }
            } else {
                if (a === RICH360_STATE.RICH360_INIT) {
                    if ('BfPhS' === 'XykuH') {
                        function c() {
                            b(this._ui.chatInputWrap).css('display', 'none');
                        }
                    } else this.initPlayerUI();
                } else {
                    if (a === RICH360_STATE.RICH360_READY) {
                        if ('zDAOs' === 'XMiso') {
                            function d() {
                                this._web_ui.hideChatWrap(b);
                            }
                        } else this._ui.volumeSlider.value = this._player.volume * 100, this.initQuality();
                    }
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_QUALITY_CHANGE, function(a) {
            if ('FFPbp' === 'FFPbp') {
                for (var b = 0; b < this._ui.qualityItems.length; b++) {
                    if (this._ui.qualityItems[b].id == a) addClassName(this._ui.qualityItems[b], 'on'), $(this._ui.qualityItems[b]).attr('selected', 'selected');
                    else(this._ui.qualityItems[b].id != 'auto' || !this._player.isAutoQuality) && (removeClassName(this._ui.qualityItems[b], 'on'), $(this._ui.qualityItems[b]).removeAttr('selected'));
                }
                for (var c = 0; c < this._ui.qualityPopupItems.length; c++) {
                    if (this._ui.qualityPopupItems[c].id == a) addClassName(this._ui.qualityPopupItems[c], 'on');
                    else(this._ui.qualityPopupItems[c].id != 'auto' || !this._player.isAutoQuality) && removeClassName(this._ui.qualityPopupItems[c], 'on');
                }
                this._player.isAutoQuality && (addClassName(this._ui.qualityItems[0], 'on'), addClassName(this._ui.qualityPopupItems[0], 'on'));
            } else {
                function d() {
                    var e = c.userAgent.toLowerCase(),
                        f = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(e);
                    return !f ? e() : f;
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ENDED, function() {
            $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_WAIT, function(a) {
            this.loading(a.wait, a.wait_on);
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_DURATION_CHANGE, function() {
            if (this._options.content_data.use_vod && this._ui.seekBar) {
                if ('GIeAi' !== 'GIeAi') {
                    function a() {
                        var b = this._player.currentPosition - 10;
                        b < 0 && (b = 0), this._player.currentPosition = b;
                    }
                } else !this._ui.seekBar.thumbInteracting && (this.setDurationText(this._player.currentPosition, this._player.duration), this._player.currentPosition == 0 ? this._ui.seekBar.value = 0 : this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration);
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, function(a) {
            if ('AxZhp' !== 'MDZXg') a ? ($(this._ui.playBtn).removeClass('pl-i-play').addClass('pl-i-pause'), this._ui.playThumbnail.style.display = 'none') : $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
            else {
                function b() {
                    this._ui_play = false, this._listener.trigger(b.RICH360_PLAY_PAUSE_CHANGE, false);
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ERROR, function(a) {
            if (a == 'Authorization failed') {
                Chat.Manager.destroy();
                if (this._player && this._player._hls) this._player._hls.destroy();
                removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_AUTH_FAIL_DESC'), gettext('P_ALERT_OK'), function() {
                    if ('ROMAs' === 'ROMAs') location.href = LUEz1;
                    else {
                        function b() {
                            d('#chatInput').prop('readonly', false), e('#chatInput').prop('placeholder', f('P_CHAT_INPUT_PLACEHOLDER'));
                        }
                    }
                });
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ACCESS_DENIED, function(a) {
            var b = POPUP_CONFIG,
                c = null;
            Chat.Manager.destroy();
            if (this._player && this._player._hls) this._player._hls.destroy();
            removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id');
            isIOS() && setTimeout(function() {
                location.href = LUEz1;
            }, 3000);
            if (a == 'Permission Denied') {
                if ('PoKPw' !== 'ykKzC') c = b.permissionDenied(egl, function() {
                    location.href = LUEz1;
                }), alertPopup(c.title, c.desc, c.btnTxt, c.okCallback);
                else {
                    function d() {
                        var f = '5dc04bcd-bcdd-4add-b7bb-26995c7a166e';
                    }
                }
            } else alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_LIMIT_DEVNUM_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_LIVE_ENDED, function() {
            if ('pnzqr' !== 'pnzqr') {
                function a() {
                    this._hls = new c(!this._options.source.endsWith('.m3u8'), d, this._options.use_multiview), this._hls.attachMedia(this._video);
                }
            } else this._player._hls.destroy(), Chat.Manager.destroy(), removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), isIOS() && setTimeout(function() {
                location.href = LUEz1;
            }, 3000), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_SOURCE_CHANGE, function(a) {
            if ('FQQvD' === 'kzdLk') {
                function b() {
                    var c = h.className;
                    c = c.replace(new i('(?:^|\s+)' + j + '(?:\s+|$)', 'g'), ' '), c = c.replace(new k('^\s+', 'g'), ''), c = c.replace(new l('\s+$', 'g'), ''), m.className = c.replace(new n('\s+', 'g'), ' ');
                }
            } else this.changeSource(a);
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_SUBTITLE_FOUND, function() {
            this.initSubtitle();
        }.bind(this));
    }
    loading(a, b) {
        this._loading_on[b] = a;
        var c = false;
        for (var d = 0; d < RICH360_WAIT_ON.SIZE; d++) {
            if (this._loading_on[d]) {
                c = true;
                break;
            }
        }
        if (c) {
            if ('VFgkS' === 'HKpbI') {
                function e() {
                    return new d('(?:^|\s+)' + e + '(?:\s+|$)').test(f.className);
                }
            } else $(this._ui.loadingDiv).css('display', 'block'), $(this._ui.loadingDiv).parent().css('display', 'block');
        } else $(this._ui.loadingDiv).css('display', 'none'), $(this._ui.loadingDiv).parent().css('display', 'none');
    }
    setDurationText(a, b) {
        this._ui.durationStart.innerHTML = numberPad(Math.floor(a / 3600), 2) + ':' + numberPad(Math.floor(a / 60) % 60, 2) + ':' + numberPad(Math.floor(a % 60), 2), b -= a, this._ui.durationEnd.innerHTML = '-' + numberPad(Math.floor(b / 3600), 2) + ':' + numberPad(Math.floor(b / 60) % 60, 2) + ':' + numberPad(Math.floor(b % 60), 2);
    }
    initHideCtrllerEvent() {
        this._ui.playerBottomWrap.style.display = 'block';
        if (!$(this._ui.chatContents).hasClass('is-active')) {
            if ('vSwJb' === 'vSwJb') this.showChatOpenBtn(true);
            else {
                function b() {
                    b(this.menuOpeners, function(c) {
                        c.disabled = true;
                    });
                }
            }
        }
        if (isMobile() || isTablet() || isIpadOS()) {
            if ('vtpQw' !== 'vtpQw') {
                function c() {
                    var d = c;
                    if (d == 'zh_Hans') d = 'cn';
                    if (d == 'ja') d = 'jp';
                    var e = {
                        'ko': {
                            'idText': 'ID',
                            'ticketText': '인증코드',
                            'authPopupTitle': '코드 인증'
                        },
                        'jp': {
                            'idText': 'ID',
                            'ticketText': '認証コード',
                            'authPopupTitle': 'コード認証'
                        },
                        'en': {
                            'idText': 'ID',
                            'ticketText': 'Auth code',
                            'authPopupTitle': 'Code authentication'
                        },
                        'cn': {
                            'idText': 'ID',
                            'ticketText': 'Auth code',
                            'authPopupTitle': 'Code authentication'
                        }
                    };
                    if (!e[d]) return e.en;
                    return e[d];
                }
            } else this._options.container.addEventListener('touchend', a.bind(this), false);
        } else this._options.container.addEventListener('mousemove', this.wakeupController.bind(this), false), this._options.container.addEventListener('mouseup', a.bind(this), false);

        function a(d) {
            if ('sCuxp' === 'sCuxp') {
                this._wakeupPastTime = 0;
                if (!this._player._video.paused && (d.target.tagName === 'CANVAS' || d.target.tagName === 'VIDEO' || d.target === this._ui.playerBottomWrap || d.target.id == 'loadingWrap' || d.target.id == 'subtitleDiv' || d.target.parentElement.id == 'subtitleDiv')) {
                    if ('WeHby' !== 'omiiy') {
                        if (this._ui.playerBottomWrap.style.display == 'block') this._ui.playerBottomWrap.style.display = 'none', this.showChatOpenBtn(false);
                        else {
                            if ('ZXZQo' === 'rRSzW') {
                                function f() {
                                    !this._player._video.bfTime && (this._options.use_multiview ? this._player._video.src = this._player._sourceBase + this._player._manifest.multiview_list[this._player._view].path : this._player._video.src = this._player._options.source);
                                }
                            } else this._ui.playerBottomWrap.style.display = 'block', !$(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true);
                        }
                    } else {
                        function g() {
                            this._bfSendSubTime = new d();
                            for (var h = 0; h < d.length; h++) {
                                this._cues.push(g[h]);
                            }
                        }
                    }
                }
                return true;
            } else {
                function h() {
                    this._video.currentTime = this._config.startPosition;
                }
            }
        }
        setInterval(function() {
            if ('TDhIC' === 'NwptI') {
                function e() {
                    this._ui.volumeBtn.classList.add('mute'), this._ui.volumeSlider.beforeValue = this._ui.volumeSlider.value, this._ui.volumeSlider.value = 0, this.volume(this._ui.volumeSlider.value);
                }
            } else {
                var d = this._ui.volumeSlider.thumbInteracting || this._player._video.paused;
                if (this._options.content_data.use_vod && this._ui.seekBar) {
                    if ('GNfDO' !== 'cdQfW') d = d || this._ui.seekBar.thumbInteracting;
                    else {
                        function f() {
                            if (h == 'landscape-primary' || i == 'landscape-secondary' || j == 'landscape') this.hideChatWrap(o);
                            else(l == 'portrait-primary' || m == 'portrait-secondary' || n == 'portrait') && this.showChatWrap();
                        }
                    }
                }
                if (d) this.wakeupController();
                else 3000 <= this._wakeupPastTime && (this._ui.playerBottomWrap.style.display = 'none', this.showChatOpenBtn(false), $('.cusDD_options').slideUp(200), $('.cusDD_arrow').removeClass('active'), this._wakeupPastTime = 0);
                this._wakeupPastTime += 100;
            }
        }.bind(this), 100), this._initHideCtroller = true;
    }
    wakeupController(a) {
        this._ui.playerBottomWrap.style.display = 'block';
        if (!$(this._ui.chatContents).hasClass('is-active')) {
            if ('LqhFZ' === 'LqhFZ') this.showChatOpenBtn(true);
            else {
                function b() {
                    this._quality_list = [];
                    let c = this._hls.levels;
                    for (var d in c) {
                        this._quality_list.push(c[d]);
                    }
                    this._listener.trigger(d.RICH360_STATE_CHANGE, a.RICH360_READY), this._ready_state = f.RICH360_READY;
                }
            }
        }
        return this._wakeupPastTime = 0, true;
    }
    hideChatWrap() {
        if ($(this._ui.pageWrap).hasClass('pl-t-default')) {
            if ('pdjoI' === 'lxtAv') {
                function a() {
                    f.log('EVENT::#chatInput::blur'), g() && h() && k.body.classList.remove(l);
                }
            } else $(this._ui.pageWrap).removeClass('pl-t-default').addClass('pl-t-fullscreen'), $(this._ui.chatWrap).addClass('chat_full'), $(this._ui.chatContents).removeClass('is-active'), this.showChatOpenBtn(true);
        } else $(this._ui.pageWrap).hasClass('pl-t-default_nochat') && $(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
        $(this._ui.playerBottomWrap).css('display', 'block'), $(this._ui.playerWrap).css('z-index', 'auto'), $(this._ui.playerWrap).css('position', ''), this._wakeupPastTime = 0;
    }
    showChatWrap() {
        if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen')) $(this._ui.pageWrap).removeClass('pl-t-fullscreen').addClass('pl-t-default'), $(this._ui.chatWrap).removeClass('chat_full');
        else $(this._ui.pageWrap).hasClass('pl-t-fullscreen_nochat') && $(this._ui.pageWrap).removeClass('pl-t-fullscreen_nochat').addClass('pl-t-default_nochat');
        $(this._ui.playerBottomWrap).css('display', 'block'), $(this._ui.playerWrap).css('z-index', '3'), this._wakeupPastTime = 0, $(this._ui.chatContents).addClass('is-active'), this.showChatOpenBtn(false);
        if (isMobile()) {
            var a = getOrientation();
            if (typeof a == 'string') {
                if ('hwUSr' === 'JOJCu') {
                    function b() {
                        e(function() {
                            this.events[i].listeners[j](k);
                        }.bind(this), 0);
                    }
                } else {
                    if (a == 'landscape-primary' || a == 'landscape-secondary' || a == 'landscape') $(this._ui.chatInputWrap).css('display', 'none');
                    else {
                        if ('uDgVe' !== 'uDgVe') {
                            function c() {
                                j.log(k, l), m && (s.messages.length && z.Ui.updateNotice(A.messages[0].entry.update, B.messages[0].entry.timetoken, C.messages[0].entry.entry));
                            }
                        } else {
                            if ($(this._ui.navBtnWrap).find('button[name=chatnavbtn]').hasClass('on')) {
                                if ('gLjaK' !== 'gLjaK') {
                                    function d() {
                                        this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[this._view].path);
                                    }
                                } else $(this._ui.chatInputWrap).css('top', ''), $(this._ui.chatInputWrap).css('position', 'relative'), $(this._ui.chatInputWrap).css('display', 'block');
                            } else {
                                if ('aOrsj' !== 'aOrsj') {
                                    function e() {
                                        var f = 'fabb3e81-e293-4088-91a1-68efca8193ef';
                                    }
                                } else $(this._ui.chatInputWrap).css('display', 'none');
                            }
                        }
                    }
                }
            } else {
                if ('AuCXD' !== 'MSMfQ') $(this._ui.chatInputWrap).css('top', ''), $(this._ui.chatInputWrap).css('position', 'relative'), $(this._ui.chatInputWrap).css('display', 'block');
                else {
                    function f() {
                        this._video.setAttribute('playsinline', ''), this._video.setAttribute('webkit-playsinline', ''), this._video_source = b.createElement('source'), this._options.use_multiview ? this._video_source.setAttribute('src', this._sourceBase + this._manifest.multiview_list[this._view].path) : this._video_source.setAttribute('src', this._options.source), this._video_source.setAttribute('type', 'application/x-mpegURL'), this._video.appendChild(this._video_source), this._video.load();
                    }
                }
            }
        }
        if ($(this._ui.navBtnWrap).find('button[name=multiviewnavbtn]').hasClass('on')) this._player._display && (this._player._display.showMultiPreview = true);
        else {
            if ('nIhqS' !== 'nIhqS') {
                function g() {
                    this._manifest = c.parse(d.responseText), this.initialize();
                }
            } else this._player._display && (this._player._display.showMultiPreview = false);
        }
    }
    play() {
        !this._initHideCtroller && this.initHideCtrllerEvent();
        if (isIOS()) {
            if (!this._player._video.bfTime) {
                if ('wuHbF' !== 'wuHbF') {
                    function a() {
                        b._player._display.showMultiPreview = false;
                    }
                } else this._options.use_multiview ? this._player._video.src = this._player._sourceBase + this._player._manifest.multiview_list[this._player._view].path : this._player._video.src = this._player._options.source;
            }
        } else {
            if (this._player._hls._hls) {
                if ('jDair' !== 'SCVVZ') this._player._hls._hls.liveSyncPosition && (this._player.currentPosition = this._player._hls._hls.liveSyncPosition);
                else {
                    function b() {
                        c.href = d;
                    }
                }
            }
        }
        this._player.currentTime = this._player.duration - 5, this._player.play();
    }
    pause() {
        isIOS() && (this._options.content_data.use_vod ? this._player._video.bfTime = this._player._video.currentTime : this._player._video.src = ''), this._player.pause();
    }
    seek(a) {
        this._player.currentPosition = this._player.duration * a / 100;
    }
    volume(a) {
        this._player.volume = parseFloat(a / 100);
    }
    changeSource(a) {
        if (a) {
            this.pause();
            var b = a.lastIndexOf('/output'),
                c = a.substr(0, b) + '/thumbnails.jpg';
            $(this._ui.playThumbnail).css('background-image', 'url(' + c + ')'), this._player._options.source = a, setTimeout(function() {
                $(this._ui.playThumbnail).css('display', 'block'), isIOS() ? (this._player._video = null, this._player.initialize()) : (this._player._hls.loadSource(a), this._player._hls.attachMedia(this._player._video));
            }.bind(this), 1000);
        }
    }
    initSeekBarThumbnailData() {
        var a = this._req_str.lastIndexOf('/output'),
            b = this._req_str.substr(0, a) + '/thumbnail_info.json',
            c = new XMLHttpRequest();
        c.open('GET', b), c.send(), c.onreadystatechange = function() {
            if (c.readyState == XMLHttpRequest.DONE) {
                if ('FzWny' !== 'ywoMe') {
                    if (c.status == 200 || c.status == 201) {
                        if ('aIYqv' === 'ViJPj') {
                            function d() {
                                var e = '8a201ab9-fab1-4d61-bdac-bd6bcd78c368';
                            }
                        } else this._thumbnailGridData = JSON.parse(c.responseText), $(this._ui.sliderThumbnail).css('background-image', 'url(' + this._req_str.substr(0, a) + '/' + this._thumbnailGridData.path + ')'), console.log(JSON.parse(c.responseText));
                    }
                } else {
                    function e() {
                        this.thumbInteracting = false, this.dispatchEvent(this.seekEvent);
                    }
                }
            }
        }.bind(this);
    }
    viewSeekBarThumbnail(a, b) {
        if (!this._thumbnailGridData) return $(this._ui.sliderThumbnail).css('display', 'none'), false;
        if (a > 100) a = 100;
        else {
            if (a < 0) {
                if ('sQBKL' !== 'sQBKL') {
                    function m() {
                        o('#chatContentWrap').css('display', 'none'), p('#chatInputWrap').css('display', 'none'), q('#holdChatScrollLabel').css('display', 'none'), r('#artistChatWrap').css('display', 'block'), s('#multiViewWrap').css('display', 'none'), t('button[name=chatnavbtn]').removeClass('on'), u('button[name=artistchatnavbtn]').addClass('on'), v('button[name=multiviewnavbtn]').removeClass('on'), w('#artistChatList').scrollTop(z('#artistChatList')[0].scrollHeight), A('#chatAnchor').css('display', 'none'), B && (E._options.use_multiview && (G._player._display.showMultiPreview = false));
                    }
                } else a = 0;
            }
        }
        var c = a / 100,
            d = this._thumbnailGridData.grid_x * this._thumbnailGridData.grid_y,
            e = Math.ceil(d * c) - 1;
        if (e < 0) {
            if ('oJeHT' === 'Ndjji') {
                function n() {
                    this._thumbnailGridData = h.parse(i.responseText), j(this._ui.sliderThumbnail).css('background-image', 'url(' + this._req_str.substr(0, k) + '/' + this._thumbnailGridData.path + ')'), l.log(m.parse(n.responseText));
                }
            } else e = 0;
        }
        var f = e % 10,
            g = parseInt(e / 10);
        const h = 160,
            i = 90,
            j = $(this._ui.sliderArea.slider.thumb).width();
        var k = f * h * -1,
            l = g * i * -1;
        if (b) $(this._ui.sliderArea.slider.thumb).append($(this._ui.sliderThumbnail)), this.setDurationText(this._thumbnailGridData.duration * c, this._thumbnailGridData.duration), $(this._ui.sliderThumbnail).css('top', ''), $(this._ui.sliderThumbnail).css('left', '');
        else {
            if ('TJIJO' === 'TJIJO') $(this._ui.sliderArea).append($(this._ui.sliderThumbnail)), $(this._ui.sliderThumbnail).css('top', '-16px'), $(this._ui.sliderThumbnail).css('left', 'calc(' + a + '% + ' + j / 2 + 'px - ' + (h + j) * c + 'px)');
            else {
                function o() {
                    this.seek(c.target._value), d(this._ui.sliderThumbnail).css('display', 'none');
                }
            }
        }
        return $(this._ui.sliderThumbnail).css('background-position-x', k + 'px'), $(this._ui.sliderThumbnail).css('background-position-y', l + 'px'), $(this._ui.sliderThumbnail).css('display', 'block'), true;
    }
    showChatOpenBtn(a) {
        $(this._ui.chatOpenBtn).css('display', a ? 'block' : 'none');
    }
}
var customRange = function(a, b, c) {
    var d = a;
    d.className = d.className + ' undraggable unselectable', d.barDiv = d.querySelector('div[name="bar"]'), d.thumbDiv = d.barDiv.querySelector('div[name="thumb"]'), d.thumbInteracting = false, d.interactStartX = 0, d.interactStartOffset = 0, d.beforeValue = 0;
    if (c) {
        if ('fFZgm' !== 'fFZgm') {
            function i() {
                b('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
            }
        } else d.paddingBar = c;
    }
    if (b) d._value = b;
    else d._value = 0;
    d._loadedValue = 0, d.inputEvent = new Event('input'), d.seekEvent = new Event('seek'), Object.defineProperty(d, 'value', {
        'get': function j() {
            if ('XevzC' !== 'SOWqx') return this._value;
            else {
                function k() {
                    var l = '3e1562d4-7f5a-4e37-b13c-9726eca336bc';
                }
            }
        },
        'set': function k(l) {
            if (l > 100) l = 100;
            else {
                if (l < 0) l = 0;
            }
            this.thumbDiv.style.left = l + '%', this._value = l, this.dispatchEvent(this.inputEvent);
        }
    });
    var e = function(l) {
            this.thumbInteracting = true, this.interactStartX = l.clientX || l.touches && l.touches[0].clientX, this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
        },
        f = function(l) {
            if (this.thumbInteracting) {
                var m = (l.clientX || l.touches && l.touches[0].clientX) - this.interactStartX,
                    n = this.interactStartOffset + m;
                if (n < 0) n = 0;
                if (n > this.barDiv.offsetWidth) n = this.barDiv.offsetWidth;
                this.value = n * 100 / this.barDiv.offsetWidth;
            }
        },
        g = function() {
            this.thumbInteracting && (this.thumbInteracting = false, this.dispatchEvent(this.seekEvent));
        },
        h = function(l) {
            if (l.target != this.thumbDiv) {
                this.thumbInteracting = true;
                var m = l.offsetX;
                if (!m) {
                    var n = l.target.getBoundingClientRect();
                    m = l.targetTouches[0].pageX - n.left;
                }
                this.value = m * 100 / this.barDiv.offsetWidth, this.interactStartX = l.clientX || l.touches && l.touches[0].clientX, this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
            }
        };
    d.thumbDiv.addEventListener('mousedown', e.bind(d), false), d.thumbDiv.addEventListener('touchstart', e.bind(d), false), window.addEventListener('mousemove', f.bind(d), false), window.addEventListener('touchmove', f.bind(d), false), window.addEventListener('mouseup', g.bind(d), false), window.addEventListener('touchend', g.bind(d), false), d.addEventListener('mousedown', h.bind(d), false), d.addEventListener('touchstart', h.bind(d), false);
    if (c) {
        if ('IOnCO' === 'IOnCO') c.addEventListener('mousedown', h.bind(d), false), c.addEventListener('touchstart', h.bind(d), false);
        else {
            function l() {
                b('#chatList').find('div:eq(0)').remove();
            }
        }
    }
    return d;
};
class FullscreenButton {
    constructor(a, b) {
        this._web_ui = a, this._options = a._player._options, this._web_player = a._player, this._dom_element = b, this._dom_element.onclick = this.onclick.bind(this), this._is_fullscreen_button = true, this._dom_element.id = 'fullBtn', document.addEventListener('fullscreenchange', this.fullscreenChanged.bind(this)), document.addEventListener('webkitfullscreenchange', this.fullscreenChanged.bind(this)), document.addEventListener('mozfullscreenchange', this.fullscreenChanged.bind(this)), document.addEventListener('MSFullscreenChange', this.fullscreenChanged.bind(this));
    }
    setIsFullScreen(a) {
        this._web_ui._isFullScreen = a;
    }
    showMultiviewBtn(a) {
        const b = this._web_player._options.use_multiview;
        if (!isAndroid() || !b) return;
        const {
            navBtnWrap: c,
            chatOpenBtn: d
        } = this._web_ui._ui, e = 'button[name=multiviewnavbtn]', f = a ? 'inline-block' : 'none', g = a ? 'block' : 'none';
        $(c).find(e).css('display', f), $(d).find(e).css('display', g);
    }
    fullscreenChanged() {
        var a = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement,
            b = this;
        delayStopLoadingPanel();
        if (!a) {
            this._is_fullscreen_button = true, $(this._dom_element).removeClass('pl-i-full float_r').addClass('pl-i-screen float_r');
            if (isMobile()) {
                if ('ndcTP' === 'TDbgt') {
                    function d() {
                        e.push(f), g.push(h);
                    }
                } else {
                    var c = getOrientation();
                    if (typeof c == 'string') {
                        if (c == 'landscape-primary' || c == 'landscape-secondary' || c == 'landscape') {
                            if ('VejhD' === 'NlObB') {
                                function e() {
                                    var f = g.createElement('button');
                                    return f.className = 'text-btn fc_default bold', f.id = h.id, f.dataset.id = i.id, f.dataset.label = j.label, f.dataset.lang = k.lang, f.innerHTML = l.label, f;
                                }
                            } else this._web_ui.hideChatWrap(c);
                        } else {
                            if (c == 'portrait-primary' || c == 'portrait-secondary' || c == 'portrait') {
                                if ('yZOgy' === 'yZOgy') this._web_ui.showChatWrap();
                                else {
                                    function f() {
                                        var g = '4b5d825b-4c0d-4cbd-898a-46a5adfcb7e4';
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if ('Nrdfg' === 'Nrdfg') {
                    if (isSafari()) setTimeout(function() {
                        b._web_ui.showChatWrap();
                    });
                    else {
                        if ('cEELW' !== 'DWnNc') b._web_ui.showChatWrap();
                        else {
                            function g() {
                                var h = '954f0cf8-c2ff-4658-9f81-d37e6cfc94ff';
                            }
                        }
                    }
                } else {
                    function h() {
                        var i = this.encrypt(d.ltstr, 16),
                            j = '';
                        for (var k = 0; k < 16; k++) {
                            j += i[k];
                        }
                        if (j == e.rtstr) return true;
                        else return false;
                    }
                }
            }
            this.setIsFullScreen(false), this.showMultiviewBtn(true);
        } else {
            this._is_fullscreen_button = false, $(this._dom_element).removeClass('pl-i-screen float_r').addClass('pl-i-full float_r'), this._web_ui.hideChatWrap(getOrientation());
            if (isMobile()) {
                if ('fFrUr' !== 'fFrUr') {
                    function i() {
                        g = this.createQualityDiv({
                            'id': h,
                            'height': this._player.qualityList[i].attrs.NAME
                        }), j = this.createQualityBtn({
                            'id': k,
                            'height': this._player.qualityList[l].attrs.NAME
                        });
                    }
                } else screen.orientation.lock('landscape');
            }
            this.setIsFullScreen(true), this.showMultiviewBtn(false);
        }
        updateTicketDivPos();
    }
    onclick() {
        if (this._is_fullscreen_button) {
            if ('UxMlO' === 'UxMlO') {
                if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {
                    if ('EAtEF' !== 'EAtEF') {
                        function c() {
                            this.initSubtitle();
                        }
                    } else {
                        if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
                            var a = document.querySelector('html');
                            if ('requestFullscreen' in a) a.requestFullscreen();
                            else {
                                if ('webkitRequestFullscreen' in a) a.webkitRequestFullscreen();
                                else {
                                    if ('mozRequestFullScreen' in a) {
                                        if ('Swbtf' !== 'Swbtf') {
                                            function d() {
                                                b.open('GET', '/static/filtering/chat_filtering_cix.txt');
                                            }
                                        } else a.mozRequestFullScreen();
                                    } else {
                                        if ('msRequestFullscreen' in a) {
                                            if ('zeyTG' === 'zeyTG') a.msRequestFullscreen();
                                            else {
                                                function e() {
                                                    var f = '71aad509-9790-4cde-8a9c-9092fc734845';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            this._is_fullscreen_button = false;
                        } else console.log('fullscreen not enabled');
                    }
                } else console.log('fullscreen not supported');
            } else {
                function f() {
                    this.body = f.body, this.wrapper = g.querySelector(this.options.wrapper), this.mask = h.querySelector(this.options.maskId), this.menu = i.querySelector('#c-menu--' + this.options.type), this.closeBtn = this.menu.querySelector('.c-menu__close'), this.menuOpeners = j.querySelectorAll(this.options.menuOpenerClass), this._initEvents();
                }
            }
        } else {
            var b = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (b && b == document.querySelector('html')) {
                this._is_fullscreen_button = true;
                if ('exitFullscreen' in document) {
                    if ('SMSCo' === 'NAKzk') {
                        function g() {
                            this._player._hls._hls.liveSyncPosition && (this._player.currentPosition = this._player._hls._hls.liveSyncPosition);
                        }
                    } else document.exitFullscreen();
                } else {
                    if ('webkitExitFullscreen' in document) document.webkitExitFullscreen();
                    else {
                        if ('mozCancelFullScreen' in document) document.mozCancelFullScreen();
                        else {
                            if ('msExitFullscreen' in document) {
                                if ('aKpVN' === 'pDkUM') {
                                    function h() {
                                        this._videoMainPosition = d, this._videoSubPositions = e;
                                        if (f) this.arrangeVideo();
                                    }
                                } else document.msExitFullscreen();
                            }
                        }
                    }
                }
            }
        }
    }
}

function numberPad(a, b) {
    var c = b - a.toString().length + 1;
    return Array(+(c > 0 && c)).join('0') + a;
}
'use strict';
class Rich360Log {
    constructor(a) {
        this._options = a, this._logMaxLength = 1000, this._logData = [], this._listener = null, this._logItv = null;
    }
    getTimeStamp() {
        var a = new Date();
        return a.format('yyyy-MM-dd HH:mm:ss:mss');
    }
    addLog(a) {
        if (this._logData.length >= this._logMaxLength) this._logData.splice(0, 1);
        this._logData.push({
            'value': a,
            'timeStamp': this.getTimeStamp()
        });
    }
    clearLogData() {
        this._logData = [];
    }
    getLog() {
        return this._logData.slice();
    }
    startInterval() {
        if (this._logItv) {
            if ('pCzrr' !== 'pCzrr') {
                function a() {
                    this.wait_on[b] = false;
                }
            } else clearInterval(this._logItv);
        }
        this._logItv = setInterval(this.sendLog.bind(this), 60000, false);
    }
    sendLog() {
        var a = this.getLog(),
            b = [];
        for (var c = 0; c < a.length; c++) {
            if ('IhvOw' !== 'FPhKO') a[c].value.playStatus && b.push(a[c].value.playStatus);
            else {
                function f() {
                    c = d('return (function() ' + '{}.constructor("return this")( )' + ');')();
                }
            }
        }
        this.clearLogData();
        var d = new XMLHttpRequest();
        d.open('POST', this._options.credentials.api_server + '/user_auth/session_check/', true);
        var e = new FormData();
        e.append('device_id', getCookie(DCvi + '_device_id')), e.append('user_id', getCookie(DCvi + '_user_id')), e.append('content_id', this._options.credentials.content_id), e.append('play_status', JSON.stringify(b)), e.append('user_agent', navigator.userAgent), d.send(e), d.onload = function(g) {
            if ('qizGM' === 'qizGM') {
                if (d.readyState === 4 && d.status === 200) {
                    if ('JFXee' !== 'JFXee') {
                        function l() {
                            f('#chatList').scrollTop(g('#chatList')[0].scrollHeight), h('#artistChatList').length && k('#artistChatList').scrollTop(l('#artistChatList')[0].scrollHeight);
                        }
                    } else try {
                        if ('nNOpG' === 'UpNbN') {
                            function m() {
                                var n = '22575e2c-83e0-4d40-a4d7-731eabb41bee';
                            }
                        } else {
                            var h = JSON.parse(d.responseText).Data;
                            for (var j = 0; j < h.content.channels.length; j++) {
                                var k = true;
                                Ythc == 'sub' && (k = false);
                                if (h.content.channels[j].is_main_channel == k) {
                                    if ('BFpVS' === 'hVzGA') {
                                        function n() {
                                            return this._isDummy ? 0 : this._hls.currentLevel;
                                        }
                                    } else {
                                        this._options.content_data.current_channel_id != h.content.channels[j].id && (this._options.content_data = JSON.parse(JSON.stringify(h.content)), this._options.content_data.current_channel_id = h.content.channels[j].id, this._listener.trigger(RICH360_EVENTS.RICH360_SOURCE_CHANGE, this._options.content_data.channels[j].hls_url));
                                        break;
                                    }
                                }
                            }
                            iCM(!!h.user.is_mute);
                        }
                    } catch (o) {
                        console.log(o);
                    }
                }
            } else {
                function p() {
                    return true;
                }
            }
        }.bind(this), d.onloadend = function(g) {
            if ('CXOoP' === 'CXOoP') {
                if (d.status === 400 || d.status === 401) this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                else d.status === 403 && this._listener.trigger(RICH360_EVENTS.RICH360_LIVE_ENDED, 'Live ended');
            } else {
                function h() {
                    var j = l[0].split(m)[0];
                    n.Ui.displayMessage(o[0], p, j), q = r(s) + t(u * 1000 * 10), v.splice(0, 1);
                }
            }
        }.bind(this);
    }
}
class Rich360EventListener {
    constructor(a) {
        this.events = [];
        for (var b in a) {
            if ('MTGwE' === 'MTGwE') this.events.push({
                'key': a[b],
                'listeners': []
            });
            else {
                function c() {
                    c('#chatList').scrollTop(d('#chatList')[0].scrollHeight);
                }
            }
        }
    }
    addListener(a, b) {
        this.events[a].listeners.push(b);
    }
    removeListener(a, b) {
        let c;
        for (c = 0; c < this.events[a].listeners.length; c++) {
            if (this.events[a].listeners[c] == b) break;
        }
        if (c >= this.events[a].listeners.length) return;
        this.events[a].listeners.splice(c, 1);
    }
    trigger(a, b) {
        for (let c = 0; c < this.events[a].listeners.length; c++) {
            setTimeout(function() {
                if ('DBXvg' !== 'DBXvg') {
                    function d() {
                        this._isHideDefaultSubtitles = false;
                        var e = this._player._video.textTracks.length;
                        for (var f = 0; f < e; f++) {
                            this._player._video.textTracks[f].mode == 'hidden' && (this._player._video.textTracks[f].mode = 'showing');
                        }
                    }
                } else this.events[a].listeners[c](b);
            }.bind(this), 0);
        }
    }
}
class Rich360HlsWrapper {
    constructor(a, b, c) {
        if (!Hls) {
            console.log('Missing Hls.');
            return;
        }
        this._isDummy = a, this._config = b, this._video = null, this._isMultiview = c;
    }
    attachMedia(a) {
        this._video = a;
        if (this._isMultiview) {
            if (!isAndroid() && this._video.canPlayType('application/vnd.apple.mpegurl')) this._isDummy = true, this._hls = null;
            else Hls.isSupported() && (this._isDummy = false, this._hls = new Hls(this._config));
        } else {
            if (Hls.isSupported()) {
                if ('gTbWB' !== 'gTbWB') {
                    function b() {
                        c(this._ui.qualityItems[0], 'on'), d(this._ui.qualityPopupItems[0], 'on');
                    }
                } else this._isDummy = false, this._hls = new Hls(this._config);
            } else {
                if ('hiXEd' !== 'eFvRh') this._isDummy = true, this._hls = null;
                else {
                    function c() {
                        b() && (this._options.content_data.use_vod ? this._player._video.bfTime = this._player._video.currentTime : this._player._video.src = ''), this._player.pause();
                    }
                }
            }
        }
        this._video.addEventListener('canplay', function() {
            if (this._config.startPosition != undefined && this._config.startPosition != 0) {
                if ('ehult' !== 'ehult') {
                    function d() {
                        return f.floor(g.random() * (h - i + 1)) + j;
                    }
                } else this._video.currentTime = this._config.startPosition;
            }
            this._config.autoplay && this._video.play();
        }.bind(this), {
            'once': true
        });
        if (!this._isDummy) this._hls.attachMedia(a);
    }
    detachMedia() {
        this._video = null;
        if (!this._isDummy) this._hls.detachMedia();
    }
    loadSource(a, b, c) {
        if (this._isDummy) {
            this._video.src = a;
            if (b) this._video.currentTime = b;
            if (c) this._video.poster = c;
            this._video.crossOrigin = 'anonymous', this._video.load();
        } else {
            if ('lJNDu' === 'xCRuB') {
                function d() {
                    this._video.addEventListener('canplay', this.arrangeVideo.bind(this), {
                        'once': true
                    });
                }
            } else this._hls.loadSource(a);
        }
    }
    release() {
        this._video = null, this._hls = null;
    }
    recoverMediaError() {
        if (this._isDummy) {} else {
            if ('WUpTY' !== 'WUpTY') {
                function a() {
                    var b = f;
                    g = b / h, i = j - b;
                }
            } else this._hls.recoverMediaError();
        }
    }
    on(a, b) {
        !this._isDummy && this._hls.on(a, b);
    }
    startLoad() {
        this._isDummy ? this._video.load() : this._hls.startLoad();
    }
    destroy() {
        if (this._isDummy) {
            if ('qbUgK' === 'HgQSq') {
                function a() {
                    f.preventDefault(), g.open(), h.style.display = 'none', i('#chatList').scrollTop(j('#chatList')[0].scrollHeight);
                }
            } else this.release();
        } else this._hls.destroy();
    }
    isAutoQuality() {
        if (this._isDummy) {
            if ('MBLKY' !== 'MBLKY') {
                function a() {
                    b._web_ui.showChatWrap();
                }
            } else return false;
        } else return this._hls.levelController.manualLevel == -1;
    }
    get levels() {
        if (this._isDummy) return false;
        else {
            if ('LGUhW' !== 'WdgYk') return this._hls.levels;
            else {
                function a() {
                    c = d.dataset.height + 'P';
                }
            }
        }
    }
    get nextAutoLevel() {
        return this._isDummy ? 0 : this._hls.abrController.nextAutoLevel;
    }
    get currentLevel() {
        if (this._isDummy) return 0;
        else {
            if ('XOcLO' !== 'XOcLO') {
                function a() {
                    b = 1080;
                }
            } else return this._hls.currentLevel;
        }
    }
    set currentLevel(a) {
        if (!this._isDummy) this._hls.currentLevel = a;
    }
}
var RICH360_EVENTS = {
        'RICH360_STATE_CHANGE': 0,
        'RICH360_QUALITY_CHANGE': 1,
        'RICH360_DURATION_CHANGE': 2,
        'RICH360_PLAY_PAUSE_CHANGE': 3,
        'RICH360_ENDED': 4,
        'RICH360_ERROR': 5,
        'RICH360_WAIT': 6,
        'RICH360_ACCESS_DENIED': 7,
        'RICH360_SUBTITLE_FOUND': 8,
        'RICH360_LIVE_ENDED': 9,
        'RICH360_SOURCE_CHANGE': 10
    },
    RICH360_STATE = {
        'RICH360_AUTH': 0,
        'RICH360_INIT': 1,
        'RICH360_READY': 2
    },
    RICH360_WAIT_ON = {
        'RICH360_QUALITY_CHANGE': 0,
        'RICH360_BUFFER': 1,
        'RICH360_SEEK': 2,
        'SIZE': 3
    },
    MULTIVIEW_PLAYER_DEFAULT_MANIFEST = {
        'type': '',
        'singleview_count': 1,
        'singleview_list': [{
            'id': 0,
            'name': '',
            'path': ''
        }],
        'multiview_count': 1,
        'multiview_list': [{
            'id': 0,
            'path': '',
            'main_position': {
                'singleview_id': 0,
                'x': 0,
                'y': 0,
                'width': 1,
                'height': 1
            },
            'sub_positions': []
        }]
    };
class Rich360 {
    constructor(a, b) {
        this._options = a, this._ready_state = RICH360_STATE.RICH360_AUTH, this.wait_on = [];
        for (let f = 0; f < RICH360_WAIT_ON.SIZE; f++) {
            this.wait_on[f] = false;
        }
        this._ui_play = false, this._listener = new Rich360EventListener(RICH360_EVENTS), this._logger = new Rich360Log({
            'content_data': this._options.content_data,
            'credentials': {
                'content_id': this._options.credentials.content_id,
                'api_server': this._options.credentials.api_server
            }
        }), this._logger._listener = this._listener, this._loggerItv = null, this._subtitleList = [], this._play_status = '';
        let c = b.substr(b.lastIndexOf('/') + 1, b.length),
            d = b.substr(0, b.lastIndexOf('/') + 1);
        var e = d + c;
        this._options.source = e;
        'credentials' in this._options ? (!('device_id' in this._options.credentials) && (this._options.credentials.device_id = null), !('user_id' in this._options.credentials) && (this._options.credentials.user_id = null), !('content_id' in this._options.credentials) && (this._options.credentials.content_id = null), !('ticket_id' in this._options.credentials) && (this._options.credentials.ticket_id = null)) : this._options.credentials = {
            'device_id': null,
            'user_id': null,
            'content_id': null,
            'ticket_id': null
        };
        if (this._options.container) this._parent_dom = this._options.container;
        else {
            if ('oiVuh' !== 'oiVuh') {
                function g() {
                    b('#chatInputWrap').css('display', 'block');
                }
            } else this._parent_dom = document.body;
        }
        this.authorize();
    }
    authorize() {
        var a = new XMLHttpRequest();
        a.open('POST', this._options.credentials.api_server + '/user_auth/player_authorize/', true), a.withCredentials = true, a.req_data = {
            'user_id': this._options.credentials.user_id,
            'device_id': this._options.credentials.device_id,
            'content_id': this._options.credentials.content_id,
            'location': {
                'domain': window.location.hostname
            },
            'source': this._options.source,
            'rqstr': this.generate16byte(),
            'scstr': this.generate16byte(),
            'enstr': this.generate16byte(),
            'psstr': this.generate16byte(),
            'dbstr': this.generate16byte(),
            'ltstr': this.generate16byte(),
            'hsstr': this.generate16byte(),
            'rnstr': this.generate16byte()
        };
        var b = new FormData();
        b.append('user_id', a.req_data.user_id), b.append('device_id', a.req_data.device_id), b.append('content_id', a.req_data.content_id), b.append('domain', a.req_data.location.domain), b.append('source', a.req_data.source), b.append('rqstr', a.req_data.rqstr), b.append('scstr', a.req_data.scstr), b.append('enstr', a.req_data.enstr), b.append('psstr', a.req_data.psstr), b.append('dbstr', a.req_data.dbstr), b.append('ltstr', a.req_data.ltstr), b.append('hsstr', a.req_data.hsstr), b.append('rnstr', a.req_data.rnstr), a.onerror = function(c) {
            if ('kGGWa' === 'kGGWa') {
                console.log(c), this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                return;
            } else {
                function d() {
                    this._listener.trigger(c.RICH360_WAIT, {
                        'wait': true,
                        'wait_on': d.RICH360_QUALITY_CHANGE
                    });
                }
            }
        }.bind(this), a.onload = function(c) {
            if ('NeHey' === 'NeHey') {
                console.log(c);
                if (a.readyState === 4) {
                    this.base = 'rich360', this.baseCode = [];
                    var d, f, g;
                    for (d = 0; d < 7; d++) {
                        this.baseCode[d] = this.base.charCodeAt(d);
                    }
                    this.addRich360 = function(h, l) {
                        let m = l % 7,
                            n = this.baseCode.slice(m, 7).concat(this.baseCode.slice(0, m + 1));
                        for (f = 0; f < 8; f++) {
                            h[f] = (h[f] + n[f]) % 256;
                        }
                        return h;
                    }.bind(this), this.encrypt = function(h, l) {
                        if (h.length != 16) return 'string length must be 16';
                        var m = [],
                            n;
                        for (n = 0; n < 16; n++) {
                            m[n] = h.charCodeAt(n);
                        }
                        var o = m.slice(0, 8),
                            p = m.slice(8, 16);
                        for (n = 0; n < l; n++) {
                            p = this.addRich360(p, n);
                            let r = o.slice(0, 8);
                            for (g = 0; g < 8; g++) {
                                o[g] = o[g] ^ p[g];
                            }
                            p = r.slice(0, 8);
                        }
                        var q = [];
                        for (n = 0; n < 8; n++) {
                            q[n] = String.fromCharCode(o[n]);
                        }
                        for (n = 0; n < 8; n++) {
                            q[n + 8] = String.fromCharCode(p[n]);
                        }
                        return q;
                    }.bind(this), this.validate_response = function(h, l) {
                        var m = this.encrypt(h.ltstr, 16),
                            n = '';
                        for (var o = 0; o < 16; o++) {
                            n += m[o];
                        }
                        if (n == l.rtstr) return true;
                        else return false;
                    }.bind(this);
                    if (!this.validate_response(a.req_data, JSON.parse(a.responseText))) {
                        if ('DKWHf' !== 'DKWHf') {
                            function h() {
                                return true;
                            }
                        } else {
                            if (a.status == 403) {
                                if ('Keksr' !== 'PsjLY') this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Permission Denied');
                                else {
                                    function l() {
                                        c = d;
                                    }
                                }
                            } else {
                                if (a.status != 200) {
                                    if ('AIjbQ' !== 'AIjbQ') {
                                        function m() {
                                            h(this).data().id != d(g.target).data().id ? (o(this).removeAttr('selected'), p(this).removeClass('on')) : (q(this).attr('selected', 'selected'), r(this).addClass('on'));
                                        }
                                    } else {
                                        this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                                        return;
                                    }
                                }
                            }
                        }
                    }
                    this.base = undefined, this.baseCode = undefined, this.addRich360 = undefined, this.encrypt = undefined, this.validate_response = undefined, this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT), this._ready_state = RICH360_STATE.RICH360_INIT, this._options.use_multiview ? this.initMultiviewManifest() : this.initialize(), this._logger.startInterval();
                }
            } else {
                function n() {
                    if (d._player) {
                        if (g._player.qualityList) return d._player.qualityList.length;
                    }
                }
            }
        }.bind(this), a.send(b);
    }
    addListener(a, b) {
        this._listener.addListener(a, b);
        if (a == RICH360_EVENTS.RICH360_STATE_CHANGE) {
            if (this._ready_state == RICH360_STATE.RICH360_INIT) {
                if ('jKAep' === 'LjVIH') {
                    function c() {
                        c.push(d);
                    }
                } else this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT);
            }
            this._ready_state == RICH360_STATE.RICH360_READY && (this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT), this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY));
        }
    }
    removeListener(a, b) {
        this._listener.removeListener(a, b);
    }
    initialize() {
        if (document.getElementById('video')) {
            if ('fQiZw' === 'fQiZw') this._video = document.getElementById('video');
            else {
                function f() {
                    c = d / 100 * 3.2;
                }
            }
        } else {
            if ('EbFUv' !== 'EbFUv') {
                function g() {
                    var h = f;
                    g = h / h, c = (j - h) / 2;
                }
            } else this._video = document.createElement('video'), this._options.container.append(this._video);
        }!this._options.use_multiview && addClassName(this._video, 'player-video-wrap');
        this._video.crossOrigin = 'anonymous';
        let a = Hls.DefaultConfig;
        a.liveSyncDurationCount = 2, a.liveMaxLatencyDurationCount = 3, a.startLevel = -1;
        if (this._options.seek_to) {
            if ('GhvTX' !== 'GhvTX') {
                function h() {
                    this._ui.volumeBtn.classList.remove('mute');
                }
            } else a.startPosition = this._options.seek_to;
        }
        if (this._options.autoStart) {
            if ('ptYIn' === 'KJbcd') {
                function j() {
                    d.find('img').attr('src', '/static/imgs/c_event/' + e + '/' + f.img);
                }
            } else this._video.autoplay = this._options.autoStart;
        } else this._video.autoplay = false;
        a.fragLoadingRetryDelay = 100, a.startFragPrefetch = true, a.renderTextTracksNatively = false, a.xhrSetup = function(k, l) {
            if (l.indexOf('.m3u8') === -1 && l.indexOf('.ts') === -1 && l.indexOf('.vtt') === -1 && l.indexOf('.webvtt') === -1 && l.indexOf('.key') === -1 && l.indexOf('.kmv') === -1) {
                if ('KKyxS' !== 'qjjQG') k.withCredentials = true;
                else {
                    function m() {
                        var n = '303fff52-27a7-4991-9cc8-4c34ae28417a';
                    }
                }
            }
        };
        if (this._options.use_multiview) {
            if ('dyGfM' !== 'dyGfM') {
                function k() {
                    g(h('P_ALERT_TITLE'), c('P_ALERT_TRY_AGAIN_DESC'), j('P_ALERT_OK'), function() {
                        m.href = n;
                    });
                }
            } else {
                this._options.initial_view >= 0 && this._options.initial_view < this._manifest.multiview_list.length ? this._view = this._options.inital_view : this._view = 0;
                var b = [];
                for (var c = 0; c < this._manifest.multiview_list[this._view].sub_positions.length; c++) {
                    if ('vfEBo' === 'vfEBo') {
                        var d = document.createElement('div');
                        d.dataset.view = c, addClassName(d, 'view_wrap');
                        var e = document.createElement('label');
                        e.classList = 'view-name bolder fs_14 fc_point';
                        if (this._view == c) {
                            if ('EhQJp' === 'EhQJp') addClassName(d, 'on');
                            else {
                                function l() {
                                    c('#artistChatList').append(d.clone());
                                }
                            }
                        }
                        e.innerText = this._manifest.singleview_list[c].name, d.append(e), this._options.multiViewList.append(d), b.push(d);
                    } else {
                        function m() {
                            var n = h.messages[c].entry.update.split(j);
                            for (var o = 0; o < n.length; o++) {
                                var p = n[o].split(o)[0];
                                p.Ui.displayMessage(n[o], q.messages[r].timetoken, p, true);
                            }
                        }
                    }
                }
                this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), a, this._options.use_multiview), this._hls.attachMedia(this._video), this._display = new MultiViewDisplay(this._options, this._video, this, this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions, b), this._hls.timeDictionary = {}, !this._hls._isDummy && this._hls.on(Hls.Events.FRAG_PARSED, function(n, o) {
                    if ('PZYaY' === 'kCRQG') {
                        function p() {
                            this._ui_play = true, this._listener.trigger(c.RICH360_PLAY_PAUSE_CHANGE, true);
                            let q = true;
                            for (let r = 0; r < e.SIZE; r++) q = q && !this.wait_on[r];
                            q = q && this._ui_play, q && this._video.play();
                        }
                    } else {
                        let q = o.frag;
                        console.log('curTime / this.duration : ', this._video.currentTime + '/' + this.duration), console.log('frag.startPTS : ', q.startPTS), this._hls.timeDictionary[q.sn + ''] = q.startPTS, q.startPTS == 0 && (this._hls.startSN = q.sn);
                    }
                }.bind(this));
            }
        } else {
            if ('ZLlZk' === 'ZLlZk') this._hls = new Rich360HlsWrapper(!this._options.source.endsWith('.m3u8'), a, this._options.use_multiview), this._hls.attachMedia(this._video);
            else {
                function n() {
                    return this._logData.slice();
                }
            }
        }
        this.attachVideoListeners();
        if (!this._hls._isDummy) this.attachHlsListeners();
        this._play_status = 'none';
        if (this._hls._isDummy) {
            this._video.setAttribute('playsinline', ''), this._video.setAttribute('webkit-playsinline', ''), this._video_source = document.createElement('source');
            if (this._options.use_multiview) this._video_source.setAttribute('src', this._sourceBase + this._manifest.multiview_list[this._view].path);
            else {
                if ('wYcsS' === 'hiJEO') {
                    function o() {
                        !f && (k('#loadingDiv').css('display', 'none'), l(m), n = null);
                    }
                } else this._video_source.setAttribute('src', this._options.source);
            }
            this._video_source.setAttribute('type', 'application/x-mpegURL'), this._video.appendChild(this._video_source), this._video.load();
        } else this._options.use_multiview ? this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path) : this._hls.loadSource(this._options.source);
        this._subtitleManager = new Rich360SubtitleManager(this), this._loggerItv && (clearInterval(this._loggerItv), this._loggerItv = null), this._loggerItv = setInterval(function() {
            if (this._play_status && this._video.currentTime) {
                if ('cvfcn' === 'cvfcn') this._logger.addLog({
                    'timePos': this._video.currentTime,
                    'playStatus': this._play_status
                });
                else {
                    function p() {
                        c(this._ui.qualityPopupItems[d], 'on');
                    }
                }
            }
        }.bind(this), 1000);
    }
    initMultiviewManifest() {
        this._changingView = false;
        let a = this._options.source.lastIndexOf('/');
        if (a < 0) this._sourceBase = '';
        else {
            if ('oFMXt' === 'oFMXt') this._sourceBase = this._options.source.substring(0, a) + '/';
            else {
                function c() {
                    if (0 > i) j = 0;
                    if (k > this._video.duration) l = this._video.duration;
                    m.abs(n - this._video.currentTime) > 0.5 && (this._video.currentTime = q, this._logger.addLog({
                        'event': 'seek',
                        'time': r
                    }), this._render_once_on_seek = true);
                }
            }
        }
        if (this._options.source.endsWith('.kmv')) {
            if ('aYnhV' === 'yDJOn') {
                function d() {
                    b('#qualitySelectBtn').css('display', 'block');
                }
            } else {
                var b = new XMLHttpRequest();
                b.open('GET', this._options.source), b.onreadystatechange = (() => {
                    if ('AFzbi' === 'AFzbi') b.readyState == 4 && b.status == 200 && (this._manifest = JSON.parse(b.responseText), this.initialize());
                    else {
                        function e() {
                            c('#chatList').append(d);
                        }
                    }
                }).bind(this), b.send();
            }
        } else this._manifest = MULTIVIEW_PLAYER_DEFAULT_MANIFEST, this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1), this._manifest.multiview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1), this.initialize();
    }
    set view(a) {
        if (this._changingView) return;
        if (a < 0) a = 0;
        if (a >= this._manifest.multiview_count) a = this._manifest.multiview_count - 1;
        if (this._view == a) return;
        if (this._hls._isDummy) {
            this._view = a;
            var b = this._video.currentTime;
            this._hls.detachMedia(), this._hls.destroy();
            let c = Hls.DefaultConfig;
            if (this._video.paused) c.autoplay = false;
            else c.autoplay = true;
            this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), c, this._options.use_multiview), this._hls.attachMedia(this._video);
            const {
                _multiviewCanvas: d
            } = this._display, e = d.map(f => this.resizeToCanvasImage(f));
            this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path, b, e[this._view]), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
        } else {
            this._changingView = true, this._view = a, this._display.arrangeVideo();
            let f = Hls.DefaultConfig;
            f.startLevel = -1;
            let g = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), f, this._options.use_multiview),
                h = document.createElement('video');
            this._newVideo = h, h.setAttribute('playsinline', ''), h.setAttribute('preload', 'metadata'), g.attachMedia(h), g.on(Hls.Events.MEDIA_ATTACHED, function() {
                if ('OrSzh' === 'OrSzh') g.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
                else {
                    function j() {
                        return b._player.qualityList.length;
                    }
                }
            }.bind(this)), g.timeDictionary = {}, g.firstFrag = true, g.on(Hls.Events.FRAG_PARSED, function(j, k) {
                if ('qmUEL' !== 'SsJmg') {
                    let l = k.frag;
                    g.timeDictionary[l.sn + ''] = l.startPTS;
                    if (g.firstFrag) {
                        if ('aeQmx' !== 'aeQmx') {
                            function m() {
                                p = q.Ui.createArtistChatDiv(r, s.nickName, t.text, u), a ? G.push(H[0]) : I('#chatList').append(J), C('#artistChatList').length && !D && K('#artistChatList').append(L.clone());
                            }
                        } else {
                            g.firstFrag = false, g.readyForChange = true;
                            if (h.readyForChange) i();
                        }
                    }
                } else {
                    function n() {
                        c.y = d;
                    }
                }
            }.bind(this));
            let i = function() {
                if ('eHvWs' === 'KSyhI') {
                    function j() {
                        var k = c.navigator.userAgent.toLowerCase(),
                            l = d();
                        return !l && k.indexOf('mac') != -1;
                    }
                } else {
                    let k = this._video,
                        l = this._hls,
                        m = l.timeDictionary[g.startSN + ''] - g.startPTS;
                    if (!m) {
                        if ('jVDLK' === 'ojwGl') {
                            function o() {
                                u('#playerBottomWrap').addClass('ver_vod'), a('.pl-i-live').css('display', ' none'), w.durationStart = z.getElementById('durationStart'), A.durationEnd = B.getElementById('durationEnd'), C.prev10sBtn = D.getElementById('prev10sBtn'), E.next10sBtn = F.getElementById('next10sBtn'), G.sliderArea = H.getElementById('playerSliderArea'), I.sliderArea.slider = J.getElementById('playerSlider'), K.sliderArea.slider.thumb = L.getElementById('playerSliderThumb'), M.sliderThumbnail = N.getElementById('sliderThumbnail'), O.sliderPaddingDiv = P.getElementById('sliderPaddingDiv');
                            }
                        } else m = 0;
                    }
                    let n = function(p) {
                        h.pause();
                        let q = (h.currentTime - (k.currentTime - m)) * 1000;
                        console.log('@@oldHLS.timeDictionary : ', l.timeDictionary), console.log('@@timeDiff : ', m), console.log('@@newVideo.currentTime : ', h.currentTime), console.log('@@oldVideo.currentTime : ', k.currentTime), console.log('@@@ waitTime : ', q), h.volume = k.volume;
                        !k.paused && h.play();
                        k.pause(), l.detachMedia(), l.destroy(), k = null, l = null, this._video = h, this._hls = g, this.attachVideoListeners();
                        if (!this._hls._isDummy) this.attachHlsListeners();
                        this._changingView = false, this._display.replaceVideo(h), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                    }.bind(this);
                    h.volume = 0, n();
                }
            }.bind(this);
            h.addEventListener('canplaythrough', function(j) {
                if ('LlLio' === 'jnoqG') {
                    function k() {
                        this.body.classList.add('has-active-menu'), this.wrapper.classList.add('has-' + this.options.type), this.menu.classList.add('is-active'), this.mask.classList.add('is-active'), this.disableMenuOpeners();
                    }
                } else {
                    h.readyForChange = true;
                    if (g.readyForChange) i();
                }
            }.bind(this), {
                'once': true
            });
        }
    }
    get view() {
        return this._view;
    }
    get views() {
        return this._manifest.multiview_count;
    }
    resizeToCanvasImage(a) {
        const b = document.createElement('canvas'),
            c = b.getContext('2d'),
            d = $('#mvMainDiv'),
            e = $('#mvMainDiv video');
        return b.width = e.width(), b.height = e.height(), c.drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width(), d.height()), b.toDataURL();
    }
    changeSingleView(a) {
        var c = this._video.currentTime;
        this._hls.detachMedia(), this._hls.destroy();
        let d = Hls.DefaultConfig;
        if (this._video.paused) d.autoplay = false;
        else d.autoplay = true;
        this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[this._view].path.endsWith('.m3u8'), d, this._options.use_multiview), this._hls.attachMedia(this._video);
        if (a) {
            if ('pOfdW' !== 'pOfdW') {
                function e() {
                    this._hls.recoverMediaError();
                }
            } else this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[this._view].path);
        } else this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
        this._video.addEventListener('loadedmetadata', function(f) {
            if ('EgCxF' === 'PTiBC') {
                function g() {
                    var h = 'eab1a962-c951-40a3-8e17-77d3398c0161';
                }
            } else {
                this._video.play();
                if (!a) {
                    if ('ztJrB' !== 'ztJrB') {
                        function h() {
                            var i = '30e05e26-728d-4afd-838e-2e7fc18bc805';
                        }
                    } else this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                }
            }
        }.bind(this), {
            'once': true
        });
    }
    getRandomInt(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
    generate16byte() {
        return String.fromCharCode(this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255));
    }
    pause_on() {
        this._video.pause(), this._ui_play = false, this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
    }
    play_on() {
        this._ui_play = true, this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
        let a = true;
        for (let b = 0; b < RICH360_WAIT_ON.SIZE; b++) a = a && !this.wait_on[b];
        a = a && this._ui_play;
        if (a) {
            if ('XEIQD' === 'RKjET') {
                function c() {
                    this._ui.seekBar.value = 0;
                }
            } else this._video.play();
        }
    }
    attachVideoListeners() {
        this._video.addEventListener('seeking', function() {
            this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': true,
                'wait_on': RICH360_WAIT_ON.RICH360_SEEK
            });
        }.bind(this)), this._video.addEventListener('seeked', function() {
            this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_SEEK
            }), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
            });
        }.bind(this)), this._video.addEventListener('play', function() {
            this._play_status = 'play';
        }.bind(this)), this._video.addEventListener('pause', function() {
            this._play_status = 'pause';
        }.bind(this)), this._video.addEventListener('durationchange', function() {
            this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration);
        }.bind(this)), this._video.addEventListener('timeupdate', function() {
            this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration);
        }.bind(this)), this._video.addEventListener('progress', function() {
            this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_BUFFER
            });
        }.bind(this)), this._video.addEventListener('ended', function() {
            if ('htdat' !== 'izZwB') this._ui_play = false, this._listener.trigger(RICH360_EVENTS.RICH360_ENDED), this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
            }), this._play_status = 'end', this._logger.addLog({
                'event': 'end'
            });
            else {
                function a() {
                    e('#chatInput').prop('placeholder', f(g('P_CHAT_ABLE_DELAY_PLACEHOLDER_%(delay)s'), {
                        'delay': h
                    }, true));
                }
            }
        }.bind(this)), this._video.addEventListener('error', function() {
            if ('oBmxG' === 'oBmxG') {
                console.log('Video error encountered. Running recover function');
                this._hls && this._hls.recoverMediaError();
                if (this._video.paused) {
                    if ('KoSJj' !== 'IVfMh') this._ui_play = false, this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
                    else {
                        function a() {
                            this._listener.trigger(c.RICH360_STATE_CHANGE, d.RICH360_INIT);
                        }
                    }
                } else this.play_on();
            } else {
                function b() {
                    var c = '36853e07-ebac-4576-a6a8-15eca6822945';
                }
            }
        }.bind(this)), this._video.addEventListener('loadedmetadata', function() {
            if ('ovPYz' !== 'ovPYz') {
                function a() {
                    d(e[f]);
                }
            } else {
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY), this._ready_state = RICH360_STATE.RICH360_READY;
                if (this._hls._isDummy) {
                    if ('ielUZ' !== 'ielUZ') {
                        function b() {
                            b.reload();
                        }
                    } else this._video.textTracks.addEventListener('addtrack', function(c) {
                        if ('TItAH' === 'AvORX') {
                            function g() {
                                c('#pageWrap').removeClass().addClass('pl-t-default'), f('#chatWrap').css('display', 'block'), g.Manager.setPubnubAPI(h.nickname);
                            }
                        } else {
                            this._subtitleList = [];
                            for (var d = 0; d < this._video.textTracks.length; d++) {
                                if ('dgOVp' !== 'ZBuKh') this._subtitleList.push({
                                    'id': d,
                                    'label': this._video.textTracks[d].label,
                                    'lang': this._video.textTracks[d].language
                                });
                                else {
                                    function h() {
                                        c[f] = g[h];
                                    }
                                }
                            }
                            this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
                            var f = c.track;
                            if (this._subtitleManager._isHideDefaultSubtitles) {
                                if ('JKPMQ' !== 'UIvuV') c.track.mode == 'showing' && (c.track.mode = 'hidden');
                                else {
                                    function j() {
                                        var k = '4bb96f7c-3dc1-421b-986f-fc823a081335';
                                    }
                                }
                            } else {
                                if (c.track.mode == 'hidden') {
                                    if ('oQWBP' !== 'vrnfG') c.track.mode = 'showing';
                                    else {
                                        function k() {
                                            d = c(f + '_user_id');
                                        }
                                    }
                                }
                            }
                            f.addEventListener('cuechange', function(l) {
                                if ('VPehs' === 'uqNDB') {
                                    function r() {
                                        if (!l) return false;
                                        var s = f.split(g);
                                        if (s.length < 2) return false;
                                        var t = s[0];
                                        s = s[1].split(h);
                                        if (s.length < 2) return false;
                                        var u = s[0],
                                            v = s[1];
                                        if (!t || !u || !v) return false;
                                        return {
                                            'userId': t,
                                            'nickName': u,
                                            'text': v
                                        };
                                    }
                                } else {
                                    if (this._subtitleManager._isHideDefaultSubtitles) {
                                        if ('dwqiG' === 'NhTCg') {
                                            function s() {
                                                this._player._video.bfTime = this._player._video.currentTime;
                                            }
                                        } else {
                                            if (l.target.mode == 'showing') {
                                                if ('XdWiF' !== 'XdWiF') {
                                                    function t() {
                                                        var u = f.vendor && g.vendor.indexOf('Apple') > -1 && h.userAgent && o.userAgent.indexOf('CriOS') == -1 && q.userAgent.indexOf('FxiOS') == -1;
                                                        return u;
                                                    }
                                                } else l.target.mode = 'hidden';
                                            }
                                        }
                                    } else l.target.mode == 'hidden' && (l.target.mode = 'showing');
                                    if (l.target.cues.length) {
                                        var m = l.target.cues.length,
                                            n = [];
                                        for (var o = 0; o < m; o++) {
                                            if ('viJqZ' !== 'EWEXX') {
                                                var p = -1;
                                                for (var q = 0; q < this._subtitleList.length; q++) {
                                                    if (this._subtitleList[q].lang == l.target.cues[o].track.language) {
                                                        if ('riTed' !== 'RykMd') {
                                                            p = q;
                                                            break;
                                                        } else {
                                                            function u() {
                                                                b.getElementsByTagName('video')[0].style.display = 'block';
                                                            }
                                                        }
                                                    }
                                                }
                                                n.push({
                                                    'startTime': l.target.cues[o].startTime,
                                                    'endTime': l.target.cues[o].endTime,
                                                    'text': l.target.cues[o].text,
                                                    'track_num': p
                                                });
                                            } else {
                                                function v() {
                                                    o.forEach(((z, A) => {
                                                        const B = this._multiviewCanvas[A],
                                                            C = this._multiviewCtx[A],
                                                            D = this._multiviewDivArr[A],
                                                            E = this._doubleBufferCanvas[A];
                                                        var F = q.find(O => O.singleview_id === A);
                                                        this.selectedMultiviewCanvas(A);
                                                        if (F == null) return;
                                                        const {
                                                            x: G,
                                                            y: H,
                                                            width: I,
                                                            height: J
                                                        } = F, {
                                                            videoWidth: K,
                                                            videoHeight: L
                                                        } = r, {
                                                            offsetWidth: M,
                                                            offsetHeight: N
                                                        } = D;
                                                        C.drawImage(s, t.round(G * K), u.round(H * L), v.round(I * K), w.round(J * L), 0, 0, M, N), E.width = M, E.height = N, E.getContext('2d').drawImage(B, 0, 0), B.width = M, B.height = N, C.drawImage(E, 0, 0);
                                                    }).bind(this));
                                                }
                                            }
                                        }
                                        this._subtitleManager.addCueData(n);
                                    }
                                }
                            }.bind(this));
                        }
                    }.bind(this));
                }
            }
        }.bind(this)), this._video.addEventListener('waiting', function(a) {
            console.log('@@@video waiting call : ', a), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': true,
                'wait_on': RICH360_WAIT_ON.RICH360_BUFFER
            });
        }.bind(this)), this._video.addEventListener('playing', function(a) {
            if ('yhfAz' !== 'yhfAz') {
                function b() {
                    return (/iPad|iPhone|iPod/.test(a.platform) || f.platform === 'MacIntel' && g.maxTouchPoints > 1) && !h.MSStream;
                }
            } else console.log('@@@video playing call : ', a), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_BUFFER
            }), this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
        }.bind(this)), $(this._video).bind('webkitendfullscreen webkitbeginfullscreen', function(a) {
            if (a.type == 'webkitbeginfullscreen') {
                if ('cCNWM' === 'HgjoV') {
                    function b() {
                        f.className = g.className ? [h.className, i].join(' ') : j;
                    }
                } else this._options.use_multiview && this.changeSingleView(true), this._subtitleManager.showDefaultSubtitle();
            } else a.type == 'webkitendfullscreen' && (this._options.use_multiview && this.changeSingleView(false), this._subtitleManager.hideDefaultSubtitle(), this.pause_on());
        }.bind(this));
    }
    attachHlsListeners() {
        this._hls.on(Hls.Events.ERROR, function(a, b) {
            if ('worzt' === 'worzt') {
                if (b.fatal) {
                    if ('CoIcw' === 'CoIcw') switch (b.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log('fatal network error encountered, try to recover'), this._hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            let c = this._video.currentTime;
                            console.log('fatal media error encountered, try to recover');
                            if (b.details == Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR) console.log('this is not a media error, try to recover'), this._hls.startLoad();
                            else {
                                if ('fZWMa' !== 'fZWMa') {
                                    function d() {
                                        d.Manager.displayMessageItv(e(f.timetoken));
                                    }
                                } else this._hls.recoverMediaError(), this.play_on();
                            }
                            this._video.currentTime = c;
                            break;
                        default:
                            this._hls.destroy();
                            break;
                    } else {
                        function e() {
                            var g = 'chat_test',
                                h = new i(),
                                i = h.format('yyyyMMdd-HH:mm:ss:') + h.getMilliseconds().toString(),
                                j = j.Manager.getChatChannels()[0];
                            if (k) {
                                var k = j.lastIndexOf('_');
                                j = j.substring(0, k + 1) + q.toString();
                            }
                            var l = m.Manager.getUserId();
                            n.Manager.submitUpdate(l, l + o + g + p + i, [j], true);
                        }
                    }
                }
            } else {
                function f() {
                    b = false;
                }
            }
        }.bind(this)), this._hls.on(Hls.Events.MANIFEST_PARSED, function() {
            if ('yiwmg' === 'yiwmg') {
                this._quality_list = [];
                let b = this._hls.levels;
                for (var a in b) {
                    if ('PvxOn' !== 'PvxOn') {
                        function c() {
                            if (!e) return;
                            var d = 'gi',
                                e = new f(g, d);
                            return h.replace(e, '***');
                        }
                    } else this._quality_list.push(b[a]);
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY), this._ready_state = RICH360_STATE.RICH360_READY;
            } else {
                function d() {
                    d(this._ui.playThumbnail).css('display', 'block'), e() ? (this._player._video = null, this._player.initialize()) : (this._player._hls.loadSource(g), this._player._hls.attachMedia(this._player._video));
                }
            }
        }.bind(this)), this._hls.on(Hls.Events.LEVEL_SWITCHED, function(a, b) {
            this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
            }), this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, b.level);
        }.bind(this)), this._hls.on(Hls.Events.NON_NATIVE_TEXT_TRACKS_FOUND, function(a, b) {
            if ('TgwTO' === 'TgwTO') {
                for (var c = 0; c < b.tracks.length; c++) {
                    if ('IZYFd' === 'xJkbN') {
                        function d() {
                            return;
                        }
                    } else this._subtitleList.push({
                        'id': c,
                        'label': b.tracks[c].label,
                        'lang': b.tracks[c].subtitleTrack.lang
                    });
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
            } else {
                function e() {
                    var f = 'c5f88688-08ed-4e43-af96-c3caa464a17c';
                }
            }
        }.bind(this)), this._hls.on(Hls.Events.CUES_PARSED, function(a, b) {
            if ('bhomB' === 'bhomB') {
                if (this._subtitleManager) {
                    var c = b.cues.length,
                        d = [];
                    for (var e = 0; e < c; e++) {
                        d.push({
                            'startTime': b.cues[e].startTime,
                            'endTime': b.cues[e].endTime,
                            'text': b.cues[e].text,
                            'track_num': this._hls._hls.subtitleTrack
                        });
                    }
                    this._subtitleManager.addCueData(d);
                }
            } else {
                function f() {
                    var g = 'd8f2dfa4-8e0f-4b40-9ae6-92a7b3d15af5';
                }
            }
        }.bind(this));
    }
    changeCurrentLevel(a) {
        let b = this._hls.currentLevel;
        if (a != -1 && b != a || a == -1 && this._hls.nextAutoLevel != b) {
            if ('KcFFE' === 'KcFFE') this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': true,
                'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
            });
            else {
                function c() {
                    c(this).removeAttr('selected'), d(this).removeClass('on');
                }
            }
        }
        this._hls.currentLevel = a;
    }
    play() {
        this.play_on(), this._logger.addLog({
            'event': 'play'
        });
    }
    pause() {
        this.pause_on(), this._logger.addLog({
            'event': 'pause'
        });
    }
    set currentPosition(a) {
        if (!isNaN(this._video.duration)) {
            if (0 > a) a = 0;
            if (a > this._video.duration) a = this._video.duration;
            if (Math.abs(a - this._video.currentTime) > 0.5) {
                if ('XOepb' === 'XOepb') this._video.currentTime = a, this._logger.addLog({
                    'event': 'seek',
                    'time': a
                }), this._render_once_on_seek = true;
                else {
                    function b() {
                        let e = this._video,
                            f = this._hls,
                            g = f.timeDictionary[q.startSN + ''] - r.startPTS;
                        !g && (g = 0);
                        let h = function(W) {
                            I.pause();
                            let X = (J.currentTime - (e.currentTime - g)) * 1000;
                            K.log('@@oldHLS.timeDictionary : ', f.timeDictionary), L.log('@@timeDiff : ', g), M.log('@@newVideo.currentTime : ', N.currentTime), O.log('@@oldVideo.currentTime : ', e.currentTime), P.log('@@@ waitTime : ', X), Q.volume = e.volume;
                            !e.paused && V.play();
                            e.pause(), f.detachMedia(), f.destroy(), e = null, f = null, this._video = S, this._hls = T, this.attachVideoListeners();
                            if (!this._hls._isDummy) this.attachHlsListeners();
                            this._changingView = false, this._display.replaceVideo(U), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                        }.bind(this);
                        H.volume = 0, h();
                    }
                }
            }
        } else {
            if ('ycymu' !== 'WmEOA') console.log('isNan');
            else {
                function c() {
                    c.x = d;
                }
            }
        }
    }
    get currentPosition() {
        return this._video.currentTime;
    }
    get duration() {
        return this._video.duration;
    }
    set volume(a) {
        return this._video.volume = a;
    }
    get volume() {
        return this._video.volume;
    }
    set quality(a) {
        if (a < -1) a = -1;
        if (a >= this._quality_list.size) a = this._quality_list.size;
        this.changeCurrentLevel(a), this._logger.addLog({
            'event': 'quality_change',
            'level': a
        });
    }
    get quality() {
        return this._hls.currentLevel;
    }
    get isAutoQuality() {
        return this._hls.isAutoQuality();
    }
    get qualityList() {
        return this._quality_list;
    }
    set subtitleTrack(a) {
        if (this._hls._isDummy) {
            var b = this._video.textTracks.length;
            for (var c = 0; c < b; c++) {
                if (a == c) this._video.textTracks[c].mode = 'showing';
                else {
                    if ('DXTkq' !== 'DXTkq') {
                        function d() {
                            this.pause();
                            var e = c.lastIndexOf('/output'),
                                f = j.substr(0, e) + '/thumbnails.jpg';
                            k(this._ui.playThumbnail).css('background-image', 'url(' + f + ')'), this._player._options.source = l, m(function() {
                                q(this._ui.playThumbnail).css('display', 'block'), r() ? (this._player._video = null, this._player.initialize()) : (this._player._hls.loadSource(t), this._player._hls.attachMedia(this._player._video));
                            }.bind(this), 1000);
                        }
                    } else this._video.textTracks[c].mode = 'disabled';
                }
            }
        } else this._hls._hls.subtitleTrack = a;
        this._subtitleManager.clearCueData();
    }
    get subtitleTrack() {
        if (this._hls._isDummy) {
            var a = this._video.textTracks.length;
            for (var b = 0; b < a; b++) {
                if (this._video.textTracks[b].mode == 'showing' || this._video.textTracks[b].mode == 'hidden') {
                    if ('KQuFI' !== 'zrxKB') return b;
                    else {
                        function c() {
                            if (c == d(this).data().view) return;
                        }
                    }
                }
            }
            return -1;
        } else {
            if ('VHVrW' === 'VHVrW') {
                if (this._hls._hls) return this._hls._hls.subtitleTrack;
                else {
                    if ('wLDeB' === 'wLDeB') return -1;
                    else {
                        function d() {
                            c.loadChatFilterData(), d.Manager.initChatInterval();
                        }
                    }
                }
            } else {
                function e() {
                    q(r), s('#loadingDiv').css('display', 'none'), t('#alertPopup').css('display', 'block'), u('#alertPopup p[name=title]').text(v), w('#alertPopup p[name=desc]').text(z), A('#alertPopup button[name=okbtn]').text(B), C('#alertPopup button[name=okbtn],#alertPopup button[name=closebtn]').click(function() {
                        I('#alertPopup button[name=okbtn]').unbind('click'), J('alertPopup'), K && (N(), O = null);
                    });
                }
            }
        }
    }
    get subtitleList() {
        return this._subtitleList;
    }
}
class Rich360SubtitleManager {
    constructor(a) {
        this._player = a, this._subtitleDiv = document.createElement('div'), this._subtitleArr = [], this._subtitleTrack = -1, this._cues = [], this._subItv = null, this._isHideDefaultSubtitles = true, this._bfSendSubTime = new Date(), this.initialize();
    }
    initialize() {
        this._subtitleDiv.id = 'subtitleDiv';
        var a = this._subtitleDiv.style;
        a.position = 'absolute', a.bottom = 0, a.left = 0, a.textAlign = 'center', a.fontFamily = 'sans-serif', a.fontWeight = 'bold', a.backgroundColor = 'transparent', a.color = 'white', a.display = 'none', a.verticalAlign = 'bottom', a.fontWeight = 700, a.textShadow = '#000000 0px 0px 7px', this._player._parent_dom.appendChild(this._subtitleDiv), this.setSubtitleItv();
    }
    addCueData(a) {
        this._bfSendSubTime = new Date();
        for (var b = 0; b < a.length; b++) {
            if ('WCefr' === 'WCefr') this._cues.push(a[b]);
            else {
                function c() {
                    c.push(d[0]);
                }
            }
        }
    }
    clearCueData() {
        this._cues = [], this._subtitleDiv.innerHTML = '', this._subtitleDiv.style.display = 'none';
    }
    drawSubtitles() {
        var a = [];
        for (var b = 0; b < this._cues.length; b++) {
            if (this._player._video.currentTime > this._cues[b].endTime && !this._player._options.content_data.use_vod) {
                this._cues.splice(b, 1), b--;
                continue;
            }
            if (this._player._video.currentTime >= this._cues[b].startTime && this._player._video.currentTime < this._cues[b].endTime) {
                var c = false;
                for (var d = 0; d < a.length; d++) {
                    if ('mZtrR' !== 'mZtrR') {
                        function w() {
                            this._video.pause(), this._ui_play = false, this._listener.trigger(b.RICH360_PLAY_PAUSE_CHANGE, false);
                        }
                    } else {
                        if (a[d].startTime == this._cues[b].startTime && a[d].endTime == this._cues[b].endTime) {
                            if ('TBYFD' !== 'tkoeh') c = true;
                            else {
                                function z() {
                                    var A = '70bebcdc-b7a9-4478-ad60-ac8925042df6';
                                }
                            }
                        }
                    }
                }!c && a.push({
                    'startTime': this._cues[b].startTime,
                    'endTime': this._cues[b].endTime,
                    'text': this._cues[b].text
                });
            }
        }
        if (!a.length) {
            if ('pAnco' === 'pAnco') {
                this._subtitleDiv.innerHTML = '', this._subtitleDiv.style.display = 'none';
                return;
            } else {
                function A() {
                    b('#artistChatList .user_chat:eq(-1)').css('margin-bottom', '0');
                }
            }
        }
        var e = this._player._parent_dom.offsetWidth,
            f = this._player._parent_dom.offsetHeight,
            g = {
                'left': e / 100 * 10,
                'bottom': f / 100 * 5
            };
        if (document.getElementById('playerBottomWrap').style.display != 'none') {
            if ('LlUZv' !== 'Ssmab') {
                var h = document.getElementById('playerBottomWrap').clientHeight;
                document.getElementById('playerBottomWrap').clientWidth < 812 && (h = 0), g.bottom += h;
            } else {
                function B() {
                    var C = '46554765-6d6b-4d43-99eb-5bbe0823613a';
                }
            }
        }
        if (!this._player._hls._isDummy) {
            if (parseInt(this._subtitleDiv.style.left.replace('px', '')) == parseInt(g.left) && parseInt(this._subtitleDiv.style.bottom.replace('px', '')) == parseInt(g.bottom) && this._player._hls._hls.subtitleTrack == this._subtitleTrack && this.compareArray(this._subtitleArr, a)) {
                if ('VtyXW' === 'VtyXW') return;
                else {
                    function C() {
                        d = e(f.target.id);
                    }
                }
            }
        }
        var k = e / 100 * 50,
            l = e / 100 * 80,
            m = e / 100 * 2.5;
        if (e < 568) m = e / 100 * 3.2;
        else e > 1000 && (m = e / 100 * 2.2);
        var n = 2,
            o = 0,
            p = [];
        for (var b = 0; b < a.length; b++) {
            if ('SbaVa' === 'SbaVa') {
                var q = a[b].text.split('\n'),
                    r = q.length;
                for (var d = r - 1; d >= 0; d--) {
                    if (q[d] == '') continue;
                    var s = this.measureText(q[d], m) + m;
                    s >= l && (s = l);
                    var t = k - s / 2 - g.left;
                    p[o] = '<p style="color:white;word-break:break-all;font-weight:700;text-shadow:#000000 0px 0px 7px;padding:1px 5px;width:' + s + 'px;margin-left:' + t + 'px;margin-bottom:2px;">' + q[d] + '</p>', o++;
                    if (n == o) break;
                }
                if (n == o) break;
            } else {
                function D() {
                    if (this._player.currentPosition) {
                        var E = this._player.currentPosition + 10;
                        E > this._player.duration - 1 && (E = this._player.duration - 1), this._player.currentPosition = E;
                    }
                }
            }
        }
        var u = '';
        for (var v = p.length - 1; v >= 0; v--) {
            if ('tFkBL' === 'Njdia') {
                function E() {
                    this._view = 0;
                }
            } else u += p[v];
        }
        this._subtitleDiv.innerHTML = u, this._subtitleDiv.style.width = l + 'px', this._subtitleDiv.style.left = g.left + 'px', this._subtitleDiv.style.bottom = g.bottom + 'px', this._subtitleDiv.style.fontSize = m + 'px', this._subtitleDiv.style.display = 'block', this._subtitleArr = JSON.parse(JSON.stringify(a));
        if (this._player._hls._isDummy) this._subtitleTrack = this.getVideoSubtitleTrack();
        else {
            if ('uyFLV' !== 'HmOQR') this._subtitleTrack = this._player._hls._hls.subtitleTrack;
            else {
                function F() {
                    if (h.messages.length)
                        for (var G = 0; G < o.messages.length; G++) {
                            var H = u.messages[G].entry.update.split(v);
                            for (var I = 0; I < H.length; I++) {
                                var J = H[I].split(B)[0];
                                C.Ui.displayMessage(H[I], D.messages[G].timetoken, J, true);
                            }
                        }
                }
            }
        }
    }
    compareArray(a, b) {
        var c = false;
        if (a.length != b.length) return c;
        return a.forEach(function(d) {
            var e = b.indexOf(d);
            if (e > -1) b.splice(e, 1);
        }), c = b.length == 0, c;
    }
    measureText(a, b) {
        const c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15625, 0.3, 0.4, 0.7, 0.6, 0.9, 0.7, 0.2, 0.4, 0.4, 0.4, 0.6, 0.3, 0.4, 0.3, 0.5, 0.6, 0.55625, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.3, 0.3, 0.6, 0.6, 0.6, 0.6, 1.1, 0.8, 0.7, 0.8, 0.7234375, 0.7, 0.6109375, 0.8, 0.7234375, 0.3, 0.5, 0.8, 0.6, 0.834375, 0.7234375, 0.8, 0.7, 0.8, 0.8, 0.7, 0.8, 0.7234375, 0.8, 1.1, 0.8, 0.8, 0.8, 0.3, 0.5, 0.3, 0.6, 0.7, 0.334375, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5, 0.6, 0.6, 0.2234375, 0.3234375, 0.6, 0.2234375, 0.834375, 0.6, 0.6, 0.6, 0.6, 0.4, 0.5, 0.4, 0.6, 0.7, 0.9, 0.7, 0.7, 0.6, 0.5, 0.2609375, 0.5, 0.6],
            d = 1.2;
        return a.split('').map(e => e.charCodeAt(0) < c.length ? c[e.charCodeAt(0)] + 0.1 : d).reduce((e, f) => f + e) * b;
    }
    setSubtitleItv() {
        this._subItv && (clearInterval(this._subItv), this._subItv = null), this._subItv = setInterval(function() {
            if (this._cues.length) this.drawSubtitles();
            else {
                if ('PmVUn' === 'PmVUn') {
                    if (this._player.subtitleTrack != -1) {
                        var a = new Date();
                        if (this._bfSendSubTime.getTime() + 10000 < a) {
                            var b = this._player.subtitleTrack;
                            this._player.subtitleTrack = -1, this._bfSendSubTime = a, setTimeout(function() {
                                if ('qlCrz' !== 'qlCrz') {
                                    function c() {
                                        var d = this._req_str.lastIndexOf('/output'),
                                            e = new d(),
                                            f = this._req_str.substr(0, d) + '/thumbnails.jpg?' + e.getTime();
                                        e(this._ui.playThumbnail).css('background-image', ''), f(this._ui.playThumbnail).css('background-image', 'url(' + f + ')'), this.pause();
                                    }
                                } else this._player.subtitleTrack = b;
                            }.bind(this), 100);
                        }
                    }
                } else {
                    function c() {
                        var d = new e();
                        for (var e in f) {
                            d.append(e, i[e]);
                        }
                        h.send(d);
                    }
                }
            }
        }.bind(this), 100);
    }
    getVideoSubtitleTrack() {
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            if ('YbCva' === 'hBeaN') {
                function c() {
                    this._ui.volumeSlider.value = this._player.volume * 100, this.initQuality();
                }
            } else {
                if (this._player._video.textTracks[b].mode == 'showing' || this._player._video.textTracks[b].mode == 'hidden') return b;
            }
        }
        return -1;
    }
    hideDefaultSubtitle() {
        this._isHideDefaultSubtitles = true;
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            this._player._video.textTracks[b].mode == 'showing' && (this._player._video.textTracks[b].mode = 'hidden', cusDDselectOption('#ccSelect', b, true));
        }
    }
    showDefaultSubtitle() {
        this._isHideDefaultSubtitles = false;
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            this._player._video.textTracks[b].mode == 'hidden' && (this._player._video.textTracks[b].mode = 'showing');
        }
    }
}
class MultiViewDisplay {
    constructor(a, b, c, d, e, f) {
        this._options = a, this._video = b, this._player = c, this._videoSubPositions = e, this._videoMainPosition = d, this._multiviewDivArr = f, this._canvasFPS = 0, this._updateCanvasFlag = false, this._showMultiPreview = false, this._multiviewCanvas = [], this._multiviewCtx = [], this._doubleBufferCanvas = [], this._bfVideoWidth = 0, this._bfVideoHeight = 0;
        for (var g = 0; g < this._videoSubPositions.length; g++) {
            var h = document.createElement('canvas'),
                j = document.createElement('canvas');
            h.setAttribute('id', 'mvCanvas_' + g), this._multiviewDivArr[g].append(h), this._multiviewCanvas.push(h), this._multiviewCtx.push(h.getContext('2d')), this._doubleBufferCanvas.push(j);
        }
        if (this._options.container) this._parent_dom = this._options.container;
        else {
            if ('nbIjU' !== 'iYQQM') this._parent_dom = document.body;
            else {
                function k() {
                    var l = '4861a19c-18c1-469e-aa3c-3bf913ed901f';
                }
            }
        }
        this._mainDiv = document.createElement('div'), this._mainDiv.setAttribute('id', 'mvMainDiv'), this._mainDiv.style.overflow = 'hidden', this._mainDiv.style.position = 'absolute', this._mainDiv.appendChild(this._video), this._parent_dom.appendChild(this._mainDiv), this._video.readyState == 0 ? this._video.addEventListener('canplay', this.arrangeVideo.bind(this), {
            'once': true
        }) : this.arrangeVideo(), window.addEventListener('resize', function() {
            if ('XGldz' !== 'XGldz') {
                function l() {
                    c.href = d;
                }
            } else setTimeout(function() {
                if ('ShOPw' !== 'aEMVS') this.arrangeVideo();
                else {
                    function m() {
                        b.Ui.enableChatInput();
                    }
                }
            }.bind(this), 200);
        }.bind(this), false), window.addEventListener('orientationchange', function() {
            if ('gRNLq' !== 'gRNLq') {
                function l() {
                    this._ui.fullScreen = new b(this, this._ui.fullBtn);
                }
            } else setTimeout(function() {
                if ('IfKGM' === 'WmKQS') {
                    function m() {
                        var n = '56762a8f-9162-44bf-aec2-d8349f902ef1';
                    }
                } else this.arrangeVideo();
            }.bind(this), 500);
        }.bind(this), false);
    }
    replaceVideo(a) {
        this._mainDiv.removeChild(this._video), this._mainDiv.appendChild(a), this._video = a;
    }
    updateVideoArrangement(a, b, c = true) {
        this._videoMainPosition = a, this._videoSubPositions = b;
        if (c) this.arrangeVideo();
    }
    arrangeVideo() {
        let a = this._videoMainPosition;
        if (this._player._view != a.singleview_id) {
            if ('SspuI' === 'vTZAK') {
                function n() {
                    var o = e.createElement('canvas'),
                        q = f.createElement('canvas');
                    o.setAttribute('id', 'mvCanvas_' + g), this._multiviewDivArr[h].append(o), this._multiviewCanvas.push(o), this._multiviewCtx.push(o.getContext('2d')), this._doubleBufferCanvas.push(q);
                }
            } else
                for (let o of this._videoSubPositions) {
                    if ('ewfMO' === 'ewfMO') {
                        if (o.singleview_id == this._player._view) {
                            a = o;
                            break;
                        }
                    } else {
                        function q() {
                            this._listener.trigger(b.RICH360_ACCESS_DENIED, 'Permission Denied');
                        }
                    }
                }
        }
        var b = this._video.videoWidth,
            c = this._video.videoHeight;
        !this._video.videoWidth && (b = this._bfVideoWidth);
        if (!this._video.videoHeight) {
            if ('pPYla' !== 'HsglK') c = this._bfVideoHeight;
            else {
                function r() {
                    this.initHideCtrllerEvent();
                }
            }
        }
        this._bfVideoWidth = b, this._bfVideoHeight = c;
        let d = a.width * b / (a.height * c);
        console.log('arrangement : ' + a.width + ', ' + a.height + ' video : ' + b + ', ' + c);
        let e = this._parent_dom.offsetWidth / this._parent_dom.offsetHeight;
        console.log('videoRatio : ' + d + ' containerRatio : ' + e);
        let f, g, h, i;
        d > e ? (console.log('videoRatio > containerRatio'), f = this._parent_dom.offsetWidth, g = this._parent_dom.offsetWidth / d, h = (this._parent_dom.offsetHeight - g) / 2, i = 0) : (console.log('videoRatio <= containerRatio'), g = this._parent_dom.offsetHeight, f = this._parent_dom.offsetHeight * d, i = (this._parent_dom.offsetWidth - f) / 2, h = 0);
        Object.assign(this._mainDiv.style, {
            'width': f + 'px',
            'height': (document.fullscreenEnabled && !checkMobileAndTablet() ? g - 5 : g) + 'px',
            'left': i + 'px',
            'top': h + 'px'
        });
        let j = f / a.width,
            k = g / a.height,
            l = a.x * b * j / b,
            m = a.y * c * k / c;
        Object.assign(this._video.style, {
            'width': j + 'px',
            'height': k + 'px',
            'left': '-' + l + 'px',
            'top': -1 * m + 1 + 'px',
            'position': 'absolute'
        }), !this._showMultiPreview ? this._updateCanvasFlag = false : !this._updateCanvasFlag && (this._updateCanvasFlag = true, this._canvasTimeStamps = [], this._canvasTimeStamps.push(performance.now()), this._canvasTimeStampIndex = 0, window.requestAnimationFrame(this.drawCanvas.bind(this)));
    }
    set showMultiPreview(a) {
        this._showMultiPreview = a, this.arrangeVideo();
    }
    selectedMultiviewCanvas(a) {
        const b = $(this._multiviewCanvas[a]).parent();
        if (this._player._view == a) b.addClass('on');
        else b.removeClass('on');
    }
    drawCanvas(a) {
        const {
            _video: b,
            _videoSubPositions: c
        } = this;
        if (this._updateCanvasFlag) {
            if (!b.paused && !b.ended) {
                if ('sHLTK' === 'LAFNT') {
                    function e() {
                        this._mainDiv.removeChild(this._video), this._mainDiv.appendChild(c), this._video = d;
                    }
                } else c.forEach(((f, g) => {
                    const h = this._multiviewCanvas[g],
                        i = this._multiviewCtx[g],
                        j = this._multiviewDivArr[g],
                        k = this._doubleBufferCanvas[g];
                    var l = c.find(u => u.singleview_id === g);
                    this.selectedMultiviewCanvas(g);
                    if (l == null) return;
                    const {
                        x: m,
                        y: n,
                        width: o,
                        height: p
                    } = l, {
                        videoWidth: q,
                        videoHeight: r
                    } = b, {
                        offsetWidth: s,
                        offsetHeight: t
                    } = j;
                    i.drawImage(b, Math.round(m * q), Math.round(n * r), Math.round(o * q), Math.round(p * r), 0, 0, s, t), k.width = s, k.height = t, k.getContext('2d').drawImage(h, 0, 0), h.width = s, h.height = t, i.drawImage(k, 0, 0);
                }).bind(this));
            }
            this._canvasTimeStampIndex++;
            this._canvasTimeStampIndex >= 100 && (this._canvasTimeStampIndex = 0);
            let d = 0;
            if (this._canvasTimeStamps.length < 100) {
                if ('CHtaD' !== 'CHtaD') {
                    function f() {
                        try {
                            var g = o.parse(p.responseText);
                            q(g, r.status);
                        } catch (h) {
                            v(w.responseText, z.status);
                        }
                    }
                } else this._canvasTimeStamps.push(a);
            } else {
                this._canvasTimeStamps[this._canvasTimeStampIndex] = a, d = this._canvasTimeStampIndex + 1;
                if (d >= 100) d = 0;
            }
            this._canvasFPS = (this._canvasTimeStamps.length - 1) * 1000 / (this._canvasTimeStamps[this._canvasTimeStampIndex] - this._canvasTimeStamps[d]), window.requestAnimationFrame(this.drawCanvas.bind(this));
        }
    }
}
const RSAnd = 'https://api.liveconnect.co.kr',
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
        var a = '',
            b = false;
        return {
            'loadChatFilterData': function(c) {
                if (b) {
                    if ('KrZed' !== 'UlOlw') {
                        if (c) c();
                        return;
                    } else {
                        function e() {
                            this._player.subtitleTrack = b;
                        }
                    }
                }
                var d = new XMLHttpRequest();
                if (Tira == 'IDLE') {
                    if ('cetPw' !== 'cetPw') {
                        function f() {
                            this._video.textTracks[b].mode = 'showing';
                        }
                    } else d.open('GET', '/static/filtering/chat_filtering_idle.txt');
                } else Tira == '210417_cix' ? d.open('GET', '/static/filtering/chat_filtering_cix.txt') : d.open('GET', '/static/filtering/chat_filtering.txt');
                d.overrideMimeType('text/plain; charset=utf-8'), d.onreadystatechange = function() {
                    if ('rPeWm' !== 'rPeWm') {
                        function g() {
                            this._hls.loadSource(b);
                        }
                    } else {
                        if (d.readyState == XMLHttpRequest.DONE) {
                            if (d.status == 200 || d.status == 201) {
                                if ('Hrdji' !== 'qmGcm') {
                                    a = d.responseText.replace(/(\r\n\t|\n|\r\t)/gm, '|'), a = a.replace(/[\r]/gm, '');
                                    a[a.length - 1] == '|' && (a = a.substr(0, a.length - 1));
                                    b = true;
                                    if (c) c();
                                } else {
                                    function h() {
                                        this._hls.on(d.Events.FRAG_PARSED, function(i, j) {
                                            let k = j.frag;
                                            g.log('curTime / this.duration : ', this._video.currentTime + '/' + this.duration), h.log('frag.startPTS : ', k.startPTS), this._hls.timeDictionary[k.sn + ''] = k.startPTS, k.startPTS == 0 && (this._hls.startSN = k.sn);
                                        }.bind(this));
                                    }
                                }
                            }
                        }
                    }
                }, d.send();
            },
            'filteringChatText': function(c) {
                if ('jtxQh' === 'jtxQh') {
                    if (!b) return;
                    var d = 'gi',
                        e = new RegExp(a, d);
                    return c.replace(e, '***');
                } else {
                    function f() {
                        this._view = d;
                        var g = this._video.currentTime;
                        this._hls.detachMedia(), this._hls.destroy();
                        let h = e.DefaultConfig;
                        if (this._video.paused) h.autoplay = false;
                        else h.autoplay = true;
                        this._hls = new f(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), h, this._options.use_multiview), this._hls.attachMedia(this._video);
                        const {
                            _multiviewCanvas: i
                        } = this._display, j = i.map(k => this.resizeToCanvasImage(k));
                        this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path, g, j[this._view]), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                    }
                }
            },
            'checkFilteringData': function() {
                return b;
            },
            'checkNickname': function(c) {
                if (!b) return;
                var d = 'gi',
                    e = new RegExp(a, d);
                return e.test(c);
            }
        };
    }(),
    Chat = {};
const CHAT_MSG_SEPARATOR = '|*|',
    CHAT_USERID_SEPARATOR = '|#|',
    NICKNAME_SEPARATOR = '|&|';
Chat.Manager = function() {
    const a = 5,
        b = 10,
        c = 15,
        d = 2000;
    var e = '',
        f = b,
        g = a,
        h = null;
    const i = 'ch_chat1' + '_' + DCvi;
    var j = [],
        k = 'ch_notice' + '_' + DCvi,
        l = 'ch_ctr' + '_' + DCvi,
        m = 'ch_artist' + '_' + DCvi,
        n = null,
        o = null,
        p = null,
        q = [],
        r = null,
        s = null;
    AWS.config.update({
        'region': Nierw,
        'accessKeyId': Yacaw,
        'secretAccessKey': Ytcsw
    });
    var t = null,
        u = {},
        v = '';
    return {
        'setContentData': function(w) {
            u = w;
        },
        'isChatUsed': function() {
            if ('vMGSd' === 'vMGSd') return u.is_chat_used;
            else {
                function w() {
                    if (this._player._ui_play) {
                        var z = this._req_str.lastIndexOf('/output'),
                            A = new g(),
                            B = this._req_str.substr(0, z) + '/thumbnails.jpg?' + A.getTime();
                        h(this._ui.playThumbnail).css('background-image', ''), i(this._ui.playThumbnail).css('background-image', 'url(' + B + ')'), this.pause();
                    } else this.play();
                }
            }
        },
        'getChatChannels': function() {
            return j;
        },
        'setChatChannels': function() {
            if (u.chat_channel_num > 0) {
                if (Chat.Manager.checkArtistUser(n) || Chat.Manager.checkOperationntUser(n) || Chat.Manager.checkAdminUser(n)) {
                    for (var w = 1; w <= u.chat_channel_num; w++) {
                        j.push(i + '_' + w.toString());
                    }
                    Chat.Manager.checkArtistUser(n) && j.push(m);
                } else {
                    var z = Math.floor(Math.random() * parseInt(u.chat_channel_num)) + 1;
                    j.push(i + '_' + z.toString());
                }
            }
        },
        'getNoticeChannel': function() {
            if ('XJEyX' !== 'XJEyX') {
                function w() {
                    this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration;
                }
            } else return k;
        },
        'getCtrChannel': function() {
            if ('ZUDQC' === 'GbKKU') {
                function w() {
                    var z = '3f6d28f4-0c1d-4c31-97bf-55b2a14a113e';
                }
            } else return l;
        },
        'setUserId': function(w) {
            if (n) return;
            if (!w) n = getCookie(DCvi + '_user_id');
            else {
                if ('EOzmc' === 'EOzmc') n = w;
                else {
                    function z() {
                        h(i(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = j(this).text();
                        if (k) l(m(this).data(), n(this));
                    }
                }
            }
        },
        'getUserId': function() {
            return n;
        },
        'setOperatorChNum': function(w) {
            if ('fuAaX' === 'NpTTd') {
                function z() {
                    return b;
                }
            } else o = w;
        },
        'setOperatorSelCh': function(w) {
            if ('hFYRC' === 'hFYRC') p = w;
            else {
                function z() {
                    d(e[f]);
                }
            }
        },
        'setPubnubAPI': function(w) {
            Chat.Manager.setUserId(), e = w, s = new PubNub({
                'publishKey': YPP3z,
                'subscribeKey': KSPdf,
                'uuid': n
            }), AWS.config.update({
                'region': Nierw,
                'accessKeyId': Yacaw,
                'secretAccessKey': Ytcsw
            }), t = new AWS[('Kinesis')](), Chat.Ui.initChatUIEvent(), Chat.Manager.setChatChannels(), Chat.Manager.setChatHistory(), Chat.Manager.initPubnubEvent();
        },
        'setChatHistory': function() {
            if ('JVNJF' !== 'lJIMj') {
                s.history({
                    'channel': k,
                    'count': 1
                }, function(z, A) {
                    if ('wWLhG' !== 'AOALi') {
                        console.log(z, A);
                        if (A) {
                            if ('AQUqc' === 'AQUqc') A.messages.length && Chat.Ui.updateNotice(A.messages[0].entry.update, A.messages[0].entry.timetoken, A.messages[0].entry.entry);
                            else {
                                function B() {
                                    var C = this._player._video.textTracks.length;
                                    for (var D = 0; D < C; D++) {
                                        if (this._player._video.textTracks[D].mode == 'showing' || this._player._video.textTracks[D].mode == 'hidden') return D;
                                    }
                                    return -1;
                                }
                            }
                        }
                    } else {
                        function C() {
                            if (f.status === 400 || g.status === 401) this._listener.trigger(k.RICH360_ACCESS_DENIED, 'Authorization failed');
                            else i.status === 403 && this._listener.trigger(l.RICH360_LIVE_ENDED, 'Live ended');
                        }
                    }
                });
                var w = 0;
                p && (w = p - 1), s.history({
                    'channel': j[w],
                    'count': c
                }, function(z, A) {
                    console.log(z, A);
                    if (A) {
                        if ('CTSex' !== 'CTSex') {
                            function F() {
                                this._player._hls.loadSource(b), this._player._hls.attachMedia(this._player._video);
                            }
                        } else {
                            if (A.messages.length) {
                                if ('tDhHr' !== 'tDhHr') {
                                    function G() {
                                        var H = e.createElement('div');
                                        H.className = 'fc_default cusDD_opt', H.id = f.id, H.dataset.id = g.id, H.dataset.height = h.height;
                                        var I = '';
                                        return H.dataset.height == 'auto' ? I = 'AUTO' : I = H.dataset.height + 'P', H.innerHTML = I, H;
                                    }
                                } else
                                    for (var B = 0; B < A.messages.length; B++) {
                                        var C = A.messages[B].entry.update.split(CHAT_MSG_SEPARATOR);
                                        for (var D = 0; D < C.length; D++) {
                                            var E = C[D].split(CHAT_USERID_SEPARATOR)[0];
                                            Chat.Ui.displayMessage(C[D], A.messages[B].timetoken, E, true);
                                        }
                                    }
                            }
                        }
                    }
                }), s.history({
                    'channel': m,
                    'count': 10000
                }, function(z, A) {
                    if ('mRhKp' !== 'mRhKp') {
                        function F() {
                            this._sourceBase = '';
                        }
                    } else {
                        console.log(z, A);
                        if (A) {
                            if ('LXirr' === 'LXirr') {
                                var B = JSON.parse(JSON.stringify(A));
                                if (B.messages.length) {
                                    for (var C = 0; C < B.messages.length; C++) {
                                        var D = B.messages[C].entry.update,
                                            E = D.split(CHAT_USERID_SEPARATOR)[0];
                                        E && Chat.Ui.displayArtistHistoryMsg(D, B.messages[C].timetoken, E);
                                    }
                                    if ($('#artistChatList').length) {
                                        if ('CQzJQ' !== 'CQzJQ') {
                                            function G() {
                                                b.addClass('t_my');
                                            }
                                        } else $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
                                    }
                                }
                            } else {
                                function H() {
                                    b.webkitRequestFullscreen();
                                }
                            }
                        }
                    }
                });
            } else {
                function z() {
                    d = e(f.id);
                }
            }
        },
        'initPubnubEvent': function() {
            var w = [k, l];
            if (p) w.push(j[p - 1]);
            else {
                if (!o) {
                    if ('hGmeK' !== 'hGmeK') {
                        function A() {
                            t && (O(P), Q = null);
                            var B = z / A.length;
                            B = C(function() {
                                if (R.length) {
                                    var ac = a2[0].split(a3)[0];
                                    a4.Ui.displayMessage(a5[0], a6, ac), a7 = a8(a9) + aa(B * 1000 * 10), ab.splice(0, 1);
                                }
                            }, B);
                        }
                    } else o = 1;
                }
                for (var z = 0; z < o; z++) {
                    w.push(j[z]);
                }
            }
            s.addListener({
                'status': function(B) {
                    if ('pODrE' === 'pODrE') {
                        console.log('[STATUS: ' + B.category + ']', 'connected to channels: ' + B.affectedChannels);
                        if (B.category == 'PNConnectedCategory') {
                            if ('hloWs' !== 'hloWs') {
                                function C() {
                                    return this._hls.isAutoQuality();
                                }
                            } else ChatFilter.loadChatFilterData(), Chat.Manager.initChatInterval();
                        }
                    } else {
                        function D() {
                            var E = '4f2bcf78-c4ad-4d6d-89b3-551d83525fff';
                        }
                    }
                },
                'message': function(B) {
                    if ('QbXza' !== 'XRacZ') {
                        if (B.channel == k) {
                            if ('CgTxl' === 'CgTxl') Chat.Ui.updateNotice(B.message.update, B.timetoken, B.message.entry);
                            else {
                                function F() {
                                    return this._video.volume = b;
                                }
                            }
                        } else {
                            if (B.channel == l) Chat.Ui.recvCtrlChMsg(B.message.update);
                            else {
                                if ('cRoar' === 'gYhtZ') {
                                    function G() {
                                        b = this._bfVideoWidth;
                                    }
                                } else {
                                    var C = B.message.update.split(CHAT_MSG_SEPARATOR);
                                    for (var D = 0; D < C.length; D++) {
                                        var E = C[D].split(CHAT_USERID_SEPARATOR)[0];
                                        if (n == E) continue;
                                        Chat.Manager.checkArtistUser(E) ? Chat.Ui.displayMessage(B.message.update, B.timetoken, B.message.entry) : q.push(C[D]);
                                    }
                                    if (q.length) {
                                        if ('NJyfA' === 'NJyfA') Chat.Manager.displayMessageItv(parseInt(B.timetoken));
                                        else {
                                            function H() {
                                                d(e.responseText, f.status);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        function I() {
                            return this._hls._hls ? this._hls._hls.subtitleTrack : -1;
                        }
                    }
                }
            }), s.subscribe({
                'channels': w
            });
        },
        'displayMessageItv': function(w) {
            if ('QbKRB' !== 'sLign') {
                if (r) {
                    if ('GGwuD' !== 'GGwuD') {
                        function A() {
                            o = this.addRich360(p, q);
                            let B = r.slice(0, 8);
                            for (s = 0; t < 8; u++) {
                                E[F] = G[H] ^ I[J];
                            }
                            D = B.slice(0, 8);
                        }
                    } else clearInterval(r), r = null;
                }
                var z = d / q.length;
                r = setInterval(function() {
                    if ('mBXUe' !== 'mBXUe') {
                        function C() {
                            e() ? i(function() {
                                k._web_ui.showChatWrap();
                            }) : k._web_ui.showChatWrap();
                        }
                    } else {
                        if (q.length) {
                            var B = q[0].split(CHAT_USERID_SEPARATOR)[0];
                            Chat.Ui.displayMessage(q[0], w, B), w = parseInt(w) + parseInt(z * 1000 * 10), q.splice(0, 1);
                        }
                    }
                }, z);
            } else {
                function B() {
                    this._play_status = 'pause';
                }
            }
        },
        'submitUpdate': function(w, z, A, B) {
            if (!s) return;
            if (z === v) return;
            if (iCM()) return;
            v = z;
            if (!B) {
                if ('szkXC' !== 'szkXC') {
                    function F() {
                        this._web_ui = D, this._options = j._player._options, this._web_player = k._player, this._dom_element = l, this._dom_element.onclick = this.onclick.bind(this), this._is_fullscreen_button = true, this._dom_element.id = 'fullBtn', m.addEventListener('fullscreenchange', this.fullscreenChanged.bind(this)), n.addEventListener('webkitfullscreenchange', this.fullscreenChanged.bind(this)), o.addEventListener('mozfullscreenchange', this.fullscreenChanged.bind(this)), p.addEventListener('MSFullscreenChange', this.fullscreenChanged.bind(this));
                    }
                } else {
                    f && f--;
                    if (f <= 0) {
                        _availableChating = false, Chat.Ui.disableChatInput(a - g);
                        return;
                    } else _availableChating = true, Chat.Ui.enableChatInput();
                }
            }
            if (!Array.isArray(A)) {
                if ('ldcOM' === 'ZcotF') {
                    function G() {
                        return ((1 + b.random()) * 65536 | 0).toString(16).substring(1);
                    }
                } else A = [A];
            }
            if (Chat.Manager.checkOperationntUser(n) || Chat.Manager.checkAdminUser(n) || Chat.Manager.checkArtistUser(n)) {
                var C = false;
                for (var D = 1; D <= A.length; D++) {
                    s.publish({
                        'channel': A[D - 1],
                        'message': {
                            'entry': w,
                            'update': z
                        }
                    }, function(H, I) {
                        if ('oAAvs' === 'GsZkU') {
                            function J() {
                                e('#loadingDiv').css('display', 'none'), f(g), h = null;
                            }
                        } else {
                            if (H.error) {} else {
                                if (Chat.Manager.checkArtistUser(n) && !C) {
                                    if ('BNbxf' === 'BNbxf') I && Chat.Ui.displayMessage(z, I.timetoken, n), C = true;
                                    else {
                                        function K() {
                                            return this._ui.playerBottomWrap.style.display = 'block', !b(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true), this._wakeupPastTime = 0, true;
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            } else {
                var E = {
                    'Data': JSON.stringify(z),
                    'PartitionKey': A[0],
                    'StreamName': 'KINESIS_CHAT'
                };
                t.putRecord(E, function(H, I) {
                    if ('lFYIn' === 'pqPdM') {
                        function K() {
                            if (this._isDummy) {} else this._hls.recoverMediaError();
                        }
                    } else {
                        if (H) console.log(H, H.stack);
                        else {
                            console.log(I);
                            var J = new Date();
                            Chat.Ui.displayMessage(z, J.getTime() * 10000);
                        }
                    }
                });
            }
        },
        'checkOperationntUser': function(w) {
            if (u.operation_account === w) return true;
            else {
                if ('TJhKx' !== 'Ifqfd') return false;
                else {
                    function z() {
                        var A = c('#' + d);
                        A.css('display', 'none').find('#popupTitle, #popupDesc').text('');
                    }
                }
            }
        },
        'checkAdminUser': function(w) {
            if ('mTwNW' !== 'VzMpK') {
                if (u.admin_account === w) return true;
                return false;
            } else {
                function z() {
                    c.track.mode == 'showing' && (e.track.mode = 'hidden');
                }
            }
        },
        'checkArtistUser': function(w) {
            for (var z = 0; z < u.artist_account.length; z++) {
                if (u.artist_account[z] === w) {
                    if ('EijJN' !== 'JqTmR') return true;
                    else {
                        function A() {
                            var B = false;
                            return function(C) {
                                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(C) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(C.substr(0, 4))) B = true;
                            }(d.userAgent || e.vendor || f.opera), B;
                        }
                    }
                }
            }
            return false;
        },
        'initChatInterval': function() {
            h && clearInterval(h), h = setInterval(function() {
                g++;
                if (g >= a) {
                    if ('zrrXh' !== 'zrrXh') {
                        function w() {
                            e.Ui.displayMessage(f, g.timetoken, h);
                        }
                    } else g = 0, f = b;
                }
                if (f <= 0) {
                    if ('qrtWv' === 'qrtWv') Chat.Ui.disableChatInput(a - g);
                    else {
                        function z() {
                            b.log('Missing Hls.');
                            return;
                        }
                    }
                } else {
                    if ('WrkWy' !== 'WrkWy') {
                        function A() {
                            var B = g.split('[warning]')[1];
                            B == h.Manager.getUserId() && m(n('P_ALERT_TITLE'), '<' + o.web_title + '>의 라이브가 진행중입니다.', p('P_ALERT_OK'));
                        }
                    } else Chat.Ui.enableChatInput();
                }
            }, 1000);
        },
        'getNickName': function() {
            return e;
        },
        'destroy': function() {
            if ('NnDfk' !== 'NnDfk') {
                function w() {
                    var z = e.split('[ticket_exposure]')[1].split('|&|'),
                        A = z[0],
                        B = z[1],
                        C = f(z[2]) * 1000;
                    g(A, B, C);
                }
            } else s && s.destroy(), s = null;
        }
    };
}(), Chat.Ui = function() {
    const a = 100;
    var b = false,
        c = false,
        d = false,
        e = [],
        f = {
            '210417_cix': {
                '84893d8f-e5f9-4a85-a7bb-9028c865488c': {
                    'img': 'BX.png',
                    'msgClass': ''
                },
                '362762e8-4b89-4fa4-8fa4-a448fadb2c03': {
                    'img': 'seunghun.png',
                    'msgClass': ''
                },
                'fa73fcc5-2425-45cb-aaa8-eb81ba07170e': {
                    'img': 'baejinyoung.png',
                    'msgClass': ''
                },
                '36bd9d74-a541-42e8-af1a-efaf063456cd': {
                    'img': 'yonghee.png',
                    'msgClass': ''
                },
                '37dcc7d7-a844-408f-aed7-3478464f94ff': {
                    'img': 'hyunsuk.png',
                    'msgClass': ''
                }
            }
        };
    return {
        'initChatUIEvent': function() {
            var g = false;
            $('#chatContentWrap .scroll-bar').on('touchstart', function() {
                b = true;
            }), $('#chatList').on('touchstart', function(h) {
                g = true;
            }), $(document).on('touchmove', function(h) {
                console.log('touchmove'), g && (b = true);
            }), $(document).on('touchend', function(h) {
                g = false, console.log('touchmove');
            }), $('#chatList').on('wheel', function(h) {
                if (h.originalEvent.deltaY < 0) {
                    if ('MKiuD' === 'HmukS') {
                        function i() {
                            for (var j = 0; j < d.length; j++) {
                                var k = g[j];
                                h(k);
                            }
                        }
                    } else b = true;
                }
            }), $('#chatList').on('scroll', function() {
                if ('QinUC' !== 'GNIxj') {
                    if (d) {
                        if ('ypUXO' !== 'ypUXO') {
                            function l() {
                                e = 0, f(g), h = null;
                            }
                        } else return;
                    }
                    var h = Math.ceil($('#chatList').scrollTop() + $('#chatList').height());
                    if (h < $('#chatList')[0].scrollHeight) setTimeout(function() {
                        if ('dlvke' === 'ADGEE') {
                            function n() {
                                this._player._video.webkitEnterFullscreen();
                            }
                        } else {
                            var m = Math.ceil($('#chatList').scrollTop() + $('#chatList').height());
                            m < $('#chatList')[0].scrollHeight && ($('#chatAnchor').css('display', 'block'), b = true);
                        }
                    }, 200);
                    else {
                        if ('RiBHa' === 'RiBHa') {
                            $('#chatAnchor').css('display', 'none'), b = false;
                            if (e.length !== 0) {
                                if ('WGHOF' !== 'WGHOF') {
                                    function m() {
                                        c.track.mode == 'hidden' && (e.track.mode = 'showing');
                                    }
                                } else {
                                    var j = document.createDocumentFragment();
                                    for (var k = 1; k < e.length; k++) {
                                        if (a < k) break;
                                        j.prepend(e[e.length - k]);
                                    }
                                    $('#chatList').append(j);
                                    if (navigator.userAgent.indexOf('Firefox') === -1) {
                                        if ('pwQKz' === 'VDCMi') {
                                            function n() {
                                                this._hls.loadSource(this._options.source);
                                            }
                                        } else $('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
                                    }
                                    $('#chatList').scrollTop($('#chatList')[0].scrollHeight), e = [];
                                }
                            }
                        } else {
                            function o() {
                                this._sourceBase = this._options.source.substring(0, b) + '/';
                            }
                        }
                    }
                } else {
                    function p() {
                        d(e(this).parent()).siblings('.cusDD_select').data().id = f(this).data().id;
                    }
                }
            }), $('#chatAnchor').on('click', function() {
                $('#chatList').scrollTop($('#chatList')[0].scrollHeight), $('#chatAnchor').css('display', 'none');
            }), $('#chatSendBtn').on('click', function() {
                if ('KnERL' === 'KnERL') {
                    var h = Chat.Manager.getNickName(),
                        i = Chat.Manager.getUserId();
                    if (!h) {
                        alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                            if ('VuMWx' !== 'rHmGr') location.href = LUEz1;
                            else {
                                function l() {
                                    this._options.use_multiview && this.changeSingleView(false), this._subtitleManager.hideDefaultSubtitle(), this.pause_on();
                                }
                            }
                        });
                        return;
                    }
                    var j = $('#chatInput').val();
                    if (!j || !ChatFilter.checkFilteringData()) {
                        if ('VLxgm' !== 'VLxgm') {
                            function l() {
                                if (g > 100) h = 100;
                                else {
                                    if (i < 0) j = 0;
                                }
                                this.thumbDiv.style.left = k + '%', this._value = l, this.dispatchEvent(this.inputEvent);
                            }
                        } else return;
                    }
                    if (Chat.Manager.checkOperationntUser(i)) {
                        if ('heGZR' !== 'ZjAkK') Chat.Manager.submitUpdate(i, j, Chat.Manager.getNoticeChannel());
                        else {
                            function m() {
                                b();
                            }
                        }
                    } else {
                        if (Chat.Manager.checkAdminUser(i)) Chat.Manager.submitUpdate(i, j, Chat.Manager.getCtrChannel());
                        else {
                            if ('lJZgv' !== 'lJZgv') {
                                function n() {
                                    var o = l || m.document.body,
                                        p = '',
                                        q = [];
                                    if (n()) q.push('ios');
                                    if (o()) q.push('android');
                                    if (p() || q()) q.push('tablet');
                                    if (r()) q.push('chrome');
                                    if (s()) q.push('safari');
                                    if (t()) q.push('edge');
                                    if (u()) q.push('macos');
                                    if (v()) q.push('window');
                                    p = q.join(' '), o.className += ' ' + p;
                                }
                            } else {
                                var k = ChatFilter.filteringChatText(j);
                                Chat.Manager.submitUpdate(i, i + CHAT_USERID_SEPARATOR + h + NICKNAME_SEPARATOR + k, Chat.Manager.getChatChannels());
                            }
                        }
                    }
                    $('#chatInput').val('');
                } else {
                    function o() {
                        this.changeSource(b);
                    }
                }
            }), $('#chatInput').on('keydown', function(h) {
                if (h.keyCode == 13) {
                    if ('OvAhn' === 'klsfm') {
                        function i() {
                            var j = 'c67e2edc-3a6f-4091-9b4b-28fde50495a8';
                        }
                    } else return $('#chatSendBtn').click(), false;
                }
            }), $('#chatInput').on('focus', function(h) {
                delayStopLoadingPanel();
            }), $('#chatInput').on('blur', function(h) {
                if ('ZlfgD' !== 'TwPpb') delayStopLoadingPanel();
                else {
                    function i() {
                        var j = '68de58a5-38e5-41d4-a33b-41e70d554138';
                    }
                }
            });
        },
        'setResizingPage': function(g) {
            if ('ZvNbj' === 'fVbwB') {
                function h() {
                    var i = '30ced1cf-60b7-4736-88b1-2ed024f5a51c';
                }
            } else d = g;
        },
        'updateNotice': function(g, h, i) {
            if ('vIEOL' === 'eDNvh') {
                function j() {
                    if (!this._isDummy) this._hls.currentLevel = b;
                }
            } else {
                if (Chat.Manager.checkOperationntUser(i)) {
                    if ('Sqjya' !== 'VkRbF') {
                        if (g === '[delete]') $('#noticeChatWrap p[name=desc]').text(''), $('#noticeChatWrap').css('display', 'none');
                        else {
                            if ('HGcTY' === 'RsyVd') {
                                function k() {
                                    d = 0, e = f;
                                }
                            } else $('#noticeChatWrap p[name=desc]').text(g), $('#noticeChatWrap').css('display', 'block');
                        }
                    } else {
                        function l() {
                            this._ui.playerBottomWrap.style.display = 'block', !b(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true);
                        }
                    }
                }
            }
        },
        'recvCtrlChMsg': function(g) {
            if ('UbpJC' !== 'UbpJC') {
                function m() {
                    g[h] = i[j] ^ k[l];
                }
            } else {
                if (g.indexOf('[warning]') === 0) {
                    var h = g.split('[warning]')[1];
                    if (h == Chat.Manager.getUserId()) {
                        if ('BmxKB' === 'BmxKB') alertPopup(gettext('P_ALERT_TITLE'), '<' + _contentData.web_title + '>의 라이브가 진행중입니다.', gettext('P_ALERT_OK'));
                        else {
                            function n() {
                                if (e) {
                                    var o = i.apply(j, arguments);
                                    return k = null, o;
                                }
                            }
                        }
                    }
                } else {
                    if (g.indexOf('[ticket_exposure]') === 0) {
                        var i = g.split('[ticket_exposure]')[1].split('|&|'),
                            j = i[0],
                            k = i[1],
                            l = parseInt(i[2]) * 1000;
                        setTicketExposureItv(j, k, l);
                    }
                }
            }
        },
        'convertChatMsg': function(g) {
            if ('utOCl' === 'VtCva') {
                function l() {
                    d ? (g(this._ui.playBtn).removeClass('pl-i-play').addClass('pl-i-pause'), this._ui.playThumbnail.style.display = 'none') : h(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
                }
            } else {
                if (!g) return false;
                var h = g.split(CHAT_USERID_SEPARATOR);
                if (h.length < 2) return false;
                var i = h[0];
                h = h[1].split(NICKNAME_SEPARATOR);
                if (h.length < 2) return false;
                var j = h[0],
                    k = h[1];
                if (!i || !j || !k) {
                    if ('xSpJk' === 'IaKwM') {
                        function m() {
                            var n = {
                                'Data': j.stringify(k),
                                'PartitionKey': l[0],
                                'StreamName': 'KINESIS_CHAT'
                            };
                            m.putRecord(n, function(E, F) {
                                if (E) z.log(E, E.stack);
                                else {
                                    A.log(F);
                                    var G = new B();
                                    C.Ui.displayMessage(D, G.getTime() * 10000);
                                }
                            });
                        }
                    } else return false;
                }
                return {
                    'userId': i,
                    'nickName': j,
                    'text': k
                };
            }
        },
        'createArtistChatDiv': function(g, h, i, j) {
            if ('KFnYX' === 'KHWMh') {
                function n() {
                    return this._hls.levels;
                }
            } else {
                var k = $('.dummy-wrap > .artist_chat_dummy').clone();
                k.removeClass('artist_chat_dummy');
                var l = f[Tira] || {},
                    m = l[g] || null;
                if (m) {
                    if ('OsImS' === 'fkpgT') {
                        function o() {
                            var p = new f();
                            p.setTime(p.getTime() + g * 60 * 1000);
                            var q = 'expires=' + p.toUTCString();
                            h.cookie = i + '=' + j + ';' + q + ';path=/';
                        }
                    } else {
                        m.img && k.find('img').attr('src', '/static/imgs/c_event/' + Tira + '/' + m.img);
                        if (m.msgClass) {
                            if ('IgBAv' === 'IgBAv') k.find('.user_msg').addClass(m.msgClass);
                            else {
                                function p() {
                                    this.showChatOpenBtn(true);
                                }
                            }
                        }
                    }
                }
                return k.find('p[name=nickname]').text(h), k.find('p[name=text]').text(i), k.find('p[name=text]').append('<span class="chat_time fc_fff fs_12" style="vertical-align: baseline;">' + j.format(' ap&nbsp;hh:mm:ss') + '</span>'), k;
            }
        },
        'createUserChatDiv': function(g, h, i, j) {
            if ('AFfUu' === 'AFfUu') {
                var k = $('.dummy-wrap > .user_chat_dummy').clone();
                return g == Chat.Manager.getUserId() && k.addClass('t_my'), k.removeClass('user_chat_dummy'), k.find('p[name=nickname]').text(h), k.find('span[name=text]').text(i), k.find('span[name=time]').text(j.format('ap hh:mm:ss')), k;
            } else {
                function l() {
                    this._player._display.showMultiPreview = false;
                }
            }
        },
        'displayMessage': function(g, h, i, j) {
            if ('TkFik' !== 'mJakr') {
                var k = Chat.Ui.convertChatMsg(g);
                if (!k) return;
                var l = new Date(h / 10000);
                if (Chat.Manager.checkArtistUser(i)) {
                    m = Chat.Ui.createArtistChatDiv(i, k.nickName, k.text, l);
                    if (b) e.push(m[0]);
                    else {
                        if ('nZwcr' !== 'nZwcr') {
                            function p() {
                                return b.fromCharCode(this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255));
                            }
                        } else $('#chatList').append(m);
                    }
                    if ($('#artistChatList').length && !j) {
                        if ('zmqcZ' === 'zmqcZ') $('#artistChatList').append(m.clone());
                        else {
                            function q() {
                                var r;
                                return () => {
                                    i(r), j('#loadingWrap .pl_loader').addClass('stop'), r = k(function() {
                                        m('#loadingWrap .pl_loader').removeClass('stop');
                                    }, 1000);
                                };
                            }
                        }
                    }
                } else {
                    if (i) {
                        var m = Chat.Ui.createUserChatDiv(i, k.nickName, k.text, l);
                        b ? e.push(m[0]) : $('#chatList').append(m);
                    } else {
                        if ('kQpDD' !== 'kQpDD') {
                            function r() {
                                this.showChatOpenBtn(true);
                            }
                        } else {
                            b = false, $('#chatAnchor').css('display', 'none');
                            var m = Chat.Ui.createUserChatDiv(Chat.Manager.getUserId(), k.nickName, k.text, l);
                            $('#chatList').append(m);
                        }
                    }
                }
                $('#chatList .user_chat').css('margin-bottom', '1.25em');
                $('#artistChatList').length && $('#artistChatList .user_chat').css('margin-bottom', '1.25em');
                navigator.userAgent.indexOf('Firefox') === -1 && ($('#chatList .user_chat:eq(-1)').css('margin-bottom', '0'), $('#artistChatList').length && $('#artistChatList .user_chat:eq(-1)').css('margin-bottom', '0'));
                if ($('#chatList').find('div').length > a) {
                    var n = $('#chatList').find('div').length - a;
                    for (var o = 0; o < n; o++) {
                        if ('KqTYd' === 'KqTYd') $('#chatList').find('div:eq(0)').remove();
                        else {
                            function s() {
                                var t = '26a2c6a7-de48-42fc-becb-105e7455affd';
                            }
                        }
                    }
                }
                if (!c && (!i || !b)) {
                    if ('iqDbv' !== 'BKIYo') {
                        $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
                        if ($('#artistChatList').length) {
                            if ('URRzG' !== 'URRzG') {
                                function t() {
                                    c(this._ui.ccSelect).click(), d.stopPropagation();
                                }
                            } else $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
                        }
                    } else {
                        function u() {
                            this._player._video.textTracks[b].mode = 'showing';
                        }
                    }
                } else {
                    if ('wxXPi' === 'EBBEP') {
                        function v() {
                            f[g + 8] = h.fromCharCode(i[j]);
                        }
                    } else $('#chatAnchor').css('display', 'block');
                }
            } else {
                function w() {
                    b.webkitExitFullscreen();
                }
            }
        },
        'displayArtistHistoryMsg': function(g, h, i) {
            var j = Chat.Ui.convertChatMsg(g);
            if (!j) return;
            if (Chat.Manager.checkArtistUser(i)) {
                if ('CUrzq' !== 'UUbhz') {
                    var k = new Date(h / 10000),
                        l = Chat.Ui.createArtistChatDiv(i, j.nickName, j.text, k);
                    $('#artistChatList').length && $('#artistChatList').append(l);
                } else {
                    function m() {
                        this._options.use_multiview ? this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path) : this._hls.loadSource(this._options.source);
                    }
                }
            }
        },
        'enableChatInput': function() {
            if ($('#chatInput').prop('readonly') != false) {
                if ('QFsOg' === 'qGfTZ') {
                    function g() {
                        var h = c;
                        if (h == 'zh_Hans') h = 'cn';
                        var i = {
                            'ko': '채팅을 사용할 수 없습니다.',
                            'en': 'Live chat is currently unavailable.',
                            'ja': 'チャットを使用できません',
                            'jp': 'チャットを使用できません',
                            'cn': '不能用聊天'
                        };
                        if (!i[h]) return i.en;
                        return i[h];
                    }
                } else $('#chatInput').prop('readonly', false), $('#chatInput').prop('placeholder', gettext('P_CHAT_INPUT_PLACEHOLDER'));
            }
        },
        'disableChatInput': function(g) {
            $('#chatInput').prop('readonly', true);
            if (g) {
                if ('KvGLv' !== 'KvGLv') {
                    function h() {
                        this.options = d({}, this.options), e(this.options, f), this._init();
                    }
                } else $('#chatInput').prop('placeholder', interpolate(gettext('P_CHAT_ABLE_DELAY_PLACEHOLDER_%(delay)s'), {
                    'delay': g
                }, true));
            } else $('#chatInput').prop('placeholder', '');
        },
        'setHoldChatScroll': function(g) {
            if ('dMjkf' !== 'dMjkf') {
                function h() {
                    var i = this._ui.ccSelect.getAttribute('id');
                    e(this._ui.ccSelect).find('.cusDD_opt').each(function() {
                        i(this).attr('selected') == 'selected' && l('#' + i, m(this).data().id, true);
                    });
                    return;
                }
            } else c = g;
        },
        'getHoldChatScroll': function() {
            return c;
        }
    };
}();

function chatTest(a) {
    var b = 'chat_test',
        c = new Date(),
        d = c.format('yyyyMMdd-HH:mm:ss:') + c.getMilliseconds().toString(),
        e = Chat.Manager.getChatChannels()[0];
    if (a) {
        var f = e.lastIndexOf('_');
        e = e.substring(0, f + 1) + a.toString();
    }
    var g = Chat.Manager.getUserId();
    Chat.Manager.submitUpdate(g, g + CHAT_USERID_SEPARATOR + b + NICKNAME_SEPARATOR + d, [e], true);
}
var _testItv = {};

function chatTestItv(a, b, c) {
    _testItv[c] = setInterval(function() {
        if (a < 0) clearInterval(_testItv[c]);
        else {
            if ('eeZnG' !== 'eeZnG') {
                function d() {
                    d.Ui.disableChatInput(e - f);
                }
            } else a--, chatTest(c);
        }
    }, b);
}

function chatTestItvStop() {
    for (var a in _testItv) {
        if ('OgHRN' === 'OgHRN') clearInterval(_testItv[a]);
        else {
            function b() {
                c = d;
            }
        }
    }
}
var iCM = function() {
        let a = false;
        return b => {
            const c = $('#chatInput'),
                d = $('#chatSendBtn');
            if (typeof b !== 'undefined') a = b;
            if (b) c.val('');
            return c.prop('placeholder', a ? gettext('CHAT_PLACEHOLDER_ON_MUTE') : gettext('P_CHAT_INPUT_PLACEHOLDER')), c.attr('disabled', a), d.attr('disabled', a), a;
        };
    }(),
    _wmarkImgUrl = '';

function updateWaterMarkPos(a) {
    var b = $('#playerWrap'),
        c = document.getElementsByTagName('video')[0];
    if (!c) return;
    $('#mvMainDiv').length && (b = $('#mvMainDiv'));
    if (!$('#wmark').length) {
        var d = document.createElement('div');
        d.setAttribute('id', 'wmark'), b.append(d);
    }
    a ? ($('#wmark').css('background-image', 'url(' + a + ')'), _wmarkImgUrl = a) : $('#wmark').css('background-image', 'url(' + _wmarkImgUrl + ')');
    var e = 1920;
    if (!e) {
        if ('oMcLc' !== 'gbmjJ') e = 1920;
        else {
            function r() {
                b = 1920;
            }
        }
    }
    var f = 1080;
    if (!f) {
        if ('hTJMN' !== 'HopJO') f = 1080;
        else {
            function s() {
                this._web_ui.showChatWrap();
            }
        }
    }
    var g = e / f,
        h = b.width(),
        i = b.height(),
        j = h / g,
        k = 0,
        l = 0,
        m = 0;
    if (j > i) {
        if ('tUAAS' !== 'HyDNB') {
            var n = i * g;
            m = n / e, k = (h - n) / 2;
        } else {
            function t() {
                if (h(this._subtitleDiv.style.left.replace('px', '')) == i(j.left) && k(this._subtitleDiv.style.bottom.replace('px', '')) == l(m.bottom) && this._player._hls._hls.subtitleTrack == this._subtitleTrack && this.compareArray(this._subtitleArr, n)) return;
            }
        }
    } else {
        var n = j;
        m = n / f, l = (i - n) / 2;
    }
    if (m > 1) {
        if ('IhhFd' !== 'caFvh') m = 1;
        else {
            function u() {
                return '0'.string(b - this.length) + this;
            }
        }
    }
    const o = 180,
        p = 29;
    $('#wmark').css('width', o * m + 'px'), $('#wmark').css('height', p * m + 'px');
    const q = 20;
    $('#wmark').css('top', q * m + l + 'px'), $('#wmark').css('right', q * m + k + 'px');
}
var _ticketPos = {
        'x': 0,
        'y': 0
    },
    _ticketExposureTime = 0,
    _ticketExposureItv = null;

function setTicketExposureItv(a, b, c) {
    a !== undefined && (_ticketPos.x = a);
    if (b !== undefined) {
        if ('hEqQq' !== 'hEqQq') {
            function d() {
                var e = '562b8381-ebc8-496a-aa85-ba404e76459e';
            }
        } else _ticketPos.y = b;
    }
    c !== undefined && (_ticketExposureTime = c), _ticketExposureItv && clearInterval(_ticketExposureItv), updateTicketDivPos(), _ticketExposureItv = setInterval(function() {
        _ticketExposureTime -= 100;
        if (_ticketExposureTime < 0) {
            if ('WtKZd' !== 'SLsBH') _ticketExposureTime = 0, clearInterval(_ticketExposureItv), _ticketExposureItv = null;
            else {
                function e() {
                    e && i(j.parse(k.responseText));
                }
            }
        }
        updateTicketDivPos();
    }, 100);
}

function updateTicketDivPos() {
    if (_ticketExposureTime <= 0) {
        if ('qZSLK' === 'aJRzm') {
            function r() {
                b(this._logItv);
            }
        } else {
            $('#ticketDiv').length && $('#ticketDiv').css('display', 'none');
            return;
        }
    }
    var a = $('#playerWrap'),
        b = document.getElementsByTagName('video')[0];
    if (!b) return;
    if ($('#mvMainDiv').length) {
        if ('DedVD' !== 'VpzjR') a = $('#mvMainDiv');
        else {
            function s() {
                this._video.currentTime = c, this._logger.addLog({
                    'event': 'seek',
                    'time': d
                }), this._render_once_on_seek = true;
            }
        }
    }
    if (!$('#ticketDiv').length) {
        if ('yakMc' === 'dFUac') {
            function t() {
                b._web_ui.showChatWrap();
            }
        } else {
            var c = document.createElement('div');
            c.setAttribute('id', 'ticketDiv'), a.append(c);
        }
    }
    var d = $('#ticketDiv'),
        e = 1920;
    !e && (e = 1920);
    var f = 1080;
    if (!f) {
        if ('QJReK' !== 'QJReK') {
            function u() {
                var v = g.floor(h.random() * i(j.chat_channel_num)) + 1;
                k.push(l + '_' + v.toString());
            }
        } else f = 1080;
    }
    var g = e / f,
        h = a.width(),
        i = a.height(),
        j = h / g,
        k = 0,
        l = 0,
        m = 0;
    if (j > i) {
        if ('zmxno' === 'kDwAv') {
            function v() {
                b(this._ui.chatInputWrap).css('display', 'none');
            }
        } else {
            var n = i * g;
            m = n / e, k = h - n;
        }
    } else {
        var n = j;
        m = n / f, l = i - n;
    }
    if (m > 1) {
        if ('GGUdC' !== 'FwdAN') m = 1;
        else {
            function w() {
                b.msExitFullscreen();
            }
        }
    }
    const o = 220,
        p = 40,
        q = 32;
    d.css('width', o * m + 'px'), d.css('height', p * m + 'px'), d.css('top', (i - l) * _ticketPos.y + l / 2 + 'px'), d.css('left', (h - k) * _ticketPos.x + k / 2 + 'px'), d.css('font-size', q * m + 'px'), d.css('display', 'block'), d.text(getCookie(DCvi + '_ticket_id'));
}
var _player = null;
(function(a) {
    function b() {
        if ('YbwID' === 'YbwID') a('#sliderPaddingDiv').width(a('#playerSliderArea').width());
        else {
            function e() {
                d('#chatList .user_chat:eq(-1)').css('margin-bottom', '0'), e('#artistChatList').length && g('#artistChatList .user_chat:eq(-1)').css('margin-bottom', '0');
            }
        }
    }

    function c() {
        injectDeviceContentHeightToCSS(), b(), updateTicketDivPos();
    }

    function d(e) {
        if (e) {
            if ('zeZJu' !== 'lWppq') {
                if (e._player) {
                    if ('ysqSG' !== 'EupBF') {
                        if (e._player.qualityList) {
                            if ('SdZOE' !== 'umWgn') return e._player.qualityList.length;
                            else {
                                function f() {
                                    var g = '717d72f3-a23b-4824-aacc-8cdb17cdb4b7';
                                }
                            }
                        }
                    } else {
                        function g() {
                            this._isDummy ? this._video.load() : this._hls.startLoad();
                        }
                    }
                }
            } else {
                function h() {
                    !f && (k = 1);
                    for (var i = 0; i < h; i++) {
                        l.push(m[i]);
                    }
                }
            }
        }
        return false;
    }
    a(document).ready(function() {
        if ('hkXQi' !== 'hkXQi') {
            function l() {
                this.showChatOpenBtn(true);
            }
        } else {
            const m = 'keyboard-show-by-chat-input';
            var e = null,
                f = isIpadOS() && isChrome();
            addClassToElementByEnv(), injectDeviceContentHeightToCSS(), a(window).on('orientationchange', function() {
                console.log('EVENT::orientationchange'), injectDeviceContentHeightToCSS();
            }), a(window).resize(debounce(function() {
                console.log('EVENT::resize'), Chat.Ui.setResizingPage(true), isIpadOS() && (document.getElementsByTagName('video')[0].style.display = 'none'), c(), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight), setTimeout(function() {
                    if ('CeWnG' === 'CeWnG') c(), a('#chatAnchor').css('display', 'none'), Chat.Ui.setResizingPage(false);
                    else {
                        function o() {
                            this._hls.startLoad();
                        }
                    }
                }, 500), setTimeout(function() {
                    if (isIpadOS()) {
                        if ('NdohG' === 'INZSa') {
                            function o() {
                                b = 0;
                            }
                        } else document.getElementsByTagName('video')[0].style.display = 'block';
                    }
                    c(), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
                }, 1000);
            }, 200)), a('#chatInput').on('focus', function() {
                if ('RSDbp' !== 'zZDlP') {
                    console.log('EVENT::#chatInput::focus');
                    if (isIpadOS() && isChrome()) {
                        if ('ILNKn' === 'YKZcg') {
                            function o() {
                                var p = null,
                                    q = d;
                                if (q == 'zh_Hans') q = 'cn';
                                if (q == 'ja') q = 'jp';
                                if (e) p = f;
                                var r = {
                                    'ko': {
                                        'title': '알림',
                                        'desc': '권한이 없습니다.',
                                        'btnTxt': '확인',
                                        'okCallback': p
                                    },
                                    'en': {
                                        'title': 'Notification',
                                        'desc': 'Permission Denied',
                                        'btnTxt': 'OK',
                                        'okCallback': p
                                    },
                                    'jp': {
                                        'title': 'お知らせ',
                                        'desc': '権限がありません',
                                        'btnTxt': '確認',
                                        'okCallback': p
                                    },
                                    'cn': {
                                        'title': '提醒',
                                        'desc': '你没有权限访问',
                                        'btnTxt': '确认',
                                        'okCallback': p
                                    }
                                };
                                if (!r[q]) return r.en;
                                return r[q];
                            }
                        } else document.body.classList.add(m);
                    }
                } else {
                    function p() {
                        b._player._display.showMultiPreview = true;
                    }
                }
            }), a('#chatInput').on('blur', function() {
                console.log('EVENT::#chatInput::blur');
                if (isIpadOS() && isChrome()) {
                    if ('oBzXf' !== 'oBzXf') {
                        function o() {
                            return false;
                        }
                    } else document.body.classList.remove(m);
                }
            }), a('.scrollbar-inner').scrollbar(), a('#noticeChatWrap button[name=closebtn]').on('click', function() {
                a('#noticeChatWrap').css('display', 'none');
            }), a('#qualityPopup button[name=closebtn]').on('click', function() {
                if ('mEiym' !== 'WPnzr') a('#qualityPopup').css('display', 'none');
                else {
                    function o() {
                        c(d);
                    }
                }
            }), a('#subtitlePopup button[name=closebtn]').on('click', function() {
                if ('UCPDd' === 'UCPDd') a('#subtitlePopup').css('display', 'none');
                else {
                    function o() {
                        this._hls.destroy();
                    }
                }
            });
            var g = new Menu({
                    'wrapper': '#o-wrapper',
                    'type': 'slide-right',
                    'menuOpenerClass': '.c-button',
                    'maskId': '#c-mask'
                }),
                h = document.querySelector('#chat-i-pushy');
            h.addEventListener('click', function(o) {
                if ('ngacV' !== 'ngacV') {
                    function p() {
                        c.href = d;
                    }
                } else o.preventDefault(), g.open(), h.style.display = 'none', a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            }), g.open(), a('#chatCloseBtn').on('click', function() {
                return a('#playerBottomWrap').css('display', 'block'), a('#chat-i-pushy').css('display', 'block'), true;
            });
            var i = {
                    'container': document.getElementById('playerWrap'),
                    'use_multiview': false
                },
                j = {
                    'pageWrap': document.getElementById('pageWrap'),
                    'playerWrap': document.getElementById('playerWrap'),
                    'playThumbnail': document.getElementById('playThumbnail'),
                    'chatOpenBtn': document.getElementById('chat-i-pushy'),
                    'chatWrap': document.getElementById('chatWrap'),
                    'chatContents': document.getElementById('c-menu--slide-right'),
                    'chatInputWrap': document.getElementById('chatInputWrap'),
                    'navBtnWrap': document.getElementById('navBtnWrap'),
                    'playerBottomWrap': document.getElementById('playerBottomWrap'),
                    'playBtn': document.getElementById('playBtn'),
                    'volumeBtn': document.getElementById('volumeBtn'),
                    'volumeSlider': document.getElementById('volumeSlider'),
                    'fullBtn': document.getElementById('fullBtn'),
                    'loadingDiv': document.getElementById('loadingDiv'),
                    'ccSelect': document.getElementById('ccSelect'),
                    'ccSelectBtn': document.getElementById('ccSelectBtn'),
                    'qualitySelect': document.getElementById('qualitySelect'),
                    'qualitySelectBtn': document.getElementById('qualitySelectBtn'),
                    'qualityPopup': document.getElementById('qualityPopup'),
                    'subtitlePopup': document.getElementById('subtitlePopup')
                },
                k = {
                    'user_id': getCookie(DCvi + '_user_id'),
                    'device_id': getCookie(DCvi + '_device_id'),
                    'content_id': DCvi
                };
            userSessionCheck(k, function(o) {
                if ('LJyqM' !== 'pSUsS') {
                    var p = i.content_data = JSON.parse(JSON.stringify(o.Data.content)),
                        q = JSON.parse(JSON.stringify(o.Data.user));
                    iCM(!!q.is_mute);
                    if (!p.artist_account) {
                        if ('qEDgF' === 'LfIar') {
                            function z() {
                                if (h == 'landscape-primary' || s == 'landscape-secondary' || j == 'landscape') this.hideChatWrap(o);
                                else(l == 'portrait-primary' || m == 'portrait-secondary' || n == 'portrait') && this.showChatWrap();
                            }
                        } else a('button[name=artistchatnavbtn]').css('display', ' none');
                    } else {
                        if ('xtgNk' === 'Zhzgz') {
                            function A() {
                                var B = c.navigator.userAgent.toLowerCase(),
                                    C = B.indexOf('trident');
                                if (C > -1) return true;
                                return false;
                            }
                        } else p.artist_account.indexOf(',') !== -1 ? p.artist_account = p.artist_account.split(',') : p.artist_account = [p.artist_account], a('button[name=artistchatnavbtn]').css('display', ' inline-block');
                    }
                    if (p.cam_num > 1) i.multiViewList = document.getElementById('multiViewList'), i.use_multiview = true, a('button[name=multiviewnavbtn]').css('display', 'inline-block');
                    else {
                        if ('xHyGI' !== 'rvPau') a('button[name=multiviewnavbtn]').css('display', 'none');
                        else {
                            function B() {
                                var C = 'ac820489-d611-40e6-ba4f-539b4f83a0bf';
                            }
                        }
                    }
                    Chat.Manager.setContentData(p);
                    if (Chat.Manager.isChatUsed()) {
                        if (!q.nickname) {
                            alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                                if ('hcIqW' !== 'hcIqW') {
                                    function C() {
                                        return true;
                                    }
                                } else location.href = LUEz1;
                            });
                            return;
                        } else a('#pageWrap').removeClass().addClass('pl-t-default'), a('#chatWrap').css('display', 'block'), Chat.Manager.setPubnubAPI(q.nickname);
                    } else a('#pageWrap').removeClass().addClass('pl-t-default_nochat'), a('#chatWrap').css('display', 'none');
                    if (p.use_vod) {
                        if ('Cxuad' !== 'ydKfG') a('#playerBottomWrap').addClass('ver_vod'), a('.pl-i-live').css('display', ' none'), j.durationStart = document.getElementById('durationStart'), j.durationEnd = document.getElementById('durationEnd'), j.prev10sBtn = document.getElementById('prev10sBtn'), j.next10sBtn = document.getElementById('next10sBtn'), j.sliderArea = document.getElementById('playerSliderArea'), j.sliderArea.slider = document.getElementById('playerSlider'), j.sliderArea.slider.thumb = document.getElementById('playerSliderThumb'), j.sliderThumbnail = document.getElementById('sliderThumbnail'), j.sliderPaddingDiv = document.getElementById('sliderPaddingDiv');
                        else {
                            function C() {
                                g.addEventListener('mousedown', h.bind(s), false), j.addEventListener('touchstart', k.bind(l), false);
                            }
                        }
                    } else {
                        if ('jnnFl' === 'pXdso') {
                            function D() {
                                o(p + '_customer_id'), q(r + '_ticket_id'), s(t + '_user_id'), u(v + '_chat_id'), w(z('P_ALERT_TITLE'), A('P_ALERT_END_LIVE_DESC'), B('P_ALERT_OK'), function() {
                                    E.href = F;
                                });
                            }
                        } else a('#durationWrap').css('display', 'none');
                    }
                    i.credentials = {
                        'user_id': q.user_id,
                        'device_id': getCookie(DCvi + '_device_id'),
                        'content_id': DCvi,
                        'api_server': RSAnd
                    };
                    var r = '';
                    for (var s = 0; s < p.channels.length; s++) {
                        if ('MXWJK' !== 'IWlTz') {
                            var t = true;
                            Ythc == 'sub' && (t = false);
                            if (p.channels[s].is_main_channel == t) {
                                if ('zaoMJ' === 'zaoMJ') {
                                    r = p.channels[s].hls_url, i.content_data.current_channel_id = p.channels[s].id;
                                    break;
                                } else {
                                    function E() {
                                        if (this._player.subtitleTrack != -1) {
                                            var F = new e();
                                            if (this._bfSendSubTime.getTime() + 10000 < F) {
                                                var G = this._player.subtitleTrack;
                                                this._player.subtitleTrack = -1, this._bfSendSubTime = F, g(function() {
                                                    this._player.subtitleTrack = G;
                                                }.bind(this), 100);
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            function F() {
                                b.orientation.lock('landscape');
                            }
                        }
                    }
                    var u = r.lastIndexOf('/output'),
                        v = new Date(),
                        w = r.substr(0, u) + '/thumbnails.jpg?' + v.getTime();
                    a('#playThumbnail').css('background-image', 'url(' + w + ')'), _player = new Rich360Player(i, j, r), a(document).on('click', '#playThumbnail button', function() {
                        if ('KaEBo' !== 'KaEBo') {
                            function G() {
                                this._listener.trigger(b.RICH360_DURATION_CHANGE, this._video.duration);
                            }
                        } else b(), a(this).parent().css('display', 'none'), _player.play();
                    });
                } else {
                    function G() {
                        e.log('@@@video waiting call : ', f), this._listener.trigger(g.RICH360_WAIT, {
                            'wait': true,
                            'wait_on': h.RICH360_BUFFER
                        });
                    }
                }
            }, function(o, p) {
                if ('DKHAD' !== 'YrVii') {
                    if (p == 400 || p == 401) removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_NOT_EXIST_LOGIN_INFO_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                    else {
                        if (p == 403) removeCookie(DCvi + '_customer_id'), removeCookie(DCvi + '_ticket_id'), removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                            location.href = LUEz1;
                        });
                        else {
                            if ('EDrZI' === 'ZwCzy') {
                                function q() {
                                    var r = r[e].split('=', 2);
                                    if (r.length == 1) f[r[0]] = '';
                                    else g[r[0]] = h(r[1].replace(/\+/g, ' '));
                                }
                            } else alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_TRY_AGAIN_DESC'), gettext('P_ALERT_OK'), function() {
                                location.href = LUEz1;
                            });
                        }
                    }
                } else {
                    function r() {
                        return b();
                    }
                }
            }), a('button[name=chatnavbtn]').on('click', function() {
                a('#chatContentWrap').css('display', 'block'), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight), setTimeout(function() {
                    a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
                }, 200);
                if (isMobile()) {
                    var o = getOrientation();
                    if (typeof o == 'string') {
                        if (o == 'landscape-primary' || o == 'landscape-secondary' || o == 'landscape') {
                            if ('zvqyg' === 'pvhdP') {
                                function p() {
                                    this._video = b.createElement('video'), this._options.container.append(this._video);
                                }
                            } else a('#chatInputWrap').css('display', 'block');
                        } else a('#chatInputWrap').css('display', 'block');
                    } else {
                        if ('ZmTWQ' !== 'yBIax') a('#chatInputWrap').css('display', 'block');
                        else {
                            function q() {
                                i.Manager.checkOperationntUser(j) && (q === '[delete]' ? (w('#noticeChatWrap p[name=desc]').text(''), z('#noticeChatWrap').css('display', 'none')) : (A('#noticeChatWrap p[name=desc]').text(B), C('#noticeChatWrap').css('display', 'block')));
                            }
                        }
                    }
                } else a('#chatInputWrap').css('display', 'block');
                a('#holdChatScrollLabel').css('display', 'block'), a('#artistChatWrap').css('display', 'none'), a('#multiViewWrap').css('display', 'none'), a('button[name=chatnavbtn]').addClass('on'), a('button[name=artistchatnavbtn]').removeClass('on'), a('button[name=multiviewnavbtn]').removeClass('on');
                if (_player) {
                    if ('Tkkda' === 'Tkkda') {
                        if (_player._options.use_multiview) {
                            if ('IfFnl' === 'IfFnl') _player._player._display.showMultiPreview = false;
                            else {
                                function r() {
                                    for (var s = 0; s < g.messages.length; s++) {
                                        var t = m.messages[s].entry.update.split(n);
                                        for (var u = 0; u < t.length; u++) {
                                            var v = t[u].split(r)[0];
                                            s.Ui.displayMessage(t[u], t.messages[s].timetoken, v, true);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        function s() {
                            return true;
                        }
                    }
                }
            }), a('button[name=artistchatnavbtn]').on('click', function() {
                a('#chatContentWrap').css('display', 'none'), a('#chatInputWrap').css('display', 'none'), a('#holdChatScrollLabel').css('display', 'none'), a('#artistChatWrap').css('display', 'block'), a('#multiViewWrap').css('display', 'none'), a('button[name=chatnavbtn]').removeClass('on'), a('button[name=artistchatnavbtn]').addClass('on'), a('button[name=multiviewnavbtn]').removeClass('on'), a('#artistChatList').scrollTop(a('#artistChatList')[0].scrollHeight), a('#chatAnchor').css('display', 'none'), _player && (_player._options.use_multiview && (_player._player._display.showMultiPreview = false));
            }), a('button[name=multiviewnavbtn]').on('click', function() {
                a('#chatContentWrap').css('display', 'none'), a('#chatInputWrap').css('display', 'none'), a('#holdChatScrollLabel').css('display', 'none'), a('#artistChatWrap').css('display', 'none'), a('#multiViewWrap').css('display', 'block'), a('button[name=chatnavbtn]').removeClass('on'), a('button[name=artistchatnavbtn]').removeClass('on'), a('button[name=multiviewnavbtn]').addClass('on');
                if (_player) {
                    if (_player._options.use_multiview) {
                        if ('dCgDp' === 'vxqar') {
                            function o() {
                                this._isHideDefaultSubtitles = true;
                                var p = this._player._video.textTracks.length;
                                for (var q = 0; q < p; q++) {
                                    this._player._video.textTracks[q].mode == 'showing' && (this._player._video.textTracks[q].mode = 'hidden', e('#ccSelect', q, true));
                                }
                            }
                        } else _player._player._display.showMultiPreview = true;
                    }
                }
            }), a(document).on('click', '#multiViewList .view_wrap', function() {
                if ('vfQHR' !== 'vfQHR') {
                    function p() {
                        !this._ui.seekBar.thumbInteracting && (this.setDurationText(this._player.currentPosition, this._player.duration), this._player.currentPosition == 0 ? this._ui.seekBar.value = 0 : this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration);
                    }
                } else {
                    if (_player) {
                        if ('OLmOC' === 'VFrpX') {
                            function q() {
                                this._video.play();
                            }
                        } else {
                            if (_player._options.use_multiview) {
                                if (_player._player._video) {
                                    if (!_player._player._video.paused) {
                                        var o = _player._player.view;
                                        _player._player.view = a(this).data().view, a(this).siblings().each(function() {
                                            if (o == a(this).data().view) return;
                                        }), a();
                                    }
                                }
                            }
                        }
                    }
                }
            }), a('#stopChatScrollBtn').on('change', function() {
                Chat.Ui.setHoldChatScroll(!a(this).prop('checked'));
            }), a('#lockBtn').on('click', function() {
                if ('DkKiT' === 'DkKiT') {
                    if (a(this).hasClass('locked')) {
                        if ('EYvpi' !== 'RnWil') {
                            a(this).removeClass('locked');
                            !isMobile() && !isTablet() && !isIpadOS() && (a('#volumeBtn').css('display', 'inline-block'), a('#volumeSlider').css('display', 'inline-block'));
                            (!isIOS() || isIpadOS()) && d(_player) ? a('#qualitySelectBtn').css('display', 'block') : a('#qualitySelectBtn').css('display', 'none');
                            if (_player._player.subtitleList) {
                                if ('tExfy' === 'tExfy') _player._player.subtitleList.length && (_player._player.subtitleList[0].lang !== '' && a('#ccSelectBtn').css('display', 'block'));
                                else {
                                    function o() {
                                        var p = d();
                                        return e(f + '_device_id', p, 20160), p;
                                    }
                                }
                            } else a('#ccSelectBtn').css('display', 'none');
                            a('#fullBtn').css('display', 'block'), a('.pl-ctr-wrap').css('visibility', 'visible'), a('.pl-btm-wrap').css('visibility', 'visible');
                        } else {
                            function p() {
                                this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                            }
                        }
                    } else {
                        if ('jMVRQ' !== 'SHchy') a(this).addClass('locked'), a('#volumeBtn').css('display', 'none'), a('#volumeSlider').css('display', 'none'), a('#fullBtn').css('display', 'none'), a('#ccSelectBtn').css('display', 'none'), a('#qualitySelectBtn').css('display', 'none'), a('.pl-ctr-wrap').css('visibility', 'hidden'), a('.pl-btm-wrap').css('visibility', 'hidden');
                        else {
                            function q() {
                                b('#chatAnchor').css('display', 'block');
                            }
                        }
                    }
                } else {
                    function r() {
                        h.img && o.find('img').attr('src', '/static/imgs/c_event/' + p + '/' + q.img), l.msgClass && r.find('.user_msg').addClass(s.msgClass);
                    }
                }
            });

            function n() {
                if ('XHwTn' !== 'XHwTn') {
                    function o() {
                        var p = i.createElement('div');
                        p.dataset.view = j, k(p, 'view_wrap');
                        var q = l.createElement('label');
                        q.classList = 'view-name bolder fs_14 fc_point', this._view == m && q(p, 'on'), q.innerText = this._manifest.singleview_list[o].name, p.append(q), this._options.multiViewList.append(p), p.push(p);
                    }
                } else !document.hidden && c();
            }
            document.addEventListener('visibilitychange', n, false);
        }
    });
}(jQuery));
var requestCnt = 0,
    serverLoading = null;

function request_to_server(a, b, c, d, e) {
    var f = new XMLHttpRequest();
    f.open(a, b, true), f.withCredentials = true, f.setRequestHeader('X-CSRFToken', getCookie('csrftoken')), f.timeout = 60000;
    if (c) {
        var g = new FormData();
        for (var h in c) {
            g.append(h, c[h]);
        }
        f.send(g);
    } else {
        if ('KXHsG' === 'KXHsG') f.send();
        else {
            function i() {
                b = -1;
            }
        }
    }
    $('#loadingDiv').css('display', 'block'), requestCnt++;
    if (!serverLoading) {
        if ('uXtxj' !== 'uXtxj') {
            function j() {
                f.messages.length && k.Ui.updateNotice(l.messages[0].entry.update, m.messages[0].entry.timetoken, n.messages[0].entry.entry);
            }
        } else serverLoading = setInterval(function() {
            !requestCnt && ($('#loadingDiv').css('display', 'none'), clearInterval(serverLoading), serverLoading = null);
        }, 100);
    }
    f.onreadystatechange = function() {
        if ('cMxRA' === 'fvDlI') {
            function l() {
                this._listener.removeListener(c, d);
            }
        } else {
            if (f.readyState == XMLHttpRequest.DONE) {
                if ('NiieC' === 'nXXOt') {
                    function m() {
                        b(this._ui.pageWrap).removeClass('pl-t-fullscreen_nochat').addClass('pl-t-default_nochat');
                    }
                } else {
                    requestCnt--;
                    if (f.status == 200 || f.status == 201) {
                        if ('oYlqh' === 'IrkNr') {
                            function n() {
                                c = d;
                            }
                        } else {
                            if (d) {
                                if ('UYmqx' !== 'UYmqx') {
                                    function o() {
                                        this._is_fullscreen_button = false, e(this._dom_element).removeClass('pl-i-screen float_r').addClass('pl-i-full float_r'), this._web_ui.hideChatWrap(f()), g() && i.orientation.lock('landscape'), this.setIsFullScreen(true), this.showMultiviewBtn(false);
                                    }
                                } else d(JSON.parse(f.responseText));
                            }
                        }
                    } else {
                        console.log(f);
                        if (f.status == 0) {} else {
                            if (!e) {
                                if (f.responseText) {
                                    if ('bQhCk' === 'dtJwP') {
                                        function p() {
                                            const q = g.createElement('canvas'),
                                                r = q.getContext('2d'),
                                                s = h('#mvMainDiv'),
                                                t = i('#mvMainDiv video');
                                            return q.width = t.width(), q.height = t.height(), r.drawImage(j, 0, 0, k.width, l.height, 0, 0, s.width(), s.height()), q.toDataURL();
                                        }
                                    } else console.log(JSON.parse(f.responseText));
                                }
                            } else {
                                if ('QeqZe' !== 'QeqZe') {
                                    function q() {
                                        e('#chatInput').prop('readonly') != false && (i('#chatInput').prop('readonly', false), j('#chatInput').prop('placeholder', k('P_CHAT_INPUT_PLACEHOLDER')));
                                    }
                                } else try {
                                    if ('xFLfO' === 'bHEse') {
                                        function r() {
                                            return b.orientation.type.toLowerCase();
                                        }
                                    } else {
                                        var k = JSON.parse(f.responseText);
                                        e(k, f.status);
                                    }
                                } catch (s) {
                                    e(f.responseText, f.status);
                                }
                            }
                        }
                    }
                }
            } else {}
        }
    }, f.ontimeout = function(k) {
        console.log(k), alertPopup('fail', 'Request timeout', 'Please try again', 'OK', function() {
            if ('KMPww' !== 'BMOGI') location.reload();
            else {
                function l() {
                    i = false, j('#chatAnchor').css('display', 'none');
                    var m = k.Ui.createUserChatDiv(l.Manager.getUserId(), m.nickName, n.text, o);
                    p('#chatList').append(m);
                }
            }
        });
    };
}

function getCookie(a) {
    var b = null;
    if (document.cookie && document.cookie !== '') {
        if ('pzTwK' === 'pkvUh') {
            function f() {
                return true;
            }
        } else {
            var c = document.cookie.split(';');
            for (var d = 0; d < c.length; d++) {
                if ('uMWRs' === 'jOpkW') {
                    function g() {
                        c.log('EVENT::orientationchange'), d();
                    }
                } else {
                    var e = jQuery.trim(c[d]);
                    if (e.substring(0, a.length + 1) === a + '=') {
                        b = decodeURIComponent(e.substring(a.length + 1));
                        break;
                    }
                }
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
        if ('FGRuZ' !== 'FGRuZ') {
            function e() {
                this._isDummy = false, this._hls = new b(this._config);
            }
        } else switch (c) {
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
}, String.prototype.string = function(a) {
    var b = '',
        c = 0;
    while (c++ < a) {
        b += this;
    }
    return b;
}, String.prototype.zf = function(a) {
    return '0'.string(a - this.length) + this;
}, Number.prototype.zf = function(a) {
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
    return setCookie(a + '_device_id', b, 20160), b;
}

function clearPopupData(a) {
    var b = $('#' + a);
    b.css('display', 'none').find('#popupTitle, #popupDesc').text('');
}

function alertPopup(a, b, c, d) {
    var e = setInterval(function() {
        if ('xxjtQ' === 'xxjtQ') clearInterval(e), $('#loadingDiv').css('display', 'none'), $('#alertPopup').css('display', 'block'), $('#alertPopup p[name=title]').text(a), $('#alertPopup p[name=desc]').text(b), $('#alertPopup button[name=okbtn]').text(c), $('#alertPopup button[name=okbtn],#alertPopup button[name=closebtn]').click(function() {
            if ('tYQVw' !== 'inBSc') $('#alertPopup button[name=okbtn]').unbind('click'), clearPopupData('alertPopup'), d && (d(), d = null);
            else {
                function f() {
                    this._web_ui._isFullScreen = b;
                }
            }
        });
        else {
            function f() {
                var g = 'a9731791-ae47-429f-a599-ca07353bb501';
            }
        }
    }, 100);
}

function checkInterparkApp() {
    if (navigator.userAgent.toLowerCase().indexOf('interpark') !== -1) {
        if ('tHToM' !== 'tHToM') {
            function a() {
                this._listener.trigger(b.RICH360_ACCESS_DENIED, 'Authorization failed');
            }
        } else return true;
    }
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
    if (b > -1) return true;
    return false;
}

function checkEdgeBrowser() {
    var a = window.navigator.userAgent.toLowerCase();
    if (a.indexOf('edg') !== -1 || a.indexOf('edge') !== -1) return true;
    else {
        if ('KlKdf' === 'KlKdf') return false;
        else {
            function b() {
                this._options.container.addEventListener('mousemove', this.wakeupController.bind(this), false), this._options.container.addEventListener('mouseup', b.bind(this), false);
            }
        }
    }
}

function checkMobileAndTablet() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if ('WDsSQ' !== 'atUPU') {
            if (a.indexOf(navigator.platform.toLowerCase()) < 0) {
                if ('kZBcd' === 'ZbSgj') {
                    function d() {
                        var e = '66d65700-0799-4007-9289-ecbd17699128';
                    }
                } else return true;
            } else {
                var b = navigator.userAgent.toLowerCase(),
                    c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
                return !c ? isIpadOS() : c;
            }
        } else {
            function e() {
                g.hasOwnProperty(h) && (m[n] = o[p]);
            }
        }
    }
}

function isMobile() {
    var a = false;
    return function(b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) a = true;
    }(navigator.userAgent || navigator.vendor || window.opera), a;
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
        if ('zpTWj' === 'zpTWj') {
            if (c) c(d);
        } else {
            function e() {
                c.log(d);
            }
        }
    });
}

function hasClassName(a, b) {
    return new RegExp('(?:^|\s+)' + b + '(?:\s+|$)').test(a.className);
}

function addClassName(a, b) {
    !hasClassName(a, b) && (a.className = a.className ? [a.className, b].join(' ') : b);
}

function removeClassName(a, b) {
    if (hasClassName(a, b)) {
        var d = a.className;
        d = d.replace(new RegExp('(?:^|\s+)' + b + '(?:\s+|$)', 'g'), ' '), d = d.replace(new RegExp('^\s+', 'g'), ''), d = d.replace(new RegExp('\s+$', 'g'), ''), a.className = d.replace(new RegExp('\s+', 'g'), ' ');
    }
}

function getOrientation() {
    if (!isMobile()) {
        if ('PEsBM' === 'PEsBM') return false;
        else {
            function a() {
                if (k(l, m)) {
                    var b = u.className;
                    b = b.replace(new v('(?:^|\s+)' + w + '(?:\s+|$)', 'g'), ' '), b = b.replace(new z('^\s+', 'g'), ''), b = b.replace(new A('\s+$', 'g'), ''), B.className = b.replace(new C('\s+', 'g'), ' ');
                }
            }
        }
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
            return !c ? isIpadOS() : c;
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
    return () => {
        if ('daLiy' === 'daLiy') clearTimeout(a), $('#loadingWrap .pl_loader').addClass('stop'), a = setTimeout(function() {
            $('#loadingWrap .pl_loader').removeClass('stop');
        }, 1000);
        else {
            function b() {
                c.isSupported() ? (this._isDummy = false, this._hls = new e(this._config)) : (this._isDummy = true, this._hls = null);
            }
        }
    };
}
const delayStopLoadingPanel = delayStopLoadingPanelFactory();

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
    b.style.setProperty('--vh', a + 'px');
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
    c = d.join(' '), b.className += ' ' + c;
}

function debounce(a, b) {
    let c;
    return function() {
        const d = this,
            e = arguments;
        clearTimeout(c), c = setTimeout(() => a.apply(d, arguments), b);
    };
}
const POPUP_CONFIG = {
        'failToGetPlayerCode': function(a, b) {
            var c = null,
                d = a;
            if (d == 'zh_Hans') d = 'cn';
            if (b) c = b;
            var e = {
                'ko': {
                    'title': '알림',
                    'desc': '잠시 후 다시 시도해주세요.',
                    'btnTxt': '확인',
                    'okCallback': c
                },
                'en': {
                    'title': 'Notification',
                    'desc': 'Please try again later',
                    'btnTxt': 'OK',
                    'okCallback': c
                },
                'ja': {
                    'title': 'お知らせ',
                    'desc': 'しばらくしてから再度お試しください',
                    'btnTxt': '確認',
                    'okCallback': c
                },
                'jp': {
                    'title': 'お知らせ',
                    'desc': 'しばらくしてから再度お試しください',
                    'btnTxt': '確認',
                    'okCallback': c
                },
                'cn': {
                    'title': '提醒',
                    'desc': '请稍后再试一次',
                    'btnTxt': '确认',
                    'okCallback': c
                }
            };
            if (!e[d]) return e.en;
            return e[d];
        },
        'duplicatedNickname': function(a, b) {
            var c = null,
                d = a;
            if (d == 'zh_Hans') d = 'cn';
            if (b) c = b;
            var e = {
                'ko': {
                    'title': '알림',
                    'desc': '잠시 후 다시 시도해주세요.',
                    'btnTxt': '확인',
                    'okCallback': c
                },
                'en': {
                    'title': 'Notification',
                    'desc': 'Please try again later',
                    'btnTxt': 'OK',
                    'okCallback': c
                },
                'ja': {
                    'title': 'お知らせ',
                    'desc': 'しばらくしてから再度お試しください',
                    'btnTxt': '確認',
                    'okCallback': c
                },
                'jp': {
                    'title': 'お知らせ',
                    'desc': 'しばらくしてから再度お試しください',
                    'btnTxt': '確認',
                    'okCallback': c
                },
                'cn': {
                    'title': '提醒',
                    'desc': '请稍后再试一次',
                    'btnTxt': '确认',
                    'okCallback': c
                }
            };
            if (!e[d]) return e.en;
            return e[d];
        },
        'permissionDenied': function(a, b) {
            var c = null,
                d = a;
            if (d == 'zh_Hans') d = 'cn';
            if (d == 'ja') d = 'jp';
            if (b) c = b;
            var e = {
                'ko': {
                    'title': '알림',
                    'desc': '권한이 없습니다.',
                    'btnTxt': '확인',
                    'okCallback': c
                },
                'en': {
                    'title': 'Notification',
                    'desc': 'Permission Denied',
                    'btnTxt': 'OK',
                    'okCallback': c
                },
                'jp': {
                    'title': 'お知らせ',
                    'desc': '権限がありません',
                    'btnTxt': '確認',
                    'okCallback': c
                },
                'cn': {
                    'title': '提醒',
                    'desc': '你没有权限访问',
                    'btnTxt': '确认',
                    'okCallback': c
                }
            };
            if (!e[d]) return e.en;
            return e[d];
        },
        'authorizedByCode': function(a) {
            var b = a;
            if (b == 'zh_Hans') b = 'cn';
            if (b == 'ja') b = 'jp';
            var c = {
                'ko': {
                    'idText': 'ID',
                    'ticketText': '인증코드',
                    'authPopupTitle': '코드 인증'
                },
                'jp': {
                    'idText': 'ID',
                    'ticketText': '認証コード',
                    'authPopupTitle': 'コード認証'
                },
                'en': {
                    'idText': 'ID',
                    'ticketText': 'Auth code',
                    'authPopupTitle': 'Code authentication'
                },
                'cn': {
                    'idText': 'ID',
                    'ticketText': 'Auth code',
                    'authPopupTitle': 'Code authentication'
                }
            };
            if (!c[b]) return c.en;
            return c[b];
        }
    },
    CHAT_MESSAGE_CONFIG = {
        'placeholderOnMuteChat': function(a) {
            var b = a;
            if (b == 'zh_Hans') b = 'cn';
            var c = {
                'ko': '채팅을 사용할 수 없습니다.',
                'en': 'Live chat is currently unavailable.',
                'ja': 'チャットを使用できません',
                'jp': 'チャットを使用できません',
                'cn': '不能用聊天'
            };
            if (!c[b]) return c.en;
            return c[b];
        }
    };
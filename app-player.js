var selectArr = [],
    callbackArr = [];

function cusDD(a, b, c) {
    var d = false;
    for (var e = 0; e < selectArr.length; e++) {
        if (selectArr[e] == a) {
            callbackArr[e] = c, d = true;
            break;
        }
    }
    if (!d) {
        if ('rKNIx' === 'hVBMC') {
            function k() {
                var l = 'd8f2dfa4-8e0f-4b40-9ae6-92a7b3d15af5';
            }
        } else selectArr.push(a), callbackArr.push(c);
    }
    var f = '';
    if (!b) f = 'cusDD_default';
    else {
        if (b == 'slick dark') {
            if ('ryAfQ' === 'XpGxR') {
                function l() {
                    d.log(e, f.stack);
                }
            } else f = 'cusDD_slick_d';
        } else b == 'slick light' ? f = 'cusDD_slick_l' : f = b;
    }
    for (var g = 0; g < $(a).length; g++) {
        var h = $($(a)[g]);
        h.addClass(f + ' cusDD').changeElementType('div'), h = $($(a)[g]), h.find('option').wrapAll('<div class=\'cusDD_options\' />'), h.find('option').addClass('cusDD_opt').each(function() {
            $(this).changeElementType('div');
        }), h.prepend('<div class=\'cusDD_select\' name=title><div class=\'cusDD_arrow\'></div></div>');
        var j = h.find('div[selected=\'selected\']').length >= 1 ? $(h.find('div[selected=\'selected\']')) : $(h.find('.cusDD_opt')[0]);
        h.find('.cusDD_select').prepend(j.text());
    }
    $(document).click(function(m) {
        if ('wAsLn' !== 'wAsLn') {
            function n() {
                f.Ui.displayArtistHistoryMsg(g, h.messages[e].timetoken, j);
            }
        } else $('.cusDD_options').slideUp(200), $('.cusDD_arrow').removeClass('active');
    }), $(a).click(function(m) {
        if ('Qmqot' === 'Qmqot') {
            var n = a;
            $('.cusDD').not(n).find('.cusDD_options').slideUp(200), $('.cusDD').not(n).find('.cusDD_arrow').removeClass('active'), console.log(' select : ', n), m.stopPropagation();
            if ($(m.target).attr('id') == 'qualitySelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
                if ('Tpkuq' === 'zMQOx') {
                    function p() {
                        this._loading_on = [];
                        for (var q = 0; q < b.SIZE; q++) {
                            this._loading_on[q] = false;
                        }
                    }
                } else {
                    $('#qualityPopup').css('display', 'block');
                    return;
                }
            }
            if ($(m.target).attr('id') == 'ccSelect' && (isMobile() || isTablet() || isIpadOS() || window.innerWidth < 812)) {
                $('#subtitlePopup').css('display', 'block');
                return;
            }
            var o = 200;
            if ($(this).find('.cusDD_options').children()) {
                if ($(this).find('.cusDD_options').children().length > 30) {
                    if ('Gknuw' === 'uNmAA') {
                        function q() {
                            d.push(m[f]);
                        }
                    } else o = 0;
                }
            }
            $(this).find('.cusDD_options').slideToggle(o), $(this).find('.cusDD_arrow').toggleClass('active');
        } else {
            function r() {
                !c.hidden && m();
            }
        }
    }), $(a).find('.cusDD_opt').click(function() {
        if ('AzDFr' === 'AzDFr') {
            $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
            if (c) c($(this).data(), $(this));
        } else {
            function m() {
                return e('<' + f + '/>', g).append(h(this).contents());
            }
        }
    });
}(function(c) {
    var d = function() {
            var f = true;
            return function(g, h) {
                var i = f ? function() {
                    if (h) {
                        if ('OiOOH' === 'OiOOH') {
                            var j = h.apply(g, arguments);
                            return h = null, j;
                        } else {
                            function k() {
                                this.thumbInteracting = true;
                                var l = g.offsetX;
                                if (!l) {
                                    var m = m.target.getBoundingClientRect();
                                    l = n.targetTouches[0].pageX - m.left;
                                }
                                this.value = l * 100 / this.barDiv.offsetWidth, this.interactStartX = j.clientX || k.touches && l.touches[0].clientX, this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
                            }
                        }
                    }
                } : function() {};
                return f = false, i;
            };
        }(),
        e = d(this, function() {
            var f;
            try {
                if ('awjyp' !== 'awjyp') {
                    function n() {
                        this._hls.destroy();
                    }
                } else {
                    var g = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                    f = g();
                }
            } catch (o) {
                f = window;
            }
            var h = f.console = f.console || {},
                i = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
            for (var j = 0; j < i.length; j++) {
                var k = d.constructor.prototype.bind(d),
                    l = i[j],
                    m = h[l] || k;
                k.__proto__ = d.bind(d), k.toString = m.toString.bind(m), h[l] = k;
            }
        });
    e(), c.fn.changeElementType = function(f) {
        if ('gABhX' === 'SCmfj') {
            function h() {
                d('#chatInput').prop('readonly', false), e('#chatInput').prop('placeholder', f('P_CHAT_INPUT_PLACEHOLDER'));
            }
        } else {
            var g = {};
            c.each(this[0].attributes, function(i, j) {
                g[j.nodeName] = j.nodeValue;
            }), this.replaceWith(function() {
                return c('<' + f + '/>', g).append(c(this).contents());
            });
        }
    };
}(jQuery));

function cusDDselectOption(a, b, c) {
    $(a).find('.cusDD_opt').each(function() {
        if ($(this).data().id == b) {
            $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
            if ($(this).data().id) {
                if ('qwBPn' === 'qwBPn') $($(this).parent()).siblings('.cusDD_select').data().id = $(this).data().id;
                else {
                    function f() {
                        e.Manager.submitUpdate(f, g, h.Manager.getCtrChannel());
                    }
                }
            }
            if (c) {
                var d = '#' + $(this).parent().parent().attr('id');
                for (var e = 0; e < selectArr.length; e++) {
                    if ('TrzYj' === 'TrzYj') {
                        if (selectArr[e] == d) {
                            if (callbackArr[e]) callbackArr[e]($(this).data());
                        }
                    } else {
                        function g() {
                            return b.fromCharCode(this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255));
                        }
                    }
                }
            }
        }
    });
}(function(a) {
    'use strict';

    function b(e, f) {
        for (var g in f) {
            if ('mgybg' !== 'iulSB') {
                if (f.hasOwnProperty(g)) {
                    if ('VBFUc' === 'VBFUc') e[g] = f[g];
                    else {
                        function h() {
                            this._player._video.src = this._player._sourceBase + this._player._manifest.multiview_list[this._player._view].path;
                        }
                    }
                }
            } else {
                function i() {
                    f.Ui.enableChatInput();
                }
            }
        }
        return e;
    }

    function c(e, f) {
        for (var g = 0; g < e.length; g++) {
            if ('XyuNE' !== 'XyuNE') {
                function j() {
                    b('#chatInputWrap').css('display', 'block');
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
        if (this.closeBtn) {
            if ('uSrQY' !== 'uSrQY') {
                function e() {
                    if (0 > i) j = 0;
                    if (k > this._video.duration) l = this._video.duration;
                    m.abs(n - this._video.currentTime) > 0.5 && (this._video.currentTime = q, this._logger.addLog({
                        'event': 'seek',
                        'time': r
                    }), this._render_once_on_seek = true);
                }
            } else this.closeBtn.addEventListener('click', function(f) {
                if ('DxUlK' !== 'DxUlK') {
                    function g() {
                        var h = '3b43a92a-fc61-4676-a70d-14bffd9b98ae';
                    }
                } else f.preventDefault(), this.close();
            }.bind(this));
        }
        this.mask && this.mask.addEventListener('click', function(f) {
            if ('ieDQj' === 'ieDQj') f.preventDefault(), this.close();
            else {
                function g() {
                    return false;
                }
            }
        }.bind(this));
    }, d.prototype.open = function() {
        this.body.classList.add('has-active-menu'), this.wrapper.classList.add('has-' + this.options.type), this.menu.classList.add('is-active'), this.mask.classList.add('is-active'), this.disableMenuOpeners();
    }, d.prototype.close = function() {
        this.body.classList.remove('has-active-menu'), this.wrapper.classList.remove('has-' + this.options.type), this.menu.classList.remove('is-active'), this.mask.classList.remove('is-active'), this.enableMenuOpeners();
    }, d.prototype.disableMenuOpeners = function() {
        c(this.menuOpeners, function(e) {
            e.disabled = true;
        });
    }, d.prototype.enableMenuOpeners = function() {
        c(this.menuOpeners, function(e) {
            if ('RtrTB' === 'RfflV') {
                function f() {
                    let g = 0;
                    if (this._hls.snsInDictionary[g] == 0) g = 1;
                    let h = this._hls.snsInDictionary[g];
                    this._hls.snsInDictionary.splice(g, 1), delete this._hls.timeDictionary[h + ''];
                }
            } else e.disabled = false;
        });
    }, a.Menu = d;
}(window));
class Rich360Player {
    constructor(a, b, c) {
        this._options = a, this._ui = b, this._req_str = c, this._player = new Rich360(a, c, b, this), this._initHideCtroller = false, this._initQualityUI = false, this._initSubtitleUI = false, this._loading_on = [], this._wakeupPastTime = 0, this._timer = {
            'hidePlayerController': {
                'timer': null,
                'period': 5000
            }
        }, this._isFullScreen = true, this._thumbnailGridData = null, this.initLoadingState(), this.initEventListener();
    }
    initPlayerUI() {
        this._ui.playBtn.onclick = function() {
            if ('vOvDO' !== 'xWcsP') {
                if (this._player._ui_play) {
                    if ('qJqeM' === 'qJqeM') this.pause();
                    else {
                        function b() {
                            this._video.autoplay = false;
                        }
                    }
                } else this.play();
            } else {
                function c() {
                    var d = new b();
                    return d.format('yyyy-MM-dd HH:mm:ss:mss');
                }
            }
        }.bind(this), this._ui.volumeSlider = new customRange(this._ui.volumeSlider);
        if (isMobile() || isTablet() || isIpadOS()) {
            if ('EgsKZ' === 'EgsKZ') this._ui.volumeBtn.style.display = 'none', $(this._ui.volumeSlider).parent().css('display', 'none');
            else {
                function b() {
                    d.log(e), this._listener.trigger(f.RICH360_ACCESS_DENIED, 'Authorization failed');
                    return;
                }
            }
        } else {
            if ('MJOoF' === 'qTEZC') {
                function c() {
                    return b;
                }
            } else this._ui.volumeSlider.addEventListener('input', function() {
                if ('PwZFs' === 'PwZFs') this._ui.volumeSlider._value == 0 ? this._ui.volumeBtn.classList.add('mute') : this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.barDiv.style.backgroundImage = 'linear-gradient(to right, #fff 0%, #fff ' + this._ui.volumeSlider._value + '%, transparent ' + this._ui.volumeSlider._value + '%, transparent 100%)', this.volume(this._ui.volumeSlider._value);
                else {
                    function d() {
                        return this._video.duration;
                    }
                }
            }.bind(this)), this._ui.volumeSlider.addEventListener('seek', function(d) {
                this.volume(d.target._value);
            }.bind(this)), this._ui.volumeBtn.onclick = function() {
                if (this._ui.volumeBtn.classList.contains('mute')) {
                    if ('VSnHh' !== 'FyDfx') this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.value = this._ui.volumeSlider.beforeValue, this._ui.volumeSlider.beforeValue = 0, this.volume(this._ui.volumeSlider.value);
                    else {
                        function d() {
                            b.play();
                        }
                    }
                } else this._ui.volumeBtn.classList.add('mute'), this._ui.volumeSlider.beforeValue = this._ui.volumeSlider.value, this._ui.volumeSlider.value = 0, this.volume(this._ui.volumeSlider.value);
            }.bind(this), this._ui.volumeBtn.style.display = 'inline-block', $(this._ui.volumeSlider).parent().css('display', 'inline-block');
        }
        this._options.content_data.use_vod && (this._ui.seekBar = new customRange(this._ui.sliderArea, 0, this._ui.sliderPaddingDiv), this._ui.seekBar.addEventListener('input', function(d) {
            if ('ijQTA' !== 'HCaez') {
                this._ui.seekBar.style.backgroundImage = 'linear-gradient(to right, #ea0029 ' + d.target._value + '%, #ea0029 ' + d.target._value + '%, transparent ' + d.target._loadedValue + '%, transparent ' + d.target._loadedValue + '%)';
                if (this._ui.seekBar.thumbInteracting) {
                    if ('KNScZ' !== 'KNScZ') {
                        function f() {
                            if (m == 'Authorization failed') {
                                A.Manager.destroy();
                                if (this._player && this._player._hls) this._player._hls.destroy();
                                B(C + '_user_id'), D(E + '_chat_id'), F(G('P_ALERT_TITLE'), H('P_ALERT_AUTH_FAIL_DESC'), I('P_ALERT_OK'), function() {
                                    L.href = M;
                                });
                            }
                        }
                    } else this.viewSeekBarThumbnail(d.target._value, true);
                }
            } else {
                function g() {
                    d() ? (this._video = null, this.initialize()) : (this._hls.loadSource(g), this._hls.attachMedia(this._player._video)), this.updateThumbnail(), this._options.content_data.use_vod && this._listener.trigger(h.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.thumbnail_grid);
                }
            }
        }.bind(this)), this._ui.seekBar.paddingBar.addEventListener('mousemove', function(d) {
            if ('Khbny' === 'enABL') {
                function f() {
                    if (!k(this._video.duration)) {
                        if (0 > u) v = 0;
                        if (w > this._video.duration) z = this._video.duration;
                        A.abs(B - this._video.currentTime) > 0.5 && (this._video.currentTime = E, this._logger.addLog({
                            'event': 'seek',
                            'time': F
                        }), this._render_once_on_seek = true);
                    } else G.log('isNan');
                }
            } else this.viewSeekBarThumbnail(d.offsetX / this._ui.seekBar.clientWidth * 100);
        }.bind(this)), this._ui.seekBar.paddingBar.addEventListener('mouseout', function(d) {
            $(this._ui.sliderThumbnail).css('display', 'none');
        }.bind(this)), this._ui.seekBar.addEventListener('seek', function(d) {
            this.seek(d.target._value), $(this._ui.sliderThumbnail).css('display', 'none');
        }.bind(this)), $(this._ui.prev10sBtn).on('click', function() {
            if (this._player.currentPosition) {
                var d = this._player.currentPosition - 10;
                if (d < 0) {
                    if ('qCDeD' === 'qCDeD') d = 0;
                    else {
                        function e() {
                            this._web_ui._isFullScreen = b;
                        }
                    }
                }
                this._player.currentPosition = d;
            }
        }.bind(this)), $(this._ui.next10sBtn).on('click', function() {
            if (this._player.currentPosition) {
                var d = this._player.currentPosition + 10;
                d > this._player.duration - 1 && (d = this._player.duration - 1), this._player.currentPosition = d;
            }
        }.bind(this)));
        if (isIOS()) $(this._ui.fullBtn).on('click', function() {
            this._player._subtitleManager.showDefaultSubtitle(), !this._player._video.paused && this._player._video.webkitEnterFullscreen();
        }.bind(this));
        else {
            if ('ykOWf' !== 'ykOWf') {
                function d() {
                    var e = new h();
                    i = j + '?' + e.getTime(), k(this._ui.playThumbnail).css('background-image', ''), l(this._ui.playThumbnail).css('background-image', 'url(' + m + ')'), n(this._ui.playThumbnail).css('display', 'block');
                }
            } else this._ui.fullScreen = new FullscreenButton(this, this._ui.fullBtn);
        }
        if (isMobile()) {
            if ('wutOZ' === 'wutOZ') {
                var a = getOrientation();
                if (typeof a == 'string') {
                    if ('grVHI' === 'grVHI') {
                        if (a == 'landscape-primary' || a == 'landscape-secondary' || a == 'landscape') this.hideChatWrap();
                        else(a == 'portrait-primary' || a == 'portrait-secondary' || a == 'portrait') && this.showChatWrap();
                    } else {
                        function e() {
                            f() && (k.getElementsByTagName('video')[0].style.display = 'block'), h(), i('#chatList').scrollTop(j('#chatList')[0].scrollHeight);
                        }
                    }
                }
                $(window).on('orientationchange', function() {
                    var f = getOrientation();
                    if (typeof f == 'string') {
                        if (f == 'landscape-primary' || f == 'landscape-secondary' || f == 'landscape') {
                            if ('fVoUo' === 'UCkaD') {
                                function g() {
                                    var h = this.encrypt(d.ltstr, 16),
                                        i = '';
                                    for (var j = 0; j < 16; j++) {
                                        i += h[j];
                                    }
                                    if (i == e.rtstr) return true;
                                    else return false;
                                }
                            } else this.hideChatWrap();
                        } else(f == 'portrait-primary' || f == 'portrait-secondary' || f == 'portrait') && this.showChatWrap();
                    }
                }.bind(this));
            } else {
                function f() {
                    return -1;
                }
            }
        }
        if (this._options.content_data.use_vod) {
            if ('bxRAX' !== 'uegJE') $(this._ui.sliderPaddingDiv).width($(this._ui.sliderArea).width());
            else {
                function g() {
                    this._video.play();
                }
            }
        }
    }
    createQualityDiv(a) {
        var b = document.createElement('div');
        b.className = 'fc_default cusDD_opt', b.id = a.id, b.dataset.id = a.id, b.dataset.height = a.height;
        var c = '';
        if (b.dataset.height == 'auto') c = 'AUTO';
        else {
            if ('KBhnT' === 'VFZgH') {
                function d() {
                    c(this).attr('selected', 'selected'), d(this).addClass('on');
                }
            } else c = b.dataset.height + 'P';
        }
        return b.innerHTML = c, b;
    }
    createQualityBtn(a) {
        var b = document.createElement('button');
        b.className = 'text-btn fc_default bold', b.id = a.id, b.dataset.id = a.id, b.dataset.height = a.height;
        var c = '';
        if (b.dataset.height == 'auto') c = 'AUTO';
        else {
            if ('TvyCa' !== 'TvyCa') {
                function d() {
                    return b;
                }
            } else c = b.dataset.height + 'P';
        }
        return b.innerHTML = c, b;
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
            if ('gZFWX' === 'lZNNf') {
                function j() {
                    this._ui.volumeBtn.style.display = 'none', b(this._ui.volumeSlider).parent().css('display', 'none');
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
                if ('imDoY' !== 'naklA') {
                    if (!this._player.qualityList[d].height) continue;
                    var e = this.createQualityDiv({
                            'id': d,
                            'height': this._player.qualityList[d].height
                        }),
                        f = this.createQualityBtn({
                            'id': d,
                            'height': this._player.qualityList[d].height
                        });
                    'NAME' in this._player.qualityList[d].attrs && (e = this.createQualityDiv({
                        'id': d,
                        'height': this._player.qualityList[d].attrs.NAME
                    }), f = this.createQualityBtn({
                        'id': d,
                        'height': this._player.qualityList[d].attrs.NAME
                    }));
                    if (this._player.quality) {
                        if (this._player.quality == d) addClassName(e, 'on');
                    }
                    c.appendChild(e), $(this._ui.qualityPopup).find('.ta_c').append(f), this._ui.qualityItems.push(e), this._ui.qualityPopupItems.push(f);
                } else {
                    function k() {
                        b--;
                    }
                }
            }
            for (var g = 0; g < this._ui.qualityPopupItems.length; g++) {
                this._ui.qualityPopupItems[g].addEventListener('click', function(l) {
                    var m = null;
                    if (l.target.id == 'auto') m = -1;
                    else {
                        if ('YoWQG' !== 'YoWQG') {
                            function p() {
                                var q = d.indexOf(l);
                                if (q > -1) f.splice(q, 1);
                            }
                        } else m = parseInt(l.target.id);
                    }
                    for (var n = 0; n < this._ui.qualityPopupItems.length; n++) {
                        removeClassName(this._ui.qualityPopupItems[n], 'on');
                    }
                    l.target.classList.add('on'), this._ui.qualityPopup.style.display = 'none';
                    if (this._player.quality == m) return;
                    this._player.quality = m;
                    if (l.target.id == 'auto') {
                        if ('BGLcH' === 'BGLcH')
                            for (var o = 0; o < this._ui.qualityPopupItems.length; o++) {
                                if (this._ui.qualityPopupItems[o].id == this._player._hls.nextAutoLevel) {
                                    if ('xGmgW' === 'xGmgW') {
                                        addClassName(this._ui.qualityPopupItems[o], 'on');
                                        break;
                                    } else {
                                        function q() {
                                            this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[this._view].path);
                                        }
                                    }
                                }
                            } else {
                                function r() {
                                    this._mainDiv.removeChild(this._video), this._mainDiv.appendChild(c), this._video = d;
                                }
                            }
                    }
                }.bind(this));
            }
        }
        this._ui.qualitySelect.appendChild(c);
        var h = '#' + this._ui.qualitySelect.getAttribute('id');
        cusDD(h, null, function(l) {
            var m = null;
            $(h).find('.cusDD_opt').each(function() {
                if ('JyFNF' === 'riAtW') {
                    function n() {
                        this._listener.removeListener(c, d);
                    }
                } else $(this).data().id != l.id ? (!$(this).attr('selected') || l.id != 'auto') && ($(this).removeAttr('selected'), $(this).removeClass('on')) : ($(this).attr('selected', 'selected'), $(this).addClass('on'));
            });
            if (l.id == 'auto') {
                if ('lWZGV' !== 'lWZGV') {
                    function n() {
                        return b('#chatSendBtn').click(), false;
                    }
                } else m = -1;
            } else m = parseInt(l.id);
            this._player.quality = m;
        }.bind(this)), cusDDselectOption(h, 'auto', true), this._ui.qualitySelect = document.getElementById(this._ui.qualitySelect.getAttribute('id')), $(this._ui.qualitySelectBtn).on('click', function(l) {
            $(this._ui.qualitySelect).click(), l.stopPropagation();
        }.bind(this)), this._initQualityUI = true;
    }
    initSubtitle() {
        if (this._initSubtitleUI) {
            return;
            var a = this._ui.ccSelect.getAttribute('id');
            $(this._ui.ccSelect).find('.cusDD_opt').each(function() {
                if ($(this).attr('selected') == 'selected') {
                    if ('iITEG' !== 'KTfOU') cusDDselectOption('#' + a, $(this).data().id, true);
                    else {
                        function j() {
                            var k = g.floor(h.random() * e(j.chat_channel_num)) + 1;
                            k.push(l + '_' + k.toString());
                        }
                    }
                }
            });
            return;
        }
        this._ui.subtitlePopupItems = [];
        if (!this._player.subtitleList) {
            if ('FnrVV' === 'FnrVV') {
                this._ui.ccSelect.style.display = 'none', this._ui.ccSelectBtn.style.display = 'none';
                return;
            } else {
                function j() {
                    this._listener.trigger(b.RICH360_ACCESS_DENIED, 'Permission Denied');
                }
            }
        } else {
            if (!this._player.subtitleList.length) {
                if ('qynfv' === 'qynfv') {
                    this._ui.ccSelect.style.display = 'none', this._ui.ccSelectBtn.style.display = 'none';
                    return;
                } else {
                    function k() {
                        if (d._player) {
                            if (g._player.qualityList) return e._player.qualityList.length;
                        }
                    }
                }
            } else {
                if (!this._player.subtitleList[0].lang) {
                    if ('OVZJV' !== 'OVZJV') {
                        function l() {
                            c = d;
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
        this._ui.ccSelect.appendChild(d), $(this._ui.ccSelectBtn).on('click', function(m) {
            if ('Ravjl' !== 'fyUdT') $(this._ui.ccSelect).click(), m.stopPropagation();
            else {
                function n() {
                    if (this._isDummy) {
                        this._video.src = m;
                        if (n) this._video.currentTime = o;
                        if (p) this._video.poster = q;
                        this._video.crossOrigin = 'anonymous', this._video.disablePictureInPicture = true, this._video.oncontextmenu = function() {
                            return false;
                        }, this._video.load();
                    } else this._hls.loadSource(r);
                }
            }
        }.bind(this));
        var a = '#' + this._ui.ccSelect.getAttribute('id');
        cusDD(a, null, function(m) {
            console.log('selected ccSelect option : ', m), $(a).find('.cusDD_opt').each(function(n) {
                if ('rVoxI' !== 'PKUpw') {
                    if ($(this).data().id != m.id) $(this).removeAttr('selected'), $(this).removeClass('on');
                    else {
                        if ('Oelzv' === 'huWSY') {
                            function o() {
                                const p = this._multiviewDivArr[o];
                                var q = p.find(F => F.singleview_id === E);
                                this.selectedMultiviewCanvas(r);
                                if (q == null) return;
                                const {
                                    x: r,
                                    y: s,
                                    width: t,
                                    height: u
                                } = q, {
                                    videoWidth: v,
                                    videoHeight: w
                                } = s, {
                                    offsetWidth: z,
                                    offsetHeight: A
                                } = p;
                                t.drawImage(u, v.round(r * v), w.round(s * w), z.round(t * v), A.round(u * w), 0, A * B + C * D, z, A);
                            }
                        } else $(this).attr('selected', 'selected'), $(this).addClass('on');
                    }
                } else {
                    function p() {
                        b('#chatAnchor').css('display', 'block');
                    }
                }
            }), this._player.subtitleTrack = parseInt(m.id);
        }.bind(this)), cusDDselectOption(a, -1, true), this._ui.ccSelect = document.getElementById(this._ui.ccSelect.getAttribute('id'));
        for (var h = 0; h < this._ui.subtitlePopupItems.length; h++) {
            if ('sewkZ' !== 'sewkZ') {
                function m() {
                    var n = '35328d37-f99d-4725-98cb-bc2e445ab869';
                }
            } else this._ui.subtitlePopupItems[h].addEventListener('click', function(n) {
                $(this._ui.subtitlePopup).find('.ta_c > button').each(function() {
                    if ($(this).data().id != $(n.target).data().id) $(this).removeAttr('selected'), $(this).removeClass('on');
                    else {
                        if ('bkfZh' === 'TsiQX') {
                            function o() {
                                if (c.keyCode == 13) return e('#chatSendBtn').click(), false;
                            }
                        } else $(this).attr('selected', 'selected'), $(this).addClass('on');
                    }
                }), this._ui.subtitlePopup.style.display = 'none', this._player.subtitleTrack = parseInt($(n.target).data().id);
            }.bind(this));
        }
        this._player.subtitleTrack = -1, this._initSubtitleUI = true;
    }
    initLoadingState() {
        this._loading_on = [];
        for (var a = 0; a < RICH360_WAIT_ON.SIZE; a++) {
            this._loading_on[a] = false;
        }
    }
    initEventListener() {
        this._player.addListener(RICH360_EVENTS.RICH360_STATE_CHANGE, function(a) {
            if (a === RICH360_STATE.RICH360_INIT) {
                if ('rdLbe' === 'vrIrD') {
                    function b() {
                        b.log('fullscreen not supported');
                    }
                } else this.initPlayerUI();
            } else a === RICH360_STATE.RICH360_READY && (this.initHideCtrllerEvent(), this._ui.volumeSlider.value = this._player.volume * 100, this.initQuality());
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_QUALITY_CHANGE, function(a) {
            for (var b = 0; b < this._ui.qualityItems.length; b++) {
                if ('aFeXr' === 'aFeXr') {
                    if (this._ui.qualityItems[b].id == a) addClassName(this._ui.qualityItems[b], 'on'), $(this._ui.qualityItems[b]).attr('selected', 'selected');
                    else {
                        if (this._ui.qualityItems[b].id != 'auto' || !this._player.isAutoQuality) {
                            if ('GIbFg' !== 'JjWDM') removeClassName(this._ui.qualityItems[b], 'on'), $(this._ui.qualityItems[b]).removeAttr('selected');
                            else {
                                function d() {
                                    c(d);
                                }
                            }
                        }
                    }
                } else {
                    function e() {
                        var f = this._display,
                            g = e;
                        if (typeof f === 'undefined') g = false;
                        this._changingView = g;
                        if (!f) return;
                        if (!f._wrapperList) return;
                        g ? b(f._wrapperList, 'changing-source') : j(f._wrapperList, 'changing-source');
                    }
                }
            }
            for (var c = 0; c < this._ui.qualityPopupItems.length; c++) {
                if (this._ui.qualityPopupItems[c].id == a) addClassName(this._ui.qualityPopupItems[c], 'on');
                else(this._ui.qualityPopupItems[c].id != 'auto' || !this._player.isAutoQuality) && removeClassName(this._ui.qualityPopupItems[c], 'on');
            }
            this._player.isAutoQuality && (addClassName(this._ui.qualityItems[0], 'on'), addClassName(this._ui.qualityPopupItems[0], 'on'));
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ENDED, function() {
            if ('erLdg' !== 'erLdg') {
                function a() {
                    b(this.menuOpeners, function(b) {
                        b.disabled = true;
                    });
                }
            } else $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_WAIT, function(a) {
            this.loading(a.wait, a.wait_on);
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_DURATION_CHANGE, function() {
            if (this._options.content_data.use_vod && this._ui.seekBar) {
                if (!this._ui.seekBar.thumbInteracting) {
                    this.setDurationText(this._player.currentPosition, this._player.duration);
                    if (this._player.currentPosition == 0) {
                        if ('zXOfz' === 'XMKqR') {
                            function a() {
                                var b = '46554765-6d6b-4d43-99eb-5bbe0823613a';
                            }
                        } else this._ui.seekBar.value = 0;
                    } else this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration;
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, function(a) {
            if ('RJQpS' === 'OGiZH') {
                function b() {
                    c(this._ui.ccSelect).click(), d.stopPropagation();
                }
            } else {
                if (a) $(this._ui.playBtn).removeClass('pl-i-play').addClass('pl-i-pause'), this._ui.playThumbnail.style.display = 'none';
                else {
                    if ('LXCsp' !== 'LXCsp') {
                        function c() {
                            i(this).data().id != j.id ? (!q(this).attr('selected') || r.id != 'auto') && (u(this).removeAttr('selected'), v(this).removeClass('on')) : (w(this).attr('selected', 'selected'), z(this).addClass('on'));
                        }
                    } else $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ERROR, function(a) {
            if ('XZrcC' === 'BzWgn') {
                function b() {
                    this._updateCanvasFlag = false;
                }
            } else {
                if (a == 'Authorization failed') {
                    Chat.Manager.destroy();
                    if (this._player && this._player._hls) this._player._hls.destroy();
                    removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_AUTH_FAIL_DESC'), gettext('P_ALERT_OK'), function() {
                        if ('curnL' === 'Fikzs') {
                            function c() {
                                if (h(this._subtitleDiv.style.left.replace('px', '')) == i(j.left) && k(this._subtitleDiv.style.bottom.replace('px', '')) == l(m.bottom) && this._player._hls._hls.subtitleTrack == this._subtitleTrack && this.compareArray(this._subtitleArr, n)) return;
                            }
                        } else location.href = LUEz1;
                    });
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ACCESS_DENIED, function(a) {
            var b = POPUP_CONFIG,
                c = null;
            Chat.Manager.destroy();
            if (this._player && this._player._hls) this._player._hls.destroy();
            removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id');
            if (isIOS()) {
                if ('beoRI' !== 'XhqtG') setTimeout(function() {
                    if ('gfQMA' === 'TSQVQ') {
                        function d() {
                            d.log('@@@onpageshow'), a.pushState({}, '', f.href);
                        }
                    } else location.href = LUEz1;
                }, 3000);
                else {
                    function d() {
                        this._isDummy = false, this._hls = new b(this._config);
                    }
                }
            }
            if (a == 'Permission Denied') {
                if ('zgpaS' === 'lzcwf') {
                    function f() {
                        this._player.subtitleTrack = b;
                    }
                } else c = b.permissionDenied(egl, function() {
                    location.href = LUEz1;
                }), alertPopup(c.title, c.desc, c.btnTxt, c.okCallback);
            } else alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_LIMIT_DEVNUM_DESC'), gettext('P_ALERT_OK'), function() {
                if ('PAOos' === 'AjtTw') {
                    function g() {
                        var h = d.apply(a, arguments);
                        return f = null, h;
                    }
                } else location.href = LUEz1;
            });
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_LIVE_ENDED, function() {
            this._player._hls.destroy(), Chat.Manager.destroy(), removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id');
            if (isIOS()) {
                if ('nXLlE' === 'nXLlE') setTimeout(function() {
                    if ('JfnYa' !== 'JfnYa') {
                        function a() {
                            b(this.menuOpeners, function(b) {
                                b.disabled = false;
                            });
                        }
                    } else location.href = LUEz1;
                }, 3000);
                else {
                    function a() {
                        try {
                            var c = o.parse(p.responseText);
                            q(c, r.status);
                        } catch (d) {
                            v(w.responseText, z.status);
                        }
                    }
                }
            }
            alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_SOURCE_CHANGE, function(a) {
            this.changeSource(a);
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_SUBTITLE_FOUND, function() {
            if ('DvMrG' !== 'pimEn') this.initSubtitle();
            else {
                function a() {
                    this.viewSeekBarThumbnail(b.offsetX / this._ui.seekBar.clientWidth * 100);
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_THUMBNAIL_UPDATE, function(a) {
            if ('jyLCE' !== 'jyLCE') {
                function b() {
                    this.changeSingleView(true);
                }
            } else this.updateThumbnail(a);
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, function(a) {
            this.initSeekBarThumbnailData(a);
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
        if (c) $(this._ui.loadingDiv).css('display', 'block'), $(this._ui.loadingDiv).parent().css('display', 'block');
        else {
            if ('Dxifa' === 'Dxifa') $(this._ui.loadingDiv).css('display', 'none'), $(this._ui.loadingDiv).parent().css('display', 'none');
            else {
                function e() {
                    var f = h.className;
                    f = f.replace(new d('(?:^|\s+)' + j + '(?:\s+|$)', 'g'), ' '), f = f.replace(new k('^\s+', 'g'), ''), f = f.replace(new l('\s+$', 'g'), ''), m.className = f.replace(new n('\s+', 'g'), ' ');
                }
            }
        }
    }
    setDurationText(a, b) {
        this._ui.durationStart.innerHTML = numberPad(Math.floor(a / 3600), 2) + ':' + numberPad(Math.floor(a / 60) % 60, 2) + ':' + numberPad(Math.floor(a % 60), 2), b -= a, this._ui.durationEnd.innerHTML = '-' + numberPad(Math.floor(b / 3600), 2) + ':' + numberPad(Math.floor(b / 60) % 60, 2) + ':' + numberPad(Math.floor(b % 60), 2);
    }
    initHideCtrllerEvent() {
        if (this._initHideCtroller) return;
        this._ui.playerBottomWrap.style.display = 'block';
        !$(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true);
        if (isMobile() || isTablet() || isIpadOS()) {
            if ('Ddamp' === 'Ddamp') this._options.container.addEventListener('touchend', a.bind(this), false);
            else {
                function b() {
                    b = false;
                }
            }
        } else this._options.container.addEventListener('mousemove', this.wakeupController.bind(this), false), this._options.container.addEventListener('mouseup', a.bind(this), false);

        function a(c) {
            if ('Zmqqo' !== 'EVOyR') {
                this._wakeupPastTime = 0;
                if (!this._player._video.paused && (c.target.tagName === 'CANVAS' || c.target.tagName === 'VIDEO' || c.target === this._ui.playerBottomWrap || c.target.id == 'loadingWrap' || c.target.id == 'subtitleDiv' || c.target.parentElement.id == 'subtitleDiv')) {
                    if (this._ui.playerBottomWrap.style.display == 'block') this._ui.playerBottomWrap.style.display = 'none', this.showChatOpenBtn(false), this.setTimerHidePlayerController(false);
                    else {
                        this._ui.playerBottomWrap.style.display = 'block';
                        if (!$(this._ui.chatContents).hasClass('is-active')) {
                            if ('Ttrbv' !== 'UKbmL') this.showChatOpenBtn(true);
                            else {
                                function d() {
                                    if (g < -1) h = -1;
                                    if (i >= this._quality_list.size) j = this._quality_list.size;
                                    this.changeCurrentLevel(k), this._logger.addLog({
                                        'event': 'quality_change',
                                        'level': l
                                    });
                                }
                            }
                        }
                        this.setTimerHidePlayerController(true);
                    }
                }
                if (this._player._video.paused) {
                    if ('nFouU' !== 'nFouU') {
                        function f() {
                            var g = 'd6a2863d-9bd6-4b34-ad92-3ca1c8a0eba4';
                        }
                    } else {
                        this._ui.playerBottomWrap.style.display = 'block';
                        if (!$(this._ui.chatContents).hasClass('is-active')) {
                            if ('DHsWh' === 'hgwaL') {
                                function g() {
                                    b('#ccSelectBtn').css('display', 'block');
                                }
                            } else this.showChatOpenBtn(true);
                        }
                    }
                }
                return true;
            } else {
                function h() {
                    var i = this._manifest;
                    if (i && i.thumbnail) {
                        var j = this._sourceBase + this._manifest.thumbnail.path;
                        this._listener.trigger(d.RICH360_THUMBNAIL_UPDATE, j);
                    }
                }
            }
        }
        this.setTimerHidePlayerController(true), this._initHideCtroller = true;
    }
    setTimerHidePlayerController(a) {
        let b = a;
        if (typeof b === 'undefined') b = true;
        clearTimeout(this._timer.hidePlayerController.timer), this._timer.hidePlayerController.timer = null;
        if (b) {
            if ('XMoMv' === 'GVlBY') {
                function c() {
                    b(this._ui.playBtn).removeClass('pl-i-play').addClass('pl-i-pause'), this._ui.playThumbnail.style.display = 'none';
                }
            } else this._timer.hidePlayerController.timer = setTimeout(this.hidePlayerController.bind(this), this._timer.hidePlayerController.period);
        }
    }
    hidePlayerController() {
        var a = this._ui.volumeSlider.thumbInteracting || !this._player._ui_play;
        if (this._options.content_data.use_vod && this._ui.seekBar) {
            if ('kBluB' === 'kBluB') a = a || this._ui.seekBar.thumbInteracting;
            else {
                function b() {
                    this._video = null, this._hls = null;
                }
            }
        }
        if (a) {
            if ('rRHcG' === 'rRHcG') {
                this.wakeupController();
                return;
            } else {
                function c() {
                    for (var d = 0; d < d.length; d++) {
                        var e = g[d];
                        h(e);
                    }
                }
            }
        }
        this._ui.playerBottomWrap.style.display = 'none', this.showChatOpenBtn(false), $('.cusDD_options').slideUp(200), $('.cusDD_arrow').removeClass('active');
    }
    wakeupController(a) {
        return this._ui.playerBottomWrap.style.display = 'block', !$(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true), this._wakeupPastTime = 0, this.setTimerHidePlayerController(true), true;
    }
    hideChatWrap() {
        if ($(this._ui.pageWrap).hasClass('pl-t-default')) {
            if ('LQlkF' !== 'LQlkF') {
                function a() {
                    b.destroy();
                }
            } else $(this._ui.pageWrap).removeClass('pl-t-default').addClass('pl-t-fullscreen'), $(this._ui.chatWrap).addClass('chat_full'), $(this._ui.chatContents).removeClass('is-active'), this.showChatOpenBtn(true);
        } else $(this._ui.pageWrap).hasClass('pl-t-default_nochat') && $(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
        $(this._ui.playerBottomWrap).css('display', 'block'), $(this._ui.playerWrap).css('z-index', 'auto'), $(this._ui.playerWrap).css('position', ''), this._wakeupPastTime = 0;
    }
    showChatWrap() {
        if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen')) $(this._ui.pageWrap).removeClass('pl-t-fullscreen').addClass('pl-t-default'), $(this._ui.chatWrap).removeClass('chat_full');
        else {
            if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen_nochat')) {
                if ('UtAwM' === 'zbAIt') {
                    function b() {
                        d(e[f]);
                    }
                } else $(this._ui.pageWrap).removeClass('pl-t-fullscreen_nochat').addClass('pl-t-default_nochat');
            }
        }
        $(this._ui.playerBottomWrap).css('display', 'block'), $(this._ui.playerWrap).css('z-index', '3'), this._wakeupPastTime = 0, $(this._ui.chatContents).addClass('is-active'), this.showChatOpenBtn(false);
        if (isMobile()) {
            var a = getOrientation();
            if (typeof a == 'string') {
                if ('YtHTU' !== 'YtHTU') {
                    function c() {
                        var d = '5dc04bcd-bcdd-4add-b7bb-26995c7a166e';
                    }
                } else {
                    if (a == 'landscape-primary' || a == 'landscape-secondary' || a == 'landscape') {
                        if ('MXlcE' === 'MXlcE') $(this._ui.chatInputWrap).css('display', 'none');
                        else {
                            function d() {
                                var e = {
                                    'Data': j.stringify(k),
                                    'PartitionKey': l[0],
                                    'StreamName': 'KINESIS_CHAT'
                                };
                                m.putRecord(e, function(E, F) {
                                    if (E) z.log(E, E.stack);
                                    else {
                                        A.log(F);
                                        var G = new B();
                                        C.Ui.displayMessage(D, G.getTime() * 10000);
                                    }
                                });
                            }
                        }
                    } else {
                        if ($(this._ui.navBtnWrap).find('button[name=chatnavbtn]').hasClass('on')) {
                            if ('QAfAJ' !== 'QAfAJ') {
                                function e() {
                                    c = d;
                                }
                            } else $(this._ui.chatInputWrap).css('top', ''), $(this._ui.chatInputWrap).css('position', 'relative'), $(this._ui.chatInputWrap).css('display', 'block');
                        } else {
                            if ('AzxDM' !== 'fXgOc') $(this._ui.chatInputWrap).css('display', 'none');
                            else {
                                function f() {
                                    this._canvasTimeStamps.push(b);
                                }
                            }
                        }
                    }
                }
            } else $(this._ui.chatInputWrap).css('top', ''), $(this._ui.chatInputWrap).css('position', 'relative'), $(this._ui.chatInputWrap).css('display', 'block');
        }
        if ($(this._ui.navBtnWrap).find('button[name=multiviewnavbtn]').hasClass('on')) this._player._display && (this._player._display.showMultiPreview = true);
        else {
            if ('cKfIu' !== 'jFGGg') this._player._display && (this._player._display.showMultiPreview = false);
            else {
                function g() {
                    return /Android/i.test(b.userAgent);
                }
            }
        }
    }
    play() {
        !this._initHideCtroller && this.initHideCtrllerEvent();
        if (isIOS()) {
            if (!this._player._video.bfTime) {
                if (this._options.use_multiview) this._player._video.src = this._player._sourceBase + this._player._manifest.multiview_list[this._player._view].path;
                else {
                    if ('EEsYR' === 'cyMFp') {
                        function a() {
                            this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.value = this._ui.volumeSlider.beforeValue, this._ui.volumeSlider.beforeValue = 0, this.volume(this._ui.volumeSlider.value);
                        }
                    } else this._player._video.src = this._player._sourceBase + this._player._manifest.singleview_list[0].path;
                }
            }
        } else {
            if (this._player._hls._hls) {
                if (this._player._hls._hls.liveSyncPosition) {
                    if ('CLhDr' === 'CLhDr') this._player.currentPosition = this._player._hls._hls.liveSyncPosition;
                    else {
                        function b() {
                            return this._video.volume = b;
                        }
                    }
                }
            }
        }
        this._player.play();
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
        a && (this.pause(), this._player.changeSource(a));
    }
    updateThumbnail(a) {
        var b = new Date();
        a = a + '?' + b.getTime(), $(this._ui.playThumbnail).css('background-image', ''), $(this._ui.playThumbnail).css('background-image', 'url(' + a + ')'), $(this._ui.playThumbnail).css('display', 'block');
    }
    initSeekBarThumbnailData(a) {
        this._thumbnailGridData = JSON.parse(JSON.stringify(a));
        var b = this._req_str.lastIndexOf('/output'),
            c = new Date();
        $(this._ui.sliderThumbnail).css('background-image', 'url(' + this._req_str.substr(0, b) + '/' + this._thumbnailGridData.path + '?' + c.getTime() + ')');
    }
    viewSeekBarThumbnail(a, b) {
        if (!this._thumbnailGridData) return $(this._ui.sliderThumbnail).css('display', 'none'), false;
        if (a > 100) a = 100;
        else {
            if (a < 0) {
                if ('SdMEp' !== 'SdMEp') {
                    function m() {
                        this.subtitleTrack = this._subtitleManager._prevSubtitleTrack, this._video.play(), !e && (i(this._video).hide(), j(function() {
                            l(this._video).show(), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                        }.bind(this), 500));
                    }
                } else a = 0;
            }
        }
        var c = a / 100,
            d = this._thumbnailGridData.grid_x * this._thumbnailGridData.grid_y,
            e = Math.ceil(d * c) - 1;
        e < 0 && (e = 0);
        var f = e % 10,
            g = parseInt(e / 10);
        const h = 160,
            i = 90,
            j = $(this._ui.sliderArea.slider.thumb).width();
        var k = f * h * -1,
            l = g * i * -1;
        if (b) {
            if ('KFkOC' === 'KFkOC') $(this._ui.sliderArea.slider.thumb).append($(this._ui.sliderThumbnail)), this.setDurationText(this._thumbnailGridData.duration * c, this._thumbnailGridData.duration), $(this._ui.sliderThumbnail).css('top', ''), $(this._ui.sliderThumbnail).css('left', '');
            else {
                function n() {
                    c('#artistChatList').append(d.clone());
                }
            }
        } else $(this._ui.sliderArea).append($(this._ui.sliderThumbnail)), $(this._ui.sliderThumbnail).css('top', '-16px'), $(this._ui.sliderThumbnail).css('left', 'calc(' + a + '% + ' + j / 2 + 'px - ' + (h + j) * c + 'px)');
        return $(this._ui.sliderThumbnail).css('background-position-x', k + 'px'), $(this._ui.sliderThumbnail).css('background-position-y', l + 'px'), $(this._ui.sliderThumbnail).css('display', 'block'), true;
    }
    showChatOpenBtn(a) {
        let b = a;
        isIpadOS() && (b = false), $(this._ui.chatOpenBtn).css('display', b ? 'block' : 'none');
    }
}
var customRange = function(a, b, c) {
    var d = a;
    d.className = d.className + ' undraggable unselectable', d.barDiv = d.querySelector('div[name="bar"]'), d.thumbDiv = d.barDiv.querySelector('div[name="thumb"]'), d.thumbInteracting = false, d.interactStartX = 0, d.interactStartOffset = 0, d.beforeValue = 0;
    c && (d.paddingBar = c);
    if (b) d._value = b;
    else d._value = 0;
    d._loadedValue = 0, d.inputEvent = new Event('input'), d.seekEvent = new Event('seek'), Object.defineProperty(d, 'value', {
        'get': function i() {
            return this._value;
        },
        'set': function j(k) {
            if (k > 100) k = 100;
            else {
                if (k < 0) k = 0;
            }
            this.thumbDiv.style.left = k + '%', this._value = k, this.dispatchEvent(this.inputEvent);
        }
    });
    var e = function(k) {
            if ('hmjbj' !== 'eXbGB') this.thumbInteracting = true, this.interactStartX = k.clientX || k.touches && k.touches[0].clientX, this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
            else {
                function l() {
                    this._options.credentials.content_id = null;
                }
            }
        },
        f = function(k) {
            if (this.thumbInteracting) {
                var l = (k.clientX || k.touches && k.touches[0].clientX) - this.interactStartX,
                    m = this.interactStartOffset + l;
                if (m < 0) m = 0;
                if (m > this.barDiv.offsetWidth) m = this.barDiv.offsetWidth;
                this.value = m * 100 / this.barDiv.offsetWidth;
            }
        },
        g = function() {
            if ('JpLJV' !== 'JpLJV') {
                function k() {
                    return this._video.volume;
                }
            } else this.thumbInteracting && (this.thumbInteracting = false, this.dispatchEvent(this.seekEvent));
        },
        h = function(k) {
            if (k.target != this.thumbDiv) {
                this.thumbInteracting = true;
                var l = k.offsetX;
                if (!l) {
                    if ('mpOXS' === 'kEmFW') {
                        function n() {
                            return true;
                        }
                    } else {
                        var m = k.target.getBoundingClientRect();
                        l = k.targetTouches[0].pageX - m.left;
                    }
                }
                this.value = l * 100 / this.barDiv.offsetWidth, this.interactStartX = k.clientX || k.touches && k.touches[0].clientX, this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
            }
        };
    return d.thumbDiv.addEventListener('mousedown', e.bind(d), false), d.thumbDiv.addEventListener('touchstart', e.bind(d), false), window.addEventListener('mousemove', f.bind(d), false), window.addEventListener('touchmove', f.bind(d), false), window.addEventListener('mouseup', g.bind(d), false), window.addEventListener('touchend', g.bind(d), false), d.addEventListener('mousedown', h.bind(d), false), d.addEventListener('touchstart', h.bind(d), false), c && (c.addEventListener('mousedown', h.bind(d), false), c.addEventListener('touchstart', h.bind(d), false)), d;
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
        if (!b) return;
        const {
            navBtnWrap: c,
            chatOpenBtn: d
        } = this._web_ui._ui, e = 'button[name=multiviewnavbtn]', f = 'button[name=artistchatnavbtn]', g = 'button[name=chatnavbtn]', h = a ? 'inline-block' : 'none', i = a ? 'block' : 'none';
        $(c).find(e).css('display', h), $(d).find(e).css('display', i);
    }
    fullscreenChanged() {
        var a = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement,
            b = this;
        delayStopLoadingPanel();
        if (!a) {
            if ('MnSvB' !== 'MnSvB') {
                function d() {
                    c.originalEvent.deltaY < 0 && (e = true);
                }
            } else {
                $('body').removeClass('fullscreen'), this._is_fullscreen_button = true, $(this._dom_element).removeClass('pl-i-full float_r').addClass('pl-i-screen float_r');
                if (isMobile()) {
                    if ('tlpQT' !== 'SoEoC') {
                        var c = getOrientation();
                        if (typeof c == 'string') {
                            if (c == 'landscape-primary' || c == 'landscape-secondary' || c == 'landscape') this._web_ui.hideChatWrap();
                            else {
                                if (c == 'portrait-primary' || c == 'portrait-secondary' || c == 'portrait') {
                                    if ('jkyQo' === 'jkyQo') this._web_ui.showChatWrap();
                                    else {
                                        function e() {
                                            var f = '22575e2c-83e0-4d40-a4d7-731eabb41bee';
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        function f() {
                            this._parent_dom = this._options.container;
                        }
                    }
                } else {
                    if (isSafari()) setTimeout(function() {
                        b._web_ui.showChatWrap();
                    });
                    else {
                        if ('MdOxI' !== 'JxNbR') b._web_ui.showChatWrap();
                        else {
                            function g() {
                                var h = 'f3a82d31-a083-4679-88e1-c0961a925afb';
                            }
                        }
                    }
                }
                this.setIsFullScreen(false), this.showMultiviewBtn(true), this._web_ui.wakeupController();
            }
        } else $('body').addClass('fullscreen'), this._is_fullscreen_button = false, $(this._dom_element).removeClass('pl-i-screen float_r').addClass('pl-i-full float_r'), this._web_ui.hideChatWrap(), isMobile() && screen.orientation.lock('landscape'), this.setIsFullScreen(true), this.showMultiviewBtn(false);
        updateTicketDivPos();
    }
    onclick() {
        if (this._is_fullscreen_button) {
            if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {
                if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
                    if ('POoAj' === 'POoAj') {
                        var a = document.querySelector('html');
                        if ('requestFullscreen' in a) a.requestFullscreen();
                        else {
                            if ('webkitRequestFullscreen' in a) {
                                if ('lSBlu' === 'xOQgt') {
                                    function c() {
                                        f[g].value.playStatus && k.push(l[m].value.playStatus);
                                    }
                                } else a.webkitRequestFullscreen();
                            } else {
                                if ('mozRequestFullScreen' in a) a.mozRequestFullScreen();
                                else {
                                    if ('msRequestFullscreen' in a) {
                                        if ('KNBbn' === 'OidUD') {
                                            function d() {
                                                this._web_ui.hideChatWrap();
                                            }
                                        } else a.msRequestFullscreen();
                                    }
                                }
                            }
                        }
                        this._is_fullscreen_button = false;
                    } else {
                        function e() {
                            var f = '2e282fdc-a1ee-49b8-8ee0-a4178a74eb82';
                        }
                    }
                } else {
                    if ('xVzBx' !== 'xVzBx') {
                        function f() {
                            if (!l.nickname) {
                                w(z('P_ALERT_TITLE'), A('P_ALERT_INVALID_NICKNAME_DESC'), B('P_ALERT_OK'), function() {
                                    E.href = F;
                                });
                                return;
                            } else E('#pageWrap').removeClass().addClass('pl-t-default'), F('#chatWrap').css('display', 'block'), G.Manager.setPubnubAPI(H.nickname);
                        }
                    } else console.log('fullscreen not enabled');
                }
            } else {
                if ('CTcaT' === 'VXAMB') {
                    function g() {
                        this.events[c].listeners.push(d);
                    }
                } else console.log('fullscreen not supported');
            }
        } else {
            if ('uJFNE' !== 'YJENo') {
                var b = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                if (b && b == document.querySelector('html')) {
                    if ('Unjjv' === 'Unjjv') {
                        this._is_fullscreen_button = true;
                        if ('exitFullscreen' in document) document.exitFullscreen();
                        else {
                            if ('webkitExitFullscreen' in document) document.webkitExitFullscreen();
                            else {
                                if ('mozCancelFullScreen' in document) document.mozCancelFullScreen();
                                else {
                                    if ('msExitFullscreen' in document) {
                                        if ('kboEe' === 'WvQKh') {
                                            function h() {
                                                return false;
                                            }
                                        } else document.msExitFullscreen();
                                    }
                                }
                            }
                        }
                    } else {
                        function i() {
                            b('#subtitlePopup').css('display', 'none');
                        }
                    }
                }
            } else {
                function j() {
                    this._video = b.createElement('video'), this._options.container.append(this._video);
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
            if ('LzygB' !== 'RleSi') clearInterval(this._logItv);
            else {
                function a() {
                    b = 1080;
                }
            }
        }
        this._logItv = setInterval(this.sendLog.bind(this), 60000, false);
    }
    sendLog() {
        var a = this.getLog(),
            b = [];
        for (var c = 0; c < a.length; c++) {
            a[c].value.playStatus && b.push(a[c].value.playStatus);
        }
        this.clearLogData();
        var d = new XMLHttpRequest();
        d.open('POST', this._options.credentials.api_server + '/user_auth/session_check/', true);
        var e = new FormData();
        e.append('device_id', getCookie(DCvi + '_device_id')), e.append('user_id', getCookie(DCvi + '_user_id')), e.append('content_id', this._options.credentials.content_id), e.append('play_status', JSON.stringify(b)), e.append('user_agent', navigator.userAgent), d.send(e), d.onload = function(f) {
            if (d.readyState === 4 && d.status === 200) try {
                var g = JSON.parse(d.responseText).Data;
                for (var h = 0; h < g.content.channels.length; h++) {
                    var j = true;
                    Ythc == 'sub' && (j = false);
                    if (g.content.channels[h].is_main_channel == j) {
                        if (this._options.content_data.current_channel_id != g.content.channels[h].id) {
                            if ('YVbLp' === 'YVbLp') this._options.content_data = JSON.parse(JSON.stringify(g.content)), this._options.content_data.current_channel_id = g.content.channels[h].id, this._listener.trigger(RICH360_EVENTS.RICH360_SOURCE_CHANGE, this._options.content_data.channels[h].hls_url);
                            else {
                                function k() {
                                    g.artist_account.indexOf(',') !== -1 ? m.artist_account = n.artist_account.split(',') : o.artist_account = [p.artist_account], l('button[name=artistchatnavbtn]').css('display', ' inline-block');
                                }
                            }
                        }
                        break;
                    }
                }
                iCM(!!g.user.is_mute);
            } catch (l) {
                console.log(l);
            }
        }.bind(this), d.onloadend = function(f) {
            if ('FttMG' !== 'FttMG') {
                function g() {
                    c.href = d;
                }
            } else {
                if (d.status === 400 || d.status === 401) this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                else {
                    if (d.status === 403) {
                        if ('ffMyd' === 'ffMyd') this._listener.trigger(RICH360_EVENTS.RICH360_LIVE_ENDED, 'Live ended');
                        else {
                            function h() {
                                var j = c.navigator.userAgent.toLowerCase(),
                                    k = d();
                                return !k && j.indexOf('mac') != -1;
                            }
                        }
                    }
                }
            }
        }.bind(this);
    }
}
class Rich360EventListener {
    constructor(a) {
        this.events = [];
        for (var b in a) {
            this.events.push({
                'key': a[b],
                'listeners': []
            });
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
                this.events[a].listeners[c](b);
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
    isHlsAvailable(a, b) {
        var c = a,
            d = !d(),
            e = window.Hls.isSupported(),
            f = false;
        if (!c) return f;
        if (b) {
            if (!d && c.canPlayType('application/vnd.apple.mpegurl')) {
                if ('keEYy' === 'keEYy') f = true;
                else {
                    function g() {
                        this._player._video.textTracks[d].mode = 'hidden', e('#ccSelect', f, true);
                    }
                }
            } else e && (f = false);
        } else {
            if ('tfpxa' !== 'tfpxa') {
                function h() {
                    var i = '487a1162-30a5-4888-be0e-e670d6b91a60';
                }
            } else f = !e;
        }
        return f;
    }
    attachMedia(a) {
        this._video = a;
        if (this._isMultiview) {
            if (!isAndroid() && this._video.canPlayType('application/vnd.apple.mpegurl') || (isIOS() || isIpadOS())) {
                if ('cHtRZ' === 'cHtRZ') this._isDummy = true, this._hls = null;
                else {
                    function b() {
                        this._video = null;
                        if (!this._isDummy) this._hls.detachMedia();
                    }
                }
            } else Hls.isSupported() && (this._isDummy = false, this._hls = new Hls(this._config));
        } else {
            if (isIOS() || isIpadOS()) this._isDummy = true, this._hls = null;
            else {
                if (Hls.isSupported()) {
                    if ('xmBhO' !== 'xmBhO') {
                        function c() {
                            for (let d = 0; d < this.events[i].listeners.length; d++) {
                                m(function() {
                                    this.events[p].listeners[d](q);
                                }.bind(this), 0);
                            }
                        }
                    } else this._isDummy = false, this._hls = new Hls(this._config);
                } else {
                    if ('tzVEm' !== 'tzVEm') {
                        function d() {
                            b.log('this is not a media error, try to recover'), this._hls.startLoad();
                        }
                    } else this._isDummy = true, this._hls = null;
                }
            }
        }
        this._video.addEventListener('canplay', function() {
            this._config.startPosition != undefined && this._config.startPosition > 0 && (this._video.currentTime = this._config.startPosition);
            if (this._config.autoplay) {
                if ('FKhWo' === 'FKhWo') this._video.play();
                else {
                    function e() {
                        this._video.currentTime = this._config.startPosition;
                    }
                }
            }
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
            this._video.crossOrigin = 'anonymous', this._video.disablePictureInPicture = true, this._video.oncontextmenu = function() {
                return false;
            }, this._video.load();
        } else this._hls.loadSource(a);
    }
    release() {
        this._video = null, this._hls = null;
    }
    recoverMediaError() {
        if (this._isDummy) {} else {
            if ('aDtao' !== 'aDtao') {
                function a() {
                    this._subtitleTrack = this.getVideoSubtitleTrack();
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
        this._isDummy ? this.release() : this._hls.destroy();
    }
    isAutoQuality() {
        if (this._isDummy) return false;
        else {
            if ('aSOaB' === 'aSOaB') return this._hls.levelController.manualLevel == -1;
            else {
                function a() {
                    return '0'.string(b - this.length) + this;
                }
            }
        }
    }
    get levels() {
        return this._isDummy ? false : this._hls.levels;
    }
    get nextAutoLevel() {
        if (this._isDummy) return 0;
        else {
            if ('KVyVk' !== 'KVyVk') {
                function a() {
                    b.disabled = false;
                }
            } else return this._hls.abrController.nextAutoLevel;
        }
    }
    get currentLevel() {
        if (this._isDummy) {
            if ('YcwLc' === 'Jbcxm') {
                function a() {
                    b._player._display.showMultiPreview = true;
                }
            } else return 0;
        } else {
            if ('GrLMe' !== 'rRgln') return this._hls.currentLevel;
            else {
                function b() {
                    this._updateCanvasFlag = true, this._canvasTimeStamps = [], this._canvasTimeStamps.push(c.now()), this._canvasTimeStampIndex = 0, d.requestAnimationFrame(this.drawCanvas.bind(this));
                }
            }
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
        'RICH360_SOURCE_CHANGE': 10,
        'RICH360_THUMBNAIL_UPDATE': 11,
        'RICH360_GRID_THUMBNAIL_UPDATE': 12
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
    },
    SINGLEVIEW_PLAYER_DEFAULT_MANIFEST = {
        'type': '',
        'thumbnail': {
            'path': 'thumbnail.jpg'
        },
        'thumbnail_grid': {
            'duration': 0,
            'interval': 0,
            'grid_x': 0,
            'grid_y': 0,
            'path': ''
        },
        'singleview_count': 1,
        'singleview_list': [{
            'id': 0,
            'name': 'view_0',
            'path': ''
        }],
        'multiview_count': 0,
        'multiview_list': []
    };
class Rich360 {
    constructor(a, b, c, d) {
        this._options = a, this._ready_state = RICH360_STATE.RICH360_AUTH, this.wait_on = [];
        for (let h = 0; h < RICH360_WAIT_ON.SIZE; h++) {
            this.wait_on[h] = false;
        }
        this._ui = c, this._rich360Player = d, this._ui_play = false, this._listener = new Rich360EventListener(RICH360_EVENTS), this._logger = new Rich360Log({
            'content_data': this._options.content_data,
            'credentials': {
                'content_id': this._options.credentials.content_id,
                'api_server': this._options.credentials.api_server
            }
        }), this._logger._listener = this._listener, this._loggerItv = null, this._subtitleList = [], this._play_status = '', this.addNativeTrackListener = this.addNativeTrackListener.bind(this), this.updateNativeTrackCuesListener = this.updateNativeTrackCuesListener.bind(this);
        let e = b.substr(b.lastIndexOf('/') + 1, b.length),
            f = b.substr(0, b.lastIndexOf('/') + 1);
        var g = f + e;
        this._options.source = g;
        if ('credentials' in this._options) {
            !('device_id' in this._options.credentials) && (this._options.credentials.device_id = null);
            if (!('user_id' in this._options.credentials)) {
                if ('sMRnQ' === 'sMRnQ') this._options.credentials.user_id = null;
                else {
                    function j() {
                        c.artist_account = d.artist_account.split(',');
                    }
                }
            }!('content_id' in this._options.credentials) && (this._options.credentials.content_id = null);
            if (!('ticket_id' in this._options.credentials)) {
                if ('UWchi' === 'UWchi') this._options.credentials.ticket_id = null;
                else {
                    function k() {
                        return;
                    }
                }
            }
        } else this._options.credentials = {
            'device_id': null,
            'user_id': null,
            'content_id': null,
            'ticket_id': null
        };
        if (this._options.container) {
            if ('aZDzv' !== 'aZDzv') {
                function l() {
                    var m = 'fabb3e81-e293-4088-91a1-68efca8193ef';
                }
            } else this._parent_dom = this._options.container;
        } else this._parent_dom = document.body;
        if (this._options.use_multiview) {
            if ('JSQVR' !== 'JSQVR') {
                function m() {
                    b.withCredentials = true;
                }
            } else this.setChangingView(false);
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
            console.log(c), this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
            return;
        }.bind(this), a.onload = function(c) {
            if ('rRMuC' !== 'gmbjk') {
                console.log(c);
                if (a.readyState === 4) {
                    if ('FmdJw' !== 'LhIAQ') {
                        this.base = 'rich360', this.baseCode = [];
                        var d, f, g;
                        for (d = 0; d < 7; d++) {
                            if ('niZYX' === 'yQomD') {
                                function h() {
                                    b = 0;
                                }
                            } else this.baseCode[d] = this.base.charCodeAt(d);
                        }
                        this.addRich360 = function(l, m) {
                            let n = m % 7,
                                o = this.baseCode.slice(n, 7).concat(this.baseCode.slice(0, n + 1));
                            for (f = 0; f < 8; f++) {
                                l[f] = (l[f] + o[f]) % 256;
                            }
                            return l;
                        }.bind(this), this.encrypt = function(l, m) {
                            if (l.length != 16) return 'string length must be 16';
                            var n = [],
                                o;
                            for (o = 0; o < 16; o++) {
                                if ('jslVq' === 'yaLgI') {
                                    function s() {
                                        this.changeSource(b);
                                    }
                                } else n[o] = l.charCodeAt(o);
                            }
                            var p = n.slice(0, 8),
                                q = n.slice(8, 16);
                            for (o = 0; o < m; o++) {
                                q = this.addRich360(q, o);
                                let t = p.slice(0, 8);
                                for (g = 0; g < 8; g++) {
                                    p[g] = p[g] ^ q[g];
                                }
                                q = t.slice(0, 8);
                            }
                            var r = [];
                            for (o = 0; o < 8; o++) {
                                if ('XFfUt' !== 'mchiA') r[o] = String.fromCharCode(p[o]);
                                else {
                                    function u() {
                                        return b;
                                    }
                                }
                            }
                            for (o = 0; o < 8; o++) {
                                if ('ZNCDk' !== 'nosKN') r[o + 8] = String.fromCharCode(q[o]);
                                else {
                                    function v() {
                                        c = !d;
                                    }
                                }
                            }
                            return r;
                        }.bind(this), this.validate_response = function(l, m) {
                            var n = this.encrypt(l.ltstr, 16),
                                o = '';
                            for (var p = 0; p < 16; p++) {
                                if ('ALLNq' === 'vpFfp') {
                                    function q() {
                                        if (d) c(f);
                                    }
                                } else o += n[p];
                            }
                            if (o == m.rtstr) return true;
                            else return false;
                        }.bind(this);
                        if (!this.validate_response(a.req_data, JSON.parse(a.responseText))) {
                            if (a.status == 403) this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Permission Denied');
                            else {
                                if (a.status != 200) {
                                    this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                                    return;
                                }
                            }
                        }
                        this.base = undefined, this.baseCode = undefined, this.addRich360 = undefined, this.encrypt = undefined, this.validate_response = undefined, this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT), this._ready_state = RICH360_STATE.RICH360_INIT, this.requestKMVManifest(function() {
                            if ('XzuVq' !== 'dfKBN') this._options.content_data.use_vod && this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.thumbnail_grid), this.initialize();
                            else {
                                function l() {
                                    var m = 'chat_test',
                                        n = new d(),
                                        o = n.format('yyyyMMdd-HH:mm:ss:') + n.getMilliseconds().toString(),
                                        p = g.Manager.getChatChannels()[0];
                                    if (f) {
                                        var q = p.lastIndexOf('_');
                                        p = p.substring(0, q + 1) + q.toString();
                                    }
                                    var r = m.Manager.getUserId();
                                    n.Manager.submitUpdate(r, r + o + m + p + o, [p], true);
                                }
                            }
                        }.bind(this)), this._logger.startInterval();
                    } else {
                        function l() {
                            if (this._player._video.textTracks[d].mode == 'showing' || this._player._video.textTracks[c].mode == 'hidden') return g;
                        }
                    }
                }
            } else {
                function m() {
                    for (var n = 0; n < c.tracks.length; n++) {
                        this._subtitleList.push({
                            'id': n,
                            'label': d.tracks[n].label,
                            'lang': g.tracks[n].subtitleTrack.lang
                        });
                    }
                    this._listener.trigger(h.RICH360_SUBTITLE_FOUND);
                }
            }
        }.bind(this), a.send(b);
    }
    addListener(a, b) {
        this._listener.addListener(a, b);
        if (a == RICH360_EVENTS.RICH360_STATE_CHANGE) {
            if (this._ready_state == RICH360_STATE.RICH360_INIT) {
                if ('fFiLz' !== 'vrvSY') this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT);
                else {
                    function c() {
                        c('#pageWrap').removeClass().addClass('pl-t-default_nochat'), d('#chatWrap').css('display', 'none');
                    }
                }
            }
            if (this._ready_state == RICH360_STATE.RICH360_READY) {
                if ('ijywu' === 'ijywu') this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT), this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY);
                else {
                    function d() {
                        c.push(d);
                    }
                }
            }
        }
    }
    removeListener(a, b) {
        this._listener.removeListener(a, b);
    }
    initialize() {
        this.updateThumbnail();
        if (document.getElementById('video')) this._video = document.getElementById('video');
        else {
            if ('lsXtw' !== 'EAJfw') this._video = document.createElement('video'), this._options.container.append(this._video);
            else {
                function f() {
                    return b;
                }
            }
        }
        if (!this._options.use_multiview) {
            if ('GosaW' !== 'OqbVx') addClassName(this._video, 'player-video-wrap');
            else {
                function g() {
                    this.showChatOpenBtn(true);
                }
            }
        }
        this._video.crossOrigin = 'anonymous', this._video.disablePictureInPicture = true, this._video.oncontextmenu = function() {
            return false;
        };
        let a = Hls.DefaultConfig;
        a.liveSyncDurationCount = 3, a.startLevel = -1;
        this._options.seek_to && (a.startPosition = this._options.seek_to);
        if (this._options.autoStart) {
            if ('qEpmR' === 'qEpmR') this._video.autoplay = this._options.autoStart;
            else {
                function h() {
                    this.pause(), this._player.changeSource(b);
                }
            }
        } else this._video.autoplay = false;
        a.fragLoadingRetryDelay = 100, a.startFragPrefetch = true, a.renderTextTracksNatively = false, a.xhrSetup = function(j, k) {
            if ('EquNF' !== 'AjgIp') k.indexOf('.m3u8') === -1 && k.indexOf('.ts') === -1 && k.indexOf('.vtt') === -1 && k.indexOf('.webvtt') === -1 && k.indexOf('.key') === -1 && k.indexOf('.kmv') === -1 && (j.withCredentials = true);
            else {
                function l() {
                    this.closeBtn.addEventListener('click', function(m) {
                        m.preventDefault(), this.close();
                    }.bind(this));
                }
            }
        };
        if (this._options.use_multiview) {
            this._options.initial_view >= 0 && this._options.initial_view < this._manifest.multiview_list.length ? this._view = this._options.inital_view : this._view = 0;
            var b = [];
            for (var c = 0; c < this._manifest.multiview_list[this._view].sub_positions.length; c++) {
                if ('zQlFJ' === 'zQlFJ') {
                    var d = document.createElement('div');
                    d.dataset.view = c, addClassName(d, 'view_wrap');
                    var e = document.createElement('label');
                    e.classList = 'view-name bolder fs_14 fc_point', this._view == c && addClassName(d, 'on'), e.innerText = this._manifest.singleview_list[c].name, d.style.backgroundColor = 'transparent', d.style.zIndex = 1, d.append(e), this._options.multiViewList.append(d), b.push(d);
                } else {
                    function j() {
                        this._sourceBase = '';
                    }
                }
            }
            this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), a, this._options.use_multiview), this._hls.attachMedia(this._video), this._display = new MultiViewDisplay(this._options, this._video, this, this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions, b), this._hls.timeDictionary = {}, this._hls.snsInDictionary = [];
            if (!this._hls._isDummy) {
                if ('iaowV' === 'fTqcL') {
                    function k() {
                        c.track.mode == 'showing' && (e.track.mode = 'hidden');
                    }
                } else this._hls.on(Hls.Events.FRAG_PARSED, function(l, m) {
                    let n = m.frag;
                    console.log('curTime / this.duration : ', this._video.currentTime + '/' + this.duration), console.log('frag.startPTS : ', n.sn, n.startPTS), this._hls.timeDictionary[n.sn + ''] = n.startPTS, this._hls.snsInDictionary.push(n.sn);
                    while (this._hls.snsInDictionary.length > 100) {
                        if ('YGjUW' !== 'EMqqz') {
                            let o = 0;
                            if (this._hls.snsInDictionary[o] == 0) o = 1;
                            let p = this._hls.snsInDictionary[o];
                            this._hls.snsInDictionary.splice(o, 1), delete this._hls.timeDictionary[p + ''];
                        } else {
                            function q() {
                                c('#volumeBtn').css('display', 'inline-block'), d('#volumeSlider').css('display', 'inline-block');
                            }
                        }
                    }
                    n.startPTS == 0 && (this._hls.startSN = n.sn);
                }.bind(this));
            }
        } else {
            if ('MrmEJ' !== 'MrmEJ') {
                function l() {
                    var m = '70bebcdc-b7a9-4478-ad60-ac8925042df6';
                }
            } else this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[0].path.endsWith('.m3u8'), a, this._options.use_multiview), this._hls.attachMedia(this._video);
        }
        this.attachVideoListeners();
        !this._hls._isDummy ? this.attachHlsListeners() : (this._video.setAttribute('playsinline', ''), this._video.setAttribute('webkit-playsinline', ''));
        this._play_status = 'none';
        if (this._options.use_multiview) this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
        else {
            if ('dafOm' === 'JfuPJ') {
                function m() {
                    !this._player._video.bfTime && (this._options.use_multiview ? this._player._video.src = this._player._sourceBase + this._player._manifest.multiview_list[this._player._view].path : this._player._video.src = this._player._sourceBase + this._player._manifest.singleview_list[0].path);
                }
            } else this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[0].path);
        }
        this._subtitleManager = new Rich360SubtitleManager(this);
        if (this._loggerItv) {
            if ('HrFzm' === 'HrFzm') clearInterval(this._loggerItv), this._loggerItv = null;
            else {
                function n() {
                    this._ui.playerBottomWrap.style.display = 'block', !b(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true);
                }
            }
        }
        this._loggerItv = setInterval(function() {
            if ('gqelZ' !== 'gqelZ') {
                function o() {
                    this._hls.on(c, d);
                }
            } else this._play_status && this._video.currentTime && this._logger.addLog({
                'timePos': this._video.currentTime,
                'playStatus': this._play_status
            });
        }.bind(this), 1000);
    }
    updateThumbnail() {
        var a = this._manifest;
        if (a && a.thumbnail) {
            var b = this._sourceBase + this._manifest.thumbnail.path;
            this._listener.trigger(RICH360_EVENTS.RICH360_THUMBNAIL_UPDATE, b);
        }
    }
    requestKMVManifest(a) {
        let b = this._options.source.lastIndexOf('/');
        if (b < 0) {
            if ('sOkAH' !== 'sOkAH') {
                function d() {
                    d = e.start(f);
                }
            } else this._sourceBase = '';
        } else {
            if ('kkvOB' === 'eTlNf') {
                function e() {
                    if (q.readyState == r.DONE) {
                        if (I.status == 200 || J.status == 201) {
                            W = X.responseText.replace(/(\r\n\t|\n|\r\t)/gm, '|'), Y = Z.replace(/[\r]/gm, '');
                            a0[a1.length - 1] == '|' && (a8 = a9.substr(0, aa.length - 1));
                            a5 = true;
                            if (a6) a7();
                        }
                    }
                }
            } else this._sourceBase = this._options.source.substring(0, b) + '/';
        }
        if (this._options.source.endsWith('.kmv')) {
            var c = new XMLHttpRequest();
            c.open('GET', this._options.source), c.onreadystatechange = (() => {
                if (c.readyState == 4 && c.status == 200) {
                    this._manifest = JSON.parse(c.responseText);
                    if (a) a();
                }
            }).bind(this), c.send();
        } else {
            if (this._options.use_multiview) {
                if ('mzrzP' === 'mzrzP') this._manifest = MULTIVIEW_PLAYER_DEFAULT_MANIFEST, this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1), this._manifest.multiview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1);
                else {
                    function f() {
                        j && s--;
                        if (l <= 0) {
                            t = false, u.Ui.disableChatInput(v - w);
                            return;
                        } else z = true, A.Ui.enableChatInput();
                    }
                }
            } else {
                if ('cOKIT' === 'cOKIT') this._manifest = SINGLEVIEW_PLAYER_DEFAULT_MANIFEST, this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1), this._manifest.singleview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1);
                else {
                    function g() {
                        return true;
                    }
                }
            }
            if (a) a();
        }
    }
    set view(a) {
        if (this._changingView) return;
        if (a < 0) a = 0;
        if (a >= this._manifest.multiview_count) a = this._manifest.multiview_count - 1;
        if (this._view == a) return;
        this._subtitleManager._prevSubtitleTrack = this.subtitleTrack;
        if (this._hls._isDummy) {
            this._view = a;
            var b = this._video.currentTime;
            this._hls.detachMedia(), this._hls.destroy();
            let c = Hls.DefaultConfig;
            if (this._video.paused) c.autoplay = false;
            else c.autoplay = true;
            this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), c, this._options.use_multiview), this._hls.attachMedia(this._video);
            const {
                sub_positions: d
            } = this._manifest.multiview_list[this._view], e = d.map(f => this.resizeToCanvasImage(f));
            this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path, b, e[this._view]), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
        } else {
            this.setChangingView(true), this._prevViewId = this._view, this._view = a, this._display.arrangeVideo();
            let f = Hls.DefaultConfig;
            f.startLevel = -1;
            let g = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), f, this._options.use_multiview),
                h = document.createElement('video');
            this._newVideo = h;
            if (this._newVideo) {
                if ('ZZTrE' !== 'ZZTrE') {
                    function j() {
                        i.Manager.checkOperationntUser(j) && (q === '[delete]' ? (w('#noticeChatWrap p[name=desc]').text(''), z('#noticeChatWrap').css('display', 'none')) : (A('#noticeChatWrap p[name=desc]').text(B), C('#noticeChatWrap').css('display', 'block')));
                    }
                } else this._newVideo.disablePictureInPicture = true, this._newVideo.oncontextmenu = function() {
                    return false;
                };
            }
            h.setAttribute('playsinline', ''), h.setAttribute('preload', 'metadata'), g.attachMedia(h), g.on(Hls.Events.MEDIA_ATTACHED, function() {
                g.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
            }.bind(this)), g.timeDictionary = {}, g.snsInDictionary = [], g.firstFrag = true, g.on(Hls.Events.FRAG_PARSED, function(k, l) {
                let m = l.frag;
                g.timeDictionary[m.sn + ''] = m.startPTS, g.snsInDictionary.push(m.sn);
                while (g.snsInDictionary.length > 100) {
                    let n = 0;
                    if (g.snsInDictionary[n] == 0) n = 1;
                    let o = g.snsInDictionary[n];
                    g.snsInDictionary.splice(n, 1), delete g.timeDictionary[o + ''];
                }
                if (g.firstFrag) {
                    g.firstFrag = false, g.startSN = m.sn, g.startPTS = m.startPTS, g.readyForChange = true;
                    if (h.readyForChange) i();
                }
            }.bind(this));
            let i = function() {
                let k = this._video,
                    l = this._hls,
                    m = 0;
                if (l.timeDictionary[g.startSN + ''] != undefined) m = l.timeDictionary[g.startSN + ''] - g.startPTS;
                else {
                    if ('CJVBF' !== 'CJVBF') {
                        function r() {
                            this._listener.trigger(e.RICH360_WAIT, {
                                'wait': false,
                                'wait_on': f.RICH360_SEEK
                            }), this._listener.trigger(g.RICH360_WAIT, {
                                'wait': false,
                                'wait_on': h.RICH360_QUALITY_CHANGE
                            });
                        }
                    } else {
                        let s = -1,
                            t = -1;
                        for (let z in l.timeDictionary) {
                            if ('ZPDMs' !== 'ZPDMs') {
                                function A() {
                                    this._hls.loadSource(b);
                                }
                            } else {
                                let B = Number.parseInt(z + '');
                                if (t == -1 || B > t) t = B;
                                if (s == -1 || B < s) s = B;
                            }
                        }
                        let u = (l.timeDictionary[t + ''] - l.timeDictionary[s + '']) / (t - s),
                            w = l.timeDictionary[t + ''] + u * (g.startSN - t);
                        m = w - g.startPTS, console.error('startSN : ' + g.startSN + ' not defined in oldHLS'), console.error(l.timeDictionary), console.error('estPTS : ' + w + ' timePerSN : ' + u + ' smallestSN : ' + s + ' biggestSN : ' + t + ' newStartSN : ' + g.startSN + ' newStartPTS : ' + g.startPTS);
                    }
                }
                let n = function(C) {
                    h.pause();
                    let D = (h.currentTime - (k.currentTime - m)) * 1000;
                    console.log('@@oldHLS.timeDictionary : ', l.timeDictionary), console.log('@@timeDiff : ', m), console.log('@@newVideo.currentTime : ', h.currentTime), console.log('@@oldVideo.currentTime : ', k.currentTime), console.log('@@@ waitTime : ', D), setTimeout(function() {
                        if ('bXPMt' === 'bXPMt') h.volume = k.volume, this._subtitleManager._prevViewOffsetTime = k.currentTime - h.currentTime, this._subtitleManager._prevViewId = this._prevViewId, !k.paused && h.play(), k.pause(), g._hls.subtitleTrack = this._subtitleManager._prevSubtitleTrack, l.detachMedia(), l.destroy(), k = null, l = null, this._video = h, this._hls = g, this.attachVideoListeners(), !this._hls._isDummy && (this.attachHlsListeners(), this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, this._hls.nextAutoLevel)), this.setChangingView(false), this._display.replaceVideo(h), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                            'wait': false,
                            'wait_on': RICH360_WAIT_ON.RICH360_SEEK
                        });
                        else {
                            function E() {
                                this._subtitleDiv.id = 'subtitleDiv';
                                var F = this._subtitleDiv.style;
                                F.position = 'absolute', F.bottom = 0, F.left = 0, F.textAlign = 'center', F.fontFamily = 'sans-serif', F.fontWeight = 'bold', F.backgroundColor = 'transparent', F.color = 'white', F.display = 'none', F.verticalAlign = 'bottom', F.fontWeight = 700, F.textShadow = '#000000 0px 0px 7px', this._player._parent_dom.appendChild(this._subtitleDiv), this.setSubtitleItv();
                            }
                        }
                    }.bind(this), D >= 0 ? D : 0);
                }.bind(this);
                h.addEventListener('seeked', n, {
                    'once': true
                }), h.volume = 0;
                let o = function() {
                        console.log('seekIfPossible');
                        let C = h.buffered,
                            D = k.currentTime + 0.5 - m;
                        console.log('targetTime : ' + D + ' = ' + k.currentTime + ' + 0.5 - ' + m);
                        let E = 0;
                        for (; E < C.length; E++) {
                            if ('wDQzH' !== 'bsdfK') {
                                console.log('start(' + E + ') : ' + C.start(E)), console.log('end(' + E + ') : ' + C.end(E));
                                if (C.start(E) <= D && D + 1 <= C.end(E)) {
                                    h.currentTime = D;
                                    break;
                                }
                            } else {
                                function F() {
                                    return this._manifest.multiview_count;
                                }
                            }
                        }
                        if (E != C.length) {
                            if ('HiHCD' !== 'JaRVU') console.log('clearInterval'), clearInterval(p), clearTimeout(q);
                            else {
                                function G() {
                                    return b();
                                }
                            }
                        }
                    },
                    p = setInterval(o, 100),
                    q = setTimeout(() => {
                        console.warn('5 second limit');
                        let C = h.buffered,
                            D = k.currentTime + 0.5 - m,
                            E = 0,
                            F = 0,
                            G = 0;
                        for (G = 0; G < C.length; G++) {
                            if (C.start(G) > D) {
                                if ('KZQKE' === 'KZQKE') E = C.start(G);
                                else {
                                    function H() {
                                        e.push(f), g.push(h);
                                    }
                                }
                            }
                            C.end(G) > F && (F = C.end(G));
                        }
                        if (E) h.currentTime = E + 0.5;
                        else {
                            if ('mgrMF' !== 'DNHim') h.currentTime = F - 1;
                            else {
                                function I() {
                                    b.log('Missing Hls.');
                                    return;
                                }
                            }
                        }
                        console.log('clearInterval'), clearInterval(p);
                    }, 5000);
            }.bind(this);
            h.addEventListener('canplaythrough', function(k) {
                if ('CyjFH' !== 'BMDPl') {
                    h.readyForChange = true;
                    if (g.readyForChange) i();
                } else {
                    function l() {
                        if (!this._isDummy) this._hls.currentLevel = b;
                    }
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
        b.width = e.width(), b.height = e.height();
        var {
            videoWidth: f,
            videoHeight: g
        } = e[0];
        return c.drawImage(e[0], Math.round(a.x * f), Math.round(a.y * g), Math.round(a.width * f), Math.round(a.height * g), 0, 0, d.width(), d.height()), b.toDataURL();
    }
    changeSingleView(a) {
        var c = this._video.currentTime;
        this._subtitleManager._prevSubtitleTrack = this.subtitleTrack, this._hls.detachMedia(), this._hls.destroy();
        let d = Hls.DefaultConfig;
        if (this._video.paused) d.autoplay = false;
        else d.autoplay = true;
        this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[this._view].path.endsWith('.m3u8'), d, this._options.use_multiview), this._hls.attachMedia(this._video);
        if (a) this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[this._view].path);
        else {
            if ('VWdYO' === 'VWdYO') this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
            else {
                function e() {
                    !this._updateCanvasFlag && (this._updateCanvasFlag = true, this._canvasTimeStamps = [], this._canvasTimeStamps.push(e.now()), this._canvasTimeStampIndex = 0, f.requestAnimationFrame(this.drawCanvas.bind(this)));
                }
            }
        }
        this._video.addEventListener('loadedmetadata', function(f) {
            this.subtitleTrack = this._subtitleManager._prevSubtitleTrack, this._video.play(), !a && ($(this._video).hide(), setTimeout(function() {
                $(this._video).show(), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
            }.bind(this), 500));
        }.bind(this), {
            'once': true
        });
    }
    changeSource(a) {
        if (a) {
            if ('UTGXe' === 'UTGXe') this.requestKMVManifest(function() {
                if (isIOS()) this._video = null, this.initialize();
                else {
                    if ('fzeUC' === 'fzeUC') this._hls.loadSource(a), this._hls.attachMedia(this._player._video);
                    else {
                        function b() {
                            this.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
                        }
                    }
                }
                this.updateThumbnail(), this._options.content_data.use_vod && this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.thumbnail_grid);
            }.bind(this));
            else {
                function b() {
                    h('#chatInput').prop('readonly', true), i ? o('#chatInput').prop('placeholder', p(q('P_CHAT_ABLE_DELAY_PLACEHOLDER_%(delay)s'), {
                        'delay': r
                    }, true)) : s('#chatInput').prop('placeholder', '');
                }
            }
        }
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
            if ('psRZq' === 'igMcy') {
                function c() {
                    c.log('EVENT::orientationchange'), d();
                }
            } else this._video.play();
        }
    }
    addNativeTrackListener(a) {
        this._subtitleList = [];
        for (var b = 0; b < this._video.textTracks.length; b++) {
            this._subtitleList.push({
                'id': b,
                'label': this._video.textTracks[b].label,
                'lang': this._video.textTracks[b].language
            });
        }
        this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
        var c = a.track;
        if (this._subtitleManager._isHideDefaultSubtitles) a.track.mode == 'showing' && (a.track.mode = 'hidden');
        else {
            if ('VdAzc' === 'VdAzc') {
                if (a.track.mode == 'hidden') {
                    if ('RqyhK' === 'RqyhK') a.track.mode = 'showing';
                    else {
                        function d() {
                            if (a) {
                                if (b._player) {
                                    if (l._player.qualityList) return n._player.qualityList.length;
                                }
                            }
                            return false;
                        }
                    }
                }
            } else {
                function f() {
                    c.track.mode == 'hidden' && (a.track.mode = 'showing');
                }
            }
        }
        c.removeEventListener('cuechange', this.updateNativeTrackCuesListener), c.addEventListener('cuechange', this.updateNativeTrackCuesListener);
        if (this._options.use_multiview) {
            if ('TuAIG' === 'rrDTt') {
                function g() {
                    this._video.addEventListener('canplay', this.arrangeVideo.bind(this), {
                        'once': true
                    });
                }
            } else this.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
        }
    }
    updateNativeTrackCuesListener(a) {
        if (this._subtitleManager._isHideDefaultSubtitles) {
            if ('EhIMo' !== 'EhIMo') {
                function h() {
                    var k = c.innerHeight * 0.01,
                        l = d.document.documentElement;
                    l.style.setProperty('--vh', k + 'px');
                }
            } else {
                if (a.target.mode == 'showing') {
                    if ('dzVnU' === 'dzVnU') a.target.mode = 'hidden';
                    else {
                        function k() {
                            let l = d;
                            if (typeof l === 'undefined') l = true;
                            a(this._timer.hidePlayerController.timer), this._timer.hidePlayerController.timer = null, l && (this._timer.hidePlayerController.timer = g(this.hidePlayerController.bind(this), this._timer.hidePlayerController.period));
                        }
                    }
                }
            }
        } else a.target.mode == 'hidden' && (a.target.mode = 'showing');
        if (a.target.cues.length) {
            var b = a.target.cues.length,
                c = [];
            for (var d = 0; d < b; d++) {
                var f = -1;
                for (var g = 0; g < this._subtitleList.length; g++) {
                    if (this._subtitleList[g].lang == a.target.cues[d].track.language) {
                        f = g;
                        break;
                    }
                }
                c.push({
                    'startTime': a.target.cues[d].startTime,
                    'endTime': a.target.cues[d].endTime,
                    'text': a.target.cues[d].text,
                    'track_num': f,
                    'view': this._view
                });
            }
            this._subtitleManager.addCueData(c);
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
            if ('Putan' === 'AlXJE') {
                function a() {
                    b('button[name=multiviewnavbtn]').css('display', 'none');
                }
            } else this._play_status = 'play', this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
        }.bind(this)), this._video.addEventListener('pause', function() {
            this._play_status = 'pause', this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
        }.bind(this)), this._video.addEventListener('durationchange', function() {
            if ('WsbQK' !== 'EfSzT') this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration);
            else {
                function a() {
                    if (this._isDummy) {} else this._hls.recoverMediaError();
                }
            }
        }.bind(this)), this._video.addEventListener('timeupdate', function() {
            if ('WNyzK' !== 'WNyzK') {
                function a() {
                    c._options.use_multiview && (e._player._display.showMultiPreview = false);
                }
            } else this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration);
        }.bind(this)), this._video.addEventListener('progress', function() {
            this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_BUFFER
            });
        }.bind(this)), this._video.addEventListener('ended', function() {
            this._ui_play = false, this._listener.trigger(RICH360_EVENTS.RICH360_ENDED), this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
            }), this._play_status = 'end', this._logger.addLog({
                'event': 'end'
            });
        }.bind(this)), this._video.addEventListener('error', function() {
            console.log('Video error encountered. Running recover function'), this._hls && this._hls.recoverMediaError(), this._video.paused ? (this._ui_play = false, this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false)) : this.play_on();
        }.bind(this)), this._video.addEventListener('loadedmetadata', function() {
            if ('BtjeO' === 'SpxCz') {
                function a() {
                    var b = 'd1469f24-5e03-40db-9289-7be2c0423b1d';
                }
            } else this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY), this._ready_state = RICH360_STATE.RICH360_READY, this._hls._isDummy && (this._video.textTracks.removeEventListener('addtrack', this.addNativeTrackListener), this._video.textTracks.addEventListener('addtrack', this.addNativeTrackListener));
        }.bind(this)), this._video.addEventListener('waiting', function(a) {
            console.log('@@@video waiting call : ', a), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': true,
                'wait_on': RICH360_WAIT_ON.RICH360_BUFFER
            });
        }.bind(this)), this._video.addEventListener('playing', function(a) {
            console.log('@@@video playing call : ', a), this._hls._isDummy && (this.subtitleTrack = this._subtitleManager._prevSubtitleTrack), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_BUFFER
            }), this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
        }.bind(this)), $(this._video).bind('webkitendfullscreen webkitbeginfullscreen', function(a) {
            if (a.type == 'webkitbeginfullscreen') {
                $('body').addClass('fullscreen');
                if (this._options.use_multiview) this.changeSingleView(true);
                else {
                    if ('QUjBs' !== 'QUjBs') {
                        function b() {
                            var c = c('return (function() ' + '{}.constructor("return this")( )' + ');');
                            d = c();
                        }
                    } else this._subtitleManager._prevSubtitleTrack = this.subtitleTrack;
                }
                this._subtitleManager.showDefaultSubtitle();
            } else a.type == 'webkitendfullscreen' && ($('body').removeClass('fullscreen'), this._options.use_multiview && this.changeSingleView(false), this._subtitleManager.hideDefaultSubtitle(), this.pause_on(), this._rich360Player.hidePlayerController(), setTimeout(function() {
                this._rich360Player.wakeupController();
            }.bind(this), 100));
        }.bind(this));
    }
    attachHlsListeners() {
        this._hls.on(Hls.Events.ERROR, function(a, b) {
            if ('TvKrd' === 'TvKrd') {
                if (b.fatal) {
                    if ('rrrvP' !== 'rrrvP') {
                        function c() {
                            !this._ui.seekBar.thumbInteracting && (this.setDurationText(this._player.currentPosition, this._player.duration), this._player.currentPosition == 0 ? this._ui.seekBar.value = 0 : this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration);
                        }
                    } else switch (b.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log('fatal network error encountered, try to recover'), this._hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            let d = this._video.currentTime;
                            console.log('fatal media error encountered, try to recover');
                            b.details == Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR ? (console.log('this is not a media error, try to recover'), this._hls.startLoad()) : (this._hls.recoverMediaError(), this.play_on());
                            this._video.currentTime = d;
                            break;
                        default:
                            this._hls.destroy();
                            break;
                    }
                }
            } else {
                function e() {
                    this._subtitleList.push({
                        'id': d,
                        'label': this._video.textTracks[e].label,
                        'lang': this._video.textTracks[f].language
                    });
                }
            }
        }.bind(this)), this._hls.on(Hls.Events.MANIFEST_PARSED, function() {
            if ('Nohhe' === 'FCnOC') {
                function b() {
                    b = 100;
                }
            } else {
                this._quality_list = [];
                let c = this._hls.levels;
                for (var a in c) {
                    if ('jaVDD' === 'jaVDD') this._quality_list.push(c[a]);
                    else {
                        function d() {
                            b(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
                        }
                    }
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY), this._ready_state = RICH360_STATE.RICH360_READY;
            }
        }.bind(this)), this._hls.on(Hls.Events.LEVEL_SWITCHED, function(a, b) {
            if ('aSDRS' === 'FCkst') {
                function c() {
                    g[h] = i[j] ^ k[l];
                }
            } else this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
            }), this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, b.level);
        }.bind(this)), this._hls.on(Hls.Events.NON_NATIVE_TEXT_TRACKS_FOUND, function(a, b) {
            for (var c = 0; c < b.tracks.length; c++) {
                this._subtitleList.push({
                    'id': c,
                    'label': b.tracks[c].label,
                    'lang': b.tracks[c].subtitleTrack.lang
                });
            }
            this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
        }.bind(this)), this._hls.on(Hls.Events.CUES_PARSED, function(a, b) {
            if (this._subtitleManager) {
                var c = b.cues.length,
                    d = [];
                for (var e = 0; e < c; e++) {
                    if ('ZskSh' === 'hIQiI') {
                        function f() {
                            this._options.credentials.user_id = null;
                        }
                    } else d.push({
                        'startTime': b.cues[e].startTime,
                        'endTime': b.cues[e].endTime,
                        'text': b.cues[e].text,
                        'track_num': this._hls._hls.subtitleTrack,
                        'view': this._view
                    });
                }
                this._subtitleManager.addCueData(d);
            }
        }.bind(this));
    }
    attachPlayerUiListners() {
        this._hls._isDummy ? $(this._ui.fullBtn).on('click', function() {
            if ('PNpTb' === 'PNpTb') this._subtitleManager.showDefaultSubtitle(), !this._video.paused && this._video.webkitEnterFullscreen();
            else {
                function a() {
                    c(this._ui.qualityPopupItems[d], 'on');
                }
            }
        }.bind(this)) : this._ui.fullScreen = new FullscreenButton(this._rich360Player, this._ui.fullBtn);
    }
    changeCurrentLevel(a) {
        let b = this._hls.currentLevel;
        (a != -1 && b != a || a == -1 && this._hls.nextAutoLevel != b) && this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
            'wait': true,
            'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
        }), this._hls.currentLevel = a;
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
            if ('ObmAA' === 'vhSkE') {
                function b() {
                    f.preventDefault(), g.open(), h.style.display = 'none', i('#chatList').scrollTop(j('#chatList')[0].scrollHeight);
                }
            } else {
                if (0 > a) a = 0;
                if (a > this._video.duration) a = this._video.duration;
                if (Math.abs(a - this._video.currentTime) > 0.5) {
                    if ('whvys' === 'vzTRy') {
                        function c() {
                            this._listener.trigger(b.RICH360_ACCESS_DENIED, 'Authorization failed');
                            return;
                        }
                    } else this._video.currentTime = a, this._logger.addLog({
                        'event': 'seek',
                        'time': a
                    }), this._render_once_on_seek = true;
                }
            }
        } else {
            if ('aEEZk' !== 'aEEZk') {
                function d() {
                    var j;
                    try {
                        var k = l('return (function() ' + '{}.constructor("return this")( )' + ');');
                        j = k();
                    } catch (r) {
                        j = n;
                    }
                    var l = j.console = j.console || {},
                        m = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
                    for (var n = 0; n < m.length; n++) {
                        var o = k.constructor.prototype.bind(k),
                            p = m[n],
                            q = l[p] || o;
                        o.__proto__ = k.bind(k), o.toString = q.toString.bind(q), l[p] = o;
                    }
                }
            } else console.log('isNan');
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
                if (a == c) {
                    if ('tUgJG' === 'MJXBP') {
                        function d() {
                            c = d / 100 * 3.2;
                        }
                    } else this._video.textTracks[c].mode = 'showing';
                } else {
                    if ('jsdvm' === 'IaYtj') {
                        function e() {
                            this._ready_state == c.RICH360_INIT && this._listener.trigger(q.RICH360_STATE_CHANGE, r.RICH360_INIT), this._ready_state == l.RICH360_READY && (this._listener.trigger(s.RICH360_STATE_CHANGE, t.RICH360_INIT), this._listener.trigger(u.RICH360_STATE_CHANGE, v.RICH360_READY));
                        }
                    } else this._video.textTracks[c].mode = 'disabled';
                }
            }
        } else this._hls._hls.subtitleTrack = a;
        this._subtitleManager.clearCueData();
    }
    get subtitleTrack() {
        if (this._hls._isDummy) {
            if ('coNVf' !== 'coNVf') {
                function c() {
                    var d = '78bc66bd-0ce3-4f20-ad70-81214a977c51';
                }
            } else {
                var a = this._video.textTracks.length;
                for (var b = 0; b < a; b++) {
                    if (this._video.textTracks[b].mode == 'showing' || this._video.textTracks[b].mode == 'hidden') return b;
                }
                return -1;
            }
        } else return this._hls._hls ? this._hls._hls.subtitleTrack : -1;
    }
    get subtitleList() {
        return this._subtitleList;
    }
    setChangingView(a) {
        var b = this._display,
            c = a;
        if (typeof a === 'undefined') c = false;
        this._changingView = c;
        if (!b) return;
        if (!b._wrapperList) return;
        if (c) addClassName(b._wrapperList, 'changing-source');
        else {
            if ('MfVpF' === 'MfVpF') removeClassName(b._wrapperList, 'changing-source');
            else {
                function d() {
                    g.addEventListener('mousedown', h.bind(i), false), j.addEventListener('touchstart', k.bind(l), false);
                }
            }
        }
    }
}
class Rich360SubtitleManager {
    constructor(a) {
        this._player = a, this._subtitleDiv = document.createElement('div'), this._subtitleArr = [], this._subtitleTrack = -1, this._cues = [], this._subItv = null, this._isHideDefaultSubtitles = true, this._bfSendSubTime = new Date(), this.initialize(), this._prevSubtitleTrack = -1, this._prevViewOffsetTime = 0, this._prevViewId = -1;
    }
    initialize() {
        this._subtitleDiv.id = 'subtitleDiv';
        var a = this._subtitleDiv.style;
        a.position = 'absolute', a.bottom = 0, a.left = 0, a.textAlign = 'center', a.fontFamily = 'sans-serif', a.fontWeight = 'bold', a.backgroundColor = 'transparent', a.color = 'white', a.display = 'none', a.verticalAlign = 'bottom', a.fontWeight = 700, a.textShadow = '#000000 0px 0px 7px', this._player._parent_dom.appendChild(this._subtitleDiv), this.setSubtitleItv();
    }
    addCueData(a) {
        this._bfSendSubTime = new Date();
        for (var b = 0; b < a.length; b++) {
            if ('WPLXo' === 'YHgTA') {
                function c() {
                    I.pause();
                    let d = (J.currentTime - (K.currentTime - L)) * 1000;
                    M.log('@@oldHLS.timeDictionary : ', N.timeDictionary), O.log('@@timeDiff : ', P), Q.log('@@newVideo.currentTime : ', R.currentTime), S.log('@@oldVideo.currentTime : ', T.currentTime), U.log('@@@ waitTime : ', d), V(function() {
                        ae.volume = af.volume, this._subtitleManager._prevViewOffsetTime = ag.currentTime - ah.currentTime, this._subtitleManager._prevViewId = this._prevViewId, !ai.paused && aw.play(), ak.pause(), al._hls.subtitleTrack = this._subtitleManager._prevSubtitleTrack, am.detachMedia(), an.destroy(), ao = null, ap = null, this._video = aq, this._hls = ar, this.attachVideoListeners(), !this._hls._isDummy && (this.attachHlsListeners(), this._listener.trigger(ax.RICH360_QUALITY_CHANGE, this._hls.nextAutoLevel)), this.setChangingView(false), this._display.replaceVideo(at), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions), this._listener.trigger(au.RICH360_WAIT, {
                            'wait': false,
                            'wait_on': av.RICH360_SEEK
                        });
                    }.bind(this), d >= 0 ? d : 0);
                }
            } else this._cues.push(a[b]);
        }
    }
    clearCueData() {
        this._cues = [], this._subtitleDiv.innerHTML = '', this._subtitleDiv.style.display = 'none';
    }
    drawSubtitles() {
        var a = [];
        for (var b = 0; b < this._cues.length; b++) {
            if (this._prevViewId == this._cues[b].view) {
                if ('XGTRN' !== 'XGTRN') {
                    function w() {
                        var z = e.location.search.substr(1).split('&');
                        if (z == '') return {};
                        var A = {};
                        for (var B = 0; B < z.length; ++B) {
                            var C = z[B].split('=', 2);
                            if (C.length == 1) A[C[0]] = '';
                            else A[C[0]] = g(C[1].replace(/\+/g, ' '));
                        }
                        return A;
                    }
                } else this._cues[b].startTime += this._prevViewOffsetTime, this._cues[b].endTime += this._prevViewOffsetTime;
            }
            if (this._player._video.currentTime > this._cues[b].endTime && !this._player._options.content_data.use_vod) {
                this._cues.splice(b, 1), b--;
                continue;
            }
            if (this._player._video.currentTime >= this._cues[b].startTime && this._player._video.currentTime < this._cues[b].endTime) {
                if ('BYytk' !== 'BYytk') {
                    function z() {
                        b = 1920;
                    }
                } else {
                    var c = false;
                    for (var d = 0; d < a.length; d++) {
                        if ('XxnCS' === 'XyiGs') {
                            function A() {
                                c('.cusDD_options').slideUp(200), d('.cusDD_arrow').removeClass('active');
                            }
                        } else {
                            if (a[d].startTime == this._cues[b].startTime && a[d].endTime == this._cues[b].endTime) {
                                if ('RTWhb' !== 'uHbCG') c = true;
                                else {
                                    function B() {
                                        c = d;
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
        }
        if (!a.length) {
            this._subtitleDiv.innerHTML = '', this._subtitleDiv.style.display = 'none';
            return;
        }
        var e = this._player._parent_dom.offsetWidth,
            f = this._player._parent_dom.offsetHeight,
            g = {
                'left': e / 100 * 10,
                'bottom': f / 100 * 5
            };
        if (document.getElementById('playerBottomWrap').style.display != 'none') {
            var h = document.getElementById('playerBottomWrap').clientHeight;
            if (document.getElementById('playerBottomWrap').clientWidth < 812) {
                if ('Vvrsm' !== 'UaRCR') h = 0;
                else {
                    function C() {
                        o('#chatContentWrap').css('display', 'none'), p('#chatInputWrap').css('display', 'none'), q('#holdChatScrollLabel').css('display', 'none'), r('#artistChatWrap').css('display', 'block'), s('#multiViewWrap').css('display', 'none'), t('button[name=chatnavbtn]').removeClass('on'), u('button[name=artistchatnavbtn]').addClass('on'), v('button[name=multiviewnavbtn]').removeClass('on'), w('#artistChatList').scrollTop(z('#artistChatList')[0].scrollHeight), A('#chatAnchor').css('display', 'none'), B && (E._options.use_multiview && (G._player._display.showMultiPreview = false));
                    }
                }
            }
            g.bottom += h;
        }
        if (!this._player._hls._isDummy) {
            if ('RPddI' !== 'RZHgR') {
                if (parseInt(this._subtitleDiv.style.left.replace('px', '')) == parseInt(g.left) && parseInt(this._subtitleDiv.style.bottom.replace('px', '')) == parseInt(g.bottom) && this._player._hls._hls.subtitleTrack == this._subtitleTrack && this.compareArray(this._subtitleArr, a)) return;
            } else {
                function D() {
                    for (var E = 0; E < g.messages.length; E++) {
                        var F = m.messages[E].entry.update.split(n);
                        for (var G = 0; G < F.length; G++) {
                            var H = F[G].split(r)[0];
                            s.Ui.displayMessage(F[G], t.messages[E].timetoken, H, true);
                        }
                    }
                }
            }
        }
        var k = e / 100 * 50,
            l = e / 100 * 80,
            m = e / 100 * 2.5;
        if (e < 568) {
            if ('iFuwt' === 'iFuwt') m = e / 100 * 3.2;
            else {
                function E() {
                    f(this._ui.navBtnWrap).find('button[name=chatnavbtn]').hasClass('on') ? (k(this._ui.chatInputWrap).css('top', ''), l(this._ui.chatInputWrap).css('position', 'relative'), m(this._ui.chatInputWrap).css('display', 'block')) : n(this._ui.chatInputWrap).css('display', 'none');
                }
            }
        } else e > 1000 && (m = e / 100 * 2.2);
        var n = 2,
            o = 0,
            p = [];
        for (var b = 0; b < a.length; b++) {
            var q = a[b].text.split('\n'),
                r = q.length;
            for (var d = r - 1; d >= 0; d--) {
                if ('tLHmd' !== 'tLHmd') {
                    function F() {
                        for (var G = 1; G <= h.chat_channel_num; G++) {
                            o.push(p + '_' + G.toString());
                        }
                        k.Manager.checkArtistUser(l) && q.push(r);
                    }
                } else {
                    if (q[d] == '') continue;
                    var s = this.measureText(q[d], m) + m;
                    if (s >= l) {
                        if ('tunls' !== 'YAxfI') s = l;
                        else {
                            function G() {
                                c.push(d[0]);
                            }
                        }
                    }
                    var t = k - s / 2 - g.left;
                    p[o] = '<p style="color:white;word-break:break-all;font-weight:700;text-shadow:#000000 0px 0px 7px;padding:1px 5px;width:' + s + 'px;margin-left:' + t + 'px;margin-bottom:2px;">' + q[d] + '</p>', o++;
                    if (n == o) {
                        if ('WhbhO' === 'tDidW') {
                            function H() {
                                c = d;
                            }
                        } else break;
                    }
                }
            }
            if (n == o) break;
        }
        var u = '';
        for (var v = p.length - 1; v >= 0; v--) {
            if ('ltCQu' !== 'ltCQu') {
                function I() {
                    this.events[d].listeners[e](f);
                }
            } else u += p[v];
        }
        this._subtitleDiv.innerHTML = u, this._subtitleDiv.style.width = l + 'px', this._subtitleDiv.style.left = g.left + 'px', this._subtitleDiv.style.bottom = g.bottom + 'px', this._subtitleDiv.style.fontSize = m + 'px', this._subtitleDiv.style.display = 'block', this._subtitleArr = JSON.parse(JSON.stringify(a)), this._player._hls._isDummy ? this._subtitleTrack = this.getVideoSubtitleTrack() : this._subtitleTrack = this._player._hls._hls.subtitleTrack;
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
                if (this._player.subtitleTrack != -1) {
                    var a = new Date();
                    if (this._bfSendSubTime.getTime() + 10000 < a) {
                        var b = this._player.subtitleTrack;
                        this._player.subtitleTrack = -1, this._bfSendSubTime = a, setTimeout(function() {
                            if ('ZVbmj' === 'ojRmk') {
                                function c() {
                                    c(d._wrapperList, 'changing-source');
                                }
                            } else this._player.subtitleTrack = b;
                        }.bind(this), 100);
                    }
                }
            }
        }.bind(this), 100);
    }
    getVideoSubtitleTrack() {
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            if (this._player._video.textTracks[b].mode == 'showing' || this._player._video.textTracks[b].mode == 'hidden') {
                if ('bcGAY' !== 'jlIji') return b;
                else {
                    function c() {
                        var d = this.createSubtitleDiv(this._player.subtitleList[e]),
                            e = this.createSubtitleBtn(this._player.subtitleList[f]);
                        g.appendChild(d), this._ui.subtitlePopupItems.push(e), h(this._ui.subtitlePopup).find('.ta_c').append(e);
                    }
                }
            }
        }
        return -1;
    }
    hideDefaultSubtitle() {
        this._isHideDefaultSubtitles = true;
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            if (this._player._video.textTracks[b].mode == 'showing') {
                if ('MyjYN' !== 'LkCKU') this._player._video.textTracks[b].mode = 'hidden', cusDDselectOption('#ccSelect', b, true);
                else {
                    function c() {
                        var d = 'b1bc33a2-3f99-428f-8063-33ebe6d01c72';
                    }
                }
            }
        }
    }
    showDefaultSubtitle() {
        this._isHideDefaultSubtitles = false;
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            if ('iuNhG' === 'iuNhG') {
                if (this._player._video.textTracks[b].mode == 'hidden') {
                    if ('agkyw' === 'zEObh') {
                        function c() {
                            b(this._ui.pageWrap).removeClass('pl-t-fullscreen_nochat').addClass('pl-t-default_nochat');
                        }
                    } else this._player._video.textTracks[b].mode = 'showing';
                }
            } else {
                function d() {
                    b.getElementsByTagName('video')[0].style.display = 'none';
                }
            }
        }
    }
}
class MultiViewDisplay {
    constructor(a, b, c, d, e, f) {
        this._options = a, this._video = b, this._player = c, this._videoSubPositions = e, this._videoMainPosition = d, this._multiviewDivArr = f, this._canvasFPS = 0, this._updateCanvasFlag = false, this._showMultiPreview = false, this._multiviewCanvas = [], this._multiviewCtx = [], this._doubleBufferCanvas = [], this._bfVideoWidth = 0, this._bfVideoHeight = 0, this._wrapper = document.querySelector('#multiViewWrap'), this._wrapperList = document.querySelector('#multiViewList');
        var g = document.createElement('canvas');
        g.setAttribute('id', 'mvCanvas'), g.style.position = 'absolute', g.style.top = '0px', this._multiviewCanvas.push(g), this._multiviewCtx.push(g.getContext('2d', {
            'alpha': false
        })), $(this._wrapperList).append(g);
        var h = document.createElement('canvas');
        this._doubleBufferCanvas.push(h);
        for (var j = 0; j < this._videoSubPositions.length; j++) {
            if ('MWaht' !== 'XRAUl') {
                var k = createElementFromHTML('<div class="canvas-overlayer"><span class="label">' + gettext('MULTIVIEW_SWITCHING_VIEW') + '</span></div>');
                this._multiviewDivArr[j].append(k);
            } else {
                function l() {
                    this._video = b.getElementById('video');
                }
            }
        }
        if (this._options.container) {
            if ('QpQZX' !== 'ntwza') this._parent_dom = this._options.container;
            else {
                function m() {
                    this._player._video.textTracks[c].mode == 'hidden' && (this._player._video.textTracks[e].mode = 'showing');
                }
            }
        } else this._parent_dom = document.body;
        this._mainDiv = document.createElement('div'), this._mainDiv.setAttribute('id', 'mvMainDiv'), this._mainDiv.style.overflow = 'hidden', this._mainDiv.style.position = 'absolute', this._mainDiv.appendChild(this._video), this._parent_dom.appendChild(this._mainDiv), this._video.readyState == 0 ? this._video.addEventListener('canplay', this.arrangeVideo.bind(this), {
            'once': true
        }) : this.arrangeVideo(), window.addEventListener('resize', function() {
            setTimeout(function() {
                if ('AaZWU' !== 'YAMEU') this.arrangeVideo();
                else {
                    function n() {
                        if (f[g]) h[j](j(this).data());
                    }
                }
            }.bind(this), 200);
        }.bind(this), false), window.addEventListener('orientationchange', function() {
            setTimeout(function() {
                this.arrangeVideo();
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
        if (this._player._view != a.singleview_id)
            for (let n of this._videoSubPositions) {
                if ('vBTDX' !== 'iafPd') {
                    if (n.singleview_id == this._player._view) {
                        if ('FGVTd' === 'oZbFT') {
                            function o() {
                                this.viewSeekBarThumbnail(b.target._value, true);
                            }
                        } else {
                            a = n;
                            break;
                        }
                    }
                } else {
                    function q() {
                        this._play_status && this._video.currentTime && this._logger.addLog({
                            'timePos': this._video.currentTime,
                            'playStatus': this._play_status
                        });
                    }
                }
            }
        var b = this._video.videoWidth,
            c = this._video.videoHeight;
        !this._video.videoWidth && (b = this._bfVideoWidth);
        if (!this._video.videoHeight) {
            if ('dOtDZ' === 'XQefo') {
                function r() {
                    var s = d.navigator.userAgent.toLowerCase(),
                        t = s.indexOf('chrome') !== -1 || s.indexOf('crios') !== -1,
                        u = s.indexOf('edg') !== -1 || s.indexOf('edge') !== -1;
                    return t && !u;
                }
            } else c = this._bfVideoHeight;
        }
        this._bfVideoWidth = b, this._bfVideoHeight = c;
        let d = a.width * b / (a.height * c);
        console.log('arrangement : ' + a.width + ', ' + a.height + ' video : ' + b + ', ' + c);
        let e = this._parent_dom.offsetWidth / this._parent_dom.offsetHeight;
        console.log('videoRatio : ' + d + ' containerRatio : ' + e);
        let f, g, h, i;
        if (d > e) {
            if ('mWvAs' === 'mWvAs') console.log('videoRatio > containerRatio'), f = this._parent_dom.offsetWidth, g = this._parent_dom.offsetWidth / d, h = (this._parent_dom.offsetHeight - g) / 2, i = 0;
            else {
                function s() {
                    return this._ui.playerBottomWrap.style.display = 'block', !b(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true), this._wakeupPastTime = 0, this.setTimerHidePlayerController(true), true;
                }
            }
        } else console.log('videoRatio <= containerRatio'), g = this._parent_dom.offsetHeight, f = this._parent_dom.offsetHeight * d, i = (this._parent_dom.offsetWidth - f) / 2, h = 0;
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
        });
        if (!this._showMultiPreview) this._updateCanvasFlag = false;
        else {
            if (!this._updateCanvasFlag) {
                if ('HOePj' !== 'FdlYV') this._updateCanvasFlag = true, this._canvasTimeStamps = [], this._canvasTimeStamps.push(performance.now()), this._canvasTimeStampIndex = 0, window.requestAnimationFrame(this.drawCanvas.bind(this));
                else {
                    function t() {
                        h.img && o.find('img').attr('src', '/static/imgs/c_event/' + p + '/' + q.img), l.msgClass && r.find('.user_msg').addClass(s.msgClass);
                    }
                }
            }
        }
    }
    set showMultiPreview(a) {
        this._showMultiPreview = a, this.arrangeVideo();
    }
    selectedMultiviewCanvas(a) {
        const b = $(this._multiviewDivArr[a]);
        if (this._player._view == a) b.addClass('on');
        else b.removeClass('on');
    }
    drawCanvas(a) {
        if (this._updateCanvasFlag) {
            if ('RKGzR' === 'xjJuD') {
                function f() {
                    b.open('GET', '/static/filtering/chat_filtering_idle.txt');
                }
            } else {
                const {
                    _video: g,
                    _videoSubPositions: h
                } = this, i = this._multiviewCtx[0];
                var b = parseInt($(this._multiviewDivArr[0]).css('margin-bottom').replace('px', '')),
                    c = parseInt($(this._multiviewDivArr[0]).css('margin-left').replace('px', '')),
                    d = false;
                this._multiviewCanvas[0].width !== this._multiviewDivArr[0].clientWidth && (this._multiviewCanvas[0].width = this._multiviewDivArr[0].clientWidth, d = true);
                this._multiviewCanvas[0].height !== this._multiviewDivArr[0].clientHeight * this._multiviewDivArr.length + b * (this._multiviewDivArr.length - 1) && (this._multiviewCanvas[0].height = this._multiviewDivArr[0].clientHeight * this._multiviewDivArr.length + b * (this._multiviewDivArr.length - 1), d = true);
                var e = parseInt($(this._multiviewCanvas[0]).css('margin-left').replace('px', ''));
                if (e !== c) {
                    if ('LifZs' === 'BKvRk') {
                        function k() {
                            c('#chatList').append(d);
                        }
                    } else $(this._multiviewCanvas[0]).css('margin-left', c + 'px'), d = true;
                }
                if (!g.paused && !g.ended || d) {
                    h.forEach(((n, o) => {
                        const p = this._multiviewDivArr[o];
                        var q = h.find(B => B.singleview_id === o);
                        this.selectedMultiviewCanvas(o);
                        if (q == null) return;
                        const {
                            x: r,
                            y: s,
                            width: t,
                            height: u
                        } = q, {
                            videoWidth: v,
                            videoHeight: w
                        } = g, {
                            offsetWidth: z,
                            offsetHeight: A
                        } = p;
                        i.drawImage(g, Math.round(r * v), Math.round(s * w), Math.round(t * v), Math.round(u * w), 0, A * o + b * o, z, A);
                    }).bind(this));
                    const l = this._multiviewCanvas[0],
                        m = this._doubleBufferCanvas[0];
                    m.width = l.width, m.height = l.height, m.getContext('2d', {
                        'alpha': false
                    }).drawImage(l, 0, 0), i.drawImage(m, 0, 0);
                }
                this._canvasTimeStampIndex++;
                this._canvasTimeStampIndex >= 100 && (this._canvasTimeStampIndex = 0);
                let j = 0;
                if (this._canvasTimeStamps.length < 100) this._canvasTimeStamps.push(a);
                else {
                    if ('FAnQd' === 'mLued') {
                        function n() {
                            this.body = f.body, this.wrapper = g.querySelector(this.options.wrapper), this.mask = h.querySelector(this.options.maskId), this.menu = i.querySelector('#c-menu--' + this.options.type), this.closeBtn = this.menu.querySelector('.c-menu__close'), this.menuOpeners = j.querySelectorAll(this.options.menuOpenerClass), this._initEvents();
                        }
                    } else {
                        this._canvasTimeStamps[this._canvasTimeStampIndex] = a, j = this._canvasTimeStampIndex + 1;
                        if (j >= 100) j = 0;
                    }
                }
                this._canvasFPS = (this._canvasTimeStamps.length - 1) * 1000 / (this._canvasTimeStamps[this._canvasTimeStampIndex] - this._canvasTimeStamps[j]), setTimeout(() => window.requestAnimationFrame(this.drawCanvas.bind(this)), 10);
            }
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
        var a = '',
            b = false;
        return {
            'loadChatFilterData': function(c) {
                if (b) {
                    if ('sfakn' !== 'sfakn') {
                        function e() {
                            var f = c;
                            if (f == 'zh_Hans') f = 'cn';
                            if (f == 'ja') f = 'jp';
                            var g = {
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
                            if (!g[f]) return g.en;
                            return g[f];
                        }
                    } else {
                        if (c) c();
                        return;
                    }
                }
                var d = new XMLHttpRequest();
                if (Tira == 'IDLE') d.open('GET', '/static/filtering/chat_filtering_idle.txt');
                else {
                    if (Tira == '210417_cix') d.open('GET', '/static/filtering/chat_filtering_cix.txt');
                    else {
                        if ('rxigY' !== 'KHyzO') d.open('GET', '/static/filtering/chat_filtering.txt');
                        else {
                            function f() {
                                g[h] = (i[j] + k[l]) % 256;
                            }
                        }
                    }
                }
                d.overrideMimeType('text/plain; charset=utf-8'), d.onreadystatechange = function() {
                    if (d.readyState == XMLHttpRequest.DONE) {
                        if ('ZFpQx' !== 'MqOqq') {
                            if (d.status == 200 || d.status == 201) {
                                a = d.responseText.replace(/(\r\n\t|\n|\r\t)/gm, '|'), a = a.replace(/[\r]/gm, '');
                                if (a[a.length - 1] == '|') {
                                    if ('QQIYz' === 'QQIYz') a = a.substr(0, a.length - 1);
                                    else {
                                        function g() {
                                            e(f('P_ALERT_TITLE'), '<' + g.web_title + '>의 라이브가 진행중입니다.', h('P_ALERT_OK'));
                                        }
                                    }
                                }
                                b = true;
                                if (c) c();
                            }
                        } else {
                            function h() {
                                this.baseCode[c] = this.base.charCodeAt(d);
                            }
                        }
                    }
                }, d.send();
            },
            'filteringChatText': function(c) {
                if ('NVibt' === 'NVibt') {
                    if (!b) return;
                    var d = 'gi',
                        e = new RegExp(a, d);
                    return c.replace(e, '***');
                } else {
                    function f() {
                        b('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
                    }
                }
            },
            'checkFilteringData': function() {
                if ('qIEIx' !== 'BEVhw') return b;
                else {
                    function c() {
                        b(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
                    }
                }
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
            return u.is_chat_used;
        },
        'getChatChannels': function() {
            if ('NsFtZ' === 'VtAgE') {
                function w() {
                    var z = 'a9731791-ae47-429f-a599-ca07353bb501';
                }
            } else return j;
        },
        'setChatChannels': function() {
            if (u.chat_channel_num > 0) {
                if (Chat.Manager.checkArtistUser(n) || Chat.Manager.checkOperationntUser(n) || Chat.Manager.checkAdminUser(n)) {
                    for (var w = 1; w <= u.chat_channel_num; w++) {
                        j.push(i + '_' + w.toString());
                    }
                    Chat.Manager.checkArtistUser(n) && j.push(m);
                } else {
                    if ('xNwCI' !== 'kERZw') {
                        var z = Math.floor(Math.random() * parseInt(u.chat_channel_num)) + 1;
                        j.push(i + '_' + z.toString());
                    } else {
                        function A() {
                            b = 'AUTO';
                        }
                    }
                }
            }
        },
        'getNoticeChannel': function() {
            if ('oAMmK' === 'mKavF') {
                function w() {
                    if (h.messages.length)
                        for (var z = 0; z < o.messages.length; z++) {
                            var A = u.messages[z].entry.update.split(v);
                            for (var B = 0; B < A.length; B++) {
                                var C = A[B].split(B)[0];
                                C.Ui.displayMessage(A[B], D.messages[z].timetoken, C, true);
                            }
                        }
                }
            } else return k;
        },
        'getCtrChannel': function() {
            return l;
        },
        'setUserId': function(w) {
            if (n) return;
            !w ? n = getCookie(DCvi + '_user_id') : n = w;
        },
        'getUserId': function() {
            return n;
        },
        'setOperatorChNum': function(w) {
            o = w;
        },
        'setOperatorSelCh': function(w) {
            p = w;
        },
        'setPubnubAPI': function(w) {
            if ('acLQw' === 'sdjDp') {
                function z() {
                    p = q.Ui.createArtistChatDiv(r, s.nickName, t.text, u), v ? G.push(H[0]) : I('#chatList').append(J), C('#artistChatList').length && !D && K('#artistChatList').append(L.clone());
                }
            } else Chat.Manager.setUserId(), e = w, s = new PubNub({
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
            s.history({
                'channel': k,
                'count': 1
            }, function(z, A) {
                console.log(z, A);
                if (A) {
                    if ('vwgrb' !== 'mPtyL') A.messages.length && Chat.Ui.updateNotice(A.messages[0].entry.update, A.messages[0].entry.timetoken, A.messages[0].entry.entry);
                    else {
                        function B() {
                            this._web_ui = i, this._options = j._player._options, this._web_player = k._player, this._dom_element = l, this._dom_element.onclick = this.onclick.bind(this), this._is_fullscreen_button = true, this._dom_element.id = 'fullBtn', m.addEventListener('fullscreenchange', this.fullscreenChanged.bind(this)), n.addEventListener('webkitfullscreenchange', this.fullscreenChanged.bind(this)), o.addEventListener('mozfullscreenchange', this.fullscreenChanged.bind(this)), p.addEventListener('MSFullscreenChange', this.fullscreenChanged.bind(this));
                        }
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
                    if (A.messages.length)
                        for (var B = 0; B < A.messages.length; B++) {
                            var C = A.messages[B].entry.update.split(CHAT_MSG_SEPARATOR);
                            for (var D = 0; D < C.length; D++) {
                                var E = C[D].split(CHAT_USERID_SEPARATOR)[0];
                                Chat.Ui.displayMessage(C[D], A.messages[B].timetoken, E, true);
                            }
                        }
                }
            }), s.history({
                'channel': m,
                'count': 10000
            }, function(z, A) {
                console.log(z, A);
                if (A) {
                    var B = JSON.parse(JSON.stringify(A));
                    if (B.messages.length) {
                        for (var C = 0; C < B.messages.length; C++) {
                            var D = B.messages[C].entry.update,
                                E = D.split(CHAT_USERID_SEPARATOR)[0];
                            E && Chat.Ui.displayArtistHistoryMsg(D, B.messages[C].timetoken, E);
                        }
                        if ($('#artistChatList').length) {
                            if ('Ripwd' !== 'Ripwd') {
                                function F() {
                                    o(p + '_customer_id'), q(r + '_ticket_id'), s(t + '_user_id'), u(v + '_chat_id'), w(z('P_ALERT_TITLE'), A('P_ALERT_END_LIVE_DESC'), B('P_ALERT_OK'), function() {
                                        E.href = F;
                                    });
                                }
                            } else $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
                        }
                    }
                }
            });
        },
        'initPubnubEvent': function() {
            if ('NLyoj' !== 'NLyoj') {
                function A() {
                    d(), e('#chatAnchor').css('display', 'none'), f.Ui.setResizingPage(false);
                }
            } else {
                var w = [k, l];
                if (p) {
                    if ('HHWUC' === 'HHWUC') w.push(j[p - 1]);
                    else {
                        function B() {
                            b.webkitRequestFullscreen();
                        }
                    }
                } else {
                    !o && (o = 1);
                    for (var z = 0; z < o; z++) {
                        w.push(j[z]);
                    }
                }
                s.addListener({
                    'status': function(C) {
                        console.log('[STATUS: ' + C.category + ']', 'connected to channels: ' + C.affectedChannels), C.category == 'PNConnectedCategory' && (ChatFilter.loadChatFilterData(), Chat.Manager.initChatInterval());
                    },
                    'message': function(C) {
                        if ('LDyod' !== 'PxElT') {
                            if (C.channel == k) Chat.Ui.updateNotice(C.message.update, C.timetoken, C.message.entry);
                            else {
                                if (C.channel == l) Chat.Ui.recvCtrlChMsg(C.message.update);
                                else {
                                    var D = C.message.update.split(CHAT_MSG_SEPARATOR);
                                    for (var E = 0; E < D.length; E++) {
                                        var F = D[E].split(CHAT_USERID_SEPARATOR)[0];
                                        if (n == F) continue;
                                        if (Chat.Manager.checkArtistUser(F)) {
                                            if ('lYlkE' === 'bMyrC') {
                                                function G() {
                                                    var H = 'c291b33a-291c-4935-b7e9-01c72b74b2d8';
                                                }
                                            } else Chat.Ui.displayMessage(C.message.update, C.timetoken, C.message.entry);
                                        } else q.push(D[E]);
                                    }
                                    if (q.length) {
                                        if ('bmTgG' !== 'THnIH') Chat.Manager.displayMessageItv(parseInt(C.timetoken));
                                        else {
                                            function H() {
                                                var I = 'c94be74c-f6e1-43b0-b637-5e50df9e9d79';
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            function I() {
                                var J = 'c1ae68f0-a65e-44ea-8793-9cc24c8442bd';
                            }
                        }
                    }
                }), s.subscribe({
                    'channels': w
                });
            }
        },
        'displayMessageItv': function(w) {
            if (r) {
                if ('QJcHb' !== 'QJcHb') {
                    function A() {
                        this._multiviewCanvas[0].height = this._multiviewDivArr[0].clientHeight * this._multiviewDivArr.length + c * (this._multiviewDivArr.length - 1), d = true;
                    }
                } else clearInterval(r), r = null;
            }
            var z = d / q.length;
            r = setInterval(function() {
                if ('uqpHQ' === 'uqpHQ') {
                    if (q.length) {
                        var B = q[0].split(CHAT_USERID_SEPARATOR)[0];
                        Chat.Ui.displayMessage(q[0], w, B), w = parseInt(w) + parseInt(z * 1000 * 10), q.splice(0, 1);
                    }
                } else {
                    function C() {
                        this.changeSingleView(false);
                    }
                }
            }, z);
        },
        'submitUpdate': function(w, z, A, B) {
            if (!s) return;
            if (z === v) return;
            if (iCM()) return;
            v = z;
            if (!B) {
                f && f--;
                if (f <= 0) {
                    if ('OkxyZ' === 'Qtxss') {
                        function F() {
                            l.Manager.destroy();
                            if (this._player && this._player._hls) this._player._hls.destroy();
                            m(n + '_user_id'), o(p + '_chat_id'), q(r('P_ALERT_TITLE'), s('P_ALERT_AUTH_FAIL_DESC'), t('P_ALERT_OK'), function() {
                                w.href = z;
                            });
                        }
                    } else {
                        _availableChating = false, Chat.Ui.disableChatInput(a - g);
                        return;
                    }
                } else _availableChating = true, Chat.Ui.enableChatInput();
            }
            if (!Array.isArray(A)) {
                if ('yYbNR' === 'yYbNR') A = [A];
                else {
                    function G() {
                        b.send();
                    }
                }
            }
            if (Chat.Manager.checkOperationntUser(n) || Chat.Manager.checkAdminUser(n) || Chat.Manager.checkArtistUser(n)) {
                if ('BPMqN' === 'BPMqN') {
                    var C = false;
                    for (var D = 1; D <= A.length; D++) {
                        if ('GAcvT' !== 'wGvTR') s.publish({
                            'channel': A[D - 1],
                            'message': {
                                'entry': w,
                                'update': z
                            }
                        }, function(H, I) {
                            if ('qvdNJ' === 'ghhFm') {
                                function J() {
                                    var K = '6ad7b0cb-e353-4cd3-b724-7cba3f34d737';
                                }
                            } else {
                                if (H.error) {} else {
                                    if (Chat.Manager.checkArtistUser(n) && !C) {
                                        if ('eITpd' !== 'eITpd') {
                                            function K() {
                                                this._hls = new c(!this._manifest.singleview_list[0].path.endsWith('.m3u8'), d, this._options.use_multiview), this._hls.attachMedia(this._video);
                                            }
                                        } else {
                                            if (I) {
                                                if ('ekCMp' === 'ekCMp') Chat.Ui.displayMessage(z, I.timetoken, n);
                                                else {
                                                    function L() {
                                                        c = d || this._ui.seekBar.thumbInteracting;
                                                    }
                                                }
                                            }
                                            C = true;
                                        }
                                    }
                                }
                            }
                        });
                        else {
                            function H() {
                                this.showChatWrap();
                            }
                        }
                    }
                } else {
                    function I() {
                        var J = c.navigator.userAgent.toLowerCase(),
                            K = J.indexOf('trident');
                        if (K > -1) return true;
                        return false;
                    }
                }
            } else {
                var E = {
                    'Data': JSON.stringify(z),
                    'PartitionKey': A[0],
                    'StreamName': 'KINESIS_CHAT'
                };
                t.putRecord(E, function(J, K) {
                    if ('yxMLl' !== 'yxMLl') {
                        function M() {
                            return 0;
                        }
                    } else {
                        if (J) {
                            if ('pJWBm' !== 'pJWBm') {
                                function N() {
                                    c(function() {
                                        e._web_ui.showChatWrap();
                                    });
                                }
                            } else console.log(J, J.stack);
                        } else {
                            if ('PTpgk' !== 'PTpgk') {
                                function O() {
                                    c('#chatAnchor').css('display', 'block'), d = true;
                                }
                            } else {
                                console.log(K);
                                var L = new Date();
                                Chat.Ui.displayMessage(z, L.getTime() * 10000);
                            }
                        }
                    }
                });
            }
        },
        'checkOperationntUser': function(w) {
            if ('jHxbY' !== 'bygIy') return u.operation_account === w ? true : false;
            else {
                function z() {
                    if (this._ui.qualityItems[l].id == m) w(this._ui.qualityItems[z], 'on'), A(this._ui.qualityItems[B]).attr('selected', 'selected');
                    else(this._ui.qualityItems[r].id != 'auto' || !this._player.isAutoQuality) && (C(this._ui.qualityItems[D], 'on'), E(this._ui.qualityItems[F]).removeAttr('selected'));
                }
            }
        },
        'checkAdminUser': function(w) {
            if (u.admin_account === w) {
                if ('uAjNe' === 'uAjNe') return true;
                else {
                    function z() {
                        c = d;
                    }
                }
            }
            return false;
        },
        'checkArtistUser': function(w) {
            if ('TSkEG' !== 'TSkEG') {
                function A() {
                    this._manifest = b, this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1), this._manifest.multiview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1);
                }
            } else {
                for (var z = 0; z < u.artist_account.length; z++) {
                    if (u.artist_account[z] === w) return true;
                }
                return false;
            }
        },
        'initChatInterval': function() {
            if ('dxAFT' !== 'dxAFT') {
                function w() {
                    this._ui.volumeBtn.classList.add('mute'), this._ui.volumeSlider.beforeValue = this._ui.volumeSlider.value, this._ui.volumeSlider.value = 0, this.volume(this._ui.volumeSlider.value);
                }
            } else h && clearInterval(h), h = setInterval(function() {
                g++;
                if (g >= a) {
                    if ('ZRjWH' === 'ZRjWH') g = 0, f = b;
                    else {
                        function z() {
                            this._ui.fullScreen = new b(this, this._ui.fullBtn);
                        }
                    }
                }
                f <= 0 ? Chat.Ui.disableChatInput(a - g) : Chat.Ui.enableChatInput();
            }, 1000);
        },
        'getNickName': function() {
            if ('abBqF' !== 'IKwAn') return e;
            else {
                function w() {
                    s.Manager.setUserId(), t = u, v = new w({
                        'publishKey': z,
                        'subscribeKey': A,
                        'uuid': B
                    }), C.config.update({
                        'region': D,
                        'accessKeyId': E,
                        'secretAccessKey': F
                    }), G = new H[('Kinesis')](), I.Ui.initChatUIEvent(), J.Manager.setChatChannels(), K.Manager.setChatHistory(), L.Manager.initPubnubEvent();
                }
            }
        },
        'destroy': function() {
            if (s) {
                if ('JJzKw' !== 'GNuGF') s.destroy();
                else {
                    function w() {
                        b = false;
                    }
                }
            }
            s = null;
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
                console.log('touchmove');
                if (g) {
                    if ('urvzB' === 'urvzB') b = true;
                    else {
                        function i() {
                            var j = this._ui.volumeSlider.thumbInteracting || !this._player._ui_play;
                            this._options.content_data.use_vod && this._ui.seekBar && (j = j || this._ui.seekBar.thumbInteracting);
                            if (j) {
                                this.wakeupController();
                                return;
                            }
                            this._ui.playerBottomWrap.style.display = 'none', this.showChatOpenBtn(false), c('.cusDD_options').slideUp(200), d('.cusDD_arrow').removeClass('active');
                        }
                    }
                }
            }), $(document).on('touchend', function(h) {
                g = false, console.log('touchmove');
            }), $('#chatList').on('wheel', function(h) {
                if ('wnHaK' === 'ZPEtF') {
                    function i() {
                        this._video.currentTime = c, this._logger.addLog({
                            'event': 'seek',
                            'time': d
                        }), this._render_once_on_seek = true;
                    }
                } else h.originalEvent.deltaY < 0 && (b = true);
            }), $('#chatList').on('scroll', function() {
                if (d) return;
                var h = Math.ceil($('#chatList').scrollTop() + $('#chatList').height());
                if (h < $('#chatList')[0].scrollHeight) setTimeout(function() {
                    if ('lGfCK' === 'ffJup') {
                        function m() {
                            var n = '717d72f3-a23b-4824-aacc-8cdb17cdb4b7';
                        }
                    } else {
                        var l = Math.ceil($('#chatList').scrollTop() + $('#chatList').height());
                        l < $('#chatList')[0].scrollHeight && ($('#chatAnchor').css('display', 'block'), b = true);
                    }
                }, 200);
                else {
                    $('#chatAnchor').css('display', 'none'), b = false;
                    if (e.length !== 0) {
                        var j = document.createDocumentFragment();
                        for (var k = 1; k < e.length; k++) {
                            if (a < k) break;
                            j.prepend(e[e.length - k]);
                        }
                        $('#chatList').append(j);
                        if (navigator.userAgent.indexOf('Firefox') === -1) {
                            if ('HFSap' !== 'wExFE') $('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
                            else {
                                function l() {
                                    let m = this._hls.currentLevel;
                                    (g != -1 && m != h || k == -1 && this._hls.nextAutoLevel != m) && this._listener.trigger(m.RICH360_WAIT, {
                                        'wait': true,
                                        'wait_on': n.RICH360_QUALITY_CHANGE
                                    }), this._hls.currentLevel = l;
                                }
                            }
                        }
                        $('#chatList').scrollTop($('#chatList')[0].scrollHeight), e = [];
                    }
                }
            }), $('#chatAnchor').on('click', function() {
                if ('aPImk' === 'aPImk') $('#chatList').scrollTop($('#chatList')[0].scrollHeight), $('#chatAnchor').css('display', 'none');
                else {
                    function h() {
                        c(this._ui.loadingDiv).css('display', 'none'), d(this._ui.loadingDiv).parent().css('display', 'none');
                    }
                }
            }), $('#chatSendBtn').on('click', function() {
                var h = Chat.Manager.getNickName(),
                    i = Chat.Manager.getUserId();
                if (!h) {
                    if ('wNNBx' !== 'OmaGj') {
                        alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                            if ('KPsbK' === 'KPsbK') location.href = LUEz1;
                            else {
                                function l() {
                                    c.Ui.recvCtrlChMsg(d.message.update);
                                }
                            }
                        });
                        return;
                    } else {
                        function l() {
                            this._hls._hls.subtitleTrack = b;
                        }
                    }
                }
                var j = $('#chatInput').val();
                if (!j || !ChatFilter.checkFilteringData()) {
                    if ('HowBJ' === 'HowBJ') return;
                    else {
                        function m() {
                            var n = b.userAgent.toLowerCase();
                            return /(tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(n);
                        }
                    }
                }
                if (Chat.Manager.checkOperationntUser(i)) {
                    if ('vTKzC' !== 'vTKzC') {
                        function n() {
                            e.responseText && i.log(j.parse(k.responseText));
                        }
                    } else Chat.Manager.submitUpdate(i, j, Chat.Manager.getNoticeChannel());
                } else {
                    if (Chat.Manager.checkAdminUser(i)) Chat.Manager.submitUpdate(i, j, Chat.Manager.getCtrChannel());
                    else {
                        var k = ChatFilter.filteringChatText(j);
                        Chat.Manager.submitUpdate(i, i + CHAT_USERID_SEPARATOR + h + NICKNAME_SEPARATOR + k, Chat.Manager.getChatChannels());
                    }
                }
                $('#chatInput').val('');
            }), $('#chatInput').on('keydown', function(h) {
                if (h.keyCode == 13) {
                    if ('YvThv' !== 'YvThv') {
                        function i() {
                            this._player.currentPosition = this._player._hls._hls.liveSyncPosition;
                        }
                    } else return $('#chatSendBtn').click(), false;
                }
            }), $('#chatInput').on('focus', function(h) {
                delayStopLoadingPanel();
            }), $('#chatInput').on('blur', function(h) {
                if ('NuzPL' === 'NuzPL') delayStopLoadingPanel();
                else {
                    function i() {
                        this._parent_dom = b.body;
                    }
                }
            });
        },
        'setResizingPage': function(g) {
            if ('kZlDC' === 'kZlDC') d = g;
            else {
                function h() {
                    var i = g.createElement('div');
                    return i.className = 'fc_default cusDD_opt', i.id = h.id, i.dataset.id = i.id, i.dataset.label = j.label, i.dataset.lang = k.lang, i.innerHTML = l.label, i;
                }
            }
        },
        'updateNotice': function(g, h, i) {
            if (Chat.Manager.checkOperationntUser(i)) {
                if ('HrKwn' === 'HrKwn') {
                    if (g === '[delete]') {
                        if ('gVOWl' !== 'gVOWl') {
                            function j() {
                                c.href = d;
                            }
                        } else $('#noticeChatWrap p[name=desc]').text(''), $('#noticeChatWrap').css('display', 'none');
                    } else {
                        if ('fSYsU' === 'WRtcA') {
                            function k() {
                                this._player._video.textTracks[e].mode == 'showing' && (this._player._video.textTracks[i].mode = 'hidden', j('#ccSelect', k, true));
                            }
                        } else $('#noticeChatWrap p[name=desc]').text(g), $('#noticeChatWrap').css('display', 'block');
                    }
                } else {
                    function l() {
                        var m = new e();
                        m.open('GET', this._options.source), m.onreadystatechange = (() => {
                            if (m.readyState == 4 && m.status == 200) {
                                this._manifest = l.parse(m.responseText);
                                if (m) n();
                            }
                        }).bind(this), m.send();
                    }
                }
            }
        },
        'recvCtrlChMsg': function(g) {
            if (g.indexOf('[warning]') === 0) {
                var h = g.split('[warning]')[1];
                h == Chat.Manager.getUserId() && alertPopup(gettext('P_ALERT_TITLE'), '<' + _contentData.web_title + '>의 라이브가 진행중입니다.', gettext('P_ALERT_OK'));
            } else {
                if (g.indexOf('[ticket_exposure]') === 0) {
                    var i = g.split('[ticket_exposure]')[1].split('|&|'),
                        j = i[0],
                        k = i[1],
                        l = parseInt(i[2]) * 1000;
                    setTicketExposureItv(j, k, l);
                }
            }
        },
        'convertChatMsg': function(g) {
            if (!g) return false;
            var h = g.split(CHAT_USERID_SEPARATOR);
            if (h.length < 2) return false;
            var i = h[0];
            h = h[1].split(NICKNAME_SEPARATOR);
            if (h.length < 2) return false;
            var j = h[0],
                k = h[1];
            if (!i || !j || !k) return false;
            return {
                'userId': i,
                'nickName': j,
                'text': k
            };
        },
        'createArtistChatDiv': function(g, h, i, j) {
            if ('mCqfK' !== 'MvAjU') {
                var k = $('.dummy-wrap > .artist_chat_dummy').clone();
                k.removeClass('artist_chat_dummy');
                var l = f[Tira] || {},
                    m = l[g] || null;
                if (m) {
                    if (m.img) {
                        if ('hPwfY' === 'OKzzc') {
                            function n() {
                                b('#ticketDiv').css('display', 'none');
                            }
                        } else k.find('img').attr('src', '/static/imgs/c_event/' + Tira + '/' + m.img);
                    }
                    if (m.msgClass) {
                        if ('oQJfp' !== 'oQJfp') {
                            function o() {
                                var p = c.createElement('div');
                                p.setAttribute('id', 'wmark'), d.append(p);
                            }
                        } else k.find('.user_msg').addClass(m.msgClass);
                    }
                }
                return k.find('p[name=nickname]').text(h), k.find('p[name=text]').text(i), k.find('p[name=text]').append('<span class="chat_time fc_fff fs_12" style="vertical-align: baseline;">' + j.format(' ap&nbsp;hh:mm:ss') + '</span>'), k;
            } else {
                function p() {
                    c = d / 100 * 2.2;
                }
            }
        },
        'createUserChatDiv': function(g, h, i, j) {
            if ('dIrsM' !== 'dIrsM') {
                function l() {
                    this._video.play();
                }
            } else {
                var k = $('.dummy-wrap > .user_chat_dummy').clone();
                return g == Chat.Manager.getUserId() && k.addClass('t_my'), k.removeClass('user_chat_dummy'), k.find('p[name=nickname]').text(h), k.find('span[name=text]').text(i), k.find('span[name=time]').text(j.format('ap hh:mm:ss')), k;
            }
        },
        'displayMessage': function(g, h, i, j) {
            var k = Chat.Ui.convertChatMsg(g);
            if (!k) return;
            var l = new Date(h / 10000);
            if (Chat.Manager.checkArtistUser(i)) {
                m = Chat.Ui.createArtistChatDiv(i, k.nickName, k.text, l);
                if (b) e.push(m[0]);
                else {
                    if ('SJQai' !== 'SJQai') {
                        function p() {
                            this._isDummy ? this.release() : this._hls.destroy();
                        }
                    } else $('#chatList').append(m);
                }
                $('#artistChatList').length && !j && $('#artistChatList').append(m.clone());
            } else {
                if (i) {
                    if ('nSMsu' !== 'trGAe') {
                        var m = Chat.Ui.createUserChatDiv(i, k.nickName, k.text, l);
                        if (b) {
                            if ('bKDzz' !== 'HfnuW') e.push(m[0]);
                            else {
                                function q() {
                                    b('#artistChatList .user_chat:eq(-1)').css('margin-bottom', '0');
                                }
                            }
                        } else {
                            if ('LfUfW' !== 'LfUfW') {
                                function r() {
                                    b.track.mode = 'showing';
                                }
                            } else $('#chatList').append(m);
                        }
                    } else {
                        function s() {
                            var t = b();
                            if (typeof t == 'string') {
                                if (t == 'landscape-primary' || t == 'landscape-secondary' || t == 'landscape') this._web_ui.hideChatWrap();
                                else(t == 'portrait-primary' || t == 'portrait-secondary' || t == 'portrait') && this._web_ui.showChatWrap();
                            }
                        }
                    }
                } else {
                    b = false, $('#chatAnchor').css('display', 'none');
                    var m = Chat.Ui.createUserChatDiv(Chat.Manager.getUserId(), k.nickName, k.text, l);
                    $('#chatList').append(m);
                }
            }
            $('#chatList .user_chat').css('margin-bottom', '1.25em');
            if ($('#artistChatList').length) {
                if ('hqoor' !== 'hqoor') {
                    function t() {
                        var u = e.lastIndexOf('_');
                        f = g.substring(0, u + 1) + h.toString();
                    }
                } else $('#artistChatList .user_chat').css('margin-bottom', '1.25em');
            }
            if (navigator.userAgent.indexOf('Firefox') === -1) {
                if ('SfJyn' === 'SfJyn') {
                    $('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
                    if ($('#artistChatList').length) {
                        if ('wMWeY' === 'wMWeY') $('#artistChatList .user_chat:eq(-1)').css('margin-bottom', '0');
                        else {
                            function u() {
                                let v = d;
                                e() && (v = false), f(this._ui.chatOpenBtn).css('display', v ? 'block' : 'none');
                            }
                        }
                    }
                } else {
                    function v() {
                        c && (this.pause(), this._player.changeSource(e));
                    }
                }
            }
            if ($('#chatList').find('div').length > a) {
                var n = $('#chatList').find('div').length - a;
                for (var o = 0; o < n; o++) {
                    $('#chatList').find('div:eq(0)').remove();
                }
            }
            if (!c && (!i || !b)) $('#chatList').scrollTop($('#chatList')[0].scrollHeight), $('#artistChatList').length && $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
            else {
                if ('lbvlx' !== 'csemZ') $('#chatAnchor').css('display', 'block');
                else {
                    function w() {
                        b.open('GET', '/static/filtering/chat_filtering_cix.txt');
                    }
                }
            }
        },
        'displayArtistHistoryMsg': function(g, h, i) {
            var j = Chat.Ui.convertChatMsg(g);
            if (!j) return;
            if (Chat.Manager.checkArtistUser(i)) {
                var k = new Date(h / 10000),
                    l = Chat.Ui.createArtistChatDiv(i, j.nickName, j.text, k);
                $('#artistChatList').length && $('#artistChatList').append(l);
            }
        },
        'enableChatInput': function() {
            if ($('#chatInput').prop('readonly') != false) {
                if ('JKqrB' !== 'JKqrB') {
                    function g() {
                        f.log('clearInterval'), g(h), i(j);
                    }
                } else $('#chatInput').prop('readonly', false), $('#chatInput').prop('placeholder', gettext('P_CHAT_INPUT_PLACEHOLDER'));
            }
        },
        'disableChatInput': function(g) {
            $('#chatInput').prop('readonly', true);
            if (g) $('#chatInput').prop('placeholder', interpolate(gettext('P_CHAT_ABLE_DELAY_PLACEHOLDER_%(delay)s'), {
                'delay': g
            }, true));
            else {
                if ('rnoFf' !== 'DKDwK') $('#chatInput').prop('placeholder', '');
                else {
                    function h() {
                        var i = d[e];
                        f(i);
                    }
                }
            }
        },
        'setHoldChatScroll': function(g) {
            if ('rytGU' !== 'rytGU') {
                function h() {
                    var i = {};
                    e.each(this[0].attributes, function(j, k) {
                        i[k.nodeName] = k.nodeValue;
                    }), this.replaceWith(function() {
                        return i('<' + j + '/>', i).append(k(this).contents());
                    });
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
        if (a < 0) {
            if ('ameWc' === 'qRFwq') {
                function d() {
                    c.target.mode == 'hidden' && (e.target.mode = 'showing');
                }
            } else clearInterval(_testItv[c]);
        } else a--, chatTest(c);
    }, b);
}

function chatTestItvStop() {
    for (var a in _testItv) {
        if ('GtSUj' !== 'GtSUj') {
            function b() {
                this.initSeekBarThumbnailData(b);
            }
        } else clearInterval(_testItv[a]);
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
    if ($('#mvMainDiv').length) {
        if ('KHEiF' === 'KHEiF') b = $('#mvMainDiv');
        else {
            function r() {
                this.play_on(), this._logger.addLog({
                    'event': 'play'
                });
            }
        }
    }
    if (!$('#wmark').length) {
        var d = document.createElement('div');
        d.setAttribute('id', 'wmark'), b.append(d);
    }
    if (a) $('#wmark').css('background-image', 'url(' + a + ')'), _wmarkImgUrl = a;
    else {
        if ('xbaxB' !== 'qcmzN') $('#wmark').css('background-image', 'url(' + _wmarkImgUrl + ')');
        else {
            function s() {
                if (f.status === 400 || g.status === 401) this._listener.trigger(k.RICH360_ACCESS_DENIED, 'Authorization failed');
                else i.status === 403 && this._listener.trigger(l.RICH360_LIVE_ENDED, 'Live ended');
            }
        }
    }
    var e = 1920;
    !e && (e = 1920);
    var f = 1080;
    !f && (f = 1080);
    var g = e / f,
        h = b.width(),
        i = b.height(),
        j = h / g,
        k = 0,
        l = 0,
        m = 0;
    if (j > i) {
        if ('TlTNy' === 'TlTNy') {
            var n = i * g;
            m = n / e, k = (h - n) / 2;
        } else {
            function t() {
                c.href = d;
            }
        }
    } else {
        var n = j;
        m = n / f, l = (i - n) / 2;
    }
    if (m > 1) {
        if ('WrrWr' !== 'WNEkN') m = 1;
        else {
            function u() {
                var v = e.createElement('button');
                v.className = 'text-btn fc_default bold', v.id = f.id, v.dataset.id = g.id, v.dataset.height = h.height;
                var w = '';
                return v.dataset.height == 'auto' ? w = 'AUTO' : w = v.dataset.height + 'P', v.innerHTML = w, v;
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
    a !== undefined && (_ticketPos.x = a), b !== undefined && (_ticketPos.y = b), c !== undefined && (_ticketExposureTime = c), _ticketExposureItv && clearInterval(_ticketExposureItv), updateTicketDivPos(), _ticketExposureItv = setInterval(function() {
        if ('oxIDV' !== 'oxIDV') {
            function d() {
                var e = g.split('[warning]')[1];
                e == h.Manager.getUserId() && m(n('P_ALERT_TITLE'), '<' + o.web_title + '>의 라이브가 진행중입니다.', p('P_ALERT_OK'));
            }
        } else {
            _ticketExposureTime -= 100;
            if (_ticketExposureTime < 0) {
                if ('SbHQo' === 'SbHQo') _ticketExposureTime = 0, clearInterval(_ticketExposureItv), _ticketExposureItv = null;
                else {
                    function e() {
                        b('button[name=artistchatnavbtn]').css('display', ' none');
                    }
                }
            }
            updateTicketDivPos();
        }
    }, 100);
}

function updateTicketDivPos() {
    if (_ticketExposureTime <= 0) {
        $('#ticketDiv').length && $('#ticketDiv').css('display', 'none');
        return;
    }
    var a = $('#playerWrap'),
        b = document.getElementsByTagName('video')[0];
    if (!b) return;
    if ($('#mvMainDiv').length) {
        if ('nrdMM' !== 'dgrVZ') a = $('#mvMainDiv');
        else {
            function r() {
                c('#chatList').scrollTop(d('#chatList')[0].scrollHeight);
            }
        }
    }
    if (!$('#ticketDiv').length) {
        var c = document.createElement('div');
        c.setAttribute('id', 'ticketDiv'), a.append(c);
    }
    var d = $('#ticketDiv'),
        e = 1920;
    !e && (e = 1920);
    var f = 1080;
    !f && (f = 1080);
    var g = e / f,
        h = a.width(),
        i = a.height(),
        j = h / g,
        k = 0,
        l = 0,
        m = 0;
    if (j > i) {
        var n = i * g;
        m = n / e, k = h - n;
    } else {
        var n = j;
        m = n / f, l = i - n;
    }
    m > 1 && (m = 1);
    const o = 220,
        p = 40,
        q = 32;
    d.css('width', o * m + 'px'), d.css('height', p * m + 'px'), d.css('top', (i - l) * _ticketPos.y + l / 2 + 'px'), d.css('left', (h - k) * _ticketPos.x + k / 2 + 'px'), d.css('font-size', q * m + 'px'), d.css('display', 'block'), d.text(getCookie(DCvi + '_ticket_id'));
}
var _player = null;
const IS_SINGLEVIEW_ON_MULTIVIEW = isom == 'True' ? true : false,
    USE_MULTIVIEW = umtv == 'True' ? true : false,
    PARAM_SINGLEVIEW_ON_MULTIVIEW = '?single_view=true';
(function(a) {
    function b() {
        if ('uIKFJ' === 'UvxsM') {
            function f() {
                this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[0].path);
            }
        } else a('#sliderPaddingDiv').width(a('#playerSliderArea').width());
    }

    function c() {
        injectDeviceContentHeightToCSS(), b(), updateTicketDivPos();
    }

    function d(f) {
        if (f) {
            if (f._player) {
                if (f._player.qualityList) return f._player.qualityList.length;
            }
        }
        return false;
    }

    function e() {
        if ('zCKng' === 'QQsXv') {
            function f() {
                return false;
            }
        } else console.log('@@@ Single View on Multiview::', IS_SINGLEVIEW_ON_MULTIVIEW), console.log('@@@ Multiview::', USE_MULTIVIEW), USE_MULTIVIEW && a('body').addClass('multiview');
    }
    a(document).ready(function() {
        e();
        const f = 'keyboard-show-by-chat-input';
        var g = null,
            h = isIpadOS() && isChrome();
        addClassToElementByEnv(), injectDeviceContentHeightToCSS(), a(window).on('orientationchange', function() {
            console.log('EVENT::orientationchange'), injectDeviceContentHeightToCSS();
        }), a(window).resize(debounce(function() {
            if ('UBlpo' === 'EaDbP') {
                function o() {
                    c('#wmark').css('background-image', 'url(' + d + ')');
                }
            } else console.log('EVENT::resize'), Chat.Ui.setResizingPage(true), isIpadOS() && (document.getElementsByTagName('video')[0].style.display = 'none'), c(), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight), setTimeout(function() {
                if ('BnaKa' === 'BnaKa') c(), a('#chatAnchor').css('display', 'none'), Chat.Ui.setResizingPage(false);
                else {
                    function p() {
                        return b;
                    }
                }
            }, 500), setTimeout(function() {
                if (isIpadOS()) {
                    if ('UgLSf' !== 'sAVwe') document.getElementsByTagName('video')[0].style.display = 'block';
                    else {
                        function p() {
                            this._video.textTracks.removeEventListener('addtrack', this.addNativeTrackListener), this._video.textTracks.addEventListener('addtrack', this.addNativeTrackListener);
                        }
                    }
                }
                c(), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            }, 1000);
        }, 200)), a('#chatInput').on('focus', function() {
            console.log('EVENT::#chatInput::focus'), isIpadOS() && isChrome() && document.body.classList.add(f);
        }), a('#chatInput').on('blur', function() {
            if ('tAuLs' === 'Hiblw') {
                function o() {
                    return b;
                }
            } else {
                console.log('EVENT::#chatInput::blur');
                if (isIpadOS() && isChrome()) {
                    if ('bPABk' === 'bPABk') document.body.classList.remove(f);
                    else {
                        function p() {
                            this._play_status = 'play', this._listener.trigger(b.RICH360_PLAY_PAUSE_CHANGE, true);
                        }
                    }
                }
            }
        }), a('.scrollbar-inner').scrollbar(), a('#noticeChatWrap button[name=closebtn]').on('click', function() {
            if ('exPFl' !== 'KHtjN') a('#noticeChatWrap').css('display', 'none');
            else {
                function o() {
                    b = 1;
                }
            }
        }), a('#qualityPopup button[name=closebtn]').on('click', function() {
            a('#qualityPopup').css('display', 'none');
        }), a('#subtitlePopup button[name=closebtn]').on('click', function() {
            a('#subtitlePopup').css('display', 'none');
        });
        var i = new Menu({
                'wrapper': '#o-wrapper',
                'type': 'slide-right',
                'menuOpenerClass': '.c-button',
                'maskId': '#c-mask'
            }),
            j = document.querySelector('#chat-i-pushy');
        j.addEventListener('click', function(o) {
            if ('zBYAx' !== 'zBYAx') {
                function p() {
                    this._hls.recoverMediaError(), this.play_on();
                }
            } else o.preventDefault(), i.open(), j.style.display = 'none', a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
        }), i.open(), a('#chatCloseBtn').on('click', function() {
            if ('BALan' !== 'Ffjis') return a('#playerBottomWrap').css('display', 'block'), a('#chat-i-pushy').css('display', 'block'), true;
            else {
                function o() {
                    g && m.Ui.displayMessage(n, o.timetoken, p), l = true;
                }
            }
        });
        var k = {
                'container': document.getElementById('playerWrap'),
                'use_multiview': false
            },
            l = {
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
            m = {
                'user_id': getCookie(DCvi + '_user_id'),
                'device_id': getCookie(DCvi + '_device_id'),
                'content_id': DCvi
            };
        userSessionCheck(m, function(o) {
            var p = k.content_data = JSON.parse(JSON.stringify(o.Data.content)),
                q = JSON.parse(JSON.stringify(o.Data.user)),
                r = p.cam_num > 1;
            if (IS_SINGLEVIEW_ON_MULTIVIEW) {
                if ('zSyne' === 'zSyne') r = false;
                else {
                    function v() {
                        e.Ui.updateNotice(f.messages[0].entry.update, g.messages[0].entry.timetoken, h.messages[0].entry.entry);
                    }
                }
            }
            iCM(!!q.is_mute);
            if (!p.artist_account) {
                if ('YzcbJ' !== 'EDQky') a('button[name=artistchatnavbtn]').css('display', ' none');
                else {
                    function w() {
                        var z = d.target.getBoundingClientRect();
                        e = f.targetTouches[0].pageX - z.left;
                    }
                }
            } else {
                if ('dByyf' === 'dByyf') p.artist_account.indexOf(',') !== -1 ? p.artist_account = p.artist_account.split(',') : p.artist_account = [p.artist_account], a('button[name=artistchatnavbtn]').css('display', ' inline-block');
                else {
                    function z() {
                        !f && (k('#loadingDiv').css('display', 'none'), l(m), n = null);
                    }
                }
            }
            if (r) {
                if ('gNsKc' === 'gNsKc') k.multiViewList = document.getElementById('multiViewList'), k.use_multiview = true, a('button[name=multiviewnavbtn]').css('display', 'inline-block');
                else {
                    function A() {
                        this._web_ui.showChatWrap();
                    }
                }
            } else a('button[name=multiviewnavbtn]').css('display', 'none');
            Chat.Manager.setContentData(p);
            if (Chat.Manager.isChatUsed()) {
                if (!q.nickname) {
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                    return;
                } else a('#pageWrap').removeClass().addClass('pl-t-default'), a('#chatWrap').css('display', 'block'), Chat.Manager.setPubnubAPI(q.nickname);
            } else {
                if ('RbPsd' !== 'PDHMv') a('#pageWrap').removeClass().addClass('pl-t-default_nochat'), a('#chatWrap').css('display', 'none');
                else {
                    function B() {
                        b('#noticeChatWrap').css('display', 'none');
                    }
                }
            }
            p.use_vod ? (a('#playerBottomWrap').addClass('ver_vod'), a('.pl-i-live').css('display', ' none'), l.durationStart = document.getElementById('durationStart'), l.durationEnd = document.getElementById('durationEnd'), l.prev10sBtn = document.getElementById('prev10sBtn'), l.next10sBtn = document.getElementById('next10sBtn'), l.sliderArea = document.getElementById('playerSliderArea'), l.sliderArea.slider = document.getElementById('playerSlider'), l.sliderArea.slider.thumb = document.getElementById('playerSliderThumb'), l.sliderThumbnail = document.getElementById('sliderThumbnail'), l.sliderPaddingDiv = document.getElementById('sliderPaddingDiv')) : a('#durationWrap').css('display', 'none');
            k.credentials = {
                'user_id': q.user_id,
                'device_id': getCookie(DCvi + '_device_id'),
                'content_id': DCvi,
                'api_server': RSAnd
            };
            var s = '';
            for (var t = 0; t < p.channels.length; t++) {
                if ('jeYVE' !== 'SHafb') {
                    var u = true;
                    Ythc == 'sub' && (u = false);
                    if (p.channels[t].is_main_channel == u) {
                        s = p.channels[t].hls_url, k.content_data.current_channel_id = p.channels[t].id;
                        break;
                    }
                } else {
                    function C() {
                        b.orientation.lock('landscape');
                    }
                }
            }
            _player = new Rich360Player(k, l, s), a(document).on('click', '#playThumbnail button', function() {
                b(), a(this).parent().css('display', 'none'), _player.play();
            });
        }, function(o, p) {
            if ('zybBK' !== 'zybBK') {
                function q() {
                    c.x = d;
                }
            } else {
                if (p == 400 || p == 401) removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_NOT_EXIST_LOGIN_INFO_DESC'), gettext('P_ALERT_OK'), function() {
                    location.href = LUEz1;
                });
                else {
                    if (p == 403) removeCookie(DCvi + '_customer_id'), removeCookie(DCvi + '_ticket_id'), removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                    else {
                        if ('ZnbvJ' !== 'EbwCq') alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_TRY_AGAIN_DESC'), gettext('P_ALERT_OK'), function() {
                            location.href = LUEz1;
                        });
                        else {
                            function r() {
                                this.events.push({
                                    'key': c[d],
                                    'listeners': []
                                });
                            }
                        }
                    }
                }
            }
        }), a('button[name=chatnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'block'), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight), setTimeout(function() {
                if ('QKmdD' === 'QKmdD') a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
                else {
                    function p() {
                        c('#artistChatList').scrollTop(d('#artistChatList')[0].scrollHeight);
                    }
                }
            }, 200);
            if (isMobile()) {
                var o = getOrientation();
                typeof o == 'string' ? o == 'landscape-primary' || o == 'landscape-secondary' || o == 'landscape' ? a('#chatInputWrap').css('display', 'block') : a('#chatInputWrap').css('display', 'block') : a('#chatInputWrap').css('display', 'block');
            } else {
                if ('kslXp' !== 'kslXp') {
                    function p() {
                        var q = c.userAgent.toLowerCase(),
                            r = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(q);
                        return !r ? e() : r;
                    }
                } else a('#chatInputWrap').css('display', 'block');
            }
            a('#holdChatScrollLabel').css('display', 'block'), a('#artistChatWrap').css('display', 'none'), a('#multiViewWrap').css('display', 'none'), a('button[name=chatnavbtn]').addClass('on'), a('button[name=artistchatnavbtn]').removeClass('on'), a('button[name=multiviewnavbtn]').removeClass('on'), _player && (_player._options.use_multiview && (_player._player._display.showMultiPreview = false));
        }), a('button[name=artistchatnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'none'), a('#chatInputWrap').css('display', 'none'), a('#holdChatScrollLabel').css('display', 'none'), a('#artistChatWrap').css('display', 'block'), a('#multiViewWrap').css('display', 'none'), a('button[name=chatnavbtn]').removeClass('on'), a('button[name=artistchatnavbtn]').addClass('on'), a('button[name=multiviewnavbtn]').removeClass('on'), a('#artistChatList').scrollTop(a('#artistChatList')[0].scrollHeight), a('#chatAnchor').css('display', 'none'), _player && (_player._options.use_multiview && (_player._player._display.showMultiPreview = false));
        }), a('button[name=multiviewnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'none'), a('#chatInputWrap').css('display', 'none'), a('#holdChatScrollLabel').css('display', 'none'), a('#artistChatWrap').css('display', 'none'), a('#multiViewWrap').css('display', 'block'), a('button[name=chatnavbtn]').removeClass('on'), a('button[name=artistchatnavbtn]').removeClass('on'), a('button[name=multiviewnavbtn]').addClass('on'), _player && (_player._options.use_multiview && (_player._player._display.showMultiPreview = true));
        }), a(document).on('click', '#multiViewList .view_wrap', function() {
            if (_player) {
                if (_player._options.use_multiview) {
                    if ('olRMN' !== 'olRMN') {
                        function p() {
                            d[e.nodeName] = f.nodeValue;
                        }
                    } else {
                        if (_player._player._video) {
                            if (!_player._player._video.paused) {
                                var o = _player._player.view;
                                _player._player.view = a(this).data().view, a(this).siblings().each(function() {
                                    if (o == a(this).data().view) {
                                        if ('IzeMl' !== 'IzeMl') {
                                            function q() {
                                                var r = h(i.target),
                                                    s = null,
                                                    t = j.location.href,
                                                    u = null;
                                                if (r.hasClass('active')) return;
                                                s = r.data('view-type');
                                                if (s === 'singleview') o.location.replace(t + p);
                                                else s === 'multiview' && (u = t.split(q), r.location.replace(u[0]));
                                            }
                                        } else return;
                                    }
                                }), a();
                            }
                        }
                    }
                }
            }
        }), a('#stopChatScrollBtn').on('change', function() {
            if ('MEWGV' === 'UOtZJ') {
                function o() {
                    this._sourceBase = this._options.source.substring(0, b) + '/';
                }
            } else Chat.Ui.setHoldChatScroll(!a(this).prop('checked'));
        }), a('#lockBtn').on('click', function() {
            if (a(this).hasClass('locked')) {
                if ('RvInu' === 'RvInu') {
                    a(this).removeClass('locked');
                    if (!isMobile() && !isTablet() && !isIpadOS()) {
                        if ('FuDWX' === 'FuDWX') a('#volumeBtn').css('display', 'inline-block'), a('#volumeSlider').css('display', 'inline-block');
                        else {
                            function o() {
                                b = true;
                            }
                        }
                    }(!isIOS() || isIpadOS()) && d(_player) ? a('#qualitySelectBtn').css('display', 'block') : a('#qualitySelectBtn').css('display', 'none');
                    if (_player._player.subtitleList) {
                        if ('QJjgv' !== 'FroVs') _player._player.subtitleList.length && (_player._player.subtitleList[0].lang !== '' && a('#ccSelectBtn').css('display', 'block'));
                        else {
                            function p() {
                                j.log(k, l), m && (s.messages.length && z.Ui.updateNotice(A.messages[0].entry.update, B.messages[0].entry.timetoken, C.messages[0].entry.entry));
                            }
                        }
                    } else {
                        if ('qgHPh' === 'bgwWC') {
                            function q() {
                                return this._hls._hls.subtitleTrack;
                            }
                        } else a('#ccSelectBtn').css('display', 'none');
                    }
                    a('#fullBtn').css('display', 'block'), a('.pl-ctr-wrap').css('visibility', 'visible'), a('.pl-btm-wrap').css('visibility', 'visible');
                } else {
                    function r() {
                        if (e) {
                            var s = i.apply(j, arguments);
                            return k = null, s;
                        }
                    }
                }
            } else {
                if ('JvDjB' === 'JvDjB') a(this).addClass('locked'), a('#volumeBtn').css('display', 'none'), a('#volumeSlider').css('display', 'none'), a('#fullBtn').css('display', 'none'), a('#ccSelectBtn').css('display', 'none'), a('#qualitySelectBtn').css('display', 'none'), a('.pl-ctr-wrap').css('visibility', 'hidden'), a('.pl-btm-wrap').css('visibility', 'hidden');
                else {
                    function s() {
                        this._player._hls._hls && (this._player._hls._hls.liveSyncPosition && (this._player.currentPosition = this._player._hls._hls.liveSyncPosition));
                    }
                }
            }
        }), a('#view-type-selector').on('click', '.btn-view-selector', function(o) {
            if ('ckxFu' !== 'JVSCo') {
                var p = a(o.target),
                    q = null,
                    r = window.location.href,
                    s = null;
                if (p.hasClass('active')) return;
                q = p.data('view-type');
                if (q === 'singleview') window.location.replace(r + PARAM_SINGLEVIEW_ON_MULTIVIEW);
                else q === 'multiview' && (s = r.split(PARAM_SINGLEVIEW_ON_MULTIVIEW), window.location.replace(s[0]));
            } else {
                function t() {
                    b(this).changeElementType('div');
                }
            }
        });

        function n() {
            if (!document.hidden) {
                if ('mqFlK' !== 'GnWyF') c();
                else {
                    function o() {
                        this.showChatOpenBtn(true);
                    }
                }
            }
        }
        document.addEventListener('visibilitychange', n, false);
    });
}(jQuery), window.onpopstate = function(a) {
    location.replace(LUEz1);
}, window.onpageshow = function(a) {
    console.log('@@@onpageshow'), history.pushState({}, '', location.href);
});
var requestCnt = 0,
    serverLoading = null;

function request_to_server(a, b, c, d, e) {
    var f = new XMLHttpRequest();
    f.open(a, b, true), f.withCredentials = true, f.setRequestHeader('X-CSRFToken', getCookie('csrftoken')), f.timeout = 60000;
    if (c) {
        if ('VhYMw' !== 'VhYMw') {
            function i() {
                return;
            }
        } else {
            var g = new FormData();
            for (var h in c) {
                g.append(h, c[h]);
            }
            f.send(g);
        }
    } else {
        if ('zMKyS' !== 'IaGXE') f.send();
        else {
            function j() {
                f.log('EVENT::#chatInput::blur'), g() && h() && k.body.classList.remove(l);
            }
        }
    }
    $('#loadingDiv').css('display', 'block'), requestCnt++;
    if (!serverLoading) {
        if ('ZcTwQ' !== 'fFLiz') serverLoading = setInterval(function() {
            !requestCnt && ($('#loadingDiv').css('display', 'none'), clearInterval(serverLoading), serverLoading = null);
        }, 100);
        else {
            function k() {
                c.href = d;
            }
        }
    }
    f.onreadystatechange = function() {
        if (f.readyState == XMLHttpRequest.DONE) {
            requestCnt--;
            if (f.status == 200 || f.status == 201) {
                if ('LEcmA' === 'SErAX') {
                    function m() {
                        this._video.webkitEnterFullscreen();
                    }
                } else d && d(JSON.parse(f.responseText));
            } else {
                console.log(f);
                if (f.status == 0) {} else {
                    if (!e) {
                        if ('FHJYv' !== 'oxrKb') f.responseText && console.log(JSON.parse(f.responseText));
                        else {
                            function n() {
                                b('#subtitlePopup').css('display', 'block');
                                return;
                            }
                        }
                    } else {
                        if ('igWrB' !== 'fPpGA') try {
                            if ('qoymi' === 'YPvIN') {
                                function o() {
                                    this._listener.trigger(c.RICH360_WAIT, {
                                        'wait': true,
                                        'wait_on': d.RICH360_QUALITY_CHANGE
                                    });
                                }
                            } else {
                                var l = JSON.parse(f.responseText);
                                e(l, f.status);
                            }
                        } catch (p) {
                            e(f.responseText, f.status);
                        } else {
                            function q() {
                                b = this._player.duration - 1;
                            }
                        }
                    }
                }
            }
        } else {}
    }, f.ontimeout = function(l) {
        console.log(l), alertPopup('fail', 'Request timeout', 'Please try again', 'OK', function() {
            location.reload();
        });
    };
}

function getCookie(a) {
    var b = null;
    if (document.cookie && document.cookie !== '') {
        if ('WfOrO' !== 'vFxqy') {
            var c = document.cookie.split(';');
            for (var d = 0; d < c.length; d++) {
                var e = jQuery.trim(c[d]);
                if (e.substring(0, a.length + 1) === a + '=') {
                    if ('SpRNz' === 'coQCH') {
                        function f() {
                            this._parent_dom = b.body;
                        }
                    } else {
                        b = decodeURIComponent(e.substring(a.length + 1));
                        break;
                    }
                }
            }
        } else {
            function g() {
                this._video.textTracks[b].mode = 'disabled';
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
        if ('PZgeg' !== 'RFnkG') switch (c) {
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
        } else {
            function e() {
                b += this;
            }
        }
    });
}, String.prototype.string = function(a) {
    var b = '',
        c = 0;
    while (c++ < a) {
        if ('sHXpL' === 'LICAc') {
            function d() {
                c(this._ui.loadingDiv).css('display', 'block'), d(this._ui.loadingDiv).parent().css('display', 'block');
            }
        } else b += this;
    }
    return b;
}, String.prototype.zf = function(a) {
    return '0'.string(a - this.length) + this;
}, Number.prototype.zf = function(a) {
    return this.toString().zf(a);
};

function set_uuid() {
    function a() {
        if ('RmZSF' === 'RmZSF') return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
        else {
            function b() {
                b('#durationWrap').css('display', 'none');
            }
        }
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
        clearInterval(e), $('#loadingDiv').css('display', 'none'), $('#alertPopup').css('display', 'block'), $('#alertPopup p[name=title]').text(a), $('#alertPopup p[name=desc]').text(b), $('#alertPopup button[name=okbtn]').text(c), $('#alertPopup button[name=okbtn],#alertPopup button[name=closebtn]').click(function() {
            $('#alertPopup button[name=okbtn]').unbind('click'), clearPopupData('alertPopup');
            if (d) {
                if ('secJT' === 'depBX') {
                    function f() {
                        this._cues[c].startTime += this._prevViewOffsetTime, this._cues[d].endTime += this._prevViewOffsetTime;
                    }
                } else d(), d = null;
            }
        });
    }, 100);
}

function checkInterparkApp() {
    if (navigator.userAgent.toLowerCase().indexOf('interpark') !== -1) {
        if ('jDIah' === 'jDIah') return true;
        else {
            function a() {
                this._subtitleDiv.innerHTML = '', this._subtitleDiv.style.display = 'none';
                return;
            }
        }
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
    return a.indexOf('edg') !== -1 || a.indexOf('edge') !== -1 ? true : false;
}

function checkMobileAndTablet() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if ('ExggB' === 'ExggB') {
            if (a.indexOf(navigator.platform.toLowerCase()) < 0) return true;
            else {
                if ('wNQGz' === 'wNQGz') {
                    var b = navigator.userAgent.toLowerCase(),
                        c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
                    if (!c) return isIpadOS();
                    else {
                        if ('AdHaO' === 'AdHaO') return c;
                        else {
                            function d() {
                                this.updateThumbnail(b);
                            }
                        }
                    }
                } else {
                    function e() {
                        b = -1;
                    }
                }
            }
        } else {
            function f() {
                this._showMultiPreview = b, this.arrangeVideo();
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
        if (c) c(d);
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
        if ('ARcdj' === 'ARcdj') {
            var d = a.className;
            d = d.replace(new RegExp('(?:^|\s+)' + b + '(?:\s+|$)', 'g'), ' '), d = d.replace(new RegExp('^\s+', 'g'), ''), d = d.replace(new RegExp('\s+$', 'g'), ''), a.className = d.replace(new RegExp('\s+', 'g'), ' ');
        } else {
            function e() {
                b(this._ui.fullBtn).on('click', function() {
                    this._player._subtitleManager.showDefaultSubtitle(), !this._player._video.paused && this._player._video.webkitEnterFullscreen();
                }.bind(this));
            }
        }
    }
}

function getOrientation() {
    if (!isMobile()) return false;
    if (isIOS()) switch (window.orientation) {
        case -90:
        case 90:
            return 'landscape';
        default:
            return 'portrait';
    } else {
        if ('WkkSB' === 'WkkSB') return screen.orientation.type.toLowerCase();
        else {
            function a() {
                this._config.startPosition != b && this._config.startPosition > 0 && (this._video.currentTime = this._config.startPosition), this._config.autoplay && this._video.play();
            }
        }
    }
}

function checkMobile() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) return true;
        else {
            if ('KHAbR' !== 'KHAbR') {
                function d() {
                    b = true;
                }
            } else {
                var b = navigator.userAgent.toLowerCase(),
                    c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
                if (!c) {
                    if ('EdmRu' !== 'EdmRu') {
                        function e() {
                            var f = c;
                            if (f == 'zh_Hans') f = 'cn';
                            var g = {
                                'ko': '채팅을 사용할 수 없습니다.',
                                'en': 'Live chat is currently unavailable.',
                                'ja': 'チャットを使用できません',
                                'jp': 'チャットを使用できません',
                                'cn': '不能用聊天'
                            };
                            if (!g[f]) return g.en;
                            return g[f];
                        }
                    } else return isIpadOS();
                } else return c;
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
    return () => {
        if ('ytUAb' === 'ytUAb') clearTimeout(a), $('#loadingWrap .pl_loader').addClass('stop'), a = setTimeout(function() {
            $('#loadingWrap .pl_loader').removeClass('stop');
        }, 1000);
        else {
            function b() {
                let d = d.frag;
                e.log('curTime / this.duration : ', this._video.currentTime + '/' + this.duration), f.log('frag.startPTS : ', d.sn, d.startPTS), this._hls.timeDictionary[d.sn + ''] = d.startPTS, this._hls.snsInDictionary.push(d.sn);
                while (this._hls.snsInDictionary.length > 100) {
                    let e = 0;
                    if (this._hls.snsInDictionary[e] == 0) e = 1;
                    let f = this._hls.snsInDictionary[e];
                    this._hls.snsInDictionary.splice(e, 1), delete this._hls.timeDictionary[f + ''];
                }
                d.startPTS == 0 && (this._hls.startSN = d.sn);
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
        if ('pXMWE' !== 'hrAhp') {
            const d = this,
                e = arguments;
            clearTimeout(c), c = setTimeout(() => a.apply(d, arguments), b);
        } else {
            function f() {
                var g = '186accfb-f3f4-441d-adee-0d78e34e9d18';
            }
        }
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

function createElementFromHTML(a) {
    var b = document.createElement('div');
    return b.innerHTML = a.trim(), b.firstChild;
}
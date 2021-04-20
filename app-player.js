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
        selectArr.push(a), callbackArr.push(c);
    }
    var f = '';
    if (!b) f = 'cusDD_default';
    else {
        if (b == 'slick dark') {
            f = 'cusDD_slick_d';
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
        $('.cusDD_options').slideUp(200), $('.cusDD_arrow').removeClass('active');
    }), $(a).click(function(m) {
        var n = a;
        $('.cusDD').not(n).find('.cusDD_options').slideUp(200), $('.cusDD').not(n).find('.cusDD_arrow').removeClass('active'), console.log(' select : ', n), m.stopPropagation();
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
        $(this).find('.cusDD_options').slideToggle(o), $(this).find('.cusDD_arrow').toggleClass('active');
    }), $(a).find('.cusDD_opt').click(function() {
        $($(this).parent()).siblings('.cusDD_select').contents()[0].nodeValue = $(this).text();
        if (c) c($(this).data(), $(this));
    });
}(function(c) {
    var d = function() {
            var f = true;
            return function(g, h) {
                var i = f ? function() {
                    if (h) {
                        var j = h.apply(g, arguments);
                        return h = null, j;
                    }
                } : function() {};
                return f = false, i;
            };
        }(),
        e = d(this, function() {
            var f;
            try {
                var g = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                f = g();
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
        var g = {};
        c.each(this[0].attributes, function(i, j) {
            g[j.nodeName] = j.nodeValue;
        }), this.replaceWith(function() {
            return c('<' + f + '/>', g).append(c(this).contents());
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
}(function(a) {
    'use strict';

    function b(e, f) {
        for (var g in f) {
            if (f.hasOwnProperty(g)) {
                e[g] = f[g];
            }
        }
        return e;
    }

    function c(e, f) {
        for (var g = 0; g < e.length; g++) {
            var h = e[g];
            f(h);
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
            this.closeBtn.addEventListener('click', function(f) {
                f.preventDefault(), this.close();
            }.bind(this));
        }
        this.mask && this.mask.addEventListener('click', function(f) {
            f.preventDefault(), this.close();
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
            e.disabled = false;
        });
    }, a.Menu = d;
})(window);
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
            if (this._player._ui_play) {
                this.pause();
            } else this.play();
        }.bind(this), this._ui.volumeSlider = new customRange(this._ui.volumeSlider);
        if (isMobile() || isTablet() || isIpadOS()) {
            this._ui.volumeBtn.style.display = 'none', $(this._ui.volumeSlider).parent().css('display', 'none');
        } else {
            this._ui.volumeSlider.addEventListener('input', function() {
                this._ui.volumeSlider._value == 0 ? this._ui.volumeBtn.classList.add('mute') : this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.barDiv.style.backgroundImage = 'linear-gradient(to right, #fff 0%, #fff ' + this._ui.volumeSlider._value + '%, transparent ' + this._ui.volumeSlider._value + '%, transparent 100%)', this.volume(this._ui.volumeSlider._value);
            }.bind(this)), this._ui.volumeSlider.addEventListener('seek', function(d) {
                this.volume(d.target._value);
            }.bind(this)), this._ui.volumeBtn.onclick = function() {
                if (this._ui.volumeBtn.classList.contains('mute')) {
                    this._ui.volumeBtn.classList.remove('mute'), this._ui.volumeSlider.value = this._ui.volumeSlider.beforeValue, this._ui.volumeSlider.beforeValue = 0, this.volume(this._ui.volumeSlider.value);
                } else this._ui.volumeBtn.classList.add('mute'), this._ui.volumeSlider.beforeValue = this._ui.volumeSlider.value, this._ui.volumeSlider.value = 0, this.volume(this._ui.volumeSlider.value);
            }.bind(this), this._ui.volumeBtn.style.display = 'inline-block', $(this._ui.volumeSlider).parent().css('display', 'inline-block');
        }
        this._options.content_data.use_vod && (this._ui.seekBar = new customRange(this._ui.sliderArea, 0, this._ui.sliderPaddingDiv), this._ui.seekBar.addEventListener('input', function(d) {
            this._ui.seekBar.style.backgroundImage = 'linear-gradient(to right, #ea0029 ' + d.target._value + '%, #ea0029 ' + d.target._value + '%, transparent ' + d.target._loadedValue + '%, transparent ' + d.target._loadedValue + '%)';
            if (this._ui.seekBar.thumbInteracting) {
                this.viewSeekBarThumbnail(d.target._value, true);
            }
        }.bind(this)), this._ui.seekBar.paddingBar.addEventListener('mousemove', function(d) {
            this.viewSeekBarThumbnail(d.offsetX / this._ui.seekBar.clientWidth * 100);
        }.bind(this)), this._ui.seekBar.paddingBar.addEventListener('mouseout', function(d) {
            $(this._ui.sliderThumbnail).css('display', 'none');
        }.bind(this)), this._ui.seekBar.addEventListener('seek', function(d) {
            this.seek(d.target._value), $(this._ui.sliderThumbnail).css('display', 'none');
        }.bind(this)), $(this._ui.prev10sBtn).on('click', function() {
            if (this._player.currentPosition) {
                var d = this._player.currentPosition - 10;
                if (d < 0) {
                    d = 0;
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
            this._ui.fullScreen = new FullscreenButton(this, this._ui.fullBtn);
        }
        if (isMobile()) {
            var a = getOrientation();
            if (typeof a == 'string') {
                if (a == 'landscape-primary' || a == 'landscape-secondary' || a == 'landscape') this.hideChatWrap();
                else(a == 'portrait-primary' || a == 'portrait-secondary' || a == 'portrait') && this.showChatWrap();
            }
            $(window).on('orientationchange', function() {
                var f = getOrientation();
                if (typeof f == 'string') {
                    if (f == 'landscape-primary' || f == 'landscape-secondary' || f == 'landscape') {
                        this.hideChatWrap();
                    } else(f == 'portrait-primary' || f == 'portrait-secondary' || f == 'portrait') && this.showChatWrap();
                }
            }.bind(this));
        }
        if (this._options.content_data.use_vod) {
            $(this._ui.sliderPaddingDiv).width($(this._ui.sliderArea).width());
        }
    }
    createQualityDiv(a) {
        var b = document.createElement('div');
        b.className = 'fc_default cusDD_opt', b.id = a.id, b.dataset.id = a.id, b.dataset.height = a.height;
        var c = '';
        if (b.dataset.height == 'auto') c = 'AUTO';
        else {
            c = b.dataset.height + 'P';
        }
        return b.innerHTML = c, b;
    }
    createQualityBtn(a) {
        var b = document.createElement('button');
        b.className = 'text-btn fc_default bold', b.id = a.id, b.dataset.id = a.id, b.dataset.height = a.height;
        var c = '';
        if (b.dataset.height == 'auto') c = 'AUTO';
        else {
            c = b.dataset.height + 'P';
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
            this._ui.qualitySelect.style.display = 'none', this._ui.qualitySelectBtn.style.display = 'none';
            return;
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
            }
            for (var g = 0; g < this._ui.qualityPopupItems.length; g++) {
                this._ui.qualityPopupItems[g].addEventListener('click', function(l) {
                    var m = null;
                    if (l.target.id == 'auto') m = -1;
                    else {
                        m = parseInt(l.target.id);
                    }
                    for (var n = 0; n < this._ui.qualityPopupItems.length; n++) {
                        removeClassName(this._ui.qualityPopupItems[n], 'on');
                    }
                    l.target.classList.add('on'), this._ui.qualityPopup.style.display = 'none';
                    if (this._player.quality == m) return;
                    this._player.quality = m;
                    if (l.target.id == 'auto') {
                        for (var o = 0; o < this._ui.qualityPopupItems.length; o++) {
                            if (this._ui.qualityPopupItems[o].id == this._player._hls.nextAutoLevel) {
                                addClassName(this._ui.qualityPopupItems[o], 'on');
                                break;
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
                $(this).data().id != l.id ? (!$(this).attr('selected') || l.id != 'auto') && ($(this).removeAttr('selected'), $(this).removeClass('on')) : ($(this).attr('selected', 'selected'), $(this).addClass('on'));
            });
            if (l.id == 'auto') {
                m = -1;
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
                    cusDDselectOption('#' + a, $(this).data().id, true);
                }
            });
            return;
        }
        this._ui.subtitlePopupItems = [];
        if (!this._player.subtitleList) {
            this._ui.ccSelect.style.display = 'none', this._ui.ccSelectBtn.style.display = 'none';
            return;
        } else {
            if (!this._player.subtitleList.length) {
                this._ui.ccSelect.style.display = 'none', this._ui.ccSelectBtn.style.display = 'none';
                return;
            } else {
                if (!this._player.subtitleList[0].lang) {
                    return;
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
            $(this._ui.ccSelect).click(), m.stopPropagation();
        }.bind(this));
        var a = '#' + this._ui.ccSelect.getAttribute('id');
        cusDD(a, null, function(m) {
            console.log('selected ccSelect option : ', m), $(a).find('.cusDD_opt').each(function(n) {
                if ($(this).data().id != m.id) $(this).removeAttr('selected'), $(this).removeClass('on');
                else {
                    $(this).attr('selected', 'selected'), $(this).addClass('on');
                }
            }), this._player.subtitleTrack = parseInt(m.id);
        }.bind(this)), cusDDselectOption(a, -1, true), this._ui.ccSelect = document.getElementById(this._ui.ccSelect.getAttribute('id'));
        for (var h = 0; h < this._ui.subtitlePopupItems.length; h++) {
            this._ui.subtitlePopupItems[h].addEventListener('click', function(n) {
                $(this._ui.subtitlePopup).find('.ta_c > button').each(function() {
                    if ($(this).data().id != $(n.target).data().id) $(this).removeAttr('selected'), $(this).removeClass('on');
                    else {
                        $(this).attr('selected', 'selected'), $(this).addClass('on');
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
                this.initPlayerUI();
            } else a === RICH360_STATE.RICH360_READY && (this.initHideCtrllerEvent(), this._ui.volumeSlider.value = this._player.volume * 100, this.initQuality());
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_QUALITY_CHANGE, function(a) {
            for (var b = 0; b < this._ui.qualityItems.length; b++) {
                if (this._ui.qualityItems[b].id == a) addClassName(this._ui.qualityItems[b], 'on'), $(this._ui.qualityItems[b]).attr('selected', 'selected');
                else {
                    if (this._ui.qualityItems[b].id != 'auto' || !this._player.isAutoQuality) {
                        removeClassName(this._ui.qualityItems[b], 'on'), $(this._ui.qualityItems[b]).removeAttr('selected');
                    }
                }
            }
            for (var c = 0; c < this._ui.qualityPopupItems.length; c++) {
                if (this._ui.qualityPopupItems[c].id == a) addClassName(this._ui.qualityPopupItems[c], 'on');
                else(this._ui.qualityPopupItems[c].id != 'auto' || !this._player.isAutoQuality) && removeClassName(this._ui.qualityPopupItems[c], 'on');
            }
            this._player.isAutoQuality && (addClassName(this._ui.qualityItems[0], 'on'), addClassName(this._ui.qualityPopupItems[0], 'on'));
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ENDED, function() {
            $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_WAIT, function(a) {
            this.loading(a.wait, a.wait_on);
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_DURATION_CHANGE, function() {
            if (this._options.content_data.use_vod && this._ui.seekBar) {
                if (!this._ui.seekBar.thumbInteracting) {
                    this.setDurationText(this._player.currentPosition, this._player.duration);
                    if (this._player.currentPosition == 0) {
                        this._ui.seekBar.value = 0;
                    } else this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration;
                }
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, function(a) {
            if (a) $(this._ui.playBtn).removeClass('pl-i-play').addClass('pl-i-pause'), this._ui.playThumbnail.style.display = 'none';
            else {
                $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ERROR, function(a) {
            if (a == 'Authorization failed') {
                Chat.Manager.destroy();
                if (this._player && this._player._hls) this._player._hls.destroy();
                removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_AUTH_FAIL_DESC'), gettext('P_ALERT_OK'), function() {
                    location.href = LUEz1;
                });
            }
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_ACCESS_DENIED, function(a) {
            var b = POPUP_CONFIG,
                c = null;
            Chat.Manager.destroy();
            if (this._player && this._player._hls) this._player._hls.destroy();
            removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id');
            if (isIOS()) {
                setTimeout(function() {
                    location.href = LUEz1;
                }, 3000);
            }
            if (a == 'Permission Denied') {
                c = b.permissionDenied(egl, function() {
                    location.href = LUEz1;
                }), alertPopup(c.title, c.desc, c.btnTxt, c.okCallback);
            } else alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_LIMIT_DEVNUM_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_LIVE_ENDED, function() {
            this._player._hls.destroy(), Chat.Manager.destroy(), removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id');
            if (isIOS()) {
                setTimeout(function() {
                    location.href = LUEz1;
                }, 3000);
            }
            alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_SOURCE_CHANGE, function(a) {
            this.changeSource(a);
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_SUBTITLE_FOUND, function() {
            this.initSubtitle();
        }.bind(this)), this._player.addListener(RICH360_EVENTS.RICH360_THUMBNAIL_UPDATE, function(a) {
            this.updateThumbnail(a);
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
            $(this._ui.loadingDiv).css('display', 'none'), $(this._ui.loadingDiv).parent().css('display', 'none');
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
            this._options.container.addEventListener('touchend', a.bind(this), false);
        } else this._options.container.addEventListener('mousemove', this.wakeupController.bind(this), false), this._options.container.addEventListener('mouseup', a.bind(this), false);

        function a(c) {
            this._wakeupPastTime = 0;
            if (!this._player._video.paused && (c.target.tagName === 'CANVAS' || c.target.tagName === 'VIDEO' || c.target === this._ui.playerBottomWrap || c.target.id == 'loadingWrap' || c.target.id == 'subtitleDiv' || c.target.parentElement.id == 'subtitleDiv')) {
                if (this._ui.playerBottomWrap.style.display == 'block') this._ui.playerBottomWrap.style.display = 'none', this.showChatOpenBtn(false), this.setTimerHidePlayerController(false);
                else {
                    this._ui.playerBottomWrap.style.display = 'block';
                    if (!$(this._ui.chatContents).hasClass('is-active')) {
                        this.showChatOpenBtn(true);
                    }
                    this.setTimerHidePlayerController(true);
                }
            }
            if (this._player._video.paused) {
                this._ui.playerBottomWrap.style.display = 'block';
                if (!$(this._ui.chatContents).hasClass('is-active')) {
                    this.showChatOpenBtn(true);
                }
            }
            return true;
        }
        this.setTimerHidePlayerController(true), this._initHideCtroller = true;
    }
    setTimerHidePlayerController(a) {
        let b = a;
        if (typeof b === 'undefined') b = true;
        clearTimeout(this._timer.hidePlayerController.timer), this._timer.hidePlayerController.timer = null;
        if (b) {
            this._timer.hidePlayerController.timer = setTimeout(this.hidePlayerController.bind(this), this._timer.hidePlayerController.period);
        }
    }
    hidePlayerController() {
        var a = this._ui.volumeSlider.thumbInteracting || !this._player._ui_play;
        if (this._options.content_data.use_vod && this._ui.seekBar) {
            a = a || this._ui.seekBar.thumbInteracting;
        }
        if (a) {
            this.wakeupController();
            return;
        }
        this._ui.playerBottomWrap.style.display = 'none', this.showChatOpenBtn(false), $('.cusDD_options').slideUp(200), $('.cusDD_arrow').removeClass('active');
    }
    wakeupController(a) {
        return this._ui.playerBottomWrap.style.display = 'block', !$(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true), this._wakeupPastTime = 0, this.setTimerHidePlayerController(true), true;
    }
    hideChatWrap() {
        if ($(this._ui.pageWrap).hasClass('pl-t-default')) {
            $(this._ui.pageWrap).removeClass('pl-t-default').addClass('pl-t-fullscreen'), $(this._ui.chatWrap).addClass('chat_full'), $(this._ui.chatContents).removeClass('is-active'), this.showChatOpenBtn(true);
        } else $(this._ui.pageWrap).hasClass('pl-t-default_nochat') && $(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
        $(this._ui.playerBottomWrap).css('display', 'block'), $(this._ui.playerWrap).css('z-index', 'auto'), $(this._ui.playerWrap).css('position', ''), this._wakeupPastTime = 0;
    }
    showChatWrap() {
        if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen')) $(this._ui.pageWrap).removeClass('pl-t-fullscreen').addClass('pl-t-default'), $(this._ui.chatWrap).removeClass('chat_full');
        else {
            if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen_nochat')) {
                $(this._ui.pageWrap).removeClass('pl-t-fullscreen_nochat').addClass('pl-t-default_nochat');
            }
        }
        $(this._ui.playerBottomWrap).css('display', 'block'), $(this._ui.playerWrap).css('z-index', '3'), this._wakeupPastTime = 0, $(this._ui.chatContents).addClass('is-active'), this.showChatOpenBtn(false);
        if (isMobile()) {
            var a = getOrientation();
            if (typeof a == 'string') {
                if (a == 'landscape-primary' || a == 'landscape-secondary' || a == 'landscape') {
                    $(this._ui.chatInputWrap).css('display', 'none');
                } else {
                    if ($(this._ui.navBtnWrap).find('button[name=chatnavbtn]').hasClass('on')) {
                        $(this._ui.chatInputWrap).css('top', ''), $(this._ui.chatInputWrap).css('position', 'relative'), $(this._ui.chatInputWrap).css('display', 'block');
                    } else {
                        $(this._ui.chatInputWrap).css('display', 'none');
                    }
                }
            } else $(this._ui.chatInputWrap).css('top', ''), $(this._ui.chatInputWrap).css('position', 'relative'), $(this._ui.chatInputWrap).css('display', 'block');
        }
        if ($(this._ui.navBtnWrap).find('button[name=multiviewnavbtn]').hasClass('on')) this._player._display && (this._player._display.showMultiPreview = true);
        else {
            this._player._display && (this._player._display.showMultiPreview = false);
        }
    }
    play() {
        !this._initHideCtroller && this.initHideCtrllerEvent();
        if (isIOS()) {
            if (!this._player._video.bfTime) {
                if (this._options.use_multiview) this._player._video.src = this._player._sourceBase + this._player._manifest.multiview_list[this._player._view].path;
                else {
                    this._player._video.src = this._player._sourceBase + this._player._manifest.singleview_list[0].path;
                }
            }
        } else {
            if (this._player._hls._hls) {
                if (this._player._hls._hls.liveSyncPosition) {
                    this._player.currentPosition = this._player._hls._hls.liveSyncPosition;
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
                a = 0;
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
            $(this._ui.sliderArea.slider.thumb).append($(this._ui.sliderThumbnail)), this.setDurationText(this._thumbnailGridData.duration * c, this._thumbnailGridData.duration), $(this._ui.sliderThumbnail).css('top', ''), $(this._ui.sliderThumbnail).css('left', '');
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
            this.thumbInteracting = true, this.interactStartX = k.clientX || k.touches && k.touches[0].clientX, this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
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
            this.thumbInteracting && (this.thumbInteracting = false, this.dispatchEvent(this.seekEvent));
        },
        h = function(k) {
            if (k.target != this.thumbDiv) {
                this.thumbInteracting = true;
                var l = k.offsetX;
                if (!l) {
                    var m = k.target.getBoundingClientRect();
                    l = k.targetTouches[0].pageX - m.left;
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
            $('body').removeClass('fullscreen'), this._is_fullscreen_button = true, $(this._dom_element).removeClass('pl-i-full float_r').addClass('pl-i-screen float_r');
            if (isMobile()) {
                var c = getOrientation();
                if (typeof c == 'string') {
                    if (c == 'landscape-primary' || c == 'landscape-secondary' || c == 'landscape') this._web_ui.hideChatWrap();
                    else {
                        if (c == 'portrait-primary' || c == 'portrait-secondary' || c == 'portrait') {
                            this._web_ui.showChatWrap();
                        }
                    }
                }
            } else {
                if (isSafari()) setTimeout(function() {
                    b._web_ui.showChatWrap();
                });
                else {
                    b._web_ui.showChatWrap();
                }
            }
            this.setIsFullScreen(false), this.showMultiviewBtn(true), this._web_ui.wakeupController();
        } else $('body').addClass('fullscreen'), this._is_fullscreen_button = false, $(this._dom_element).removeClass('pl-i-screen float_r').addClass('pl-i-full float_r'), this._web_ui.hideChatWrap(), isMobile() && screen.orientation.lock('landscape'), this.setIsFullScreen(true), this.showMultiviewBtn(false);
        updateTicketDivPos();
    }
    onclick() {
        if (this._is_fullscreen_button) {
            if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {
                if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
                    var a = document.querySelector('html');
                    if ('requestFullscreen' in a) a.requestFullscreen();
                    else {
                        if ('webkitRequestFullscreen' in a) {
                            a.webkitRequestFullscreen();
                        } else {
                            if ('mozRequestFullScreen' in a) a.mozRequestFullScreen();
                            else {
                                if ('msRequestFullscreen' in a) {
                                    a.msRequestFullscreen();
                                }
                            }
                        }
                    }
                    this._is_fullscreen_button = false;
                } else {
                    console.log('fullscreen not enabled');
                }
            } else {
                console.log('fullscreen not supported');
            }
        } else {
            var b = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            if (b && b == document.querySelector('html')) {
                this._is_fullscreen_button = true;
                if ('exitFullscreen' in document) document.exitFullscreen();
                else {
                    if ('webkitExitFullscreen' in document) document.webkitExitFullscreen();
                    else {
                        if ('mozCancelFullScreen' in document) document.mozCancelFullScreen();
                        else {
                            if ('msExitFullscreen' in document) {
                                document.msExitFullscreen();
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
            clearInterval(this._logItv);
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
                            this._options.content_data = JSON.parse(JSON.stringify(g.content)), this._options.content_data.current_channel_id = g.content.channels[h].id, this._listener.trigger(RICH360_EVENTS.RICH360_SOURCE_CHANGE, this._options.content_data.channels[h].hls_url);
                        }
                        break;
                    }
                }
                iCM(!!g.user.is_mute);
            } catch (l) {
                console.log(l);
            }
        }.bind(this), d.onloadend = function(f) {
            if (d.status === 400 || d.status === 401) this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
            else {
                if (d.status === 403) {
                    this._listener.trigger(RICH360_EVENTS.RICH360_LIVE_ENDED, 'Live ended');
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
                f = true;
            } else e && (f = false);
        } else {
            f = !e;
        }
        return f;
    }
    attachMedia(a) {
        this._video = a;
        if (this._isMultiview) {
            if (!isAndroid() && this._video.canPlayType('application/vnd.apple.mpegurl') || isIOS() || isIpadOS()) {
                this._isDummy = true, this._hls = null;
            } else Hls.isSupported() && (this._isDummy = false, this._hls = new Hls(this._config));
        } else {
            if (isIOS() || isIpadOS()) this._isDummy = true, this._hls = null;
            else {
                if (Hls.isSupported()) {
                    this._isDummy = false, this._hls = new Hls(this._config);
                } else {
                    this._isDummy = true, this._hls = null;
                }
            }
        }
        this._video.addEventListener('canplay', function() {
            this._config.startPosition != undefined && this._config.startPosition > 0 && (this._video.currentTime = this._config.startPosition);
            if (this._config.autoplay) {
                this._video.play();
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
            this._hls.recoverMediaError();
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
            return this._hls.levelController.manualLevel == -1;
        }
    }
    get levels() {
        return this._isDummy ? false : this._hls.levels;
    }
    get nextAutoLevel() {
        if (this._isDummy) return 0;
        else {
            return this._hls.abrController.nextAutoLevel;
        }
    }
    get currentLevel() {
        if (this._isDummy) {
            return 0;
        } else {
            return this._hls.currentLevel;
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
                this._options.credentials.user_id = null;
            }!('content_id' in this._options.credentials) && (this._options.credentials.content_id = null);
            if (!('ticket_id' in this._options.credentials)) {
                this._options.credentials.ticket_id = null;
            }
        } else this._options.credentials = {
            'device_id': null,
            'user_id': null,
            'content_id': null,
            'ticket_id': null
        };
        if (this._options.container) {
            this._parent_dom = this._options.container;
        } else this._parent_dom = document.body;
        if (this._options.use_multiview) {
            this.setChangingView(false);
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
            console.log(c);
            if (a.readyState === 4) {
                this.base = 'rich360', this.baseCode = [];
                var d, f, g;
                for (d = 0; d < 7; d++) {
                    this.baseCode[d] = this.base.charCodeAt(d);
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
                        n[o] = l.charCodeAt(o);
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
                        r[o] = String.fromCharCode(p[o]);
                    }
                    for (o = 0; o < 8; o++) {
                        r[o + 8] = String.fromCharCode(q[o]);
                    }
                    return r;
                }.bind(this), this.validate_response = function(l, m) {
                    var n = this.encrypt(l.ltstr, 16),
                        o = '';
                    for (var p = 0; p < 16; p++) {
                        o += n[p];
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
                    this._options.content_data.use_vod && this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.thumbnail_grid), this.initialize();
                }.bind(this)), this._logger.startInterval();
            }
        }.bind(this), a.send(b);
    }
    addListener(a, b) {
        this._listener.addListener(a, b);
        if (a == RICH360_EVENTS.RICH360_STATE_CHANGE) {
            if (this._ready_state == RICH360_STATE.RICH360_INIT) {
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT);
            }
            if (this._ready_state == RICH360_STATE.RICH360_READY) {
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT), this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY);
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
            this._video = document.createElement('video'), this._options.container.append(this._video);
        }
        if (!this._options.use_multiview) {
            addClassName(this._video, 'player-video-wrap');
        }
        this._video.crossOrigin = 'anonymous', this._video.disablePictureInPicture = true, this._video.oncontextmenu = function() {
            return false;
        };
        let a = Hls.DefaultConfig;
        a.liveSyncDurationCount = 3, a.startLevel = -1;
        this._options.seek_to && (a.startPosition = this._options.seek_to);
        if (this._options.autoStart) {
            this._video.autoplay = this._options.autoStart;
        } else this._video.autoplay = false;
        a.fragLoadingRetryDelay = 100, a.startFragPrefetch = true, a.renderTextTracksNatively = false, a.xhrSetup = function(j, k) {
            k.indexOf('.m3u8') === -1 && k.indexOf('.ts') === -1 && k.indexOf('.vtt') === -1 && k.indexOf('.webvtt') === -1 && k.indexOf('.key') === -1 && k.indexOf('.kmv') === -1 && (j.withCredentials = true);
        };
        if (this._options.use_multiview) {
            this._options.initial_view >= 0 && this._options.initial_view < this._manifest.multiview_list.length ? this._view = this._options.inital_view : this._view = 0;
            var b = [];
            for (var c = 0; c < this._manifest.multiview_list[this._view].sub_positions.length; c++) {
                var d = document.createElement('div');
                d.dataset.view = c, addClassName(d, 'view_wrap');
                var e = document.createElement('label');
                e.classList = 'view-name bolder fs_14 fc_point', this._view == c && addClassName(d, 'on'), e.innerText = this._manifest.singleview_list[c].name, d.style.backgroundColor = 'transparent', d.style.zIndex = 1, d.append(e), this._options.multiViewList.append(d), b.push(d);
            }
            this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), a, this._options.use_multiview), this._hls.attachMedia(this._video), this._display = new MultiViewDisplay(this._options, this._video, this, this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions, b), this._hls.timeDictionary = {}, this._hls.snsInDictionary = [];
            if (!this._hls._isDummy) {
                this._hls.on(Hls.Events.FRAG_PARSED, function(l, m) {
                    let n = m.frag;
                    console.log('curTime / this.duration : ', this._video.currentTime + '/' + this.duration), console.log('frag.startPTS : ', n.sn, n.startPTS), this._hls.timeDictionary[n.sn + ''] = n.startPTS, this._hls.snsInDictionary.push(n.sn);
                    while (this._hls.snsInDictionary.length > 100) {
                        let o = 0;
                        if (this._hls.snsInDictionary[o] == 0) o = 1;
                        let p = this._hls.snsInDictionary[o];
                        this._hls.snsInDictionary.splice(o, 1), delete this._hls.timeDictionary[p + ''];
                    }
                    n.startPTS == 0 && (this._hls.startSN = n.sn);
                }.bind(this));
            }
        } else {
            this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[0].path.endsWith('.m3u8'), a, this._options.use_multiview), this._hls.attachMedia(this._video);
        }
        this.attachVideoListeners();
        !this._hls._isDummy ? this.attachHlsListeners() : (this._video.setAttribute('playsinline', ''), this._video.setAttribute('webkit-playsinline', ''));
        this._play_status = 'none';
        if (this._options.use_multiview) this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
        else {
            this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[0].path);
        }
        this._subtitleManager = new Rich360SubtitleManager(this);
        if (this._loggerItv) {
            clearInterval(this._loggerItv), this._loggerItv = null;
        }
        this._loggerItv = setInterval(function() {
            this._play_status && this._video.currentTime && this._logger.addLog({
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
            this._sourceBase = '';
        } else {
            this._sourceBase = this._options.source.substring(0, b) + '/';
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
                this._manifest = MULTIVIEW_PLAYER_DEFAULT_MANIFEST, this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1), this._manifest.multiview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1);
            } else {
                this._manifest = SINGLEVIEW_PLAYER_DEFAULT_MANIFEST, this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1), this._manifest.singleview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1);
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
                this._newVideo.disablePictureInPicture = true, this._newVideo.oncontextmenu = function() {
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
                    let s = -1,
                        t = -1;
                    for (let z in l.timeDictionary) {
                        let B = Number.parseInt(z + '');
                        if (t == -1 || B > t) t = B;
                        if (s == -1 || B < s) s = B;
                    }
                    let u = (l.timeDictionary[t + ''] - l.timeDictionary[s + '']) / (t - s),
                        w = l.timeDictionary[t + ''] + u * (g.startSN - t);
                    m = w - g.startPTS, console.error('startSN : ' + g.startSN + ' not defined in oldHLS'), console.error(l.timeDictionary), console.error('estPTS : ' + w + ' timePerSN : ' + u + ' smallestSN : ' + s + ' biggestSN : ' + t + ' newStartSN : ' + g.startSN + ' newStartPTS : ' + g.startPTS);
                }
                let n = function(C) {
                    h.pause();
                    let D = (h.currentTime - (k.currentTime - m)) * 1000;
                    console.log('@@oldHLS.timeDictionary : ', l.timeDictionary), console.log('@@timeDiff : ', m), console.log('@@newVideo.currentTime : ', h.currentTime), console.log('@@oldVideo.currentTime : ', k.currentTime), console.log('@@@ waitTime : ', D), setTimeout(function() {
                        h.volume = k.volume, this._subtitleManager._prevViewOffsetTime = k.currentTime - h.currentTime, this._subtitleManager._prevViewId = this._prevViewId, !k.paused && h.play(), k.pause(), g._hls.subtitleTrack = this._subtitleManager._prevSubtitleTrack, l.detachMedia(), l.destroy(), k = null, l = null, this._video = h, this._hls = g, this.attachVideoListeners(), !this._hls._isDummy && (this.attachHlsListeners(), this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, this._hls.nextAutoLevel)), this.setChangingView(false), this._display.replaceVideo(h), this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                            'wait': false,
                            'wait_on': RICH360_WAIT_ON.RICH360_SEEK
                        });
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
                            console.log('start(' + E + ') : ' + C.start(E)), console.log('end(' + E + ') : ' + C.end(E));
                            if (C.start(E) <= D && D + 1 <= C.end(E)) {
                                h.currentTime = D;
                                break;
                            }
                        }
                        if (E != C.length) {
                            console.log('clearInterval'), clearInterval(p), clearTimeout(q);
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
                                E = C.start(G);
                            }
                            C.end(G) > F && (F = C.end(G));
                        }
                        if (E) h.currentTime = E + 0.5;
                        else {
                            h.currentTime = F - 1;
                        }
                        console.log('clearInterval'), clearInterval(p);
                    }, 5000);
            }.bind(this);
            h.addEventListener('canplaythrough', function(k) {
                h.readyForChange = true;
                if (g.readyForChange) i();
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
            this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
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
            this.requestKMVManifest(function() {
                if (isIOS()) this._video = null, this.initialize();
                else {
                    this._hls.loadSource(a), this._hls.attachMedia(this._player._video);
                }
                this.updateThumbnail(), this._options.content_data.use_vod && this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.thumbnail_grid);
            }.bind(this));
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
            this._video.play();
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
            if (a.track.mode == 'hidden') {
                a.track.mode = 'showing';
            }
        }
        c.removeEventListener('cuechange', this.updateNativeTrackCuesListener), c.addEventListener('cuechange', this.updateNativeTrackCuesListener);
        if (this._options.use_multiview) {
            this.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
        }
    }
    updateNativeTrackCuesListener(a) {
        if (this._subtitleManager._isHideDefaultSubtitles) {
            if (a.target.mode == 'showing') {
                a.target.mode = 'hidden';
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
            this._play_status = 'play', this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
        }.bind(this)), this._video.addEventListener('pause', function() {
            this._play_status = 'pause', this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
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
            this._ui_play = false, this._listener.trigger(RICH360_EVENTS.RICH360_ENDED), this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false), this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                'wait': false,
                'wait_on': RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
            }), this._play_status = 'end', this._logger.addLog({
                'event': 'end'
            });
        }.bind(this)), this._video.addEventListener('error', function() {
            console.log('Video error encountered. Running recover function'), this._hls && this._hls.recoverMediaError(), this._video.paused ? (this._ui_play = false, this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false)) : this.play_on();
        }.bind(this)), this._video.addEventListener('loadedmetadata', function() {
            this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY), this._ready_state = RICH360_STATE.RICH360_READY, this._hls._isDummy && (this._video.textTracks.removeEventListener('addtrack', this.addNativeTrackListener), this._video.textTracks.addEventListener('addtrack', this.addNativeTrackListener));
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
                    this._subtitleManager._prevSubtitleTrack = this.subtitleTrack;
                }
                this._subtitleManager.showDefaultSubtitle();
            } else a.type == 'webkitendfullscreen' && ($('body').removeClass('fullscreen'), this._options.use_multiview && this.changeSingleView(false), this._subtitleManager.hideDefaultSubtitle(), this.pause_on(), this._rich360Player.hidePlayerController(), setTimeout(function() {
                this._rich360Player.wakeupController();
            }.bind(this), 100));
        }.bind(this));
    }
    attachHlsListeners() {
        this._hls.on(Hls.Events.ERROR, function(a, b) {
            if (b.fatal) {
                switch (b.type) {
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
        }.bind(this)), this._hls.on(Hls.Events.MANIFEST_PARSED, function() {
            this._quality_list = [];
            let c = this._hls.levels;
            for (var a in c) {
                this._quality_list.push(c[a]);
            }
            this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY), this._ready_state = RICH360_STATE.RICH360_READY;
        }.bind(this)), this._hls.on(Hls.Events.LEVEL_SWITCHED, function(a, b) {
            this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
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
                    d.push({
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
            this._subtitleManager.showDefaultSubtitle(), !this._video.paused && this._video.webkitEnterFullscreen();
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
            if (0 > a) a = 0;
            if (a > this._video.duration) a = this._video.duration;
            if (Math.abs(a - this._video.currentTime) > 0.5) {
                this._video.currentTime = a, this._logger.addLog({
                    'event': 'seek',
                    'time': a
                }), this._render_once_on_seek = true;
            }
        } else {
            console.log('isNan');
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
                    this._video.textTracks[c].mode = 'showing';
                } else {
                    this._video.textTracks[c].mode = 'disabled';
                }
            }
        } else this._hls._hls.subtitleTrack = a;
        this._subtitleManager.clearCueData();
    }
    get subtitleTrack() {
        if (this._hls._isDummy) {
            var a = this._video.textTracks.length;
            for (var b = 0; b < a; b++) {
                if (this._video.textTracks[b].mode == 'showing' || this._video.textTracks[b].mode == 'hidden') return b;
            }
            return -1;
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
            removeClassName(b._wrapperList, 'changing-source');
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
            this._cues.push(a[b]);
        }
    }
    clearCueData() {
        this._cues = [], this._subtitleDiv.innerHTML = '', this._subtitleDiv.style.display = 'none';
    }
    drawSubtitles() {
        var a = [];
        for (var b = 0; b < this._cues.length; b++) {
            if (this._prevViewId == this._cues[b].view) {
                this._cues[b].startTime += this._prevViewOffsetTime, this._cues[b].endTime += this._prevViewOffsetTime;
            }
            if (this._player._video.currentTime > this._cues[b].endTime && !this._player._options.content_data.use_vod) {
                this._cues.splice(b, 1), b--;
                continue;
            }
            if (this._player._video.currentTime >= this._cues[b].startTime && this._player._video.currentTime < this._cues[b].endTime) {
                var c = false;
                for (var d = 0; d < a.length; d++) {
                    if (a[d].startTime == this._cues[b].startTime && a[d].endTime == this._cues[b].endTime) {
                        c = true;
                    }
                }!c && a.push({
                    'startTime': this._cues[b].startTime,
                    'endTime': this._cues[b].endTime,
                    'text': this._cues[b].text
                });
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
                h = 0;
            }
            g.bottom += h;
        }
        if (!this._player._hls._isDummy) {
            if (parseInt(this._subtitleDiv.style.left.replace('px', '')) == parseInt(g.left) && parseInt(this._subtitleDiv.style.bottom.replace('px', '')) == parseInt(g.bottom) && this._player._hls._hls.subtitleTrack == this._subtitleTrack && this.compareArray(this._subtitleArr, a)) return;
        }
        var k = e / 100 * 50,
            l = e / 100 * 80,
            m = e / 100 * 2.5;
        if (e < 568) {
            m = e / 100 * 3.2;
        } else e > 1000 && (m = e / 100 * 2.2);
        var n = 2,
            o = 0,
            p = [];
        for (var b = 0; b < a.length; b++) {
            var q = a[b].text.split('\n'),
                r = q.length;
            for (var d = r - 1; d >= 0; d--) {
                if (q[d] == '') continue;
                var s = this.measureText(q[d], m) + m;
                if (s >= l) {
                    s = l;
                }
                var t = k - s / 2 - g.left;
                p[o] = '<p style="color:white;word-break:break-all;font-weight:700;text-shadow:#000000 0px 0px 7px;padding:1px 5px;width:' + s + 'px;margin-left:' + t + 'px;margin-bottom:2px;">' + q[d] + '</p>', o++;
                if (n == o) {
                    break;
                }
            }
            if (n == o) break;
        }
        var u = '';
        for (var v = p.length - 1; v >= 0; v--) {
            u += p[v];
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
                            this._player.subtitleTrack = b;
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
                return b;
            }
        }
        return -1;
    }
    hideDefaultSubtitle() {
        this._isHideDefaultSubtitles = true;
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            if (this._player._video.textTracks[b].mode == 'showing') {
                this._player._video.textTracks[b].mode = 'hidden', cusDDselectOption('#ccSelect', b, true);
            }
        }
    }
    showDefaultSubtitle() {
        this._isHideDefaultSubtitles = false;
        var a = this._player._video.textTracks.length;
        for (var b = 0; b < a; b++) {
            if (this._player._video.textTracks[b].mode == 'hidden') {
                this._player._video.textTracks[b].mode = 'showing';
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
            var k = createElementFromHTML('<div class="canvas-overlayer"><span class="label">' + gettext('MULTIVIEW_SWITCHING_VIEW') + '</span></div>');
            this._multiviewDivArr[j].append(k);
        }
        if (this._options.container) {
            this._parent_dom = this._options.container;
        } else this._parent_dom = document.body;
        this._mainDiv = document.createElement('div'), this._mainDiv.setAttribute('id', 'mvMainDiv'), this._mainDiv.style.overflow = 'hidden', this._mainDiv.style.position = 'absolute', this._mainDiv.appendChild(this._video), this._parent_dom.appendChild(this._mainDiv), this._video.readyState == 0 ? this._video.addEventListener('canplay', this.arrangeVideo.bind(this), {
            'once': true
        }) : this.arrangeVideo(), window.addEventListener('resize', function() {
            setTimeout(function() {
                this.arrangeVideo();
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
                if (n.singleview_id == this._player._view) {
                    a = n;
                    break;
                }
            }
        var b = this._video.videoWidth,
            c = this._video.videoHeight;
        !this._video.videoWidth && (b = this._bfVideoWidth);
        if (!this._video.videoHeight) {
            c = this._bfVideoHeight;
        }
        this._bfVideoWidth = b, this._bfVideoHeight = c;
        let d = a.width * b / (a.height * c);
        console.log('arrangement : ' + a.width + ', ' + a.height + ' video : ' + b + ', ' + c);
        let e = this._parent_dom.offsetWidth / this._parent_dom.offsetHeight;
        console.log('videoRatio : ' + d + ' containerRatio : ' + e);
        let f, g, h, i;
        if (d > e) {
            console.log('videoRatio > containerRatio'), f = this._parent_dom.offsetWidth, g = this._parent_dom.offsetWidth / d, h = (this._parent_dom.offsetHeight - g) / 2, i = 0;
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
                this._updateCanvasFlag = true, this._canvasTimeStamps = [], this._canvasTimeStamps.push(performance.now()), this._canvasTimeStampIndex = 0, window.requestAnimationFrame(this.drawCanvas.bind(this));
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
                $(this._multiviewCanvas[0]).css('margin-left', c + 'px'), d = true;
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
                this._canvasTimeStamps[this._canvasTimeStampIndex] = a, j = this._canvasTimeStampIndex + 1;
                if (j >= 100) j = 0;
            }
            this._canvasFPS = (this._canvasTimeStamps.length - 1) * 1000 / (this._canvasTimeStamps[this._canvasTimeStampIndex] - this._canvasTimeStamps[j]), setTimeout(() => window.requestAnimationFrame(this.drawCanvas.bind(this)), 10);
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
                    if (c) c();
                    return;
                }
                var d = new XMLHttpRequest();
                if (Tira == 'IDLE') d.open('GET', '/static/filtering/chat_filtering_idle.txt');
                else {
                    if (Tira == '210417_cix') d.open('GET', '/static/filtering/chat_filtering_cix.txt');
                    else {
                        d.open('GET', '/static/filtering/chat_filtering.txt');
                    }
                }
                d.overrideMimeType('text/plain; charset=utf-8'), d.onreadystatechange = function() {
                    if (d.readyState == XMLHttpRequest.DONE) {
                        if (d.status == 200 || d.status == 201) {
                            a = d.responseText.replace(/(\r\n\t|\n|\r\t)/gm, '|'), a = a.replace(/[\r]/gm, '');
                            if (a[a.length - 1] == '|') {
                                a = a.substr(0, a.length - 1);
                            }
                            b = true;
                            if (c) c();
                        }
                    }
                }, d.send();
            },
            'filteringChatText': function(c) {
                if (!b) return;
                var d = 'gi',
                    e = new RegExp(a, d);
                return c.replace(e, '***');
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
            return u.is_chat_used;
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
            return k;
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
            Chat.Manager.setUserId(), e = w, s = new PubNub({
                'publishKey': YPP3z,
                'subscribeKey': KSPdf,
                'uuid': n
            }), AWS.config.update({
                'region': Nierw,
                'accessKeyId': Yacaw,
                'secretAccessKey': Ytcsw
            }), t = new AWS.Kinesis(), Chat.Ui.initChatUIEvent(), Chat.Manager.setChatChannels(), Chat.Manager.setChatHistory(), Chat.Manager.initPubnubEvent();
        },
        'setChatHistory': function() {
            s.history({
                'channel': k,
                'count': 1
            }, function(z, A) {
                console.log(z, A);
                if (A) {
                    A.messages.length && Chat.Ui.updateNotice(A.messages[0].entry.update, A.messages[0].entry.timetoken, A.messages[0].entry.entry);
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
                            $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
                        }
                    }
                }
            });
        },
        'initPubnubEvent': function() {
            var w = [k, l];
            if (p) {
                w.push(j[p - 1]);
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
                    if (C.channel == k) Chat.Ui.updateNotice(C.message.update, C.timetoken, C.message.entry);
                    else {
                        if (C.channel == l) Chat.Ui.recvCtrlChMsg(C.message.update);
                        else {
                            var D = C.message.update.split(CHAT_MSG_SEPARATOR);
                            for (var E = 0; E < D.length; E++) {
                                var F = D[E].split(CHAT_USERID_SEPARATOR)[0];
                                if (n == F) continue;
                                if (Chat.Manager.checkArtistUser(F)) {
                                    Chat.Ui.displayMessage(C.message.update, C.timetoken, C.message.entry);
                                } else q.push(D[E]);
                            }
                            if (q.length) {
                                Chat.Manager.displayMessageItv(parseInt(C.timetoken));
                            }
                        }
                    }
                }
            }), s.subscribe({
                'channels': w
            });
        },
        'displayMessageItv': function(w) {
            if (r) {
                clearInterval(r), r = null;
            }
            var z = d / q.length;
            r = setInterval(function() {
                if (q.length) {
                    var B = q[0].split(CHAT_USERID_SEPARATOR)[0];
                    Chat.Ui.displayMessage(q[0], w, B), w = parseInt(w) + parseInt(z * 1000 * 10), q.splice(0, 1);
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
                    _availableChating = false, Chat.Ui.disableChatInput(a - g);
                    return;
                } else _availableChating = true, Chat.Ui.enableChatInput();
            }
            if (!Array.isArray(A)) {
                A = [A];
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
                        if (H.error) {} else {
                            if (Chat.Manager.checkArtistUser(n) && !C) {
                                if (I) {
                                    Chat.Ui.displayMessage(z, I.timetoken, n);
                                }
                                C = true;
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
                t.putRecord(E, function(J, K) {
                    if (J) {
                        console.log(J, J.stack);
                    } else {
                        console.log(K);
                        var L = new Date();
                        Chat.Ui.displayMessage(z, L.getTime() * 10000);
                    }
                });
            }
        },
        'checkOperationntUser': function(w) {
            return u.operation_account === w ? true : false;
        },
        'checkAdminUser': function(w) {
            if (u.admin_account === w) {
                return true;
            }
            return false;
        },
        'checkArtistUser': function(w) {
            for (var z = 0; z < u.artist_account.length; z++) {
                if (u.artist_account[z] === w) return true;
            }
            return false;
        },
        'initChatInterval': function() {
            h && clearInterval(h), h = setInterval(function() {
                g++;
                if (g >= a) {
                    g = 0, f = b;
                }
                f <= 0 ? Chat.Ui.disableChatInput(a - g) : Chat.Ui.enableChatInput();
            }, 1000);
        },
        'getNickName': function() {
            return e;
        },
        'destroy': function() {
            if (s) {
                s.destroy();
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
                    b = true;
                }
            }), $(document).on('touchend', function(h) {
                g = false, console.log('touchmove');
            }), $('#chatList').on('wheel', function(h) {
                h.originalEvent.deltaY < 0 && (b = true);
            }), $('#chatList').on('scroll', function() {
                if (d) return;
                var h = Math.ceil($('#chatList').scrollTop() + $('#chatList').height());
                if (h < $('#chatList')[0].scrollHeight) setTimeout(function() {
                    var l = Math.ceil($('#chatList').scrollTop() + $('#chatList').height());
                    l < $('#chatList')[0].scrollHeight && ($('#chatAnchor').css('display', 'block'), b = true);
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
                            $('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
                        }
                        $('#chatList').scrollTop($('#chatList')[0].scrollHeight), e = [];
                    }
                }
            }), $('#chatAnchor').on('click', function() {
                $('#chatList').scrollTop($('#chatList')[0].scrollHeight), $('#chatAnchor').css('display', 'none');
            }), $('#chatSendBtn').on('click', function() {
                var h = Chat.Manager.getNickName(),
                    i = Chat.Manager.getUserId();
                if (!h) {
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                    return;
                }
                var j = $('#chatInput').val();
                if (!j || !ChatFilter.checkFilteringData()) {
                    return;
                }
                if (Chat.Manager.checkOperationntUser(i)) {
                    Chat.Manager.submitUpdate(i, j, Chat.Manager.getNoticeChannel());
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
                    return $('#chatSendBtn').click(), false;
                }
            }), $('#chatInput').on('focus', function(h) {
                delayStopLoadingPanel();
            }), $('#chatInput').on('blur', function(h) {
                delayStopLoadingPanel();
            });
        },
        'setResizingPage': function(g) {
            d = g;
        },
        'updateNotice': function(g, h, i) {
            if (Chat.Manager.checkOperationntUser(i)) {
                if (g === '[delete]') {
                    $('#noticeChatWrap p[name=desc]').text(''), $('#noticeChatWrap').css('display', 'none');
                } else {
                    $('#noticeChatWrap p[name=desc]').text(g), $('#noticeChatWrap').css('display', 'block');
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
            var k = $('.dummy-wrap > .artist_chat_dummy').clone();
            k.removeClass('artist_chat_dummy');
            var l = f[Tira] || {},
                m = l[g] || null;
            if (m) {
                if (m.img) {
                    k.find('img').attr('src', '/static/imgs/c_event/' + Tira + '/' + m.img);
                }
                if (m.msgClass) {
                    k.find('.user_msg').addClass(m.msgClass);
                }
            }
            return k.find('p[name=nickname]').text(h), k.find('p[name=text]').text(i), k.find('p[name=text]').append('<span class="chat_time fc_fff fs_12" style="vertical-align: baseline;">' + j.format(' ap&nbsp;hh:mm:ss') + '</span>'), k;
        },
        'createUserChatDiv': function(g, h, i, j) {
            var k = $('.dummy-wrap > .user_chat_dummy').clone();
            return g == Chat.Manager.getUserId() && k.addClass('t_my'), k.removeClass('user_chat_dummy'), k.find('p[name=nickname]').text(h), k.find('span[name=text]').text(i), k.find('span[name=time]').text(j.format('ap hh:mm:ss')), k;
        },
        'displayMessage': function(g, h, i, j) {
            var k = Chat.Ui.convertChatMsg(g);
            if (!k) return;
            var l = new Date(h / 10000);
            if (Chat.Manager.checkArtistUser(i)) {
                m = Chat.Ui.createArtistChatDiv(i, k.nickName, k.text, l);
                if (b) e.push(m[0]);
                else {
                    $('#chatList').append(m);
                }
                $('#artistChatList').length && !j && $('#artistChatList').append(m.clone());
            } else {
                if (i) {
                    var m = Chat.Ui.createUserChatDiv(i, k.nickName, k.text, l);
                    if (b) {
                        e.push(m[0]);
                    } else {
                        $('#chatList').append(m);
                    }
                } else {
                    b = false, $('#chatAnchor').css('display', 'none');
                    var m = Chat.Ui.createUserChatDiv(Chat.Manager.getUserId(), k.nickName, k.text, l);
                    $('#chatList').append(m);
                }
            }
            $('#chatList .user_chat').css('margin-bottom', '1.25em');
            if ($('#artistChatList').length) {
                $('#artistChatList .user_chat').css('margin-bottom', '1.25em');
            }
            if (navigator.userAgent.indexOf('Firefox') === -1) {
                $('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
                if ($('#artistChatList').length) {
                    $('#artistChatList .user_chat:eq(-1)').css('margin-bottom', '0');
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
                $('#chatAnchor').css('display', 'block');
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
                $('#chatInput').prop('readonly', false), $('#chatInput').prop('placeholder', gettext('P_CHAT_INPUT_PLACEHOLDER'));
            }
        },
        'disableChatInput': function(g) {
            $('#chatInput').prop('readonly', true);
            if (g) $('#chatInput').prop('placeholder', interpolate(gettext('P_CHAT_ABLE_DELAY_PLACEHOLDER_%(delay)s'), {
                'delay': g
            }, true));
            else {
                $('#chatInput').prop('placeholder', '');
            }
        },
        'setHoldChatScroll': function(g) {
            c = g;
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
            clearInterval(_testItv[c]);
        } else a--, chatTest(c);
    }, b);
}

function chatTestItvStop() {
    for (var a in _testItv) {
        clearInterval(_testItv[a]);
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
        b = $('#mvMainDiv');
    }
    if (!$('#wmark').length) {
        var d = document.createElement('div');
        d.setAttribute('id', 'wmark'), b.append(d);
    }
    if (a) $('#wmark').css('background-image', 'url(' + a + ')'), _wmarkImgUrl = a;
    else {
        $('#wmark').css('background-image', 'url(' + _wmarkImgUrl + ')');
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
        var n = i * g;
        m = n / e, k = (h - n) / 2;
    } else {
        var n = j;
        m = n / f, l = (i - n) / 2;
    }
    if (m > 1) {
        m = 1;
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
        _ticketExposureTime -= 100;
        if (_ticketExposureTime < 0) {
            _ticketExposureTime = 0, clearInterval(_ticketExposureItv), _ticketExposureItv = null;
        }
        updateTicketDivPos();
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
        a = $('#mvMainDiv');
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
        a('#sliderPaddingDiv').width(a('#playerSliderArea').width());
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
        console.log('@@@ Single View on Multiview::', IS_SINGLEVIEW_ON_MULTIVIEW), console.log('@@@ Multiview::', USE_MULTIVIEW), USE_MULTIVIEW && a('body').addClass('multiview');
    }
    a(document).ready(function() {
        e();
        const f = 'keyboard-show-by-chat-input';
        var g = null,
            h = isIpadOS() && isChrome();
        addClassToElementByEnv(), injectDeviceContentHeightToCSS(), a(window).on('orientationchange', function() {
            console.log('EVENT::orientationchange'), injectDeviceContentHeightToCSS();
        }), a(window).resize(debounce(function() {
            console.log('EVENT::resize'), Chat.Ui.setResizingPage(true), isIpadOS() && (document.getElementsByTagName('video')[0].style.display = 'none'), c(), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight), setTimeout(function() {
                c(), a('#chatAnchor').css('display', 'none'), Chat.Ui.setResizingPage(false);
            }, 500), setTimeout(function() {
                if (isIpadOS()) {
                    document.getElementsByTagName('video')[0].style.display = 'block';
                }
                c(), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            }, 1000);
        }, 200)), a('#chatInput').on('focus', function() {
            console.log('EVENT::#chatInput::focus'), isIpadOS() && isChrome() && document.body.classList.add(f);
        }), a('#chatInput').on('blur', function() {
            console.log('EVENT::#chatInput::blur');
            if (isIpadOS() && isChrome()) {
                document.body.classList.remove(f);
            }
        }), a('.scrollbar-inner').scrollbar(), a('#noticeChatWrap button[name=closebtn]').on('click', function() {
            a('#noticeChatWrap').css('display', 'none');
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
            o.preventDefault(), i.open(), j.style.display = 'none', a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
        }), i.open(), a('#chatCloseBtn').on('click', function() {
            return a('#playerBottomWrap').css('display', 'block'), a('#chat-i-pushy').css('display', 'block'), true;
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
                r = false;
            }
            iCM(!!q.is_mute);
            if (!p.artist_account) {
                a('button[name=artistchatnavbtn]').css('display', ' none');
            } else {
                p.artist_account.indexOf(',') !== -1 ? p.artist_account = p.artist_account.split(',') : p.artist_account = [p.artist_account], a('button[name=artistchatnavbtn]').css('display', ' inline-block');
            }
            if (r) {
                k.multiViewList = document.getElementById('multiViewList'), k.use_multiview = true, a('button[name=multiviewnavbtn]').css('display', 'inline-block');
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
                a('#pageWrap').removeClass().addClass('pl-t-default_nochat'), a('#chatWrap').css('display', 'none');
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
                var u = true;
                Ythc == 'sub' && (u = false);
                if (p.channels[t].is_main_channel == u) {
                    s = p.channels[t].hls_url, k.content_data.current_channel_id = p.channels[t].id;
                    break;
                }
            }
            _player = new Rich360Player(k, l, s), a(document).on('click', '#playThumbnail button', function() {
                b(), a(this).parent().css('display', 'none'), _player.play();
            });
        }, function(o, p) {
            if (p == 400 || p == 401) removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_NOT_EXIST_LOGIN_INFO_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
            else {
                if (p == 403) removeCookie(DCvi + '_customer_id'), removeCookie(DCvi + '_ticket_id'), removeCookie(DCvi + '_user_id'), removeCookie(DCvi + '_chat_id'), alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                    location.href = LUEz1;
                });
                else {
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_TRY_AGAIN_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                }
            }
        }), a('button[name=chatnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'block'), a('#chatList').scrollTop(a('#chatList')[0].scrollHeight), setTimeout(function() {
                a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            }, 200);
            if (isMobile()) {
                var o = getOrientation();
                typeof o == 'string' ? o == 'landscape-primary' || o == 'landscape-secondary' || o == 'landscape' ? a('#chatInputWrap').css('display', 'block') : a('#chatInputWrap').css('display', 'block') : a('#chatInputWrap').css('display', 'block');
            } else {
                a('#chatInputWrap').css('display', 'block');
            }
            a('#holdChatScrollLabel').css('display', 'block'), a('#artistChatWrap').css('display', 'none'), a('#multiViewWrap').css('display', 'none'), a('button[name=chatnavbtn]').addClass('on'), a('button[name=artistchatnavbtn]').removeClass('on'), a('button[name=multiviewnavbtn]').removeClass('on'), _player && _player._options.use_multiview && (_player._player._display.showMultiPreview = false);
        }), a('button[name=artistchatnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'none'), a('#chatInputWrap').css('display', 'none'), a('#holdChatScrollLabel').css('display', 'none'), a('#artistChatWrap').css('display', 'block'), a('#multiViewWrap').css('display', 'none'), a('button[name=chatnavbtn]').removeClass('on'), a('button[name=artistchatnavbtn]').addClass('on'), a('button[name=multiviewnavbtn]').removeClass('on'), a('#artistChatList').scrollTop(a('#artistChatList')[0].scrollHeight), a('#chatAnchor').css('display', 'none'), _player && _player._options.use_multiview && (_player._player._display.showMultiPreview = false);
        }), a('button[name=multiviewnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'none'), a('#chatInputWrap').css('display', 'none'), a('#holdChatScrollLabel').css('display', 'none'), a('#artistChatWrap').css('display', 'none'), a('#multiViewWrap').css('display', 'block'), a('button[name=chatnavbtn]').removeClass('on'), a('button[name=artistchatnavbtn]').removeClass('on'), a('button[name=multiviewnavbtn]').addClass('on'), _player && _player._options.use_multiview && (_player._player._display.showMultiPreview = true);
        }), a(document).on('click', '#multiViewList .view_wrap', function() {
            if (_player) {
                if (_player._options.use_multiview) {
                    if (_player._player._video) {
                        if (!_player._player._video.paused) {
                            var o = _player._player.view;
                            _player._player.view = a(this).data().view, a(this).siblings().each(function() {
                                if (o == a(this).data().view) {
                                    return;
                                }
                            }), a();
                        }
                    }
                }
            }
        }), a('#stopChatScrollBtn').on('change', function() {
            Chat.Ui.setHoldChatScroll(!a(this).prop('checked'));
        }), a('#lockBtn').on('click', function() {
            if (a(this).hasClass('locked')) {
                a(this).removeClass('locked');
                if (!isMobile() && !isTablet() && !isIpadOS()) {
                    a('#volumeBtn').css('display', 'inline-block'), a('#volumeSlider').css('display', 'inline-block');
                }(!isIOS() || isIpadOS()) && d(_player) ? a('#qualitySelectBtn').css('display', 'block') : a('#qualitySelectBtn').css('display', 'none');
                if (_player._player.subtitleList) {
                    _player._player.subtitleList.length && _player._player.subtitleList[0].lang !== '' && a('#ccSelectBtn').css('display', 'block');
                } else {
                    a('#ccSelectBtn').css('display', 'none');
                }
                a('#fullBtn').css('display', 'block'), a('.pl-ctr-wrap').css('visibility', 'visible'), a('.pl-btm-wrap').css('visibility', 'visible');
            } else {
                a(this).addClass('locked'), a('#volumeBtn').css('display', 'none'), a('#volumeSlider').css('display', 'none'), a('#fullBtn').css('display', 'none'), a('#ccSelectBtn').css('display', 'none'), a('#qualitySelectBtn').css('display', 'none'), a('.pl-ctr-wrap').css('visibility', 'hidden'), a('.pl-btm-wrap').css('visibility', 'hidden');
            }
        }), a('#view-type-selector').on('click', '.btn-view-selector', function(o) {
            var p = a(o.target),
                q = null,
                r = window.location.href,
                s = null;
            if (p.hasClass('active')) return;
            q = p.data('view-type');
            if (q === 'singleview') window.location.replace(r + PARAM_SINGLEVIEW_ON_MULTIVIEW);
            else q === 'multiview' && (s = r.split(PARAM_SINGLEVIEW_ON_MULTIVIEW), window.location.replace(s[0]));
        });

        function n() {
            if (!document.hidden) {
                c();
            }
        }
        document.addEventListener('visibilitychange', n, false);
    });
})(jQuery), window.onpopstate = function(a) {
    location.replace(LUEz1);
}, window.onpageshow = function(a) {
    console.log('@@@onpageshow'), history.pushState({}, '', location.href);
};
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
        f.send();
    }
    $('#loadingDiv').css('display', 'block'), requestCnt++;
    if (!serverLoading) {
        serverLoading = setInterval(function() {
            !requestCnt && ($('#loadingDiv').css('display', 'none'), clearInterval(serverLoading), serverLoading = null);
        }, 100);
    }
    f.onreadystatechange = function() {
        if (f.readyState == XMLHttpRequest.DONE) {
            requestCnt--;
            if (f.status == 200 || f.status == 201) {
                d && d(JSON.parse(f.responseText));
            } else {
                console.log(f);
                if (f.status == 0) {} else {
                    if (!e) {
                        f.responseText && console.log(JSON.parse(f.responseText));
                    } else {
                        try {
                            var l = JSON.parse(f.responseText);
                            e(l, f.status);
                        } catch (p) {
                            e(f.responseText, f.status);
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
        clearInterval(e), $('#loadingDiv').css('display', 'none'), $('#alertPopup').css('display', 'block'), $('#alertPopup p[name=title]').text(a), $('#alertPopup p[name=desc]').text(b), $('#alertPopup button[name=okbtn]').text(c), $('#alertPopup button[name=okbtn],#alertPopup button[name=closebtn]').click(function() {
            $('#alertPopup button[name=okbtn]').unbind('click'), clearPopupData('alertPopup');
            if (d) {
                d(), d = null;
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
    return new RegExp('(?:^|\\s+)' + b + '(?:\\s+|$)').test(a.className);
}

function addClassName(a, b) {
    !hasClassName(a, b) && (a.className = a.className ? [a.className, b].join(' ') : b);
}

function removeClassName(a, b) {
    if (hasClassName(a, b)) {
        var d = a.className;
        d = d.replace(new RegExp('(?:^|\\s+)' + b + '(?:\\s+|$)', 'g'), ' '), d = d.replace(new RegExp('^\\s+', 'g'), ''), d = d.replace(new RegExp('\\s+$', 'g'), ''), a.className = d.replace(new RegExp('\\s+', 'g'), ' ');
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
        return screen.orientation.type.toLowerCase();
    }
}

function checkMobile() {
    var a = 'win16|win32|win64|mac|macintel';
    if (navigator.platform) {
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) return true;
        else {
            var b = navigator.userAgent.toLowerCase(),
                c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
            if (!c) {
                return isIpadOS();
            } else return c;
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
        clearTimeout(a), $('#loadingWrap .pl_loader').addClass('stop'), a = setTimeout(function() {
            $('#loadingWrap .pl_loader').removeClass('stop');
        }, 1000);
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

function createElementFromHTML(a) {
    var b = document.createElement('div');
    return b.innerHTML = a.trim(), b.firstChild;
}
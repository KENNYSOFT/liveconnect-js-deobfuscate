'use strict';

function _createForOfIteratorHelper(a, b) {
    var c = typeof Symbol !== 'undefined' && a[Symbol.iterator] || a['@@iterator'];
    if (!c) {
        if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && typeof a.length === 'number') {
            if (c) a = c;
            var d = 0;
            var g = function l() {};
            return {
                s: g,
                n: function m() {
                    if (d >= a.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: a[d++]
                    };
                },
                e: function p(q) {
                    throw q;
                },
                f: g
            };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var h = true;
    var j = false;
    var k;
    return {
        s: function r() {
            c = c.call(a);
        },
        n: function t() {
            var u = c.next();
            h = u.done;
            return u;
        },
        e: function u(v) {
            j = true;
            k = v;
        },
        f: function v() {
            try {
                if (!h && c.return != null) c.return();
            } finally {
                if (j) throw k;
            }
        }
    };
}

function _unsupportedIterableToArray(a, b) {
    if (!a) return;
    if (typeof a === 'string') return _arrayLikeToArray(a, b);
    var c = Object.prototype.toString.call(a).slice(8, -1);
    if (c === 'Object' && a.constructor) c = a.constructor.name;
    if (c === 'Map' || c === 'Set') return Array.from(a);
    if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return _arrayLikeToArray(a, b);
}

function _arrayLikeToArray(a, b) {
    if (b == null || b > a.length) b = a.length;
    for (var c = 0, d = new Array(b); c < b; c++) {
        d[c] = a[c];
    }
    return d;
}

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
}

function _defineProperties(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || false;
        d.configurable = true;
        if ('value' in d) d.writable = true;
        Object.defineProperty(a, d.key, d);
    }
}

function _createClass(a, b, c) {
    if (b) _defineProperties(a.prototype, b);
    if (c) _defineProperties(a, c);
    return a;
}
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
    if (!b) f = 'cusDD_default';
    else {
        if (b == 'slick dark') f = 'cusDD_slick_d';
        else {
            if (b == 'slick light') f = 'cusDD_slick_l';
            else {
                f = b;
            }
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
        this.options = b({}, this.options);
        b(this.options, e);
        this._init();
    }
    d.prototype.options = {
        wrapper: '#o-wrapper',
        type: 'slide-left',
        menuOpenerClass: '.c-button',
        maskId: '#c-mask'
    };
    d.prototype._init = function() {
        this.body = document.body;
        this.wrapper = document.querySelector(this.options.wrapper);
        this.mask = document.querySelector(this.options.maskId);
        this.menu = document.querySelector('#c-menu--' + this.options.type);
        this.closeBtn = this.menu.querySelector('.c-menu__close');
        this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
        this._initEvents();
    };
    d.prototype._initEvents = function() {
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', function(f) {
                f.preventDefault();
                this.close();
            }.bind(this));
        }
        if (this.mask) {
            this.mask.addEventListener('click', function(f) {
                f.preventDefault();
                this.close();
            }.bind(this));
        }
    };
    d.prototype.open = function() {
        this.body.classList.add('has-active-menu');
        this.wrapper.classList.add('has-' + this.options.type);
        this.menu.classList.add('is-active');
        this.mask.classList.add('is-active');
        this.disableMenuOpeners();
    };
    d.prototype.close = function() {
        this.body.classList.remove('has-active-menu');
        this.wrapper.classList.remove('has-' + this.options.type);
        this.menu.classList.remove('is-active');
        this.mask.classList.remove('is-active');
        this.enableMenuOpeners();
    };
    d.prototype.disableMenuOpeners = function() {
        c(this.menuOpeners, function(e) {
            e.disabled = true;
        });
    };
    d.prototype.enableMenuOpeners = function() {
        c(this.menuOpeners, function(e) {
            e.disabled = false;
        });
    };
    a.Menu = d;
})(window);
var Rich360Player = function() {
    var c = function() {
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
    var d = c(this, function() {
        var f = function() {
            var n;
            try {
                n = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
            } catch (o) {
                n = window;
            }
            return n;
        };
        var g = f();
        var h = g.console = g.console || {};
        var i = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
        for (var j = 0; j < i.length; j++) {
            var k = c.constructor.prototype.bind(c);
            var l = i[j];
            var m = h[l] || k;
            k.__proto__ = c.bind(c);
            k.toString = m.toString.bind(m);
            h[l] = k;
        }
    });
    d();

    function e(f, g, h) {
        _classCallCheck(this, e);
        this._options = f;
        this._ui = g;
        this._req_str = h;
        this._player = new Rich360(f, h, g, this);
        this._initHideCtroller = false;
        this._initQualityUI = false;
        this._initSubtitleUI = false;
        this._loading_on = [];
        this._wakeupPastTime = 0;
        this._timer = {
            hidePlayerController: {
                timer: null,
                period: 5000
            }
        };
        this._isFullScreen = true;
        this._thumbnailGridData = null;
        this.initLoadingState();
        this.initEventListener();
    }
    _createClass(e, [{
        key: 'initPlayerUI',
        value: function f() {
            this._ui.playBtn.onclick = function() {
                if (this._player._ui_play) {
                    this.pause();
                } else {
                    this.play();
                }
            }.bind(this);
            this._ui.volumeSlider = new customRange(this._ui.volumeSlider);
            if (isMobile() || isTablet() || isIpadOS()) {
                this._ui.volumeBtn.style.display = 'none';
                $(this._ui.volumeSlider).parent().css('display', 'none');
            } else {
                this._ui.volumeSlider.addEventListener('input', function() {
                    if (this._ui.volumeSlider._value == 0) {
                        this._ui.volumeBtn.classList.add('mute');
                    } else this._ui.volumeBtn.classList.remove('mute');
                    this._ui.volumeSlider.barDiv.style.backgroundImage = 'linear-gradient(to right, #fff 0%, #fff ' + this._ui.volumeSlider._value + '%, transparent ' + this._ui.volumeSlider._value + '%, transparent 100%)';
                    this.volume(this._ui.volumeSlider._value);
                }.bind(this));
                this._ui.volumeSlider.addEventListener('seek', function(h) {
                    this.volume(h.target._value);
                }.bind(this));
                this._ui.volumeBtn.onclick = function() {
                    if (this._ui.volumeBtn.classList.contains('mute')) {
                        this._ui.volumeBtn.classList.remove('mute');
                        this._ui.volumeSlider.value = this._ui.volumeSlider.beforeValue;
                        this._ui.volumeSlider.beforeValue = 0;
                        this.volume(this._ui.volumeSlider.value);
                    } else {
                        this._ui.volumeBtn.classList.add('mute');
                        this._ui.volumeSlider.beforeValue = this._ui.volumeSlider.value;
                        this._ui.volumeSlider.value = 0;
                        this.volume(this._ui.volumeSlider.value);
                    }
                }.bind(this);
                this._ui.volumeBtn.style.display = 'inline-block';
                $(this._ui.volumeSlider).parent().css('display', 'inline-block');
            }
            if (this._options.content_data.use_vod) {
                this._ui.seekBar = new customRange(this._ui.sliderArea, 0, this._ui.sliderPaddingDiv);
                this._ui.seekBar.addEventListener('input', function(i) {
                    this._ui.seekBar.style.backgroundImage = 'linear-gradient(to right, #ea0029 ' + i.target._value + '%, #ea0029 ' + i.target._value + '%, transparent ' + i.target._loadedValue + '%, transparent ' + i.target._loadedValue + '%)';
                    if (this._ui.seekBar.thumbInteracting) {
                        this.viewSeekBarThumbnail(i.target._value, true);
                    }
                }.bind(this));
                this._ui.seekBar.paddingBar.addEventListener('mousemove', function(i) {
                    this.viewSeekBarThumbnail(i.offsetX / this._ui.seekBar.clientWidth * 100);
                }.bind(this));
                this._ui.seekBar.paddingBar.addEventListener('mouseout', function(i) {
                    $(this._ui.sliderThumbnail).css('display', 'none');
                }.bind(this));
                this._ui.seekBar.addEventListener('seek', function(i) {
                    this.seek(i.target._value);
                    $(this._ui.sliderThumbnail).css('display', 'none');
                }.bind(this));
                $(this._ui.prev10sBtn).on('click', function() {
                    if (this._player.currentPosition) {
                        var i = this._player.currentPosition - 10;
                        if (i < 0) {
                            i = 0;
                        }
                        this._player.currentPosition = i;
                    }
                }.bind(this));
                $(this._ui.next10sBtn).on('click', function() {
                    if (this._player.currentPosition) {
                        var i = this._player.currentPosition + 10;
                        if (i > this._player.duration - 1) {
                            i = this._player.duration - 1;
                        }
                        this._player.currentPosition = i;
                    }
                }.bind(this));
            }
            if (isIOS()) {
                $(this._ui.fullBtn).on('click', function() {
                    this._player._subtitleManager.showDefaultSubtitle();
                    if (!this._player._video.paused) {
                        this._player._video.webkitEnterFullscreen();
                    }
                }.bind(this));
            } else this._ui.fullScreen = new FullscreenButton(this, this._ui.fullBtn);
            if (isMobile()) {
                var g = getOrientation();
                if (typeof g == 'string') {
                    if (g == 'landscape-primary' || g == 'landscape-secondary' || g == 'landscape') this.hideChatWrap();
                    else {
                        if (g == 'portrait-primary' || g == 'portrait-secondary' || g == 'portrait') {
                            this.showChatWrap();
                        }
                    }
                }
                $(window).on('orientationchange', function() {
                    var l = getOrientation();
                    if (typeof l == 'string') {
                        if (l == 'landscape-primary' || l == 'landscape-secondary' || l == 'landscape') {
                            this.hideChatWrap();
                        } else if (l == 'portrait-primary' || l == 'portrait-secondary' || l == 'portrait') {
                            this.showChatWrap();
                        }
                    }
                }.bind(this));
            }
            if (this._options.content_data.use_vod) {
                $(this._ui.sliderPaddingDiv).width($(this._ui.sliderArea).width());
            }
        }
    }, {
        key: 'createQualityDiv',
        value: function g(h) {
            var i = document.createElement('div');
            i.className = 'fc_default cusDD_opt';
            i.id = h.id;
            i.dataset.id = h.id;
            i.dataset.height = h.height;
            var j = '';
            if (i.dataset.height == 'auto') {
                j = 'AUTO';
            } else {
                j = i.dataset.height + 'P';
            }
            i.innerHTML = j;
            return i;
        }
    }, {
        key: 'createQualityBtn',
        value: function h(i) {
            var j = document.createElement('button');
            j.className = 'text-btn fc_default bold';
            j.id = i.id;
            j.dataset.id = i.id;
            j.dataset.height = i.height;
            var k = '';
            if (j.dataset.height == 'auto') {
                k = 'AUTO';
            } else k = j.dataset.height + 'P';
            j.innerHTML = k;
            return j;
        }
    }, {
        key: 'createSubtitleDiv',
        value: function i(j) {
            var k = document.createElement('div');
            k.className = 'fc_default cusDD_opt';
            k.id = j.id;
            k.dataset.id = j.id;
            k.dataset.label = j.label;
            k.dataset.lang = j.lang;
            k.innerHTML = j.label;
            return k;
        }
    }, {
        key: 'createSubtitleBtn',
        value: function j(k) {
            var l = document.createElement('button');
            l.className = 'text-btn fc_default bold';
            l.id = k.id;
            l.dataset.id = k.id;
            l.dataset.label = k.label;
            l.dataset.lang = k.lang;
            l.innerHTML = k.label;
            return l;
        }
    }, {
        key: 'initQuality',
        value: function k() {
            if (this._initQualityUI) return;
            this._ui.qualityItems = [];
            this._ui.qualityPopupItems = [];
            if (!this._player.qualityList) {
                this._ui.qualitySelect.style.display = 'none';
                this._ui.qualitySelectBtn.style.display = 'none';
                return;
            }
            this._ui.qualitySelect.style.display = 'block';
            this._ui.qualitySelectBtn.style.display = 'block';
            var l = this.createQualityDiv({
                id: 'auto',
                height: 'auto'
            });
            var m = this.createQualityBtn({
                id: 'auto',
                height: 'auto'
            });
            var n = document.createElement('div');
            n.className = 'cusDD_options';
            n.appendChild(l);
            m.className += ' on';
            $(this._ui.qualityPopup).find('.ta_c').append(m);
            this._ui.qualityItems.push(l);
            this._ui.qualityPopupItems.push(m);
            if (this._player.qualityList) {
                for (var o = 0; o < this._player.qualityList.length; o++) {
                    if (!this._player.qualityList[o].height) continue;
                    var p = this.createQualityDiv({
                        id: o,
                        height: this._player.qualityList[o].height
                    });
                    var q = this.createQualityBtn({
                        id: o,
                        height: this._player.qualityList[o].height
                    });
                    if ('NAME' in this._player.qualityList[o].attrs) {
                        p = this.createQualityDiv({
                            id: o,
                            height: this._player.qualityList[o].attrs.NAME
                        });
                        q = this.createQualityBtn({
                            id: o,
                            height: this._player.qualityList[o].attrs.NAME
                        });
                    }
                    if (this._player.quality) {
                        if (this._player.quality == o) addClassName(p, 'on');
                    }
                    n.appendChild(p);
                    $(this._ui.qualityPopup).find('.ta_c').append(q);
                    this._ui.qualityItems.push(p);
                    this._ui.qualityPopupItems.push(q);
                }
                for (var r = 0; r < this._ui.qualityPopupItems.length; r++) {
                    this._ui.qualityPopupItems[r].addEventListener('click', function(u) {
                        var v = null;
                        if (u.target.id == 'auto') v = -1;
                        else {
                            v = parseInt(u.target.id);
                        }
                        for (var w = 0; w < this._ui.qualityPopupItems.length; w++) {
                            removeClassName(this._ui.qualityPopupItems[w], 'on');
                        }
                        u.target.classList.add('on');
                        this._ui.qualityPopup.style.display = 'none';
                        if (this._player.quality == v) return;
                        this._player.quality = v;
                        if (u.target.id == 'auto')
                            for (var x = 0; x < this._ui.qualityPopupItems.length; x++) {
                                if (this._ui.qualityPopupItems[x].id == this._player._hls.nextAutoLevel) {
                                    addClassName(this._ui.qualityPopupItems[x], 'on');
                                    break;
                                }
                            }
                    }.bind(this));
                }
            }
            this._ui.qualitySelect.appendChild(n);
            var s = '#' + this._ui.qualitySelect.getAttribute('id');
            cusDD(s, null, function(v) {
                var w = null;
                $(s).find('.cusDD_opt').each(function() {
                    if ($(this).data().id != v.id) {
                        if (!$(this).attr('selected') || v.id != 'auto') {
                            $(this).removeAttr('selected');
                            $(this).removeClass('on');
                        }
                    } else {
                        $(this).attr('selected', 'selected');
                        $(this).addClass('on');
                    }
                });
                if (v.id == 'auto') {
                    w = -1;
                } else {
                    w = parseInt(v.id);
                }
                this._player.quality = w;
            }.bind(this));
            cusDDselectOption(s, 'auto', true);
            this._ui.qualitySelect = document.getElementById(this._ui.qualitySelect.getAttribute('id'));
            $(this._ui.qualitySelectBtn).on('click', function(v) {
                $(this._ui.qualitySelect).click();
                v.stopPropagation();
            }.bind(this));
            this._initQualityUI = true;
        }
    }, {
        key: 'initSubtitle',
        value: function l() {
            if (this._initSubtitleUI) {
                return;
                var m = this._ui.ccSelect.getAttribute('id');
                $(this._ui.ccSelect).find('.cusDD_opt').each(function() {
                    if ($(this).attr('selected') == 'selected') {
                        cusDDselectOption('#' + m, $(this).data().id, true);
                    }
                });
                return;
            }
            this._ui.subtitlePopupItems = [];
            if (!this._player.subtitleList) {
                this._ui.ccSelect.style.display = 'none';
                this._ui.ccSelectBtn.style.display = 'none';
                return;
            } else {
                if (!this._player.subtitleList.length) {
                    this._ui.ccSelect.style.display = 'none';
                    this._ui.ccSelectBtn.style.display = 'none';
                    return;
                } else {
                    if (!this._player.subtitleList[0].lang) return;
                }
            }
            var n = this.createSubtitleDiv({
                id: '-1',
                label: 'OFF',
                lang: 'OFF'
            });
            var o = this.createSubtitleBtn({
                id: '-1',
                label: 'OFF',
                lang: 'OFF'
            });
            var p = document.createElement('div');
            addClassName(n, 'on');
            addClassName(o, 'on');
            p.className = 'cusDD_options';
            p.appendChild(n);
            this._ui.subtitlePopupItems.push(o);
            $(this._ui.subtitlePopup).find('.ta_c').append(o);
            if (this._player.subtitleList) {
                for (var q = 0; q < this._player.subtitleList.length; q++) {
                    var r = this.createSubtitleDiv(this._player.subtitleList[q]);
                    var s = this.createSubtitleBtn(this._player.subtitleList[q]);
                    p.appendChild(r);
                    this._ui.subtitlePopupItems.push(s);
                    $(this._ui.subtitlePopup).find('.ta_c').append(s);
                }
                if (this._player.subtitleList.length) {
                    $(this._ui.ccSelectBtn).css('display', 'block');
                    $(this._ui.ccSelect).css('display', 'block');
                }
            }
            this._ui.ccSelect.appendChild(p);
            $(this._ui.ccSelectBtn).on('click', function(x) {
                $(this._ui.ccSelect).click();
                x.stopPropagation();
            }.bind(this));
            var m = '#' + this._ui.ccSelect.getAttribute('id');
            cusDD(m, null, function(x) {
                console.log('selected ccSelect option : ', x);
                $(m).find('.cusDD_opt').each(function(y) {
                    if ($(this).data().id != x.id) {
                        $(this).removeAttr('selected');
                        $(this).removeClass('on');
                    } else {
                        $(this).attr('selected', 'selected');
                        $(this).addClass('on');
                    }
                });
                this._player.setSubtitleTrack(parseInt(x.id));
            }.bind(this));
            cusDDselectOption(m, -1, true);
            this._ui.ccSelect = document.getElementById(this._ui.ccSelect.getAttribute('id'));
            for (var t = 0; t < this._ui.subtitlePopupItems.length; t++) {
                this._ui.subtitlePopupItems[t].addEventListener('click', function(x) {
                    $(this._ui.subtitlePopup).find('.ta_c > button').each(function() {
                        if ($(this).data().id != $(x.target).data().id) {
                            $(this).removeAttr('selected');
                            $(this).removeClass('on');
                        } else {
                            $(this).attr('selected', 'selected');
                            $(this).addClass('on');
                        }
                    });
                    this._ui.subtitlePopup.style.display = 'none';
                    this._player.setSubtitleTrack(parseInt($(x.target).data().id));
                }.bind(this));
            }
            this._player.setSubtitleTrack(-1);
            this._initSubtitleUI = true;
        }
    }, {
        key: 'initLoadingState',
        value: function m() {
            this._loading_on = [];
            for (var n = 0; n < RICH360_WAIT_ON.SIZE; n++) {
                this._loading_on[n] = false;
            }
        }
    }, {
        key: 'initEventListener',
        value: function n() {
            this._player.addListener(RICH360_EVENTS.RICH360_STATE_CHANGE, function(o) {
                if (o === RICH360_STATE.RICH360_INIT) this.initPlayerUI();
                else {
                    if (o === RICH360_STATE.RICH360_READY) {
                        this.initHideCtrllerEvent();
                        this._ui.volumeSlider.value = this._player.volume * 100;
                        this.initQuality();
                    }
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_QUALITY_CHANGE, function(o) {
                for (var p = 0; p < this._ui.qualityItems.length; p++) {
                    if (this._ui.qualityItems[p].id == o) {
                        addClassName(this._ui.qualityItems[p], 'on');
                        $(this._ui.qualityItems[p]).attr('selected', 'selected');
                    } else if (this._ui.qualityItems[p].id != 'auto' || !this._player.isAutoQuality) {
                        removeClassName(this._ui.qualityItems[p], 'on');
                        $(this._ui.qualityItems[p]).removeAttr('selected');
                    }
                }
                for (var q = 0; q < this._ui.qualityPopupItems.length; q++) {
                    if (this._ui.qualityPopupItems[q].id == o) addClassName(this._ui.qualityPopupItems[q], 'on');
                    else {
                        if (this._ui.qualityPopupItems[q].id != 'auto' || !this._player.isAutoQuality) {
                            removeClassName(this._ui.qualityPopupItems[q], 'on');
                        }
                    }
                }
                if (this._player.isAutoQuality) {
                    addClassName(this._ui.qualityItems[0], 'on');
                    addClassName(this._ui.qualityPopupItems[0], 'on');
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_ENDED, function() {
                $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_WAIT, function(o) {
                this.loading(o.wait, o.wait_on);
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_DURATION_CHANGE, function() {
                if (this._options.content_data.use_vod && this._ui.seekBar) {
                    if (!this._ui.seekBar.thumbInteracting) {
                        this.setDurationText(this._player.currentPosition, this._player.duration);
                        if (this._player.currentPosition == 0) {
                            this._ui.seekBar.value = 0;
                        } else this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration;
                    }
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, function(o) {
                if (o) {
                    $(this._ui.playBtn).removeClass('pl-i-play').addClass('pl-i-pause');
                    this._ui.playThumbnail.style.display = 'none';
                } else {
                    $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_ERROR, function(o) {
                if (o == 'Authorization failed') {
                    Chat.Manager.destroy();
                    if (this._player && this._player._hls) this._player._hls.destroy();
                    removeCookie(DCvi + '_user_id');
                    removeCookie(DCvi + '_chat_id');
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_AUTH_FAIL_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_ACCESS_DENIED, function(o) {
                var p = POPUP_CONFIG;
                var q = null;
                Chat.Manager.destroy();
                if (this._player && this._player._hls) this._player._hls.destroy();
                removeCookie(DCvi + '_user_id');
                removeCookie(DCvi + '_chat_id');
                if (isIOS()) {
                    setTimeout(function() {
                        location.href = LUEz1;
                    }, 3000);
                }
                if (o == 'Permission Denied') {
                    q = p.permissionDenied(egl, function() {
                        location.href = LUEz1;
                    });
                    alertPopup(q.title, q.desc, q.btnTxt, q.okCallback);
                } else {
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_LIMIT_DEVNUM_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_LIVE_ENDED, function() {
                this._player._hls.destroy();
                Chat.Manager.destroy();
                removeCookie(DCvi + '_user_id');
                removeCookie(DCvi + '_chat_id');
                if (isIOS()) {
                    setTimeout(function() {
                        location.href = LUEz1;
                    }, 3000);
                }
                alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                    location.href = LUEz1;
                });
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_SOURCE_CHANGE, function(o) {
                this.changeSource(o);
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_SUBTITLE_FOUND, function() {
                this.initSubtitle();
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_THUMBNAIL_UPDATE, function(o) {
                this.updateThumbnail(o);
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, function(o) {
                this.initSeekBarThumbnailData(o);
            }.bind(this));
        }
    }, {
        key: 'loading',
        value: function o(p, q) {
            this._loading_on[q] = p;
            var r = false;
            for (var s = 0; s < RICH360_WAIT_ON.SIZE; s++) {
                if (this._loading_on[s]) {
                    r = true;
                    break;
                }
            }
            if (r) {
                $(this._ui.loadingDiv).css('display', 'block');
                $(this._ui.loadingDiv).parent().css('display', 'block');
            } else {
                $(this._ui.loadingDiv).css('display', 'none');
                $(this._ui.loadingDiv).parent().css('display', 'none');
            }
        }
    }, {
        key: 'setDurationText',
        value: function p(q, r) {
            this._ui.durationStart.innerHTML = numberPad(Math.floor(q / 3600), 2) + ':' + numberPad(Math.floor(q / 60) % 60, 2) + ':' + numberPad(Math.floor(q % 60), 2);
            r -= q;
            this._ui.durationEnd.innerHTML = '-' + numberPad(Math.floor(r / 3600), 2) + ':' + numberPad(Math.floor(r / 60) % 60, 2) + ':' + numberPad(Math.floor(r % 60), 2);
        }
    }, {
        key: 'initHideCtrllerEvent',
        value: function q() {
            if (this._initHideCtroller) {
                return;
            }
            this._ui.playerBottomWrap.style.display = 'block';
            if (!$(this._ui.chatContents).hasClass('is-active')) {
                this.showChatOpenBtn(true);
            }
            if (isMobile() || isTablet() || isIpadOS()) this._options.container.addEventListener('touchend', r.bind(this), false);
            else {
                this._options.container.addEventListener('mousemove', this.wakeupController.bind(this), false);
                this._options.container.addEventListener('mouseup', r.bind(this), false);
            }

            function r(u) {
                this._wakeupPastTime = 0;
                if (!this._player._video.paused && (u.target.tagName === 'CANVAS' || u.target.tagName === 'VIDEO' || u.target === this._ui.playerBottomWrap || u.target.id == 'loadingWrap' || u.target.id == 'subtitleDiv' || u.target.parentElement.id == 'subtitleDiv')) {
                    if (this._ui.playerBottomWrap.style.display == 'block') {
                        this._ui.playerBottomWrap.style.display = 'none';
                        this.showChatOpenBtn(false);
                        this.setTimerHidePlayerController(false);
                    } else {
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
            this.setTimerHidePlayerController(true);
            this._initHideCtroller = true;
        }
    }, {
        key: 'setTimerHidePlayerController',
        value: function r(s) {
            var t = s;
            if (typeof t === 'undefined') t = true;
            clearTimeout(this._timer.hidePlayerController.timer);
            this._timer.hidePlayerController.timer = null;
            if (t) {
                this._timer.hidePlayerController.timer = setTimeout(this.hidePlayerController.bind(this), this._timer.hidePlayerController.period);
            }
        }
    }, {
        key: 'hidePlayerController',
        value: function s() {
            var t = this._ui.volumeSlider.thumbInteracting || !this._player._ui_play;
            if (this._options.content_data.use_vod && this._ui.seekBar) {
                t = t || this._ui.seekBar.thumbInteracting;
            }
            if (t) {
                this.wakeupController();
                return;
            }
            this._ui.playerBottomWrap.style.display = 'none';
            this.showChatOpenBtn(false);
            $('.cusDD_options').slideUp(200);
            $('.cusDD_arrow').removeClass('active');
        }
    }, {
        key: 'wakeupController',
        value: function t(u) {
            this._ui.playerBottomWrap.style.display = 'block';
            if (!$(this._ui.chatContents).hasClass('is-active')) {
                this.showChatOpenBtn(true);
            }
            this._wakeupPastTime = 0;
            this.setTimerHidePlayerController(true);
            return true;
        }
    }, {
        key: 'hideChatWrap',
        value: function u() {
            if ($(this._ui.pageWrap).hasClass('pl-t-default')) {
                $(this._ui.pageWrap).removeClass('pl-t-default').addClass('pl-t-fullscreen');
                $(this._ui.chatWrap).addClass('chat_full');
                $(this._ui.chatContents).removeClass('is-active');
                this.showChatOpenBtn(true);
            } else if ($(this._ui.pageWrap).hasClass('pl-t-default_nochat')) {
                $(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
            }
            $(this._ui.playerBottomWrap).css('display', 'block');
            $(this._ui.playerWrap).css('z-index', 'auto');
            $(this._ui.playerWrap).css('position', '');
            this._wakeupPastTime = 0;
        }
    }, {
        key: 'showChatWrap',
        value: function v() {
            if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen')) {
                $(this._ui.pageWrap).removeClass('pl-t-fullscreen').addClass('pl-t-default');
                $(this._ui.chatWrap).removeClass('chat_full');
            } else if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen_nochat')) {
                $(this._ui.pageWrap).removeClass('pl-t-fullscreen_nochat').addClass('pl-t-default_nochat');
            }
            $(this._ui.playerBottomWrap).css('display', 'block');
            $(this._ui.playerWrap).css('z-index', '3');
            this._wakeupPastTime = 0;
            $(this._ui.chatContents).addClass('is-active');
            this.showChatOpenBtn(false);
            if (isMobile()) {
                var w = getOrientation();
                if (typeof w == 'string') {
                    if (w == 'landscape-primary' || w == 'landscape-secondary' || w == 'landscape') $(this._ui.chatInputWrap).css('display', 'none');
                    else {
                        if ($(this._ui.navBtnWrap).find('button[name=chatnavbtn]').hasClass('on')) {
                            $(this._ui.chatInputWrap).css('top', '');
                            $(this._ui.chatInputWrap).css('position', 'relative');
                            $(this._ui.chatInputWrap).css('display', 'block');
                        } else {
                            $(this._ui.chatInputWrap).css('display', 'none');
                        }
                    }
                } else {
                    $(this._ui.chatInputWrap).css('top', '');
                    $(this._ui.chatInputWrap).css('position', 'relative');
                    $(this._ui.chatInputWrap).css('display', 'block');
                }
            }
            if ($(this._ui.navBtnWrap).find('button[name=multiviewnavbtn]').hasClass('on')) {
                if (this._player._display) {
                    this._player._display.showMultiPreview = true;
                }
            } else {
                if (this._player._display) {
                    this._player._display.showMultiPreview = false;
                }
            }
        }
    }, {
        key: 'play',
        value: function w() {
            if (!this._initHideCtroller) {
                this.initHideCtrllerEvent();
            }
            if (this._player._hls._isDummy) {
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
    }, {
        key: 'pause',
        value: function x() {
            this._player._subtitleManager._prevSubtitleTrack = this._player.getSubtitleTrack();
            if (this._player._hls._isDummy) {
                if (this._options.content_data.use_vod) this._player._video.bfTime = this._player._video.currentTime;
                else {
                    this._player._video.src = '';
                }
            }
            this._player.pause();
        }
    }, {
        key: 'seek',
        value: function y(z) {
            this._player.currentPosition = this._player.duration * z / 100;
        }
    }, {
        key: 'volume',
        value: function z(A) {
            this._player.volume = parseFloat(A / 100);
        }
    }, {
        key: 'changeSource',
        value: function A(B) {
            if (B) {
                this.pause();
                this._player.changeSource(B);
            }
        }
    }, {
        key: 'updateThumbnail',
        value: function B(C) {
            var D = new Date();
            C = C + '?' + D.getTime();
            $(this._ui.playThumbnail).css('background-image', '');
            $(this._ui.playThumbnail).css('background-image', 'url(' + C + ')');
            $(this._ui.playThumbnail).css('display', 'block');
        }
    }, {
        key: 'initSeekBarThumbnailData',
        value: function C(D) {
            this._thumbnailGridData = JSON.parse(JSON.stringify(D));
            var E = this._req_str.lastIndexOf('/output');
            var F = new Date();
            $(this._ui.sliderThumbnail).css('background-image', 'url(' + this._req_str.substr(0, E) + '/' + this._thumbnailGridData.path + '?' + F.getTime() + ')');
        }
    }, {
        key: 'viewSeekBarThumbnail',
        value: function D(E, F) {
            if (!this._thumbnailGridData) {
                $(this._ui.sliderThumbnail).css('display', 'none');
                return false;
            }
            if (E > 100) E = 100;
            else {
                if (E < 0) {
                    E = 0;
                }
            }
            var G = E / 100;
            var H = this._thumbnailGridData.grid_x * this._thumbnailGridData.grid_y;
            var I = Math.ceil(H * G) - 1;
            if (I < 0) {
                I = 0;
            }
            var J = I % 10;
            var K = parseInt(I / 10);
            var L = 160;
            var M = 90;
            var N = $(this._ui.sliderArea.slider.thumb).width();
            var O = J * L * -1;
            var P = K * M * -1;
            if (F) {
                $(this._ui.sliderArea.slider.thumb).append($(this._ui.sliderThumbnail));
                this.setDurationText(this._thumbnailGridData.duration * G, this._thumbnailGridData.duration);
                $(this._ui.sliderThumbnail).css('top', '');
                $(this._ui.sliderThumbnail).css('left', '');
            } else {
                $(this._ui.sliderArea).append($(this._ui.sliderThumbnail));
                $(this._ui.sliderThumbnail).css('top', '-16px');
                $(this._ui.sliderThumbnail).css('left', 'calc(' + E + '% + ' + N / 2 + 'px - ' + (L + N) * G + 'px)');
            }
            $(this._ui.sliderThumbnail).css('background-position-x', O + 'px');
            $(this._ui.sliderThumbnail).css('background-position-y', P + 'px');
            $(this._ui.sliderThumbnail).css('display', 'block');
            return true;
        }
    }, {
        key: 'showChatOpenBtn',
        value: function E(F) {
            var G = F;
            if (isIpadOS()) {
                G = false;
            }
            $(this._ui.chatOpenBtn).css('display', G ? 'block' : 'none');
        }
    }]);
    return e;
}();
var customRange = function customRange(a, b, c) {
    var d = a;
    d.className = d.className + ' undraggable unselectable';
    d.barDiv = d.querySelector('div[name="bar"]');
    d.thumbDiv = d.barDiv.querySelector('div[name="thumb"]');
    d.thumbInteracting = false;
    d.interactStartX = 0;
    d.interactStartOffset = 0;
    d.beforeValue = 0;
    if (c) {
        d.paddingBar = c;
    }
    if (b) d._value = b;
    else d._value = 0;
    d._loadedValue = 0;
    d.inputEvent = new Event('input');
    d.seekEvent = new Event('seek');
    Object.defineProperty(d, 'value', {
        get: function j() {
            return this._value;
        },
        set: function k(l) {
            if (l > 100) l = 100;
            else {
                if (l < 0) l = 0;
            }
            this.thumbDiv.style.left = l + '%';
            this._value = l;
            this.dispatchEvent(this.inputEvent);
        }
    });
    var e = function l(m) {
        this.thumbInteracting = true;
        this.interactStartX = m.clientX || m.touches && m.touches[0].clientX;
        this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
    };
    var f = function m(n) {
        if (this.thumbInteracting) {
            var o = (n.clientX || n.touches && n.touches[0].clientX) - this.interactStartX;
            var p = this.interactStartOffset + o;
            if (p < 0) p = 0;
            if (p > this.barDiv.offsetWidth) p = this.barDiv.offsetWidth;
            this.value = p * 100 / this.barDiv.offsetWidth;
        }
    };
    var g = function n() {
        if (this.thumbInteracting) {
            this.thumbInteracting = false;
            this.dispatchEvent(this.seekEvent);
        }
    };
    var h = function o(p) {
        if (p.target != this.thumbDiv) {
            this.thumbInteracting = true;
            var q = p.offsetX;
            if (!q) {
                var r = p.target.getBoundingClientRect();
                q = p.targetTouches[0].pageX - r.left;
            }
            this.value = q * 100 / this.barDiv.offsetWidth;
            this.interactStartX = p.clientX || p.touches && p.touches[0].clientX;
            this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
        }
    };
    d.thumbDiv.addEventListener('mousedown', e.bind(d), false);
    d.thumbDiv.addEventListener('touchstart', e.bind(d), false);
    window.addEventListener('mousemove', f.bind(d), false);
    window.addEventListener('touchmove', f.bind(d), false);
    window.addEventListener('mouseup', g.bind(d), false);
    window.addEventListener('touchend', g.bind(d), false);
    d.addEventListener('mousedown', h.bind(d), false);
    d.addEventListener('touchstart', h.bind(d), false);
    if (c) {
        c.addEventListener('mousedown', h.bind(d), false);
        c.addEventListener('touchstart', h.bind(d), false);
    }
    return d;
};
var FullscreenButton = function() {
    function a(b, c) {
        _classCallCheck(this, a);
        this._web_ui = b;
        this._options = b._player._options;
        this._web_player = b._player;
        this._dom_element = c;
        this._dom_element.onclick = this.onclick.bind(this);
        this._is_fullscreen_button = true;
        this._dom_element.id = 'fullBtn';
        document.addEventListener('fullscreenchange', this.fullscreenChanged.bind(this));
        document.addEventListener('webkitfullscreenchange', this.fullscreenChanged.bind(this));
        document.addEventListener('mozfullscreenchange', this.fullscreenChanged.bind(this));
        document.addEventListener('MSFullscreenChange', this.fullscreenChanged.bind(this));
    }
    _createClass(a, [{
        key: 'setIsFullScreen',
        value: function b(c) {
            this._web_ui._isFullScreen = c;
        }
    }, {
        key: 'showMultiviewBtn',
        value: function c(d) {
            var e = this._web_player._options.use_multiview;
            if (!e) return;
            var f = this._web_ui._ui;
            var g = f.navBtnWrap;
            var h = f.chatOpenBtn;
            var i = 'button[name=multiviewnavbtn]';
            var j = 'button[name=artistchatnavbtn]';
            var k = 'button[name=chatnavbtn]';
            var l = d ? 'inline-block' : 'none';
            var m = d ? 'block' : 'none';
            $(g).find(i).css('display', l);
            $(h).find(i).css('display', m);
        }
    }, {
        key: 'fullscreenChanged',
        value: function d() {
            var e = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            var f = this;
            delayStopLoadingPanel();
            if (!e) {
                $('body').removeClass('fullscreen');
                this._is_fullscreen_button = true;
                $(this._dom_element).removeClass('pl-i-full float_r').addClass('pl-i-screen float_r');
                if (isMobile()) {
                    var g = getOrientation();
                    if (typeof g == 'string') {
                        if (g == 'landscape-primary' || g == 'landscape-secondary' || g == 'landscape') {
                            this._web_ui.hideChatWrap();
                        } else if (g == 'portrait-primary' || g == 'portrait-secondary' || g == 'portrait') {
                            this._web_ui.showChatWrap();
                        }
                    }
                } else if (isSafari()) {
                    setTimeout(function() {
                        f._web_ui.showChatWrap();
                    });
                } else {
                    f._web_ui.showChatWrap();
                }
                this.setIsFullScreen(false);
                this.showMultiviewBtn(true);
                this._web_ui.wakeupController();
            } else {
                $('body').addClass('fullscreen');
                this._is_fullscreen_button = false;
                $(this._dom_element).removeClass('pl-i-screen float_r').addClass('pl-i-full float_r');
                this._web_ui.hideChatWrap();
                if (isMobile()) {
                    screen.orientation.lock('landscape');
                }
                this.setIsFullScreen(true);
                this.showMultiviewBtn(false);
            }
            updateTicketDivPos();
        }
    }, {
        key: 'onclick',
        value: function e() {
            if (this._is_fullscreen_button) {
                if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {
                    if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
                        var f = document.querySelector('html');
                        if ('requestFullscreen' in f) f.requestFullscreen();
                        else {
                            if ('webkitRequestFullscreen' in f) f.webkitRequestFullscreen();
                            else {
                                if ('mozRequestFullScreen' in f) {
                                    f.mozRequestFullScreen();
                                } else if ('msRequestFullscreen' in f) {
                                    f.msRequestFullscreen();
                                }
                            }
                        }
                        this._is_fullscreen_button = false;
                    } else console.log('fullscreen not enabled');
                } else console.log('fullscreen not supported');
            } else {
                var g = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                if (g && g == document.querySelector('html')) {
                    this._is_fullscreen_button = true;
                    if ('exitFullscreen' in document) {
                        document.exitFullscreen();
                    } else {
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
    }]);
    return a;
}();

function numberPad(a, b) {
    var c = b - a.toString().length + 1;
    return Array(+(c > 0 && c)).join('0') + a;
}
'use strict';
var Rich360Log = function() {
    function a(b) {
        _classCallCheck(this, a);
        this._options = b;
        this._logMaxLength = 1000;
        this._logData = [];
        this._listener = null;
        this._logItv = null;
        this._rich360Instance = b.rich360;
    }
    _createClass(a, [{
        key: 'getTimeStamp',
        value: function b() {
            var c = new Date();
            return c.format('yyyy-MM-dd HH:mm:ss:mss');
        }
    }, {
        key: 'addLog',
        value: function c(d) {
            if (this._logData.length >= this._logMaxLength) this._logData.splice(0, 1);
            this._logData.push({
                value: d,
                timeStamp: this.getTimeStamp()
            });
        }
    }, {
        key: 'clearLogData',
        value: function d() {
            this._logData = [];
        }
    }, {
        key: 'getLog',
        value: function e() {
            return this._logData.slice();
        }
    }, {
        key: 'startInterval',
        value: function f() {
            if (this._logItv) {
                clearInterval(this._logItv);
            }
            this._logItv = setInterval(this.sendLog.bind(this), 60000, false);
        }
    }, {
        key: 'sendLog',
        value: function g() {
            var h = this.getLog();
            var j = [];
            for (var k = 0; k < h.length; k++) {
                if (h[k].value.playStatus) {
                    j.push(h[k].value.playStatus);
                }
            }
            this.clearLogData();
            var l = this._rich360Instance;
            var m = 0;
            if (l && typeof l.view != 'undefined' && l.view != null) {
                m = l.view;
            }
            var n = new XMLHttpRequest();
            n.open('POST', this._options.credentials.api_server + '/user_auth/session_check/', true);
            var o = new FormData();
            o.append('device_id', getCookie(DCvi + '_device_id'));
            o.append('user_id', getCookie(DCvi + '_user_id'));
            o.append('content_id', this._options.credentials.content_id);
            o.append('play_status', JSON.stringify(j));
            o.append('user_agent', navigator.userAgent);
            o.append('current_view_id', m);
            n.send(o);
            n.onload = function(r) {
                if (n.readyState === 4 && n.status === 200) try {
                    var s = JSON.parse(n.responseText).Data;
                    for (var t = 0; t < s.content.channels.length; t++) {
                        var u = true;
                        if (Ythc == 'sub') {
                            u = false;
                        }
                        if (s.content.channels[t].is_main_channel == u) {
                            if (this._options.content_data.current_channel_id != s.content.channels[t].id) {
                                this._options.content_data = JSON.parse(JSON.stringify(s.content));
                                this._options.content_data.current_channel_id = s.content.channels[t].id;
                                this._listener.trigger(RICH360_EVENTS.RICH360_SOURCE_CHANGE, this._options.content_data.channels[t].hls_url);
                            }
                            break;
                        }
                    }
                    iCM(!!s.user.is_mute);
                } catch (x) {
                    console.log(x);
                }
            }.bind(this);
            n.onloadend = function(r) {
                if (n.status === 400 || n.status === 401) this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                else if (n.status === 403) {
                    this._listener.trigger(RICH360_EVENTS.RICH360_LIVE_ENDED, 'Live ended');
                }
            }.bind(this);
        }
    }]);
    return a;
}();
var Rich360EventListener = function() {
    function a(b) {
        _classCallCheck(this, a);
        this.events = [];
        for (var c in b) {
            this.events.push({
                key: b[c],
                listeners: []
            });
        }
    }
    _createClass(a, [{
        key: 'addListener',
        value: function b(c, d) {
            this.events[c].listeners.push(d);
        }
    }, {
        key: 'removeListener',
        value: function c(d, e) {
            var f;
            for (f = 0; f < this.events[d].listeners.length; f++) {
                if (this.events[d].listeners[f] == e) break;
            }
            if (f >= this.events[d].listeners.length) return;
            this.events[d].listeners.splice(f, 1);
        }
    }, {
        key: 'trigger',
        value: function d(e, f) {
            var g = this;
            var h = function l(m) {
                setTimeout(function() {
                    this.events[e].listeners[m](f);
                }.bind(g), 0);
            };
            for (var j = 0; j < this.events[e].listeners.length; j++) {
                h(j);
            }
        }
    }]);
    return a;
}();
var Rich360HlsWrapper = function() {
    function a(b, c, d) {
        _classCallCheck(this, a);
        if (!Hls) {
            console.log('Missing Hls.');
            return;
        }
        this._isDummy = b;
        if (isIOS() || isIpadOS()) {
            this._isDummy = true;
        }
        this._config = c;
        this._video = null;
        this._isMultiview = d;
    }
    _createClass(a, [{
        key: 'isHlsAvailable',
        value: function b(c, d) {
            var e = c;
            var f = !f();
            var g = window.Hls.isSupported();
            var h = false;
            if (!e) return h;
            if (d) {
                if (!f && e.canPlayType('application/vnd.apple.mpegurl')) {
                    h = true;
                } else if (g) {
                    h = false;
                }
            } else h = !g;
            return h;
        }
    }, {
        key: 'attachMedia',
        value: function c(d) {
            this._video = d;
            if (this._isMultiview) {
                if (!isAndroid() && this._video.canPlayType('application/vnd.apple.mpegurl') || isIOS() || isIpadOS()) {
                    this._isDummy = true;
                    this._hls = null;
                } else if (Hls.isSupported()) {
                    this._isDummy = false;
                    this._hls = new Hls(this._config);
                }
            } else {
                if (isIOS() || isIpadOS()) {
                    this._isDummy = true;
                    this._hls = null;
                } else {
                    if (Hls.isSupported()) {
                        this._isDummy = false;
                        this._hls = new Hls(this._config);
                    } else {
                        this._isDummy = true;
                        this._hls = null;
                    }
                }
            }
            this._video.addEventListener('canplay', function() {
                if (this._config.startPosition != undefined && this._config.startPosition > 0) {
                    this._video.currentTime = this._config.startPosition;
                }
                if (this._config.autoplay) {
                    this._video.play();
                }
            }.bind(this), {
                once: true
            });
            if (!this._isDummy) this._hls.attachMedia(d);
        }
    }, {
        key: 'detachMedia',
        value: function d() {
            this._video = null;
            if (!this._isDummy) this._hls.detachMedia();
        }
    }, {
        key: 'loadSource',
        value: function e(f, g, h) {
            if (this._isDummy) {
                this._video.src = f;
                if (h) this._video.poster = h;
                this._video.crossOrigin = 'anonymous';
                this._video.disablePictureInPicture = true;
                this._video.oncontextmenu = function() {
                    return false;
                };
                if (this._video.paused) this._video.load();
            } else this._hls.loadSource(f);
        }
    }, {
        key: 'release',
        value: function f() {
            this._video = null;
            this._hls = null;
        }
    }, {
        key: 'recoverMediaError',
        value: function g() {
            if (this._isDummy) {} else {
                this._hls.recoverMediaError();
            }
        }
    }, {
        key: 'on',
        value: function h(i, j) {
            if (!this._isDummy) {
                this._hls.on(i, j);
            }
        }
    }, {
        key: 'startLoad',
        value: function i() {
            if (this._isDummy) {
                this._video.load();
            } else {
                this._hls.startLoad();
            }
        }
    }, {
        key: 'destroy',
        value: function j() {
            if (this._isDummy) {
                this.release();
            } else {
                this._hls.destroy();
            }
        }
    }, {
        key: 'isAutoQuality',
        value: function k() {
            if (this._isDummy) {
                return false;
            } else return this._hls.levelController.manualLevel == -1;
        }
    }, {
        key: 'levels',
        get: function l() {
            if (this._isDummy) {
                return false;
            } else return this._hls.levels;
        }
    }, {
        key: 'nextAutoLevel',
        get: function m() {
            if (this._isDummy) {
                return 0;
            } else {
                return this._hls.abrController.nextAutoLevel;
            }
        }
    }, {
        key: 'currentLevel',
        get: function n() {
            if (this._isDummy) return 0;
            else {
                return this._hls.currentLevel;
            }
        },
        set: function o(p) {
            if (!this._isDummy) this._hls.currentLevel = p;
        }
    }]);
    return a;
}();
var RICH360_EVENTS = {
    RICH360_STATE_CHANGE: 0,
    RICH360_QUALITY_CHANGE: 1,
    RICH360_DURATION_CHANGE: 2,
    RICH360_PLAY_PAUSE_CHANGE: 3,
    RICH360_ENDED: 4,
    RICH360_ERROR: 5,
    RICH360_WAIT: 6,
    RICH360_ACCESS_DENIED: 7,
    RICH360_SUBTITLE_FOUND: 8,
    RICH360_LIVE_ENDED: 9,
    RICH360_SOURCE_CHANGE: 10,
    RICH360_THUMBNAIL_UPDATE: 11,
    RICH360_GRID_THUMBNAIL_UPDATE: 12
};
var RICH360_STATE = {
    RICH360_AUTH: 0,
    RICH360_INIT: 1,
    RICH360_READY: 2
};
var RICH360_WAIT_ON = {
    RICH360_QUALITY_CHANGE: 0,
    RICH360_BUFFER: 1,
    RICH360_SEEK: 2,
    SIZE: 3
};
var MULTIVIEW_PLAYER_DEFAULT_MANIFEST = {
    type: '',
    singleview_count: 1,
    singleview_list: [{
        id: 0,
        name: '',
        path: ''
    }],
    multiview_count: 1,
    multiview_list: [{
        id: 0,
        path: '',
        main_position: {
            singleview_id: 0,
            x: 0,
            y: 0,
            width: 1,
            height: 1
        },
        sub_positions: []
    }]
};
var SINGLEVIEW_PLAYER_DEFAULT_MANIFEST = {
    type: '',
    thumbnail: {
        path: 'thumbnail.jpg'
    },
    thumbnail_grid: {
        duration: 0,
        interval: 0,
        grid_x: 0,
        grid_y: 0,
        path: ''
    },
    singleview_count: 1,
    singleview_list: [{
        id: 0,
        name: 'view_0',
        path: ''
    }],
    multiview_count: 0,
    multiview_list: []
};
var Rich360 = function() {
    function a(b, c, d, e) {
        _classCallCheck(this, a);
        var f = this;
        this._options = b;
        this._ready_state = RICH360_STATE.RICH360_AUTH;
        this.wait_on = [];
        for (var g = 0; g < RICH360_WAIT_ON.SIZE; g++) {
            this.wait_on[g] = false;
        }
        this._ui = d;
        this._rich360Player = e;
        this._ui_play = false;
        this._listener = new Rich360EventListener(RICH360_EVENTS);
        this._logger = new Rich360Log({
            content_data: this._options.content_data,
            credentials: {
                content_id: this._options.credentials.content_id,
                api_server: this._options.credentials.api_server
            },
            rich360: f
        });
        this._logger._listener = this._listener;
        this._loggerItv = null;
        this._subtitleList = [];
        this._play_status = '';
        this._view = 0;
        this.addNativeTrackListener = this.addNativeTrackListener.bind(this);
        this.updateNativeTrackCuesListener = this.updateNativeTrackCuesListener.bind(this);
        var h = c.substr(c.lastIndexOf('/') + 1, c.length);
        var j = c.substr(0, c.lastIndexOf('/') + 1);
        var k = j + h;
        this._options.source = k;
        if ('credentials' in this._options) {
            if (!('device_id' in this._options.credentials)) {
                this._options.credentials.device_id = null;
            }
            if (!('user_id' in this._options.credentials)) {
                this._options.credentials.user_id = null;
            }
            if (!('content_id' in this._options.credentials)) {
                this._options.credentials.content_id = null;
            }
            if (!('ticket_id' in this._options.credentials)) {
                this._options.credentials.ticket_id = null;
            }
        } else this._options.credentials = {
            device_id: null,
            user_id: null,
            content_id: null,
            ticket_id: null
        };
        if (this._options.container) {
            this._parent_dom = this._options.container;
        } else {
            this._parent_dom = document.body;
        }
        if (this._options.use_multiview) {
            this.setChangingView(false);
        }
        this.authorize();
    }
    _createClass(a, [{
        key: 'authorize',
        value: function b() {
            var c = new XMLHttpRequest();
            c.open('POST', this._options.credentials.api_server + '/user_auth/player_authorize/', true);
            c.withCredentials = true;
            c.req_data = {
                user_id: this._options.credentials.user_id,
                device_id: this._options.credentials.device_id,
                content_id: this._options.credentials.content_id,
                location: {
                    domain: window.location.hostname
                },
                source: this._options.source,
                rqstr: this.generate16byte(),
                scstr: this.generate16byte(),
                enstr: this.generate16byte(),
                psstr: this.generate16byte(),
                dbstr: this.generate16byte(),
                ltstr: this.generate16byte(),
                hsstr: this.generate16byte(),
                rnstr: this.generate16byte()
            };
            var d = new FormData();
            d.append('user_id', c.req_data.user_id);
            d.append('device_id', c.req_data.device_id);
            d.append('content_id', c.req_data.content_id);
            d.append('domain', c.req_data.location.domain);
            d.append('source', c.req_data.source);
            d.append('rqstr', c.req_data.rqstr);
            d.append('scstr', c.req_data.scstr);
            d.append('enstr', c.req_data.enstr);
            d.append('psstr', c.req_data.psstr);
            d.append('dbstr', c.req_data.dbstr);
            d.append('ltstr', c.req_data.ltstr);
            d.append('hsstr', c.req_data.hsstr);
            d.append('rnstr', c.req_data.rnstr);
            c.onerror = function(f) {
                console.log(f);
                this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                return;
            }.bind(this);
            c.onload = function(f) {
                console.log(f);
                if (c.readyState === 4) {
                    this.base = 'rich360';
                    this.baseCode = [];
                    var g;
                    var h;
                    var l;
                    for (g = 0; g < 7; g++) {
                        this.baseCode[g] = this.base.charCodeAt(g);
                    }
                    this.addRich360 = function(m, n) {
                        var o = n % 7;
                        var p = this.baseCode.slice(o, 7).concat(this.baseCode.slice(0, o + 1));
                        for (h = 0; h < 8; h++) {
                            m[h] = (m[h] + p[h]) % 256;
                        }
                        return m;
                    }.bind(this);
                    this.encrypt = function(m, n) {
                        if (m.length != 16) return 'string length must be 16';
                        var o = [];
                        var p;
                        for (p = 0; p < 16; p++) {
                            o[p] = m.charCodeAt(p);
                        }
                        var q = o.slice(0, 8);
                        var r = o.slice(8, 16);
                        for (p = 0; p < n; p++) {
                            r = this.addRich360(r, p);
                            var s = q.slice(0, 8);
                            for (l = 0; l < 8; l++) {
                                q[l] = q[l] ^ r[l];
                            }
                            r = s.slice(0, 8);
                        }
                        var t = [];
                        for (p = 0; p < 8; p++) {
                            t[p] = String.fromCharCode(q[p]);
                        }
                        for (p = 0; p < 8; p++) {
                            t[p + 8] = String.fromCharCode(r[p]);
                        }
                        return t;
                    }.bind(this);
                    this.validate_response = function(m, n) {
                        var o = this.encrypt(m.ltstr, 16);
                        var p = '';
                        for (var q = 0; q < 16; q++) {
                            p += o[q];
                        }
                        if (p == n.rtstr) return true;
                        else return false;
                    }.bind(this);
                    if (!this.validate_response(c.req_data, JSON.parse(c.responseText))) {
                        if (c.status == 403) {
                            this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Permission Denied');
                        } else {
                            if (c.status != 200) {
                                this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                                return;
                            }
                        }
                    }
                    this.base = undefined;
                    this.baseCode = undefined;
                    this.addRich360 = undefined;
                    this.encrypt = undefined;
                    this.validate_response = undefined;
                    this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT);
                    this._ready_state = RICH360_STATE.RICH360_INIT;
                    this.requestKMVManifest(function() {
                        if (this._options.content_data.use_vod) {
                            this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.singleview_list[0].thumbnail_grid);
                        }
                        this.initialize();
                    }.bind(this));
                    this._logger.startInterval();
                }
            }.bind(this);
            c.send(d);
        }
    }, {
        key: 'addListener',
        value: function c(d, e) {
            this._listener.addListener(d, e);
            if (d == RICH360_EVENTS.RICH360_STATE_CHANGE) {
                if (this._ready_state == RICH360_STATE.RICH360_INIT) {
                    this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT);
                }
                if (this._ready_state == RICH360_STATE.RICH360_READY) {
                    this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT);
                    this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY);
                }
            }
        }
    }, {
        key: 'removeListener',
        value: function d(e, f) {
            this._listener.removeListener(e, f);
        }
    }, {
        key: 'initialize',
        value: function e() {
            this.updateThumbnail();
            if (document.getElementById('video')) {
                this._video = document.getElementById('video');
            } else {
                this._video = document.createElement('video');
                this._options.container.append(this._video);
            }
            if (!this._options.use_multiview) {
                addClassName(this._video, 'player-video-wrap');
            }
            this._video.crossOrigin = 'anonymous';
            this._video.disablePictureInPicture = true;
            this._video.oncontextmenu = function() {
                return false;
            };
            var f = Hls.DefaultConfig;
            f.liveSyncDurationCount = 3;
            f.startLevel = -1;
            if (this._options.seek_to) {
                f.startPosition = this._options.seek_to;
            }
            if (this._options.autoStart) {
                this._video.autoplay = this._options.autoStart;
            } else this._video.autoplay = false;
            f.fragLoadingRetryDelay = 100;
            f.startFragPrefetch = true;
            f.renderTextTracksNatively = false;
            f.xhrSetup = function(o, p) {
                if (p.indexOf('.m3u8') === -1 && p.indexOf('.ts') === -1 && p.indexOf('.vtt') === -1 && p.indexOf('.webvtt') === -1 && p.indexOf('.key') === -1 && p.indexOf('.kmv') === -1) {
                    o.withCredentials = true;
                }
            };
            if (this._options.use_multiview) {
                if (this._options.initial_view >= 0 && this._options.initial_view < this._manifest.multiview_list.length) {
                    this._view = this._options.inital_view;
                } else {
                    this._view = 0;
                }
                var g = [];
                for (var h = 0; h < this._manifest.multiview_list[this._view].sub_positions.length; h++) {
                    var j = document.createElement('div');
                    j.dataset.view = h;
                    addClassName(j, 'view_wrap');
                    var k = document.createElement('label');
                    k.classList = 'view-name bolder fs_14 fc_point';
                    if (this._view == h) {
                        addClassName(j, 'on');
                    }
                    k.innerText = this._manifest.singleview_list[h].name;
                    j.style.backgroundColor = 'transparent';
                    j.style.zIndex = 1;
                    j.append(k);
                    this._options.multiViewList.append(j);
                    g.push(j);
                }
                this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), f, this._options.use_multiview);
                this._hls.attachMedia(this._video);
                this._display = new MultiViewDisplay(this._options, this._video, this, this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions, g);
                this.addHlsFragParsedListener();
            } else {
                this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[0].path.endsWith('.m3u8'), f, this._options.use_multiview);
                this._hls.attachMedia(this._video);
            }
            this.attachVideoListeners();
            if (!this._hls._isDummy) {
                this.attachHlsListeners();
            } else {
                this._video.setAttribute('playsinline', '');
                this._video.setAttribute('webkit-playsinline', '');
            }
            this._play_status = 'none';
            if (this._options.use_multiview) {
                this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
            } else {
                this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[0].path);
            }
            this._subtitleManager = new Rich360SubtitleManager(this);
            if (this._loggerItv) {
                clearInterval(this._loggerItv);
                this._loggerItv = null;
            }
            this._loggerItv = setInterval(function() {
                if (this._play_status && this._video.currentTime) {
                    this._logger.addLog({
                        timePos: this._video.currentTime,
                        playStatus: this._play_status
                    });
                }
            }.bind(this), 1000);
        }
    }, {
        key: 'updateThumbnail',
        value: function f() {
            var g = this._manifest;
            if (g && g.singleview_list) {
                if (g.singleview_list.length) {
                    if (g.singleview_list[0].thumbnail) {
                        var h = this._sourceBase + g.singleview_list[0].thumbnail.path;
                        this._listener.trigger(RICH360_EVENTS.RICH360_THUMBNAIL_UPDATE, h);
                    }
                }
            }
        }
    }, {
        key: 'requestKMVManifest',
        value: function g(h) {
            var i = this;
            var j = this._options.source.lastIndexOf('/');
            if (j < 0) {
                this._sourceBase = '';
            } else {
                this._sourceBase = this._options.source.substring(0, j) + '/';
            }
            if (this._options.source.endsWith('.kmv')) {
                var k = new XMLHttpRequest();
                k.open('GET', this._options.source);
                k.onreadystatechange = function() {
                    if (k.readyState == 4 && k.status == 200) {
                        i._manifest = JSON.parse(k.responseText);
                        if (h) h();
                    }
                }.bind(this);
                k.send();
            } else {
                if (this._options.use_multiview) {
                    this._manifest = MULTIVIEW_PLAYER_DEFAULT_MANIFEST;
                    this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1);
                    this._manifest.multiview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1);
                } else {
                    this._manifest = SINGLEVIEW_PLAYER_DEFAULT_MANIFEST;
                    this._manifest.type = this._options.source.substring(this._options.source.lastIndexOf('.') + 1);
                    this._manifest.singleview_list[0].path = this._options.source.substring(this._options.source.lastIndexOf('/') + 1);
                }
                if (h) h();
            }
        }
    }, {
        key: 'view',
        get: function h() {
            return this._view;
        },
        set: function i(j) {
            if (this._changingView) return;
            if (j < 0) j = 0;
            if (j >= this._manifest.multiview_count) j = this._manifest.multiview_count - 1;
            if (this._view == j) return;
            this._subtitleManager._prevSubtitleTrack = this.getSubtitleTrack();
            if (this._hls._isDummy) {
                this._view = j;
                var k = this._video.currentTime;
                this._hls.detachMedia();
                this._hls.destroy();
                var l = Hls.DefaultConfig;
                if (this._video.paused) l.autoplay = false;
                else l.autoplay = true;
                this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), l, this._options.use_multiview);
                this._hls.attachMedia(this._video);
                var m = this._manifest.multiview_list[this._view];
                var n = m.main_position;
                var o = m.sub_positions;
                var p = this.resizeToCanvasImage(n, o[this._view]);
                this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path, k, p);
                this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
            } else {
                this.setChangingView(true);
                this._view = j;
                this._display.arrangeVideo();
                var q = Hls.DefaultConfig;
                q.startLevel = -1;
                var r = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), q, this._options.use_multiview);
                var s = document.createElement('video');
                this._newVideo = s;
                if (this._newVideo) {
                    this._newVideo.disablePictureInPicture = true;
                    this._newVideo.oncontextmenu = function() {
                        return false;
                    };
                }
                s.setAttribute('playsinline', '');
                s.setAttribute('preload', 'metadata');
                r.attachMedia(s);
                r.on(Hls.Events.MEDIA_ATTACHED, function() {
                    r.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
                }.bind(this));
                r.timeDictionary = {};
                r.snsInDictionary = [];
                r.firstFrag = true;
                r.on(Hls.Events.FRAG_PARSED, function(x, y) {
                    var z = y.frag;
                    r.timeDictionary[z.sn + ''] = z.startPTS;
                    r.snsInDictionary.push(z.sn);
                    while (r.snsInDictionary.length > 100) {
                        var A = 0;
                        if (r.snsInDictionary[A] == 0) A = 1;
                        var B = r.snsInDictionary[A];
                        r.snsInDictionary.splice(A, 1);
                        delete r.timeDictionary[B + ''];
                    }
                    if (r.firstFrag) {
                        r.firstFrag = false;
                        r.startSN = z.sn;
                        r.startPTS = z.startPTS;
                        r.readyForChange = true;
                        if (s.readyForChange) t();
                    }
                }.bind(this));
                var t = function() {
                    var x = this._video;
                    var y = this._hls;
                    var z = 0;
                    if (y.timeDictionary[r.startSN + ''] != undefined) z = y.timeDictionary[r.startSN + ''] - r.startPTS;
                    else {
                        var A = -1;
                        var B = -1;
                        for (var C in y.timeDictionary) {
                            var D = Number.parseInt(C + '');
                            if (B == -1 || D > B) B = D;
                            if (A == -1 || D < A) A = D;
                        }
                        var E = (y.timeDictionary[B + ''] - y.timeDictionary[A + '']) / (B - A);
                        var F = y.timeDictionary[B + ''] + E * (r.startSN - B);
                        z = F - r.startPTS;
                        console.error('startSN : ' + r.startSN + ' not defined in oldHLS');
                        console.error(y.timeDictionary);
                        console.error('estPTS : ' + F + ' timePerSN : ' + E + ' smallestSN : ' + A + ' biggestSN : ' + B + ' newStartSN : ' + r.startSN + ' newStartPTS : ' + r.startPTS);
                    }
                    var G = function(N) {
                        s.pause();
                        var O = (s.currentTime - (x.currentTime - z)) * 1000;
                        console.log('@@oldHLS.timeDictionary : ', y.timeDictionary);
                        console.log('@@timeDiff : ', z);
                        console.log('@@newVideo.currentTime : ', s.currentTime);
                        console.log('@@oldVideo.currentTime : ', x.currentTime);
                        console.log('@@@ waitTime : ', O);
                        setTimeout(function() {
                            s.volume = x.volume;
                            if (!this._options.content_data.use_vod) {
                                this._subtitleManager._prevViewOffsetTime = x.currentTime - s.currentTime;
                            }
                            if (!x.paused) {
                                s.play();
                            }
                            x.pause();
                            r._hls.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
                            y.detachMedia();
                            y.destroy();
                            x = null;
                            y = null;
                            this._video = s;
                            this._hls = r;
                            this.attachVideoListeners();
                            if (!this._hls._isDummy) {
                                this.attachHlsListeners();
                                this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, this._hls.nextAutoLevel);
                            }
                            this.setChangingView(false);
                            this._display.replaceVideo(s);
                            this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                            this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                                wait: false,
                                wait_on: RICH360_WAIT_ON.RICH360_SEEK
                            });
                        }.bind(this), O >= 0 ? O : 0);
                    }.bind(this);
                    s.addEventListener('seeked', G, {
                        once: true
                    });
                    s.volume = 0;
                    var H = function N() {
                        console.log('seekIfPossible');
                        var O = s.buffered;
                        var P = x.currentTime + 0.5 - z;
                        console.log('targetTime : ' + P + ' = ' + x.currentTime + ' + 0.5 - ' + z);
                        var Q = 0;
                        for (; Q < O.length; Q++) {
                            console.log('start(' + Q + ') : ' + O.start(Q));
                            console.log('end(' + Q + ') : ' + O.end(Q));
                            if (O.start(Q) <= P && P + 1 <= O.end(Q)) {
                                s.currentTime = P;
                                break;
                            }
                        }
                        if (Q != O.length) {
                            console.log('clearInterval');
                            clearInterval(I);
                            clearTimeout(J);
                        }
                    };
                    var I = setInterval(H, 100);
                    var J = setTimeout(function() {
                        console.warn('5 second limit');
                        var O = s.buffered;
                        var P = x.currentTime + 0.5 - z;
                        var Q = 0;
                        var R = 0;
                        var S = 0;
                        for (S = 0; S < O.length; S++) {
                            if (O.start(S) > P) {
                                Q = O.start(S);
                            }
                            if (O.end(S) > R) {
                                R = O.end(S);
                            }
                        }
                        if (Q) {
                            s.currentTime = Q + 0.5;
                        } else s.currentTime = R - 1;
                        console.log('clearInterval');
                        clearInterval(I);
                    }, 5000);
                }.bind(this);
                s.addEventListener('canplaythrough', function(x) {
                    s.readyForChange = true;
                    if (r.readyForChange) t();
                }.bind(this), {
                    once: true
                });
            }
        }
    }, {
        key: 'views',
        get: function j() {
            return this._manifest.multiview_count;
        }
    }, {
        key: 'resizeToCanvasImage',
        value: function k(l, m) {
            var n = document.createElement('canvas');
            var o = n.getContext('2d');
            var mvMainDiv = $('#mvMainDiv');
            var mvMainDiv__video = $('#mvMainDiv video');
            n.width = mvMainDiv__video.width();
            n.height = mvMainDiv__video.height();
            var r = mvMainDiv__video.width();
            var s = mvMainDiv__video.height();
            var t = mvMainDiv__video[0];
            var u = t.videoWidth;
            var v = t.videoHeight;
            var w = l.width;
            var z = l.height;
            var A = l.x;
            var B = l.y;
            o.drawImage(mvMainDiv__video[0], Math.round(m.x * u), Math.round(m.y * v), Math.round(m.width * u), Math.round(m.height * v), u * A, v * B, r * w, s * z);
            return n.toDataURL();
        }
    }, {
        key: 'changeSingleView',
        value: function l(m) {
            var n = this._video.currentTime;
            this._subtitleManager._prevSubtitleTrack = this.getSubtitleTrack();
            this._hls.detachMedia();
            this._hls.destroy();
            var o = Hls.DefaultConfig;
            if (this._video.paused) o.autoplay = false;
            else o.autoplay = true;
            this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[this._view].path.endsWith('.m3u8'), o, this._options.use_multiview);
            this._hls.attachMedia(this._video);
            if (m) {
                this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[this._view].path);
            } else this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
            this._video.addEventListener('loadedmetadata', function(q) {
                this.setSubtitleTrack(this._subtitleManager._prevSubtitleTrack, false);
                this._video.play();
                if (!m) {
                    $(this._video).hide();
                    setTimeout(function() {
                        $(this._video).show();
                        this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                    }.bind(this), 500);
                }
            }.bind(this), {
                once: true
            });
        }
    }, {
        key: 'changeSource',
        value: function m(n) {
            if (n) {
                this._options.source = n;
                this.requestKMVManifest(function() {
                    var o = this._video.currentTime;
                    this._hls.detachMedia();
                    this._hls.destroy();
                    var p = Hls.DefaultConfig;
                    var q = '';
                    if (this._options.use_multiview) {
                        q = this._sourceBase + this._manifest.multiview_list[this._view].path;
                    } else {
                        q = this._sourceBase + this._manifest.singleview_list[0].path;
                    }
                    this._hls = new Rich360HlsWrapper(!q.endsWith('.m3u8'), p, this._options.use_multiview);
                    this._hls.attachMedia(this._video);
                    this._hls.loadSource(q);
                    if (!this._hls._isDummy) {
                        this.addHlsFragParsedListener();
                        this.attachHlsListeners();
                        this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, this._hls.nextAutoLevel);
                    }
                    this._video.addEventListener('loadedmetadata', function(u) {
                        if (this._options.content_data.use_vod) {
                            this._video.currentTime = o;
                            this.setSubtitleTrack(this._subtitleManager._prevSubtitleTrack);
                        } else {
                            this.setSubtitleTrack(this._subtitleManager._prevSubtitleTrack, false);
                            this._subtitleManager._prevViewOffsetTime = o - this._video.currentTime;
                        }
                        this._rich360Player.wakeupController();
                    }.bind(this), {
                        once: true
                    });
                    if (this._options.content_data.use_vod) {
                        this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.singleview_list[0].thumbnail_grid);
                    }
                }.bind(this));
            }
        }
    }, {
        key: 'getRandomInt',
        value: function n(o, p) {
            return Math.floor(Math.random() * (p - o + 1)) + o;
        }
    }, {
        key: 'generate16byte',
        value: function o() {
            return String.fromCharCode(this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255));
        }
    }, {
        key: 'pause_on',
        value: function p() {
            this._video.pause();
            this._ui_play = false;
            this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
        }
    }, {
        key: 'play_on',
        value: function q() {
            this._ui_play = true;
            this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
            var r = true;
            for (var s = 0; s < RICH360_WAIT_ON.SIZE; s++) {
                r = r && !this.wait_on[s];
            }
            r = r && this._ui_play;
            if (r) {
                this._video.play();
            }
        }
    }, {
        key: 'addNativeTrackListener',
        value: function r(s) {
            this._subtitleList = [];
            for (var t = 0; t < this._video.textTracks.length; t++) {
                this._subtitleList.push({
                    id: t,
                    label: this._video.textTracks[t].label,
                    lang: this._video.textTracks[t].language
                });
            }
            this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
            var u = s.track;
            if (this._subtitleManager._isHideDefaultSubtitles) {
                if (s.track.mode == 'showing') {
                    s.track.mode = 'hidden';
                }
            } else if (s.track.mode == 'hidden') {
                s.track.mode = 'showing';
            }
            u.removeEventListener('cuechange', this.updateNativeTrackCuesListener);
            u.addEventListener('cuechange', this.updateNativeTrackCuesListener);
            if (this._options.use_multiview) {
                this.setSubtitleTrack(this._subtitleManager._prevSubtitleTrack);
            }
        }
    }, {
        key: 'updateNativeTrackCuesListener',
        value: function s(t) {
            if (this._subtitleManager._isHideDefaultSubtitles) {
                if (t.target.mode == 'showing') {
                    t.target.mode = 'hidden';
                }
            } else {
                if (t.target.mode == 'hidden') {
                    t.target.mode = 'showing';
                }
            }
            if (t.target.cues.length) {
                var u = t.target.cues.length;
                var v = [];
                for (var w = 0; w < u; w++) {
                    var x = -1;
                    for (var y = 0; y < this._subtitleList.length; y++) {
                        if (this._subtitleList[y].lang == t.target.cues[w].track.language) {
                            x = y;
                            break;
                        }
                    }
                    v.push({
                        startTime: t.target.cues[w].startTime,
                        endTime: t.target.cues[w].endTime,
                        text: t.target.cues[w].text,
                        track_num: x,
                        view: this._view
                    });
                }
                this._subtitleManager.addCueData(v);
            }
        }
    }, {
        key: 'attachVideoListeners',
        value: function t() {
            this._video.addEventListener('seeking', function() {
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: true,
                    wait_on: RICH360_WAIT_ON.RICH360_SEEK
                });
            }.bind(this));
            this._video.addEventListener('seeked', function() {
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: false,
                    wait_on: RICH360_WAIT_ON.RICH360_SEEK
                });
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: false,
                    wait_on: RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
                });
            }.bind(this));
            this._video.addEventListener('play', function() {
                this._play_status = 'play';
                this.setSubtitleTrack(this._subtitleManager._prevSubtitleTrack, false);
                this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
            }.bind(this));
            this._video.addEventListener('pause', function() {
                this._play_status = 'pause';
                this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
            }.bind(this));
            this._video.addEventListener('durationchange', function() {
                this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration);
            }.bind(this));
            this._video.addEventListener('timeupdate', function() {
                this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration);
            }.bind(this));
            this._video.addEventListener('progress', function() {
                this._listener.trigger(RICH360_EVENTS.RICH360_DURATION_CHANGE, this._video.duration);
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: false,
                    wait_on: RICH360_WAIT_ON.RICH360_BUFFER
                });
            }.bind(this));
            this._video.addEventListener('ended', function() {
                this._ui_play = false;
                this._listener.trigger(RICH360_EVENTS.RICH360_ENDED);
                this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: false,
                    wait_on: RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
                });
                this._play_status = 'end';
                this._logger.addLog({
                    event: 'end'
                });
            }.bind(this));
            this._video.addEventListener('error', function() {
                console.log('Video error encountered. Running recover function');
                if (this._hls) {
                    this._hls.recoverMediaError();
                }
                if (this._video.paused) {
                    this._ui_play = false;
                    this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, false);
                } else {
                    this.play_on();
                }
            }.bind(this));
            this._video.addEventListener('loadedmetadata', function() {
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY);
                this._ready_state = RICH360_STATE.RICH360_READY;
                if (this._hls._isDummy) {
                    this._video.textTracks.removeEventListener('addtrack', this.addNativeTrackListener);
                    this._video.textTracks.addEventListener('addtrack', this.addNativeTrackListener);
                }
            }.bind(this));
            this._video.addEventListener('waiting', function(u) {
                console.log('@@@video waiting call : ', u);
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: true,
                    wait_on: RICH360_WAIT_ON.RICH360_BUFFER
                });
            }.bind(this));
            this._video.addEventListener('playing', function(u) {
                console.log('@@@video playing call : ', u);
                if (this._hls._isDummy) {
                    this.setSubtitleTrack(this._subtitleManager._prevSubtitleTrack, false);
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: false,
                    wait_on: RICH360_WAIT_ON.RICH360_BUFFER
                });
                this._listener.trigger(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, true);
            }.bind(this));
            $(this._video).bind('webkitendfullscreen webkitbeginfullscreen', function(u) {
                if (u.type == 'webkitbeginfullscreen') {
                    $('body').addClass('fullscreen');
                    if (this._options.use_multiview) {
                        this.changeSingleView(true);
                    } else {
                        this._subtitleManager._prevSubtitleTrack = this.getSubtitleTrack();
                    }
                    this._subtitleManager.showDefaultSubtitle();
                } else {
                    if (u.type == 'webkitendfullscreen') {
                        $('body').removeClass('fullscreen');
                        if (this._options.use_multiview) {
                            this.changeSingleView(false);
                        }
                        this._subtitleManager.hideDefaultSubtitle();
                        this.pause_on();
                        this._rich360Player.hidePlayerController();
                        setTimeout(function() {
                            this._rich360Player.wakeupController();
                        }.bind(this), 100);
                    }
                }
            }.bind(this));
        }
    }, {
        key: 'addHlsFragParsedListener',
        value: function u() {
            this._hls.timeDictionary = {};
            this._hls.snsInDictionary = [];
            if (!this._hls._isDummy) {
                this._hls.on(Hls.Events.FRAG_PARSED, function(v, w) {
                    var x = w.frag;
                    console.log('curTime / this.duration : ', this._video.currentTime + '/' + this.duration);
                    console.log('frag.startPTS : ', x.sn, x.startPTS);
                    this._hls.timeDictionary[x.sn + ''] = x.startPTS;
                    this._hls.snsInDictionary.push(x.sn);
                    while (this._hls.snsInDictionary.length > 100) {
                        var y = 0;
                        if (this._hls.snsInDictionary[y] == 0) y = 1;
                        var z = this._hls.snsInDictionary[y];
                        this._hls.snsInDictionary.splice(y, 1);
                        delete this._hls.timeDictionary[z + ''];
                    }
                    if (x.startPTS == 0) {
                        this._hls.startSN = x.sn;
                    }
                }.bind(this));
            }
        }
    }, {
        key: 'attachHlsListeners',
        value: function v() {
            this._hls.on(Hls.Events.ERROR, function(w, x) {
                if (x.fatal) switch (x.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.log('fatal network error encountered, try to recover');
                        this._hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        var y = this._video.currentTime;
                        console.log('fatal media error encountered, try to recover');
                        if (x.details == Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR) {
                            console.log('this is not a media error, try to recover');
                            this._hls.startLoad();
                        } else {
                            this._hls.recoverMediaError();
                            this.play_on();
                        }
                        this._video.currentTime = y;
                        break;
                    default:
                        this._hls.destroy();
                        break;
                }
            }.bind(this));
            this._hls.on(Hls.Events.MANIFEST_PARSED, function() {
                this._quality_list = [];
                var w = this._hls.levels;
                for (var x in w) {
                    this._quality_list.push(w[x]);
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY);
                this._ready_state = RICH360_STATE.RICH360_READY;
            }.bind(this));
            this._hls.on(Hls.Events.LEVEL_SWITCHED, function(w, x) {
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: false,
                    wait_on: RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
                });
                this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, x.level);
            }.bind(this));
            this._hls.on(Hls.Events.NON_NATIVE_TEXT_TRACKS_FOUND, function(w, x) {
                for (var y = 0; y < x.tracks.length; y++) {
                    this._subtitleList.push({
                        id: y,
                        label: x.tracks[y].label,
                        lang: x.tracks[y].subtitleTrack.lang
                    });
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
            }.bind(this));
            this._hls.on(Hls.Events.CUES_PARSED, function(w, x) {
                if (this._subtitleManager) {
                    var y = x.cues.length;
                    var z = [];
                    for (var A = 0; A < y; A++) {
                        z.push({
                            startTime: x.cues[A].startTime,
                            endTime: x.cues[A].endTime,
                            text: x.cues[A].text,
                            track_num: this._hls._hls.subtitleTrack,
                            view: this._view
                        });
                    }
                    this._subtitleManager.addCueData(z);
                }
            }.bind(this));
        }
    }, {
        key: 'attachPlayerUiListners',
        value: function w() {
            if (this._hls._isDummy) {
                $(this._ui.fullBtn).on('click', function() {
                    this._subtitleManager.showDefaultSubtitle();
                    if (!this._video.paused) {
                        this._video.webkitEnterFullscreen();
                    }
                }.bind(this));
            } else this._ui.fullScreen = new FullscreenButton(this._rich360Player, this._ui.fullBtn);
        }
    }, {
        key: 'changeCurrentLevel',
        value: function x(y) {
            var z = this._hls.currentLevel;
            if (y != -1 && z != y || y == -1 && this._hls.nextAutoLevel != z) {
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: true,
                    wait_on: RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
                });
            }
            this._hls.currentLevel = y;
        }
    }, {
        key: 'play',
        value: function y() {
            this.play_on();
            this._logger.addLog({
                event: 'play'
            });
        }
    }, {
        key: 'pause',
        value: function z() {
            this.pause_on();
            this._logger.addLog({
                event: 'pause'
            });
        }
    }, {
        key: 'currentPosition',
        get: function A() {
            return this._video.currentTime;
        },
        set: function B(C) {
            if (!isNaN(this._video.duration)) {
                if (0 > C) C = 0;
                if (C > this._video.duration) C = this._video.duration;
                if (Math.abs(C - this._video.currentTime) > 0.5) {
                    this._video.currentTime = C;
                    this._logger.addLog({
                        event: 'seek',
                        time: C
                    });
                    this._render_once_on_seek = true;
                }
            } else console.log('isNan');
        }
    }, {
        key: 'duration',
        get: function C() {
            return this._video.duration;
        }
    }, {
        key: 'volume',
        get: function D() {
            return this._video.volume;
        },
        set: function E(F) {
            return this._video.volume = F;
        }
    }, {
        key: 'quality',
        get: function F() {
            return this._hls.currentLevel;
        },
        set: function G(H) {
            if (H < -1) H = -1;
            if (H >= this._quality_list.size) H = this._quality_list.size;
            this.changeCurrentLevel(H);
            this._logger.addLog({
                event: 'quality_change',
                level: H
            });
        }
    }, {
        key: 'isAutoQuality',
        get: function H() {
            return this._hls.isAutoQuality();
        }
    }, {
        key: 'qualityList',
        get: function I() {
            return this._quality_list;
        }
    }, {
        key: 'setSubtitleTrack',
        value: function J(K) {
            var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (this._hls._isDummy) {
                var M = this._video.textTracks.length;
                for (var N = 0; N < M; N++) {
                    if (K == N) {
                        this._video.textTracks[N].mode = 'showing';
                    } else {
                        this._video.textTracks[N].mode = 'disabled';
                    }
                }
            } else this._hls._hls.subtitleTrack = K;
            if (L) {
                this._subtitleManager.clearCueData();
            }
        }
    }, {
        key: 'getSubtitleTrack',
        value: function K() {
            if (this._hls._isDummy) {
                var L = this._video.textTracks.length;
                for (var M = 0; M < L; M++) {
                    if (this._video.textTracks[M].mode == 'showing' || this._video.textTracks[M].mode == 'hidden') return M;
                }
                return -1;
            } else {
                if (this._hls._hls) {
                    return this._hls._hls.subtitleTrack;
                } else return -1;
            }
        }
    }, {
        key: 'subtitleList',
        get: function L() {
            return this._subtitleList;
        }
    }, {
        key: 'setChangingView',
        value: function M(N) {
            var O = this._display;
            var P = N;
            if (typeof N === 'undefined') P = false;
            this._changingView = P;
            if (!O) return;
            if (!O._wrapperList) return;
            if (P) {
                addClassName(O._wrapperList, 'changing-source');
            } else removeClassName(O._wrapperList, 'changing-source');
        }
    }]);
    return a;
}();
var Rich360SubtitleManager = function() {
    function a(b) {
        _classCallCheck(this, a);
        this._player = b;
        this._subtitleDiv = document.createElement('div');
        this._subtitleArr = [];
        this._subtitleTrack = -1;
        this._cues = [];
        this._subItv = null;
        this._isHideDefaultSubtitles = true;
        this._bfSendSubTime = new Date();
        this.initialize();
        this._prevSubtitleTrack = -1;
        this._prevViewOffsetTime = 0;
    }
    _createClass(a, [{
        key: 'initialize',
        value: function b() {
            this._subtitleDiv.id = 'subtitleDiv';
            var c = this._subtitleDiv.style;
            c.position = 'absolute';
            c.bottom = 0;
            c.left = 0;
            c.textAlign = 'center';
            c.fontFamily = 'sans-serif';
            c.fontWeight = 'bold';
            c.backgroundColor = 'transparent';
            c.color = 'white';
            c.display = 'none';
            c.verticalAlign = 'bottom';
            c.fontWeight = 700;
            c.textShadow = '#000000 0px 0px 7px';
            this._player._parent_dom.appendChild(this._subtitleDiv);
            this.setSubtitleItv();
        }
    }, {
        key: 'addCueData',
        value: function c(d) {
            this._bfSendSubTime = new Date();
            for (var e = 0; e < d.length; e++) {
                this._cues.push(d[e]);
            }
        }
    }, {
        key: 'clearCueData',
        value: function d() {
            this._cues = [];
            this._subtitleDiv.innerHTML = '';
            this._subtitleDiv.style.display = 'none';
        }
    }, {
        key: 'drawSubtitles',
        value: function e() {
            var f = [];
            for (var g = 0; g < this._cues.length; g++) {
                if (this._prevViewOffsetTime) {
                    this._cues[g].startTime -= this._prevViewOffsetTime;
                    this._cues[g].endTime -= this._prevViewOffsetTime;
                }
                if (this._player._video.currentTime > this._cues[g].endTime && !this._player._options.content_data.use_vod) {
                    this._cues.splice(g, 1);
                    g--;
                    continue;
                }
                if (this._player._video.currentTime >= this._cues[g].startTime && this._player._video.currentTime < this._cues[g].endTime) {
                    var h = false;
                    for (var k = 0; k < f.length; k++) {
                        if (f[k].startTime == this._cues[g].startTime && f[k].endTime == this._cues[g].endTime) {
                            h = true;
                        }
                    }
                    if (!h) {
                        f.push({
                            startTime: this._cues[g].startTime,
                            endTime: this._cues[g].endTime,
                            text: this._cues[g].text
                        });
                    }
                }
            }
            this._prevViewOffsetTime = 0;
            if (!f.length) {
                this._subtitleDiv.innerHTML = '';
                this._subtitleDiv.style.display = 'none';
                return;
            }
            var l = this._player._parent_dom.offsetWidth;
            var m = this._player._parent_dom.offsetHeight;
            var n = {
                left: l / 100 * 10,
                bottom: m / 100 * 5
            };
            if (document.getElementById('playerBottomWrap').style.display != 'none') {
                var o = document.getElementById('playerBottomWrap').clientHeight;
                if (document.getElementById('playerBottomWrap').clientWidth < 812) {
                    o = 0;
                }
                n.bottom += o;
            }
            if (!this._player._hls._isDummy) {
                if (parseInt(this._subtitleDiv.style.left.replace('px', '')) == parseInt(n.left) && parseInt(this._subtitleDiv.style.bottom.replace('px', '')) == parseInt(n.bottom) && this._player._hls._hls.subtitleTrack == this._subtitleTrack && this.compareArray(this._subtitleArr, f)) {
                    return;
                }
            }
            var p = l / 100 * 50;
            var q = l / 100 * 80;
            var r = l / 100 * 2.5;
            if (l < 568) {
                r = l / 100 * 3.2;
            } else if (l > 1000) {
                r = l / 100 * 2.2;
            }
            var s = 2;
            var t = 0;
            var u = [];
            for (var g = 0; g < f.length; g++) {
                var v = f[g].text.split('\n');
                var w = v.length;
                for (var k = w - 1; k >= 0; k--) {
                    if (v[k] == '') continue;
                    var x = this.measureText(v[k], r) + r;
                    if (x >= q) {
                        x = q;
                    }
                    var y = p - x / 2 - n.left;
                    u[t] = '<p style="color:white;word-break:break-all;font-weight:700;text-shadow:#000000 0px 0px 7px;padding:1px 5px;width:' + x + 'px;margin-left:' + y + 'px;margin-bottom:2px;">' + v[k] + '</p>';
                    t++;
                    if (s == t) break;
                }
                if (s == t) {
                    break;
                }
            }
            var z = '';
            for (var A = u.length - 1; A >= 0; A--) {
                z += u[A];
            }
            this._subtitleDiv.innerHTML = z;
            this._subtitleDiv.style.width = q + 'px';
            this._subtitleDiv.style.left = n.left + 'px';
            this._subtitleDiv.style.bottom = n.bottom + 'px';
            this._subtitleDiv.style.fontSize = r + 'px';
            this._subtitleDiv.style.display = 'block';
            this._subtitleArr = JSON.parse(JSON.stringify(f));
            if (this._player._hls._isDummy) {
                this._subtitleTrack = this.getVideoSubtitleTrack();
            } else this._subtitleTrack = this._player._hls._hls.subtitleTrack;
        }
    }, {
        key: 'compareArray',
        value: function f(g, h) {
            var i = false;
            if (g.length != h.length) {
                return i;
            }
            g.forEach(function(l) {
                var m = h.indexOf(l);
                if (m > -1) h.splice(m, 1);
            });
            i = h.length == 0;
            return i;
        }
    }, {
        key: 'measureText',
        value: function g(h, i) {
            var j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15625, 0.3, 0.4, 0.7, 0.6, 0.9, 0.7, 0.2, 0.4, 0.4, 0.4, 0.6, 0.3, 0.4, 0.3, 0.5, 0.6, 0.55625, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.3, 0.3, 0.6, 0.6, 0.6, 0.6, 1.1, 0.8, 0.7, 0.8, 0.7234375, 0.7, 0.6109375, 0.8, 0.7234375, 0.3, 0.5, 0.8, 0.6, 0.834375, 0.7234375, 0.8, 0.7, 0.8, 0.8, 0.7, 0.8, 0.7234375, 0.8, 1.1, 0.8, 0.8, 0.8, 0.3, 0.5, 0.3, 0.6, 0.7, 0.334375, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5, 0.6, 0.6, 0.2234375, 0.3234375, 0.6, 0.2234375, 0.834375, 0.6, 0.6, 0.6, 0.6, 0.4, 0.5, 0.4, 0.6, 0.7, 0.9, 0.7, 0.7, 0.6, 0.5, 0.2609375, 0.5, 0.6];
            var k = 1.2;
            return h.split('').map(function(l) {
                return l.charCodeAt(0) < j.length ? j[l.charCodeAt(0)] + 0.1 : k;
            }).reduce(function(l, m) {
                return m + l;
            }) * i;
        }
    }, {
        key: 'setSubtitleItv',
        value: function h() {
            if (this._subItv) {
                clearInterval(this._subItv);
                this._subItv = null;
            }
            this._subItv = setInterval(function() {
                if (this._cues.length) {
                    this.drawSubtitles();
                } else {
                    if (this._player.getSubtitleTrack() != -1) {
                        var j = new Date();
                        if (this._bfSendSubTime.getTime() + 10000 < j) {
                            var k = this._player.getSubtitleTrack();
                            this._player.setSubtitleTrack(-1);
                            this._bfSendSubTime = j;
                            setTimeout(function() {
                                this._player.setSubtitleTrack(k);
                            }.bind(this), 100);
                        }
                    }
                }
            }.bind(this), 100);
        }
    }, {
        key: 'getVideoSubtitleTrack',
        value: function i() {
            var j = this._player._video.textTracks.length;
            for (var k = 0; k < j; k++) {
                if (this._player._video.textTracks[k].mode == 'showing' || this._player._video.textTracks[k].mode == 'hidden') {
                    return k;
                }
            }
            return -1;
        }
    }, {
        key: 'hideDefaultSubtitle',
        value: function j() {
            this._isHideDefaultSubtitles = true;
            var k = this._player._video.textTracks.length;
            for (var l = 0; l < k; l++) {
                if (this._player._video.textTracks[l].mode == 'showing') {
                    this._player._video.textTracks[l].mode = 'hidden';
                    cusDDselectOption('#ccSelect', l, true);
                }
            }
        }
    }, {
        key: 'showDefaultSubtitle',
        value: function k() {
            this._isHideDefaultSubtitles = false;
            var l = this._player._video.textTracks.length;
            for (var m = 0; m < l; m++) {
                if (this._player._video.textTracks[m].mode == 'hidden') {
                    this._player._video.textTracks[m].mode = 'showing';
                }
            }
        }
    }]);
    return a;
}();
var MultiViewDisplay = function() {
    function a(b, c, d, e, f, g) {
        _classCallCheck(this, a);
        this._options = b;
        this._video = c;
        this._player = d;
        this._videoSubPositions = f;
        this._videoMainPosition = e;
        this._multiviewDivArr = g;
        this._canvasFPS = 0;
        this._updateCanvasFlag = false;
        this._showMultiPreview = false;
        this._multiviewCanvas = [];
        this._multiviewCtx = [];
        this._doubleBufferCanvas = [];
        this._bfVideoWidth = 0;
        this._bfVideoHeight = 0;
        this._wrapper = document.querySelector('#multiViewWrap');
        this._wrapperList = document.querySelector('#multiViewList');
        var h = document.createElement('canvas');
        h.setAttribute('id', 'mvCanvas');
        h.style.position = 'absolute';
        h.style.top = '0px';
        this._multiviewCanvas.push(h);
        this._multiviewCtx.push(h.getContext('2d', {
            alpha: false
        }));
        $(this._wrapperList).append(h);
        var j = document.createElement('canvas');
        this._doubleBufferCanvas.push(j);
        for (var k = 0; k < this._videoSubPositions.length; k++) {
            var l = createElementFromHTML('<div class="canvas-overlayer"><span class="label">' + gettext('MULTIVIEW_SWITCHING_VIEW') + '</span></div>');
            this._multiviewDivArr[k].append(l);
        }
        if (this._options.container) {
            this._parent_dom = this._options.container;
        } else {
            this._parent_dom = document.body;
        }
        this._mainDiv = document.createElement('div');
        this._mainDiv.setAttribute('id', 'mvMainDiv');
        this._mainDiv.style.overflow = 'hidden';
        this._mainDiv.style.position = 'absolute';
        this._mainDiv.appendChild(this._video);
        this._parent_dom.appendChild(this._mainDiv);
        if (this._video.readyState == 0) {
            this._video.addEventListener('canplay', this.arrangeVideo.bind(this), {
                once: true
            });
        } else {
            this.arrangeVideo();
        }
        window.addEventListener('resize', function() {
            setTimeout(function() {
                this.arrangeVideo();
            }.bind(this), 200);
        }.bind(this), false);
        window.addEventListener('orientationchange', function() {
            setTimeout(function() {
                this.arrangeVideo();
            }.bind(this), 500);
        }.bind(this), false);
    }
    _createClass(a, [{
        key: 'replaceVideo',
        value: function b(c) {
            this._mainDiv.removeChild(this._video);
            this._mainDiv.appendChild(c);
            this._video = c;
        }
    }, {
        key: 'updateVideoArrangement',
        value: function c(d, e) {
            var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            this._videoMainPosition = d;
            this._videoSubPositions = e;
            if (f) this.arrangeVideo();
        }
    }, {
        key: 'arrangeVideo',
        value: function d() {
            var e = this._videoMainPosition;
            if (this._player._view != e.singleview_id) {
                var f = _createForOfIteratorHelper(this._videoSubPositions);
                var g;
                try {
                    for (f.s(); !(g = f.n()).done;) {
                        var h = g.value;
                        if (h.singleview_id == this._player._view) {
                            e = h;
                            break;
                        }
                    }
                } catch (y) {
                    f.e(y);
                } finally {
                    f.f();
                }
            }
            var i = this._video.videoWidth;
            var j = this._video.videoHeight;
            if (!this._video.videoWidth) {
                i = this._bfVideoWidth;
            }
            if (!this._video.videoHeight) {
                j = this._bfVideoHeight;
            }
            this._bfVideoWidth = i;
            this._bfVideoHeight = j;
            var k = e.width * i / (e.height * j);
            console.log('arrangement : ' + e.width + ', ' + e.height + ' video : ' + i + ', ' + j);
            var l = this._parent_dom.offsetWidth / this._parent_dom.offsetHeight;
            console.log('videoRatio : ' + k + ' containerRatio : ' + l);
            var m;
            var n;
            var o;
            var q;
            if (k > l) {
                console.log('videoRatio > containerRatio');
                m = this._parent_dom.offsetWidth;
                n = this._parent_dom.offsetWidth / k;
                o = (this._parent_dom.offsetHeight - n) / 2;
                q = 0;
            } else {
                console.log('videoRatio <= containerRatio');
                n = this._parent_dom.offsetHeight;
                m = this._parent_dom.offsetHeight * k;
                q = (this._parent_dom.offsetWidth - m) / 2;
                o = 0;
            }
            Object.assign(this._mainDiv.style, {
                width: m + 'px',
                height: (document.fullscreenEnabled && !checkMobileAndTablet() ? n - 5 : n) + 'px',
                left: q + 'px',
                top: o + 'px'
            });
            var r = m / e.width;
            var s = n / e.height;
            var t = e.x * i * r / i;
            var u = e.y * j * s / j;
            Object.assign(this._video.style, {
                width: r + 'px',
                height: s + 'px',
                left: '-' + t + 'px',
                top: -1 * u + 1 + 'px',
                position: 'absolute'
            });
            if (!this._showMultiPreview) this._updateCanvasFlag = false;
            else {
                if (!this._updateCanvasFlag) {
                    this._updateCanvasFlag = true;
                    this._canvasTimeStamps = [];
                    this._canvasTimeStamps.push(performance.now());
                    this._canvasTimeStampIndex = 0;
                    window.requestAnimationFrame(this.drawCanvas.bind(this));
                }
            }
        }
    }, {
        key: 'showMultiPreview',
        set: function e(f) {
            this._showMultiPreview = f;
            this.arrangeVideo();
        }
    }, {
        key: 'selectedMultiviewCanvas',
        value: function f(g) {
            var h = $(this._multiviewDivArr[g]);
            if (this._player._view == g) h.addClass('on');
            else h.removeClass('on');
        }
    }, {
        key: 'drawCanvas',
        value: function g(h) {
            var i = this;
            if (this._updateCanvasFlag) {
                var j = this._video;
                var k = this._videoSubPositions;
                var l = this._multiviewCtx[0];
                var m = parseInt($(this._multiviewDivArr[0]).css('margin-bottom').replace('px', ''));
                var n = parseInt($(this._multiviewDivArr[0]).css('margin-left').replace('px', ''));
                var o = false;
                if (this._multiviewCanvas[0].width !== this._multiviewDivArr[0].clientWidth) {
                    this._multiviewCanvas[0].width = this._multiviewDivArr[0].clientWidth;
                    o = true;
                }
                if (this._multiviewCanvas[0].height !== this._multiviewDivArr[0].clientHeight * this._multiviewDivArr.length + m * (this._multiviewDivArr.length - 1)) {
                    this._multiviewCanvas[0].height = this._multiviewDivArr[0].clientHeight * this._multiviewDivArr.length + m * (this._multiviewDivArr.length - 1);
                    o = true;
                }
                var p = parseInt($(this._multiviewCanvas[0]).css('margin-left').replace('px', ''));
                if (p !== n) {
                    $(this._multiviewCanvas[0]).css('margin-left', n + 'px');
                    o = true;
                }
                if (!j.paused && !j.ended || o) {
                    k.forEach(function(t, u) {
                        var v = i._multiviewDivArr[u];
                        var w = k.find(function(H) {
                            return H.singleview_id === u;
                        });
                        i.selectedMultiviewCanvas(u);
                        if (w == null) return;
                        var z = w.x;
                        var A = w.y;
                        var B = w.width;
                        var C = w.height;
                        var D = j.videoWidth;
                        var E = j.videoHeight;
                        var F = v.offsetWidth;
                        var G = v.offsetHeight;
                        l.drawImage(j, Math.round(z * D), Math.round(A * E), Math.round(B * D), Math.round(C * E), 0, G * u + m * u, F, G);
                    }.bind(this));
                    var q = this._multiviewCanvas[0];
                    var r = this._doubleBufferCanvas[0];
                    r.width = q.width;
                    r.height = q.height;
                    r.getContext('2d', {
                        alpha: false
                    }).drawImage(q, 0, 0);
                    l.drawImage(r, 0, 0);
                }
                this._canvasTimeStampIndex++;
                if (this._canvasTimeStampIndex >= 100) {
                    this._canvasTimeStampIndex = 0;
                }
                var s = 0;
                if (this._canvasTimeStamps.length < 100) {
                    this._canvasTimeStamps.push(h);
                } else {
                    this._canvasTimeStamps[this._canvasTimeStampIndex] = h;
                    s = this._canvasTimeStampIndex + 1;
                    if (s >= 100) s = 0;
                }
                this._canvasFPS = (this._canvasTimeStamps.length - 1) * 1000 / (this._canvasTimeStamps[this._canvasTimeStampIndex] - this._canvasTimeStamps[s]);
                setTimeout(function() {
                    return window.requestAnimationFrame(i.drawCanvas.bind(i));
                }, 10);
            }
        }
    }]);
    return a;
}();
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
    case 'mbc_idol_live_sample':
        var DCvi = '36afb480-109a-4a43-9d84-0b9704b49d01';
        break;
}
var ChatFilter = function() {
    var a = '';
    var b = false;
    return {
        loadChatFilterData: function c(d) {
            if (b) {
                if (d) d();
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
                    e.open('GET', '/static/filtering/chat_filtering.txt');
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
                        if (d) d();
                    }
                }
            };
            e.send();
        },
        filteringChatText: function d(e) {
            if (!b) return;
            var f = 'gi';
            var g = new RegExp(a, f);
            return e.replace(g, '***');
        },
        checkFilteringData: function e() {
            return b;
        },
        checkNickname: function f(g) {
            if (!b) return;
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
        hasForbidden: function d(e) {
            if (b === '') return false;
            var f = new RegExp(b, 'gi');
            return f.test(e);
        }
    };
}();
var Chat = {};
var CHAT_MSG_SEPARATOR = '|*|';
var CHAT_USERID_SEPARATOR = '|#|';
var NICKNAME_SEPARATOR = '|&|';
var USER_CHAT_INPUT_MAXLENGTH = 80;
var OPERATOR_CHAT_INPUT_MAXLENGTH = 1000;
var ARTIST_ADMIN_USER_CHAT_INPUT_MAXLENGTH = 128;
Chat.Manager = function() {
    var a = 5;
    var b = 10;
    var c = 15;
    var d = 2000;
    var e = '';
    var f = b;
    var g = a;
    var h = null;
    var i = 'ch_chat1' + '_' + DCvi;
    var j = [];
    var k = 'ch_notice' + '_' + DCvi;
    var l = 'ch_ctr' + '_' + DCvi;
    var m = 'ch_artist' + '_' + DCvi;
    var n = null;
    var o = null;
    var p = null;
    var q = [];
    var r = null;
    var s = null;
    AWS.config.update({
        region: Nierw,
        accessKeyId: Yacaw,
        secretAccessKey: Ytcsw
    });
    var t = null;
    var u = {};
    var v = '';
    return {
        setContentData: function w(x) {
            u = x;
        },
        isChatUsed: function x() {
            return u.is_chat_used;
        },
        getChatChannels: function y() {
            return j;
        },
        setChatChannels: function z() {
            if (u.chat_channel_num > 0) {
                if (Chat.Manager.checkArtistUser(n) || Chat.Manager.checkOperationntUser(n) || Chat.Manager.checkAdminUser(n)) {
                    for (var A = 1; A <= u.chat_channel_num; A++) {
                        j.push(i + '_' + A.toString());
                    }
                    if (Chat.Manager.checkArtistUser(n)) {
                        j.push(m);
                    }
                } else {
                    var B = Math.floor(Math.random() * parseInt(u.chat_channel_num)) + 1;
                    j.push(i + '_' + B.toString());
                }
            }
        },
        getNoticeChannel: function A() {
            return k;
        },
        getCtrChannel: function B() {
            return l;
        },
        setUserId: function C(D) {
            if (n) return;
            if (!D) {
                n = getCookie(DCvi + '_user_id');
            } else {
                n = D;
            }
        },
        getUserId: function D() {
            return n;
        },
        setOperatorChNum: function E(F) {
            o = F;
        },
        setOperatorSelCh: function F(G) {
            p = G;
        },
        setPubnubAPI: function G(H) {
            Chat.Manager.setUserId();
            e = H;
            s = new PubNub({
                publishKey: YPP3z,
                subscribeKey: KSPdf,
                uuid: n
            });
            AWS.config.update({
                region: Nierw,
                accessKeyId: Yacaw,
                secretAccessKey: Ytcsw
            });
            t = new AWS.Kinesis();
            Chat.Ui.initChatUI();
            Chat.Ui.initChatUIEvent();
            Chat.Manager.setChatChannels();
            Chat.Manager.setChatHistory();
            Chat.Manager.initPubnubEvent();
        },
        setChatHistory: function H() {
            s.history({
                channel: k,
                count: 1
            }, function(J, K) {
                console.log(J, K);
                if (K) {
                    if (K.messages.length) {
                        Chat.Ui.updateNotice(K.messages[0].entry.update, K.messages[0].entry.timetoken, K.messages[0].entry.entry);
                    }
                }
            });
            var I = 0;
            if (p) {
                I = p - 1;
            }
            s.history({
                channel: j[I],
                count: c
            }, function(J, K) {
                console.log(J, K);
                if (K) {
                    if (K.messages.length)
                        for (var L = 0; L < K.messages.length; L++) {
                            var M = K.messages[L].entry.update.split(CHAT_MSG_SEPARATOR);
                            for (var N = 0; N < M.length; N++) {
                                var O = M[N].split(CHAT_USERID_SEPARATOR)[0];
                                Chat.Ui.displayMessage(M[N], K.messages[L].timetoken, O, true);
                            }
                        }
                }
            });
            s.history({
                channel: m,
                count: 10000
            }, function(J, K) {
                console.log(J, K);
                if (K) {
                    var L = JSON.parse(JSON.stringify(K));
                    if (L.messages.length) {
                        for (var M = 0; M < L.messages.length; M++) {
                            var N = L.messages[M].entry.update;
                            var O = N.split(CHAT_USERID_SEPARATOR)[0];
                            if (O) {
                                Chat.Ui.displayArtistHistoryMsg(N, L.messages[M].timetoken, O);
                            }
                        }
                        if ($('#artistChatList').length) {
                            $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
                        }
                    }
                }
            });
        },
        initPubnubEvent: function I() {
            var J = [k, l];
            if (p) {
                J.push(j[p - 1]);
            } else {
                if (!o) {
                    o = 1;
                }
                for (var K = 0; K < o; K++) {
                    J.push(j[K]);
                }
            }
            s.addListener({
                status: function M(N) {
                    console.log('[STATUS: ' + N.category + ']', 'connected to channels: ' + N.affectedChannels);
                    if (N.category == 'PNConnectedCategory') {
                        ChatFilter.loadChatFilterData();
                        Chat.Manager.initChatInterval();
                    }
                },
                message: function N(O) {
                    if (O.channel == k) Chat.Ui.updateNotice(O.message.update, O.timetoken, O.message.entry);
                    else {
                        if (O.channel == l) {
                            Chat.Ui.recvCtrlChMsg(O.message.update);
                        } else {
                            var P = O.message.update.split(CHAT_MSG_SEPARATOR);
                            for (var Q = 0; Q < P.length; Q++) {
                                var R = P[Q].split(CHAT_USERID_SEPARATOR)[0];
                                if (n == R) continue;
                                if (Chat.Manager.checkArtistUser(R)) {
                                    Chat.Ui.displayMessage(O.message.update, O.timetoken, O.message.entry);
                                } else q.push(P[Q]);
                            }
                            if (q.length) {
                                Chat.Manager.displayMessageItv(parseInt(O.timetoken));
                            }
                        }
                    }
                }
            });
            s.subscribe({
                channels: J
            });
        },
        displayMessageItv: function J(K) {
            if (r) {
                clearInterval(r);
                r = null;
            }
            var L = d / q.length;
            r = setInterval(function() {
                if (q.length) {
                    var M = q[0].split(CHAT_USERID_SEPARATOR)[0];
                    Chat.Ui.displayMessage(q[0], K, M);
                    K = parseInt(K) + parseInt(L * 1000 * 10);
                    q.splice(0, 1);
                }
            }, L);
        },
        isSuperUser: function K() {
            var L = this.getUserId();
            return this.checkOperationntUser(L) || this.checkAdminUser(L) || this.checkArtistUser(L);
        },
        submitUpdate: function L(M, N, O, P) {
            if (!s) return;
            if (N === v && !this.isSuperUser()) return;
            if (iCM()) return;
            v = N;
            if (!P) {
                if (f) {
                    f--;
                }
                if (f <= 0) {
                    _availableChating = false;
                    Chat.Ui.disableChatInput(a - g);
                    return;
                } else {
                    _availableChating = true;
                    Chat.Ui.enableChatInput();
                }
            }
            if (!Array.isArray(O)) {
                O = [O];
            }
            if (this.isSuperUser()) {
                var Q = false;
                for (var R = 1; R <= O.length; R++) {
                    s.publish({
                        channel: O[R - 1],
                        message: {
                            entry: M,
                            update: N
                        }
                    }, function(W, X) {
                        if (W.error) {} else {
                            if (Chat.Manager.checkArtistUser(n) && !Q) {
                                if (X) {
                                    Chat.Ui.displayMessage(N, X.timetoken, n);
                                }
                                Q = true;
                            }
                        }
                    });
                }
            } else {
                var S = {
                    Data: JSON.stringify(N),
                    PartitionKey: O[0],
                    StreamName: 'KINESIS_CHAT'
                };
                t.putRecord(S, function(Y, Z) {
                    if (Y) console.log(Y, Y.stack);
                    else {
                        console.log(Z);
                        var a0 = new Date();
                        Chat.Ui.displayMessage(N, a0.getTime() * 10000);
                    }
                });
            }
        },
        checkOperationntUser: function M(N) {
            if (u.operation_account === N) {
                return true;
            } else {
                return false;
            }
        },
        checkAdminUser: function N(O) {
            if (u.admin_account === O) return true;
            return false;
        },
        checkArtistUser: function O(P) {
            for (var Q = 0; Q < u.artist_account.length; Q++) {
                if (u.artist_account[Q] === P) return true;
            }
            return false;
        },
        initChatInterval: function P() {
            if (h) {
                clearInterval(h);
            }
            h = setInterval(function() {
                g++;
                if (g >= a) {
                    g = 0;
                    f = b;
                }
                if (f <= 0) {
                    Chat.Ui.disableChatInput(a - g);
                } else {
                    Chat.Ui.enableChatInput();
                }
            }, 1000);
        },
        getNickName: function Q() {
            return e;
        },
        destroy: function R() {
            if (s) {
                s.destroy();
            }
            s = null;
        }
    };
}();
Chat.Ui = function() {
    var a = 100;
    var b = false;
    var c = false;
    var d = false;
    var e = [];
    var f = true;
    var g = {
        webview_sample_v1: {
            'c09a92ff-4c8c-4e66-ad31-b10371778fcd': {
                msgClass: ''
            }
        },
        '210514_hike101': {
            '6aeae7df-671d-40e0-81d3-fac96a3f68ab': {
                msgClass: 'room-arti-101'
            },
            '15273a8b-2522-4970-83b8-870585b016c2': {
                msgClass: 'hike-admin'
            }
        },
        '210514_hike201': {
            '1e4d8818-4805-4972-83c7-86c2c0988cff': {
                msgClass: 'room-arti-201'
            },
            'd93568e6-5d36-4cd5-b7b8-591c355538e5': {
                msgClass: 'hike-admin'
            }
        },
        '210514_hike301': {
            '3936e142-bffb-4d13-ae38-06880892b8ac': {
                msgClass: 'room-arti-301'
            },
            'c7bb4c10-a9a1-458f-9230-ed3802159ef1': {
                msgClass: 'room-arti-301'
            },
            '54fd4baf-f3dd-450f-bdfa-106e66980b2e': {
                msgClass: 'hike-admin'
            }
        },
        '210515_hike101': {
            '7945bbab-c6c5-41b4-8566-f6fcd2853779': {
                msgClass: 'room-arti-101'
            },
            'a06840cf-d22d-4a2e-ad02-7762dc6d1d2b': {
                msgClass: 'hike-admin'
            }
        },
        '210515_hike201': {
            'f8934b84-05dd-49cf-b9c6-dfe87bd8e5fa': {
                msgClass: 'room-arti-201'
            },
            'd55ec2af-4c15-4298-8c19-b96cde8b1bf8': {
                msgClass: 'hike-admin'
            }
        },
        '210515_hike301': {
            '1e2661e9-9f0e-4373-ac0b-a0f3c251a10a': {
                msgClass: 'room-arti-301'
            },
            'd791afae-4b03-4cdb-bcde-18fcf730ff5c': {
                msgClass: 'room-arti-301'
            },
            'f94cc3e0-9548-40b8-a268-bba1f02ad0f8': {
                msgClass: 'hike-admin'
            }
        }
    };
    return {
        initChatUI: function h() {
            var i = Chat.Manager.getUserId();
            if (Chat.Manager.checkOperationntUser(i)) {
                $('#chatInput').attr('maxlength', OPERATOR_CHAT_INPUT_MAXLENGTH);
            }
        },
        initChatUIEvent: function i() {
            var j = false;
            $('#chatContentWrap .scroll-bar').on('touchstart', function() {
                b = true;
            });
            $('#chatList').on('touchstart', function(k) {
                j = true;
            });
            $(document).on('touchmove', function(k) {
                console.log('touchmove');
                if (j) {
                    b = true;
                }
            });
            $(document).on('touchend', function(k) {
                j = false;
                console.log('touchmove');
            });
            $('#chatList').on('wheel', function(k) {
                if (k.originalEvent.deltaY < 0 && $('#chatList').scrollTop() > 0) {
                    b = true;
                }
            });
            $('#chatList').on('scroll', function() {
                if (d) return;
                var chatAnchor = $('#chatAnchor');
                var chatList = $('#chatList');
                var m = function t() {
                    return Math.ceil(chatList.scrollTop() + chatList.height());
                };
                var n = function u() {
                    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : m();
                    return v < chatList[0].scrollHeight;
                };
                var o = function v() {
                    chatAnchor.css('display', 'block');
                    b = true;
                };
                if (n()) setTimeout(function() {
                    return n() && o();
                }, 200);
                else {
                    chatAnchor.css('display', 'none');
                    b = false;
                    if (e.length !== 0) {
                        var p = document.createDocumentFragment();
                        var q = e.reverse();
                        for (var r = 0, s = q.length; r < s; r++) {
                            if (a <= r) break;
                            p.prepend(q[r]);
                        }
                        chatList.find('.user_chat:eq(-1)').css('margin-bottom', '1.25em');
                        chatList.append(p);
                        if (navigator.userAgent.indexOf('Firefox') === -1) chatList.find('.user_chat:eq(-1)').css('margin-bottom', '0');
                        chatList.scrollTop(chatList[0].scrollHeight);
                        e = [];
                    }
                }
            });
            $('#chatAnchor').on('click', function() {
                $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
                $('#chatAnchor').css('display', 'none');
            });
            $('#chatSendBtn').on('click', function() {
                var k = Chat.Manager.getNickName();
                var l = Chat.Manager.getUserId();
                if (!k) {
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                    return;
                }
                var m = $('#chatInput').val();
                if (!m || !ChatFilter.checkFilteringData()) {
                    return;
                }
                if (Chat.Manager.checkOperationntUser(l) && m.length > OPERATOR_CHAT_INPUT_MAXLENGTH) m = m.slice(0, OPERATOR_CHAT_INPUT_MAXLENGTH);
                else {
                    if ((Chat.Manager.checkAdminUser(l) || Chat.Manager.checkArtistUser(l)) && m.length > ARTIST_ADMIN_USER_CHAT_INPUT_MAXLENGTH) {
                        m = m.slice(0, ARTIST_ADMIN_USER_CHAT_INPUT_MAXLENGTH);
                    } else {
                        if (!Chat.Manager.isSuperUser() && m.length > USER_CHAT_INPUT_MAXLENGTH) {
                            m = m.slice(0, USER_CHAT_INPUT_MAXLENGTH);
                        }
                    }
                }
                if (Chat.Manager.checkOperationntUser(l)) Chat.Manager.submitUpdate(l, m, Chat.Manager.getNoticeChannel());
                else {
                    if (Chat.Manager.checkAdminUser(l)) {
                        Chat.Manager.submitUpdate(l, m, Chat.Manager.getCtrChannel());
                    } else {
                        var n = ChatFilter.filteringChatText(m);
                        Chat.Manager.submitUpdate(l, l + CHAT_USERID_SEPARATOR + k + NICKNAME_SEPARATOR + n, Chat.Manager.getChatChannels());
                    }
                }
                $('#chatInput').val('');
            });
            $('#chatInput').on('keydown', function(k) {
                if (k.keyCode == 13) {
                    $('#chatSendBtn').click();
                    return false;
                }
            });
            $('#chatInput').on('focus', function(k) {
                delayStopLoadingPanel();
            });
            $('#chatInput').on('blur', function(k) {
                delayStopLoadingPanel();
            });
            $('#artistChatList').on('scroll', debounce(function() {
                if (d) return;
                var artistChatList = $('#artistChatList');
                var l = function n() {
                    return Math.ceil(artistChatList.scrollTop() + artistChatList.height());
                };
                var m = function o() {
                    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l();
                    return p >= artistChatList[0].scrollHeight;
                };
                if (m()) {
                    f = true;
                } else {
                    f = false;
                }
            }, 200));
        },
        setResizingPage: function j(k) {
            d = k;
        },
        updateNotice: function k(l, m, n) {
            if (Chat.Manager.checkOperationntUser(n)) {
                if (l === '[delete]') {
                    $('#noticeChatWrap p[name=desc]').text('');
                    $('#noticeChatWrap').css('display', 'none');
                } else {
                    $('#noticeChatWrap p[name=desc]').html(l);
                    $('#noticeChatWrap').css('display', 'block');
                }
            }
        },
        recvCtrlChMsg: function l(m) {
            if (m.indexOf('[warning]') === 0) {
                var n = m.split('[warning]')[1];
                if (n == Chat.Manager.getUserId()) {
                    alertPopup(gettext('P_ALERT_TITLE'), '<' + _contentData.web_title + '>의 라이브가 진행중입니다.', gettext('P_ALERT_OK'));
                }
            } else {
                if (m.indexOf('[ticket_exposure]') === 0) {
                    var o = m.split('[ticket_exposure]')[1].split('|&|');
                    var p = o[0];
                    var q = o[1];
                    var r = parseInt(o[2]) * 1000;
                    setTicketExposureItv(p, q, r);
                }
            }
        },
        convertChatMsg: function m(n) {
            if (!n) return false;
            var o = n.split(CHAT_USERID_SEPARATOR);
            if (o.length < 2) return false;
            var p = o[0];
            o = o[1].split(NICKNAME_SEPARATOR);
            if (o.length < 2) return false;
            var q = o[0];
            var r = o[1];
            if (!p || !q || !r) return false;
            return {
                userId: p,
                nickName: q,
                text: r
            };
        },
        createArtistChatDiv: function n(o, p, q, r) {
            var s = $('.dummy-wrap > .artist_chat_dummy').clone();
            s.removeClass('artist_chat_dummy');
            var t = g[Tira] || {};
            var u = t[o] || null;
            if (u) {
                if (u.msgClass) {
                    s.find('.user_msg').addClass(u.msgClass);
                }
            }
            s.find('img').attr('src', 'https://resource.liveconnect.co.kr/events/imgs/' + Tira + '/artist_thumb_' + o + '.png');
            s.find('p[name=nickname]').text(p);
            s.find('p[name=text]').text(q);
            s.find('p[name=text]').append('<span class="chat_time fc_fff fs_12" style="vertical-align: baseline;">' + r.format(' ap&nbsp;hh:mm:ss') + '</span>');
            return s;
        },
        createUserChatDiv: function o(p, q, r, s) {
            var t = $('.dummy-wrap > .user_chat_dummy').clone();
            if (p == Chat.Manager.getUserId()) {
                t.addClass('t_my');
            }
            t.removeClass('user_chat_dummy');
            t.find('p[name=nickname]').text(q);
            t.find('span[name=text]').text(r);
            t.find('span[name=time]').text(s.format('ap hh:mm:ss'));
            return t;
        },
        isYourSelf: function p(q) {
            return q === Chat.Manager.getUserId();
        },
        displayMessage: function q(r, s, t, u) {
            var v = Chat.Ui.convertChatMsg(r);
            if (!v) return;
            var w = new Date(s / 10000);
            if (Chat.Manager.checkArtistUser(t)) {
                x = Chat.Ui.createArtistChatDiv(t, v.nickName, v.text, w);
                if (b) {
                    e.push(x[0]);
                } else {
                    $('#chatList').append(x);
                }
                if ($('#artistChatList').length && !u) {
                    $('#artistChatList').append(x.clone());
                }
            } else {
                if (t) {
                    var x = Chat.Ui.createUserChatDiv(t, v.nickName, v.text, w);
                    if (b) e.push(x[0]);
                    else {
                        $('#chatList').append(x);
                    }
                } else {
                    b = false;
                    $('#chatAnchor').css('display', 'none');
                    var x = Chat.Ui.createUserChatDiv(Chat.Manager.getUserId(), v.nickName, v.text, w);
                    $('#chatList').append(x);
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
                var y = $('#chatList').find('div').length - a;
                for (var z = 0; z < y; z++) {
                    $('#chatList').find('div:eq(0)').remove();
                }
            }
            if ((f || Chat.Ui.isYourSelf(v.userId)) && $('#artistChatList').length) {
                $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
            }
            if (!c && (Chat.Ui.isYourSelf(v.userId) || !t || !b)) {
                $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
            } else {
                $('#chatAnchor').css('display', 'block');
            }
        },
        displayArtistHistoryMsg: function r(s, t, u) {
            var v = Chat.Ui.convertChatMsg(s);
            if (!v) return;
            if (Chat.Manager.checkArtistUser(u)) {
                var w = new Date(t / 10000);
                var x = Chat.Ui.createArtistChatDiv(u, v.nickName, v.text, w);
                if ($('#artistChatList').length) {
                    $('#artistChatList').append(x);
                }
            }
        },
        enableChatInput: function s() {
            if ($('#chatInput').prop('readonly') != false) {
                $('#chatInput').prop('readonly', false);
                $('#chatInput').prop('placeholder', gettext('P_CHAT_INPUT_PLACEHOLDER'));
            }
        },
        disableChatInput: function t(u) {
            $('#chatInput').prop('readonly', true);
            if (u) {
                $('#chatInput').prop('placeholder', interpolate(gettext('P_CHAT_ABLE_DELAY_PLACEHOLDER_%(delay)s'), {
                    delay: u
                }, true));
            } else {
                $('#chatInput').prop('placeholder', '');
            }
        },
        setHoldChatScroll: function u(v) {
            c = v;
        },
        getHoldChatScroll: function v() {
            return c;
        }
    };
}();

function chatTest(a) {
    var b = 'chat_test';
    var c = new Date();
    var d = c.format('yyyyMMdd-HH:mm:ss:') + c.getMilliseconds().toString();
    var e = Chat.Manager.getChatChannels()[0];
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
        if (a <= 0) {
            clearInterval(_testItv[c]);
        } else {
            a--;
            chatTest(c, a);
        }
    }, b);
}

function chatTestItvStop() {
    for (var a in _testItv) {
        clearInterval(_testItv[a]);
    }
}
var iCM = function() {
    var a = false;
    return function(b) {
        var chatInput = $('#chatInput');
        var chatSendBtn = $('#chatSendBtn');
        if (typeof b !== 'undefined') a = b;
        if (b) chatInput.val('');
        chatInput.prop('placeholder', a ? gettext('CHAT_PLACEHOLDER_ON_MUTE') : gettext('P_CHAT_INPUT_PLACEHOLDER'));
        chatInput.attr('disabled', a);
        chatSendBtn.attr('disabled', a);
        return a;
    };
}();
var _wmarkImgUrl = '';

function updateWaterMarkPos(a) {
    var playerWrap = $('#playerWrap');
    var c = document.getElementsByTagName('video')[0];
    if (!c) return;
    if ($('#mvMainDiv').length) {
        playerWrap = $('#mvMainDiv');
    }
    if (!$('#wmark').length) {
        var d = document.createElement('div');
        d.setAttribute('id', 'wmark');
        playerWrap.append(d);
    }
    if (a) {
        $('#wmark').css('background-image', 'url(' + a + ')');
        _wmarkImgUrl = a;
    } else $('#wmark').css('background-image', 'url(' + _wmarkImgUrl + ')');
    var e = 1920;
    if (!e) {
        e = 1920;
    }
    var f = 1080;
    if (!f) {
        f = 1080;
    }
    var g = e / f;
    var h = playerWrap.width();
    var i = playerWrap.height();
    var j = h / g;
    var k = 0;
    var l = 0;
    var m = 0;
    if (j > i) {
        var n = i * g;
        m = n / e;
        k = (h - n) / 2;
    } else {
        var n = j;
        m = n / f;
        l = (i - n) / 2;
    }
    if (m > 1) {
        m = 1;
    }
    var o = 180;
    var p = 29;
    $('#wmark').css('width', o * m + 'px');
    $('#wmark').css('height', p * m + 'px');
    var q = 20;
    $('#wmark').css('top', q * m + l + 'px');
    $('#wmark').css('right', q * m + k + 'px');
}
var _ticketPos = {
    x: 0,
    y: 0
};
var _ticketExposureTime = 0;
var _ticketExposureItv = null;

function setTicketExposureItv(a, b, c) {
    if (a !== undefined) {
        _ticketPos.x = a;
    }
    if (b !== undefined) {
        _ticketPos.y = b;
    }
    if (c !== undefined) {
        _ticketExposureTime = c;
    }
    if (_ticketExposureItv) {
        clearInterval(_ticketExposureItv);
    }
    updateTicketDivPos();
    _ticketExposureItv = setInterval(function() {
        _ticketExposureTime -= 100;
        if (_ticketExposureTime < 0) {
            _ticketExposureTime = 0;
            clearInterval(_ticketExposureItv);
            _ticketExposureItv = null;
        }
        updateTicketDivPos();
    }, 100);
}

function updateTicketDivPos() {
    if (_ticketExposureTime <= 0) {
        if ($('#ticketDiv').length) {
            $('#ticketDiv').css('display', 'none');
        }
        return;
    }
    var playerWrap = $('#playerWrap');
    var b = document.getElementsByTagName('video')[0];
    if (!b) return;
    if ($('#mvMainDiv').length) {
        playerWrap = $('#mvMainDiv');
    }
    if (!$('#ticketDiv').length) {
        var c = document.createElement('div');
        c.setAttribute('id', 'ticketDiv');
        playerWrap.append(c);
    }
    var ticketDiv = $('#ticketDiv');
    var e = 1920;
    if (!e) {
        e = 1920;
    }
    var f = 1080;
    if (!f) {
        f = 1080;
    }
    var g = e / f;
    var h = playerWrap.width();
    var i = playerWrap.height();
    var j = h / g;
    var k = 0;
    var l = 0;
    var m = 0;
    if (j > i) {
        var n = i * g;
        m = n / e;
        k = h - n;
    } else {
        var n = j;
        m = n / f;
        l = i - n;
    }
    if (m > 1) {
        m = 1;
    }
    var o = 220;
    var p = 40;
    var q = 32;
    ticketDiv.css('width', o * m + 'px');
    ticketDiv.css('height', p * m + 'px');
    ticketDiv.css('top', (i - l) * _ticketPos.y + l / 2 + 'px');
    ticketDiv.css('left', (h - k) * _ticketPos.x + k / 2 + 'px');
    ticketDiv.css('font-size', q * m + 'px');
    ticketDiv.css('display', 'block');
    ticketDiv.text(getCookie(DCvi + '_ticket_id'));
}
var _player = null;
var IS_SINGLEVIEW_ON_MULTIVIEW = isom == 'True' ? true : false;
var USE_MULTIVIEW = umtv == 'True' ? true : false;
var PARAM_SINGLEVIEW_ON_MULTIVIEW = '?single_view=true';

function b() {
    $('#sliderPaddingDiv').width($('#playerSliderArea').width());
}

function c() {
    injectDeviceContentHeightToCSS();
    b();
    updateTicketDivPos();
}

function d(f) {
    if (f) {
        if (f._player) {
            if (f._player.qualityList) {
                return f._player.qualityList.length;
            }
        }
    }
    return false;
}

function e() {
    console.log('@@@ Single View on Multiview::', IS_SINGLEVIEW_ON_MULTIVIEW);
    console.log('@@@ Multiview::', USE_MULTIVIEW);
    if (USE_MULTIVIEW) {
        $('body').addClass('multiview');
    }
}
$(document).ready(function() {
    e();
    var f = 'keyboard-show-by-chat-input';
    var g = null;
    var h = isIpadOS() && isChrome();
    addClassToElementByEnv();
    injectDeviceContentHeightToCSS();
    $(window).on('orientationchange', function() {
        console.log('EVENT::orientationchange');
        injectDeviceContentHeightToCSS();
    });
    $(window).resize(debounce(function() {
        console.log('EVENT::resize');
        Chat.Ui.setResizingPage(true);
        if (isIpadOS()) {
            document.getElementsByTagName('video')[0].style.display = 'none';
        }
        c();
        $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
        setTimeout(function() {
            c();
            $('#chatAnchor').css('display', 'none');
            Chat.Ui.setResizingPage(false);
        }, 500);
        setTimeout(function() {
            if (isIpadOS()) {
                document.getElementsByTagName('video')[0].style.display = 'block';
            }
            c();
            $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
        }, 1000);
    }, 200));
    $('#chatInput').on('focus', function() {
        console.log('EVENT::#chatInput::focus');
        if (isIpadOS() && isChrome()) {
            document.body.classList.add(f);
        }
    });
    $('#chatInput').on('blur', function() {
        console.log('EVENT::#chatInput::blur');
        if (isIpadOS() && isChrome()) {
            document.body.classList.remove(f);
        }
    });
    $('.scrollbar-inner').scrollbar();
    $('#noticeChatWrap button[name=closebtn]').on('click', function() {
        $('#noticeChatWrap').css('display', 'none');
    });
    $('#qualityPopup button[name=closebtn]').on('click', function() {
        $('#qualityPopup').css('display', 'none');
    });
    $('#subtitlePopup button[name=closebtn]').on('click', function() {
        $('#subtitlePopup').css('display', 'none');
    });
    var i = new Menu({
        wrapper: '#o-wrapper',
        type: 'slide-right',
        menuOpenerClass: '.c-button',
        maskId: '#c-mask'
    });
    var j = document.querySelector('#chat-i-pushy');
    j.addEventListener('click', function(o) {
        o.preventDefault();
        i.open();
        j.style.display = 'none';
        $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
    });
    i.open();
    $('#chatCloseBtn').on('click', function() {
        $('#playerBottomWrap').css('display', 'block');
        $('#chat-i-pushy').css('display', 'block');
        return true;
    });
    var k = {
        container: document.getElementById('playerWrap'),
        use_multiview: false
    };
    var l = {
        pageWrap: document.getElementById('pageWrap'),
        playerWrap: document.getElementById('playerWrap'),
        playThumbnail: document.getElementById('playThumbnail'),
        chatOpenBtn: document.getElementById('chat-i-pushy'),
        chatWrap: document.getElementById('chatWrap'),
        chatContents: document.getElementById('c-menu--slide-right'),
        chatInputWrap: document.getElementById('chatInputWrap'),
        navBtnWrap: document.getElementById('navBtnWrap'),
        playerBottomWrap: document.getElementById('playerBottomWrap'),
        playBtn: document.getElementById('playBtn'),
        volumeBtn: document.getElementById('volumeBtn'),
        volumeSlider: document.getElementById('volumeSlider'),
        fullBtn: document.getElementById('fullBtn'),
        loadingDiv: document.getElementById('loadingDiv'),
        ccSelect: document.getElementById('ccSelect'),
        ccSelectBtn: document.getElementById('ccSelectBtn'),
        qualitySelect: document.getElementById('qualitySelect'),
        qualitySelectBtn: document.getElementById('qualitySelectBtn'),
        qualityPopup: document.getElementById('qualityPopup'),
        subtitlePopup: document.getElementById('subtitlePopup')
    };
    var m = {
        user_id: getCookie(DCvi + '_user_id'),
        device_id: getCookie(DCvi + '_device_id'),
        content_id: DCvi
    };
    userSessionCheck(m, function(o) {
        var p = k.content_data = JSON.parse(JSON.stringify(o.Data.content));
        var q = JSON.parse(JSON.stringify(o.Data.user));
        var r = p.cam_num > 1;
        if (IS_SINGLEVIEW_ON_MULTIVIEW) {
            r = false;
        }
        iCM(!!q.is_mute);
        if (!p.artist_account) {
            $('button[name=artistchatnavbtn]').css('display', ' none');
        } else {
            if (p.artist_account.indexOf(',') !== -1) {
                p.artist_account = p.artist_account.split(',');
            } else p.artist_account = [p.artist_account];
            $('button[name=artistchatnavbtn]').css('display', ' inline-block');
        }
        if (r) {
            k.multiViewList = document.getElementById('multiViewList');
            k.use_multiview = true;
            $('button[name=multiviewnavbtn]').css('display', 'inline-block');
        } else {
            $('button[name=multiviewnavbtn]').css('display', 'none');
        }
        Chat.Manager.setContentData(p);
        if (Chat.Manager.isChatUsed()) {
            if (!q.nickname) {
                alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                    location.href = LUEz1;
                });
                return;
            } else {
                $('#pageWrap').removeClass().addClass('pl-t-default');
                $('#chatWrap').css('display', 'block');
                Chat.Manager.setPubnubAPI(q.nickname);
            }
        } else {
            $('#pageWrap').removeClass().addClass('pl-t-default_nochat');
            $('#chatWrap').css('display', 'none');
        }
        if (p.use_vod) {
            $('#playerBottomWrap').addClass('ver_vod');
            $('.pl-i-live').css('display', ' none');
            l.durationStart = document.getElementById('durationStart');
            l.durationEnd = document.getElementById('durationEnd');
            l.prev10sBtn = document.getElementById('prev10sBtn');
            l.next10sBtn = document.getElementById('next10sBtn');
            l.sliderArea = document.getElementById('playerSliderArea');
            l.sliderArea.slider = document.getElementById('playerSlider');
            l.sliderArea.slider.thumb = document.getElementById('playerSliderThumb');
            l.sliderThumbnail = document.getElementById('sliderThumbnail');
            l.sliderPaddingDiv = document.getElementById('sliderPaddingDiv');
        } else {
            $('#durationWrap').css('display', 'none');
        }
        k.credentials = {
            user_id: q.user_id,
            device_id: getCookie(DCvi + '_device_id'),
            content_id: DCvi,
            api_server: RSAnd
        };
        var s = '';
        for (var t = 0; t < p.channels.length; t++) {
            var u = true;
            if (Ythc == 'sub') {
                u = false;
            }
            if (p.channels[t].is_main_channel == u) {
                s = p.channels[t].hls_url;
                k.content_data.current_channel_id = p.channels[t].id;
                break;
            }
        }
        _player = new Rich360Player(k, l, s);
        $(document).on('click', '#playThumbnail button', function() {
            b();
            $(this).parent().css('display', 'none');
            _player.play();
        });
    }, function(o, p) {
        if (p == 400 || p == 401) {
            removeCookie(DCvi + '_user_id');
            removeCookie(DCvi + '_chat_id');
            alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_NOT_EXIST_LOGIN_INFO_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        } else if (p == 403) {
            removeCookie(DCvi + '_customer_id');
            removeCookie(DCvi + '_ticket_id');
            removeCookie(DCvi + '_user_id');
            removeCookie(DCvi + '_chat_id');
            alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        } else {
            alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_TRY_AGAIN_DESC'), gettext('P_ALERT_OK'), function() {
                location.href = LUEz1;
            });
        }
    });
    $('button[name=chatnavbtn]').on('click', function() {
        $('#chatContentWrap').css('display', 'block');
        $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
        setTimeout(function() {
            $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
        }, 200);
        if (isMobile()) {
            var o = getOrientation();
            if (typeof o == 'string') {
                if (o == 'landscape-primary' || o == 'landscape-secondary' || o == 'landscape') $('#chatInputWrap').css('display', 'block');
                else {
                    $('#chatInputWrap').css('display', 'block');
                }
            } else $('#chatInputWrap').css('display', 'block');
        } else $('#chatInputWrap').css('display', 'block');
        $('#holdChatScrollLabel').css('display', 'block');
        $('#artistChatWrap').css('display', 'none');
        $('#multiViewWrap').css('display', 'none');
        $('button[name=chatnavbtn]').addClass('on');
        $('button[name=artistchatnavbtn]').removeClass('on');
        $('button[name=multiviewnavbtn]').removeClass('on');
        if (_player) {
            if (_player._options.use_multiview) {
                _player._player._display.showMultiPreview = false;
            }
        }
    });
    $('button[name=artistchatnavbtn]').on('click', function() {
        $('#chatContentWrap').css('display', 'none');
        $('#chatInputWrap').css('display', 'none');
        $('#holdChatScrollLabel').css('display', 'none');
        $('#artistChatWrap').css('display', 'block');
        $('#multiViewWrap').css('display', 'none');
        $('button[name=chatnavbtn]').removeClass('on');
        $('button[name=artistchatnavbtn]').addClass('on');
        $('button[name=multiviewnavbtn]').removeClass('on');
        $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
        $('#chatAnchor').css('display', 'none');
        if (_player) {
            if (_player._options.use_multiview) {
                _player._player._display.showMultiPreview = false;
            }
        }
    });
    $('button[name=multiviewnavbtn]').on('click', function() {
        $('#chatContentWrap').css('display', 'none');
        $('#chatInputWrap').css('display', 'none');
        $('#holdChatScrollLabel').css('display', 'none');
        $('#artistChatWrap').css('display', 'none');
        $('#multiViewWrap').css('display', 'block');
        $('button[name=chatnavbtn]').removeClass('on');
        $('button[name=artistchatnavbtn]').removeClass('on');
        $('button[name=multiviewnavbtn]').addClass('on');
        if (_player) {
            if (_player._options.use_multiview) {
                _player._player._display.showMultiPreview = true;
            }
        }
    });
    $(document).on('click', '#multiViewList .view_wrap', function() {
        if (_player) {
            if (_player._options.use_multiview) {
                if (_player._player._video) {
                    if (!_player._player._video.paused) {
                        var o = _player._player.view;
                        _player._player.view = $(this).data().view;
                        $(this).siblings().each(function() {
                            if (o == $(this).data().view) {
                                return;
                            }
                        });
                        $();
                    }
                }
            }
        }
    });
    $('#stopChatScrollBtn').on('change', function() {
        Chat.Ui.setHoldChatScroll(!$(this).prop('checked'));
    });
    $('#lockBtn').on('click', function() {
        if ($(this).hasClass('locked')) {
            $(this).removeClass('locked');
            if (!isMobile() && !isTablet() && !isIpadOS()) {
                $('#volumeBtn').css('display', 'inline-block');
                $('#volumeSlider').css('display', 'inline-block');
            }
            if ((!isIOS() || isIpadOS()) && d(_player)) {
                $('#qualitySelectBtn').css('display', 'block');
            } else {
                $('#qualitySelectBtn').css('display', 'none');
            }
            if (_player._player.subtitleList) {
                if (_player._player.subtitleList.length) {
                    if (_player._player.subtitleList[0].lang !== '') {
                        $('#ccSelectBtn').css('display', 'block');
                    }
                }
            } else {
                $('#ccSelectBtn').css('display', 'none');
            }
            $('#fullBtn').css('display', 'block');
            $('.pl-ctr-wrap').css('visibility', 'visible');
            $('.pl-btm-wrap').css('visibility', 'visible');
        } else {
            $(this).addClass('locked');
            $('#volumeBtn').css('display', 'none');
            $('#volumeSlider').css('display', 'none');
            $('#fullBtn').css('display', 'none');
            $('#ccSelectBtn').css('display', 'none');
            $('#qualitySelectBtn').css('display', 'none');
            $('.pl-ctr-wrap').css('visibility', 'hidden');
            $('.pl-btm-wrap').css('visibility', 'hidden');
        }
    });
    $('#view-type-selector').on('click', '.btn-view-selector', function(o) {
        var p = $(o.target);
        var q = null;
        var r = window.location.href;
        var s = null;
        if (p.hasClass('active')) return;
        q = p.data('view-type');
        if (q === 'singleview') window.location.replace(r + PARAM_SINGLEVIEW_ON_MULTIVIEW);
        else if (q === 'multiview') {
            s = r.split(PARAM_SINGLEVIEW_ON_MULTIVIEW);
            window.location.replace(s[0]);
        }
    });

    function n() {
        if (!document.hidden) {
            c();
        }
    }
    document.addEventListener('visibilitychange', n, false);
});
window.onpopstate = function(a) {
    location.replace(LUEz1);
};
window.onpageshow = function(a) {
    console.log('@@@onpageshow');
    history.pushState({}, '', location.href);
};
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
                    } else try {
                        var k = JSON.parse(f.responseText);
                        e(k, f.status);
                    } catch (p) {
                        e(f.responseText, f.status);
                    }
                }
            }
        } else {}
    };
    f.ontimeout = function(k) {
        console.log(k);
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
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) return true;
        else {
            var b = navigator.userAgent.toLowerCase();
            var c = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(b);
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
        var c = null;
        var d = a;
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
        var c = null;
        var d = a;
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
};
var CHAT_MESSAGE_CONFIG = {
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
        if (a.indexOf(b) > -1) c = true;
        return c;
    },
    setCookieOnDeviceId: function setCookieOnDeviceId(a) {
        var b = this.cookieGroup;
        var c = this.contentIdList;
        var d = DCvi;
        var e = b[d];
        if (c.indexOf(d) < 0) return;
        if (!e) return;
        e.forEach(function(f, g) {
            if (a) setCookie(f + '_device_id', a, 20160);
        });
    },
    setCookiesOnGroup: function setCookiesOnGroup(a, b, c, d, e) {
        var f = a || [];
        var g = Array.isArray(f);
        if (!f || !g || g && f.length == 0) return;
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
                if (b) setCookie(n + '_customer_id', b, 20160);
                if (c) setCookie(n + '_ticket_id', c, 20160);
                if (d && o) setCookie(n + '_user_id', o, 20160);
                if (e) setCookie(n + '_content_id', n, 20160);
            }
        }
    }
};
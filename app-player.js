'use strict';

function _createForOfIteratorHelper(a, b) {
    var c = typeof Symbol !== 'undefined' && a[Symbol.iterator] || a['@@iterator'];
    if (!c) {
        if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && typeof a.length === 'number') {
            if (c) {
                a = c;
            }
            var d = 0;
            var g = function l() {};
            return {
                s: g,
                n: function m() {
                    if (d >= a.length) {
                        return {
                            done: true
                        };
                    }
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
        s: function q() {
            c = c.call(a);
        },
        n: function r() {
            var t = c.next();
            h = t.done;
            return t;
        },
        e: function t(u) {
            j = true;
            k = u;
        },
        f: function u() {
            try {
                if (!h && c.return != null) {
                    c.return();
                }
            } finally {
                if (j) {
                    throw k;
                }
            }
        }
    };
}

function _unsupportedIterableToArray(a, b) {
    if (!a) {
        return;
    }
    if (typeof a === 'string') {
        return _arrayLikeToArray(a, b);
    }
    var c = Object.prototype.toString.call(a).slice(8, -1);
    if (c === 'Object' && a.constructor) {
        c = a.constructor.name;
    }
    if (c === 'Map' || c === 'Set') {
        return Array.from(a);
    }
    if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
        return _arrayLikeToArray(a, b);
    }
}

function _arrayLikeToArray(a, b) {
    if (b == null || b > a.length) {
        b = a.length;
    }
    for (var c = 0, d = new Array(b); c < b; c++) {
        d[c] = a[c];
    }
    return d;
}

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

function _defineProperties(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || false;
        d.configurable = true;
        if ('value' in d) {
            d.writable = true;
        }
        Object.defineProperty(a, d.key, d);
    }
}

function _createClass(a, b, c) {
    if (b) {
        _defineProperties(a.prototype, b);
    }
    if (c) {
        _defineProperties(a, c);
    }
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
        if (c) {
            c($(this).data(), $(this));
        }
    });
}
$.fn.changeElementType = function(b) {
    var c = {};
    $.each(this[0].attributes, function(e, f) {
        c[f.nodeName] = f.nodeValue;
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
    function a(b, c, d) {
        _classCallCheck(this, a);
        this._options = b;
        this._ui = c;
        this._req_str = d;
        this._player = new Rich360(b, d, c, this);
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
    _createClass(a, [{
        key: 'initPlayerUI',
        value: function b() {
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
                    } else {
                        this._ui.volumeBtn.classList.remove('mute');
                    }
                    this._ui.volumeSlider.barDiv.style.backgroundImage = 'linear-gradient(to right, #fff 0%, #fff ' + this._ui.volumeSlider._value + '%, transparent ' + this._ui.volumeSlider._value + '%, transparent 100%)';
                    this.volume(this._ui.volumeSlider._value);
                }.bind(this));
                this._ui.volumeSlider.addEventListener('seek', function(f) {
                    this.volume(f.target._value);
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
                this._ui.seekBar.addEventListener('input', function(f) {
                    this._ui.seekBar.style.backgroundImage = 'linear-gradient(to right, #ea0029 ' + f.target._value + '%, #ea0029 ' + f.target._value + '%, transparent ' + f.target._loadedValue + '%, transparent ' + f.target._loadedValue + '%)';
                    if (this._ui.seekBar.thumbInteracting) {
                        this.viewSeekBarThumbnail(f.target._value, true);
                    }
                }.bind(this));
                this._ui.seekBar.paddingBar.addEventListener('mousemove', function(f) {
                    this.viewSeekBarThumbnail(f.offsetX / this._ui.seekBar.clientWidth * 100);
                }.bind(this));
                this._ui.seekBar.paddingBar.addEventListener('mouseout', function(f) {
                    $(this._ui.sliderThumbnail).css('display', 'none');
                }.bind(this));
                this._ui.seekBar.addEventListener('seek', function(f) {
                    this.seek(f.target._value);
                    $(this._ui.sliderThumbnail).css('display', 'none');
                }.bind(this));
                $(this._ui.prev10sBtn).on('click', function() {
                    if (this._player.currentPosition) {
                        var f = this._player.currentPosition - 10;
                        if (f < 0) {
                            f = 0;
                        }
                        this._player.currentPosition = f;
                    }
                }.bind(this));
                $(this._ui.next10sBtn).on('click', function() {
                    if (this._player.currentPosition) {
                        var f = this._player.currentPosition + 10;
                        if (f > this._player.duration - 1) {
                            f = this._player.duration - 1;
                        }
                        this._player.currentPosition = f;
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
            } else {
                this._ui.fullScreen = new FullscreenButton(this, this._ui.fullBtn);
            }
            if (isMobile()) {
                var c = getOrientation();
                if (typeof c == 'string') {
                    if (c == 'landscape-primary' || c == 'landscape-secondary' || c == 'landscape') {
                        this.hideChatWrap();
                    } else if (c == 'portrait-primary' || c == 'portrait-secondary' || c == 'portrait') {
                        this.showChatWrap();
                    }
                }
                $(window).on('orientationchange', function() {
                    var i = getOrientation();
                    if (typeof i == 'string') {
                        if (i == 'landscape-primary' || i == 'landscape-secondary' || i == 'landscape') {
                            this.hideChatWrap();
                        } else if (i == 'portrait-primary' || i == 'portrait-secondary' || i == 'portrait') {
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
        value: function c(d) {
            var e = document.createElement('div');
            e.className = 'fc_default cusDD_opt';
            e.id = d.id;
            e.dataset.id = d.id;
            e.dataset.height = d.height;
            var f = '';
            if (e.dataset.height == 'auto') {
                f = 'AUTO';
            } else {
                f = e.dataset.height + 'P';
            }
            e.innerHTML = f;
            return e;
        }
    }, {
        key: 'createQualityBtn',
        value: function d(e) {
            var f = document.createElement('button');
            f.className = 'text-btn fc_default bold';
            f.id = e.id;
            f.dataset.id = e.id;
            f.dataset.height = e.height;
            var g = '';
            if (f.dataset.height == 'auto') {
                g = 'AUTO';
            } else {
                g = f.dataset.height + 'P';
            }
            f.innerHTML = g;
            return f;
        }
    }, {
        key: 'createSubtitleDiv',
        value: function e(f) {
            var g = document.createElement('div');
            g.className = 'fc_default cusDD_opt';
            g.id = f.id;
            g.dataset.id = f.id;
            g.dataset.label = f.label;
            g.dataset.lang = f.lang;
            g.innerHTML = f.label;
            return g;
        }
    }, {
        key: 'createSubtitleBtn',
        value: function f(g) {
            var h = document.createElement('button');
            h.className = 'text-btn fc_default bold';
            h.id = g.id;
            h.dataset.id = g.id;
            h.dataset.label = g.label;
            h.dataset.lang = g.lang;
            h.innerHTML = g.label;
            return h;
        }
    }, {
        key: 'initQuality',
        value: function g() {
            if (this._initQualityUI) {
                return;
            }
            this._ui.qualityItems = [];
            this._ui.qualityPopupItems = [];
            if (!this._player.qualityList) {
                this._ui.qualitySelect.style.display = 'none';
                this._ui.qualitySelectBtn.style.display = 'none';
                return;
            }
            this._ui.qualitySelect.style.display = 'block';
            this._ui.qualitySelectBtn.style.display = 'block';
            var h = this.createQualityDiv({
                id: 'auto',
                height: 'auto'
            });
            var j = this.createQualityBtn({
                id: 'auto',
                height: 'auto'
            });
            var k = document.createElement('div');
            k.className = 'cusDD_options';
            k.appendChild(h);
            j.className += ' on';
            $(this._ui.qualityPopup).find('.ta_c').append(j);
            this._ui.qualityItems.push(h);
            this._ui.qualityPopupItems.push(j);
            if (this._player.qualityList) {
                for (var l = 0; l < this._player.qualityList.length; l++) {
                    if (!this._player.qualityList[l].height) {
                        continue;
                    }
                    var m = this.createQualityDiv({
                        id: l,
                        height: this._player.qualityList[l].height
                    });
                    var n = this.createQualityBtn({
                        id: l,
                        height: this._player.qualityList[l].height
                    });
                    if ('NAME' in this._player.qualityList[l].attrs) {
                        m = this.createQualityDiv({
                            id: l,
                            height: this._player.qualityList[l].attrs.NAME
                        });
                        n = this.createQualityBtn({
                            id: l,
                            height: this._player.qualityList[l].attrs.NAME
                        });
                    }
                    if (this._player.quality) {
                        if (this._player.quality == l) {
                            addClassName(m, 'on');
                        }
                    }
                    k.appendChild(m);
                    $(this._ui.qualityPopup).find('.ta_c').append(n);
                    this._ui.qualityItems.push(m);
                    this._ui.qualityPopupItems.push(n);
                }
                for (var o = 0; o < this._ui.qualityPopupItems.length; o++) {
                    this._ui.qualityPopupItems[o].addEventListener('click', function(q) {
                        var r = null;
                        if (q.target.id == 'auto') {
                            r = -1;
                        } else {
                            r = parseInt(q.target.id);
                        }
                        for (var s = 0; s < this._ui.qualityPopupItems.length; s++) {
                            removeClassName(this._ui.qualityPopupItems[s], 'on');
                        }
                        q.target.classList.add('on');
                        this._ui.qualityPopup.style.display = 'none';
                        if (this._player.quality == r) {
                            return;
                        }
                        this._player.quality = r;
                        if (q.target.id == 'auto') {
                            for (var t = 0; t < this._ui.qualityPopupItems.length; t++) {
                                if (this._ui.qualityPopupItems[t].id == this._player._hls.nextAutoLevel) {
                                    addClassName(this._ui.qualityPopupItems[t], 'on');
                                    break;
                                }
                            }
                        }
                    }.bind(this));
                }
            }
            this._ui.qualitySelect.appendChild(k);
            var p = '#' + this._ui.qualitySelect.getAttribute('id');
            cusDD(p, null, function(r) {
                var s = null;
                $(p).find('.cusDD_opt').each(function() {
                    if ($(this).data().id != r.id) {
                        if (!$(this).attr('selected') || r.id != 'auto') {
                            $(this).removeAttr('selected');
                            $(this).removeClass('on');
                        }
                    } else {
                        $(this).attr('selected', 'selected');
                        $(this).addClass('on');
                    }
                });
                if (r.id == 'auto') {
                    s = -1;
                } else {
                    s = parseInt(r.id);
                }
                this._player.quality = s;
            }.bind(this));
            cusDDselectOption(p, 'auto', true);
            this._ui.qualitySelect = document.getElementById(this._ui.qualitySelect.getAttribute('id'));
            $(this._ui.qualitySelectBtn).on('click', function(r) {
                $(this._ui.qualitySelect).click();
                r.stopPropagation();
            }.bind(this));
            this._initQualityUI = true;
        }
    }, {
        key: 'initSubtitle',
        value: function h() {
            if (this._initSubtitleUI) {
                return;
                var j = this._ui.ccSelect.getAttribute('id');
                $(this._ui.ccSelect).find('.cusDD_opt').each(function() {
                    if ($(this).attr('selected') == 'selected') {
                        cusDDselectOption('#' + j, $(this).data().id, true);
                    }
                });
                return;
            }
            this._ui.subtitlePopupItems = [];
            if (!this._player.subtitleList) {
                this._ui.ccSelect.style.display = 'none';
                this._ui.ccSelectBtn.style.display = 'none';
                return;
            } else if (!this._player.subtitleList.length) {
                this._ui.ccSelect.style.display = 'none';
                this._ui.ccSelectBtn.style.display = 'none';
                return;
            } else if (!this._player.subtitleList[0].lang) {
                return;
            }
            var k = this.createSubtitleDiv({
                id: '-1',
                label: 'OFF',
                lang: 'OFF'
            });
            var l = this.createSubtitleBtn({
                id: '-1',
                label: 'OFF',
                lang: 'OFF'
            });
            var m = document.createElement('div');
            addClassName(k, 'on');
            addClassName(l, 'on');
            m.className = 'cusDD_options';
            m.appendChild(k);
            this._ui.subtitlePopupItems.push(l);
            $(this._ui.subtitlePopup).find('.ta_c').append(l);
            if (this._player.subtitleList) {
                for (var n = 0; n < this._player.subtitleList.length; n++) {
                    var o = this.createSubtitleDiv(this._player.subtitleList[n]);
                    var p = this.createSubtitleBtn(this._player.subtitleList[n]);
                    m.appendChild(o);
                    this._ui.subtitlePopupItems.push(p);
                    $(this._ui.subtitlePopup).find('.ta_c').append(p);
                }
                if (this._player.subtitleList.length) {
                    $(this._ui.ccSelectBtn).css('display', 'block');
                    $(this._ui.ccSelect).css('display', 'block');
                }
            }
            this._ui.ccSelect.appendChild(m);
            $(this._ui.ccSelectBtn).on('click', function(v) {
                $(this._ui.ccSelect).click();
                v.stopPropagation();
            }.bind(this));
            var j = '#' + this._ui.ccSelect.getAttribute('id');
            cusDD(j, null, function(v) {
                console.log('selected ccSelect option : ', v);
                $(j).find('.cusDD_opt').each(function(w) {
                    if ($(this).data().id != v.id) {
                        $(this).removeAttr('selected');
                        $(this).removeClass('on');
                    } else {
                        $(this).attr('selected', 'selected');
                        $(this).addClass('on');
                    }
                });
                this._player.setSubtitleTrack(parseInt(v.id));
            }.bind(this));
            cusDDselectOption(j, -1, true);
            this._ui.ccSelect = document.getElementById(this._ui.ccSelect.getAttribute('id'));
            for (var q = 0; q < this._ui.subtitlePopupItems.length; q++) {
                this._ui.subtitlePopupItems[q].addEventListener('click', function(v) {
                    $(this._ui.subtitlePopup).find('.ta_c > button').each(function() {
                        if ($(this).data().id != $(v.target).data().id) {
                            $(this).removeAttr('selected');
                            $(this).removeClass('on');
                        } else {
                            $(this).attr('selected', 'selected');
                            $(this).addClass('on');
                        }
                    });
                    this._ui.subtitlePopup.style.display = 'none';
                    this._player.setSubtitleTrack(parseInt($(v.target).data().id));
                }.bind(this));
            }
            this._player.setSubtitleTrack(-1);
            this._initSubtitleUI = true;
        }
    }, {
        key: 'initLoadingState',
        value: function i() {
            this._loading_on = [];
            for (var j = 0; j < RICH360_WAIT_ON.SIZE; j++) {
                this._loading_on[j] = false;
            }
        }
    }, {
        key: 'initEventListener',
        value: function j() {
            this._player.addListener(RICH360_EVENTS.RICH360_STATE_CHANGE, function(k) {
                if (k === RICH360_STATE.RICH360_INIT) {
                    this.initPlayerUI();
                } else if (k === RICH360_STATE.RICH360_READY) {
                    this.initHideCtrllerEvent();
                    this._ui.volumeSlider.value = this._player.volume * 100;
                    this.initQuality();
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_QUALITY_CHANGE, function(k) {
                for (var l = 0; l < this._ui.qualityItems.length; l++) {
                    if (this._ui.qualityItems[l].id == k) {
                        addClassName(this._ui.qualityItems[l], 'on');
                        $(this._ui.qualityItems[l]).attr('selected', 'selected');
                    } else if (this._ui.qualityItems[l].id != 'auto' || !this._player.isAutoQuality) {
                        removeClassName(this._ui.qualityItems[l], 'on');
                        $(this._ui.qualityItems[l]).removeAttr('selected');
                    }
                }
                for (var m = 0; m < this._ui.qualityPopupItems.length; m++) {
                    if (this._ui.qualityPopupItems[m].id == k) {
                        addClassName(this._ui.qualityPopupItems[m], 'on');
                    } else if (this._ui.qualityPopupItems[m].id != 'auto' || !this._player.isAutoQuality) {
                        removeClassName(this._ui.qualityPopupItems[m], 'on');
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
            this._player.addListener(RICH360_EVENTS.RICH360_WAIT, function(k) {
                this.loading(k.wait, k.wait_on);
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_DURATION_CHANGE, function() {
                if (this._options.content_data.use_vod && this._ui.seekBar) {
                    if (!this._ui.seekBar.thumbInteracting) {
                        this.setDurationText(this._player.currentPosition, this._player.duration);
                        if (this._player.currentPosition == 0) {
                            this._ui.seekBar.value = 0;
                        } else {
                            this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration;
                        }
                    }
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_PLAY_PAUSE_CHANGE, function(k) {
                if (k) {
                    $(this._ui.playBtn).removeClass('pl-i-play').addClass('pl-i-pause');
                    this._ui.playThumbnail.style.display = 'none';
                } else {
                    $(this._ui.playBtn).removeClass('pl-i-pause').addClass('pl-i-play');
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_ERROR, function(k) {
                if (k == 'Authorization failed') {
                    Chat.Manager.destroy();
                    if (this._player && this._player._hls) {
                        this._player._hls.destroy();
                    }
                    removeCookie(DCvi + '_user_id');
                    removeCookie(DCvi + '_chat_id');
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_AUTH_FAIL_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                }
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_ACCESS_DENIED, function(k) {
                var l = POPUP_CONFIG;
                var m = null;
                Chat.Manager.destroy();
                if (this._player && this._player._hls) {
                    this._player._hls.destroy();
                }
                removeCookie(DCvi + '_user_id');
                removeCookie(DCvi + '_chat_id');
                if (isIOS()) {
                    setTimeout(function() {
                        location.href = LUEz1;
                    }, 3000);
                }
                if (k == 'Permission Denied') {
                    m = l.permissionDenied(egl, function() {
                        location.href = LUEz1;
                    });
                    alertPopup(m.title, m.desc, m.btnTxt, m.okCallback);
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
            this._player.addListener(RICH360_EVENTS.RICH360_SOURCE_CHANGE, function(k) {
                this.changeSource(k);
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_SUBTITLE_FOUND, function() {
                this.initSubtitle();
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_THUMBNAIL_UPDATE, function(k) {
                this.updateThumbnail(k);
            }.bind(this));
            this._player.addListener(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, function(k) {
                this.initSeekBarThumbnailData(k);
            }.bind(this));
        }
    }, {
        key: 'loading',
        value: function k(l, m) {
            this._loading_on[m] = l;
            var n = false;
            for (var o = 0; o < RICH360_WAIT_ON.SIZE; o++) {
                if (this._loading_on[o]) {
                    n = true;
                    break;
                }
            }
            if (n) {
                $(this._ui.loadingDiv).css('display', 'block');
                $(this._ui.loadingDiv).parent().css('display', 'block');
            } else {
                $(this._ui.loadingDiv).css('display', 'none');
                $(this._ui.loadingDiv).parent().css('display', 'none');
            }
        }
    }, {
        key: 'setDurationText',
        value: function l(m, n) {
            this._ui.durationStart.innerHTML = numberPad(Math.floor(m / 3600), 2) + ':' + numberPad(Math.floor(m / 60) % 60, 2) + ':' + numberPad(Math.floor(m % 60), 2);
            n -= m;
            this._ui.durationEnd.innerHTML = '-' + numberPad(Math.floor(n / 3600), 2) + ':' + numberPad(Math.floor(n / 60) % 60, 2) + ':' + numberPad(Math.floor(n % 60), 2);
        }
    }, {
        key: 'initHideCtrllerEvent',
        value: function m() {
            if (this._initHideCtroller) {
                return;
            }
            this._ui.playerBottomWrap.style.display = 'block';
            if (!$(this._ui.chatContents).hasClass('is-active')) {
                this.showChatOpenBtn(true);
            }
            if (isMobile() || isTablet() || isIpadOS()) {
                this._options.container.addEventListener('touchend', n.bind(this), false);
            } else {
                this._options.container.addEventListener('mousemove', this.wakeupController.bind(this), false);
                this._options.container.addEventListener('mouseup', n.bind(this), false);
            }

            function n(o) {
                this._wakeupPastTime = 0;
                if (!this._player._video.paused && (o.target.tagName === 'CANVAS' || o.target.tagName === 'VIDEO' || o.target === this._ui.playerBottomWrap || o.target.id == 'loadingWrap' || o.target.id == 'subtitleDiv' || o.target.parentElement.id == 'subtitleDiv')) {
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
        value: function n(o) {
            var p = o;
            if (typeof p === 'undefined') {
                p = true;
            }
            clearTimeout(this._timer.hidePlayerController.timer);
            this._timer.hidePlayerController.timer = null;
            if (p) {
                this._timer.hidePlayerController.timer = setTimeout(this.hidePlayerController.bind(this), this._timer.hidePlayerController.period);
            }
        }
    }, {
        key: 'hidePlayerController',
        value: function o() {
            var p = this._ui.volumeSlider.thumbInteracting || !this._player._ui_play;
            if (this._options.content_data.use_vod && this._ui.seekBar) {
                p = p || this._ui.seekBar.thumbInteracting;
            }
            if (p) {
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
        value: function p(q) {
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
        value: function q() {
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
        value: function r() {
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
                var s = getOrientation();
                if (typeof s == 'string') {
                    if (s == 'landscape-primary' || s == 'landscape-secondary' || s == 'landscape') {
                        $(this._ui.chatInputWrap).css('display', 'none');
                    } else if ($(this._ui.navBtnWrap).find('button[name=chatnavbtn]').hasClass('on')) {
                        $(this._ui.chatInputWrap).css('top', '');
                        $(this._ui.chatInputWrap).css('position', 'relative');
                        $(this._ui.chatInputWrap).css('display', 'block');
                    } else {
                        $(this._ui.chatInputWrap).css('display', 'none');
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
            } else if (this._player._display) {
                this._player._display.showMultiPreview = false;
            }
        }
    }, {
        key: 'play',
        value: function s() {
            if (!this._initHideCtroller) {
                this.initHideCtrllerEvent();
            }
            if (this._player._hls._isDummy) {
                if (!this._player._video.bfTime) {
                    if (this._options.use_multiview) {
                        this._player._video.src = this._player._sourceBase + this._player._manifest.multiview_list[this._player._view].path;
                    } else {
                        this._player._video.src = this._player._sourceBase + this._player._manifest.singleview_list[0].path;
                    }
                }
            } else if (this._player._hls._hls) {
                if (this._player._hls._hls.liveSyncPosition) {
                    this._player.currentPosition = this._player._hls._hls.liveSyncPosition;
                }
            }
            this._player.play();
        }
    }, {
        key: 'pause',
        value: function t() {
            this._player._subtitleManager._prevSubtitleTrack = this._player.getSubtitleTrack();
            if (this._player._hls._isDummy) {
                if (this._options.content_data.use_vod) {
                    this._player._video.bfTime = this._player._video.currentTime;
                } else {
                    this._player._video.src = '';
                }
            }
            this._player.pause();
        }
    }, {
        key: 'seek',
        value: function u(v) {
            this._player.currentPosition = this._player.duration * v / 100;
        }
    }, {
        key: 'volume',
        value: function v(w) {
            this._player.volume = parseFloat(w / 100);
        }
    }, {
        key: 'changeSource',
        value: function w(x) {
            if (x) {
                this.pause();
                this._player.changeSource(x);
            }
        }
    }, {
        key: 'updateThumbnail',
        value: function x(y) {
            var z = new Date();
            y = y + '?' + z.getTime();
            $(this._ui.playThumbnail).css('background-image', '');
            $(this._ui.playThumbnail).css('background-image', 'url(' + y + ')');
            $(this._ui.playThumbnail).css('display', 'block');
        }
    }, {
        key: 'initSeekBarThumbnailData',
        value: function y(z) {
            this._thumbnailGridData = JSON.parse(JSON.stringify(z));
            var A = this._req_str.lastIndexOf('/output');
            var B = new Date();
            $(this._ui.sliderThumbnail).css('background-image', 'url(' + this._req_str.substr(0, A) + '/' + this._thumbnailGridData.path + '?' + B.getTime() + ')');
        }
    }, {
        key: 'viewSeekBarThumbnail',
        value: function z(A, B) {
            if (!this._thumbnailGridData) {
                $(this._ui.sliderThumbnail).css('display', 'none');
                return false;
            }
            if (A > 100) {
                A = 100;
            } else if (A < 0) {
                A = 0;
            }
            var C = A / 100;
            var D = this._thumbnailGridData.grid_x * this._thumbnailGridData.grid_y;
            var E = Math.ceil(D * C) - 1;
            if (E < 0) {
                E = 0;
            }
            var F = E % 10;
            var G = parseInt(E / 10);
            var H = 160;
            var I = 90;
            var J = $(this._ui.sliderArea.slider.thumb).width();
            var K = F * H * -1;
            var L = G * I * -1;
            if (B) {
                $(this._ui.sliderArea.slider.thumb).append($(this._ui.sliderThumbnail));
                this.setDurationText(this._thumbnailGridData.duration * C, this._thumbnailGridData.duration);
                $(this._ui.sliderThumbnail).css('top', '');
                $(this._ui.sliderThumbnail).css('left', '');
            } else {
                $(this._ui.sliderArea).append($(this._ui.sliderThumbnail));
                $(this._ui.sliderThumbnail).css('top', '-16px');
                $(this._ui.sliderThumbnail).css('left', 'calc(' + A + '% + ' + J / 2 + 'px - ' + (H + J) * C + 'px)');
            }
            $(this._ui.sliderThumbnail).css('background-position-x', K + 'px');
            $(this._ui.sliderThumbnail).css('background-position-y', L + 'px');
            $(this._ui.sliderThumbnail).css('display', 'block');
            return true;
        }
    }, {
        key: 'showChatOpenBtn',
        value: function A(B) {
            var C = B;
            if (isIpadOS()) {
                C = false;
            }
            $(this._ui.chatOpenBtn).css('display', C ? 'block' : 'none');
        }
    }]);
    return a;
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
    if (b) {
        d._value = b;
    } else {
        d._value = 0;
    }
    d._loadedValue = 0;
    d.inputEvent = new Event('input');
    d.seekEvent = new Event('seek');
    Object.defineProperty(d, 'value', {
        get: function i() {
            return this._value;
        },
        set: function j(k) {
            if (k > 100) {
                k = 100;
            } else if (k < 0) {
                k = 0;
            }
            this.thumbDiv.style.left = k + '%';
            this._value = k;
            this.dispatchEvent(this.inputEvent);
        }
    });
    var e = function k(l) {
        this.thumbInteracting = true;
        this.interactStartX = l.clientX || l.touches && l.touches[0].clientX;
        this.interactStartOffset = this.barDiv.offsetWidth * this.value / 100;
    };
    var f = function l(m) {
        if (this.thumbInteracting) {
            var n = (m.clientX || m.touches && m.touches[0].clientX) - this.interactStartX;
            var o = this.interactStartOffset + n;
            if (o < 0) {
                o = 0;
            }
            if (o > this.barDiv.offsetWidth) {
                o = this.barDiv.offsetWidth;
            }
            this.value = o * 100 / this.barDiv.offsetWidth;
        }
    };
    var g = function m() {
        if (this.thumbInteracting) {
            this.thumbInteracting = false;
            this.dispatchEvent(this.seekEvent);
        }
    };
    var h = function n(o) {
        if (o.target != this.thumbDiv) {
            this.thumbInteracting = true;
            var p = o.offsetX;
            if (!p) {
                var q = o.target.getBoundingClientRect();
                p = o.targetTouches[0].pageX - q.left;
            }
            this.value = p * 100 / this.barDiv.offsetWidth;
            this.interactStartX = o.clientX || o.touches && o.touches[0].clientX;
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
            if (!e) {
                return;
            }
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
                        if ('requestFullscreen' in f) {
                            f.requestFullscreen();
                        } else if ('webkitRequestFullscreen' in f) {
                            f.webkitRequestFullscreen();
                        } else if ('mozRequestFullScreen' in f) {
                            f.mozRequestFullScreen();
                        } else if ('msRequestFullscreen' in f) {
                            f.msRequestFullscreen();
                        }
                        this._is_fullscreen_button = false;
                    } else {
                        console.log('fullscreen not enabled');
                    }
                } else {
                    console.log('fullscreen not supported');
                }
            } else {
                var g = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                if (g && g == document.querySelector('html')) {
                    this._is_fullscreen_button = true;
                    if ('exitFullscreen' in document) {
                        document.exitFullscreen();
                    } else if ('webkitExitFullscreen' in document) {
                        document.webkitExitFullscreen();
                    } else if ('mozCancelFullScreen' in document) {
                        document.mozCancelFullScreen();
                    } else if ('msExitFullscreen' in document) {
                        document.msExitFullscreen();
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
            if (this._logData.length >= this._logMaxLength) {
                this._logData.splice(0, 1);
            }
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
            n.onload = function(q) {
                if (n.readyState === 4 && n.status === 200) {
                    try {
                        var r = JSON.parse(n.responseText).Data;
                        for (var s = 0; s < r.content.channels.length; s++) {
                            var t = true;
                            if (Ythc == 'sub') {
                                t = false;
                            }
                            if (r.content.channels[s].is_main_channel == t) {
                                if (this._options.content_data.current_channel_id != r.content.channels[s].id) {
                                    this._options.content_data = JSON.parse(JSON.stringify(r.content));
                                    this._options.content_data.current_channel_id = r.content.channels[s].id;
                                    this._listener.trigger(RICH360_EVENTS.RICH360_SOURCE_CHANGE, this._options.content_data.channels[s].hls_url);
                                }
                                break;
                            }
                        }
                        iCM(!!r.user.is_mute);
                    } catch (v) {
                        console.log(v);
                    }
                }
            }.bind(this);
            n.onloadend = function(q) {
                if (n.status === 400 || n.status === 401) {
                    this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                } else if (n.status === 403) {
                    this._listener.trigger(RICH360_EVENTS.RICH360_LIVE_ENDED, 'Live ended');
                }
            }.bind(this);
        }
    }]);
    return a;
}();
var Rich360EventListener = function() {
    var c = function() {
        var f = true;
        return function(g, h) {
            var i = f ? function() {
                if (h) {
                    var j = h.apply(g, arguments);
                    h = null;
                    return j;
                }
            } : function() {};
            f = false;
            return i;
        };
    }();
    var d = c(this, function() {
        var f;
        try {
            var g = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
            f = g();
        } catch (o) {
            f = window;
        }
        var h = f.console = f.console || {};
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

    function e(f) {
        _classCallCheck(this, e);
        this.events = [];
        for (var g in f) {
            this.events.push({
                key: f[g],
                listeners: []
            });
        }
    }
    _createClass(e, [{
        key: 'addListener',
        value: function f(g, h) {
            this.events[g].listeners.push(h);
        }
    }, {
        key: 'removeListener',
        value: function g(h, i) {
            var j;
            for (j = 0; j < this.events[h].listeners.length; j++) {
                if (this.events[h].listeners[j] == i) {
                    break;
                }
            }
            if (j >= this.events[h].listeners.length) {
                return;
            }
            this.events[h].listeners.splice(j, 1);
        }
    }, {
        key: 'trigger',
        value: function h(j, k) {
            var l = this;
            var m = function o(p) {
                setTimeout(function() {
                    this.events[j].listeners[p](k);
                }.bind(l), 0);
            };
            for (var n = 0; n < this.events[j].listeners.length; n++) {
                m(n);
            }
        }
    }]);
    return e;
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
            if (!e) {
                return h;
            }
            if (d) {
                if (!f && e.canPlayType('application/vnd.apple.mpegurl')) {
                    h = true;
                } else if (g) {
                    h = false;
                }
            } else {
                h = !g;
            }
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
            } else if (isIOS() || isIpadOS()) {
                this._isDummy = true;
                this._hls = null;
            } else if (Hls.isSupported()) {
                this._isDummy = false;
                this._hls = new Hls(this._config);
            } else {
                this._isDummy = true;
                this._hls = null;
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
            if (!this._isDummy) {
                this._hls.attachMedia(d);
            }
        }
    }, {
        key: 'detachMedia',
        value: function d() {
            this._video = null;
            if (!this._isDummy) {
                this._hls.detachMedia();
            }
        }
    }, {
        key: 'loadSource',
        value: function e(f, g, h) {
            if (this._isDummy) {
                this._video.src = f;
                if (h) {
                    this._video.poster = h;
                }
                this._video.crossOrigin = 'anonymous';
                this._video.disablePictureInPicture = true;
                this._video.oncontextmenu = function() {
                    return false;
                };
                if (this._video.paused) {
                    this._video.load();
                }
            } else {
                this._hls.loadSource(f);
            }
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
            } else {
                return this._hls.levelController.manualLevel == -1;
            }
        }
    }, {
        key: 'levels',
        get: function l() {
            if (this._isDummy) {
                return false;
            } else {
                return this._hls.levels;
            }
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
            if (this._isDummy) {
                return 0;
            } else {
                return this._hls.currentLevel;
            }
        },
        set: function o(p) {
            if (!this._isDummy) {
                this._hls.currentLevel = p;
            }
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
        } else {
            this._options.credentials = {
                device_id: null,
                user_id: null,
                content_id: null,
                ticket_id: null
            };
        }
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
                    this.addRich360 = function(n, o) {
                        var p = o % 7;
                        var q = this.baseCode.slice(p, 7).concat(this.baseCode.slice(0, p + 1));
                        for (h = 0; h < 8; h++) {
                            n[h] = (n[h] + q[h]) % 256;
                        }
                        return n;
                    }.bind(this);
                    this.encrypt = function(n, o) {
                        if (n.length != 16) {
                            return 'string length must be 16';
                        }
                        var p = [];
                        var q;
                        for (q = 0; q < 16; q++) {
                            p[q] = n.charCodeAt(q);
                        }
                        var r = p.slice(0, 8);
                        var s = p.slice(8, 16);
                        for (q = 0; q < o; q++) {
                            s = this.addRich360(s, q);
                            var t = r.slice(0, 8);
                            for (l = 0; l < 8; l++) {
                                r[l] = r[l] ^ s[l];
                            }
                            s = t.slice(0, 8);
                        }
                        var u = [];
                        for (q = 0; q < 8; q++) {
                            u[q] = String.fromCharCode(r[q]);
                        }
                        for (q = 0; q < 8; q++) {
                            u[q + 8] = String.fromCharCode(s[q]);
                        }
                        return u;
                    }.bind(this);
                    this.validate_response = function(n, o) {
                        var p = this.encrypt(n.ltstr, 16);
                        var q = '';
                        for (var r = 0; r < 16; r++) {
                            q += p[r];
                        }
                        if (q == o.rtstr) {
                            return true;
                        } else {
                            return false;
                        }
                    }.bind(this);
                    if (!this.validate_response(c.req_data, JSON.parse(c.responseText))) {
                        if (c.status == 403) {
                            this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Permission Denied');
                        } else if (c.status != 200) {
                            this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                            return;
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
            } else {
                this._video.autoplay = false;
            }
            f.fragLoadingRetryDelay = 100;
            f.startFragPrefetch = true;
            f.renderTextTracksNatively = false;
            f.xhrSetup = function(n, o) {
                if (o.indexOf('.m3u8') === -1 && o.indexOf('.ts') === -1 && o.indexOf('.vtt') === -1 && o.indexOf('.webvtt') === -1 && o.indexOf('.key') === -1 && o.indexOf('.kmv') === -1) {
                    n.withCredentials = true;
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
                        if (h) {
                            h();
                        }
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
                if (h) {
                    h();
                }
            }
        }
    }, {
        key: 'view',
        get: function h() {
            return this._view;
        },
        set: function i(j) {
            if (this._changingView) {
                return;
            }
            if (j < 0) {
                j = 0;
            }
            if (j >= this._manifest.multiview_count) {
                j = this._manifest.multiview_count - 1;
            }
            if (this._view == j) {
                return;
            }
            this._subtitleManager._prevSubtitleTrack = this.getSubtitleTrack();
            if (this._hls._isDummy) {
                this._view = j;
                var k = this._video.currentTime;
                this._hls.detachMedia();
                this._hls.destroy();
                var l = Hls.DefaultConfig;
                if (this._video.paused) {
                    l.autoplay = false;
                } else {
                    l.autoplay = true;
                }
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
                r.on(Hls.Events.FRAG_PARSED, function(w, x) {
                    var y = x.frag;
                    r.timeDictionary[y.sn + ''] = y.startPTS;
                    r.snsInDictionary.push(y.sn);
                    while (r.snsInDictionary.length > 100) {
                        var z = 0;
                        if (r.snsInDictionary[z] == 0) {
                            z = 1;
                        }
                        var A = r.snsInDictionary[z];
                        r.snsInDictionary.splice(z, 1);
                        delete r.timeDictionary[A + ''];
                    }
                    if (r.firstFrag) {
                        r.firstFrag = false;
                        r.startSN = y.sn;
                        r.startPTS = y.startPTS;
                        r.readyForChange = true;
                        if (s.readyForChange) {
                            t();
                        }
                    }
                }.bind(this));
                var t = function() {
                    var w = this._video;
                    var x = this._hls;
                    var y = 0;
                    if (x.timeDictionary[r.startSN + ''] != undefined) {
                        y = x.timeDictionary[r.startSN + ''] - r.startPTS;
                    } else {
                        var z = -1;
                        var A = -1;
                        for (var B in x.timeDictionary) {
                            var C = Number.parseInt(B + '');
                            if (A == -1 || C > A) {
                                A = C;
                            }
                            if (z == -1 || C < z) {
                                z = C;
                            }
                        }
                        var D = (x.timeDictionary[A + ''] - x.timeDictionary[z + '']) / (A - z);
                        var E = x.timeDictionary[A + ''] + D * (r.startSN - A);
                        y = E - r.startPTS;
                        console.error('startSN : ' + r.startSN + ' not defined in oldHLS');
                        console.error(x.timeDictionary);
                        console.error('estPTS : ' + E + ' timePerSN : ' + D + ' smallestSN : ' + z + ' biggestSN : ' + A + ' newStartSN : ' + r.startSN + ' newStartPTS : ' + r.startPTS);
                    }
                    var F = function(K) {
                        s.pause();
                        var L = (s.currentTime - (w.currentTime - y)) * 1000;
                        console.log('@@oldHLS.timeDictionary : ', x.timeDictionary);
                        console.log('@@timeDiff : ', y);
                        console.log('@@newVideo.currentTime : ', s.currentTime);
                        console.log('@@oldVideo.currentTime : ', w.currentTime);
                        console.log('@@@ waitTime : ', L);
                        setTimeout(function() {
                            s.volume = w.volume;
                            if (!this._options.content_data.use_vod) {
                                this._subtitleManager._prevViewOffsetTime = w.currentTime - s.currentTime;
                            }
                            if (!w.paused) {
                                s.play();
                            }
                            w.pause();
                            r._hls.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
                            x.detachMedia();
                            x.destroy();
                            w = null;
                            x = null;
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
                        }.bind(this), L >= 0 ? L : 0);
                    }.bind(this);
                    s.addEventListener('seeked', F, {
                        once: true
                    });
                    s.volume = 0;
                    var G = function K() {
                        console.log('seekIfPossible');
                        var L = s.buffered;
                        var M = w.currentTime + 0.5 - y;
                        console.log('targetTime : ' + M + ' = ' + w.currentTime + ' + 0.5 - ' + y);
                        var N = 0;
                        for (; N < L.length; N++) {
                            console.log('start(' + N + ') : ' + L.start(N));
                            console.log('end(' + N + ') : ' + L.end(N));
                            if (L.start(N) <= M && M + 1 <= L.end(N)) {
                                s.currentTime = M;
                                break;
                            }
                        }
                        if (N != L.length) {
                            console.log('clearInterval');
                            clearInterval(H);
                            clearTimeout(I);
                        }
                    };
                    var H = setInterval(G, 100);
                    var I = setTimeout(function() {
                        console.warn('5 second limit');
                        var L = s.buffered;
                        var M = w.currentTime + 0.5 - y;
                        var N = 0;
                        var O = 0;
                        var P = 0;
                        for (P = 0; P < L.length; P++) {
                            if (L.start(P) > M) {
                                N = L.start(P);
                            }
                            if (L.end(P) > O) {
                                O = L.end(P);
                            }
                        }
                        if (N) {
                            s.currentTime = N + 0.5;
                        } else {
                            s.currentTime = O - 1;
                        }
                        console.log('clearInterval');
                        clearInterval(H);
                    }, 5000);
                }.bind(this);
                s.addEventListener('canplaythrough', function(w) {
                    s.readyForChange = true;
                    if (r.readyForChange) {
                        t();
                    }
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
            var r = mvMainDiv.width();
            var s = mvMainDiv.height();
            var t = mvMainDiv__video.width();
            var u = mvMainDiv__video.height();
            n.width = t;
            n.height = u;
            var v = mvMainDiv__video[0];
            var w = v.videoWidth;
            var z = v.videoHeight;
            var A = l.width;
            var B = l.height;
            var C = l.x;
            var D = l.y;
            o.drawImage(mvMainDiv__video[0], Math.round(m.x * w), Math.round(m.y * z), Math.round(m.width * w), Math.round(m.height * z), r * C, s * D, r, s);
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
            if (this._video.paused) {
                o.autoplay = false;
            } else {
                o.autoplay = true;
            }
            this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[this._view].path.endsWith('.m3u8'), o, this._options.use_multiview);
            this._hls.attachMedia(this._video);
            if (m) {
                this._hls.loadSource(this._sourceBase + this._manifest.singleview_list[this._view].path);
            } else {
                this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
            }
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
                    this._video.addEventListener('loadedmetadata', function(s) {
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
            } else if (t.target.mode == 'hidden') {
                t.target.mode = 'showing';
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
                } else if (u.type == 'webkitendfullscreen') {
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
                        if (this._hls.snsInDictionary[y] == 0) {
                            y = 1;
                        }
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
            this._hls.on(Hls.Events.ERROR, function(x, y) {
                if (y.fatal) {
                    switch (y.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log('fatal network error encountered, try to recover');
                            this._hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            var z = this._video.currentTime;
                            console.log('fatal media error encountered, try to recover');
                            if (y.details == Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR) {
                                console.log('this is not a media error, try to recover');
                                this._hls.startLoad();
                            } else {
                                this._hls.recoverMediaError();
                                this.play_on();
                            }
                            this._video.currentTime = z;
                            break;
                        default:
                            this._hls.destroy();
                            break;
                    }
                }
            }.bind(this));
            this._hls.on(Hls.Events.MANIFEST_PARSED, function() {
                this._quality_list = [];
                var x = this._hls.levels;
                for (var y in x) {
                    this._quality_list.push(x[y]);
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY);
                this._ready_state = RICH360_STATE.RICH360_READY;
            }.bind(this));
            this._hls.on(Hls.Events.LEVEL_SWITCHED, function(x, y) {
                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: false,
                    wait_on: RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
                });
                this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, y.level);
            }.bind(this));
            this._hls.on(Hls.Events.NON_NATIVE_TEXT_TRACKS_FOUND, function(x, y) {
                for (var z = 0; z < y.tracks.length; z++) {
                    this._subtitleList.push({
                        id: z,
                        label: y.tracks[z].label,
                        lang: y.tracks[z].subtitleTrack.lang
                    });
                }
                this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
            }.bind(this));
            this._hls.on(Hls.Events.CUES_PARSED, function(x, y) {
                if (this._subtitleManager) {
                    var z = y.cues.length;
                    var A = [];
                    for (var B = 0; B < z; B++) {
                        A.push({
                            startTime: y.cues[B].startTime,
                            endTime: y.cues[B].endTime,
                            text: y.cues[B].text,
                            track_num: this._hls._hls.subtitleTrack,
                            view: this._view
                        });
                    }
                    this._subtitleManager.addCueData(A);
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
            } else {
                this._ui.fullScreen = new FullscreenButton(this._rich360Player, this._ui.fullBtn);
            }
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
                if (0 > C) {
                    C = 0;
                }
                if (C > this._video.duration) {
                    C = this._video.duration;
                }
                if (Math.abs(C - this._video.currentTime) > 0.5) {
                    this._video.currentTime = C;
                    this._logger.addLog({
                        event: 'seek',
                        time: C
                    });
                    this._render_once_on_seek = true;
                }
            } else {
                console.log('isNan');
            }
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
            if (H < -1) {
                H = -1;
            }
            if (H >= this._quality_list.size) {
                H = this._quality_list.size;
            }
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
            } else {
                this._hls._hls.subtitleTrack = K;
            }
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
                    if (this._video.textTracks[M].mode == 'showing' || this._video.textTracks[M].mode == 'hidden') {
                        return M;
                    }
                }
                return -1;
            } else if (this._hls._hls) {
                return this._hls._hls.subtitleTrack;
            } else {
                return -1;
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
            if (typeof N === 'undefined') {
                P = false;
            }
            this._changingView = P;
            if (!O) {
                return;
            }
            if (!O._wrapperList) {
                return;
            }
            if (P) {
                addClassName(O._wrapperList, 'changing-source');
            } else {
                removeClassName(O._wrapperList, 'changing-source');
            }
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
                    if (v[k] == '') {
                        continue;
                    }
                    var x = this.measureText(v[k], r) + r;
                    if (x >= q) {
                        x = q;
                    }
                    var y = p - x / 2 - n.left;
                    u[t] = '<p style="color:white;word-break:break-all;font-weight:700;text-shadow:#000000 0px 0px 7px;padding:1px 5px;width:' + x + 'px;margin-left:' + y + 'px;margin-bottom:2px;">' + v[k] + '</p>';
                    t++;
                    if (s == t) {
                        break;
                    }
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
            } else {
                this._subtitleTrack = this._player._hls._hls.subtitleTrack;
            }
        }
    }, {
        key: 'compareArray',
        value: function f(g, h) {
            var i = false;
            if (g.length != h.length) {
                return i;
            }
            g.forEach(function(k) {
                var l = h.indexOf(k);
                if (l > -1) {
                    h.splice(l, 1);
                }
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
                } else if (this._player.getSubtitleTrack() != -1) {
                    var i = new Date();
                    if (this._bfSendSubTime.getTime() + 10000 < i) {
                        var j = this._player.getSubtitleTrack();
                        this._player.setSubtitleTrack(-1);
                        this._bfSendSubTime = i;
                        setTimeout(function() {
                            this._player.setSubtitleTrack(j);
                        }.bind(this), 100);
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
            if (f) {
                this.arrangeVideo();
            }
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
                } catch (v) {
                    f.e(v);
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
            if (!this._showMultiPreview) {
                this._updateCanvasFlag = false;
            } else if (!this._updateCanvasFlag) {
                this._updateCanvasFlag = true;
                this._canvasTimeStamps = [];
                this._canvasTimeStamps.push(performance.now());
                this._canvasTimeStampIndex = 0;
                window.requestAnimationFrame(this.drawCanvas.bind(this));
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
            if (this._player._view == g) {
                h.addClass('on');
            } else {
                h.removeClass('on');
            }
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
                    k.forEach(function(z, A) {
                        var B = i._multiviewDivArr[A];
                        var C = k.find(function(L) {
                            return L.singleview_id === A;
                        });
                        i.selectedMultiviewCanvas(A);
                        if (C == null) {
                            return;
                        }
                        var D = C.x;
                        var E = C.y;
                        var F = C.width;
                        var G = C.height;
                        var H = j.videoWidth;
                        var I = j.videoHeight;
                        var J = B.offsetWidth;
                        var K = B.offsetHeight;
                        l.drawImage(j, Math.round(D * H), Math.round(E * I), Math.round(F * H), Math.round(G * I), 0, K * A + m * A, J, K);
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
                    if (s >= 100) {
                        s = 0;
                    }
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
var Chat = {};
var CHAT_MSG_SEPARATOR = '|*|';
var CHAT_USERID_SEPARATOR = '|#|';
var NICKNAME_SEPARATOR = '|&|';
var USER_CHAT_INPUT_MAXLENGTH = 80;
var OPERATOR_CHAT_INPUT_MAXLENGTH = 1000;
var ARTIST_ADMIN_USER_CHAT_INPUT_MAXLENGTH = 128;
var SHOW_PLAY_IMAGE = '[showplayimage]';
var HIDE_PLAY_IMAGE = '[hideplayimage]';
var USER_TYPE_OPERATOR = 'operator';
var USER_TYPE_ENGINEER = 'engineer';
var IS_OPERATOR = function IS_OPERATOR() {
    var a;
    if (typeof CHAT_USER_SETTINGS === 'undefined') {
        return false;
    }
    return ((a = CHAT_USER_SETTINGS) === null || a === void 0 ? void 0 : a.userType) === USER_TYPE_OPERATOR && Chat.Manager.isAdminUser();
};
var IS_ENGINEER = function IS_ENGINEER() {
    return false;
};
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
    var j = 'ch_artist' + '_' + DCvi;
    var k = [];
    var l = 'ch_notice' + '_' + DCvi;
    var m = 'ch_ctr' + '_' + DCvi;
    var n = 'ch_artist' + '_' + DCvi;
    var o = null;
    var p = null;
    var q = null;
    var r = [];
    var s = null;
    var t = null;
    AWS.config.update({
        region: Nierw,
        accessKeyId: Yacaw,
        secretAccessKey: Ytcsw
    });
    var u = null;
    var v = {};
    var w = '';
    return {
        getContentData: function x() {
            return v;
        },
        setContentData: function y(z) {
            v = z;
        },
        isChatUsed: function z() {
            return v.is_chat_used;
        },
        getChatChannels: function A() {
            return k;
        },
        setChatChannels: function B() {
            if (DREAMCONCERT_UTIL.isDreamConcert(v.id)) {
                var C = Chat.Manager.getUserId();
                if (Chat.Manager.checkOperationntUser(o) || Chat.Manager.checkAdminUser(o)) {
                    for (var D = 1; D <= v.chat_channel_num; D++) {
                        k.push(i + '_' + D.toString());
                        k.push(''.concat(j, '_').concat(D.toString()));
                    }
                } else {
                    n = ''.concat(j, '_').concat(DREAMCONCERT_UTIL.getArtistChannel(DREAMCONCERT_UTIL.getArtistRomm()));
                    k.push(i + '_' + DREAMCONCERT_UTIL.getUserChannel(DREAMCONCERT_UTIL.getArtistRomm()));
                    if (Chat.Manager.checkArtistUser(C)) {
                        k.push(n);
                    }
                }
            } else if (v.chat_channel_num > 0) {
                if (Chat.Manager.checkArtistUser(o) || Chat.Manager.checkOperationntUser(o) || Chat.Manager.checkAdminUser(o)) {
                    for (var D = 1; D <= v.chat_channel_num; D++) {
                        k.push(i + '_' + D.toString());
                    }
                    if (Chat.Manager.checkArtistUser(o)) {
                        k.push(n);
                    }
                } else {
                    var E = Math.floor(Math.random() * parseInt(v.chat_channel_num)) + 1;
                    k.push(i + '_' + E.toString());
                }
            }
        },
        getNoticeChannel: function C() {
            return l;
        },
        getCtrChannel: function D() {
            return m;
        },
        setUserId: function E(F) {
            if (o) {
                return;
            }
            if (!F) {
                o = getCookie(DCvi + '_user_id');
            } else {
                o = F;
            }
        },
        getUserId: function F() {
            return o;
        },
        setOperatorChNum: function G(H) {
            p = H;
        },
        setOperatorSelCh: function H(I) {
            q = I;
        },
        setPubnubAPI: function I(J) {
            Chat.Manager.setUserId();
            e = J;
            t = new PubNub({
                publishKey: YPP3z,
                subscribeKey: KSPdf,
                uuid: o
            });
            if (IS_ENGINEER()) {
                this.initEngineerMode();
            } else {
                AWS.config.update({
                    region: Nierw,
                    accessKeyId: Yacaw,
                    secretAccessKey: Ytcsw
                });
                u = new AWS.Kinesis();
                Chat.Ui.initChatUI();
                Chat.Ui.initChatUIEvent();
                Chat.Manager.setChatChannels();
                Chat.Manager.setChatHistory();
                Chat.Manager.initPubnubEvent();
            }
        },
        toggleImageBtn: function J(K) {
            $('.show-image-btn').css('display', K ? 'none' : 'block');
            $('.hide-image-btn').css('display', K ? 'block' : 'none');
        },
        changePlayImageLabel: function K(L) {
            if (L === SHOW_PLAY_IMAGE) {
                this.toggleImageBtn(true);
            } else if (L === HIDE_PLAY_IMAGE) {
                this.toggleImageBtn(false);
            } else {
                this.toggleImageBtn(false);
            }
        },
        showLoading: function L(M) {
            $('.pop-full-wrap.loading').css('display', M ? 'block' : 'none');
            $('#loadingDiv').css('display', M ? 'block' : 'none');
        },
        initEngineerMode: function M() {
            var N = this;
            $('.chat-t-fullscreen').css('display', 'none');
            $('.chat-engineer-page').css('display', 'block');
            this.showLoading(true);
            $('.show-image-btn').on('click', function() {
                if (Chat.Manager.checkOperationntUser(o)) {
                    Chat.Manager.submitUpdate(o, SHOW_PLAY_IMAGE, Chat.Manager.getNoticeChannel());
                }
            });
            $('.hide-image-btn').on('click', function() {
                if (Chat.Manager.checkOperationntUser(o)) {
                    Chat.Manager.submitUpdate(o, HIDE_PLAY_IMAGE, Chat.Manager.getNoticeChannel());
                }
            });
            t.history({
                channel: l,
                count: 1
            }, function(O, P) {
                if (P) {
                    if (P.messages.length) {
                        N.showLoading(false);
                        N.changePlayImageLabel(P.messages[0].entry.update);
                    } else {
                        N.toggleImageBtn(false);
                    }
                }
            });
            t.addListener({
                status: function O(P) {
                    console.log('[STATUS: ' + P.category + ']', 'connected to channels: ' + P.affectedChannels);
                },
                message: function P(Q) {
                    return N.changePlayImageLabel(Q.message.update);
                }
            });
            t.subscribe({
                channels: [l]
            });
        },
        setChatHistory: function N() {
            if (DREAMCONCERT_UTIL.isDreamConcert(v.id)) {
                t.history({
                    channel: l,
                    count: 1
                }, function(P, Q) {
                    console.log(P, Q);
                    if (Q) {
                        if (Q.messages.length) {
                            Chat.Ui.updateNotice(Q.messages[0].entry.update, Q.messages[0].entry.timetoken, Q.messages[0].entry.entry);
                        }
                    }
                });
                t.history({
                    channel: k[0],
                    count: c
                }, function(P, Q) {
                    console.log(P, Q);
                    if (Q) {
                        if (Q.messages.length) {
                            for (var R = 0; R < Q.messages.length; R++) {
                                var S = Q.messages[R].entry.update.split(CHAT_MSG_SEPARATOR);
                                for (var T = 0; T < S.length; T++) {
                                    var U = S[T].split(CHAT_USERID_SEPARATOR)[0];
                                    Chat.Ui.displayMessage(S[T], Q.messages[R].timetoken, U, true);
                                }
                            }
                        }
                    }
                });
                if (DREAMCONCERT_UTIL.getArtistRomm()) {
                    t.history({
                        channel: n,
                        count: 10000
                    }, function(P, Q) {
                        console.log(P, Q);
                        if (Q) {
                            var R = JSON.parse(JSON.stringify(Q));
                            if (R.messages.length) {
                                for (var S = 0; S < R.messages.length; S++) {
                                    var T = R.messages[S].entry.update;
                                    var U = T.split(CHAT_USERID_SEPARATOR)[0];
                                    if (U) {
                                        Chat.Ui.displayArtistHistoryMsg(T, R.messages[S].timetoken, U);
                                    }
                                }
                                if ($('#artistChatList').length) {
                                    $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
                                }
                            }
                        }
                    });
                }
            } else {
                t.history({
                    channel: l,
                    count: 1
                }, function(P, Q) {
                    console.log(P, Q);
                    if (Q) {
                        if (Q.messages.length) {
                            Chat.Ui.updateNotice(Q.messages[0].entry.update, Q.messages[0].entry.timetoken, Q.messages[0].entry.entry);
                        }
                    }
                });
                var O = 0;
                if (q) {
                    O = q - 1;
                }
                t.history({
                    channel: k[O],
                    count: c
                }, function(Q, R) {
                    console.log(Q, R);
                    if (R) {
                        if (R.messages.length) {
                            for (var S = 0; S < R.messages.length; S++) {
                                var T = R.messages[S].entry.update.split(CHAT_MSG_SEPARATOR);
                                for (var U = 0; U < T.length; U++) {
                                    var V = T[U].split(CHAT_USERID_SEPARATOR)[0];
                                    Chat.Ui.displayMessage(T[U], R.messages[S].timetoken, V, true);
                                }
                            }
                        }
                    }
                });
                t.history({
                    channel: n,
                    count: 10000
                }, function(Q, R) {
                    console.log(Q, R);
                    if (R) {
                        var S = JSON.parse(JSON.stringify(R));
                        if (S.messages.length) {
                            for (var T = 0; T < S.messages.length; T++) {
                                var U = S.messages[T].entry.update;
                                var V = U.split(CHAT_USERID_SEPARATOR)[0];
                                if (V) {
                                    Chat.Ui.displayArtistHistoryMsg(U, S.messages[T].timetoken, V);
                                }
                            }
                            if ($('#artistChatList').length) {
                                $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
                            }
                        }
                    }
                });
            }
        },
        initPubnubEvent: function O() {
            if (DREAMCONCERT_UTIL.isDreamConcert(v.id)) {
                var P = [l, m].concat(k);
                t.addListener({
                    status: function R(S) {
                        console.log('[STATUS: ' + S.category + ']', 'connected to channels: ' + S.affectedChannels);
                        if (S.category == 'PNConnectedCategory') {
                            ChatFilter.loadChatFilterData();
                            Chat.Manager.initChatInterval();
                        }
                    },
                    message: function S(T) {
                        if (T.channel == l) {
                            Chat.Ui.updateNotice(T.message.update, T.timetoken, T.message.entry);
                        } else if (T.channel == m) {
                            Chat.Ui.recvCtrlChMsg(T.message.update);
                        } else {
                            var U = T.message.update.split(CHAT_MSG_SEPARATOR);
                            for (var V = 0; V < U.length; V++) {
                                var W = U[V].split(CHAT_USERID_SEPARATOR)[0];
                                if (o == W) {
                                    continue;
                                }
                                if (Chat.Manager.checkArtistUser(W)) {
                                    Chat.Ui.displayMessage(T.message.update, T.timetoken, T.message.entry);
                                } else {
                                    r.push(U[V]);
                                }
                            }
                            if (r.length) {
                                Chat.Manager.displayMessageItv(parseInt(T.timetoken));
                            }
                        }
                    }
                });
                t.subscribe({
                    channels: P
                });
            } else {
                var P = [l, m];
                if (q) {
                    P.push(k[q - 1]);
                } else {
                    if (!p) {
                        p = 1;
                    }
                    for (var Q = 0; Q < p; Q++) {
                        P.push(k[Q]);
                    }
                }
                t.addListener({
                    status: function T(U) {
                        console.log('[STATUS: ' + U.category + ']', 'connected to channels: ' + U.affectedChannels);
                        if (U.category == 'PNConnectedCategory') {
                            ChatFilter.loadChatFilterData();
                            Chat.Manager.initChatInterval();
                        }
                    },
                    message: function U(V) {
                        if (V.channel == l) {
                            Chat.Ui.updateNotice(V.message.update, V.timetoken, V.message.entry);
                        } else if (V.channel == m) {
                            Chat.Ui.recvCtrlChMsg(V.message.update);
                        } else {
                            var W = V.message.update.split(CHAT_MSG_SEPARATOR);
                            for (var X = 0; X < W.length; X++) {
                                var Y = W[X].split(CHAT_USERID_SEPARATOR)[0];
                                if (o == Y) {
                                    continue;
                                }
                                if (Chat.Manager.checkArtistUser(Y)) {
                                    Chat.Ui.displayMessage(V.message.update, V.timetoken, V.message.entry);
                                } else {
                                    r.push(W[X]);
                                }
                            }
                            if (r.length) {
                                Chat.Manager.displayMessageItv(parseInt(V.timetoken));
                            }
                        }
                    }
                });
                t.subscribe({
                    channels: P
                });
            }
        },
        displayMessageItv: function P(Q) {
            if (s) {
                clearInterval(s);
                s = null;
            }
            var R = d / r.length;
            s = setInterval(function() {
                if (r.length) {
                    var S = r[0].split(CHAT_USERID_SEPARATOR)[0];
                    Chat.Ui.displayMessage(r[0], Q, S);
                    Q = parseInt(Q) + parseInt(R * 1000 * 10);
                    r.splice(0, 1);
                }
            }, R);
        },
        isAdminUser: function Q() {
            var R = this.getUserId();
            return this.checkOperationntUser(R) || this.checkAdminUser(R);
        },
        isSuperUser: function R() {
            var S = this.getUserId();
            return this.checkOperationntUser(S) || this.checkAdminUser(S) || this.checkArtistUser(S);
        },
        submitUpdate: function S(T, U, V, W) {
            if (!t) {
                return;
            }
            if (U === w && !this.isSuperUser()) {
                return;
            }
            if (iCM()) {
                return;
            }
            w = U;
            if (!W) {
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
            if (!Array.isArray(V)) {
                V = [V];
            }
            if (this.isSuperUser()) {
                var X = false;
                for (var Y = 1; Y <= V.length; Y++) {
                    t.publish({
                        channel: V[Y - 1],
                        message: {
                            entry: T,
                            update: U
                        }
                    }, function(a2, a3) {
                        if (a2.error) {} else if (Chat.Manager.checkArtistUser(o) && !X) {
                            if (a3) {
                                Chat.Ui.displayMessage(U, a3.timetoken, o);
                            }
                            X = true;
                        }
                    });
                }
            } else {
                var Z = {
                    Data: JSON.stringify(U),
                    PartitionKey: V[0],
                    StreamName: 'KINESIS_CHAT'
                };
                u.putRecord(Z, function(a4, a5) {
                    if (a4) {
                        console.log(a4, a4.stack);
                    } else {
                        console.log(a5);
                        var a6 = new Date();
                        Chat.Ui.displayMessage(U, a6.getTime() * 10000);
                    }
                });
            }
        },
        checkOperationntUser: function T(U) {
            if (v.operation_account === U) {
                return true;
            } else {
                return false;
            }
        },
        checkAdminUser: function U(V) {
            if (v.admin_account === V) {
                return true;
            }
            return false;
        },
        checkArtistUser: function V(W) {
            for (var X = 0; X < v.artist_account.length; X++) {
                if (v.artist_account[X] === W) {
                    return true;
                }
            }
            return false;
        },
        initChatInterval: function W() {
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
        getNickName: function X() {
            return e;
        },
        destroy: function Y() {
            if (t) {
                t.destroy();
            }
            t = null;
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
        dev_demo_event: {
            extension: 'jpg'
        },
        '210626_dreamconcert': {
            extension: 'jpg'
        },
        webview_sample_v1: {
            'c09a92ff-4c8c-4e66-ad31-b10371778fcd': {
                msgClass: ''
            }
        }
    };
    return {
        initChatUI: function h() {
            var i = Chat.Manager.getContentData().id;
            if (DREAMCONCERT_UTIL.isDreamConcert(i)) {
                var j = DREAMCONCERT_UTIL.getArtistRomm();
                if (DREAMCONCERT_UTIL.getUserChannel(j) === '21') {
                    $('button[name=artistchatnavbtn]').css('display', ' none');
                }
                DREAMCONCERT_UTIL.initArtistRoomLabel(j, i);
                var k = Chat.Manager.getUserId();
                if (Chat.Manager.checkOperationntUser(k)) {
                    $('#chatInput').attr('maxlength', OPERATOR_CHAT_INPUT_MAXLENGTH);
                }
            } else {
                var l = Chat.Manager.getUserId();
                if (Chat.Manager.checkOperationntUser(l)) {
                    $('#chatInput').attr('maxlength', OPERATOR_CHAT_INPUT_MAXLENGTH);
                }
            }
            if (IS_OPERATOR()) {
                $('#chatWrap').addClass('opreator');
                $('#chatInputWrap').css('display', 'none');
                $('.chat-input-inner').css('display', 'flex');
            }
        },
        initChatUIEvent: function i() {
            var j = false;
            $('#chatContentWrap .scroll-bar').on('touchstart', function() {
                b = true;
            });
            $('#chatList').on('touchstart', function(m) {
                j = true;
            });
            $(document).on('touchmove', function(m) {
                console.log('touchmove');
                if (j) {
                    b = true;
                }
            });
            $(document).on('touchend', function(m) {
                j = false;
                console.log('touchmove');
            });
            $('#chatList').on('wheel', function(m) {
                if (m.originalEvent.deltaY < 0 && $('#chatList').scrollTop() > 0) {
                    b = true;
                }
            });
            $('#chatList').on('scroll', function() {
                if (d) {
                    return;
                }
                var chatAnchor = $('#chatAnchor');
                var chatList = $('#chatList');
                var o = function x() {
                    return Math.ceil(chatList.scrollTop() + chatList.height());
                };
                var p = function y() {
                    var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o();
                    return z < chatList[0].scrollHeight;
                };
                var q = function z() {
                    chatAnchor.css('display', 'block');
                    b = true;
                };
                if (p()) {
                    setTimeout(function() {
                        return p() && q();
                    }, 200);
                } else {
                    chatAnchor.css('display', 'none');
                    b = false;
                    if (e.length !== 0) {
                        var r = document.createDocumentFragment();
                        var s = e.reverse();
                        for (var t = 0, u = s.length; t < u; t++) {
                            if (a <= t) {
                                break;
                            }
                            r.prepend(s[t]);
                        }
                        chatList.find('.user_chat:eq(-1)').css('margin-bottom', '1.25em');
                        chatList.append(r);
                        if (navigator.userAgent.indexOf('Firefox') === -1) {
                            chatList.find('.user_chat:eq(-1)').css('margin-bottom', '0');
                        }
                        chatList.scrollTop(chatList[0].scrollHeight);
                        e = [];
                    }
                }
            });
            $('#chatAnchor').on('click', function() {
                $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
                $('#chatAnchor').css('display', 'none');
            });
            var k = function m(n) {
                return function(o) {
                    var p = Chat.Manager.getNickName();
                    var q = Chat.Manager.getUserId();
                    if (!p) {
                        alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                            location.href = LUEz1;
                        });
                        return;
                    }
                    var r = o || $(n).val();
                    if (!r || !ChatFilter.checkFilteringData()) {
                        return;
                    }
                    if (Chat.Manager.checkOperationntUser(q) && r.length > OPERATOR_CHAT_INPUT_MAXLENGTH) {
                        r = r.slice(0, OPERATOR_CHAT_INPUT_MAXLENGTH);
                    } else if ((Chat.Manager.checkAdminUser(q) || Chat.Manager.checkArtistUser(q)) && r.length > ARTIST_ADMIN_USER_CHAT_INPUT_MAXLENGTH) {
                        r = r.slice(0, ARTIST_ADMIN_USER_CHAT_INPUT_MAXLENGTH);
                    } else if (!Chat.Manager.isSuperUser() && r.length > USER_CHAT_INPUT_MAXLENGTH) {
                        r = r.slice(0, USER_CHAT_INPUT_MAXLENGTH);
                    }
                    if (Chat.Manager.checkOperationntUser(q)) {
                        Chat.Manager.submitUpdate(q, r, Chat.Manager.getNoticeChannel());
                    } else if (Chat.Manager.checkAdminUser(q)) {
                        Chat.Manager.submitUpdate(q, r, Chat.Manager.getCtrChannel());
                    } else {
                        var s = ChatFilter.filteringChatText(r);
                        Chat.Manager.submitUpdate(q, q + CHAT_USERID_SEPARATOR + p + NICKNAME_SEPARATOR + s, Chat.Manager.getChatChannels());
                    }
                    $(n).val('');
                };
            };
            var l = k(IS_OPERATOR() ? '.chat-input-textarea' : '#chatInput');
            if (IS_OPERATOR()) {
                $('#chat-send-btn').on('click', function() {
                    return l();
                });
                $('#chat-delete-btn').on('click', function() {
                    return l('[delete]');
                });
                $('#chat-reset-btn').on('click', function() {
                    return $('.chat-input-textarea').val('');
                });
            } else {
                $('#chatSendBtn').on('click', function() {
                    return l();
                });
                $('#chatInput').on('keydown', function(o) {
                    if (o.keyCode == 13) {
                        $('#chatSendBtn').click();
                        return false;
                    }
                });
                $('#chatInput').on('focus', function(o) {
                    delayStopLoadingPanel();
                });
                $('#chatInput').on('blur', function(o) {
                    delayStopLoadingPanel();
                });
            }
            $('#artistChatList').on('scroll', debounce(function() {
                if (d) {
                    return;
                }
                var artistChatList = $('#artistChatList');
                var p = function r() {
                    return Math.ceil(artistChatList.scrollTop() + artistChatList.height());
                };
                var q = function s() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p();
                    return t >= artistChatList[0].scrollHeight;
                };
                if (q()) {
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
            } else if (m.indexOf('[ticket_exposure]') === 0) {
                var o = m.split('[ticket_exposure]')[1].split('|&|');
                var p = o[0];
                var q = o[1];
                var r = parseInt(o[2]) * 1000;
                setTicketExposureItv(p, q, r);
            }
        },
        convertChatMsg: function m(n) {
            if (!n) {
                return false;
            }
            var o = n.split(CHAT_USERID_SEPARATOR);
            if (o.length < 2) {
                return false;
            }
            var p = o[0];
            o = o[1].split(NICKNAME_SEPARATOR);
            if (o.length < 2) {
                return false;
            }
            var q = o[0];
            var r = o[1];
            if (!p || !q || !r) {
                return false;
            }
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
            var v = t.extension ? t.extension : 'png';
            if (u) {
                if (u.msgClass) {
                    s.find('.user_msg').addClass(u.msgClass);
                }
            }
            s.find('img').attr('src', 'https://resource.liveconnect.co.kr/events/imgs/' + Tira + '/artist_thumb_' + o + '.' + v);
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
            if (!v) {
                return;
            }
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
            } else if (t) {
                var x = Chat.Ui.createUserChatDiv(t, v.nickName, v.text, w);
                if (b) {
                    e.push(x[0]);
                } else {
                    $('#chatList').append(x);
                }
            } else {
                b = false;
                $('#chatAnchor').css('display', 'none');
                var x = Chat.Ui.createUserChatDiv(Chat.Manager.getUserId(), v.nickName, v.text, w);
                $('#chatList').append(x);
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
            if (!v) {
                return;
            }
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
        if (typeof b !== 'undefined') {
            a = b;
        }
        if (b) {
            chatInput.val('');
        }
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
    if (!c) {
        return;
    }
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
    } else {
        $('#wmark').css('background-image', 'url(' + _wmarkImgUrl + ')');
    }
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
    if (!b) {
        return;
    }
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
            } else {
                p.artist_account = [p.artist_account];
            }
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
                if (o == 'landscape-primary' || o == 'landscape-secondary' || o == 'landscape') {
                    $('#chatInputWrap').css('display', 'block');
                } else {
                    $('#chatInputWrap').css('display', 'block');
                }
            } else {
                $('#chatInputWrap').css('display', 'block');
            }
        } else {
            $('#chatInputWrap').css('display', 'block');
        }
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
        if (p.hasClass('active')) {
            return;
        }
        q = p.data('view-type');
        if (q === 'singleview') {
            window.location.replace(r + PARAM_SINGLEVIEW_ON_MULTIVIEW);
        } else if (q === 'multiview') {
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
                        var k = JSON.parse(f.responseText);
                        e(k, f.status);
                    } catch (o) {
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
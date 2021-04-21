'use strict';

function _createForOfIteratorHelper(a, b) {
    var c = typeof Symbol !== 'undefined' && a[Symbol.iterator] || a['@@iterator'];
    if (!c) {
        if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && typeof a.length === 'number') {
            if (c) a = c;
            var d = 0,
                g = function l() {};
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
    var h = true,
        j = false,
        k;
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
                if (!h && c['return'] != null) c['return']();
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
    if (!(a instanceof b)) {
        throw new TypeError('Cannot call a class as a function');
    }
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
    if (!b) {
        f = 'cusDD_default';
    } else {
        if (b == 'slick dark') f = 'cusDD_slick_d';
        else b == 'slick light' ? f = 'cusDD_slick_l' : f = b;
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
        $(this).find('.cusDD_options').children() && $(this).find('.cusDD_options').children().length > 30 && (o = 0);
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
            $(this).data().id && ($($(this).parent()).siblings('.cusDD_select').data().id = $(this).data().id);
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
                        this._ui.volumeSlider._value == 0 ? this._ui.volumeBtn.classList.add('mute') : this._ui.volumeBtn.classList.remove('mute');
                        this._ui.volumeSlider.barDiv.style.backgroundImage = 'linear-gradient(to right, #fff 0%, #fff ' + this._ui.volumeSlider._value + '%, transparent ' + this._ui.volumeSlider._value + '%, transparent 100%)';
                        this.volume(this._ui.volumeSlider._value);
                    }.bind(this));
                    this._ui.volumeSlider.addEventListener('seek', function(d) {
                        this.volume(d.target._value);
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
                    this._ui.seekBar.addEventListener('input', function(d) {
                        this._ui.seekBar.style.backgroundImage = 'linear-gradient(to right, #ea0029 ' + d.target._value + '%, #ea0029 ' + d.target._value + '%, transparent ' + d.target._loadedValue + '%, transparent ' + d.target._loadedValue + '%)';
                        if (this._ui.seekBar.thumbInteracting) {
                            this.viewSeekBarThumbnail(d.target._value, true);
                        }
                    }.bind(this));
                    this._ui.seekBar.paddingBar.addEventListener('mousemove', function(d) {
                        this.viewSeekBarThumbnail(d.offsetX / this._ui.seekBar.clientWidth * 100);
                    }.bind(this));
                    this._ui.seekBar.paddingBar.addEventListener('mouseout', function(d) {
                        $(this._ui.sliderThumbnail).css('display', 'none');
                    }.bind(this));
                    this._ui.seekBar.addEventListener('seek', function(d) {
                        this.seek(d.target._value);
                        $(this._ui.sliderThumbnail).css('display', 'none');
                    }.bind(this));
                    $(this._ui.prev10sBtn).on('click', function() {
                        if (this._player.currentPosition) {
                            var d = this._player.currentPosition - 10;
                            if (d < 0) {
                                d = 0;
                            }
                            this._player.currentPosition = d;
                        }
                    }.bind(this));
                    $(this._ui.next10sBtn).on('click', function() {
                        if (this._player.currentPosition) {
                            var d = this._player.currentPosition + 10;
                            d > this._player.duration - 1 && (d = this._player.duration - 1);
                            this._player.currentPosition = d;
                        }
                    }.bind(this));
                }
                isIOS() ? $(this._ui.fullBtn).on('click', function() {
                    this._player._subtitleManager.showDefaultSubtitle();
                    if (!this._player._video.paused) {
                        this._player._video.webkitEnterFullscreen();
                    }
                }.bind(this)) : this._ui.fullScreen = new FullscreenButton(this, this._ui.fullBtn);
                if (isMobile()) {
                    var c = getOrientation();
                    if (typeof c == 'string') {
                        if (c == 'landscape-primary' || c == 'landscape-secondary' || c == 'landscape') {
                            this.hideChatWrap();
                        } else(c == 'portrait-primary' || c == 'portrait-secondary' || c == 'portrait') && this.showChatWrap();
                    }
                    $(window).on('orientationchange', function() {
                        var g = getOrientation();
                        if (typeof g == 'string') {
                            if (g == 'landscape-primary' || g == 'landscape-secondary' || g == 'landscape') this.hideChatWrap();
                            else {
                                if (g == 'portrait-primary' || g == 'portrait-secondary' || g == 'portrait') {
                                    this.showChatWrap();
                                }
                            }
                        }
                    }.bind(this));
                }
                this._options.content_data.use_vod && $(this._ui.sliderPaddingDiv).width($(this._ui.sliderArea).width());
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
                if (e.dataset.height == 'auto') f = 'AUTO';
                else {
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
                f.dataset.height == 'auto' ? g = 'AUTO' : g = f.dataset.height + 'P';
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
                var h = this.createQualityDiv({
                        id: 'auto',
                        height: 'auto'
                    }),
                    j = this.createQualityBtn({
                        id: 'auto',
                        height: 'auto'
                    }),
                    k = document.createElement('div');
                k.className = 'cusDD_options';
                k.appendChild(h);
                j.className += ' on';
                $(this._ui.qualityPopup).find('.ta_c').append(j);
                this._ui.qualityItems.push(h);
                this._ui.qualityPopupItems.push(j);
                if (this._player.qualityList) {
                    for (var l = 0; l < this._player.qualityList.length; l++) {
                        if (!this._player.qualityList[l].height) continue;
                        var m = this.createQualityDiv({
                                id: l,
                                height: this._player.qualityList[l].height
                            }),
                            n = this.createQualityBtn({
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
                            if (this._player.quality == l) addClassName(m, 'on');
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
                            if (this._player.quality == r) return;
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
                    if (r.id == 'auto') s = -1;
                    else {
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
                } else {
                    if (!this._player.subtitleList.length) {
                        this._ui.ccSelect.style.display = 'none';
                        this._ui.ccSelectBtn.style.display = 'none';
                        return;
                    } else {
                        if (!this._player.subtitleList[0].lang) {
                            return;
                        }
                    }
                }
                var k = this.createSubtitleDiv({
                        id: '-1',
                        label: 'OFF',
                        lang: 'OFF'
                    }),
                    l = this.createSubtitleBtn({
                        id: '-1',
                        label: 'OFF',
                        lang: 'OFF'
                    }),
                    m = document.createElement('div');
                addClassName(k, 'on');
                addClassName(l, 'on');
                m.className = 'cusDD_options';
                m.appendChild(k);
                this._ui.subtitlePopupItems.push(l);
                $(this._ui.subtitlePopup).find('.ta_c').append(l);
                if (this._player.subtitleList) {
                    for (var n = 0; n < this._player.subtitleList.length; n++) {
                        var o = this.createSubtitleDiv(this._player.subtitleList[n]),
                            p = this.createSubtitleBtn(this._player.subtitleList[n]);
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
                    this._player.subtitleTrack = parseInt(v.id);
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
                        this._player.subtitleTrack = parseInt($(v.target).data().id);
                    }.bind(this));
                }
                this._player.subtitleTrack = -1;
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
                    if (k === RICH360_STATE.RICH360_INIT) this.initPlayerUI();
                    else if (k === RICH360_STATE.RICH360_READY) {
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
                        } else(this._ui.qualityPopupItems[m].id != 'auto' || !this._player.isAutoQuality) && removeClassName(this._ui.qualityPopupItems[m], 'on');
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
                            this._player.currentPosition == 0 ? this._ui.seekBar.value = 0 : this._ui.seekBar.value = this._player.currentPosition * 100 / this._player.duration;
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
                        if (this._player && this._player._hls) this._player._hls.destroy();
                        removeCookie(DCvi + '_user_id');
                        removeCookie(DCvi + '_chat_id');
                        alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_AUTH_FAIL_DESC'), gettext('P_ALERT_OK'), function() {
                            location.href = LUEz1;
                        });
                    }
                }.bind(this));
                this._player.addListener(RICH360_EVENTS.RICH360_ACCESS_DENIED, function(k) {
                    var l = POPUP_CONFIG,
                        m = null;
                    Chat.Manager.destroy();
                    if (this._player && this._player._hls) this._player._hls.destroy();
                    removeCookie(DCvi + '_user_id');
                    removeCookie(DCvi + '_chat_id');
                    isIOS() && setTimeout(function() {
                        location.href = LUEz1;
                    }, 3000);
                    if (k == 'Permission Denied') {
                        m = l.permissionDenied(egl, function() {
                            location.href = LUEz1;
                        });
                        alertPopup(m.title, m.desc, m.btnTxt, m.okCallback);
                    } else alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_LIMIT_DEVNUM_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                }.bind(this));
                this._player.addListener(RICH360_EVENTS.RICH360_LIVE_ENDED, function() {
                    this._player._hls.destroy();
                    Chat.Manager.destroy();
                    removeCookie(DCvi + '_user_id');
                    removeCookie(DCvi + '_chat_id');
                    isIOS() && setTimeout(function() {
                        location.href = LUEz1;
                    }, 3000);
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
                !$(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true);
                if (isMobile() || isTablet() || isIpadOS()) {
                    this._options.container.addEventListener('touchend', n.bind(this), false);
                } else {
                    this._options.container.addEventListener('mousemove', this.wakeupController.bind(this), false);
                    this._options.container.addEventListener('mouseup', n.bind(this), false);
                }

                function n(q) {
                    this._wakeupPastTime = 0;
                    if (!this._player._video.paused && (q.target.tagName === 'CANVAS' || q.target.tagName === 'VIDEO' || q.target === this._ui.playerBottomWrap || q.target.id == 'loadingWrap' || q.target.id == 'subtitleDiv' || q.target.parentElement.id == 'subtitleDiv')) {
                        if (this._ui.playerBottomWrap.style.display == 'block') {
                            this._ui.playerBottomWrap.style.display = 'none';
                            this.showChatOpenBtn(false);
                            this.setTimerHidePlayerController(false);
                        } else {
                            this._ui.playerBottomWrap.style.display = 'block';
                            !$(this._ui.chatContents).hasClass('is-active') && this.showChatOpenBtn(true);
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
                if (typeof p === 'undefined') p = true;
                clearTimeout(this._timer.hidePlayerController.timer);
                this._timer.hidePlayerController.timer = null;
                p && (this._timer.hidePlayerController.timer = setTimeout(this.hidePlayerController.bind(this), this._timer.hidePlayerController.period));
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
                } else {
                    if ($(this._ui.pageWrap).hasClass('pl-t-default_nochat')) {
                        $(this._ui.pageWrap).removeClass('pl-t-default_nochat').addClass('pl-t-fullscreen_nochat');
                    }
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
                } else {
                    if ($(this._ui.pageWrap).hasClass('pl-t-fullscreen_nochat')) {
                        $(this._ui.pageWrap).removeClass('pl-t-fullscreen_nochat').addClass('pl-t-default_nochat');
                    }
                }
                $(this._ui.playerBottomWrap).css('display', 'block');
                $(this._ui.playerWrap).css('z-index', '3');
                this._wakeupPastTime = 0;
                $(this._ui.chatContents).addClass('is-active');
                this.showChatOpenBtn(false);
                if (isMobile()) {
                    var s = getOrientation();
                    if (typeof s == 'string') {
                        if (s == 'landscape-primary' || s == 'landscape-secondary' || s == 'landscape') $(this._ui.chatInputWrap).css('display', 'none');
                        else {
                            if ($(this._ui.navBtnWrap).find('button[name=chatnavbtn]').hasClass('on')) {
                                $(this._ui.chatInputWrap).css('top', '');
                                $(this._ui.chatInputWrap).css('position', 'relative');
                                $(this._ui.chatInputWrap).css('display', 'block');
                            } else $(this._ui.chatInputWrap).css('display', 'none');
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
                } else this._player._display && (this._player._display.showMultiPreview = false);
            }
        }, {
            key: 'play',
            value: function s() {
                if (!this._initHideCtroller) {
                    this.initHideCtrllerEvent();
                }
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
        }, {
            key: 'pause',
            value: function t() {
                if (isIOS()) {
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
                var A = this._req_str.lastIndexOf('/output'),
                    B = new Date();
                $(this._ui.sliderThumbnail).css('background-image', 'url(' + this._req_str.substr(0, A) + '/' + this._thumbnailGridData.path + '?' + B.getTime() + ')');
            }
        }, {
            key: 'viewSeekBarThumbnail',
            value: function z(A, B) {
                if (!this._thumbnailGridData) {
                    $(this._ui.sliderThumbnail).css('display', 'none');
                    return false;
                }
                if (A > 100) A = 100;
                else A < 0 && (A = 0);
                var C = A / 100,
                    D = this._thumbnailGridData.grid_x * this._thumbnailGridData.grid_y,
                    E = Math.ceil(D * C) - 1;
                E < 0 && (E = 0);
                var F = E % 10,
                    G = parseInt(E / 10),
                    H = 160,
                    I = 90,
                    J = $(this._ui.sliderArea.slider.thumb).width(),
                    K = F * H * -1,
                    L = G * I * -1;
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
    }(),
    customRange = function customRange(a, b, c) {
        var d = a;
        d.className = d.className + ' undraggable unselectable';
        d.barDiv = d.querySelector('div[name="bar"]');
        d.thumbDiv = d.barDiv.querySelector('div[name="thumb"]');
        d.thumbInteracting = false;
        d.interactStartX = 0;
        d.interactStartOffset = 0;
        d.beforeValue = 0;
        c && (d.paddingBar = c);
        if (b) d._value = b;
        else d._value = 0;
        d._loadedValue = 0;
        d.inputEvent = new Event('input');
        d.seekEvent = new Event('seek');
        Object.defineProperty(d, 'value', {
            get: function i() {
                return this._value;
            },
            set: function j(k) {
                if (k > 100) k = 100;
                else {
                    if (k < 0) k = 0;
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
            },
            f = function l(m) {
                if (this.thumbInteracting) {
                    var n = (m.clientX || m.touches && m.touches[0].clientX) - this.interactStartX,
                        o = this.interactStartOffset + n;
                    if (o < 0) o = 0;
                    if (o > this.barDiv.offsetWidth) o = this.barDiv.offsetWidth;
                    this.value = o * 100 / this.barDiv.offsetWidth;
                }
            },
            g = function m() {
                if (this.thumbInteracting) {
                    this.thumbInteracting = false;
                    this.dispatchEvent(this.seekEvent);
                }
            },
            h = function n(o) {
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
    },
    FullscreenButton = function() {
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
                var f = this._web_ui._ui,
                    g = f.navBtnWrap,
                    h = f.chatOpenBtn,
                    i = 'button[name=multiviewnavbtn]',
                    j = 'button[name=artistchatnavbtn]',
                    k = 'button[name=chatnavbtn]',
                    l = d ? 'inline-block' : 'none',
                    m = d ? 'block' : 'none';
                $(g).find(i).css('display', l);
                $(h).find(i).css('display', m);
            }
        }, {
            key: 'fullscreenChanged',
            value: function d() {
                var e = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement,
                    f = this;
                delayStopLoadingPanel();
                if (!e) {
                    $('body').removeClass('fullscreen');
                    this._is_fullscreen_button = true;
                    $(this._dom_element).removeClass('pl-i-full float_r').addClass('pl-i-screen float_r');
                    if (isMobile()) {
                        var g = getOrientation();
                        if (typeof g == 'string') {
                            if (g == 'landscape-primary' || g == 'landscape-secondary' || g == 'landscape') this._web_ui.hideChatWrap();
                            else(g == 'portrait-primary' || g == 'portrait-secondary' || g == 'portrait') && this._web_ui.showChatWrap();
                        }
                    } else isSafari() ? setTimeout(function() {
                        f._web_ui.showChatWrap();
                    }) : f._web_ui.showChatWrap();
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
                                    } else {
                                        if ('msRequestFullscreen' in f) {
                                            f.msRequestFullscreen();
                                        }
                                    }
                                }
                            }
                            this._is_fullscreen_button = false;
                        } else console.log('fullscreen not enabled');
                    } else {
                        console.log('fullscreen not supported');
                    }
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
                                else 'msExitFullscreen' in document && document.msExitFullscreen();
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
                this._logItv && clearInterval(this._logItv);
                this._logItv = setInterval(this.sendLog.bind(this), 60000, false);
            }
        }, {
            key: 'sendLog',
            value: function g() {
                var h = this.getLog(),
                    j = [];
                for (var k = 0; k < h.length; k++) {
                    h[k].value.playStatus && j.push(h[k].value.playStatus);
                }
                this.clearLogData();
                var l = new XMLHttpRequest();
                l.open('POST', this._options.credentials.api_server + '/user_auth/session_check/', true);
                var m = new FormData();
                m.append('device_id', getCookie(DCvi + '_device_id'));
                m.append('user_id', getCookie(DCvi + '_user_id'));
                m.append('content_id', this._options.credentials.content_id);
                m.append('play_status', JSON.stringify(j));
                m.append('user_agent', navigator.userAgent);
                l.send(m);
                l.onload = function(o) {
                    if (l.readyState === 4 && l.status === 200) {
                        try {
                            var p = JSON.parse(l.responseText).Data;
                            for (var q = 0; q < p.content.channels.length; q++) {
                                var r = true;
                                Ythc == 'sub' && (r = false);
                                if (p.content.channels[q].is_main_channel == r) {
                                    if (this._options.content_data.current_channel_id != p.content.channels[q].id) {
                                        this._options.content_data = JSON.parse(JSON.stringify(p.content));
                                        this._options.content_data.current_channel_id = p.content.channels[q].id;
                                        this._listener.trigger(RICH360_EVENTS.RICH360_SOURCE_CHANGE, this._options.content_data.channels[q].hls_url);
                                    }
                                    break;
                                }
                            }
                            iCM(!!p.user.is_mute);
                        } catch (u) {
                            console.log(u);
                        }
                    }
                }.bind(this);
                l.onloadend = function(o) {
                    if (l.status === 400 || l.status === 401) this._listener.trigger(RICH360_EVENTS.RICH360_ACCESS_DENIED, 'Authorization failed');
                    else l.status === 403 && this._listener.trigger(RICH360_EVENTS.RICH360_LIVE_ENDED, 'Live ended');
                }.bind(this);
            }
        }]);
        return a;
    }(),
    Rich360EventListener = function() {
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
                var g = this,
                    h = function k(l) {
                        setTimeout(function() {
                            this.events[e].listeners[l](f);
                        }.bind(g), 0);
                    };
                for (var j = 0; j < this.events[e].listeners.length; j++) {
                    h(j);
                }
            }
        }]);
        return a;
    }(),
    Rich360HlsWrapper = function() {
        var c = function() {
                var f = true;
                return function(h, i) {
                    var j = f ? function() {
                        if (i) {
                            var l = i.apply(h, arguments);
                            i = null;
                            return l;
                        }
                    } : function() {};
                    f = false;
                    return j;
                };
            }(),
            d = c(this, function() {
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
                    var k = c.constructor.prototype.bind(c),
                        l = i[j],
                        m = h[l] || k;
                    k.__proto__ = c.bind(c);
                    k.toString = m.toString.bind(m);
                    h[l] = k;
                }
            });
        d();

        function e(f, g, h) {
            _classCallCheck(this, e);
            if (!Hls) {
                console.log('Missing Hls.');
                return;
            }
            this._isDummy = f;
            this._config = g;
            this._video = null;
            this._isMultiview = h;
        }
        _createClass(e, [{
            key: 'isHlsAvailable',
            value: function f(g, h) {
                var i = g,
                    j = !j(),
                    k = window.Hls.isSupported(),
                    l = false;
                if (!i) return l;
                if (h) {
                    if (!j && i.canPlayType('application/vnd.apple.mpegurl')) l = true;
                    else {
                        if (k) {
                            l = false;
                        }
                    }
                } else l = !k;
                return l;
            }
        }, {
            key: 'attachMedia',
            value: function g(h) {
                this._video = h;
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
                    } else if (Hls.isSupported()) {
                        this._isDummy = false;
                        this._hls = new Hls(this._config);
                    } else {
                        this._isDummy = true;
                        this._hls = null;
                    }
                }
                this._video.addEventListener('canplay', function() {
                    this._config.startPosition != undefined && this._config.startPosition > 0 && (this._video.currentTime = this._config.startPosition);
                    this._config.autoplay && this._video.play();
                }.bind(this), {
                    once: true
                });
                if (!this._isDummy) this._hls.attachMedia(h);
            }
        }, {
            key: 'detachMedia',
            value: function h() {
                this._video = null;
                if (!this._isDummy) this._hls.detachMedia();
            }
        }, {
            key: 'loadSource',
            value: function i(j, k, l) {
                if (this._isDummy) {
                    this._video.src = j;
                    if (k) this._video.currentTime = k;
                    if (l) this._video.poster = l;
                    this._video.crossOrigin = 'anonymous';
                    this._video.disablePictureInPicture = true;
                    this._video.oncontextmenu = function() {
                        return false;
                    };
                    this._video.load();
                } else this._hls.loadSource(j);
            }
        }, {
            key: 'release',
            value: function j() {
                this._video = null;
                this._hls = null;
            }
        }, {
            key: 'recoverMediaError',
            value: function k() {
                if (this._isDummy) {} else {
                    this._hls.recoverMediaError();
                }
            }
        }, {
            key: 'on',
            value: function l(m, n) {
                !this._isDummy && this._hls.on(m, n);
            }
        }, {
            key: 'startLoad',
            value: function m() {
                if (this._isDummy) this._video.load();
                else {
                    this._hls.startLoad();
                }
            }
        }, {
            key: 'destroy',
            value: function n() {
                if (this._isDummy) this.release();
                else {
                    this._hls.destroy();
                }
            }
        }, {
            key: 'isAutoQuality',
            value: function o() {
                if (this._isDummy) {
                    return false;
                } else return this._hls.levelController.manualLevel == -1;
            }
        }, {
            key: 'levels',
            get: function p() {
                return this._isDummy ? false : this._hls.levels;
            }
        }, {
            key: 'nextAutoLevel',
            get: function q() {
                return this._isDummy ? 0 : this._hls.abrController.nextAutoLevel;
            }
        }, {
            key: 'currentLevel',
            get: function r() {
                return this._isDummy ? 0 : this._hls.currentLevel;
            },
            set: function s(t) {
                if (!this._isDummy) this._hls.currentLevel = t;
            }
        }]);
        return e;
    }(),
    RICH360_EVENTS = {
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
    },
    RICH360_STATE = {
        RICH360_AUTH: 0,
        RICH360_INIT: 1,
        RICH360_READY: 2
    },
    RICH360_WAIT_ON = {
        RICH360_QUALITY_CHANGE: 0,
        RICH360_BUFFER: 1,
        RICH360_SEEK: 2,
        SIZE: 3
    },
    MULTIVIEW_PLAYER_DEFAULT_MANIFEST = {
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
    },
    SINGLEVIEW_PLAYER_DEFAULT_MANIFEST = {
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
    },
    Rich360 = function() {
        function a(b, c, d, e) {
            _classCallCheck(this, a);
            this._options = b;
            this._ready_state = RICH360_STATE.RICH360_AUTH;
            this.wait_on = [];
            for (var f = 0; f < RICH360_WAIT_ON.SIZE; f++) {
                this.wait_on[f] = false;
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
                }
            });
            this._logger._listener = this._listener;
            this._loggerItv = null;
            this._subtitleList = [];
            this._play_status = '';
            this.addNativeTrackListener = this.addNativeTrackListener.bind(this);
            this.updateNativeTrackCuesListener = this.updateNativeTrackCuesListener.bind(this);
            var g = c.substr(c.lastIndexOf('/') + 1, c.length),
                h = c.substr(0, c.lastIndexOf('/') + 1),
                j = h + g;
            this._options.source = j;
            if ('credentials' in this._options) {
                !('device_id' in this._options.credentials) && (this._options.credentials.device_id = null);
                !('user_id' in this._options.credentials) && (this._options.credentials.user_id = null);
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
            } else this._parent_dom = document.body;
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
                        var g, h, l;
                        for (g = 0; g < 7; g++) {
                            this.baseCode[g] = this.base.charCodeAt(g);
                        }
                        this.addRich360 = function(m, n) {
                            var o = n % 7,
                                p = this.baseCode.slice(o, 7).concat(this.baseCode.slice(0, o + 1));
                            for (h = 0; h < 8; h++) {
                                m[h] = (m[h] + p[h]) % 256;
                            }
                            return m;
                        }.bind(this);
                        this.encrypt = function(m, n) {
                            if (m.length != 16) {
                                return 'string length must be 16';
                            }
                            var o = [],
                                p;
                            for (p = 0; p < 16; p++) {
                                o[p] = m.charCodeAt(p);
                            }
                            var q = o.slice(0, 8),
                                r = o.slice(8, 16);
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
                            var o = this.encrypt(m.ltstr, 16),
                                p = '';
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
                                this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.thumbnail_grid);
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
                    this._ready_state == RICH360_STATE.RICH360_INIT && this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_INIT);
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
                if (document.getElementById('video')) this._video = document.getElementById('video');
                else {
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
                f.xhrSetup = function(p, q) {
                    q.indexOf('.m3u8') === -1 && q.indexOf('.ts') === -1 && q.indexOf('.vtt') === -1 && q.indexOf('.webvtt') === -1 && q.indexOf('.key') === -1 && q.indexOf('.kmv') === -1 && (p.withCredentials = true);
                };
                if (this._options.use_multiview) {
                    if (this._options.initial_view >= 0 && this._options.initial_view < this._manifest.multiview_list.length) {
                        this._view = this._options.inital_view;
                    } else this._view = 0;
                    var g = [];
                    for (var h = 0; h < this._manifest.multiview_list[this._view].sub_positions.length; h++) {
                        var j = document.createElement('div');
                        j.dataset.view = h;
                        addClassName(j, 'view_wrap');
                        var k = document.createElement('label');
                        k.classList = 'view-name bolder fs_14 fc_point';
                        this._view == h && addClassName(j, 'on');
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
                    this._hls.timeDictionary = {};
                    this._hls.snsInDictionary = [];
                    if (!this._hls._isDummy) {
                        this._hls.on(Hls.Events.FRAG_PARSED, function(r, s) {
                            var t = s.frag;
                            console.log('curTime / this.duration : ', this._video.currentTime + '/' + this.duration);
                            console.log('frag.startPTS : ', t.sn, t.startPTS);
                            this._hls.timeDictionary[t.sn + ''] = t.startPTS;
                            this._hls.snsInDictionary.push(t.sn);
                            while (this._hls.snsInDictionary.length > 100) {
                                var u = 0;
                                if (this._hls.snsInDictionary[u] == 0) u = 1;
                                var v = this._hls.snsInDictionary[u];
                                this._hls.snsInDictionary.splice(u, 1);
                                delete this._hls.timeDictionary[v + ''];
                            }
                            t.startPTS == 0 && (this._hls.startSN = t.sn);
                        }.bind(this));
                    }
                } else {
                    this._hls = new Rich360HlsWrapper(!this._manifest.singleview_list[0].path.endsWith('.m3u8'), f, this._options.use_multiview);
                    this._hls.attachMedia(this._video);
                }
                this.attachVideoListeners();
                if (!this._hls._isDummy) this.attachHlsListeners();
                else {
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
                    this._play_status && this._video.currentTime && this._logger.addLog({
                        timePos: this._video.currentTime,
                        playStatus: this._play_status
                    });
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
                var i = this,
                    j = this._options.source.lastIndexOf('/');
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
                var k = this;
                if (this._changingView) return;
                if (j < 0) j = 0;
                if (j >= this._manifest.multiview_count) j = this._manifest.multiview_count - 1;
                if (this._view == j) return;
                this._subtitleManager._prevSubtitleTrack = this.subtitleTrack;
                if (this._hls._isDummy) {
                    this._view = j;
                    var l = this._video.currentTime;
                    this._hls.detachMedia();
                    this._hls.destroy();
                    var m = Hls.DefaultConfig;
                    if (this._video.paused) m.autoplay = false;
                    else m.autoplay = true;
                    this._hls = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), m, this._options.use_multiview);
                    this._hls.attachMedia(this._video);
                    var n = this._manifest.multiview_list[this._view].sub_positions,
                        o = n.map(function(u) {
                            return k.resizeToCanvasImage(u);
                        });
                    this._hls.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path, l, o[this._view]);
                    this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                } else {
                    this.setChangingView(true);
                    this._prevViewId = this._view;
                    this._view = j;
                    this._display.arrangeVideo();
                    var p = Hls.DefaultConfig;
                    p.startLevel = -1;
                    var q = new Rich360HlsWrapper(!this._manifest.multiview_list[this._view].path.endsWith('.m3u8'), p, this._options.use_multiview),
                        r = document.createElement('video');
                    this._newVideo = r;
                    if (this._newVideo) {
                        this._newVideo.disablePictureInPicture = true;
                        this._newVideo.oncontextmenu = function() {
                            return false;
                        };
                    }
                    r.setAttribute('playsinline', '');
                    r.setAttribute('preload', 'metadata');
                    q.attachMedia(r);
                    q.on(Hls.Events.MEDIA_ATTACHED, function() {
                        q.loadSource(this._sourceBase + this._manifest.multiview_list[this._view].path);
                    }.bind(this));
                    q.timeDictionary = {};
                    q.snsInDictionary = [];
                    q.firstFrag = true;
                    q.on(Hls.Events.FRAG_PARSED, function(u, w) {
                        var x = w.frag;
                        q.timeDictionary[x.sn + ''] = x.startPTS;
                        q.snsInDictionary.push(x.sn);
                        while (q.snsInDictionary.length > 100) {
                            var y = 0;
                            if (q.snsInDictionary[y] == 0) y = 1;
                            var z = q.snsInDictionary[y];
                            q.snsInDictionary.splice(y, 1);
                            delete q.timeDictionary[z + ''];
                        }
                        if (q.firstFrag) {
                            q.firstFrag = false;
                            q.startSN = x.sn;
                            q.startPTS = x.startPTS;
                            q.readyForChange = true;
                            if (r.readyForChange) s();
                        }
                    }.bind(this));
                    var s = function() {
                        var u = this._video,
                            w = this._hls,
                            x = 0;
                        if (w.timeDictionary[q.startSN + ''] != undefined) {
                            x = w.timeDictionary[q.startSN + ''] - q.startPTS;
                        } else {
                            var y = -1,
                                z = -1;
                            for (var A in w.timeDictionary) {
                                var B = Number.parseInt(A + '');
                                if (z == -1 || B > z) z = B;
                                if (y == -1 || B < y) y = B;
                            }
                            var C = (w.timeDictionary[z + ''] - w.timeDictionary[y + '']) / (z - y),
                                D = w.timeDictionary[z + ''] + C * (q.startSN - z);
                            x = D - q.startPTS;
                            console.error('startSN : ' + q.startSN + ' not defined in oldHLS');
                            console.error(w.timeDictionary);
                            console.error('estPTS : ' + D + ' timePerSN : ' + C + ' smallestSN : ' + y + ' biggestSN : ' + z + ' newStartSN : ' + q.startSN + ' newStartPTS : ' + q.startPTS);
                        }
                        var E = function(J) {
                            r.pause();
                            var K = (r.currentTime - (u.currentTime - x)) * 1000;
                            console.log('@@oldHLS.timeDictionary : ', w.timeDictionary);
                            console.log('@@timeDiff : ', x);
                            console.log('@@newVideo.currentTime : ', r.currentTime);
                            console.log('@@oldVideo.currentTime : ', u.currentTime);
                            console.log('@@@ waitTime : ', K);
                            setTimeout(function() {
                                r.volume = u.volume;
                                this._subtitleManager._prevViewOffsetTime = u.currentTime - r.currentTime;
                                this._subtitleManager._prevViewId = this._prevViewId;
                                if (!u.paused) {
                                    r.play();
                                }
                                u.pause();
                                q._hls.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
                                w.detachMedia();
                                w.destroy();
                                u = null;
                                w = null;
                                this._video = r;
                                this._hls = q;
                                this.attachVideoListeners();
                                if (!this._hls._isDummy) {
                                    this.attachHlsListeners();
                                    this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, this._hls.nextAutoLevel);
                                }
                                this.setChangingView(false);
                                this._display.replaceVideo(r);
                                this._display.updateVideoArrangement(this._manifest.multiview_list[this._view].main_position, this._manifest.multiview_list[this._view].sub_positions);
                                this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                                    wait: false,
                                    wait_on: RICH360_WAIT_ON.RICH360_SEEK
                                });
                            }.bind(this), K >= 0 ? K : 0);
                        }.bind(this);
                        r.addEventListener('seeked', E, {
                            once: true
                        });
                        r.volume = 0;
                        var F = function J() {
                                console.log('seekIfPossible');
                                var K = r.buffered,
                                    L = u.currentTime + 0.5 - x;
                                console.log('targetTime : ' + L + ' = ' + u.currentTime + ' + 0.5 - ' + x);
                                var M = 0;
                                for (; M < K.length; M++) {
                                    console.log('start(' + M + ') : ' + K.start(M));
                                    console.log('end(' + M + ') : ' + K.end(M));
                                    if (K.start(M) <= L && L + 1 <= K.end(M)) {
                                        r.currentTime = L;
                                        break;
                                    }
                                }
                                if (M != K.length) {
                                    console.log('clearInterval');
                                    clearInterval(G);
                                    clearTimeout(H);
                                }
                            },
                            G = setInterval(F, 100),
                            H = setTimeout(function() {
                                console.warn('5 second limit');
                                var K = r.buffered,
                                    L = u.currentTime + 0.5 - x,
                                    M = 0,
                                    N = 0,
                                    O = 0;
                                for (O = 0; O < K.length; O++) {
                                    if (K.start(O) > L) {
                                        M = K.start(O);
                                    }
                                    K.end(O) > N && (N = K.end(O));
                                }
                                if (M) r.currentTime = M + 0.5;
                                else {
                                    r.currentTime = N - 1;
                                }
                                console.log('clearInterval');
                                clearInterval(G);
                            }, 5000);
                    }.bind(this);
                    r.addEventListener('canplaythrough', function(u) {
                        r.readyForChange = true;
                        if (q.readyForChange) s();
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
            value: function k(l) {
                var m = document.createElement('canvas'),
                    n = m.getContext('2d'),
                    o = $('#mvMainDiv'),
                    p = $('#mvMainDiv video');
                m.width = p.width();
                m.height = p.height();
                var q = p[0],
                    r = q.videoWidth,
                    s = q.videoHeight;
                n.drawImage(p[0], Math.round(l.x * r), Math.round(l.y * s), Math.round(l.width * r), Math.round(l.height * s), 0, 0, o.width(), o.height());
                return m.toDataURL();
            }
        }, {
            key: 'changeSingleView',
            value: function l(m) {
                var n = this._video.currentTime;
                this._subtitleManager._prevSubtitleTrack = this.subtitleTrack;
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
                this._video.addEventListener('loadedmetadata', function(r) {
                    this.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
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
                n && this.requestKMVManifest(function() {
                    if (isIOS()) {
                        this._video = null;
                        this.initialize();
                    } else {
                        this._hls.loadSource(n);
                        this._hls.attachMedia(this._player._video);
                    }
                    this.updateThumbnail();
                    this._options.content_data.use_vod && this._listener.trigger(RICH360_EVENTS.RICH360_GRID_THUMBNAIL_UPDATE, this._manifest.thumbnail_grid);
                }.bind(this));
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
                    s.track.mode == 'showing' && (s.track.mode = 'hidden');
                } else {
                    s.track.mode == 'hidden' && (s.track.mode = 'showing');
                }
                u.removeEventListener('cuechange', this.updateNativeTrackCuesListener);
                u.addEventListener('cuechange', this.updateNativeTrackCuesListener);
                if (this._options.use_multiview) {
                    this.subtitleTrack = this._subtitleManager._prevSubtitleTrack;
                }
            }
        }, {
            key: 'updateNativeTrackCuesListener',
            value: function s(t) {
                if (this._subtitleManager._isHideDefaultSubtitles) t.target.mode == 'showing' && (t.target.mode = 'hidden');
                else {
                    t.target.mode == 'hidden' && (t.target.mode = 'showing');
                }
                if (t.target.cues.length) {
                    var u = t.target.cues.length,
                        v = [];
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
                    this._hls._isDummy && (this.subtitleTrack = this._subtitleManager._prevSubtitleTrack);
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
                            this._subtitleManager._prevSubtitleTrack = this.subtitleTrack;
                        }
                        this._subtitleManager.showDefaultSubtitle();
                    } else if (u.type == 'webkitendfullscreen') {
                        $('body').removeClass('fullscreen');
                        this._options.use_multiview && this.changeSingleView(false);
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
            key: 'attachHlsListeners',
            value: function u() {
                this._hls.on(Hls.Events.ERROR, function(v, w) {
                    if (w.fatal) switch (w.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log('fatal network error encountered, try to recover');
                            this._hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            var x = this._video.currentTime;
                            console.log('fatal media error encountered, try to recover');
                            if (w.details == Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR) {
                                console.log('this is not a media error, try to recover');
                                this._hls.startLoad();
                            } else {
                                this._hls.recoverMediaError();
                                this.play_on();
                            }
                            this._video.currentTime = x;
                            break;
                        default:
                            this._hls.destroy();
                            break;
                    }
                }.bind(this));
                this._hls.on(Hls.Events.MANIFEST_PARSED, function() {
                    this._quality_list = [];
                    var v = this._hls.levels;
                    for (var w in v) {
                        this._quality_list.push(v[w]);
                    }
                    this._listener.trigger(RICH360_EVENTS.RICH360_STATE_CHANGE, RICH360_STATE.RICH360_READY);
                    this._ready_state = RICH360_STATE.RICH360_READY;
                }.bind(this));
                this._hls.on(Hls.Events.LEVEL_SWITCHED, function(v, w) {
                    this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                        wait: false,
                        wait_on: RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
                    });
                    this._listener.trigger(RICH360_EVENTS.RICH360_QUALITY_CHANGE, w.level);
                }.bind(this));
                this._hls.on(Hls.Events.NON_NATIVE_TEXT_TRACKS_FOUND, function(v, w) {
                    for (var x = 0; x < w.tracks.length; x++) {
                        this._subtitleList.push({
                            id: x,
                            label: w.tracks[x].label,
                            lang: w.tracks[x].subtitleTrack.lang
                        });
                    }
                    this._listener.trigger(RICH360_EVENTS.RICH360_SUBTITLE_FOUND);
                }.bind(this));
                this._hls.on(Hls.Events.CUES_PARSED, function(v, w) {
                    if (this._subtitleManager) {
                        var x = w.cues.length,
                            y = [];
                        for (var z = 0; z < x; z++) {
                            y.push({
                                startTime: w.cues[z].startTime,
                                endTime: w.cues[z].endTime,
                                text: w.cues[z].text,
                                track_num: this._hls._hls.subtitleTrack,
                                view: this._view
                            });
                        }
                        this._subtitleManager.addCueData(y);
                    }
                }.bind(this));
            }
        }, {
            key: 'attachPlayerUiListners',
            value: function v() {
                if (this._hls._isDummy) {
                    $(this._ui.fullBtn).on('click', function() {
                        this._subtitleManager.showDefaultSubtitle();
                        !this._video.paused && this._video.webkitEnterFullscreen();
                    }.bind(this));
                } else this._ui.fullScreen = new FullscreenButton(this._rich360Player, this._ui.fullBtn);
            }
        }, {
            key: 'changeCurrentLevel',
            value: function w(x) {
                var y = this._hls.currentLevel;
                (x != -1 && y != x || x == -1 && this._hls.nextAutoLevel != y) && this._listener.trigger(RICH360_EVENTS.RICH360_WAIT, {
                    wait: true,
                    wait_on: RICH360_WAIT_ON.RICH360_QUALITY_CHANGE
                });
                this._hls.currentLevel = x;
            }
        }, {
            key: 'play',
            value: function x() {
                this.play_on();
                this._logger.addLog({
                    event: 'play'
                });
            }
        }, {
            key: 'pause',
            value: function y() {
                this.pause_on();
                this._logger.addLog({
                    event: 'pause'
                });
            }
        }, {
            key: 'currentPosition',
            get: function z() {
                return this._video.currentTime;
            },
            set: function A(B) {
                if (!isNaN(this._video.duration)) {
                    if (0 > B) B = 0;
                    if (B > this._video.duration) B = this._video.duration;
                    if (Math.abs(B - this._video.currentTime) > 0.5) {
                        this._video.currentTime = B;
                        this._logger.addLog({
                            event: 'seek',
                            time: B
                        });
                        this._render_once_on_seek = true;
                    }
                } else {
                    console.log('isNan');
                }
            }
        }, {
            key: 'duration',
            get: function B() {
                return this._video.duration;
            }
        }, {
            key: 'volume',
            get: function C() {
                return this._video.volume;
            },
            set: function D(E) {
                return this._video.volume = E;
            }
        }, {
            key: 'quality',
            get: function E() {
                return this._hls.currentLevel;
            },
            set: function F(G) {
                if (G < -1) G = -1;
                if (G >= this._quality_list.size) G = this._quality_list.size;
                this.changeCurrentLevel(G);
                this._logger.addLog({
                    event: 'quality_change',
                    level: G
                });
            }
        }, {
            key: 'isAutoQuality',
            get: function G() {
                return this._hls.isAutoQuality();
            }
        }, {
            key: 'qualityList',
            get: function H() {
                return this._quality_list;
            }
        }, {
            key: 'subtitleTrack',
            get: function I() {
                if (this._hls._isDummy) {
                    var J = this._video.textTracks.length;
                    for (var K = 0; K < J; K++) {
                        if (this._video.textTracks[K].mode == 'showing' || this._video.textTracks[K].mode == 'hidden') {
                            return K;
                        }
                    }
                    return -1;
                } else return this._hls._hls ? this._hls._hls.subtitleTrack : -1;
            },
            set: function J(K) {
                if (this._hls._isDummy) {
                    var L = this._video.textTracks.length;
                    for (var M = 0; M < L; M++) {
                        K == M ? this._video.textTracks[M].mode = 'showing' : this._video.textTracks[M].mode = 'disabled';
                    }
                } else this._hls._hls.subtitleTrack = K;
                this._subtitleManager.clearCueData();
            }
        }, {
            key: 'subtitleList',
            get: function K() {
                return this._subtitleList;
            }
        }, {
            key: 'setChangingView',
            value: function L(M) {
                var N = this._display,
                    O = M;
                if (typeof M === 'undefined') O = false;
                this._changingView = O;
                if (!N) return;
                if (!N._wrapperList) return;
                O ? addClassName(N._wrapperList, 'changing-source') : removeClassName(N._wrapperList, 'changing-source');
            }
        }]);
        return a;
    }(),
    Rich360SubtitleManager = function() {
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
            this._prevViewId = -1;
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
                    if (this._prevViewId == this._cues[g].view) {
                        this._cues[g].startTime += this._prevViewOffsetTime;
                        this._cues[g].endTime += this._prevViewOffsetTime;
                    }
                    if (this._player._video.currentTime > this._cues[g].endTime && !this._player._options.content_data.use_vod) {
                        this._cues.splice(g, 1);
                        g--;
                        continue;
                    }
                    if (this._player._video.currentTime >= this._cues[g].startTime && this._player._video.currentTime < this._cues[g].endTime) {
                        var h = false;
                        for (var k = 0; k < f.length; k++) {
                            f[k].startTime == this._cues[g].startTime && f[k].endTime == this._cues[g].endTime && (h = true);
                        }!h && f.push({
                            startTime: this._cues[g].startTime,
                            endTime: this._cues[g].endTime,
                            text: this._cues[g].text
                        });
                    }
                }
                if (!f.length) {
                    this._subtitleDiv.innerHTML = '';
                    this._subtitleDiv.style.display = 'none';
                    return;
                }
                var l = this._player._parent_dom.offsetWidth,
                    m = this._player._parent_dom.offsetHeight,
                    n = {
                        left: l / 100 * 10,
                        bottom: m / 100 * 5
                    };
                if (document.getElementById('playerBottomWrap').style.display != 'none') {
                    var o = document.getElementById('playerBottomWrap').clientHeight;
                    document.getElementById('playerBottomWrap').clientWidth < 812 && (o = 0);
                    n.bottom += o;
                }
                if (!this._player._hls._isDummy) {
                    if (parseInt(this._subtitleDiv.style.left.replace('px', '')) == parseInt(n.left) && parseInt(this._subtitleDiv.style.bottom.replace('px', '')) == parseInt(n.bottom) && this._player._hls._hls.subtitleTrack == this._subtitleTrack && this.compareArray(this._subtitleArr, f)) return;
                }
                var p = l / 100 * 50,
                    q = l / 100 * 80,
                    r = l / 100 * 2.5;
                if (l < 568) r = l / 100 * 3.2;
                else {
                    if (l > 1000) {
                        r = l / 100 * 2.2;
                    }
                }
                var s = 2,
                    t = 0,
                    u = [];
                for (var g = 0; g < f.length; g++) {
                    var v = f[g].text.split('\n'),
                        w = v.length;
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
                if (this._player._hls._isDummy) this._subtitleTrack = this.getVideoSubtitleTrack();
                else {
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
                    if (l > -1) h.splice(l, 1);
                });
                i = h.length == 0;
                return i;
            }
        }, {
            key: 'measureText',
            value: function g(h, i) {
                var j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15625, 0.3, 0.4, 0.7, 0.6, 0.9, 0.7, 0.2, 0.4, 0.4, 0.4, 0.6, 0.3, 0.4, 0.3, 0.5, 0.6, 0.55625, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.3, 0.3, 0.6, 0.6, 0.6, 0.6, 1.1, 0.8, 0.7, 0.8, 0.7234375, 0.7, 0.6109375, 0.8, 0.7234375, 0.3, 0.5, 0.8, 0.6, 0.834375, 0.7234375, 0.8, 0.7, 0.8, 0.8, 0.7, 0.8, 0.7234375, 0.8, 1.1, 0.8, 0.8, 0.8, 0.3, 0.5, 0.3, 0.6, 0.7, 0.334375, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5, 0.6, 0.6, 0.2234375, 0.3234375, 0.6, 0.2234375, 0.834375, 0.6, 0.6, 0.6, 0.6, 0.4, 0.5, 0.4, 0.6, 0.7, 0.9, 0.7, 0.7, 0.6, 0.5, 0.2609375, 0.5, 0.6],
                    k = 1.2;
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
                        if (this._player.subtitleTrack != -1) {
                            var j = new Date();
                            if (this._bfSendSubTime.getTime() + 10000 < j) {
                                var k = this._player.subtitleTrack;
                                this._player.subtitleTrack = -1;
                                this._bfSendSubTime = j;
                                setTimeout(function() {
                                    this._player.subtitleTrack = k;
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
                    if (this._player._video.textTracks[k].mode == 'showing' || this._player._video.textTracks[k].mode == 'hidden') return k;
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
                    this._player._video.textTracks[m].mode == 'hidden' && (this._player._video.textTracks[m].mode = 'showing');
                }
            }
        }]);
        return a;
    }(),
    MultiViewDisplay = function() {
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
            } else this._parent_dom = document.body;
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
            } else this.arrangeVideo();
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
                    var f = _createForOfIteratorHelper(this._videoSubPositions),
                        g;
                    try {
                        for (f.s(); !(g = f.n()).done;) {
                            var h = g.value;
                            if (h.singleview_id == this._player._view) {
                                e = h;
                                break;
                            }
                        }
                    } catch (z) {
                        f.e(z);
                    } finally {
                        f.f();
                    }
                }
                var i = this._video.videoWidth,
                    j = this._video.videoHeight;
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
                var m, n, o, q;
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
                var r = m / e.width,
                    s = n / e.height,
                    t = e.x * i * r / i,
                    u = e.y * j * s / j;
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
                    var j = this._video,
                        k = this._videoSubPositions,
                        l = this._multiviewCtx[0],
                        m = parseInt($(this._multiviewDivArr[0]).css('margin-bottom').replace('px', '')),
                        n = parseInt($(this._multiviewDivArr[0]).css('margin-left').replace('px', '')),
                        o = false;
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
                            var v = i._multiviewDivArr[u],
                                w = k.find(function(H) {
                                    return H.singleview_id === u;
                                });
                            i.selectedMultiviewCanvas(u);
                            if (w == null) return;
                            var z = w.x,
                                A = w.y,
                                B = w.width,
                                C = w.height,
                                D = j.videoWidth,
                                E = j.videoHeight,
                                F = v.offsetWidth,
                                G = v.offsetHeight;
                            l.drawImage(j, Math.round(z * D), Math.round(A * E), Math.round(B * D), Math.round(C * E), 0, G * u + m * u, F, G);
                        }.bind(this));
                        var q = this._multiviewCanvas[0],
                            r = this._doubleBufferCanvas[0];
                        r.width = q.width;
                        r.height = q.height;
                        r.getContext('2d', {
                            alpha: false
                        }).drawImage(q, 0, 0);
                        l.drawImage(r, 0, 0);
                    }
                    this._canvasTimeStampIndex++;
                    this._canvasTimeStampIndex >= 100 && (this._canvasTimeStampIndex = 0);
                    var s = 0;
                    if (this._canvasTimeStamps.length < 100) this._canvasTimeStamps.push(h);
                    else {
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
    }(),
    RSAnd = 'https://api.liveconnect.co.kr',
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
                            a[a.length - 1] == '|' && (a = a.substr(0, a.length - 1));
                            b = true;
                            if (d) d();
                        }
                    }
                };
                e.send();
            },
            filteringChatText: function d(e) {
                if (!b) return;
                var f = 'gi',
                    g = new RegExp(a, f);
                return e.replace(g, '***');
            },
            checkFilteringData: function e() {
                return b;
            },
            checkNickname: function f(g) {
                if (!b) return;
                var h = 'gi',
                    i = new RegExp(a, h);
                return i.test(g);
            }
        };
    }(),
    NicknameFilter = function() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Tira,
            b = '';
        if (a == '210424_mamamoo') {
            b = '솔라, SOLAR, ソラ, SOLARSIDO, 솔라시도, Solar-sido, 계약, 해체, 에릭남, 개비덥, 알비답, 김진우, 김도훈'.split(',');
            b = b.map(function(c) {
                return c.replace(/ /gi, '');
            }).join('|');
        }
        return {
            hasForbidden: function c(d) {
                if (b === '') return false;
                var e = new RegExp(b, 'gi');
                return e.test(d);
            }
        };
    }(),
    Chat = {},
    CHAT_MSG_SEPARATOR = '|*|',
    CHAT_USERID_SEPARATOR = '|#|',
    NICKNAME_SEPARATOR = '|&|';
Chat.Manager = function() {
    var a = 5,
        b = 10,
        c = 15,
        d = 2000,
        e = '',
        f = b,
        g = a,
        h = null,
        i = 'ch_chat1' + '_' + DCvi,
        j = [],
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
        region: Nierw,
        accessKeyId: Yacaw,
        secretAccessKey: Ytcsw
    });
    var t = null,
        u = {},
        v = '';
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
                    Chat.Manager.checkArtistUser(n) && j.push(m);
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
            !D ? n = getCookie(DCvi + '_user_id') : n = D;
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
            p && (I = p - 1);
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
                            var N = L.messages[M].entry.update,
                                O = N.split(CHAT_USERID_SEPARATOR)[0];
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
            if (p) J.push(j[p - 1]);
            else {
                if (!o) {
                    o = 1;
                }
                for (var K = 0; K < o; K++) {
                    J.push(j[K]);
                }
            }
            s.addListener({
                status: function N(O) {
                    console.log('[STATUS: ' + O.category + ']', 'connected to channels: ' + O.affectedChannels);
                    if (O.category == 'PNConnectedCategory') {
                        ChatFilter.loadChatFilterData();
                        Chat.Manager.initChatInterval();
                    }
                },
                message: function O(P) {
                    if (P.channel == k) Chat.Ui.updateNotice(P.message.update, P.timetoken, P.message.entry);
                    else {
                        if (P.channel == l) Chat.Ui.recvCtrlChMsg(P.message.update);
                        else {
                            var Q = P.message.update.split(CHAT_MSG_SEPARATOR);
                            for (var R = 0; R < Q.length; R++) {
                                var S = Q[R].split(CHAT_USERID_SEPARATOR)[0];
                                if (n == S) continue;
                                Chat.Manager.checkArtistUser(S) ? Chat.Ui.displayMessage(P.message.update, P.timetoken, P.message.entry) : q.push(Q[R]);
                            }
                            q.length && Chat.Manager.displayMessageItv(parseInt(P.timetoken));
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
                    var O = q[0].split(CHAT_USERID_SEPARATOR)[0];
                    Chat.Ui.displayMessage(q[0], K, O);
                    K = parseInt(K) + parseInt(L * 1000 * 10);
                    q.splice(0, 1);
                }
            }, L);
        },
        submitUpdate: function K(L, M, N, O) {
            if (!s) return;
            if (M === v) return;
            if (iCM()) return;
            v = M;
            if (!O) {
                f && f--;
                if (f <= 0) {
                    _availableChating = false;
                    Chat.Ui.disableChatInput(a - g);
                    return;
                } else {
                    _availableChating = true;
                    Chat.Ui.enableChatInput();
                }
            }!Array.isArray(N) && (N = [N]);
            if (Chat.Manager.checkOperationntUser(n) || Chat.Manager.checkAdminUser(n) || Chat.Manager.checkArtistUser(n)) {
                var P = false;
                for (var Q = 1; Q <= N.length; Q++) {
                    s.publish({
                        channel: N[Q - 1],
                        message: {
                            entry: L,
                            update: M
                        }
                    }, function(V, W) {
                        if (V.error) {} else if (Chat.Manager.checkArtistUser(n) && !P) {
                            W && Chat.Ui.displayMessage(M, W.timetoken, n);
                            P = true;
                        }
                    });
                }
            } else {
                var R = {
                    Data: JSON.stringify(M),
                    PartitionKey: N[0],
                    StreamName: 'KINESIS_CHAT'
                };
                t.putRecord(R, function(V, W) {
                    if (V) console.log(V, V.stack);
                    else {
                        console.log(W);
                        var X = new Date();
                        Chat.Ui.displayMessage(M, X.getTime() * 10000);
                    }
                });
            }
        },
        checkOperationntUser: function L(M) {
            if (u.operation_account === M) {
                return true;
            } else {
                return false;
            }
        },
        checkAdminUser: function M(N) {
            if (u.admin_account === N) return true;
            return false;
        },
        checkArtistUser: function N(O) {
            for (var P = 0; P < u.artist_account.length; P++) {
                if (u.artist_account[P] === O) return true;
            }
            return false;
        },
        initChatInterval: function O() {
            h && clearInterval(h);
            h = setInterval(function() {
                g++;
                if (g >= a) {
                    g = 0;
                    f = b;
                }
                if (f <= 0) {
                    Chat.Ui.disableChatInput(a - g);
                } else Chat.Ui.enableChatInput();
            }, 1000);
        },
        getNickName: function P() {
            return e;
        },
        destroy: function Q() {
            if (s) {
                s.destroy();
            }
            s = null;
        }
    };
}();
Chat.Ui = function() {
    var a = 100,
        b = false,
        c = false,
        d = false,
        e = [],
        f = {
            '210417_cix': {
                '84893d8f-e5f9-4a85-a7bb-9028c865488c': {
                    img: 'BX.png',
                    msgClass: ''
                },
                '362762e8-4b89-4fa4-8fa4-a448fadb2c03': {
                    img: 'seunghun.png',
                    msgClass: ''
                },
                'fa73fcc5-2425-45cb-aaa8-eb81ba07170e': {
                    img: 'baejinyoung.png',
                    msgClass: ''
                },
                '36bd9d74-a541-42e8-af1a-efaf063456cd': {
                    img: 'yonghee.png',
                    msgClass: ''
                },
                '37dcc7d7-a844-408f-aed7-3478464f94ff': {
                    img: 'hyunsuk.png',
                    msgClass: ''
                }
            }
        };
    return {
        initChatUIEvent: function g() {
            var h = false;
            $('#chatContentWrap .scroll-bar').on('touchstart', function() {
                b = true;
            });
            $('#chatList').on('touchstart', function(i) {
                h = true;
            });
            $(document).on('touchmove', function(i) {
                console.log('touchmove');
                if (h) {
                    b = true;
                }
            });
            $(document).on('touchend', function(i) {
                h = false;
                console.log('touchmove');
            });
            $('#chatList').on('wheel', function(i) {
                i.originalEvent.deltaY < 0 && (b = true);
            });
            $('#chatList').on('scroll', function() {
                if (d) return;
                var i = $('#chatAnchor'),
                    j = $('#chatList'),
                    k = function r() {
                        return Math.ceil(j.scrollTop() + j.height());
                    },
                    l = function s() {
                        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : k();
                        return t < j[0].scrollHeight;
                    },
                    m = function t() {
                        i.css('display', 'block');
                        b = true;
                    };
                if (l()) setTimeout(function() {
                    return l() && m();
                }, 200);
                else {
                    i.css('display', 'none');
                    b = false;
                    if (e.length !== 0) {
                        var n = document.createDocumentFragment(),
                            o = e.reverse();
                        for (var p = 0, q = o.length; p < q; p++) {
                            if (a <= p) break;
                            n.prepend(o[p]);
                        }
                        j.find('.user_chat:eq(-1)').css('margin-bottom', '1.25em');
                        j.append(n);
                        if (navigator.userAgent.indexOf('Firefox') === -1) j.find('.user_chat:eq(-1)').css('margin-bottom', '0');
                        j.scrollTop(j[0].scrollHeight);
                        e = [];
                    }
                }
            });
            $('#chatAnchor').on('click', function() {
                $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
                $('#chatAnchor').css('display', 'none');
            });
            $('#chatSendBtn').on('click', function() {
                var i = Chat.Manager.getNickName(),
                    j = Chat.Manager.getUserId();
                if (!i) {
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                    return;
                }
                var k = $('#chatInput').val();
                if (!k || !ChatFilter.checkFilteringData()) {
                    return;
                }
                if (Chat.Manager.checkOperationntUser(j)) Chat.Manager.submitUpdate(j, k, Chat.Manager.getNoticeChannel());
                else {
                    if (Chat.Manager.checkAdminUser(j)) {
                        Chat.Manager.submitUpdate(j, k, Chat.Manager.getCtrChannel());
                    } else {
                        var l = ChatFilter.filteringChatText(k);
                        Chat.Manager.submitUpdate(j, j + CHAT_USERID_SEPARATOR + i + NICKNAME_SEPARATOR + l, Chat.Manager.getChatChannels());
                    }
                }
                $('#chatInput').val('');
            });
            $('#chatInput').on('keydown', function(i) {
                if (i.keyCode == 13) {
                    $('#chatSendBtn').click();
                    return false;
                }
            });
            $('#chatInput').on('focus', function(i) {
                delayStopLoadingPanel();
            });
            $('#chatInput').on('blur', function(i) {
                delayStopLoadingPanel();
            });
        },
        setResizingPage: function h(i) {
            d = i;
        },
        updateNotice: function i(j, k, l) {
            if (Chat.Manager.checkOperationntUser(l)) {
                if (j === '[delete]') {
                    $('#noticeChatWrap p[name=desc]').text('');
                    $('#noticeChatWrap').css('display', 'none');
                } else {
                    $('#noticeChatWrap p[name=desc]').text(j);
                    $('#noticeChatWrap').css('display', 'block');
                }
            }
        },
        recvCtrlChMsg: function j(k) {
            if (k.indexOf('[warning]') === 0) {
                var l = k.split('[warning]')[1];
                l == Chat.Manager.getUserId() && alertPopup(gettext('P_ALERT_TITLE'), '<' + _contentData.web_title + '>의 라이브가 진행중입니다.', gettext('P_ALERT_OK'));
            } else {
                if (k.indexOf('[ticket_exposure]') === 0) {
                    var m = k.split('[ticket_exposure]')[1].split('|&|'),
                        n = m[0],
                        o = m[1],
                        p = parseInt(m[2]) * 1000;
                    setTicketExposureItv(n, o, p);
                }
            }
        },
        convertChatMsg: function k(l) {
            if (!l) return false;
            var m = l.split(CHAT_USERID_SEPARATOR);
            if (m.length < 2) return false;
            var n = m[0];
            m = m[1].split(NICKNAME_SEPARATOR);
            if (m.length < 2) return false;
            var o = m[0],
                p = m[1];
            if (!n || !o || !p) {
                return false;
            }
            return {
                userId: n,
                nickName: o,
                text: p
            };
        },
        createArtistChatDiv: function l(m, n, o, p) {
            var q = $('.dummy-wrap > .artist_chat_dummy').clone();
            q.removeClass('artist_chat_dummy');
            var r = f[Tira] || {},
                s = r[m] || null;
            if (s) {
                s.img && q.find('img').attr('src', '/static/imgs/c_event/' + Tira + '/' + s.img);
                s.msgClass && q.find('.user_msg').addClass(s.msgClass);
            }
            q.find('p[name=nickname]').text(n);
            q.find('p[name=text]').text(o);
            q.find('p[name=text]').append('<span class="chat_time fc_fff fs_12" style="vertical-align: baseline;">' + p.format(' ap&nbsp;hh:mm:ss') + '</span>');
            return q;
        },
        createUserChatDiv: function m(n, o, p, q) {
            var r = $('.dummy-wrap > .user_chat_dummy').clone();
            if (n == Chat.Manager.getUserId()) {
                r.addClass('t_my');
            }
            r.removeClass('user_chat_dummy');
            r.find('p[name=nickname]').text(o);
            r.find('span[name=text]').text(p);
            r.find('span[name=time]').text(q.format('ap hh:mm:ss'));
            return r;
        },
        displayMessage: function n(o, p, q, r) {
            var s = Chat.Ui.convertChatMsg(o);
            if (!s) return;
            var t = new Date(p / 10000);
            if (Chat.Manager.checkArtistUser(q)) {
                u = Chat.Ui.createArtistChatDiv(q, s.nickName, s.text, t);
                b ? e.push(u[0]) : $('#chatList').append(u);
                $('#artistChatList').length && !r && $('#artistChatList').append(u.clone());
            } else {
                if (q) {
                    var u = Chat.Ui.createUserChatDiv(q, s.nickName, s.text, t);
                    if (b) {
                        e.push(u[0]);
                    } else $('#chatList').append(u);
                } else {
                    b = false;
                    $('#chatAnchor').css('display', 'none');
                    var u = Chat.Ui.createUserChatDiv(Chat.Manager.getUserId(), s.nickName, s.text, t);
                    $('#chatList').append(u);
                }
            }
            $('#chatList .user_chat').css('margin-bottom', '1.25em');
            $('#artistChatList').length && $('#artistChatList .user_chat').css('margin-bottom', '1.25em');
            if (navigator.userAgent.indexOf('Firefox') === -1) {
                $('#chatList .user_chat:eq(-1)').css('margin-bottom', '0');
                if ($('#artistChatList').length) {
                    $('#artistChatList .user_chat:eq(-1)').css('margin-bottom', '0');
                }
            }
            if ($('#chatList').find('div').length > a) {
                var v = $('#chatList').find('div').length - a;
                for (var w = 0; w < v; w++) {
                    $('#chatList').find('div:eq(0)').remove();
                }
            }
            if (!c && (!q || !b)) {
                $('#chatList').scrollTop($('#chatList')[0].scrollHeight);
                $('#artistChatList').length && $('#artistChatList').scrollTop($('#artistChatList')[0].scrollHeight);
            } else {
                $('#chatAnchor').css('display', 'block');
            }
        },
        displayArtistHistoryMsg: function o(p, q, r) {
            var s = Chat.Ui.convertChatMsg(p);
            if (!s) return;
            if (Chat.Manager.checkArtistUser(r)) {
                var t = new Date(q / 10000),
                    u = Chat.Ui.createArtistChatDiv(r, s.nickName, s.text, t);
                if ($('#artistChatList').length) {
                    $('#artistChatList').append(u);
                }
            }
        },
        enableChatInput: function p() {
            if ($('#chatInput').prop('readonly') != false) {
                $('#chatInput').prop('readonly', false);
                $('#chatInput').prop('placeholder', gettext('P_CHAT_INPUT_PLACEHOLDER'));
            }
        },
        disableChatInput: function q(r) {
            $('#chatInput').prop('readonly', true);
            if (r) {
                $('#chatInput').prop('placeholder', interpolate(gettext('P_CHAT_ABLE_DELAY_PLACEHOLDER_%(delay)s'), {
                    delay: r
                }, true));
            } else $('#chatInput').prop('placeholder', '');
        },
        setHoldChatScroll: function r(s) {
            c = s;
        },
        getHoldChatScroll: function s() {
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
            a--;
            chatTest(c);
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
            var c = $('#chatInput'),
                d = $('#chatSendBtn');
            if (typeof b !== 'undefined') a = b;
            if (b) c.val('');
            c.prop('placeholder', a ? gettext('CHAT_PLACEHOLDER_ON_MUTE') : gettext('P_CHAT_INPUT_PLACEHOLDER'));
            c.attr('disabled', a);
            d.attr('disabled', a);
            return a;
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
        d.setAttribute('id', 'wmark');
        b.append(d);
    }
    if (a) {
        $('#wmark').css('background-image', 'url(' + a + ')');
        _wmarkImgUrl = a;
    } else $('#wmark').css('background-image', 'url(' + _wmarkImgUrl + ')');
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
        m = n / e;
        k = (h - n) / 2;
    } else {
        var n = j;
        m = n / f;
        l = (i - n) / 2;
    }
    m > 1 && (m = 1);
    var o = 180,
        p = 29;
    $('#wmark').css('width', o * m + 'px');
    $('#wmark').css('height', p * m + 'px');
    var q = 20;
    $('#wmark').css('top', q * m + l + 'px');
    $('#wmark').css('right', q * m + k + 'px');
}
var _ticketPos = {
        x: 0,
        y: 0
    },
    _ticketExposureTime = 0,
    _ticketExposureItv = null;

function setTicketExposureItv(a, b, c) {
    if (a !== undefined) {
        _ticketPos.x = a;
    }
    b !== undefined && (_ticketPos.y = b);
    c !== undefined && (_ticketExposureTime = c);
    _ticketExposureItv && clearInterval(_ticketExposureItv);
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
    var a = $('#playerWrap'),
        b = document.getElementsByTagName('video')[0];
    if (!b) return;
    $('#mvMainDiv').length && (a = $('#mvMainDiv'));
    if (!$('#ticketDiv').length) {
        var c = document.createElement('div');
        c.setAttribute('id', 'ticketDiv');
        a.append(c);
    }
    var d = $('#ticketDiv'),
        e = 1920;
    !e && (e = 1920);
    var f = 1080;
    if (!f) {
        f = 1080;
    }
    var g = e / f,
        h = a.width(),
        i = a.height(),
        j = h / g,
        k = 0,
        l = 0,
        m = 0;
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
    var o = 220,
        p = 40,
        q = 32;
    d.css('width', o * m + 'px');
    d.css('height', p * m + 'px');
    d.css('top', (i - l) * _ticketPos.y + l / 2 + 'px');
    d.css('left', (h - k) * _ticketPos.x + k / 2 + 'px');
    d.css('font-size', q * m + 'px');
    d.css('display', 'block');
    d.text(getCookie(DCvi + '_ticket_id'));
}
var _player = null,
    IS_SINGLEVIEW_ON_MULTIVIEW = isom == 'True' ? true : false,
    USE_MULTIVIEW = umtv == 'True' ? true : false,
    PARAM_SINGLEVIEW_ON_MULTIVIEW = '?single_view=true';
(function(a) {
    function b() {
        a('#sliderPaddingDiv').width(a('#playerSliderArea').width());
    }

    function c() {
        injectDeviceContentHeightToCSS();
        b();
        updateTicketDivPos();
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
        console.log('@@@ Single View on Multiview::', IS_SINGLEVIEW_ON_MULTIVIEW);
        console.log('@@@ Multiview::', USE_MULTIVIEW);
        if (USE_MULTIVIEW) {
            a('body').addClass('multiview');
        }
    }
    a(document).ready(function() {
        e();
        var f = 'keyboard-show-by-chat-input',
            g = null,
            h = isIpadOS() && isChrome();
        addClassToElementByEnv();
        injectDeviceContentHeightToCSS();
        a(window).on('orientationchange', function() {
            console.log('EVENT::orientationchange');
            injectDeviceContentHeightToCSS();
        });
        a(window).resize(debounce(function() {
            console.log('EVENT::resize');
            Chat.Ui.setResizingPage(true);
            isIpadOS() && (document.getElementsByTagName('video')[0].style.display = 'none');
            c();
            a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            setTimeout(function() {
                c();
                a('#chatAnchor').css('display', 'none');
                Chat.Ui.setResizingPage(false);
            }, 500);
            setTimeout(function() {
                isIpadOS() && (document.getElementsByTagName('video')[0].style.display = 'block');
                c();
                a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            }, 1000);
        }, 200));
        a('#chatInput').on('focus', function() {
            console.log('EVENT::#chatInput::focus');
            isIpadOS() && isChrome() && document.body.classList.add(f);
        });
        a('#chatInput').on('blur', function() {
            console.log('EVENT::#chatInput::blur');
            isIpadOS() && isChrome() && document.body.classList.remove(f);
        });
        a('.scrollbar-inner').scrollbar();
        a('#noticeChatWrap button[name=closebtn]').on('click', function() {
            a('#noticeChatWrap').css('display', 'none');
        });
        a('#qualityPopup button[name=closebtn]').on('click', function() {
            a('#qualityPopup').css('display', 'none');
        });
        a('#subtitlePopup button[name=closebtn]').on('click', function() {
            a('#subtitlePopup').css('display', 'none');
        });
        var i = new Menu({
                wrapper: '#o-wrapper',
                type: 'slide-right',
                menuOpenerClass: '.c-button',
                maskId: '#c-mask'
            }),
            j = document.querySelector('#chat-i-pushy');
        j.addEventListener('click', function(o) {
            o.preventDefault();
            i.open();
            j.style.display = 'none';
            a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
        });
        i.open();
        a('#chatCloseBtn').on('click', function() {
            a('#playerBottomWrap').css('display', 'block');
            a('#chat-i-pushy').css('display', 'block');
            return true;
        });
        var k = {
                container: document.getElementById('playerWrap'),
                use_multiview: false
            },
            l = {
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
            },
            m = {
                user_id: getCookie(DCvi + '_user_id'),
                device_id: getCookie(DCvi + '_device_id'),
                content_id: DCvi
            };
        userSessionCheck(m, function(o) {
            var p = k.content_data = JSON.parse(JSON.stringify(o.Data.content)),
                q = JSON.parse(JSON.stringify(o.Data.user)),
                r = p.cam_num > 1;
            IS_SINGLEVIEW_ON_MULTIVIEW && (r = false);
            iCM(!!q.is_mute);
            if (!p.artist_account) a('button[name=artistchatnavbtn]').css('display', ' none');
            else {
                if (p.artist_account.indexOf(',') !== -1) {
                    p.artist_account = p.artist_account.split(',');
                } else p.artist_account = [p.artist_account];
                a('button[name=artistchatnavbtn]').css('display', ' inline-block');
            }
            if (r) {
                k.multiViewList = document.getElementById('multiViewList');
                k.use_multiview = true;
                a('button[name=multiviewnavbtn]').css('display', 'inline-block');
            } else {
                a('button[name=multiviewnavbtn]').css('display', 'none');
            }
            Chat.Manager.setContentData(p);
            if (Chat.Manager.isChatUsed()) {
                if (!q.nickname) {
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_INVALID_NICKNAME_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                    return;
                } else {
                    a('#pageWrap').removeClass().addClass('pl-t-default');
                    a('#chatWrap').css('display', 'block');
                    Chat.Manager.setPubnubAPI(q.nickname);
                }
            } else {
                a('#pageWrap').removeClass().addClass('pl-t-default_nochat');
                a('#chatWrap').css('display', 'none');
            }
            if (p.use_vod) {
                a('#playerBottomWrap').addClass('ver_vod');
                a('.pl-i-live').css('display', ' none');
                l.durationStart = document.getElementById('durationStart');
                l.durationEnd = document.getElementById('durationEnd');
                l.prev10sBtn = document.getElementById('prev10sBtn');
                l.next10sBtn = document.getElementById('next10sBtn');
                l.sliderArea = document.getElementById('playerSliderArea');
                l.sliderArea.slider = document.getElementById('playerSlider');
                l.sliderArea.slider.thumb = document.getElementById('playerSliderThumb');
                l.sliderThumbnail = document.getElementById('sliderThumbnail');
                l.sliderPaddingDiv = document.getElementById('sliderPaddingDiv');
            } else a('#durationWrap').css('display', 'none');
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
            a(document).on('click', '#playThumbnail button', function() {
                b();
                a(this).parent().css('display', 'none');
                _player.play();
            });
        }, function(o, p) {
            if (p == 400 || p == 401) {
                removeCookie(DCvi + '_user_id');
                removeCookie(DCvi + '_chat_id');
                alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_NOT_EXIST_LOGIN_INFO_DESC'), gettext('P_ALERT_OK'), function() {
                    location.href = LUEz1;
                });
            } else {
                if (p == 403) {
                    removeCookie(DCvi + '_customer_id');
                    removeCookie(DCvi + '_ticket_id');
                    removeCookie(DCvi + '_user_id');
                    removeCookie(DCvi + '_chat_id');
                    alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_END_LIVE_DESC'), gettext('P_ALERT_OK'), function() {
                        location.href = LUEz1;
                    });
                } else alertPopup(gettext('P_ALERT_TITLE'), gettext('P_ALERT_TRY_AGAIN_DESC'), gettext('P_ALERT_OK'), function() {
                    location.href = LUEz1;
                });
            }
        });
        a('button[name=chatnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'block');
            a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            setTimeout(function() {
                a('#chatList').scrollTop(a('#chatList')[0].scrollHeight);
            }, 200);
            if (isMobile()) {
                var o = getOrientation();
                if (typeof o == 'string') {
                    if (o == 'landscape-primary' || o == 'landscape-secondary' || o == 'landscape') {
                        a('#chatInputWrap').css('display', 'block');
                    } else a('#chatInputWrap').css('display', 'block');
                } else a('#chatInputWrap').css('display', 'block');
            } else {
                a('#chatInputWrap').css('display', 'block');
            }
            a('#holdChatScrollLabel').css('display', 'block');
            a('#artistChatWrap').css('display', 'none');
            a('#multiViewWrap').css('display', 'none');
            a('button[name=chatnavbtn]').addClass('on');
            a('button[name=artistchatnavbtn]').removeClass('on');
            a('button[name=multiviewnavbtn]').removeClass('on');
            if (_player) {
                if (_player._options.use_multiview) {
                    _player._player._display.showMultiPreview = false;
                }
            }
        });
        a('button[name=artistchatnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'none');
            a('#chatInputWrap').css('display', 'none');
            a('#holdChatScrollLabel').css('display', 'none');
            a('#artistChatWrap').css('display', 'block');
            a('#multiViewWrap').css('display', 'none');
            a('button[name=chatnavbtn]').removeClass('on');
            a('button[name=artistchatnavbtn]').addClass('on');
            a('button[name=multiviewnavbtn]').removeClass('on');
            a('#artistChatList').scrollTop(a('#artistChatList')[0].scrollHeight);
            a('#chatAnchor').css('display', 'none');
            _player && _player._options.use_multiview && (_player._player._display.showMultiPreview = false);
        });
        a('button[name=multiviewnavbtn]').on('click', function() {
            a('#chatContentWrap').css('display', 'none');
            a('#chatInputWrap').css('display', 'none');
            a('#holdChatScrollLabel').css('display', 'none');
            a('#artistChatWrap').css('display', 'none');
            a('#multiViewWrap').css('display', 'block');
            a('button[name=chatnavbtn]').removeClass('on');
            a('button[name=artistchatnavbtn]').removeClass('on');
            a('button[name=multiviewnavbtn]').addClass('on');
            if (_player) {
                if (_player._options.use_multiview) {
                    _player._player._display.showMultiPreview = true;
                }
            }
        });
        a(document).on('click', '#multiViewList .view_wrap', function() {
            if (_player) {
                if (_player._options.use_multiview) {
                    if (_player._player._video) {
                        if (!_player._player._video.paused) {
                            var o = _player._player.view;
                            _player._player.view = a(this).data().view;
                            a(this).siblings().each(function() {
                                if (o == a(this).data().view) return;
                            });
                            a();
                        }
                    }
                }
            }
        });
        a('#stopChatScrollBtn').on('change', function() {
            Chat.Ui.setHoldChatScroll(!a(this).prop('checked'));
        });
        a('#lockBtn').on('click', function() {
            if (a(this).hasClass('locked')) {
                a(this).removeClass('locked');
                if (!isMobile() && !isTablet() && !isIpadOS()) {
                    a('#volumeBtn').css('display', 'inline-block');
                    a('#volumeSlider').css('display', 'inline-block');
                }
                if ((!isIOS() || isIpadOS()) && d(_player)) a('#qualitySelectBtn').css('display', 'block');
                else {
                    a('#qualitySelectBtn').css('display', 'none');
                }
                _player._player.subtitleList ? _player._player.subtitleList.length && _player._player.subtitleList[0].lang !== '' && a('#ccSelectBtn').css('display', 'block') : a('#ccSelectBtn').css('display', 'none');
                a('#fullBtn').css('display', 'block');
                a('.pl-ctr-wrap').css('visibility', 'visible');
                a('.pl-btm-wrap').css('visibility', 'visible');
            } else {
                a(this).addClass('locked');
                a('#volumeBtn').css('display', 'none');
                a('#volumeSlider').css('display', 'none');
                a('#fullBtn').css('display', 'none');
                a('#ccSelectBtn').css('display', 'none');
                a('#qualitySelectBtn').css('display', 'none');
                a('.pl-ctr-wrap').css('visibility', 'hidden');
                a('.pl-btm-wrap').css('visibility', 'hidden');
            }
        });
        a('#view-type-selector').on('click', '.btn-view-selector', function(o) {
            var p = a(o.target),
                q = null,
                r = window.location.href,
                s = null;
            if (p.hasClass('active')) return;
            q = p.data('view-type');
            if (q === 'singleview') {
                window.location.replace(r + PARAM_SINGLEVIEW_ON_MULTIVIEW);
            } else {
                if (q === 'multiview') {
                    s = r.split(PARAM_SINGLEVIEW_ON_MULTIVIEW);
                    window.location.replace(s[0]);
                }
            }
        });

        function n() {
            if (!document.hidden) {
                c();
            }
        }
        document.addEventListener('visibilitychange', n, false);
    });
})(jQuery);
window.onpopstate = function(a) {
    location.replace(LUEz1);
};
window.onpageshow = function(a) {
    console.log('@@@onpageshow');
    history.pushState({}, '', location.href);
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
            if (f.status == 200 || f.status == 201) d && d(JSON.parse(f.responseText));
            else {
                console.log(f);
                if (f.status == 0) {} else {
                    if (!e) {
                        if (f.responseText) {
                            console.log(JSON.parse(f.responseText));
                        }
                    } else try {
                        var l = JSON.parse(f.responseText);
                        e(l, f.status);
                    } catch (o) {
                        e(f.responseText, f.status);
                    }
                }
            }
        } else {}
    };
    f.ontimeout = function(l) {
        console.log(l);
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
    if (b > -1) return true;
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
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) return true;
        else {
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
    !hasClassName(a, b) && (a.className = a.className ? [a.className, b].join(' ') : b);
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
        if (a.indexOf(navigator.platform.toLowerCase()) < 0) {
            return true;
        } else {
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
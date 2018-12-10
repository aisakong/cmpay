window.problemBankconfigs = {
    pingan: {
        name: "平安银行",
        type: "all",
        status: 0
    }
},
    !
        function() {
            function e(e, t) {
                return (/string|function/.test(typeof t) ? o: r)(e, t)
            }
            function t(e, a) {
                return "string" != typeof e && (a = typeof e, "number" === a ? e += "": e = "function" === a ? t(e.call(e)) : ""),
                    e
            }
            function a(e) {
                return p[e]
            }
            function n(e) {
                return t(e).replace(/&(?![\w#]+;)|[<>"']/g, a)
            }
            function i(e, t) {
                if (u(e)) for (var a = 0,
                                   n = e.length; n > a; a++) t.call(e, e[a], a, e);
                else for (a in e) t.call(e, e[a], a)
            }
            function s(e, t) {
                var a = /(\/)[^\/]+\1\.\.\1/,
                    n = ("./" + e).replace(/[^\/]+$/, ""),
                    i = n + t;
                for (i = i.replace(/\/\.\//g, "/"); i.match(a);) i = i.replace(a, "/");
                return i
            }
            function r(t, a) {
                var n = e.get(t) || l({
                    filename: t,
                    name: "Render Error",
                    message: "Template not found"
                });
                return a ? n(a) : n
            }
            function o(e, t) {
                if ("string" == typeof t) {
                    var a = t;
                    t = function() {
                        return new d(a)
                    }
                }
                var n = c[e] = function(a) {
                    try {
                        return new t(a, e) + ""
                    } catch(n) {
                        return l(n)()
                    }
                };
                return n.prototype = t.prototype = h,
                    n.toString = function() {
                        return t + ""
                    },
                    n
            }
            function l(e) {
                var t = "{Template Error}",
                    a = e.stack || "";
                if (a) a = a.split("\n").slice(0, 2).join("\n");
                else for (var n in e) a += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" == typeof console && console.error(t + "\n\n" + a),
                        t
                }
            }
            var c = e.cache = {},
                d = this.String,
                p = {
                    "<": "&#60;",
                    ">": "&#62;",
                    '"': "&#34;",
                    "'": "&#39;",
                    "&": "&#38;"
                },
                u = Array.isArray ||
                    function(e) {
                        return "[object Array]" === {}.toString.call(e)
                    },
                h = e.utils = {
                    $helpers: {},
                    $include: function(e, t, a) {
                        return e = s(a, e),
                            r(e, t)
                    },
                    $string: t,
                    $escape: n,
                    $each: i
                },
                f = e.helpers = h.$helpers;
            e.get = function(e) {
                return c[e.replace(/^\.\//, "")]
            },
                e.helper = function(e, t) {
                    f[e] = t
                },
                "function" == typeof define ? define(function() {
                    return e
                }) : "undefined" != typeof exports ? module.exports = e: this.template = e
        } (),
    template("tab/template.default",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$each),
                n = e.data,
                i = (e.item, e.index, t.$escape),
                s = e.defaultSelect,
                r = e.selectedClass,
                o = "";
            return o += "<ul> ",
                a(n,
                    function(e, t) {
                        o += ' <li class="',
                            o += i(e.data.isValidChannel ? e.val == s && e.data.isValidChannel ? r: "": "disabled"),
                            o += '" data-type="',
                            o += i(e.val),
                            o += '" title="',
                            o += i(e.data.isValidChannel ? e.txt: e.data.invalidTips),
                            o += '"> <span class="ep-icon ',
                            o += i(e.data.className),
                            o += '"></span> <span class="ep-pay-method-name">',
                            o += i(e.txt),
                            o += "</span> <!--",
                        e.data.tips && (o += '--> <!--<span class="ep-', o += i(e.data.className), o += "-tip ", o += i(t < n.length - 1 ? "ep-" + e.data.className + "-tip-middle": ""), o += '">', o += i(e.data.tips), o += "</span>--> <!--"),
                            o += "--> ",
                        "bank" == e.val && e.data && "1" == e.data.bankModel && (o += ' <p class="ep-pay-method-list-txt">支持个人网银和企业网银</p> '),
                            o += " ",
                        "bank" == e.val && (o += ' <p class="ep-pay-method-list-txt reminder-tip">推荐使用IE浏览器</p> '),
                            o += " ",
                        e.val == s && e.data.isValidChannel && (o += ' <i class="ep-icon ep-icon-selected"></i> '),
                            o += " </li> "
                    }),
                o += " </ul>",
                new String(o)
        }),
    template("channel/template.wrap.default",
        function(e, t) {
            "use strict";
            var a = this,
                n = (a.$helpers, a.$escape),
                i = e.style,
                s = e.data,
                r = function(n, i) {
                    i = i || e;
                    var s = a.$include(n, i, t);
                    return o += s
                },
                o = "";
            return o += '<div class="ep-order-detail"> </div> <div class="ep-pay-method ',
                o += n("mail" == i ? "": "ep-pay-methods"),
                o += '"> <dl> <dt>支付方式：</dt> <dd class="pay-channel ',
                o += n("mail" != i || s.isValidChannel ? "": "disabled"),
                o += '"> ',
                r("./template." + i),
                o += " </dd> </dl> </div>",
                new String(o)
        }),
    template("channel/template.default",
        function(e, t) {
            "use strict";
            var a = this,
                n = (a.$helpers, a.$each),
                i = e.data,
                s = (e.item, e.index, a.$escape),
                r = e.defaultSelect,
                o = e.selectedClass,
                l = function(n, i) {
                    i = i || e;
                    var s = a.$include(n, i, t);
                    return c += s
                },
                c = "";
            return c += '<div class="ep-pay-method-list-tit"> </div> <div class="ep-pay-method-list-con"> ',
                n(i,
                    function(e) {
                        c += ' <div class="con channel-',
                            c += s(e.val),
                            c += " ",
                            c += s(e.data.isValidChannel && e.val == r ? o: ""),
                            c += '"> ',
                            l(e.data.template, e.data),
                            c += " </div> "
                    }),
                c += ' </div> <div class="ep-qrcode-error-tip"> <span class="ep_icon_warning_tip"></span><span class="ep_warning_text"></span> </div>',
                new String(c)
        }),
    template("channel/template.mail",
        function(e, t) {
            "use strict";
            var a = this,
                n = (a.$helpers, a.$escape),
                i = e.txt,
                s = e.data,
                r = e.selectedClass,
                o = function(n, i) {
                    i = i || e;
                    var s = a.$include(n, i, t);
                    return d += s
                },
                l = e.sub,
                c = e.client,
                d = "";
            return d += '<div class="ep-pay-wxpay-tit"><span class="ep-icon ep-icon-wxpay"></span><span>',
                d += n(i),
                d += "</span></div> ",
            s.isValidChannel && (d += ' <div class="ep-pay-main ', d += n(r), d += '"> ', o(s.template, s), d += " </div> "),
                d += ' <div class="ep-qrcode-error-tip"><span class="ep_icon_warning_tip"></span><span class="ep_warning_text"></span></div> <div class="ep-other-pay-notice"> ',
                s.isValidChannel ? (d += " ", l && (d += " 没有", d += n(s.title), d += '？试试&nbsp;<a href="javascript:void(0);" data-type="', d += n(l.val), d += '">', d += n(l.txt), d += "</a> ", l.data.tips && (d += " <span>（", d += n(l.data.tips), d += "）</span> "), d += " "), d += " ") : (d += " ", l ? (d += ' 商品金额超过微信支付限额5w，请使用<a href="javascript:void(0);" data-type="', d += n(l.val), d += '">', d += n(l.txt), d += "</a> ") : (d += ' 商品金额超过微信支付限额5w,请拨打<div class="bind-phone" style="display: inline;">', d += n(c.phone), d += "</div>售前客服热线 "), d += " "),
                d += " </div>",
                new String(d)
        }),
    template("channel/template.qqwallet.default",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$escape),
                n = e.size,
                i = "";
            return i += '<div class="clearfix"> <div class="fl"> <div class="ep-qrcode-loading"><img src="//midas.gtimg.cn/enterprise/images/loading.gif" width="80" height="80"></div> <div class="ep-wxpay-qrcode-wrap hide"><img src="" height="',
                i += a(n),
                i += '" width="',
                i += a(n),
                i += '" class="ep-qqpay-qrcode"></div> <div class="ep-qqpay-qrcode-notice">请打开手机QQ，扫一扫完成支付</div> </div> <div class="fl ep-wxpay-qrcode-tip"><img src="//midas.gtimg.cn/enterprise/images/ep_sys_qq_tip.jpg"></div> </div> ',
                new String(i)
        }),
    template("channel/template.other.default", '<div class="ep-tenpay-con"> <div><img src="//midas.gtimg.cn/enterprise/images/ep_tenpay_con_tip.jpg" height="37" width="128" alt=""></div> <div class="text">在新打开的页面完成支付</div> </div>'),
    template("channel/template.bank.default",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, e.bankModel),
                n = e.epBankPriority,
                i = t.$escape,
                s = t.$each,
                r = e.bankList,
                o = (e.item, e.index, "");
            return o += '<div class="ep-unionpay-con"> ',
                "1" == a ? o += ' <img class="ep-unionpay-img" src="//midas.gtimg.cn/enterprise/images/ep_sys_union_tip_1.jpg" style="width:410px;height: 300px;" alt="银联支付示意图"> ': (o += ' <div class="ep-unionpay-banks"> <div class="layer-neat-l banktype"> <span class="label">银行类型：</span> ', o += n ? ' <label class="selected" data-banktype="epBank" data-action="banktype"> <input type="radio"> <i class="ep-icon ep-icon-radio"></i>企业银行 </label> <label data-banktype="peBank" data-action="banktype"> <input type="radio"> <i class="ep-icon ep-icon-radio"></i>个人银行 </label> ': ' <label class="selected" data-banktype="peBank" data-action="banktype"> <input type="radio"> <i class="ep-icon ep-icon-radio"></i>个人银行 </label> <label data-banktype="epBank" data-action="banktype"> <input type="radio"> <i class="ep-icon ep-icon-radio"></i>企业银行 </label> ', o += ' </div> <div class="mod-bank cf"> <span class="title">选择银行</span> <div class="bank-list epBank" style="display:', o += i(n ? "block": "none"), o += '"> ', s(r.epBank,
                    function(e) {
                        o += ' <label class="bank-logo-wrap" data-bank="',
                            o += i(e.key),
                            o += '" data-action="bank"> <i class="ico_',
                            o += i(e.logo),
                            o += '"></i>',
                            o += i(e.name),
                            o += ' <i class="ep-icon ep-icon-check"></i> </label> '
                    }), o += ' </div> <div class="bank-list peBank" style="display:', o += i(n ? "none": "block"), o += '"> ', s(r.peBank,
                    function(e) {
                        o += ' <label class="bank-logo-wrap" data-bank="',
                            o += i(e.key),
                            o += '" data-action="bank"> <i class="ico_',
                            o += i(e.logo),
                            o += '"></i>',
                            o += i(e.name),
                            o += ' <i class="ep-icon ep-icon-check"></i> </label> '
                    }), o += ' </div> </div> <div class="layer-neat-l cardtype"> <span class="label">选择卡种：</span> <label class="disabled debit" data-action="cardtype" data-cardtype="debit"> <input type="radio"> <i class="ep-icon ep-icon-radio"></i>储蓄卡 </label> <label class="disabled credit" data-action="cardtype" data-cardtype="credit"> <input type="radio"> <i class="ep-icon ep-icon-radio"></i>信用卡 </label> </div> </div> '),
                o += ' <div class="ep-pay-operate"> <a data-action="delay" href="javascript:void(0);" title="立即支付" class="ep-btn ep-btn-blue ',
                o += i("1" == a ? "": "disabled"),
                o += '">立即支付</a> </div> </div>',
                new String(o)
        }),
    template("channel/template.icard.default", '<div class="ep-tenpay-con"> <div><img src="//midas.gtimg.cn/enterprise/images/ep_tenpay_con_tip.jpg" height="37" width="128" alt=""></div> <div class="text">在新打开的页面完成支付</div> </div>'),
    template("channel/template.wechat.default",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$escape),
                n = e.size,
                i = e.refreshSeconds,
                s = "";
            return s += '<div class="clearfix"> <div class="fl"> <div class="ep-qrcode-loading"><img src="//midas.gtimg.cn/enterprise/images/loading.gif" width="80" height="80"></div> <div class="ep-wxpay-qrcode-wrap hide"><img src="" height="',
                s += a(n),
                s += '" width="',
                s += a(n),
                s += '" class="ep-wxpay-qrcode"></div> <div class="ep-wxpay-qrcode-notice">请打开手机微信，扫一扫完成支付</div> </div> <div class="fl ep-wxpay-qrcode-tip"><img src="//midas.gtimg.cn/enterprise/images/ep_sys_wx_tip.jpg"></div> </div> <!--<div class="ep-qrcode-notice">距离二维码过期还剩<em>',
                s += a(i),
                s += "</em>秒，过期后请刷新页面重新获取二维码</div>--> ",
                new String(s)
        }),
    template("channel/template.remitpay.default", '<div class="ep-transfer-panel ep-transfer-panel-wrap"> <div class="ep-transfer-one"> <p class="ep-transfer-tips">请填写您的基本信息，用于核对订单和接收到账信息 </p> <div class="ep-transfer-form"> <div class="row"> <label class="title ep-highlight" id="ep-highlight-label" title="付款人户名">付款人户名： <div class="ep-highlight-tooltip" id="ep-highlight-tooltip"> <p>此处请填写付款的银行卡或账户，在银行开户时的名称（个人或公司全称）</p> <span class="ep-highlight-btn">我知道了</span> </div> </label> <input id="payerName" data-action="payerName" data-pattern="^[\\u4E00-\\u9FA5A-Za-z0-9_\\uff08\\uff09]+$" data-patterntips="付款人户名不能包含标点符号特殊字符和英文括号()" type="text" maxlength="40" minlength="2" class="ui-input" placeholder="填写付款人户名" data-lengthtips="付款人户名最少2个字符，最多40个字符" value=""> <span class="ep-sprite3 ep-icon-right hide"></span> <p class="input-tips hide" style="margin-left: 108px;"></p> </div>       </div> <a href="javascript:void(0);" title="确认并下一步" data-action="delay" class="offline-pay-operate ep-btn ep-btn-blue h42 disabled">确认并下一步</a> <div class="ep-loader hide"><span class="ep-loader-icon"></span>请稍后</div> </div> </div>'),
    template("channel/template.remitpay.context.default",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$escape),
                n = e.payerName,
                i = e.isSeparate,
                s = e.mobileNo,
                r = e.remitpay_bank_openname,
                o = e.remitpay_bank_fullname,
                l = e.bankAccount,
                c = e.remitpay_referece_id,
                d = e.remitpay_order_id,
                p = e.price,
                u = e.showGoTransBtn,
                h = e.showOrderBtn,
                f = "";
            return f += '<div class="ep-transfer-two"> <div class="ep-transfer-panel"> <p class="ep-transfer-tips">请核对您的基本信息 </p> <div class="ep-transfer-form with-split-line"> <div class="row"> <label class="title">付款人户名：</label> <span class="current-input pay-name">',
                f += a(n),
                f += '</span> <a href="javascript:void(0);" data-action="update">修改</a> <div class="',
                f += a(i ? "ep-transfer-confirm-tips": "ep-transfer-confirm-tips ep-iframe"),
                f += '"> <i class="ep-sprite-icon ep-icon-warning ep-click-icon"></i> <div class="ep-confirm-tips-content ep-resident"> <strong>请您再次确认，您/贵公司将以“',
                f += a(n),
                f += '”<br>的银行卡向我司进行转账付款。</strong> <br>提示：若您预留的付款户名和实际付款银行卡户名不一致时，将导致款项会全部原路退回。 <i class="ep-sprite-icon ep-icon-close-s"></i> </div> </div> </div> </div> </div> <p class="ep-transfer-tips with-split-line">请根据以下信息在银行柜台、邮局、网上银行、手机银行办理转账/汇款。确认收款后我们将尽快为您处理订单。 <!--<a href="javascript:void(0)"><span class="ep-sprite3 ep-icon-phone"></span>发送信息到手机&nbsp;',
                f += a(s),
                f += '</a> --> </p> <div class="ep-transfer-payee-info with-split-line"> <div class="row relative"> <span class="title">收款户名</span><b>',
                f += a(r),
                f += '</b><div class="',
                f += a(i ? "ep-transfer-confirm-tips": "ep-transfer-confirm-tips ep-iframe"),
                f += '"> <i class="ep-sprite-icon ep-icon-question"></i> <div class="ep-confirm-tips-content ep-hover"> 腾讯收到银行到账通知后，将在2个工作日内完成发货。 <br> 提示：转账/汇款存在异地或跨行等情况，具体到账时间将以银行的时效为准。若您希望加快到账时效，建议转账时选择“实时”或“快速”模式（可能会产生的手续费由银行收取，具体请参照付款银行收费标准）。 </div> </div> <div class="row"> <span class="title">收款银行</span><i class="ico_cmb"></i><b>',
                f += a(o),
                f += '</b> </div> <div class="row"> <span class="title">收款账号</span><b>',
                f += a(l),
                f += "</b> <!--",
                f += a(c),
                f += "&nbsp;&nbsp;",
                f += a(d),
                f += '--> </div> <div class="row"> <span class="title">收款金额</span><b>',
                f += a(p),
                f += '元</b> <p class="payee-account-tips"> <span class="ep-sprite3 ep-icon-notice"></span>该收款账号仅适用于本次订单，请仔细核对</p> ',
            u && (f += ' <a href="javascript:void(0);" data-action="go-trans" class="ep-btn ep-btn-blue h42">去转账</a> '),
                f += " </div> </div> ",
            h && (f += ' <a href="javascript:void(0);" data-action="order" class="ep-btn ep-btn-blue h42">查看我的订单</a> '),
                f += " </div>",
                new String(f)
        }),
    template("order/template.orderInfo",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$escape),
                n = e.serviceDesName,
                i = e.payOrderId,
                s = e.orderId,
                r = e.hidePrice,
                o = e.isResult,
                l = e.price,
                c = e.payWay,
                d = e.purchaseName,
                p = e.createTime,
                u = "";
            return u += "<dl> <dt>商品名称：</dt> <dd>",
                u += a(n),
                u += "</dd> </dl> ",
                i ? (u += " <dl> <dt>支付订单：</dt> <dd>", u += a(i), u += "</dd> </dl> ") : s && (u += " <dl> <dt>商品订单：</dt> <dd>", u += a(s), u += "</dd> </dl> "),
                u += " ",
            r || (u += " <dl> <dt>", u += o ? "支付": "应付", u += '金额：</dt> <dd><span class="rmb"><i>￥</i>', u += a(l), u += "</span></dd> </dl> "),
                u += " ",
            c && (u += " <dl> <dt>支付方式：</dt> <dd>", u += a(c), u += "</dd> </dl> "),
                u += " ",
            d && (u += " <dl> <dt>购买商家：</dt> <dd>", u += a(d), u += "</dd> </dl> "),
                u += " ",
            p && (u += " <dl> <dt>购买时间：</dt> <dd>", u += a(p), u += "</dd> </dl> "),
                new String(u)
        }),
    template("order/template.separate",
        function(e, t) {
            "use strict";
            var a = this,
                n = (a.$helpers, e.issueUrl),
                i = a.$escape,
                s = e.orderId,
                r = e.price,
                o = e.show,
                l = function(n, i) {
                    i = i || e;
                    var s = a.$include(n, i, t);
                    return c += s
                },
                c = "";
            return c += "<div> ",
            n && (c += ' <div class="ep-question-guide-trigger"><a href="javascript:void(0);" data-action="issue">问题指引</a></div> '),
                c += ' <div class="ep-order-tit"> <dl> <dt>商品订单：</dt> <dd>',
                c += i(s),
                c += '</dd> </dl> </div> <div class="ep-order-tit"> <span>支付金额：<em class="rmb"><i>&yen;</i>',
                c += i(r),
                c += '</em></span> <a href="javascript:void(0);" class="ep-order-view ',
                c += i(o ? "ep-order-active": ""),
                c += '" data-action="expend"><span>订单详情</span><i class="ep-icon ep-icon-arrow"></i></a> </div> <div class="ep-order-con ',
                c += i(o ? "show": "hide"),
                c += '"> ',
                l("./template.orderInfo"),
                c += " </div> </div>",
                new String(c)
        }),
    template("order/template.success.separate",
        function(e, t) {
            "use strict";
            var a = this,
                n = (a.$helpers, a.$escape),
                i = e.title,
                s = e.orderId,
                r = e.price,
                o = e.show,
                l = function(n, i) {
                    i = i || e;
                    var s = a.$include(n, i, t);
                    return p += s
                },
                c = e.showVoice,
                d = e.phone,
                p = "";
            return p += '<div class="ep-wp-hd"> <h2 class="ep-status ep-status-success mod-it"> <span class="ep-icon ep-icon-success mod-it-icon"></span> <span class="mod-it-text">',
                p += n(i || "支付成功！"),
                p += '</span> </h2> </div> <div class="ep-wp-bd"> <div class="ep-dl-list"> <dl> <dt>商品订单：</dt> <dd>',
                p += n(s),
                p += "</dd> </dl> <dl> <dt>支付金额：</dt> <dd>&yen;",
                p += n(r),
                p += ' <div class="dl-list-more"> <a href="javascript:void(0);" class="ep-order-view" data-action="expend"><span>订单详情</span><i class="ep-icon ep-icon-arrow"></i></a> </div> </dd> </dl> </div> <div class="ep-order-con success-expend ',
                p += n(o ? "show": "hide"),
                p += '"> ',
                l("./template.orderInfo"),
                p += " </div> ",
            c && (p += ' <div class="ep-links"> <a href="javascript:void(0);" title="查看订单详情" class="ep-link" data-active="detail">查看订单详情</a> <a href="javascript:void(0);" title="申请开发票" class="ep-link" data-active="invoke">申请开发票</a> </div> '),
                p += ' <div class="ep-question"> <p>若有疑问请与客服联系，我们将尽快为您提供服务。</p> ',
            d && (p += "<p>客服电话：", p += n(d), p += "</p>"),
                p += ' </div> <div> <a href="javascript:void(0);" title="返回" class="ep-btn ep-btn-blue" data-active="back">返回</a> </div> </div>',
                new String(p)
        }),
    template("order/template.fail.separate",
        function(e, t) {
            "use strict";
            var a = this,
                n = (a.$helpers, a.$escape),
                i = e.orderId,
                s = e.price,
                r = e.show,
                o = function(n, i) {
                    i = i || e;
                    var s = a.$include(n, i, t);
                    return d += s
                },
                l = e.showVoice,
                c = e.phone,
                d = "";
            return d += '<div class="ep-wp-hd"> <h2 class="ep-status ep-status-success mod-it"> <span class="ep-icon ep-icon-fail mod-it-icon"></span> <span class="mod-it-text">支付失败！</span> </h2> <p class="ep-status-tips">该笔订单被限制，无法完成支付</p> </div> <div class="ep-wp-bd"> <div class="ep-dl-list"> <dl> <dt>商品订单：</dt> <dd>',
                d += n(i),
                d += "</dd> </dl> <dl> <dt>支付金额：</dt> <dd>&yen;",
                d += n(s),
                d += ' <div class="dl-list-more"> <a href="javascript:void(0);" class="ep-order-view" data-action="expend"><span>订单详情</span><i class="ep-icon ep-icon-arrow"></i></a> </div> </dd> </dl> </div> <div class="ep-order-con fail-expend ',
                d += n(r ? "show": "hide"),
                d += '"> ',
                o("./template.orderInfo"),
                d += " </div> ",
            l && (d += ' <div class="ep-links"> <a href="javascript:void(0);" title="查看订单详情" class="ep-link" data-active="detail">查看订单详情</a> <a href="javascript:void(0);" title="申请开发票" class="ep-link" data-active="invoke">申请开发票</a> </div> '),
                d += ' <div class="ep-question"> <p>若有疑问请与客服联系，我们将尽快为您提供服务。</p> ',
            c && (d += "<p>客服电话：", d += n(c), d += "</p>"),
                d += ' </div> <div> <a href="javascript:void(0);" title="返回" class="ep-btn ep-btn-blue" data-active="back">返回</a> </div> </div>',
                new String(d)
        }),
    template("modal/template.simple",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$escape),
                n = e.url,
                i = "";
            return i += '<div class="ep-question-guide-content"> <div class="ep-question-guide-header">问题指引</div> <div class="ep-question-guide-body"> <iframe class="modal-iframe" src="',
                i += a(n),
                i += '" scrolling="auto" frameborder="no" boder="0"></iframe> </div> <div class="ep-question-guide-footer"></div> <span class="ep-question-guide-close"></span> </div>',
                new String(i)
        }),
    template("modal/template.default",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$escape),
                n = e.title,
                i = e.type,
                s = t.$string,
                r = e.msg,
                o = e.cancelBtn,
                l = e.cancelBtnText,
                c = e.sureBtnText,
                d = e.showTips,
                p = e.showHelperTips,
                u = "";
            return u += '<div class="ep-modal-content"> <div class="ep-modal-header"> ',
                u += a(n),
                u += " ",
            "confirm" != i && (u += ' <a href="javascript:void(0);" data-active="close" class="ep-icon ep-icon-close close">关闭</a> '),
                u += ' </div> <div class="ep-modal-body"> ',
            "default" == i && (u += ' <div class="text">', u += s(r), u += '</div> <div class="btns"> ', o && (u += ' <a href="javascript:void(0);" data-active="fail" class="ep-btn ep-btn-white ep-mr10">', u += a(l), u += "</a> "), u += ' <a href="javascript:void(0);" data-active="success" class="ep-btn ep-btn-blue ep-btn-normal">', u += a(c), u += "</a> </div> "),
                u += " ",
            "confirm" == i && (u += ' <div class="text text-status"><span class="ep-icon ep-icon-warning"></span><span>', u += a(r), u += '</span></div> <div class="btns"> <a href="javascript:void(0);" data-active="confirm" class="ep-btn ep-btn-blue ep-btn-normal">我知道了</a> </div> '),
                u += " </div> ",
            d && (u += ' <div class="ep-modal-footer"> <div class="links"> <a href="javascript:void(0);" data-active="help" title="查看支付帮助">查看支付帮助</a> <a href="javascript:void(0);" data-active="free" title="免费开通使用版">免费开通使用版</a> </div> </div> '),
                u += " ",
            p && (u += ' <div class="ep-modal-footer"> <div class="links"> <a href="javascript:void(0);" data-active="helperTipsLink" title="查看支付帮助">支付遇到困难？</a> </div> </div> '),
                u += " </div>",
                new String(u)
        }),
    template("mask/template.default", '<div class="ep-mask"></div>'),
    template("order/template.success.bank.default",
        function(e, t) {
            "use strict";
            var a = this,
                n = (a.$helpers,
                    function(n, i) {
                        i = i || e;
                        var s = a.$include(n, i, t);
                        return l += s
                    }),
                i = e.showVoice,
                s = e.phone,
                r = a.$escape,
                o = e.showBack,
                l = "";
            return l += '<div class="ep-dl-list"> ',
                n("./template.orderInfo"),
                l += " </div> ",
            i && (l += ' <div class="ep-links"> <a href="javascript:void(0);" title="查看订单详情" class="ep-link" data-active="detail">查看订单详情</a> <a href="javascript:void(0);" title="申请开发票" class="ep-link" data-active="invoke">申请开发票</a> </div> '),
                l += ' <div class="ep-question"> <p>若有疑问请与客服联系，我们将尽快为您提供服务。</p> ',
            s && (l += "<p>客服电话：", l += r(s), l += "</p>"),
                l += " </div> <div> ",
            o && (l += ' <a href="javascript:void(0);" title="返回" class="ep-btn ep-btn-blue" data-active="back">返回</a> '),
                l += " </div> ",
                new String(l)
        }),
    template("head/template.default",
        function(e) {
            "use strict";
            var t = this,
                a = (t.$helpers, t.$escape),
                n = e.logo,
                i = e.name,
                s = e.payUser,
                r = "";
            return r += '<div class="ep-hd-info"> <div class="ep-logo"> <img src="',
                r += a(n),
                r += '" alt="',
                r += a(i),
                r += '" onerror="this.src=\'//midas.gtimg.cn/enterprise/images/logo.png\'"/> </div> <div class="ep-order-status"> <h1>订单支付</h1> </div> </div> ',
            s && (r += ' <div class="user-info"> <p>账号：', r += a(s), r += "</p> </div> "),
                new String(r)
        }),
"object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";
        function f(e) {
            return e < 10 ? "0" + e: e
        }
        function this_value() {
            return this.valueOf()
        }
        function quote(e) {
            return rx_escapable.lastIndex = 0,
                rx_escapable.test(e) ? '"' + e.replace(rx_escapable,
                    function(e) {
                        var t = meta[e];
                        return "string" == typeof t ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
                    }) + '"': '"' + e + '"'
        }
        function str(e, t) {
            var a, n, i, s, r, o = gap,
                l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (s = l.length, a = 0; a < s; a += 1) r[a] = str(a, l) || "null";
                        return i = 0 === r.length ? "[]": gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + o + "]": "[" + r.join(",") + "]",
                            gap = o,
                            i
                    }
                    if (rep && "object" == typeof rep) for (s = rep.length, a = 0; a < s; a += 1)"string" == typeof rep[a] && (n = rep[a], i = str(n, l), i && r.push(quote(n) + (gap ? ": ": ":") + i));
                    else for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (i = str(n, l), i && r.push(quote(n) + (gap ? ": ": ":") + i));
                    return i = 0 === r.length ? "{}": gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + o + "}": "{" + r.join(",") + "}",
                        gap = o,
                        i
            }
        }
        var rx_one = /^[\],:{}\s]*$/,
            rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
        },
            Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
        var gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
            JSON.stringify = function(e, t, a) {
                var n;
                if (gap = "", indent = "", "number" == typeof a) for (n = 0; n < a; n += 1) indent += " ";
                else "string" == typeof a && (indent = a);
                if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": e
                })
            }),
        "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var a, n, i = e[t];
                if (i && "object" == typeof i) for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (n = walk(i, a), void 0 !== n ? i[a] = n: delete i[a]);
                return reviver.call(e, t, i)
            }
            var j;
            if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous,
                function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
                })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                        "": j
                    },
                    "") : j;
            throw new SyntaxError("JSON.parse")
        })
    } (),
    function(e, t) {
        "use strict";
        function a() {
            e[r] = {}
        }
        function n() {
            return e[r] || a(),
                e[r]
        }
        function i(n, i) {
            if (n) {
                n = String(n);
                var s, o = n.split("."),
                    l = o.length,
                    c = e[r];
                if (c || a(), !o) return ! 1;
                for (s = 0; s < l; s += 1) c[o[s]] || (c[o[s]] = {}),
                s === l - 1 && i !== t && (c[o[s]] = i),
                    c = c[o[s]];
                return c
            }
            return ! 1
        }
        var s, r = "TEG";
        s = n(),
            s.namespace = s.ns = i,
            e[r] = s,
            e.getNamespace = e.getNs = n
    } (window),
    function(e, t) {
        "use strict";
        e.ns("Enum.ChannelDesc", {
            qqwallet: "QQ钱包支付",
            wechat: "微信支付",
            bank: "网银支付",
            icard: "国际卡支付",
            remitpay: "转账/汇款"
        }),
            e.ns("Enum.PayChannel", {
                FbankCard: "icard",
                QQPAY: "qqwallet",
                WXPAY: "wechat",
                BANK: "bank",
                OFFLINE: "remitpay"
            })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        e.ns("Enum.PayStep", {
            Channel: "channel",
            Pending: "pending",
            Success: "success",
            Fail: "fail"
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        e.ns("Enum.SessionType", {
            SKEY: "SKEY",
            OAUTH: "OAUTH",
            UNL: "UNL"
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = {},
            n = ".",
            i = function(e, t) {
                for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
            };
        e.ns("Data", {
            get: function(e) {
                for (var t = e.split(n), i = a, s = 0, r = t.length; s < r && (i = i[t[s]]); s++);
                return i
            },
            set: function(e, t) {
                if ("string" == typeof e) {
                    for (var s, r = e.split(n), o = a, l = r.pop(), c = 0, d = r.length; c < d; c++) s = r[c],
                        o[s] = o[s] || {},
                        o = o[s];
                    o[l] = t
                } else i(a, e)
            }
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Enum,
            n = e.Data,
            i = a.PayChannel,
            s = a.PayStep,
            r = {
                defaultAppId: "1450005657",
                defaultChannel: i.WXPAY,
                defaultStep: s.Channel,
                defaultStyle: "default",
                genQRService: "//pay.qq.com/cgi-bin/account/get_qr_image.cgi",
                genQRService_sandbox: "//sandbox.pay.qq.com/cgi-bin/account/get_qr_image.cgi",
                QRChannelList: [i.WXPAY, i.QQPAY]
            };
        r[i.WXPAY] = {
            max: 5e4,
            className: "ep-icon-wxpay",
            title: "微信",
            size: 200,
            refreshSeconds: 30,
            payUrl: "https://pay.qq.com/h5/wechat.shtml",
            nativePayAppid: ["1450006271"]
        },
            r[i.QQPAY] = {
                max: 5e4,
                className: "ep-icon-qqpay",
                size: 200,
                payUrl: "https://pay.qq.com/h5/mqq.shtml",
                nativePayAppid: []
            },
            r[i.BANK] = {
                successPage: "https://pay.qq.com/enterprise/bank_success.shtml",
                eTips: "网银支付出现错误，请选择其它支付方式或其它银行",
                tips: "5万以上推荐使用",
                delay: !0,
                className: "ep-icon-unionpay"
            },
            r[i.FbankCard] = {
                successPage: "https://pay.qq.com/enterprise/bank_success.shtml",
                eTips: "外卡支付出现错误，请选择其它支付方式或其它银行",
                tips: "5万以上推荐使用",
                delay: !1,
                className: "ep-icon-unionpay"
            },
            r[i.OFFLINE] = {
                className: "ep-sprite3 ep-icon-transfer",
                eTips: "转帐/汇款出现错误，请选择其它支付方式",
                delay: !0,
                contentTemplate: "channel/template.remitpay.context.default"
            },
            n.set("static", r)
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Data;
        a.set("static.bankList", {
            peBank: {
                icbc: {
                    name: "工商银行",
                    credit: 1037,
                    debit: 1071
                },
                abc: {
                    name: "农业银行",
                    debit: 1005
                },
                cmb: {
                    name: "招商银行",
                    credit: 1031,
                    debit: 1001
                },
                ccb: {
                    name: "建设银行",
                    credit: 1034,
                    debit: 1003
                },
                boc: {
                    name: "中国银行",
                    credit: 1052,
                    debit: 1026
                },
                post: {
                    name: "邮政银行",
                    debit: 1066
                },
                boco: {
                    name: "交通银行",
                    credit: 1020,
                    debit: 1072
                },
                gdb: {
                    name: "广发银行",
                    credit: 1079,
                    debit: 1051
                },
                cmbc: {
                    name: "民生银行",
                    credit: 1006,
                    debit: 1041
                },
                pingan: {
                    name: "平安银行",
                    debit: 1010
                },
                cebb: {
                    name: "光大银行",
                    debit: 1078
                },
                cib: {
                    name: "兴业银行",
                    credit: 1061,
                    debit: 1009
                },
                ecitic: {
                    name: "中信银行",
                    debit: 1021
                },
                bob: {
                    name: "北京银行",
                    debit: 1032
                },
                srcb: {
                    name: "上海农商",
                    debit: 1113
                },
                spdb: {
                    name: "浦发银行",
                    credit: 1004,
                    debit: 1110
                },
                nbcb: {
                    name: "宁波银行",
                    debit: 1112
                },
                njcb: {
                    name: "南京银行",
                    debit: 1054
                },
                hkbea: {
                    name: "东亚银行",
                    credit: 1077,
                    debit: 1076
                }
            },
            epBank: {
                icbc: {
                    logo: "icbc",
                    name: "工商银行",
                    debit: 1030
                },
                abc: {
                    logo: "abc",
                    name: "农业银行",
                    debit: 1043
                },
                cmb: {
                    logo: "cmb",
                    name: "招商银行",
                    debit: 1042
                },
                ccb: {
                    logo: "ccb",
                    name: "建设银行",
                    debit: 1040
                },
                spdb: {
                    logo: "ccb",
                    name: "浦发银行",
                    debit: 1080
                },
                cebb: {
                    name: "光大银行",
                    debit: 1103
                },
                cib: {
                    name: "兴业银行",
                    debit: 1114
                },
                boc: {
                    name: "中国银行",
                    debit: 1102
                },
                pingan: {
                    name: "平安银行",
                    debit: 1115
                }
            }
        })
    } (window.getNs()),
    function(e) {
        "use strict";
        var t = {
            "login-defect": {
                status: "-100",
                message: "登陆态无效"
            },
            "order-exception": {
                status: "-200",
                message: "渠道下单失败"
            },
            "cgi-error": {
                status: "-300",
                message: "服务不可用"
            },
            "client-error": {
                status: "-400",
                message: "支付页面不可用"
            },
            "open-window": {
                status: "-500",
                message: "跨域打开新窗口"
            },
            "token-error": {
                status: "100",
                message: "获取token失败"
            },
            "switch-page": {
                status: "200",
                message: "支付状态变更"
            },
            "switch-channel": {
                status: "300",
                message: "支付渠道变更"
            },
            "click-atag": {
                status: "400",
                message: "单击a标签"
            },
            "order-status": {
                status: "500",
                message: "检查订单状态"
            },
            "page-ready": {
                status: "1000",
                message: "页面正常加载"
            },
            "qrcode-ready": {
                status: "2000",
                message: "QrCode正常加载"
            },
            "qrcode-error": {
                status: "3000",
                message: "QrCode加载异常"
            }
        };
        e.ns("Service.StatusMap", t)
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = {},
            n = [],
            i = a.hasOwnProperty,
            s = a.toString,
            r = n.indexOf,
            o = /%20/g,
            l = /\[\]$/,
            c = {
                noop: function() {},
                type: function(e) {
                    return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? a[s.call(e)] || "object": typeof e
                },
                jumpPage: function(e, t, a, n) {
                    if (n) {
                        var i = $("#postForm");
                        0 == i.length && (i = $("<form id='postForm' action='" + e + "' method='post' style='display: none' target='" + (a ? "_top": "_blank") + "'></form>").appendTo($("body"))),
                            this.each(t,
                                function(e, t) {
                                    i.append("<input type='hidden' name='" + e + "' value='" + t + "'/> ")
                                }),
                            function() {
                                i.submit()
                            } ()
                    } else {
                        var s = this.URL.addParam(e, t);
                        a ? location.href = s: window.open(s)
                    }
                },
                param: function(e) {
                    var t, a = [],
                        n = function(e, t) {
                            t = c.isFunction(t) ? t() : null == t ? "": t,
                                a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                        };
                    if (c.isArray(e) || e.jquery && !c.isPlainObject(e)) c.each(e,
                        function() {
                            n(this.name, this.value)
                        });
                    else for (t in e) c.buildParams(t, e[t], n);
                    return a.join("&").replace(o, "+")
                },
                buildParams: function(e, t, a) {
                    var n;
                    if (c.isArray(t)) c.each(t,
                        function(t, n) {
                            l.test(e) ? a(e, n) : c.buildParams(e + "[" + ("object" == typeof n ? t: "") + "]", n, a)
                        });
                    else if ("object" === c.type(t)) for (n in t) c.buildParams(e + "[" + n + "]", t[n], a);
                    else a(e, t)
                },
                inArray: function(e, t, a) {
                    var n;
                    if (t) {
                        if (r) return r.call(t, e, a);
                        for (n = t.length, a = a ? a < 0 ? Math.max(0, n + a) : a: 0; a < n; a++) if (a in t && t[a] === e) return a
                    }
                    return - 1
                },
                isArray: Array.isArray ||
                function(e) {
                    return "array" === c.type(e)
                },
                isFunction: function(e) {
                    return "function" === c.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== c.type(e) || e.nodeType || c.isWindow(e)) return ! 1;
                    try {
                        if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                    } catch(a) {
                        return ! 1
                    }
                    var n;
                    for (n in e);
                    return n === t || i.call(e, n)
                },
                extend: function() {
                    var e, a, n, i, s, r, o = arguments[0] || {},
                        l = 1,
                        d = arguments.length,
                        p = !1;
                    for ("boolean" == typeof o && (p = o, o = arguments[1] || {},
                        l = 2), "object" == typeof o || c.isFunction(o) || (o = {}), d === l && (o = this, --l); l < d; l++) if (null != (s = arguments[l])) for (i in s) e = o[i],
                        n = s[i],
                    o !== n && (p && n && (c.isPlainObject(n) || (a = c.isArray(n))) ? (a ? (a = !1, r = e && c.isArray(e) ? e: []) : r = e && c.isPlainObject(e) ? e: {},
                        o[i] = c.extend(p, r, n)) : n !== t && (o[i] = n));
                    return o
                },
                each: function(e, t, a) {
                    var n, i = 0,
                        s = e.length,
                        r = c.isArray(e);
                    if (a) {
                        if (r) for (; i < s && (n = t.apply(e[i], a), n !== !1); i++);
                        else for (i in e) if (n = t.apply(e[i], a), n === !1) break
                    } else if (r) for (; i < s && (n = t.call(e[i], i, e[i]), n !== !1); i++);
                    else for (i in e) if (n = t.call(e[i], i, e[i]), n === !1) break;
                    return e
                },
                genMessage: function(t, a, n) {
                    a = a || {};
                    var i = e.Service.StatusMap[t];
                    return e.debug ? c.extend(a, {
                            serverError: n
                        },
                        i) : c.extend(a, i)
                },
                genJSONPCallback: function(e) {
                    var t = +new Date;
                    return "enterprise_" + (e || "") + t
                },
                UUID: function(e, t) {
                    var a, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                        i = n,
                        s = [];
                    if (t = t || i.length, e) for (a = 0; a < e; a++) s[a] = i[0 | Math.random() * t];
                    else {
                        var r;
                        for (s[8] = s[13] = s[18] = s[23] = "-", s[14] = "4", a = 0; a < 36; a++) s[a] || (r = 0 | 16 * Math.random(), s[a] = i[19 == a ? 3 & r | 8 : r])
                    }
                    return s.join("")
                },
                close: function() {
                    var e = navigator.appName;
                    parseInt(navigator.appVersion);
                    if ("Microsoft Internet Explorer" == e) {
                        var t = !(!document.all || window.opera || !window.XMLHttpRequest);
                        t ? (window.open("", "_parent", ""), window.close()) : (window.focus(), window.opener = this, window.close())
                    } else {
                        try {
                            window.focus(),
                                window.opener = this,
                                window.close()
                        } catch(a) {}
                        try {
                            window.open("", "_self", ""),
                                window.close()
                        } catch(a) {}
                    }
                },
                delayRun: function(e, t, a, n) {
                    n = n || window,
                        n.__DelayRunTimer ? n.__DelayRunTimer[e] && (clearTimeout(n.__DelayRunTimer[e]), n.__DelayRunTimer[e] = -1) : n.__DelayRunTimer = {},
                        n.__DelayRunTimer[e] = setTimeout(function() {
                                t.call(n)
                            },
                            a)
                }
            };
        e.ns("Helpers.Utils", c)
    } (window.getNs()),
    function(e, t, a, n) {
        "use strict";
        var i = a.Helpers.Utils,
            s = {
                getParam: function(t, a) {
                    if (a == n && (a = t, t = e.location.href), a && t) {
                        var i = new RegExp("(\\?|#|&|^)" + a + "=([^&^#]*)(#|&|$)"),
                            s = t.match(i);
                        return s ? s[2] : ""
                    }
                    return null
                },
                getParams: function(e) {
                    e = e || location.href;
                    for (var t = e.replace(/.+?\?/, "").replace(/#.*/, "").split("&"), a = {},
                             n = 0; n < t.length; n++) if (t[n]) {
                        var i = t[n].split("=");
                        2 === i.length && (a[i[0]] = i[1])
                    }
                    return a
                },
                getFParam: function(e, t) {
                    var a, n = decodeURIComponent(this.getParam(e)),
                        i = 0 == n.length;
                    switch (t) {
                        case "a":
                            a = i ? [] : n.split(",");
                            break;
                        case "j":
                            a = i ? {}: JSON.parse(n);
                            break;
                        case "b":
                            a = "1" == n;
                            break;
                        default:
                            a = i ? null: n
                    }
                    return a
                },
                delParam: function(t, a) {
                    return a == n && (a = t, t = e.location.href),
                    a instanceof Array || (a = [a]),
                        i.each(a,
                            function(e, a) {
                                t = t.replace(new RegExp("(?:&" + a + "=[^&]*)", "g"), ""),
                                    t = t.replace(new RegExp("(?:\\?" + a + "=[^&]*&?)", "g"), "?")
                            }),
                        t
                },
                addParam: function(t, a) {
                    a == n && (a = t, t = e.location.href);
                    var r = [];
                    i.each(a,
                        function(e, t) {
                            r.push(e)
                        }),
                        t = s.delParam(t, r);
                    var o = i.param(a);
                    return t += /(\?|&)$/.test(t) ? "" + o: /\?/.test(t) ? "&" + o: "?" + o
                }
            },
            r = {
                format: function(e) {
                    if (e.length <= 3) return e;
                    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(e)) return e;
                    var t = RegExp.$1,
                        a = RegExp.$2,
                        n = RegExp.$3,
                        i = new RegExp;
                    for (i.compile("(\\d)(\\d{3})(,|$)"); i.test(a);) a = a.replace(i, "$1,$2$3");
                    return t + "" + a + n
                }
            },
            o = {
                reverse: function(e) {
                    return String(e).length > 0 ? String(e).split("").reverse().join("") : e
                },
                formatTypeData: function(e, t) {
                    var a = t;
                    switch (t = String(t), e) {
                        case "bankAccount":
                            if (t.length <= 4) return t;
                            var n = new RegExp;
                            for (n.compile("(\\d)(\\d{4})(,|$)"), t = this.reverse(t); n.test(t);) t = t.replace(n, "$1,$2$3");
                            a = t.replace(/,/gim, " "),
                                a = this.reverse(a);
                            break;
                        case "number":
                            a = r.format(t)
                    }
                    return a
                },
                format: function(e, t) {
                    var a = e;
                    if (arguments.length > 1 && 2 == arguments.length && "object" == typeof arguments[1]) {
                        var i = arguments[1];
                        for (var s in i) if (i[s] != n) {
                            var r = new RegExp("({" + s + "})", "g");
                            a = a.replace(r, i[s])
                        }
                    }
                    return a
                }
            },
            l = {
                convertToDate: function(e) {
                    var t = e;
                    return "string" == typeof e && (t = new Date(Date.parse(e)), isNaN(t.getTime()) && e.replace(/^(\d{4})-(\d{1,2})-(\d{1,2}).(\d{2}):(\d{2}):(\d{2})$/,
                        function(e, a, n, i, s, r, o) {
                            t = new Date(a, n - 1, i, s, r, o)
                        })),
                        t
                },
                format: function(e, t) {
                    e = this.convertToDate(e);
                    var a = function(e, t) {
                        t || (t = 2),
                            e = new String(e);
                        for (var a = 0,
                                 n = ""; a < t - e.length; a++) n += "0";
                        return n + e
                    };
                    return t.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g,
                        function(t) {
                            switch (t) {
                                case "d":
                                    return e.getDate();
                                case "dd":
                                    return a(e.getDate());
                                case "ddd":
                                    return ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"][e.getDay()];
                                case "dddd":
                                    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][e.getDay()];
                                case "M":
                                    return e.getMonth() + 1;
                                case "MM":
                                    return a(e.getMonth() + 1);
                                case "MMM":
                                    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getMonth()];
                                case "MMMM":
                                    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()];
                                case "yy":
                                    return new String(e.getFullYear()).substr(2);
                                case "yyyy":
                                    return e.getFullYear();
                                case "h":
                                    return e.getHours() % 12 || 12;
                                case "hh":
                                    return a(e.getHours() % 12 || 12);
                                case "H":
                                    return e.getHours();
                                case "HH":
                                    return a(e.getHours());
                                case "m":
                                    return e.getMinutes();
                                case "mm":
                                    return a(e.getMinutes());
                                case "s":
                                    return e.getSeconds();
                                case "ss":
                                    return a(e.getSeconds());
                                case "l":
                                    return e.getMilliseconds();
                                case "ll":
                                    return a(e.getMilliseconds());
                                case "tt":
                                    return e.getHours() < 12 ? "am": "pm";
                                case "TT":
                                    return e.getHours() < 12 ? "AM": "PM"
                            }
                        })
                }
            },
            c = {
                get: function(e) {
                    var a = t.cookie.match(new RegExp("(?:^|;\\s)" + e + "=(.*?)(?:;\\s|$)"));
                    return a ? a[1] : ""
                },
                set: function(e, a, n) {
                    n = n || {};
                    var i = new Date,
                        s = n.domain || "m.jifen.qq.com",
                        r = n.path || "/",
                        o = n.time || 31536e7;
                    i.setTime(i.getTime() + o),
                        t.cookie = e + "=" + a + "; path=" + r + "; domain=" + s + "; expires=" + i.toUTCString()
                },
                del: function(e, t) {
                    t = t || {},
                        t.time = -new Date,
                        c.set(e, "", t)
                }
            },
            d = {
                Number: r,
                URL: s,
                Cookie: c,
                String: o,
                Date: l
            };
        i.extend(i, d)
    } (window, document, window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers.Utils,
            n = {
                payItemMapToArray: function(e) {
                    for (var t = [], a = 0, n = e.length; a < n; a++) t.push([e[a].serviceCode, e[a].unitPrice, e[a].amount]);
                    return t
                },
                payItemArrayToString: function(e) {
                    for (var t = [], a = 0, n = e.length; a < n; a++) t.push(e[a].join("*"));
                    return t.join(";")
                },
                payItemMapToString: function(e) {
                    return n.payItemArrayToString(n.payItemMapToArray(e))
                },
                payItemArrayToMap: function(e) {
                    for (var t = [], a = 0, n = e.length; a < n; a++) t.push({
                        serviceCode: e[a][0],
                        unitPrice: e[a][1],
                        amount: e[a][2]
                    });
                    return 0 == e.length && t.push({
                        amount: 1
                    }),
                        t
                }
            };
        a.extend(a, {
            PayItem: n
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers.Utils,
            n = a.URL,
            i = e.Data,
            s = (e.Enum.ChannelDesc, a.Number),
            r = a.String,
            o = {
                getClientServiceName: function(e) {
                    var t = e.orderInfo,
                        a = decodeURIComponent(t.goodInfo).split("*");
                    return a[0] || e.appName
                },
                getPrice: function(e) {
                    var t = e.orderInfo;
                    return t.totalPrice ? parseFloat(t.totalPrice) / 100 : 0
                },
                getClientPayInfo: function(e) {
                    var t = e.orderInfo,
                        o = a.PayItem.payItemArrayToMap(t.payItemInfo)[0],
                        l = {
                            orderId: t.outTradeNo || n.getParam(t.paySaveUrl, "token_id"),
                            createTime: t.createTime,
                            payOrderId: t.payOrderId,
                            price: t.totalPrice ? i.get("data.nFormat") ? s.format((parseFloat(t.totalPrice) / 100).toFixed(2)) : (parseFloat(t.totalPrice) / 100).toFixed(2) : "0.00",
                            purchaseName: t.purchaseName,
                            serviceDesName: r.format("{appName}", {
                                appName: this.getClientServiceName(e),
                                amount: o.amount,
                                unitName: t.unitName
                            })
                        };
                    return l
                }
            };
        a.extend(a, {
            PayService: o
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers.Utils,
            n = e.Data,
            i = e.Enum.ChannelDesc,
            s = (a.URL, a.Number, a.String),
            r = {
                getChannelName: function() {
                    var e = n.get("data.channel");
                    return i[e] || n.get("static")[e].name
                },
                setExtChannelToMap: function(e) {
                    var t = n.get("static");
                    a.each(e,
                        function(e, n) {
                            t[n.id] = a.extend({
                                    isExt: !0,
                                    popup: !0
                                },
                                n)
                        })
                },
                convertExtChannelsToString: function(e) {
                    var t = null;
                    if (e && e.length > 0) {
                        var n, i, r = {},
                            o = [];
                        a.each(e,
                            function(e, t) {
                                n = t.id,
                                n && (r[n] = a.extend({},
                                    t))
                            }),
                            a.each(r,
                                function(e, t) {
                                    i = [],
                                        a.each(t,
                                            function(e, t) {
                                                "id" != e && i.push(s.format("{subKey}={subVal}", {
                                                    subKey: e,
                                                    subVal: encodeURIComponent(t)
                                                }))
                                            }),
                                        o.push(s.format("{key}={value}", {
                                            key: e,
                                            value: encodeURIComponent(i.join("&"))
                                        }))
                                }),
                        o.length > 0 && (t = o.join("&"))
                    }
                    return t
                },
                convertExtChannelsStringToArray: function(e) {
                    var t = [];
                    if (e && e.length > 0) {
                        var n, i = decodeURIComponent(e).split("&"),
                            s = {},
                            r = [];
                        a.each(i,
                            function(e, i) {
                                n = i.split("="),
                                    s = {},
                                2 == n.length && (s.id = n[0], a.each(decodeURIComponent(n[1]).split("&"),
                                    function(e, t) {
                                        r = t.split("="),
                                            s[r[0]] = decodeURIComponent(r[1])
                                    }), t.push(s))
                            })
                    }
                    return t
                },
                concatExtChannel: function(e, t, n) {
                    var s = [];
                    return a.each(e,
                        function(e, t) {
                            i[t] && s.push(t)
                        }),
                        a.each(t,
                            function(e, t) {
                                t.id && s.push(t.id)
                            }),
                        a.each(n,
                            function(e, t) {
                                i[t] && s.push(t)
                            }),
                        s
                }
            };
        a.extend(a, {
            ExtChannel: r
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers.Utils,
            n = e.Enum,
            i = a.URL;
        "undefined" == typeof __CGI_INFO_Data && (window.__CGI_INFO_Data = {}),
            e.debug = i.getParam("debug");
        var s = a.ExtChannel.convertExtChannelsStringToArray(__CGI_INFO_Data.externalChannels);
        a.ExtChannel.setExtChannelToMap(s);
        var r = {
            get: function() {
                return {
                    useSecure: i.getFParam("secure", "b"),
                    tokenId: i.getFParam("token_id") || i.getFParam("transaction_id"),
                    nFormat: i.getFParam("nformat", "b"),
                    payOrderId: i.getFParam("bank_billno"),
                    protocol: "https:" == location.protocol ? "https": "http",
                    sessionType: i.getFParam("type") || n.SessionType.UNL,
                    pf: __CGI_INFO_Data.pf || i.getFParam("pf") || "ep.server",
                    mId: i.getFParam("mid"),
                    env: i.getFParam("env") || "live",
                    channel: i.getFParam("channel"),
                    externalPending: i.getFParam("pending", "b"),
                    showTips: i.getFParam("tips", "b"),
                    appId: __CGI_INFO_Data.appId || i.getFParam("appid") || i.getFParam("offer_id"),
                    style: i.getFParam("style")
                }
            }
        };
        a.extend(a, {
            QueryString: r
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers.Utils,
            n = {
                convertToCGIData: function(e, t) {
                    var n = e.info || {},
                        i = e.info ? e.info.orderInfo: {},
                        s = a.ExtChannel.convertExtChannelsStringToArray(i.extend_channel_list);
                    return a.ExtChannel.setExtChannelToMap(s),
                        {
                            ret: e.ret,
                            msg: e.msg,
                            isSeparate: t.isSeparate,
                            externalChannels: decodeURIComponent(i.extend_channel_list),
                            orderInfo: {
                                outTradeNo: i.out_trade_no || "",
                                userNick: decodeURIComponent(i.user_nickname) || "",
                                payOrderId: t.payOrderId || i.transaction_id || "",
                                goodInfo: decodeURIComponent(i.goodsmeta) || "",
                                payItemInfo: JSON.parse(decodeURIComponent(i.goods || "[]")),
                                paySaveUrl: i.paySaveUrl || "",
                                unitName: decodeURIComponent(i.unit_name) || "",
                                serviceLogImage: i.goodsurl || "",
                                purchaseName: decodeURIComponent(i.buyer_name) || "",
                                totalPrice: i.amt || "",
                                provideUin: i.provide_uin || "",
                                payUin: i.pay_uin || "",
                                createTime: i.order_createtime ? a.Date.format(i.order_createtime, "yyyy年MM月dd日") : null
                            },
                            logoImage: n.logo,
                            allowChannels: n.allow_channel,
                            defaultChannel: n.default_channel,
                            pf: n.pf,
                            appName: n.app_name
                        }
                }
            };
        a.extend(a, {
            GoodsInfo: n
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e,
            n = a.Enum,
            i = a.Helpers,
            s = i.Utils,
            r = {
                defaultChannel: function(e, t) {
                    var a = this.channels(e);
                    return s.inArray(t, a) > -1 ? t: s.inArray(e.defaultChannel, a) > -1 ? e.defaultChannel: a[0]
                },
                channels: function(e, t) {
                    e.externalChannels = s.ExtChannel.convertExtChannelsStringToArray(e.externalChannels);
                    var a = [],
                        i = s.ExtChannel.concatExtChannel([n.PayChannel.WXPAY, n.PayChannel.QQPAY], e.externalChannels || [], [n.PayChannel.BANK, n.PayChannel.OFFLINE, n.PayChannel.FbankCard]);
                    return t && 0 != t.length || (t = e.allowChannels),
                        $.each(i,
                            function(n, i) {
                                $.inArray(i, e.allowChannels) > -1 && $.inArray(i, t) > -1 ? a.push(i) : $.each(e.externalChannels,
                                    function(e, t) {
                                        i == t.id && a.push(i)
                                    })
                            }),
                        a
                }
            };
        s.extend(s, {
            filter: r
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        function a(e, t) {
            e[t >> 5] |= 128 << t % 32,
                e[(t + 64 >>> 9 << 4) + 14] = t;
            for (var a = 1732584193,
                     n = -271733879,
                     c = -1732584194,
                     d = 271733878,
                     p = 0; p < e.length; p += 16) {
                var u = a,
                    h = n,
                    f = c,
                    g = d;
                a = i(a, n, c, d, e[p + 0], 7, -680876936),
                    d = i(d, a, n, c, e[p + 1], 12, -389564586),
                    c = i(c, d, a, n, e[p + 2], 17, 606105819),
                    n = i(n, c, d, a, e[p + 3], 22, -1044525330),
                    a = i(a, n, c, d, e[p + 4], 7, -176418897),
                    d = i(d, a, n, c, e[p + 5], 12, 1200080426),
                    c = i(c, d, a, n, e[p + 6], 17, -1473231341),
                    n = i(n, c, d, a, e[p + 7], 22, -45705983),
                    a = i(a, n, c, d, e[p + 8], 7, 1770035416),
                    d = i(d, a, n, c, e[p + 9], 12, -1958414417),
                    c = i(c, d, a, n, e[p + 10], 17, -42063),
                    n = i(n, c, d, a, e[p + 11], 22, -1990404162),
                    a = i(a, n, c, d, e[p + 12], 7, 1804603682),
                    d = i(d, a, n, c, e[p + 13], 12, -40341101),
                    c = i(c, d, a, n, e[p + 14], 17, -1502002290),
                    n = i(n, c, d, a, e[p + 15], 22, 1236535329),
                    a = s(a, n, c, d, e[p + 1], 5, -165796510),
                    d = s(d, a, n, c, e[p + 6], 9, -1069501632),
                    c = s(c, d, a, n, e[p + 11], 14, 643717713),
                    n = s(n, c, d, a, e[p + 0], 20, -373897302),
                    a = s(a, n, c, d, e[p + 5], 5, -701558691),
                    d = s(d, a, n, c, e[p + 10], 9, 38016083),
                    c = s(c, d, a, n, e[p + 15], 14, -660478335),
                    n = s(n, c, d, a, e[p + 4], 20, -405537848),
                    a = s(a, n, c, d, e[p + 9], 5, 568446438),
                    d = s(d, a, n, c, e[p + 14], 9, -1019803690),
                    c = s(c, d, a, n, e[p + 3], 14, -187363961),
                    n = s(n, c, d, a, e[p + 8], 20, 1163531501),
                    a = s(a, n, c, d, e[p + 13], 5, -1444681467),
                    d = s(d, a, n, c, e[p + 2], 9, -51403784),
                    c = s(c, d, a, n, e[p + 7], 14, 1735328473),
                    n = s(n, c, d, a, e[p + 12], 20, -1926607734),
                    a = r(a, n, c, d, e[p + 5], 4, -378558),
                    d = r(d, a, n, c, e[p + 8], 11, -2022574463),
                    c = r(c, d, a, n, e[p + 11], 16, 1839030562),
                    n = r(n, c, d, a, e[p + 14], 23, -35309556),
                    a = r(a, n, c, d, e[p + 1], 4, -1530992060),
                    d = r(d, a, n, c, e[p + 4], 11, 1272893353),
                    c = r(c, d, a, n, e[p + 7], 16, -155497632),
                    n = r(n, c, d, a, e[p + 10], 23, -1094730640),
                    a = r(a, n, c, d, e[p + 13], 4, 681279174),
                    d = r(d, a, n, c, e[p + 0], 11, -358537222),
                    c = r(c, d, a, n, e[p + 3], 16, -722521979),
                    n = r(n, c, d, a, e[p + 6], 23, 76029189),
                    a = r(a, n, c, d, e[p + 9], 4, -640364487),
                    d = r(d, a, n, c, e[p + 12], 11, -421815835),
                    c = r(c, d, a, n, e[p + 15], 16, 530742520),
                    n = r(n, c, d, a, e[p + 2], 23, -995338651),
                    a = o(a, n, c, d, e[p + 0], 6, -198630844),
                    d = o(d, a, n, c, e[p + 7], 10, 1126891415),
                    c = o(c, d, a, n, e[p + 14], 15, -1416354905),
                    n = o(n, c, d, a, e[p + 5], 21, -57434055),
                    a = o(a, n, c, d, e[p + 12], 6, 1700485571),
                    d = o(d, a, n, c, e[p + 3], 10, -1894986606),
                    c = o(c, d, a, n, e[p + 10], 15, -1051523),
                    n = o(n, c, d, a, e[p + 1], 21, -2054922799),
                    a = o(a, n, c, d, e[p + 8], 6, 1873313359),
                    d = o(d, a, n, c, e[p + 15], 10, -30611744),
                    c = o(c, d, a, n, e[p + 6], 15, -1560198380),
                    n = o(n, c, d, a, e[p + 13], 21, 1309151649),
                    a = o(a, n, c, d, e[p + 4], 6, -145523070),
                    d = o(d, a, n, c, e[p + 11], 10, -1120210379),
                    c = o(c, d, a, n, e[p + 2], 15, 718787259),
                    n = o(n, c, d, a, e[p + 9], 21, -343485551),
                    a = l(a, u),
                    n = l(n, h),
                    c = l(c, f),
                    d = l(d, g)
            }
            return Array(a, n, c, d)
        }
        function n(e, t, a, n, i, s) {
            return l(c(l(l(t, e), l(n, s)), i), a)
        }
        function i(e, t, a, i, s, r, o) {
            return n(t & a | ~t & i, e, t, s, r, o)
        }
        function s(e, t, a, i, s, r, o) {
            return n(t & i | a & ~i, e, t, s, r, o)
        }
        function r(e, t, a, i, s, r, o) {
            return n(t ^ a ^ i, e, t, s, r, o)
        }
        function o(e, t, a, i, s, r, o) {
            return n(a ^ (t | ~i), e, t, s, r, o)
        }
        function l(e, t) {
            var a = (65535 & e) + (65535 & t),
                n = (e >> 16) + (t >> 16) + (a >> 16);
            return n << 16 | 65535 & a
        }
        function c(e, t) {
            return e << t | e >>> 32 - t
        }
        function d(e) {
            for (var t = Array(), a = (1 << g) - 1, n = 0; n < e.length * g; n += g) t[n >> 5] |= (e.charCodeAt(n / g) & a) << n % 32;
            return t
        }
        function p(e) {
            for (var t = h ? "0123456789ABCDEF": "0123456789abcdef", a = "", n = 0; n < 4 * e.length; n++) a += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
            return a
        }
        function u(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                     a = "",
                     n = 0; n < 4 * e.length; n += 3) for (var i = (e[n >> 2] >> 8 * (n % 4) & 255) << 16 | (e[n + 1 >> 2] >> 8 * ((n + 1) % 4) & 255) << 8 | e[n + 2 >> 2] >> 8 * ((n + 2) % 4) & 255, s = 0; s < 4; s++) a += 8 * n + 6 * s > 32 * e.length ? f: t.charAt(i >> 6 * (3 - s) & 63);
            return a
        }
        var h = 0,
            f = "",
            g = 8,
            v = {
                hex_md5: function(e) {
                    return p(a(d(e), e.length * g))
                },
                b64_md5: function(e) {
                    return u(a(d(e), e.length * g))
                },
                md5_vm_test: function() {
                    return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc")
                }
            };
        e.ns("Encrypt.MD5", v)
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Enum,
            n = e.Helpers,
            i = n.Utils,
            s = i.Cookie,
            r = function(e) {
                e = e || {},
                    this.sessionId = e.sessionId || "uin",
                    this.sessionKey = e.sessionKey || "skey",
                    this.user = e.user,
                    this.password = e.password
            };
        r.prototype = {
            getSessionParam: function(e, t) {
                e = e || "openid",
                    t = t || "openkey";
                var a = {
                    session_id: this.sessionId,
                    session_type: this.sessionKey
                };
                return a[e] = this.user || "",
                    a[t] = this.password || "nopwd",
                    a
            },
            isValid: function() {
                return "st_dummy" == this.sessionKey ? this.user: this.user && this.password
            },
            setUser: function(e) {
                if ("st_dummy" == this.sessionKey) {
                    var t = this.user;
                    this.user = e || t
                }
            },
            getUser: function() {
                return this.user
            },
            getPWD: function() {
                return this.password
            }
        };
        var o = function(e) {
            r.call(this, e),
                this.sessionId = e.sessionId || "uin",
                this.sessionKey = e.sessionKey || "sid"
        };
        o.prototype = new r;
        var l = function(e) {
            r.call(this, e),
                this.sessionId = e.sessionId || "uin",
                this.sessionKey = e.sessionKey || "skey"
        };
        l.prototype = new r;
        var c = function(e) {
            r.call(this, e),
                this.sessionId = e.sessionId || "openid",
                this.sessionKey = e.sessionKey || "kp_actoken"
        };
        c.prototype = new r;
        var d = function(e) {
            r.call(this, e),
                this.sessionId = e.sessionId || "hy_gameid",
                this.sessionKey = e.sessionKey || "kp_actoken"
        };
        d.prototype = new r;
        var p = function(e) {
            r.call(this, e),
                this.sessionId = e.sessionId || "hy_gameid",
                this.sessionKey = e.sessionKey || "st_dummy"
        };
        p.prototype = new r;
        var u = {
            SID: o,
            SKEY: l,
            MQQ: c,
            OAUTH: d,
            UNL: p
        };
        u.getSession = function(e, t) {
            e = e.toUpperCase(),
                t = t || {};
            var n = s.get("uin"),
                r = {},
                o = null;
            switch (e) {
                case a.SessionType.SID:
                    t.user || n && n.length > 0 && (r.user = String(parseInt(s.get("uin").substring(1), 10))),
                    t.password || (r.password = s.get("sid"));
                    break;
                case a.SessionType.SKEY:
                    t.user || n && n.length > 0 && (r.user = String(parseInt(s.get("uin").substring(1), 10))),
                    t.password || (r.password = s.get("skey"))
            }
            var l = i.inArray(e, [a.SessionType.SID, a.SessionType.SKEY, a.SessionType.OAUTH]) > -1;
            return ! r.user && t.user && (r.user = t.user),
            !r.password && t.password && (r.password = t.password),
            r.user && (l && r.password || !l) && (o = new u[e](r)),
                o
        },
            e.ns("Session", u)
    } (window.getNs()),
    function(e, t, a, n, i) {
        "use strict";
        var s = n.Helpers,
            r = (s.Utils,
                function() {
                    var a = e.console !== i,
                        s = a ? e.console: null,
                        o = a && s.log !== i,
                        l = a && s.warn !== i,
                        c = a && s.error !== i,
                        d = a && s.time !== i && s.timeEnd !== i;
                    return {
                        logToScreen: function(e) {
                            if (n.debug) {
                                var a = t.getElementById("log"),
                                    i = t.createElement("p"),
                                    s = t.createTextNode(e);
                                if (a) {
                                    i.appendChild(s);
                                    var r = a.childNodes;
                                    r.length > 0 ? a.insertBefore(i, r[0]) : a.appendChild(i)
                                }
                            }
                        },
                        log: function() {
                            if (n.debug) {
                                var e, t = Array.prototype.slice.call(arguments),
                                    a = t.length;
                                a && (o && (s.log.apply ? s.log.apply(s, t) : s.log(t)), e = t[0], r.logToScreen(e))
                            }
                        },
                        warn: function() {
                            if (n.debug) {
                                var e, t = Array.prototype.slice.call(arguments),
                                    a = t.length;
                                a && (e = t[0], l ? s.warn.apply(s, t) : r.log(e), r.logToScreen(e))
                            }
                        },
                        error: function() {
                            if (n.debug) {
                                var e, t = Array.prototype.slice.call(arguments),
                                    a = t.length;
                                a && (e = t[0], n.debug && (c ? s.error.apply(s, t) : r.log(e), r.logToScreen(e)))
                            }
                        },
                        save: function() {
                            n.debug && a && e.Blob && e.JSON && e.URL && (s.save = function(a, n) {
                                if (!a && c) return void s.error("Console.save: No data");
                                n || (n = "console.json"),
                                "object" == typeof a && (a = JSON.stringify(a, i, 4));
                                var r = new Blob([a], {
                                        type: "text/json"
                                    }),
                                    o = t.createEvent("MouseEvents"),
                                    l = t.createElement("a");
                                l.download = n,
                                    l.href = e.URL.createObjectURL(r),
                                    l.dataset.downloadurl = ["text/json", l.download, l.href].join(":"),
                                    o.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                                    l.dispatchEvent(o)
                            })
                        },
                        logTimerStart: function(e) {
                            d && s.time(e)
                        },
                        logTimerEnd: function(e) {
                            d && s.timeEnd(e)
                        }
                    }
                } ());
        n.ns("Helpers.Console", r)
    } (window, document, navigator, window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers,
            n = a.Utils,
            i = n.String,
            s = function(e) {
                this.urlMatch = /\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i,
                    this.options = {},
                    this.mid = e.mid || "r",
                    this.appid = e.appid,
                    this.session = e.session,
                    this.env = e.env || "live",
                    this.pf = e.pf || "vip_m-ep_html5-html5",
                    this.pfkey = "pfkey",
                    this.receipt = e.receipt || "",
                    this.protocol = e.protocol || "http",
                "live" == this.env && (this.protocol = "https", s.env = 1),
                    this.domain = i.format("{prefix}api.unipay.qq.com", {
                        prefix: "sandbox" == this.env ? "sandbox.": "dev" == this.env ? "dev.": ""
                    });
                var t = "sandbox" == this.env ? "sandbox.": "dev" == this.env ? "sandbox.": "";
                this.pullURI = i.format("{protocol}://{prefix}jspay.qq.com/jsonp", {
                    protocol: this.protocol,
                    prefix: t
                }),
                    this.separateURI = i.format("{protocol}://{prefix}pay.qq.com/enterprise/separate.shtml", {
                        protocol: this.protocol,
                        prefix: t
                    }),
                    this.checkSIGURI = i.format("{protocol}://{prefix}pay.qq.com/enterprise/php/checkSig.php", {
                        protocol: this.protocol,
                        prefix: t
                    }),
                    n.extend(this.options, e)
            };
        s.transaction_id = (1e4 * Math.random() + 1e3).toString().replace(".", ""),
            s.pid = 1,
            s.report = function(e) {
                var t = {},
                    a = [];
                if (n.extend(t, e || {},
                    {
                        6 : +new Date,
                        13 : s.pid++,
                        29 : s.transaction_id,
                        50 : navigator.userAgent,
                        31 : "enterprisepay_v1",
                        36 : window.location.href
                    }), "object" == typeof t[8]) {
                    var i = [];
                    for (var r in t[8]) {
                        var o = "time" == r ? "times": r;
                        i.push(o + "=" + t[8][r])
                    }
                    t[8] = i.join("&")
                }
                n.each(t,
                    function(e, t) {
                        a.push(e + "=" + encodeURIComponent(t))
                    });
                var l = 1 == s.env ? "//szmg.qq.com/cgi-bin/log_data.fcg?num=1&record0=" + a.join("|") + "&rr=" + Math.random() : "//sandbox.api.unipay.qq.com/v1/900/15499/log_data?num=1&record0=" + a.join("|") + "&rr=" + Math.random(); (new Image).src = l
            },
            s.prototype = s.fn = {
                urls: {
                    goodsInfo: "qz_goods_info",
                    queryOrder: "query_order",
                    queryRefund: "query_refund",
                    refund: "refund",
                    saveGoods: "qz_save_goods"
                },
                host: function(e) {
                    return n.String.format("{protocol}://{host}", {
                        protocol: e ? "https": this.protocol || "https",
                        host: this.domain
                    })
                },
                forceProtocol: function(e, t) {
                    return e.replace(/http(\b|s)(?=:)/i, t ? "https": this.protocol)
                },
                cgiToUrl: function(e, t, a) {
                    return this.urlMatch.test(e) ? t ? e: this.forceProtocol(e, a) : n.String.format("{host}{path}", {
                        host: this.host(a),
                        path: this.cgiToPath(e)
                    })
                },
                cgiToPath: function(e) {
                    var t = this.urls[this.env] ? this.urls[this.env][e] || this.urls[e] || e: this.urls[e] || e;
                    return n.String.format("/v1/{mid}/{appid}/{cgi}", {
                        appid: this.appid,
                        mid: this.mid || "r",
                        cgi: t
                    })
                }
            },
            e.ns("Helpers.Request", s)
    } (window.getNs()),
    function(e, t, a) {
        "use strict";
        var n = e.Helpers.Utils;
        n.extend(e.Helpers.Request.fn, {
            jsonp: function(a, i, s) {
                var r = t.Deferred(),
                    o = a.replace(/\?.*$/, "").split("/"),
                    l = o[o.length - 1],
                    c = "request." + l + ".",
                    d = function() {},
                    p = function() {};
                if (e && e.Data) {
                    var u = e.Data.get("service.report"),
                        h = e.Data.get("service.Hreport");
                    "function" == typeof u && (d = u),
                    "function" == typeof h && (p = h)
                }
                d(c + "start");
                var f = +new Date;
                return this.ajax(a, "GET", n.extend({
                        error: function() {
                            var e = {};
                            e[l] = +new Date - f,
                                d(c + "fail", {
                                    8 : {
                                        code: -1,
                                        time: +new Date - f
                                    }
                                }),
                                p(e),
                                r.reject()
                        },
                        success: function(e) {
                            var t = +new Date - f,
                                a = {};
                            a[l] = t,
                                0 == e.ret ? d(c + "success", {
                                    8 : {
                                        time: t
                                    }
                                }) : d(c + "fail", {
                                    8 : {
                                        time: t,
                                        code: e.ret
                                    }
                                }),
                                p(a),
                                r.resolve(e)
                        },
                        isJSONP: !0
                    },
                    i, s)),
                    r.promise()
            },
            ajax: function(e, a, i, s) {
                i = t.extend({
                        receipt: this.receipt,
                        pf: this.pf,
                        pfkey: this.pfkey
                    },
                    i || {}),
                e == this.checkSIGURI && delete i.receipt,
                    a = a || "GET";
                var r = i.session || this.session,
                    o = null,
                    l = i.jsonp,
                    c = i.forceHttps,
                    d = i.jsonpCallback,
                    p = i.userKey,
                    u = i.passwordKey;
                delete i.session,
                    delete i.userKey,
                    delete i.forceHttps,
                    delete i.passwordKey;
                var h = {
                    url: this.cgiToUrl(e, s, c),
                    cache: !0,
                    type: a
                };
                return i.isJSONP && (h.dataType = "jsonp"),
                "function" == typeof i.error && (h.error = i.error, delete i.error),
                "function" == typeof i.success && (h.success = i.success, delete i.success),
                    delete i.isJSONP,
                i.timeout && (h.timeout = i.timeout),
                    delete i.timeout,
                l && ("format" == l && d ? i.format = "jsonp_" + d: h.jsonp = l, delete i.jsonp),
                d && (h.jsonpCallback = d, delete i.jsonpCallback),
                    i.ignoreSession ? (delete i.ignoreSession, h.data = n.extend({},
                        i)) : (delete i.ignoreSession, h.data = n.extend({},
                        i, r.getSessionParam(p, u))),
                    o = t.ajax(h)
            }
        })
    } (window.getNs(), "undefined" != typeof jQuery ? jQuery: window.getNs().ns("Helpers.Query")),
    function(e, t) {
        "use strict";
        var a = e.Helpers,
            n = e.Data,
            i = a.Console,
            s = a.Utils,
            r = function(t, a, s) {
                var r = function(t) {
                    if (n.get("data.isSeparate") || top != window) switch (i.log("comet:" + t), parseInt(t, 10)) {
                        case 0:
                            s(e.Enum.PayStep.Pending);
                            break;
                        case 10:
                        case 20:
                        case 1e3:
                            s(e.Enum.PayStep.Success);
                            break;
                        case 1:
                    }
                };
                this.jsonp(this.pullURI, {
                    jsonp: "cb",
                    uuid: t,
                    timeout: a,
                    ignoreSession: !0,
                    mutil: 1,
                    uin: "383466934",
                    skey: "txqyzf"
                }).done(r).fail(function(t) {
                    t && "abort" == t.statusText || s(e.Enum.PayStep.Pending)
                })
            };
        s.extend(a.Request.fn, {
            checkOrder: r
        })
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers,
            n = e.Data,
            i = a.Console,
            s = a.Utils,
            r = function(t, a, r) {
                if (!t) return void i.log("uuid is undefined");
                var o = s.genJSONPCallback("orderresult");
                this.jsonp("getResult", {
                    jsonp: "format",
                    jsonpCallback: o,
                    accounttype: "bg",
                    uuid: t,
                    timeout: a
                }).done(function(t) {
                    if (n.get("data.isSeparate") || top != window) if (0 == t.ret) switch (parseInt(t.provide_result || "-1", 10)) {
                        case 1:
                            r(e.Enum.PayStep.Success);
                            break;
                        default:
                            r(e.Enum.PayStep.Pending)
                    } else r(e.Enum.PayStep.Pending)
                }).fail(function(t) {
                    t && "abort" == t.statusText || r(e.Enum.PayStep.Pending)
                })
            };
        s.extend(a.Request.fn, {
            getOrderResult: r
        }),
            a.Request.fn.urls.getResult = "get_pay_result"
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.Helpers,
            n = (e.Data, a.Console),
            i = a.Utils,
            s = function(e, t) {
                return e.sig ? void this.jsonp(this.checkSIGURI, e).done(function(e) {
                    t(0 == e.ret)
                }).fail(function(e) {
                    t(!1)
                }) : void n.log("sig is undefined")
            };
        i.extend(a.Request.fn, {
            checkSig: s
        })
    } (window.getNs()),
    function(e, t, a, n) {
        "use strict";
        var i = function(e) {
            return i.inst ? i.inst: (i.inst = this, this.$container = e || a("body"), this.options = {
                template: "mask/template.default"
            },
                void(this.$el = a(t(this.options.template, {})).appendTo(this.$container)))
        };
        i.prototype = i.fn = {
            show: function() {
                this.$el.addClass("show")
            },
            hide: function() {
                this.$el.removeClass("show")
            }
        },
            e.ns("UI.Mask", i)
    } (window.getNs(), template, "undefined" != typeof jQuery ? jQuery: window.getNs().ns("Helpers.Query")),
    function(e, t, a, n) {
        "use strict";
        var i = e.Helpers,
            s = function(t, n, i) {
                var r = function(e, t, n) {
                    e.callbacks = a.extend({
                            onClick: a.noop
                        },
                        n),
                        e.options = a.extend({
                                template: "modal/template.simple"
                            },
                            t)
                };
                if (s.inst) {
                    var o = s.inst;
                    return r(o, n, i),
                        o
                }
                s.inst = this,
                    this.$container = t || a("body"),
                    this.mask = new e.UI.Mask,
                    this.$el = a('<div class="ep-question-guide"></div>').appendTo(this.$container),
                    r(this, n, i),
                    this.bindEvent()
            };
        s.prototype = s.fn = {
            show: function(e) {
                this.$context && !e || (this.$context && this.$context.remove(), this.options = a.extend(this.options, e), this.$context = a(t(this.options.template, this.options.data || {})).appendTo(this.$el)),
                    this.$el.addClass("show");
                var n = this.$el.find(".modal-iframe"),
                    s = n.height();
                this.mask.show(),
                    n.height(s - 1),
                    i.Utils.delayRun("iframe.show",
                        function() {
                            n.height(s)
                        },
                        500)
            },
            hide: function() {
                this.mask.hide(),
                    this.$el.removeClass("show")
            },
            bindEvent: function() {
                var e = this;
                this.$el.delegate(".ep-question-guide-close", "click",
                    function(t) {
                        e.hide(),
                            e.callbacks.onClick()
                    })
            }
        },
            e.ns("UI.SimpleModal", s)
    } (window.getNs(), template, jQuery),
    function(e, t, a, n) {
        "use strict";
        var i = function(t, n, s) {
            this._defaultOptions = {
                type: "default",
                cancelBtn: !0,
                sureBtnText: "已成功支付",
                cancelBtnText: "未完成支付"
            };
            var r = function(e, t, n) {
                e.callbacks = a.extend({
                        onClick: a.noop
                    },
                    n),
                    e.options = a.extend({
                            template: "modal/template.default",
                            data: e._defaultOptions
                        },
                        t)
            };
            if (i.inst) {
                var o = i.inst;
                return r(o, n, s),
                    o
            }
            i.inst = this,
                this.$container = t || a("body"),
                this.$el = a('<div class="ep-modal"></div>').appendTo(this.$container),
                this.mask = new e.UI.Mask,
                r(this, n, s),
                this.bindEvent()
        };
        i.prototype = i.fn = {
            show: function(e) {
                this.$context && !e || (this.$context && this.$context.remove(), this.options.data = a.extend({},
                    this._defaultOptions, e.data || {}), this.$context = a(t(this.options.template, this.options.data || {})).appendTo(this.$el)),
                    this.$el.addClass("show"),
                    this.mask.show()
            },
            setCallBack: function(e) {
                this.callbacks = a.extend({
                        onClick: a.noop
                    },
                    e)
            },
            hide: function() {
                this.mask.hide(),
                    this.$el.removeClass("show")
            },
            bindEvent: function() {
                var e = this;
                this.$el.delegate("a", "click",
                    function(t) {
                        var n = a(this),
                            i = n.data("active");
                        e.hide(),
                            e.callbacks.onClick(i, e.options.data.type)
                    })
            }
        },
            e.ns("UI.Modal", i)
    } (window.getNs(), template, "undefined" != typeof jQuery ? jQuery: window.getNs().ns("Helpers.Query")),
    function(e, t, a, n) {
        "use strict";
        function i(e, t, n) {
            this.$container = e,
                this.options = a.extend({
                        allowReClick: !0,
                        template: "tab/template.default",
                        highlightHTML: '<i class="ep-icon ep-icon-selected"></i>'
                    },
                    t),
                this.tabMap = {},
                this.callbacks = a.extend({
                        onClick: a.noop
                    },
                    n),
                this.type = this.options.data.defaultSelect;
            var i = this;
            a.each(this.options.data.data,
                function(e, t) {
                    i.tabMap[t.val] = a.extend({},
                        t)
                })
        }
        i.prototype = i.fn = {
            init: function() {
                if (this.$el = a(t(this.options.template, this.options.data)).appendTo(this.$container), this.bindEvent(), this.type) {
                    var e = 0,
                        n = this;
                    a.each(this.options.data.data,
                        function(t, a) {
                            if (a.val == n.type) return e = t,
                                !1
                        }),
                        this.$el.find("li").eq(e).trigger("click")
                }
            },
            bindEvent: function() {
                var e = this;
                this.$el.delegate("li", "click",
                    function(t) {
                        t.preventDefault();
                        var n = e.options.data.selectedClass,
                            i = a(this),
                            s = i.data("type"),
                            r = e.tabMap[s];
                        if (t.isTrigger || !i.hasClass(n)) {
                            if (e.$el.find("." + n).removeClass(n), e.$el.find("i.ep-icon-selected").remove(), !r.data.isValidChannel) return;
                            i.addClass(n),
                                i.append(e.options.highlightHTML),
                                e.type = s,
                                e.callbacks.onClick(e.type)
                        } else if (e.options.allowReClick) {
                            if (!r.data.isValidChannel) return;
                            e.callbacks.onClick(e.type)
                        }
                    })
            }
        },
            e.ns("UI.Tab", i)
    } (window.getNs(), template, "undefined" != typeof jQuery ? jQuery: window.getNs().ns("Helpers.Query")),
    function(e, t, a, n) {
        "use strict";
        function i(e, t, n) {
            this.$container = e,
                this.options = a.extend({
                        allowReClick: !0,
                        style: "default",
                        template: "channel/template.wrap.default"
                    },
                    t),
                this.callbacks = a.extend({
                        onClick: a.noop,
                        onQrCodeInfo: a.noop,
                        onRefresh: a.noop,
                        onRefreshQRCode: a.noop
                    },
                    n),
                this.channelMap = {};
            var i = this;
            a.each(this.options.data.itemsData,
                function(e, t) {
                    i.channelMap[t.val] = a.extend({},
                        t)
                }),
                this.type = this.options.data.defaultSelect,
                this.showmasktip = !1
        }
        var s = e.Enum,
            r = e.Data,
            o = function(e, t) {
                var n = {};
                if ("mail" == t) {
                    var i = {};
                    a.each(e.itemsData,
                        function(e, t) {
                            i[t.val] = a.extend({},
                                t)
                        }),
                        n = a.extend({
                                client: e.clientInfo,
                                selectedClass: e.channelData.selectedClass,
                                style: t,
                                sub: i[e.defaultSubSelect || s.PayChannel.BANK]
                            },
                            i[e.defaultSelect])
                } else n = {
                    style: t,
                    client: e.clientInfo,
                    defaultSelect: e.defaultSelect,
                    selectedClass: e.channelData.selectedClass,
                    data: e.itemsData.slice(0)
                };
                return n
            },
            l = function(e, t, a) {
                return {
                    allowReClick: a,
                    defaultSelect: e.defaultSelect,
                    selectedClass: e.tabData.selectedClass,
                    data: e.itemsData.slice(0)
                }
            };
        i.prototype = i.fn = {
            _mask: function() {
                var e = a("#ep-black-mask");
                if (e.size()) return e;
                var t = a(".container");
                return t.size() ? t.append('<div class="ep-black-mask" id="ep-black-mask"></div>') : a("body").append('<div class="ep-black-mask" id="ep-black-mask"></div>'),
                    a("#ep-black-mask")
            },
            triggerClick: function(e) {
                var t = this,
                    a = this.callbacks.onBeforeClick ||
                        function(e, t) {
                            t()
                        };
                a(e,
                    function() {
                        t.callbacks.onClick(e,
                            function() {
                                var a = t.callbacks.onAfterClick;
                                a && a(e)
                            })
                    })
            },
            init: function() {
                this.$el = a(t(this.options.template, o(this.options.data, this.options.style, this.options.allowReClick))).appendTo(this.$container),
                    this.$eTips = this.$el.find(".ep-qrcode-error-tip");
                var n = this.$container.find(".ep-pay-method-list-con"),
                    i = this.$container.find(".ep-pay-method-list-tit"),
                    c = this;
                "default" == this.options.style ? (this.tab = new e.UI.Tab(i, {
                        data: l(this.options.data)
                    },
                    {
                        onClick: function(e) {
                            e != s.PayChannel.OFFLINE || c.showmasktip || (c.showmasktip = !0, r.get("data").embed || c._mask().show(), a("#ep-highlight-tooltip").delegate(".ep-highlight-btn", "click",
                                function() {
                                    a("#ep-highlight-tooltip").hide(),
                                        a("#ep-highlight-label").removeClass("ep-highlight"),
                                        c._mask().hide()
                                }).show());
                            var t = c.options.data.channelData.selectedClass;
                            if (c.$select && 0 != c.$select.length) c.$select.removeClass(t);
                            else {
                                var i = n.find("." + t);
                                i.length > 0 && i.removeClass(t)
                            }
                            c.$select = n.find(".channel-" + e).addClass(t),
                                c.type = e,
                                c.$eTips.hide(),
                            c.channelMap[e].data && c.channelMap[e].data.delay || c.triggerClick(e)
                        }
                    }), this.tab.init()) : this.channelMap[this.type].data.isValidChannel && (this.$select = this.$el.find(".ep-pay-main"), this.triggerClick(this.type)),
                    this.bindEvent()
            },
            setPreQRImage: function(e) {
                this.$select = this.$container.find(".ep-pay-method-list-con").find(".channel-" + e).addClass(this.options.data.channelData.selectedClass),
                    this.setQRImage()
            },
            _report: function(e, t) {
                "function" == typeof this.options.report && this.options.report(e, t)
            },
            _qrCodeInfo: function(e) {
                "function" == typeof this.callbacks.onQrCodeInfo && this.callbacks.onQrCodeInfo(e)
            },
            setQRImage: function(e, t) {
                if (this.$select) {
                    this.$select.find(".ep-qrcode-loading").addClass("hide");
                    var n = this.$select.find(".ep-wxpay-qrcode-wrap").removeClass("hide"),
                        i = n.find("img"),
                        s = this;
                    if (e && i.size()) {
                        s._report("request.getQrCode.start", {
                            8 : {
                                channel: t
                            }
                        });
                        var r = +new Date;
                        i.attr("src", e),
                            i.one("load",
                                function() {
                                    s._qrCodeInfo({
                                        load: 1
                                    });
                                    var e = (new Date).getTime() - r;
                                    s._report("request.getQrCode.success", {
                                        8 : {
                                            channel: t,
                                            time: e
                                        }
                                    }),
                                    window.H_T_Report && H_T_Report({
                                        getQrCode: e
                                    })
                                }),
                            i.one("error",
                                function() {
                                    s._qrCodeInfo({
                                        load: 0,
                                        url: e
                                    }),
                                        s.showError(!0),
                                        s._report("request.getQrCode.fail", {
                                            8 : {
                                                channel: t
                                            }
                                        }),
                                        a(this).attr("src", "")
                                })
                    }
                }
            },
            showError: function(e, t) {
                var a = this.options.data.channelData.selectedClass;
                e ? (this.$eTips.find(".ep_warning_text").html(t || this.channelMap[this.type].data && this.channelMap[this.type].data.eTips || "暂时无法获取" + this.channelMap[this.type].txt + "二维码，请尝试其他支付方式"), this.$eTips.show(), this.type != s.PayChannel.BANK && this.$select.removeClass(a)) : (this.$eTips.hide(), this.$select.addClass(a))
            },
            bindEvent: function() {
                var e = this,
                    t = function(t, a, n) {
                        var i = "selected",
                            s = e.$el.find(".layer-neat-l .credit"),
                            o = e.$el.find(".layer-neat-l .debit"),
                            l = function(e, t) {
                                t ? e.addClass("disabled") : e.removeClass("disabled"),
                                t && e.removeClass(i)
                            };
                        if (!a || !t) return l(s, !0),
                            l(o, !0),
                            null;
                        var c = r.get("static.bankList")[t][a];
                        return c.credit ? l(s) : (l(s, !0), o.addClass(i), n = "debit"),
                            c.debit ? l(o) : (l(o, !0), s.addClass(i), n = "credit"),
                        n || (o.addClass(i), n = "debit"),
                            n
                    },
                    n = function(t) {
                        var a = e.$el.find(".mod-bank ." + t + " .selected");
                        return a.length > 0 ? a.data("bank") : null
                    };
                this.$el.find("#payerName").bind("keyup change",
                    function(t) {
                        t.preventDefault();
                        var n = a(this),
                            i = n.val(),
                            s = n.data("action"),
                            o = n.data("pattern"),
                            l = n.parent(),
                            c = new RegExp(o, "igm"),
                            d = i.length;
                        d < parseInt(n.attr("minlength"), 10) || d > parseInt(n.attr("maxlength"), 10) ? (n.addClass("error"), l.find(".ep-sprite3").addClass("hide"), l.find(".input-tips").text(n.data("lengthtips")).removeClass("hide"), e.$el.find(".offline-pay-operate").addClass("disabled")) : c.test(i) ? /^\d+$/.test(i) ? (n.addClass("error"), l.find(".ep-sprite3").addClass("hide"), l.find(".input-tips").text("付款人户名不能为纯数字").removeClass("hide"), e.$el.find(".offline-pay-operate").addClass("disabled")) : (n.removeClass("error"), l.find(".ep-sprite3").removeClass("hide"), l.find(".input-tips").addClass("hide"), e.$el.find(".offline-pay-operate").removeClass("disabled"), r.set("data." + s, n.val())) : (n.addClass("error"), l.find(".ep-sprite3").addClass("hide"), l.find(".input-tips").text(n.data("patterntips")).removeClass("hide"), e.$el.find(".offline-pay-operate").addClass("disabled"))
                    }),
                    this.$el.delegate("label", "click",
                        function(i) {
                            i.preventDefault();
                            var s, o, l, c, d, p, u, h = a(this),
                                f = h.data("action"),
                                g = "selected";
                            if (f) {
                                if (o = e.$el.find(".layer-neat-l.banktype .selected"), p = o.data("banktype"), s = e.$el.find(".mod-bank ." + p), l = e.$el.find(".mod-bank ." + p + " .selected"), d = l.length > 0 ? l.data("bank") : null, c = e.$el.find(".layer-neat-l.cardtype .selected"), l.get(0) == h.get(0) || c.get(0) == h.get(0) || o.get(0) == h.get(0)) return;
                                switch (f) {
                                    case "banktype":
                                        o && o.removeClass(g),
                                            s.hide(),
                                            h.addClass(g),
                                            p = h.data(f),
                                            s = e.$el.find(".mod-bank ." + p).show(),
                                            d = n(p),
                                            u = t(p, d, e.$el.find(".layer-neat-l.cardtype .selected").data("cardtype"));
                                        break;
                                    case "bank":
                                        l && l.removeClass(g),
                                            h.addClass(g),
                                            d = n(p),
                                            u = t(p, d, e.$el.find(".layer-neat-l.cardtype .selected").data("cardtype"));
                                        break;
                                    case "cardtype":
                                        if (h.hasClass("disabled")) return;
                                        c && c.removeClass(g),
                                            h.addClass(g),
                                            u = t(p, d, h.data(f))
                                }
                                p && d && u ? e.$el.find(".ep-pay-operate a").removeClass("disabled") : e.$el.find(".ep-pay-operate a").addClass("disabled"),
                                p && r.set("data.bankType", p),
                                d && r.set("data.bank", d),
                                u && r.set("data.cardType", u)
                            }
                        }),
                    this.$el.delegate("a", "click",
                        function(t) {
                            t.preventDefault();
                            var n = a(this),
                                i = n.data("type"),
                                s = n.data("action");
                            if (!n.hasClass("disabled")) {
                                switch (s) {
                                    case "refresh":
                                        e.callbacks.onRefreshPage(e.type);
                                        break;
                                    case "delay":
                                        e.triggerClick(e.type)
                                }
                                i && (e.type != i || e.options.allowReClick) && (e.type = i, e.triggerClick(i))
                            }
                        })
            }
        },
            e.ns("UI.PayChannel", i)
    } (window.getNs(), template, "undefined" != typeof jQuery ? jQuery: window.getNs().ns("Helpers.Query")),
    function(e, t, a, n) {
        "use strict";
        function i(e, t, n) {
            this.$container = e,
                this.options = a.extend({
                        template: "order/template.default"
                    },
                    t),
                this.callbacks = a.extend({
                        onClick: a.noop
                    },
                    n)
        }
        var s = e.UI;
        i.prototype = i.fn = {
            init: function() {
                this.$el = a(t(this.options.template, this.options.data || {})).appendTo(this.$container),
                    this.$detail = this.$el.parent().find(".ep-order-con"),
                    this.bindEvent()
            },
            bindEvent: function() {
                var e = this;
                this.$el.delegate("a", "click",
                    function(t) {
                        var n = a(this),
                            i = "ep-order-active",
                            r = n.data("action");
                        "expend" == r ? n.hasClass(i) ? (n.removeClass(i), e.$detail.removeClass("show").addClass("hide")) : (n.addClass(i), e.$detail.removeClass("hide").addClass("show")) : "issue" == r && (e.modal || (e.modal = new s.SimpleModal(null, {
                                data: {
                                    url: e.options.data.issueUrl
                                }
                            },
                            {
                                onClick: function() {}
                            })), e.modal.show()),
                            e.callbacks.onClick(r)
                    })
            }
        },
            e.ns("UI.Order", i)
    } (window.getNs(), template, jQuery),
    function(e, t, a, n) {
        "use strict";
        function i(e, t, n) {
            this.$container = e,
                this.options = a.extend({
                        template: "order/template.success.default"
                    },
                    t),
                this.callbacks = a.extend({
                        onClick: a.noop
                    },
                    n)
        }
        i.prototype = i.fn = {
            init: function() {
                this.$el = a(t(this.options.template, this.options.data || {})).appendTo(this.$container),
                    this.$detail = this.$el.parent().find(".ep-order-con"),
                    this.bindEvent()
            },
            redraw: function(e) {
                this.options.data = e,
                this.$el && (this.$el.undelegate("a", "click"), this.$el.remove()),
                    this.$el = a(t(this.options.template, e || {})).appendTo(this.$container),
                    this.$detail = this.$el.parent().find(".ep-order-con"),
                    this.bindEvent()
            },
            bindEvent: function() {
                var e = this;
                this.$el.delegate("a", "click",
                    function(t) {
                        var n = a(this),
                            i = "ep-order-active",
                            s = n.data("active");
                        s ? e.callbacks.onClick(s) : n.hasClass(i) ? (n.removeClass(i), e.$detail.addClass("hide")) : (n.addClass(i), e.$detail.removeClass("hide"))
                    })
            }
        },
            e.ns("UI.OrderSuccess", i)
    } (window.getNs(), template, jQuery),
    function(e, t, a, n) {
        "use strict";
        function i(e, t, n) {
            this.$container = e,
                this.options = a.extend({
                        template: "order/template.fail.default"
                    },
                    t),
                this.callbacks = a.extend({
                        onClick: a.noop
                    },
                    n)
        }
        i.prototype = i.fn = {
            init: function() {
                this.$el = a(t(this.options.template, this.options.data || {})).appendTo(this.$container),
                    this.$detail = this.$el.parent().find(".ep-order-con"),
                    this.bindEvent()
            },
            redraw: function(e) {
                this.options.data = e,
                this.$el && (this.$el.undelegate("a", "click"), this.$el.remove()),
                    this.$el = a(t(this.options.template, e || {})).appendTo(this.$container),
                    this.$detail = this.$el.parent().find(".ep-order-con"),
                    this.bindEvent()
            },
            bindEvent: function() {
                var e = this;
                this.$el.delegate("a", "click",
                    function(t) {
                        var n = a(this),
                            i = "ep-order-active",
                            s = n.data("active");
                        s ? e.callbacks.onClick(s) : n.hasClass(i) ? (n.removeClass(i), e.$detail.addClass("hide")) : (n.addClass(i), e.$detail.removeClass("hide"))
                    })
            }
        },
            e.ns("UI.OrderFail", i)
    } (window.getNs(), template, jQuery),
    function(e, t) {
        "use strict";
        var a = TEG.UI,
            n = TEG.Enum,
            i = TEG.Data,
            s = TEG.Helpers,
            r = (s.Console, TEG.Encrypt.MD5),
            o = TEG.Service.StatusMap,
            l = s.Utils,
            c = {},
            d = function(e) {
                return $.inArray(e.ret, [1875, 1876]) > -1 ? e.msg: null
            },
            p = null,
            u = function(e) {
                var t = $.inArray(i.get("data.channel"), e) > -1 ? i.get("data.channel") : e[0];
                return "mail" == i.get("data.style") && t == n.PayChannel.BANK && (t = n.PayChannel.WXPAY),
                    t
            },
            h = function(e) {
                var t, a, s, r, o = i.get("data.allowChannels"),
                    c = [],
                    d = [],
                    p = i.get("static"),
                    u = "template.{channel}.default",
                    h = l.PayService.getPrice(e);
                return $.each(o,
                    function(e, o) {
                        a = p[o] || {},
                            r = n.ChannelDesc[o] || a.name || o,
                            t = !(o != n.PayChannel.BANK && !a.isExt) || (!a.max || h <= a.max),
                        t && c.push(o);
                        var f = {};
                        if (o == n.PayChannel.BANK) {
                            var g = i.get("data.clientData");
                            f.bankModel = g.bankMode,
                                f.epBankPriority = g.epBankPriority,
                                f.bankList = {};
                            var v = p.bankList;
                            for (var m in v) {
                                f.bankList[m] = [];
                                for (var y in v[m]) f.bankList[m].push($.extend({
                                        logo: y,
                                        key: y
                                    },
                                    v[m][y]))
                            }
                        }
                        s = {
                            txt: r,
                            val: o,
                            data: $.extend({
                                    isValidChannel: t,
                                    invalidTips: r + "暂不支持5万以上额度",
                                    className: o,
                                    template: l.String.format(u, {
                                        channel: a.isExt ? "other": o
                                    })
                                },
                                a, f)
                        },
                            d.push(s)
                    }),
                    d.sort(function(e, t) {
                        return e.data.isValidChannel ^ t.data.isValidChannel ? e.data.isValidChannel ? 0 : 1 : 0
                    }),
                1 == c.length && $.inArray(n.PayChannel.BANK, c) > -1 && d.sort(function(e, t) {
                    return t.val == n.PayChannel.BANK ? 1 : 0
                }),
                    {
                        channelData: d,
                        validInnerChannels: c
                    }
            },
            f = function() {
                return f.inst ? f.inst: this instanceof f ? void(f.inst = this) : new f
            };
        f.inst = null,
            f.prototype = f.fn = {
                _comet: function() {
                    this._cometRound(i.get("data.uuid"), {
                        onSuccess: function() {
                            i.get("service.go")(n.PayStep.Success),
                                l.delayRun("ep.pullcomet",
                                    function() {},
                                    0)
                        },
                        onFail: function() {
                            i.get("service.go")(n.PayStep.Fail)
                        }
                    })
                },
                _pullComet: function(e) {
                    e = e ? e: 0,
                        e++;
                    var t = this;
                    l.delayRun("ep.pullcomet",
                        function() {
                            l.inArray(i.get("data.channel"), [n.PayChannel.WXPAY, n.PayChannel.QQPAY]) > -1 && i.get("service.cgi").getOrderResult(i.get("data.uuid"), 3e3,
                                function(a) {
                                    switch (a) {
                                        case n.PayStep.Success:
                                            i.get("service.go")(a);
                                            break;
                                        case n.PayStep.Pending:
                                        case n.PayStep.Fail:
                                            t._pullComet(e)
                                    }
                                })
                        },
                        3e4 * e)
                },
                _cometRound: function(e, t) {
                    var a = function(e, t) {
                        var a = $.noop; (new Date).getTime();
                        return a = function() {
                            i.get("service.cgi").checkOrder(e, null,
                                function(e) {
                                    switch (e) {
                                        case n.PayStep.Success:
                                            t.onSuccess();
                                            break;
                                        case n.PayStep.Pending:
                                            l.delayRun("comet.pull",
                                                function() {
                                                    a()
                                                },
                                                1e3);
                                            break;
                                        case n.PayStep.Fail:
                                            t.onFail()
                                    }
                                })
                        }
                    } (e, t);
                    a()
                },
                _orderHandler: function(e, t, a) {
                    var s, r = this,
                        d = i.get("static"),
                        u = i.get("data"),
                        h = d[e],
                        f = l.String.format("ep.scan.{channel}", {
                            channel: u.channel,
                            appid: u.appId
                        }),
                        g = d.genQRService;
                    switch ("dev" !== u.env && "sandbox" !== u.env || (g = d.genQRService_sandbox), e) {
                        case n.PayChannel.WXPAY:
                            var v = t.wx_info;
                            s = this.isNativeWxPay ? g + "?" + $.param({
                                size: h.size || 150,
                                orig: 1,
                                url: v.wx_sign
                            }) : g + "?" + $.param({
                                size: h.size || 150,
                                url: h.payUrl + "?" + $.param({
                                    style: "ep",
                                    pf: f,
                                    usr: u.session ? u.session.getUser() : "",
                                    env: u.env,
                                    id: u.appId,
                                    title: r.serviceName,
                                    a: v.wx_appid,
                                    t: v.wx_time,
                                    n: v.wx_noncenum,
                                    p: v.wx_package,
                                    s: v.wx_signtype || "SHA1",
                                    si: v.wx_sign,
                                    showwxpaytitle: 1
                                })
                            }),
                                this.setQRImg(s, e),
                                c[e] = {
                                    qrUrl: s
                                };
                            break;
                        case n.PayChannel.QQPAY:
                            var m = t.qqwallet_info;
                            s = g + "?" + $.param({
                                size: h.size || 150,
                                url: h.payUrl + "?" + $.param({
                                    _wv: 1027,
                                    pf: f,
                                    usr: u.session ? u.session.getUser() : "",
                                    env: u.env,
                                    id: u.appId,
                                    target: "qr",
                                    title: r.serviceName,
                                    t: m.qqwallet_tokenId,
                                    a: m.qqwallet_appId,
                                    b: m.qqwallet_bargainorId
                                })
                            }),
                                this.setQRImg(s, e),
                                c[e] = {
                                    qrUrl: s
                                };
                            break;
                        case n.PayChannel.OFFLINE:
                            var y = t.remitpay_info;
                            c[e] = {
                                data: y
                            };
                            break;
                        case n.PayChannel.BANK:
                            var b = t.cft_info.cft_url;
                            1 == u.clientData.bankMode ? (c[e] = {
                                action: function(e) {
                                    e ? window.open(this.url) : p ? p.location.href = this.url: i.get("service").notify($.extend({
                                            url: this.url
                                        },
                                        o["open-window"])),
                                        l.delayRun("bank.jump",
                                            function() {
                                                i.get("service.go")(n.PayStep.Pending)
                                            },
                                            1e3)
                                },
                                url: b
                            },
                                c[e].action()) : (p ? p.location.href = b: i.get("service").notify($.extend({
                                    url: b
                                },
                                o["open-window"])), l.delayRun("bank.jump",
                                function() {
                                    i.get("service.go")(n.PayStep.Pending)
                                },
                                1e3));
                            break;
                        case n.PayChannel.FbankCard:
                            var b = t.cft_info.cft_url;
                            p ? p.location.href = b: i.get("service").notify($.extend({
                                    url: b
                                },
                                o["open-window"])),
                                l.delayRun("bank.jump",
                                    function() {
                                        i.get("service.go")(n.PayStep.Pending)
                                    },
                                    1e3);
                            break;
                        default:
                            var w = d[e].url;
                            w = l.URL.addParam(w, {
                                extData: $.param({
                                    pf: i.get("data.pf"),
                                    outTradeNo: i.get("data.outTradeNo"),
                                    tokenId: i.get("data.tokenId")
                                })
                            }),
                                window.open(w)
                    }
                    a()
                },
                _order: function(e, t) {
                    var a, s = ((new Date).getTime(), encodeURIComponent, this.data.orderInfo),
                        o = l.PayItem.payItemArrayToMap(s.payItemInfo)[0],
                        c = i.get("static"),
                        d = i.get("data"),
                        p = l.genJSONPCallback("goods_save"),
                        u = i.get("service.cgi").cgiToUrl("saveGoods") + "?",
                        h = l.URL.delParam(s.paySaveUrl || u, "token_id"),
                        f = {
                            uuid: i.get("data.uuid"),
                            transaction_id: i.get("data.tokenId"),
                            buy_quantity: o.amount,
                            sck: r.hex_md5(d.appId + d.session.getPWD()),
                            platform_from_page: d.platform,
                            uni_pubacct_type: "",
                            _buy4: 1,
                            bank: e == n.PayChannel.BANK ? 1 : 0,
                            bank_type: "",
                            pushtype: "NodeJS",
                            wx_direct_pay: 0,
                            wx_publice_pay: 1,
                            out_trade_no: s.outTradeNo,
                            _price: s.totalPrice
                        },
                        a = h + "&";
                    i.get("service.report");
                    switch (e) {
                        case n.PayChannel.FbankCard:
                            f.pay_method = "bank:77";
                            var g = i.get("service.cgi").forceProtocol(i.get("static")[n.PayChannel.FbankCard].successPage);
                            f.callback_url = g;
                            break;
                        case n.PayChannel.BANK:
                            f.pay_method = "bank:67",
                                1 != d.clientData.bankMode && d.bankType ? f.bank_type = c.bankList[d.bankType][d.bank][d.cardType] || "8110": f.bank_type = "8110";
                            var g = i.get("service.cgi").forceProtocol(i.get("static")[n.PayChannel.BANK].successPage);
                            f.callback_url = g;
                            break;
                        case n.PayChannel.WXPAY:
                            var v = i.get("data.clientData");
                            v.useBizWxAppid && (f.biz_appid = 1),
                            this.isNativeWxPay && (f.wx_direct_pay = 1, f.wx_order_interface = 1),
                                f.pay_method = e;
                            break;
                        case n.PayChannel.QQPAY:
                            f.cft_type = "tokenid",
                                f.pay_method = this.nativeQQPay ? "qqwallet:3": "qqwallet:2";
                            break;
                        case n.PayChannel.OFFLINE:
                            f.user_mobile = "",
                                f.user_openname = d.payerName,
                                f.pay_method = e;
                            break;
                        default:
                            f.pay_method = e
                    }
                    a += $.param(f),
                        i.get("service.cgi").jsonp(a, {
                            format: "jsonp_" + p,
                            jsonpCallback: p
                        }).done(function(s) {
                            if (0 == s.ret && s.data) if (e == n.PayChannel.OFFLINE) {
                                var r = s.data.remitpay_info; + new Date;
                                i.get("service.cgi").checkSig({
                                        type: "saveGoods",
                                        ignoreSession: !0,
                                        remitpay_bank_account: r.remitpay_bank_account,
                                        remitpay_referece_id: r.remitpay_referece_id,
                                        remitpay_order_id: r.remitpay_order_id,
                                        remitpay_bank_openname: r.remitpay_bank_openname,
                                        remitpay_bank_fullname: r.remitpay_bank_fullname,
                                        sig: decodeURIComponent(r.remitpay_sig)
                                    },
                                    function(e) {
                                        e ? t.onSuccess(s.data, a) : t.onFail(s)
                                    })
                            } else t.onSuccess(s.data, a);
                            else t.onFail(s)
                        }).fail(function(e) {
                            t.onFail(l.genMessage("cgi-error", {},
                                e))
                        })
                },
                refreshQRCode: function(e) {},
                setQRImg: function(e, t) {
                    this.payChannel.setQRImage(e, t)
                },
                _clickHandler: function(e, t) {
                    var a = i.get("static")[e],
                        s = this;
                    if (a && a.isExt) s._orderHandler(e, {},
                        t());
                    else if (c[e]) c[e].action && c[e].action(!0),
                        s.setQRImg(c[e].qrUrl),
                        s.refreshQRCode(e);
                    else {
                        if (e == n.PayChannel.BANK || e == n.PayChannel.FbankCard) try {
                            p = window.open("about:blank", "网银支付")
                        } catch(r) {
                            p = null
                        }
                        s._order(e, {
                            onSuccess: function(a, r) {
                                i.get("data.channel") == e && ("mail" == i.get("data.style") && e == n.PayChannel.BANK || s.payChannel.showError(!1), s._orderHandler(e, a, t), i.get("data.keepAlive") || (i.set("data.keepAlive", !0), s._comet(), s._pullComet()), s.refreshQRCode(e))
                            },
                            onFail: function(a) {
                                i.get("data.channel") == e && (p && (i.get("data.isSeparate") ? p.close() : p.window.close()), 1018 == a.ret ? i.get("service.unlogin")(!0) : (i.get("service.notify")(l.genMessage("order-exception", {},
                                    a)), s.payChannel.showError(!0, d(a)), t()))
                            }
                        })
                    }
                },
                render: function(e, t) {
                    var s = i.get("service.cgi").appid,
                        r = i.get("static")[n.PayChannel.WXPAY].nativePayAppid,
                        d = i.get("static")[n.PayChannel.QQPAY].nativePayAppid,
                        p = i.get("data").clientData.native_wxpay || $.inArray(s, r) > -1,
                        f = i.get("data").clientData.native_qqpay || $.inArray(s, d) > -1;
                    if (this.isNativeWxPay = p, this.nativeQQPay = f, this.data = t, this.serviceName = t.appName || l.PayService.getClientServiceName(t), !this.payChannel) {
                        var g = this,
                            v = h(this.data);
                        this.payChannel = new a.PayChannel(e, {
                                report: i.get("service.report"),
                                style: i.get("data.style"),
                                data: {
                                    clientInfo: i.get("data.clientData"),
                                    defaultSelect: u(v.validInnerChannels),
                                    channelData: {
                                        selectedClass: "show"
                                    },
                                    tabData: {
                                        selectedClass: "selected"
                                    },
                                    itemsData: v.channelData
                                }
                            },
                            {
                                onBeforeClick: function(e, t) {
                                    e == n.PayChannel.OFFLINE && ($(".ep-transfer-panel-wrap .ep-loader").removeClass("hide"), $(".ep-transfer-panel-wrap .offline-pay-operate").addClass("hide"), $("#payerName").val(i.get("data").payerName || "")),
                                        t()
                                },
                                onAfterClick: function(e) {
                                    var t = i.get("static"),
                                        a = i.get("data"),
                                        s = t[e];
                                    if (e == n.PayChannel.OFFLINE) {
                                        if (c[e]) {
                                            var r = c[e].data;
                                            $(".ep-transfer-panel-wrap .ep-transfer-one").addClass("hide");
                                            var d = $(".ep-transfer-panel-wrap .ep-transfer-two");
                                            d.length > 0 && d.remove(),
                                                $(".ep-transfer-panel-wrap").append(template(s.contentTemplate, $.extend({},
                                                    r, {
                                                        showOrderBtn: a.clientData.orderUrl,
                                                        showGoTransBtn: a.clientData.goTransBtn,
                                                        price: l.PayService.getPrice(g.data),
                                                        isSeparate: g.data.isSeparate,
                                                        payerName: a.payerName,
                                                        bankAccount: l.String.formatTypeData("bankAccount", l.String.format("{account}{reference}", {
                                                            reference: r.remitpay_referece_id,
                                                            account: r.remitpay_bank_account
                                                        }))
                                                    }))),
                                                $(".ep-transfer-two").delegate("a", "click",
                                                    function() {
                                                        var e = $(this).data("action");
                                                        switch (e) {
                                                            case "order":
                                                                var t = a.clientData.orderUrl;
                                                                l.jumpPage(t, {
                                                                        pf: i.get("data.pf"),
                                                                        outTradeNo: a.outTradeNo,
                                                                        tokenId: a.tokenId
                                                                    },
                                                                    !0, a.useSecure);
                                                                break;
                                                            case "update":
                                                                delete c[n.PayChannel.OFFLINE],
                                                                    $(".ep-transfer-one").removeClass("hide"),
                                                                    $(".ep-transfer-two").addClass("hide");
                                                                break;
                                                            case "go-trans":
                                                                i.get("service").notify($.extend({
                                                                        action:
                                                                        e
                                                                    },
                                                                    o["click-atag"])),
                                                                a.clientData.goTransBtnUrl && l.jumpPage(a.clientData.goTransBtnUrl, {},
                                                                    !0)
                                                        }
                                                    }).delegate(".ep-icon-close-s", "click",
                                                    function() {
                                                        $(".ep-confirm-tips-content").removeClass("ep-resident"),
                                                            $(".ep-click-icon").on("mouseenter.hover",
                                                                function() {
                                                                    $(this).siblings(".ep-confirm-tips-content").addClass("ep-resident")
                                                                }).on("mouseout.hover",
                                                                function() {
                                                                    $(this).siblings(".ep-confirm-tips-content").removeClass("ep-resident")
                                                                })
                                                    }).delegate(".ep-click-icon", "click",
                                                    function() {
                                                        $(this).siblings(".ep-confirm-tips-content").addClass("ep-resident"),
                                                            $(this).off(".hover")
                                                    })
                                        }
                                        $(".ep-transfer-panel-wrap .offline-pay-operate").removeClass("hide"),
                                            $(".ep-transfer-panel-wrap .ep-loader").addClass("hide")
                                    }
                                },
                                onClick: function(e, t) {
                                    var s = i.get("data");
                                    if (i.set("data.channel", e), i.get("service").notify($.extend({
                                            channel: e
                                        },
                                        o["switch-channel"])), i.get("service.report")("chanel.click", {
                                        8 : {
                                            channel: e,
                                            info: e === n.PayChannel.BANK && s.bankType ? s.bank + "-" + s.bankType + "-" + s.cardType: ""
                                        }
                                    }), e === n.PayChannel.BANK && "icbc" === s.bank && "epBank" === s.bankType) {
                                        i.get("service.report")("channel.bank.icbcep.tips.show");
                                        var r = new a.Modal(null, {},
                                            {
                                                onClick: function(a, n) {
                                                    "success" === a ? (i.get("service.report")("channel.bank.icbcep.tips.sure"), g._clickHandler(e, t)) : i.get("service.report")("channel.bank.icbcep.tips.cancel")
                                                }
                                            });
                                        return void r.show({
                                            data: {
                                                type: "default",
                                                title: "温馨提示",
                                                sureBtnText: "登录企业网银",
                                                cancelBtnText: "取消",
                                                msg: "<p style='line-height: 1.5;text-align: left;padding-left: 80px;margin-bottom: -20px;'>1. 请先插入“中国工商银行”企业银行的U盾 <br>2. 插好后请点击“登录企业网银” <br><br><span style='color:#3584cb'>注意:未插入U盾可能无法正常登录呦！</span></p>"
                                            }
                                        })
                                    }
                                    if (e === n.PayChannel.BANK && window.problemBankconfigs) {
                                        var l = window.problemBankconfigs[s.bank];
                                        if (l && l.status) {
                                            var r = new a.Modal(null, {},
                                                {
                                                    onClick: function(e, t) {}
                                                });
                                            return void r.show({
                                                data: {
                                                    type: "default",
                                                    title: "温馨提示",
                                                    sureBtnText: "选择其他银行",
                                                    cancelBtn: !1,
                                                    msg: "<p style='line-height: 1.5;text-align: left;padding-left: 60px;margin-bottom: -20px;'>由于" + l.name + "暂时异常，我们正在积极与银行沟通。<br>请您暂时选择其他银行进行支付。若已支付请耐心等待，<br>未处理的订单将为您自动退款，带来的不便敬请谅解。</p>"
                                                }
                                            })
                                        }
                                    }
                                    g._clickHandler(e, t)
                                },
                                onRefreshPage: function(e) {
                                    var t = i.get("data.channel");
                                    i.get("service.report")(l.String.format("{channel}.manualrefresh.click", {
                                        channel: t
                                    })),
                                        location.href = l.URL.addParam({
                                            channel: t
                                        })
                                },
                                onQrCodeInfo: function(e) {
                                    e = e || {};
                                    var t = i.get("data.clientData").timestamp,
                                        a = +new Date - t;
                                    e.load ? (i.get("service.notify")(l.genMessage("qrcode-ready", {
                                        timestamp: t,
                                        costTime: a
                                    })), i.get("service.report")("user.qrshowtime", {
                                        8 : {
                                            times: a
                                        }
                                    })) : i.get("service.notify")(l.genMessage("qrcode-error", {
                                        qrCodeUrl: e.url || "",
                                        timestamp: t,
                                        costTime: a
                                    }))
                                }
                            }),
                            this.payChannel.init(),
                        $.inArray(i.get("data.channel"), v.validInnerChannels) == -1 && this.payChannel.setPreQRImage(v.validInnerChannels[0]),
                            this.order = new a.Order(e.find(".ep-order-detail"), {
                                    data: $.extend(l.PayService.getClientPayInfo(this.data), {
                                        hidePrice: !this.data.isSeparate,
                                        show: i.get("data").clientData.showOrderInfo,
                                        issueUrl: i.get("data.clientData").guideUrl
                                    }),
                                    template: "order/template." + (this.data.isSeparate ? "separate": "default")
                                },
                                {
                                    onClick: function(e) {
                                        i.get("service.report")("userclick." + e)
                                    }
                                }),
                            this.order.init()
                    }
                }
            },
            TEG.ns("Page.Pay", f)
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.UI,
            n = e.Enum,
            i = e.Data,
            s = e.Helpers,
            r = s.Utils,
            o = function() {
                return o.inst ? o.inst: this instanceof o ? void(o.inst = this) : new o
            },
            l = {
                onClick: function(e, t) {
                    var a = o.inst;
                    switch (i.get("service.report")(r.String.format("{step}.{active}.click", {
                        step: n.PayStep.Pending,
                        active: e
                    })), "close" == e && (e = "confirm" == t ? "confirm": n.PayStep.Fail), e) {
                        case n.PayStep.Success:
                        case n.PayStep.Fail:
                            i.get("service.cgi").getOrderResult(i.get("data.uuid"), 1e3,
                                function(e) {
                                    switch (e) {
                                        case n.PayStep.Success:
                                            i.get("service.go")(e);
                                            break;
                                        case n.PayStep.Pending:
                                            a.modal.show({
                                                data:
                                                    {
                                                        title:
                                                            "提示",
                                                        showTips: !1,
                                                        showHelperTips: i.get("data.clientData").guideUrl,
                                                        type: "confirm",
                                                        msg: "您尚未支付成功，请继续支付"
                                                    }
                                            });
                                            break;
                                        case n.PayStep.Fail:
                                            i.get("service.go")(n.PayStep.Fail)
                                    }
                                });
                            break;
                        case "confirm":
                            i.get("service.go")(n.PayStep.Channel);
                            break;
                        case "help":
                        case "free":
                            a.modal.show(),
                                i.get("service.notify")(r.genMessage("click-atag", {
                                    active: e
                                }));
                            break;
                        case "helperTipsLink":
                            i.get("service.go")(n.PayStep.Channel),
                                window.open(decodeURIComponent(i.get("data.clientData").guideUrl))
                    }
                }
            };
        o.inst = null,
            o.prototype = o.fn = {
                hideDialog: function() {
                    this.modal && this.modal.hide()
                },
                render: function(e, t) {
                    this.data = t;
                    this.modal || !i.get("data.isSeparate") && i.get("data.externalPending") || (this.modal = new a.Modal(null, {},
                        l)),
                    this.modal && (this.modal.setCallBack(l), this.modal.show({
                        data: {
                            type: "default",
                            title: "确认支付操作",
                            showTips: i.get("data.showTips"),
                            msg: "请在新开的支付页面上完成支付"
                        }
                    }));
                    var s = $.extend(r.PayService.getClientPayInfo(this.data), {
                        title: "支付中...",
                        showVoice: !1,
                        phone: i.get("data.clientData").phone,
                        payWay: r.ExtChannel.getChannelName()
                    });
                    this.successInfo ? this.successInfo.redraw(s) : (this.successInfo = new a.OrderSuccess(e, {
                            data: s,
                            template: "order/template.success." + (this.data.isSeparate ? "separate": "default")
                        },
                        {
                            onClick: function(e) {
                                "back" == e && i.get("service.go")(n.PayStep.Channel)
                            }
                        }), this.successInfo.init())
                }
            },
            e.ns("Page.Pending", o)
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.UI,
            n = (e.Enum, e.Data),
            i = e.Helpers,
            s = i.Utils,
            r = function() {
                return r.inst ? r.inst: this instanceof r ? void(r.inst = this) : new r
            };
        r.inst = null,
            r.prototype = r.fn = {
                render: function(e, t) {
                    this.data = t;
                    var i = $.extend(s.PayService.getClientPayInfo(this.data), {
                        showVoice: n.get("data.showTips"),
                        phone: n.get("data.clientData").phone,
                        isResult: !this.data.isSeparate,
                        payWay: s.ExtChannel.getChannelName()
                    });
                    this.successInfo ? this.successInfo.redraw(i) : (this.successInfo = new a.OrderSuccess(e, {
                            data: i,
                            template: "order/template.success." + (this.data.isSeparate ? "separate": "default")
                        },
                        {
                            onClick: function(e) {
                                n.get("service.notify")(s.genMessage("click-atag", {
                                    active: e
                                }))
                            }
                        }), this.successInfo.init())
                }
            },
            e.ns("Page.Success", r)
    } (window.getNs()),
    function(e, t) {
        "use strict";
        var a = e.UI,
            n = e.Enum,
            i = e.Data,
            s = e.Helpers,
            r = s.Utils,
            o = function() {
                return o.inst ? o.inst: this instanceof o ? void(o.inst = this) : new o
            };
        o.inst = null,
            o.prototype = o.fn = {
                render: function(t, s) {
                    this.data = s;
                    var o = $.extend(r.PayService.getClientPayInfo(this.data), {
                        title: "支付成功，我们将尽快为您提供服务。",
                        showVoice: i.get("data.showTips"),
                        phone: i.get("data.clientData").phone,
                        payWay: r.ExtChannel.getChannelName()
                    });
                    this.failtureInfo ? this.failtureInfo.redraw(o) : (this.failtureInfo = new a.OrderFail(t, {
                            data: o,
                            template: "order/template.fail." + (this.data.isSeparate ? "separate": "default")
                        },
                        {
                            onClick: function(t) {
                                e.Data.get("service.go")(n.PayStep.Channel)
                            }
                        }), this.failtureInfo.init())
                }
            },
            e.ns("Page.Fail", o)
    } (window.getNs()),
    function(e, t, a, n) {
        "use strict";
        function i(e, t, n) {
            this.$container = e,
                this.options = a.extend({
                        template: "head/template.default"
                    },
                    t),
                this.callbacks = a.extend({
                        onClick: a.noop
                    },
                    n)
        }
        i.prototype = i.fn = {
            init: function() {
                this.$el = a(t(this.options.template, this.options.data)).appendTo(this.$container),
                    this.bindEvent()
            },
            bindEvent: function() {}
        },
            e.ns("UI.Head", i)
    } (window.getNs(), template, "undefined" != typeof jQuery ? jQuery: window.getNs().ns("Helpers.Query")),
    $(function() {
        var e = window.TEG,
            t = e.UI,
            a = e.Helpers,
            n = a.Console,
            i = e.Session,
            s = a.Request,
            r = (a.BadJS, e.Page),
            o = e.Data,
            l = a.Utils,
            c = l.String,
            d = l.URL,
            p = o.get("static"),
            u = e.Enum,
            h = l.QueryString.get(),
            f = !0,
            g = parseInt(d.getFParam("timestamp")),
            v = {
                service: {},
                data: $.extend({
                        uuid: l.UUID(16)
                    },
                    h, {
                        clientData: {}
                    })
            },
            m = v.service.Hreport = function(e, t) {
                window.H_T_Report && (e.uin || (e.uin = d.getFParam("openid")), H_T_Report(e, t))
            },
            y = ((new Date).getTime(), v.data.session = i.getSession(v.data.sessionType, {
                user: d.getFParam("openid"),
                password: d.getFParam("openkey")
            })),
            b = v.service.report = function(e, t) {
                t && "object" == typeof t[8] && (t[8].type = "s"),
                    s.report($.extend({
                            3 : y ? y.getUser() : v.data.tokenId,
                            21 : c.format("web.ep.{action}", {
                                action: e
                            }),
                            24 : h.appId,
                            26 : h.env
                        },
                        t))
            };
        v.service.unlogin = function(e) {
            b("{scene}.unlogin.pv", {
                scene: e ? "savegoods": "goodsinfo"
            });
            var a = new t.Modal(null, {},
                {
                    onClick: function() {
                        history.go( - 1)
                    }
                });
            a.show({
                data: {
                    type: "confirm",
                    title: "登陆",
                    msg: "登陆失效，为了保证支付安全，请重新登陆"
                }
            })
        },
            v.service.notify = function(e) {
                if (e) {
                    switch (String(e.status)) {
                        case "400":
                            if ("back" == e.active) {
                                var t = o.get("data.clientData").backUrl;
                                t ? l.jumpPage(t, {
                                        pf: o.get("data.pf"),
                                        outTradeNo: o.get("data.outTradeNo"),
                                        tokenId: o.get("data.tokenId")
                                    },
                                    !0, v.data.useSecure) : history.go( - 1)
                            }
                    }
                    n.log("enterprise-send", e)
                }
            };
        var w = v.service.cgi = new s({
                session: y,
                appid: h.appId,
                protocol: h.protocol,
                env: h.env,
                mid: h.mId
            }),
            k = null,
            C = l.genJSONPCallback("goods_info");
        b("pv.index", {
            8 : {
                times: +new Date - g
            }
        });
        var _ = v.service.go = function(e) {
            switch (k && k.hide(), k = $(".ep-step-" + e).show(), v.service.report("pv." + e), e) {
                case u.PayStep.Channel:
                    r.Pay().render(k, __CGI_INFO_Data);
                    break;
                case u.PayStep.Pending:
                    r.Pending().render(k, __CGI_INFO_Data);
                    break;
                case u.PayStep.Success:
                    r.Pending().hideDialog(),
                        r.Success().render(k, __CGI_INFO_Data);
                    break;
                case u.PayStep.Fail:
                    r.Pending().hideDialog(),
                        r.Fail().render(k, __CGI_INFO_Data)
            }
        };
        v.data.style = v.data.style || p.defaultStyle,
            v.data.channel = v.data.channel || p.defaultChannel,
            o.set("service", v.service),
            o.set("data", v.data),
            o.set("data.isSeparate", f);
        var x = function(e, a) {
            if (e) {
                y.setUser(a.orderInfo.provideUin),
                    window.__CGI_INFO_Data = a,
                    o.set("data.allowChannels", l.filter.channels(a, d.getFParam("allowchannels", "a"))),
                    o.set("data.outTradeNo", a.orderInfo.outTradeNo);
                var n = d.getFParam("extinfo", "j");
                n.timestamp = g,
                    o.set("data.clientData", n),
                    o.set("data.channel", l.filter.defaultChannel(a, d.getFParam("channel")));
                var i = new t.Head($(".hd-main"), {
                    data: {
                        logo: a.logoImage || a.orderInfo.serviceLogImage,
                        name: a.appName,
                        payUser: a.orderInfo.userNick
                    }
                });
                i.init(),
                    l.ExtChannel.setExtChannelToMap(a.externalChannels),
                    _(u.PayStep.Channel)
            } else {
                $(".hd,.bd").hide();
                var s = new t.Modal(null, {},
                    {
                        onClick: function() {
                            history.go( - 1)
                        }
                    });
                s.show({
                    data: {
                        type: "confirm",
                        title: "系统提示",
                        msg: "网络异常，请重新发起支付"
                    }
                })
            }
            m({
                index: +new Date - jq_t_start
            })
        }; + new Date;
    });
var GLOBAL = this;

function randomVersion() {
    return "?v=" + Math.round(999999 * Math.random());
}

"undefined" == typeof path_resource && (path_resource = "");

var globalCssArr = [],
    globalJsArr = [
        path_resource + "/themes/_magic/js/bootstrap.min.js",
        path_resource + "/themes/_magic/js/modernizr.custom.js",
        path_resource + "/themes/_magic/js/jquery.easing.js",
        path_resource + "/themes/_magic/js/jquery.scrollto.js",
        path_resource + "/themes/_magic/js/menu.js",
        path_resource + "/themes/_magic/js/materialize.js",
        path_resource + "/themes/_magic/js/tweenmax.min.js",
        path_resource + "/themes/_magic/js/slideshow.js",
        path_resource + "/themes/_magic/js/isotope.pkgd.min.js",
        path_resource + "/themes/_magic/js/jquery.flexslider.js",
        path_resource + "/themes/_magic/js/owl.carousel.min.js",
        path_resource + "/themes/_magic/js/jquery.magnific-popup.min.js",
        path_resource + "/themes/_magic/js/jquery.datetimepicker.full.js",
        path_resource + "/themes/_magic/js/jquery.validate.min.js",
        path_resource + "/themes/_magic/js/jquery.ajaxchimp.min.js",
        path_resource + "/themes/js/common.js"
    ],
    GLoader = {
        version: 1.2,
        loadScript: function (e, s) {
            var t = !1,
                r = e.indexOf(".js") > -1 ? "js" : "css",
                o = {
                    status: !1,
                    message: "",
                },
                a =
                    "js" == r
                        ? document.createElement("script")
                        : document.createElement("link");

            function n() {
                t ||
                    ((t = !0),
                        (o.status = !0),
                        (o.message = "Script was loaded successfully"),
                        s && s(o));
            }
            a.setAttribute("data-loader", "GLoader"),
                "js" == r
                    ? (a.setAttribute("type", "text/javascript"),
                        a.setAttribute("src", e + randomVersion()))
                    : (a.setAttribute("rel", "stylesheet"),
                        a.setAttribute("type", "text/css"),
                        a.setAttribute("href", e)),
                (a.onload = n),
                (a.onreadystatechange = function () {
                    t || ("complete" === a.readyState && n());
                }),
                (a.onerror = function () {
                    t ||
                        ((t = !0),
                            (o.status = !1),
                            (o.message = "Failed to load script."),
                            s && s(o));
                }),
                "js" == r ? document.body.appendChild(a) : document.head.appendChild(a);
        },
        isExisted: function (e) {
            for (
                var s = document.getElementsByTagName("script"), t = !1, r = 0;
                r < s.length;
                r++
            )
                if (s[r].src) {
                    var o = s[r].src;
                    String(o).toLowerCase().indexOf(e.toLowerCase()) >= 0 && (t = !0);
                }
            return t;
        },
        loadScripts: function (e, s) {
            if (e && e.length > 0) {
                var t = 0,
                    r = e.length;
                this.loadScript(e[t], function o(a) {
                    t++;
                    t == r
                        ? ((a.status = !0),
                            (a.message = "All scripts were loaded."),
                            s && s(a))
                        : (GLoader.isExisted(e[t]), GLoader.loadScript(e[t], o));
                });
            }
        },
    };

function lazyLoadAll() {
    for (var e = document.getElementsByTagName("img"), s = 0; s < e.length; s++)
        e[s].getAttribute("data-src") &&
            e[s].setAttribute("src", e[s].getAttribute("data-src"));
}

var EZS = {
    init: function () {
        lazyLoadAll();
        var e = [];
        globalCssArr.forEach(function (s) {
            e.push(s);
        }),
            globalJsArr.forEach(function (s) {
                e.push(s);
            }),
            GLoader.loadScripts(e, function (e) {
                var elm = document.getElementsByTagName("main")[0];
                if (elm) {
                    var elmAtr = elm.getAttribute("data-create");
                    var elmId = elm.getAttribute("id");
                    elmAtr &&
                        Boolean(elmAtr) &&
                        elmId &&
                        GLoader.loadScript(
                            path_resource + "/themes/module/" + elmId + ".js",
                            function (e) {
                                GLOBAL[elmId] &&
                                    void 0 !== GLOBAL[elmId].init &&
                                    GLOBAL[elmId].init();
                            }
                        );
                }
            });
    },
};

EZS.init();

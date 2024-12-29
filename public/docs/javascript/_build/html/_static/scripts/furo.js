/*! For license information please see furo.js.LICENSE.txt */
(() => {
  var t = {
      856: function (t, e, n) {
        var o, r;
        (r =
          void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : this),
          (o = function () {
            return (function (t) {
              'use strict';
              var e = {
                  navClass: 'active',
                  contentClass: 'active',
                  nested: !1,
                  nestedClass: 'active',
                  offset: 0,
                  reflow: !1,
                  events: !0,
                },
                n = function (t, e, n) {
                  if (n.settings.events) {
                    var o = new CustomEvent(t, {
                      bubbles: !0,
                      cancelable: !0,
                      detail: n,
                    });
                    e.dispatchEvent(o);
                  }
                },
                o = function (t) {
                  var e = 0;
                  if (t.offsetParent)
                    for (; t; ) (e += t.offsetTop), (t = t.offsetParent);
                  return e >= 0 ? e : 0;
                },
                r = function (t) {
                  t &&
                    t.sort(function (t, e) {
                      return o(t.content) < o(e.content) ? -1 : 1;
                    });
                },
                c = function (e, n, o) {
                  var r = e.getBoundingClientRect(),
                    c = (function (t) {
                      return 'function' == typeof t.offset
                        ? parseFloat(t.offset())
                        : parseFloat(t.offset);
                    })(n);
                  return o
                    ? parseInt(r.bottom, 10) <
                        (t.innerHeight || document.documentElement.clientHeight)
                    : parseInt(r.top, 10) <= c;
                },
                s = function () {
                  return (
                    Math.ceil(t.innerHeight + t.pageYOffset) >=
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight,
                      document.body.offsetHeight,
                      document.documentElement.offsetHeight,
                      document.body.clientHeight,
                      document.documentElement.clientHeight
                    )
                  );
                },
                l = function (t, e) {
                  var n = t[t.length - 1];
                  if (
                    (function (t, e) {
                      return !(!s() || !c(t.content, e, !0));
                    })(n, e)
                  )
                    return n;
                  for (var o = t.length - 1; o >= 0; o--)
                    if (c(t[o].content, e)) return t[o];
                },
                a = function (t, e) {
                  if (e.nested && t.parentNode) {
                    var n = t.parentNode.closest('li');
                    n && (n.classList.remove(e.nestedClass), a(n, e));
                  }
                },
                i = function (t, e) {
                  if (t) {
                    var o = t.nav.closest('li');
                    o &&
                      (o.classList.remove(e.navClass),
                      t.content.classList.remove(e.contentClass),
                      a(o, e),
                      n('gumshoeDeactivate', o, {
                        link: t.nav,
                        content: t.content,
                        settings: e,
                      }));
                  }
                },
                u = function (t, e) {
                  if (e.nested) {
                    var n = t.parentNode.closest('li');
                    n && (n.classList.add(e.nestedClass), u(n, e));
                  }
                };
              return function (o, c) {
                var s,
                  a,
                  d,
                  f,
                  m,
                  v = {
                    setup: function () {
                      (s = document.querySelectorAll(o)),
                        (a = []),
                        Array.prototype.forEach.call(s, function (t) {
                          var e = document.getElementById(
                            decodeURIComponent(t.hash.substr(1))
                          );
                          e && a.push({ nav: t, content: e });
                        }),
                        r(a);
                    },
                    detect: function () {
                      var t = l(a, m);
                      t
                        ? (d && t.content === d.content) ||
                          (i(d, m),
                          (function (t, e) {
                            if (t) {
                              var o = t.nav.closest('li');
                              o &&
                                (o.classList.add(e.navClass),
                                t.content.classList.add(e.contentClass),
                                u(o, e),
                                n('gumshoeActivate', o, {
                                  link: t.nav,
                                  content: t.content,
                                  settings: e,
                                }));
                            }
                          })(t, m),
                          (d = t))
                        : d && (i(d, m), (d = null));
                    },
                  },
                  h = function (e) {
                    f && t.cancelAnimationFrame(f),
                      (f = t.requestAnimationFrame(v.detect));
                  },
                  g = function (e) {
                    f && t.cancelAnimationFrame(f),
                      (f = t.requestAnimationFrame(function () {
                        r(a), v.detect();
                      }));
                  };
                return (
                  (v.destroy = function () {
                    d && i(d, m),
                      t.removeEventListener('scroll', h, !1),
                      m.reflow && t.removeEventListener('resize', g, !1),
                      (a = null),
                      (s = null),
                      (d = null),
                      (f = null),
                      (m = null);
                  }),
                  (m = (function () {
                    var t = {};
                    return (
                      Array.prototype.forEach.call(arguments, function (e) {
                        for (var n in e) {
                          if (!e.hasOwnProperty(n)) return;
                          t[n] = e[n];
                        }
                      }),
                      t
                    );
                  })(e, c || {})),
                  v.setup(),
                  v.detect(),
                  t.addEventListener('scroll', h, !1),
                  m.reflow && t.addEventListener('resize', g, !1),
                  v
                );
              };
            })(r);
          }.apply(e, [])),
          void 0 === o || (t.exports = o);
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var c = (e[o] = { exports: {} });
    return t[o].call(c.exports, c, c.exports, n), c.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      'use strict';
      var t = n(856),
        e = n.n(t),
        o = null,
        r = null,
        c = document.documentElement.scrollTop;
      const s = 64;
      function l() {
        const t = localStorage.getItem('theme') || 'auto';
        var e;
        'light' !==
          (e = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'auto' === t
              ? 'light'
              : 'light' == t
                ? 'dark'
                : 'auto'
            : 'auto' === t
              ? 'dark'
              : 'dark' == t
                ? 'light'
                : 'auto') &&
          'dark' !== e &&
          'auto' !== e &&
          (console.error(`Got invalid theme mode: ${e}. Resetting to auto.`),
          (e = 'auto')),
          (document.body.dataset.theme = e),
          localStorage.setItem('theme', e),
          console.log(`Changed to ${e} mode.`);
      }
      function a() {
        !(function () {
          const t = document.getElementsByClassName('theme-toggle');
          Array.from(t).forEach((t) => {
            t.addEventListener('click', l);
          });
        })(),
          (function () {
            let t = 0,
              e = !1;
            window.addEventListener('scroll', function (n) {
              (t = window.scrollY),
                e ||
                  (window.requestAnimationFrame(function () {
                    var n;
                    (function (t) {
                      const e = Math.floor(r.getBoundingClientRect().top);
                      console.log(`headerTop: ${e}`),
                        0 == e && t != e
                          ? r.classList.add('scrolled')
                          : r.classList.remove('scrolled');
                    })((n = t)),
                      (function (t) {
                        t < s
                          ? document.documentElement.classList.remove(
                              'show-back-to-top'
                            )
                          : t < c
                            ? document.documentElement.classList.add(
                                'show-back-to-top'
                              )
                            : t > c &&
                              document.documentElement.classList.remove(
                                'show-back-to-top'
                              ),
                          (c = t);
                      })(n),
                      (function (t) {
                        null !== o &&
                          (0 == t
                            ? o.scrollTo(0, 0)
                            : Math.ceil(t) >=
                                Math.floor(
                                  document.documentElement.scrollHeight -
                                    window.innerHeight
                                )
                              ? o.scrollTo(0, o.scrollHeight)
                              : document.querySelector('.scroll-current'));
                      })(n),
                      (e = !1);
                  }),
                  (e = !0));
            }),
              window.scroll();
          })(),
          null !== o &&
            new (e())('.toc-tree a', {
              reflow: !0,
              recursive: !0,
              navClass: 'scroll-current',
              offset: () => {
                let t = parseFloat(
                  getComputedStyle(document.documentElement).fontSize
                );
                return r.getBoundingClientRect().height + 2.5 * t + 1;
              },
            });
      }
      document.addEventListener('DOMContentLoaded', function () {
        document.body.parentNode.classList.remove('no-js'),
          (r = document.querySelector('header')),
          (o = document.querySelector('.toc-scroll')),
          a();
      });
    })();
})();
//# sourceMappingURL=furo.js.map

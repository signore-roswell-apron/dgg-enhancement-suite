/*! For license information please see chat.4ddaf9b2098306795249.js.LICENSE.txt */
(self.webpackChunkdgg_website = self.webpackChunkdgg_website || []).push([
  [377],
  {
    134: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(271);
      function r(t) {
        var e = (0, i.A)(t),
          n = e.overflow,
          r = e.overflowX,
          o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
    },
    192: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return d;
        },
      });
      var i = n(4278),
        r = n(2632),
        o = n(9703),
        s = n(6523),
        a = n(6979),
        u = n(8579),
        c = n(6397),
        f = n(8101),
        l = n(7364),
        h = n(6906),
        d = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e = t.state,
              n = t.options,
              d = t.name,
              p = n.mainAxis,
              g = void 0 === p || p,
              m = n.altAxis,
              y = void 0 !== m && m,
              b = n.boundary,
              v = n.rootBoundary,
              A = n.altBoundary,
              T = n.padding,
              w = n.tether,
              E = void 0 === w || w,
              x = n.tetherOffset,
              k = void 0 === x ? 0 : x,
              D = (0, c.A)(e, {
                boundary: b,
                rootBoundary: v,
                padding: T,
                altBoundary: A,
              }),
              O = (0, r.A)(e.placement),
              S = (0, f.A)(e.placement),
              C = !S,
              L = (0, o.A)(O),
              N = "x" === L ? "y" : "x",
              I = e.modifiersData.popperOffsets,
              R = e.rects.reference,
              j = e.rects.popper,
              P =
                "function" == typeof k
                  ? k(
                      Object.assign({}, e.rects, {
                        placement: e.placement,
                      })
                    )
                  : k,
              B =
                "number" == typeof P
                  ? {
                      mainAxis: P,
                      altAxis: P,
                    }
                  : Object.assign(
                      {
                        mainAxis: 0,
                        altAxis: 0,
                      },
                      P
                    ),
              H = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement]
                : null,
              U = {
                x: 0,
                y: 0,
              };
            if (I) {
              if (g) {
                var M,
                  _ = "y" === L ? i.Mn : i.kb,
                  z = "y" === L ? i.sQ : i.pG,
                  V = "y" === L ? "height" : "width",
                  F = I[L],
                  q = F + D[_],
                  W = F - D[z],
                  Q = E ? -j[V] / 2 : 0,
                  G = S === i.ni ? R[V] : j[V],
                  K = S === i.ni ? -j[V] : -R[V],
                  $ = e.elements.arrow,
                  Y =
                    E && $
                      ? (0, a.A)($)
                      : {
                          width: 0,
                          height: 0,
                        },
                  X = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : (0, l.A)(),
                  Z = X[_],
                  J = X[z],
                  tt = (0, s.u)(0, R[V], Y[V]),
                  et = C
                    ? R[V] / 2 - Q - tt - Z - B.mainAxis
                    : G - tt - Z - B.mainAxis,
                  nt = C
                    ? -R[V] / 2 + Q + tt + J + B.mainAxis
                    : K + tt + J + B.mainAxis,
                  it = e.elements.arrow && (0, u.A)(e.elements.arrow),
                  rt = it
                    ? "y" === L
                      ? it.clientTop || 0
                      : it.clientLeft || 0
                    : 0,
                  ot = null != (M = null == H ? void 0 : H[L]) ? M : 0,
                  st = F + et - ot - rt,
                  at = F + nt - ot,
                  ut = (0, s.u)(
                    E ? (0, h.jk)(q, st) : q,
                    F,
                    E ? (0, h.T9)(W, at) : W
                  );
                (I[L] = ut), (U[L] = ut - F);
              }
              if (y) {
                var ct,
                  ft = "x" === L ? i.Mn : i.kb,
                  lt = "x" === L ? i.sQ : i.pG,
                  ht = I[N],
                  dt = "y" === N ? "height" : "width",
                  pt = ht + D[ft],
                  gt = ht - D[lt],
                  mt = -1 !== [i.Mn, i.kb].indexOf(O),
                  yt = null != (ct = null == H ? void 0 : H[N]) ? ct : 0,
                  bt = mt ? pt : ht - R[dt] - j[dt] - yt + B.altAxis,
                  vt = mt ? ht + R[dt] + j[dt] - yt - B.altAxis : gt,
                  At =
                    E && mt
                      ? (0, s.P)(bt, ht, vt)
                      : (0, s.u)(E ? bt : pt, ht, E ? vt : gt);
                (I[N] = At), (U[N] = At - ht);
              }
              e.modifiersData[d] = U;
            }
          },
          requiresIfExists: ["offset"],
        };
    },
    222: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(8979);
      function r(t) {
        var e = (0, i.A)(t);
        return {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset,
        };
      }
    },
    271: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(8979);
      function r(t) {
        return (0, i.A)(t).getComputedStyle(t);
      }
    },
    644: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return l;
        },
      });
      var i = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom",
      };
      function r(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return i[t];
        });
      }
      var o = n(2632),
        s = {
          start: "end",
          end: "start",
        };
      function a(t) {
        return t.replace(/start|end/g, function (t) {
          return s[t];
        });
      }
      var u = n(6397),
        c = n(8101),
        f = n(4278),
        l = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e = t.state,
              n = t.options,
              i = t.name;
            if (!e.modifiersData[i]._skip) {
              for (
                var s = n.mainAxis,
                  l = void 0 === s || s,
                  h = n.altAxis,
                  d = void 0 === h || h,
                  p = n.fallbackPlacements,
                  g = n.padding,
                  m = n.boundary,
                  y = n.rootBoundary,
                  b = n.altBoundary,
                  v = n.flipVariations,
                  A = void 0 === v || v,
                  T = n.allowedAutoPlacements,
                  w = e.options.placement,
                  E = (0, o.A)(w),
                  x =
                    p ||
                    (E !== w && A
                      ? (function (t) {
                          if ((0, o.A)(t) === f.qZ) return [];
                          var e = r(t);
                          return [a(t), e, a(e)];
                        })(w)
                      : [r(w)]),
                  k = [w].concat(x).reduce(function (t, n) {
                    return t.concat(
                      (0, o.A)(n) === f.qZ
                        ? (function (t, e) {
                            void 0 === e && (e = {});
                            var n = e,
                              i = n.placement,
                              r = n.boundary,
                              s = n.rootBoundary,
                              a = n.padding,
                              l = n.flipVariations,
                              h = n.allowedAutoPlacements,
                              d = void 0 === h ? f.DD : h,
                              p = (0, c.A)(i),
                              g = p
                                ? l
                                  ? f.Ol
                                  : f.Ol.filter(function (t) {
                                      return (0, c.A)(t) === p;
                                    })
                                : f.OM,
                              m = g.filter(function (t) {
                                return d.indexOf(t) >= 0;
                              });
                            0 === m.length && (m = g);
                            var y = m.reduce(function (e, n) {
                              return (
                                (e[n] = (0, u.A)(t, {
                                  placement: n,
                                  boundary: r,
                                  rootBoundary: s,
                                  padding: a,
                                })[(0, o.A)(n)]),
                                e
                              );
                            }, {});
                            return Object.keys(y).sort(function (t, e) {
                              return y[t] - y[e];
                            });
                          })(e, {
                            placement: n,
                            boundary: m,
                            rootBoundary: y,
                            padding: g,
                            flipVariations: A,
                            allowedAutoPlacements: T,
                          })
                        : n
                    );
                  }, []),
                  D = e.rects.reference,
                  O = e.rects.popper,
                  S = new Map(),
                  C = !0,
                  L = k[0],
                  N = 0;
                N < k.length;
                N++
              ) {
                var I = k[N],
                  R = (0, o.A)(I),
                  j = (0, c.A)(I) === f.ni,
                  P = [f.Mn, f.sQ].indexOf(R) >= 0,
                  B = P ? "width" : "height",
                  H = (0, u.A)(e, {
                    placement: I,
                    boundary: m,
                    rootBoundary: y,
                    altBoundary: b,
                    padding: g,
                  }),
                  U = P ? (j ? f.pG : f.kb) : j ? f.sQ : f.Mn;
                D[B] > O[B] && (U = r(U));
                var M = r(U),
                  _ = [];
                if (
                  (l && _.push(H[R] <= 0),
                  d && _.push(H[U] <= 0, H[M] <= 0),
                  _.every(function (t) {
                    return t;
                  }))
                ) {
                  (L = I), (C = !1);
                  break;
                }
                S.set(I, _);
              }
              if (C)
                for (
                  var z = function (t) {
                      var e = k.find(function (e) {
                        var n = S.get(e);
                        if (n)
                          return n.slice(0, t).every(function (t) {
                            return t;
                          });
                      });
                      if (e) return (L = e), "break";
                    },
                    V = A ? 3 : 1;
                  V > 0 && "break" !== z(V);
                  V--
                );
              e.placement !== L &&
                ((e.modifiersData[i]._skip = !0),
                (e.placement = L),
                (e.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: {
            _skip: !1,
          },
        };
    },
    711: function (t, e, n) {
      "use strict";
      n.d(e, {
        n4: function () {
          return T;
        },
        UD: function () {
          return A;
        },
      });
      var i = n(6354),
        r = n(222),
        o = n(8979),
        s = n(7962),
        a = n(7604),
        u = n(793),
        c = n(9760),
        f = n(134),
        l = n(6906);
      function h(t, e, n) {
        void 0 === n && (n = !1);
        var h,
          d,
          p = (0, s.sb)(e),
          g =
            (0, s.sb)(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                n = (0, l.LI)(e.width) / t.offsetWidth || 1,
                i = (0, l.LI)(e.height) / t.offsetHeight || 1;
              return 1 !== n || 1 !== i;
            })(e),
          m = (0, c.A)(e),
          y = (0, i.A)(t, g, n),
          b = {
            scrollLeft: 0,
            scrollTop: 0,
          },
          v = {
            x: 0,
            y: 0,
          };
        return (
          (p || (!p && !n)) &&
            (("body" !== (0, a.A)(e) || (0, f.A)(m)) &&
              (b =
                (h = e) !== (0, o.A)(h) && (0, s.sb)(h)
                  ? {
                      scrollLeft: (d = h).scrollLeft,
                      scrollTop: d.scrollTop,
                    }
                  : (0, r.A)(h)),
            (0, s.sb)(e)
              ? (((v = (0, i.A)(e, !0)).x += e.clientLeft),
                (v.y += e.clientTop))
              : m && (v.x = (0, u.A)(m))),
          {
            x: y.left + b.scrollLeft - v.x,
            y: y.top + b.scrollTop - v.y,
            width: y.width,
            height: y.height,
          }
        );
      }
      var d = n(6979),
        p = n(5867),
        g = n(8579),
        m = n(4278);
      function y(t) {
        var e = new Map(),
          n = new Set(),
          i = [];
        function r(t) {
          n.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!n.has(t)) {
                  var i = e.get(t);
                  i && r(i);
                }
              }),
            i.push(t);
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            n.has(t.name) || r(t);
          }),
          i
        );
      }
      var b = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute",
      };
      function v() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      function A(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.defaultModifiers,
          i = void 0 === n ? [] : n,
          r = e.defaultOptions,
          o = void 0 === r ? b : r;
        return function (t, e, n) {
          void 0 === n && (n = o);
          var r,
            a,
            u = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, b, o),
              modifiersData: {},
              elements: {
                reference: t,
                popper: e,
              },
              attributes: {},
              styles: {},
            },
            c = [],
            f = !1,
            l = {
              state: u,
              setOptions: function (n) {
                var r = "function" == typeof n ? n(u.options) : n;
                A(),
                  (u.options = Object.assign({}, o, u.options, r)),
                  (u.scrollParents = {
                    reference: (0, s.vq)(t)
                      ? (0, p.A)(t)
                      : t.contextElement
                      ? (0, p.A)(t.contextElement)
                      : [],
                    popper: (0, p.A)(e),
                  });
                var a,
                  f,
                  h = (function (t) {
                    var e = y(t);
                    return m.GM.reduce(function (t, n) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === n;
                        })
                      );
                    }, []);
                  })(
                    ((a = [].concat(i, u.options.modifiers)),
                    (f = a.reduce(function (t, e) {
                      var n = t[e.name];
                      return (
                        (t[e.name] = n
                          ? Object.assign({}, n, e, {
                              options: Object.assign({}, n.options, e.options),
                              data: Object.assign({}, n.data, e.data),
                            })
                          : e),
                        t
                      );
                    }, {})),
                    Object.keys(f).map(function (t) {
                      return f[t];
                    }))
                  );
                return (
                  (u.orderedModifiers = h.filter(function (t) {
                    return t.enabled;
                  })),
                  u.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      n = t.options,
                      i = void 0 === n ? {} : n,
                      r = t.effect;
                    if ("function" == typeof r) {
                      var o = r({
                        state: u,
                        name: e,
                        instance: l,
                        options: i,
                      });
                      c.push(o || function () {});
                    }
                  }),
                  l.update()
                );
              },
              forceUpdate: function () {
                if (!f) {
                  var t = u.elements,
                    e = t.reference,
                    n = t.popper;
                  if (v(e, n)) {
                    (u.rects = {
                      reference: h(
                        e,
                        (0, g.A)(n),
                        "fixed" === u.options.strategy
                      ),
                      popper: (0, d.A)(n),
                    }),
                      (u.reset = !1),
                      (u.placement = u.options.placement),
                      u.orderedModifiers.forEach(function (t) {
                        return (u.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ));
                      });
                    for (var i = 0; i < u.orderedModifiers.length; i++)
                      if (!0 !== u.reset) {
                        var r = u.orderedModifiers[i],
                          o = r.fn,
                          s = r.options,
                          a = void 0 === s ? {} : s,
                          c = r.name;
                        "function" == typeof o &&
                          (u =
                            o({
                              state: u,
                              options: a,
                              name: c,
                              instance: l,
                            }) || u);
                      } else (u.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((r = function () {
                  return new Promise(function (t) {
                    l.forceUpdate(), t(u);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          (a = void 0), t(r());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                A(), (f = !0);
              },
            };
          if (!v(t, e)) return l;
          function A() {
            c.forEach(function (t) {
              return t();
            }),
              (c = []);
          }
          return (
            l.setOptions(n).then(function (t) {
              !f && n.onFirstUpdate && n.onFirstUpdate(t);
            }),
            l
          );
        };
      }
      var T = A();
    },
    793: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return s;
        },
      });
      var i = n(6354),
        r = n(9760),
        o = n(222);
      function s(t) {
        return (0, i.A)((0, r.A)(t)).left + (0, o.A)(t).scrollLeft;
      }
    },
    1007: function (t, e, n) {
      "use strict";
      function i(t, e) {
        return e.reduce(function (e, n) {
          return (e[n] = t), e;
        }, {});
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    1262: function (t, e, n) {
      "use strict";
      var i = n(4278),
        r = n(8579),
        o = n(8979),
        s = n(9760),
        a = n(271),
        u = n(2632),
        c = n(8101),
        f = n(6906),
        l = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto",
        };
      function h(t) {
        var e,
          n = t.popper,
          u = t.popperRect,
          c = t.placement,
          h = t.variation,
          d = t.offsets,
          p = t.position,
          g = t.gpuAcceleration,
          m = t.adaptive,
          y = t.roundOffsets,
          b = t.isFixed,
          v = d.x,
          A = void 0 === v ? 0 : v,
          T = d.y,
          w = void 0 === T ? 0 : T,
          E =
            "function" == typeof y
              ? y({
                  x: A,
                  y: w,
                })
              : {
                  x: A,
                  y: w,
                };
        (A = E.x), (w = E.y);
        var x = d.hasOwnProperty("x"),
          k = d.hasOwnProperty("y"),
          D = i.kb,
          O = i.Mn,
          S = window;
        if (m) {
          var C = (0, r.A)(n),
            L = "clientHeight",
            N = "clientWidth";
          C === (0, o.A)(n) &&
            ((C = (0, s.A)(n)),
            "static" !== (0, a.A)(C).position &&
              "absolute" === p &&
              ((L = "scrollHeight"), (N = "scrollWidth"))),
            (c === i.Mn || ((c === i.kb || c === i.pG) && h === i._N)) &&
              ((O = i.sQ),
              (w -=
                (b && C === S && S.visualViewport
                  ? S.visualViewport.height
                  : C[L]) - u.height),
              (w *= g ? 1 : -1)),
            (c !== i.kb && ((c !== i.Mn && c !== i.sQ) || h !== i._N)) ||
              ((D = i.pG),
              (A -=
                (b && C === S && S.visualViewport
                  ? S.visualViewport.width
                  : C[N]) - u.width),
              (A *= g ? 1 : -1));
        }
        var I,
          R = Object.assign(
            {
              position: p,
            },
            m && l
          ),
          j =
            !0 === y
              ? (function (t, e) {
                  var n = t.x,
                    i = t.y,
                    r = e.devicePixelRatio || 1;
                  return {
                    x: (0, f.LI)(n * r) / r || 0,
                    y: (0, f.LI)(i * r) / r || 0,
                  };
                })(
                  {
                    x: A,
                    y: w,
                  },
                  (0, o.A)(n)
                )
              : {
                  x: A,
                  y: w,
                };
        return (
          (A = j.x),
          (w = j.y),
          g
            ? Object.assign(
                {},
                R,
                (((I = {})[O] = k ? "0" : ""),
                (I[D] = x ? "0" : ""),
                (I.transform =
                  (S.devicePixelRatio || 1) <= 1
                    ? "translate(" + A + "px, " + w + "px)"
                    : "translate3d(" + A + "px, " + w + "px, 0)"),
                I)
              )
            : Object.assign(
                {},
                R,
                (((e = {})[O] = k ? w + "px" : ""),
                (e[D] = x ? A + "px" : ""),
                (e.transform = ""),
                e)
              )
        );
      }
      e.A = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = n.gpuAcceleration,
            r = void 0 === i || i,
            o = n.adaptive,
            s = void 0 === o || o,
            a = n.roundOffsets,
            f = void 0 === a || a,
            l = {
              placement: (0, u.A)(e.placement),
              variation: (0, c.A)(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: r,
              isFixed: "fixed" === e.options.strategy,
            };
          null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(
              {},
              e.styles.popper,
              h(
                Object.assign({}, l, {
                  offsets: e.modifiersData.popperOffsets,
                  position: e.options.strategy,
                  adaptive: s,
                  roundOffsets: f,
                })
              )
            )),
            null != e.modifiersData.arrow &&
              (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                h(
                  Object.assign({}, l, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: f,
                  })
                )
              )),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-placement": e.placement,
            }));
        },
        data: {},
      };
    },
    1576: function (t, e, n) {
      "use strict";
      n.d(e, {
        n4: function () {
          return p;
        },
      });
      var i = n(711),
        r = n(9068),
        o = n(5059),
        s = n(1262),
        a = n(6607),
        u = n(8490),
        c = n(644),
        f = n(192),
        l = n(8256),
        h = n(9081),
        d = [r.A, o.A, s.A, a.A, u.A, c.A, f.A, l.A, h.A],
        p = (0, i.UD)({
          defaultModifiers: d,
        });
    },
    1815: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return a;
        },
      });
      var i = n(2632),
        r = n(8101),
        o = n(9703),
        s = n(4278);
      function a(t) {
        var e,
          n = t.reference,
          a = t.element,
          u = t.placement,
          c = u ? (0, i.A)(u) : null,
          f = u ? (0, r.A)(u) : null,
          l = n.x + n.width / 2 - a.width / 2,
          h = n.y + n.height / 2 - a.height / 2;
        switch (c) {
          case s.Mn:
            e = {
              x: l,
              y: n.y - a.height,
            };
            break;
          case s.sQ:
            e = {
              x: l,
              y: n.y + n.height,
            };
            break;
          case s.pG:
            e = {
              x: n.x + n.width,
              y: h,
            };
            break;
          case s.kb:
            e = {
              x: n.x - a.width,
              y: h,
            };
            break;
          default:
            e = {
              x: n.x,
              y: n.y,
            };
        }
        var d = c ? (0, o.A)(c) : null;
        if (null != d) {
          var p = "y" === d ? "height" : "width";
          switch (f) {
            case s.ni:
              e[d] = e[d] - (n[p] / 2 - a[p] / 2);
              break;
            case s._N:
              e[d] = e[d] + (n[p] / 2 - a[p] / 2);
          }
        }
        return e;
      }
    },
    2083: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return s;
        },
      });
      var i = n(7604),
        r = n(9760),
        o = n(7962);
      function s(t) {
        return "html" === (0, i.A)(t)
          ? t
          : t.assignedSlot ||
              t.parentNode ||
              ((0, o.Ng)(t) ? t.host : null) ||
              (0, r.A)(t);
      }
    },
    2151: function (t) {
      var e = {
        utf8: {
          stringToBytes: function (t) {
            return e.bin.stringToBytes(unescape(encodeURIComponent(t)));
          },
          bytesToString: function (t) {
            return decodeURIComponent(escape(e.bin.bytesToString(t)));
          },
        },
        bin: {
          stringToBytes: function (t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push(255 & t.charCodeAt(n));
            return e;
          },
          bytesToString: function (t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push(String.fromCharCode(t[n]));
            return e.join("");
          },
        },
      };
      t.exports = e;
    },
    2398: function (t, e, n) {
      "use strict";
      function i() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    2632: function (t, e, n) {
      "use strict";
      function i(t) {
        return t.split("-")[0];
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    3352: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return w;
        },
      });
      var i = n(4631),
        r = {
          amp: "&",
          gt: ">",
          lt: "<",
          nbsp: " ",
          quot: '"',
        },
        o = /^#[xX]([A-Fa-f0-9]+)$/,
        s = /^#([0-9]+)$/,
        a = /^([A-Za-z0-9]+)$/,
        u = (function () {
          function t(t) {
            this.named = t;
          }
          return (
            (t.prototype.parse = function (t) {
              if (t) {
                var e = t.match(o);
                return e
                  ? String.fromCharCode(parseInt(e[1], 16))
                  : (e = t.match(s))
                  ? String.fromCharCode(parseInt(e[1], 10))
                  : (e = t.match(a))
                  ? this.named[e[1]] || "&" + e[1] + ";"
                  : void 0;
              }
            }),
            t
          );
        })(),
        c = /[\t\n\f ]/,
        f = /[A-Za-z]/,
        l = /\r\n?/g;
      function h(t) {
        return c.test(t);
      }
      function d(t) {
        return f.test(t);
      }
      var p = (function () {
          function t(t, e, n) {
            void 0 === n && (n = "precompile"),
              (this.delegate = t),
              (this.entityParser = e),
              (this.mode = n),
              (this.state = "beforeData"),
              (this.line = -1),
              (this.column = -1),
              (this.input = ""),
              (this.index = -1),
              (this.tagNameBuffer = ""),
              (this.states = {
                beforeData: function () {
                  var t = this.peek();
                  if ("<" !== t || this.isIgnoredEndTag()) {
                    if ("precompile" === this.mode && "\n" === t) {
                      var e = this.tagNameBuffer.toLowerCase();
                      ("pre" !== e && "textarea" !== e) || this.consume();
                    }
                    this.transitionTo("data"), this.delegate.beginData();
                  } else
                    this.transitionTo("tagOpen"),
                      this.markTagStart(),
                      this.consume();
                },
                data: function () {
                  var t = this.peek(),
                    e = this.tagNameBuffer;
                  "<" !== t || this.isIgnoredEndTag()
                    ? "&" === t && "script" !== e && "style" !== e
                      ? (this.consume(),
                        this.delegate.appendToData(
                          this.consumeCharRef() || "&"
                        ))
                      : (this.consume(), this.delegate.appendToData(t))
                    : (this.delegate.finishData(),
                      this.transitionTo("tagOpen"),
                      this.markTagStart(),
                      this.consume());
                },
                tagOpen: function () {
                  var t = this.consume();
                  "!" === t
                    ? this.transitionTo("markupDeclarationOpen")
                    : "/" === t
                    ? this.transitionTo("endTagOpen")
                    : ("@" === t || ":" === t || d(t)) &&
                      (this.transitionTo("tagName"),
                      (this.tagNameBuffer = ""),
                      this.delegate.beginStartTag(),
                      this.appendToTagName(t));
                },
                markupDeclarationOpen: function () {
                  var t = this.consume();
                  "-" === t && "-" === this.peek()
                    ? (this.consume(),
                      this.transitionTo("commentStart"),
                      this.delegate.beginComment())
                    : "DOCTYPE" ===
                        t.toUpperCase() +
                          this.input
                            .substring(this.index, this.index + 6)
                            .toUpperCase() &&
                      (this.consume(),
                      this.consume(),
                      this.consume(),
                      this.consume(),
                      this.consume(),
                      this.consume(),
                      this.transitionTo("doctype"),
                      this.delegate.beginDoctype &&
                        this.delegate.beginDoctype());
                },
                doctype: function () {
                  h(this.consume()) && this.transitionTo("beforeDoctypeName");
                },
                beforeDoctypeName: function () {
                  var t = this.consume();
                  h(t) ||
                    (this.transitionTo("doctypeName"),
                    this.delegate.appendToDoctypeName &&
                      this.delegate.appendToDoctypeName(t.toLowerCase()));
                },
                doctypeName: function () {
                  var t = this.consume();
                  h(t)
                    ? this.transitionTo("afterDoctypeName")
                    : ">" === t
                    ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData"))
                    : this.delegate.appendToDoctypeName &&
                      this.delegate.appendToDoctypeName(t.toLowerCase());
                },
                afterDoctypeName: function () {
                  var t = this.consume();
                  if (!h(t))
                    if (">" === t)
                      this.delegate.endDoctype && this.delegate.endDoctype(),
                        this.transitionTo("beforeData");
                    else {
                      var e =
                          t.toUpperCase() +
                          this.input
                            .substring(this.index, this.index + 5)
                            .toUpperCase(),
                        n = "PUBLIC" === e.toUpperCase(),
                        i = "SYSTEM" === e.toUpperCase();
                      (n || i) &&
                        (this.consume(),
                        this.consume(),
                        this.consume(),
                        this.consume(),
                        this.consume(),
                        this.consume()),
                        n
                          ? this.transitionTo("afterDoctypePublicKeyword")
                          : i && this.transitionTo("afterDoctypeSystemKeyword");
                    }
                },
                afterDoctypePublicKeyword: function () {
                  var t = this.peek();
                  h(t)
                    ? (this.transitionTo("beforeDoctypePublicIdentifier"),
                      this.consume())
                    : '"' === t
                    ? (this.transitionTo("doctypePublicIdentifierDoubleQuoted"),
                      this.consume())
                    : "'" === t
                    ? (this.transitionTo("doctypePublicIdentifierSingleQuoted"),
                      this.consume())
                    : ">" === t &&
                      (this.consume(),
                      this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData"));
                },
                doctypePublicIdentifierDoubleQuoted: function () {
                  var t = this.consume();
                  '"' === t
                    ? this.transitionTo("afterDoctypePublicIdentifier")
                    : ">" === t
                    ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData"))
                    : this.delegate.appendToDoctypePublicIdentifier &&
                      this.delegate.appendToDoctypePublicIdentifier(t);
                },
                doctypePublicIdentifierSingleQuoted: function () {
                  var t = this.consume();
                  "'" === t
                    ? this.transitionTo("afterDoctypePublicIdentifier")
                    : ">" === t
                    ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData"))
                    : this.delegate.appendToDoctypePublicIdentifier &&
                      this.delegate.appendToDoctypePublicIdentifier(t);
                },
                afterDoctypePublicIdentifier: function () {
                  var t = this.consume();
                  h(t)
                    ? this.transitionTo(
                        "betweenDoctypePublicAndSystemIdentifiers"
                      )
                    : ">" === t
                    ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData"))
                    : '"' === t
                    ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted")
                    : "'" === t &&
                      this.transitionTo("doctypeSystemIdentifierSingleQuoted");
                },
                betweenDoctypePublicAndSystemIdentifiers: function () {
                  var t = this.consume();
                  h(t) ||
                    (">" === t
                      ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                        this.transitionTo("beforeData"))
                      : '"' === t
                      ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted")
                      : "'" === t &&
                        this.transitionTo(
                          "doctypeSystemIdentifierSingleQuoted"
                        ));
                },
                doctypeSystemIdentifierDoubleQuoted: function () {
                  var t = this.consume();
                  '"' === t
                    ? this.transitionTo("afterDoctypeSystemIdentifier")
                    : ">" === t
                    ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData"))
                    : this.delegate.appendToDoctypeSystemIdentifier &&
                      this.delegate.appendToDoctypeSystemIdentifier(t);
                },
                doctypeSystemIdentifierSingleQuoted: function () {
                  var t = this.consume();
                  "'" === t
                    ? this.transitionTo("afterDoctypeSystemIdentifier")
                    : ">" === t
                    ? (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData"))
                    : this.delegate.appendToDoctypeSystemIdentifier &&
                      this.delegate.appendToDoctypeSystemIdentifier(t);
                },
                afterDoctypeSystemIdentifier: function () {
                  var t = this.consume();
                  h(t) ||
                    (">" === t &&
                      (this.delegate.endDoctype && this.delegate.endDoctype(),
                      this.transitionTo("beforeData")));
                },
                commentStart: function () {
                  var t = this.consume();
                  "-" === t && "-" === this.peek()
                    ? this.transitionTo("commentStartDash")
                    : ">" === t
                    ? (this.delegate.finishComment(),
                      this.transitionTo("beforeData"))
                    : (this.delegate.appendToCommentData(t),
                      this.transitionTo("comment"));
                },
                commentStartDash: function () {
                  var t = this.consume();
                  "-" === t
                    ? this.transitionTo("commentEnd")
                    : ">" === t
                    ? (this.delegate.finishComment(),
                      this.transitionTo("beforeData"))
                    : (this.delegate.appendToCommentData("-"),
                      this.transitionTo("comment"));
                },
                comment: function () {
                  var t = this.consume();
                  "-" === t
                    ? this.transitionTo("commentEndDash")
                    : this.delegate.appendToCommentData(t);
                },
                commentEndDash: function () {
                  var t = this.consume();
                  "-" === t && "-" === this.peek()
                    ? this.delegate.appendToCommentData(t)
                    : "-" === t
                    ? this.transitionTo("commentEnd")
                    : (this.delegate.appendToCommentData("-" + t),
                      this.transitionTo("comment"));
                },
                commentEnd: function () {
                  var t = this.consume();
                  ">" === t
                    ? (this.delegate.finishComment(),
                      this.transitionTo("beforeData"))
                    : (this.delegate.appendToCommentData("--" + t),
                      this.transitionTo("comment"));
                },
                tagName: function () {
                  var t = this.consume();
                  h(t)
                    ? this.transitionTo("beforeAttributeName")
                    : "/" === t
                    ? this.transitionTo("selfClosingStartTag")
                    : ">" === t
                    ? (this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : this.appendToTagName(t);
                },
                endTagName: function () {
                  var t = this.consume();
                  h(t)
                    ? (this.transitionTo("beforeAttributeName"),
                      (this.tagNameBuffer = ""))
                    : "/" === t
                    ? (this.transitionTo("selfClosingStartTag"),
                      (this.tagNameBuffer = ""))
                    : ">" === t
                    ? (this.delegate.finishTag(),
                      this.transitionTo("beforeData"),
                      (this.tagNameBuffer = ""))
                    : this.appendToTagName(t);
                },
                beforeAttributeName: function () {
                  var t = this.peek();
                  h(t)
                    ? this.consume()
                    : "/" === t
                    ? (this.transitionTo("selfClosingStartTag"), this.consume())
                    : ">" === t
                    ? (this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : "=" === t
                    ? (this.delegate.reportSyntaxError(
                        "attribute name cannot start with equals sign"
                      ),
                      this.transitionTo("attributeName"),
                      this.delegate.beginAttribute(),
                      this.consume(),
                      this.delegate.appendToAttributeName(t))
                    : (this.transitionTo("attributeName"),
                      this.delegate.beginAttribute());
                },
                attributeName: function () {
                  var t = this.peek();
                  h(t)
                    ? (this.transitionTo("afterAttributeName"), this.consume())
                    : "/" === t
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.transitionTo("selfClosingStartTag"))
                    : "=" === t
                    ? (this.transitionTo("beforeAttributeValue"),
                      this.consume())
                    : ">" === t
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : '"' === t || "'" === t || "<" === t
                    ? (this.delegate.reportSyntaxError(
                        t + " is not a valid character within attribute names"
                      ),
                      this.consume(),
                      this.delegate.appendToAttributeName(t))
                    : (this.consume(), this.delegate.appendToAttributeName(t));
                },
                afterAttributeName: function () {
                  var t = this.peek();
                  h(t)
                    ? this.consume()
                    : "/" === t
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.transitionTo("selfClosingStartTag"))
                    : "=" === t
                    ? (this.consume(),
                      this.transitionTo("beforeAttributeValue"))
                    : ">" === t
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.transitionTo("attributeName"),
                      this.delegate.beginAttribute(),
                      this.consume(),
                      this.delegate.appendToAttributeName(t));
                },
                beforeAttributeValue: function () {
                  var t = this.peek();
                  h(t)
                    ? this.consume()
                    : '"' === t
                    ? (this.transitionTo("attributeValueDoubleQuoted"),
                      this.delegate.beginAttributeValue(!0),
                      this.consume())
                    : "'" === t
                    ? (this.transitionTo("attributeValueSingleQuoted"),
                      this.delegate.beginAttributeValue(!0),
                      this.consume())
                    : ">" === t
                    ? (this.delegate.beginAttributeValue(!1),
                      this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : (this.transitionTo("attributeValueUnquoted"),
                      this.delegate.beginAttributeValue(!1),
                      this.consume(),
                      this.delegate.appendToAttributeValue(t));
                },
                attributeValueDoubleQuoted: function () {
                  var t = this.consume();
                  '"' === t
                    ? (this.delegate.finishAttributeValue(),
                      this.transitionTo("afterAttributeValueQuoted"))
                    : "&" === t
                    ? this.delegate.appendToAttributeValue(
                        this.consumeCharRef() || "&"
                      )
                    : this.delegate.appendToAttributeValue(t);
                },
                attributeValueSingleQuoted: function () {
                  var t = this.consume();
                  "'" === t
                    ? (this.delegate.finishAttributeValue(),
                      this.transitionTo("afterAttributeValueQuoted"))
                    : "&" === t
                    ? this.delegate.appendToAttributeValue(
                        this.consumeCharRef() || "&"
                      )
                    : this.delegate.appendToAttributeValue(t);
                },
                attributeValueUnquoted: function () {
                  var t = this.peek();
                  h(t)
                    ? (this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.transitionTo("beforeAttributeName"))
                    : "/" === t
                    ? (this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.transitionTo("selfClosingStartTag"))
                    : "&" === t
                    ? (this.consume(),
                      this.delegate.appendToAttributeValue(
                        this.consumeCharRef() || "&"
                      ))
                    : ">" === t
                    ? (this.delegate.finishAttributeValue(),
                      this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : (this.consume(), this.delegate.appendToAttributeValue(t));
                },
                afterAttributeValueQuoted: function () {
                  var t = this.peek();
                  h(t)
                    ? (this.consume(), this.transitionTo("beforeAttributeName"))
                    : "/" === t
                    ? (this.consume(), this.transitionTo("selfClosingStartTag"))
                    : ">" === t
                    ? (this.consume(),
                      this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : this.transitionTo("beforeAttributeName");
                },
                selfClosingStartTag: function () {
                  ">" === this.peek()
                    ? (this.consume(),
                      this.delegate.markTagAsSelfClosing(),
                      this.delegate.finishTag(),
                      this.transitionTo("beforeData"))
                    : this.transitionTo("beforeAttributeName");
                },
                endTagOpen: function () {
                  var t = this.consume();
                  ("@" === t || ":" === t || d(t)) &&
                    (this.transitionTo("endTagName"),
                    (this.tagNameBuffer = ""),
                    this.delegate.beginEndTag(),
                    this.appendToTagName(t));
                },
              }),
              this.reset();
          }
          return (
            (t.prototype.reset = function () {
              this.transitionTo("beforeData"),
                (this.input = ""),
                (this.tagNameBuffer = ""),
                (this.index = 0),
                (this.line = 1),
                (this.column = 0),
                this.delegate.reset();
            }),
            (t.prototype.transitionTo = function (t) {
              this.state = t;
            }),
            (t.prototype.tokenize = function (t) {
              this.reset(), this.tokenizePart(t), this.tokenizeEOF();
            }),
            (t.prototype.tokenizePart = function (t) {
              for (
                this.input += (function (t) {
                  return t.replace(l, "\n");
                })(t);
                this.index < this.input.length;

              ) {
                var e = this.states[this.state];
                if (void 0 === e)
                  throw new Error("unhandled state " + this.state);
                e.call(this);
              }
            }),
            (t.prototype.tokenizeEOF = function () {
              this.flushData();
            }),
            (t.prototype.flushData = function () {
              "data" === this.state &&
                (this.delegate.finishData(), this.transitionTo("beforeData"));
            }),
            (t.prototype.peek = function () {
              return this.input.charAt(this.index);
            }),
            (t.prototype.consume = function () {
              var t = this.peek();
              return (
                this.index++,
                "\n" === t ? (this.line++, (this.column = 0)) : this.column++,
                t
              );
            }),
            (t.prototype.consumeCharRef = function () {
              var t = this.input.indexOf(";", this.index);
              if (-1 !== t) {
                var e = this.input.slice(this.index, t),
                  n = this.entityParser.parse(e);
                if (n) {
                  for (var i = e.length; i; ) this.consume(), i--;
                  return this.consume(), n;
                }
              }
            }),
            (t.prototype.markTagStart = function () {
              this.delegate.tagOpen();
            }),
            (t.prototype.appendToTagName = function (t) {
              (this.tagNameBuffer += t), this.delegate.appendToTagName(t);
            }),
            (t.prototype.isIgnoredEndTag = function () {
              var t = this.tagNameBuffer;
              return (
                ("title" === t &&
                  "</title>" !==
                    this.input.substring(this.index, this.index + 8)) ||
                ("style" === t &&
                  "</style>" !==
                    this.input.substring(this.index, this.index + 8)) ||
                ("script" === t &&
                  "</script>" !==
                    this.input.substring(this.index, this.index + 9))
              );
            }),
            t
          );
        })(),
        g = (function () {
          function t(t, e) {
            void 0 === e && (e = {}),
              (this.options = e),
              (this.token = null),
              (this.startLine = 1),
              (this.startColumn = 0),
              (this.tokens = []),
              (this.tokenizer = new p(this, t, e.mode)),
              (this._currentAttribute = void 0);
          }
          return (
            (t.prototype.tokenize = function (t) {
              return (
                (this.tokens = []), this.tokenizer.tokenize(t), this.tokens
              );
            }),
            (t.prototype.tokenizePart = function (t) {
              return (
                (this.tokens = []), this.tokenizer.tokenizePart(t), this.tokens
              );
            }),
            (t.prototype.tokenizeEOF = function () {
              return (
                (this.tokens = []), this.tokenizer.tokenizeEOF(), this.tokens[0]
              );
            }),
            (t.prototype.reset = function () {
              (this.token = null), (this.startLine = 1), (this.startColumn = 0);
            }),
            (t.prototype.current = function () {
              var t = this.token;
              if (null === t) throw new Error("token was unexpectedly null");
              if (0 === arguments.length) return t;
              for (var e = 0; e < arguments.length; e++)
                if (t.type === arguments[e]) return t;
              throw new Error("token type was unexpectedly " + t.type);
            }),
            (t.prototype.push = function (t) {
              (this.token = t), this.tokens.push(t);
            }),
            (t.prototype.currentAttribute = function () {
              return this._currentAttribute;
            }),
            (t.prototype.addLocInfo = function () {
              this.options.loc &&
                (this.current().loc = {
                  start: {
                    line: this.startLine,
                    column: this.startColumn,
                  },
                  end: {
                    line: this.tokenizer.line,
                    column: this.tokenizer.column,
                  },
                }),
                (this.startLine = this.tokenizer.line),
                (this.startColumn = this.tokenizer.column);
            }),
            (t.prototype.beginDoctype = function () {
              this.push({
                type: "Doctype",
                name: "",
              });
            }),
            (t.prototype.appendToDoctypeName = function (t) {
              this.current("Doctype").name += t;
            }),
            (t.prototype.appendToDoctypePublicIdentifier = function (t) {
              var e = this.current("Doctype");
              void 0 === e.publicIdentifier
                ? (e.publicIdentifier = t)
                : (e.publicIdentifier += t);
            }),
            (t.prototype.appendToDoctypeSystemIdentifier = function (t) {
              var e = this.current("Doctype");
              void 0 === e.systemIdentifier
                ? (e.systemIdentifier = t)
                : (e.systemIdentifier += t);
            }),
            (t.prototype.endDoctype = function () {
              this.addLocInfo();
            }),
            (t.prototype.beginData = function () {
              this.push({
                type: "Chars",
                chars: "",
              });
            }),
            (t.prototype.appendToData = function (t) {
              this.current("Chars").chars += t;
            }),
            (t.prototype.finishData = function () {
              this.addLocInfo();
            }),
            (t.prototype.beginComment = function () {
              this.push({
                type: "Comment",
                chars: "",
              });
            }),
            (t.prototype.appendToCommentData = function (t) {
              this.current("Comment").chars += t;
            }),
            (t.prototype.finishComment = function () {
              this.addLocInfo();
            }),
            (t.prototype.tagOpen = function () {}),
            (t.prototype.beginStartTag = function () {
              this.push({
                type: "StartTag",
                tagName: "",
                attributes: [],
                selfClosing: !1,
              });
            }),
            (t.prototype.beginEndTag = function () {
              this.push({
                type: "EndTag",
                tagName: "",
              });
            }),
            (t.prototype.finishTag = function () {
              this.addLocInfo();
            }),
            (t.prototype.markTagAsSelfClosing = function () {
              this.current("StartTag").selfClosing = !0;
            }),
            (t.prototype.appendToTagName = function (t) {
              this.current("StartTag", "EndTag").tagName += t;
            }),
            (t.prototype.beginAttribute = function () {
              this._currentAttribute = ["", "", !1];
            }),
            (t.prototype.appendToAttributeName = function (t) {
              this.currentAttribute()[0] += t;
            }),
            (t.prototype.beginAttributeValue = function (t) {
              this.currentAttribute()[2] = t;
            }),
            (t.prototype.appendToAttributeValue = function (t) {
              this.currentAttribute()[1] += t;
            }),
            (t.prototype.finishAttributeValue = function () {
              this.current("StartTag").attributes.push(this._currentAttribute);
            }),
            (t.prototype.reportSyntaxError = function (t) {
              this.current().syntaxError = t;
            }),
            t
          );
        })();
      const m = "LinkifyResult",
        y = "StartTag",
        b = "EndTag",
        v = "Chars",
        A = "Comment",
        T = "Doctype";
      function w(t, e = {}) {
        const n = ((c = t), new g(new u(r), void 0).tokenize(c)),
          o = [],
          s = [],
          a = new i.JY(e, k);
        var c;
        for (let t = 0; t < n.length; t++) {
          const e = n[t];
          if (e.type === y) {
            o.push(e);
            const i = e.tagName.toUpperCase();
            if (!("A" === i || a.ignoreTags.indexOf(i) >= 0)) continue;
            let r = o.length;
            x(i, n, ++t, o), (t += o.length - r - 1);
          } else if (e.type !== v) o.push(e);
          else {
            const t = E(e.chars, a);
            o.push.apply(o, t);
          }
        }
        for (let t = 0; t < o.length; t++) {
          const e = o[t];
          switch (e.type) {
            case m:
              s.push(e.rendered);
              break;
            case y: {
              let t = "<" + e.tagName;
              e.attributes.length > 0 && (t += " " + S(e.attributes).join(" ")),
                e.selfClosing && (t += " /"),
                (t += ">"),
                s.push(t);
              break;
            }
            case b:
              s.push(`</${e.tagName}>`);
              break;
            case v:
              s.push(D(e.chars));
              break;
            case A:
              s.push(`\x3c!--${D(e.chars)}--\x3e`);
              break;
            case T: {
              let t = `<!DOCTYPE ${e.name}`;
              e.publicIdentifier && (t += ` PUBLIC "${e.publicIdentifier}"`),
                e.systemIdentifier && (t += ` "${e.systemIdentifier}"`),
                (t += ">"),
                s.push(t);
              break;
            }
          }
        }
        return s.join("");
      }
      function E(t, e) {
        const n = (0, i.qw)(t),
          r = [];
        for (let t = 0; t < n.length; t++) {
          const i = n[t];
          "nl" === i.t && e.get("nl2br")
            ? r.push({
                type: y,
                tagName: "br",
                attributes: [],
                selfClosing: !0,
              })
            : i.isLink && e.check(i)
            ? r.push({
                type: m,
                rendered: e.render(i),
              })
            : r.push({
                type: v,
                chars: i.toString(),
              });
        }
        return r;
      }
      function x(t, e, n, i) {
        let r = 1;
        for (; n < e.length && r > 0; ) {
          let o = e[n];
          o.type === y && o.tagName.toUpperCase() === t
            ? r++
            : o.type === b && o.tagName.toUpperCase() === t && r--,
            i.push(o),
            n++;
        }
        return i;
      }
      function k({ tagName: t, attributes: e, content: n }) {
        return `<${t} ${(function (t) {
          const e = [];
          for (const n in t) {
            const i = t[n] + "";
            e.push(`${n}="${O(i)}"`);
          }
          return e.join(" ");
        })(e)}>${D(n)}</${t}>`;
      }
      function D(t) {
        return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      function O(t) {
        return t.replace(/"/g, "&quot;");
      }
      function S(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) {
          const i = t[n][0],
            r = t[n][1] + "";
          e.push(`${i}="${O(r)}"`);
        }
        return e;
      }
    },
    3503: function (t, e, n) {
      var i, r, o, s, a;
      (i = n(3939)),
        (r = n(2151).utf8),
        (o = n(7206)),
        (s = n(2151).bin),
        ((a = function (t, e) {
          t.constructor == String
            ? (t =
                e && "binary" === e.encoding
                  ? s.stringToBytes(t)
                  : r.stringToBytes(t))
            : o(t)
            ? (t = Array.prototype.slice.call(t, 0))
            : Array.isArray(t) ||
              t.constructor === Uint8Array ||
              (t = t.toString());
          for (
            var n = i.bytesToWords(t),
              u = 8 * t.length,
              c = 1732584193,
              f = -271733879,
              l = -1732584194,
              h = 271733878,
              d = 0;
            d < n.length;
            d++
          )
            n[d] =
              (16711935 & ((n[d] << 8) | (n[d] >>> 24))) |
              (4278255360 & ((n[d] << 24) | (n[d] >>> 8)));
          (n[u >>> 5] |= 128 << u % 32), (n[14 + (((u + 64) >>> 9) << 4)] = u);
          var p = a._ff,
            g = a._gg,
            m = a._hh,
            y = a._ii;
          for (d = 0; d < n.length; d += 16) {
            var b = c,
              v = f,
              A = l,
              T = h;
            (c = p(c, f, l, h, n[d + 0], 7, -680876936)),
              (h = p(h, c, f, l, n[d + 1], 12, -389564586)),
              (l = p(l, h, c, f, n[d + 2], 17, 606105819)),
              (f = p(f, l, h, c, n[d + 3], 22, -1044525330)),
              (c = p(c, f, l, h, n[d + 4], 7, -176418897)),
              (h = p(h, c, f, l, n[d + 5], 12, 1200080426)),
              (l = p(l, h, c, f, n[d + 6], 17, -1473231341)),
              (f = p(f, l, h, c, n[d + 7], 22, -45705983)),
              (c = p(c, f, l, h, n[d + 8], 7, 1770035416)),
              (h = p(h, c, f, l, n[d + 9], 12, -1958414417)),
              (l = p(l, h, c, f, n[d + 10], 17, -42063)),
              (f = p(f, l, h, c, n[d + 11], 22, -1990404162)),
              (c = p(c, f, l, h, n[d + 12], 7, 1804603682)),
              (h = p(h, c, f, l, n[d + 13], 12, -40341101)),
              (l = p(l, h, c, f, n[d + 14], 17, -1502002290)),
              (c = g(
                c,
                (f = p(f, l, h, c, n[d + 15], 22, 1236535329)),
                l,
                h,
                n[d + 1],
                5,
                -165796510
              )),
              (h = g(h, c, f, l, n[d + 6], 9, -1069501632)),
              (l = g(l, h, c, f, n[d + 11], 14, 643717713)),
              (f = g(f, l, h, c, n[d + 0], 20, -373897302)),
              (c = g(c, f, l, h, n[d + 5], 5, -701558691)),
              (h = g(h, c, f, l, n[d + 10], 9, 38016083)),
              (l = g(l, h, c, f, n[d + 15], 14, -660478335)),
              (f = g(f, l, h, c, n[d + 4], 20, -405537848)),
              (c = g(c, f, l, h, n[d + 9], 5, 568446438)),
              (h = g(h, c, f, l, n[d + 14], 9, -1019803690)),
              (l = g(l, h, c, f, n[d + 3], 14, -187363961)),
              (f = g(f, l, h, c, n[d + 8], 20, 1163531501)),
              (c = g(c, f, l, h, n[d + 13], 5, -1444681467)),
              (h = g(h, c, f, l, n[d + 2], 9, -51403784)),
              (l = g(l, h, c, f, n[d + 7], 14, 1735328473)),
              (c = m(
                c,
                (f = g(f, l, h, c, n[d + 12], 20, -1926607734)),
                l,
                h,
                n[d + 5],
                4,
                -378558
              )),
              (h = m(h, c, f, l, n[d + 8], 11, -2022574463)),
              (l = m(l, h, c, f, n[d + 11], 16, 1839030562)),
              (f = m(f, l, h, c, n[d + 14], 23, -35309556)),
              (c = m(c, f, l, h, n[d + 1], 4, -1530992060)),
              (h = m(h, c, f, l, n[d + 4], 11, 1272893353)),
              (l = m(l, h, c, f, n[d + 7], 16, -155497632)),
              (f = m(f, l, h, c, n[d + 10], 23, -1094730640)),
              (c = m(c, f, l, h, n[d + 13], 4, 681279174)),
              (h = m(h, c, f, l, n[d + 0], 11, -358537222)),
              (l = m(l, h, c, f, n[d + 3], 16, -722521979)),
              (f = m(f, l, h, c, n[d + 6], 23, 76029189)),
              (c = m(c, f, l, h, n[d + 9], 4, -640364487)),
              (h = m(h, c, f, l, n[d + 12], 11, -421815835)),
              (l = m(l, h, c, f, n[d + 15], 16, 530742520)),
              (c = y(
                c,
                (f = m(f, l, h, c, n[d + 2], 23, -995338651)),
                l,
                h,
                n[d + 0],
                6,
                -198630844
              )),
              (h = y(h, c, f, l, n[d + 7], 10, 1126891415)),
              (l = y(l, h, c, f, n[d + 14], 15, -1416354905)),
              (f = y(f, l, h, c, n[d + 5], 21, -57434055)),
              (c = y(c, f, l, h, n[d + 12], 6, 1700485571)),
              (h = y(h, c, f, l, n[d + 3], 10, -1894986606)),
              (l = y(l, h, c, f, n[d + 10], 15, -1051523)),
              (f = y(f, l, h, c, n[d + 1], 21, -2054922799)),
              (c = y(c, f, l, h, n[d + 8], 6, 1873313359)),
              (h = y(h, c, f, l, n[d + 15], 10, -30611744)),
              (l = y(l, h, c, f, n[d + 6], 15, -1560198380)),
              (f = y(f, l, h, c, n[d + 13], 21, 1309151649)),
              (c = y(c, f, l, h, n[d + 4], 6, -145523070)),
              (h = y(h, c, f, l, n[d + 11], 10, -1120210379)),
              (l = y(l, h, c, f, n[d + 2], 15, 718787259)),
              (f = y(f, l, h, c, n[d + 9], 21, -343485551)),
              (c = (c + b) >>> 0),
              (f = (f + v) >>> 0),
              (l = (l + A) >>> 0),
              (h = (h + T) >>> 0);
          }
          return i.endian([c, f, l, h]);
        })._ff = function (t, e, n, i, r, o, s) {
          var a = t + ((e & n) | (~e & i)) + (r >>> 0) + s;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._gg = function (t, e, n, i, r, o, s) {
          var a = t + ((e & i) | (n & ~i)) + (r >>> 0) + s;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._hh = function (t, e, n, i, r, o, s) {
          var a = t + (e ^ n ^ i) + (r >>> 0) + s;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._ii = function (t, e, n, i, r, o, s) {
          var a = t + (n ^ (e | ~i)) + (r >>> 0) + s;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._blocksize = 16),
        (a._digestsize = 16),
        (t.exports = function (t, e) {
          if (null == t) throw new Error("Illegal argument " + t);
          var n = i.wordsToBytes(a(t, e));
          return e && e.asBytes
            ? n
            : e && e.asString
            ? s.bytesToString(n)
            : i.bytesToHex(n);
        });
    },
    3700: function (t, e, n) {
      "use strict";
      function i(t, e, n) {
        var i,
          r = n || {},
          o = r.noTrailing,
          s = void 0 !== o && o,
          a = r.noLeading,
          u = void 0 !== a && a,
          c = r.debounceMode,
          f = void 0 === c ? void 0 : c,
          l = !1,
          h = 0;
        function d() {
          i && clearTimeout(i);
        }
        function p() {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          var a = this,
            c = Date.now() - h;
          function p() {
            (h = Date.now()), e.apply(a, r);
          }
          function g() {
            i = void 0;
          }
          l ||
            (u || !f || i || p(),
            d(),
            void 0 === f && c > t
              ? u
                ? ((h = Date.now()), s || (i = setTimeout(f ? g : p, t)))
                : p()
              : !0 !== s &&
                (i = setTimeout(f ? g : p, void 0 === f ? t - c : t)));
        }
        return (
          (p.cancel = function (t) {
            var e = (t || {}).upcomingOnly,
              n = void 0 !== e && e;
            d(), (l = !n);
          }),
          p
        );
      }
      function r(t, e, n) {
        var r = (n || {}).atBegin;
        return i(t, e, {
          debounceMode: !1 !== (void 0 !== r && r),
        });
      }
      n.d(e, {
        n: function () {
          return i;
        },
        s: function () {
          return r;
        },
      });
    },
    3939: function (t) {
      var e, n;
      (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
        (n = {
          rotl: function (t, e) {
            return (t << e) | (t >>> (32 - e));
          },
          rotr: function (t, e) {
            return (t << (32 - e)) | (t >>> e);
          },
          endian: function (t) {
            if (t.constructor == Number)
              return (16711935 & n.rotl(t, 8)) | (4278255360 & n.rotl(t, 24));
            for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
            return t;
          },
          randomBytes: function (t) {
            for (var e = []; t > 0; t--)
              e.push(Math.floor(256 * Math.random()));
            return e;
          },
          bytesToWords: function (t) {
            for (var e = [], n = 0, i = 0; n < t.length; n++, i += 8)
              e[i >>> 5] |= t[n] << (24 - (i % 32));
            return e;
          },
          wordsToBytes: function (t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8)
              e.push((t[n >>> 5] >>> (24 - (n % 32))) & 255);
            return e;
          },
          bytesToHex: function (t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push((t[n] >>> 4).toString(16)),
                e.push((15 & t[n]).toString(16));
            return e.join("");
          },
          hexToBytes: function (t) {
            for (var e = [], n = 0; n < t.length; n += 2)
              e.push(parseInt(t.substr(n, 2), 16));
            return e;
          },
          bytesToBase64: function (t) {
            for (var n = [], i = 0; i < t.length; i += 3)
              for (
                var r = (t[i] << 16) | (t[i + 1] << 8) | t[i + 2], o = 0;
                o < 4;
                o++
              )
                8 * i + 6 * o <= 8 * t.length
                  ? n.push(e.charAt((r >>> (6 * (3 - o))) & 63))
                  : n.push("=");
            return n.join("");
          },
          base64ToBytes: function (t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], i = 0, r = 0; i < t.length; r = ++i % 4)
              0 != r &&
                n.push(
                  ((e.indexOf(t.charAt(i - 1)) &
                    (Math.pow(2, -2 * r + 8) - 1)) <<
                    (2 * r)) |
                    (e.indexOf(t.charAt(i)) >>> (6 - 2 * r))
                );
            return n;
          },
        }),
        (t.exports = n);
    },
    4278: function (t, e, n) {
      "use strict";
      n.d(e, {
        DD: function () {
          return m;
        },
        EP: function () {
          return w;
        },
        GM: function () {
          return D;
        },
        LF: function () {
          return b;
        },
        LG: function () {
          return A;
        },
        M9: function () {
          return x;
        },
        Mn: function () {
          return i;
        },
        OM: function () {
          return u;
        },
        Ol: function () {
          return g;
        },
        R9: function () {
          return h;
        },
        SE: function () {
          return k;
        },
        WY: function () {
          return l;
        },
        _N: function () {
          return f;
        },
        ci: function () {
          return y;
        },
        iW: function () {
          return T;
        },
        ir: function () {
          return p;
        },
        kb: function () {
          return s;
        },
        ni: function () {
          return c;
        },
        pA: function () {
          return E;
        },
        pG: function () {
          return o;
        },
        qZ: function () {
          return a;
        },
        sQ: function () {
          return r;
        },
        v5: function () {
          return v;
        },
        xf: function () {
          return d;
        },
      });
      var i = "top",
        r = "bottom",
        o = "right",
        s = "left",
        a = "auto",
        u = [i, r, o, s],
        c = "start",
        f = "end",
        l = "clippingParents",
        h = "viewport",
        d = "popper",
        p = "reference",
        g = u.reduce(function (t, e) {
          return t.concat([e + "-" + c, e + "-" + f]);
        }, []),
        m = [].concat(u, [a]).reduce(function (t, e) {
          return t.concat([e, e + "-" + c, e + "-" + f]);
        }, []),
        y = "beforeRead",
        b = "read",
        v = "afterRead",
        A = "beforeMain",
        T = "main",
        w = "afterMain",
        E = "beforeWrite",
        x = "write",
        k = "afterWrite",
        D = [y, b, v, A, T, w, E, x, k];
    },
    4318: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(7364);
      function r(t) {
        return Object.assign({}, (0, i.A)(), t);
      }
    },
    4631: function (t, e, n) {
      "use strict";
      n.d(e, {
        I6: function () {
          return Zt;
        },
        JY: function () {
          return _t;
        },
        qw: function () {
          return Xt;
        },
      });
      const i =
          "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
        r =
          "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",
        o = "numeric",
        s = "ascii",
        a = "alpha",
        u = "asciinumeric",
        c = "alphanumeric",
        f = "domain",
        l = "emoji",
        h = "scheme",
        d = "slashscheme",
        p = "whitespace";
      function g(t, e) {
        return t in e || (e[t] = []), e[t];
      }
      function m(t, e, n) {
        e[o] && ((e[u] = !0), (e[c] = !0)),
          e[s] && ((e[u] = !0), (e[a] = !0)),
          e[u] && (e[c] = !0),
          e[a] && (e[c] = !0),
          e[c] && (e[f] = !0),
          e[l] && (e[f] = !0);
        for (const i in e) {
          const e = g(i, n);
          e.indexOf(t) < 0 && e.push(t);
        }
      }
      function y(t = null) {
        (this.j = {}), (this.jr = []), (this.jd = null), (this.t = t);
      }
      (y.groups = {}),
        (y.prototype = {
          accepts() {
            return !!this.t;
          },
          go(t) {
            const e = this,
              n = e.j[t];
            if (n) return n;
            for (let n = 0; n < e.jr.length; n++) {
              const i = e.jr[n][0],
                r = e.jr[n][1];
              if (r && i.test(t)) return r;
            }
            return e.jd;
          },
          has(t, e = !1) {
            return e ? t in this.j : !!this.go(t);
          },
          ta(t, e, n, i) {
            for (let r = 0; r < t.length; r++) this.tt(t[r], e, n, i);
          },
          tr(t, e, n, i) {
            let r;
            return (
              (i = i || y.groups),
              e && e.j ? (r = e) : ((r = new y(e)), n && i && m(e, n, i)),
              this.jr.push([t, r]),
              r
            );
          },
          ts(t, e, n, i) {
            let r = this;
            const o = t.length;
            if (!o) return r;
            for (let e = 0; e < o - 1; e++) r = r.tt(t[e]);
            return r.tt(t[o - 1], e, n, i);
          },
          tt(t, e, n, i) {
            i = i || y.groups;
            const r = this;
            if (e && e.j) return (r.j[t] = e), e;
            const o = e;
            let s,
              a = r.go(t);
            if (
              (a
                ? ((s = new y()),
                  Object.assign(s.j, a.j),
                  s.jr.push.apply(s.jr, a.jr),
                  (s.jd = a.jd),
                  (s.t = a.t))
                : (s = new y()),
              o)
            ) {
              if (i)
                if (s.t && "string" == typeof s.t) {
                  const t = Object.assign(
                    (function (t, e) {
                      const n = {};
                      for (const i in e) e[i].indexOf(t) >= 0 && (n[i] = !0);
                      return n;
                    })(s.t, i),
                    n
                  );
                  m(o, t, i);
                } else n && m(o, n, i);
              s.t = o;
            }
            return (r.j[t] = s), s;
          },
        });
      const b = (t, e, n, i, r) => t.ta(e, n, i, r),
        v = (t, e, n, i, r) => t.tr(e, n, i, r),
        A = (t, e, n, i, r) => t.ts(e, n, i, r),
        T = (t, e, n, i, r) => t.tt(e, n, i, r),
        w = "WORD",
        E = "UWORD",
        x = "ASCIINUMERICAL",
        k = "ALPHANUMERICAL",
        D = "LOCALHOST",
        O = "TLD",
        S = "UTLD",
        C = "SCHEME",
        L = "SLASH_SCHEME",
        N = "NUM",
        I = "WS",
        R = "NL",
        j = "OPENBRACE",
        P = "CLOSEBRACE",
        B = "OPENBRACKET",
        H = "CLOSEBRACKET",
        U = "OPENPAREN",
        M = "CLOSEPAREN",
        _ = "OPENANGLEBRACKET",
        z = "CLOSEANGLEBRACKET",
        V = "FULLWIDTHLEFTPAREN",
        F = "FULLWIDTHRIGHTPAREN",
        q = "LEFTCORNERBRACKET",
        W = "RIGHTCORNERBRACKET",
        Q = "LEFTWHITECORNERBRACKET",
        G = "RIGHTWHITECORNERBRACKET",
        K = "FULLWIDTHLESSTHAN",
        $ = "FULLWIDTHGREATERTHAN",
        Y = "AMPERSAND",
        X = "APOSTROPHE",
        Z = "ASTERISK",
        J = "AT",
        tt = "BACKSLASH",
        et = "BACKTICK",
        nt = "CARET",
        it = "COLON",
        rt = "COMMA",
        ot = "DOLLAR",
        st = "DOT",
        at = "EQUALS",
        ut = "EXCLAMATION",
        ct = "HYPHEN",
        ft = "PERCENT",
        lt = "PIPE",
        ht = "PLUS",
        dt = "POUND",
        pt = "QUERY",
        gt = "QUOTE",
        mt = "FULLWIDTHMIDDLEDOT",
        yt = "SEMI",
        bt = "SLASH",
        vt = "TILDE",
        At = "UNDERSCORE",
        Tt = "EMOJI",
        wt = "SYM";
      var Et = Object.freeze({
        __proto__: null,
        ALPHANUMERICAL: k,
        AMPERSAND: Y,
        APOSTROPHE: X,
        ASCIINUMERICAL: x,
        ASTERISK: Z,
        AT: J,
        BACKSLASH: tt,
        BACKTICK: et,
        CARET: nt,
        CLOSEANGLEBRACKET: z,
        CLOSEBRACE: P,
        CLOSEBRACKET: H,
        CLOSEPAREN: M,
        COLON: it,
        COMMA: rt,
        DOLLAR: ot,
        DOT: st,
        EMOJI: Tt,
        EQUALS: at,
        EXCLAMATION: ut,
        FULLWIDTHGREATERTHAN: $,
        FULLWIDTHLEFTPAREN: V,
        FULLWIDTHLESSTHAN: K,
        FULLWIDTHMIDDLEDOT: mt,
        FULLWIDTHRIGHTPAREN: F,
        HYPHEN: ct,
        LEFTCORNERBRACKET: q,
        LEFTWHITECORNERBRACKET: Q,
        LOCALHOST: D,
        NL: R,
        NUM: N,
        OPENANGLEBRACKET: _,
        OPENBRACE: j,
        OPENBRACKET: B,
        OPENPAREN: U,
        PERCENT: ft,
        PIPE: lt,
        PLUS: ht,
        POUND: dt,
        QUERY: pt,
        QUOTE: gt,
        RIGHTCORNERBRACKET: W,
        RIGHTWHITECORNERBRACKET: G,
        SCHEME: C,
        SEMI: yt,
        SLASH: bt,
        SLASH_SCHEME: L,
        SYM: wt,
        TILDE: vt,
        TLD: O,
        UNDERSCORE: At,
        UTLD: S,
        UWORD: E,
        WORD: w,
        WS: I,
      });
      const xt = /[a-z]/,
        kt = /\p{L}/u,
        Dt = /\p{Emoji}/u,
        Ot = /\d/,
        St = /\s/,
        Ct = "\r",
        Lt = "\n",
        Nt = "️",
        It = "‍",
        Rt = "￼";
      let jt = null,
        Pt = null;
      function Bt(t, e) {
        const n = (function (t) {
            const e = [],
              n = t.length;
            let i = 0;
            for (; i < n; ) {
              let r,
                o = t.charCodeAt(i),
                s =
                  o < 55296 ||
                  o > 56319 ||
                  i + 1 === n ||
                  (r = t.charCodeAt(i + 1)) < 56320 ||
                  r > 57343
                    ? t[i]
                    : t.slice(i, i + 2);
              e.push(s), (i += s.length);
            }
            return e;
          })(e.replace(/[A-Z]/g, (t) => t.toLowerCase())),
          i = n.length,
          r = [];
        let o = 0,
          s = 0;
        for (; s < i; ) {
          let a = t,
            u = null,
            c = 0,
            f = null,
            l = -1,
            h = -1;
          for (; s < i && (u = a.go(n[s])); )
            (a = u),
              a.accepts()
                ? ((l = 0), (h = 0), (f = a))
                : l >= 0 && ((l += n[s].length), h++),
              (c += n[s].length),
              (o += n[s].length),
              s++;
          (o -= l),
            (s -= h),
            (c -= l),
            r.push({
              t: f.t,
              v: e.slice(o - c, o),
              s: o - c,
              e: o,
            });
        }
        return r;
      }
      function Ht(t, e, n, i, r) {
        let o;
        const s = e.length;
        for (let n = 0; n < s - 1; n++) {
          const s = e[n];
          t.j[s]
            ? (o = t.j[s])
            : ((o = new y(i)), (o.jr = r.slice()), (t.j[s] = o)),
            (t = o);
        }
        return (o = new y(n)), (o.jr = r.slice()), (t.j[e[s - 1]] = o), o;
      }
      function Ut(t) {
        const e = [],
          n = [];
        let i = 0;
        for (; i < t.length; ) {
          let r = 0;
          for (; "0123456789".indexOf(t[i + r]) >= 0; ) r++;
          if (r > 0) {
            e.push(n.join(""));
            for (let e = parseInt(t.substring(i, i + r), 10); e > 0; e--)
              n.pop();
            i += r;
          } else n.push(t[i]), i++;
        }
        return e;
      }
      const Mt = {
        defaultProtocol: "http",
        events: null,
        format: zt,
        formatHref: zt,
        nl2br: !1,
        tagName: "a",
        target: null,
        rel: null,
        validate: !0,
        truncate: 1 / 0,
        className: null,
        attributes: null,
        ignoreTags: [],
        render: null,
      };
      function _t(t, e = null) {
        let n = Object.assign({}, Mt);
        t && (n = Object.assign(n, t instanceof _t ? t.o : t));
        const i = n.ignoreTags,
          r = [];
        for (let t = 0; t < i.length; t++) r.push(i[t].toUpperCase());
        (this.o = n), e && (this.defaultRender = e), (this.ignoreTags = r);
      }
      function zt(t) {
        return t;
      }
      function Vt(t, e) {
        (this.t = "token"), (this.v = t), (this.tk = e);
      }
      function Ft(t, e) {
        class n extends Vt {
          constructor(e, n) {
            super(e, n), (this.t = t);
          }
        }
        for (const t in e) n.prototype[t] = e[t];
        return (n.t = t), n;
      }
      (_t.prototype = {
        o: Mt,
        ignoreTags: [],
        defaultRender(t) {
          return t;
        },
        check(t) {
          return this.get("validate", t.toString(), t);
        },
        get(t, e, n) {
          const i = null != e;
          let r = this.o[t];
          return r
            ? ("object" == typeof r
                ? ((r = n.t in r ? r[n.t] : Mt[t]),
                  "function" == typeof r && i && (r = r(e, n)))
                : "function" == typeof r && i && (r = r(e, n.t, n)),
              r)
            : r;
        },
        getObj(t, e, n) {
          let i = this.o[t];
          return "function" == typeof i && null != e && (i = i(e, n.t, n)), i;
        },
        render(t) {
          const e = t.render(this);
          return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
        },
      }),
        (Vt.prototype = {
          isLink: !1,
          toString() {
            return this.v;
          },
          toHref(t) {
            return this.toString();
          },
          toFormattedString(t) {
            const e = this.toString(),
              n = t.get("truncate", e, this),
              i = t.get("format", e, this);
            return n && i.length > n ? i.substring(0, n) + "…" : i;
          },
          toFormattedHref(t) {
            return t.get(
              "formatHref",
              this.toHref(t.get("defaultProtocol")),
              this
            );
          },
          startIndex() {
            return this.tk[0].s;
          },
          endIndex() {
            return this.tk[this.tk.length - 1].e;
          },
          toObject(t = Mt.defaultProtocol) {
            return {
              type: this.t,
              value: this.toString(),
              isLink: this.isLink,
              href: this.toHref(t),
              start: this.startIndex(),
              end: this.endIndex(),
            };
          },
          toFormattedObject(t) {
            return {
              type: this.t,
              value: this.toFormattedString(t),
              isLink: this.isLink,
              href: this.toFormattedHref(t),
              start: this.startIndex(),
              end: this.endIndex(),
            };
          },
          validate(t) {
            return t.get("validate", this.toString(), this);
          },
          render(t) {
            const e = this,
              n = this.toHref(t.get("defaultProtocol")),
              i = t.get("formatHref", n, this),
              r = t.get("tagName", n, e),
              o = this.toFormattedString(t),
              s = {},
              a = t.get("className", n, e),
              u = t.get("target", n, e),
              c = t.get("rel", n, e),
              f = t.getObj("attributes", n, e),
              l = t.getObj("events", n, e);
            return (
              (s.href = i),
              a && (s.class = a),
              u && (s.target = u),
              c && (s.rel = c),
              f && Object.assign(s, f),
              {
                tagName: r,
                attributes: s,
                content: o,
                eventListeners: l,
              }
            );
          },
        });
      const qt = Ft("email", {
          isLink: !0,
          toHref() {
            return "mailto:" + this.toString();
          },
        }),
        Wt = Ft("text"),
        Qt = Ft("nl"),
        Gt = Ft("url", {
          isLink: !0,
          toHref(t = Mt.defaultProtocol) {
            return this.hasProtocol() ? this.v : `${t}://${this.v}`;
          },
          hasProtocol() {
            const t = this.tk;
            return t.length >= 2 && t[0].t !== D && t[1].t === it;
          },
        }),
        Kt = (t) => new y(t);
      function $t(t, e, n) {
        const i = n[0].s,
          r = n[n.length - 1].e;
        return new t(e.slice(i, r), n);
      }
      "undefined" != typeof console && console && console.warn;
      const Yt = {
        scanner: null,
        parser: null,
        tokenQueue: [],
        pluginQueue: [],
        customSchemes: [],
        initialized: !1,
      };
      function Xt(t) {
        return (
          Yt.initialized ||
            (function () {
              Yt.scanner = (function (t = []) {
                const e = {};
                y.groups = e;
                const n = new y();
                null == jt && (jt = Ut(i)),
                  null == Pt && (Pt = Ut(r)),
                  T(n, "'", X),
                  T(n, "{", j),
                  T(n, "}", P),
                  T(n, "[", B),
                  T(n, "]", H),
                  T(n, "(", U),
                  T(n, ")", M),
                  T(n, "<", _),
                  T(n, ">", z),
                  T(n, "（", V),
                  T(n, "）", F),
                  T(n, "「", q),
                  T(n, "」", W),
                  T(n, "『", Q),
                  T(n, "』", G),
                  T(n, "＜", K),
                  T(n, "＞", $),
                  T(n, "&", Y),
                  T(n, "*", Z),
                  T(n, "@", J),
                  T(n, "`", et),
                  T(n, "^", nt),
                  T(n, ":", it),
                  T(n, ",", rt),
                  T(n, "$", ot),
                  T(n, ".", st),
                  T(n, "=", at),
                  T(n, "!", ut),
                  T(n, "-", ct),
                  T(n, "%", ft),
                  T(n, "|", lt),
                  T(n, "+", ht),
                  T(n, "#", dt),
                  T(n, "?", pt),
                  T(n, '"', gt),
                  T(n, "/", bt),
                  T(n, ";", yt),
                  T(n, "~", vt),
                  T(n, "_", At),
                  T(n, "\\", tt),
                  T(n, "・", mt);
                const g = v(n, Ot, N, {
                  [o]: !0,
                });
                v(g, Ot, g);
                const b = v(g, xt, x, {
                    [u]: !0,
                  }),
                  Bt = v(g, kt, k, {
                    [c]: !0,
                  }),
                  Mt = v(n, xt, w, {
                    [s]: !0,
                  });
                v(Mt, Ot, b), v(Mt, xt, Mt), v(b, Ot, b), v(b, xt, b);
                const _t = v(n, kt, E, {
                  [a]: !0,
                });
                v(_t, xt),
                  v(_t, Ot, Bt),
                  v(_t, kt, _t),
                  v(Bt, Ot, Bt),
                  v(Bt, xt),
                  v(Bt, kt, Bt);
                const zt = T(n, Lt, R, {
                    [p]: !0,
                  }),
                  Vt = T(n, Ct, I, {
                    [p]: !0,
                  }),
                  Ft = v(n, St, I, {
                    [p]: !0,
                  });
                T(n, Rt, Ft),
                  T(Vt, Lt, zt),
                  T(Vt, Rt, Ft),
                  v(Vt, St, Ft),
                  T(Ft, Ct),
                  T(Ft, Lt),
                  v(Ft, St, Ft),
                  T(Ft, Rt, Ft);
                const qt = v(n, Dt, Tt, {
                  [l]: !0,
                });
                T(qt, "#"), v(qt, Dt, qt), T(qt, Nt, qt);
                const Wt = T(qt, It);
                T(Wt, "#"), v(Wt, Dt, qt);
                const Qt = [
                    [xt, Mt],
                    [Ot, b],
                  ],
                  Gt = [
                    [xt, null],
                    [kt, _t],
                    [Ot, Bt],
                  ];
                for (let t = 0; t < jt.length; t++) Ht(n, jt[t], O, w, Qt);
                for (let t = 0; t < Pt.length; t++) Ht(n, Pt[t], S, E, Gt);
                m(
                  O,
                  {
                    tld: !0,
                    ascii: !0,
                  },
                  e
                ),
                  m(
                    S,
                    {
                      utld: !0,
                      alpha: !0,
                    },
                    e
                  ),
                  Ht(n, "file", C, w, Qt),
                  Ht(n, "mailto", C, w, Qt),
                  Ht(n, "http", L, w, Qt),
                  Ht(n, "https", L, w, Qt),
                  Ht(n, "ftp", L, w, Qt),
                  Ht(n, "ftps", L, w, Qt),
                  m(
                    C,
                    {
                      scheme: !0,
                      ascii: !0,
                    },
                    e
                  ),
                  m(
                    L,
                    {
                      slashscheme: !0,
                      ascii: !0,
                    },
                    e
                  ),
                  (t = t.sort((t, e) => (t[0] > e[0] ? 1 : -1)));
                for (let e = 0; e < t.length; e++) {
                  const i = t[e][0],
                    r = t[e][1]
                      ? {
                          [h]: !0,
                        }
                      : {
                          [d]: !0,
                        };
                  i.indexOf("-") >= 0
                    ? (r[f] = !0)
                    : xt.test(i)
                    ? Ot.test(i)
                      ? (r[u] = !0)
                      : (r[s] = !0)
                    : (r[o] = !0),
                    A(n, i, i, r);
                }
                return (
                  A(n, "localhost", D, {
                    ascii: !0,
                  }),
                  (n.jd = new y(wt)),
                  {
                    start: n,
                    tokens: Object.assign(
                      {
                        groups: e,
                      },
                      Et
                    ),
                  }
                );
              })(Yt.customSchemes);
              for (let t = 0; t < Yt.tokenQueue.length; t++)
                Yt.tokenQueue[t][1]({
                  scanner: Yt.scanner,
                });
              Yt.parser = (function ({ groups: t }) {
                const e = t.domain.concat([
                    Y,
                    Z,
                    J,
                    tt,
                    et,
                    nt,
                    ot,
                    at,
                    ct,
                    N,
                    ft,
                    lt,
                    ht,
                    dt,
                    bt,
                    wt,
                    vt,
                    At,
                  ]),
                  n = [
                    X,
                    it,
                    rt,
                    st,
                    ut,
                    ft,
                    pt,
                    gt,
                    yt,
                    _,
                    z,
                    j,
                    P,
                    H,
                    B,
                    U,
                    M,
                    V,
                    F,
                    q,
                    W,
                    Q,
                    G,
                    K,
                    $,
                  ],
                  i = [
                    Y,
                    X,
                    Z,
                    tt,
                    et,
                    nt,
                    ot,
                    at,
                    ct,
                    j,
                    P,
                    ft,
                    lt,
                    ht,
                    dt,
                    pt,
                    bt,
                    wt,
                    vt,
                    At,
                  ],
                  r = Kt(),
                  o = T(r, vt);
                b(o, i, o), b(o, t.domain, o);
                const s = Kt(),
                  a = Kt(),
                  u = Kt();
                b(r, t.domain, s),
                  b(r, t.scheme, a),
                  b(r, t.slashscheme, u),
                  b(s, i, o),
                  b(s, t.domain, s);
                const c = T(s, J);
                T(o, J, c), T(a, J, c), T(u, J, c);
                const f = T(o, st);
                b(f, i, o), b(f, t.domain, o);
                const l = Kt();
                b(c, t.domain, l), b(l, t.domain, l);
                const h = T(l, st);
                b(h, t.domain, l);
                const d = Kt(qt);
                b(h, t.tld, d), b(h, t.utld, d), T(c, D, d);
                const p = T(l, ct);
                T(p, ct, p),
                  b(p, t.domain, l),
                  b(d, t.domain, l),
                  T(d, st, h),
                  T(d, ct, p);
                const g = T(d, it);
                b(g, t.numeric, qt);
                const m = T(s, ct),
                  y = T(s, st);
                T(m, ct, m), b(m, t.domain, s), b(y, i, o), b(y, t.domain, s);
                const v = Kt(Gt);
                b(y, t.tld, v),
                  b(y, t.utld, v),
                  b(v, t.domain, s),
                  b(v, i, o),
                  T(v, st, y),
                  T(v, ct, m),
                  T(v, J, c);
                const A = T(v, it),
                  w = Kt(Gt);
                b(A, t.numeric, w);
                const E = Kt(Gt),
                  x = Kt();
                b(E, e, E),
                  b(E, n, x),
                  b(x, e, E),
                  b(x, n, x),
                  T(v, bt, E),
                  T(w, bt, E);
                const k = T(a, it),
                  O = T(u, it),
                  S = T(O, bt),
                  C = T(S, bt);
                b(a, t.domain, s),
                  T(a, st, y),
                  T(a, ct, m),
                  b(u, t.domain, s),
                  T(u, st, y),
                  T(u, ct, m),
                  b(k, t.domain, E),
                  T(k, bt, E),
                  T(k, pt, E),
                  b(C, t.domain, E),
                  b(C, e, E),
                  T(C, bt, E);
                const L = [
                  [j, P],
                  [B, H],
                  [U, M],
                  [_, z],
                  [V, F],
                  [q, W],
                  [Q, G],
                  [K, $],
                ];
                for (let t = 0; t < L.length; t++) {
                  const [i, r] = L[t],
                    o = T(E, i);
                  T(x, i, o), T(o, r, E);
                  const s = Kt(Gt);
                  b(o, e, s);
                  const a = Kt();
                  b(o, n),
                    b(s, e, s),
                    b(s, n, a),
                    b(a, e, s),
                    b(a, n, a),
                    T(s, r, E),
                    T(a, r, E);
                }
                return (
                  T(r, D, v),
                  T(r, R, Qt),
                  {
                    start: r,
                    tokens: Et,
                  }
                );
              })(Yt.scanner.tokens);
              for (let t = 0; t < Yt.pluginQueue.length; t++)
                Yt.pluginQueue[t][1]({
                  scanner: Yt.scanner,
                  parser: Yt.parser,
                });
              Yt.initialized = !0;
            })(),
          (function (t, e, n) {
            let i = n.length,
              r = 0,
              o = [],
              s = [];
            for (; r < i; ) {
              let a = t,
                u = null,
                c = null,
                f = 0,
                l = null,
                h = -1;
              for (; r < i && !(u = a.go(n[r].t)); ) s.push(n[r++]);
              for (; r < i && (c = u || a.go(n[r].t)); )
                (u = null),
                  (a = c),
                  a.accepts() ? ((h = 0), (l = a)) : h >= 0 && h++,
                  r++,
                  f++;
              if (h < 0) (r -= f), r < i && (s.push(n[r]), r++);
              else {
                s.length > 0 && (o.push($t(Wt, e, s)), (s = [])),
                  (r -= h),
                  (f -= h);
                const t = l.t,
                  i = n.slice(r - f, r);
                o.push($t(t, e, i));
              }
            }
            return s.length > 0 && o.push($t(Wt, e, s)), o;
          })(Yt.parser.start, t, Bt(Yt.scanner.start, t))
        );
      }
      function Zt(t, e = null, n = null) {
        if (e && "object" == typeof e) {
          if (n)
            throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
          (n = e), (e = null);
        }
        const i = new _t(n),
          r = Xt(t),
          o = [];
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          !n.isLink ||
            (e && n.t !== e) ||
            !i.check(n) ||
            o.push(n.toFormattedObject(i));
        }
        return o;
      }
      Xt.scan = Bt;
    },
    4664: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(2398);
      function r() {
        return !/^((?!chrome|android).)*safari/i.test((0, i.A)());
      }
    },
    5059: function (t, e, n) {
      "use strict";
      var i = n(1815);
      e.A = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            n = t.name;
          e.modifiersData[n] = (0, i.A)({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      };
    },
    5446: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(7962);
      function r(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && (0, i.Ng)(n)) {
          var r = e;
          do {
            if (r && t.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
    },
    5867: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return c;
        },
      });
      var i = n(2083),
        r = n(134),
        o = n(7604),
        s = n(7962);
      function a(t) {
        return ["html", "body", "#document"].indexOf((0, o.A)(t)) >= 0
          ? t.ownerDocument.body
          : (0, s.sb)(t) && (0, r.A)(t)
          ? t
          : a((0, i.A)(t));
      }
      var u = n(8979);
      function c(t, e) {
        var n;
        void 0 === e && (e = []);
        var o = a(t),
          s = o === (null == (n = t.ownerDocument) ? void 0 : n.body),
          f = (0, u.A)(o),
          l = s ? [f].concat(f.visualViewport || [], (0, r.A)(o) ? o : []) : o,
          h = e.concat(l);
        return s ? h : h.concat(c((0, i.A)(l)));
      }
    },
    6354: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return a;
        },
      });
      var i = n(7962),
        r = n(6906),
        o = n(8979),
        s = n(4664);
      function a(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var a = t.getBoundingClientRect(),
          u = 1,
          c = 1;
        e &&
          (0, i.sb)(t) &&
          ((u = (t.offsetWidth > 0 && (0, r.LI)(a.width) / t.offsetWidth) || 1),
          (c =
            (t.offsetHeight > 0 && (0, r.LI)(a.height) / t.offsetHeight) || 1));
        var f = ((0, i.vq)(t) ? (0, o.A)(t) : window).visualViewport,
          l = !(0, s.A)() && n,
          h = (a.left + (l && f ? f.offsetLeft : 0)) / u,
          d = (a.top + (l && f ? f.offsetTop : 0)) / c,
          p = a.width / u,
          g = a.height / c;
        return {
          width: p,
          height: g,
          top: d,
          right: h + p,
          bottom: d + g,
          left: h,
          x: h,
          y: d,
        };
      }
    },
    6397: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return E;
        },
      });
      var i = n(4278),
        r = n(8979),
        o = n(9760),
        s = n(793),
        a = n(4664),
        u = n(271),
        c = n(222),
        f = n(6906),
        l = n(5867),
        h = n(8579),
        d = n(7962),
        p = n(6354),
        g = n(2083),
        m = n(5446),
        y = n(7604);
      function b(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function v(t, e, n) {
        return e === i.R9
          ? b(
              (function (t, e) {
                var n = (0, r.A)(t),
                  i = (0, o.A)(t),
                  u = n.visualViewport,
                  c = i.clientWidth,
                  f = i.clientHeight,
                  l = 0,
                  h = 0;
                if (u) {
                  (c = u.width), (f = u.height);
                  var d = (0, a.A)();
                  (d || (!d && "fixed" === e)) &&
                    ((l = u.offsetLeft), (h = u.offsetTop));
                }
                return {
                  width: c,
                  height: f,
                  x: l + (0, s.A)(t),
                  y: h,
                };
              })(t, n)
            )
          : (0, d.vq)(e)
          ? (function (t, e) {
              var n = (0, p.A)(t, !1, "fixed" === e);
              return (
                (n.top = n.top + t.clientTop),
                (n.left = n.left + t.clientLeft),
                (n.bottom = n.top + t.clientHeight),
                (n.right = n.left + t.clientWidth),
                (n.width = t.clientWidth),
                (n.height = t.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(e, n)
          : b(
              (function (t) {
                var e,
                  n = (0, o.A)(t),
                  i = (0, c.A)(t),
                  r = null == (e = t.ownerDocument) ? void 0 : e.body,
                  a = (0, f.T9)(
                    n.scrollWidth,
                    n.clientWidth,
                    r ? r.scrollWidth : 0,
                    r ? r.clientWidth : 0
                  ),
                  l = (0, f.T9)(
                    n.scrollHeight,
                    n.clientHeight,
                    r ? r.scrollHeight : 0,
                    r ? r.clientHeight : 0
                  ),
                  h = -i.scrollLeft + (0, s.A)(t),
                  d = -i.scrollTop;
                return (
                  "rtl" === (0, u.A)(r || n).direction &&
                    (h += (0, f.T9)(n.clientWidth, r ? r.clientWidth : 0) - a),
                  {
                    width: a,
                    height: l,
                    x: h,
                    y: d,
                  }
                );
              })((0, o.A)(t))
            );
      }
      var A = n(1815),
        T = n(4318),
        w = n(1007);
      function E(t, e) {
        void 0 === e && (e = {});
        var n = e,
          r = n.placement,
          s = void 0 === r ? t.placement : r,
          a = n.strategy,
          c = void 0 === a ? t.strategy : a,
          E = n.boundary,
          x = void 0 === E ? i.WY : E,
          k = n.rootBoundary,
          D = void 0 === k ? i.R9 : k,
          O = n.elementContext,
          S = void 0 === O ? i.xf : O,
          C = n.altBoundary,
          L = void 0 !== C && C,
          N = n.padding,
          I = void 0 === N ? 0 : N,
          R = (0, T.A)("number" != typeof I ? I : (0, w.A)(I, i.OM)),
          j = S === i.xf ? i.ir : i.xf,
          P = t.rects.popper,
          B = t.elements[L ? j : S],
          H = (function (t, e, n, i) {
            var r =
                "clippingParents" === e
                  ? (function (t) {
                      var e = (0, l.A)((0, g.A)(t)),
                        n =
                          ["absolute", "fixed"].indexOf((0, u.A)(t).position) >=
                            0 && (0, d.sb)(t)
                            ? (0, h.A)(t)
                            : t;
                      return (0, d.vq)(n)
                        ? e.filter(function (t) {
                            return (
                              (0, d.vq)(t) &&
                              (0, m.A)(t, n) &&
                              "body" !== (0, y.A)(t)
                            );
                          })
                        : [];
                    })(t)
                  : [].concat(e),
              o = [].concat(r, [n]),
              s = o[0],
              a = o.reduce(function (e, n) {
                var r = v(t, n, i);
                return (
                  (e.top = (0, f.T9)(r.top, e.top)),
                  (e.right = (0, f.jk)(r.right, e.right)),
                  (e.bottom = (0, f.jk)(r.bottom, e.bottom)),
                  (e.left = (0, f.T9)(r.left, e.left)),
                  e
                );
              }, v(t, s, i));
            return (
              (a.width = a.right - a.left),
              (a.height = a.bottom - a.top),
              (a.x = a.left),
              (a.y = a.top),
              a
            );
          })(
            (0, d.vq)(B) ? B : B.contextElement || (0, o.A)(t.elements.popper),
            x,
            D,
            c
          ),
          U = (0, p.A)(t.elements.reference),
          M = (0, A.A)({
            reference: U,
            element: P,
            strategy: "absolute",
            placement: s,
          }),
          _ = b(Object.assign({}, P, M)),
          z = S === i.xf ? _ : U,
          V = {
            top: H.top - z.top + R.top,
            bottom: z.bottom - H.bottom + R.bottom,
            left: H.left - z.left + R.left,
            right: z.right - H.right + R.right,
          },
          F = t.modifiersData.offset;
        if (S === i.xf && F) {
          var q = F[s];
          Object.keys(V).forEach(function (t) {
            var e = [i.pG, i.sQ].indexOf(t) >= 0 ? 1 : -1,
              n = [i.Mn, i.sQ].indexOf(t) >= 0 ? "y" : "x";
            V[t] += q[n] * e;
          });
        }
        return V;
      }
    },
    6523: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return o;
        },
        u: function () {
          return r;
        },
      });
      var i = n(6906);
      function r(t, e, n) {
        return (0, i.T9)(t, (0, i.jk)(e, n));
      }
      function o(t, e, n) {
        var i = r(t, e, n);
        return i > n ? n : i;
      }
    },
    6607: function (t, e, n) {
      "use strict";
      var i = n(7604),
        r = n(7962);
      e.A = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var n = e.styles[t] || {},
              o = e.attributes[t] || {},
              s = e.elements[t];
            (0, r.sb)(s) &&
              (0, i.A)(s) &&
              (Object.assign(s.style, n),
              Object.keys(o).forEach(function (t) {
                var e = o[t];
                !1 === e
                  ? s.removeAttribute(t)
                  : s.setAttribute(t, !0 === e ? "" : e);
              }));
          });
        },
        effect: function (t) {
          var e = t.state,
            n = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: {
                position: "absolute",
              },
              reference: {},
            };
          return (
            Object.assign(e.elements.popper.style, n.popper),
            (e.styles = n),
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var o = e.elements[t],
                  s = e.attributes[t] || {},
                  a = Object.keys(
                    e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                  ).reduce(function (t, e) {
                    return (t[e] = ""), t;
                  }, {});
                (0, r.sb)(o) &&
                  (0, i.A)(o) &&
                  (Object.assign(o.style, a),
                  Object.keys(s).forEach(function (t) {
                    o.removeAttribute(t);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
    },
    6906: function (t, e, n) {
      "use strict";
      n.d(e, {
        LI: function () {
          return o;
        },
        T9: function () {
          return i;
        },
        jk: function () {
          return r;
        },
      });
      var i = Math.max,
        r = Math.min,
        o = Math.round;
    },
    6979: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(6354);
      function r(t) {
        var e = (0, i.A)(t),
          n = t.offsetWidth,
          r = t.offsetHeight;
        return (
          Math.abs(e.width - n) <= 1 && (n = e.width),
          Math.abs(e.height - r) <= 1 && (r = e.height),
          {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: r,
          }
        );
      }
    },
    7206: function (t) {
      function e(t) {
        return (
          !!t.constructor &&
          "function" == typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      }
      t.exports = function (t) {
        return (
          null != t &&
          (e(t) ||
            (function (t) {
              return (
                "function" == typeof t.readFloatLE &&
                "function" == typeof t.slice &&
                e(t.slice(0, 0))
              );
            })(t) ||
            !!t._isBuffer)
        );
      };
    },
    7364: function (t, e, n) {
      "use strict";
      function i() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        };
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    7523: function (t, e, n) {
      "use strict";
      var i = n(6553);
      const r = document.getElementById("chat-include"),
        o = new i.A({
          url: r.getAttribute("data-ws-url"),
          api: {
            base: `${location.protocol}//${location.host}`,
          },
          cdn: {
            base: r.getAttribute("data-cdn"),
          },
          cacheKey: r.getAttribute("data-cache-key"),
          banAppealUrl: r.getAttribute("data-ban-appeal-url"),
          amazonTags: JSON.parse(r.getAttribute("data-amazon-tags")),
          dggOrigin: r.getAttribute("data-dgg-origin"),
        });
      o.withGui(n(5332).A)
        .then(() => o.loadEmotesAndFlairs())
        .then(() => o.connect());
    },
    7604: function (t, e, n) {
      "use strict";
      function i(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    7962: function (t, e, n) {
      "use strict";
      n.d(e, {
        Ng: function () {
          return s;
        },
        sb: function () {
          return o;
        },
        vq: function () {
          return r;
        },
      });
      var i = n(8979);
      function r(t) {
        return t instanceof (0, i.A)(t).Element || t instanceof Element;
      }
      function o(t) {
        return t instanceof (0, i.A)(t).HTMLElement || t instanceof HTMLElement;
      }
      function s(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof (0, i.A)(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
    },
    8101: function (t, e, n) {
      "use strict";
      function i(t) {
        return t.split("-")[1];
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    8256: function (t, e, n) {
      "use strict";
      var i = n(2632),
        r = n(6979),
        o = n(5446),
        s = n(8579),
        a = n(9703),
        u = n(6523),
        c = n(4318),
        f = n(1007),
        l = n(4278);
      e.A = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            n = t.state,
            o = t.name,
            h = t.options,
            d = n.elements.arrow,
            p = n.modifiersData.popperOffsets,
            g = (0, i.A)(n.placement),
            m = (0, a.A)(g),
            y = [l.kb, l.pG].indexOf(g) >= 0 ? "height" : "width";
          if (d && p) {
            var b = (function (t, e) {
                return (
                  (t =
                    "function" == typeof t
                      ? t(
                          Object.assign({}, e.rects, {
                            placement: e.placement,
                          })
                        )
                      : t),
                  (0, c.A)("number" != typeof t ? t : (0, f.A)(t, l.OM))
                );
              })(h.padding, n),
              v = (0, r.A)(d),
              A = "y" === m ? l.Mn : l.kb,
              T = "y" === m ? l.sQ : l.pG,
              w =
                n.rects.reference[y] +
                n.rects.reference[m] -
                p[m] -
                n.rects.popper[y],
              E = p[m] - n.rects.reference[m],
              x = (0, s.A)(d),
              k = x
                ? "y" === m
                  ? x.clientHeight || 0
                  : x.clientWidth || 0
                : 0,
              D = w / 2 - E / 2,
              O = b[A],
              S = k - v[y] - b[T],
              C = k / 2 - v[y] / 2 + D,
              L = (0, u.u)(O, C, S),
              N = m;
            n.modifiersData[o] =
              (((e = {})[N] = L), (e.centerOffset = L - C), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            n = t.options.element,
            i = void 0 === n ? "[data-popper-arrow]" : n;
          null != i &&
            ("string" != typeof i ||
              (i = e.elements.popper.querySelector(i))) &&
            (0, o.A)(e.elements.popper, i) &&
            (e.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
    },
    8490: function (t, e, n) {
      "use strict";
      var i = n(2632),
        r = n(4278);
      e.A = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            n = t.options,
            o = t.name,
            s = n.offset,
            a = void 0 === s ? [0, 0] : s,
            u = r.DD.reduce(function (t, n) {
              return (
                (t[n] = (function (t, e, n) {
                  var o = (0, i.A)(t),
                    s = [r.kb, r.Mn].indexOf(o) >= 0 ? -1 : 1,
                    a =
                      "function" == typeof n
                        ? n(
                            Object.assign({}, e, {
                              placement: t,
                            })
                          )
                        : n,
                    u = a[0],
                    c = a[1];
                  return (
                    (u = u || 0),
                    (c = (c || 0) * s),
                    [r.kb, r.pG].indexOf(o) >= 0
                      ? {
                          x: c,
                          y: u,
                        }
                      : {
                          x: u,
                          y: c,
                        }
                  );
                })(n, e.rects, a)),
                t
              );
            }, {}),
            c = u[e.placement],
            f = c.x,
            l = c.y;
          null != e.modifiersData.popperOffsets &&
            ((e.modifiersData.popperOffsets.x += f),
            (e.modifiersData.popperOffsets.y += l)),
            (e.modifiersData[o] = u);
        },
      };
    },
    8579: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return l;
        },
      });
      var i = n(8979),
        r = n(7604),
        o = n(271),
        s = n(7962);
      function a(t) {
        return ["table", "td", "th"].indexOf((0, r.A)(t)) >= 0;
      }
      var u = n(2083),
        c = n(2398);
      function f(t) {
        return (0, s.sb)(t) && "fixed" !== (0, o.A)(t).position
          ? t.offsetParent
          : null;
      }
      function l(t) {
        for (
          var e = (0, i.A)(t), n = f(t);
          n && a(n) && "static" === (0, o.A)(n).position;

        )
          n = f(n);
        return n &&
          ("html" === (0, r.A)(n) ||
            ("body" === (0, r.A)(n) && "static" === (0, o.A)(n).position))
          ? e
          : n ||
              (function (t) {
                var e = /firefox/i.test((0, c.A)());
                if (
                  /Trident/i.test((0, c.A)()) &&
                  (0, s.sb)(t) &&
                  "fixed" === (0, o.A)(t).position
                )
                  return null;
                var n = (0, u.A)(t);
                for (
                  (0, s.Ng)(n) && (n = n.host);
                  (0, s.sb)(n) && ["html", "body"].indexOf((0, r.A)(n)) < 0;

                ) {
                  var i = (0, o.A)(n);
                  if (
                    "none" !== i.transform ||
                    "none" !== i.perspective ||
                    "paint" === i.contain ||
                    -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                    (e && "filter" === i.willChange) ||
                    (e && i.filter && "none" !== i.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
    },
    8624: function (t, e, n) {
      "use strict";
      n.d(e, {
        hd: function () {
          return w;
        },
      });
      var i =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== i && i),
        r = {
          searchParams: "URLSearchParams" in i,
          iterable: "Symbol" in i && "iterator" in Symbol,
          blob:
            "FileReader" in i &&
            "Blob" in i &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (t) {
                return !1;
              }
            })(),
          formData: "FormData" in i,
          arrayBuffer: "ArrayBuffer" in i,
        };
      if (r.arrayBuffer)
        var o = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          s =
            ArrayBuffer.isView ||
            function (t) {
              return t && o.indexOf(Object.prototype.toString.call(t)) > -1;
            };
      function a(t) {
        if (
          ("string" != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
        )
          throw new TypeError(
            'Invalid character in header field name: "' + t + '"'
          );
        return t.toLowerCase();
      }
      function u(t) {
        return "string" != typeof t && (t = String(t)), t;
      }
      function c(t) {
        var e = {
          next: function () {
            var e = t.shift();
            return {
              done: void 0 === e,
              value: e,
            };
          },
        };
        return (
          r.iterable &&
            (e[Symbol.iterator] = function () {
              return e;
            }),
          e
        );
      }
      function f(t) {
        (this.map = {}),
          t instanceof f
            ? t.forEach(function (t, e) {
                this.append(e, t);
              }, this)
            : Array.isArray(t)
            ? t.forEach(function (t) {
                this.append(t[0], t[1]);
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function (e) {
                this.append(e, t[e]);
              }, this);
      }
      function l(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0;
      }
      function h(t) {
        return new Promise(function (e, n) {
          (t.onload = function () {
            e(t.result);
          }),
            (t.onerror = function () {
              n(t.error);
            });
        });
      }
      function d(t) {
        var e = new FileReader(),
          n = h(e);
        return e.readAsArrayBuffer(t), n;
      }
      function p(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
      }
      function g() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (t) {
            var e;
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = t),
              t
                ? "string" == typeof t
                  ? (this._bodyText = t)
                  : r.blob && Blob.prototype.isPrototypeOf(t)
                  ? (this._bodyBlob = t)
                  : r.formData && FormData.prototype.isPrototypeOf(t)
                  ? (this._bodyFormData = t)
                  : r.searchParams && URLSearchParams.prototype.isPrototypeOf(t)
                  ? (this._bodyText = t.toString())
                  : r.arrayBuffer &&
                    r.blob &&
                    (e = t) &&
                    DataView.prototype.isPrototypeOf(e)
                  ? ((this._bodyArrayBuffer = p(t.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : r.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(t) || s(t))
                  ? (this._bodyArrayBuffer = p(t))
                  : (this._bodyText = t = Object.prototype.toString.call(t))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                ("string" == typeof t
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : r.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(t) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          r.blob &&
            ((this.blob = function () {
              var t = l(this);
              if (t) return t;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? l(this) ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset +
                              this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                : this.blob().then(d);
            })),
          (this.text = function () {
            var t,
              e,
              n,
              i = l(this);
            if (i) return i;
            if (this._bodyBlob)
              return (
                (t = this._bodyBlob),
                (n = h((e = new FileReader()))),
                e.readAsText(t),
                n
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (t) {
                  for (
                    var e = new Uint8Array(t), n = new Array(e.length), i = 0;
                    i < e.length;
                    i++
                  )
                    n[i] = String.fromCharCode(e[i]);
                  return n.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          r.formData &&
            (this.formData = function () {
              return this.text().then(b);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (f.prototype.append = function (t, e) {
        (t = a(t)), (e = u(e));
        var n = this.map[t];
        this.map[t] = n ? n + ", " + e : e;
      }),
        (f.prototype.delete = function (t) {
          delete this.map[a(t)];
        }),
        (f.prototype.get = function (t) {
          return (t = a(t)), this.has(t) ? this.map[t] : null;
        }),
        (f.prototype.has = function (t) {
          return this.map.hasOwnProperty(a(t));
        }),
        (f.prototype.set = function (t, e) {
          this.map[a(t)] = u(e);
        }),
        (f.prototype.forEach = function (t, e) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
        }),
        (f.prototype.keys = function () {
          var t = [];
          return (
            this.forEach(function (e, n) {
              t.push(n);
            }),
            c(t)
          );
        }),
        (f.prototype.values = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e);
            }),
            c(t)
          );
        }),
        (f.prototype.entries = function () {
          var t = [];
          return (
            this.forEach(function (e, n) {
              t.push([n, e]);
            }),
            c(t)
          );
        }),
        r.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
      var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function y(t, e) {
        if (!(this instanceof y))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        var n,
          i,
          r = (e = e || {}).body;
        if (t instanceof y) {
          if (t.bodyUsed) throw new TypeError("Already read");
          (this.url = t.url),
            (this.credentials = t.credentials),
            e.headers || (this.headers = new f(t.headers)),
            (this.method = t.method),
            (this.mode = t.mode),
            (this.signal = t.signal),
            r || null == t._bodyInit || ((r = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = String(t);
        if (
          ((this.credentials =
            e.credentials || this.credentials || "same-origin"),
          (!e.headers && this.headers) || (this.headers = new f(e.headers)),
          (this.method =
            ((i = (n = e.method || this.method || "GET").toUpperCase()),
            m.indexOf(i) > -1 ? i : n)),
          (this.mode = e.mode || this.mode || null),
          (this.signal = e.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && r)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(r),
          !(
            ("GET" !== this.method && "HEAD" !== this.method) ||
            ("no-store" !== e.cache && "no-cache" !== e.cache)
          ))
        ) {
          var o = /([?&])_=[^&]*/;
          o.test(this.url)
            ? (this.url = this.url.replace(o, "$1_=" + new Date().getTime()))
            : (this.url +=
                (/\?/.test(this.url) ? "&" : "?") +
                "_=" +
                new Date().getTime());
        }
      }
      function b(t) {
        var e = new FormData();
        return (
          t
            .trim()
            .split("&")
            .forEach(function (t) {
              if (t) {
                var n = t.split("="),
                  i = n.shift().replace(/\+/g, " "),
                  r = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(i), decodeURIComponent(r));
              }
            }),
          e
        );
      }
      function v(t, e) {
        if (!(this instanceof v))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        e || (e = {}),
          (this.type = "default"),
          (this.status = void 0 === e.status ? 200 : e.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = void 0 === e.statusText ? "" : "" + e.statusText),
          (this.headers = new f(e.headers)),
          (this.url = e.url || ""),
          this._initBody(t);
      }
      (y.prototype.clone = function () {
        return new y(this, {
          body: this._bodyInit,
        });
      }),
        g.call(y.prototype),
        g.call(v.prototype),
        (v.prototype.clone = function () {
          return new v(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new f(this.headers),
            url: this.url,
          });
        }),
        (v.error = function () {
          var t = new v(null, {
            status: 0,
            statusText: "",
          });
          return (t.type = "error"), t;
        });
      var A = [301, 302, 303, 307, 308];
      v.redirect = function (t, e) {
        if (-1 === A.indexOf(e)) throw new RangeError("Invalid status code");
        return new v(null, {
          status: e,
          headers: {
            location: t,
          },
        });
      };
      var T = i.DOMException;
      try {
        new T();
      } catch (t) {
        ((T = function (t, e) {
          (this.message = t), (this.name = e);
          var n = Error(t);
          this.stack = n.stack;
        }).prototype = Object.create(Error.prototype)),
          (T.prototype.constructor = T);
      }
      function w(t, e) {
        return new Promise(function (n, o) {
          var s = new y(t, e);
          if (s.signal && s.signal.aborted)
            return o(new T("Aborted", "AbortError"));
          var a = new XMLHttpRequest();
          function c() {
            a.abort();
          }
          (a.onload = function () {
            var t,
              e,
              i = {
                status: a.status,
                statusText: a.statusText,
                headers:
                  ((t = a.getAllResponseHeaders() || ""),
                  (e = new f()),
                  t
                    .replace(/\r?\n[\t ]+/g, " ")
                    .split("\r")
                    .map(function (t) {
                      return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t;
                    })
                    .forEach(function (t) {
                      var n = t.split(":"),
                        i = n.shift().trim();
                      if (i) {
                        var r = n.join(":").trim();
                        e.append(i, r);
                      }
                    }),
                  e),
              };
            i.url =
              "responseURL" in a
                ? a.responseURL
                : i.headers.get("X-Request-URL");
            var r = "response" in a ? a.response : a.responseText;
            setTimeout(function () {
              n(new v(r, i));
            }, 0);
          }),
            (a.onerror = function () {
              setTimeout(function () {
                o(new TypeError("Network request failed"));
              }, 0);
            }),
            (a.ontimeout = function () {
              setTimeout(function () {
                o(new TypeError("Network request failed"));
              }, 0);
            }),
            (a.onabort = function () {
              setTimeout(function () {
                o(new T("Aborted", "AbortError"));
              }, 0);
            }),
            a.open(
              s.method,
              (function (t) {
                try {
                  return "" === t && i.location.href ? i.location.href : t;
                } catch (e) {
                  return t;
                }
              })(s.url),
              !0
            ),
            "include" === s.credentials
              ? (a.withCredentials = !0)
              : "omit" === s.credentials && (a.withCredentials = !1),
            "responseType" in a &&
              (r.blob
                ? (a.responseType = "blob")
                : r.arrayBuffer &&
                  s.headers.get("Content-Type") &&
                  -1 !==
                    s.headers
                      .get("Content-Type")
                      .indexOf("application/octet-stream") &&
                  (a.responseType = "arraybuffer")),
            !e || "object" != typeof e.headers || e.headers instanceof f
              ? s.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                })
              : Object.getOwnPropertyNames(e.headers).forEach(function (t) {
                  a.setRequestHeader(t, u(e.headers[t]));
                }),
            s.signal &&
              (s.signal.addEventListener("abort", c),
              (a.onreadystatechange = function () {
                4 === a.readyState && s.signal.removeEventListener("abort", c);
              })),
            a.send(void 0 === s._bodyInit ? null : s._bodyInit);
        });
      }
      (w.polyfill = !0),
        i.fetch ||
          ((i.fetch = w), (i.Headers = f), (i.Request = y), (i.Response = v));
    },
    8979: function (t, e, n) {
      "use strict";
      function i(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    9068: function (t, e, n) {
      "use strict";
      var i = n(8979),
        r = {
          passive: !0,
        };
      e.A = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            n = t.instance,
            o = t.options,
            s = o.scroll,
            a = void 0 === s || s,
            u = o.resize,
            c = void 0 === u || u,
            f = (0, i.A)(e.elements.popper),
            l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return (
            a &&
              l.forEach(function (t) {
                t.addEventListener("scroll", n.update, r);
              }),
            c && f.addEventListener("resize", n.update, r),
            function () {
              a &&
                l.forEach(function (t) {
                  t.removeEventListener("scroll", n.update, r);
                }),
                c && f.removeEventListener("resize", n.update, r);
            }
          );
        },
        data: {},
      };
    },
    9081: function (t, e, n) {
      "use strict";
      var i = n(4278),
        r = n(6397);
      function o(t, e, n) {
        return (
          void 0 === n &&
            (n = {
              x: 0,
              y: 0,
            }),
          {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
          }
        );
      }
      function s(t) {
        return [i.Mn, i.pG, i.sQ, i.kb].some(function (e) {
          return t[e] >= 0;
        });
      }
      e.A = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            n = t.name,
            i = e.rects.reference,
            a = e.rects.popper,
            u = e.modifiersData.preventOverflow,
            c = (0, r.A)(e, {
              elementContext: "reference",
            }),
            f = (0, r.A)(e, {
              altBoundary: !0,
            }),
            l = o(c, i),
            h = o(f, a, u),
            d = s(l),
            p = s(h);
          (e.modifiersData[n] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: h,
            isReferenceHidden: d,
            hasPopperEscaped: p,
          }),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": d,
              "data-popper-escaped": p,
            }));
        },
      };
    },
    9703: function (t, e, n) {
      "use strict";
      function i(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      n.d(e, {
        A: function () {
          return i;
        },
      });
    },
    9760: function (t, e, n) {
      "use strict";
      n.d(e, {
        A: function () {
          return r;
        },
      });
      var i = n(7962);
      function r(t) {
        return (
          ((0, i.vq)(t) ? t.ownerDocument : t.document) || window.document
        ).documentElement;
      }
    },
  },
  function (t) {
    t.O(0, [244, 823], function () {
      return t((t.s = 7523));
    }),
      t.O();
  },
]);

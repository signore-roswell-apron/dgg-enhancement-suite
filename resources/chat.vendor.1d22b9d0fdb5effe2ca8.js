/*! For license information please see chat.vendor.1d22b9d0fdb5effe2ca8.js.LICENSE.txt */
"use strict";
(self.webpackChunkdgg_website = self.webpackChunkdgg_website || []).push([
  [823],
  {
    3221: function (t, e) {
      e.A =
        '<div id="chat" class="chat onstreamchat"> <div id="chat-event-bar"></div> <div id="chat-vote-frame"></div> <div id="chat-output-frame"> <div id="chat-event-selected"></div> <div id="chat-pinned-message"></div> </div> </div> ';
    },
    5332: function (t, e) {
      e.A =
        '<div id="chat" class="chat"> <div id="chat-windows-select"></div> <div id="chat-event-bar"></div> <div id="chat-poll-frame"> <div class="poll-frame"> <div class="poll-header"> <div class="poll-top"> <span class="poll-question"></span> <span class="poll-close" title="Close poll"></span> </div> <div class="poll-title"> <span class="poll-info"></span> <span class="poll-votes"></span> </div> </div> <div class="poll-options"></div> <div class="poll-footer"> <div class="poll-timer"> <div class="poll-timer-inner"></div> </div> <span class="poll-end"></span> </div> </div> </div> <div id="chat-output-frame" data-scroll-notify> <div id="chat-event-selected" class="hidden"></div> <div id="chat-pinned-message"></div> </div> <div id="chat-input-frame"> <div id="chat-input-wrap"> <textarea enterkeyhint="send" id="chat-input-control" placeholder="Getting things ready ..." autocomplete="off" tabindex="1" autofocus spellcheck></textarea> <a id="chat-input-subonly" class="chat-tool-btn" title="Subonly mode"> <i class="btn-icon"></i> </a> </div> <div id="chat-tools-wrap"> <div class="chat-tools-group"> <a id="chat-emoticon-btn" class="chat-tool-btn" aria-label="Emotes" data-tippy-content="Emotes"> <i class="btn-icon"></i> </a> <a id="chat-whisper-btn" class="chat-tool-btn" aria-label="Whispers" data-tippy-content="Whispers"> <i class="btn-icon"></i> </a> </div> <div class="chat-tools-group"> <a id="chat-watching-focus-btn" class="chat-tool-btn" data-tippy-content="Highlights messages from users watching the same stream"> <i class="btn-icon"></i> </a> <a id="chat-settings-btn" class="chat-tool-btn" aria-label="Settings" data-tippy-content="Settings"> <i class="btn-icon"></i> </a> <a id="chat-users-btn" class="chat-tool-btn" aria-label="Users" data-tippy-content="Users"> <i class="btn-icon"></i> </a> </div> </div> </div> <div id="chat-settings" class="chat-menu right"> <div class="chat-menu-inner"> <div class="toolbar"> <h5><span>Settings</span> <i class="chat-menu-close"></i></h5> </div> <div class="scrollable"> <div class="content"> <div id="chat-settings-form"> <div class="form-group checkbox"> <label title="Persistent profile settings"> <input name="profilesettings" type="checkbox"/> Save settings to profile </label> </div> <div class="form-group"> <label for="fontscale">Font Scaling</label> <select class="form-control" id="fontscale" name="fontscale"> <option value="auto">Auto Scale</option> <option value="none">No Scale</option> <option value="small">Size Small</option> <option value="medium">Size Medium</option> <option value="large">Size Large</option> </select> </div> <h4>Messages</h4> <div class="form-group checkbox"> <label title="Show all user flair icons"> <input name="hideflairicons" type="checkbox" data-opposite/> Show flairs </label> </div> <div class="form-group checkbox"> <label title="Show the timestamps next to the messages"> <input name="showtime" type="checkbox"/> Show time </label> </div> <div class="form-group checkbox"> <label title="Ignore messages that mention ignored users"> <input name="ignorementions" type="checkbox"/> Harsh ignore </label> </div> <div class="form-group checkbox"> <label title="Show entire url in message"> <input name="showentireurl" type="checkbox"/> Show entire URL </label> </div> <div class="form-group checkbox"> <label title="Hide messages that contain links to not safe for work content"> <input name="hidensfw" type="checkbox"/> Hide messages with nsfw </label> </div> <div class="form-group checkbox"> <label title="Hide messages that contain links to not safe for life content"> <input name="hidensfl" type="checkbox"/> Hide messages with nsfl </label> </div> <div class="form-group checkbox"> <label title="Replace bad words with asterisks (e.g., the F word becomes ****)"> <input name="censorbadwords" type="checkbox"/> Censor bad words </label> </div> <div class="form-group"> <label for="showremoved">Banned messages</label> <select class="form-control" id="showremoved" name="showremoved"> <option value="0">remove</option> <option value="1">&lt;censored&gt;</option> <option value="2">do nothing</option> </select> </div> <div class="form-group checkbox"> <label title="Disable animations when possible"> <input name="disableanimations" type="checkbox"/> Disable animations when possible </label> </div> <h4>Notifications</h4> <div class="form-group checkbox"> <label title="Notification auto close"> <input name="notificationtimeout" type="checkbox"/> Close after short period </label> </div> <div class="form-group"> <p> <small id="chat-settings-notification-permissions">(Permission unknown)</small> </p> </div> <h4>Whispers</h4> <div class="form-group checkbox"> <label title="Notification on whisper"> <input name="notificationwhisper" type="checkbox"/> Notification </label> </div> <div class="form-group checkbox"> <label title="Whispers shown in chat"> <input name="showhispersinchat" type="checkbox"/> In-line messages </label> </div> <h4>Highlights, Focus &amp; Tags</h4> <div class="form-group checkbox"> <label title="Notification on highlight"> <input name="notificationhighlight" type="checkbox"/> Notification </label> </div> <div class="form-group checkbox"> <label title="Highlights messages you are mentioned in"> <input name="highlight" type="checkbox"/> Highlight when mentioned </label> </div> <div class="form-group checkbox"> <label title="Include mentions when focused"> <input name="focusmentioned" type="checkbox"/> Include mentions when <span title="Occurs when you click on a user in chat.">focused</span> </label> </div> <div class="form-group checkbox"> <label> <input name="taggedvisibility" type="checkbox"/> Increased visibility of tagged users </label> </div> <div class="form-group row"> <label title="Highlights usernames or text that match">Custom Highlights</label> <textarea name="customhighlight" style="resize:vertical" class="form-control" placeholder="Comma separated ..."></textarea> </div> <h4>Autocomplete</h4> <div class="form-group checkbox"> <label title="Toggle the auto-complete suggestion tabs ..."> <input name="autocompletehelper" type="checkbox"/> Auto-complete helper </label> </div> </div> </div> </div> </div> </div> <div id="chat-user-list" class="chat-menu right"> <div class="chat-menu-inner"> <div class="toolbar"> <h5><span>Users</span> <i class="chat-menu-close"></i></h5> </div> <div class="scrollable"> <div class="content"></div> </div> <div id="chat-user-list-search"> <input type="text" class="form-control" value="" placeholder="Username search ..."/> </div> </div> </div> <div id="chat-user-info" class="chat-menu"> <div class="chat-menu-inner floating-window"> <div class="toolbar"> <h5><span>User Info</span> <i class="chat-menu-close"></i></h5> </div> <div class="user-info"> <h5 class="watching-subheader">Watching:</h5> <h5 class="date-subheader"></h5> <h5 class="tag-subheader"></h5> <h5 class="flairs-subheader">Flairs:</h5> <div class="flairs"></div> <h5>Messages:</h5> <div class="stalk"> <div class="scrollable"> <div class="content"> <div class="message-history-status hidden"> Loading history... </div> <div class="no-messages-notice hidden">No messages</div> <div class="messages"></div> </div> </div> </div> </div> <div class="actions"> <div class="action-buttons"> <a id="mute-user-btn" class="chat-tool-btn" aria-label="Mute" data-tippy-content="Mute"> <i class="btn-icon"></i> </a> <a id="ban-user-btn" class="chat-tool-btn" aria-label="IP Ban" data-tippy-content="IP Ban"> <i class="btn-icon"></i> </a> <a id="logs-user-btn" class="chat-tool-btn" aria-label="Stalk" data-tippy-content="Stalk"> <i class="btn-icon"></i> </a> <a id="whisper-user-btn" class="chat-tool-btn" aria-label="Whisper" data-tippy-content="Whisper"> <i class="btn-icon"></i> </a> <a id="ignore-user-btn" class="chat-tool-btn" aria-label="Ignore" data-tippy-content="Ignore"> <i class="btn-icon"></i> </a> <a id="unignore-user-btn" class="chat-tool-btn" aria-label="Unignore" data-tippy-content="Unignore"> <i class="btn-icon"></i> </a> <a id="rustle-user-btn" class="chat-tool-btn" aria-label="Open Logs" data-tippy-content="Open Logs on RustleSearch" target="_blank" rel="noopener noreferrer"> <i class="btn-icon"></i> </a> </div> <div id="action-durations" class="hidden"></div> </div> </div> </div> <div id="chat-emote-tooltip" class="chat-menu"> <div class="chat-menu-inner floating-window"> <div class="emote-image"></div> <div class="emote-info"> <div class="name" title="Emote name"></div> <div class="creator" title="Emote creator"></div> <div class="tier" title="Emote tier"></div> <button class="favorite" title="Favorite emote"> <i class="btn-icon"></i> </button> </div> </div> </div> <div id="chat-emote-list" class="chat-menu left"> <div class="chat-menu-inner"> <div class="toolbar"> <h5><span>Emotes</span> <i class="chat-menu-close"></i></h5> </div> <div class="scrollable all"> <div class="content"></div> </div> <div id="chat-emote-list-search"> <input type="text" class="form-control" value="" placeholder="Emote search ..."/> </div> </div> </div> <div id="chat-whisper-users" class="chat-menu left"> <div class="chat-menu-inner"> <div class="toolbar"> <h5><span>Whispers</span> <i class="chat-menu-close"></i></h5> </div> <div class="scrollable"> <div class="content"> <ul></ul> </div> </div> </div> </div> <div id="chat-login-screen" style="display:none"> <h2>Want to chat?</h2> <p> You need to be signed in.<br/>Become part of the community and have your say! </p> <div> <button id="chat-btn-login" class="btn btn-primary">Login</button> <button id="chat-btn-cancel" class="btn btn-default">No thanks</button> </div> </div> <div id="chat-loading"> <div> <i class="chat-loading-icon"></i> </div> </div> <div id="event-action-menu" class="chat-menu"> <div class="chat-menu-inner floating-window"> <button id="remove-event-button" class="event-action"> Remove Event </button> </div> </div> </div> ';
    },
    6553: function (t, e, s) {
      s.d(e, {
        A: function () {
          return Ro;
        },
      });
      var i = s(8624),
        n = s(2726),
        o = s.n(n),
        a = s(3700),
        r = s(5093),
        c = s.n(r),
        h = s(1576),
        l = s(6607),
        u =
          '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
        d = "tippy-content",
        m = "tippy-arrow",
        p = "tippy-svg-arrow",
        g = {
          passive: !0,
          capture: !0,
        },
        f = function () {
          return document.body;
        };
      function b(t, e, s) {
        if (Array.isArray(t)) {
          var i = t[e];
          return null == i ? (Array.isArray(s) ? s[e] : s) : i;
        }
        return t;
      }
      function v(t, e) {
        var s = {}.toString.call(t);
        return 0 === s.indexOf("[object") && s.indexOf(e + "]") > -1;
      }
      function w(t, e) {
        return "function" == typeof t ? t.apply(void 0, e) : t;
      }
      function y(t, e) {
        return 0 === e
          ? t
          : function (i) {
              clearTimeout(s),
                (s = setTimeout(function () {
                  t(i);
                }, e));
            };
        var s;
      }
      function E(t) {
        return [].concat(t);
      }
      function S(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function k(t) {
        return [].slice.call(t);
      }
      function T(t) {
        return Object.keys(t).reduce(function (e, s) {
          return void 0 !== t[s] && (e[s] = t[s]), e;
        }, {});
      }
      function x() {
        return document.createElement("div");
      }
      function O(t) {
        return ["Element", "Fragment"].some(function (e) {
          return v(t, e);
        });
      }
      function $(t, e) {
        t.forEach(function (t) {
          t && (t.style.transitionDuration = e + "ms");
        });
      }
      function A(t, e) {
        t.forEach(function (t) {
          t && t.setAttribute("data-state", e);
        });
      }
      function N(t, e, s) {
        var i = e + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t[i](e, s);
        });
      }
      function M(t, e) {
        for (var s = e; s; ) {
          var i;
          if (t.contains(s)) return !0;
          s =
            null == s.getRootNode || null == (i = s.getRootNode())
              ? void 0
              : i.host;
        }
        return !1;
      }
      var C = {
          isTouch: !1,
        },
        L = 0;
      function I() {
        C.isTouch ||
          ((C.isTouch = !0),
          window.performance && document.addEventListener("mousemove", R));
      }
      function R() {
        var t = performance.now();
        t - L < 20 &&
          ((C.isTouch = !1), document.removeEventListener("mousemove", R)),
          (L = t);
      }
      function P() {
        var t,
          e = document.activeElement;
        if ((t = e) && t._tippy && t._tippy.reference === t) {
          var s = e._tippy;
          e.blur && !s.state.isVisible && e.blur();
        }
      }
      var U = !(
          "undefined" == typeof window ||
          "undefined" == typeof document ||
          !window.msCrypto
        ),
        D = Object.assign(
          {
            appendTo: f,
            aria: {
              content: "auto",
              expanded: "auto",
            },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1,
          },
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        B = Object.keys(D);
      function H(t) {
        var e = (t.plugins || []).reduce(function (e, s) {
          var i,
            n = s.name,
            o = s.defaultValue;
          return (
            n && (e[n] = void 0 !== t[n] ? t[n] : null != (i = D[n]) ? i : o), e
          );
        }, {});
        return Object.assign({}, t, e);
      }
      function j(t, e) {
        var s = Object.assign(
          {},
          e,
          {
            content: w(e.content, [t]),
          },
          e.ignoreAttributes
            ? {}
            : (function (t, e) {
                return (
                  e
                    ? Object.keys(
                        H(
                          Object.assign({}, D, {
                            plugins: e,
                          })
                        )
                      )
                    : B
                ).reduce(function (e, s) {
                  var i = (t.getAttribute("data-tippy-" + s) || "").trim();
                  if (!i) return e;
                  if ("content" === s) e[s] = i;
                  else
                    try {
                      e[s] = JSON.parse(i);
                    } catch (t) {
                      e[s] = i;
                    }
                  return e;
                }, {});
              })(t, e.plugins)
        );
        return (
          (s.aria = Object.assign({}, D.aria, s.aria)),
          (s.aria = {
            expanded:
              "auto" === s.aria.expanded ? e.interactive : s.aria.expanded,
            content:
              "auto" === s.aria.content
                ? e.interactive
                  ? null
                  : "describedby"
                : s.aria.content,
          }),
          s
        );
      }
      function F(t, e) {
        t.innerHTML = e;
      }
      function V(t) {
        var e = x();
        return (
          !0 === t
            ? (e.className = m)
            : ((e.className = p), O(t) ? e.appendChild(t) : F(e, t)),
          e
        );
      }
      function _(t, e) {
        O(e.content)
          ? (F(t, ""), t.appendChild(e.content))
          : "function" != typeof e.content &&
            (e.allowHTML ? F(t, e.content) : (t.textContent = e.content));
      }
      function q(t) {
        var e = t.firstElementChild,
          s = k(e.children);
        return {
          box: e,
          content: s.find(function (t) {
            return t.classList.contains(d);
          }),
          arrow: s.find(function (t) {
            return t.classList.contains(m) || t.classList.contains(p);
          }),
          backdrop: s.find(function (t) {
            return t.classList.contains("tippy-backdrop");
          }),
        };
      }
      function W(t) {
        var e = x(),
          s = x();
        (s.className = "tippy-box"),
          s.setAttribute("data-state", "hidden"),
          s.setAttribute("tabindex", "-1");
        var i = x();
        function n(s, i) {
          var n = q(e),
            o = n.box,
            a = n.content,
            r = n.arrow;
          i.theme
            ? o.setAttribute("data-theme", i.theme)
            : o.removeAttribute("data-theme"),
            "string" == typeof i.animation
              ? o.setAttribute("data-animation", i.animation)
              : o.removeAttribute("data-animation"),
            i.inertia
              ? o.setAttribute("data-inertia", "")
              : o.removeAttribute("data-inertia"),
            (o.style.maxWidth =
              "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
            i.role ? o.setAttribute("role", i.role) : o.removeAttribute("role"),
            (s.content === i.content && s.allowHTML === i.allowHTML) ||
              _(a, t.props),
            i.arrow
              ? r
                ? s.arrow !== i.arrow &&
                  (o.removeChild(r), o.appendChild(V(i.arrow)))
                : o.appendChild(V(i.arrow))
              : r && o.removeChild(r);
        }
        return (
          (i.className = d),
          i.setAttribute("data-state", "hidden"),
          _(i, t.props),
          e.appendChild(s),
          s.appendChild(i),
          n(t.props, t.props),
          {
            popper: e,
            onUpdate: n,
          }
        );
      }
      W.$$tippy = !0;
      var G = 1,
        z = [],
        Y = [];
      function K(t, e) {
        var s,
          i,
          n,
          o,
          a,
          r,
          c,
          l,
          u = j(t, Object.assign({}, D, H(T(e)))),
          d = !1,
          m = !1,
          p = !1,
          O = !1,
          L = [],
          I = y(vt, u.interactiveDebounce),
          R = G++,
          P = (l = u.plugins).filter(function (t, e) {
            return l.indexOf(t) === e;
          }),
          B = {
            id: R,
            reference: t,
            popper: x(),
            popperInstance: null,
            props: u,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: P,
            clearDelayTimeouts: function () {
              clearTimeout(s), clearTimeout(i), cancelAnimationFrame(n);
            },
            setProps: function (e) {
              if (!B.state.isDestroyed) {
                nt("onBeforeUpdate", [B, e]), ft();
                var s = B.props,
                  i = j(
                    t,
                    Object.assign({}, s, T(e), {
                      ignoreAttributes: !0,
                    })
                  );
                (B.props = i),
                  gt(),
                  s.interactiveDebounce !== i.interactiveDebounce &&
                    (rt(), (I = y(vt, i.interactiveDebounce))),
                  s.triggerTarget && !i.triggerTarget
                    ? E(s.triggerTarget).forEach(function (t) {
                        t.removeAttribute("aria-expanded");
                      })
                    : i.triggerTarget && t.removeAttribute("aria-expanded"),
                  at(),
                  it(),
                  _ && _(s, i),
                  B.popperInstance &&
                    (St(),
                    Tt().forEach(function (t) {
                      requestAnimationFrame(
                        t._tippy.popperInstance.forceUpdate
                      );
                    })),
                  nt("onAfterUpdate", [B, e]);
              }
            },
            setContent: function (t) {
              B.setProps({
                content: t,
              });
            },
            show: function () {
              var t = B.state.isVisible,
                e = B.state.isDestroyed,
                s = !B.state.isEnabled,
                i = C.isTouch && !B.props.touch,
                n = b(B.props.duration, 0, D.duration);
              if (
                !(
                  t ||
                  e ||
                  s ||
                  i ||
                  Q().hasAttribute("disabled") ||
                  (nt("onShow", [B], !1), !1 === B.props.onShow(B))
                )
              ) {
                if (
                  ((B.state.isVisible = !0),
                  Z() && (V.style.visibility = "visible"),
                  it(),
                  ut(),
                  B.state.isMounted || (V.style.transition = "none"),
                  Z())
                ) {
                  var o = et();
                  $([o.box, o.content], 0);
                }
                var a, c, h;
                (r = function () {
                  var t;
                  if (B.state.isVisible && !O) {
                    if (
                      ((O = !0),
                      V.offsetHeight,
                      (V.style.transition = B.props.moveTransition),
                      Z() && B.props.animation)
                    ) {
                      var e = et(),
                        s = e.box,
                        i = e.content;
                      $([s, i], n), A([s, i], "visible");
                    }
                    ot(),
                      at(),
                      S(Y, B),
                      null == (t = B.popperInstance) || t.forceUpdate(),
                      nt("onMount", [B]),
                      B.props.animation &&
                        Z() &&
                        (function (t) {
                          mt(t, function () {
                            (B.state.isShown = !0), nt("onShown", [B]);
                          });
                        })(n);
                  }
                }),
                  (c = B.props.appendTo),
                  (h = Q()),
                  (a =
                    (B.props.interactive && c === f) || "parent" === c
                      ? h.parentNode
                      : w(c, [h])).contains(V) || a.appendChild(V),
                  (B.state.isMounted = !0),
                  St();
              }
            },
            hide: function () {
              var t = !B.state.isVisible,
                e = B.state.isDestroyed,
                s = !B.state.isEnabled,
                i = b(B.props.duration, 1, D.duration);
              if (
                !(t || e || s) &&
                (nt("onHide", [B], !1), !1 !== B.props.onHide(B))
              ) {
                if (
                  ((B.state.isVisible = !1),
                  (B.state.isShown = !1),
                  (O = !1),
                  (d = !1),
                  Z() && (V.style.visibility = "hidden"),
                  rt(),
                  dt(),
                  it(!0),
                  Z())
                ) {
                  var n = et(),
                    o = n.box,
                    a = n.content;
                  B.props.animation && ($([o, a], i), A([o, a], "hidden"));
                }
                ot(),
                  at(),
                  B.props.animation
                    ? Z() &&
                      (function (t, e) {
                        mt(t, function () {
                          !B.state.isVisible &&
                            V.parentNode &&
                            V.parentNode.contains(V) &&
                            e();
                        });
                      })(i, B.unmount)
                    : B.unmount();
              }
            },
            hideWithInteractivity: function (t) {
              tt().addEventListener("mousemove", I), S(z, I), I(t);
            },
            enable: function () {
              B.state.isEnabled = !0;
            },
            disable: function () {
              B.hide(), (B.state.isEnabled = !1);
            },
            unmount: function () {
              B.state.isVisible && B.hide(),
                B.state.isMounted &&
                  (kt(),
                  Tt().forEach(function (t) {
                    t._tippy.unmount();
                  }),
                  V.parentNode && V.parentNode.removeChild(V),
                  (Y = Y.filter(function (t) {
                    return t !== B;
                  })),
                  (B.state.isMounted = !1),
                  nt("onHidden", [B]));
            },
            destroy: function () {
              B.state.isDestroyed ||
                (B.clearDelayTimeouts(),
                B.unmount(),
                ft(),
                delete t._tippy,
                (B.state.isDestroyed = !0),
                nt("onDestroy", [B]));
            },
          };
        if (!u.render) return B;
        var F = u.render(B),
          V = F.popper,
          _ = F.onUpdate;
        V.setAttribute("data-tippy-root", ""),
          (V.id = "tippy-" + B.id),
          (B.popper = V),
          (t._tippy = B),
          (V._tippy = B);
        var W = P.map(function (t) {
            return t.fn(B);
          }),
          K = t.hasAttribute("aria-expanded");
        return (
          gt(),
          at(),
          it(),
          nt("onCreate", [B]),
          u.showOnCreate && xt(),
          V.addEventListener("mouseenter", function () {
            B.props.interactive && B.state.isVisible && B.clearDelayTimeouts();
          }),
          V.addEventListener("mouseleave", function () {
            B.props.interactive &&
              B.props.trigger.indexOf("mouseenter") >= 0 &&
              tt().addEventListener("mousemove", I);
          }),
          B
        );
        function X() {
          var t = B.props.touch;
          return Array.isArray(t) ? t : [t, 0];
        }
        function J() {
          return "hold" === X()[0];
        }
        function Z() {
          var t;
          return !(null == (t = B.props.render) || !t.$$tippy);
        }
        function Q() {
          return c || t;
        }
        function tt() {
          var t,
            e,
            s = Q().parentNode;
          return s
            ? null != (e = E(s)[0]) && null != (t = e.ownerDocument) && t.body
              ? e.ownerDocument
              : document
            : document;
        }
        function et() {
          return q(V);
        }
        function st(t) {
          return (B.state.isMounted && !B.state.isVisible) ||
            C.isTouch ||
            (o && "focus" === o.type)
            ? 0
            : b(B.props.delay, t ? 0 : 1, D.delay);
        }
        function it(t) {
          void 0 === t && (t = !1),
            (V.style.pointerEvents = B.props.interactive && !t ? "" : "none"),
            (V.style.zIndex = "" + B.props.zIndex);
        }
        function nt(t, e, s) {
          var i;
          void 0 === s && (s = !0),
            W.forEach(function (s) {
              s[t] && s[t].apply(s, e);
            }),
            s && (i = B.props)[t].apply(i, e);
        }
        function ot() {
          var e = B.props.aria;
          if (e.content) {
            var s = "aria-" + e.content,
              i = V.id;
            E(B.props.triggerTarget || t).forEach(function (t) {
              var e = t.getAttribute(s);
              if (B.state.isVisible) t.setAttribute(s, e ? e + " " + i : i);
              else {
                var n = e && e.replace(i, "").trim();
                n ? t.setAttribute(s, n) : t.removeAttribute(s);
              }
            });
          }
        }
        function at() {
          !K &&
            B.props.aria.expanded &&
            E(B.props.triggerTarget || t).forEach(function (t) {
              B.props.interactive
                ? t.setAttribute(
                    "aria-expanded",
                    B.state.isVisible && t === Q() ? "true" : "false"
                  )
                : t.removeAttribute("aria-expanded");
            });
        }
        function rt() {
          tt().removeEventListener("mousemove", I),
            (z = z.filter(function (t) {
              return t !== I;
            }));
        }
        function ct(e) {
          if (!C.isTouch || (!p && "mousedown" !== e.type)) {
            var s = (e.composedPath && e.composedPath()[0]) || e.target;
            if (!B.props.interactive || !M(V, s)) {
              if (
                E(B.props.triggerTarget || t).some(function (t) {
                  return M(t, s);
                })
              ) {
                if (C.isTouch) return;
                if (B.state.isVisible && B.props.trigger.indexOf("click") >= 0)
                  return;
              } else nt("onClickOutside", [B, e]);
              !0 === B.props.hideOnClick &&
                (B.clearDelayTimeouts(),
                B.hide(),
                (m = !0),
                setTimeout(function () {
                  m = !1;
                }),
                B.state.isMounted || dt());
            }
          }
        }
        function ht() {
          p = !0;
        }
        function lt() {
          p = !1;
        }
        function ut() {
          var t = tt();
          t.addEventListener("mousedown", ct, !0),
            t.addEventListener("touchend", ct, g),
            t.addEventListener("touchstart", lt, g),
            t.addEventListener("touchmove", ht, g);
        }
        function dt() {
          var t = tt();
          t.removeEventListener("mousedown", ct, !0),
            t.removeEventListener("touchend", ct, g),
            t.removeEventListener("touchstart", lt, g),
            t.removeEventListener("touchmove", ht, g);
        }
        function mt(t, e) {
          var s = et().box;
          function i(t) {
            t.target === s && (N(s, "remove", i), e());
          }
          if (0 === t) return e();
          N(s, "remove", a), N(s, "add", i), (a = i);
        }
        function pt(e, s, i) {
          void 0 === i && (i = !1),
            E(B.props.triggerTarget || t).forEach(function (t) {
              t.addEventListener(e, s, i),
                L.push({
                  node: t,
                  eventType: e,
                  handler: s,
                  options: i,
                });
            });
        }
        function gt() {
          var t;
          J() &&
            (pt("touchstart", bt, {
              passive: !0,
            }),
            pt("touchend", wt, {
              passive: !0,
            })),
            ((t = B.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(
              function (t) {
                if ("manual" !== t)
                  switch ((pt(t, bt), t)) {
                    case "mouseenter":
                      pt("mouseleave", wt);
                      break;
                    case "focus":
                      pt(U ? "focusout" : "blur", yt);
                      break;
                    case "focusin":
                      pt("focusout", yt);
                  }
              }
            );
        }
        function ft() {
          L.forEach(function (t) {
            var e = t.node,
              s = t.eventType,
              i = t.handler,
              n = t.options;
            e.removeEventListener(s, i, n);
          }),
            (L = []);
        }
        function bt(t) {
          var e,
            s = !1;
          if (B.state.isEnabled && !Et(t) && !m) {
            var i = "focus" === (null == (e = o) ? void 0 : e.type);
            (o = t),
              (c = t.currentTarget),
              at(),
              !B.state.isVisible &&
                v(t, "MouseEvent") &&
                z.forEach(function (e) {
                  return e(t);
                }),
              "click" === t.type &&
              (B.props.trigger.indexOf("mouseenter") < 0 || d) &&
              !1 !== B.props.hideOnClick &&
              B.state.isVisible
                ? (s = !0)
                : xt(t),
              "click" === t.type && (d = !s),
              s && !i && Ot(t);
          }
        }
        function vt(t) {
          var e = t.target,
            s = Q().contains(e) || V.contains(e);
          if ("mousemove" !== t.type || !s) {
            var i = Tt()
              .concat(V)
              .map(function (t) {
                var e,
                  s = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                return s
                  ? {
                      popperRect: t.getBoundingClientRect(),
                      popperState: s,
                      props: u,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (t, e) {
              var s = e.clientX,
                i = e.clientY;
              return t.every(function (t) {
                var e = t.popperRect,
                  n = t.popperState,
                  o = t.props.interactiveBorder,
                  a = n.placement.split("-")[0],
                  r = n.modifiersData.offset;
                if (!r) return !0;
                var c = "bottom" === a ? r.top.y : 0,
                  h = "top" === a ? r.bottom.y : 0,
                  l = "right" === a ? r.left.x : 0,
                  u = "left" === a ? r.right.x : 0,
                  d = e.top - i + c > o,
                  m = i - e.bottom - h > o,
                  p = e.left - s + l > o,
                  g = s - e.right - u > o;
                return d || m || p || g;
              });
            })(i, t) && (rt(), Ot(t));
          }
        }
        function wt(t) {
          Et(t) ||
            (B.props.trigger.indexOf("click") >= 0 && d) ||
            (B.props.interactive ? B.hideWithInteractivity(t) : Ot(t));
        }
        function yt(t) {
          (B.props.trigger.indexOf("focusin") < 0 && t.target !== Q()) ||
            (B.props.interactive &&
              t.relatedTarget &&
              V.contains(t.relatedTarget)) ||
            Ot(t);
        }
        function Et(t) {
          return !!C.isTouch && J() !== t.type.indexOf("touch") >= 0;
        }
        function St() {
          kt();
          var e = B.props,
            s = e.popperOptions,
            i = e.placement,
            n = e.offset,
            o = e.getReferenceClientRect,
            a = e.moveTransition,
            c = Z() ? q(V).arrow : null,
            l = o
              ? {
                  getBoundingClientRect: o,
                  contextElement: o.contextElement || Q(),
                }
              : t,
            u = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (t) {
                var e = t.state;
                if (Z()) {
                  var s = et().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (t) {
                      "placement" === t
                        ? s.setAttribute("data-placement", e.placement)
                        : e.attributes.popper["data-popper-" + t]
                        ? s.setAttribute("data-" + t, "")
                        : s.removeAttribute("data-" + t);
                    }
                  ),
                    (e.attributes.popper = {});
                }
              },
            },
            d = [
              {
                name: "offset",
                options: {
                  offset: n,
                },
              },
              {
                name: "preventOverflow",
                options: {
                  padding: {
                    top: 2,
                    bottom: 2,
                    left: 5,
                    right: 5,
                  },
                },
              },
              {
                name: "flip",
                options: {
                  padding: 5,
                },
              },
              {
                name: "computeStyles",
                options: {
                  adaptive: !a,
                },
              },
              u,
            ];
          Z() &&
            c &&
            d.push({
              name: "arrow",
              options: {
                element: c,
                padding: 3,
              },
            }),
            d.push.apply(d, (null == s ? void 0 : s.modifiers) || []),
            (B.popperInstance = (0, h.n4)(
              l,
              V,
              Object.assign({}, s, {
                placement: i,
                onFirstUpdate: r,
                modifiers: d,
              })
            ));
        }
        function kt() {
          B.popperInstance &&
            (B.popperInstance.destroy(), (B.popperInstance = null));
        }
        function Tt() {
          return k(V.querySelectorAll("[data-tippy-root]"));
        }
        function xt(t) {
          B.clearDelayTimeouts(), t && nt("onTrigger", [B, t]), ut();
          var e = st(!0),
            i = X(),
            n = i[0],
            o = i[1];
          C.isTouch && "hold" === n && o && (e = o),
            e
              ? (s = setTimeout(function () {
                  B.show();
                }, e))
              : B.show();
        }
        function Ot(t) {
          if (
            (B.clearDelayTimeouts(),
            nt("onUntrigger", [B, t]),
            B.state.isVisible)
          ) {
            if (
              !(
                B.props.trigger.indexOf("mouseenter") >= 0 &&
                B.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(t.type) >= 0 &&
                d
              )
            ) {
              var e = st(!1);
              e
                ? (i = setTimeout(function () {
                    B.state.isVisible && B.hide();
                  }, e))
                : (n = requestAnimationFrame(function () {
                    B.hide();
                  }));
            }
          } else dt();
        }
      }
      function X(t, e) {
        void 0 === e && (e = {});
        var s = D.plugins.concat(e.plugins || []);
        document.addEventListener("touchstart", I, g),
          window.addEventListener("blur", P);
        var i,
          n = Object.assign({}, e, {
            plugins: s,
          }),
          o = ((i = t),
          O(i)
            ? [i]
            : (function (t) {
                return v(t, "NodeList");
              })(i)
            ? k(i)
            : Array.isArray(i)
            ? i
            : k(document.querySelectorAll(i))).reduce(function (t, e) {
            var s = e && K(e, n);
            return s && t.push(s), t;
          }, []);
        return O(t) ? o[0] : o;
      }
      (X.defaultProps = D),
        (X.setDefaultProps = function (t) {
          Object.keys(t).forEach(function (e) {
            D[e] = t[e];
          });
        }),
        (X.currentInput = C),
        Object.assign({}, l.A, {
          effect: function (t) {
            var e = t.state,
              s = {
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
            Object.assign(e.elements.popper.style, s.popper),
              (e.styles = s),
              e.elements.arrow &&
                Object.assign(e.elements.arrow.style, s.arrow);
          },
        }),
        X.setDefaultProps({
          render: W,
        });
      var J,
        Z = X,
        Q = s(4631);
      function tt(t) {
        if (
          ((t !== t.toLowerCase() && t !== t.toUpperCase()) ||
            (t = t.toLowerCase()),
          -1 === t.indexOf("-") && -1 === t.indexOf("_"))
        )
          return t;
        {
          let e = "",
            s = !1;
          const i = t.match(/^-+/);
          for (let n = i ? i[0].length : 0; n < t.length; n++) {
            let i = t.charAt(n);
            s && ((s = !1), (i = i.toUpperCase())),
              0 === n || ("-" !== i && "_" !== i)
                ? "-" !== i && "_" !== i && (e += i)
                : (s = !0);
          }
          return e;
        }
      }
      function et(t, e) {
        const s = t.toLowerCase();
        e = e || "-";
        let i = "";
        for (let n = 0; n < t.length; n++) {
          const o = s.charAt(n),
            a = t.charAt(n);
          i += o !== a && n > 0 ? `${e}${s.charAt(n)}` : a;
        }
        return i;
      }
      function st(t) {
        return (
          null != t &&
          ("number" == typeof t ||
            !!/^0x[0-9a-f]+$/i.test(t) ||
            (!/^0[^.]/.test(t) &&
              /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t)))
        );
      }
      let it;
      function nt(t) {
        return void 0 !== t ? t + 1 : 1;
      }
      function ot(t) {
        return "__proto__" === t ? "___proto___" : t;
      }
      !(function (t) {
        (t.BOOLEAN = "boolean"),
          (t.STRING = "string"),
          (t.NUMBER = "number"),
          (t.ARRAY = "array");
      })(J || (J = {}));
      const at = new (class {
          constructor(t) {
            it = t;
          }
          parse(t, e) {
            const s = Object.assign(
                {
                  alias: void 0,
                  array: void 0,
                  boolean: void 0,
                  config: void 0,
                  configObjects: void 0,
                  configuration: void 0,
                  coerce: void 0,
                  count: void 0,
                  default: void 0,
                  envPrefix: void 0,
                  narg: void 0,
                  normalize: void 0,
                  string: void 0,
                  number: void 0,
                  __: void 0,
                  key: void 0,
                },
                e
              ),
              i = (function (t) {
                if (Array.isArray(t))
                  return t.map((t) => ("string" != typeof t ? t + "" : t));
                t = t.trim();
                let e = 0,
                  s = null,
                  i = null,
                  n = null;
                const o = [];
                for (let a = 0; a < t.length; a++)
                  (s = i),
                    (i = t.charAt(a)),
                    " " !== i || n
                      ? (i === n
                          ? (n = null)
                          : ("'" !== i && '"' !== i) || n || (n = i),
                        o[e] || (o[e] = ""),
                        (o[e] += i))
                      : " " !== s && e++;
                return o;
              })(t),
              n = "string" == typeof t,
              o = (function (t) {
                const e = [],
                  s = Object.create(null);
                let i = !0;
                for (
                  Object.keys(t).forEach(function (s) {
                    e.push([].concat(t[s], s));
                  });
                  i;

                ) {
                  i = !1;
                  for (let t = 0; t < e.length; t++)
                    for (let s = t + 1; s < e.length; s++) {
                      const n = e[t].filter(function (t) {
                        return -1 !== e[s].indexOf(t);
                      });
                      if (n.length) {
                        (e[t] = e[t].concat(e[s])), e.splice(s, 1), (i = !0);
                        break;
                      }
                    }
                }
                return (
                  e.forEach(function (t) {
                    t = t.filter(function (t, e, s) {
                      return s.indexOf(t) === e;
                    });
                    const e = t.pop();
                    void 0 !== e && "string" == typeof e && (s[e] = t);
                  }),
                  s
                );
              })(Object.assign(Object.create(null), s.alias)),
              a = Object.assign(
                {
                  "boolean-negation": !0,
                  "camel-case-expansion": !0,
                  "combine-arrays": !1,
                  "dot-notation": !0,
                  "duplicate-arguments-array": !0,
                  "flatten-duplicate-arrays": !0,
                  "greedy-arrays": !0,
                  "halt-at-non-option": !1,
                  "nargs-eats-options": !1,
                  "negation-prefix": "no-",
                  "parse-numbers": !0,
                  "parse-positional-numbers": !0,
                  "populate--": !1,
                  "set-placeholder-key": !1,
                  "short-option-groups": !0,
                  "strip-aliased": !1,
                  "strip-dashed": !1,
                  "unknown-options-as-args": !1,
                },
                s.configuration
              ),
              r = Object.assign(Object.create(null), s.default),
              c = s.configObjects || [],
              h = s.envPrefix,
              l = a["populate--"],
              u = l ? "--" : "_",
              d = Object.create(null),
              m = Object.create(null),
              p = s.__ || it.format,
              g = {
                aliases: Object.create(null),
                arrays: Object.create(null),
                bools: Object.create(null),
                strings: Object.create(null),
                numbers: Object.create(null),
                counts: Object.create(null),
                normalize: Object.create(null),
                configs: Object.create(null),
                nargs: Object.create(null),
                coercions: Object.create(null),
                keys: [],
              },
              f = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,
              b = new RegExp("^--" + a["negation-prefix"] + "(.+)");
            []
              .concat(s.array || [])
              .filter(Boolean)
              .forEach(function (t) {
                const e = "object" == typeof t ? t.key : t,
                  s = Object.keys(t)
                    .map(function (t) {
                      return {
                        boolean: "bools",
                        string: "strings",
                        number: "numbers",
                      }[t];
                    })
                    .filter(Boolean)
                    .pop();
                s && (g[s][e] = !0), (g.arrays[e] = !0), g.keys.push(e);
              }),
              []
                .concat(s.boolean || [])
                .filter(Boolean)
                .forEach(function (t) {
                  (g.bools[t] = !0), g.keys.push(t);
                }),
              []
                .concat(s.string || [])
                .filter(Boolean)
                .forEach(function (t) {
                  (g.strings[t] = !0), g.keys.push(t);
                }),
              []
                .concat(s.number || [])
                .filter(Boolean)
                .forEach(function (t) {
                  (g.numbers[t] = !0), g.keys.push(t);
                }),
              []
                .concat(s.count || [])
                .filter(Boolean)
                .forEach(function (t) {
                  (g.counts[t] = !0), g.keys.push(t);
                }),
              []
                .concat(s.normalize || [])
                .filter(Boolean)
                .forEach(function (t) {
                  (g.normalize[t] = !0), g.keys.push(t);
                }),
              "object" == typeof s.narg &&
                Object.entries(s.narg).forEach(([t, e]) => {
                  "number" == typeof e && ((g.nargs[t] = e), g.keys.push(t));
                }),
              "object" == typeof s.coerce &&
                Object.entries(s.coerce).forEach(([t, e]) => {
                  "function" == typeof e &&
                    ((g.coercions[t] = e), g.keys.push(t));
                }),
              void 0 !== s.config &&
                (Array.isArray(s.config) || "string" == typeof s.config
                  ? []
                      .concat(s.config)
                      .filter(Boolean)
                      .forEach(function (t) {
                        g.configs[t] = !0;
                      })
                  : "object" == typeof s.config &&
                    Object.entries(s.config).forEach(([t, e]) => {
                      ("boolean" != typeof e && "function" != typeof e) ||
                        (g.configs[t] = e);
                    })),
              (function (...t) {
                t.forEach(function (t) {
                  Object.keys(t || {}).forEach(function (t) {
                    g.aliases[t] ||
                      ((g.aliases[t] = [].concat(o[t] || [])),
                      g.aliases[t].concat(t).forEach(function (e) {
                        if (/-/.test(e) && a["camel-case-expansion"]) {
                          const s = tt(e);
                          s !== t &&
                            -1 === g.aliases[t].indexOf(s) &&
                            (g.aliases[t].push(s), (d[s] = !0));
                        }
                      }),
                      g.aliases[t].concat(t).forEach(function (e) {
                        if (
                          e.length > 1 &&
                          /[A-Z]/.test(e) &&
                          a["camel-case-expansion"]
                        ) {
                          const s = et(e, "-");
                          s !== t &&
                            -1 === g.aliases[t].indexOf(s) &&
                            (g.aliases[t].push(s), (d[s] = !0));
                        }
                      }),
                      g.aliases[t].forEach(function (e) {
                        g.aliases[e] = [t].concat(
                          g.aliases[t].filter(function (t) {
                            return e !== t;
                          })
                        );
                      }));
                  });
                });
              })(s.key, o, s.default, g.arrays),
              Object.keys(r).forEach(function (t) {
                (g.aliases[t] || []).forEach(function (e) {
                  r[e] = r[t];
                });
              });
            let v = null;
            Object.keys(g.counts).find((t) =>
              R(t, g.arrays)
                ? ((v = Error(
                    p(
                      "Invalid configuration: %s, opts.count excludes opts.array.",
                      t
                    )
                  )),
                  !0)
                : !!R(t, g.nargs) &&
                  ((v = Error(
                    p(
                      "Invalid configuration: %s, opts.count excludes opts.narg.",
                      t
                    )
                  )),
                  !0)
            );
            let w = [];
            const y = Object.assign(Object.create(null), {
                _: [],
              }),
              E = {};
            for (let t = 0; t < i.length; t++) {
              const e = i[t],
                s = e.replace(/^-{3,}/, "---");
              let n, o, r, c, h, l;
              if ("--" !== e && /^-/.test(e) && U(e)) S(e);
              else {
                if (s.match(/^---+(=|$)/)) {
                  S(e);
                  continue;
                }
                if (
                  e.match(/^--.+=/) ||
                  (!a["short-option-groups"] && e.match(/^-.+=/))
                )
                  (c = e.match(/^--?([^=]+)=([\s\S]*)$/)),
                    null !== c &&
                      Array.isArray(c) &&
                      c.length >= 3 &&
                      (R(c[1], g.arrays)
                        ? (t = T(t, c[1], i, c[2]))
                        : !1 !== R(c[1], g.nargs)
                        ? (t = k(t, c[1], i, c[2]))
                        : x(c[1], c[2], !0));
                else if (e.match(b) && a["boolean-negation"])
                  (c = e.match(b)),
                    null !== c &&
                      Array.isArray(c) &&
                      c.length >= 2 &&
                      ((o = c[1]), x(o, !!R(o, g.arrays) && [!1]));
                else if (
                  e.match(/^--.+/) ||
                  (!a["short-option-groups"] && e.match(/^-[^-]+/))
                )
                  (c = e.match(/^--?(.+)/)),
                    null !== c &&
                      Array.isArray(c) &&
                      c.length >= 2 &&
                      ((o = c[1]),
                      R(o, g.arrays)
                        ? (t = T(t, o, i))
                        : !1 !== R(o, g.nargs)
                        ? (t = k(t, o, i))
                        : ((h = i[t + 1]),
                          void 0 === h ||
                          (h.match(/^-/) && !h.match(f)) ||
                          R(o, g.bools) ||
                          R(o, g.counts)
                            ? /^(true|false)$/.test(h)
                              ? (x(o, h), t++)
                              : x(o, D(o))
                            : (x(o, h), t++)));
                else if (e.match(/^-.\..+=/))
                  (c = e.match(/^-([^=]+)=([\s\S]*)$/)),
                    null !== c &&
                      Array.isArray(c) &&
                      c.length >= 3 &&
                      x(c[1], c[2]);
                else if (e.match(/^-.\..+/) && !e.match(f))
                  (h = i[t + 1]),
                    (c = e.match(/^-(.\..+)/)),
                    null !== c &&
                      Array.isArray(c) &&
                      c.length >= 2 &&
                      ((o = c[1]),
                      void 0 === h ||
                      h.match(/^-/) ||
                      R(o, g.bools) ||
                      R(o, g.counts)
                        ? x(o, D(o))
                        : (x(o, h), t++));
                else if (e.match(/^-[^-]+/) && !e.match(f)) {
                  (r = e.slice(1, -1).split("")), (n = !1);
                  for (let s = 0; s < r.length; s++) {
                    if (((h = e.slice(s + 2)), r[s + 1] && "=" === r[s + 1])) {
                      (l = e.slice(s + 3)),
                        (o = r[s]),
                        R(o, g.arrays)
                          ? (t = T(t, o, i, l))
                          : !1 !== R(o, g.nargs)
                          ? (t = k(t, o, i, l))
                          : x(o, l),
                        (n = !0);
                      break;
                    }
                    if ("-" !== h) {
                      if (
                        /[A-Za-z]/.test(r[s]) &&
                        /^-?\d+(\.\d*)?(e-?\d+)?$/.test(h) &&
                        !1 === R(h, g.bools)
                      ) {
                        x(r[s], h), (n = !0);
                        break;
                      }
                      if (r[s + 1] && r[s + 1].match(/\W/)) {
                        x(r[s], h), (n = !0);
                        break;
                      }
                      x(r[s], D(r[s]));
                    } else x(r[s], h);
                  }
                  (o = e.slice(-1)[0]),
                    n ||
                      "-" === o ||
                      (R(o, g.arrays)
                        ? (t = T(t, o, i))
                        : !1 !== R(o, g.nargs)
                        ? (t = k(t, o, i))
                        : ((h = i[t + 1]),
                          void 0 === h ||
                          (/^(-|--)[^-]/.test(h) && !h.match(f)) ||
                          R(o, g.bools) ||
                          R(o, g.counts)
                            ? /^(true|false)$/.test(h)
                              ? (x(o, h), t++)
                              : x(o, D(o))
                            : (x(o, h), t++)));
                } else if (
                  e.match(/^-[0-9]$/) &&
                  e.match(f) &&
                  R(e.slice(1), g.bools)
                )
                  (o = e.slice(1)), x(o, D(o));
                else {
                  if ("--" === e) {
                    w = i.slice(t + 1);
                    break;
                  }
                  if (a["halt-at-non-option"]) {
                    w = i.slice(t);
                    break;
                  }
                  S(e);
                }
              }
            }
            function S(t) {
              const e = A("_", t);
              ("string" != typeof e && "number" != typeof e) || y._.push(e);
            }
            function k(t, e, s, i) {
              let n,
                o = R(e, g.nargs);
              if (((o = "number" != typeof o || isNaN(o) ? 1 : o), 0 === o))
                return (
                  B(i) || (v = Error(p("Argument unexpected for: %s", e))),
                  x(e, D(e)),
                  t
                );
              let r = B(i) ? 0 : 1;
              if (a["nargs-eats-options"])
                s.length - (t + 1) + r < o &&
                  (v = Error(p("Not enough arguments following: %s", e))),
                  (r = o);
              else {
                for (
                  n = t + 1;
                  n < s.length &&
                  (!s[n].match(/^-[^0-9]/) || s[n].match(f) || U(s[n]));
                  n++
                )
                  r++;
                r < o &&
                  (v = Error(p("Not enough arguments following: %s", e)));
              }
              let c = Math.min(r, o);
              for (
                !B(i) && c > 0 && (x(e, i), c--), n = t + 1;
                n < c + t + 1;
                n++
              )
                x(e, s[n]);
              return t + c;
            }
            function T(t, e, s, i) {
              let o = [],
                c = i || s[t + 1];
              const h = R(e, g.nargs);
              if (R(e, g.bools) && !/^(true|false)$/.test(c)) o.push(!0);
              else if (B(c) || (B(i) && /^-/.test(c) && !f.test(c) && !U(c))) {
                if (void 0 !== r[e]) {
                  const t = r[e];
                  o = Array.isArray(t) ? t : [t];
                }
              } else {
                B(i) || o.push($(e, i, !0));
                for (
                  let i = t + 1;
                  i < s.length &&
                  !(
                    (!a["greedy-arrays"] && o.length > 0) ||
                    (h && "number" == typeof h && o.length >= h)
                  ) &&
                  ((c = s[i]), !/^-/.test(c) || f.test(c) || U(c));
                  i++
                )
                  (t = i), o.push($(e, c, n));
              }
              return (
                "number" == typeof h &&
                  ((h && o.length < h) || (isNaN(h) && 0 === o.length)) &&
                  (v = Error(p("Not enough arguments following: %s", e))),
                x(e, o),
                t
              );
            }
            function x(t, e, s = n) {
              if (/-/.test(t) && a["camel-case-expansion"]) {
                const e = t
                  .split(".")
                  .map(function (t) {
                    return tt(t);
                  })
                  .join(".");
                O(t, e);
              }
              const i = $(t, e, s),
                o = t.split(".");
              I(y, o, i),
                g.aliases[t] &&
                  g.aliases[t].forEach(function (t) {
                    const e = t.split(".");
                    I(y, e, i);
                  }),
                o.length > 1 &&
                  a["dot-notation"] &&
                  (g.aliases[o[0]] || []).forEach(function (e) {
                    let s = e.split(".");
                    const n = [].concat(o);
                    n.shift(),
                      (s = s.concat(n)),
                      (g.aliases[t] || []).includes(s.join(".")) || I(y, s, i);
                  }),
                R(t, g.normalize) &&
                  !R(t, g.arrays) &&
                  [t].concat(g.aliases[t] || []).forEach(function (t) {
                    Object.defineProperty(E, t, {
                      enumerable: !0,
                      get() {
                        return e;
                      },
                      set(t) {
                        e = "string" == typeof t ? it.normalize(t) : t;
                      },
                    });
                  });
            }
            function O(t, e) {
              (g.aliases[t] && g.aliases[t].length) ||
                ((g.aliases[t] = [e]), (d[e] = !0)),
                (g.aliases[e] && g.aliases[e].length) || O(e, t);
            }
            function $(t, e, s) {
              s &&
                (e = (function (t) {
                  return "string" != typeof t ||
                    ("'" !== t[0] && '"' !== t[0]) ||
                    t[t.length - 1] !== t[0]
                    ? t
                    : t.substring(1, t.length - 1);
                })(e)),
                (R(t, g.bools) || R(t, g.counts)) &&
                  "string" == typeof e &&
                  (e = "true" === e);
              let i = Array.isArray(e)
                ? e.map(function (e) {
                    return A(t, e);
                  })
                : A(t, e);
              return (
                R(t, g.counts) && (B(i) || "boolean" == typeof i) && (i = nt()),
                R(t, g.normalize) &&
                  R(t, g.arrays) &&
                  (i = Array.isArray(e)
                    ? e.map((t) => it.normalize(t))
                    : it.normalize(e)),
                i
              );
            }
            function A(t, e) {
              return a["parse-positional-numbers"] || "_" !== t
                ? (R(t, g.strings) ||
                    R(t, g.bools) ||
                    Array.isArray(e) ||
                    (((st(e) &&
                      a["parse-numbers"] &&
                      Number.isSafeInteger(Math.floor(parseFloat(`${e}`)))) ||
                      (!B(e) && R(t, g.numbers))) &&
                      (e = Number(e))),
                  e)
                : e;
            }
            function N(t, e) {
              Object.keys(t).forEach(function (s) {
                const i = t[s],
                  n = e ? e + "." + s : s;
                "object" == typeof i &&
                null !== i &&
                !Array.isArray(i) &&
                a["dot-notation"]
                  ? N(i, n)
                  : (!L(y, n.split(".")) ||
                      (R(n, g.arrays) && a["combine-arrays"])) &&
                    x(n, i);
              });
            }
            function M(t, e) {
              if (void 0 === h) return;
              const s = "string" == typeof h ? h : "",
                i = it.env();
              Object.keys(i).forEach(function (n) {
                if ("" === s || 0 === n.lastIndexOf(s, 0)) {
                  const o = n.split("__").map(function (t, e) {
                    return 0 === e && (t = t.substring(s.length)), tt(t);
                  });
                  ((e && g.configs[o.join(".")]) || !e) &&
                    !L(t, o) &&
                    x(o.join("."), i[n]);
                }
              });
            }
            function C(t, e, s, i = !1) {
              Object.keys(s).forEach(function (n) {
                L(t, n.split(".")) ||
                  (I(t, n.split("."), s[n]),
                  i && (m[n] = !0),
                  (e[n] || []).forEach(function (e) {
                    L(t, e.split(".")) || I(t, e.split("."), s[n]);
                  }));
              });
            }
            function L(t, e) {
              let s = t;
              a["dot-notation"] || (e = [e.join(".")]),
                e.slice(0, -1).forEach(function (t) {
                  s = s[t] || {};
                });
              const i = e[e.length - 1];
              return "object" == typeof s && i in s;
            }
            function I(t, e, s) {
              let i = t;
              a["dot-notation"] || (e = [e.join(".")]),
                e.slice(0, -1).forEach(function (t) {
                  (t = ot(t)),
                    "object" == typeof i && void 0 === i[t] && (i[t] = {}),
                    "object" != typeof i[t] || Array.isArray(i[t])
                      ? (Array.isArray(i[t])
                          ? i[t].push({})
                          : (i[t] = [i[t], {}]),
                        (i = i[t][i[t].length - 1]))
                      : (i = i[t]);
                });
              const n = ot(e[e.length - 1]),
                o = R(e.join("."), g.arrays),
                r = Array.isArray(s);
              let c = a["duplicate-arguments-array"];
              !c &&
                R(n, g.nargs) &&
                ((c = !0),
                ((!B(i[n]) && 1 === g.nargs[n]) ||
                  (Array.isArray(i[n]) && i[n].length === g.nargs[n])) &&
                  (i[n] = void 0)),
                s === nt()
                  ? (i[n] = nt(i[n]))
                  : Array.isArray(i[n])
                  ? c && o && r
                    ? (i[n] = a["flatten-duplicate-arrays"]
                        ? i[n].concat(s)
                        : (Array.isArray(i[n][0]) ? i[n] : [i[n]]).concat([s]))
                    : c || Boolean(o) !== Boolean(r)
                    ? (i[n] = i[n].concat([s]))
                    : (i[n] = s)
                  : void 0 === i[n] && o
                  ? (i[n] = r ? s : [s])
                  : !c || void 0 === i[n] || R(n, g.counts) || R(n, g.bools)
                  ? (i[n] = s)
                  : (i[n] = [i[n], s]);
            }
            function R(t, e) {
              const s = [].concat(g.aliases[t] || [], t),
                i = Object.keys(e),
                n = s.find((t) => i.includes(t));
              return !!n && e[n];
            }
            function P(t) {
              const e = Object.keys(g),
                s = [].concat(e.map((t) => g[t]));
              return s.some(function (e) {
                return Array.isArray(e) ? e.includes(t) : e[t];
              });
            }
            function U(t) {
              return (
                a["unknown-options-as-args"] &&
                (function (t) {
                  return (
                    !(t = t.replace(/^-{3,}/, "--")).match(f) &&
                    !(function (t) {
                      if (t.match(f) || !t.match(/^-[^-]+/)) return !1;
                      let e,
                        s = !0;
                      const i = t.slice(1).split("");
                      for (let n = 0; n < i.length; n++) {
                        if (((e = t.slice(n + 2)), !P(i[n]))) {
                          s = !1;
                          break;
                        }
                        if (
                          (i[n + 1] && "=" === i[n + 1]) ||
                          "-" === e ||
                          (/[A-Za-z]/.test(i[n]) &&
                            /^-?\d+(\.\d*)?(e-?\d+)?$/.test(e)) ||
                          (i[n + 1] && i[n + 1].match(/\W/))
                        )
                          break;
                      }
                      return s;
                    })(t) &&
                    !(function (t, ...e) {
                      return [].concat(...e).some(function (e) {
                        const s = t.match(e);
                        return s && P(s[1]);
                      });
                    })(
                      t,
                      /^-+([^=]+?)=[\s\S]*$/,
                      b,
                      /^-+([^=]+?)$/,
                      /^-+([^=]+?)-$/,
                      /^-+([^=]+?\d+)$/,
                      /^-+([^=]+?)\W+.*$/
                    )
                  );
                })(t)
              );
            }
            function D(t) {
              return R(t, g.bools) || R(t, g.counts) || !(`${t}` in r)
                ? (function (t) {
                    return {
                      [J.BOOLEAN]: !0,
                      [J.STRING]: "",
                      [J.NUMBER]: void 0,
                      [J.ARRAY]: [],
                    }[t];
                  })(
                    (function (t) {
                      let e = J.BOOLEAN;
                      return (
                        R(t, g.strings)
                          ? (e = J.STRING)
                          : R(t, g.numbers)
                          ? (e = J.NUMBER)
                          : R(t, g.bools)
                          ? (e = J.BOOLEAN)
                          : R(t, g.arrays) && (e = J.ARRAY),
                        e
                      );
                    })(t)
                  )
                : r[t];
            }
            function B(t) {
              return void 0 === t;
            }
            return (
              M(y, !0),
              M(y, !1),
              (function (t) {
                const e = Object.create(null);
                C(e, g.aliases, r),
                  Object.keys(g.configs).forEach(function (s) {
                    const i = t[s] || e[s];
                    if (i)
                      try {
                        let t = null;
                        const e = it.resolve(it.cwd(), i),
                          n = g.configs[s];
                        if ("function" == typeof n) {
                          try {
                            t = n(e);
                          } catch (e) {
                            t = e;
                          }
                          if (t instanceof Error) return void (v = t);
                        } else t = it.require(e);
                        N(t);
                      } catch (e) {
                        "PermissionDenied" === e.name
                          ? (v = e)
                          : t[s] &&
                            (v = Error(p("Invalid JSON config file: %s", i)));
                      }
                  });
              })(y),
              void 0 !== c &&
                c.forEach(function (t) {
                  N(t);
                }),
              C(y, g.aliases, r, !0),
              (function (t) {
                let e;
                const s = new Set();
                Object.keys(t).forEach(function (i) {
                  if (
                    !s.has(i) &&
                    ((e = R(i, g.coercions)), "function" == typeof e)
                  )
                    try {
                      const n = A(i, e(t[i]));
                      [].concat(g.aliases[i] || [], i).forEach((e) => {
                        s.add(e), (t[e] = n);
                      });
                    } catch (t) {
                      v = t;
                    }
                });
              })(y),
              a["set-placeholder-key"] &&
                (function (t) {
                  g.keys.forEach((e) => {
                    ~e.indexOf(".") || (void 0 === t[e] && (t[e] = void 0));
                  });
                })(y),
              Object.keys(g.counts).forEach(function (t) {
                L(y, t.split(".")) || x(t, 0);
              }),
              l && w.length && (y[u] = []),
              w.forEach(function (t) {
                y[u].push(t);
              }),
              a["camel-case-expansion"] &&
                a["strip-dashed"] &&
                Object.keys(y)
                  .filter((t) => "--" !== t && t.includes("-"))
                  .forEach((t) => {
                    delete y[t];
                  }),
              a["strip-aliased"] &&
                [].concat(...Object.keys(o).map((t) => o[t])).forEach((t) => {
                  a["camel-case-expansion"] &&
                    t.includes("-") &&
                    delete y[
                      t
                        .split(".")
                        .map((t) => tt(t))
                        .join(".")
                    ],
                    delete y[t];
                }),
              {
                aliases: Object.assign({}, g.aliases),
                argv: Object.assign(E, y),
                configuration: a,
                defaulted: Object.assign({}, m),
                error: v,
                newAliases: Object.assign({}, d),
              }
            );
          }
        })({
          cwd: () => "",
          format: (t, e) => t.replace("%s", e),
          normalize: (t) => t,
          resolve: (t) => t,
          require: () => {
            throw Error(
              "loading config from files not currently supported in browser"
            );
          },
          env: () => {},
        }),
        rt = function (t, e) {
          return at.parse(t.slice(), e).argv;
        };
      (rt.detailed = function (t, e) {
        return at.parse(t.slice(), e);
      }),
        (rt.camelCase = tt),
        (rt.decamelize = et),
        (rt.looksLikeNumber = st);
      var ct = rt;
      const ht = {
          FULL: "MMMM Do YYYY, h:mm:ss a",
          TIME: "HH:mm",
        },
        lt = [
          "green",
          "yellow",
          "orange",
          "red",
          "purple",
          "blue",
          "sky",
          "lime",
          "pink",
          "black",
        ],
        ut = new Map(
          Object.entries({
            unknown:
              "Unknown error, this usually indicates an internal problem :(",
            nopermission:
              "You do not have the required permissions to use that",
            protocolerror: "Invalid or badly formatted",
            needlogin: "You have to be logged in to use that",
            msgempty: "Message cannot be empty",
            msgtoolong: "Message cannot be longer than 512 characters",
            invalidmsg: "The message was invalid",
            throttled: "Throttled! You were trying to send messages too fast",
            duplicate: "The message is identical to the last one you sent",
            submode: "The channel is currently in subscriber only mode",
            needbanreason: "Providing a reason for the ban is mandatory",
            privmsgbanned: "Cannot send private messages while banned",
            requiresocket: "This chat requires WebSockets",
            toomanyconnections: "Only 5 concurrent connections allowed",
            socketerror: "Error contacting server",
            privmsgaccounttooyoung:
              "Your account is too recent to send private messages",
            notfound: "The user was not found",
            notconnected: "You have to be connected to use that",
            activepoll: "Poll already started.",
            noactivepoll: "No poll started.",
            alreadyvoted: "You have already voted!",
            nochatting:
              "You aren't allowed to chat. Either you haven't picked a username, or a mod disabled your privileges.",
            duplicatephrase: "Banned phrase already exists.",
            nophrase: "Banned phrase doesn't exist.",
            invalidphrase:
              "Invalid phrase provided. Either the phrase was empty, or its regex was invalid.",
            cantbanprotected: "Protected users can't die.",
          })
        ),
        dt = new Map(
          Object.entries({
            slashhelp:
              "Type in /help for a list of more commands that do advanced things, like modify your scroll-back size.",
            tabcompletion:
              "Use the tab key to auto-complete names and emotes (for user only completion prepend a @ or hold shift).",
            hoveremotes:
              "Hovering your cursor over an emote will show you the emote code.",
            highlight:
              "Chat messages containing your username will be highlighted.",
            notify: "Use /msg <nick> to send a private message to someone.",
            ignoreuser:
              "Use /ignore <nick> to hide messages from pesky chatters. You can even ignore multiple users at once - /ignore <nick_1> ... <nick_n>!",
            mutespermanent:
              "Mutes are never persistent, don't worry it will pass!",
            tagshint: `Use the /tag <nick> [<color> <note>] to tag users you like. There are preset colors to choose from ${lt.join(
              ", "
            )}.`,
            bigscreen:
              "Bigscreen! Did you know you can have the chat on the left or right side of the stream by clicking the swap icon in the top left?",
            danisold:
              "Destiny is an Amazon Associate. He earns a commission on qualifying purchases of any product on Amazon linked in Destiny.gg chat.",
            cantremoveevent: "This event could not be removed.",
          })
        ),
        mt = new Map(
          Object.entries({
            schemaversion: 2,
            showtime: !1,
            showentireurl: !1,
            hideflairicons: !1,
            profilesettings: !1,
            timestampformat: "HH:mm",
            maxlines: 250,
            notificationwhisper: !1,
            notificationhighlight: !1,
            highlight: !0,
            customhighlight: [],
            highlightnicks: [],
            taggednicks: [],
            taggednotes: [],
            showremoved: 0,
            showhispersinchat: !1,
            ignorenicks: [],
            favoriteemotes: [],
            focusmentioned: !1,
            notificationtimeout: !0,
            ignorementions: !1,
            autocompletehelper: !0,
            taggedvisibility: !1,
            hidensfw: !1,
            hidensfl: !1,
            fontscale: "auto",
            censorbadwords: !1,
            disableanimations: !1,
          })
        );
      function pt(t) {
        return t.which || t.keyCode || -1;
      }
      function gt(t, e) {
        return pt(t) === e;
      }
      const ft = (function (t, e, s) {
        if (
          !(
            "Notification" in t &&
            "permission" in t.Notification &&
            "requestPermission" in t.Notification
          )
        ) {
          const i = "default",
            n = "granted",
            o = "denied",
            a = [n, i, o],
            r = function (t) {
              return t && t.constructor === String;
            },
            c = function (t) {
              return t && t.constructor === Function;
            },
            h = function (t) {
              return t && t.constructor === Object;
            },
            l = function () {},
            u = window.localStorage || {
              setItem: l,
              getItem: l,
            },
            d = function () {
              let e;
              return (
                (e =
                  "webkitNotifications" in t &&
                  "checkPermission" in t.webkitNotifications
                    ? a[t.webkitNotifications.checkPermission()]
                    : "mozNotification" in s
                    ? n
                    : null === u.getItem("notifications")
                    ? i
                    : u.getItem("notifications")),
                e
              );
            },
            m = function (s) {
              let a = c(s) ? s : l;
              "webkitNotifications" in t &&
              "requestPermission" in t.webkitNotifications
                ? t.webkitNotifications.requestPermission(a)
                : (d() === i &&
                    (confirm(
                      "Do you want to allow " +
                        e.domain +
                        " to display Notifications?"
                    )
                      ? (u.setItem("notifications", n), (p.permission = n))
                      : (u.setItem("notifications", o), (p.permission = o))),
                  a());
            },
            p = function (e, i) {
              let o;
              return (
                r(e) &&
                  h(i) &&
                  d() === n &&
                  ("mozNotification" in s
                    ? ((o = s.mozNotification.createNotification(
                        e,
                        i.body,
                        i.icon
                      )),
                      c(i.onclick) && (o.onclick = i.onclick),
                      c(i.onclose) && (o.onclose = i.onclose),
                      o.show())
                    : "webkitNotifications" in t &&
                      "createNotification" in t.webkitNotifications &&
                      ((o = t.webkitNotifications.createNotification(
                        i.icon,
                        e,
                        i.body
                      )),
                      c(i.onclick) && (o.onclick = i.onclick),
                      c(i.onshow) && (o.onshow = i.onshow),
                      c(i.onerror) && (o.onerror = i.onerror),
                      c(i.onclose) && (o.onclose = i.onclose),
                      o.show())),
                o
              );
            };
          "Notification" in t ||
            ((p.requestPermission = m), (t.Notification = p)),
            "webkitNotifications" in t &&
            "checkPermission" in t.webkitNotifications
              ? Object.defineProperty(t.Notification, "permission", {
                  get: function () {
                    return a[t.webkitNotifications.checkPermission()];
                  },
                })
              : (p.permission = d()),
            "requestPermission" in t.Notification ||
              (t.Notification.requestPermission = m);
        }
        return t.Notification;
      })(window, document, navigator);
      var bt = class {
        constructor() {
          this.listeners = new Map();
        }
        on(t, e) {
          return (
            this.listeners.has(t) || this.listeners.set(t, []),
            this.listeners.get(t).push(e),
            this
          );
        }
        emit(t, ...e) {
          const s = this.listeners.get(t);
          return !(!s || !s.length || (s.forEach((t) => t(...e)), 0));
        }
      };
      const vt = window.WebSocket || window.MozWebSocket;
      var wt = class extends bt {
          constructor() {
            super(),
              (this.socket = null),
              (this.url = null),
              (this.retryOnDisconnect = !0),
              (this.retryAttempts = 0),
              (this.retryTimer = null);
          }
          isConnected() {
            return this.socket && this.socket.readyState === this.socket.OPEN;
          }
          connect(t) {
            (this.url = t), (this.retryAttempts += 1);
            try {
              null !== this.retryTimer &&
                (clearTimeout(this.retryTimer), (this.retryTimer = null)),
                null !== this.socket &&
                  ((this.socket.onopen = null),
                  (this.socket.onclose = null),
                  (this.socket.onerror = null),
                  (this.socket.onmessage = null),
                  this.disconnect(),
                  (this.socket = null)),
                this.emit("CONNECTING", this.url),
                (this.socket = new vt(this.url)),
                (this.socket.onopen = (t) => this.onOpen(t)),
                (this.socket.onclose = (t) => this.onClose(t)),
                (this.socket.onmessage = (t) => this.onMsg(t)),
                (this.socket.onerror = (t) => this.emit("SOCKETERROR", t));
            } catch (t) {
              this.emit("SOCKETERROR", t);
            }
          }
          disconnect() {
            this.socket &&
              this.socket.readyState !== this.socket.CLOSED &&
              this.socket.close();
          }
          onOpen(t) {
            this.emit("OPEN", t),
              (this.retryAttempts = 0),
              (this.retryOnDisconnect = !0);
          }
          onClose(t) {
            if (1001 === t.code) return void this.connect(this.url);
            let e = 0;
            this.retryOnDisconnect &&
              ((e =
                0 === this.retryAttempts
                  ? Math.floor(2500 * Math.random()) + 501
                  : Math.floor(25001 * Math.random()) + 5e3),
              (this.retryTimer = setTimeout(() => this.connect(this.url), e))),
              this.emit("CLOSE", e);
          }
          onMsg(t) {
            this.parseAndDispatch(t);
          }
          parseAndDispatch(t) {
            const { eventname: e, data: s } = this.parse(t);
            this.emit("DISPATCH", {
              data: s,
              event: e,
            }),
              this.emit(e, s);
          }
          parse(t) {
            const e = t.data.split(" ", 1)[0].toUpperCase(),
              s = t.data.substring(e.length + 1);
            let i = null;
            try {
              i = JSON.parse(s);
            } catch (t) {
              i = s;
            }
            return {
              eventname: e,
              data: i,
            };
          }
          send(t, e) {
            const s = "string" == typeof e ? e : JSON.stringify(e);
            this.isConnected()
              ? this.socket.send(`${t} ${s}`)
              : this.emit("ERR", {
                  description: "notconnected",
                });
          }
        },
        yt = {
          MODERATOR: "moderator",
          PROTECTED: "protected",
          SUBSCRIBER: "subscriber",
          TWITCHSUB: "flair9",
          ADMIN: "admin",
          BROADCASTER: "flair12",
          VIP: "vip",
          BOT: "bot",
          BOT2: "flair11",
          SUB_TIER_1: "flair13",
          SUB_TIER_2: "flair1",
          SUB_TIER_3: "flair3",
          SUB_TIER_4: "flair8",
          SUB_TIER_5: "flair42",
          MICRO: "flair17",
        },
        Et = class {
          id = null;
          displayName = "";
          username = "";
          createdDate = "";
          features = [];
          roles = [];
          watching = null;
          constructor(t = "") {
            "string" == typeof t
              ? ((this.displayName = t),
                (this.username = this.displayName.toLowerCase()))
              : ((this.id = t.id || null),
                (this.displayName = t.nick || ""),
                (this.username = this.displayName.toLowerCase()),
                (this.createdDate = t.createdDate || ""),
                (this.features = t.features || []),
                (this.roles = t.roles || []),
                (this.watching = t.watching || null));
          }
          hasAnyFeatures(...t) {
            for (const e of t) if (this.features.includes(e)) return !0;
            return !1;
          }
          hasAnyRoles(...t) {
            for (const e of t) if (this.roles.includes(e)) return !0;
            return !1;
          }
          hasFeature(t) {
            return this.features.includes(t);
          }
          hasRole(t) {
            return this.roles.includes(t);
          }
          hasModPowers() {
            return this.hasAnyFeatures(yt.ADMIN, yt.MODERATOR);
          }
          isPrivileged() {
            return this.hasAnyFeatures(
              yt.MODERATOR,
              yt.PROTECTED,
              yt.ADMIN,
              yt.BROADCASTER,
              yt.VIP,
              yt.MICRO
            );
          }
          isSubscriber() {
            return this.hasFeature(yt.SUBSCRIBER);
          }
          isTwitchSub() {
            return this.hasFeature(yt.TWITCHSUB);
          }
          get subTier() {
            return this.hasFeature(yt.SUB_TIER_5)
              ? 5
              : this.hasFeature(yt.SUB_TIER_4)
              ? 4
              : this.hasFeature(yt.SUB_TIER_3)
              ? 3
              : this.hasFeature(yt.SUB_TIER_2)
              ? 2
              : this.hasFeature(yt.SUB_TIER_1)
              ? 1
              : 0;
          }
          equalWatching(t) {
            return (
              this.watching?.platform === t?.platform &&
              this.watching?.id === t?.id
            );
          }
          isSystem() {
            return -1 === this.id;
          }
        },
        St = {
          STATUS: "STATUS",
          ERROR: "ERROR",
          INFO: "INFO",
          COMMAND: "COMMAND",
          BROADCAST: "BROADCAST",
          UI: "UI",
          CHAT: "CHAT",
          USER: "USER",
          EMOTE: "EMOTE",
          PINNED: "PINNED",
          SUBSCRIPTION: "SUBSCRIPTION",
          GIFTSUB: "GIFTSUB",
          MASSGIFT: "MASSGIFT",
          DONATION: "DONATION",
          DEATH: "DEATH",
        };
      class kt {
        constructor(t, e = []) {
          (this.type = St.UI),
            (this.message = t),
            (this.classes = e),
            (this.ui = null);
        }
        into(t, e = null) {
          return t.addMessage(this, e), this;
        }
        wrap(t, e = [], s = {}) {
          e.push(this.classes),
            e.unshift(`msg-${this.type.toLowerCase()}`),
            e.unshift("msg-chat");
          const i = document.createElement("div");
          return (
            (i.className = e.join(" ")),
            Object.entries(s).forEach(([t, e]) => i.setAttribute(t, e)),
            (i.innerHTML = t),
            i
          );
        }
        html(t = null) {
          return this.wrap(this.message);
        }
        afterRender(t = null) {}
        hide(t = !0) {
          this.ui.style.display = t ? "none" : null;
        }
        highlight(t = !0) {
          (this.highlighted = t), this.ui.classList.toggle("msg-highlight", t);
        }
        remove() {
          this.ui.remove();
        }
      }
      var Tt = s(3503),
        xt = s.n(Tt);
      const Ot = document.createElement("div");
      class $t {
        format(t, e, s = null) {
          const i =
            s && s.user
              ? t.emoteService.emoteRegexForUser(s.user)
              : t.emoteService.systemEmoteRegex;
          return null != i
            ? e.replace(i, '$1<div title="$2" class="emote $2">$2 </div>')
            : e;
        }
      }
      var At = s(3352);
      const Nt = "Missing argument",
        Mt = "Invalid link";
      class Ct {
        constructor() {
          (this.hasHttp = /^http[s]?:\/{0,2}/),
            (this.youtubeRegex =
              /^(?:shorts|live|embed)\/([A-Za-z0-9-_]{11})$/),
            (this.twitchClipRegex = /^[^/]+\/clip\/([A-Za-z0-9-_]*)$/),
            (this.twitchVODRegex = /^videos\/(\d+)$/),
            (this.rumbleEmbedRegex = /^embed\/([a-z0-9]+)\/?$/);
        }
        convert(t) {
          if (!t) throw new Error(Nt);
          const e = new URL(t.match(this.hasHttp) ? t : `https://${t}`),
            s = e.pathname.slice(1);
          let i, n, o;
          switch (e.hostname) {
            case "www.twitch.tv":
            case "twitch.tv":
              return (
                (i = s.match(this.twitchClipRegex)),
                i
                  ? `#twitch-clip/${i[1]}`
                  : ((i = s.match(this.twitchVODRegex)),
                    i ? `#twitch-vod/${i[1]}` : `#twitch/${s}`)
              );
            case "clips.twitch.tv":
              return `#twitch-clip/${s}`;
            case "www.youtube.com":
            case "youtube.com":
              if (
                ((i = s.match(this.youtubeRegex)),
                (o = e.searchParams.get("t")),
                (n = e.searchParams.get("v") ?? i?.[1]),
                !n)
              )
                throw new Error("Invalid Youtube link - Missing video id");
              return o ? `#youtube/${n}?t=${o}` : `#youtube/${n}`;
            case "www.youtu.be":
            case "youtu.be":
              return (
                (o = e.searchParams.get("t")),
                o ? `#youtube/${s}?t=${o}` : `#youtube/${s}`
              );
            case "www.rumble.com":
            case "rumble.com":
              if (((i = s.match(this.rumbleEmbedRegex)), i))
                return `#rumble/${i[1]}`;
              throw new Error(
                "Rumble links have to be embed links - https://rumble.com/embed/<id>"
              );
            case "www.kick.com":
            case "kick.com":
              if (e.searchParams.has("clip") || s.startsWith("video/"))
                throw new Error(Mt);
              return `#kick/${s}`;
            default:
              throw new Error(Mt);
          }
        }
      }
      const Lt = /^\/([a-z0-9]+)[\s]?/i,
        It =
          /(?<number>\d+)(?<unit>s(econds?)?$|m(inutes?)?$|h(ours?)?$|d(ays?)?$)?/i,
        Rt = /(?=[@>]?)(\w{3,20})/g,
        Pt = /^\w{3,20}$/,
        Ut = /\bNSFW\b/i,
        Dt = /\bNSFL\b/i,
        Bt = /\bSPOILERS\b/i,
        Ht =
          /(?:youtube\.com\/(?:watch\?v=|shorts\/|live\/)|youtu\.be\/|#youtube\/)([A-Za-z0-9_-]{11})/;
      function jt(t) {
        return t.trim().replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
      }
      const Ft = new Map();
      Ft.set(
        "html",
        new (class {
          format(t, e) {
            return (Ot.textContent = e), Ot.innerHTML;
          }
        })()
      ),
        Ft.set(
          "amazon",
          new (class {
            constructor() {
              this.amazonLinkRegex =
                /\bhttps:\/\/www\.amazon\.(com|ca|co\.uk|de)[-a-zA-Z0-9()@:%_+.~#?&//=]*\b/gi;
            }
            format(t, e) {
              return t.config.amazonTags
                ? e.replace(this.amazonLinkRegex, (e) => {
                    try {
                      const s = new URL(e),
                        i = t.config.amazonTags[s.host];
                      return i
                        ? (s.searchParams.set("tag", i), s.toString())
                        : e;
                    } catch (t) {
                      return e;
                    }
                  })
                : e;
            }
          })()
        ),
        Ft.set(
          "url",
          new (class {
            constructor() {
              this.hashLinkConverter = new Ct();
            }
            format(t, e) {
              if (e)
                return (0, At.A)(e, {
                  className: () => {
                    switch (!0) {
                      case Dt.test(e):
                        return "externallink nsfl-link";
                      case Ut.test(e):
                        return "externallink nsfw-link";
                      case Bt.test(e):
                        return "externallink spoilers-link";
                      default:
                        return "externallink";
                    }
                  },
                  rel: "nofollow",
                  target: "_blank",
                  format: (e) => {
                    const s = this.normalizeUrl(e);
                    return !t.settings.get("showentireurl") && s.length > 90
                      ? `${s.slice(0, 40)}...${s.slice(-40)}`
                      : s;
                  },
                  formatHref: (t) => this.normalizeUrl(t),
                  render: ({ tagName: e, attributes: s, content: i }) => {
                    let n = "";
                    try {
                      n = this.hashLinkConverter.convert(s.href);
                    } catch (t) {}
                    const o = Object.keys(s).reduce(
                        (t, e) => `${t} ${e}="${s[e]}"`,
                        ""
                      ),
                      a = t.isBigscreenEmbed() ? "_top" : "_blank",
                      r = `${t.config.dggOrigin}${t.bigscreenPath}${n}`;
                    return n
                      ? `<${e}${o}>${i}</${e}><a target="${a}" class="embed-button" href="${r}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv-minimal"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg></a>`
                      : `<${e}${o}>${i}</${e}>`;
                  },
                });
            }
            normalizeUrl(t) {
              if (/(x|twitter)\.com\/\w{1,15}\/status\/\d{2,19}\?/i.test(t))
                return t.split("?")[0];
              if (
                /^(?:(?:https|http):\/\/)?(?:www\.)?youtu(?:be\.com|\.be)/i.test(
                  t
                )
              )
                try {
                  const e = new URL(t);
                  return e.searchParams.delete("si"), e.href;
                } catch {
                  return t;
                }
              if (/^(?:(?:https?):\/\/)?(?:www\.)?instagram\.com/i.test(t))
                try {
                  const e = new URL(t);
                  return e.searchParams.delete("igsh"), e.href;
                } catch {
                  return t;
                }
              return t;
            }
          })()
        ),
        Ft.set("emote", new $t()),
        Ft.set(
          "mentioned",
          new (class {
            format(t, e, s = null) {
              return s && s.mentioned && s.mentioned.length > 0
                ? e.replace(
                    new RegExp(
                      `((?:^|\\s)@?|&gt;)(${s.mentioned.join(
                        "|"
                      )})(?=$|\\s|[.?!,'])`,
                      "igm"
                    ),
                    '$1<span class="chat-user">$2</span>'
                  )
                : e;
            }
          })()
        ),
        Ft.set(
          "green",
          new (class {
            format(t, e, s = null) {
              return s.user &&
                (s.user.isSubscriber() || s.user.isPrivileged()) &&
                0 === e.indexOf("&gt;")
                ? `<span class="greentext">${e}</span>`
                : e;
            }
          })()
        ),
        Ft.set(
          "sus",
          new (class {
            format(t, e, s = null) {
              const i = s?.user;
              return (i?.isPrivileged() || i?.isSubscriber()) &&
                0 === e.indexOf("ඞ")
                ? `<span class="sus">${e}</span>`
                : e;
            }
          })()
        ),
        Ft.set(
          "embed",
          new (class {
            constructor() {
              this.bigscreenregex =
                /(^|\s)(#(kick|twitch|twitch-vod|twitch-clip|youtube|youtube-live|facebook|rumble|vimeo)\/([\w\d]{3,64}\/videos\/\d{10,20}|[\w-]{3,64}|\w{7}\/\?pub=\w{5})(?:\?t=(\d+)s?)?)\b/g;
            }
            format(t, e) {
              const s = t.isBigscreenEmbed() ? "_top" : "_blank";
              let i = "";
              Dt.test(e)
                ? (i = "nsfl-link")
                : Ut.test(e)
                ? (i = "nsfw-link")
                : Bt.test(e) && (i = "spoilers-link");
              const n = t.config.dggOrigin + t.bigscreenPath;
              return e.replace(
                this.bigscreenregex,
                `$1<a class="externallink bookmarklink ${i}" href="${n}$2" target="${s}">$2</a>`
              );
            }
          })()
        ),
        Ft.set(
          "badwordscensor",
          new (class {
            constructor() {
              this.badWordsRegex =
                /(fuck|shit|cunt|whore|bitch|faggot|fag|nigger|nigga|gusano|cracker|rape)/gi;
            }
            format(t, e) {
              return t.settings.get("censorbadwords")
                ? e.replace(this.badWordsRegex, (t) => "*".repeat(t.length))
                : e;
            }
          })()
        );
      class Vt extends kt {
        constructor(t, e = null, s = St.CHAT, i = !1) {
          super(t),
            (this.user = null),
            (this.type = s),
            (this.continued = !1),
            (this.timestamp = e ? c().utc(e).local() : c()()),
            (this.unformatted = i),
            (this.ignored = !1),
            (this.censorType = null),
            (this.watching = null),
            this.generateMessageHash();
        }
        html(t = null) {
          const e = [];
          return (
            this.continued && e.push("msg-continue"),
            this.wrap(`${this.buildTime()} ${this.buildMessageTxt(t)}`, e, {})
          );
        }
        buildMessageTxt(t) {
          let e =
            "/me " === this.message.substring(0, 4).toLowerCase()
              ? this.message.substring(4)
              : this.message;
          return (
            this.unformatted ||
              Ft.forEach((s) => {
                e = s.format(t, e, this);
              }),
            `<span class="text">${e}</span>`
          );
        }
        buildTime() {
          return `<time class="time" title="${this.timestamp.format(
            ht.FULL
          )}" data-unixtimestamp="${this.timestamp.valueOf()}">${this.timestamp.format(
            ht.TIME
          )}</time>`;
        }
        updateTimeFormat() {
          const t = this.timestamp.format(ht.TIME);
          this.ui.querySelector("time").textContent = t;
        }
        censor(t) {
          switch (t) {
            case 0:
              this.ui.classList.remove("censored"), this.hide();
              break;
            case 1:
              this.ui.classList.add("censored"), this.hide(this.ignored || !1);
              break;
            case 2:
              this.ui.classList.remove("censored"),
                this.hide(this.ignored || !1);
          }
          this.censorType = t;
        }
        ignore(t = !0) {
          this.hide(0 === this.censorType || t), (this.ignored = t);
        }
        get moderated() {
          return null !== this.censorType;
        }
        setTag(t) {
          const e = this.tag;
          e && this.ui.classList.remove("msg-tagged", `msg-tagged-${e}`),
            t && this.ui.classList.add("msg-tagged", `msg-tagged-${t}`),
            (this.tag = t);
        }
        setTagTitle(t) {
          (this.ui.querySelector(".user").title = t), (this.title = t);
        }
        highlight(t = !0) {
          (this.highlighted = t), this.ui.classList.toggle("msg-highlight", t);
        }
        setOwnMessage(t) {
          this.ui.classList.toggle("msg-own", t), (this.isown = t);
        }
        setWatching(t) {
          this.ui.classList.toggle(
            "watching-same",
            t.equalWatching(this.watching)
          );
        }
        setContinued(t) {
          this.ui.classList.toggle("msg-continue", t);
          const e = this.ui.querySelector(".ctrl");
          e && (e.textContent = t ? "" : ": "), (this.continued = t);
        }
        setTimestamp(t) {
          (this.timestamp = c().utc(t).local()),
            this.generateMessageHash(),
            (this.ui.querySelector("time").outerHTML = this.buildTime());
        }
        generateMessageHash() {
          this.md5 = xt()(
            `${this.timestamp.valueOf()}${this.user?.id ?? ""}${this.message}`
          );
        }
      }
      function _t(t, e) {
        return t
          .filter((t) => e.features.some((e) => e === t.name))
          .sort((t, e) => (t.priority - e.priority >= 0 ? 1 : -1))
          .find((t) => t.rainbowColor || t.color);
      }
      class qt extends Vt {
        constructor(t, e, s = null) {
          super(t, s, St.USER),
            (this.user = e),
            (this.id = null),
            (this.isown = !1),
            (this.highlighted = !1),
            (this.historical = !1),
            (this.target = null),
            (this.tag = null),
            (this.title = ""),
            (this.slashme = !1),
            (this.mentioned = []),
            this.generateMessageHash();
        }
        html(t = null) {
          const e = [],
            s = {};
          this.id && (s["data-id"] = this.id),
            this.user &&
              this.user.username &&
              (e.push(...this.user.features),
              (s["data-username"] = this.user.username),
              this.user.watching &&
                ((this.watching = this.user.watching),
                t.user.equalWatching(this.user.watching) &&
                  e.push("watching-same"))),
            this.mentioned &&
              this.mentioned.length > 0 &&
              (s["data-mentioned"] = this.mentioned.join(" ").toLowerCase()),
            this.isown && e.push("msg-own"),
            this.slashme && e.push("msg-me"),
            this.historical && e.push("msg-historical"),
            this.highlighted && e.push("msg-highlight"),
            this.continued && !this.target && e.push("msg-continue"),
            this.tag && e.push(`msg-tagged msg-tagged-${this.tag}`),
            this.target && e.push("msg-whisper");
          let i = ": ";
          this.target
            ? (i = " whispered: ")
            : (this.slashme || this.continued) && (i = "");
          const n = _t(t.flairs, this.user),
            o = `${this.buildFeatures(this.user, t)} <a title="${
              ((a = this.title),
              a
                .replace(/&/g, "&amp;")
                .replace(
                  /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                  (t) =>
                    `&#${
                      1024 * (t.charCodeAt(0) - 55296) +
                      (t.charCodeAt(1) - 56320) +
                      65536
                    };`
                )
                .replace(/([^#-~| |!])/g, (t) => `&#${t.charCodeAt(0)};`)
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;"))
            }" class="${["user", n?.name].filter(Boolean).join(" ")}">${
              this.user.displayName
            }</a>`;
          var a;
          return this.wrap(
            `${this.buildTime()} ${o}<span class="ctrl">${i}</span> ${this.buildMessageTxt(
              t
            )}`,
            e,
            s
          );
        }
        buildFeatures(t, e) {
          const s = (t.features || [])
            .filter((t) => e.flairsMap.has(t))
            .map((t) => e.flairsMap.get(t))
            .reduce(
              (t, e) =>
                `${t}<i data-flair="${e.name}" class="flair ${e.name}" title="${e.label}"></i> `,
              ""
            );
          return "" !== s ? `<span class="features">${s}</span>` : "";
        }
        setTag(t) {
          const e = this.tag;
          e && this.ui.classList.remove("msg-tagged", `msg-tagged-${e}`),
            t && this.ui.classList.add("msg-tagged", `msg-tagged-${t}`),
            (this.tag = t);
        }
        setTagTitle(t) {
          (this.ui.querySelector(".user").title = t), (this.title = t);
        }
        highlight(t = !0) {
          (this.highlighted = t), this.ui.classList.toggle("msg-highlight", t);
        }
        setOwnMessage(t) {
          this.ui.classList.toggle("msg-own", t), (this.isown = t);
        }
        setSlashMe(t) {
          this.ui.classList.toggle("msg-me", t);
          const e = this.ui.querySelector(".ctrl");
          e &&
            !this.target &&
            (e.textContent = this.slashme || this.continued ? "" : ": "),
            (this.slashme = t);
        }
      }
      function Wt(t) {
        if (!t || !t.combo) return;
        let e = "x2";
        t.emotecount >= 50
          ? (e = "x50")
          : t.emotecount >= 30
          ? (e = "x30")
          : t.emotecount >= 20
          ? (e = "x20")
          : t.emotecount >= 10
          ? (e = "x10")
          : t.emotecount >= 5 && (e = "x5"),
          t.ui.setAttribute("data-combo", t.emotecount),
          t.ui.setAttribute("data-combo-group", e),
          t.combo.attr("class", `chat-combo ${e}`),
          t.combo_count.text(`${t.emotecount}`),
          t.ui.append(t.text.detach().get(0), t.combo.detach().get(0));
      }
      const Gt = (0, a.n)(63, Wt);
      class zt extends Vt {
        messages = [];
        emotecount = 0;
        constructor(t, e, s) {
          super(t, e, St.EMOTE),
            (this.messages = s),
            (this.emotecount = s.length),
            (this.emoteFormatter = new $t());
        }
        html(t = null) {
          return (
            (this.text = o()(
              `<span class="text">${this.emoteFormatter.format(
                t,
                this.message,
                this
              )}</span>`
            )),
            (this.combo = o()('<span class="chat-combo"></span>')),
            (this.combo_count = o()(`<i class="count">${this.emotecount}</i>`)),
            (this.combo_x = o()('<i class="x">X</i>')),
            (this.combo_hits = o()('<i class="hit">Hits</i>')),
            (this.combo_txt = o()('<i class="combo">C-C-C-COMBO</i>')),
            this.wrap(this.buildTime())
          );
        }
        afterRender() {
          this.combo.append(
            this.combo_count,
            " ",
            this.combo_x,
            " ",
            this.combo_hits,
            " ",
            this.combo_txt
          ),
            this.ui.append(this.text.get(0), this.combo.get(0));
        }
        add(t) {
          this.messages.push(t), (this.emotecount += 1), Gt(this);
        }
        containsMessage(t) {
          return this.messages.find((e) => e.md5 === t.md5);
        }
        completeCombo() {
          Wt(this),
            this.combo.attr(
              "class",
              `${this.combo.attr("class")} combo-complete`
            ),
            (this.combo = null),
            (this.combo_count = null),
            (this.combo_x = null),
            (this.combo_hits = null),
            (this.combo_txt = null);
        }
      }
      const Yt = window.localStorage || {
          setItem: () => {},
          getItem: () => {},
        },
        { JSON: Kt } = window;
      var Xt = class {
        static write(t, e) {
          let s = "";
          try {
            s = Kt.stringify(e instanceof Map || e instanceof Set ? [...e] : e);
          } catch {}
          Yt.setItem(t, s);
        }
        static read(t) {
          let e = null;
          try {
            e = Kt.parse(Yt.getItem(t));
          } catch {}
          return e;
        }
        static remove(t) {
          try {
            Yt.removeItem(t);
          } catch {}
        }
      };
      function Jt(t) {
        const e = Xt.read("chat.pinnedmessage") ?? {};
        (e[t] = !0), Xt.write("chat.pinnedmessage", e);
      }
      class Zt extends qt {
        constructor(t, e, s, i) {
          super(t, e, s), (this.uuid = i), (this.type = St.PINNED);
        }
        set displayed(t) {
          this.ui.classList.toggle("hidden", !t),
            document
              .getElementById("chat-pinned-show-btn")
              ?.classList.toggle("active", !t);
        }
        set hidden(t) {
          document
            .getElementById("chat-pinned-message")
            .classList.toggle("active", !t);
        }
        unpin() {
          return (
            Jt(this.uuid),
            (this.hidden = !0),
            document.getElementById("chat-pinned-message").replaceChildren(),
            null
          );
        }
        pin(t = null, e = !0) {
          if (
            ((this.ui.id = "msg-pinned"),
            this.ui.classList.toggle("msg-pinned", !0),
            (this.displayed = e),
            this.ui
              .querySelector("span.features")
              .classList.toggle("hidden", !0),
            t.mainwindow.update(),
            t.user.hasModPowers())
          ) {
            const e = document.createElement("a"),
              s = document.createElement("i");
            s.classList.add("btn-icon"),
              e.append(s),
              (e.id = "unpin-btn"),
              e.classList.add("chat-tool-btn"),
              (e.title = "Unpin Message"),
              e.addEventListener("click", () => {
                t.cmdUNPIN();
              }),
              this.ui.prepend(e);
          }
          const s = document.createElement("div"),
            i = document.createElement("i");
          i.classList.add("btn-icon"),
            s.append(i),
            (s.id = "chat-pinned-show-btn"),
            s.classList.toggle("active", !e),
            (s.title = "Show Pinned Message"),
            s.addEventListener("click", () => {
              this.displayed = !0;
            });
          const n = document.createElement("a"),
            o = document.createElement("i");
          o.classList.add("btn-icon"),
            n.append(o),
            (n.id = "close-pin-btn"),
            n.classList.add("chat-tool-btn"),
            (n.title = "Close Pinned Message"),
            n.addEventListener("click", () => {
              Jt(this.uuid), (this.displayed = !1);
            }),
            this.ui.prepend(n);
          const a = document.getElementById("chat-pinned-message");
          return (
            a.classList.toggle("active", !0),
            a.prepend(this.ui),
            a.prepend(s),
            this
          );
        }
      }
      class Qt extends Vt {
        constructor(t, e, s) {
          super(t, e),
            (this.tag = null),
            (this.title = ""),
            (this.slashme = !1),
            (this.isown = !1),
            (this.mentioned = []),
            (this.uuid = s),
            this.generateMessageHash();
        }
        html(t = null) {
          const e = document
            .querySelector("#event-template")
            ?.content.cloneNode(!0).firstElementChild;
          return (
            this.user &&
              this.user.username &&
              !this.user.isSystem() &&
              (e.dataset.username = this.user.username),
            this.mentioned &&
              this.mentioned.length > 0 &&
              (e.dataset.mentioned = this.mentioned.join(" ").toLowerCase()),
            this.slashme && e.classList.add("msg-me"),
            this.message
              ? (e.querySelector(".event-bottom").innerHTML =
                  this.buildMessageTxt(t))
              : e.querySelector(".event-bottom").remove(),
            (this.hasActions && t.user?.hasModPowers()) ||
              (e.querySelector(".event-button").disabled = !0),
            (e.dataset.uuid = this.uuid),
            e
          );
        }
        updateTimeFormat() {}
        get hasActions() {
          return !0;
        }
      }
      const te = [0, 5, 10, 25, 50, 100];
      function ee(t) {
        const e = te.findIndex((e) => t < 100 * e);
        return [`amount-${-1 !== e ? te[e - 1] : "100"}`];
      }
      class se extends Qt {
        constructor(t, e, s, i, n, o) {
          super(t, i, o),
            (this.user = e),
            (this.type = St.DONATION),
            (this.amount = s),
            (this.expirationTimestamp = n),
            this.generateMessageHash();
        }
        html(t = null) {
          const e = super.html(t),
            s = document
              .querySelector("#user-template")
              ?.content.cloneNode(!0).firstElementChild,
            i = _t(t.flairs, this.user);
          (s.title = this.title),
            i && s.classList.add(i.name),
            (s.innerText = this.user.displayName),
            e.querySelector(".event-info").append(
              s,
              ` donated ${(this.amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}`
            );
          const n = ee(this.amount);
          e.classList.add(n[0]),
            e.querySelector(".event-icon").classList.add("donation-icon", n[0]);
          const o = Array.from(e.classList),
            a = e.getAttributeNames().reduce(
              (t, s) =>
                "class" === s
                  ? t
                  : {
                      ...t,
                      [s]: e.getAttribute(s),
                    },
              {}
            );
          return this.wrap(e.innerHTML, o, a);
        }
      }
      function ie(t, e) {
        const s = yt[`SUB_TIER_${t}`],
          i = e.find((t) => t.name === s),
          n = i?.color,
          o = i?.rainbowColor ? `user ${s}` : "";
        return {
          rainbowColor: i?.rainbowColor,
          tierClass: o,
          tierColor: i?.rainbowColor ? "" : n,
        };
      }
      class ne extends Qt {
        constructor(t, e, s, i, n, o, a, r) {
          super(t, o, r),
            (this.user = e),
            (this.tier = s),
            (this.tierLabel = i),
            (this.amount = n),
            (this.expirationTimestamp = a);
        }
        html(t = null) {
          const e = super.html(t),
            {
              rainbowColor: s,
              tierClass: i,
              tierColor: n,
            } = ie(this.tier, t.flairs);
          n && (e.style.borderColor = n),
            s && e.classList.add("rainbow-border");
          const o = _t(t.flairs, this.user),
            a = document
              .querySelector("#user-template")
              ?.content.cloneNode(!0).firstElementChild;
          (a.title = this.title),
            o && a.classList.add(o.name),
            (a.innerText = this.user.displayName);
          const r = this.tierLabel ?? `Tier ${this.tier}`,
            c = document
              .querySelector("#tier-template")
              ?.content.cloneNode(!0).firstElementChild;
          return (
            i && c.classList.add(...i.split(" ")),
            (c.style.color = n),
            (c.innerText = r),
            e.querySelector(".event-icon").classList.add("subscription-icon"),
            e.querySelector(".event-info").append(a, c),
            e
          );
        }
      }
      class oe extends ne {
        constructor(t, e, s, i, n, o, a, r, c) {
          super(t, e, s, i, n, a, r, c),
            (this.type = St.SUBSCRIPTION),
            (this.streak = o);
        }
        html(t = null) {
          const e = super.html(t),
            s = Array.from(e.classList),
            i = e.getAttributeNames().reduce(
              (t, s) =>
                "class" === s
                  ? t
                  : {
                      ...t,
                      [s]: e.getAttribute(s),
                    },
              {}
            );
          e.querySelector(".subscription-icon").classList.add("regular");
          const n = e.querySelector(".event-info"),
            o = e.querySelector(".user"),
            a = e.querySelector(".tier");
          if (
            ((n.innerHTML = `${o.outerHTML} is now a ${a.outerHTML} subscriber`),
            this.streak)
          ) {
            n.classList.add("streak"),
              (n.innerHTML = `<span>${n.innerHTML}</span>`);
            const t = document
              .querySelector("#streak-template")
              ?.content.cloneNode(!0).firstElementChild;
            (t.innerText = `They're currently on a ${this.streak} month streak`),
              n.append(t);
          }
          return this.wrap(e.innerHTML, s, i);
        }
      }
      class ae extends ne {
        constructor(t, e, s, i, n, o, a, r, c, h) {
          super(t, e, s, i, n, r, c, h),
            (this.type = St.GIFTSUB),
            (this.giftee = o),
            (this.fromMassGift = a);
        }
        html(t = null) {
          const e = super.html(t),
            s = Array.from(e.classList),
            i = e.getAttributeNames().reduce(
              (t, s) =>
                "class" === s
                  ? t
                  : {
                      ...t,
                      [s]: e.getAttribute(s),
                    },
              {}
            );
          (i["data-giftee"] = this.giftee.username),
            e.querySelector(".subscription-icon").classList.add("gift");
          const n = document
              .querySelector("#user-template")
              ?.content.cloneNode(!0).firstElementChild,
            o = _t(t.flairs, this.giftee);
          o && n.classList.add(o.name), (n.innerText = this.giftee.displayName);
          const a = e.querySelector(".event-info"),
            r = e.querySelector(".user"),
            c = e.querySelector(".tier");
          return (
            (a.innerHTML = `${r.outerHTML} gifted ${n.outerHTML} a ${c.outerHTML} subscription`),
            this.wrap(e.innerHTML, s, i)
          );
        }
      }
      class re extends ne {
        constructor(t, e, s, i, n, o, a, r, c) {
          super(t, e, s, i, n, a, r, c),
            (this.type = St.MASSGIFT),
            (this.quantity = o);
        }
        html(t = null) {
          const e = super.html(t),
            s = Array.from(e.classList),
            i = e.getAttributeNames().reduce(
              (t, s) =>
                "class" === s
                  ? t
                  : {
                      ...t,
                      [s]: e.getAttribute(s),
                    },
              {}
            );
          e.querySelector(".subscription-icon").classList.add("mass-gift");
          const n = e.querySelector(".event-info"),
            o = e.querySelector(".user"),
            a = e.querySelector(".tier");
          return (
            (n.innerHTML = `${o.outerHTML} gifted ${this.quantity} ${
              a.outerHTML
            } ${this.quantity > 1 ? "subs" : "sub"} to the community`),
            this.wrap(e.innerHTML, s, i)
          );
        }
      }
      class ce extends Qt {
        constructor(t, e, s, i = null) {
          super(t, i, s),
            (this.type = St.BROADCAST),
            (this.user = e),
            this.generateMessageHash();
        }
        buildUserTemplate(t = null) {
          if (this.user.isSystem()) return [];
          const e = _t(t.flairs, this.user),
            s = document
              .querySelector("#user-template")
              ?.content.cloneNode(!0).firstElementChild;
          (s.title = this.title),
            e && s.classList.add(e.name),
            (s.innerText = this.user.displayName);
          const i = document.createElement("span");
          return (
            i.classList.toggle("ctrl"),
            this.slashme ? [s, i, " "] : ((i.innerText = ": "), [s, i])
          );
        }
        html(t = null) {
          const e = super.html(t),
            s = e.querySelector(".event-bottom")?.innerHTML;
          e.querySelector(".event-bottom").remove(),
            (e.querySelector(".event-info").innerHTML = s);
          const i = this.buildUserTemplate(t);
          e.querySelector(".event-icon").classList.add("broadcast-icon"),
            e.querySelector(".event-info").prepend(...i);
          const n = Array.from(e.classList),
            o = e.getAttributeNames().reduce(
              (t, s) =>
                "class" === s
                  ? t
                  : {
                      ...t,
                      [s]: e.getAttribute(s),
                    },
              {}
            );
          return this.wrap(e.innerHTML, n, o);
        }
        get hasActions() {
          return !1;
        }
      }
      class he extends qt {
        constructor(t, e, s = null) {
          super(t, e, s), (this.type = St.DEATH);
        }
        html(t = null) {
          return super.html(t);
        }
      }
      class le {
        static element(t, e = []) {
          return new kt(t, e);
        }
        static status(t, e = null) {
          return new Vt(t, e, St.STATUS);
        }
        static error(t, e = null) {
          return new Vt(t, e, St.ERROR);
        }
        static info(t, e = null) {
          return new Vt(t, e, St.INFO);
        }
        static broadcast(t, e, s, i = null) {
          return new ce(t, e, s, i);
        }
        static command(t, e = null) {
          return new Vt(t, e, St.COMMAND);
        }
        static message(t, e, s = null) {
          return new qt(t, e, s);
        }
        static emote(t, e, s) {
          return new zt(t, e, s);
        }
        static whisper(t, e, s, i = null, n = null) {
          const o = new qt(t, e, i);
          return (o.id = n), (o.target = s), o;
        }
        static historical(t, e, s = null) {
          const i = new qt(t, e, s);
          return (i.historical = !0), i;
        }
        static pinned(t, e, s, i) {
          return new Zt(t, e, s, i);
        }
        static subscription(t) {
          return new oe(
            t.data,
            new Et(t.user),
            t.tier,
            t.tierLabel,
            t.amount,
            t.streak,
            t.timestamp,
            t.expirationTimestamp,
            t.uuid
          );
        }
        static gift(t) {
          return new ae(
            t.data,
            new Et(t.user),
            t.tier,
            t.tierLabel,
            t.amount,
            new Et(t.recipient),
            t.fromMassGift,
            t.timestamp,
            t.expirationTimestamp,
            t.uuid
          );
        }
        static massgift(t) {
          return new re(
            t.data,
            new Et(t.user),
            t.tier,
            t.tierLabel,
            t.amount,
            t.quantity,
            t.timestamp,
            t.expirationTimestamp,
            t.uuid
          );
        }
        static donation(t) {
          return new se(
            t.data,
            new Et(t.user),
            t.amount,
            t.timestamp,
            t.expirationTimestamp,
            t.uuid
          );
        }
        static death(t, e, s = null) {
          return new he(t, e, s);
        }
      }
      function ue(t, e) {
        if ($e(t)) for (let s = 0; s < t.length && !1 !== e(t[s], s, t); s++);
        else t && ue(Object.keys(t), (s) => e(t[s], s, t));
        return t;
      }
      function de(t, e) {
        const s = Se(e);
        if (xe(e) || s) {
          let i = s ? "" : {};
          if (t) {
            const n = window.getComputedStyle(t, null);
            i = s
              ? Is(t, n, e)
              : e.reduce((e, s) => ((e[s] = Is(t, n, s)), e), i);
          }
          return i;
        }
        t && ue(De(e), (s) => Rs(t, s, e[s]));
      }
      const me = (t, e) => {
          const { o: s, u: i, _: n } = t;
          let o,
            a = s;
          const r = (t, e) => {
            const s = a,
              r = t,
              c = e || (i ? !i(s, r) : s !== r);
            return (c || n) && ((a = r), (o = s)), [a, c, o];
          };
          return [e ? (t) => r(e(a, o), t) : r, (t) => [a, !!t, o]];
        },
        pe = () => "undefined" != typeof window,
        ge = pe() && Node.ELEMENT_NODE,
        { toString: fe, hasOwnProperty: be } = Object.prototype,
        ve = (t) => void 0 === t,
        we = (t) => null === t,
        ye = (t) =>
          ve(t) || we(t)
            ? `${t}`
            : fe
                .call(t)
                .replace(/^\[object (.+)\]$/, "$1")
                .toLowerCase(),
        Ee = (t) => "number" == typeof t,
        Se = (t) => "string" == typeof t,
        ke = (t) => "boolean" == typeof t,
        Te = (t) => "function" == typeof t,
        xe = (t) => Array.isArray(t),
        Oe = (t) => "object" == typeof t && !xe(t) && !we(t),
        $e = (t) => {
          const e = !!t && t.length,
            s = Ee(e) && e > -1 && e % 1 == 0;
          return !(
            !(xe(t) || (!Te(t) && s)) ||
            (e > 0 && Oe(t) && !(e - 1 in t))
          );
        },
        Ae = (t) => {
          if (!t || !Oe(t) || "object" !== ye(t)) return !1;
          let e;
          const s = "constructor",
            i = t[s],
            n = i && i.prototype,
            o = be.call(t, s),
            a = n && be.call(n, "isPrototypeOf");
          if (i && !o && !a) return !1;
          for (e in t);
          return ve(e) || be.call(t, e);
        },
        Ne = (t) => {
          const e = HTMLElement;
          return !!t && (e ? t instanceof e : t.nodeType === ge);
        },
        Me = (t) => {
          const e = Element;
          return !!t && (e ? t instanceof e : t.nodeType === ge);
        },
        Ce = (t, e, s) => t.indexOf(e, s),
        Le = (t, e, s) => (
          s || Se(e) || !$e(e) ? t.push(e) : Array.prototype.push.apply(t, e), t
        ),
        Ie = (t) => {
          const e = Array.from,
            s = [];
          return e && t
            ? e(t)
            : (t instanceof Set
                ? t.forEach((t) => {
                    Le(s, t);
                  })
                : ue(t, (t) => {
                    Le(s, t);
                  }),
              s);
        },
        Re = (t) => !!t && 0 === t.length,
        Pe = (t, e, s) => {
          ue(t, (t) => t && t.apply(void 0, e || [])), !s && (t.length = 0);
        },
        Ue = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        De = (t) => (t ? Object.keys(t) : []),
        Be = (t, e, s, i, n, o, a) => {
          const r = [e, s, i, n, o, a];
          return (
            ("object" == typeof t && !we(t)) || Te(t) || (t = {}),
            ue(r, (e) => {
              ue(De(e), (s) => {
                const i = e[s];
                if (t === i) return !0;
                const n = xe(i);
                if (i && (Ae(i) || n)) {
                  const e = t[s];
                  let o = e;
                  n && !xe(e) ? (o = []) : n || Ae(e) || (o = {}),
                    (t[s] = Be(o, i));
                } else t[s] = i;
              });
            }),
            t
          );
        },
        He = (t) => {
          for (const e in t) return !1;
          return !0;
        },
        je = (t, e, s, i) => {
          if (ve(i)) return s ? s[t] : e;
          s && (Se(i) || Ee(i)) && (s[t] = i);
        },
        Fe = (t, e, s) => {
          if (ve(s)) return t ? t.getAttribute(e) : null;
          t && t.setAttribute(e, s);
        },
        Ve = (t, e, s, i) => {
          if (s) {
            const n = Fe(t, e) || "",
              o = new Set(n.split(" "));
            o[i ? "add" : "delete"](s), Fe(t, e, Ie(o).join(" ").trim());
          }
        },
        _e = (t, e) => {
          t && t.removeAttribute(e);
        },
        qe = (t, e) => je("scrollLeft", 0, t, e),
        We = (t, e) => je("scrollTop", 0, t, e),
        Ge = pe() && Element.prototype,
        ze = (t, e) => {
          const s = [],
            i = e ? (Me(e) ? e : null) : document;
          return i ? Le(s, i.querySelectorAll(t)) : s;
        },
        Ye = (t, e) =>
          !!Me(t) && (Ge.matches || Ge.msMatchesSelector).call(t, e),
        Ke = (t) => (t ? Ie(t.childNodes) : []),
        Xe = (t) => (t ? t.parentElement : null),
        Je = (t, e) => {
          if (Me(t)) {
            const s = Ge.closest;
            if (s) return s.call(t, e);
            do {
              if (Ye(t, e)) return t;
              t = Xe(t);
            } while (t);
          }
          return null;
        },
        Ze = (t, e, s) => {
          if (s && t) {
            let i,
              n = e;
            $e(s)
              ? ((i = document.createDocumentFragment()),
                ue(s, (t) => {
                  t === n && (n = t.previousSibling), i.appendChild(t);
                }))
              : (i = s),
              e && (n ? n !== e && (n = n.nextSibling) : (n = t.firstChild)),
              t.insertBefore(i, n || null);
          }
        },
        Qe = (t, e) => {
          Ze(t, null, e);
        },
        ts = (t, e) => {
          Ze(Xe(t), t && t.nextSibling, e);
        },
        es = (t) => {
          if ($e(t)) ue(Ie(t), (t) => es(t));
          else if (t) {
            const e = Xe(t);
            e && e.removeChild(t);
          }
        },
        ss = (t) => {
          const e = document.createElement("div");
          return t && Fe(e, "class", t), e;
        },
        is = (t) => {
          const e = ss();
          return (e.innerHTML = t.trim()), ue(Ke(e), (t) => es(t));
        },
        ns = (t) => t.charAt(0).toUpperCase() + t.slice(1),
        os = ["-webkit-", "-moz-", "-o-", "-ms-"],
        as = ["WebKit", "Moz", "O", "MS", "webkit", "moz", "o", "ms"],
        rs = {},
        cs = {},
        hs = (t) => {
          let e = cs[t];
          if (Ue(cs, t)) return e;
          const s = ns(t),
            i = ss().style;
          return (
            ue(os, (n) => {
              const o = n.replace(/-/g, ""),
                a = [t, n + t, o + s, ns(o) + s];
              return !(e = a.find((t) => void 0 !== i[t]));
            }),
            (cs[t] = e || "")
          );
        },
        ls = (t) => {
          if (pe()) {
            let e = rs[t] || window[t];
            return (
              Ue(rs, t) ||
                (ue(as, (s) => ((e = e || window[s + ns(t)]), !e)),
                (rs[t] = e)),
              e
            );
          }
        },
        us = ls("MutationObserver"),
        ds = ls("IntersectionObserver"),
        ms = ls("ResizeObserver"),
        ps = ls("cancelAnimationFrame"),
        gs = ls("requestAnimationFrame"),
        fs = pe() && window.setTimeout,
        bs = pe() && window.clearTimeout,
        vs = (t, e, s, i) => {
          if (t && e) {
            let n = !0;
            return (
              ue(s, (s) => {
                (i ? i(t[s]) : t[s]) !== (i ? i(e[s]) : e[s]) && (n = !1);
              }),
              n
            );
          }
          return !1;
        },
        ws = (t, e) => vs(t, e, ["w", "h"]),
        ys = (t, e) => vs(t, e, ["x", "y"]),
        Es = (t, e) => vs(t, e, ["t", "r", "b", "l"]),
        Ss = (t, e, s) =>
          vs(t, e, ["width", "height"], s && ((t) => Math.round(t))),
        ks = () => {},
        Ts = (t) => {
          let e;
          const s = t ? fs : gs,
            i = t ? bs : ps;
          return [
            (n) => {
              i(e), (e = s(n, Te(t) ? t() : t));
            },
            () => i(e),
          ];
        },
        xs = (t, e) => {
          let s,
            i,
            n,
            o = ks;
          const { g: a, v: r, p: c } = e || {},
            h = function (e) {
              o(), bs(s), (s = i = void 0), (o = ks), t.apply(this, e);
            },
            l = (t) => (c && i ? c(i, t) : t),
            u = () => {
              o !== ks && h(l(n) || n);
            },
            d = function () {
              const t = Ie(arguments),
                e = Te(a) ? a() : a;
              if (Ee(e) && e >= 0) {
                const a = Te(r) ? r() : r,
                  c = Ee(a) && a >= 0,
                  d = e > 0 ? fs : gs,
                  m = e > 0 ? bs : ps,
                  p = l(t) || t,
                  g = h.bind(0, p);
                o();
                const f = d(g, e);
                (o = () => m(f)), c && !s && (s = fs(u, a)), (i = n = p);
              } else h(t);
            };
          return (d.m = u), d;
        },
        { max: Os } = Math,
        $s = /[^\x20\t\r\n\f]+/g,
        As = (t, e, s) => {
          const i = t && t.classList;
          let n,
            o = 0,
            a = !1;
          if (i && e && Se(e)) {
            const t = e.match($s) || [];
            for (a = t.length > 0; (n = t[o++]); ) a = !!s(i, n) && a;
          }
          return a;
        },
        Ns = (t, e) => {
          As(t, e, (t, e) => t.remove(e));
        },
        Ms = (t, e) => (As(t, e, (t, e) => t.add(e)), Ns.bind(0, t, e)),
        Cs = {
          opacity: 1,
          zindex: 1,
        },
        Ls = (t, e) => {
          const s = e ? parseFloat(t) : parseInt(t, 10);
          return s == s ? s : 0;
        },
        Is = (t, e, s) =>
          null != e ? e[s] || e.getPropertyValue(s) : t.style[s],
        Rs = (t, e, s) => {
          try {
            const { style: i } = t;
            ve(i[e])
              ? i.setProperty(e, s)
              : (i[e] = ((t, e) =>
                  !Cs[t.toLowerCase()] && Ee(e) ? `${e}px` : e)(e, s));
          } catch (t) {}
        },
        Ps = (t) => "rtl" === de(t, "direction"),
        Us = (t, e, s) => {
          const i = e ? `${e}-` : "",
            n = s ? `-${s}` : "",
            o = `${i}top${n}`,
            a = `${i}right${n}`,
            r = `${i}bottom${n}`,
            c = `${i}left${n}`,
            h = de(t, [o, a, r, c]);
          return {
            t: Ls(h[o], !0),
            r: Ls(h[a], !0),
            b: Ls(h[r], !0),
            l: Ls(h[c], !0),
          };
        },
        { round: Ds } = Math,
        Bs = {
          w: 0,
          h: 0,
        },
        Hs = (t) =>
          t
            ? {
                w: t.offsetWidth,
                h: t.offsetHeight,
              }
            : Bs,
        js = (t) =>
          t
            ? {
                w: t.clientWidth,
                h: t.clientHeight,
              }
            : Bs,
        Fs = (t) =>
          t
            ? {
                w: t.scrollWidth,
                h: t.scrollHeight,
              }
            : Bs,
        Vs = (t) => {
          const e = parseFloat(de(t, "height")) || 0,
            s = parseFloat(de(t, "width")) || 0;
          return {
            w: s - Ds(s),
            h: e - Ds(e),
          };
        },
        _s = (t) => t.getBoundingClientRect();
      let qs;
      const Ws = (t) => t.split(" "),
        Gs = (t, e, s, i) => {
          ue(Ws(e), (e) => {
            t.removeEventListener(e, s, i);
          });
        },
        zs = (t, e, s, i) => {
          var n;
          const o = (() => {
              if (ve(qs)) {
                qs = !1;
                try {
                  window.addEventListener(
                    "test",
                    null,
                    Object.defineProperty({}, "passive", {
                      get() {
                        qs = !0;
                      },
                    })
                  );
                } catch (t) {}
              }
              return qs;
            })(),
            a = null != (n = o && i && i.S) ? n : o,
            r = (i && i.$) || !1,
            c = (i && i.C) || !1,
            h = [],
            l = o
              ? {
                  passive: a,
                  capture: r,
                }
              : r;
          return (
            ue(Ws(e), (e) => {
              const i = c
                ? (n) => {
                    t.removeEventListener(e, i, r), s && s(n);
                  }
                : s;
              Le(h, Gs.bind(null, t, e, i, r)), t.addEventListener(e, i, l);
            }),
            Pe.bind(0, h)
          );
        },
        Ys = (t) => t.stopPropagation(),
        Ks = (t) => t.preventDefault(),
        Xs = {
          x: 0,
          y: 0,
        },
        Js = (t) => {
          const e = t ? _s(t) : 0;
          return e
            ? {
                x: e.left + window.pageYOffset,
                y: e.top + window.pageXOffset,
              }
            : Xs;
        },
        Zs = (t, e) => {
          ue(xe(e) ? e : [e], t);
        },
        Qs = (t) => {
          const e = new Map(),
            s = (t, s) => {
              if (t) {
                const i = e.get(t);
                Zs((t) => {
                  i && i[t ? "delete" : "clear"](t);
                }, s);
              } else
                e.forEach((t) => {
                  t.clear();
                }),
                  e.clear();
            },
            i = (t, n) => {
              if (Se(t)) {
                const i = e.get(t) || new Set();
                return (
                  e.set(t, i),
                  Zs((t) => {
                    Te(t) && i.add(t);
                  }, n),
                  s.bind(0, t, n)
                );
              }
              ke(n) && n && s();
              const o = De(t),
                a = [];
              return (
                ue(o, (e) => {
                  const s = t[e];
                  s && Le(a, i(e, s));
                }),
                Pe.bind(0, a)
              );
            };
          return (
            i(t || {}),
            [
              i,
              s,
              (t, s) => {
                const i = e.get(t);
                ue(Ie(i), (t) => {
                  s && !Re(s) ? t.apply(0, s) : t();
                });
              },
            ]
          );
        },
        ti = (t) =>
          JSON.stringify(t, (t, e) => {
            if (Te(e)) throw new Error();
            return e;
          }),
        ei = {
          paddingAbsolute: !1,
          showNativeOverlaidScrollbars: !1,
          update: {
            elementEvents: [["img", "load"]],
            debounce: [0, 33],
            attributes: null,
            ignoreMutation: null,
          },
          overflow: {
            x: "scroll",
            y: "scroll",
          },
          scrollbars: {
            theme: "os-theme-dark",
            visibility: "auto",
            autoHide: "never",
            autoHideDelay: 1300,
            dragScroll: !0,
            clickScroll: !1,
            pointers: ["mouse", "touch", "pen"],
          },
        },
        si = (t, e) => {
          const s = {};
          return (
            ue(De(e).concat(De(t)), (i) => {
              const n = t[i],
                o = e[i];
              if (Oe(n) && Oe(o))
                Be((s[i] = {}), si(n, o)), He(s[i]) && delete s[i];
              else if (Ue(e, i) && o !== n) {
                let t = !0;
                if (xe(n) || xe(o))
                  try {
                    ti(n) === ti(o) && (t = !1);
                  } catch (t) {}
                t && (s[i] = o);
              }
            }),
            s
          );
        },
        ii = "os-environment",
        ni = `${ii}-flexbox-glue`,
        oi = `${ni}-max`,
        ai = "data-overlayscrollbars",
        ri = "data-overlayscrollbars-initialize",
        ci = `${ai}-overflow-x`,
        hi = `${ai}-overflow-y`,
        li = "overflowVisible",
        ui = "updating",
        di = "os-viewport",
        mi = `${di}-arrange`,
        pi = `${di}-scrollbar-hidden`,
        gi = "os-overflow-visible",
        fi = "os-size-observer",
        bi = `${fi}-appear`,
        vi = `${fi}-listener`,
        wi = "os-scrollbar",
        yi = `${wi}-rtl`,
        Ei = `${wi}-horizontal`,
        Si = `${wi}-vertical`,
        ki = `${wi}-track`,
        Ti = `${wi}-handle`,
        xi = `${wi}-visible`,
        Oi = `${wi}-cornerless`,
        $i = `${wi}-transitionless`,
        Ai = `${wi}-interaction`,
        Ni = `${wi}-unusable`,
        Mi = `${wi}-auto-hidden`,
        Ci = `${wi}-wheel`,
        Li = `${ki}-interactive`,
        Ii = `${Ti}-interactive`,
        Ri = {},
        Pi = () => Ri,
        { round: Ui, abs: Di } = Math,
        Bi = "__osScrollbarsHidingPlugin";
      let Hi;
      const ji = (t, e, s, i) => {
          Qe(t, e);
          const n = js(e),
            o = Hs(e),
            a = Vs(s);
          return (
            i && es(e),
            {
              x: o.h - n.h + a.h,
              y: o.w - n.w + a.w,
            }
          );
        },
        Fi = (t, e) => {
          const s = "hidden";
          de(t, {
            overflowX: s,
            overflowY: s,
            direction: "rtl",
          }),
            qe(t, 0);
          const i = Js(t),
            n = Js(e);
          qe(t, -999);
          const o = Js(e);
          return {
            i: i.x === n.x,
            n: n.x !== o.x,
          };
        },
        Vi = (t, e) => {
          const s = Ms(t, ni),
            i = _s(t),
            n = _s(e),
            o = Ss(n, i, !0),
            a = Ms(t, oi),
            r = _s(t),
            c = _s(e),
            h = Ss(c, r, !0);
          return s(), a(), o && h;
        },
        _i = () => (
          Hi ||
            (Hi = (() => {
              const { body: t } = document,
                e = is(`<div class="${ii}"><div></div></div>`)[0],
                s = e.firstChild,
                [i, , n] = Qs(),
                [o, a] = me(
                  {
                    o: ji(t, e, s),
                    u: ys,
                  },
                  ji.bind(0, t, e, s, !0)
                ),
                [r] = a(),
                c = ((t) => {
                  let e = !1;
                  const s = Ms(t, pi);
                  try {
                    e =
                      "none" === de(t, hs("scrollbar-width")) ||
                      "none" ===
                        window
                          .getComputedStyle(t, "::-webkit-scrollbar")
                          .getPropertyValue("display");
                  } catch (t) {}
                  return s(), e;
                })(e),
                h = {
                  x: 0 === r.x,
                  y: 0 === r.y,
                },
                l = {
                  elements: {
                    host: null,
                    padding: !c,
                    viewport: (t) => c && t === t.ownerDocument.body && t,
                    content: !1,
                  },
                  scrollbars: {
                    slot: !0,
                  },
                  cancel: {
                    nativeScrollbarsOverlaid: !1,
                    body: null,
                  },
                },
                u = Be({}, ei),
                d = Be.bind(0, {}, u),
                m = Be.bind(0, {}, l),
                p = {
                  k: r,
                  A: h,
                  I: c,
                  L: "-1" === de(e, "zIndex"),
                  B: Fi(e, s),
                  V: Vi(e, s),
                  Y: i.bind(0, "z"),
                  j: i.bind(0, "r"),
                  N: m,
                  q: (t) => Be(l, t) && m(),
                  F: d,
                  G: (t) => Be(u, t) && d(),
                  X: Be({}, l),
                  U: Be({}, u),
                },
                g = window.addEventListener,
                f = xs((t) => n(t ? "z" : "r"), {
                  g: 33,
                  v: 99,
                });
              if (
                (_e(e, "style"),
                es(e),
                g("resize", f.bind(0, !1)),
                !(c || (h.x && h.y)))
              ) {
                let t;
                g("resize", () => {
                  const e = Pi()[Bi];
                  (t = t || (e && e.R())), t && t(p, o, f.bind(0, !0));
                });
              }
              return p;
            })()),
          Hi
        ),
        qi = (t, e) => (Te(e) ? e.apply(0, t) : e),
        Wi = (t, e, s, i) => {
          const n = ve(i) ? s : i;
          return qi(t, n) || e.apply(0, t);
        },
        Gi = (t, e, s, i) => {
          const n = ve(i) ? s : i,
            o = qi(t, n);
          return !!o && (Ne(o) ? o : e.apply(0, t));
        },
        zi = new WeakMap(),
        Yi = (t) => zi.get(t),
        Ki = (t, e) =>
          t
            ? e.split(".").reduce((t, e) => (t && Ue(t, e) ? t[e] : void 0), t)
            : void 0,
        Xi = (t, e, s) => (i) => [Ki(t, i), s || void 0 !== Ki(e, i)],
        Ji = (t) => {
          let e = t;
          return [
            () => e,
            (t) => {
              e = Be({}, e, t);
            },
          ];
        },
        Zi = "tabindex",
        Qi = ss.bind(0, ""),
        tn = (t) => {
          Qe(Xe(t), Ke(t)), es(t);
        },
        en = (t) => {
          const e = _i(),
            { N: s, I: i } = e,
            n = Pi()[Bi],
            o = n && n.T,
            { elements: a } = s(),
            { host: r, padding: c, viewport: h, content: l } = a,
            u = Ne(t),
            d = u ? {} : t,
            { elements: m } = d,
            { host: p, padding: g, viewport: f, content: b } = m || {},
            v = u ? t : d.target,
            w = Ye(v, "textarea"),
            y = v.ownerDocument,
            E = y.documentElement,
            S = v === y.body,
            k = y.defaultView,
            T = Wi.bind(0, [v]),
            x = Gi.bind(0, [v]),
            O = qi.bind(0, [v]),
            $ = T.bind(0, Qi, h),
            A = x.bind(0, Qi, l),
            N = $(f),
            M = N === v,
            C = M && S,
            L = !M && A(b),
            I = !M && Ne(N) && N === L,
            R = I && !!O(l),
            P = R ? $() : N,
            U = R ? L : A(),
            D = C ? E : I ? P : N,
            B = w ? T(Qi, r, p) : v,
            H = C ? D : B,
            j = I ? U : L,
            F = y.activeElement,
            V = !M && k.top === k && F === v,
            _ = {
              W: v,
              Z: H,
              J: D,
              K: !M && x(Qi, c, g),
              tt: j,
              nt: !M && !i && o && o(e),
              ot: C ? E : D,
              st: C ? y : D,
              et: k,
              ct: y,
              rt: w,
              it: S,
              lt: u,
              ut: M,
              dt: I,
              ft: (t, e) =>
                M
                  ? ((t, e, s) => {
                      const i = Fe(t, e) || "";
                      return new Set(i.split(" ")).has(s);
                    })(D, ai, e)
                  : ((t, e) => As(t, e, (t, e) => t.contains(e)))(D, t),
              _t: (t, e, s) => (M ? Ve(D, ai, e, s) : (s ? Ms : Ns)(D, t)),
            },
            q = De(_).reduce((t, e) => {
              const s = _[e];
              return Le(t, !(!s || Xe(s)) && s);
            }, []),
            W = (t) => (t ? Ce(q, t) > -1 : null),
            { W: G, Z: z, K: Y, J: K, tt: X, nt: J } = _,
            Z = [
              () => {
                _e(z, ai), _e(z, ri), _e(G, ri), S && (_e(E, ai), _e(E, ri));
              },
            ],
            Q = w && W(z);
          let tt = w ? G : Ke([X, K, Y, z, G].find((t) => !1 === W(t)));
          const et = C ? G : X || K;
          return [
            _,
            () => {
              Fe(z, ai, M ? "viewport" : "host");
              const t = Ms(Y, "os-padding"),
                e = Ms(K, !M && di),
                s = Ms(X, "os-content"),
                n = S && !M ? Ms(Xe(v), pi) : ks;
              if (
                (Q &&
                  (ts(G, z),
                  Le(Z, () => {
                    ts(z, G), es(z);
                  })),
                Qe(et, tt),
                Qe(z, Y),
                Qe(Y || z, !M && K),
                Qe(K, X),
                Le(Z, () => {
                  n(),
                    _e(K, ci),
                    _e(K, hi),
                    W(X) && tn(X),
                    W(K) && tn(K),
                    W(Y) && tn(Y),
                    t(),
                    e(),
                    s();
                }),
                i && !M && Le(Z, Ns.bind(0, K, pi)),
                J &&
                  (((t, e) => {
                    Ze(Xe(t), t, e);
                  })(K, J),
                  Le(Z, es.bind(0, J))),
                V)
              ) {
                const t = Fe(K, Zi);
                Fe(K, Zi, "-1"), K.focus();
                const e = () => (t ? Fe(K, Zi, t) : _e(K, Zi)),
                  s = zs(y, "pointerdown keydown", () => {
                    e(), s();
                  });
                Le(Z, [e, s]);
              } else F && F.focus && F.focus();
              tt = 0;
            },
            Pe.bind(0, Z),
          ];
        },
        sn = (t, e) => {
          const { tt: s } = t,
            [i] = e;
          return (t) => {
            const { V: e } = _i(),
              { ht: n } = i(),
              { gt: o } = t,
              a = (s || !e) && o;
            return (
              a &&
                de(s, {
                  height: n ? "" : "100%",
                }),
              {
                vt: a,
                wt: a,
              }
            );
          };
        },
        nn = (t, e) => {
          const [s, i] = e,
            { Z: n, K: o, J: a, ut: r } = t,
            [c, h] = me(
              {
                u: Es,
                o: Us(),
              },
              Us.bind(0, n, "padding", "")
            );
          return (t, e, n) => {
            let [l, u] = h(n);
            const { I: d, V: m } = _i(),
              { bt: p } = s(),
              { vt: g, wt: f, yt: b } = t,
              [v, w] = e("paddingAbsolute");
            (g || u || (!m && f)) && ([l, u] = c(n));
            const y = !r && (w || b || u);
            if (y) {
              const t = !v || (!o && !d),
                e = l.r + l.l,
                s = l.t + l.b,
                n = {
                  marginRight: t && !p ? -e : 0,
                  marginBottom: t ? -s : 0,
                  marginLeft: t && p ? -e : 0,
                  top: t ? -l.t : 0,
                  right: t ? (p ? -l.r : "auto") : 0,
                  left: t ? (p ? "auto" : -l.l) : 0,
                  width: t ? `calc(100% + ${e}px)` : "",
                },
                r = {
                  paddingTop: t ? l.t : 0,
                  paddingRight: t ? l.r : 0,
                  paddingBottom: t ? l.b : 0,
                  paddingLeft: t ? l.l : 0,
                };
              de(o || a, n),
                de(a, r),
                i({
                  K: l,
                  St: !t,
                  M: o ? r : Be({}, n, r),
                });
            }
            return {
              xt: y,
            };
          };
        },
        { max: on } = Math,
        an = on.bind(0, 0),
        rn = "visible",
        cn = "hidden",
        hn = {
          u: ws,
          o: {
            w: 0,
            h: 0,
          },
        },
        ln = {
          u: ys,
          o: {
            x: cn,
            y: cn,
          },
        },
        un = (t, e, s) => (s ? Ms(t, e) : Ns(t, e)),
        dn = (t) => 0 === t.indexOf(rn),
        mn = (t, e) => {
          const [s, i] = e,
            { Z: n, K: o, J: a, nt: r, ut: c, _t: h, it: l, et: u } = t,
            { k: d, V: m, I: p, A: g } = _i(),
            f = Pi()[Bi],
            b = !c && !p && (g.x || g.y),
            v = l && c,
            [w, y] = me(hn, Vs.bind(0, a)),
            [E, S] = me(hn, Fs.bind(0, a)),
            [k, T] = me(hn),
            [x, O] = me(hn),
            [$] = me(ln),
            A = (t, e) => {
              if (
                (de(a, {
                  height: "",
                }),
                e)
              ) {
                const { St: e, K: i } = s(),
                  { $t: o, P: r } = t,
                  c = Vs(n),
                  h = js(n),
                  l = "content-box" === de(a, "boxSizing"),
                  u = e || l ? i.b + i.t : 0,
                  d = !(g.x && l);
                de(a, {
                  height: h.h + c.h + (o.x && d ? r.x : 0) - u,
                });
              }
            },
            N = (t, e) => {
              const s = p || t ? 0 : 42,
                i = (t, i, n) => {
                  const o = de(a, t),
                    r = "scroll" === (e ? e[t] : o);
                  return [o, r, r && !p ? (i ? s : n) : 0, i && !!s];
                },
                [n, o, r, c] = i("overflowX", g.x, d.x),
                [h, l, u, m] = i("overflowY", g.y, d.y);
              return {
                Ct: {
                  x: n,
                  y: h,
                },
                $t: {
                  x: o,
                  y: l,
                },
                P: {
                  x: r,
                  y: u,
                },
                D: {
                  x: c,
                  y: m,
                },
              };
            },
            M = (t, e, i, n) => {
              const { P: o, D: a } = t,
                { x: r, y: c } = a,
                { x: h, y: l } = o,
                { M: u } = s(),
                d = e ? "marginLeft" : "marginRight",
                m = e ? "paddingLeft" : "paddingRight",
                p = u[d],
                g = u.marginBottom,
                f = u[m],
                b = u.paddingBottom;
              (n.width = `calc(100% + ${l + -1 * p}px)`),
                (n[d] = -l + p),
                (n.marginBottom = -h + g),
                i &&
                  ((n[m] = f + (c ? l : 0)),
                  (n.paddingBottom = b + (r ? h : 0)));
            },
            [C, L] = f ? f.H(b, m, a, r, s, N, M) : [() => b, () => [ks]];
          return (t, e, r) => {
            const { vt: l, Ot: d, wt: f, xt: b, gt: I, yt: R } = t,
              { ht: P, bt: U } = s(),
              [D, B] = e("showNativeOverlaidScrollbars"),
              [H, j] = e("overflow"),
              F = D && g.x && g.y,
              V = !c && !m && (l || f || d || B || I),
              _ = dn(H.x),
              q = dn(H.y),
              W = _ || q;
            let G,
              z = y(r),
              Y = S(r),
              K = T(r),
              X = O(r);
            if (
              (B && p && h(pi, "scrollbarHidden", !F),
              V && ((G = N(F)), A(G, P)),
              l || b || f || R || B)
            ) {
              W && h(gi, li, !1);
              const [t, e] = L(F, U, G),
                [s, i] = (z = w(r)),
                [n, o] = (Y = E(r)),
                c = js(a);
              let l = n,
                d = c;
              t(),
                (o || i || B) &&
                  e &&
                  !F &&
                  C(e, n, s, U) &&
                  ((d = js(a)), (l = Fs(a)));
              const m = {
                  w: an(on(n.w, l.w) + s.w),
                  h: an(on(n.h, l.h) + s.h),
                },
                p = {
                  w: an((v ? u.innerWidth : d.w + an(c.w - n.w)) + s.w),
                  h: an((v ? u.innerHeight + s.h : d.h + an(c.h - n.h)) + s.h),
                };
              (X = x(p)),
                (K = k(
                  ((t, e) => {
                    const s = window.devicePixelRatio % 1 != 0 ? 1 : 0,
                      i = {
                        w: an(t.w - e.w),
                        h: an(t.h - e.h),
                      };
                    return {
                      w: i.w > s ? i.w : 0,
                      h: i.h > s ? i.h : 0,
                    };
                  })(m, p),
                  r
                ));
            }
            const [J, Z] = X,
              [Q, tt] = K,
              [et, st] = Y,
              [it, nt] = z,
              ot = {
                x: Q.w > 0,
                y: Q.h > 0,
              },
              at =
                (_ && q && (ot.x || ot.y)) ||
                (_ && ot.x && !ot.y) ||
                (q && ot.y && !ot.x);
            if (b || R || nt || st || Z || tt || j || B || V) {
              const t = {
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                  width: "",
                  overflowY: "",
                  overflowX: "",
                },
                e = ((t, e, s, i) => {
                  const n = (t, e) => {
                      const s = dn(t),
                        i = (e && s && t.replace(`${rn}-`, "")) || "";
                      return [e && !s ? t : "", dn(i) ? "hidden" : i];
                    },
                    [o, a] = n(s.x, e.x),
                    [r, c] = n(s.y, e.y);
                  return (
                    (i.overflowX = a && r ? a : o),
                    (i.overflowY = c && o ? c : r),
                    N(t, i)
                  );
                })(F, ot, H, t),
                s = C(e, et, it, U);
              c || M(e, U, s, t),
                V && A(e, P),
                c ? (Fe(n, ci, t.overflowX), Fe(n, hi, t.overflowY)) : de(a, t);
            }
            Ve(n, ai, li, at), un(o, gi, at), !c && un(a, gi, W);
            const [rt, ct] = $(N(F).Ct);
            return (
              i({
                Ct: rt,
                zt: {
                  x: J.w,
                  y: J.h,
                },
                Tt: {
                  x: Q.w,
                  y: Q.h,
                },
                Et: ot,
              }),
              {
                It: ct,
                At: Z,
                Lt: tt,
              }
            );
          };
        },
        pn = (t, e, s) => {
          const i = {},
            n = e || {};
          return (
            ue(De(t).concat(De(n)), (e) => {
              const o = t[e],
                a = n[e];
              i[e] = !!(s || o || a);
            }),
            i
          );
        },
        gn = (t, e, s, i) => {
          let n = !1;
          const { Ht: o, Mt: a, Pt: r, Dt: c, Rt: h, kt: l } = i || {},
            u = xs(
              () => {
                n && s(!0);
              },
              {
                g: 33,
                v: 99,
              }
            ),
            [d, m] = ((t, e, s) => {
              let i,
                n = !1;
              const o = (o) => {
                if (s) {
                  const a = s.reduce((e, s) => {
                    if (s) {
                      const [i, n] = s,
                        a = n && i && (o ? o(i) : ze(i, t));
                      a && a.length && n && Se(n) && Le(e, [a, n.trim()], !0);
                    }
                    return e;
                  }, []);
                  ue(a, (s) =>
                    ue(s[0], (o) => {
                      const a = s[1],
                        r = i.get(o) || [];
                      if (t.contains(o)) {
                        const t = zs(o, a, (s) => {
                          n ? (t(), i.delete(o)) : e(s);
                        });
                        i.set(o, Le(r, t));
                      } else Pe(r), i.delete(o);
                    })
                  );
                }
              };
              return (
                s && ((i = new WeakMap()), o()),
                [
                  () => {
                    n = !0;
                  },
                  o,
                ]
              );
            })(t, u, r),
            p = a || [],
            g = (o || []).concat(p),
            f = (n, o) => {
              const a = h || ks,
                r = l || ks,
                u = new Set(),
                d = new Set();
              let g = !1,
                f = !1;
              if (
                (ue(n, (s) => {
                  const {
                      attributeName: n,
                      target: o,
                      type: h,
                      oldValue: l,
                      addedNodes: m,
                      removedNodes: b,
                    } = s,
                    v = "attributes" === h,
                    w = "childList" === h,
                    y = t === o,
                    E = v && Se(n) ? Fe(o, n) : 0,
                    S = 0 !== E && l !== E,
                    k = Ce(p, n) > -1 && S;
                  if (e && (w || !y)) {
                    const e = !v,
                      h = v && S,
                      d = h && c && Ye(o, c),
                      p = (d ? !a(o, n, l, E) : e || h) && !r(s, !!d, t, i);
                    ue(m, (t) => u.add(t)),
                      ue(b, (t) => u.add(t)),
                      (f = f || p);
                  }
                  !e && y && S && !a(o, n, l, E) && (d.add(n), (g = g || k));
                }),
                u.size > 0 &&
                  m((t) =>
                    Ie(u).reduce(
                      (e, s) => (Le(e, ze(t, s)), Ye(s, t) ? Le(e, s) : e),
                      []
                    )
                  ),
                e)
              )
                return !o && f && s(!1), [!1];
              if (d.size > 0 || g) {
                const t = [Ie(d), g];
                return !o && s.apply(0, t), t;
              }
            },
            b = new us((t) => f(t));
          return (
            b.observe(t, {
              attributes: !0,
              attributeOldValue: !0,
              attributeFilter: g,
              subtree: e,
              childList: e,
              characterData: e,
            }),
            (n = !0),
            [
              () => {
                n && (d(), b.disconnect(), (n = !1));
              },
              () => {
                if (n) {
                  u.m();
                  const t = b.takeRecords();
                  return !Re(t) && f(t, !0);
                }
              },
            ]
          );
        },
        fn = 3333333,
        bn = (t) => t && (t.height || t.width),
        vn = (t, e, s) => {
          const { Bt: i = !1, Vt: n = !1 } = s || {},
            o = Pi().__osSizeObserverPlugin,
            { B: a } = _i(),
            r = is(`<div class="${fi}"><div class="${vi}"></div></div>`)[0],
            c = r.firstChild,
            h = Ps.bind(0, t),
            [l] = me({
              o: void 0,
              _: !0,
              u: (t, e) => !(!t || (!bn(t) && bn(e))),
            }),
            u = (t) => {
              const s = xe(t) && t.length > 0 && Oe(t[0]),
                n = !s && ke(t[0]);
              let o = !1,
                c = !1,
                h = !0;
              if (s) {
                const [e, , s] = l(t.pop().contentRect),
                  i = bn(e);
                (o = !s || !i), (c = !bn(s) && i), (h = !o);
              } else n ? ([, h] = t) : (c = !0 === t);
              if (i && h) {
                const e = n ? t[0] : Ps(r);
                qe(r, e ? (a.n ? -fn : a.i ? 0 : fn) : fn), We(r, fn);
              }
              o ||
                e({
                  vt: !n,
                  Yt: n ? t : void 0,
                  Vt: !!c,
                });
            },
            d = [];
          let m = !!n && u;
          return [
            () => {
              Pe(d), es(r);
            },
            () => {
              if (ms) {
                const t = new ms(u);
                t.observe(c),
                  Le(d, () => {
                    t.disconnect();
                  });
              } else if (o) {
                const [t, e] = o.O(c, u, n);
                (m = t), Le(d, e);
              }
              if (i) {
                const [t] = me(
                  {
                    o: !h(),
                  },
                  h
                );
                Le(
                  d,
                  zs(r, "scroll", (e) => {
                    const s = t(),
                      [i, n] = s;
                    n && (Ns(c, "ltr rtl"), Ms(c, i ? "rtl" : "ltr"), u(s)),
                      Ys(e);
                  })
                );
              }
              m &&
                (Ms(r, bi),
                Le(
                  d,
                  zs(r, "animationstart", m, {
                    C: !!ms,
                  })
                )),
                (ms || o) && Qe(t, r);
            },
          ];
        },
        wn = (t, e) => {
          let s;
          const i = ss("os-trinsic-observer"),
            n = [],
            [o] = me({
              o: !1,
            }),
            a = (t, s) => {
              if (t) {
                const i = o(
                    ((t) =>
                      0 === t.h || t.isIntersecting || t.intersectionRatio > 0)(
                      t
                    )
                  ),
                  [, n] = i;
                if (n) return !s && e(i), [i];
              }
            },
            r = (t, e) => {
              if (t && t.length > 0) return a(t.pop(), e);
            };
          return [
            () => {
              Pe(n), es(i);
            },
            () => {
              if (ds)
                (s = new ds((t) => r(t), {
                  root: t,
                })),
                  s.observe(i),
                  Le(n, () => {
                    s.disconnect();
                  });
              else {
                const t = () => {
                    const t = Hs(i);
                    a(t);
                  },
                  [e, s] = vn(i, t);
                Le(n, e), s(), t();
              }
              Qe(t, i);
            },
            () => {
              if (s) return r(s.takeRecords(), !0);
            },
          ];
        },
        yn = `[${ai}]`,
        En = `.${di}`,
        Sn = ["tabindex"],
        kn = ["wrap", "cols", "rows"],
        Tn = ["id", "class", "style", "open"],
        xn = (t, e, s) => {
          let i, n, o;
          const { Z: a, J: r, tt: c, rt: h, ut: l, ft: u, _t: d } = t,
            { V: m } = _i(),
            [p] = me(
              {
                u: ws,
                o: {
                  w: 0,
                  h: 0,
                },
              },
              () => {
                const t = u(gi, li),
                  e = u(mi, ""),
                  s = e && qe(r),
                  i = e && We(r);
                d(gi, li), d(mi, ""), d("", ui, !0);
                const n = Fs(c),
                  o = Fs(r),
                  a = Vs(r);
                return (
                  d(gi, li, t),
                  d(mi, "", e),
                  d("", ui),
                  qe(r, s),
                  We(r, i),
                  {
                    w: o.w + n.w + a.w,
                    h: o.h + n.h + a.h,
                  }
                );
              }
            ),
            g = h ? kn : Tn.concat(kn),
            f = xs(s, {
              g: () => i,
              v: () => n,
              p(t, e) {
                const [s] = t,
                  [i] = e;
                return [
                  De(s)
                    .concat(De(i))
                    .reduce((t, e) => ((t[e] = s[e] || i[e]), t), {}),
                ];
              },
            }),
            b = (t) => {
              ue(t || Sn, (t) => {
                if (Ce(Sn, t) > -1) {
                  const e = Fe(a, t);
                  Se(e) ? Fe(r, t, e) : _e(r, t);
                }
              });
            },
            v = (t, i) => {
              const [n, o] = t,
                a = {
                  gt: o,
                };
              return (
                e({
                  ht: n,
                }),
                !i && s(a),
                a
              );
            },
            w = ({ vt: t, Yt: i, Vt: n }) => {
              const o = !t || n ? s : f;
              let a = !1;
              if (i) {
                const [t, s] = i;
                (a = s),
                  e({
                    bt: t,
                  });
              }
              o({
                vt: t,
                yt: a,
              });
            },
            y = (t, e) => {
              const [, i] = p(),
                n = {
                  wt: i,
                };
              return i && !e && (t ? s : f)(n), n;
            },
            E = (t, e, s) => {
              const i = {
                Ot: e,
              };
              return e ? !s && f(i) : l || b(t), i;
            },
            [S, k, T] = c || !m ? wn(a, v) : [ks, ks, ks],
            [x, O] = l
              ? [ks, ks]
              : vn(a, w, {
                  Vt: !0,
                  Bt: !0,
                }),
            [$, A] = gn(a, !1, E, {
              Mt: Tn,
              Ht: Tn.concat(Sn),
            }),
            N =
              l &&
              ms &&
              new ms(
                w.bind(0, {
                  vt: !0,
                })
              );
          return (
            N && N.observe(a),
            b(),
            [
              () => {
                S(), x(), o && o[0](), N && N.disconnect(), $();
              },
              () => {
                O(), k();
              },
              () => {
                const t = {},
                  e = A(),
                  s = T(),
                  i = o && o[1]();
                return (
                  e && Be(t, E.apply(0, Le(e, !0))),
                  s && Be(t, v.apply(0, Le(s, !0))),
                  i && Be(t, y.apply(0, Le(i, !0))),
                  t
                );
              },
              (t) => {
                const [e] = t("update.ignoreMutation"),
                  [s, a] = t("update.attributes"),
                  [h, u] = t("update.elementEvents"),
                  [d, m] = t("update.debounce"),
                  p = (t) => Te(e) && e(t);
                if (
                  ((u || a) &&
                    (o && (o[1](), o[0]()),
                    (o = gn(c || r, !0, y, {
                      Ht: g.concat(s || []),
                      Pt: h,
                      Dt: yn,
                      kt: (t, e) => {
                        const { target: s, attributeName: i } = t;
                        return (
                          (!(e || !i || l) &&
                            ((t, e, s) => {
                              const i = t && Je(t, e),
                                n =
                                  t &&
                                  ((t, e) => {
                                    const s = e ? (Me(e) ? e : null) : document;
                                    return s ? s.querySelector(t) : null;
                                  })(s, i),
                                o = Je(n, e) === i;
                              return (
                                !(!i || !n) &&
                                (i === t ||
                                  n === t ||
                                  (o && Je(Je(t, s), e) !== i))
                              );
                            })(s, yn, En)) ||
                          !!Je(s, `.${wi}`) ||
                          !!p(t)
                        );
                      },
                    }))),
                  m)
                )
                  if ((f.m(), xe(d))) {
                    const t = d[0],
                      e = d[1];
                    (i = Ee(t) && t), (n = Ee(e) && e);
                  } else Ee(d) ? ((i = d), (n = !1)) : ((i = !1), (n = !1));
              },
            ]
          );
        },
        On = {
          x: 0,
          y: 0,
        },
        $n = {
          K: {
            t: 0,
            r: 0,
            b: 0,
            l: 0,
          },
          St: !1,
          M: {
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
          },
          zt: On,
          Tt: On,
          Ct: {
            x: "hidden",
            y: "hidden",
          },
          Et: {
            x: !1,
            y: !1,
          },
          ht: !1,
          bt: !1,
        },
        { round: An } = Math,
        Nn = (t, e) =>
          zs(
            t,
            "mousedown",
            zs.bind(0, e, "click", Ys, {
              C: !0,
              $: !0,
            }),
            {
              $: !0,
            }
          ),
        Mn = (t, e, s, i, n, o) => {
          const { B: a } = _i(),
            { Ft: r, Gt: c, Xt: h } = s,
            l = "scroll" + (o ? "Left" : "Top"),
            u = "client" + (o ? "X" : "Y"),
            d = o ? "width" : "height",
            m = o ? "left" : "top",
            p = o ? "w" : "h",
            g = o ? "x" : "y",
            f = (t, e) => (s) => {
              const { Tt: u } = n(),
                d = Hs(c)[p] - Hs(r)[p],
                m = ((e * s) / d) * u[g],
                f = Ps(h) && o ? (a.n || a.i ? 1 : -1) : 1;
              i[l] = t + m * f;
            };
          return zs(c, "pointerdown", (s) => {
            const n = Je(s.target, `.${Ti}`) === r;
            if (
              ((t, e, s) => {
                const i = e.scrollbars,
                  { button: n, isPrimary: o, pointerType: a } = t,
                  { pointers: r } = i;
                return (
                  0 === n &&
                  o &&
                  i[s ? "dragScroll" : "clickScroll"] &&
                  (r || []).includes(a)
                );
              })(s, t, n)
            ) {
              const t = !n && s.shiftKey,
                o = () => _s(r),
                a = () => _s(c),
                h = (t, e) => (t || o())[m] - (e || a())[m],
                p = f(
                  i[l] || 0,
                  1 /
                    ((t) => {
                      const { width: e, height: s } = _s(t),
                        { w: i, h: n } = Hs(t);
                      return {
                        x: An(e) / i || 1,
                        y: An(s) / n || 1,
                      };
                    })(i)[g]
                ),
                b = s[u],
                v = o(),
                w = a(),
                y = v[d],
                E = h(v, w) + y / 2,
                S = b - w[m],
                k = n ? 0 : S - E,
                T = [
                  zs(e, "selectstart", (t) => Ks(t), {
                    S: !1,
                  }),
                  zs(c, "pointermove", (e) => {
                    const s = e[u] - b;
                    (n || t) && p(k + s);
                  }),
                ];
              if (t) p(k);
              else if (!n) {
                const t = Pi().__osClickScrollPlugin;
                t && Le(T, t.O(p, h, k, y, S));
              }
              zs(
                c,
                "pointerup",
                (t) => {
                  Pe(T), c.releasePointerCapture(t.pointerId);
                },
                {
                  C: !0,
                }
              ),
                c.setPointerCapture(s.pointerId);
            }
          });
        },
        { min: Cn, max: Ln, abs: In, round: Rn } = Math,
        Pn = (t, e, s, i) => {
          if (i) {
            const t = s ? "x" : "y",
              { Tt: e, zt: n } = i,
              o = n[t],
              a = e[t];
            return Ln(0, Cn(1, o / (o + a)));
          }
          const n = s ? "w" : "h",
            o = Hs(t)[n],
            a = Hs(e)[n];
          return Ln(0, Cn(1, o / a));
        },
        Un = (t, e, s) => {
          const { N: i } = _i(),
            { scrollbars: n } = i(),
            { slot: o } = n,
            { ct: a, W: r, Z: c, J: h, lt: l, ot: u, it: d, ut: m } = e,
            { scrollbars: p } = l ? {} : t,
            { slot: g } = p || {},
            f = Gi([r, c, h], () => (m && d ? r : c), o, g),
            b = (t, e, s) => {
              const i = s ? Ms : Ns;
              ue(t, (t) => {
                i(t.Xt, e);
              });
            },
            v = (t, e) => {
              ue(t, (t) => {
                const [s, i] = e(t);
                de(s, i);
              });
            },
            w = (t, e, s) => {
              v(t, (t) => {
                const { Ft: i, Gt: n } = t;
                return [
                  i,
                  {
                    [s ? "width" : "height"]: `${(100 * Pn(i, n, s, e)).toFixed(
                      3
                    )}%`,
                  },
                ];
              });
            },
            y = (t, e, s) => {
              const i = s ? "X" : "Y";
              v(t, (t) => {
                const { Ft: n, Gt: o, Xt: a } = t,
                  r = ((t, e, s, i, n, o) => {
                    const { B: a } = _i(),
                      r = o ? "x" : "y",
                      c = o ? "Left" : "Top",
                      { Tt: h } = i,
                      l = Rn(h[r]),
                      u = In(s[`scroll${c}`]),
                      d = o && n,
                      m = a.i ? u : l - u,
                      p = Cn(1, (d ? m : u) / l),
                      g = Pn(t, e, o);
                    return (1 / g) * (1 - g) * p;
                  })(n, o, u, e, Ps(a), s);
                return [
                  n,
                  {
                    transform:
                      r == r ? `translate${i}(${(100 * r).toFixed(3)}%)` : "",
                  },
                ];
              });
            },
            E = [],
            S = [],
            k = [],
            T = (t, e, s) => {
              const i = ke(s),
                n = !i || !s;
              (!i || s) && b(S, t, e), n && b(k, t, e);
            },
            x = (t) => {
              const e = t ? Ei : Si,
                i = t ? S : k,
                n = Re(i) ? $i : "",
                o = ss(`${wi} ${e} ${n}`),
                r = ss(ki),
                h = ss(Ti),
                l = {
                  Xt: o,
                  Gt: r,
                  Ft: h,
                };
              return (
                Qe(o, r),
                Qe(r, h),
                Le(i, l),
                Le(E, [es.bind(0, o), s(l, T, a, c, u, t)]),
                l
              );
            },
            O = x.bind(0, !0),
            $ = x.bind(0, !1);
          return (
            O(),
            $(),
            [
              {
                Ut: (t) => {
                  w(S, t, !0), w(k, t);
                },
                Wt: (t) => {
                  y(S, t, !0), y(k, t);
                },
                Zt: T,
                Jt: {
                  Kt: S,
                  Qt: O,
                  tn: v.bind(0, S),
                },
                nn: {
                  Kt: k,
                  Qt: $,
                  tn: v.bind(0, k),
                },
              },
              () => {
                Qe(f, S[0].Xt),
                  Qe(f, k[0].Xt),
                  fs(() => {
                    T($i);
                  }, 300);
              },
              Pe.bind(0, E),
            ]
          );
        },
        Dn = (t, e, s) => {
          Te(t) && t(e || void 0, s || void 0);
        },
        Bn = (t, e, s) => {
          const { F: i, N: n, Y: o, j: a } = _i(),
            r = Pi(),
            c = Ne(t),
            h = c ? t : t.target,
            l = Yi(h);
          if (e && !l) {
            let l = !1;
            const u = (t) => {
                const e = Pi().__osOptionsValidationPlugin,
                  s = e && e.O;
                return s ? s(t, !0) : t;
              },
              d = Be({}, i(), u(e)),
              [m, p, g] = Qs(s),
              [f, b, v] = ((t, e) => {
                const s = Xi(e, {}),
                  i = Ji($n),
                  [n, o, a] = Qs(),
                  [r, c] = i,
                  [h, l, u] = en(t),
                  d = ((t, e) => {
                    const { W: s, J: i, _t: n, ut: o } = t,
                      { I: a, A: r, V: c } = _i(),
                      h = !a && (r.x || r.y),
                      l = [sn(t, e), nn(t, e), mn(t, e)];
                    return (t, e, a) => {
                      const r = pn(
                          Be(
                            {
                              vt: !1,
                              xt: !1,
                              yt: !1,
                              gt: !1,
                              At: !1,
                              Lt: !1,
                              It: !1,
                              Ot: !1,
                              wt: !1,
                            },
                            e
                          ),
                          {},
                          a
                        ),
                        u = h || !c,
                        d = u && qe(i),
                        m = u && We(i);
                      n("", ui, !0);
                      let p = r;
                      return (
                        ue(l, (e) => {
                          p = pn(p, e(p, t, !!a) || {}, a);
                        }),
                        qe(i, d),
                        We(i, m),
                        n("", ui),
                        o || (qe(s, 0), We(s, 0)),
                        p
                      );
                    };
                  })(h, i),
                  m = (t, e, s) => {
                    const i = De(t).some((e) => t[e]),
                      n = i || !He(e) || s;
                    return n && a("u", [t, e, s]), n;
                  },
                  [p, g, f, b] = xn(h, c, (t) => m(d(s, t), {}, !1)),
                  v = r.bind(0);
                return (
                  (v.jt = (t) => n("u", t)),
                  (v.Nt = () => {
                    const { W: t, J: e } = h,
                      s = qe(t),
                      i = We(t);
                    g(), l(), qe(e, s), We(e, i);
                  }),
                  (v.qt = h),
                  [
                    (t, s) => {
                      const i = Xi(e, t, s);
                      return b(i), m(d(i, f(), s), t, !!s);
                    },
                    v,
                    () => {
                      o(), p(), u();
                    },
                  ]
                );
              })(t, d),
              [w, y, E] = ((t, e, s, i) => {
                let n,
                  o,
                  a,
                  r,
                  c,
                  h = 0;
                const l = Ji({}),
                  [u] = l,
                  [d, m] = Ts(),
                  [p, g] = Ts(),
                  [f, b] = Ts(100),
                  [v, w] = Ts(100),
                  [y, E] = Ts(() => h),
                  [S, k, T] = Un(
                    t,
                    s.qt,
                    ((t, e) => (s, i, n, o, a, r) => {
                      const { Xt: c } = s,
                        [h, l] = Ts(333),
                        u = !!a.scrollBy;
                      let d = !0;
                      return Pe.bind(0, [
                        zs(c, "pointerenter", () => {
                          i(Ai, !0);
                        }),
                        zs(c, "pointerleave pointercancel", () => {
                          i(Ai);
                        }),
                        zs(
                          c,
                          "wheel",
                          (t) => {
                            const { deltaX: e, deltaY: s, deltaMode: n } = t;
                            u &&
                              d &&
                              0 === n &&
                              Xe(c) === o &&
                              a.scrollBy({
                                left: e,
                                top: s,
                                behavior: "smooth",
                              }),
                              (d = !1),
                              i(Ci, !0),
                              h(() => {
                                (d = !0), i(Ci);
                              }),
                              Ks(t);
                          },
                          {
                            S: !1,
                            $: !0,
                          }
                        ),
                        Nn(c, n),
                        Mn(t, n, s, a, e, r),
                        l,
                      ]);
                    })(e, s)
                  ),
                  { Z: x, J: O, ot: $, st: A, ut: N, it: M } = s.qt,
                  { Jt: C, nn: L, Zt: I, Ut: R, Wt: P } = S,
                  { tn: U } = C,
                  { tn: D } = L,
                  B = (t) => {
                    const { Xt: e } = t,
                      s = N && !M && Xe(e) === O && e;
                    return [
                      s,
                      {
                        transform: s ? `translate(${qe($)}px, ${We($)}px)` : "",
                      },
                    ];
                  },
                  H = (t, e) => {
                    if ((E(), t)) I(Mi);
                    else {
                      const t = () => I(Mi, !0);
                      h > 0 && !e ? y(t) : t();
                    }
                  },
                  j = () => {
                    (r = o), r && H(!0);
                  },
                  F = [
                    b,
                    E,
                    w,
                    g,
                    m,
                    T,
                    zs(x, "pointerover", j, {
                      C: !0,
                    }),
                    zs(x, "pointerenter", j),
                    zs(x, "pointerleave", () => {
                      (r = !1), o && H(!1);
                    }),
                    zs(x, "pointermove", () => {
                      n &&
                        d(() => {
                          b(),
                            H(!0),
                            v(() => {
                              n && H(!1);
                            });
                        });
                    }),
                    zs(A, "scroll", (t) => {
                      p(() => {
                        P(s()),
                          a && H(!0),
                          f(() => {
                            a && !r && H(!1);
                          });
                      }),
                        i(t),
                        N && U(B),
                        N && D(B);
                    }),
                  ],
                  V = u.bind(0);
                return (
                  (V.qt = S),
                  (V.Nt = k),
                  [
                    (t, i, r) => {
                      const { At: l, Lt: u, It: d, yt: m } = r,
                        { A: p } = _i(),
                        g = Xi(e, t, i),
                        f = s(),
                        { Tt: b, Ct: v, bt: w } = f,
                        [y, E] = g("showNativeOverlaidScrollbars"),
                        [S, k] = g("scrollbars.theme"),
                        [T, x] = g("scrollbars.visibility"),
                        [O, $] = g("scrollbars.autoHide"),
                        [A] = g("scrollbars.autoHideDelay"),
                        [N, C] = g("scrollbars.dragScroll"),
                        [L, U] = g("scrollbars.clickScroll"),
                        D = l || u || m,
                        B = d || x,
                        j = y && p.x && p.y,
                        F = (t, e) => {
                          const s =
                            "visible" === T || ("auto" === T && "scroll" === t);
                          return I(xi, s, e), s;
                        };
                      if (
                        ((h = A),
                        E && I("os-theme-none", j),
                        k && (I(c), I(S, !0), (c = S)),
                        $ &&
                          ((n = "move" === O),
                          (o = "leave" === O),
                          (a = "never" !== O),
                          H(!a, !0)),
                        C && I(Ii, N),
                        U && I(Li, L),
                        B)
                      ) {
                        const t = F(v.x, !0),
                          e = F(v.y, !1);
                        I(Oi, !(t && e));
                      }
                      D &&
                        (R(f),
                        P(f),
                        I(Ni, !b.x, !0),
                        I(Ni, !b.y, !1),
                        I(yi, w && !M));
                    },
                    V,
                    Pe.bind(0, F),
                  ]
                );
              })(t, d, b, (t) => g("scroll", [$, t])),
              S = (t, e) => f(t, !!e),
              k = S.bind(0, {}, !0),
              T = o(k),
              x = a(k),
              O = (t) => {
                ((t) => {
                  zi.delete(t);
                })(h),
                  T(),
                  x(),
                  E(),
                  v(),
                  (l = !0),
                  g("destroyed", [$, !!t]),
                  p();
              },
              $ = {
                options(t, e) {
                  if (t) {
                    const s = e ? i() : {},
                      n = si(d, Be(s, u(t)));
                    He(n) || (Be(d, n), S(n));
                  }
                  return Be({}, d);
                },
                on: m,
                off: (t, e) => {
                  t && e && p(t, e);
                },
                state() {
                  const {
                    zt: t,
                    Tt: e,
                    Ct: s,
                    Et: i,
                    K: n,
                    St: o,
                    bt: a,
                  } = b();
                  return Be(
                    {},
                    {
                      overflowEdge: t,
                      overflowAmount: e,
                      overflowStyle: s,
                      hasOverflow: i,
                      padding: n,
                      paddingAbsolute: o,
                      directionRTL: a,
                      destroyed: l,
                    }
                  );
                },
                elements() {
                  const { W: t, Z: e, K: s, J: i, tt: n, ot: o, st: a } = b.qt,
                    { Jt: r, nn: c } = y.qt,
                    h = (t) => {
                      const { Ft: e, Gt: s, Xt: i } = t;
                      return {
                        scrollbar: i,
                        track: s,
                        handle: e,
                      };
                    },
                    l = (t) => {
                      const { Kt: e, Qt: s } = t,
                        i = h(e[0]);
                      return Be({}, i, {
                        clone: () => {
                          const t = h(s());
                          return w({}, !0, {}), t;
                        },
                      });
                    };
                  return Be(
                    {},
                    {
                      target: t,
                      host: e,
                      padding: s || i,
                      viewport: i,
                      content: n || i,
                      scrollOffsetElement: o,
                      scrollEventElement: a,
                      scrollbarHorizontal: l(r),
                      scrollbarVertical: l(c),
                    }
                  );
                },
                update: (t) => S({}, t),
                destroy: O.bind(0),
              };
            return (
              b.jt((t, e, s) => {
                w(e, s, t);
              }),
              ((t, e) => {
                zi.set(t, e);
              })(h, $),
              ue(De(r), (t) => Dn(r[t], 0, $)),
              ((t, e, s) => {
                const { nativeScrollbarsOverlaid: i, body: n } = s || {},
                  { A: o, I: a } = _i(),
                  { nativeScrollbarsOverlaid: r, body: c } = e,
                  h = null != i ? i : r,
                  l = ve(n) ? c : n,
                  u = (o.x || o.y) && h,
                  d = t && (we(l) ? !a : l);
                return !!u || !!d;
              })(b.qt.it, n().cancel, !c && t.cancel)
                ? (O(!0), $)
                : (b.Nt(),
                  y.Nt(),
                  g("initialized", [$]),
                  b.jt((t, e, s) => {
                    const {
                      vt: i,
                      yt: n,
                      gt: o,
                      At: a,
                      Lt: r,
                      It: c,
                      wt: h,
                      Ot: l,
                    } = t;
                    g("updated", [
                      $,
                      {
                        updateHints: {
                          sizeChanged: i,
                          directionChanged: n,
                          heightIntrinsicChanged: o,
                          overflowEdgeChanged: a,
                          overflowAmountChanged: r,
                          overflowStyleChanged: c,
                          contentMutation: h,
                          hostMutation: l,
                        },
                        changedOptions: e,
                        force: s,
                      },
                    ]);
                  }),
                  $.update(!0),
                  $)
            );
          }
          return l;
        };
      (Bn.plugin = (t) => {
        ue(
          ((t) => {
            const e = [];
            return (
              ue(xe(t) ? t : [t], (t) => {
                ue(De(t), (s) => {
                  Le(e, (Ri[s] = t[s]));
                });
              }),
              e
            );
          })(t),
          (t) => Dn(t, Bn)
        );
      }),
        (Bn.valid = (t) => {
          const e = t && t.elements,
            s = Te(e) && e();
          return Ae(s) && !!Yi(s.target);
        }),
        (Bn.env = () => {
          const {
            k: t,
            A: e,
            I: s,
            B: i,
            V: n,
            L: o,
            X: a,
            U: r,
            N: c,
            q: h,
            F: l,
            G: u,
          } = _i();
          return Be(
            {},
            {
              scrollbarsSize: t,
              scrollbarsOverlaid: e,
              scrollbarsHiding: s,
              rtlScrollBehavior: i,
              flexboxGlue: n,
              cssCustomProperties: o,
              staticDefaultInitialization: a,
              staticDefaultOptions: r,
              getDefaultInitialization: c,
              setDefaultInitialization: h,
              getDefaultOptions: l,
              setDefaultOptions: u,
            }
          );
        });
      const Hn = "ontouchstart" in window || navigator.maxTouchPoints;
      var jn = class {
        constructor(t, e = void 0) {
          (this.viewport = o()(t).get(0)),
            this.viewport &&
              ((this.target = o()(e) ?? o()(t)),
              (this.scroller = Bn(
                {
                  target: this.target.get(0),
                  elements: {
                    viewport: this.viewport,
                  },
                },
                {
                  overflow: {
                    x: "hidden",
                    y: "scroll",
                  },
                  scrollbars: {
                    theme: "dgg-scroller-theme",
                    autoHide: Hn ? "never" : "move",
                    autoHideDelay: 1e3,
                  },
                }
              )),
              this.target.find(".chat-scroll-notify").length > 0 &&
                ((this.wasPinned = !0),
                this.setupResize(),
                this.scroller.on("scroll", () => {
                  (this.wasPinned = this.pinned),
                    this.target.toggleClass("chat-unpinned", !this.wasPinned);
                }),
                this.target.on(
                  "click",
                  ".chat-scroll-notify",
                  () => (this.scrollBottom(), !1)
                )));
        }
        setupResize() {
          let t = !1,
            e = this.wasPinned;
          const s = (0, a.s)(
            100,
            () => {
              (t = !1), this.update(e);
            },
            {
              atBegin: !1,
            }
          );
          (this.resizeObserver = new ResizeObserver(() => {
            t || ((t = !0), (e = this.pinned)), s();
          })),
            this.resizeObserver.observe(this.viewport);
        }
        get pinned() {
          const {
            scrollTop: t,
            scrollHeight: e,
            clientHeight: s,
          } = this.viewport;
          return t >= e - s - 30;
        }
        scrollBottom() {
          this.viewport.scrollTo(0, this.viewport.scrollHeight);
        }
        update(t) {
          (this.wasPinned || t) && this.scrollBottom();
        }
        reset() {
          this.scroller.update();
        }
        destroy() {
          this.scroller.destroy();
        }
      };
      class Fn extends bt {
        constructor(t, e, s) {
          super(),
            (this.ui = t),
            (this.btn = e),
            (this.chat = s),
            (this.visible = !1),
            (this.shown = !1),
            this.ui.find(".scrollable").each((t, e) => {
              this.scrollplugin = new jn(e.querySelector(".content"), e);
            }),
            this.ui.on(
              "click",
              ".close,.chat-menu-close",
              this.hide.bind(this)
            ),
            this.btn.on(
              "click",
              (t) => (
                this.visible && this.chat.isDesktop && s.input.focus(),
                this.toggle(t),
                !1
              )
            );
        }
        show() {
          this.visible ||
            ((this.visible = !0),
            (this.shown = !0),
            this.btn.find(".btn-icon").addClass("active"),
            this.ui.addClass("active"),
            this.redraw(),
            this.emit("show"));
        }
        hide() {
          this.visible &&
            ((this.visible = !1),
            this.btn.find(".btn-icon").removeClass("active"),
            this.ui.removeClass("active"),
            this.emit("hide"));
        }
        toggle() {
          const t = this.visible;
          Fn.closeMenus(this.chat), t || this.show();
        }
        redraw() {
          this.visible && this.scrollplugin && this.scrollplugin.reset();
        }
        static closeMenus(t) {
          t.menus.forEach((t) => t.hide());
        }
      }
      class Vn extends Fn {
        constructor(t, e, s) {
          super(t, e, s),
            (this.notificationEl = this.ui.find(
              "#chat-settings-notification-permissions"
            )),
            this.ui.on("change", 'input[type="checkbox"],select', (t) =>
              this.onSettingsChange(t)
            ),
            this.ui.on(
              "keypress blur",
              'textarea[name="customhighlight"]',
              (t) => this.onCustomHighlightChange(t)
            );
        }
        onCustomHighlightChange(t) {
          if ("focusout" === t.type || gt(t, 13)) {
            const e = o()(t.target)
              .val()
              .toString()
              .split(",")
              .map((t) => t.trim());
            this.chat.settings.set("customhighlight", [...new Set(e)]),
              this.chat.applySettings(!1),
              this.chat.commitSettings();
          }
        }
        onSettingsChange(t) {
          const e = this.getSettingValue(t.target),
            s = t.target.getAttribute("name");
          if (void 0 !== e) {
            switch (s) {
              case "profilesettings":
                !e &&
                  this.chat.authenticated &&
                  (0, i.hd)(
                    `${this.chat.config.api.base}/api/chat/me/settings`,
                    {
                      credentials: "include",
                      method: "DELETE",
                    }
                  ).catch();
                break;
              case "notificationwhisper":
              case "notificationhighlight":
                e &&
                  this.notificationPermission().then(() =>
                    this.updateNotification()
                  );
            }
            this.chat.settings.set(s, e),
              this.chat.applySettings(!1),
              this.chat.commitSettings();
          }
        }
        show() {
          this.visible ||
            (this.ui
              .find("input,select")
              .get()
              .filter((t) => this.chat.settings.has(t.getAttribute("name")))
              .forEach((t) =>
                this.setSettingValue(
                  t,
                  this.chat.settings.get(t.getAttribute("name"))
                )
              ),
            this.ui
              .find('textarea[name="customhighlight"]')
              .val(this.chat.settings.get("customhighlight") || ""),
            this.updateNotification()),
            super.show();
        }
        updateNotification() {
          const t = "default" === ft.permission ? "required" : ft.permission;
          this.notificationEl.text(`(Permission ${t})`);
        }
        notificationPermission() {
          return new Promise((t, e) => {
            switch (ft.permission) {
              case "default":
                ft.requestPermission((s) => {
                  "granted" === s ? t(s) : e(s);
                });
                break;
              case "granted":
                t(ft.permission);
                break;
              default:
                e(ft.permission);
            }
          });
        }
        getSettingValue(t) {
          if ("checkbox" === t.getAttribute("type")) {
            const e = o()(t).is(":checked");
            return Boolean(t.hasAttribute("data-opposite") ? !e : e);
          }
          if (
            "text" === t.getAttribute("type") ||
            "select" === t.nodeName.toLocaleLowerCase()
          )
            return o()(t).val();
        }
        setSettingValue(t, e) {
          "checkbox" === t.getAttribute("type")
            ? o()(t).prop(
                "checked",
                Boolean(t.hasAttribute("data-opposite") ? !e : e)
              )
            : ("text" !== t.getAttribute("type") &&
                "select" !== t.nodeName.toLocaleLowerCase()) ||
              o()(t).val(e);
        }
      }
      const _n = [
        {
          name: "Admin",
          flairs: ["admin"],
        },
        {
          name: "Moderator",
          flairs: ["moderator"],
        },
        {
          name: "Broadcaster",
          flairs: ["flair12"],
        },
        {
          name: "Vip",
          flairs: ["vip"],
        },
        {
          name: "Trusted User",
          flairs: ["flair4"],
        },
        {
          name: "Contributor",
          flairs: ["flair5", "flair16"],
        },
        {
          name: "Subscriber Tier 5",
          flairs: ["flair42"],
        },
        {
          name: "Subscriber Tier 4",
          flairs: ["flair8"],
        },
        {
          name: "Subscriber Tier 3",
          flairs: ["flair3"],
        },
        {
          name: "Subscriber Tier 2",
          flairs: ["flair1"],
        },
        {
          name: "Subscriber Tier 1",
          flairs: ["flair13"],
        },
        {
          name: "User",
          flairs: [],
        },
        {
          name: "Bot",
          flairs: ["bot", "flair11"],
          force: !0,
        },
      ];
      function qn(t, e) {
        const s = t.getAttribute("data-username").toLowerCase(),
          i = e.getAttribute("data-username").toLowerCase();
        return s < i ? -1 : s > i ? 1 : 0;
      }
      class Wn extends Fn {
        constructor(t, e, s) {
          super(t, e, s),
            (this.searchterm = ""),
            (this.searchcount = 0),
            (this.totalcount = 0),
            (this.flairSection = new Map()),
            (this.sections = new Map()),
            (this.header = this.ui.find("h5 span")),
            (this.container = this.ui.find(".content:first")),
            (this.searchinput = this.ui.find(
              "#chat-user-list-search .form-control:first"
            )),
            this.container.on("click", ".user-entry", (t) =>
              this.chat.userfocus.toggleFocus(
                t.currentTarget.getAttribute("data-username")
              )
            ),
            this.container.on("click", ".flair", (t) =>
              this.chat.userfocus.toggleFocus(
                t.target.getAttribute("data-flair"),
                !0
              )
            ),
            this.container.on("click", ".whisper-nick", (t) => {
              Fn.closeMenus(this.chat);
              const e = this.chat.input.val().toString().trim(),
                s = o()(t.target).parent().parent().data("username");
              return this.chat.input.val(`/whisper ${s} ${e}`).focus(), !1;
            }),
            this.container.on("contextmenu", ".users .user-entry", (t) => {
              const e = this.chat.menus.get("user-info");
              return !e || (e.showUser(t, o()(t.currentTarget)), !1);
            }),
            this.chat.source.on("JOIN", (t) => this.addAndRedraw(t)),
            this.chat.source.on("QUIT", (t) => this.removeAndRedraw(t)),
            this.chat.source.on("NAMES", (t) => this.addAll(t.users)),
            this.chat.source.on("UPDATEUSER", (t) => this.replaceAndRedraw(t)),
            this.searchinput.on(
              "keyup",
              (0, a.s)(
                100,
                () => {
                  (this.searchterm = this.searchinput.val()),
                    this.filter(),
                    this.redraw();
                },
                {
                  atBegin: !1,
                }
              )
            );
        }
        show() {
          super.show(), this.chat.isDesktop && this.searchinput.focus();
        }
        redraw() {
          if (this.visible) {
            const t = this.searchterm.length > 0;
            t && this.totalcount !== this.searchcount
              ? (this.header.text(
                  `Users (${this.searchcount} out of ${this.totalcount})`
                ),
                [...this.sections.values()].forEach((t) => {
                  o()(t.title).html(
                    `${t.searchcount} out of ${t.users.children.length} ${
                      t.data.name
                    }${
                      1 === t.users.children.length ? "" : "s"
                    }${this.buildFeatures(t.data.flairs)}`
                  ),
                    0 === t.searchcount
                      ? o()(t.container).hide()
                      : o()(t.container).show();
                }))
              : (this.header.text(`Users (${this.totalcount})`),
                [...this.sections.values()].forEach((t) => {
                  o()(t.title).html(
                    `${t.users.children.length} ${t.data.name}${
                      1 === t.users.children.length ? "" : "s"
                    }${this.buildFeatures(t.data.flairs)}`
                  ),
                    0 === t.users.children.length
                      ? o()(t.container).hide()
                      : o()(t.container).show();
                })),
              this.ui.toggleClass("search-in", t);
          }
          super.redraw();
        }
        buildFeatures(t) {
          const e = t
            .filter((t) => this.chat.flairsMap.has(t))
            .map((t) => this.chat.flairsMap.get(t))
            .sort((t, e) => t.priority - e.priority)
            .reduce(
              (t, e) =>
                `${t}<i data-flair="${e.name}" class="flair ${e.name}" title="${e.label}"></i> `,
              ""
            );
          return "" !== e ? `<span class="features">${e}</span>` : "";
        }
        addAll(t) {
          (this.totalcount = 0),
            this.container.empty(),
            (this.sections = new Map()),
            (this.flairSection = new Map()),
            _n.forEach((t) => {
              this.addSection(t),
                [...t.flairs].forEach((e) => this.flairSection.set(e, t.name));
            }),
            t.forEach((t) => this.addElement(t)),
            this.sort(),
            this.filter(),
            this.redraw();
        }
        addAndRedraw(t) {
          this.getElement(t) ||
            (this.addElement(t, !0), this.filter(), this.redraw());
        }
        removeAndRedraw(t) {
          const e = this.getElement(t);
          e && (this.removeElement(e), this.redraw());
        }
        replaceAndRedraw(t) {
          const e = this.getElement(t);
          e &&
            (this.removeElement(e),
            this.addElement(t, !0),
            this.filter(),
            this.redraw());
        }
        highestSection(t) {
          const e = [...this.flairSection.keys()];
          if (e.length > 0) {
            let s = e.length + 1;
            for (let i = 0; i < t.features.length; i++) {
              const n = e.indexOf(t.features[i]);
              if (n >= 0) {
                if (this.sections.get(this.flairSection.get(e[n])).data.force) {
                  s = n;
                  break;
                }
                n < s && (s = n);
              }
            }
            return s > e.length ? "User" : this.flairSection.get(e[s]);
          }
          return "User";
        }
        addSection(t) {
          const e = o()(
            `<div class="section" data-section="${t.name}"><p class="title">${t.name}</p><div class="users"></div></div>`
          );
          this.sections.set(t.name, {
            data: t,
            searchcount: 0,
            container: e[0],
            title: e[0].children[0],
            users: e[0].children[1],
          }),
            this.container.append(e);
        }
        removeElement(t) {
          t.remove(), (this.totalcount -= 1);
        }
        addElement(t, e = !1) {
          const s = new Et(t),
            i =
              s.displayName && "" !== s.displayName
                ? s.displayName
                : "Anonymous",
            n = 0 === s.features.length ? "nofeature" : s.features.join(" "),
            a = o()(
              `<div class="user-entry" data-username="${s.username}" data-user-id="${s.id}"><span class="user ${n}">${i}</span><div class="user-actions"><i class="whisper-nick" data-tippy-content="Whisper"></i></div></div>`
            );
          a.find("[data-tippy-content]").each(function () {
            Z(this, {
              content: this.getAttribute("data-tippy-content"),
              arrow: u,
              duration: 0,
              maxWidth: 250,
              hideOnClick: !1,
              theme: "dgg",
            });
          });
          const r = this.sections.get(this.highestSection(s));
          if (e && r.users.children.length > 0) {
            const t = r.users.children;
            let e = 0,
              s = t.length,
              i = Math.floor((e + s) / 2);
            for (; s > e; )
              qn.apply(this, [a[0], t[i]]) < 0 ? (s = i) : (e = i + 1),
                (i = Math.floor((e + s) / 2));
            i - 1 < 0 ? a.insertBefore(t[0]) : a.insertAfter(t[i - 1]);
          } else r.users.append(a[0]);
          this.totalcount += 1;
        }
        getElement(t) {
          return this.sections
            .get(this.highestSection(t))
            .users.querySelector(`.user-entry[data-user-id="${t.id}"]`);
        }
        filter() {
          (this.searchcount = 0),
            this.searchterm && this.searchterm.length > 0
              ? [...this.sections.values()].forEach((t) => {
                  (t.searchcount = 0),
                    [...o()(t.users.children)].forEach((e) => {
                      const s =
                        e
                          .getAttribute("data-username")
                          .toLowerCase()
                          .indexOf(this.searchterm.toLowerCase()) >= 0;
                      o()(e).toggleClass("found", s),
                        s && ((t.searchcount += 1), (this.searchcount += 1));
                    });
                })
              : this.container.children(".user-entry").removeClass("found");
        }
        sort() {
          [...this.sections.values()].forEach((t) => {
            [...o()(t.users.children).sort(qn.bind(this))].forEach((t) =>
              t.parentNode.appendChild(t)
            );
          });
        }
      }
      class Gn extends Fn {
        constructor(t, e, s) {
          super(t, e, s),
            (this.searchterm = ""),
            (this.emoteMenuContent = this.ui.find(".all .content")),
            (this.searchinput = this.ui.find(
              "#chat-emote-list-search .form-control:first"
            )),
            this.ui.on("click", ".emote", (t) => {
              t.currentTarget.classList.contains("disabled") ||
                (Fn.closeMenus(s), this.selectEmote(t.currentTarget.innerText));
            }),
            this.searchinput.on(
              "keyup",
              (0, a.s)(
                100,
                () => {
                  (this.searchterm = this.searchinput.val()),
                    this.buildEmoteMenu();
                },
                {
                  atBegin: !1,
                }
              )
            );
        }
        show() {
          super.show(),
            this.chat.isDesktop && this.searchinput.focus(),
            this.buildEmoteMenu();
        }
        buildEmoteMenu() {
          const t = [...this.chat.favoriteemotes].filter((t) =>
            this.chat.emoteService.hasEmote(t)
          );
          this.emoteMenuContent.empty(),
            this.chat.emoteService.tiers.forEach((e) => {
              const s = this.chat.emoteService.emotePrefixesForTier(e);
              if (!s.length) return;
              const i = 0 === e ? "All Users" : `Tier ${e} Subscribers`,
                n =
                  e > this.chat.user.subTier && !this.chat.user.isPrivileged();
              this.emoteMenuContent.append(
                this.buildEmoteMenuSection(
                  i,
                  s,
                  t.filter((t) => s.includes(t)),
                  n
                )
              );
            });
          const e = this.chat.emoteService.twitchEmotePrefixes;
          e.length &&
            this.emoteMenuContent.append(
              this.buildEmoteMenuSection("Twitch Subscribers", e)
            );
        }
        buildEmoteMenuSection(t, e, s, i = !1) {
          let n = "";
          return (
            s.length > 0 &&
              (n += s.map((t) => this.buildEmoteItem(t, !0, i)).join("")),
            (n += e
              .map((t) =>
                s.includes(t) ? null : this.buildEmoteItem(t, !1, i)
              )
              .join("")),
            "" !== n
              ? `<div>\n              <div id="emote-subscribe-note">${
                  i ? '<i class="lock"></i>' : ""
                }${t}</div>\n              <div class="emote-group${
                  i ? " disabled" : ""
                }">${n}</div>\n          </div>`
              : ""
          );
        }
        buildEmoteItem(t, e, s) {
          return this.searchterm && this.searchterm.length > 0
            ? t.toLowerCase().indexOf(this.searchterm.toLowerCase()) >= 0
              ? `<div class="emote-item${
                  e ? " favorite-emote" : ""
                }"><span title="${t}" class="emote ${t}${
                  s ? " disabled" : ""
                }">${t}</span></div>`
              : ""
            : `<div class="emote-item${
                e ? " favorite-emote" : ""
              }"><span title="${t}" class="emote ${t}${
                s ? " disabled" : ""
              }">${t}</span></div>`;
        }
        selectEmote(t) {
          const e = this.chat.input.val().toString().trim();
          this.chat.input.val(e + ("" === e ? "" : " ") + t + " "),
            this.chat.isDesktop && this.chat.input.focus();
        }
      }
      class zn extends Fn {
        constructor(t, e, s, i = null) {
          super(t, e, s),
            (this.ui = t),
            (this.btn = e),
            (this.chat = s),
            (this.draggable = i),
            (this.mousedown = !1),
            (this.x1 = 0),
            (this.x2 = 0),
            (this.y1 = 0),
            (this.y2 = 0),
            this.draggable?.length &&
              ((this.draggable[0].style.cursor = "grab"),
              this.draggable.on("mouseup", (t) => {
                t.preventDefault(), (this.mousedown = !1);
              }),
              this.draggable.on("mousedown", (t) => {
                t.preventDefault(),
                  (this.mousedown = !0),
                  (this.x1 = t.clientX),
                  (this.y1 = t.clientY);
              }),
              this.chat.output.on("mousemove", (t) => {
                this.drag(t);
              }),
              this.ui.on("mousemove", (t) => {
                this.drag(t);
              }));
        }
        drag(t) {
          this.mousedown
            ? ((this.x2 = this.x1 - t.clientX),
              (this.y2 = this.y1 - t.clientY),
              (this.x1 = t.clientX),
              (this.y1 = t.clientY),
              (this.draggable[0].style.cursor = "grabbing"),
              (this.ui[0].style.left = this.ui[0].offsetLeft - this.x2 + "px"),
              (this.ui[0].style.top = this.ui[0].offsetTop - this.y2 + "px"))
            : (this.draggable[0].style.cursor = "grab");
        }
        position(t) {
          this.mousedown = !1;
          const e =
              this.ui.width() + t.clientX > window.innerWidth
                ? window.innerWidth - this.ui.width()
                : t.clientX,
            s =
              this.ui.height() + t.clientY > window.innerHeight
                ? window.innerHeight - this.ui.height() - 12
                : t.clientY - 12;
          (this.ui[0].style.left = `${e}px`), (this.ui[0].style.top = `${s}px`);
        }
      }
      class Yn extends zn {
        constructor(t, e, s) {
          super(t, e, s),
            (this.ui.emote = this.ui.find(".emote-image")),
            (this.ui.name = this.ui.find(".emote-info .name")),
            (this.ui.creator = this.ui.find(".emote-info .creator")),
            (this.ui.tier = this.ui.find(".emote-info .tier")),
            (this.ui.favorite = this.ui.find(".emote-info .favorite")),
            this.chat.menus
              .get("emotes")
              .ui.on("contextmenu", ".emote", (t) => (this.contextmenu(t), !1)),
            this.chat.menus.get("emotes").ui.on("click", () => this.hide()),
            this.chat.output.on(
              "contextmenu",
              ".msg-chat .text .emote",
              (t) => (this.contextmenu(t), !1)
            ),
            this.ui.emote.on("click", ".emote", () => {
              const t = this.chat.input.val().toString().trim();
              this.chat.input.val(t + ("" === t ? "" : " ") + this.emote + " "),
                this.chat.isDesktop && this.chat.input.focus();
            }),
            this.ui.favorite.on("click", () => {
              const t = this.chat.toggleFavoriteEmote(this.emote);
              this.hide(), (this.favorite = t);
            });
        }
        contextmenu(t) {
          const e = o()(t.currentTarget).closest(".emote")[0].innerText,
            { creator: s, minimumSubTier: i } =
              this.chat.emoteService.getEmote(e) ?? {};
          (this.emote = e),
            (this.favorite = this.chat.favoriteemotes.has(e)),
            (this.creator = s),
            (this.tier = i),
            this.position(t),
            this.show();
        }
        set favorite(t) {
          this.ui.favorite.toggleClass("favorited", t),
            this.ui.favorite.attr(
              "title",
              t ? "Unfavorite emote" : "Favorite emote"
            );
        }
        get emote() {
          return this.ui.name.text();
        }
        set emote(t) {
          this.ui.name.text(t),
            this.ui.emote.html(`<div class="emote ${t}">${t}</div>`);
        }
        set creator(t) {
          this.ui.creator.text(t), this.ui.creator[t ? "show" : "hide"]();
        }
        set tier(t) {
          this.ui.tier.text(`Tier ${t}`),
            this.ui.tier[t > 0 ? "show" : "hide"]();
        }
      }
      class Kn extends Fn {
        constructor(t, e, s) {
          super(t, e, s),
            (this.unread = 0),
            (this.empty = o()('<span class="empty">No new whispers :(</span>')),
            (this.notif = o()(
              '<span id="chat-whisper-unread-indicator"></span>'
            )),
            this.btn.append(this.notif),
            (this.usersEl = t.find("ul:first")),
            this.usersEl.on("click", ".user", (t) =>
              s.openConversation(t.target.getAttribute("data-username"))
            ),
            this.usersEl.on("click", ".remove", (t) =>
              this.removeConversation(t.target.getAttribute("data-username"))
            );
        }
        removeConversation(t) {
          const e = t.toLowerCase();
          this.chat.whispers.delete(e),
            this.chat.removeWindow(e),
            this.redraw();
        }
        updateNotification() {
          const t = this.unread;
          (this.unread = [...this.chat.whispers.entries()]
            .map((t) => parseInt(t[1].unread, 10))
            .reduce((t, e) => t + e, 0)),
            t < this.unread &&
              (this.btn.addClass("ping"),
              setTimeout(() => this.btn.removeClass("ping"), 2e3)),
            this.notif.text(this.unread),
            this.notif.toggle(this.unread > 0);
          try {
            const t = window.parent.document.title.replace(/\([0-9]+\) /, "");
            window.parent.document.title =
              this.unread > 0 ? `(${this.unread}) ${t}` : `${t}`;
          } catch {}
        }
        redraw() {
          this.updateNotification(),
            this.visible &&
              (this.usersEl.empty(),
              0 === this.chat.whispers.size
                ? this.usersEl.append(this.empty)
                : [...this.chat.whispers.entries()]
                    .sort((t, e) =>
                      0 === t[1].unread ? 1 : 0 === e[1].unread ? -1 : 0
                    )
                    .forEach((t) => this.addConversation(t[0], t[1].unread))),
            super.redraw();
        }
        addConversation(t, e) {
          const s = this.chat.users.get(t.toLowerCase()) || new Et(t);
          this.usersEl.append(
            `\n            <li class="conversation unread-${e}">\n                <a style="flex: 1;" data-username="${s.username}" class="user">${s.displayName}</a>\n                <span class="badge">${e}</span>\n                <a data-username="${s.username}" title="Hide" class="remove"></a>\n            </li>\n        `
          );
        }
      }
      class Xn extends zn {
        constructor(t, e, s) {
          super(t, e, s, t.find(".toolbar")),
            (this.clickedNick = ""),
            (this.messageArray = []),
            (this.header = this.ui.find(".toolbar span")),
            (this.watchingSubheader = this.ui.find(
              ".user-info h5.watching-subheader"
            )[0]),
            (this.createdDateSubheader = this.ui.find(
              ".user-info h5.date-subheader"
            )[0]),
            (this.tagSubheader = this.ui.find(
              ".user-info h5.tag-subheader"
            )[0]),
            (this.flairList = this.ui.find(".user-info .flairs")),
            (this.flairSubheader = this.ui.find(
              ".user-info h5.flairs-subheader"
            )[0]),
            (this.messagesContainer = this.ui.find(".content .messages")),
            (this.messageHistoryStatus = this.ui.find(
              ".content .message-history-status"
            )),
            (this.noMessageNotice = this.ui.find(
              ".content .no-messages-notice"
            )),
            (this.muteUserBtn = this.ui.find("#mute-user-btn")),
            (this.banUserBtn = this.ui.find("#ban-user-btn")),
            (this.logsUserBtn = this.ui.find("#logs-user-btn")),
            (this.whisperUserBtn = this.ui.find("#whisper-user-btn")),
            (this.ignoreUserBtn = this.ui.find("#ignore-user-btn")),
            (this.unignoreUserBtn = this.ui.find("#unignore-user-btn")),
            (this.rustleUserBtn = this.ui.find("#rustle-user-btn")),
            (this.actionInputs = this.ui.find("#action-durations")),
            (this.muteDurations = ["1m", "10m", "1h", "1d"]),
            (this.banDurations = ["1d", "7d", "30d", "Perm"]),
            this.configureButtons(),
            this.chat.output.on("contextmenu", ".msg-chat .user", (t) => {
              if (t.currentTarget.classList.contains("tier")) return !1;
              const e = o()(t.currentTarget).closest(".msg-chat");
              return this.showUser(t, e), !1;
            }),
            this.chat.output.on("mouseup", ".msg-chat .user", (t) => {
              t.stopPropagation();
            }),
            this.chat.source.on("MSG", this.handleNewMessage.bind(this));
        }
        showUser(t, e) {
          (this.clickedNick = t.currentTarget.innerText.toLowerCase()),
            this.setActionsVisibility(),
            this.addContent(e),
            this.position(t),
            this.show();
        }
        configureButtons() {
          this.muteUserBtn.on("click", () => {
            this.chat.user.hasModPowers() &&
              (this.muteUserBtn.hasClass("active")
                ? this.setInputVisibility()
                : this.setInputVisibility("mute"));
          }),
            this.banUserBtn.on("click", () => {
              this.chat.user.hasModPowers() &&
                (this.banUserBtn.hasClass("active")
                  ? this.setInputVisibility()
                  : this.setInputVisibility("ban"));
            }),
            this.muteDurations.forEach((t) =>
              this.createDurationButtons(t, "mute")
            ),
            this.banDurations.forEach((t) =>
              this.createDurationButtons(t, "ban")
            ),
            this.whisperUserBtn.on("click", () => {
              this.chat.getWindow(this.clickedNick)
                ? this.chat.windowToFront(this.clickedNick)
                : (this.chat.whispers.has(this.clickedNick) ||
                    this.chat.whispers.set(this.clickedNick, {
                      nick: this.clickedNick,
                      unread: 0,
                      open: !1,
                    }),
                  this.chat.openConversation(this.clickedNick)),
                this.hide();
            }),
            this.logsUserBtn.on("click", () => {
              this.chat.cmdSTALK([this.clickedNick]), this.hide();
            }),
            this.ignoreUserBtn.on("click", () => {
              this.chat.ignore(this.clickedNick, !0),
                this.chat.removeMessageByNick(this.clickedNick),
                le.status(`Ignoring ${this.clickedNick}`).into(this.chat),
                this.hide();
            }),
            this.unignoreUserBtn.on("click", () => {
              this.chat.ignore(this.clickedNick, !1),
                le
                  .status(
                    `${this.clickedNick} has been removed from your ignore list`
                  )
                  .into(this.chat),
                this.hide();
            });
        }
        setActionsVisibility() {
          this.chat.user.hasModPowers()
            ? (this.muteUserBtn.toggleClass("hidden", !1),
              this.banUserBtn.toggleClass("hidden", !1))
            : (this.muteUserBtn.toggleClass("hidden", !0),
              this.banUserBtn.toggleClass("hidden", !0)),
            this.actionInputs.addClass("hidden"),
            this.banUserBtn.removeClass("active"),
            this.muteUserBtn.removeClass("active"),
            this.chat.ignoring.has(this.clickedNick.toLowerCase())
              ? (this.ignoreUserBtn.toggleClass("hidden", !0),
                this.unignoreUserBtn.toggleClass("hidden", !1))
              : (this.ignoreUserBtn.toggleClass("hidden", !1),
                this.unignoreUserBtn.toggleClass("hidden", !0)),
            this.rustleUserBtn.attr(
              "href",
              `https://rustlesearch.dev/?username=${encodeURIComponent(
                this.clickedNick
              )}`
            );
        }
        setInputVisibility(t) {
          switch (
            (this.actionInputs.removeClass("hidden"),
            this.banUserBtn.removeClass("active"),
            this.muteUserBtn.removeClass("active"),
            t)
          ) {
            case "ban":
              this.banUserBtn.addClass("active"),
                o()(".ban-duration-button").toggleClass("hidden", !1),
                o()(".mute-duration-button").toggleClass("hidden", !0),
                this.actionInputs.data("type", t);
              break;
            case "mute":
              this.muteUserBtn.addClass("active"),
                o()(".mute-duration-button").toggleClass("hidden", !1),
                o()(".ban-duration-button").toggleClass("hidden", !0),
                this.actionInputs.data("type", t);
              break;
            default:
              this.actionInputs.addClass("hidden");
          }
        }
        createDurationButtons(t, e) {
          const s = document.createElement("a");
          switch ((s.classList.add("chat-tool-btn"), e)) {
            case "ban":
              s.classList.add("ban-duration-button");
              break;
            case "mute":
              s.classList.add("mute-duration-button");
          }
          (s.textContent = t),
            s.addEventListener("click", () => this.processMuteOrBan(t)),
            this.actionInputs.append(s);
        }
        processMuteOrBan(t) {
          switch (this.actionInputs.data("type")) {
            case "ban":
              this.chat.cmdBAN(
                [
                  this.clickedNick,
                  t,
                  `${this.clickedNick} banned by ${this.chat.user.displayName}.`,
                ],
                "IPBAN"
              );
              break;
            case "mute":
              this.chat.cmdMUTE([this.clickedNick, t]);
          }
          this.hide();
        }
        addContent(t) {
          this.messageArray =
            t[0].querySelector(".text") && this.clickedNick !== t.data("giftee")
              ? [t]
              : [];
          const e = [...t[0].querySelectorAll(".user")].find(
              (t) =>
                t.innerText.toLowerCase() === this.clickedNick.toLowerCase()
            ),
            s = e.innerText,
            i = this.chat.taggednotes.get(this.clickedNick),
            n = e.classList.value,
            a = this.buildWatchingEmbed(this.clickedNick);
          "" !== a
            ? ((this.watchingSubheader.style.display = ""),
              this.watchingSubheader.replaceChildren(
                "Watching: ",
                o()(a).get()[0]
              ))
            : ((this.watchingSubheader.style.display = "none"),
              this.watchingSubheader.replaceChildren());
          const r = this.buildCreatedDate(this.clickedNick);
          r
            ? ((this.createdDateSubheader.style.display = ""),
              this.createdDateSubheader.replaceChildren("Joined on ", r))
            : ((this.createdDateSubheader.style.display = "none"),
              this.createdDateSubheader.replaceChildren(
                "Unable to display account creation date"
              )),
            i
              ? ((this.tagSubheader.style.display = ""),
                this.tagSubheader.replaceChildren("Tag: ", i))
              : ((this.tagSubheader.style.display = "none"),
                this.tagSubheader.replaceChildren());
          const c = this.buildFeatures(this.clickedNick, n);
          c
            ? (this.flairList.toggleClass("hidden", !1),
              (this.flairSubheader.style.display = ""))
            : (this.flairList.toggleClass("hidden", !0),
              (this.flairSubheader.style.display = "none")),
            this.header.text(""),
            this.header.attr("class", "username"),
            this.messagesContainer.empty(),
            this.updateNoMessagesNotice(!0),
            this.flairList.empty(),
            this.header.text(s),
            this.header.addClass(n),
            this.flairList.append(c),
            this.setMessageHistoryStatus("Loading history..."),
            this.loadMessageHistory(s)
              .then((t) => {
                t.forEach((t) => {
                  const e = this.buildMessageMarkup({
                    username: s,
                    messageText: t.messageText,
                    timestamp: t.timestamp,
                  });
                  this.messagesContainer.prepend(e);
                }),
                  this.updateNoMessagesNotice(),
                  this.setMessageHistoryStatus(null);
              })
              .catch((t) => {
                this.setMessageHistoryStatus(
                  `Failed to load history: ${t.message}`
                );
              })
              .finally(() => {
                this.redraw(), this.scrollplugin.scrollBottom();
              });
        }
        buildWatchingEmbed(t) {
          const e = this.chat.users.get(t);
          if (!e?.watching) return "";
          const s = this.chat.isBigscreenEmbed() ? "_top" : "_blank";
          return `<a href="${
            this.chat.config.dggOrigin + this.chat.bigscreenPath
          }#${e.watching.platform}/${e.watching.id}" target="${s}">${
            e.watching.id
          } on ${e.watching.platform}</a>`;
        }
        buildCreatedDate(t) {
          const e = this.chat.users.get(t.toLowerCase());
          if (!e?.createdDate) return "";
          const s = document.createElement("time");
          return (
            (s.className = "time"),
            (s.textContent = c()(e.createdDate).format("Do MMMM, YYYY h:mm a")),
            s.setAttribute("datetime", e.createdDate),
            s
          );
        }
        buildFeatures(t, e) {
          const s = this.chat.users.get(t),
            i = e.split(" ").filter((t) => "user" !== t && "subscriber" !== t),
            n =
              void 0 !== s
                ? this.buildFeatureHTML(
                    s.features.filter((t) => "subscriber" !== t) || []
                  )
                : this.buildFeatureHTML(i);
          return "" !== n ? `<span class="features">${n}</span>` : "";
        }
        async loadMessageHistory(t) {
          return this.chat.userMessageService.getUserMessages(t);
        }
        buildFeatureHTML(t) {
          return t
            .filter((t) => this.chat.flairsMap.has(t))
            .map((t) => this.chat.flairsMap.get(t))
            .reduce(
              (t, e) =>
                !0 !== e.hidden
                  ? `${t}<i class="flair ${e.name}" title="${e.label}"></i> `
                  : `${t}<div class="flair" title="${e.label}">${e.label}</div> `,
              ""
            );
        }
        buildMessageMarkup(t) {
          const e = new Et(t.username);
          return le.message(t.messageText, e, t.timestamp).html(this.chat);
        }
        handleNewMessage(t) {
          if (this.visible && t.nick?.toLowerCase() === this.clickedNick) {
            const e = this.buildMessageMarkup({
                username: t.nick,
                messageText: t.data,
                timestamp: t.timestamp,
              }),
              s = this.scrollplugin.pinned;
            this.messagesContainer.append(e),
              this.updateNoMessagesNotice(),
              s && this.scrollplugin.scrollBottom();
          }
        }
        setMessageHistoryStatus(t) {
          this.messageHistoryStatus.text(t),
            this.messageHistoryStatus.toggleClass("hidden", !t);
        }
        updateNoMessagesNotice(t = !1) {
          this.noMessageNotice.toggleClass("hidden", this.hasMessages() || t);
        }
        hasMessages() {
          return this.messagesContainer.children().length > 0;
        }
      }
      class Jn extends zn {
        constructor(t, e, s) {
          super(t, e, s),
            this.chat.ui.on(
              "click",
              ".msg-event .event-button",
              (t) => (this.openMenu(t), !1)
            ),
            this.ui.on(
              "click",
              "#remove-event-button",
              this.removeEvent.bind(this)
            );
        }
        openMenu(t) {
          (this.eventElement = t.currentTarget.closest(".msg-event")),
            this.position(t),
            this.show();
        }
        removeEvent() {
          this.emit("removeEvent", this.eventElement.dataset.uuid);
        }
      }
      class Zn extends bt {
        events = [];
        constructor() {
          super(),
            (this.eventBarUI = document.getElementById("chat-event-bar")),
            (this.eventSelectUI = document.getElementById(
              "chat-event-selected"
            )),
            this.eventBarUI.addEventListener("wheel", (t) => {
              0 === t.deltaX &&
                (t.preventDefault(),
                this.eventBarUI.scrollBy({
                  left: t.deltaY > 0 ? 30 : -30,
                }));
            }),
            this.eventSelectUI.addEventListener("click", (t) => {
              t.target === t.currentTarget &&
                (t.stopPropagation(), this.unselect());
            });
        }
        add(t, e = !0) {
          this.shouldEventBeDisplayed(t.data) &&
            (this.events.push(t),
            t.element.addEventListener("click", () => {
              this.eventSelectUI.querySelector(`[data-uuid='${t.data.uuid}']`)
                ? this.unselect()
                : this.select(t.selectedElement);
            }),
            t.on("eventExpired", this.removeEvent.bind(this)),
            e && t.element.classList.add("enter"),
            this.eventBarUI.prepend(t.element),
            t.startExpiry());
        }
        unselect() {
          this.isEventSelected() &&
            (this.eventSelectUI.replaceChildren(),
            this.eventSelectUI.classList.add("hidden"),
            this.emit("eventUnselected"));
        }
        select(t) {
          t.classList.add("event-bar-selected-message"),
            this.eventSelectUI.replaceChildren(),
            this.eventSelectUI.append(t),
            this.eventSelectUI.classList.remove("hidden"),
            this.emit("eventSelected");
        }
        isEventSelected() {
          return this.eventSelectUI.hasChildNodes();
        }
        contains(t) {
          return this.events.some((e) => e.uuid === t);
        }
        sort() {
          [...this.eventBarUI.children]
            .sort((t, e) =>
              Number(t.dataset.unixtimestamp) < Number(e.dataset.unixtimestamp)
                ? 1
                : -1
            )
            .forEach((t) => this.eventBarUI.appendChild(t));
        }
        shouldEventBeDisplayed(t) {
          if (this.contains(t.uuid)) return !1;
          const e = Date.now();
          return !(t.expirationTimestamp < e || t.fromMassGift);
        }
        removeEvent(t) {
          (this.events = this.events.filter((e) => e.uuid !== t.uuid)),
            t.remove();
        }
        removeAllEvents() {
          for (const t of this.events) t.remove(!1);
          this.events = [];
        }
        replaceEvents(t) {
          this.removeAllEvents();
          for (const e of t) this.add(e, !1);
        }
        get length() {
          return this.eventBarUI.querySelectorAll(".event-bar-event").length;
        }
      }
      let Qn;
      function to(t) {
        return (t.match(/[\S]/)[0] || "_").toLowerCase();
      }
      function eo(t, e) {
        if (!t || !e) return 0;
        if (t.isemote !== e.isemote) return t.isemote && !e.isemote ? -1 : 1;
        if (t.weight !== e.weight) return t.weight > e.weight ? -1 : 1;
        const s = t.data.toLowerCase(),
          i = e.data.toLowerCase();
        return s === i ? 0 : s > i ? 1 : -1;
      }
      function so(t, e) {
        let s = t.substring(0, e),
          i = t.substring(e),
          n = s.lastIndexOf(" ") + 1;
        const o = i.indexOf(" ");
        let a = !1;
        return (
          n > 0 && (s = s.substring(n)),
          o > -1 && (i = i.substring(0, o)),
          (0 !== s.lastIndexOf("@") && 0 !== s.lastIndexOf(">")) ||
            ((n += 1), (s = s.substring(1)), (a = !0)),
          {
            word: s + i,
            pre: s,
            post: i,
            startCaret: n,
            useronly: a,
            orig: t,
          }
        );
      }
      function io(t) {
        Qn && clearTimeout(Qn), (Qn = setTimeout(() => t.reset(), 15e3, t));
      }
      function no(t) {
        t.chat.ui.toggleClass("chat-autocomplete-in", t.results.length > 0),
          t.ui.toggleClass("active", t.results.length > 0),
          -1 === t.selected && t.container.css("left", 0);
      }
      function oo(t) {
        if (0 === t.results.length) return;
        const e = t.ui.find("li").get();
        e.forEach((e, s) => o()(e).toggleClass("active", s === t.selected));
        const s = t.container.width(),
          i = t.ui.width(),
          n = e[t.selected];
        if (i > s) return;
        const a = t.container.position().left,
          r = n.offsetLeft < -a,
          c = s - n.offsetLeft + 2 * n.clientWidth < i,
          h = n.offsetLeft + 2 * n.clientWidth > i;
        c
          ? t.container.css("left", -s + i)
          : h
          ? t.container.css("left", -n.offsetLeft - n.clientWidth / 2 + i / 2)
          : r && t.container.css("left", -n.offsetLeft);
      }
      var ao = class {
          constructor() {
            (this.ui = o()('<div id="chat-auto-complete"><ul></ul></div>')),
              this.ui.on("click", "li", (t) =>
                this.select(
                  parseInt(t.currentTarget.getAttribute("data-index"), 10)
                )
              ),
              (this.container = o()(this.ui[0].firstElementChild)),
              (this.buckets = new Map()),
              (this.results = []),
              (this.criteria = null),
              (this.selected = -1),
              (this.input = null);
          }
          bind(t) {
            (this.chat = t),
              (this.input = t.input),
              this.ui.insertBefore(t.input);
            let e = "",
              s = !1,
              i = !1;
            this.input.on("keydown", (i) => {
              if (((e = this.input.val().toString()), 9 === pt(i))) {
                if (this.results.length > 0)
                  this.select(
                    this.selected >= this.results.length - 1
                      ? 0
                      : this.selected + 1
                  );
                else if (
                  t.mentions.data.length > 0 &&
                  (function (t) {
                    const e = t.input.val().toString(),
                      s = e[t.input[0].selectionStart - 1];
                    return (
                      0 === e.length ||
                      /\s/.test(s) ||
                      (1 === e.length && ">" === s)
                    );
                  })(this)
                ) {
                  const e = this.input.val().toString(),
                    s = this.input[0].selectionStart;
                  (this.criteria = so(e, s)),
                    (this.selected = -1),
                    (this.results = t.mentions.data.map((t) => ({
                      data: t.user,
                      isemote: !1,
                      weight: t.timestamp.valueOf(),
                    }))),
                    this.buildHelpers(),
                    no(this),
                    io(this);
                }
                i.preventDefault(), i.stopPropagation();
              } else
                s !== i.shiftKey &&
                  null !== this.criteria &&
                  ((s = !!i.shiftKey), this.search(this.criteria, s));
            }),
              this.input.on("keypress", (t) => {
                const e = pt(t),
                  s = String.fromCharCode(e) || "";
                if (13 === e) this.promoteIfSelected(), this.reset();
                else if (s.length > 0) {
                  this.promoteIfSelected();
                  const t = this.input.val().toString(),
                    e = this.input[0].selectionStart,
                    n = so(t.substring(0, e) + s + t.substring(e), e + 1);
                  this.search(n),
                    this.results.length > 0 &&
                      this.results[0].data === n.word &&
                      ((this.selected = 0), oo(this), no(this)),
                    (i = !0);
                }
              }),
              this.input.on("keyup", (t) => {
                const n = pt(t);
                if (9 !== n && 13 !== n) {
                  const n = this.input.val().toString();
                  if (0 === n.trim().length) this.reset();
                  else if (i || n === e)
                    s !== t.shiftKey &&
                      null !== this.criteria &&
                      ((s = !!t.shiftKey), this.search(this.criteria, s));
                  else {
                    const t = so(n, this.input[0].selectionStart);
                    this.search(t);
                  }
                }
                (i = !1), (e = "");
              }),
              this.input.on("mouseup", () => {
                if (this.input[0].selectionStart !== this.input[0].selectionEnd)
                  return void this.reset();
                const t = so(
                  this.input.val().toString(),
                  this.input[0].selectionStart
                );
                this.search(t);
              });
          }
          search(t, e = !1) {
            if (
              ((this.selected = -1),
              (this.results = []),
              (this.criteria = t),
              t.word.length >= 1)
            ) {
              const s = this.buckets.get(to(t.word)) || new Map(),
                i = new RegExp(`^${jt(t.pre)}`, "i");
              this.results = [...s.values()]
                .filter(
                  (s) => (!s.isemote || !(t.useronly || e)) && i.test(s.data)
                )
                .sort(eo)
                .slice(0, 20);
            }
            this.buildHelpers(), no(this), io(this);
          }
          reset() {
            (this.criteria = null),
              (this.results = []),
              (this.selected = -1),
              no(this);
          }
          add(t, e = !1, s = 1) {
            const i = to(t),
              n = this.buckets.get(i) || this.buckets.set(i, new Map()).get(i),
              o = n.get(t);
            if (o && o.isemote) return o;
            const a = Object.assign(n.get(t) || {}, {
              data: t,
              weight: s,
              isemote: e,
            });
            return n.set(t, a), a;
          }
          remove(t, e = !1) {
            const s = this.buckets.get(to(t));
            if (s && s.has(t)) {
              const i = s.get(t);
              ((e && !i.isemote) || !e) && s.delete(t);
            }
          }
          select(t) {
            this.selected = Math.min(t, this.results.length - 1);
            const e = this.results[this.selected];
            if (!e) return;
            const s = this.criteria.orig.substr(0, this.criteria.startCaret);
            let i = this.criteria.orig.substr(
              this.criteria.startCaret + this.criteria.word.length
            );
            (" " === i[0] && 0 !== i.length) || (i = ` ${i}`),
              this.input.focus().val(s + e.data + i);
            const n = s.length + e.data.length + 1;
            this.input[0].setSelectionRange(n, n), oo(this), no(this);
          }
          promoteIfSelected() {
            this.selected >= 0 &&
              this.results[this.selected] &&
              (this.results[this.selected].weight = Date.now());
          }
          buildHelpers() {
            this.results.length > 0 &&
              (this.container[0].innerHTML = this.results
                .map((t, e) => `<li data-index="${e}">${t.data}</li>`)
                .join(""));
          }
        },
        ro = class {
          constructor(t) {
            (this.input = t.input),
              (this.history = Xt.read("chat.history") || []),
              (this.index = -1),
              (this.lastinput = ""),
              (this.maxentries = 20),
              this.input.on("keydown", (t) => {
                t.shiftKey ||
                t.metaKey ||
                t.ctrlKey ||
                (!gt(t, 38) && !gt(t, 40))
                  ? (this.index = -1)
                  : (this.show(gt(t, 38) ? -1 : 1),
                    t.preventDefault(),
                    t.stopPropagation());
              });
          }
          show(t) {
            if (this.index < 0) {
              if (-1 !== t) return;
              if (
                ((this.index = this.history.length),
                (this.lastinput = this.input.val().toString()),
                this.index <= 0)
              )
                return;
            }
            const e = this.index + t;
            let s = this.lastinput;
            e >= this.history.length || e < 0
              ? e >= this.history.length && (this.index = -1)
              : ((this.index = e), (s = this.history[e])),
              this.input.val(s);
          }
          add(t) {
            (this.index = -1),
              (this.history.length > 0 &&
                this.history[this.history.length - 1] === t) ||
                (this.history.push(t),
                this.history.length > this.maxentries &&
                  this.history.splice(0, this.history.length - this.maxentries),
                Xt.write("chat.history", this.history));
          }
        },
        co = class {
          constructor(t, e) {
            (this.chat = t),
              (this.css = e),
              (this.focused = []),
              this.chat.output.on("click", (t) => {
                this.toggleElement(t.target);
              });
          }
          toggleElement(t) {
            const e = o()(t);
            e.hasClass("chat-user")
              ? (this.chat.settings.get("focusmentioned") ||
                  this.toggleFocus(
                    e.closest(".msg-user").data("username"),
                    !1,
                    !0
                  ),
                this.toggleFocus(e.text()))
              : e.hasClass("user") && !e.hasClass("tier")
              ? this.toggleFocus(e.text())
              : e.hasClass("flair")
              ? this.toggleFocus(e.data("flair"), !0)
              : this.isFocused() && this.clearFocus();
          }
          toggleFocus(t = "", e = !1, s = !1) {
            const i = t.toLowerCase(),
              n = this.focused.indexOf(i);
            return (
              -1 !== n ? s || this.removeCssRule(n) : this.addCssRule(i, e),
              this
            );
          }
          isFocused() {
            return this.focused.length > 0;
          }
          addCssRule(t, e) {
            let s;
            (s = e
              ? `.msg-user.${t}{opacity:1 !important;}`
              : this.chat.settings.get("focusmentioned")
              ? `\n        .msg-death[data-username="${t}"], .msg-death[data-mentioned~="${t}"],\n        .msg-broadcast[data-username="${t}"], .msg-broadcast[data-mentioned~="${t}"],\n        .msg-subscription[data-username="${t}"], .msg-subscription[data-mentioned~="${t}"],\n        .msg-giftsub[data-username="${t}"], .msg-giftsub[data-mentioned~="${t}"], .msg-giftsub[data-giftee="${t}"],\n        .msg-massgift[data-username="${t}"], .msg-massgift[data-mentioned~="${t}"],\n        .msg-donation[data-username="${t}"], .msg-donation[data-mentioned~="${t}"],\n        .msg-pinned[data-username="${t}"], .msg-pinned[data-mentioned~="${t}"],\n        .msg-user[data-username="${t}"], .msg-user[data-mentioned~="${t}"] {\n          opacity:1 !important;\n        }\n      `
              : `\n        .msg-death[data-username="${t}"],\n        .msg-broadcast[data-username="${t}"], \n        .msg-subscription[data-username="${t}"], \n        .msg-giftsub[data-username="${t}"], .msg-giftsub[data-giftee="${t}"], \n        .msg-massgift[data-username="${t}"], \n        .msg-donation[data-username="${t}"],\n        .msg-pinned[data-username="${t}"], \n        .msg-user[data-username="${t}"] {\n          opacity:1 !important;\n        }\n      `),
              this.css.insertRule(s, this.focused.length),
              this.focused.push(t),
              this.redraw();
          }
          removeCssRule(t) {
            this.css.deleteRule(t), this.focused.splice(t, 1), this.redraw();
          }
          clearFocus() {
            this.focused.forEach(() => this.css.deleteRule(0)),
              (this.focused = []),
              this.redraw();
          }
          redraw() {
            this.chat.ui.toggleClass("focus", this.isFocused());
          }
        },
        ho = function (t, e) {
          if (e <= 0) {
            let e = Xt.read("chatoptions");
            e &&
              Object.keys(e).forEach((s) => {
                "highlightnicks" === s
                  ? t.settings.set("highlightnicks", Object.keys(e[s]))
                  : t.settings.set(s, e[s]);
              }),
              (e = Xt.read("chatignorelist")),
              e && t.settings.set("ignorenicks", Object.keys(e) || []),
              (e = Xt.read("chat.ignoring")),
              e && t.settings.set("ignorenicks", e),
              (e = Xt.read("inputhistory")),
              e && Xt.write("chat.history", e),
              (e = t.settings.get("allowNotifications")),
              null != e &&
                (t.settings.set("notificationwhisper", e),
                t.settings.set("notificationhighlight", e),
                t.settings.delete("allowNotifications")),
              (e = t.settings.get("notificationtimeout")),
              t.settings.set("notificationtimeout", -1 !== e),
              (e = null),
              Xt.remove("chatoptions"),
              Xt.remove("inputhistory"),
              Xt.remove("chatignorelist"),
              Xt.remove("hiddenhints"),
              Xt.remove("lasthinttime"),
              Xt.remove("unreadMessageCount"),
              Xt.remove("chat.shownhints"),
              Xt.remove("chat.ignoring");
          }
          if (e <= 1) {
            const e = !0 === t.settings.get("showremoved") ? 1 : 0;
            t.settings.set("showremoved", e);
          }
        };
      const lo = [
        "green",
        "yellow",
        "orange",
        "purple",
        "blue",
        "sky",
        "lime",
        "pink",
      ];
      var uo = class extends bt {
          constructor(t, e = "", s = "") {
            super(),
              (this.name = t),
              (this.label = s),
              (this.maxlines = 0),
              (this.linecount = 0),
              (this.locks = 0),
              (this.scrollplugin = null),
              (this.visible = !1),
              (this.tag = null),
              (this.lastmessage = null),
              (this.messages = []),
              (this.ui = o()(
                `<div id="chat-win-${t}" class="chat-output ${e}" style="display: none;"><div class="chat-lines"></div><div class="chat-scroll-notify">More messages below</div></div>`
              )),
              (this.lines = this.ui.get(0).querySelector(".chat-lines"));
          }
          destroy() {
            return this.ui.remove(), this.scrollplugin.destroy(), this;
          }
          into(t) {
            const e = this.name.toLowerCase();
            return (
              (this.maxlines = t.settings.get("maxlines")),
              (this.scrollplugin = new jn(
                this.lines,
                this.lines.parentElement
              )),
              (this.tag =
                t.taggednicks.get(e) ||
                lo[Math.floor(Math.random() * lo.length)]),
              t.output.append(this.ui),
              t.addWindow(e, this),
              this
            );
          }
          show() {
            this.visible ||
              ((this.visible = !0), this.emit("show"), this.ui.show());
          }
          hide() {
            this.visible &&
              ((this.visible = !1), this.emit("hide"), this.ui.hide());
          }
          addMessage(t, e) {
            (e.ui = e.html(t)),
              e.afterRender(t),
              this.lines.append(e.ui),
              this.messages.push(e),
              (this.lastmessage = e),
              (this.linecount += 1),
              this.cleanupThrottle();
          }
          containsMessage(t) {
            return this.messages.find((e) =>
              e.type === St.EMOTE ? e.containsMessage(t) : e.md5 === t.md5
            );
          }
          getlines(t) {
            return this.lines.querySelectorAll(t);
          }
          removelines(t) {
            const e = this.lines.querySelectorAll(t);
            (this.linecount -= e.length),
              e.forEach((t) => {
                t.remove();
              });
          }
          update(t) {
            this.scrollplugin.update(t);
          }
          cleanup() {
            if (this.scrollplugin.wasPinned) {
              const t = [...this.lines.children];
              if (t.length >= this.maxlines) {
                const e = t.slice(0, t.length - this.maxlines);
                (this.linecount -= e.length),
                  e.forEach((t) => {
                    t.remove();
                  }),
                  (this.messages = this.messages.slice(
                    t.length - this.maxlines
                  ));
              }
            }
          }
          isScrollPinned() {
            return this.scrollplugin.pinned;
          }
          scrollBottom() {
            this.scrollplugin.scrollBottom();
          }
          updateMessages(t) {
            for (const [e, s] of this.messages.entries()) {
              if (
                (s.type !== St.UI && s.updateTimeFormat(), s.user?.isSystem())
              )
                continue;
              const i = s.user?.username;
              [St.UI, St.INFO, St.ERROR, St.STATUS].includes(s.type) ||
                s.ignore(t.ignored(i, s.message)),
                i &&
                  (s.setOwnMessage(i === t.user.username),
                  s.highlight(t.shouldHighlightMessage(s)),
                  s.type === St.USER &&
                    (s.setContinued(this.isContinued(s, this.messages[e - 1])),
                    s.setSlashMe(s.slashme),
                    s.setTag(t.taggednicks.get(i))),
                  s.setTagTitle(t.taggednotes.get(i) ?? ""),
                  s.setWatching(t.user),
                  s.moderated &&
                    s.censor(
                      parseInt(t.settings.get("showremoved") || "1", 10)
                    ));
            }
          }
          removeLastMessage() {
            this.lastmessage.remove(),
              (this.messages = this.messages.filter(
                (t) => t !== this.lastmessage
              ));
          }
          isContinued(t, e = this.lastmessage) {
            return (
              e &&
              !e.target &&
              e.user &&
              (!e.ignored || e.continued) &&
              e.user.username === t.user.username
            );
          }
          cleanupThrottle = (0, a.n)(50, this.cleanup);
        },
        mo = "ADMIN",
        po = "MODERATOR",
        go = "HOST";
      const fo = /\bor\b/i,
        bo = /^(how|why|when|what|where)\b/i,
        vo = /\b([0-9]+(?:m|s))$/i;
      function wo(t) {
        let e;
        const s = t.match(vo);
        if (s && s[0])
          switch (s[0].replace(/[0-9]+/, "").toLowerCase()) {
            case "s":
              e = 1e3 * parseInt(s[0], 10);
              break;
            case "m":
              e = 60 * parseInt(s[0], 10) * 1e3;
              break;
            default:
              e = 3e4;
          }
        else e = 3e4;
        const i = (function (t) {
          if (-1 === t.indexOf("?")) throw new Error("Must contain a ?");
          const e = t.split("?"),
            s = `${e[0]}?`;
          if ("" !== e[1].trim()) {
            const t = e[1].split(fo).map((t) => t.trim());
            if (t.length < 2 && s.match(bo))
              throw new Error("question needs at least 2 available answers");
            return {
              question: s,
              options: t,
            };
          }
          return {
            question: s,
            options: ["Yes", "No"],
          };
        })(t.replace(vo, "").trim());
        return (i.time = Math.max(5e3, Math.min(e, 6e5))), i;
      }
      class yo {
        constructor(t) {
          (this.chat = t),
            (this.ui = this.chat.ui.find("#chat-poll-frame")),
            (this.ui.title = this.ui.find(".poll-info")),
            (this.ui.votes = this.ui.find(".poll-votes")),
            (this.ui.question = this.ui.find(".poll-question")),
            (this.ui.options = this.ui.find(".poll-options")),
            (this.ui.timer = this.ui.find(".poll-timer-inner")),
            (this.ui.endmsg = this.ui.find(".poll-end")),
            (this.poll = null),
            (this.voting = !1),
            (this.hidden = !0),
            (this.timerHidePoll = -1),
            this.ui.on("click touch", ".poll-close", () => this.hide()),
            this.ui.on("click touch", ".opt", (t) => {
              this.voting &&
                (this.poll.canVote
                  ? this.chat.source.send("CASTVOTE", {
                      vote: `${o()(t.currentTarget).index() + 1}`,
                    })
                  : le.error("You have already voted!").into(this.chat));
            }),
            (this.throttleVoteCast = (0, a.n)(100, () => {
              this.updateBars();
            }));
        }
        hide() {
          this.hidden ||
            ((this.hidden = !0),
            this.ui.removeClass("active"),
            this.chat.mainwindow.update());
        }
        show() {
          this.hidden &&
            ((this.hidden = !1),
            this.ui.addClass("active"),
            this.chat.mainwindow.update());
        }
        isPollStarted() {
          return this.voting;
        }
        hasPermission(t) {
          return (
            t.hasAnyFeatures(yt.ADMIN, yt.BOT, yt.MODERATOR) ||
            t.hasRole("POLLS")
          );
        }
        isMsgVoteCastFmt(t) {
          if (t.match(/^[0-9]+$/i)) {
            const e = parseInt(t, 10);
            return e > 0 && e <= this.poll.options.length;
          }
          return !1;
        }
        castVote(t) {
          (this.poll.totals[t.vote - 1] += t.quantity),
            (this.poll.votesCast += t.quantity),
            this.throttleVoteCast(t.vote);
        }
        startPoll(t) {
          (this.voting = !0),
            clearTimeout(this.timerHidePoll),
            (this.poll = {
              canVote: t.canvote,
              myVote: t.myvote,
              type: t.weighted ? 1 : 0,
              start: new Date(t.start),
              offset: new Date(t.now).getTime() - new Date().getTime(),
              time: t.time,
              question: t.question,
              options: t.options,
              totals: t.totals,
              user: t.nick,
              votesCast: t.totalvotes,
            }),
            this.reset(),
            this.ui.title.text(
              `${
                1 === this.poll.type ? "Sub-weighted poll" : "Poll"
              } started by ${this.poll.user} for ${Math.floor(
                this.poll.time / 1e3
              )} seconds.`
            ),
            this.ui.question.text(this.poll.question),
            this.ui.options.html(
              this.poll.options
                .map(
                  (t, e) =>
                    `\n        <div class="opt" title="Vote ${t}">\n          <div class="opt-info">\n            <span class="opt-vote-number">\n              <strong>${
                      e + 1
                    }</strong>\n            </span>\n            <span class="opt-bar-option">${t}</span>\n            <span class="opt-bar-value"></span>\n          </div>\n          <div class="opt-bar">\n            <div class="opt-bar-inner" style="width: 0;"></div>\n          </div>\n        </div>\n      `
                )
                .join("")
            ),
            this.pollStartMessage(),
            this.updateTimer(),
            this.updateBars(),
            0 !== this.poll.myVote && this.markVote(this.poll.myVote),
            this.show();
        }
        reset() {
          this.ui.removeClass("poll-completed"),
            this.ui.timer.css("transition", "none"),
            this.ui.timer.css("width", "100%"),
            this.ui.endmsg.hide(),
            this.ui.timer.parent().show();
        }
        endPoll() {
          (this.voting = !1),
            clearTimeout(this.timerHidePoll),
            this.markWinner(),
            this.ui.timer.parent().hide(),
            this.ui.endmsg
              .text(`Poll ended! ${this.poll.votesCast} votes cast.`)
              .show(),
            this.ui.addClass("poll-completed"),
            (this.timerHidePoll = setTimeout(() => this.hide(), 7e3));
        }
        markWinner() {
          o()(".opt-winner").removeClass("opt-winner");
          const t = this.poll.totals.reduce(
            (t, e, s, i) => (e > i[t] ? s : t),
            0
          );
          this.ui.options.children().eq(t).addClass("opt-winner"),
            this.pollEndMessage(
              t + 1,
              this.ui.options.children().eq(t).data("percentage")
            );
        }
        markVote(t) {
          (this.poll.canVote = !1),
            this.ui.options
              .children()
              .eq(t - 1)
              .addClass("opt-marked");
        }
        updateTimer() {
          let t =
            this.poll.time -
            (new Date().getTime() +
              this.poll.offset -
              this.poll.start.getTime());
          t = Math.max(0, Math.floor(Math.min(t, this.poll.time)));
          const e = Math.max(0, (t / this.poll.time) * 100 - 1);
          this.ui.timer.css("width", `${e}%`),
            this.ui.timer.css("transition", `width ${t - 1}ms linear`),
            setTimeout(() => this.ui.timer.css("width", "0%"), 1);
        }
        updateBars() {
          this.voting &&
            this.poll.options.forEach((t, e) => {
              const s =
                this.poll.votesCast > 0
                  ? (this.poll.totals[e] / this.poll.votesCast) * 100
                  : 0;
              this.ui.options.children().eq(e).attr("data-percentage", `${s}`),
                this.ui.options
                  .children()
                  .eq(e)
                  .find(".opt-bar-inner")
                  .css("width", `${s}%`),
                this.ui.options
                  .children()
                  .eq(e)
                  .find(".opt-bar-value")
                  .text(`${Math.round(s)}% (${this.poll.totals[e]} votes)`);
            }),
            this.ui.votes.text(`${this.poll.votesCast} votes`);
        }
        pollStartMessage() {
          let t = `A poll has been started. Type ${this.poll.totals
            .map((t, e) => e + 1)
            .join(" or ")} in chat to participate.`;
          1 === this.poll.type &&
            (t = `A sub-weighted poll has been started. The value of your vote depends on your subscription tier. Type ${this.poll.totals
              .map((t, e) => e + 1)
              .join(" or ")} in chat to participate.`),
            le.info(t).into(this.chat);
        }
        pollEndMessage(t, e) {
          let s = `The poll has ended. Option ${t} won!`;
          e > 0 &&
            (s = `The poll has ended. Option ${t} won with ${Math.round(
              e
            )}% of the vote.`),
            le.info(s).into(this.chat);
        }
      }
      function Eo(t) {
        if (void 0 === t.timestamp || void 0 === t.duration) return null;
        const e = c()(),
          s = c()(t.timestamp);
        return s.add(t.duration, "seconds"), s.isAfter(e);
      }
      class So {
        constructor(t) {
          (this.chat = t), (this.ticking = !1), (this.duration = null);
        }
        startTimer() {
          !this.ticking &&
            this.duration &&
            ((this.ticking = !0),
            this.updatePlaceholderText(),
            (this.timerInterval = setInterval(() => this.tickTimer(), 1e3)));
        }
        tickTimer() {
          (this.duration = this.duration.subtract(1, "seconds")),
            this.duration.asSeconds() <= 0
              ? this.stopTimer()
              : this.updatePlaceholderText();
        }
        stopTimer() {
          this.ticking &&
            ((this.ticking = !1),
            clearInterval(this.timerInterval),
            (this.duration = null),
            this.chat.setDefaultPlaceholderText());
        }
        setTimer(t = 0) {
          this.duration = c().duration(t, "seconds");
        }
        updatePlaceholderText() {
          "main" === this.chat.getActiveWindow().name &&
            this.chat.input.attr("placeholder", this.getPlaceholderText());
        }
        getPlaceholderText() {
          return `Sorry, ${
            this.chat.user.displayName
          }, you are muted. You can chat again ${this.getReadableDuration()}.`;
        }
        getReadableDuration() {
          return this.duration.humanize(!0, {
            s: 60,
            ss: 2,
          });
        }
      }
      class ko {
        tiers = new Set();
        emotesMapped = new Map();
        emotes = [];
        regexForEmotes(t) {
          const e = t.map((t) => t.prefix);
          return new RegExp(`(^|\\s)(${e.join("|")})(?=$|\\s)`, "gm");
        }
        emoteRegexForUser(t) {
          const e = this.emotesForUser(t);
          return this.regexForEmotes(e);
        }
        emotesForUser(t) {
          if (t.isPrivileged()) return this.emotes;
          let e = this.emotes.filter(
            (e) => e.minimumSubTier <= t.subTier && !e.twitch
          );
          return (
            t.isTwitchSub() &&
              (e = e.concat(this.emotes.filter((t) => t.twitch))),
            e
          );
        }
        get prefixes() {
          return this.emotes.map((t) => t.prefix);
        }
        get systemEmoteRegex() {
          return this.regexForEmotes(this.emotes);
        }
        get twitchEmotePrefixes() {
          return this.emotes.filter((t) => t.twitch).map((t) => t.prefix);
        }
        hasEmote(t) {
          return this.emotesMapped.has(t);
        }
        getEmote(t) {
          return this.emotesMapped.get(t);
        }
        setEmotes(t) {
          (this.emotes = t),
            t.forEach((t) => {
              this.tiers.add(t.minimumSubTier),
                this.emotesMapped.set(t.prefix, t);
            }),
            (this.tiers = Array.from(this.tiers).sort((t, e) => t - e));
        }
        emotePrefixesForTier(t) {
          return this.emotes
            .filter((e) => e.minimumSubTier === t && !e.twitch)
            .map((t) => t.prefix);
        }
        canUserUseEmote(t, e) {
          const s = this.getEmote(e);
          return !!s && t.subTier >= s.minimumSubTier;
        }
      }
      class To {
        async getLogs(t, e, s, i) {
          const n = new URL("/anon/search", "https://api-v2.rustlesearch.dev");
          if (
            (n.searchParams.set("username", t),
            n.searchParams.set("channel", e),
            s)
          ) {
            const t = s.toISOString().split("T")[0];
            n.searchParams.set("start_date", t);
          }
          if (i) {
            const t = i.toISOString().split("T")[0];
            n.searchParams.set("end_date", t);
          }
          const o = await fetch(n.toString());
          let a;
          try {
            a = await o.json();
          } catch (t) {
            throw new Error("Invalid JSON");
          }
          if ("Success" !== a.type) throw new Error(a.error);
          return a.data.messages;
        }
      }
      class xo {
        constructor(t) {
          this.apiClient = t ?? new To();
        }
        transformMessages(t) {
          return t.map((t) => ({
            username: t.username,
            messageText: t.text,
            timestamp: new Date(t.ts).getTime(),
          }));
        }
        async getUserMessages(t, e = 50) {
          const s = await this.apiClient.getLogs(t, "Destinygg");
          return this.transformMessages(s).slice(0, e);
        }
      }
      class Oo {
        async getOEmbed(t) {
          const e = new URL("/oembed", "https://youtube.com");
          e.searchParams.set("url", `https://youtu.be/${t}`);
          const s = await fetch(e.toString());
          try {
            return await s.json();
          } catch (t) {
            throw new Error("Invalid JSON");
          }
        }
      }
      const $o = "Available commands: \n",
        Ao = "Available admin commands: \n",
        No = [
          {
            name: "addphrase",
            description: "Add a banned phrase to chat.",
            alias: ["addban", "addmute"],
            admin: !0,
          },
          {
            name: "ban",
            description: "Stop <nick> from connecting to the chat.",
            admin: !0,
          },
          {
            name: "baninfo",
            description: "Check your ban status.",
          },
          {
            name: "broadcast",
            description:
              "Send a system-wide message to all users present in the chat.",
            admin: !0,
          },
          {
            name: "die",
            description: "Mute yourself for 10 minutes.",
            alias: ["suicide", "bitly"],
          },
          {
            name: "embed",
            description: "Embed a video to bigscreen.",
            alias: ["e"],
          },
          {
            name: "emotes",
            description: "Return all emotes in text form.",
          },
          {
            name: "exit",
            description: "Exit the conversation you have open.",
          },
          {
            name: "help",
            description: "List all chat commands.",
          },
          {
            name: "highlight",
            description:
              "Highlight messages from <nick> for easier visibility.",
          },
          {
            name: "host",
            description: "Host a livestream, video, or vod to bigscreen.",
            admin: !0,
          },
          {
            name: "ignore",
            description: "Stop showing messages from <nick>.",
          },
          {
            name: "maxlines",
            description:
              "Set the maximum number of <lines> the chat will store.",
          },
          {
            name: "me",
            description: "Send an action message in italics.",
          },
          {
            name: "mentions",
            description: "Return a list of messages where <nick> is mentioned.",
            alias: ["m"],
          },
          {
            name: "message",
            description: "Send a whisper to <nick>.",
            alias: ["msg", "whisper", "w", "tell", "t", "notify"],
          },
          {
            name: "mute",
            description: "Stop <nick> from sending messages.",
            admin: !0,
          },
          {
            name: "open",
            description: "Open a conversation with a user.",
            alias: ["o"],
          },
          {
            name: "pin",
            description: "Pin a message to chat.",
            alias: ["motd"],
            admin: !0,
          },
          {
            name: "poll",
            description: "Start a poll.",
            alias: ["vote"],
          },
          {
            name: "pollstop",
            description: "Stop a poll you started.",
            alias: ["votestop"],
          },
          {
            name: "postembed",
            description: "Post a video embed in chat.",
            alias: ["pe"],
          },
          {
            name: "reloadusers",
            description: "Reload all users in chat.",
            admin: !0,
          },
          {
            name: "removephrase",
            description: "Remove a banned phrase from chat.",
            alias: [
              "removeban",
              "removemute",
              "deletephrase",
              "deleteban",
              "deletemute",
              "dmute",
              "dban",
              "dphrase",
            ],
            admin: !0,
          },
          {
            name: "reply",
            description: "Reply to the last whisper you received.",
            alias: ["r"],
          },
          {
            name: "showpoll",
            description: "Show last poll.",
            alias: ["showvote"],
          },
          {
            name: "spoll",
            description: "Start a sub-weighted poll.",
            alias: ["svote"],
          },
          {
            name: "stalk",
            description: "Return a list of messages from <nick>.",
            alias: ["s"],
          },
          {
            name: "subonly",
            description: "Turn the subscribers-only chat mode <on> or <off>.",
            admin: !0,
          },
          {
            name: "tag",
            description: "Mark <nick>'s messages.",
          },
          {
            name: "timestampformat",
            description: "Set the time format of the chat.",
          },
          {
            name: "unban",
            description: "Unban <nick>.",
            admin: !0,
          },
          {
            name: "unhighlight",
            description: "Unhighlight <nick>.",
          },
          {
            name: "unhost",
            description: "Remove hosted content from bigscreen.",
            admin: !0,
          },
          {
            name: "unignore",
            description: "Remove <nick> from your ignore list.",
          },
          {
            name: "unignoreall",
            description: "Remove all users from your ignore list.",
          },
          {
            name: "unmute",
            description: "Unmute <nick>.",
            admin: !0,
          },
          {
            name: "unpin",
            description: "Unpin a message from chat.",
            alias: ["unmotd"],
            admin: !0,
          },
          {
            name: "untag",
            description: "Untag <nick>.",
          },
        ];
      class Mo {
        generateAutocomplete(t = null) {
          return No.filter((e) => t || !e.admin)
            .map((t) => [`/${t.name}`, ...(t.alias || []).map((t) => `/${t}`)])
            .flat();
        }
        generateUserHelpStrings() {
          return [
            $o,
            ...No.filter((t) => !t.admin).map((t) => this.formatHelpString(t)),
          ].join("");
        }
        generateAdminHelpStrings() {
          return [
            Ao,
            ...No.filter((t) => t.admin).map((t) => this.formatHelpString(t)),
          ].join("");
        }
        formatHelpString(t) {
          return t.alias
            ? ` /${t.name}, /${t.alias.join(", /")} - ${t.description} \n`
            : ` /${t.name} - ${t.description} \n`;
        }
      }
      function Co(t) {
        return t?.replace(Lt, "").trim();
      }
      class Lo extends bt {
        constructor(t, e, s) {
          super(),
            (this.type = e),
            (this.data = s),
            (this.element = this.buildElement(t));
        }
        buildElement(t) {
          const e = document
            .querySelector("#event-bar-event-template")
            ?.content.cloneNode(!0).firstElementChild;
          e.classList.add(this.type.toLowerCase()),
            (e.dataset.uuid = this.data.uuid),
            (e.dataset.unixtimestamp = this.data.timestamp);
          const s = new Et(this.data.user),
            i = e.querySelector(".user"),
            n = _t(t.flairs, s);
          switch (
            (n && i.classList.add(n.name),
            (i.textContent = s.displayName),
            e
              .querySelector(".event-icon")
              .classList.add(this.type.toLowerCase()),
            this.type)
          ) {
            case St.SUBSCRIPTION:
            case St.GIFTSUB:
            case St.MASSGIFT: {
              const { rainbowColor: s, tierColor: i } = ie(
                this.data.tier,
                t.flairs
              );
              i && (e.style.borderColor = i),
                s && e.classList.add("rainbow-border");
              break;
            }
            case St.DONATION: {
              const t = ee(this.data.amount);
              e.classList.add(t[0]);
              break;
            }
          }
          return (this.selectedElement = this.buildSelected().html(t)), e;
        }
        startExpiry() {
          (this.expiryPercentage = this.calculateExpiryPercentage()),
            (this.intervalID = setInterval(() => {
              const t = this.calculateExpiryPercentage();
              t <= 0 ? this.expire() : (this.expiryPercentage = t);
            }, 1e3));
        }
        calculateExpiryPercentage() {
          const t = Date.now();
          return (
            (100 * (this.data.expirationTimestamp - t)) /
            (this.data.expirationTimestamp - this.data.timestamp)
          );
        }
        get expiryPercentage() {
          return Number(this.element.dataset.percentageLeft);
        }
        set expiryPercentage(t) {
          (this.element.dataset.percentageLeft = t),
            (this.element.querySelector(
              ".event-contents"
            ).style.background = `linear-gradient(90deg, #282828, #282828 ${t}%, #151515 ${t}%, #151515)`);
        }
        buildSelected() {
          switch (this.type) {
            case St.SUBSCRIPTION:
              return le.subscription(this.data);
            case St.GIFTSUB:
              return le.gift(this.data);
            case St.MASSGIFT:
              return le.massgift(this.data);
            case St.DONATION:
              return le.donation(this.data);
            default:
              return;
          }
        }
        expire() {
          this.stopUpdatingExpirationProgressBar(),
            this.emit("eventExpired", this);
        }
        remove(t = !0) {
          this.stopUpdatingExpirationProgressBar(),
            t
              ? (this.element.addEventListener("animationend", () => {
                  this.element.remove();
                }),
                this.element.classList.add("removed"))
              : this.element.remove();
        }
        stopUpdatingExpirationProgressBar() {
          this.intervalID && clearInterval(this.intervalID);
        }
        get uuid() {
          return this.data.uuid;
        }
      }
      var Io = class {
          data = [];
          processMessage(t) {
            t.highlighted &&
              !t.ignored &&
              this.add(t.user.displayName, t.timestamp);
          }
          add(t, e) {
            const s = this.data.findIndex((e) => e.user === t);
            s >= 0 && this.data.splice(s, 1),
              this.data.unshift({
                user: t,
                timestamp: e,
              }),
              this.data.length > 10 && this.data.pop();
          }
          resimulateMessages(t) {
            const e = t.reduce(
              (t, e) => Math.min(t, e.timestamp?.valueOf()),
              1 / 0
            );
            this.data = this.data.filter((t) => t.timestamp.valueOf() < e);
            for (const e of t) this.processMessage(e);
          }
        },
        Ro = class {
          constructor(t) {
            (this.config = {
              url: "",
              api: {
                base: "",
              },
              cdn: {
                base: "",
              },
              cacheKey: "",
              banAppealUrl: null,
              amazonTags: null,
              welcomeMessage: "Welcome to chat!",
              stalkEnabled: !0,
              mentionsEnabled: !0,
              dggOrigin: "",
              ...t,
            }),
              (this.ui = null),
              (this.css = null),
              (this.output = null),
              (this.input = null),
              (this.subonlyicon = null),
              (this.loginscrn = null),
              (this.loadingscrn = null),
              (this.showmotd = !0),
              (this.subonly = !1),
              (this.authenticated = !1),
              (this.backlogloading = !1),
              (this.unresolved = []),
              (this.flairs = []),
              (this.flairsMap = new Map()),
              (this.emoteService = new ko()),
              (this.userMessageService = new xo()),
              (this.youtubeOEmbedService = new Oo()),
              (this.user = new Et()),
              (this.users = new Map()),
              (this.whispers = new Map()),
              (this.windows = new Map()),
              (this.settings = new Map(mt)),
              (this.commands = new Mo()),
              (this.autocomplete = new ao()),
              (this.mentions = new Io()),
              (this.menus = new Map()),
              (this.taggednicks = new Map()),
              (this.taggednotes = new Map()),
              (this.ignoring = new Set()),
              (this.favoriteemotes = new Set()),
              (this.mainwindow = null),
              (this.regexhighlightcustom = null),
              (this.regexhighlightnicks = null),
              (this.regexhighlightself = null),
              (this.replyusername = null),
              (this.watchingfocus = !1),
              (this.control = new bt(this)),
              (this.hashLinkConverter = new Ct()),
              (this.source = new wt()),
              this.source.on("PING", (t) => this.source.send("PONG", t)),
              this.source.on("CONNECTING", (t) => this.onCONNECTING(t)),
              this.source.on("ME", (t) => this.onME(t)),
              this.source.on("OPEN", (t) => this.onOPEN(t)),
              this.source.on("DISPATCH", (t) => this.onDISPATCH(t)),
              this.source.on("CLOSE", (t) => this.onCLOSE(t)),
              this.source.on("NAMES", (t) => this.onNAMES(t)),
              this.source.on("HISTORY", (t) => this.onHISTORY(t)),
              this.source.on("PIN", (t) => this.onPIN(t)),
              this.source.on("QUIT", (t) => this.onQUIT(t)),
              this.source.on("MSG", (t) => this.onMSG(t)),
              this.source.on("MUTE", (t) => this.onMUTE(t)),
              this.source.on("UNMUTE", (t) => this.onUNMUTE(t)),
              this.source.on("BAN", (t) => this.onBAN(t)),
              this.source.on("UNBAN", (t) => this.onUNBAN(t)),
              this.source.on("ERR", (t) => this.onERR(t)),
              this.source.on("SOCKETERROR", (t) => this.onSOCKETERROR(t)),
              this.source.on("SUBONLY", (t) => this.onSUBONLY(t)),
              this.source.on("BROADCAST", (t) => this.onBROADCAST(t)),
              this.source.on("RELOAD", () => this.onRELOAD()),
              this.source.on("PRIVMSGSENT", (t) => this.onPRIVMSGSENT(t)),
              this.source.on("PRIVMSG", (t) => this.onPRIVMSG(t)),
              this.source.on("POLLSTART", (t) => this.onPOLLSTART(t)),
              this.source.on("POLLSTOP", (t) => this.onPOLLSTOP(t)),
              this.source.on("VOTECAST", (t) => this.onVOTECAST(t)),
              this.source.on("VOTECOUNTED", (t) => this.onVOTECOUNTED(t)),
              this.source.on("SUBSCRIPTION", (t) => this.onSUBSCRIPTION(t)),
              this.source.on("GIFTSUB", (t) => this.onGIFTSUB(t)),
              this.source.on("MASSGIFT", (t) => this.onMASSGIFT(t)),
              this.source.on("DONATION", (t) => this.onDONATION(t)),
              this.source.on("UPDATEUSER", (t) => this.onUPDATEUSER(t)),
              this.source.on("ADDPHRASE", (t) => this.onADDPHRASE(t)),
              this.source.on("REMOVEPHRASE", (t) => this.onREMOVEPHRASE(t)),
              this.source.on("DEATH", (t) => this.onDEATH(t)),
              this.source.on("PAIDEVENTS", (t) => this.onPAIDEVENTS(t)),
              this.control.on("SEND", (t) => this.cmdSEND(t)),
              this.control.on("HINT", (t) => this.cmdHINT(t)),
              this.control.on("EMOTES", (t) => this.cmdEMOTES(t)),
              this.control.on("HELP", (t) => this.cmdHELP(t)),
              this.control.on("IGNORE", (t) => this.cmdIGNORE(t)),
              this.control.on("UNIGNORE", (t) => this.cmdUNIGNORE(t)),
              this.control.on("UNIGNOREALL", (t) => this.cmdUNIGNOREALL(t)),
              this.control.on("MUTE", (t) => this.cmdMUTE(t)),
              this.control.on("BAN", (t) => this.cmdBAN(t, "BAN")),
              this.control.on("IPBAN", (t) => this.cmdBAN(t, "IPBAN")),
              this.control.on("UNMUTE", (t) => this.cmdUNBAN(t, "UNMUTE")),
              this.control.on("UNBAN", (t) => this.cmdUNBAN(t, "UNBAN")),
              this.control.on("SUBONLY", (t) => this.cmdSUBONLY(t, "SUBONLY")),
              this.control.on("MAXLINES", (t) =>
                this.cmdMAXLINES(t, "MAXLINES")
              ),
              this.control.on("UNHIGHLIGHT", (t) =>
                this.cmdHIGHLIGHT(t, "UNHIGHLIGHT")
              ),
              this.control.on("HIGHLIGHT", (t) =>
                this.cmdHIGHLIGHT(t, "HIGHLIGHT")
              ),
              this.control.on("TIMESTAMPFORMAT", (t) =>
                this.cmdTIMESTAMPFORMAT(t)
              ),
              this.control.on("BROADCAST", (t) => this.cmdBROADCAST(t)),
              this.control.on("RELOADUSERS", () => this.cmdRELOADUSERS()),
              this.control.on("CONNECT", (t) => this.cmdCONNECT(t)),
              this.control.on("TAG", (t) => this.cmdTAG(t)),
              this.control.on("UNTAG", (t) => this.cmdUNTAG(t)),
              this.control.on("EMBED", (t) => this.cmdEMBED(t)),
              this.control.on("E", (t) => this.cmdEMBED(t)),
              this.control.on("POSTEMBED", (t) => this.cmdPOSTEMBED(t)),
              this.control.on("PE", (t) => this.cmdPOSTEMBED(t)),
              this.control.on("BANINFO", (t) => this.cmdBANINFO(t)),
              this.control.on("OPEN", (t) => this.cmdOPEN(t)),
              this.control.on("O", (t) => this.cmdOPEN(t)),
              this.control.on("EXIT", (t) => this.cmdEXIT(t)),
              this.control.on("MESSAGE", (t) => this.cmdWHISPER(t)),
              this.control.on("MSG", (t) => this.cmdWHISPER(t)),
              this.control.on("WHISPER", (t) => this.cmdWHISPER(t)),
              this.control.on("W", (t) => this.cmdWHISPER(t)),
              this.control.on("TELL", (t) => this.cmdWHISPER(t)),
              this.control.on("T", (t) => this.cmdWHISPER(t)),
              this.control.on("NOTIFY", (t) => this.cmdWHISPER(t)),
              this.control.on("R", (t) => this.cmdREPLY(t)),
              this.control.on("REPLY", (t) => this.cmdREPLY(t)),
              this.control.on("MENTIONS", (t) => this.cmdMENTIONS(t)),
              this.control.on("M", (t) => this.cmdMENTIONS(t)),
              this.control.on("STALK", (t) => this.cmdSTALK(t)),
              this.control.on("S", (t) => this.cmdSTALK(t)),
              this.control.on("SHOWPOLL", () => this.cmdSHOWPOLL()),
              this.control.on("SHOWVOTE", () => this.cmdSHOWPOLL()),
              this.control.on("V", (t) => this.cmdPOLL(t, "POLL")),
              this.control.on("POLL", (t) => this.cmdPOLL(t, "POLL")),
              this.control.on("VOTE", (t) => this.cmdPOLL(t, "POLL")),
              this.control.on("SPOLL", (t) => this.cmdPOLL(t, "SPOLL")),
              this.control.on("SVOTE", (t) => this.cmdPOLL(t, "SPOLL")),
              this.control.on("POLLSTOP", (t) => this.cmdPOLLSTOP(t)),
              this.control.on("VOTESTOP", (t) => this.cmdPOLLSTOP(t)),
              this.control.on("VS", (t) => this.cmdPOLLSTOP(t)),
              this.control.on("PIN", (t) => this.cmdPIN(t)),
              this.control.on("MOTD", (t) => this.cmdPIN(t)),
              this.control.on("UNPIN", () => this.cmdUNPIN()),
              this.control.on("UNMOTD", () => this.cmdUNPIN()),
              this.control.on("HOST", (t, e) => this.cmdHOST(t, e)),
              this.control.on("UNHOST", () => this.cmdUNHOST()),
              this.control.on("ADDPHRASE", (t) => this.cmdADDPHRASE(t)),
              this.control.on("ADDBAN", (t) => this.cmdADDPHRASE(t)),
              this.control.on("ADDMUTE", (t) => this.cmdADDPHRASE(t)),
              this.control.on("REMOVEPHRASE", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("REMOVEBAN", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("REMOVEMUTE", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("DELETEPHRASE", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("DELETEBAN", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("DELETEMUTE", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("DPHRASE", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("DBAN", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("DMUTE", (t) => this.cmdREMOVEPHRASE(t)),
              this.control.on("DIE", () => this.cmdDIE()),
              this.control.on("SUICIDE", () => this.cmdDIE()),
              this.control.on("BITLY", () => this.cmdDIE());
          }
          get isDesktop() {
            return !/\bMobi/.test(window.navigator.userAgent);
          }
          setUser(t) {
            return (
              t && "" !== t.username
                ? ((this.user = this.addUser(t)), (this.authenticated = !0))
                : ((this.user = this.addUser({
                    nick: `User${Math.floor(9e4 * Math.random())}10000`,
                  })),
                  (this.authenticated = !1)),
              this.commands
                .generateAutocomplete(this.user.hasModPowers())
                .forEach((t) => this.autocomplete.add(t)),
              this.setDefaultPlaceholderText(),
              this
            );
          }
          loadCachedSettings() {
            const t = new Map(Xt.read("chat.settings") || []);
            this.setSettings(t);
          }
          setSettings(t) {
            t.size > 0 &&
              [...this.settings.keys()]
                .filter((e) => void 0 !== t.get(e) && null !== t.get(e))
                .forEach((e) => this.settings.set(e, t.get(e)));
            const e = t.has("schemaversion")
                ? parseInt(t.get("schemaversion"), 10)
                : -1,
              s = mt.get("schemaversion");
            return (
              -1 !== e &&
                s > e &&
                (ho(this, e, s),
                this.settings.set("schemaversion", s),
                this.saveSettings()),
              (this.taggednicks = new Map(this.settings.get("taggednicks"))),
              (this.taggednotes = new Map(this.settings.get("taggednotes"))),
              (this.ignoring = new Set(this.settings.get("ignorenicks"))),
              (this.favoriteemotes = new Set(
                this.settings.get("favoriteemotes")
              )),
              this.applySettings(!1)
            );
          }
          withGui(t, e = null) {
            (this.ui = o()(t)),
              this.ui.prependTo(e || "body"),
              o()(
                '<template id="event-template"> <div class="msg-event"> <div class="event-wrapper"> <div class="event-top"> <span class="event-info"></span> <button class="event-button"> <i class="event-icon"></i> </button> </div> <div class="event-bottom"></div> </div> </div> </template> <template id="user-template"> <a class="user"></a> </template> <template id="tier-template"> <a class="tier"></a> </template> <template id="streak-template"> <span class="streak-message"></span> </template> <template id="event-bar-event-template"> <div class="event-bar-event"> <div class="event-contents"> <span class="event-info"> <a class="user"></a> </span> <i class="event-icon"></i> </div> </div> </template> '
              ).prependTo("body"),
              (this.css = (() => {
                const t = document.createElement("style");
                return (
                  (t.id = "chat-styles"),
                  (t.type = "text/css"),
                  document.getElementsByTagName("head")[0].appendChild(t),
                  t.sheet
                );
              })()),
              Z.setDefaultProps({
                delay: 0,
              }),
              Z("[data-tippy-content]", {
                arrow: u,
                duration: 0,
                maxWidth: 250,
                hideOnClick: !1,
                theme: "dgg",
              }),
              (this.ishidden =
                "visible" !== (document.visibilityState || "visible")),
              (this.output = this.ui.find("#chat-output-frame")),
              (this.input = this.ui.find("#chat-input-control")),
              (this.subonlyicon = this.ui.find("#chat-input-subonly")),
              (this.loginscrn = this.ui.find("#chat-login-screen")),
              (this.loadingscrn = this.ui.find("#chat-loading")),
              (this.windowselect = this.ui.find("#chat-windows-select")),
              (this.inputhistory = new ro(this)),
              (this.userfocus = new co(this, this.css)),
              (this.mainwindow = new uo("main").into(this)),
              (this.mutedtimer = new So(this)),
              (this.chatpoll = new yo(this)),
              (this.eventBar = new Zn()),
              this.eventBar.on("eventSelected", () => this.onEVENTSELECTED()),
              this.eventBar.on("eventUnselected", () =>
                this.onEVENTUNSELECTED()
              ),
              (this.pinnedMessage = null),
              this.windowToFront("main"),
              this.menus.set(
                "settings",
                new Vn(
                  this.ui.find("#chat-settings"),
                  this.ui.find("#chat-settings-btn"),
                  this
                )
              ),
              this.menus.set(
                "emotes",
                new Gn(
                  this.ui.find("#chat-emote-list"),
                  this.ui.find("#chat-emoticon-btn"),
                  this
                )
              ),
              this.menus.set(
                "emote-tooltip",
                new Yn(
                  this.ui.find("#chat-emote-tooltip"),
                  this.output.find(".msg-user .text .emote"),
                  this
                )
              ),
              this.menus.set(
                "users",
                new Wn(
                  this.ui.find("#chat-user-list"),
                  this.ui.find("#chat-users-btn"),
                  this
                )
              ),
              this.menus.set(
                "whisper-users",
                new Kn(
                  this.ui.find("#chat-whisper-users"),
                  this.ui.find("#chat-whisper-btn"),
                  this
                )
              ),
              this.menus.set(
                "user-info",
                new Xn(
                  this.ui.find("#chat-user-info"),
                  this.output.find(".msg-user .user"),
                  this
                )
              );
            const s = new Jn(
              this.ui.find("#event-action-menu"),
              this.ui.find(".msg-event .event-button"),
              this
            );
            s.on("removeEvent", this.handleRemoveEvent.bind(this)),
              s.on("removeEvent", this.eventBar.unselect.bind(this.eventBar)),
              this.menus.set("event-action-menu", s),
              this.autocomplete.bind(this),
              this.input.on("keydown input", this.adjustInputHeight.bind(this)),
              this.adjustInputHeight(),
              this.input.on("keypress", (t) => {
                !gt(t, 13) ||
                  t.shiftKey ||
                  t.ctrlKey ||
                  (t.preventDefault(),
                  t.stopPropagation(),
                  this.control.emit("SEND", this.input.val().toString().trim()),
                  this.adjustInputHeight(),
                  this.input.focus());
              }),
              this.ui.on("click touch", "#chat-watching-focus-btn", () => {
                (this.watchingfocus = !this.watchingfocus),
                  this.ui.toggleClass("watching-focus", this.watchingfocus),
                  this.ui
                    .find("#chat-watching-focus-btn > .btn-icon")
                    .toggleClass("active");
              });
            let i = !1;
            this.output.on("mousedown", () => {
              i = !0;
            }),
              this.output.on("mouseup", () => {
                i &&
                  ((i = !1),
                  Fn.closeMenus(this),
                  this.focusIfNothingSelected());
              }),
              this.ui.on("click", "#chat-tools-wrap", () => {
                Fn.closeMenus(this), this.focusIfNothingSelected();
              }),
              this.ui.on("mouseover", "a.externallink", async (t) => {
                const { target: e } = t;
                if (!this.isDesktop) return;
                if (e.dataset.tipped) return;
                const s = e.href.match(Ht);
                if (s)
                  try {
                    const t = await this.youtubeOEmbedService.getOEmbed(s[1]),
                      i = document.createElement("div");
                    (i.style.display = "flex"),
                      (i.style.flexDirection = "column"),
                      (i.style.marginTop = "4px"),
                      (i.style.gap = "0.25em");
                    const n = document.createElement("img");
                    n.src = t.thumbnail_url;
                    const o = document.createElement("strong");
                    o.textContent = t.title;
                    const a = document.createElement("span");
                    (a.textContent = t.author_name), i.append(n, o, a);
                    const r = Z(e, {
                      content: i,
                      allowHTML: !0,
                      arrow: u,
                      duration: 0,
                      theme: "dgg",
                      maxWidth: 250,
                    });
                    (e.dataset.tipped = !0), e.matches(":hover") && r.show();
                  } catch (t) {}
              }),
              document.addEventListener("keydown", (t) => {
                if (gt(t, 27)) {
                  const t = this.getActiveWindow();
                  this.getActiveMenu()
                    ? Fn.closeMenus(this)
                    : this.eventBar.isEventSelected()
                    ? this.eventBar.unselect()
                    : t.isScrollPinned()
                    ? this.userfocus.isFocused() && this.userfocus.clearFocus()
                    : t.scrollBottom();
                }
              }),
              document.addEventListener(
                "visibilitychange",
                (0, a.s)(
                  100,
                  () => {
                    (this.ishidden =
                      "visible" !== (document.visibilityState || "visible")),
                      this.ishidden
                        ? Fn.closeMenus(this)
                        : this.focusIfNothingSelected();
                  },
                  {
                    atBegin: !1,
                  }
                ),
                !0
              );
            let n = !1;
            const r = (0, a.s)(
              100,
              () => {
                (n = !1), this.focusIfNothingSelected();
              },
              {
                atBegin: !1,
              }
            );
            return (
              window.addEventListener(
                "resize",
                () => {
                  n || ((n = !0), Fn.closeMenus(this)), r();
                },
                !1
              ),
              this.windowselect.on(
                "click",
                ".tab-close",
                (t) => (
                  Fn.closeMenus(this),
                  this.removeWindow(
                    o()(t.currentTarget).parent().data("name").toLowerCase()
                  ),
                  this.isDesktop && this.input.focus(),
                  !1
                )
              ),
              this.windowselect.on(
                "click",
                ".tab",
                (t) => (
                  Fn.closeMenus(this),
                  this.windowToFront(
                    o()(t.currentTarget).data("name").toLowerCase()
                  ),
                  this.menus.get("whisper-users").redraw(),
                  this.isDesktop && this.input.focus(),
                  !1
                )
              ),
              this.output.on("click", ".censored", (t) => {
                const e = o()(t.currentTarget)
                  .closest(".msg-chat")
                  .data("username");
                return (
                  this.getActiveWindow()
                    .getlines(`.censored[data-username="${e}"]`)
                    .forEach((t) => t.classList.remove("censored")),
                  !1
                );
              }),
              this.loginscrn.on("click", "#chat-btn-login", () => {
                this.loginscrn.hide();
                try {
                  window.top.showLoginModal();
                } catch (t) {
                  const e = `${window.location.protocol}//${
                    window.location.hostname
                  }${window.location.port ? `:${window.location.port}` : ""}`;
                  try {
                    return (
                      window.self === window.top
                        ? (window.location.href = `${e}/login?follow=${encodeURIComponent(
                            window.location.pathname
                          )}`)
                        : (window.location.href = `${e}/login`),
                      !1
                    );
                  } catch (t) {}
                  window.location.href = `${e}/login`;
                }
                return !1;
              }),
              this.loginscrn.on("click", "#chat-btn-cancel", () =>
                this.loginscrn.hide()
              ),
              this.output.on("click mousedown", ".msg-whisper a.user", (t) => {
                const e = o()(t.target).closest(".msg-chat");
                return (
                  this.openConversation(
                    e.data("username").toString().toLowerCase()
                  ),
                  !1
                );
              }),
              this.loadingscrn.fadeOut(250, () => this.loadingscrn.remove()),
              this.mainwindow.update(!0),
              this.setDefaultPlaceholderText(),
              le.status(this.config.welcomeMessage).into(this),
              Promise.resolve(this)
            );
          }
          connect() {
            this.source.connect(this.config.url);
          }
          async loadSettings() {
            return (0, i.hd)(`${this.config.api.base}/api/chat/me/settings`, {
              credentials: "include",
            })
              .then((t) => t.json())
              .then((t) => {
                const e = new Map(t);
                e.get("profilesettings") &&
                  (this.setSettings(e),
                  this.cacheSettings(),
                  this.getActiveWindow().update(!0));
              })
              .catch();
          }
          async loadEmotesAndFlairs() {
            await this.loadEmotes(), await this.loadFlairs();
          }
          async loadEmotes() {
            return (
              this.loadCss(
                `${this.config.cdn.base}/emotes/emotes.css?_=${this.config.cacheKey}`
              ),
              (0, i.hd)(
                `${this.config.cdn.base}/emotes/emotes.json?_=${this.config.cacheKey}`
              )
                .then((t) => t.json())
                .then((t) => {
                  this.setEmotes(t), this.refreshEmoteAutocomplete();
                })
                .catch(() => {})
            );
          }
          async loadFlairs() {
            return (
              this.loadCss(
                `${this.config.cdn.base}/flairs/flairs.css?_=${this.config.cacheKey}`
              ),
              (0, i.hd)(
                `${this.config.cdn.base}/flairs/flairs.json?_=${this.config.cacheKey}`
              )
                .then((t) => t.json())
                .then((t) => {
                  this.setFlairs(t);
                })
                .catch(() => {})
            );
          }
          async loadWhispers() {
            (0, i.hd)(`${this.config.api.base}/api/messages/unread`, {
              credentials: "include",
            })
              .then((t) => t.json())
              .then((t) => {
                t.forEach((t) =>
                  this.whispers.set(t.username.toLowerCase(), {
                    id: t.messageid,
                    nick: t.username,
                    unread: Number(t.unread),
                    open: !1,
                  })
                );
              })
              .then(() => this.menus.get("whisper-users").redraw())
              .catch(() => {});
          }
          setPreLoginText() {
            const t = Xt.read("chat.preLoginText");
            null !== t && (this.input.val(t), Xt.remove("chat.preLoginText"));
          }
          setEmotes(t) {
            return this.emoteService.setEmotes(t), this;
          }
          refreshEmoteAutocomplete() {
            this.emoteService
              .emotesForUser(this.user)
              .map((t) => t.prefix)
              .forEach((t) => this.autocomplete.add(t, !0));
          }
          setFlairs(t) {
            return (
              (this.flairs = t),
              (this.flairsMap = new Map()),
              t.forEach((t) => this.flairsMap.set(t.name, t)),
              this
            );
          }
          saveSettings() {
            this.cacheSettings(),
              this.authenticated &&
                this.settings.get("profilesettings") &&
                (0, i.hd)(`${this.config.api.base}/api/chat/me/settings`, {
                  body: JSON.stringify([...this.settings]),
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "X-CSRF-Guard": "YEE",
                  },
                }).catch();
          }
          cacheSettings() {
            const t = new Map(this.settings);
            t.set("profilesettings", !1), Xt.write("chat.settings", t);
          }
          commitSettings() {
            this.debouncedsave ||
              (this.debouncedsave = (0, a.s)(1e3, () => this.saveSettings(), {
                atBegin: !1,
              })),
              this.debouncedsave();
          }
          applySettings(t = !0) {
            t && this.saveSettings(),
              (ht.TIME = this.settings.get("timestampformat"));
            const e = Array.from(this.ignoring.values()).map(jt);
            this.ignoreregex =
              e.length > 0 ? new RegExp(`\\b(?:${e.join("|")})\\b`, "i") : null;
            const s = [...(this.settings.get("customhighlight") || [])].filter(
                (t) => "" !== t
              ),
              i = [...(this.settings.get("highlightnicks") || [])].filter(
                (t) => "" !== t
              );
            (this.regexhighlightself = this.user.displayName
              ? new RegExp(`\\b(?:${this.user.displayName})\\b`, "i")
              : null),
              (this.regexhighlightcustom =
                s.length > 0
                  ? new RegExp(`\\b(?:${s.join("|")})\\b`, "i")
                  : null),
              (this.regexhighlightnicks =
                i.length > 0
                  ? new RegExp(`\\b(?:${i.join("|")})\\b`, "i")
                  : null),
              Array.from(this.settings.keys())
                .filter((t) => "boolean" == typeof this.settings.get(t))
                .forEach((t) =>
                  this.ui.toggleClass(`pref-${t}`, this.settings.get(t))
                ),
              [...this.windows.values()].forEach((t) => {
                t.maxlines = this.settings.get("maxlines");
              });
            const n = this.settings.get("fontscale") || "auto";
            o()(document.body).toggleClass("pref-fontscale", "auto" !== n),
              o()(document.body).attr("data-fontscale", n);
            for (const t of this.windows.values()) t.updateMessages(this);
            return (
              this.mentions.resimulateMessages(this.mainwindow.messages),
              Promise.resolve(this)
            );
          }
          addUser(t) {
            if (!t) return null;
            const e = t.nick.toLowerCase();
            let s = this.users.get(e);
            return (
              s
                ? (Object.hasOwn(t, "features") &&
                    !this.isArraysEqual(t.features, s.features) &&
                    (s.features = t.features),
                  Object.hasOwn(t, "roles") &&
                    !this.isArraysEqual(t.roles, s.roles) &&
                    (s.roles = t.roles),
                  Object.hasOwn(t, "createdDate") &&
                    t.createdDate !== s.createdDate &&
                    (s.createdDate = t.createdDate),
                  Object.hasOwn(t, "watching") &&
                    !s.equalWatching(t.watching) &&
                    (s.watching = t.watching))
                : ((s = new Et(t)), this.users.set(e, s)),
              s
            );
          }
          addMessage(t, e = null) {
            null === e && (e = this.mainwindow),
              e.containsMessage(t) ||
                (e.lastmessage &&
                  e.lastmessage.type === St.EMOTE &&
                  e.lastmessage.emotecount > 1 &&
                  e.lastmessage.completeCombo(),
                [
                  St.USER,
                  St.SUBSCRIPTION,
                  St.GIFTSUB,
                  St.MASSGIFT,
                  St.DONATION,
                  St.BROADCAST,
                  St.DEATH,
                ].includes(t.type) &&
                  ((t.slashme =
                    "/me " === t.message.substring(0, 4).toLowerCase() ||
                    t.type === St.DEATH),
                  (t.isown = t.user?.username === this.user.username),
                  (t.mentioned = this.extractNicks(t.message).filter((t) =>
                    this.users.has(t.toLowerCase())
                  )),
                  (t.tag = this.taggednicks.get(t.user?.username)),
                  (t.title = this.taggednotes.get(t.user?.username) || "")),
                t.type === St.USER &&
                  ((t.continued = e.isContinued(t)),
                  (t.highlighted = this.shouldHighlightMessage(t))),
                e.addMessage(this, t),
                ![St.UI, St.INFO, St.ERROR, St.STATUS].includes(t.type) &&
                  this.ignored(t.user?.username, t.message) &&
                  t.ignore(),
                this.mentions.processMessage(t),
                !this.backlogloading &&
                  t.highlighted &&
                  this.settings.get("notificationhighlight") &&
                  this.ishidden &&
                  !t.ignored &&
                  this.showNotification(
                    `${t.user.displayName} said ...`,
                    t.message,
                    t.timestamp.valueOf(),
                    this.settings.get("notificationtimeout")
                  ),
                e.update());
          }
          resolveMessage(t, e, s) {
            for (const i of this.unresolved)
              if (this.user.username === t.toLowerCase() && i.message === e)
                return (
                  this.unresolved.splice(this.unresolved.indexOf(i), 1),
                  i.setTimestamp(s),
                  !0
                );
            return !1;
          }
          windowToFront(t) {
            const e = this.windows.get(t);
            return (
              null !== e &&
                e !== this.getActiveWindow() &&
                (this.windows.forEach((t) => {
                  t.visible && t.hide();
                }),
                e.show(),
                e.update(),
                this.redrawWindowIndicators()),
              "main" === e.name && this.mutedtimer.ticking
                ? this.mutedtimer.updatePlaceholderText()
                : this.setDefaultPlaceholderText(),
              e
            );
          }
          getActiveWindow() {
            return [...this.windows.values()].filter((t) => t.visible)[0];
          }
          getWindow(t) {
            return this.windows.get(t);
          }
          addWindow(t, e) {
            this.windows.set(t, e), this.redrawWindowIndicators();
          }
          removeWindow(t) {
            const e = this.windows.get(t);
            if (e) {
              const { visible: s } = e;
              if ((this.windows.delete(t), e.destroy(), s)) {
                const t = [...this.windows.keys()];
                this.windowToFront(this.windows.get(t[t.length - 1]).name);
              } else this.redrawWindowIndicators();
            }
          }
          redrawWindowIndicators() {
            this.windows.size > 1 &&
              (this.windowselect.empty(),
              this.windows.forEach((t) => {
                if ("main" === t.name)
                  this.windowselect.append(
                    `<span title="Destiny GG" data-name="main" class="tab win-main tag-${
                      t.tag
                    } ${
                      t.visible ? "active" : ""
                    }"><i class="dgg-icon"></i></span>`
                  );
                else {
                  const e = this.whispers.get(t.name);
                  this.windowselect.append(
                    `<span title="${t.label}" data-name="${
                      t.name
                    }" class="tab win-${t.name} tag-${t.tag} ${
                      t.visible ? "active" : ""
                    } ${
                      e.unread > 0 ? "unread" : ""
                    }">\n                    <span>${t.label}${
                      e.unread > 0 ? ` (${e.unread})` : ""
                    }</span>\n                    <i class="tab-close" title="Close" />\n                    </span>`
                  );
                }
              })),
              this.windowselect.toggle(this.windows.size > 1),
              null !== this.mainwindow && this.mainwindow.update();
          }
          getActiveMenu() {
            return [...this.menus.values()].find((t) => t.visible);
          }
          censor(t) {
            for (const e of this.mainwindow.messages)
              e.user?.username === t.toLowerCase() &&
                e.censor(parseInt(this.settings.get("showremoved") || "1", 10));
            this.mainwindow.update();
          }
          ignored(t, e = null) {
            if (t === this.user.username) return !1;
            const s = this.ignoring.has(t);
            return s || null === e
              ? s
              : (this.settings.get("ignorementions") &&
                  this.ignoreregex &&
                  this.ignoreregex.test(e)) ||
                  (this.settings.get("hidensfl") && Dt.test(e)) ||
                  (this.settings.get("hidensfw") && Ut.test(e));
          }
          ignore(t, e = !0) {
            const s = t.toLowerCase(),
              i = this.ignoring.has(s);
            e && !i ? this.ignoring.add(s) : !e && i && this.ignoring.delete(s),
              this.settings.set("ignorenicks", [...this.ignoring]),
              this.applySettings();
          }
          unignoreall() {
            this.ignoring.clear(),
              this.settings.set("ignorenicks", [...this.ignoring]),
              this.applySettings();
          }
          toggleFavoriteEmote(t) {
            const e = this.favoriteemotes.has(t);
            return (
              e ? this.favoriteemotes.delete(t) : this.favoriteemotes.add(t),
              this.settings.set("favoriteemotes", [...this.favoriteemotes]),
              this.applySettings(),
              this.menus.get("emotes").buildEmoteMenu(),
              !e
            );
          }
          focusIfNothingSelected() {
            this.isDesktop &&
              (void 0 === this.debounceFocus &&
                (this.debounceFocus = (0, a.s)(10, (t) => t.input.focus(), {
                  atBegin: !1,
                })),
              window.getSelection().isCollapsed &&
                !this.input.is(":focus") &&
                this.debounceFocus(this));
          }
          setDefaultPlaceholderText() {
            const t = this.authenticated
              ? `Write something ${this.user.displayName} ...`
              : "Write something ...";
            this.input.attr("placeholder", t);
          }
          adjustInputHeight() {
            if (0 === this.input.length) return;
            const t = this.input.css("maxHeight"),
              e = parseInt(t.slice(0, -2), 10);
            this.input.css("height", "");
            const s = this.input.prop("scrollHeight");
            this.input.css("overflow-y", s >= e ? "scroll" : "hidden"),
              this.input.css("height", s),
              this.getActiveWindow().update();
          }
          onDISPATCH({ data: t }) {
            if (t && "object" == typeof t) {
              let e = [];
              t.users && (e = e.concat(t.users.map((t) => this.addUser(t)))),
                t.user
                  ? e.push(this.addUser(t.user))
                  : t.nick && e.push(this.addUser(t)),
                t.recipient && e.push(this.addUser(t.recipient)),
                e.forEach((t) => {
                  this.ignored(t.username) ||
                    this.autocomplete.add(t.displayName, !1, Date.now());
                });
            }
          }
          onCLOSE(t) {
            this.chatpoll.isPollStarted() && this.chatpoll.endPoll(),
              t > 0
                ? le
                    .error(
                      `Disconnected, retry in ${Math.round(
                        t / 1e3
                      )} seconds ...`
                    )
                    .into(this)
                : le.error("Disconnected.").into(this);
          }
          onCONNECTING(t) {
            le.status(`Connecting to ${this.extractHostname(t)} ...`).into(
              this
            );
          }
          onME(t) {
            this.setUser(t),
              this.setPreLoginText(),
              this.loadCachedSettings(),
              this.authenticated &&
                (this.loadSettings(),
                this.loadWhispers(),
                this.refreshEmoteAutocomplete());
          }
          onOPEN() {}
          onNAMES(t) {
            le
              .status(
                `Connected as ${
                  this.authenticated ? this.user.displayName : "Guest"
                }. Serving ${t.connectioncount || 0} connections and ${
                  t.users.length
                } users.`
              )
              .into(this),
              this.showmotd &&
                (this.cmdHINT([Math.floor(Math.random() * dt.size)]),
                (this.showmotd = !1));
          }
          onHISTORY(t) {
            t &&
              t.length > 0 &&
              ((this.backlogloading = !0),
              t.forEach((t) =>
                this.source.parseAndDispatch({
                  data: t,
                })
              ),
              (this.backlogloading = !1),
              this.mainwindow.update(!0));
          }
          onPIN(t) {
            if (this.pinnedMessage?.uuid === t.uuid) return;
            if ((this.pinnedMessage?.unpin(), !t.data)) return;
            const e = this.users.get(t.nick.toLowerCase()) ?? new Et(t);
            var s;
            this.pinnedMessage = le
              .pinned(t.data, e, t.timestamp, t.uuid)
              .into(this)
              .pin(this, ((s = t.uuid), !Xt.read("chat.pinnedmessage")?.[s]));
          }
          onQUIT(t) {
            const e = t.nick.toLowerCase();
            this.users.has(e) &&
              (this.users.delete(e), this.autocomplete.remove(t.nick, !0));
          }
          onMSG(t) {
            const e = Co(t.data),
              s = this.users.get(t.nick.toLowerCase()),
              i = this.mainwindow,
              n = le.message(t.data, s, t.timestamp);
            if (i.containsMessage(n)) return;
            const o =
              this.emoteService.canUserUseEmote(s, e) &&
              Co(i.lastmessage?.message) === e;
            if (o && i.lastmessage?.type === St.EMOTE)
              return (
                i.lastmessage.add(n),
                this.user.equalWatching(s.watching) &&
                  i.lastmessage.ui.classList.toggle("watching-same", !0),
                void this.mainwindow.update()
              );
            if (o && i.lastmessage?.type === St.USER) {
              const t = i.lastmessage;
              i.removeLastMessage();
              const o = le.emote(e, t.timestamp, [t, n]).into(this);
              this.user.equalWatching(s.watching) &&
                o.ui.classList.add("watching-same");
            } else
              this.resolveMessage(t.nick, t.data, t.timestamp) || n.into(this);
          }
          onPOLLSTART(t) {
            this.chatpoll.startPoll(t);
          }
          onPOLLSTOP() {
            this.chatpoll.endPoll();
          }
          onVOTECAST(t) {
            this.chatpoll.castVote(t);
          }
          onVOTECOUNTED(t) {
            this.chatpoll.markVote(t.vote);
          }
          onMUTE(t) {
            this.user.username === t.data.toLowerCase()
              ? (le
                  .command(`You have been muted by ${t.nick}.`, t.timestamp)
                  .into(this),
                Eo(t) &&
                  (this.mutedtimer.setTimer(t.duration),
                  this.mutedtimer.startTimer()))
              : le
                  .command(`${t.data} muted by ${t.nick}.`, t.timestamp)
                  .into(this),
              this.censor(t.data);
          }
          onUNMUTE(t) {
            this.user.username === t.data.toLowerCase()
              ? (le
                  .command(`You have been unmuted by ${t.nick}.`, t.timestamp)
                  .into(this),
                this.mutedtimer.stopTimer())
              : le
                  .command(`${t.data} unmuted by ${t.nick}.`, t.timestamp)
                  .into(this);
          }
          onBAN(t) {
            this.user.username === t.data.toLowerCase()
              ? (le
                  .command(
                    `You have been banned by ${t.nick}. Check your profile for more information.`,
                    t.timestamp
                  )
                  .into(this),
                this.cmdBANINFO())
              : le
                  .command(`${t.data} banned by ${t.nick}.`, t.timestamp)
                  .into(this),
              this.censor(t.data);
          }
          onUNBAN(t) {
            this.user.username === t.data.toLowerCase()
              ? (le
                  .command(`You have been unbanned by ${t.nick}.`, t.timestamp)
                  .into(this),
                this.mutedtimer.stopTimer())
              : le
                  .command(`${t.data} unbanned by ${t.nick}.`, t.timestamp)
                  .into(this);
          }
          onERR(t) {
            const e = t.description;
            let s;
            switch (
              (("toomanyconnections" !== e && "banned" !== e) ||
                (this.source.retryOnDisconnect = !1),
              e)
            ) {
              case "banned": {
                let t =
                  'You have been banned! Check your <a target="_blank" class="externallink" href="/profile" rel="nofollow">profile</a> for more information. <a target="_blank" class="externallink" href="/subscribe" rel="nofollow">Subscribing</a> or <a target="_blank" class="externallink" href="/donate" rel="nofollow">donating</a> removes non-permanent bans.';
                this.config.banAppealUrl &&
                  (t += ` Visit <a target="_blank" class="externallink" href="${this.config.banAppealUrl}" rel="nofollow">this page</a> to appeal.`),
                  (s = new Vt(t, null, St.ERROR, !0));
                break;
              }
              case "muted": {
                this.mutedtimer.setTimer(t.muteTimeLeft),
                  this.mutedtimer.startTimer();
                const e = `You are temporarily muted! You can chat again ${this.mutedtimer.getReadableDuration()}. <a target="_blank" class="externallink" href="/subscribe" rel="nofollow">Subscribe</a>, or <a target="_blank" class="externallink" href="/donate" rel="nofollow">donate</a>, to remove the mute immediately.`;
                s = new Vt(e, null, St.ERROR, !0);
                break;
              }
              case "bannedphrase":
                s = le.error(
                  `Your message was blocked because it contained this banned phrase: "${t.filtered}".`
                );
                break;
              default:
                s = le.error(ut.get(e) || e);
            }
            s.into(this, this.getActiveWindow());
          }
          onSOCKETERROR() {}
          onSUBONLY(t) {
            (this.subonly = "on" === t.data),
              le
                .command(
                  `Subscriber only mode ${
                    this.subonly ? "enabled" : "disabled"
                  }${t.nick ? ` by ${t.nick}` : ""}.`,
                  t.timestamp
                )
                .into(this),
              this.subonly && !this.user.isSubscriber()
                ? this.subonlyicon.show()
                : this.subonlyicon.hide();
          }
          onBROADCAST(t) {
            le.broadcast(t.data, new Et(t.user), t.uuid, t.timestamp).into(
              this
            );
          }
          onRELOAD() {
            const t = Math.floor(3e4 * Math.random()) + 4e3;
            setTimeout(() => window.location.reload(!0), t),
              le
                .broadcast(
                  `Reload incoming in ${Math.round(t / 1e3)} seconds...`,
                  new Et({
                    nick: "System",
                    id: -1,
                  }),
                  ""
                )
                .into(this);
          }
          onSUBSCRIPTION(t) {
            if ((le.subscription(t).into(this), !this.backlogloading)) {
              const e = new Lo(this, St.SUBSCRIPTION, t);
              this.eventBar.add(e),
                1 === this.eventBar.length && this.mainwindow.update();
            }
          }
          onGIFTSUB(t) {
            if ((le.gift(t).into(this), !this.backlogloading)) {
              const e = new Lo(this, St.GIFTSUB, t);
              this.eventBar.add(e),
                1 === this.eventBar.length && this.mainwindow.update();
            }
          }
          onMASSGIFT(t) {
            if ((le.massgift(t).into(this), !this.backlogloading)) {
              const e = new Lo(this, St.MASSGIFT, t);
              this.eventBar.add(e),
                1 === this.eventBar.length && this.mainwindow.update();
            }
          }
          onDONATION(t) {
            if ((le.donation(t).into(this), !this.backlogloading)) {
              const e = new Lo(this, St.DONATION, t);
              this.eventBar.add(e),
                1 === this.eventBar.length && this.mainwindow.update();
            }
          }
          onPAIDEVENTS(t) {
            const e = t.map((t) => {
              const { eventname: e, data: s } = this.source.parse({
                data: t,
              });
              return new Lo(this, e, s);
            });
            this.eventBar.replaceEvents(e),
              this.mainwindow.update(),
              this.eventBar.sort();
          }
          onADDPHRASE(t) {
            le.command(`Phrase "${t.data}" added.`, t.timestamp).into(this);
          }
          onREMOVEPHRASE(t) {
            le.command(`Phrase "${t.data}" removed.`, t.timestamp).into(this);
          }
          onPRIVMSGSENT() {
            this.mainwindow.visible &&
              le.info("Your message has been sent.").into(this);
          }
          onPRIVMSG(t) {
            const e = t.nick.toLowerCase();
            if (!this.ignored(e, t.data)) {
              this.whispers.has(e) ||
                this.whispers.set(e, {
                  nick: t.nick,
                  unread: 0,
                  open: !1,
                });
              const s = this.whispers.get(e),
                n = this.users.get(e) || new Et(t.nick),
                o = Object.hasOwn(t, "messageid") ? t.messageid : null;
              this.settings.get("showhispersinchat") &&
                le
                  .whisper(t.data, n, this.user.username, t.timestamp, o)
                  .into(this),
                this.settings.get("notificationwhisper") &&
                  this.ishidden &&
                  this.showNotification(
                    `${t.nick} whispered ...`,
                    t.data,
                    t.timestamp,
                    this.settings.get("notificationtimeout")
                  );
              const a = this.getWindow(e);
              a && le.historical(t.data, n, t.timestamp).into(this, a),
                a === this.getActiveWindow()
                  ? (0, i.hd)(
                      `${this.config.api.base}/api/messages/msg/${o}/open`,
                      {
                        credentials: "include",
                        method: "POST",
                        headers: {
                          "X-CSRF-Guard": "YEE",
                        },
                      }
                    ).catch()
                  : (s.unread += 1),
                (this.replyusername = n.displayName),
                this.menus.get("whisper-users").redraw(),
                this.redrawWindowIndicators();
            }
          }
          cmdSEND(t) {
            if ("" !== t) {
              const s = this.getActiveWindow(),
                i = ((e = t), e?.match(Lt)?.[1].toUpperCase()),
                n = "ME" === i,
                o = Co(t);
              if (i && !n)
                if (
                  (this.inputhistory.add(t),
                  this.input.val(""),
                  s !== this.mainwindow && "EXIT" !== i)
                )
                  le.error("No commands in private windows. Try /exit").into(
                    this,
                    s
                  );
                else if (this.control.listeners.has(i)) {
                  const e = t.substring(i.length + 1) || "",
                    s = e.match(/([^ ]+)/g),
                    n = ct(e);
                  this.control.emit(i, s || [], n);
                } else le.error("Unknown command. Try /help").into(this, s);
              else if (this.authenticated)
                if (s !== this.mainwindow)
                  le.message(t, this.user).into(this, s),
                    this.source.send("PRIVMSG", {
                      nick: s.name,
                      data: t,
                    }),
                    this.input.val("");
                else if (
                  this.chatpoll.isPollStarted() &&
                  this.chatpoll.isMsgVoteCastFmt(o)
                )
                  this.chatpoll.poll.canVote
                    ? (le.info("Your vote has been cast!").into(this),
                      this.source.send("CASTVOTE", {
                        vote: t,
                      }),
                      this.input.val(""))
                    : (le.error("You have already voted!").into(this),
                      this.input.val(""));
                else if (
                  this.source.isConnected() &&
                  this.emoteService.getEmote(o)
                )
                  this.source.send("MSG", {
                    data: t,
                  }),
                    this.inputhistory.add(t),
                    this.input.val("");
                else {
                  const e = le.message(t, this.user).into(this);
                  this.unresolved.unshift(e),
                    this.source.send("MSG", {
                      data: t,
                    }),
                    this.inputhistory.add(t),
                    this.input.val("");
                }
              else Xt.write("chat.preLoginText", t), this.loginscrn.show();
            }
            var e;
          }
          onUPDATEUSER(t) {
            if (this.user?.id === t.id) {
              this.setUser(t);
              for (const t of this.windows.values()) t.updateMessages(this);
            }
          }
          onDEATH(t) {
            const e = this.users.get(t.nick.toLowerCase()) ?? new Et(t.nick);
            this.user.username === t.nick.toLowerCase() &&
              Eo(t) &&
              (this.mutedtimer.setTimer(t.duration),
              this.mutedtimer.startTimer()),
              this.censor(t.nick),
              le.death(t.data, e, t.timestamp).into(this);
          }
          onEVENTSELECTED() {
            this.pinnedMessage && (this.pinnedMessage.hidden = !0);
          }
          onEVENTUNSELECTED() {
            this.pinnedMessage && (this.pinnedMessage.hidden = !1);
          }
          cmdSHOWPOLL() {
            this.chatpoll.poll
              ? this.chatpoll.show()
              : le.error("There hasn't been a poll yet.").into(this);
          }
          cmdPOLL(t, e) {
            const s = `/${e.toLowerCase()}`,
              i = t.join(" ");
            try {
              wo(i);
            } catch {
              return void le
                .info(
                  `Usage: ${s} <question>? <option 1> or <option 2> [or <option 3> [or <option 4> ... [or <option n>]]] [<time>].`
                )
                .into(this);
            }
            if (this.chatpoll.isPollStarted())
              return void le.error("Poll already started.").into(this);
            if (!this.chatpoll.hasPermission(this.user))
              return void le
                .error("You do not have permission to start a poll.")
                .into(this);
            const { question: n, options: o, time: a } = wo(i),
              r = {
                weighted: "/spoll" === s,
                time: a,
                question: n,
                options: o,
              };
            this.source.send("STARTPOLL", r);
          }
          cmdPOLLSTOP() {
            this.chatpoll.isPollStarted()
              ? this.chatpoll.hasPermission(this.user)
                ? this.source.send("STOPPOLL", {})
                : le
                    .error("You do not have permission to stop this poll.")
                    .into(this)
              : le.error("No poll started.").into(this);
          }
          cmdEMOTES() {
            le.info(
              `Available emotes: ${this.emoteService.prefixes.join(", ")}.`
            ).into(this);
          }
          cmdHELP() {
            le.info(this.commands.generateUserHelpStrings()).into(this),
              this.user.hasModPowers() &&
                le.info(this.commands.generateAdminHelpStrings()).into(this);
          }
          cmdHINT(t) {
            const e = [...dt],
              s = t && t[0] ? parseInt(t[0], 10) - 1 : -1;
            s > 0 && s < dt.size
              ? le.info(e[s][1]).into(this)
              : (void 0 === this.lasthintindex ||
                this.lasthintindex === e.length - 1
                  ? (this.lasthintindex = 0)
                  : (this.lasthintindex += 1),
                le.info(e[this.lasthintindex][1]).into(this));
          }
          cmdIGNORE(t) {
            if (t[0])
              if (t.some((t) => t.toLowerCase() === this.user.username))
                le.info("You can't add yourself to your ignore list.").into(
                  this
                );
              else {
                const e = new Set();
                if (
                  !t.some((t) =>
                    Pt.test(t)
                      ? (e.add(t), !1)
                      : (le
                          .info(
                            `${t} is not a valid nick - /ignore <nick> OR /ignore <nick_1> <nick_2> ... <nick_n>.`
                          )
                          .into(this),
                        !0)
                  )
                ) {
                  e.forEach((t) => {
                    this.ignore(t, !0);
                    const e = this.users.get(t);
                    e && this.autocomplete.remove(e.displayName, !0);
                  });
                  const t = Array.from(e.values()),
                    s =
                      1 === e.size
                        ? `Ignoring ${t[0]}`
                        : `Added the following people to your ignore list: ${t.join(
                            ", "
                          )}`;
                  le.status(s).into(this);
                }
              }
            else
              this.ignoring.size <= 0
                ? le.info("Your ignore list is empty.").into(this)
                : le
                    .info(
                      `Ignoring the following people: ${Array.from(
                        this.ignoring.values()
                      ).join(", ")}.`
                    )
                    .into(this);
          }
          cmdUNIGNORE(t) {
            if (t.length > 0) {
              const e = new Set();
              if (
                !t.some((t) =>
                  Pt.test(t)
                    ? (e.add(t), !1)
                    : (le
                        .info(
                          `${t} is not a valid nick - /unignore <nick> OR /unignore <nick_1> <nick_2> ... <nick_n>.`
                        )
                        .into(this),
                      !0)
                )
              ) {
                e.forEach((t) => {
                  this.ignore(t, !1);
                  const e = this.users.get(t);
                  e && this.autocomplete.add(e.displayName, !1, Date.now());
                });
                const s = 1 === t.length ? "has" : "have";
                le.status(
                  `${Array.from(e.values()).join(
                    ", "
                  )} ${s} been removed from your ignore list`
                ).into(this);
              }
            } else
              le.error(
                "Invalid nick - /unignore <nick> OR /unignore <nick_1> <nick_2> ... <nick_n>"
              ).into(this);
          }
          cmdUNIGNOREALL(t) {
            const e = t[0] || null;
            !e || ("yes" !== e.toLowerCase() && "y" !== e.toLowerCase())
              ? le
                  .error(
                    "This command requires confirmation - /unignoreall yes OR /unignoreall y"
                  )
                  .into(this)
              : (this.unignoreall(),
                le.status("Your ignore list has been cleared.").into(this));
          }
          cmdMUTE(t) {
            if (0 === t.length)
              le.info("Usage: /mute <nick> [<time>].").into(this);
            else if (Pt.test(t[0])) {
              const e = t[1] ? this.parseTimeInterval(t[1]) : null;
              e && e > 0
                ? this.source.send("MUTE", {
                    data: t[0],
                    duration: e,
                  })
                : this.source.send("MUTE", {
                    data: t[0],
                  });
            } else le.info("Invalid nick - /mute <nick> [<time>].").into(this);
          }
          cmdBAN(t, e) {
            if (0 === t.length || t.length < 3)
              le.info(
                `Usage: /${e} <nick> <time> <reason> (time can be 'permanent').`
              ).into(this);
            else if (Pt.test(t[0]))
              if (t[2]) {
                const s = {
                  nick: t[0],
                  reason: t.slice(2, t.length).join(" "),
                };
                /^perm/i.test(t[1])
                  ? (s.ispermanent = !0)
                  : (s.duration = this.parseTimeInterval(t[1])),
                  (s.banip = "IPBAN" === e),
                  this.source.send("BAN", s);
              } else le.error("Providing a reason is mandatory.").into(this);
            else le.info("Invalid nick.").into(this);
          }
          cmdUNBAN(t, e) {
            0 === t.length
              ? le.info(`Usage: /${e} <nick>.`).into(this)
              : Pt.test(t[0])
              ? this.source.send(e, {
                  data: t[0],
                })
              : le.info("Invalid nick.").into(this);
          }
          cmdSUBONLY(t, e) {
            /on|off/i.test(t[0])
              ? this.source.send(e.toUpperCase(), {
                  data: t[0].toLowerCase(),
                })
              : le
                  .error(`Invalid argument - /${e.toLowerCase()} on | off`)
                  .into(this);
          }
          cmdMAXLINES(t, e) {
            if (0 === t.length)
              return void le
                .info(`Maximum lines stored: ${this.settings.get("maxlines")}.`)
                .into(this);
            const s = Math.abs(parseInt(t[0], 10));
            s
              ? (this.settings.set("maxlines", s),
                this.applySettings(),
                le.info(`Set maximum lines to ${s}.`).into(this))
              : le
                  .info(`Invalid argument - /${e} is expecting a number.`)
                  .into(this);
          }
          cmdHIGHLIGHT(t, e) {
            const s = this.settings.get("highlightnicks");
            if (0 === t.length)
              return void (s.length > 0
                ? le
                    .info(`Currently highlighted users: ${s.join(",")}.`)
                    .into(this)
                : le.info("No highlighted users.").into(this));
            Pt.test(t[0]) || le.error(`Invalid nick - /${e} nick`).into(this);
            const i = t[0].toLowerCase(),
              n = s.indexOf(i);
            "UNHIGHLIGHT" === e
              ? -1 !== n && s.splice(n, 1)
              : -1 === n && s.push(i),
              le
                .info(
                  "HIGHLIGHT" === e.toUpperCase()
                    ? `Highlighting ${i}.`
                    : `No longer highlighting ${i}.`
                )
                .into(this),
              this.settings.set("highlightnicks", s),
              this.applySettings();
          }
          cmdTIMESTAMPFORMAT(t) {
            if (0 === t.length)
              le.info(
                `Current format: ${this.settings.get(
                  "timestampformat"
                )} (the default is 'HH:mm', for more info: http://momentjs.com/docs/#/displaying/format/)`
              ).into(this);
            else {
              const e = t.join(" ");
              /^[a-z :.,-\\*]+$/i.test(e)
                ? (this.settings.set("timestampformat", e),
                  this.applySettings(),
                  le.info(`New format: ${e}.`).into(this))
                : le
                    .error(
                      "Invalid format, see: http://momentjs.com/docs/#/displaying/format/"
                    )
                    .into(this);
            }
          }
          cmdBROADCAST(t) {
            this.source.send("BROADCAST", {
              data: t.join(" "),
            });
          }
          cmdRELOADUSERS() {
            this.source.send("RELOADUSERS", {});
          }
          cmdWHISPER(t) {
            if (t[0] && Pt.test(t[0]))
              if (t[0].toLowerCase() === this.user.username)
                le.error("Cannot send a message to yourself").into(this);
              else {
                const e = t.slice(1, t.length).join(" ");
                (this.replyusername = t[0]),
                  this.source.send("PRIVMSG", {
                    nick: t[0],
                    data: e,
                  });
              }
            else le.error("Invalid nick - /msg nick message").into(this);
          }
          cmdCONNECT(t) {
            this.source.connect(t[0]);
          }
          cmdTAG(t) {
            if (0 === t.length) {
              if (this.taggednicks.size > 0) {
                let t = "Tagged nicks\n\n";
                this.taggednicks.forEach((e, s) => {
                  const i = this.taggednotes.has(s)
                    ? this.taggednotes.get(s)
                    : "";
                  t += `    ${s} (${e}) ${i}\n`;
                }),
                  le.info(`${t}\n`).into(this);
              } else le.info("No tagged nicks.").into(this);
              return void le
                .info(
                  `Usage. /tag <nick> [<color>, <note>]\n(Available colors: ${lt.join(
                    ", "
                  )})`
                )
                .into(this);
            }
            if (!Pt.test(t[0]))
              return void le
                .error("Invalid nick - /tag <nick> [<color>, <note>]")
                .into(this);
            const e = t[0].toLowerCase();
            if (e === this.user.username)
              return void le.error("Cannot tag yourself").into(this);
            if (!this.users.has(e))
              return void le
                .error("User must be present in chat to tag.")
                .into(this);
            let s = "",
              i = "";
            t[1]
              ? (-1 !== lt.indexOf(t[1].toLowerCase())
                  ? ((s = t[1].toLowerCase()),
                    (i = t[2] ? t.slice(2, t.length).join(" ") : ""))
                  : ((s = lt[Math.floor(Math.random() * lt.length)]),
                    (i = t[1] ? t.slice(1, t.length).join(" ") : "")),
                i.length > 100 && (i = i.substr(0, 100)))
              : (s = lt[Math.floor(Math.random() * lt.length)]),
              this.taggednicks.set(e, s),
              this.taggednotes.set(e, i),
              this.settings.set("taggednicks", [...this.taggednicks]),
              this.settings.set("taggednotes", [...this.taggednotes]),
              this.applySettings(),
              le.info(`Tagged ${t[0]} as ${s}.`).into(this);
          }
          cmdUNTAG(t) {
            if (0 === t.length) {
              if (this.taggednicks.size > 0) {
                let t = "Tagged nicks\n\n";
                this.taggednicks.forEach((e, s) => {
                  const i = this.taggednotes.has(s)
                    ? this.taggednotes.get(s)
                    : "";
                  t += `    ${s} (${e}) ${i}\n`;
                }),
                  le.info(`${t}\n`).into(this);
              } else le.info("No tagged nicks.").into(this);
              return void le.info("Usage. /untag <nick>").into(this);
            }
            if (!Pt.test(t[0]))
              return void le
                .error("Invalid nick - /untag <nick> [<color>, <note>]")
                .into(this);
            const e = t[0].toLowerCase();
            this.mainwindow
              .getlines(`.msg-user[data-username="${e}"]`)
              .forEach((t) => {
                this.removeClasses("msg-tagged", t.classList.value).forEach(
                  (e) => t.classList.remove(e)
                ),
                  t.querySelector(".user").removeAttribute("title");
              }),
              this.taggednicks.delete(e),
              this.taggednotes.delete(e),
              this.settings.set("taggednicks", [...this.taggednicks]),
              this.settings.set("taggednotes", [...this.taggednotes]),
              this.applySettings(),
              le.info(`Un-tagged ${e}.`).into(this);
          }
          cmdEMBED(t) {
            const { location: e } = window.top || window.parent || window;
            try {
              e.hash = this.hashLinkConverter.convert(t[0]);
            } catch (t) {
              le.error(t.message).into(this),
                le
                  .info(
                    "Usage: /embed <link> OR /e <link> (Valid links: Twitch streams, VODs, clips, Youtube, Rumble, Kick streams)"
                  )
                  .into(this);
            }
          }
          cmdPOSTEMBED(t) {
            const { location: e } = window.top || window.parent || window;
            try {
              const e = this.hashLinkConverter.convert(t[0]);
              this.source.send("MSG", {
                data: `${e} ${t.slice(1).join(" ")}`,
              });
            } catch (s) {
              e.hash
                ? this.source.send("MSG", {
                    data: `${e.hash} ${t.join(" ")}`,
                  })
                : (s.message === Nt
                    ? le.error("Nothing embedded").into(this)
                    : le.error(s.message).into(this),
                  le
                    .info(
                      "Usage: /postembed [<link>] [<message>] (Alias: /pe) (Valid links: Twitch streams, VODs, clips, Youtube, Rumble, Kick streams)"
                    )
                    .into(this));
            }
          }
          cmdBANINFO() {
            le.info("Loading ban info ...").into(this),
              (0, i.hd)(`${this.config.api.base}/api/chat/me/ban`, {
                credentials: "include",
              })
                .then((t) => t.json())
                .then((t) => {
                  if ("bannotfound" === t)
                    return void le
                      .info("You have no active bans. Thank you.")
                      .into(this);
                  const e = {
                      id: 0,
                      userid: 0,
                      username: "",
                      targetuserid: "",
                      targetusername: "",
                      ipaddress: "",
                      reason: "",
                      starttimestamp: "",
                      endtimestamp: "",
                      ...t,
                    },
                    s = e.username ? e.username : "Chat",
                    i = c().utc(e.starttimestamp).local().format(ht.FULL);
                  if (e.endtimestamp) {
                    const t = c().utc(e.endtimestamp).local().calendar();
                    le.info(
                      `Temporary ban by ${s} started on ${i} and ending by ${t}.`
                    ).into(this);
                  } else
                    le.info(`Permanent ban by ${s} started on ${i}.`).into(
                      this
                    );
                  if (e.reason) {
                    const t = le.message(e.reason, new Et(s), e.starttimestamp);
                    (t.historical = !0), t.into(this);
                  }
                  le.info("End of ban information.").into(this);
                })
                .catch(() =>
                  le
                    .error("Error loading ban info. Check your profile.")
                    .into(this)
                );
          }
          cmdOPEN(t) {
            if (t[0])
              if (t.length > 1)
                le.error(
                  "Too many arguments provided - /open <username> OR /o <username>"
                ).into(this);
              else if (t[0] !== this.user.username) {
                const e = t[0].toLowerCase();
                void 0 !== this.getWindow(e)
                  ? this.windowToFront(e)
                  : (this.whispers.has(e) ||
                      this.whispers.set(e, {
                        nick: e,
                        unread: 0,
                        open: !1,
                      }),
                    this.openConversation(e));
              } else
                le.error(
                  "Can't open a convo with yourself - /open <username> OR /o <username>"
                ).into(this);
            else
              le.error(
                "No username specified - /open <username> OR /o <username>"
              ).into(this);
          }
          cmdEXIT() {
            const t = this.getActiveWindow();
            t !== this.mainwindow &&
              (this.windowToFront(this.mainwindow.name),
              this.removeWindow(t.name));
          }
          cmdREPLY() {
            const t = this.getActiveWindow(),
              e =
                t.lastmessage && t.lastmessage.user
                  ? t.lastmessage.user.displayName
                  : null,
              s =
                null !== this.replyusername && "" !== this.replyusername
                  ? this.replyusername
                  : e;
            null === s
              ? le.info("No one to reply to. :(").into(this)
              : this.input.val(`/w ${s} `),
              this.input.focus();
          }
          cmdSTALK(t) {
            if (!this.config.stalkEnabled)
              return void le
                .error("The `/stalk` command is disabled.")
                .into(this);
            if (
              (t[0] &&
                /^\d+$/.test(t[0]) &&
                ((t[1] = t[0]), (t[0] = this.user.username)),
              !t[0] || !Pt.test(t[0].toLowerCase()))
            )
              return void le
                .error("Invalid nick - /stalk <nick> <limit>")
                .into(this);
            if (this.busystalk)
              return void le
                .error(`Still busy stalking ${[t[0]]} ...`)
                .into(this);
            this.busystalk = !0;
            const e = t[1] ? parseInt(t[1], 10) : 3;
            le.info(`Getting messages from ${[t[0]]} ...`).into(this),
              (0, i.hd)(
                `${
                  this.config.api.base
                }/api/chat/stalk?username=${encodeURIComponent(
                  t[0]
                )}&limit=${e}`,
                {
                  credentials: "include",
                }
              )
                .then((t) => t.json())
                .then((e) => {
                  if (e && e.lines && 0 !== e.lines.length) {
                    const s = c()
                      .utc(1e3 * e.lines[e.lines.length - 1].timestamp)
                      .local()
                      .format(ht.FULL);
                    le.info(`Stalked ${t[0]} last seen ${s}.`).into(this),
                      e.lines.forEach((t) =>
                        le
                          .historical(t.text, new Et(e.nick), 1e3 * t.timestamp)
                          .into(this)
                      );
                  } else le.info(`No messages from ${t[0]}.`).into(this);
                })
                .catch(() =>
                  le
                    .error(
                      `No messages from ${t[0]} received. Try again later.`
                    )
                    .into(this)
                )
                .then(() => {
                  this.busystalk = !1;
                });
          }
          cmdMENTIONS(t) {
            if (!this.config.mentionsEnabled)
              return void le
                .error("The `/mentions` command is disabled.")
                .into(this);
            if (
              (t[0] &&
                /^\d+$/.test(t[0]) &&
                ((t[1] = t[0]), (t[0] = this.user.username)),
              t[0] || (t[0] = this.user.username),
              !t[0] || !Pt.test(t[0].toLowerCase()))
            )
              return void le
                .error("Invalid nick - /mentions <nick> <limit>")
                .into(this);
            if (this.busymentions)
              return void le
                .error(`Still busy getting ${[t[0]]}'s mentions`)
                .into(this);
            this.busymentions = !0;
            const e = t[1] ? parseInt(t[1], 10) : 3;
            le.info(`Getting mentions for ${[t[0]]} ...`).into(this),
              (0, i.hd)(
                `${
                  this.config.api.base
                }/api/chat/mentions?username=${encodeURIComponent(
                  t[0]
                )}&limit=${e}`,
                {
                  credentials: "include",
                }
              )
                .then((t) => t.json())
                .then((e) => {
                  if (e && 0 !== e.length) {
                    const s = c()
                      .utc(1e3 * e[e.length - 1].date)
                      .local()
                      .format(ht.FULL);
                    le.info(`Mentions for ${t[0]} last seen ${s}.`).into(this),
                      e.forEach((t) =>
                        le
                          .historical(t.text, new Et(t.nick), 1e3 * t.date)
                          .into(this)
                      );
                  } else le.info(`No mentions for ${t[0]}.`).into(this);
                })
                .catch(() =>
                  le
                    .error(`No mentions for ${t[0]} received. Try again later.`)
                    .into(this)
                )
                .then(() => {
                  this.busymentions = !1;
                });
          }
          cmdHOST(t, e) {
            let s = t[0];
            const { displayName: n, title: o } = e;
            if (this.user.hasAnyRoles(mo, po, go))
              if (s) {
                try {
                  s.startsWith("http://") ||
                    s.startsWith("https://") ||
                    (s = `https://${s}`),
                    new URL(s);
                } catch (t) {
                  return void le
                    .error(
                      "Invalid url - /host [--display-name <display-name>] [--title <title>] <url>"
                    )
                    .into(this);
                }
                (0, i.hd)(`${this.config.api.base}/api/stream/host`, {
                  body: JSON.stringify({
                    url: s,
                    displayName: n,
                    title: o,
                  }),
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "X-CSRF-Guard": "YEE",
                  },
                })
                  .then((t) => t.json())
                  .then((t) => {
                    t.success || le.error(t.message).into(this);
                  });
              } else
                le.error(
                  "No argument provided - /host [--display-name <display-name>] [--title <title>] <url>"
                ).into(this);
            else le.error(ut.get("nopermission")).into(this);
          }
          cmdUNHOST() {
            this.user.hasAnyRoles(mo, po, go)
              ? (0, i.hd)(`${this.config.api.base}/api/stream/unhost`, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "X-CSRF-Guard": "YEE",
                  },
                })
                  .then((t) => t.json())
                  .then((t) => {
                    t.success || le.error(t.message).into(this);
                  })
              : le.error(ut.get("nopermission")).into(this);
          }
          cmdPIN(t) {
            t.length
              ? this.source.send("PIN", {
                  data: t.join(" "),
                })
              : le.error("No message provided - /pin <message>").into(this);
          }
          cmdUNPIN() {
            this.source.send("PIN", {
              data: "",
            });
          }
          cmdADDPHRASE(t) {
            this.user.hasAnyFeatures(yt.ADMIN, yt.MODERATOR)
              ? t.length
                ? this.source.send("ADDPHRASE", {
                    data: t.join(" "),
                  })
                : le
                    .error("No phrase provided - /addphrase <phrase>")
                    .into(this)
              : le.error(ut.get("nopermission")).into(this);
          }
          cmdREMOVEPHRASE(t) {
            this.user.hasAnyFeatures(yt.ADMIN, yt.MODERATOR)
              ? t.length
                ? this.source.send("REMOVEPHRASE", {
                    data: t.join(" "),
                  })
                : le
                    .error("No phrase provided - /removephrase <phrase>")
                    .into(this)
              : le.error(ut.get("nopermission")).into(this);
          }
          cmdDIE() {
            this.source.send("DIE", {
              data: "",
            });
          }
          openConversation(t) {
            const e = t.toLowerCase(),
              s = this.whispers.get(e);
            s &&
              (Fn.closeMenus(this),
              this.windows.has(e) || this.createConversation(s, t, e),
              this.windowToFront(e),
              this.menus.get("whisper-users").redraw(),
              this.isDesktop && this.input.focus());
          }
          createConversation(t, e, s) {
            const n = this.users.get(s) || new Et(e),
              o = new uo(s, "chat-output-whisper", n.displayName).into(this);
            let a = !0;
            o.on("show", () => {
              a
                ? ((a = !1),
                  le.info(`Messages between you and ${e}`).into(this, o),
                  (0, i.hd)(
                    `${
                      this.config.api.base
                    }/api/messages/usr/${encodeURIComponent(
                      n.displayName
                    )}/inbox`,
                    {
                      credentials: "include",
                    }
                  )
                    .then((t) => t.json())
                    .then((t) => {
                      if (t.error) le.error(t.error).into(this, o);
                      else if (t.length > 0) {
                        const e = c()(t[0].timestamp).format(ht.FULL);
                        le.info(`Last message ${e}.`).into(this, o),
                          t.reverse().forEach((t) => {
                            const e =
                              this.users.get(t.from.toLowerCase()) ||
                              new Et(t.from);
                            le.historical(t.message, e, t.timestamp).into(
                              this,
                              o
                            );
                          });
                      }
                    })
                    .catch(() =>
                      le.error("Failed to load messages :(").into(this, o)
                    ))
                : t.unread > 0 &&
                  (0, i.hd)(
                    `${
                      this.config.api.base
                    }/api/messages/usr/${encodeURIComponent(s)}/inbox`,
                    {
                      credentials: "include",
                    }
                  ).catch(() =>
                    le.error("Failed to mark messages as read :(").into(this, o)
                  ),
                (t.unread = 0),
                (t.open = !0);
            }),
              o.on("hide", () => {
                t.open = !1;
              });
          }
          shouldHighlightMessage(t) {
            if (t.isown) return !1;
            let e = !1,
              s = !1,
              i = !1;
            return (
              this.regexhighlightself &&
                this.settings.get("highlight") &&
                (e = this.regexhighlightself.test(
                  this.removeLinksFromText(t.message)
                )),
              this.regexhighlightnicks &&
                (s = this.regexhighlightnicks.test(t.user.username)),
              this.regexhighlightcustom &&
                (i = this.regexhighlightcustom.test(
                  `${t.user.username} ${t.message}`
                )),
              e || s || i
            );
          }
          isBigscreenEmbed() {
            try {
              return this.bigscreenPath === window.top.location.pathname;
            } catch (t) {
              return !1;
            }
          }
          get bigscreenPath() {
            return "/bigscreen";
          }
          extractNicks(t) {
            return [...new Set(this.removeLinksFromText(t).match(Rt))];
          }
          removeLinksFromText(t) {
            const e = Q.I6(t);
            return 0 === e.length
              ? t
              : e.reduceRight(
                  (t, e) => t.slice(0, e.start) + t.slice(e.end),
                  t
                );
          }
          removeClasses(t, e) {
            return e.match(new RegExp(`\\b${t}(?:[A-z-]+)?\\b`, "g")) || [];
          }
          isArraysEqual(t, e) {
            return !(
              (t && e) ||
              (t.length === e.length &&
                t.sort().toString() === e.sort().toString())
            );
          }
          showNotification(t, e, s, i = !1) {
            if ("granted" === ft.permission) {
              const n = new ft(t, {
                body: e,
                tag: `dgg${s}`,
                icon: "/notifyicon.png?v2",
                dir: "auto",
              });
              i && setTimeout(() => n.close(), 8e3);
            }
          }
          parseTimeInterval(t) {
            const { number: e, unit: s } = t.match(It)?.groups ?? {};
            return (
              1e6 *
              c()
                .duration(e, (s ?? "seconds").toLowerCase())
                .asMilliseconds()
            );
          }
          loadCss(t) {
            const e = document.createElement("link");
            return (
              (e.href = t),
              (e.type = "text/css"),
              (e.rel = "stylesheet"),
              (e.media = "screen"),
              document.getElementsByTagName("head")[0].appendChild(e),
              e
            );
          }
          reqParam(t) {
            const e = t.replace(/[[\]]/g, "\\$&"),
              s = window.location || window.location.href || null,
              i = new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(s);
            return i && i[2]
              ? decodeURIComponent(i[2].replace(/\+/g, " "))
              : null;
          }
          extractHostname(t) {
            let e = t.indexOf("://") > -1 ? t.split("/")[2] : t.split("/")[0];
            return (e = e.split(":")[0]), (e = e.split("?")[0]), e;
          }
          handleRemoveEvent(t) {
            Fn.closeMenus(this),
              this.source.send("REMOVEEVENT", {
                data: t,
              });
          }
        };
    },
  },
]);

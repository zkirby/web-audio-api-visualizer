(window.webpackJsonp = window.webpackJsonp || []).push([
  [4, 3],
  {
    GybN: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, "default", function () {
          return c;
        });
      var n = r("q1tI"),
        o = r.n(n);
      var a = { error: void 0 },
        c = (function (t) {
          var e, r;
          function n() {
            for (
              var e, r = arguments.length, n = new Array(r), o = 0;
              o < r;
              o++
            )
              n[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(n)) || this).state = a), e
            );
          }
          (r = t),
            ((e = n).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = r);
          var c = n.prototype;
          return (
            (c.componentDidCatch = function (t) {
              var e = this;
              this.setState({ error: t }),
                setTimeout(function () {
                  return e.setState(a);
                }, 500);
            }),
            (c.render = function () {
              return o.a.createElement(
                "div",
                null,
                this.state.error &&
                  o.a.createElement(
                    "div",
                    { className: "error" },
                    this.state.error.message
                  ),
                this.props.children
              );
            }),
            n
          );
        })(o.a.Component);
    },
    "OmL/": function (t, e, r) {},
    RXBc: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r("q1tI"),
        o = r.n(n),
        a = r("hCUD"),
        c = r("GybN"),
        u = r("7O5W"),
        i = r("wHSu");
      r("OmL/");
      u.b.add(i.c, i.b, i.a);
      e.default = function () {
        return o.a.createElement(
          c.default,
          null,
          o.a.createElement(a.default, null)
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-3508fe0086506fe6ed8e.js.map

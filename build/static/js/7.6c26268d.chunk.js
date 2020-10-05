(this['webpackJsonpalfa-crm-test'] = this['webpackJsonpalfa-crm-test'] || []).push([
    [7],
    {
        74: function (n, t, e) {
            'use strict';
            e.r(t),
                e.d(t, 'Container', function () {
                    return u;
                }),
                e.d(t, 'Btn', function () {
                    return s;
                }),
                e.d(t, 'Name', function () {
                    return l;
                });
            var r = e(7),
                o = e(8);
            function a() {
                var n = Object(r.a)([
                    '\n    text-transform: uppercase;\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #fff;\n    user-select: none;\n',
                ]);
                return (
                    (a = function () {
                        return n;
                    }),
                    n
                );
            }
            function c() {
                var n = Object(r.a)([
                    '\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-height: 60px;\n    height: 100%;\n\n    ',
                    '\n\n    transition: all 300ms cubic-bezier(0.5, 0, 0, 1);\n',
                ]);
                return (
                    (c = function () {
                        return n;
                    }),
                    n
                );
            }
            function i() {
                var n = Object(r.a)([
                    '\n    display: flex;\n    width: 100%;\n    max-height: 60px;\n    height: 100%;\n    border-radius: 6px;\n    overflow: hidden;\n',
                ]);
                return (
                    (i = function () {
                        return n;
                    }),
                    n
                );
            }
            var u = o.a.div.attrs({ className: 'Button__container' })(i()),
                s = o.a.button.attrs({ className: 'Button__container--button' })(c(), function (n) {
                    return n.disable
                        ? 'background-color: #999999; pointer-event: none; '
                        : '\n            cursor: pointer;\n            pointer-event: all;\n            background-color: '
                              .concat(
                                  n.color
                                      ? ((t = n.color),
                                        'green' === t
                                            ? '#36a54e'
                                            : 'red' === t
                                            ? '#ed1c24'
                                            : 'blue' === t
                                            ? '#2182f6'
                                            : void 0)
                                      : '#999999',
                                  ';\n&:hover {\n        background-color: '
                              )
                              .concat(
                                  n.color
                                      ? (function (n) {
                                            return 'green' === n
                                                ? '#257033'
                                                : 'red' === n
                                                ? '#b21823'
                                                : 'blue' === n
                                                ? '#1966b2'
                                                : void 0;
                                        })(n.color)
                                      : '#999999',
                                  ';\n    }\n    '
                              );
                    var t;
                }),
                l = o.a.div.attrs({ className: 'Button__container--button-name' })(a());
        },
    },
]);
//# sourceMappingURL=7.6c26268d.chunk.js.map

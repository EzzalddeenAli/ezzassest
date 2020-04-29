!function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}
(this, function () {
	"use strict";
	var t;
	function e() {
		return t.apply(null, arguments)
	}
	function n(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}
	function i(t) {
		return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
	}
	function r(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}
	function s(t, e) {
		for (var n in e)
			r(e, n) && (t[n] = e[n]);
		return r(e, "toString") && (t.toString = e.toString),
		r(e, "valueOf") && (t.valueOf = e.valueOf),
		t
	}
	function a(t, e, n, i) {
		return xt(t, e, n, i, !0).utc()
	}
	function o(t) {
		return null == t._pf && (t._pf = {
				empty: !1,
				unusedTokens: [],
				unusedInput: [],
				overflow: -2,
				charsLeftOver: 0,
				nullInput: !1,
				invalidMonth: null,
				invalidFormat: !1,
				userInvalidated: !1,
				iso: !1
			}),
		t._pf
	}
	function u(t) {
		if (null == t._isValid) {
			var e = o(t);
			t._isValid = !(isNaN(t._d.getTime()) || !(e.overflow < 0) || e.empty || e.invalidMonth || e.invalidWeekday || e.nullInput || e.invalidFormat || e.userInvalidated),
			t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
		}
		return t._isValid
	}
	function d(t) {
		var e = a(NaN);
		return null != t ? s(o(e), t) : o(e).userInvalidated = !0,
		e
	}
	var l = e.momentProperties = [];
	function c(t, e) {
		var n,
		i,
		r;
		if (void 0 !== e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), void 0 !== e._i && (t._i = e._i), void 0 !== e._f && (t._f = e._f), void 0 !== e._l && (t._l = e._l), void 0 !== e._strict && (t._strict = e._strict), void 0 !== e._tzm && (t._tzm = e._tzm), void 0 !== e._isUTC && (t._isUTC = e._isUTC), void 0 !== e._offset && (t._offset = e._offset), void 0 !== e._pf && (t._pf = o(e)), void 0 !== e._locale && (t._locale = e._locale), l.length > 0)
			for (n in l)
				void 0 !== (r = e[i = l[n]]) && (t[i] = r);
		return t
	}
	var h = !1;
	function f(t) {
		c(this, t),
		this._d = new Date(null != t._d ? t._d.getTime() : NaN),
		!1 === h && (h = !0, e.updateOffset(this), h = !1)
	}
	function _(t) {
		return t instanceof f || null != t && null != t._isAMomentObject
	}
	function m(t) {
		return t < 0 ? Math.ceil(t) : Math.floor(t)
	}
	function y(t) {
		var e = +t,
		n = 0;
		return 0 !== e && isFinite(e) && (n = m(e)),
		n
	}
	function v(t, e, n) {
		var i,
		r = Math.min(t.length, e.length),
		s = Math.abs(t.length - e.length),
		a = 0;
		for (i = 0; i < r; i++)
			(n && t[i] !== e[i] || !n && y(t[i]) !== y(e[i])) && a++;
		return a + s
	}
	function M() {}
	var D,
	p = {};
	function g(t) {
		return t ? t.toLowerCase().replace("_", "-") : t
	}
	function Y(t) {
		var e = null;
		if (!p[t] && "undefined" != typeof module && module && module.exports)
			try {
				e = D._abbr,
				require("./locale/" + t),
				w(e)
			} catch (t) {}
		return p[t]
	}
	function w(t, e) {
		var n;
		return t && (n = void 0 === e ? T(t) : S(t, e)) && (D = n),
		D._abbr
	}
	function S(t, e) {
		return null !== e ? (e.abbr = t, p[t] = p[t] || new M, p[t].set(e), w(t), p[t]) : (delete p[t], null)
	}
	function T(t) {
		var e;
		if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
			return D;
		if (!n(t)) {
			if (e = Y(t))
				return e;
			t = [t]
		}
		return function (t) {
			for (var e, n, i, r, s = 0; s < t.length; ) {
				for (e = (r = g(t[s]).split("-")).length, n = (n = g(t[s + 1])) ? n.split("-") : null; e > 0; ) {
					if (i = Y(r.slice(0, e).join("-")))
						return i;
					if (n && n.length >= e && v(r, n, !0) >= e - 1)
						break;
					e--
				}
				s++
			}
			return null
		}
		(t)
	}
	var k = {};
	function O(t, e) {
		var n = t.toLowerCase();
		k[n] = k[n + "s"] = k[e] = t
	}
	function b(t) {
		return "string" == typeof t ? k[t] || k[t.toLowerCase()] : void 0
	}
	function L(t) {
		var e,
		n,
		i = {};
		for (n in t)
			r(t, n) && (e = b(n)) && (i[e] = t[n]);
		return i
	}
	function W(t, n) {
		return function (i) {
			return null != i ? (G(this, t, i), e.updateOffset(this, n), this) : C(this, t)
		}
	}
	function C(t, e) {
		return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
	}
	function G(t, e, n) {
		return t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
	}
	function F(t, e) {
		var n;
		if ("object" == typeof t)
			for (n in t)
				this.set(n, t[n]);
		else if ("function" == typeof this[t = b(t)])
			return this[t](e);
		return this
	}
	function U(t, e, n) {
		var i = "" + Math.abs(t),
		r = e - i.length;
		return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
	}
	var P = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
	H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	x = {},
	A = {};
	function I(t, e, n, i) {
		var r = i;
		"string" == typeof i && (r = function () {
			return this[i]()
		}),
		t && (A[t] = r),
		e && (A[e[0]] = function () {
			return U(r.apply(this, arguments), e[1], e[2])
		}),
		n && (A[n] = function () {
			return this.localeData().ordinal(r.apply(this, arguments), t)
		})
	}
	function z(t, e) {
		return t.isValid() ? (e = N(e, t.localeData()), x[e] = x[e] || function (t) {
			var e,
			n,
			i,
			r = t.match(P);
			for (e = 0, n = r.length; e < n; e++)
				A[r[e]] ? r[e] = A[r[e]] : r[e] = (i = r[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
			return function (i) {
				var s = "";
				for (e = 0; e < n; e++)
					s += r[e]instanceof Function ? r[e].call(i, t) : r[e];
				return s
			}
		}
			(e), x[e](t)) : t.localeData().invalidDate()
	}
	function N(t, e) {
		var n = 5;
		function i(t) {
			return e.longDateFormat(t) || t
		}
		for (H.lastIndex = 0; n >= 0 && H.test(t); )
			t = t.replace(H, i), H.lastIndex = 0, n -= 1;
		return t
	}
	var Z = /\d/,
	E = /\d\d/,
	j = /\d{3}/,
	V = /\d{4}/,
	q = /[+-]?\d{6}/,
	J = /\d\d?/,
	$ = /\d{1,3}/,
	R = /\d{1,4}/,
	B = /[+-]?\d{1,6}/,
	Q = /\d+/,
	X = /[+-]?\d+/,
	K = /Z|[+-]\d\d:?\d\d/gi,
	tt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
	et = {};
	function nt(t, e, n) {
		var i;
		et[t] = "function" == typeof(i = e) && "[object Function]" === Object.prototype.toString.call(i) ? e : function (t) {
			return t && n ? n : e
		}
	}
	function it(t, e) {
		return r(et, t) ? et[t](e._strict, e._locale) : new RegExp(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, r) {
				return e || n || i || r
			}).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
	}
	var rt = {};
	function st(t, e) {
		var n,
		i = e;
		for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) {
				n[e] = y(t)
			}), n = 0; n < t.length; n++)
			rt[t[n]] = i
	}
	function at(t, e) {
		st(t, function (t, n, i, r) {
			i._w = i._w || {},
			e(t, i._w, i, r)
		})
	}
	function ot(t, e, n) {
		null != e && r(rt, t) && rt[t](e, n._a, n, t)
	}
	var ut = 0,
	dt = 1,
	lt = 2,
	ct = 3,
	ht = 4,
	ft = 5,
	_t = 6;
	function mt(t, e) {
		return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
	}
	I("M", ["MM", 2], "Mo", function () {
		return this.month() + 1
	}),
	I("MMM", 0, 0, function (t) {
		return this.localeData().monthsShort(this, t)
	}),
	I("MMMM", 0, 0, function (t) {
		return this.localeData().months(this, t)
	}),
	O("month", "M"),
	nt("M", J),
	nt("MM", J, E),
	nt("MMM", tt),
	nt("MMMM", tt),
	st(["M", "MM"], function (t, e) {
		e[dt] = y(t) - 1
	}),
	st(["MMM", "MMMM"], function (t, e, n, i) {
		var r = n._locale.monthsParse(t, i, n._strict);
		null != r ? e[dt] = r : o(n).invalidMonth = t
	});
	var yt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
	var vt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
	function Mt(t, e) {
		var n;
		return "string" == typeof e && "number" != typeof(e = t.localeData().monthsParse(e)) ? t : (n = Math.min(t.date(), mt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
	}
	function Dt(t) {
		return null != t ? (Mt(this, t), e.updateOffset(this, !0), this) : C(this, "Month")
	}
	function pt(t) {
		var e,
		n = t._a;
		return n && -2 === o(t).overflow && (e = n[dt] < 0 || n[dt] > 11 ? dt : n[lt] < 1 || n[lt] > mt(n[ut], n[dt]) ? lt : n[ct] < 0 || n[ct] > 24 || 24 === n[ct] && (0 !== n[ht] || 0 !== n[ft] || 0 !== n[_t]) ? ct : n[ht] < 0 || n[ht] > 59 ? ht : n[ft] < 0 || n[ft] > 59 ? ft : n[_t] < 0 || n[_t] > 999 ? _t : -1, o(t)._overflowDayOfYear && (e < ut || e > lt) && (e = lt), o(t).overflow = e),
		t
	}
	function gt(t, e) {
		var n = !0;
		return s(function () {
			return n && ((new Error).stack, n = !1),
			e.apply(this, arguments)
		}, e)
	}
	var Yt = {};
	e.suppressDeprecationWarnings = !1;
	var wt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	St = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
	Tt = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
	kt = /^\/?Date\((\-?\d+)/i;
	function Ot(t) {
		var e,
		n,
		i = t._i,
		r = wt.exec(i);
		if (r) {
			for (o(t).iso = !0, e = 0, n = St.length; e < n; e++)
				if (St[e][1].exec(i)) {
					t._f = St[e][0];
					break
				}
			for (e = 0, n = Tt.length; e < n; e++)
				if (Tt[e][1].exec(i)) {
					t._f += (r[6] || " ") + Tt[e][0];
					break
				}
			i.match(K) && (t._f += "Z"),
			Pt(t)
		} else
			t._isValid = !1
	}
	function bt(t) {
		var e = new Date(Date.UTC.apply(null, arguments));
		return t < 1970 && e.setUTCFullYear(t),
		e
	}
	function Lt(t) {
		return Wt(t) ? 366 : 365
	}
	function Wt(t) {
		return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
	}
	e.createFromInputFallback = gt(0, function (t) {
			t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
		}),
	I(0, ["YY", 2], 0, function () {
		return this.year() % 100
	}),
	I(0, ["YYYY", 4], 0, "year"),
	I(0, ["YYYYY", 5], 0, "year"),
	I(0, ["YYYYYY", 6, !0], 0, "year"),
	O("year", "y"),
	nt("Y", X),
	nt("YY", J, E),
	nt("YYYY", R, V),
	nt("YYYYY", B, q),
	nt("YYYYYY", B, q),
	st(["YYYYY", "YYYYYY"], ut),
	st("YYYY", function (t, n) {
		n[ut] = 2 === t.length ? e.parseTwoDigitYear(t) : y(t)
	}),
	st("YY", function (t, n) {
		n[ut] = e.parseTwoDigitYear(t)
	}),
	e.parseTwoDigitYear = function (t) {
		return y(t) + (y(t) > 68 ? 1900 : 2e3)
	};
	var Ct = W("FullYear", !1);
	function Gt(t, e, n) {
		var i,
		r = n - e,
		s = n - t.day();
		return s > r && (s -= 7),
		s < r - 7 && (s += 7),
		i = At(t).add(s, "d"), {
			week: Math.ceil(i.dayOfYear() / 7),
			year: i.year()
		}
	}
	I("w", ["ww", 2], "wo", "week"),
	I("W", ["WW", 2], "Wo", "isoWeek"),
	O("week", "w"),
	O("isoWeek", "W"),
	nt("w", J),
	nt("ww", J, E),
	nt("W", J),
	nt("WW", J, E),
	at(["w", "ww", "W", "WW"], function (t, e, n, i) {
		e[i.substr(0, 1)] = y(t)
	});
	function Ft(t, e, n) {
		return null != t ? t : null != e ? e : n
	}
	function Ut(t) {
		var e,
		n,
		i,
		r,
		s = [];
		if (!t._d) {
			for (i = function (t) {
				var e = new Date;
				return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
			}
				(t), t._w && null == t._a[lt] && null == t._a[dt] && function (t) {
				var e,
				n,
				i,
				r,
				s,
				a,
				o;
				null != (e = t._w).GG || null != e.W || null != e.E ? (s = 1, a = 4, n = Ft(e.GG, t._a[ut], Gt(At(), 1, 4).year), i = Ft(e.W, 1), r = Ft(e.E, 1)) : (s = t._locale._week.dow, a = t._locale._week.doy, n = Ft(e.gg, t._a[ut], Gt(At(), s, a).year), i = Ft(e.w, 1), null != e.d ? (r = e.d) < s && ++i : r = null != e.e ? e.e + s : s);
				o = function (t, e, n, i, r) {
					var s,
					a = 6 + r - i,
					o = bt(t, 0, 1 + a).getUTCDay();
					return o < r && (o += 7), {
						year: (s = 1 + a + 7 * (e - 1) - o + (n = null != n ? 1 * n : r)) > 0 ? t : t - 1,
						dayOfYear: s > 0 ? s : Lt(t - 1) + s
					}
				}
				(n, i, r, a, s),
				t._a[ut] = o.year,
				t._dayOfYear = o.dayOfYear
			}
				(t), t._dayOfYear && (r = Ft(t._a[ut], i[ut]), t._dayOfYear > Lt(r) && (o(t)._overflowDayOfYear = !0), n = bt(r, 0, t._dayOfYear), t._a[dt] = n.getUTCMonth(), t._a[lt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e)
				t._a[e] = s[e] = i[e];
			for (; e < 7; e++)
				t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
			24 === t._a[ct] && 0 === t._a[ht] && 0 === t._a[ft] && 0 === t._a[_t] && (t._nextDay = !0, t._a[ct] = 0),
			t._d = (t._useUTC ? bt : function (t, e, n, i, r, s, a) {
				var o = new Date(t, e, n, i, r, s, a);
				return t < 1970 && o.setFullYear(t),
				o
			}).apply(null, s),
			null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
			t._nextDay && (t._a[ct] = 24)
		}
	}
	function Pt(t) {
		if (t._f !== e.ISO_8601) {
			t._a = [],
			o(t).empty = !0;
			var n,
			i,
			r,
			s,
			a,
			u = "" + t._i,
			d = u.length,
			l = 0;
			for (r = N(t._f, t._locale).match(P) || [], n = 0; n < r.length; n++)
				s = r[n], (i = (u.match(it(s, t)) || [])[0]) && ((a = u.substr(0, u.indexOf(i))).length > 0 && o(t).unusedInput.push(a), u = u.slice(u.indexOf(i) + i.length), l += i.length), A[s] ? (i ? o(t).empty = !1 : o(t).unusedTokens.push(s), ot(s, i, t)) : t._strict && !i && o(t).unusedTokens.push(s);
			o(t).charsLeftOver = d - l,
			u.length > 0 && o(t).unusedInput.push(u),
			!0 === o(t).bigHour && t._a[ct] <= 12 && t._a[ct] > 0 && (o(t).bigHour = void 0),
			t._a[ct] = function (t, e, n) {
				var i;
				if (null == n)
					return e;
				return null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
			}
			(t._locale, t._a[ct], t._meridiem),
			Ut(t),
			pt(t)
		} else
			Ot(t)
	}
	function Ht(t) {
		var r = t._i,
		a = t._f;
		return t._locale = t._locale || T(t._l),
		null === r || void 0 === a && "" === r ? d({
			nullInput: !0
		}) : ("string" == typeof r && (t._i = r = t._locale.preparse(r)), _(r) ? new f(pt(r)) : (n(a) ? function (t) {
				var e,
				n,
				i,
				r,
				a;
				if (0 === t._f.length)
					return o(t).invalidFormat = !0, void(t._d = new Date(NaN));
				for (r = 0; r < t._f.length; r++)
					a = 0, e = c({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], Pt(e), u(e) && (a += o(e).charsLeftOver, a += 10 * o(e).unusedTokens.length, o(e).score = a, (null == i || a < i) && (i = a, n = e));
				s(t, n || e)
			}
				(t) : a ? Pt(t) : i(r) ? t._d = r : function (t) {
				var r = t._i;
				void 0 === r ? t._d = new Date : i(r) ? t._d = new Date(+r) : "string" == typeof r ? function (t) {
					var n = kt.exec(t._i);
					null === n ? (Ot(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t))) : t._d = new Date(+n[1])
				}
				(t) : n(r) ? (t._a = function (t, e) {
					var n,
					i = [];
					for (n = 0; n < t.length; ++n)
						i.push(e(t[n], n));
					return i
				}
					(r.slice(0), function (t) {
						return parseInt(t, 10)
					}), Ut(t)) : "object" == typeof r ? function (t) {
					if (!t._d) {
						var e = L(t._i);
						t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond],
						Ut(t)
					}
				}
				(t) : "number" == typeof r ? t._d = new Date(r) : e.createFromInputFallback(t)
			}
				(t), t))
	}
	function xt(t, e, n, i, r) {
		var s,
		a = {};
		return "boolean" == typeof n && (i = n, n = void 0),
		a._isAMomentObject = !0,
		a._useUTC = a._isUTC = r,
		a._l = n,
		a._i = t,
		a._f = e,
		a._strict = i,
		(s = new f(pt(Ht(a))))._nextDay && (s.add(1, "d"), s._nextDay = void 0),
		s
	}
	function At(t, e, n, i) {
		return xt(t, e, n, i, !1)
	}
	I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
	O("dayOfYear", "DDD"),
	nt("DDD", $),
	nt("DDDD", j),
	st(["DDD", "DDDD"], function (t, e, n) {
		n._dayOfYear = y(t)
	}),
	e.ISO_8601 = function () {};
	var It = gt(0, function () {
			var t = At.apply(null, arguments);
			return t < this ? this : t
		}),
	zt = gt(0, function () {
			var t = At.apply(null, arguments);
			return t > this ? this : t
		});
	function Nt(t, e) {
		var i,
		r;
		if (1 === e.length && n(e[0]) && (e = e[0]), !e.length)
			return At();
		for (i = e[0], r = 1; r < e.length; ++r)
			e[r].isValid() && !e[r][t](i) || (i = e[r]);
		return i
	}
	function Zt(t) {
		var e = L(t),
		n = e.year || 0,
		i = e.quarter || 0,
		r = e.month || 0,
		s = e.week || 0,
		a = e.day || 0,
		o = e.hour || 0,
		u = e.minute || 0,
		d = e.second || 0,
		l = e.millisecond || 0;
		this._milliseconds = +l + 1e3 * d + 6e4 * u + 36e5 * o,
		this._days = +a + 7 * s,
		this._months = +r + 3 * i + 12 * n,
		this._data = {},
		this._locale = T(),
		this._bubble()
	}
	function Et(t) {
		return t instanceof Zt
	}
	function jt(t, e) {
		I(t, 0, 0, function () {
			var t = this.utcOffset(),
			n = "+";
			return t < 0 && (t = -t, n = "-"),
			n + U(~~(t / 60), 2) + e + U(~~t % 60, 2)
		})
	}
	jt("Z", ":"),
	jt("ZZ", ""),
	nt("Z", K),
	nt("ZZ", K),
	st(["Z", "ZZ"], function (t, e, n) {
		n._useUTC = !0,
		n._tzm = qt(t)
	});
	var Vt = /([\+\-]|\d\d)/gi;
	function qt(t) {
		var e = (t || "").match(K) || [],
		n = ((e[e.length - 1] || []) + "").match(Vt) || ["-", 0, 0],
		i = 60 * n[1] + y(n[2]);
		return "+" === n[0] ? i : -i
	}
	function Jt(t, n) {
		var r,
		s;
		return n._isUTC ? (r = n.clone(), s = (_(t) || i(t) ? +t : +At(t)) - +r, r._d.setTime(+r._d + s), e.updateOffset(r, !1), r) : At(t).local()
	}
	function $t(t) {
		return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
	}
	function Rt() {
		return this._isUTC && 0 === this._offset
	}
	e.updateOffset = function () {};
	var Bt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
	Qt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
	function Xt(t, e) {
		var n,
		i,
		s,
		a = t,
		o = null;
		return Et(t) ? a = {
			ms: t._milliseconds,
			d: t._days,
			M: t._months
		}
		 : "number" == typeof t ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (o = Bt.exec(t)) ? (n = "-" === o[1] ? -1 : 1, a = {
				y: 0,
				d: y(o[lt]) * n,
				h: y(o[ct]) * n,
				m: y(o[ht]) * n,
				s: y(o[ft]) * n,
				ms: y(o[_t]) * n
			}) : (o = Qt.exec(t)) ? (n = "-" === o[1] ? -1 : 1, a = {
				y: Kt(o[2], n),
				M: Kt(o[3], n),
				d: Kt(o[4], n),
				h: Kt(o[5], n),
				m: Kt(o[6], n),
				s: Kt(o[7], n),
				w: Kt(o[8], n)
			}) : null == a ? a = {}
		 : "object" == typeof a && ("from" in a || "to" in a) && (s = function (t, e) {
			var n;
			e = Jt(e, t),
			t.isBefore(e) ? n = te(t, e) : ((n = te(e, t)).milliseconds = -n.milliseconds, n.months = -n.months);
			return n
		}
			(At(a.from), At(a.to)), (a = {}).ms = s.milliseconds, a.M = s.months),
		i = new Zt(a),
		Et(t) && r(t, "_locale") && (i._locale = t._locale),
		i
	}
	function Kt(t, e) {
		var n = t && parseFloat(t.replace(",", "."));
		return (isNaN(n) ? 0 : n) * e
	}
	function te(t, e) {
		var n = {
			milliseconds: 0,
			months: 0
		};
		return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
		t.clone().add(n.months, "M").isAfter(e) && --n.months,
		n.milliseconds = +e - +t.clone().add(n.months, "M"),
		n
	}
	function ee(t, e) {
		return function (n, i) {
			var r;
			return null === i || isNaN(+i) || (!function (t, e) {
				Yt[t] || (Yt[t] = !0)
			}
				(e), r = n, n = i, i = r),
			ne(this, Xt(n = "string" == typeof n ? +n : n, i), t),
			this
		}
	}
	function ne(t, n, i, r) {
		var s = n._milliseconds,
		a = n._days,
		o = n._months;
		r = null == r || r,
		s && t._d.setTime(+t._d + s * i),
		a && G(t, "Date", C(t, "Date") + a * i),
		o && Mt(t, C(t, "Month") + o * i),
		r && e.updateOffset(t, a || o)
	}
	Xt.fn = Zt.prototype;
	var ie = ee(1, "add"),
	re = ee(-1, "subtract");
	function se() {
		var t = this.clone().utc();
		return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : z(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}
	function ae(t) {
		var e;
		return void 0 === t ? this._locale._abbr : (null != (e = T(t)) && (this._locale = e), this)
	}
	e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
	var oe = gt(0, function (t) {
			return void 0 === t ? this.localeData() : this.locale(t)
		});
	function ue() {
		return this._locale
	}
	function de(t, e) {
		I(0, [t, t.length], 0, e)
	}
	function le(t, e, n) {
		return Gt(At([t, 11, 31 + e - n]), e, n).week
	}
	I(0, ["gg", 2], 0, function () {
		return this.weekYear() % 100
	}),
	I(0, ["GG", 2], 0, function () {
		return this.isoWeekYear() % 100
	}),
	de("gggg", "weekYear"),
	de("ggggg", "weekYear"),
	de("GGGG", "isoWeekYear"),
	de("GGGGG", "isoWeekYear"),
	O("weekYear", "gg"),
	O("isoWeekYear", "GG"),
	nt("G", X),
	nt("g", X),
	nt("GG", J, E),
	nt("gg", J, E),
	nt("GGGG", R, V),
	nt("gggg", R, V),
	nt("GGGGG", B, q),
	nt("ggggg", B, q),
	at(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
		e[i.substr(0, 2)] = y(t)
	}),
	at(["gg", "GG"], function (t, n, i, r) {
		n[r] = e.parseTwoDigitYear(t)
	}),
	I("Q", 0, 0, "quarter"),
	O("quarter", "Q"),
	nt("Q", Z),
	st("Q", function (t, e) {
		e[dt] = 3 * (y(t) - 1)
	}),
	I("D", ["DD", 2], "Do", "date"),
	O("date", "D"),
	nt("D", J),
	nt("DD", J, E),
	nt("Do", function (t, e) {
		return t ? e._ordinalParse : e._ordinalParseLenient
	}),
	st(["D", "DD"], lt),
	st("Do", function (t, e) {
		e[lt] = y(t.match(J)[0])
	});
	var ce = W("Date", !0);
	I("d", 0, "do", "day"),
	I("dd", 0, 0, function (t) {
		return this.localeData().weekdaysMin(this, t)
	}),
	I("ddd", 0, 0, function (t) {
		return this.localeData().weekdaysShort(this, t)
	}),
	I("dddd", 0, 0, function (t) {
		return this.localeData().weekdays(this, t)
	}),
	I("e", 0, 0, "weekday"),
	I("E", 0, 0, "isoWeekday"),
	O("day", "d"),
	O("weekday", "e"),
	O("isoWeekday", "E"),
	nt("d", J),
	nt("e", J),
	nt("E", J),
	nt("dd", tt),
	nt("ddd", tt),
	nt("dddd", tt),
	at(["dd", "ddd", "dddd"], function (t, e, n) {
		var i = n._locale.weekdaysParse(t);
		null != i ? e.d = i : o(n).invalidWeekday = t
	}),
	at(["d", "e", "E"], function (t, e, n, i) {
		e[i] = y(t)
	});
	var he = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
	var fe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
	var _e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
	function me(t, e) {
		I(t, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), e)
		})
	}
	function ye(t, e) {
		return e._meridiemParse
	}
	I("H", ["HH", 2], 0, "hour"),
	I("h", ["hh", 2], 0, function () {
		return this.hours() % 12 || 12
	}),
	me("a", !0),
	me("A", !1),
	O("hour", "h"),
	nt("a", ye),
	nt("A", ye),
	nt("H", J),
	nt("h", J),
	nt("HH", J, E),
	nt("hh", J, E),
	st(["H", "HH"], ct),
	st(["a", "A"], function (t, e, n) {
		n._isPm = n._locale.isPM(t),
		n._meridiem = t
	}),
	st(["h", "hh"], function (t, e, n) {
		e[ct] = y(t),
		o(n).bigHour = !0
	});
	var ve = W("Hours", !0);
	I("m", ["mm", 2], 0, "minute"),
	O("minute", "m"),
	nt("m", J),
	nt("mm", J, E),
	st(["m", "mm"], ht);
	var Me = W("Minutes", !1);
	I("s", ["ss", 2], 0, "second"),
	O("second", "s"),
	nt("s", J),
	nt("ss", J, E),
	st(["s", "ss"], ft);
	var De,
	pe = W("Seconds", !1);
	for (I("S", 0, 0, function () {
			return ~~(this.millisecond() / 100)
		}), I(0, ["SS", 2], 0, function () {
			return ~~(this.millisecond() / 10)
		}), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
			return 10 * this.millisecond()
		}), I(0, ["SSSSS", 5], 0, function () {
			return 100 * this.millisecond()
		}), I(0, ["SSSSSS", 6], 0, function () {
			return 1e3 * this.millisecond()
		}), I(0, ["SSSSSSS", 7], 0, function () {
			return 1e4 * this.millisecond()
		}), I(0, ["SSSSSSSS", 8], 0, function () {
			return 1e5 * this.millisecond()
		}), I(0, ["SSSSSSSSS", 9], 0, function () {
			return 1e6 * this.millisecond()
		}), O("millisecond", "ms"), nt("S", $, Z), nt("SS", $, E), nt("SSS", $, j), De = "SSSS"; De.length <= 9; De += "S")
		nt(De, Q);
	function ge(t, e) {
		e[_t] = y(1e3 * ("0." + t))
	}
	for (De = "S"; De.length <= 9; De += "S")
		st(De, ge);
	var Ye = W("Milliseconds", !1);
	I("z", 0, 0, "zoneAbbr"),
	I("zz", 0, 0, "zoneName");
	var we = f.prototype;
	we.add = ie,
	we.calendar = function (t, e) {
		var n = t || At(),
		i = Jt(n, this).startOf("day"),
		r = this.diff(i, "days", !0),
		s = r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
		return this.format(e && e[s] || this.localeData().calendar(s, this, At(n)))
	},
	we.clone = function () {
		return new f(this)
	},
	we.diff = function (t, e, n) {
		var i,
		r,
		s = Jt(t, this),
		a = 6e4 * (s.utcOffset() - this.utcOffset());
		return "year" === (e = b(e)) || "month" === e || "quarter" === e ? (o = this, u = s, c = 12 * (u.year() - o.year()) + (u.month() - o.month()), h = o.clone().add(c, "months"), u - h < 0 ? (d = o.clone().add(c - 1, "months"), l = (u - h) / (h - d)) : (d = o.clone().add(c + 1, "months"), l = (u - h) / (d - h)), r =  - (c + l), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (i = this - s, r = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - a) / 864e5 : "week" === e ? (i - a) / 6048e5 : i),
		n ? r : m(r);
		var o,
		u,
		d,
		l,
		c,
		h
	},
	we.endOf = function (t) {
		return void 0 === (t = b(t)) || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
	},
	we.format = function (t) {
		var n = z(this, t || e.defaultFormat);
		return this.localeData().postformat(n)
	},
	we.from = function (t, e) {
		return this.isValid() ? Xt({
			to: this,
			from: t
		}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
	},
	we.fromNow = function (t) {
		return this.from(At(), t)
	},
	we.to = function (t, e) {
		return this.isValid() ? Xt({
			from: this,
			to: t
		}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
	},
	we.toNow = function (t) {
		return this.to(At(), t)
	},
	we.get = F,
	we.invalidAt = function () {
		return o(this).overflow
	},
	we.isAfter = function (t, e) {
		return "millisecond" === (e = b(void 0 !== e ? e : "millisecond")) ? +this >  + (t = _(t) ? t : At(t)) : (_(t) ? +t : +At(t)) < +this.clone().startOf(e)
	},
	we.isBefore = function (t, e) {
		var n;
		return "millisecond" === (e = b(void 0 !== e ? e : "millisecond")) ? +this <  + (t = _(t) ? t : At(t)) : (n = _(t) ? +t : +At(t), +this.clone().endOf(e) < n)
	},
	we.isBetween = function (t, e, n) {
		return this.isAfter(t, n) && this.isBefore(e, n)
	},
	we.isSame = function (t, e) {
		var n;
		return "millisecond" === (e = b(e || "millisecond")) ? +this ==  + (t = _(t) ? t : At(t)) : (n = +At(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
	},
	we.isValid = function () {
		return u(this)
	},
	we.lang = oe,
	we.locale = ae,
	we.localeData = ue,
	we.max = zt,
	we.min = It,
	we.parsingFlags = function () {
		return s({}, o(this))
	},
	we.set = F,
	we.startOf = function (t) {
		switch (t = b(t)) {
		case "year":
			this.month(0);
		case "quarter":
		case "month":
			this.date(1);
		case "week":
		case "isoWeek":
		case "day":
			this.hours(0);
		case "hour":
			this.minutes(0);
		case "minute":
			this.seconds(0);
		case "second":
			this.milliseconds(0)
		}
		return "week" === t && this.weekday(0),
		"isoWeek" === t && this.isoWeekday(1),
		"quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
		this
	},
	we.subtract = re,
	we.toArray = function () {
		var t = this;
		return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
	},
	we.toObject = function () {
		var t = this;
		return {
			years: t.year(),
			months: t.month(),
			date: t.date(),
			hours: t.hours(),
			minutes: t.minutes(),
			seconds: t.seconds(),
			milliseconds: t.milliseconds()
		}
	},
	we.toDate = function () {
		return this._offset ? new Date(+this) : this._d
	},
	we.toISOString = se,
	we.toJSON = se,
	we.toString = function () {
		return this.clone().locale("ar").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	},
	we.unix = function () {
		return Math.floor(+this / 1e3)
	},
	we.valueOf = function () {
		return +this._d - 6e4 * (this._offset || 0)
	},
	we.year = Ct,
	we.isLeapYear = function () {
		return Wt(this.year())
	},
	we.weekYear = function (t) {
		var e = Gt(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
		return null == t ? e : this.add(t - e, "y")
	},
	we.isoWeekYear = function (t) {
		var e = Gt(this, 1, 4).year;
		return null == t ? e : this.add(t - e, "y")
	},
	we.quarter = we.quarters = function (t) {
		return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
	},
	we.month = Dt,
	we.daysInMonth = function () {
		return mt(this.year(), this.month())
	},
	we.week = we.weeks = function (t) {
		var e = this.localeData().week(this);
		return null == t ? e : this.add(7 * (t - e), "d")
	},
	we.isoWeek = we.isoWeeks = function (t) {
		var e = Gt(this, 1, 4).week;
		return null == t ? e : this.add(7 * (t - e), "d")
	},
	we.weeksInYear = function () {
		var t = this.localeData()._week;
		return le(this.year(), t.dow, t.doy)
	},
	we.isoWeeksInYear = function () {
		return le(this.year(), 1, 4)
	},
	we.date = ce,
	we.day = we.days = function (t) {
		var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != t ? (t = function (t, e) {
			return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
		}
			(t, this.localeData()), this.add(t - e, "d")) : e
	},
	we.weekday = function (t) {
		var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == t ? e : this.add(t - e, "d")
	},
	we.isoWeekday = function (t) {
		return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
	},
	we.dayOfYear = function (t) {
		var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == t ? e : this.add(t - e, "d")
	},
	we.hour = we.hours = ve,
	we.minute = we.minutes = Me,
	we.second = we.seconds = pe,
	we.millisecond = we.milliseconds = Ye,
	we.utcOffset = function (t, n) {
		var i,
		r = this._offset || 0;
		return null != t ? ("string" == typeof t && (t = qt(t)), Math.abs(t) < 16 && (t *= 60), !this._isUTC && n && (i = $t(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? ne(this, Xt(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : $t(this)
	},
	we.utc = function (t) {
		return this.utcOffset(0, t)
	},
	we.local = function (t) {
		return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract($t(this), "m")),
		this
	},
	we.parseZone = function () {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(qt(this._i)),
		this
	},
	we.hasAlignedHourOffset = function (t) {
		return t = t ? At(t).utcOffset() : 0,
		(this.utcOffset() - t) % 60 == 0
	},
	we.isDST = function () {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	},
	we.isDSTShifted = function () {
		if (void 0 !== this._isDSTShifted)
			return this._isDSTShifted;
		var t = {};
		if (c(t, this), (t = Ht(t))._a) {
			var e = t._isUTC ? a(t._a) : At(t._a);
			this._isDSTShifted = this.isValid() && v(t._a, e.toArray()) > 0
		} else
			this._isDSTShifted = !1;
		return this._isDSTShifted
	},
	we.isLocal = function () {
		return !this._isUTC
	},
	we.isUtcOffset = function () {
		return this._isUTC
	},
	we.isUtc = Rt,
	we.isUTC = Rt,
	we.zoneAbbr = function () {
		return this._isUTC ? "UTC" : ""
	},
	we.zoneName = function () {
		return this._isUTC ? "Coordinated Universal Time" : ""
	},
	we.dates = gt(0, ce),
	we.months = gt(0, Dt),
	we.years = gt(0, Ct),
	we.zone = gt(0, function (t, e) {
			return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
		});
	var Se = we;
	function Te(t) {
		return t
	}
	var ke = M.prototype;
	function Oe(t, e, n, i) {
		var r = T(),
		s = a().set(i, e);
		return r[n](s, t)
	}
	function be(t, e, n, i, r) {
		if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)
			return Oe(t, e, n, r);
		var s,
		a = [];
		for (s = 0; s < i; s++)
			a[s] = Oe(t, s, n, r);
		return a
	}
	ke._calendar = {
		sameDay: "[Today at] LT",
		nextDay: "[Tomorrow at] LT",
		nextWeek: "dddd [at] LT",
		lastDay: "[Yesterday at] LT",
		lastWeek: "[Last] dddd [at] LT",
		sameElse: "L"
	},
	ke.calendar = function (t, e, n) {
		var i = this._calendar[t];
		return "function" == typeof i ? i.call(e, n) : i
	},
	ke._longDateFormat = {
		LTS: "h:mm:ss A",
		LT: "h:mm A",
		L: "MM/DD/YYYY",
		LL: "MMMM D, YYYY",
		LLL: "MMMM D, YYYY h:mm A",
		LLLL: "dddd, MMMM D, YYYY h:mm A"
	},
	ke.longDateFormat = function (t) {
		var e = this._longDateFormat[t],
		n = this._longDateFormat[t.toUpperCase()];
		return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
					return t.slice(1)
				}), this._longDateFormat[t])
	},
	ke._invalidDate = "Invalid date",
	ke.invalidDate = function () {
		return this._invalidDate
	},
	ke._ordinal = "%d",
	ke.ordinal = function (t) {
		return this._ordinal.replace("%d", t)
	},
	ke._ordinalParse = /\d{1,2}/,
	ke.preparse = Te,
	ke.postformat = Te,
	ke._relativeTime = {
		future: "in %s",
		past: "%s ago",
		s: "a few seconds",
		m: "a minute",
		mm: "%d minutes",
		h: "an hour",
		hh: "%d hours",
		d: "a day",
		dd: "%d days",
		M: "a month",
		MM: "%d months",
		y: "a year",
		yy: "%d years"
	},
	ke.relativeTime = function (t, e, n, i) {
		var r = this._relativeTime[n];
		return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t)
	},
	ke.pastFuture = function (t, e) {
		var n = this._relativeTime[t > 0 ? "future" : "past"];
		return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
	},
	ke.set = function (t) {
		var e,
		n;
		for (n in t)
			"function" == typeof(e = t[n]) ? this[n] = e : this["_" + n] = e;
		this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	},
	ke.months = function (t) {
		return this._months[t.month()]
	},
	ke._months = yt,
	ke.monthsShort = function (t) {
		return this._monthsShort[t.month()]
	},
	ke._monthsShort = vt,
	ke.monthsParse = function (t, e, n) {
		var i,
		r,
		s;
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
			if (r = a([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t))
				return i;
			if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
				return i;
			if (!n && this._monthsParse[i].test(t))
				return i
		}
	},
	ke.week = function (t) {
		return Gt(t, this._week.dow, this._week.doy).week
	},
	ke._week = {
		dow: 0,
		doy: 6
	},
	ke.firstDayOfYear = function () {
		return this._week.doy
	},
	ke.firstDayOfWeek = function () {
		return this._week.dow
	},
	ke.weekdays = function (t) {
		return this._weekdays[t.day()]
	},
	ke._weekdays = he,
	ke.weekdaysMin = function (t) {
		return this._weekdaysMin[t.day()]
	},
	ke._weekdaysMin = _e,
	ke.weekdaysShort = function (t) {
		return this._weekdaysShort[t.day()]
	},
	ke._weekdaysShort = fe,
	ke.weekdaysParse = function (t) {
		var e,
		n,
		i;
		for (this._weekdaysParse = this._weekdaysParse || [], e = 0; e < 7; e++)
			if (this._weekdaysParse[e] || (n = At([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t))
				return e
	},
	ke.isPM = function (t) {
		return "p" === (t + "").toLowerCase().charAt(0)
	},
	ke._meridiemParse = /[ap]\.?m?\.?/i,
	ke.meridiem = function (t, e, n) {
		return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
	},
	w("ar", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function (t) {
			var e = t % 10;
			return t + (1 === y(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
		}
	}),
	e.lang = gt(0, w),
	e.langData = gt(0, T);
	var Le = Math.abs;
	function We(t, e, n, i) {
		var r = Xt(e, n);
		return t._milliseconds += i * r._milliseconds,
		t._days += i * r._days,
		t._months += i * r._months,
		t._bubble()
	}
	function Ce(t) {
		return t < 0 ? Math.floor(t) : Math.ceil(t)
	}
	function Ge(t) {
		return 4800 * t / 146097
	}
	function Fe(t) {
		return 146097 * t / 4800
	}
	function Ue(t) {
		return function () {
			return this.as(t)
		}
	}
	var Pe = Ue("ms"),
	He = Ue("s"),
	xe = Ue("m"),
	Ae = Ue("h"),
	Ie = Ue("d"),
	ze = Ue("w"),
	Ne = Ue("M"),
	Ze = Ue("y");
	function Ee(t) {
		return function () {
			return this._data[t]
		}
	}
	var je = Ee("milliseconds"),
	Ve = Ee("seconds"),
	qe = Ee("minutes"),
	Je = Ee("hours"),
	$e = Ee("days"),
	Re = Ee("months"),
	Be = Ee("years");
	var Qe = Math.round,
	Xe = {
		s: 45,
		m: 45,
		h: 22,
		d: 26,
		M: 11
	};
	var Ke = Math.abs;
	function tn() {
		var t,
		e,
		n = Ke(this._milliseconds) / 1e3,
		i = Ke(this._days),
		r = Ke(this._months);
		t = m(n / 60),
		e = m(t / 60),
		n %= 60,
		t %= 60;
		var s = m(r / 12),
		a = r %= 12,
		o = i,
		u = e,
		d = t,
		l = n,
		c = this.asSeconds();
		return c ? (c < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (o ? o + "D" : "") + (u || d || l ? "T" : "") + (u ? u + "H" : "") + (d ? d + "M" : "") + (l ? l + "S" : "") : "P0D"
	}
	var en = Zt.prototype;
	en.abs = function () {
		var t = this._data;
		return this._milliseconds = Le(this._milliseconds),
		this._days = Le(this._days),
		this._months = Le(this._months),
		t.milliseconds = Le(t.milliseconds),
		t.seconds = Le(t.seconds),
		t.minutes = Le(t.minutes),
		t.hours = Le(t.hours),
		t.months = Le(t.months),
		t.years = Le(t.years),
		this
	},
	en.add = function (t, e) {
		return We(this, t, e, 1)
	},
	en.subtract = function (t, e) {
		return We(this, t, e, -1)
	},
	en.as = function (t) {
		var e,
		n,
		i = this._milliseconds;
		if ("month" === (t = b(t)) || "year" === t)
			return e = this._days + i / 864e5, n = this._months + Ge(e), "month" === t ? n : n / 12;
		switch (e = this._days + Math.round(Fe(this._months)), t) {
		case "week":
			return e / 7 + i / 6048e5;
		case "day":
			return e + i / 864e5;
		case "hour":
			return 24 * e + i / 36e5;
		case "minute":
			return 1440 * e + i / 6e4;
		case "second":
			return 86400 * e + i / 1e3;
		case "millisecond":
			return Math.floor(864e5 * e) + i;
		default:
			throw new Error("Unknown unit " + t)
		}
	},
	en.asMilliseconds = Pe,
	en.asSeconds = He,
	en.asMinutes = xe,
	en.asHours = Ae,
	en.asDays = Ie,
	en.asWeeks = ze,
	en.asMonths = Ne,
	en.asYears = Ze,
	en.valueOf = function () {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
	},
	en._bubble = function () {
		var t,
		e,
		n,
		i,
		r,
		s = this._milliseconds,
		a = this._days,
		o = this._months,
		u = this._data;
		return s >= 0 && a >= 0 && o >= 0 || s <= 0 && a <= 0 && o <= 0 || (s += 864e5 * Ce(Fe(o) + a), a = 0, o = 0),
		u.milliseconds = s % 1e3,
		t = m(s / 1e3),
		u.seconds = t % 60,
		e = m(t / 60),
		u.minutes = e % 60,
		n = m(e / 60),
		u.hours = n % 24,
		a += m(n / 24),
		o += r = m(Ge(a)),
		a -= Ce(Fe(r)),
		i = m(o / 12),
		o %= 12,
		u.days = a,
		u.months = o,
		u.years = i,
		this
	},
	en.get = function (t) {
		return this[(t = b(t)) + "s"]()
	},
	en.milliseconds = je,
	en.seconds = Ve,
	en.minutes = qe,
	en.hours = Je,
	en.days = $e,
	en.weeks = function () {
		return m(this.days() / 7)
	},
	en.months = Re,
	en.years = Be,
	en.humanize = function (t) {
		var e = this.localeData(),
		n = function (t, e, n) {
			var i = Xt(t).abs(),
			r = Qe(i.as("s")),
			s = Qe(i.as("m")),
			a = Qe(i.as("h")),
			o = Qe(i.as("d")),
			u = Qe(i.as("M")),
			d = Qe(i.as("y")),
			l = r < Xe.s && ["s", r] || 1 === s && ["m"] || s < Xe.m && ["mm", s] || 1 === a && ["h"] || a < Xe.h && ["hh", a] || 1 === o && ["d"] || o < Xe.d && ["dd", o] || 1 === u && ["M"] || u < Xe.M && ["MM", u] || 1 === d && ["y"] || ["yy", d];
			return l[2] = e,
			l[3] = +t > 0,
			l[4] = n,
			function (t, e, n, i, r) {
				return r.relativeTime(e || 1, !!n, t, i)
			}
			.apply(null, l)
		}
		(this, !t, e);
		return t && (n = e.pastFuture(+this, n)),
		e.postformat(n)
	},
	en.toISOString = tn,
	en.toString = tn,
	en.toJSON = tn,
	en.locale = ae,
	en.localeData = ue,
	en.toIsoString = gt(0, tn),
	en.lang = oe,
	I("X", 0, 0, "unix"),
	I("x", 0, 0, "valueOf"),
	nt("x", X),
	nt("X", /[+-]?\d+(\.\d{1,3})?/),
	st("X", function (t, e, n) {
		n._d = new Date(1e3 * parseFloat(t, 10))
	}),
	st("x", function (t, e, n) {
		n._d = new Date(y(t))
	}),
	e.version = "2.10.6",
	t = At,
	e.fn = Se,
	e.min = function () {
		return Nt("isBefore", [].slice.call(arguments, 0))
	},
	e.max = function () {
		return Nt("isAfter", [].slice.call(arguments, 0))
	},
	e.utc = a,
	e.unix = function (t) {
		return At(1e3 * t)
	},
	e.months = function (t, e) {
		return be(t, e, "months", 12, "month")
	},
	e.isDate = i,
	e.locale = w,
	e.invalid = d,
	e.duration = Xt,
	e.isMoment = _,
	e.weekdays = function (t, e) {
		return be(t, e, "weekdays", 7, "day")
	},
	e.parseZone = function () {
		return At.apply(null, arguments).parseZone()
	},
	e.localeData = T,
	e.isDuration = Et,
	e.monthsShort = function (t, e) {
		return be(t, e, "monthsShort", 12, "month")
	},
	e.weekdaysMin = function (t, e) {
		return be(t, e, "weekdaysMin", 7, "day")
	},
	e.defineLocale = S,
	e.weekdaysShort = function (t, e) {
		return be(t, e, "weekdaysShort", 7, "day")
	},
	e.normalizeUnits = b,
	e.relativeTimeThreshold = function (t, e) {
		return void 0 !== Xe[t] && (void 0 === e ? Xe[t] : (Xe[t] = e, !0))
	};
	var nn = e,
	rn = {
		1: "1",
		2: "2",
		3: "3",
		4: "4",
		5: "5",
		6: "6",
		7: "7",
		8: "8",
		9: "9",
		0: "0"
	},
	sn = {
		1: "1",
		2: "2",
		3: "3",
		4: "4",
		5: "5",
		6: "6",
		7: "7",
		8: "8",
		9: "9",
		0: "0"
	},
	an = function (t) {
		return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5
	},
	on = {
		s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
		m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
		h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
		d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
		M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
		y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
	},
	un = function (t) {
		return function (e, n, i, r) {
			var s = an(e),
			a = on[t][an(e)];
			return 2 === s && (a = a[n ? 0 : 1]),
			a.replace(/%d/i, e)
		}
	},
	dn = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", " نوفمبر", " ديسمبر"],
	ln = (nn.defineLocale("ar", {
			months: dn,
			monthsShort: dn,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (t) {
				return "م" === t
			},
			meridiem: function (t, e, n) {
				return t < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: un("s"),
				m: un("m"),
				mm: un("m"),
				h: un("h"),
				hh: un("h"),
				d: un("d"),
				dd: un("d"),
				M: un("M"),
				MM: un("M"),
				y: un("y"),
				yy: un("y")
			},
			preparse: function (t) {
				return t.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (t) {
					return sn[t]
				}).replace(/،/g, ",")
			},
			postformat: function (t) {
				return t.replace(/\d/g, function (t) {
					return rn[t]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), nn);
	return ln.locale("ar"),
	ln
});

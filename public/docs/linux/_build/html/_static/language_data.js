/*
 * language_data.js
 * ~~~~~~~~~~~~~~~~
 *
 * This script contains the language-specific data used by searchtools.js,
 * namely the list of stopwords, stemmer, scorer and splitter.
 *
 * :copyright: Copyright 2007-2024 by the Sphinx team, see AUTHORS.
 * :license: BSD, see LICENSE for details.
 *
 */

var stopwords = [
  'aber',
  'alle',
  'allem',
  'allen',
  'aller',
  'alles',
  'als',
  'also',
  'am',
  'an',
  'ander',
  'andere',
  'anderem',
  'anderen',
  'anderer',
  'anderes',
  'anderm',
  'andern',
  'anderr',
  'anders',
  'auch',
  'auf',
  'aus',
  'bei',
  'bin',
  'bis',
  'bist',
  'da',
  'damit',
  'dann',
  'das',
  'dasselbe',
  'dazu',
  'da\u00df',
  'dein',
  'deine',
  'deinem',
  'deinen',
  'deiner',
  'deines',
  'dem',
  'demselben',
  'den',
  'denn',
  'denselben',
  'der',
  'derer',
  'derselbe',
  'derselben',
  'des',
  'desselben',
  'dessen',
  'dich',
  'die',
  'dies',
  'diese',
  'dieselbe',
  'dieselben',
  'diesem',
  'diesen',
  'dieser',
  'dieses',
  'dir',
  'doch',
  'dort',
  'du',
  'durch',
  'ein',
  'eine',
  'einem',
  'einen',
  'einer',
  'eines',
  'einig',
  'einige',
  'einigem',
  'einigen',
  'einiger',
  'einiges',
  'einmal',
  'er',
  'es',
  'etwas',
  'euch',
  'euer',
  'eure',
  'eurem',
  'euren',
  'eurer',
  'eures',
  'f\u00fcr',
  'gegen',
  'gewesen',
  'hab',
  'habe',
  'haben',
  'hat',
  'hatte',
  'hatten',
  'hier',
  'hin',
  'hinter',
  'ich',
  'ihm',
  'ihn',
  'ihnen',
  'ihr',
  'ihre',
  'ihrem',
  'ihren',
  'ihrer',
  'ihres',
  'im',
  'in',
  'indem',
  'ins',
  'ist',
  'jede',
  'jedem',
  'jeden',
  'jeder',
  'jedes',
  'jene',
  'jenem',
  'jenen',
  'jener',
  'jenes',
  'jetzt',
  'kann',
  'kein',
  'keine',
  'keinem',
  'keinen',
  'keiner',
  'keines',
  'k\u00f6nnen',
  'k\u00f6nnte',
  'machen',
  'man',
  'manche',
  'manchem',
  'manchen',
  'mancher',
  'manches',
  'mein',
  'meine',
  'meinem',
  'meinen',
  'meiner',
  'meines',
  'mich',
  'mir',
  'mit',
  'muss',
  'musste',
  'nach',
  'nicht',
  'nichts',
  'noch',
  'nun',
  'nur',
  'ob',
  'oder',
  'ohne',
  'sehr',
  'sein',
  'seine',
  'seinem',
  'seinen',
  'seiner',
  'seines',
  'selbst',
  'sich',
  'sie',
  'sind',
  'so',
  'solche',
  'solchem',
  'solchen',
  'solcher',
  'solches',
  'soll',
  'sollte',
  'sondern',
  'sonst',
  'um',
  'und',
  'uns',
  'unse',
  'unsem',
  'unsen',
  'unser',
  'unses',
  'unter',
  'viel',
  'vom',
  'von',
  'vor',
  'war',
  'waren',
  'warst',
  'was',
  'weg',
  'weil',
  'weiter',
  'welche',
  'welchem',
  'welchen',
  'welcher',
  'welches',
  'wenn',
  'werde',
  'werden',
  'wie',
  'wieder',
  'will',
  'wir',
  'wird',
  'wirst',
  'wo',
  'wollen',
  'wollte',
  'w\u00e4hrend',
  'w\u00fcrde',
  'w\u00fcrden',
  'zu',
  'zum',
  'zur',
  'zwar',
  'zwischen',
  '\u00fcber',
];

/* Non-minified version is copied as a separate JS file, if available */
BaseStemmer = function () {
  this.setCurrent = function (r) {
    this.current = r;
    this.cursor = 0;
    this.limit = this.current.length;
    this.limit_backward = 0;
    this.bra = this.cursor;
    this.ket = this.limit;
  };
  this.getCurrent = function () {
    return this.current;
  };
  this.copy_from = function (r) {
    this.current = r.current;
    this.cursor = r.cursor;
    this.limit = r.limit;
    this.limit_backward = r.limit_backward;
    this.bra = r.bra;
    this.ket = r.ket;
  };
  this.in_grouping = function (r, t, i) {
    if (this.cursor >= this.limit) return false;
    var s = this.current.charCodeAt(this.cursor);
    if (s > i || s < t) return false;
    s -= t;
    if ((r[s >>> 3] & (1 << (s & 7))) == 0) return false;
    this.cursor++;
    return true;
  };
  this.in_grouping_b = function (r, t, i) {
    if (this.cursor <= this.limit_backward) return false;
    var s = this.current.charCodeAt(this.cursor - 1);
    if (s > i || s < t) return false;
    s -= t;
    if ((r[s >>> 3] & (1 << (s & 7))) == 0) return false;
    this.cursor--;
    return true;
  };
  this.out_grouping = function (r, t, i) {
    if (this.cursor >= this.limit) return false;
    var s = this.current.charCodeAt(this.cursor);
    if (s > i || s < t) {
      this.cursor++;
      return true;
    }
    s -= t;
    if ((r[s >>> 3] & (1 << (s & 7))) == 0) {
      this.cursor++;
      return true;
    }
    return false;
  };
  this.out_grouping_b = function (r, t, i) {
    if (this.cursor <= this.limit_backward) return false;
    var s = this.current.charCodeAt(this.cursor - 1);
    if (s > i || s < t) {
      this.cursor--;
      return true;
    }
    s -= t;
    if ((r[s >>> 3] & (1 << (s & 7))) == 0) {
      this.cursor--;
      return true;
    }
    return false;
  };
  this.eq_s = function (r) {
    if (this.limit - this.cursor < r.length) return false;
    if (this.current.slice(this.cursor, this.cursor + r.length) != r) {
      return false;
    }
    this.cursor += r.length;
    return true;
  };
  this.eq_s_b = function (r) {
    if (this.cursor - this.limit_backward < r.length) return false;
    if (this.current.slice(this.cursor - r.length, this.cursor) != r) {
      return false;
    }
    this.cursor -= r.length;
    return true;
  };
  this.find_among = function (r) {
    var t = 0;
    var i = r.length;
    var s = this.cursor;
    var e = this.limit;
    var h = 0;
    var u = 0;
    var n = false;
    while (true) {
      var c = t + ((i - t) >>> 1);
      var a = 0;
      var f = h < u ? h : u;
      var l = r[c];
      var o;
      for (o = f; o < l[0].length; o++) {
        if (s + f == e) {
          a = -1;
          break;
        }
        a = this.current.charCodeAt(s + f) - l[0].charCodeAt(o);
        if (a != 0) break;
        f++;
      }
      if (a < 0) {
        i = c;
        u = f;
      } else {
        t = c;
        h = f;
      }
      if (i - t <= 1) {
        if (t > 0) break;
        if (i == t) break;
        if (n) break;
        n = true;
      }
    }
    do {
      var l = r[t];
      if (h >= l[0].length) {
        this.cursor = s + l[0].length;
        if (l.length < 4) return l[2];
        var v = l[3](this);
        this.cursor = s + l[0].length;
        if (v) return l[2];
      }
      t = l[1];
    } while (t >= 0);
    return 0;
  };
  this.find_among_b = function (r) {
    var t = 0;
    var i = r.length;
    var s = this.cursor;
    var e = this.limit_backward;
    var h = 0;
    var u = 0;
    var n = false;
    while (true) {
      var c = t + ((i - t) >> 1);
      var a = 0;
      var f = h < u ? h : u;
      var l = r[c];
      var o;
      for (o = l[0].length - 1 - f; o >= 0; o--) {
        if (s - f == e) {
          a = -1;
          break;
        }
        a = this.current.charCodeAt(s - 1 - f) - l[0].charCodeAt(o);
        if (a != 0) break;
        f++;
      }
      if (a < 0) {
        i = c;
        u = f;
      } else {
        t = c;
        h = f;
      }
      if (i - t <= 1) {
        if (t > 0) break;
        if (i == t) break;
        if (n) break;
        n = true;
      }
    }
    do {
      var l = r[t];
      if (h >= l[0].length) {
        this.cursor = s - l[0].length;
        if (l.length < 4) return l[2];
        var v = l[3](this);
        this.cursor = s - l[0].length;
        if (v) return l[2];
      }
      t = l[1];
    } while (t >= 0);
    return 0;
  };
  this.replace_s = function (r, t, i) {
    var s = i.length - (t - r);
    this.current = this.current.slice(0, r) + i + this.current.slice(t);
    this.limit += s;
    if (this.cursor >= t) this.cursor += s;
    else if (this.cursor > r) this.cursor = r;
    return s;
  };
  this.slice_check = function () {
    if (
      this.bra < 0 ||
      this.bra > this.ket ||
      this.ket > this.limit ||
      this.limit > this.current.length
    ) {
      return false;
    }
    return true;
  };
  this.slice_from = function (r) {
    var t = false;
    if (this.slice_check()) {
      this.replace_s(this.bra, this.ket, r);
      t = true;
    }
    return t;
  };
  this.slice_del = function () {
    return this.slice_from('');
  };
  this.insert = function (r, t, i) {
    var s = this.replace_s(r, t, i);
    if (r <= this.bra) this.bra += s;
    if (r <= this.ket) this.ket += s;
  };
  this.slice_to = function () {
    var r = '';
    if (this.slice_check()) {
      r = this.current.slice(this.bra, this.ket);
    }
    return r;
  };
  this.assign_to = function () {
    return this.current.slice(0, this.limit);
  };
};
GermanStemmer = function () {
  var r = new BaseStemmer();
  var e = [
    ['', -1, 5],
    ['U', 0, 2],
    ['Y', 0, 1],
    ['ä', 0, 3],
    ['ö', 0, 4],
    ['ü', 0, 2],
  ];
  var i = [
    ['e', -1, 2],
    ['em', -1, 1],
    ['en', -1, 2],
    ['ern', -1, 1],
    ['er', -1, 1],
    ['s', -1, 3],
    ['es', 5, 2],
  ];
  var s = [
    ['en', -1, 1],
    ['er', -1, 1],
    ['st', -1, 2],
    ['est', 2, 1],
  ];
  var u = [
    ['ig', -1, 1],
    ['lich', -1, 1],
  ];
  var a = [
    ['end', -1, 1],
    ['ig', -1, 2],
    ['ung', -1, 1],
    ['lich', -1, 3],
    ['isch', -1, 2],
    ['ik', -1, 2],
    ['heit', -1, 3],
    ['keit', -1, 4],
  ];
  var c = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 8];
  var t = [117, 30, 5];
  var o = [117, 30, 4];
  var f = 0;
  var l = 0;
  var n = 0;
  function b() {
    var e = r.cursor;
    while (true) {
      var i = r.cursor;
      r: {
        e: {
          var s = r.cursor;
          i: {
            r.bra = r.cursor;
            if (!r.eq_s('ß')) {
              break i;
            }
            r.ket = r.cursor;
            if (!r.slice_from('ss')) {
              return false;
            }
            break e;
          }
          r.cursor = s;
          if (r.cursor >= r.limit) {
            break r;
          }
          r.cursor++;
        }
        continue;
      }
      r.cursor = i;
      break;
    }
    r.cursor = e;
    while (true) {
      var u = r.cursor;
      r: {
        e: while (true) {
          var a = r.cursor;
          i: {
            if (!r.in_grouping(c, 97, 252)) {
              break i;
            }
            r.bra = r.cursor;
            s: {
              var t = r.cursor;
              u: {
                if (!r.eq_s('u')) {
                  break u;
                }
                r.ket = r.cursor;
                if (!r.in_grouping(c, 97, 252)) {
                  break u;
                }
                if (!r.slice_from('U')) {
                  return false;
                }
                break s;
              }
              r.cursor = t;
              if (!r.eq_s('y')) {
                break i;
              }
              r.ket = r.cursor;
              if (!r.in_grouping(c, 97, 252)) {
                break i;
              }
              if (!r.slice_from('Y')) {
                return false;
              }
            }
            r.cursor = a;
            break e;
          }
          r.cursor = a;
          if (r.cursor >= r.limit) {
            break r;
          }
          r.cursor++;
        }
        continue;
      }
      r.cursor = u;
      break;
    }
    return true;
  }
  function k() {
    n = r.limit;
    l = r.limit;
    var e = r.cursor;
    {
      var i = r.cursor + 3;
      if (i > r.limit) {
        return false;
      }
      r.cursor = i;
    }
    f = r.cursor;
    r.cursor = e;
    r: while (true) {
      e: {
        if (!r.in_grouping(c, 97, 252)) {
          break e;
        }
        break r;
      }
      if (r.cursor >= r.limit) {
        return false;
      }
      r.cursor++;
    }
    r: while (true) {
      e: {
        if (!r.out_grouping(c, 97, 252)) {
          break e;
        }
        break r;
      }
      if (r.cursor >= r.limit) {
        return false;
      }
      r.cursor++;
    }
    n = r.cursor;
    r: {
      if (!(n < f)) {
        break r;
      }
      n = f;
    }
    r: while (true) {
      e: {
        if (!r.in_grouping(c, 97, 252)) {
          break e;
        }
        break r;
      }
      if (r.cursor >= r.limit) {
        return false;
      }
      r.cursor++;
    }
    r: while (true) {
      e: {
        if (!r.out_grouping(c, 97, 252)) {
          break e;
        }
        break r;
      }
      if (r.cursor >= r.limit) {
        return false;
      }
      r.cursor++;
    }
    l = r.cursor;
    return true;
  }
  function m() {
    var i;
    while (true) {
      var s = r.cursor;
      r: {
        r.bra = r.cursor;
        i = r.find_among(e);
        if (i == 0) {
          break r;
        }
        r.ket = r.cursor;
        switch (i) {
          case 1:
            if (!r.slice_from('y')) {
              return false;
            }
            break;
          case 2:
            if (!r.slice_from('u')) {
              return false;
            }
            break;
          case 3:
            if (!r.slice_from('a')) {
              return false;
            }
            break;
          case 4:
            if (!r.slice_from('o')) {
              return false;
            }
            break;
          case 5:
            if (r.cursor >= r.limit) {
              break r;
            }
            r.cursor++;
            break;
        }
        continue;
      }
      r.cursor = s;
      break;
    }
    return true;
  }
  function _() {
    if (!(n <= r.cursor)) {
      return false;
    }
    return true;
  }
  function v() {
    if (!(l <= r.cursor)) {
      return false;
    }
    return true;
  }
  function g() {
    var e;
    var c = r.limit - r.cursor;
    r: {
      r.ket = r.cursor;
      e = r.find_among_b(i);
      if (e == 0) {
        break r;
      }
      r.bra = r.cursor;
      if (!_()) {
        break r;
      }
      switch (e) {
        case 1:
          if (!r.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!r.slice_del()) {
            return false;
          }
          var f = r.limit - r.cursor;
          e: {
            r.ket = r.cursor;
            if (!r.eq_s_b('s')) {
              r.cursor = r.limit - f;
              break e;
            }
            r.bra = r.cursor;
            if (!r.eq_s_b('nis')) {
              r.cursor = r.limit - f;
              break e;
            }
            if (!r.slice_del()) {
              return false;
            }
          }
          break;
        case 3:
          if (!r.in_grouping_b(t, 98, 116)) {
            break r;
          }
          if (!r.slice_del()) {
            return false;
          }
          break;
      }
    }
    r.cursor = r.limit - c;
    var l = r.limit - r.cursor;
    r: {
      r.ket = r.cursor;
      e = r.find_among_b(s);
      if (e == 0) {
        break r;
      }
      r.bra = r.cursor;
      if (!_()) {
        break r;
      }
      switch (e) {
        case 1:
          if (!r.slice_del()) {
            return false;
          }
          break;
        case 2:
          if (!r.in_grouping_b(o, 98, 116)) {
            break r;
          }
          {
            var n = r.cursor - 3;
            if (n < r.limit_backward) {
              break r;
            }
            r.cursor = n;
          }
          if (!r.slice_del()) {
            return false;
          }
          break;
      }
    }
    r.cursor = r.limit - l;
    var b = r.limit - r.cursor;
    r: {
      r.ket = r.cursor;
      e = r.find_among_b(a);
      if (e == 0) {
        break r;
      }
      r.bra = r.cursor;
      if (!v()) {
        break r;
      }
      switch (e) {
        case 1:
          if (!r.slice_del()) {
            return false;
          }
          var k = r.limit - r.cursor;
          e: {
            r.ket = r.cursor;
            if (!r.eq_s_b('ig')) {
              r.cursor = r.limit - k;
              break e;
            }
            r.bra = r.cursor;
            {
              var m = r.limit - r.cursor;
              i: {
                if (!r.eq_s_b('e')) {
                  break i;
                }
                r.cursor = r.limit - k;
                break e;
              }
              r.cursor = r.limit - m;
            }
            if (!v()) {
              r.cursor = r.limit - k;
              break e;
            }
            if (!r.slice_del()) {
              return false;
            }
          }
          break;
        case 2:
          {
            var g = r.limit - r.cursor;
            e: {
              if (!r.eq_s_b('e')) {
                break e;
              }
              break r;
            }
            r.cursor = r.limit - g;
          }
          if (!r.slice_del()) {
            return false;
          }
          break;
        case 3:
          if (!r.slice_del()) {
            return false;
          }
          var d = r.limit - r.cursor;
          e: {
            r.ket = r.cursor;
            i: {
              var h = r.limit - r.cursor;
              s: {
                if (!r.eq_s_b('er')) {
                  break s;
                }
                break i;
              }
              r.cursor = r.limit - h;
              if (!r.eq_s_b('en')) {
                r.cursor = r.limit - d;
                break e;
              }
            }
            r.bra = r.cursor;
            if (!_()) {
              r.cursor = r.limit - d;
              break e;
            }
            if (!r.slice_del()) {
              return false;
            }
          }
          break;
        case 4:
          if (!r.slice_del()) {
            return false;
          }
          var w = r.limit - r.cursor;
          e: {
            r.ket = r.cursor;
            if (r.find_among_b(u) == 0) {
              r.cursor = r.limit - w;
              break e;
            }
            r.bra = r.cursor;
            if (!v()) {
              r.cursor = r.limit - w;
              break e;
            }
            if (!r.slice_del()) {
              return false;
            }
          }
          break;
      }
    }
    r.cursor = r.limit - b;
    return true;
  }
  this.stem = function () {
    var e = r.cursor;
    b();
    r.cursor = e;
    var i = r.cursor;
    k();
    r.cursor = i;
    r.limit_backward = r.cursor;
    r.cursor = r.limit;
    g();
    r.cursor = r.limit_backward;
    var s = r.cursor;
    m();
    r.cursor = s;
    return true;
  };
  this['stemWord'] = function (e) {
    r.setCurrent(e);
    this.stem();
    return r.getCurrent();
  };
};
Stemmer = GermanStemmer;

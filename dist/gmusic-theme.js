"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    module.exports = {
      CLASS_NAMESPACE: 'gmusic-theme'
    };
  }, {}], 2: [function (require, module, exports) {
    /* MIT license */

    module.exports = {
      rgb2hsl: rgb2hsl,
      rgb2hsv: rgb2hsv,
      rgb2hwb: rgb2hwb,
      rgb2cmyk: rgb2cmyk,
      rgb2keyword: rgb2keyword,
      rgb2xyz: rgb2xyz,
      rgb2lab: rgb2lab,
      rgb2lch: rgb2lch,

      hsl2rgb: hsl2rgb,
      hsl2hsv: hsl2hsv,
      hsl2hwb: hsl2hwb,
      hsl2cmyk: hsl2cmyk,
      hsl2keyword: hsl2keyword,

      hsv2rgb: hsv2rgb,
      hsv2hsl: hsv2hsl,
      hsv2hwb: hsv2hwb,
      hsv2cmyk: hsv2cmyk,
      hsv2keyword: hsv2keyword,

      hwb2rgb: hwb2rgb,
      hwb2hsl: hwb2hsl,
      hwb2hsv: hwb2hsv,
      hwb2cmyk: hwb2cmyk,
      hwb2keyword: hwb2keyword,

      cmyk2rgb: cmyk2rgb,
      cmyk2hsl: cmyk2hsl,
      cmyk2hsv: cmyk2hsv,
      cmyk2hwb: cmyk2hwb,
      cmyk2keyword: cmyk2keyword,

      keyword2rgb: keyword2rgb,
      keyword2hsl: keyword2hsl,
      keyword2hsv: keyword2hsv,
      keyword2hwb: keyword2hwb,
      keyword2cmyk: keyword2cmyk,
      keyword2lab: keyword2lab,
      keyword2xyz: keyword2xyz,

      xyz2rgb: xyz2rgb,
      xyz2lab: xyz2lab,
      xyz2lch: xyz2lch,

      lab2xyz: lab2xyz,
      lab2rgb: lab2rgb,
      lab2lch: lab2lch,

      lch2lab: lch2lab,
      lch2xyz: lch2xyz,
      lch2rgb: lch2rgb
    };

    function rgb2hsl(rgb) {
      var r = rgb[0] / 255,
          g = rgb[1] / 255,
          b = rgb[2] / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h,
          s,
          l;

      if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;

      h = Math.min(h * 60, 360);

      if (h < 0) h += 360;

      l = (min + max) / 2;

      if (max == min) s = 0;else if (l <= 0.5) s = delta / (max + min);else s = delta / (2 - max - min);

      return [h, s * 100, l * 100];
    }

    function rgb2hsv(rgb) {
      var r = rgb[0],
          g = rgb[1],
          b = rgb[2],
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h,
          s,
          v;

      if (max == 0) s = 0;else s = delta / max * 1000 / 10;

      if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;

      h = Math.min(h * 60, 360);

      if (h < 0) h += 360;

      v = max / 255 * 1000 / 10;

      return [h, s, v];
    }

    function rgb2hwb(rgb) {
      var r = rgb[0],
          g = rgb[1],
          b = rgb[2],
          h = rgb2hsl(rgb)[0],
          w = 1 / 255 * Math.min(r, Math.min(g, b)),
          b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

      return [h, w * 100, b * 100];
    }

    function rgb2cmyk(rgb) {
      var r = rgb[0] / 255,
          g = rgb[1] / 255,
          b = rgb[2] / 255,
          c,
          m,
          y,
          k;

      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    }

    function rgb2keyword(rgb) {
      return reverseKeywords[JSON.stringify(rgb)];
    }

    function rgb2xyz(rgb) {
      var r = rgb[0] / 255,
          g = rgb[1] / 255,
          b = rgb[2] / 255;

      // assume sRGB
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

      return [x * 100, y * 100, z * 100];
    }

    function rgb2lab(rgb) {
      var xyz = rgb2xyz(rgb),
          x = xyz[0],
          y = xyz[1],
          z = xyz[2],
          l,
          a,
          b;

      x /= 95.047;
      y /= 100;
      z /= 108.883;

      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);

      return [l, a, b];
    }

    function rgb2lch(args) {
      return lab2lch(rgb2lab(args));
    }

    function hsl2rgb(hsl) {
      var h = hsl[0] / 360,
          s = hsl[1] / 100,
          l = hsl[2] / 100,
          t1,
          t2,
          t3,
          rgb,
          val;

      if (s == 0) {
        val = l * 255;
        return [val, val, val];
      }

      if (l < 0.5) t2 = l * (1 + s);else t2 = l + s - l * s;
      t1 = 2 * l - t2;

      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        t3 < 0 && t3++;
        t3 > 1 && t3--;

        if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;else if (2 * t3 < 1) val = t2;else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;else val = t1;

        rgb[i] = val * 255;
      }

      return rgb;
    }

    function hsl2hsv(hsl) {
      var h = hsl[0],
          s = hsl[1] / 100,
          l = hsl[2] / 100,
          sv,
          v;

      if (l === 0) {
        // no need to do calc on black
        // also avoids divide by 0 error
        return [0, 0, 0];
      }

      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      v = (l + s) / 2;
      sv = 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    }

    function hsl2hwb(args) {
      return rgb2hwb(hsl2rgb(args));
    }

    function hsl2cmyk(args) {
      return rgb2cmyk(hsl2rgb(args));
    }

    function hsl2keyword(args) {
      return rgb2keyword(hsl2rgb(args));
    }

    function hsv2rgb(hsv) {
      var h = hsv[0] / 60,
          s = hsv[1] / 100,
          v = hsv[2] / 100,
          hi = Math.floor(h) % 6;

      var f = h - Math.floor(h),
          p = 255 * v * (1 - s),
          q = 255 * v * (1 - s * f),
          t = 255 * v * (1 - s * (1 - f)),
          v = 255 * v;

      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    }

    function hsv2hsl(hsv) {
      var h = hsv[0],
          s = hsv[1] / 100,
          v = hsv[2] / 100,
          sl,
          l;

      l = (2 - s) * v;
      sl = s * v;
      sl /= l <= 1 ? l : 2 - l;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    }

    function hsv2hwb(args) {
      return rgb2hwb(hsv2rgb(args));
    }

    function hsv2cmyk(args) {
      return rgb2cmyk(hsv2rgb(args));
    }

    function hsv2keyword(args) {
      return rgb2keyword(hsv2rgb(args));
    }

    // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
    function hwb2rgb(hwb) {
      var h = hwb[0] / 360,
          wh = hwb[1] / 100,
          bl = hwb[2] / 100,
          ratio = wh + bl,
          i,
          v,
          f,
          n;

      // wh + bl cant be > 1
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }

      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 0x01) != 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh); // linear interpolation

      switch (i) {
        default:
        case 6:
        case 0:
          r = v;g = n;b = wh;break;
        case 1:
          r = n;g = v;b = wh;break;
        case 2:
          r = wh;g = v;b = n;break;
        case 3:
          r = wh;g = n;b = v;break;
        case 4:
          r = n;g = wh;b = v;break;
        case 5:
          r = v;g = wh;b = n;break;
      }

      return [r * 255, g * 255, b * 255];
    }

    function hwb2hsl(args) {
      return rgb2hsl(hwb2rgb(args));
    }

    function hwb2hsv(args) {
      return rgb2hsv(hwb2rgb(args));
    }

    function hwb2cmyk(args) {
      return rgb2cmyk(hwb2rgb(args));
    }

    function hwb2keyword(args) {
      return rgb2keyword(hwb2rgb(args));
    }

    function cmyk2rgb(cmyk) {
      var c = cmyk[0] / 100,
          m = cmyk[1] / 100,
          y = cmyk[2] / 100,
          k = cmyk[3] / 100,
          r,
          g,
          b;

      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    }

    function cmyk2hsl(args) {
      return rgb2hsl(cmyk2rgb(args));
    }

    function cmyk2hsv(args) {
      return rgb2hsv(cmyk2rgb(args));
    }

    function cmyk2hwb(args) {
      return rgb2hwb(cmyk2rgb(args));
    }

    function cmyk2keyword(args) {
      return rgb2keyword(cmyk2rgb(args));
    }

    function xyz2rgb(xyz) {
      var x = xyz[0] / 100,
          y = xyz[1] / 100,
          z = xyz[2] / 100,
          r,
          g,
          b;

      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.2040 + z * 1.0570;

      // assume sRGB
      r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r = r * 12.92;

      g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g = g * 12.92;

      b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b = b * 12.92;

      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);

      return [r * 255, g * 255, b * 255];
    }

    function xyz2lab(xyz) {
      var x = xyz[0],
          y = xyz[1],
          z = xyz[2],
          l,
          a,
          b;

      x /= 95.047;
      y /= 100;
      z /= 108.883;

      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);

      return [l, a, b];
    }

    function xyz2lch(args) {
      return lab2lch(xyz2lab(args));
    }

    function lab2xyz(lab) {
      var l = lab[0],
          a = lab[1],
          b = lab[2],
          x,
          y,
          z,
          y2;

      if (l <= 8) {
        y = l * 100 / 903.3;
        y2 = 7.787 * (y / 100) + 16 / 116;
      } else {
        y = 100 * Math.pow((l + 16) / 116, 3);
        y2 = Math.pow(y / 100, 1 / 3);
      }

      x = x / 95.047 <= 0.008856 ? x = 95.047 * (a / 500 + y2 - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + y2, 3);

      z = z / 108.883 <= 0.008859 ? z = 108.883 * (y2 - b / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(y2 - b / 200, 3);

      return [x, y, z];
    }

    function lab2lch(lab) {
      var l = lab[0],
          a = lab[1],
          b = lab[2],
          hr,
          h,
          c;

      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    }

    function lab2rgb(args) {
      return xyz2rgb(lab2xyz(args));
    }

    function lch2lab(lch) {
      var l = lch[0],
          c = lch[1],
          h = lch[2],
          a,
          b,
          hr;

      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    }

    function lch2xyz(args) {
      return lab2xyz(lch2lab(args));
    }

    function lch2rgb(args) {
      return lab2rgb(lch2lab(args));
    }

    function keyword2rgb(keyword) {
      return cssKeywords[keyword];
    }

    function keyword2hsl(args) {
      return rgb2hsl(keyword2rgb(args));
    }

    function keyword2hsv(args) {
      return rgb2hsv(keyword2rgb(args));
    }

    function keyword2hwb(args) {
      return rgb2hwb(keyword2rgb(args));
    }

    function keyword2cmyk(args) {
      return rgb2cmyk(keyword2rgb(args));
    }

    function keyword2lab(args) {
      return rgb2lab(keyword2rgb(args));
    }

    function keyword2xyz(args) {
      return rgb2xyz(keyword2rgb(args));
    }

    var cssKeywords = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };

    var reverseKeywords = {};
    for (var key in cssKeywords) {
      reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
    }
  }, {}], 3: [function (require, module, exports) {
    var conversions = require("./conversions");

    var convert = function convert() {
      return new Converter();
    };

    for (var func in conversions) {
      // export Raw versions
      convert[func + "Raw"] = function (func) {
        // accept array or plain args
        return function (arg) {
          if (typeof arg == "number") arg = Array.prototype.slice.call(arguments);
          return conversions[func](arg);
        };
      }(func);

      var pair = /(\w+)2(\w+)/.exec(func),
          from = pair[1],
          to = pair[2];

      // export rgb2hsl and ["rgb"]["hsl"]
      convert[from] = convert[from] || {};

      convert[from][to] = convert[func] = function (func) {
        return function (arg) {
          if (typeof arg == "number") arg = Array.prototype.slice.call(arguments);

          var val = conversions[func](arg);
          if (typeof val == "string" || val === undefined) return val; // keyword

          for (var i = 0; i < val.length; i++) {
            val[i] = Math.round(val[i]);
          }return val;
        };
      }(func);
    }

    /* Converter does lazy conversion and caching */
    var Converter = function Converter() {
      this.convs = {};
    };

    /* Either get the values for a space or
      set the values for a space, depending on args */
    Converter.prototype.routeSpace = function (space, args) {
      var values = args[0];
      if (values === undefined) {
        // color.rgb()
        return this.getValues(space);
      }
      // color.rgb(10, 10, 10)
      if (typeof values == "number") {
        values = Array.prototype.slice.call(args);
      }

      return this.setValues(space, values);
    };

    /* Set the values for a space, invalidating cache */
    Converter.prototype.setValues = function (space, values) {
      this.space = space;
      this.convs = {};
      this.convs[space] = values;
      return this;
    };

    /* Get the values for a space. If there's already
      a conversion for the space, fetch it, otherwise
      compute it */
    Converter.prototype.getValues = function (space) {
      var vals = this.convs[space];
      if (!vals) {
        var fspace = this.space,
            from = this.convs[fspace];
        vals = convert[fspace][space](from);

        this.convs[space] = vals;
      }
      return vals;
    };

    ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (space) {
      Converter.prototype[space] = function (vals) {
        return this.routeSpace(space, arguments);
      };
    });

    module.exports = convert;
  }, { "./conversions": 2 }], 4: [function (require, module, exports) {
    module.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }, {}], 5: [function (require, module, exports) {
    /* MIT license */
    var colorNames = require('color-name');

    module.exports = {
      getRgba: getRgba,
      getHsla: getHsla,
      getRgb: getRgb,
      getHsl: getHsl,
      getHwb: getHwb,
      getAlpha: getAlpha,

      hexString: hexString,
      rgbString: rgbString,
      rgbaString: rgbaString,
      percentString: percentString,
      percentaString: percentaString,
      hslString: hslString,
      hslaString: hslaString,
      hwbString: hwbString,
      keyword: keyword
    };

    function getRgba(string) {
      if (!string) {
        return;
      }
      var abbr = /^#([a-fA-F0-9]{3})$/,
          hex = /^#([a-fA-F0-9]{6})$/,
          rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
          per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
          keyword = /(\D+)/;

      var rgb = [0, 0, 0],
          a = 1,
          match = string.match(abbr);
      if (match) {
        match = match[1];
        for (var i = 0; i < rgb.length; i++) {
          rgb[i] = parseInt(match[i] + match[i], 16);
        }
      } else if (match = string.match(hex)) {
        match = match[1];
        for (var i = 0; i < rgb.length; i++) {
          rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
        }
      } else if (match = string.match(rgba)) {
        for (var i = 0; i < rgb.length; i++) {
          rgb[i] = parseInt(match[i + 1]);
        }
        a = parseFloat(match[4]);
      } else if (match = string.match(per)) {
        for (var i = 0; i < rgb.length; i++) {
          rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        a = parseFloat(match[4]);
      } else if (match = string.match(keyword)) {
        if (match[1] == "transparent") {
          return [0, 0, 0, 0];
        }
        rgb = colorNames[match[1]];
        if (!rgb) {
          return;
        }
      }

      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = scale(rgb[i], 0, 255);
      }
      if (!a && a != 0) {
        a = 1;
      } else {
        a = scale(a, 0, 1);
      }
      rgb[3] = a;
      return rgb;
    }

    function getHsla(string) {
      if (!string) {
        return;
      }
      var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = scale(parseInt(match[1]), 0, 360),
            s = scale(parseFloat(match[2]), 0, 100),
            l = scale(parseFloat(match[3]), 0, 100),
            a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
      }
    }

    function getHwb(string) {
      if (!string) {
        return;
      }
      var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = scale(parseInt(match[1]), 0, 360),
            w = scale(parseFloat(match[2]), 0, 100),
            b = scale(parseFloat(match[3]), 0, 100),
            a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
      }
    }

    function getRgb(string) {
      var rgba = getRgba(string);
      return rgba && rgba.slice(0, 3);
    }

    function getHsl(string) {
      var hsla = getHsla(string);
      return hsla && hsla.slice(0, 3);
    }

    function getAlpha(string) {
      var vals = getRgba(string);
      if (vals) {
        return vals[3];
      } else if (vals = getHsla(string)) {
        return vals[3];
      } else if (vals = getHwb(string)) {
        return vals[3];
      }
    }

    // generators
    function hexString(rgb) {
      return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1]) + hexDouble(rgb[2]);
    }

    function rgbString(rgba, alpha) {
      if (alpha < 1 || rgba[3] && rgba[3] < 1) {
        return rgbaString(rgba, alpha);
      }
      return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
    }

    function rgbaString(rgba, alpha) {
      if (alpha === undefined) {
        alpha = rgba[3] !== undefined ? rgba[3] : 1;
      }
      return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")";
    }

    function percentString(rgba, alpha) {
      if (alpha < 1 || rgba[3] && rgba[3] < 1) {
        return percentaString(rgba, alpha);
      }
      var r = Math.round(rgba[0] / 255 * 100),
          g = Math.round(rgba[1] / 255 * 100),
          b = Math.round(rgba[2] / 255 * 100);

      return "rgb(" + r + "%, " + g + "%, " + b + "%)";
    }

    function percentaString(rgba, alpha) {
      var r = Math.round(rgba[0] / 255 * 100),
          g = Math.round(rgba[1] / 255 * 100),
          b = Math.round(rgba[2] / 255 * 100);
      return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
    }

    function hslString(hsla, alpha) {
      if (alpha < 1 || hsla[3] && hsla[3] < 1) {
        return hslaString(hsla, alpha);
      }
      return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
    }

    function hslaString(hsla, alpha) {
      if (alpha === undefined) {
        alpha = hsla[3] !== undefined ? hsla[3] : 1;
      }
      return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")";
    }

    // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
    // (hwb have alpha optional & 1 is default value)
    function hwbString(hwb, alpha) {
      if (alpha === undefined) {
        alpha = hwb[3] !== undefined ? hwb[3] : 1;
      }
      return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%" + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
    }

    function keyword(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    }

    // helpers
    function scale(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }

    function hexDouble(num) {
      var str = num.toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }

    //create a list of reverse color names
    var reverseNames = {};
    for (var name in colorNames) {
      reverseNames[colorNames[name]] = name;
    }
  }, { "color-name": 4 }], 6: [function (require, module, exports) {
    /* MIT license */
    var convert = require('color-convert');
    var string = require('color-string');

    var Color = function Color(obj) {
      if (obj instanceof Color) {
        return obj;
      }
      if (!(this instanceof Color)) {
        return new Color(obj);
      }

      this.values = {
        rgb: [0, 0, 0],
        hsl: [0, 0, 0],
        hsv: [0, 0, 0],
        hwb: [0, 0, 0],
        cmyk: [0, 0, 0, 0],
        alpha: 1
      };

      // parse Color() argument
      var vals;
      if (typeof obj === 'string') {
        vals = string.getRgba(obj);
        if (vals) {
          this.setValues('rgb', vals);
        } else if (vals = string.getHsla(obj)) {
          this.setValues('hsl', vals);
        } else if (vals = string.getHwb(obj)) {
          this.setValues('hwb', vals);
        } else {
          throw new Error('Unable to parse color from string "' + obj + '"');
        }
      } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === 'object') {
        vals = obj;
        if (vals.r !== undefined || vals.red !== undefined) {
          this.setValues('rgb', vals);
        } else if (vals.l !== undefined || vals.lightness !== undefined) {
          this.setValues('hsl', vals);
        } else if (vals.v !== undefined || vals.value !== undefined) {
          this.setValues('hsv', vals);
        } else if (vals.w !== undefined || vals.whiteness !== undefined) {
          this.setValues('hwb', vals);
        } else if (vals.c !== undefined || vals.cyan !== undefined) {
          this.setValues('cmyk', vals);
        } else {
          throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
        }
      }
    };

    Color.prototype = {
      rgb: function rgb() {
        return this.setSpace('rgb', arguments);
      },
      hsl: function hsl() {
        return this.setSpace('hsl', arguments);
      },
      hsv: function hsv() {
        return this.setSpace('hsv', arguments);
      },
      hwb: function hwb() {
        return this.setSpace('hwb', arguments);
      },
      cmyk: function cmyk() {
        return this.setSpace('cmyk', arguments);
      },

      rgbArray: function rgbArray() {
        return this.values.rgb;
      },
      hslArray: function hslArray() {
        return this.values.hsl;
      },
      hsvArray: function hsvArray() {
        return this.values.hsv;
      },
      hwbArray: function hwbArray() {
        if (this.values.alpha !== 1) {
          return this.values.hwb.concat([this.values.alpha]);
        }
        return this.values.hwb;
      },
      cmykArray: function cmykArray() {
        return this.values.cmyk;
      },
      rgbaArray: function rgbaArray() {
        var rgb = this.values.rgb;
        return rgb.concat([this.values.alpha]);
      },
      hslaArray: function hslaArray() {
        var hsl = this.values.hsl;
        return hsl.concat([this.values.alpha]);
      },
      alpha: function alpha(val) {
        if (val === undefined) {
          return this.values.alpha;
        }
        this.setValues('alpha', val);
        return this;
      },

      red: function red(val) {
        return this.setChannel('rgb', 0, val);
      },
      green: function green(val) {
        return this.setChannel('rgb', 1, val);
      },
      blue: function blue(val) {
        return this.setChannel('rgb', 2, val);
      },
      hue: function hue(val) {
        if (val) {
          val %= 360;
          val = val < 0 ? 360 + val : val;
        }
        return this.setChannel('hsl', 0, val);
      },
      saturation: function saturation(val) {
        return this.setChannel('hsl', 1, val);
      },
      lightness: function lightness(val) {
        return this.setChannel('hsl', 2, val);
      },
      saturationv: function saturationv(val) {
        return this.setChannel('hsv', 1, val);
      },
      whiteness: function whiteness(val) {
        return this.setChannel('hwb', 1, val);
      },
      blackness: function blackness(val) {
        return this.setChannel('hwb', 2, val);
      },
      value: function value(val) {
        return this.setChannel('hsv', 2, val);
      },
      cyan: function cyan(val) {
        return this.setChannel('cmyk', 0, val);
      },
      magenta: function magenta(val) {
        return this.setChannel('cmyk', 1, val);
      },
      yellow: function yellow(val) {
        return this.setChannel('cmyk', 2, val);
      },
      black: function black(val) {
        return this.setChannel('cmyk', 3, val);
      },

      hexString: function hexString() {
        return string.hexString(this.values.rgb);
      },
      rgbString: function rgbString() {
        return string.rgbString(this.values.rgb, this.values.alpha);
      },
      rgbaString: function rgbaString() {
        return string.rgbaString(this.values.rgb, this.values.alpha);
      },
      percentString: function percentString() {
        return string.percentString(this.values.rgb, this.values.alpha);
      },
      hslString: function hslString() {
        return string.hslString(this.values.hsl, this.values.alpha);
      },
      hslaString: function hslaString() {
        return string.hslaString(this.values.hsl, this.values.alpha);
      },
      hwbString: function hwbString() {
        return string.hwbString(this.values.hwb, this.values.alpha);
      },
      keyword: function keyword() {
        return string.keyword(this.values.rgb, this.values.alpha);
      },

      rgbNumber: function rgbNumber() {
        return this.values.rgb[0] << 16 | this.values.rgb[1] << 8 | this.values.rgb[2];
      },

      luminosity: function luminosity() {
        // http://www.w3.org/TR/WCAG20/#relativeluminancedef
        var rgb = this.values.rgb;
        var lum = [];
        for (var i = 0; i < rgb.length; i++) {
          var chan = rgb[i] / 255;
          lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },

      contrast: function contrast(color2) {
        // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
        var lum1 = this.luminosity();
        var lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },

      level: function level(color2) {
        var contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7.1) {
          return 'AAA';
        }

        return contrastRatio >= 4.5 ? 'AA' : '';
      },

      dark: function dark() {
        // YIQ equation from http://24ways.org/2010/calculating-color-contrast
        var rgb = this.values.rgb;
        var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return yiq < 128;
      },

      light: function light() {
        return !this.dark();
      },

      negate: function negate() {
        var rgb = [];
        for (var i = 0; i < 3; i++) {
          rgb[i] = 255 - this.values.rgb[i];
        }
        this.setValues('rgb', rgb);
        return this;
      },

      lighten: function lighten(ratio) {
        this.values.hsl[2] += this.values.hsl[2] * ratio;
        this.setValues('hsl', this.values.hsl);
        return this;
      },

      darken: function darken(ratio) {
        this.values.hsl[2] -= this.values.hsl[2] * ratio;
        this.setValues('hsl', this.values.hsl);
        return this;
      },

      saturate: function saturate(ratio) {
        this.values.hsl[1] += this.values.hsl[1] * ratio;
        this.setValues('hsl', this.values.hsl);
        return this;
      },

      desaturate: function desaturate(ratio) {
        this.values.hsl[1] -= this.values.hsl[1] * ratio;
        this.setValues('hsl', this.values.hsl);
        return this;
      },

      whiten: function whiten(ratio) {
        this.values.hwb[1] += this.values.hwb[1] * ratio;
        this.setValues('hwb', this.values.hwb);
        return this;
      },

      blacken: function blacken(ratio) {
        this.values.hwb[2] += this.values.hwb[2] * ratio;
        this.setValues('hwb', this.values.hwb);
        return this;
      },

      greyscale: function greyscale() {
        var rgb = this.values.rgb;
        // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
        var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        this.setValues('rgb', [val, val, val]);
        return this;
      },

      clearer: function clearer(ratio) {
        this.setValues('alpha', this.values.alpha - this.values.alpha * ratio);
        return this;
      },

      opaquer: function opaquer(ratio) {
        this.setValues('alpha', this.values.alpha + this.values.alpha * ratio);
        return this;
      },

      rotate: function rotate(degrees) {
        var hue = this.values.hsl[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        this.values.hsl[0] = hue;
        this.setValues('hsl', this.values.hsl);
        return this;
      },

      /**
       * Ported from sass implementation in C
       * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
       */
      mix: function mix(mixinColor, weight) {
        var color1 = this;
        var color2 = mixinColor;
        var p = weight === undefined ? 0.5 : weight;

        var w = 2 * p - 1;
        var a = color1.alpha() - color2.alpha();

        var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
        var w2 = 1 - w1;

        return this.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue()).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
      },

      toJSON: function toJSON() {
        return this.rgb();
      },

      clone: function clone() {
        return new Color(this.rgb());
      }
    };

    Color.prototype.getValues = function (space) {
      var vals = {};

      for (var i = 0; i < space.length; i++) {
        vals[space.charAt(i)] = this.values[space][i];
      }

      if (this.values.alpha !== 1) {
        vals.a = this.values.alpha;
      }

      // {r: 255, g: 255, b: 255, a: 0.4}
      return vals;
    };

    Color.prototype.setValues = function (space, vals) {
      var spaces = {
        rgb: ['red', 'green', 'blue'],
        hsl: ['hue', 'saturation', 'lightness'],
        hsv: ['hue', 'saturation', 'value'],
        hwb: ['hue', 'whiteness', 'blackness'],
        cmyk: ['cyan', 'magenta', 'yellow', 'black']
      };

      var maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      };

      var i;
      var alpha = 1;
      if (space === 'alpha') {
        alpha = vals;
      } else if (vals.length) {
        // [10, 10, 10]
        this.values[space] = vals.slice(0, space.length);
        alpha = vals[space.length];
      } else if (vals[space.charAt(0)] !== undefined) {
        // {r: 10, g: 10, b: 10}
        for (i = 0; i < space.length; i++) {
          this.values[space][i] = vals[space.charAt(i)];
        }

        alpha = vals.a;
      } else if (vals[spaces[space][0]] !== undefined) {
        // {red: 10, green: 10, blue: 10}
        var chans = spaces[space];

        for (i = 0; i < space.length; i++) {
          this.values[space][i] = vals[chans[i]];
        }

        alpha = vals.alpha;
      }

      this.values.alpha = Math.max(0, Math.min(1, alpha === undefined ? this.values.alpha : alpha));

      if (space === 'alpha') {
        return false;
      }

      var capped;

      // cap values of the space prior converting all values
      for (i = 0; i < space.length; i++) {
        capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
        this.values[space][i] = Math.round(capped);
      }

      // convert to all the other color spaces
      for (var sname in spaces) {
        if (sname !== space) {
          this.values[sname] = convert[space][sname](this.values[space]);
        }

        // cap values
        for (i = 0; i < sname.length; i++) {
          capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
          this.values[sname][i] = Math.round(capped);
        }
      }

      return true;
    };

    Color.prototype.setSpace = function (space, args) {
      var vals = args[0];

      if (vals === undefined) {
        // color.rgb()
        return this.getValues(space);
      }

      // color.rgb(10, 10, 10)
      if (typeof vals === 'number') {
        vals = Array.prototype.slice.call(args);
      }

      this.setValues(space, vals);
      return this;
    };

    Color.prototype.setChannel = function (space, index, val) {
      if (val === undefined) {
        // color.red()
        return this.values[space][index];
      } else if (val === this.values[space][index]) {
        // color.red(color.red())
        return this;
      }

      // color.red(100)
      this.values[space][index] = val;
      this.setValues(space, this.values[space]);

      return this;
    };

    module.exports = Color;
  }, { "color-convert": 3, "color-string": 5 }], 7: [function (require, module, exports) {
    var color = require('color');

    // DEV: These constants will be transformed into string constants by browserify
    var BASE_CSS = ".gmusic-theme #material-app-bar {\n  background-color: <<BACK_SECONDARY>> !important;\n}\n\n.gmusic-theme #material-app-bar .tab-text,\n.gmusic-theme [data-id=\"prev-history\"],\n.gmusic-theme [data-id=\"next-history\"],\n.gmusic-theme #searchIcon {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme #material-one-left #left-nav-open-button svg {\n  fill: <<FORE_PRIMARY>> !important;\n}\n\nbody.gmusic-theme {\n  background-color: <<BACK_SECONDARY>> !important;\n}\n\n.gmusic-theme #drawer,\n.gmusic-theme .material-card {\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme #nav-container,\n.gmusic-theme #loading-overlay,\n.gmusic-theme #loading-progress,\n.gmusic-theme #loading-progress-bar {\n  background: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme #loading-progress-bar {\n  border: none !important;\n}\n\n.gmusic-theme .nav-toolbar,\n.gmusic-theme .material-card .details,\n.gmusic-theme .material-card .image-wrapper,\n.gmusic-theme .situations-filter {\n  background: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme #nav {\n  background: <<BACK_PRIMARY>> !important;\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme #player,\n.gmusic-theme .player-rating-container,\n.gmusic-theme #player.material .now-playing-actions paper-icon-button {\n  color: <<FORE_PRIMARY>> !important;\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme #player.material paper-icon-button.playing > iron-icon::before {\n  content: '' !important;\n  display: block !important;\n  position: absolute !important;\n  background: <<FORE_PRIMARY>> !important;\n  z-index: -1 !important;\n  border-radius: 100% !important;\n  height: calc(100% - 16px) !important;\n  width: calc(100% - 16px) !important;\n  top: 8px !important;\n  left: 8px !important;\n}\n\n.gmusic-theme #player.material:hover #material-player-progress #sliderContainer:not(.disabled) #sliderBar #progressContainer,\n.gmusic-theme .playlist-view .editable:hover {\n  background: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .cluster-text-protection::before,\n.gmusic-theme .cluster-text-protection {\n  background: transparent !important;\n}\n\n.gmusic-theme .title,\n.gmusic-theme .situation-title,\n.gmusic-theme .recommended-header {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .nav-item-container {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme #nav_collections .nav-item-container:focus,\n.gmusic-theme .nav-item-container:focus,\n.gmusic-theme .nav-item-container:hover,\n.gmusic-theme .nav-item-container.selected {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .nav-item-container:not(:focus):hover iron-icon {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme #nav_collections .nav-item-container:focus iron-icon,\n.gmusic-theme .nav-item-container:focus iron-icon {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .fade-out:after {\n  display: none !important;\n}\n\n.gmusic-theme .column.col-0 .material-card:first-child .image-wrapper {\n  padding-top: 0 !important;\n}\n\n.gmusic-theme .song-row .song-indicator {\n  background-image: url('ani_equalizer_white_x2.gif') !important;\n  background-size: 28px 28px !important;\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-row:hover .song-indicator {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .material-detail-view .has-hero-image,\n.gmusic-theme .song-row td,\n.gmusic-theme .song-row td > *,\n.gmusic-theme .upload-progress-row td,\n.gmusic-theme .song-row.selected-song-row td {\n  background-color: <<BACK_PRIMARY>> !important;\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-row.selected-song-row .song-indicator,\n.gmusic-theme .song-row.selected-song-row .title-right-items,\n.gmusic-theme .song-row.selected-song-row .content,\n.gmusic-theme .song-row.selected-song-row .song-indicator[data-playback-status=\"paused\"],\n.gmusic-theme .song-row.selected-song-row .song-indicator[data-playback-status=\"loading\"],\n.gmusic-theme .song-row.selected-song-row [data-col=\"index\"] .hover-button[data-id=\"play\"],\n.gmusic-theme .song-row.selected-song-row [data-col=\"track\"] .hover-button[data-id=\"play\"],\n.gmusic-theme .song-row.selected-song-row td,\n.gmusic-theme .song-row.selected-song-row td > * {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .song-row:hover,\n.gmusic-theme .song-row.hover .song-indicator,\n.gmusic-theme .song-row.hover .title-right-items,\n.gmusic-theme .song-row.hover .content,\n.gmusic-theme .song-row.hover .song-indicator[data-playback-status=\"paused\"],\n.gmusic-theme .song-row.hover .song-indicator[data-playback-status=\"loading\"],\n.gmusic-theme .song-row.hover [data-col=\"index\"] .hover-button[data-id=\"play\"],\n.gmusic-theme .song-row.hover [data-col=\"track\"] .hover-button[data-id=\"play\"],\n.gmusic-theme .song-row.hover td,\n.gmusic-theme .song-row.hover td > * {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\nbody.gmusic-theme.material,\n.gmusic-theme .material-detail-view .material-container-details .info .description,\n.gmusic-theme .song-table th {\n  color: #efefef !important;\n}\n\n.gmusic-theme .song-row.hover [data-col=\"track\"] .hover-button[data-id=\"play\"] {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .song-row [data-col=\"index\"] .song-indicator {\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-row.hover [data-col=\"index\"] .song-indicator,\n.gmusic-theme .song-row.selected-song-row [data-col=\"index\"] .song-indicator {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .song-row.selected-song-row.hover [data-col=\"index\"] .hover-button[data-id=\"play\"] {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .songlist-container {\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme .nav-section-divider {\n  border-bottom: 1px solid <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .goog-menu,\n.gmusic-theme .now-playing-menu .goog-menuitem,\n.gmusic-theme .now-playing-menu .goog-submenu,\n.gmusic-theme .now-playing-menu .goog-submenu .goog-submenu-arrow,\n.gmusic-theme .goog-menuitem {\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme .goog-menu .goog-menuitem .goog-menuitem-content,\n.gmusic-theme .goog-menuitem-highlight .goog-menuitem-content .goog-submenu-arrow,\n.gmusic-theme .goog-menuitem-highlight .goog-menuitem-content {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .goog-menu .goog-menuitem.selected .goog-menuitem-content,\n.gmusic-theme .goog-menu .goog-menuitem.selected .goog-menuitem-content:hover {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .goog-menu .goog-menuitem:hover,\n.gmusic-theme .goog-menu .goog-menuseparator {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .material-detail-view .artist-details .bio-wrapper .bio {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-row.hover td a,\n.gmusic-theme .song-row.selected-song-row td a {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme paper-action-dialog {\n  background: <<BACK_PRIMARY>> !important;\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .settings-card {\n  background-color: <<BACK_PRIMARY>> !important;\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme #queue-overlay {\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme #queue-overlay::after {\n  border-color: transparent transparent <<BACK_PRIMARY>> <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme .upload-dialog-content {\n  background-color: <<BACK_SECONDARY>> !important;\n}\n\n.gmusic-theme .upload-dialog-description {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-row:hover [data-col=\"index\"] .hover-button[data-id=\"play\"] {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .goog-menuheader {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .paper-progress-1 #primaryProgress.paper-progress {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .album-view .material-container-details .info .title .explicit {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .paper-input-container-0 .input-content.label-is-highlighted.paper-input-container label,\n.gmusic-theme .paper-input-container-0 .input-content.label-is-highlighted.paper-input-container .paper-input-label {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .paper-input-container-0 .input-content.paper-input-container input,\n.gmusic-theme .paper-input-container-0 .input-content.paper-input-container textarea,\n.gmusic-theme .paper-input-container-0 .input-content.paper-input-container iron-autogrow-textarea,\n.gmusic-theme .paper-input-container-0 .input-content.paper-input-container .paper-input-input,\n.gmusic-theme .material-share-options #sharing-option-label {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .paper-input-container-0 .add-on-content.is-highlighted.paper-input-container * {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .material-container-details paper-fab,\n.gmusic-theme #current-loading-progress {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"play-pause\"]:not([disabled]) {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme #loading-overlay.material[data-type=\"full-loading-overlay\"],\n.gmusic-theme #loading-overlay.material[data-type=\"regular-loading-overlay\"] {\n  background: <<BACK_SECONDARY_O>> !important;\n}\n\n.gmusic-theme iron-overlay-backdrop {\n  background: <<BACK_SECONDARY>> !important;\n}\n\n.gmusic-theme #loading-overlay.material paper-spinner .circle,\n.gmusic-theme #loading-overlay.material paper-spinner-lite .circle {\n  border-color: <<FORE_SECONDARY>><<NOTIMPORTANT>> !important;\n}\n\n.gmusic-theme a.primary {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-button.material-primary {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-checkbox #checkbox.checked {\n  border-color: <<FORE_SECONDARY>> !important;\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-checkbox #ink {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-checkbox #checkboxLabel {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme paper-toggle-button[checked] .toggle-button {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-toggle-button[checked] .toggle-bar {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-toggle-button[checked] .toggle-ink {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .paper-slider-0 #sliderKnobInner.paper-slider,\n.gmusic-theme #sliderKnobInner.paper-slider,\n.gmusic-theme .paper-progress-0 #primaryProgress.paper-progress {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .nav-item-container.selected iron-icon {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .upload-dialog-title {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme a,\n.gmusic-theme .simple-dialog a {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-table [data-col=\"title\"],\n.gmusic-theme .song-table.mini [data-col=\"song-details\"] .song-title {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .subcategories-list,\n.gmusic-theme .material-detail-view .station-container-content-wrapper .material-container-details {\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme .material-list li a:hover,\n.gmusic-theme .material-list li a:focus {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .paper-input-container-0 .focused-line.paper-input-container {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-action-dialog paper-button,\n.gmusic-theme paper-dialog .buttons paper-button,\n.gmusic-theme .share-buttons .share-button .button-label {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-row:hover td,\n.gmusic-theme .song-row:hover td > * {\n  background: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .song-row:hover [data-col=\"track\"] .hover-button[data-id=\"play\"] {\n  background-color: <<BACK_HIGHLIGHT>> !important;\n}\n\n.gmusic-theme .rating-container li {\n  -webkit-filter: invert(1) !important;\n}\n\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"repeat\"][value=\"LIST_REPEAT\"],\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"repeat\"][value=\"SINGLE_REPEAT\"],\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"shuffle\"][value=\"ALL_SHUFFLE\"],\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"repeat\"][value=\"LIST_REPEAT\"],\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"repeat\"][value=\"SINGLE_REPEAT\"],\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"shuffle\"][value=\"ALL_SHUFFLE\"] {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .cluster .lane-button core-icon,\n.gmusic-theme .cluster .lane-button iron-icon,\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"repeat\"].active,\n.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=\"shuffle\"].active,\n.gmusic-theme #player.material #material-player-right-wrapper paper-icon-button[data-id=\"queue\"].opened {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .cluster .header .cluster-title,\n.gmusic-theme .cluster .header .subtitle {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .song-row .explicit,\n.gmusic-theme .material-card .explicit {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .material-detail-view .material-container-details .read-more-button {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme paper-dialog {\n  background: <<BACK_SECONDARY>> !important;\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .simple-dialog {\n  background-color: <<BACK_PRIMARY>> !important;\n  border-color: <<BACK_SECONDARY>> !important;\n}\n\n.gmusic-theme .simple-dialog,\n.gmusic-theme .simple-dialog > div {\n  background-color: <<BACK_PRIMARY>> !important;\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme .goog-buttonset-default {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme button.goog-buttonset-default,\n.gmusic-theme button.goog-buttonset-default:hover {\n  background-color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .top-charts-view .song-row [data-col=\"index\"] .column-content,\n.gmusic-theme .material-card .details .left-items .index,\n.gmusic-theme .more-songs-container {\n  color: <<FORE_SECONDARY>> !important;\n}\n\n.gmusic-theme .material-detail-view .top-tracks {\n  background-color: <<BACK_PRIMARY>> !important;\n}\n\n.gmusic-theme paper-button#unsubscribe-playlist-button .playlist-subscribed,\n.gmusic-theme paper-button#unsubscribe-playlist-button:hover .playlist-unsubscribe {\n  color: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme paper-button#unsubscribe-playlist-button iron-icon[icon=\"sj:unsubscribe\"] path:last-child,\n.gmusic-theme paper-button#unsubscribe-playlist-button iron-icon[icon=\"sj:subscribed\"] path {\n  fill: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme paper-button#unsubscribe-playlist-button iron-icon[icon=\"sj:subscribed\"] path:last-child {\n  stroke: <<FORE_PRIMARY>> !important;\n}\n\n.gmusic-theme paper-button#unsubscribe-playlist-button iron-icon[icon=\"sj:subscribed\"] path:first-child,\n.gmusic-theme paper-button#unsubscribe-playlist-button iron-icon[icon=\"sj:subscribed\"] path:last-child {\n  fill: transparent !important;\n}";
    var BASE_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 214 48\" id=\"normalSVGIcon\" class=\"menu-logo\">\n  <g fill=\"#757575\">\n    <path d=\"M12.3 20.5c0-5.4 4.6-9.8 10-9.8 3 0 5.1 1.2 6.7 2.7l-1.9 1.9c-1.2-1.1-2.7-1.9-4.8-1.9-4 0-7.1 3.2-7.1 7.2s3.1 7.2 7.1 7.2c2.6 0 4-1 5-2 .8-.8 1.3-1.9 1.5-3.4h-6.4v-2.7h9c.1.5.1 1.1.1 1.7 0 2-.6 4.5-2.3 6.3-1.7 1.8-3.9 2.8-6.9 2.8-5.5-.1-10-4.5-10-10zM38.8 17.7c-3.5 0-6.4 2.7-6.4 6.3 0 3.6 2.9 6.3 6.4 6.3 3.5 0 6.4-2.7 6.4-6.3-.1-3.6-2.9-6.3-6.4-6.3zm0 10.2c-1.9 0-3.6-1.6-3.6-3.8 0-2.3 1.7-3.8 3.6-3.8 1.9 0 3.6 1.6 3.6 3.8-.1 2.2-1.7 3.8-3.6 3.8zM52.6 17.7c-3.5 0-6.4 2.7-6.4 6.3 0 3.6 2.9 6.3 6.4 6.3 3.5 0 6.4-2.7 6.4-6.3 0-3.6-2.9-6.3-6.4-6.3zm0 10.2c-1.9 0-3.6-1.6-3.6-3.8 0-2.3 1.7-3.8 3.6-3.8s3.6 1.6 3.6 3.8c0 2.2-1.7 3.8-3.6 3.8zM69.7 18.1v1h-.1c-.6-.7-1.8-1.4-3.3-1.4-3.2 0-6.1 2.8-6.1 6.4 0 3.6 2.9 6.3 6.1 6.3 1.5 0 2.7-.7 3.3-1.4h.1v.9c0 2.4-1.3 3.7-3.4 3.7-1.7 0-2.8-1.2-3.2-2.3l-2.4 1c.7 1.7 2.5 3.7 5.6 3.7 3.3 0 6-1.9 6-6.6V18.1h-2.6zm-3.2 9.8c-1.9 0-3.5-1.6-3.5-3.8 0-2.2 1.6-3.9 3.5-3.9s3.4 1.6 3.4 3.9c-.1 2.2-1.5 3.8-3.4 3.8zM74.2 11.4H77V30h-2.8zM84.6 27.9c-1.4 0-2.4-.6-3.1-1.9l8.5-3.5-.3-.7c-.5-1.4-2.1-4-5.4-4-3.3 0-6 2.6-6 6.3 0 3.6 2.7 6.3 6.3 6.3 2.9 0 4.6-1.8 5.3-2.8l-2.2-1.4c-.7 1-1.7 1.7-3.1 1.7zm-.2-7.7c1.1 0 2 .6 2.4 1.3l-5.7 2.4c-.1-2.5 1.9-3.7 3.3-3.7z\"/></g><path fill=\"none\" d=\"M12.1 10.7h78v25.5h-78z\"/><path fill=\"none\" d=\"M12.1 10.7h189.8v25.5H12.1z\"/><g fill=\"#EE6B00\"><path d=\"M143.7 12.8h2.2l6 10.5h.1l6-10.5h2.2V30H158V19.8l.1-2.9h-.1l-5.4 9.4h-1.3l-5.4-9.4h-.1l.1 2.9V30h-2.2V12.8zM171.3 30v-1.6h-.1c-.6 1.1-2.1 2-3.7 2-3 0-4.5-2-4.5-4.9v-7.2h2.2v6.8c0 2.4 1.2 3.3 2.9 3.3 1.9 0 3.1-1.8 3.1-3.6v-6.5h2.2V30h-2.1zM174.9 27l2-.8c.6 1.5 1.8 2.2 3.2 2.2 1.4 0 2.4-.7 2.4-1.7 0-.6-.4-1.2-1.6-1.6l-2.4-.6c-1.1-.3-3.1-1.2-3.1-3.3 0-2.1 2.2-3.5 4.7-3.5 2 0 3.8.9 4.5 2.7l-1.9.8c-.5-1.1-1.5-1.6-2.7-1.6-1.2 0-2.3.6-2.3 1.5 0 .7.6 1.2 1.6 1.4l2.3.6c2.3.6 3.2 2 3.2 3.4 0 2.1-1.9 3.7-4.6 3.7-3 .2-4.6-1.5-5.3-3.2zM186 14.2c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9-.1-1.6-.8-1.6-1.6zm.4 15.8V18.2h2.2V30h-2.2zM190.5 24.1c0-3.6 2.5-6.3 6-6.3 2.8 0 4.4 1.7 5.2 3.4l-2 .8c-.6-1.4-1.7-2.2-3.3-2.2-1.9 0-3.7 1.7-3.7 4.2s1.8 4.2 3.7 4.2c1.6 0 2.8-.8 3.4-2.2l2 .8c-.7 1.7-2.4 3.4-5.2 3.4-3.6.2-6.1-2.5-6.1-6.1z\"/></g><g fill=\"#757575\"><path d=\"M102.3 11.4h-6.7V30h2.8v-7.1h3.9c3.1 0 6.1-2.2 6.1-5.8s-3.1-5.7-6.1-5.7zm0 9h-4V14h4c2.1 0 3.3 1.7 3.3 3.2 0 1.4-1.2 3.2-3.3 3.2zM112.7 30V11.4h-2.8V30h2.8zM125.2 30v-7.1c0-3.3-2.5-5.2-5.7-5.2-2 0-4.1.9-5 2.9l2.5 1c.5-1 1.5-1.4 2.5-1.4 1.4 0 2.9.9 2.9 2.4v.2c-.5-.3-1.6-.7-2.9-.7-2.7 0-5.4 1.5-5.4 4.2 0 2.5 2.2 4.1 4.6 4.1 1.9 0 2.9-.8 3.5-1.8h.1V30h2.9zm-6-2.1c-.9 0-2.2-.5-2.2-1.6 0-1.4 1.6-2 2.9-2 1.2 0 1.8.3 2.5.6-.1 1.8-1.6 3-3.2 3zM134.9 18.1l-3.2 8.1h-.1l-3.3-8.1h-3l5 11.3-2.8 6.3h2.9l7.6-17.6h-3.1z\"/>\n  </g>\n  <path fill=\"none\" d=\"M.1 0h213.8v48H.1z\"/>\n</svg>\n";
    var CONSTANTS = require('../lib/_constants');

    window.GMusicTheme = function () {
      /**
       * Constructor for a new Google Music Theme API.
       *
       * @param  {Object} - A colors object containing `backPrimary`, `backSecondary`,
       *                    `backHighlight`, `forePrimary`, `foreSecondary` attributes
       *                    any attribute not included will not be overriden
       */

      function GMusicTheme() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, GMusicTheme);

        // DEV: Use the colors specified in the options or the default if it isn't set
        this.BACK_PRIMARY = '#222326';
        this.BACK_SECONDARY = '#121314';
        this.BACK_HIGHLIGHT = '#615F59';
        this.FORE_PRIMARY = '#FFFFFF';
        this.FORE_SECONDARY = '#1ED760';

        this.enabled = false;
        if (options.enabled) {
          this.enable();
        }

        // DEV: This is the style element where we put our custom CSS
        this.styleElement = document.createElement('style');
        document.body.appendChild(this.styleElement);

        // DEV: updateTheme calls redrawTheme
        this.updateTheme(options);
      }

      /**
       * Regenerates the custom CSS and and updates the SVG logo
       */


      _createClass(GMusicTheme, [{
        key: "redrawTheme",
        value: function redrawTheme() {
          this._refreshStyleSheet();
          this._drawLogo();
        }

        /**
         * Enables the custom theme
         */

      }, {
        key: "enable",
        value: function enable() {
          document.body.classList.add(CONSTANTS.CLASS_NAMESPACE);
          this.enabled = true;
          this._drawLogo();
        }

        /**
         * Disables the custom theme
         */

      }, {
        key: "disable",
        value: function disable() {
          document.body.classList.remove(CONSTANTS.CLASS_NAMESPACE);
          this.enabled = false;
          this._drawLogo();
        }

        /**
         * Updates the custom colors used in the theme and redraws the custom CSS
         *
         * @param  {Object} - A colors object containing `backPrimary`, `backSecondary`,
         *                    `backHighlight`, `forePrimary`, `foreSecondary` attributes
         *                    any attribute not included will not be overriden
         */

      }, {
        key: "updateTheme",
        value: function updateTheme(colorObject) {
          this.BACK_PRIMARY = colorObject.backPrimary || this.BACK_PRIMARY;
          this.BACK_SECONDARY = colorObject.backSecondary || this.BACK_SECONDARY;
          this.BACK_HIGHLIGHT = colorObject.backHighlight || this.BACK_HIGHLIGHT;
          this.FORE_PRIMARY = colorObject.forePrimary || this.FORE_PRIMARY;
          this.FORE_SECONDARY = colorObject.foreSecondary || this.FORE_SECONDARY;
          this.redrawTheme();
        }
      }, {
        key: "_drawLogo",
        value: function _drawLogo() {
          var _this = this;

          var logo = document.querySelectorAll('.menu-logo')[0];
          var normalSVG = BASE_SVG;
          var customSVG = normalSVG.replace('#EE6B00', this.FORE_SECONDARY).replace('id="normalSVGIcon"', 'id="customSVGIcon"');
          var parent = void 0;
          var tmpSVG = void 0;

          if (logo) {
            parent = logo.parentNode;
            if (this.logoObserver) {
              this.logoObserver.disconnect();
              delete this.logoObserver;
            }

            if (this.enabled) {
              // DEV: Only update the SVG element if we need to
              if (logo.nodeName === 'IMG' || logo.id === 'normalSVGIcon' || logo.getAttribute('current-custom') !== this.FORE_SECONDARY) {
                parent.removeChild(logo);
                tmpSVG = new DOMParser().parseFromString(customSVG, 'text/xml').firstChild;
                tmpSVG.setAttribute('current-custom', this.FORE_SECONDARY);
                parent.appendChild(tmpSVG);
              }
            } else {
              // DEV: Only update the SVG element if we need to
              if (logo.nodeName === 'IMG' || logo.id === 'customSVGIcon') {
                parent.removeChild(logo);
                parent.appendChild(new DOMParser().parseFromString(normalSVG, 'text/xml').firstChild);
              }
            }

            // DEV: Google sometimes changes its logo by itself, we need to monitor this
            this.logoObserver = new MutationObserver(function () {
              _this._drawLogo();
            });
            this.logoObserver.observe(parent, {
              childList: true,
              attributes: true,
              subtree: true
            });
          } else {
            // DEV: If the logo isn't ready yet wait a few milliseconds and try again
            setTimeout(this._drawLogo, 10);
          }
        }
      }, {
        key: "_refreshStyleSheet",
        value: function _refreshStyleSheet() {
          // DEV: Take the current style string and put it in the style element in the DOM
          this.styleElement.innerHTML = this._substituteColors(BASE_CSS);
        }
      }, {
        key: "_rgba",
        value: function _rgba(colorCode, opacity) {
          return color(colorCode).clearer(opacity).rgbString();
        }
      }, {
        key: "_substituteColors",
        value: function _substituteColors(styleString) {
          return styleString.replace(/<<BACK_PRIMARY>>/g, this.BACK_PRIMARY).replace(/<<BACK_SECONDARY>>/g, this.BACK_SECONDARY).replace(/<<BACK_HIGHLIGHT>>/g, this.BACK_HIGHLIGHT).replace(/<<FORE_PRIMARY>>/g, this.FORE_PRIMARY).replace(/<<FORE_SECONDARY>>/g, this.FORE_SECONDARY).replace(/<<BACK_SECONDARY_O>>/g, this._rgba(this.BACK_SECONDARY, 0.5)).replace(/<<NOTIMPORTANT>> \!important/g, '');
        }
      }]);

      return GMusicTheme;
    }();
  }, { "../lib/_constants": 1, "color": 6 }] }, {}, [7]);
//# sourceMappingURL=gmusic-theme.js.map

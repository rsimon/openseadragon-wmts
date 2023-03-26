function si(t, i) {
  return wi(t, i, []).join("");
}
function wi(t, i, a) {
  if (t.nodeType == Node.CDATA_SECTION_NODE || t.nodeType == Node.TEXT_NODE)
    i ? a.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : a.push(t.nodeValue);
  else {
    var e = void 0;
    for (e = t.firstChild; e; e = e.nextSibling)
      wi(e, i, a);
  }
  return a;
}
function ha(t) {
  return "documentElement" in t;
}
function na(t) {
  return new DOMParser().parseFromString(t, "application/xml");
}
function Jt(t, i) {
  return function(a, e) {
    var s = t.call(i !== void 0 ? i : this, a, e);
    if (s !== void 0) {
      var r = e[e.length - 1];
      r.push(s);
    }
  };
}
function Q(t, i, a) {
  return function(e, s) {
    var r = t.call(a !== void 0 ? a : this, e, s);
    if (r !== void 0) {
      var n = s[s.length - 1], h = i !== void 0 ? i : e.localName, o = void 0;
      h in n ? o = n[h] : (o = [], n[h] = o), o.push(r);
    }
  };
}
function b(t, i, a) {
  return function(e, s) {
    var r = t.call(a !== void 0 ? a : this, e, s);
    if (r !== void 0) {
      var n = s[s.length - 1], h = i !== void 0 ? i : e.localName;
      n[h] = r;
    }
  };
}
function w(t, i, a) {
  var e = a !== void 0 ? a : {}, s, r;
  for (s = 0, r = t.length; s < r; ++s)
    e[t[s]] = i;
  return e;
}
function oa(t, i, a, e) {
  var s;
  for (s = i.firstElementChild; s; s = s.nextElementSibling) {
    var r = t[s.namespaceURI];
    if (r !== void 0) {
      var n = r[s.localName];
      n !== void 0 && n.call(e, s, a);
    }
  }
}
function p(t, i, a, e, s) {
  return e.push(t), oa(i, a, e, s), e.pop();
}
var la = function() {
  function t() {
  }
  return t.prototype.read = function(i) {
    if (i)
      if (typeof i == "string") {
        var a = na(i);
        return this.readFromDocument(a);
      } else
        return ha(i) ? this.readFromDocument(i) : this.readFromNode(i);
    else
      return null;
  }, t.prototype.readFromDocument = function(i) {
    for (var a = i.firstChild; a; a = a.nextSibling)
      if (a.nodeType == Node.ELEMENT_NODE)
        return this.readFromNode(a);
    return null;
  }, t.prototype.readFromNode = function(i) {
  }, t;
}();
const Ri = la;
var fa = "http://www.w3.org/1999/xlink";
function ei(t) {
  return t.getAttributeNS(fa, "href");
}
function ua(t) {
  var i = si(t, !1);
  return ca(i);
}
function ca(t) {
  var i = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);
  if (i)
    return parseFloat(i[1]);
}
function at(t) {
  var i = si(t, !1);
  return Ma(i);
}
function Ma(t) {
  var i = /^\s*(\d+)\s*$/.exec(t);
  if (i)
    return parseInt(i[1], 10);
}
function C(t) {
  return si(t, !1).trim();
}
var va = globalThis && globalThis.__extends || function() {
  var t = function(i, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, s) {
      e.__proto__ = s;
    } || function(e, s) {
      for (var r in s)
        Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    }, t(i, a);
  };
  return function(i, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(i, a);
    function e() {
      this.constructor = i;
    }
    i.prototype = a === null ? Object.create(a) : (e.prototype = a.prototype, new e());
  };
}(), W = [null, "http://www.opengis.net/ows/1.1"], da = w(W, {
  ServiceIdentification: b(ka),
  ServiceProvider: b(Fa),
  OperationsMetadata: b(Da)
}), ma = function(t) {
  va(i, t);
  function i() {
    return t.call(this) || this;
  }
  return i.prototype.readFromNode = function(a) {
    var e = p({}, da, a, []);
    return e || null;
  }, i;
}(Ri), ya = w(W, {
  DeliveryPoint: b(C),
  City: b(C),
  AdministrativeArea: b(C),
  PostalCode: b(C),
  Country: b(C),
  ElectronicMailAddress: b(C)
}), _a = w(W, {
  Value: Q(Ua)
}), ga = w(W, {
  AllowedValues: b(Ra)
}), xa = w(W, {
  Phone: b(Ba),
  Address: b(wa)
}), ba = w(W, {
  HTTP: b(Ga)
}), Sa = w(W, {
  Get: Q(qa),
  Post: void 0
}), Ea = w(W, {
  DCP: b(La)
}), Aa = w(W, {
  Operation: $a
}), Ca = w(W, {
  Voice: b(C),
  Facsimile: b(C)
}), Na = w(W, {
  Constraint: Q(pa)
}), Pa = w(W, {
  IndividualName: b(C),
  PositionName: b(C),
  ContactInfo: b(Oa)
}), Ta = w(W, {
  Abstract: b(C),
  AccessConstraints: b(C),
  Fees: b(C),
  Title: b(C),
  ServiceTypeVersion: b(C),
  ServiceType: b(C)
}), Ia = w(W, {
  ProviderName: b(C),
  ProviderSite: b(ei),
  ServiceContact: b(za)
});
function wa(t, i) {
  return p({}, ya, t, i);
}
function Ra(t, i) {
  return p({}, _a, t, i);
}
function pa(t, i) {
  var a = t.getAttribute("name");
  if (!!a)
    return p({ name: a }, ga, t, i);
}
function Oa(t, i) {
  return p({}, xa, t, i);
}
function La(t, i) {
  return p({}, ba, t, i);
}
function qa(t, i) {
  var a = ei(t);
  if (!!a)
    return p({ href: a }, Na, t, i);
}
function Ga(t, i) {
  return p({}, Sa, t, i);
}
function $a(t, i) {
  var a = t.getAttribute("name"), e = p({}, Ea, t, i);
  if (!!e) {
    var s = i[i.length - 1];
    s[a] = e;
  }
}
function Da(t, i) {
  return p({}, Aa, t, i);
}
function Ba(t, i) {
  return p({}, Ca, t, i);
}
function ka(t, i) {
  return p({}, Ta, t, i);
}
function za(t, i) {
  return p({}, Pa, t, i);
}
function Fa(t, i) {
  return p({}, Ia, t, i);
}
function Ua(t, i) {
  return C(t);
}
const Wa = ma;
function ja(t) {
  for (var i = Qa(), a = 0, e = t.length; a < e; ++a)
    Ha(i, t[a]);
  return i;
}
function Qa() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Ha(t, i) {
  i[0] < t[0] && (t[0] = i[0]), i[0] > t[2] && (t[2] = i[0]), i[1] < t[1] && (t[1] = i[1]), i[1] > t[3] && (t[3] = i[1]);
}
var Xa = globalThis && globalThis.__extends || function() {
  var t = function(i, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, s) {
      e.__proto__ = s;
    } || function(e, s) {
      for (var r in s)
        Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    }, t(i, a);
  };
  return function(i, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(i, a);
    function e() {
      this.constructor = i;
    }
    i.prototype = a === null ? Object.create(a) : (e.prototype = a.prototype, new e());
  };
}(), Y = [null, "http://www.opengis.net/wmts/1.0"], _t = [null, "http://www.opengis.net/ows/1.1"], Va = w(Y, {
  Contents: b(ns)
}), Ka = function(t) {
  Xa(i, t);
  function i() {
    var a = t.call(this) || this;
    return a.owsParser_ = new Wa(), a;
  }
  return i.prototype.readFromNode = function(a) {
    var e = a.getAttribute("version");
    e && (e = e.trim());
    var s = this.owsParser_.readFromNode(a);
    return s ? (s.version = e, s = p(s, Va, a, []), s || null) : null;
  }, i;
}(Ri), Ja = w(Y, {
  Layer: Q(os),
  TileMatrixSet: Q(ls)
}), Za = w(Y, {
  Style: Q(fs),
  Format: Q(C),
  TileMatrixSetLink: Q(us),
  Dimension: Q(cs),
  ResourceURL: Q(Ms)
}, w(_t, {
  Title: b(C),
  Abstract: b(C),
  WGS84BoundingBox: b(pi),
  Identifier: b(C)
})), Ya = w(Y, {
  LegendURL: Q(vs)
}, w(_t, {
  Title: b(C),
  Identifier: b(C)
})), ts = w(Y, {
  TileMatrixSet: b(C),
  TileMatrixSetLimits: b(ms)
}), is = w(Y, {
  TileMatrixLimits: Jt(ys)
}), as = w(Y, {
  TileMatrix: b(C),
  MinTileRow: b(at),
  MaxTileRow: b(at),
  MinTileCol: b(at),
  MaxTileCol: b(at)
}), ss = w(Y, {
  Default: b(C),
  Value: Q(C)
}, w(_t, {
  Identifier: b(C)
})), es = w(_t, {
  LowerCorner: Jt(Zt),
  UpperCorner: Jt(Zt)
}), rs = w(Y, {
  WellKnownScaleSet: b(C),
  TileMatrix: Q(ds)
}, w(_t, {
  SupportedCRS: b(C),
  Identifier: b(C),
  BoundingBox: b(pi)
})), hs = w(Y, {
  TopLeftCorner: b(Zt),
  ScaleDenominator: b(ua),
  TileWidth: b(at),
  TileHeight: b(at),
  MatrixWidth: b(at),
  MatrixHeight: b(at)
}, w(_t, {
  Identifier: b(C)
}));
function ns(t, i) {
  return p({}, Ja, t, i);
}
function os(t, i) {
  return p({}, Za, t, i);
}
function ls(t, i) {
  return p({}, rs, t, i);
}
function fs(t, i) {
  var a = p({}, Ya, t, i);
  if (!!a) {
    var e = t.getAttribute("isDefault") === "true";
    return a.isDefault = e, a;
  }
}
function us(t, i) {
  return p({}, ts, t, i);
}
function cs(t, i) {
  return p({}, ss, t, i);
}
function Ms(t, i) {
  var a = t.getAttribute("format"), e = t.getAttribute("template"), s = t.getAttribute("resourceType"), r = {};
  return a && (r.format = a), e && (r.template = e), s && (r.resourceType = s), r;
}
function pi(t, i) {
  var a = p([], es, t, i);
  if (a.length == 2)
    return ja(a);
}
function vs(t, i) {
  var a = {};
  return a.format = t.getAttribute("format"), a.href = ei(t), a;
}
function Zt(t, i) {
  var a = C(t).split(/\s+/);
  if (!(!a || a.length != 2)) {
    var e = +a[0], s = +a[1];
    if (!(isNaN(e) || isNaN(s)))
      return [e, s];
  }
}
function ds(t, i) {
  return p({}, hs, t, i);
}
function ms(t, i) {
  return p([], is, t, i);
}
function ys(t, i) {
  return p({}, as, t, i);
}
const _s = Ka, gs = (t, i) => {
  const e = new _s().read(t), s = i != null && i.layer ? e.Contents.Layer.find((d) => d.Title === i.layer) : e.Contents.Layer[0], r = (i == null ? void 0 : i.style) || s.Style.find((d) => d.isDefault).Identifier, n = s.ResourceURL[0].template, h = s.TileMatrixSetLink[0].TileMatrixSet, o = e.Contents.TileMatrixSet.find((d) => d.Identifier === h), { TileMatrix: l } = o, {
    TileWidth: u,
    TileHeight: f,
    MatrixWidth: c,
    MatrixHeight: v,
    TopLeftCorner: M
  } = l[Math.min(20, l.length - 1)];
  return {
    tileSource: {
      width: c * u,
      height: v * f,
      tileWidth: u,
      tileHeight: f,
      minLevel: 8,
      getTileUrl: (d, y, x) => n.replace("{Style}", r).replace("{TileMatrixSet}", h).replace("{TileMatrix}", d - 8).replace("{TileCol}", y).replace("{TileRow}", x)
    },
    mapBounds: s.WGS84BoundingBox,
    projection: {
      code: o.SupportedCRS,
      extent: [2 * Math.abs(M[0]), 2 * Math.abs(M[1])]
    }
  };
};
function xs(t) {
  t("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"), t("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"), t("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"), t.WGS84 = t["EPSG:4326"], t["EPSG:3785"] = t["EPSG:3857"], t.GOOGLE = t["EPSG:3857"], t["EPSG:900913"] = t["EPSG:3857"], t["EPSG:102113"] = t["EPSG:3857"];
}
var ot = 1, lt = 2, Gt = 3, bs = 4, Yt = 5, fi = 6378137, Ss = 6356752314e-3, ui = 0.0066943799901413165, At = 484813681109536e-20, m = Math.PI / 2, Es = 0.16666666666666666, As = 0.04722222222222222, Cs = 0.022156084656084655, _ = 1e-10, D = 0.017453292519943295, K = 57.29577951308232, T = Math.PI / 4, Ct = Math.PI * 2, G = 3.14159265359, j = {};
j.greenwich = 0;
j.lisbon = -9.131906111111;
j.paris = 2.337229166667;
j.bogota = -74.080916666667;
j.madrid = -3.687938888889;
j.rome = 12.452333333333;
j.bern = 7.439583333333;
j.jakarta = 106.807719444444;
j.ferro = -17.666666666667;
j.brussels = 4.367975;
j.stockholm = 18.058277777778;
j.athens = 23.7163375;
j.oslo = 10.722916666667;
const Ns = {
  ft: { to_meter: 0.3048 },
  "us-ft": { to_meter: 1200 / 3937 }
};
var ci = /[\s_\-\/\(\)]/g;
function et(t, i) {
  if (t[i])
    return t[i];
  for (var a = Object.keys(t), e = i.toLowerCase().replace(ci, ""), s = -1, r, n; ++s < a.length; )
    if (r = a[s], n = r.toLowerCase().replace(ci, ""), n === e)
      return t[r];
}
function ti(t) {
  var i = {}, a = t.split("+").map(function(h) {
    return h.trim();
  }).filter(function(h) {
    return h;
  }).reduce(function(h, o) {
    var l = o.split("=");
    return l.push(!0), h[l[0].toLowerCase()] = l[1], h;
  }, {}), e, s, r, n = {
    proj: "projName",
    datum: "datumCode",
    rf: function(h) {
      i.rf = parseFloat(h);
    },
    lat_0: function(h) {
      i.lat0 = h * D;
    },
    lat_1: function(h) {
      i.lat1 = h * D;
    },
    lat_2: function(h) {
      i.lat2 = h * D;
    },
    lat_ts: function(h) {
      i.lat_ts = h * D;
    },
    lon_0: function(h) {
      i.long0 = h * D;
    },
    lon_1: function(h) {
      i.long1 = h * D;
    },
    lon_2: function(h) {
      i.long2 = h * D;
    },
    alpha: function(h) {
      i.alpha = parseFloat(h) * D;
    },
    gamma: function(h) {
      i.rectified_grid_angle = parseFloat(h);
    },
    lonc: function(h) {
      i.longc = h * D;
    },
    x_0: function(h) {
      i.x0 = parseFloat(h);
    },
    y_0: function(h) {
      i.y0 = parseFloat(h);
    },
    k_0: function(h) {
      i.k0 = parseFloat(h);
    },
    k: function(h) {
      i.k0 = parseFloat(h);
    },
    a: function(h) {
      i.a = parseFloat(h);
    },
    b: function(h) {
      i.b = parseFloat(h);
    },
    r_a: function() {
      i.R_A = !0;
    },
    zone: function(h) {
      i.zone = parseInt(h, 10);
    },
    south: function() {
      i.utmSouth = !0;
    },
    towgs84: function(h) {
      i.datum_params = h.split(",").map(function(o) {
        return parseFloat(o);
      });
    },
    to_meter: function(h) {
      i.to_meter = parseFloat(h);
    },
    units: function(h) {
      i.units = h;
      var o = et(Ns, h);
      o && (i.to_meter = o.to_meter);
    },
    from_greenwich: function(h) {
      i.from_greenwich = h * D;
    },
    pm: function(h) {
      var o = et(j, h);
      i.from_greenwich = (o || parseFloat(h)) * D;
    },
    nadgrids: function(h) {
      h === "@null" ? i.datumCode = "none" : i.nadgrids = h;
    },
    axis: function(h) {
      var o = "ewnsud";
      h.length === 3 && o.indexOf(h.substr(0, 1)) !== -1 && o.indexOf(h.substr(1, 1)) !== -1 && o.indexOf(h.substr(2, 1)) !== -1 && (i.axis = h);
    },
    approx: function() {
      i.approx = !0;
    }
  };
  for (e in a)
    s = a[e], e in n ? (r = n[e], typeof r == "function" ? r(s) : i[r] = s) : i[e] = s;
  return typeof i.datumCode == "string" && i.datumCode !== "WGS84" && (i.datumCode = i.datumCode.toLowerCase()), i;
}
var Nt = 1, Oi = 2, Li = 3, zt = 4, qi = 5, ri = -1, Ps = /\s/, Ts = /[A-Za-z]/, Is = /[A-Za-z84]/, Qt = /[,\]]/, Gi = /[\d\.E\-\+]/;
function it(t) {
  if (typeof t != "string")
    throw new Error("not a string");
  this.text = t.trim(), this.level = 0, this.place = 0, this.root = null, this.stack = [], this.currentObject = null, this.state = Nt;
}
it.prototype.readCharicter = function() {
  var t = this.text[this.place++];
  if (this.state !== zt)
    for (; Ps.test(t); ) {
      if (this.place >= this.text.length)
        return;
      t = this.text[this.place++];
    }
  switch (this.state) {
    case Nt:
      return this.neutral(t);
    case Oi:
      return this.keyword(t);
    case zt:
      return this.quoted(t);
    case qi:
      return this.afterquote(t);
    case Li:
      return this.number(t);
    case ri:
      return;
  }
};
it.prototype.afterquote = function(t) {
  if (t === '"') {
    this.word += '"', this.state = zt;
    return;
  }
  if (Qt.test(t)) {
    this.word = this.word.trim(), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in afterquote yet, index ' + this.place);
};
it.prototype.afterItem = function(t) {
  if (t === ",") {
    this.word !== null && this.currentObject.push(this.word), this.word = null, this.state = Nt;
    return;
  }
  if (t === "]") {
    this.level--, this.word !== null && (this.currentObject.push(this.word), this.word = null), this.state = Nt, this.currentObject = this.stack.pop(), this.currentObject || (this.state = ri);
    return;
  }
};
it.prototype.number = function(t) {
  if (Gi.test(t)) {
    this.word += t;
    return;
  }
  if (Qt.test(t)) {
    this.word = parseFloat(this.word), this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in number yet, index ' + this.place);
};
it.prototype.quoted = function(t) {
  if (t === '"') {
    this.state = qi;
    return;
  }
  this.word += t;
};
it.prototype.keyword = function(t) {
  if (Is.test(t)) {
    this.word += t;
    return;
  }
  if (t === "[") {
    var i = [];
    i.push(this.word), this.level++, this.root === null ? this.root = i : this.currentObject.push(i), this.stack.push(this.currentObject), this.currentObject = i, this.state = Nt;
    return;
  }
  if (Qt.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in keyword yet, index ' + this.place);
};
it.prototype.neutral = function(t) {
  if (Ts.test(t)) {
    this.word = t, this.state = Oi;
    return;
  }
  if (t === '"') {
    this.word = "", this.state = zt;
    return;
  }
  if (Gi.test(t)) {
    this.word = t, this.state = Li;
    return;
  }
  if (Qt.test(t)) {
    this.afterItem(t);
    return;
  }
  throw new Error(`havn't handled "` + t + '" in neutral yet, index ' + this.place);
};
it.prototype.output = function() {
  for (; this.place < this.text.length; )
    this.readCharicter();
  if (this.state === ri)
    return this.root;
  throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
};
function ws(t) {
  var i = new it(t);
  return i.output();
}
function Mi(t, i, a) {
  Array.isArray(i) && (a.unshift(i), i = null);
  var e = i ? {} : t, s = a.reduce(function(r, n) {
    return ut(n, r), r;
  }, e);
  i && (t[i] = s);
}
function ut(t, i) {
  if (!Array.isArray(t)) {
    i[t] = !0;
    return;
  }
  var a = t.shift();
  if (a === "PARAMETER" && (a = t.shift()), t.length === 1) {
    if (Array.isArray(t[0])) {
      i[a] = {}, ut(t[0], i[a]);
      return;
    }
    i[a] = t[0];
    return;
  }
  if (!t.length) {
    i[a] = !0;
    return;
  }
  if (a === "TOWGS84") {
    i[a] = t;
    return;
  }
  if (a === "AXIS") {
    a in i || (i[a] = []), i[a].push(t);
    return;
  }
  Array.isArray(a) || (i[a] = {});
  var e;
  switch (a) {
    case "UNIT":
    case "PRIMEM":
    case "VERT_DATUM":
      i[a] = {
        name: t[0].toLowerCase(),
        convert: t[1]
      }, t.length === 3 && ut(t[2], i[a]);
      return;
    case "SPHEROID":
    case "ELLIPSOID":
      i[a] = {
        name: t[0],
        a: t[1],
        rf: t[2]
      }, t.length === 4 && ut(t[3], i[a]);
      return;
    case "PROJECTEDCRS":
    case "PROJCRS":
    case "GEOGCS":
    case "GEOCCS":
    case "PROJCS":
    case "LOCAL_CS":
    case "GEODCRS":
    case "GEODETICCRS":
    case "GEODETICDATUM":
    case "EDATUM":
    case "ENGINEERINGDATUM":
    case "VERT_CS":
    case "VERTCRS":
    case "VERTICALCRS":
    case "COMPD_CS":
    case "COMPOUNDCRS":
    case "ENGINEERINGCRS":
    case "ENGCRS":
    case "FITTED_CS":
    case "LOCAL_DATUM":
    case "DATUM":
      t[0] = ["name", t[0]], Mi(i, a, t);
      return;
    default:
      for (e = -1; ++e < t.length; )
        if (!Array.isArray(t[e]))
          return ut(t, i[a]);
      return Mi(i, a, t);
  }
}
var Rs = 0.017453292519943295;
function ps(t, i) {
  var a = i[0], e = i[1];
  !(a in t) && e in t && (t[a] = t[e], i.length === 3 && (t[a] = i[2](t[a])));
}
function tt(t) {
  return t * Rs;
}
function Os(t) {
  if (t.type === "GEOGCS" ? t.projName = "longlat" : t.type === "LOCAL_CS" ? (t.projName = "identity", t.local = !0) : typeof t.PROJECTION == "object" ? t.projName = Object.keys(t.PROJECTION)[0] : t.projName = t.PROJECTION, t.AXIS) {
    for (var i = "", a = 0, e = t.AXIS.length; a < e; ++a) {
      var s = [t.AXIS[a][0].toLowerCase(), t.AXIS[a][1].toLowerCase()];
      s[0].indexOf("north") !== -1 || (s[0] === "y" || s[0] === "lat") && s[1] === "north" ? i += "n" : s[0].indexOf("south") !== -1 || (s[0] === "y" || s[0] === "lat") && s[1] === "south" ? i += "s" : s[0].indexOf("east") !== -1 || (s[0] === "x" || s[0] === "lon") && s[1] === "east" ? i += "e" : (s[0].indexOf("west") !== -1 || (s[0] === "x" || s[0] === "lon") && s[1] === "west") && (i += "w");
    }
    i.length === 2 && (i += "u"), i.length === 3 && (t.axis = i);
  }
  t.UNIT && (t.units = t.UNIT.name.toLowerCase(), t.units === "metre" && (t.units = "meter"), t.UNIT.convert && (t.type === "GEOGCS" ? t.DATUM && t.DATUM.SPHEROID && (t.to_meter = t.UNIT.convert * t.DATUM.SPHEROID.a) : t.to_meter = t.UNIT.convert));
  var r = t.GEOGCS;
  t.type === "GEOGCS" && (r = t), r && (r.DATUM ? t.datumCode = r.DATUM.name.toLowerCase() : t.datumCode = r.name.toLowerCase(), t.datumCode.slice(0, 2) === "d_" && (t.datumCode = t.datumCode.slice(2)), (t.datumCode === "new_zealand_geodetic_datum_1949" || t.datumCode === "new_zealand_1949") && (t.datumCode = "nzgd49"), (t.datumCode === "wgs_1984" || t.datumCode === "world_geodetic_system_1984") && (t.PROJECTION === "Mercator_Auxiliary_Sphere" && (t.sphere = !0), t.datumCode = "wgs84"), t.datumCode.slice(-6) === "_ferro" && (t.datumCode = t.datumCode.slice(0, -6)), t.datumCode.slice(-8) === "_jakarta" && (t.datumCode = t.datumCode.slice(0, -8)), ~t.datumCode.indexOf("belge") && (t.datumCode = "rnb72"), r.DATUM && r.DATUM.SPHEROID && (t.ellps = r.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk"), t.ellps.toLowerCase().slice(0, 13) === "international" && (t.ellps = "intl"), t.a = r.DATUM.SPHEROID.a, t.rf = parseFloat(r.DATUM.SPHEROID.rf, 10)), r.DATUM && r.DATUM.TOWGS84 && (t.datum_params = r.DATUM.TOWGS84), ~t.datumCode.indexOf("osgb_1936") && (t.datumCode = "osgb36"), ~t.datumCode.indexOf("osni_1952") && (t.datumCode = "osni52"), (~t.datumCode.indexOf("tm65") || ~t.datumCode.indexOf("geodetic_datum_of_1965")) && (t.datumCode = "ire65"), t.datumCode === "ch1903+" && (t.datumCode = "ch1903"), ~t.datumCode.indexOf("israel") && (t.datumCode = "isr93")), t.b && !isFinite(t.b) && (t.b = t.a);
  function n(l) {
    var u = t.to_meter || 1;
    return l * u;
  }
  var h = function(l) {
    return ps(t, l);
  }, o = [
    ["standard_parallel_1", "Standard_Parallel_1"],
    ["standard_parallel_1", "Latitude of 1st standard parallel"],
    ["standard_parallel_2", "Standard_Parallel_2"],
    ["standard_parallel_2", "Latitude of 2nd standard parallel"],
    ["false_easting", "False_Easting"],
    ["false_easting", "False easting"],
    ["false-easting", "Easting at false origin"],
    ["false_northing", "False_Northing"],
    ["false_northing", "False northing"],
    ["false_northing", "Northing at false origin"],
    ["central_meridian", "Central_Meridian"],
    ["central_meridian", "Longitude of natural origin"],
    ["central_meridian", "Longitude of false origin"],
    ["latitude_of_origin", "Latitude_Of_Origin"],
    ["latitude_of_origin", "Central_Parallel"],
    ["latitude_of_origin", "Latitude of natural origin"],
    ["latitude_of_origin", "Latitude of false origin"],
    ["scale_factor", "Scale_Factor"],
    ["k0", "scale_factor"],
    ["latitude_of_center", "Latitude_Of_Center"],
    ["latitude_of_center", "Latitude_of_center"],
    ["lat0", "latitude_of_center", tt],
    ["longitude_of_center", "Longitude_Of_Center"],
    ["longitude_of_center", "Longitude_of_center"],
    ["longc", "longitude_of_center", tt],
    ["x0", "false_easting", n],
    ["y0", "false_northing", n],
    ["long0", "central_meridian", tt],
    ["lat0", "latitude_of_origin", tt],
    ["lat0", "standard_parallel_1", tt],
    ["lat1", "standard_parallel_1", tt],
    ["lat2", "standard_parallel_2", tt],
    ["azimuth", "Azimuth"],
    ["alpha", "azimuth", tt],
    ["srsCode", "name"]
  ];
  o.forEach(h), !t.long0 && t.longc && (t.projName === "Albers_Conic_Equal_Area" || t.projName === "Lambert_Azimuthal_Equal_Area") && (t.long0 = t.longc), !t.lat_ts && t.lat1 && (t.projName === "Stereographic_South_Pole" || t.projName === "Polar Stereographic (variant B)") && (t.lat0 = tt(t.lat1 > 0 ? 90 : -90), t.lat_ts = t.lat1);
}
function $i(t) {
  var i = ws(t), a = i.shift(), e = i.shift();
  i.unshift(["name", e]), i.unshift(["type", a]);
  var s = {};
  return ut(i, s), Os(s), s;
}
function z(t) {
  var i = this;
  if (arguments.length === 2) {
    var a = arguments[1];
    typeof a == "string" ? a.charAt(0) === "+" ? z[t] = ti(arguments[1]) : z[t] = $i(arguments[1]) : z[t] = a;
  } else if (arguments.length === 1) {
    if (Array.isArray(t))
      return t.map(function(e) {
        Array.isArray(e) ? z.apply(i, e) : z(e);
      });
    if (typeof t == "string") {
      if (t in z)
        return z[t];
    } else
      "EPSG" in t ? z["EPSG:" + t.EPSG] = t : "ESRI" in t ? z["ESRI:" + t.ESRI] = t : "IAU2000" in t ? z["IAU2000:" + t.IAU2000] = t : console.log(t);
    return;
  }
}
xs(z);
function Ls(t) {
  return typeof t == "string";
}
function qs(t) {
  return t in z;
}
var Gs = ["PROJECTEDCRS", "PROJCRS", "GEOGCS", "GEOCCS", "PROJCS", "LOCAL_CS", "GEODCRS", "GEODETICCRS", "GEODETICDATUM", "ENGCRS", "ENGINEERINGCRS"];
function $s(t) {
  return Gs.some(function(i) {
    return t.indexOf(i) > -1;
  });
}
var Ds = ["3857", "900913", "3785", "102113"];
function Bs(t) {
  var i = et(t, "authority");
  if (!!i) {
    var a = et(i, "epsg");
    return a && Ds.indexOf(a) > -1;
  }
}
function ks(t) {
  var i = et(t, "extension");
  if (!!i)
    return et(i, "proj4");
}
function zs(t) {
  return t[0] === "+";
}
function Fs(t) {
  if (Ls(t)) {
    if (qs(t))
      return z[t];
    if ($s(t)) {
      var i = $i(t);
      if (Bs(i))
        return z["EPSG:3857"];
      var a = ks(i);
      return a ? ti(a) : i;
    }
    if (zs(t))
      return ti(t);
  } else
    return t;
}
function vi(t, i) {
  t = t || {};
  var a, e;
  if (!i)
    return t;
  for (e in i)
    a = i[e], a !== void 0 && (t[e] = a);
  return t;
}
function Z(t, i, a) {
  var e = t * i;
  return a / Math.sqrt(1 - e * e);
}
function Tt(t) {
  return t < 0 ? -1 : 1;
}
function g(t) {
  return Math.abs(t) <= G ? t : t - Tt(t) * Ct;
}
function X(t, i, a) {
  var e = t * a, s = 0.5 * t;
  return e = Math.pow((1 - e) / (1 + e), s), Math.tan(0.5 * (m - i)) / e;
}
function Pt(t, i) {
  for (var a = 0.5 * t, e, s, r = m - 2 * Math.atan(i), n = 0; n <= 15; n++)
    if (e = t * Math.sin(r), s = m - 2 * Math.atan(i * Math.pow((1 - e) / (1 + e), a)) - r, r += s, Math.abs(s) <= 1e-10)
      return r;
  return -9999;
}
function Us() {
  var t = this.b / this.a;
  this.es = 1 - t * t, "x0" in this || (this.x0 = 0), "y0" in this || (this.y0 = 0), this.e = Math.sqrt(this.es), this.lat_ts ? this.sphere ? this.k0 = Math.cos(this.lat_ts) : this.k0 = Z(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k ? this.k0 = this.k : this.k0 = 1);
}
function Ws(t) {
  var i = t.x, a = t.y;
  if (a * K > 90 && a * K < -90 && i * K > 180 && i * K < -180)
    return null;
  var e, s;
  if (Math.abs(Math.abs(a) - m) <= _)
    return null;
  if (this.sphere)
    e = this.x0 + this.a * this.k0 * g(i - this.long0), s = this.y0 + this.a * this.k0 * Math.log(Math.tan(T + 0.5 * a));
  else {
    var r = Math.sin(a), n = X(this.e, a, r);
    e = this.x0 + this.a * this.k0 * g(i - this.long0), s = this.y0 - this.a * this.k0 * Math.log(n);
  }
  return t.x = e, t.y = s, t;
}
function js(t) {
  var i = t.x - this.x0, a = t.y - this.y0, e, s;
  if (this.sphere)
    s = m - 2 * Math.atan(Math.exp(-a / (this.a * this.k0)));
  else {
    var r = Math.exp(-a / (this.a * this.k0));
    if (s = Pt(this.e, r), s === -9999)
      return null;
  }
  return e = g(this.long0 + i / (this.a * this.k0)), t.x = e, t.y = s, t;
}
var Qs = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
const Hs = {
  init: Us,
  forward: Ws,
  inverse: js,
  names: Qs
};
function Xs() {
}
function di(t) {
  return t;
}
var Vs = ["longlat", "identity"];
const Ks = {
  init: Xs,
  forward: di,
  inverse: di,
  names: Vs
};
var Js = [Hs, Ks], $t = {}, Ft = [];
function Di(t, i) {
  var a = Ft.length;
  return t.names ? (Ft[a] = t, t.names.forEach(function(e) {
    $t[e.toLowerCase()] = a;
  }), this) : (console.log(i), !0);
}
function Zs(t) {
  if (!t)
    return !1;
  var i = t.toLowerCase();
  if (typeof $t[i] < "u" && Ft[$t[i]])
    return Ft[$t[i]];
}
function Ys() {
  Js.forEach(Di);
}
const te = {
  start: Ys,
  add: Di,
  get: Zs
};
var E = {};
E.MERIT = {
  a: 6378137,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
E.SGS85 = {
  a: 6378136,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
E.GRS80 = {
  a: 6378137,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
E.IAU76 = {
  a: 6378140,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
E.airy = {
  a: 6377563396e-3,
  b: 635625691e-2,
  ellipseName: "Airy 1830"
};
E.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
E.NWL9D = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
E.mod_airy = {
  a: 6377340189e-3,
  b: 6356034446e-3,
  ellipseName: "Modified Airy"
};
E.andrae = {
  a: 637710443e-2,
  rf: 300,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
E.aust_SA = {
  a: 6378160,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
E.GRS67 = {
  a: 6378160,
  rf: 298.247167427,
  ellipseName: "GRS 67(IUGG 1967)"
};
E.bessel = {
  a: 6377397155e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
E.bess_nam = {
  a: 6377483865e-3,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
E.clrk66 = {
  a: 63782064e-1,
  b: 63565838e-1,
  ellipseName: "Clarke 1866"
};
E.clrk80 = {
  a: 6378249145e-3,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
E.clrk58 = {
  a: 6378293645208759e-9,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
E.CPM = {
  a: 63757387e-1,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
E.delmbr = {
  a: 6376428,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
E.engelis = {
  a: 637813605e-2,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
E.evrst30 = {
  a: 6377276345e-3,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
E.evrst48 = {
  a: 6377304063e-3,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
E.evrst56 = {
  a: 6377301243e-3,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
E.evrst69 = {
  a: 6377295664e-3,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
E.evrstSS = {
  a: 6377298556e-3,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
E.fschr60 = {
  a: 6378166,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
E.fschr60m = {
  a: 6378155,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
E.fschr68 = {
  a: 6378150,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
E.helmert = {
  a: 6378200,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
E.hough = {
  a: 6378270,
  rf: 297,
  ellipseName: "Hough"
};
E.intl = {
  a: 6378388,
  rf: 297,
  ellipseName: "International 1909 (Hayford)"
};
E.kaula = {
  a: 6378163,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
E.lerch = {
  a: 6378139,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
E.mprts = {
  a: 6397300,
  rf: 191,
  ellipseName: "Maupertius 1738"
};
E.new_intl = {
  a: 63781575e-1,
  b: 63567722e-1,
  ellipseName: "New International 1967"
};
E.plessis = {
  a: 6376523,
  rf: 6355863,
  ellipseName: "Plessis 1817 (France)"
};
E.krass = {
  a: 6378245,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
E.SEasia = {
  a: 6378155,
  b: 63567733205e-4,
  ellipseName: "Southeast Asia"
};
E.walbeck = {
  a: 6376896,
  b: 63558348467e-4,
  ellipseName: "Walbeck"
};
E.WGS60 = {
  a: 6378165,
  rf: 298.3,
  ellipseName: "WGS 60"
};
E.WGS66 = {
  a: 6378145,
  rf: 298.25,
  ellipseName: "WGS 66"
};
E.WGS7 = {
  a: 6378135,
  rf: 298.26,
  ellipseName: "WGS 72"
};
var ie = E.WGS84 = {
  a: 6378137,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
E.sphere = {
  a: 6370997,
  b: 6370997,
  ellipseName: "Normal Sphere (r=6370997)"
};
function ae(t, i, a, e) {
  var s = t * t, r = i * i, n = (s - r) / s, h = 0;
  e ? (t *= 1 - n * (Es + n * (As + n * Cs)), s = t * t, n = 0) : h = Math.sqrt(n);
  var o = (s - r) / r;
  return {
    es: n,
    e: h,
    ep2: o
  };
}
function se(t, i, a, e, s) {
  if (!t) {
    var r = et(E, e);
    r || (r = ie), t = r.a, i = r.b, a = r.rf;
  }
  return a && !i && (i = (1 - 1 / a) * t), (a === 0 || Math.abs(t - i) < _) && (s = !0, i = t), {
    a: t,
    b: i,
    rf: a,
    sphere: s
  };
}
var $ = {};
$.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
$.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
$.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
$.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
$.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
$.potsdam = {
  towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
$.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
$.hermannskogel = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
$.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};
$.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
$.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
$.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
$.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
$.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: "bessel",
  datumName: "S-JTSK (Ferro)"
};
$.beduaram = {
  towgs84: "-106,-87,188",
  ellipse: "clrk80",
  datumName: "Beduaram"
};
$.gunung_segara = {
  towgs84: "-403,684,41",
  ellipse: "bessel",
  datumName: "Gunung Segara Jakarta"
};
$.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};
function ee(t, i, a, e, s, r, n) {
  var h = {};
  return t === void 0 || t === "none" ? h.datum_type = Yt : h.datum_type = bs, i && (h.datum_params = i.map(parseFloat), (h.datum_params[0] !== 0 || h.datum_params[1] !== 0 || h.datum_params[2] !== 0) && (h.datum_type = ot), h.datum_params.length > 3 && (h.datum_params[3] !== 0 || h.datum_params[4] !== 0 || h.datum_params[5] !== 0 || h.datum_params[6] !== 0) && (h.datum_type = lt, h.datum_params[3] *= At, h.datum_params[4] *= At, h.datum_params[5] *= At, h.datum_params[6] = h.datum_params[6] / 1e6 + 1)), n && (h.datum_type = Gt, h.grids = n), h.a = a, h.b = e, h.es = s, h.ep2 = r, h;
}
var Bi = {};
function re(t, i) {
  var a = new DataView(i), e = oe(a), s = le(a, e);
  s.nSubgrids > 1 && console.log("Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored");
  var r = fe(a, s, e), n = { header: s, subgrids: r };
  return Bi[t] = n, n;
}
function he(t) {
  if (t === void 0)
    return null;
  var i = t.split(",");
  return i.map(ne);
}
function ne(t) {
  if (t.length === 0)
    return null;
  var i = t[0] === "@";
  return i && (t = t.slice(1)), t === "null" ? { name: "null", mandatory: !i, grid: null, isNull: !0 } : {
    name: t,
    mandatory: !i,
    grid: Bi[t] || null,
    isNull: !1
  };
}
function ct(t) {
  return t / 3600 * Math.PI / 180;
}
function oe(t) {
  var i = t.getInt32(8, !1);
  return i === 11 ? !1 : (i = t.getInt32(8, !0), i !== 11 && console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"), !0);
}
function le(t, i) {
  return {
    nFields: t.getInt32(8, i),
    nSubgridFields: t.getInt32(24, i),
    nSubgrids: t.getInt32(40, i),
    shiftType: ii(t, 56, 56 + 8).trim(),
    fromSemiMajorAxis: t.getFloat64(120, i),
    fromSemiMinorAxis: t.getFloat64(136, i),
    toSemiMajorAxis: t.getFloat64(152, i),
    toSemiMinorAxis: t.getFloat64(168, i)
  };
}
function ii(t, i, a) {
  return String.fromCharCode.apply(null, new Uint8Array(t.buffer.slice(i, a)));
}
function fe(t, i, a) {
  for (var e = 176, s = [], r = 0; r < i.nSubgrids; r++) {
    var n = ce(t, e, a), h = Me(t, e, n, a), o = Math.round(
      1 + (n.upperLongitude - n.lowerLongitude) / n.longitudeInterval
    ), l = Math.round(
      1 + (n.upperLatitude - n.lowerLatitude) / n.latitudeInterval
    );
    s.push({
      ll: [ct(n.lowerLongitude), ct(n.lowerLatitude)],
      del: [ct(n.longitudeInterval), ct(n.latitudeInterval)],
      lim: [o, l],
      count: n.gridNodeCount,
      cvs: ue(h)
    });
  }
  return s;
}
function ue(t) {
  return t.map(function(i) {
    return [ct(i.longitudeShift), ct(i.latitudeShift)];
  });
}
function ce(t, i, a) {
  return {
    name: ii(t, i + 8, i + 16).trim(),
    parent: ii(t, i + 24, i + 24 + 8).trim(),
    lowerLatitude: t.getFloat64(i + 72, a),
    upperLatitude: t.getFloat64(i + 88, a),
    lowerLongitude: t.getFloat64(i + 104, a),
    upperLongitude: t.getFloat64(i + 120, a),
    latitudeInterval: t.getFloat64(i + 136, a),
    longitudeInterval: t.getFloat64(i + 152, a),
    gridNodeCount: t.getInt32(i + 168, a)
  };
}
function Me(t, i, a, e) {
  for (var s = i + 176, r = 16, n = [], h = 0; h < a.gridNodeCount; h++) {
    var o = {
      latitudeShift: t.getFloat32(s + h * r, e),
      longitudeShift: t.getFloat32(s + h * r + 4, e),
      latitudeAccuracy: t.getFloat32(s + h * r + 8, e),
      longitudeAccuracy: t.getFloat32(s + h * r + 12, e)
    };
    n.push(o);
  }
  return n;
}
function J(t, i) {
  if (!(this instanceof J))
    return new J(t);
  i = i || function(l) {
    if (l)
      throw l;
  };
  var a = Fs(t);
  if (typeof a != "object") {
    i(t);
    return;
  }
  var e = J.projections.get(a.projName);
  if (!e) {
    i(t);
    return;
  }
  if (a.datumCode && a.datumCode !== "none") {
    var s = et($, a.datumCode);
    s && (a.datum_params = a.datum_params || (s.towgs84 ? s.towgs84.split(",") : null), a.ellps = s.ellipse, a.datumName = s.datumName ? s.datumName : a.datumCode);
  }
  a.k0 = a.k0 || 1, a.axis = a.axis || "enu", a.ellps = a.ellps || "wgs84", a.lat1 = a.lat1 || a.lat0;
  var r = se(a.a, a.b, a.rf, a.ellps, a.sphere), n = ae(r.a, r.b, r.rf, a.R_A), h = he(a.nadgrids), o = a.datum || ee(
    a.datumCode,
    a.datum_params,
    r.a,
    r.b,
    n.es,
    n.ep2,
    h
  );
  vi(this, a), vi(this, e), this.a = r.a, this.b = r.b, this.rf = r.rf, this.sphere = r.sphere, this.es = n.es, this.e = n.e, this.ep2 = n.ep2, this.datum = o, this.init(), i(null, this);
}
J.projections = te;
J.projections.start();
function ve(t, i) {
  return t.datum_type !== i.datum_type || t.a !== i.a || Math.abs(t.es - i.es) > 5e-11 ? !1 : t.datum_type === ot ? t.datum_params[0] === i.datum_params[0] && t.datum_params[1] === i.datum_params[1] && t.datum_params[2] === i.datum_params[2] : t.datum_type === lt ? t.datum_params[0] === i.datum_params[0] && t.datum_params[1] === i.datum_params[1] && t.datum_params[2] === i.datum_params[2] && t.datum_params[3] === i.datum_params[3] && t.datum_params[4] === i.datum_params[4] && t.datum_params[5] === i.datum_params[5] && t.datum_params[6] === i.datum_params[6] : !0;
}
function ki(t, i, a) {
  var e = t.x, s = t.y, r = t.z ? t.z : 0, n, h, o, l;
  if (s < -m && s > -1.001 * m)
    s = -m;
  else if (s > m && s < 1.001 * m)
    s = m;
  else {
    if (s < -m)
      return { x: -1 / 0, y: -1 / 0, z: t.z };
    if (s > m)
      return { x: 1 / 0, y: 1 / 0, z: t.z };
  }
  return e > Math.PI && (e -= 2 * Math.PI), h = Math.sin(s), l = Math.cos(s), o = h * h, n = a / Math.sqrt(1 - i * o), {
    x: (n + r) * l * Math.cos(e),
    y: (n + r) * l * Math.sin(e),
    z: (n * (1 - i) + r) * h
  };
}
function zi(t, i, a, e) {
  var s = 1e-12, r = s * s, n = 30, h, o, l, u, f, c, v, M, d, y, x, S, A, R = t.x, N = t.y, P = t.z ? t.z : 0, B, L, V;
  if (h = Math.sqrt(R * R + N * N), o = Math.sqrt(R * R + N * N + P * P), h / a < s) {
    if (B = 0, o / a < s)
      return L = m, V = -e, {
        x: t.x,
        y: t.y,
        z: t.z
      };
  } else
    B = Math.atan2(N, R);
  l = P / o, u = h / o, f = 1 / Math.sqrt(1 - i * (2 - i) * u * u), M = u * (1 - i) * f, d = l * f, A = 0;
  do
    A++, v = a / Math.sqrt(1 - i * d * d), V = h * M + P * d - v * (1 - i * d * d), c = i * v / (v + V), f = 1 / Math.sqrt(1 - c * (2 - c) * u * u), y = u * (1 - c) * f, x = l * f, S = x * M - y * d, M = y, d = x;
  while (S * S > r && A < n);
  return L = Math.atan(x / Math.abs(y)), {
    x: B,
    y: L,
    z: V
  };
}
function de(t, i, a) {
  if (i === ot)
    return {
      x: t.x + a[0],
      y: t.y + a[1],
      z: t.z + a[2]
    };
  if (i === lt) {
    var e = a[0], s = a[1], r = a[2], n = a[3], h = a[4], o = a[5], l = a[6];
    return {
      x: l * (t.x - o * t.y + h * t.z) + e,
      y: l * (o * t.x + t.y - n * t.z) + s,
      z: l * (-h * t.x + n * t.y + t.z) + r
    };
  }
}
function me(t, i, a) {
  if (i === ot)
    return {
      x: t.x - a[0],
      y: t.y - a[1],
      z: t.z - a[2]
    };
  if (i === lt) {
    var e = a[0], s = a[1], r = a[2], n = a[3], h = a[4], o = a[5], l = a[6], u = (t.x - e) / l, f = (t.y - s) / l, c = (t.z - r) / l;
    return {
      x: u + o * f - h * c,
      y: -o * u + f + n * c,
      z: h * u - n * f + c
    };
  }
}
function Lt(t) {
  return t === ot || t === lt;
}
function ye(t, i, a) {
  if (ve(t, i) || t.datum_type === Yt || i.datum_type === Yt)
    return a;
  var e = t.a, s = t.es;
  if (t.datum_type === Gt) {
    var r = mi(t, !1, a);
    if (r !== 0)
      return;
    e = fi, s = ui;
  }
  var n = i.a, h = i.b, o = i.es;
  if (i.datum_type === Gt && (n = fi, h = Ss, o = ui), s === o && e === n && !Lt(t.datum_type) && !Lt(i.datum_type))
    return a;
  if (a = ki(a, s, e), Lt(t.datum_type) && (a = de(a, t.datum_type, t.datum_params)), Lt(i.datum_type) && (a = me(a, i.datum_type, i.datum_params)), a = zi(a, o, n, h), i.datum_type === Gt) {
    var l = mi(i, !0, a);
    if (l !== 0)
      return;
  }
  return a;
}
function mi(t, i, a) {
  if (t.grids === null || t.grids.length === 0)
    return console.log("Grid shift grids not found"), -1;
  for (var e = { x: -a.x, y: a.y }, s = { x: Number.NaN, y: Number.NaN }, r = [], n = 0; n < t.grids.length; n++) {
    var h = t.grids[n];
    if (r.push(h.name), h.isNull) {
      s = e;
      break;
    }
    if (h.mandatory, h.grid === null) {
      if (h.mandatory)
        return console.log("Unable to find mandatory grid '" + h.name + "'"), -1;
      continue;
    }
    var o = h.grid.subgrids[0], l = (Math.abs(o.del[1]) + Math.abs(o.del[0])) / 1e4, u = o.ll[0] - l, f = o.ll[1] - l, c = o.ll[0] + (o.lim[0] - 1) * o.del[0] + l, v = o.ll[1] + (o.lim[1] - 1) * o.del[1] + l;
    if (!(f > e.y || u > e.x || v < e.y || c < e.x) && (s = _e(e, i, o), !isNaN(s.x)))
      break;
  }
  return isNaN(s.x) ? (console.log("Failed to find a grid shift table for location '" + -e.x * K + " " + e.y * K + " tried: '" + r + "'"), -1) : (a.x = -s.x, a.y = s.y, 0);
}
function _e(t, i, a) {
  var e = { x: Number.NaN, y: Number.NaN };
  if (isNaN(t.x))
    return e;
  var s = { x: t.x, y: t.y };
  s.x -= a.ll[0], s.y -= a.ll[1], s.x = g(s.x - Math.PI) + Math.PI;
  var r = yi(s, a);
  if (i) {
    if (isNaN(r.x))
      return e;
    r.x = s.x - r.x, r.y = s.y - r.y;
    var n = 9, h = 1e-12, o, l;
    do {
      if (l = yi(r, a), isNaN(l.x)) {
        console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
        break;
      }
      o = { x: s.x - (l.x + r.x), y: s.y - (l.y + r.y) }, r.x += o.x, r.y += o.y;
    } while (n-- && Math.abs(o.x) > h && Math.abs(o.y) > h);
    if (n < 0)
      return console.log("Inverse grid shift iterator failed to converge."), e;
    e.x = g(r.x + a.ll[0]), e.y = r.y + a.ll[1];
  } else
    isNaN(r.x) || (e.x = t.x + r.x, e.y = t.y + r.y);
  return e;
}
function yi(t, i) {
  var a = { x: t.x / i.del[0], y: t.y / i.del[1] }, e = { x: Math.floor(a.x), y: Math.floor(a.y) }, s = { x: a.x - 1 * e.x, y: a.y - 1 * e.y }, r = { x: Number.NaN, y: Number.NaN }, n;
  if (e.x < 0 || e.x >= i.lim[0] || e.y < 0 || e.y >= i.lim[1])
    return r;
  n = e.y * i.lim[0] + e.x;
  var h = { x: i.cvs[n][0], y: i.cvs[n][1] };
  n++;
  var o = { x: i.cvs[n][0], y: i.cvs[n][1] };
  n += i.lim[0];
  var l = { x: i.cvs[n][0], y: i.cvs[n][1] };
  n--;
  var u = { x: i.cvs[n][0], y: i.cvs[n][1] }, f = s.x * s.y, c = s.x * (1 - s.y), v = (1 - s.x) * (1 - s.y), M = (1 - s.x) * s.y;
  return r.x = v * h.x + c * o.x + M * u.x + f * l.x, r.y = v * h.y + c * o.y + M * u.y + f * l.y, r;
}
function _i(t, i, a) {
  var e = a.x, s = a.y, r = a.z || 0, n, h, o, l = {};
  for (o = 0; o < 3; o++)
    if (!(i && o === 2 && a.z === void 0))
      switch (o === 0 ? (n = e, "ew".indexOf(t.axis[o]) !== -1 ? h = "x" : h = "y") : o === 1 ? (n = s, "ns".indexOf(t.axis[o]) !== -1 ? h = "y" : h = "x") : (n = r, h = "z"), t.axis[o]) {
        case "e":
          l[h] = n;
          break;
        case "w":
          l[h] = -n;
          break;
        case "n":
          l[h] = n;
          break;
        case "s":
          l[h] = -n;
          break;
        case "u":
          a[h] !== void 0 && (l.z = n);
          break;
        case "d":
          a[h] !== void 0 && (l.z = -n);
          break;
        default:
          return null;
      }
  return l;
}
function Fi(t) {
  var i = {
    x: t[0],
    y: t[1]
  };
  return t.length > 2 && (i.z = t[2]), t.length > 3 && (i.m = t[3]), i;
}
function ge(t) {
  gi(t.x), gi(t.y);
}
function gi(t) {
  if (typeof Number.isFinite == "function") {
    if (Number.isFinite(t))
      return;
    throw new TypeError("coordinates must be finite numbers");
  }
  if (typeof t != "number" || t !== t || !isFinite(t))
    throw new TypeError("coordinates must be finite numbers");
}
function xe(t, i) {
  return (t.datum.datum_type === ot || t.datum.datum_type === lt) && i.datumCode !== "WGS84" || (i.datum.datum_type === ot || i.datum.datum_type === lt) && t.datumCode !== "WGS84";
}
function Ut(t, i, a, e) {
  var s;
  if (Array.isArray(a) && (a = Fi(a)), ge(a), t.datum && i.datum && xe(t, i) && (s = new J("WGS84"), a = Ut(t, s, a, e), t = s), e && t.axis !== "enu" && (a = _i(t, !1, a)), t.projName === "longlat")
    a = {
      x: a.x * D,
      y: a.y * D,
      z: a.z || 0
    };
  else if (t.to_meter && (a = {
    x: a.x * t.to_meter,
    y: a.y * t.to_meter,
    z: a.z || 0
  }), a = t.inverse(a), !a)
    return;
  if (t.from_greenwich && (a.x += t.from_greenwich), a = ye(t.datum, i.datum, a), !!a)
    return i.from_greenwich && (a = {
      x: a.x - i.from_greenwich,
      y: a.y,
      z: a.z || 0
    }), i.projName === "longlat" ? a = {
      x: a.x * K,
      y: a.y * K,
      z: a.z || 0
    } : (a = i.forward(a), i.to_meter && (a = {
      x: a.x / i.to_meter,
      y: a.y / i.to_meter,
      z: a.z || 0
    })), e && i.axis !== "enu" ? _i(i, !0, a) : a;
}
var xi = J("WGS84");
function Vt(t, i, a, e) {
  var s, r, n;
  return Array.isArray(a) ? (s = Ut(t, i, a, e) || { x: NaN, y: NaN }, a.length > 2 ? typeof t.name < "u" && t.name === "geocent" || typeof i.name < "u" && i.name === "geocent" ? typeof s.z == "number" ? [s.x, s.y, s.z].concat(a.splice(3)) : [s.x, s.y, a[2]].concat(a.splice(3)) : [s.x, s.y].concat(a.splice(2)) : [s.x, s.y]) : (r = Ut(t, i, a, e), n = Object.keys(a), n.length === 2 || n.forEach(function(h) {
    if (typeof t.name < "u" && t.name === "geocent" || typeof i.name < "u" && i.name === "geocent") {
      if (h === "x" || h === "y" || h === "z")
        return;
    } else if (h === "x" || h === "y")
      return;
    r[h] = a[h];
  }), r);
}
function bi(t) {
  return t instanceof J ? t : t.oProj ? t.oProj : J(t);
}
function q(t, i, a) {
  t = bi(t);
  var e = !1, s;
  return typeof i > "u" ? (i = t, t = xi, e = !0) : (typeof i.x < "u" || Array.isArray(i)) && (a = i, i = t, t = xi, e = !0), i = bi(i), a ? Vt(t, i, a) : (s = {
    forward: function(r, n) {
      return Vt(t, i, r, n);
    },
    inverse: function(r, n) {
      return Vt(i, t, r, n);
    }
  }, e && (s.oProj = i), s);
}
var Si = 6, Ui = "AJSAJS", Wi = "AFAFAF", Mt = 65, U = 73, H = 79, bt = 86, St = 90;
const be = {
  forward: ji,
  inverse: Se,
  toPoint: Qi
};
function ji(t, i) {
  return i = i || 5, Ce(Ee({
    lat: t[1],
    lon: t[0]
  }), i);
}
function Se(t) {
  var i = hi(Xi(t.toUpperCase()));
  return i.lat && i.lon ? [i.lon, i.lat, i.lon, i.lat] : [i.left, i.bottom, i.right, i.top];
}
function Qi(t) {
  var i = hi(Xi(t.toUpperCase()));
  return i.lat && i.lon ? [i.lon, i.lat] : [(i.left + i.right) / 2, (i.top + i.bottom) / 2];
}
function Kt(t) {
  return t * (Math.PI / 180);
}
function Ei(t) {
  return 180 * (t / Math.PI);
}
function Ee(t) {
  var i = t.lat, a = t.lon, e = 6378137, s = 669438e-8, r = 0.9996, n, h, o, l, u, f, c, v = Kt(i), M = Kt(a), d, y;
  y = Math.floor((a + 180) / 6) + 1, a === 180 && (y = 60), i >= 56 && i < 64 && a >= 3 && a < 12 && (y = 32), i >= 72 && i < 84 && (a >= 0 && a < 9 ? y = 31 : a >= 9 && a < 21 ? y = 33 : a >= 21 && a < 33 ? y = 35 : a >= 33 && a < 42 && (y = 37)), n = (y - 1) * 6 - 180 + 3, d = Kt(n), h = s / (1 - s), o = e / Math.sqrt(1 - s * Math.sin(v) * Math.sin(v)), l = Math.tan(v) * Math.tan(v), u = h * Math.cos(v) * Math.cos(v), f = Math.cos(v) * (M - d), c = e * ((1 - s / 4 - 3 * s * s / 64 - 5 * s * s * s / 256) * v - (3 * s / 8 + 3 * s * s / 32 + 45 * s * s * s / 1024) * Math.sin(2 * v) + (15 * s * s / 256 + 45 * s * s * s / 1024) * Math.sin(4 * v) - 35 * s * s * s / 3072 * Math.sin(6 * v));
  var x = r * o * (f + (1 - l + u) * f * f * f / 6 + (5 - 18 * l + l * l + 72 * u - 58 * h) * f * f * f * f * f / 120) + 5e5, S = r * (c + o * Math.tan(v) * (f * f / 2 + (5 - l + 9 * u + 4 * u * u) * f * f * f * f / 24 + (61 - 58 * l + l * l + 600 * u - 330 * h) * f * f * f * f * f * f / 720));
  return i < 0 && (S += 1e7), {
    northing: Math.round(S),
    easting: Math.round(x),
    zoneNumber: y,
    zoneLetter: Ae(i)
  };
}
function hi(t) {
  var i = t.northing, a = t.easting, e = t.zoneLetter, s = t.zoneNumber;
  if (s < 0 || s > 60)
    return null;
  var r = 0.9996, n = 6378137, h = 669438e-8, o, l = (1 - Math.sqrt(1 - h)) / (1 + Math.sqrt(1 - h)), u, f, c, v, M, d, y, x, S, A = a - 5e5, R = i;
  e < "N" && (R -= 1e7), y = (s - 1) * 6 - 180 + 3, o = h / (1 - h), d = R / r, x = d / (n * (1 - h / 4 - 3 * h * h / 64 - 5 * h * h * h / 256)), S = x + (3 * l / 2 - 27 * l * l * l / 32) * Math.sin(2 * x) + (21 * l * l / 16 - 55 * l * l * l * l / 32) * Math.sin(4 * x) + 151 * l * l * l / 96 * Math.sin(6 * x), u = n / Math.sqrt(1 - h * Math.sin(S) * Math.sin(S)), f = Math.tan(S) * Math.tan(S), c = o * Math.cos(S) * Math.cos(S), v = n * (1 - h) / Math.pow(1 - h * Math.sin(S) * Math.sin(S), 1.5), M = A / (u * r);
  var N = S - u * Math.tan(S) / v * (M * M / 2 - (5 + 3 * f + 10 * c - 4 * c * c - 9 * o) * M * M * M * M / 24 + (61 + 90 * f + 298 * c + 45 * f * f - 252 * o - 3 * c * c) * M * M * M * M * M * M / 720);
  N = Ei(N);
  var P = (M - (1 + 2 * f + c) * M * M * M / 6 + (5 - 2 * c + 28 * f - 3 * c * c + 8 * o + 24 * f * f) * M * M * M * M * M / 120) / Math.cos(S);
  P = y + Ei(P);
  var B;
  if (t.accuracy) {
    var L = hi({
      northing: t.northing + t.accuracy,
      easting: t.easting + t.accuracy,
      zoneLetter: t.zoneLetter,
      zoneNumber: t.zoneNumber
    });
    B = {
      top: L.lat,
      right: L.lon,
      bottom: N,
      left: P
    };
  } else
    B = {
      lat: N,
      lon: P
    };
  return B;
}
function Ae(t) {
  var i = "Z";
  return 84 >= t && t >= 72 ? i = "X" : 72 > t && t >= 64 ? i = "W" : 64 > t && t >= 56 ? i = "V" : 56 > t && t >= 48 ? i = "U" : 48 > t && t >= 40 ? i = "T" : 40 > t && t >= 32 ? i = "S" : 32 > t && t >= 24 ? i = "R" : 24 > t && t >= 16 ? i = "Q" : 16 > t && t >= 8 ? i = "P" : 8 > t && t >= 0 ? i = "N" : 0 > t && t >= -8 ? i = "M" : -8 > t && t >= -16 ? i = "L" : -16 > t && t >= -24 ? i = "K" : -24 > t && t >= -32 ? i = "J" : -32 > t && t >= -40 ? i = "H" : -40 > t && t >= -48 ? i = "G" : -48 > t && t >= -56 ? i = "F" : -56 > t && t >= -64 ? i = "E" : -64 > t && t >= -72 ? i = "D" : -72 > t && t >= -80 && (i = "C"), i;
}
function Ce(t, i) {
  var a = "00000" + t.easting, e = "00000" + t.northing;
  return t.zoneNumber + t.zoneLetter + Ne(t.easting, t.northing, t.zoneNumber) + a.substr(a.length - 5, i) + e.substr(e.length - 5, i);
}
function Ne(t, i, a) {
  var e = Hi(a), s = Math.floor(t / 1e5), r = Math.floor(i / 1e5) % 20;
  return Pe(s, r, e);
}
function Hi(t) {
  var i = t % Si;
  return i === 0 && (i = Si), i;
}
function Pe(t, i, a) {
  var e = a - 1, s = Ui.charCodeAt(e), r = Wi.charCodeAt(e), n = s + t - 1, h = r + i, o = !1;
  n > St && (n = n - St + Mt - 1, o = !0), (n === U || s < U && n > U || (n > U || s < U) && o) && n++, (n === H || s < H && n > H || (n > H || s < H) && o) && (n++, n === U && n++), n > St && (n = n - St + Mt - 1), h > bt ? (h = h - bt + Mt - 1, o = !0) : o = !1, (h === U || r < U && h > U || (h > U || r < U) && o) && h++, (h === H || r < H && h > H || (h > H || r < H) && o) && (h++, h === U && h++), h > bt && (h = h - bt + Mt - 1);
  var l = String.fromCharCode(n) + String.fromCharCode(h);
  return l;
}
function Xi(t) {
  if (t && t.length === 0)
    throw "MGRSPoint coverting from nothing";
  for (var i = t.length, a = null, e = "", s, r = 0; !/[A-Z]/.test(s = t.charAt(r)); ) {
    if (r >= 2)
      throw "MGRSPoint bad conversion from: " + t;
    e += s, r++;
  }
  var n = parseInt(e, 10);
  if (r === 0 || r + 3 > i)
    throw "MGRSPoint bad conversion from: " + t;
  var h = t.charAt(r++);
  if (h <= "A" || h === "B" || h === "Y" || h >= "Z" || h === "I" || h === "O")
    throw "MGRSPoint zone letter " + h + " not handled: " + t;
  a = t.substring(r, r += 2);
  for (var o = Hi(n), l = Te(a.charAt(0), o), u = Ie(a.charAt(1), o); u < we(h); )
    u += 2e6;
  var f = i - r;
  if (f % 2 !== 0)
    throw `MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters` + t;
  var c = f / 2, v = 0, M = 0, d, y, x, S, A;
  return c > 0 && (d = 1e5 / Math.pow(10, c), y = t.substring(r, r + c), v = parseFloat(y) * d, x = t.substring(r + c), M = parseFloat(x) * d), S = v + l, A = M + u, {
    easting: S,
    northing: A,
    zoneLetter: h,
    zoneNumber: n,
    accuracy: d
  };
}
function Te(t, i) {
  for (var a = Ui.charCodeAt(i - 1), e = 1e5, s = !1; a !== t.charCodeAt(0); ) {
    if (a++, a === U && a++, a === H && a++, a > St) {
      if (s)
        throw "Bad character: " + t;
      a = Mt, s = !0;
    }
    e += 1e5;
  }
  return e;
}
function Ie(t, i) {
  if (t > "V")
    throw "MGRSPoint given invalid Northing " + t;
  for (var a = Wi.charCodeAt(i - 1), e = 0, s = !1; a !== t.charCodeAt(0); ) {
    if (a++, a === U && a++, a === H && a++, a > bt) {
      if (s)
        throw "Bad character: " + t;
      a = Mt, s = !0;
    }
    e += 1e5;
  }
  return e;
}
function we(t) {
  var i;
  switch (t) {
    case "C":
      i = 11e5;
      break;
    case "D":
      i = 2e6;
      break;
    case "E":
      i = 28e5;
      break;
    case "F":
      i = 37e5;
      break;
    case "G":
      i = 46e5;
      break;
    case "H":
      i = 55e5;
      break;
    case "J":
      i = 64e5;
      break;
    case "K":
      i = 73e5;
      break;
    case "L":
      i = 82e5;
      break;
    case "M":
      i = 91e5;
      break;
    case "N":
      i = 0;
      break;
    case "P":
      i = 8e5;
      break;
    case "Q":
      i = 17e5;
      break;
    case "R":
      i = 26e5;
      break;
    case "S":
      i = 35e5;
      break;
    case "T":
      i = 44e5;
      break;
    case "U":
      i = 53e5;
      break;
    case "V":
      i = 62e5;
      break;
    case "W":
      i = 7e6;
      break;
    case "X":
      i = 79e5;
      break;
    default:
      i = -1;
  }
  if (i >= 0)
    return i;
  throw "Invalid zone letter: " + t;
}
function mt(t, i, a) {
  if (!(this instanceof mt))
    return new mt(t, i, a);
  if (Array.isArray(t))
    this.x = t[0], this.y = t[1], this.z = t[2] || 0;
  else if (typeof t == "object")
    this.x = t.x, this.y = t.y, this.z = t.z || 0;
  else if (typeof t == "string" && typeof i > "u") {
    var e = t.split(",");
    this.x = parseFloat(e[0], 10), this.y = parseFloat(e[1], 10), this.z = parseFloat(e[2], 10) || 0;
  } else
    this.x = t, this.y = i, this.z = a || 0;
  console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
}
mt.fromMGRS = function(t) {
  return new mt(Qi(t));
};
mt.prototype.toMGRS = function(t) {
  return ji([this.x, this.y], t);
};
var Re = 1, pe = 0.25, Ai = 0.046875, Ci = 0.01953125, Ni = 0.01068115234375, Oe = 0.75, Le = 0.46875, qe = 0.013020833333333334, Ge = 0.007120768229166667, $e = 0.3645833333333333, De = 0.005696614583333333, Be = 0.3076171875;
function Vi(t) {
  var i = [];
  i[0] = Re - t * (pe + t * (Ai + t * (Ci + t * Ni))), i[1] = t * (Oe - t * (Ai + t * (Ci + t * Ni)));
  var a = t * t;
  return i[2] = a * (Le - t * (qe + t * Ge)), a *= t, i[3] = a * ($e - t * De), i[4] = a * t * Be, i;
}
function Ht(t, i, a, e) {
  return a *= i, i *= i, e[0] * t - a * (e[1] + i * (e[2] + i * (e[3] + i * e[4])));
}
var ke = 20;
function Ki(t, i, a) {
  for (var e = 1 / (1 - i), s = t, r = ke; r; --r) {
    var n = Math.sin(s), h = 1 - i * n * n;
    if (h = (Ht(s, n, Math.cos(s), a) - t) * (h * Math.sqrt(h)) * e, s -= h, Math.abs(h) < _)
      return s;
  }
  return s;
}
function ze() {
  this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.es && (this.en = Vi(this.es), this.ml0 = Ht(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en));
}
function Fe(t) {
  var i = t.x, a = t.y, e = g(i - this.long0), s, r, n, h = Math.sin(a), o = Math.cos(a);
  if (this.es) {
    var u = o * e, f = Math.pow(u, 2), c = this.ep2 * Math.pow(o, 2), v = Math.pow(c, 2), M = Math.abs(o) > _ ? Math.tan(a) : 0, d = Math.pow(M, 2), y = Math.pow(d, 2);
    s = 1 - this.es * Math.pow(h, 2), u = u / Math.sqrt(s);
    var x = Ht(a, h, o, this.en);
    r = this.a * (this.k0 * u * (1 + f / 6 * (1 - d + c + f / 20 * (5 - 18 * d + y + 14 * c - 58 * d * c + f / 42 * (61 + 179 * y - y * d - 479 * d))))) + this.x0, n = this.a * (this.k0 * (x - this.ml0 + h * e * u / 2 * (1 + f / 12 * (5 - d + 9 * c + 4 * v + f / 30 * (61 + y - 58 * d + 270 * c - 330 * d * c + f / 56 * (1385 + 543 * y - y * d - 3111 * d)))))) + this.y0;
  } else {
    var l = o * Math.sin(e);
    if (Math.abs(Math.abs(l) - 1) < _)
      return 93;
    if (r = 0.5 * this.a * this.k0 * Math.log((1 + l) / (1 - l)) + this.x0, n = o * Math.cos(e) / Math.sqrt(1 - Math.pow(l, 2)), l = Math.abs(n), l >= 1) {
      if (l - 1 > _)
        return 93;
      n = 0;
    } else
      n = Math.acos(n);
    a < 0 && (n = -n), n = this.a * this.k0 * (n - this.lat0) + this.y0;
  }
  return t.x = r, t.y = n, t;
}
function Ue(t) {
  var i, a, e, s, r = (t.x - this.x0) * (1 / this.a), n = (t.y - this.y0) * (1 / this.a);
  if (this.es)
    if (i = this.ml0 + n / this.k0, a = Ki(i, this.es, this.en), Math.abs(a) < m) {
      var f = Math.sin(a), c = Math.cos(a), v = Math.abs(c) > _ ? Math.tan(a) : 0, M = this.ep2 * Math.pow(c, 2), d = Math.pow(M, 2), y = Math.pow(v, 2), x = Math.pow(y, 2);
      i = 1 - this.es * Math.pow(f, 2);
      var S = r * Math.sqrt(i) / this.k0, A = Math.pow(S, 2);
      i = i * v, e = a - i * A / (1 - this.es) * 0.5 * (1 - A / 12 * (5 + 3 * y - 9 * M * y + M - 4 * d - A / 30 * (61 + 90 * y - 252 * M * y + 45 * x + 46 * M - A / 56 * (1385 + 3633 * y + 4095 * x + 1574 * x * y)))), s = g(this.long0 + S * (1 - A / 6 * (1 + 2 * y + M - A / 20 * (5 + 28 * y + 24 * x + 8 * M * y + 6 * M - A / 42 * (61 + 662 * y + 1320 * x + 720 * x * y)))) / c);
    } else
      e = m * Tt(n), s = 0;
  else {
    var h = Math.exp(r / this.k0), o = 0.5 * (h - 1 / h), l = this.lat0 + n / this.k0, u = Math.cos(l);
    i = Math.sqrt((1 - Math.pow(u, 2)) / (1 + Math.pow(o, 2))), e = Math.asin(i), n < 0 && (e = -e), o === 0 && u === 0 ? s = 0 : s = g(Math.atan2(o, u) + this.long0);
  }
  return t.x = s, t.y = e, t;
}
var We = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
const Dt = {
  init: ze,
  forward: Fe,
  inverse: Ue,
  names: We
};
function Ji(t) {
  var i = Math.exp(t);
  return i = (i - 1 / i) / 2, i;
}
function Xt(t, i) {
  t = Math.abs(t), i = Math.abs(i);
  var a = Math.max(t, i), e = Math.min(t, i) / (a || 1);
  return a * Math.sqrt(1 + Math.pow(e, 2));
}
function je(t) {
  var i = 1 + t, a = i - 1;
  return a === 0 ? t : t * Math.log(i) / a;
}
function Qe(t) {
  var i = Math.abs(t);
  return i = je(i * (1 + i / (Xt(1, i) + 1))), t < 0 ? -i : i;
}
function ni(t, i) {
  for (var a = 2 * Math.cos(2 * i), e = t.length - 1, s = t[e], r = 0, n; --e >= 0; )
    n = -r + a * s + t[e], r = s, s = n;
  return i + n * Math.sin(2 * i);
}
function He(t, i) {
  for (var a = 2 * Math.cos(i), e = t.length - 1, s = t[e], r = 0, n; --e >= 0; )
    n = -r + a * s + t[e], r = s, s = n;
  return Math.sin(i) * n;
}
function Xe(t) {
  var i = Math.exp(t);
  return i = (i + 1 / i) / 2, i;
}
function Zi(t, i, a) {
  for (var e = Math.sin(i), s = Math.cos(i), r = Ji(a), n = Xe(a), h = 2 * s * n, o = -2 * e * r, l = t.length - 1, u = t[l], f = 0, c = 0, v = 0, M, d; --l >= 0; )
    M = c, d = f, c = u, f = v, u = -M + h * c - o * f + t[l], v = -d + o * c + h * f;
  return h = e * n, o = s * r, [h * u - o * v, h * v + o * u];
}
function Ve() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0))
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  this.approx && (Dt.init.apply(this), this.forward = Dt.forward, this.inverse = Dt.inverse), this.x0 = this.x0 !== void 0 ? this.x0 : 0, this.y0 = this.y0 !== void 0 ? this.y0 : 0, this.long0 = this.long0 !== void 0 ? this.long0 : 0, this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0, this.cgb = [], this.cbg = [], this.utg = [], this.gtu = [];
  var t = this.es / (1 + Math.sqrt(1 - this.es)), i = t / (2 - t), a = i;
  this.cgb[0] = i * (2 + i * (-2 / 3 + i * (-2 + i * (116 / 45 + i * (26 / 45 + i * (-2854 / 675)))))), this.cbg[0] = i * (-2 + i * (2 / 3 + i * (4 / 3 + i * (-82 / 45 + i * (32 / 45 + i * (4642 / 4725)))))), a = a * i, this.cgb[1] = a * (7 / 3 + i * (-8 / 5 + i * (-227 / 45 + i * (2704 / 315 + i * (2323 / 945))))), this.cbg[1] = a * (5 / 3 + i * (-16 / 15 + i * (-13 / 9 + i * (904 / 315 + i * (-1522 / 945))))), a = a * i, this.cgb[2] = a * (56 / 15 + i * (-136 / 35 + i * (-1262 / 105 + i * (73814 / 2835)))), this.cbg[2] = a * (-26 / 15 + i * (34 / 21 + i * (8 / 5 + i * (-12686 / 2835)))), a = a * i, this.cgb[3] = a * (4279 / 630 + i * (-332 / 35 + i * (-399572 / 14175))), this.cbg[3] = a * (1237 / 630 + i * (-12 / 5 + i * (-24832 / 14175))), a = a * i, this.cgb[4] = a * (4174 / 315 + i * (-144838 / 6237)), this.cbg[4] = a * (-734 / 315 + i * (109598 / 31185)), a = a * i, this.cgb[5] = a * (601676 / 22275), this.cbg[5] = a * (444337 / 155925), a = Math.pow(i, 2), this.Qn = this.k0 / (1 + i) * (1 + a * (1 / 4 + a * (1 / 64 + a / 256))), this.utg[0] = i * (-0.5 + i * (2 / 3 + i * (-37 / 96 + i * (1 / 360 + i * (81 / 512 + i * (-96199 / 604800)))))), this.gtu[0] = i * (0.5 + i * (-2 / 3 + i * (5 / 16 + i * (41 / 180 + i * (-127 / 288 + i * (7891 / 37800)))))), this.utg[1] = a * (-1 / 48 + i * (-1 / 15 + i * (437 / 1440 + i * (-46 / 105 + i * (1118711 / 3870720))))), this.gtu[1] = a * (13 / 48 + i * (-3 / 5 + i * (557 / 1440 + i * (281 / 630 + i * (-1983433 / 1935360))))), a = a * i, this.utg[2] = a * (-17 / 480 + i * (37 / 840 + i * (209 / 4480 + i * (-5569 / 90720)))), this.gtu[2] = a * (61 / 240 + i * (-103 / 140 + i * (15061 / 26880 + i * (167603 / 181440)))), a = a * i, this.utg[3] = a * (-4397 / 161280 + i * (11 / 504 + i * (830251 / 7257600))), this.gtu[3] = a * (49561 / 161280 + i * (-179 / 168 + i * (6601661 / 7257600))), a = a * i, this.utg[4] = a * (-4583 / 161280 + i * (108847 / 3991680)), this.gtu[4] = a * (34729 / 80640 + i * (-3418889 / 1995840)), a = a * i, this.utg[5] = a * (-20648693 / 638668800), this.gtu[5] = a * (212378941 / 319334400);
  var e = ni(this.cbg, this.lat0);
  this.Zb = -this.Qn * (e + He(this.gtu, 2 * e));
}
function Ke(t) {
  var i = g(t.x - this.long0), a = t.y;
  a = ni(this.cbg, a);
  var e = Math.sin(a), s = Math.cos(a), r = Math.sin(i), n = Math.cos(i);
  a = Math.atan2(e, n * s), i = Math.atan2(r * s, Xt(e, s * n)), i = Qe(Math.tan(i));
  var h = Zi(this.gtu, 2 * a, 2 * i);
  a = a + h[0], i = i + h[1];
  var o, l;
  return Math.abs(i) <= 2.623395162778 ? (o = this.a * (this.Qn * i) + this.x0, l = this.a * (this.Qn * a + this.Zb) + this.y0) : (o = 1 / 0, l = 1 / 0), t.x = o, t.y = l, t;
}
function Je(t) {
  var i = (t.x - this.x0) * (1 / this.a), a = (t.y - this.y0) * (1 / this.a);
  a = (a - this.Zb) / this.Qn, i = i / this.Qn;
  var e, s;
  if (Math.abs(i) <= 2.623395162778) {
    var r = Zi(this.utg, 2 * a, 2 * i);
    a = a + r[0], i = i + r[1], i = Math.atan(Ji(i));
    var n = Math.sin(a), h = Math.cos(a), o = Math.sin(i), l = Math.cos(i);
    a = Math.atan2(n * l, Xt(o, l * h)), i = Math.atan2(o, l * h), e = g(i + this.long0), s = ni(this.cgb, a);
  } else
    e = 1 / 0, s = 1 / 0;
  return t.x = e, t.y = s, t;
}
var Ze = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "tmerc"];
const Bt = {
  init: Ve,
  forward: Ke,
  inverse: Je,
  names: Ze
};
function Ye(t, i) {
  if (t === void 0) {
    if (t = Math.floor((g(i) + Math.PI) * 30 / Math.PI) + 1, t < 0)
      return 0;
    if (t > 60)
      return 60;
  }
  return t;
}
var tr = "etmerc";
function ir() {
  var t = Ye(this.zone, this.long0);
  if (t === void 0)
    throw new Error("unknown utm zone");
  this.lat0 = 0, this.long0 = (6 * Math.abs(t) - 183) * D, this.x0 = 5e5, this.y0 = this.utmSouth ? 1e7 : 0, this.k0 = 0.9996, Bt.init.apply(this), this.forward = Bt.forward, this.inverse = Bt.inverse;
}
var ar = ["Universal Transverse Mercator System", "utm"];
const sr = {
  init: ir,
  names: ar,
  dependsOn: tr
};
function oi(t, i) {
  return Math.pow((1 - t) / (1 + t), i);
}
var er = 20;
function rr() {
  var t = Math.sin(this.lat0), i = Math.cos(this.lat0);
  i *= i, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * i * i / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + T) / (Math.pow(Math.tan(0.5 * this.lat0 + T), this.C) * oi(this.e * t, this.ratexp));
}
function hr(t) {
  var i = t.x, a = t.y;
  return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * a + T), this.C) * oi(this.e * Math.sin(a), this.ratexp)) - m, t.x = this.C * i, t;
}
function nr(t) {
  for (var i = 1e-14, a = t.x / this.C, e = t.y, s = Math.pow(Math.tan(0.5 * e + T) / this.K, 1 / this.C), r = er; r > 0 && (e = 2 * Math.atan(s * oi(this.e * Math.sin(t.y), -0.5 * this.e)) - m, !(Math.abs(e - t.y) < i)); --r)
    t.y = e;
  return r ? (t.x = a, t.y = e, t) : null;
}
var or = ["gauss"];
const li = {
  init: rr,
  forward: hr,
  inverse: nr,
  names: or
};
function lr() {
  li.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = "Oblique Stereographic Alternative"));
}
function fr(t) {
  var i, a, e, s;
  return t.x = g(t.x - this.long0), li.forward.apply(this, [t]), i = Math.sin(t.y), a = Math.cos(t.y), e = Math.cos(t.x), s = this.k0 * this.R2 / (1 + this.sinc0 * i + this.cosc0 * a * e), t.x = s * a * Math.sin(t.x), t.y = s * (this.cosc0 * i - this.sinc0 * a * e), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
}
function ur(t) {
  var i, a, e, s, r;
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, r = Math.sqrt(t.x * t.x + t.y * t.y)) {
    var n = 2 * Math.atan2(r, this.R2);
    i = Math.sin(n), a = Math.cos(n), s = Math.asin(a * this.sinc0 + t.y * i * this.cosc0 / r), e = Math.atan2(t.x * i, r * this.cosc0 * a - t.y * this.sinc0 * i);
  } else
    s = this.phic0, e = 0;
  return t.x = e, t.y = s, li.inverse.apply(this, [t]), t.x = g(t.x + this.long0), t;
}
var cr = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
const Mr = {
  init: lr,
  forward: fr,
  inverse: ur,
  names: cr
};
function vr(t, i, a) {
  return i *= a, Math.tan(0.5 * (m + t)) * Math.pow((1 - i) / (1 + i), 0.5 * a);
}
function dr() {
  this.coslat0 = Math.cos(this.lat0), this.sinlat0 = Math.sin(this.lat0), this.sphere ? this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _ && (this.k0 = 0.5 * (1 + Tt(this.lat0) * Math.sin(this.lat_ts))) : (Math.abs(this.coslat0) <= _ && (this.lat0 > 0 ? this.con = 1 : this.con = -1), this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e)), this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _ && (this.k0 = 0.5 * this.cons * Z(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / X(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts))), this.ms1 = Z(this.e, this.sinlat0, this.coslat0), this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - m, this.cosX0 = Math.cos(this.X0), this.sinX0 = Math.sin(this.X0));
}
function mr(t) {
  var i = t.x, a = t.y, e = Math.sin(a), s = Math.cos(a), r, n, h, o, l, u, f = g(i - this.long0);
  return Math.abs(Math.abs(i - this.long0) - Math.PI) <= _ && Math.abs(a + this.lat0) <= _ ? (t.x = NaN, t.y = NaN, t) : this.sphere ? (r = 2 * this.k0 / (1 + this.sinlat0 * e + this.coslat0 * s * Math.cos(f)), t.x = this.a * r * s * Math.sin(f) + this.x0, t.y = this.a * r * (this.coslat0 * e - this.sinlat0 * s * Math.cos(f)) + this.y0, t) : (n = 2 * Math.atan(this.ssfn_(a, e, this.e)) - m, o = Math.cos(n), h = Math.sin(n), Math.abs(this.coslat0) <= _ ? (l = X(this.e, a * this.con, this.con * e), u = 2 * this.a * this.k0 * l / this.cons, t.x = this.x0 + u * Math.sin(i - this.long0), t.y = this.y0 - this.con * u * Math.cos(i - this.long0), t) : (Math.abs(this.sinlat0) < _ ? (r = 2 * this.a * this.k0 / (1 + o * Math.cos(f)), t.y = r * h) : (r = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * h + this.cosX0 * o * Math.cos(f))), t.y = r * (this.cosX0 * h - this.sinX0 * o * Math.cos(f)) + this.y0), t.x = r * o * Math.sin(f) + this.x0, t));
}
function yr(t) {
  t.x -= this.x0, t.y -= this.y0;
  var i, a, e, s, r, n = Math.sqrt(t.x * t.x + t.y * t.y);
  if (this.sphere) {
    var h = 2 * Math.atan(n / (2 * this.a * this.k0));
    return i = this.long0, a = this.lat0, n <= _ ? (t.x = i, t.y = a, t) : (a = Math.asin(Math.cos(h) * this.sinlat0 + t.y * Math.sin(h) * this.coslat0 / n), Math.abs(this.coslat0) < _ ? this.lat0 > 0 ? i = g(this.long0 + Math.atan2(t.x, -1 * t.y)) : i = g(this.long0 + Math.atan2(t.x, t.y)) : i = g(this.long0 + Math.atan2(t.x * Math.sin(h), n * this.coslat0 * Math.cos(h) - t.y * this.sinlat0 * Math.sin(h))), t.x = i, t.y = a, t);
  } else if (Math.abs(this.coslat0) <= _) {
    if (n <= _)
      return a = this.lat0, i = this.long0, t.x = i, t.y = a, t;
    t.x *= this.con, t.y *= this.con, e = n * this.cons / (2 * this.a * this.k0), a = this.con * Pt(this.e, e), i = this.con * g(this.con * this.long0 + Math.atan2(t.x, -1 * t.y));
  } else
    s = 2 * Math.atan(n * this.cosX0 / (2 * this.a * this.k0 * this.ms1)), i = this.long0, n <= _ ? r = this.X0 : (r = Math.asin(Math.cos(s) * this.sinX0 + t.y * Math.sin(s) * this.cosX0 / n), i = g(this.long0 + Math.atan2(t.x * Math.sin(s), n * this.cosX0 * Math.cos(s) - t.y * this.sinX0 * Math.sin(s)))), a = -1 * Pt(this.e, Math.tan(0.5 * (m + r)));
  return t.x = i, t.y = a, t;
}
var _r = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];
const gr = {
  init: dr,
  forward: mr,
  inverse: yr,
  names: _r,
  ssfn_: vr
};
function xr() {
  var t = this.lat0;
  this.lambda0 = this.long0;
  var i = Math.sin(t), a = this.a, e = this.rf, s = 1 / e, r = 2 * s - Math.pow(s, 2), n = this.e = Math.sqrt(r);
  this.R = this.k0 * a * Math.sqrt(1 - r) / (1 - r * Math.pow(i, 2)), this.alpha = Math.sqrt(1 + r / (1 - r) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(i / this.alpha);
  var h = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), o = Math.log(Math.tan(Math.PI / 4 + t / 2)), l = Math.log((1 + n * i) / (1 - n * i));
  this.K = h - this.alpha * o + this.alpha * n / 2 * l;
}
function br(t) {
  var i = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), a = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), e = -this.alpha * (i + a) + this.K, s = 2 * (Math.atan(Math.exp(e)) - Math.PI / 4), r = this.alpha * (t.x - this.lambda0), n = Math.atan(Math.sin(r) / (Math.sin(this.b0) * Math.tan(s) + Math.cos(this.b0) * Math.cos(r))), h = Math.asin(Math.cos(this.b0) * Math.sin(s) - Math.sin(this.b0) * Math.cos(s) * Math.cos(r));
  return t.y = this.R / 2 * Math.log((1 + Math.sin(h)) / (1 - Math.sin(h))) + this.y0, t.x = this.R * n + this.x0, t;
}
function Sr(t) {
  for (var i = t.x - this.x0, a = t.y - this.y0, e = i / this.R, s = 2 * (Math.atan(Math.exp(a / this.R)) - Math.PI / 4), r = Math.asin(Math.cos(this.b0) * Math.sin(s) + Math.sin(this.b0) * Math.cos(s) * Math.cos(e)), n = Math.atan(Math.sin(e) / (Math.cos(this.b0) * Math.cos(e) - Math.sin(this.b0) * Math.tan(s))), h = this.lambda0 + n / this.alpha, o = 0, l = r, u = -1e3, f = 0; Math.abs(l - u) > 1e-7; ) {
    if (++f > 20)
      return;
    o = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + r / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(l)) / 2)), u = l, l = 2 * Math.atan(Math.exp(o)) - Math.PI / 2;
  }
  return t.x = h, t.y = l, t;
}
var Er = ["somerc"];
const Ar = {
  init: xr,
  forward: br,
  inverse: Sr,
  names: Er
};
var ft = 1e-7;
function Cr(t) {
  var i = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"], a = typeof t.PROJECTION == "object" ? Object.keys(t.PROJECTION)[0] : t.PROJECTION;
  return "no_uoff" in t || "no_off" in t || i.indexOf(a) !== -1;
}
function Nr() {
  var t, i, a, e, s, r, n, h, o, l, u = 0, f, c = 0, v = 0, M = 0, d = 0, y = 0, x = 0;
  this.no_off = Cr(this), this.no_rot = "no_rot" in this;
  var S = !1;
  "alpha" in this && (S = !0);
  var A = !1;
  if ("rectified_grid_angle" in this && (A = !0), S && (x = this.alpha), A && (u = this.rectified_grid_angle * D), S || A)
    c = this.longc;
  else if (v = this.long1, d = this.lat1, M = this.long2, y = this.lat2, Math.abs(d - y) <= ft || (t = Math.abs(d)) <= ft || Math.abs(t - m) <= ft || Math.abs(Math.abs(this.lat0) - m) <= ft || Math.abs(Math.abs(y) - m) <= ft)
    throw new Error();
  var R = 1 - this.es;
  i = Math.sqrt(R), Math.abs(this.lat0) > _ ? (h = Math.sin(this.lat0), a = Math.cos(this.lat0), t = 1 - this.es * h * h, this.B = a * a, this.B = Math.sqrt(1 + this.es * this.B * this.B / R), this.A = this.B * this.k0 * i / t, e = this.B * i / (a * Math.sqrt(t)), s = e * e - 1, s <= 0 ? s = 0 : (s = Math.sqrt(s), this.lat0 < 0 && (s = -s)), this.E = s += e, this.E *= Math.pow(X(this.e, this.lat0, h), this.B)) : (this.B = 1 / i, this.A = this.k0, this.E = e = s = 1), S || A ? (S ? (f = Math.asin(Math.sin(x) / e), A || (u = x)) : (f = u, x = Math.asin(e * Math.sin(f))), this.lam0 = c - Math.asin(0.5 * (s - 1 / s) * Math.tan(f)) / this.B) : (r = Math.pow(X(this.e, d, Math.sin(d)), this.B), n = Math.pow(X(this.e, y, Math.sin(y)), this.B), s = this.E / r, o = (n - r) / (n + r), l = this.E * this.E, l = (l - n * r) / (l + n * r), t = v - M, t < -Math.pi ? M -= Ct : t > Math.pi && (M += Ct), this.lam0 = g(0.5 * (v + M) - Math.atan(l * Math.tan(0.5 * this.B * (v - M)) / o) / this.B), f = Math.atan(2 * Math.sin(this.B * g(v - this.lam0)) / (s - 1 / s)), u = x = Math.asin(e * Math.sin(f))), this.singam = Math.sin(f), this.cosgam = Math.cos(f), this.sinrot = Math.sin(u), this.cosrot = Math.cos(u), this.rB = 1 / this.B, this.ArB = this.A * this.rB, this.BrA = 1 / this.ArB, this.A * this.B, this.no_off ? this.u_0 = 0 : (this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(e * e - 1) / Math.cos(x))), this.lat0 < 0 && (this.u_0 = -this.u_0)), s = 0.5 * f, this.v_pole_n = this.ArB * Math.log(Math.tan(T - s)), this.v_pole_s = this.ArB * Math.log(Math.tan(T + s));
}
function Pr(t) {
  var i = {}, a, e, s, r, n, h, o, l;
  if (t.x = t.x - this.lam0, Math.abs(Math.abs(t.y) - m) > _) {
    if (n = this.E / Math.pow(X(this.e, t.y, Math.sin(t.y)), this.B), h = 1 / n, a = 0.5 * (n - h), e = 0.5 * (n + h), r = Math.sin(this.B * t.x), s = (a * this.singam - r * this.cosgam) / e, Math.abs(Math.abs(s) - 1) < _)
      throw new Error();
    l = 0.5 * this.ArB * Math.log((1 - s) / (1 + s)), h = Math.cos(this.B * t.x), Math.abs(h) < ft ? o = this.A * t.x : o = this.ArB * Math.atan2(a * this.cosgam + r * this.singam, h);
  } else
    l = t.y > 0 ? this.v_pole_n : this.v_pole_s, o = this.ArB * t.y;
  return this.no_rot ? (i.x = o, i.y = l) : (o -= this.u_0, i.x = l * this.cosrot + o * this.sinrot, i.y = o * this.cosrot - l * this.sinrot), i.x = this.a * i.x + this.x0, i.y = this.a * i.y + this.y0, i;
}
function Tr(t) {
  var i, a, e, s, r, n, h, o = {};
  if (t.x = (t.x - this.x0) * (1 / this.a), t.y = (t.y - this.y0) * (1 / this.a), this.no_rot ? (a = t.y, i = t.x) : (a = t.x * this.cosrot - t.y * this.sinrot, i = t.y * this.cosrot + t.x * this.sinrot + this.u_0), e = Math.exp(-this.BrA * a), s = 0.5 * (e - 1 / e), r = 0.5 * (e + 1 / e), n = Math.sin(this.BrA * i), h = (n * this.cosgam + s * this.singam) / r, Math.abs(Math.abs(h) - 1) < _)
    o.x = 0, o.y = h < 0 ? -m : m;
  else {
    if (o.y = this.E / Math.sqrt((1 + h) / (1 - h)), o.y = Pt(this.e, Math.pow(o.y, 1 / this.B)), o.y === 1 / 0)
      throw new Error();
    o.x = -this.rB * Math.atan2(s * this.cosgam - n * this.singam, Math.cos(this.BrA * i));
  }
  return o.x += this.lam0, o;
}
var Ir = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
const wr = {
  init: Nr,
  forward: Pr,
  inverse: Tr,
  names: Ir
};
function Rr() {
  if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, !(Math.abs(this.lat1 + this.lat2) < _)) {
    var t = this.b / this.a;
    this.e = Math.sqrt(1 - t * t);
    var i = Math.sin(this.lat1), a = Math.cos(this.lat1), e = Z(this.e, i, a), s = X(this.e, this.lat1, i), r = Math.sin(this.lat2), n = Math.cos(this.lat2), h = Z(this.e, r, n), o = X(this.e, this.lat2, r), l = X(this.e, this.lat0, Math.sin(this.lat0));
    Math.abs(this.lat1 - this.lat2) > _ ? this.ns = Math.log(e / h) / Math.log(s / o) : this.ns = i, isNaN(this.ns) && (this.ns = i), this.f0 = e / (this.ns * Math.pow(s, this.ns)), this.rh = this.a * this.f0 * Math.pow(l, this.ns), this.title || (this.title = "Lambert Conformal Conic");
  }
}
function pr(t) {
  var i = t.x, a = t.y;
  Math.abs(2 * Math.abs(a) - Math.PI) <= _ && (a = Tt(a) * (m - 2 * _));
  var e = Math.abs(Math.abs(a) - m), s, r;
  if (e > _)
    s = X(this.e, a, Math.sin(a)), r = this.a * this.f0 * Math.pow(s, this.ns);
  else {
    if (e = a * this.ns, e <= 0)
      return null;
    r = 0;
  }
  var n = this.ns * g(i - this.long0);
  return t.x = this.k0 * (r * Math.sin(n)) + this.x0, t.y = this.k0 * (this.rh - r * Math.cos(n)) + this.y0, t;
}
function Or(t) {
  var i, a, e, s, r, n = (t.x - this.x0) / this.k0, h = this.rh - (t.y - this.y0) / this.k0;
  this.ns > 0 ? (i = Math.sqrt(n * n + h * h), a = 1) : (i = -Math.sqrt(n * n + h * h), a = -1);
  var o = 0;
  if (i !== 0 && (o = Math.atan2(a * n, a * h)), i !== 0 || this.ns > 0) {
    if (a = 1 / this.ns, e = Math.pow(i / (this.a * this.f0), a), s = Pt(this.e, e), s === -9999)
      return null;
  } else
    s = -m;
  return r = g(o / this.ns + this.long0), t.x = r, t.y = s, t;
}
var Lr = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc"
];
const qr = {
  init: Rr,
  forward: pr,
  inverse: Or,
  names: Lr
};
function Gr() {
  this.a = 6377397155e-3, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.7417649320975901 - 0.308341501185665), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
}
function $r(t) {
  var i, a, e, s, r, n, h, o = t.x, l = t.y, u = g(o - this.long0);
  return i = Math.pow((1 + this.e * Math.sin(l)) / (1 - this.e * Math.sin(l)), this.alfa * this.e / 2), a = 2 * (Math.atan(this.k * Math.pow(Math.tan(l / 2 + this.s45), this.alfa) / i) - this.s45), e = -u * this.alfa, s = Math.asin(Math.cos(this.ad) * Math.sin(a) + Math.sin(this.ad) * Math.cos(a) * Math.cos(e)), r = Math.asin(Math.cos(a) * Math.sin(e) / Math.cos(s)), n = this.n * r, h = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n), t.y = h * Math.cos(n) / 1, t.x = h * Math.sin(n) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
}
function Dr(t) {
  var i, a, e, s, r, n, h, o, l = t.x;
  t.x = t.y, t.y = l, this.czech || (t.y *= -1, t.x *= -1), n = Math.sqrt(t.x * t.x + t.y * t.y), r = Math.atan2(t.y, t.x), s = r / Math.sin(this.s0), e = 2 * (Math.atan(Math.pow(this.ro0 / n, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), i = Math.asin(Math.cos(this.ad) * Math.sin(e) - Math.sin(this.ad) * Math.cos(e) * Math.cos(s)), a = Math.asin(Math.cos(e) * Math.sin(s) / Math.cos(i)), t.x = this.long0 - a / this.alfa, h = i, o = 0;
  var u = 0;
  do
    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(i / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(h)) / (1 - this.e * Math.sin(h)), this.e / 2)) - this.s45), Math.abs(h - t.y) < 1e-10 && (o = 1), h = t.y, u += 1;
  while (o === 0 && u < 15);
  return u >= 15 ? null : t;
}
var Br = ["Krovak", "krovak"];
const kr = {
  init: Gr,
  forward: $r,
  inverse: Dr,
  names: Br
};
function F(t, i, a, e, s) {
  return t * s - i * Math.sin(2 * s) + a * Math.sin(4 * s) - e * Math.sin(6 * s);
}
function It(t) {
  return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
}
function wt(t) {
  return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
}
function Rt(t) {
  return 0.05859375 * t * t * (1 + 0.75 * t);
}
function pt(t) {
  return t * t * t * (35 / 3072);
}
function yt(t, i, a) {
  var e = i * a;
  return t / Math.sqrt(1 - e * e);
}
function gt(t) {
  return Math.abs(t) < m ? t : t - Tt(t) * Math.PI;
}
function Wt(t, i, a, e, s) {
  var r, n;
  r = t / i;
  for (var h = 0; h < 15; h++)
    if (n = (t - (i * r - a * Math.sin(2 * r) + e * Math.sin(4 * r) - s * Math.sin(6 * r))) / (i - 2 * a * Math.cos(2 * r) + 4 * e * Math.cos(4 * r) - 6 * s * Math.cos(6 * r)), r += n, Math.abs(n) <= 1e-10)
      return r;
  return NaN;
}
function zr() {
  this.sphere || (this.e0 = It(this.es), this.e1 = wt(this.es), this.e2 = Rt(this.es), this.e3 = pt(this.es), this.ml0 = this.a * F(this.e0, this.e1, this.e2, this.e3, this.lat0));
}
function Fr(t) {
  var i, a, e = t.x, s = t.y;
  if (e = g(e - this.long0), this.sphere)
    i = this.a * Math.asin(Math.cos(s) * Math.sin(e)), a = this.a * (Math.atan2(Math.tan(s), Math.cos(e)) - this.lat0);
  else {
    var r = Math.sin(s), n = Math.cos(s), h = yt(this.a, this.e, r), o = Math.tan(s) * Math.tan(s), l = e * Math.cos(s), u = l * l, f = this.es * n * n / (1 - this.es), c = this.a * F(this.e0, this.e1, this.e2, this.e3, s);
    i = h * l * (1 - u * o * (1 / 6 - (8 - o + 8 * f) * u / 120)), a = c - this.ml0 + h * r / n * u * (0.5 + (5 - o + 6 * f) * u / 24);
  }
  return t.x = i + this.x0, t.y = a + this.y0, t;
}
function Ur(t) {
  t.x -= this.x0, t.y -= this.y0;
  var i = t.x / this.a, a = t.y / this.a, e, s;
  if (this.sphere) {
    var r = a + this.lat0;
    e = Math.asin(Math.sin(r) * Math.cos(i)), s = Math.atan2(Math.tan(i), Math.cos(r));
  } else {
    var n = this.ml0 / this.a + a, h = Wt(n, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(h) - m) <= _)
      return t.x = this.long0, t.y = m, a < 0 && (t.y *= -1), t;
    var o = yt(this.a, this.e, Math.sin(h)), l = o * o * o / this.a / this.a * (1 - this.es), u = Math.pow(Math.tan(h), 2), f = i * this.a / o, c = f * f;
    e = h - o * Math.tan(h) / l * f * f * (0.5 - (1 + 3 * u) * f * f / 24), s = f * (1 - c * (u / 3 + (1 + 3 * u) * u * c / 15)) / Math.cos(h);
  }
  return t.x = g(s + this.long0), t.y = gt(e), t;
}
var Wr = ["Cassini", "Cassini_Soldner", "cass"];
const jr = {
  init: zr,
  forward: Fr,
  inverse: Ur,
  names: Wr
};
function st(t, i) {
  var a;
  return t > 1e-7 ? (a = t * i, (1 - t * t) * (i / (1 - a * a) - 0.5 / t * Math.log((1 - a) / (1 + a)))) : 2 * i;
}
var Qr = 1, Hr = 2, Xr = 3, Vr = 4;
function Kr() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - m) < _ ? this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < _ ? this.mode = this.EQUIT : this.mode = this.OBLIQ, this.es > 0) {
    var i;
    switch (this.qp = st(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = rh(this.es), this.mode) {
      case this.N_POLE:
        this.dd = 1;
        break;
      case this.S_POLE:
        this.dd = 1;
        break;
      case this.EQUIT:
        this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
        break;
      case this.OBLIQ:
        this.rq = Math.sqrt(0.5 * this.qp), i = Math.sin(this.lat0), this.sinb1 = st(this.e, i) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * i * i) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
        break;
    }
  } else
    this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
}
function Jr(t) {
  var i, a, e, s, r, n, h, o, l, u, f = t.x, c = t.y;
  if (f = g(f - this.long0), this.sphere) {
    if (r = Math.sin(c), u = Math.cos(c), e = Math.cos(f), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (a = this.mode === this.EQUIT ? 1 + u * e : 1 + this.sinph0 * r + this.cosph0 * u * e, a <= _)
        return null;
      a = Math.sqrt(2 / a), i = a * u * Math.sin(f), a *= this.mode === this.EQUIT ? r : this.cosph0 * r - this.sinph0 * u * e;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (e = -e), Math.abs(c + this.lat0) < _)
        return null;
      a = T - c * 0.5, a = 2 * (this.mode === this.S_POLE ? Math.cos(a) : Math.sin(a)), i = a * Math.sin(f), a *= e;
    }
  } else {
    switch (h = 0, o = 0, l = 0, e = Math.cos(f), s = Math.sin(f), r = Math.sin(c), n = st(this.e, r), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (h = n / this.qp, o = Math.sqrt(1 - h * h)), this.mode) {
      case this.OBLIQ:
        l = 1 + this.sinb1 * h + this.cosb1 * o * e;
        break;
      case this.EQUIT:
        l = 1 + o * e;
        break;
      case this.N_POLE:
        l = m + c, n = this.qp - n;
        break;
      case this.S_POLE:
        l = c - m, n = this.qp + n;
        break;
    }
    if (Math.abs(l) < _)
      return null;
    switch (this.mode) {
      case this.OBLIQ:
      case this.EQUIT:
        l = Math.sqrt(2 / l), this.mode === this.OBLIQ ? a = this.ymf * l * (this.cosb1 * h - this.sinb1 * o * e) : a = (l = Math.sqrt(2 / (1 + o * e))) * h * this.ymf, i = this.xmf * l * o * s;
        break;
      case this.N_POLE:
      case this.S_POLE:
        n >= 0 ? (i = (l = Math.sqrt(n)) * s, a = e * (this.mode === this.S_POLE ? l : -l)) : i = a = 0;
        break;
    }
  }
  return t.x = this.a * i + this.x0, t.y = this.a * a + this.y0, t;
}
function Zr(t) {
  t.x -= this.x0, t.y -= this.y0;
  var i = t.x / this.a, a = t.y / this.a, e, s, r, n, h, o, l;
  if (this.sphere) {
    var u = 0, f, c = 0;
    if (f = Math.sqrt(i * i + a * a), s = f * 0.5, s > 1)
      return null;
    switch (s = 2 * Math.asin(s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (c = Math.sin(s), u = Math.cos(s)), this.mode) {
      case this.EQUIT:
        s = Math.abs(f) <= _ ? 0 : Math.asin(a * c / f), i *= c, a = u * f;
        break;
      case this.OBLIQ:
        s = Math.abs(f) <= _ ? this.lat0 : Math.asin(u * this.sinph0 + a * c * this.cosph0 / f), i *= c * this.cosph0, a = (u - Math.sin(s) * this.sinph0) * f;
        break;
      case this.N_POLE:
        a = -a, s = m - s;
        break;
      case this.S_POLE:
        s -= m;
        break;
    }
    e = a === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(i, a);
  } else {
    if (l = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      if (i /= this.dd, a *= this.dd, o = Math.sqrt(i * i + a * a), o < _)
        return t.x = this.long0, t.y = this.lat0, t;
      n = 2 * Math.asin(0.5 * o / this.rq), r = Math.cos(n), i *= n = Math.sin(n), this.mode === this.OBLIQ ? (l = r * this.sinb1 + a * n * this.cosb1 / o, h = this.qp * l, a = o * this.cosb1 * r - a * this.sinb1 * n) : (l = a * n / o, h = this.qp * l, a = o * r);
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE && (a = -a), h = i * i + a * a, !h)
        return t.x = this.long0, t.y = this.lat0, t;
      l = 1 - h / this.qp, this.mode === this.S_POLE && (l = -l);
    }
    e = Math.atan2(i, a), s = hh(Math.asin(l), this.apa);
  }
  return t.x = g(this.long0 + e), t.y = s, t;
}
var Yr = 0.3333333333333333, th = 0.17222222222222222, ih = 0.10257936507936508, ah = 0.06388888888888888, sh = 0.0664021164021164, eh = 0.016415012942191543;
function rh(t) {
  var i, a = [];
  return a[0] = t * Yr, i = t * t, a[0] += i * th, a[1] = i * ah, i *= t, a[0] += i * ih, a[1] += i * sh, a[2] = i * eh, a;
}
function hh(t, i) {
  var a = t + t;
  return t + i[0] * Math.sin(a) + i[1] * Math.sin(a + a) + i[2] * Math.sin(a + a + a);
}
var nh = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
const oh = {
  init: Kr,
  forward: Jr,
  inverse: Zr,
  names: nh,
  S_POLE: Qr,
  N_POLE: Hr,
  EQUIT: Xr,
  OBLIQ: Vr
};
function rt(t) {
  return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
}
function lh() {
  Math.abs(this.lat1 + this.lat2) < _ || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = Z(this.e3, this.sin_po, this.cos_po), this.qs1 = st(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = Z(this.e3, this.sin_po, this.cos_po), this.qs2 = st(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = st(this.e3, this.sin_po, this.cos_po), Math.abs(this.lat1 - this.lat2) > _ ? this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.ns0 = this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
}
function fh(t) {
  var i = t.x, a = t.y;
  this.sin_phi = Math.sin(a), this.cos_phi = Math.cos(a);
  var e = st(this.e3, this.sin_phi, this.cos_phi), s = this.a * Math.sqrt(this.c - this.ns0 * e) / this.ns0, r = this.ns0 * g(i - this.long0), n = s * Math.sin(r) + this.x0, h = this.rh - s * Math.cos(r) + this.y0;
  return t.x = n, t.y = h, t;
}
function uh(t) {
  var i, a, e, s, r, n;
  return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (i = Math.sqrt(t.x * t.x + t.y * t.y), e = 1) : (i = -Math.sqrt(t.x * t.x + t.y * t.y), e = -1), s = 0, i !== 0 && (s = Math.atan2(e * t.x, e * t.y)), e = i * this.ns0 / this.a, this.sphere ? n = Math.asin((this.c - e * e) / (2 * this.ns0)) : (a = (this.c - e * e) / this.ns0, n = this.phi1z(this.e3, a)), r = g(s / this.ns0 + this.long0), t.x = r, t.y = n, t;
}
function ch(t, i) {
  var a, e, s, r, n, h = rt(0.5 * i);
  if (t < _)
    return h;
  for (var o = t * t, l = 1; l <= 25; l++)
    if (a = Math.sin(h), e = Math.cos(h), s = t * a, r = 1 - s * s, n = 0.5 * r * r / e * (i / (1 - o) - a / r + 0.5 / t * Math.log((1 - s) / (1 + s))), h = h + n, Math.abs(n) <= 1e-7)
      return h;
  return null;
}
var Mh = ["Albers_Conic_Equal_Area", "Albers", "aea"];
const vh = {
  init: lh,
  forward: fh,
  inverse: uh,
  names: Mh,
  phi1z: ch
};
function dh() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1e3 * this.a, this.rc = 1;
}
function mh(t) {
  var i, a, e, s, r, n, h, o, l = t.x, u = t.y;
  return e = g(l - this.long0), i = Math.sin(u), a = Math.cos(u), s = Math.cos(e), n = this.sin_p14 * i + this.cos_p14 * a * s, r = 1, n > 0 || Math.abs(n) <= _ ? (h = this.x0 + this.a * r * a * Math.sin(e) / n, o = this.y0 + this.a * r * (this.cos_p14 * i - this.sin_p14 * a * s) / n) : (h = this.x0 + this.infinity_dist * a * Math.sin(e), o = this.y0 + this.infinity_dist * (this.cos_p14 * i - this.sin_p14 * a * s)), t.x = h, t.y = o, t;
}
function yh(t) {
  var i, a, e, s, r, n;
  return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (i = Math.sqrt(t.x * t.x + t.y * t.y)) ? (s = Math.atan2(i, this.rc), a = Math.sin(s), e = Math.cos(s), n = rt(e * this.sin_p14 + t.y * a * this.cos_p14 / i), r = Math.atan2(t.x * a, i * this.cos_p14 * e - t.y * this.sin_p14 * a), r = g(this.long0 + r)) : (n = this.phic0, r = 0), t.x = r, t.y = n, t;
}
var _h = ["gnom"];
const gh = {
  init: dh,
  forward: mh,
  inverse: yh,
  names: _h
};
function xh(t, i) {
  var a = 1 - (1 - t * t) / (2 * t) * Math.log((1 - t) / (1 + t));
  if (Math.abs(Math.abs(i) - a) < 1e-6)
    return i < 0 ? -1 * m : m;
  for (var e = Math.asin(0.5 * i), s, r, n, h, o = 0; o < 30; o++)
    if (r = Math.sin(e), n = Math.cos(e), h = t * r, s = Math.pow(1 - h * h, 2) / (2 * n) * (i / (1 - t * t) - r / (1 - h * h) + 0.5 / t * Math.log((1 - h) / (1 + h))), e += s, Math.abs(s) <= 1e-10)
      return e;
  return NaN;
}
function bh() {
  this.sphere || (this.k0 = Z(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
}
function Sh(t) {
  var i = t.x, a = t.y, e, s, r = g(i - this.long0);
  if (this.sphere)
    e = this.x0 + this.a * r * Math.cos(this.lat_ts), s = this.y0 + this.a * Math.sin(a) / Math.cos(this.lat_ts);
  else {
    var n = st(this.e, Math.sin(a));
    e = this.x0 + this.a * this.k0 * r, s = this.y0 + this.a * n * 0.5 / this.k0;
  }
  return t.x = e, t.y = s, t;
}
function Eh(t) {
  t.x -= this.x0, t.y -= this.y0;
  var i, a;
  return this.sphere ? (i = g(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), a = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (a = xh(this.e, 2 * t.y * this.k0 / this.a), i = g(this.long0 + t.x / (this.a * this.k0))), t.x = i, t.y = a, t;
}
var Ah = ["cea"];
const Ch = {
  init: bh,
  forward: Sh,
  inverse: Eh,
  names: Ah
};
function Nh() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Equidistant Cylindrical (Plate Carre)", this.rc = Math.cos(this.lat_ts);
}
function Ph(t) {
  var i = t.x, a = t.y, e = g(i - this.long0), s = gt(a - this.lat0);
  return t.x = this.x0 + this.a * e * this.rc, t.y = this.y0 + this.a * s, t;
}
function Th(t) {
  var i = t.x, a = t.y;
  return t.x = g(this.long0 + (i - this.x0) / (this.a * this.rc)), t.y = gt(this.lat0 + (a - this.y0) / this.a), t;
}
var Ih = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
const wh = {
  init: Nh,
  forward: Ph,
  inverse: Th,
  names: Ih
};
var Pi = 20;
function Rh() {
  this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = It(this.es), this.e1 = wt(this.es), this.e2 = Rt(this.es), this.e3 = pt(this.es), this.ml0 = this.a * F(this.e0, this.e1, this.e2, this.e3, this.lat0);
}
function ph(t) {
  var i = t.x, a = t.y, e, s, r, n = g(i - this.long0);
  if (r = n * Math.sin(a), this.sphere)
    Math.abs(a) <= _ ? (e = this.a * n, s = -1 * this.a * this.lat0) : (e = this.a * Math.sin(r) / Math.tan(a), s = this.a * (gt(a - this.lat0) + (1 - Math.cos(r)) / Math.tan(a)));
  else if (Math.abs(a) <= _)
    e = this.a * n, s = -1 * this.ml0;
  else {
    var h = yt(this.a, this.e, Math.sin(a)) / Math.tan(a);
    e = h * Math.sin(r), s = this.a * F(this.e0, this.e1, this.e2, this.e3, a) - this.ml0 + h * (1 - Math.cos(r));
  }
  return t.x = e + this.x0, t.y = s + this.y0, t;
}
function Oh(t) {
  var i, a, e, s, r, n, h, o, l;
  if (e = t.x - this.x0, s = t.y - this.y0, this.sphere)
    if (Math.abs(s + this.a * this.lat0) <= _)
      i = g(e / this.a + this.long0), a = 0;
    else {
      n = this.lat0 + s / this.a, h = e * e / this.a / this.a + n * n, o = n;
      var u;
      for (r = Pi; r; --r)
        if (u = Math.tan(o), l = -1 * (n * (o * u + 1) - o - 0.5 * (o * o + h) * u) / ((o - n) / u - 1), o += l, Math.abs(l) <= _) {
          a = o;
          break;
        }
      i = g(this.long0 + Math.asin(e * Math.tan(o) / this.a) / Math.sin(a));
    }
  else if (Math.abs(s + this.ml0) <= _)
    a = 0, i = g(this.long0 + e / this.a);
  else {
    n = (this.ml0 + s) / this.a, h = e * e / this.a / this.a + n * n, o = n;
    var f, c, v, M, d;
    for (r = Pi; r; --r)
      if (d = this.e * Math.sin(o), f = Math.sqrt(1 - d * d) * Math.tan(o), c = this.a * F(this.e0, this.e1, this.e2, this.e3, o), v = this.e0 - 2 * this.e1 * Math.cos(2 * o) + 4 * this.e2 * Math.cos(4 * o) - 6 * this.e3 * Math.cos(6 * o), M = c / this.a, l = (n * (f * M + 1) - M - 0.5 * f * (M * M + h)) / (this.es * Math.sin(2 * o) * (M * M + h - 2 * n * M) / (4 * f) + (n - M) * (f * v - 2 / Math.sin(2 * o)) - v), o -= l, Math.abs(l) <= _) {
        a = o;
        break;
      }
    f = Math.sqrt(1 - this.es * Math.pow(Math.sin(a), 2)) * Math.tan(a), i = g(this.long0 + Math.asin(e * f / this.a) / Math.sin(a));
  }
  return t.x = i, t.y = a, t;
}
var Lh = ["Polyconic", "poly"];
const qh = {
  init: Rh,
  forward: ph,
  inverse: Oh,
  names: Lh
};
function Gh() {
  this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -55161e-7, this.A[7] = 26906e-7, this.A[8] = -1333e-6, this.A[9] = 67e-5, this.A[10] = -34e-5, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 3371507e-9, this.B_re[3] = -1541739e-9, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -7809598e-9, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 7317e-6, this.D[7] = 0.0122, this.D[8] = 394e-5, this.D[9] = -13e-4;
}
function $h(t) {
  var i, a = t.x, e = t.y, s = e - this.lat0, r = a - this.long0, n = s / At * 1e-5, h = r, o = 1, l = 0;
  for (i = 1; i <= 10; i++)
    o = o * n, l = l + this.A[i] * o;
  var u = l, f = h, c = 1, v = 0, M, d, y = 0, x = 0;
  for (i = 1; i <= 6; i++)
    M = c * u - v * f, d = v * u + c * f, c = M, v = d, y = y + this.B_re[i] * c - this.B_im[i] * v, x = x + this.B_im[i] * c + this.B_re[i] * v;
  return t.x = x * this.a + this.x0, t.y = y * this.a + this.y0, t;
}
function Dh(t) {
  var i, a = t.x, e = t.y, s = a - this.x0, r = e - this.y0, n = r / this.a, h = s / this.a, o = 1, l = 0, u, f, c = 0, v = 0;
  for (i = 1; i <= 6; i++)
    u = o * n - l * h, f = l * n + o * h, o = u, l = f, c = c + this.C_re[i] * o - this.C_im[i] * l, v = v + this.C_im[i] * o + this.C_re[i] * l;
  for (var M = 0; M < this.iterations; M++) {
    var d = c, y = v, x, S, A = n, R = h;
    for (i = 2; i <= 6; i++)
      x = d * c - y * v, S = y * c + d * v, d = x, y = S, A = A + (i - 1) * (this.B_re[i] * d - this.B_im[i] * y), R = R + (i - 1) * (this.B_im[i] * d + this.B_re[i] * y);
    d = 1, y = 0;
    var N = this.B_re[1], P = this.B_im[1];
    for (i = 2; i <= 6; i++)
      x = d * c - y * v, S = y * c + d * v, d = x, y = S, N = N + i * (this.B_re[i] * d - this.B_im[i] * y), P = P + i * (this.B_im[i] * d + this.B_re[i] * y);
    var B = N * N + P * P;
    c = (A * N + R * P) / B, v = (R * N - A * P) / B;
  }
  var L = c, V = v, ht = 1, nt = 0;
  for (i = 1; i <= 9; i++)
    ht = ht * L, nt = nt + this.D[i] * ht;
  var Ot = this.lat0 + nt * At * 1e5, ra = this.long0 + V;
  return t.x = ra, t.y = Ot, t;
}
var Bh = ["New_Zealand_Map_Grid", "nzmg"];
const kh = {
  init: Gh,
  forward: $h,
  inverse: Dh,
  names: Bh
};
function zh() {
}
function Fh(t) {
  var i = t.x, a = t.y, e = g(i - this.long0), s = this.x0 + this.a * e, r = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + a / 2.5)) * 1.25;
  return t.x = s, t.y = r, t;
}
function Uh(t) {
  t.x -= this.x0, t.y -= this.y0;
  var i = g(this.long0 + t.x / this.a), a = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - Math.PI / 4);
  return t.x = i, t.y = a, t;
}
var Wh = ["Miller_Cylindrical", "mill"];
const jh = {
  init: zh,
  forward: Fh,
  inverse: Uh,
  names: Wh
};
var Qh = 20;
function Hh() {
  this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = Vi(this.es);
}
function Xh(t) {
  var i, a, e = t.x, s = t.y;
  if (e = g(e - this.long0), this.sphere) {
    if (!this.m)
      s = this.n !== 1 ? Math.asin(this.n * Math.sin(s)) : s;
    else
      for (var r = this.n * Math.sin(s), n = Qh; n; --n) {
        var h = (this.m * s + Math.sin(s) - r) / (this.m + Math.cos(s));
        if (s -= h, Math.abs(h) < _)
          break;
      }
    i = this.a * this.C_x * e * (this.m + Math.cos(s)), a = this.a * this.C_y * s;
  } else {
    var o = Math.sin(s), l = Math.cos(s);
    a = this.a * Ht(s, o, l, this.en), i = this.a * e * l / Math.sqrt(1 - this.es * o * o);
  }
  return t.x = i, t.y = a, t;
}
function Vh(t) {
  var i, a, e, s;
  return t.x -= this.x0, e = t.x / this.a, t.y -= this.y0, i = t.y / this.a, this.sphere ? (i /= this.C_y, e = e / (this.C_x * (this.m + Math.cos(i))), this.m ? i = rt((this.m * i + Math.sin(i)) / this.n) : this.n !== 1 && (i = rt(Math.sin(i) / this.n)), e = g(e + this.long0), i = gt(i)) : (i = Ki(t.y / this.a, this.es, this.en), s = Math.abs(i), s < m ? (s = Math.sin(i), a = this.long0 + t.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(i)), e = g(a)) : s - _ < m && (e = this.long0)), t.x = e, t.y = i, t;
}
var Kh = ["Sinusoidal", "sinu"];
const Jh = {
  init: Hh,
  forward: Xh,
  inverse: Vh,
  names: Kh
};
function Zh() {
}
function Yh(t) {
  for (var i = t.x, a = t.y, e = g(i - this.long0), s = a, r = Math.PI * Math.sin(a); ; ) {
    var n = -(s + Math.sin(s) - r) / (1 + Math.cos(s));
    if (s += n, Math.abs(n) < _)
      break;
  }
  s /= 2, Math.PI / 2 - Math.abs(a) < _ && (e = 0);
  var h = 0.900316316158 * this.a * e * Math.cos(s) + this.x0, o = 1.4142135623731 * this.a * Math.sin(s) + this.y0;
  return t.x = h, t.y = o, t;
}
function tn(t) {
  var i, a;
  t.x -= this.x0, t.y -= this.y0, a = t.y / (1.4142135623731 * this.a), Math.abs(a) > 0.999999999999 && (a = 0.999999999999), i = Math.asin(a);
  var e = g(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(i)));
  e < -Math.PI && (e = -Math.PI), e > Math.PI && (e = Math.PI), a = (2 * i + Math.sin(2 * i)) / Math.PI, Math.abs(a) > 1 && (a = 1);
  var s = Math.asin(a);
  return t.x = e, t.y = s, t;
}
var an = ["Mollweide", "moll"];
const sn = {
  init: Zh,
  forward: Yh,
  inverse: tn,
  names: an
};
function en() {
  Math.abs(this.lat1 + this.lat2) < _ || (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = It(this.es), this.e1 = wt(this.es), this.e2 = Rt(this.es), this.e3 = pt(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = Z(this.e, this.sinphi, this.cosphi), this.ml1 = F(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < _ ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = Z(this.e, this.sinphi, this.cosphi), this.ml2 = F(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = F(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0));
}
function rn(t) {
  var i = t.x, a = t.y, e;
  if (this.sphere)
    e = this.a * (this.g - a);
  else {
    var s = F(this.e0, this.e1, this.e2, this.e3, a);
    e = this.a * (this.g - s);
  }
  var r = this.ns * g(i - this.long0), n = this.x0 + e * Math.sin(r), h = this.y0 + this.rh - e * Math.cos(r);
  return t.x = n, t.y = h, t;
}
function hn(t) {
  t.x -= this.x0, t.y = this.rh - t.y + this.y0;
  var i, a, e, s;
  this.ns >= 0 ? (a = Math.sqrt(t.x * t.x + t.y * t.y), i = 1) : (a = -Math.sqrt(t.x * t.x + t.y * t.y), i = -1);
  var r = 0;
  if (a !== 0 && (r = Math.atan2(i * t.x, i * t.y)), this.sphere)
    return s = g(this.long0 + r / this.ns), e = gt(this.g - a / this.a), t.x = s, t.y = e, t;
  var n = this.g - a / this.a;
  return e = Wt(n, this.e0, this.e1, this.e2, this.e3), s = g(this.long0 + r / this.ns), t.x = s, t.y = e, t;
}
var nn = ["Equidistant_Conic", "eqdc"];
const on = {
  init: en,
  forward: rn,
  inverse: hn,
  names: nn
};
function ln() {
  this.R = this.a;
}
function fn(t) {
  var i = t.x, a = t.y, e = g(i - this.long0), s, r;
  Math.abs(a) <= _ && (s = this.x0 + this.R * e, r = this.y0);
  var n = rt(2 * Math.abs(a / Math.PI));
  (Math.abs(e) <= _ || Math.abs(Math.abs(a) - m) <= _) && (s = this.x0, a >= 0 ? r = this.y0 + Math.PI * this.R * Math.tan(0.5 * n) : r = this.y0 + Math.PI * this.R * -Math.tan(0.5 * n));
  var h = 0.5 * Math.abs(Math.PI / e - e / Math.PI), o = h * h, l = Math.sin(n), u = Math.cos(n), f = u / (l + u - 1), c = f * f, v = f * (2 / l - 1), M = v * v, d = Math.PI * this.R * (h * (f - M) + Math.sqrt(o * (f - M) * (f - M) - (M + o) * (c - M))) / (M + o);
  e < 0 && (d = -d), s = this.x0 + d;
  var y = o + f;
  return d = Math.PI * this.R * (v * y - h * Math.sqrt((M + o) * (o + 1) - y * y)) / (M + o), a >= 0 ? r = this.y0 + d : r = this.y0 - d, t.x = s, t.y = r, t;
}
function un(t) {
  var i, a, e, s, r, n, h, o, l, u, f, c, v;
  return t.x -= this.x0, t.y -= this.y0, f = Math.PI * this.R, e = t.x / f, s = t.y / f, r = e * e + s * s, n = -Math.abs(s) * (1 + r), h = n - 2 * s * s + e * e, o = -2 * n + 1 + 2 * s * s + r * r, v = s * s / o + (2 * h * h * h / o / o / o - 9 * n * h / o / o) / 27, l = (n - h * h / 3 / o) / o, u = 2 * Math.sqrt(-l / 3), f = 3 * v / l / u, Math.abs(f) > 1 && (f >= 0 ? f = 1 : f = -1), c = Math.acos(f) / 3, t.y >= 0 ? a = (-u * Math.cos(c + Math.PI / 3) - h / 3 / o) * Math.PI : a = -(-u * Math.cos(c + Math.PI / 3) - h / 3 / o) * Math.PI, Math.abs(e) < _ ? i = this.long0 : i = g(this.long0 + Math.PI * (r - 1 + Math.sqrt(1 + 2 * (e * e - s * s) + r * r)) / 2 / e), t.x = i, t.y = a, t;
}
var cn = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
const Mn = {
  init: ln,
  forward: fn,
  inverse: un,
  names: cn
};
function vn() {
  this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
}
function dn(t) {
  var i = t.x, a = t.y, e = Math.sin(t.y), s = Math.cos(t.y), r = g(i - this.long0), n, h, o, l, u, f, c, v, M, d, y, x, S, A, R, N, P, B, L, V, ht, nt, Ot;
  return this.sphere ? Math.abs(this.sin_p12 - 1) <= _ ? (t.x = this.x0 + this.a * (m - a) * Math.sin(r), t.y = this.y0 - this.a * (m - a) * Math.cos(r), t) : Math.abs(this.sin_p12 + 1) <= _ ? (t.x = this.x0 + this.a * (m + a) * Math.sin(r), t.y = this.y0 + this.a * (m + a) * Math.cos(r), t) : (B = this.sin_p12 * e + this.cos_p12 * s * Math.cos(r), N = Math.acos(B), P = N ? N / Math.sin(N) : 1, t.x = this.x0 + this.a * P * s * Math.sin(r), t.y = this.y0 + this.a * P * (this.cos_p12 * e - this.sin_p12 * s * Math.cos(r)), t) : (n = It(this.es), h = wt(this.es), o = Rt(this.es), l = pt(this.es), Math.abs(this.sin_p12 - 1) <= _ ? (u = this.a * F(n, h, o, l, m), f = this.a * F(n, h, o, l, a), t.x = this.x0 + (u - f) * Math.sin(r), t.y = this.y0 - (u - f) * Math.cos(r), t) : Math.abs(this.sin_p12 + 1) <= _ ? (u = this.a * F(n, h, o, l, m), f = this.a * F(n, h, o, l, a), t.x = this.x0 + (u + f) * Math.sin(r), t.y = this.y0 + (u + f) * Math.cos(r), t) : (c = e / s, v = yt(this.a, this.e, this.sin_p12), M = yt(this.a, this.e, e), d = Math.atan((1 - this.es) * c + this.es * v * this.sin_p12 / (M * s)), y = Math.atan2(Math.sin(r), this.cos_p12 * Math.tan(d) - this.sin_p12 * Math.cos(r)), y === 0 ? L = Math.asin(this.cos_p12 * Math.sin(d) - this.sin_p12 * Math.cos(d)) : Math.abs(Math.abs(y) - Math.PI) <= _ ? L = -Math.asin(this.cos_p12 * Math.sin(d) - this.sin_p12 * Math.cos(d)) : L = Math.asin(Math.sin(r) * Math.cos(d) / Math.sin(y)), x = this.e * this.sin_p12 / Math.sqrt(1 - this.es), S = this.e * this.cos_p12 * Math.cos(y) / Math.sqrt(1 - this.es), A = x * S, R = S * S, V = L * L, ht = V * L, nt = ht * L, Ot = nt * L, N = v * L * (1 - V * R * (1 - R) / 6 + ht / 8 * A * (1 - 2 * R) + nt / 120 * (R * (4 - 7 * R) - 3 * x * x * (1 - 7 * R)) - Ot / 48 * A), t.x = this.x0 + N * Math.sin(y), t.y = this.y0 + N * Math.cos(y), t));
}
function mn(t) {
  t.x -= this.x0, t.y -= this.y0;
  var i, a, e, s, r, n, h, o, l, u, f, c, v, M, d, y, x, S, A, R, N, P, B, L;
  return this.sphere ? (i = Math.sqrt(t.x * t.x + t.y * t.y), i > 2 * m * this.a ? void 0 : (a = i / this.a, e = Math.sin(a), s = Math.cos(a), r = this.long0, Math.abs(i) <= _ ? n = this.lat0 : (n = rt(s * this.sin_p12 + t.y * e * this.cos_p12 / i), h = Math.abs(this.lat0) - m, Math.abs(h) <= _ ? this.lat0 >= 0 ? r = g(this.long0 + Math.atan2(t.x, -t.y)) : r = g(this.long0 - Math.atan2(-t.x, t.y)) : r = g(this.long0 + Math.atan2(t.x * e, i * this.cos_p12 * s - t.y * this.sin_p12 * e))), t.x = r, t.y = n, t)) : (o = It(this.es), l = wt(this.es), u = Rt(this.es), f = pt(this.es), Math.abs(this.sin_p12 - 1) <= _ ? (c = this.a * F(o, l, u, f, m), i = Math.sqrt(t.x * t.x + t.y * t.y), v = c - i, n = Wt(v / this.a, o, l, u, f), r = g(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = r, t.y = n, t) : Math.abs(this.sin_p12 + 1) <= _ ? (c = this.a * F(o, l, u, f, m), i = Math.sqrt(t.x * t.x + t.y * t.y), v = i - c, n = Wt(v / this.a, o, l, u, f), r = g(this.long0 + Math.atan2(t.x, t.y)), t.x = r, t.y = n, t) : (i = Math.sqrt(t.x * t.x + t.y * t.y), y = Math.atan2(t.x, t.y), M = yt(this.a, this.e, this.sin_p12), x = Math.cos(y), S = this.e * this.cos_p12 * x, A = -S * S / (1 - this.es), R = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * x / (1 - this.es), N = i / M, P = N - A * (1 + A) * Math.pow(N, 3) / 6 - R * (1 + 3 * A) * Math.pow(N, 4) / 24, B = 1 - A * P * P / 2 - N * P * P * P / 6, d = Math.asin(this.sin_p12 * Math.cos(P) + this.cos_p12 * Math.sin(P) * x), r = g(this.long0 + Math.asin(Math.sin(y) * Math.sin(P) / Math.cos(d))), L = Math.sin(d), n = Math.atan2((L - this.es * B * this.sin_p12) * Math.tan(d), L * (1 - this.es)), t.x = r, t.y = n, t));
}
var yn = ["Azimuthal_Equidistant", "aeqd"];
const _n = {
  init: vn,
  forward: dn,
  inverse: mn,
  names: yn
};
function gn() {
  this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0);
}
function xn(t) {
  var i, a, e, s, r, n, h, o, l = t.x, u = t.y;
  return e = g(l - this.long0), i = Math.sin(u), a = Math.cos(u), s = Math.cos(e), n = this.sin_p14 * i + this.cos_p14 * a * s, r = 1, (n > 0 || Math.abs(n) <= _) && (h = this.a * r * a * Math.sin(e), o = this.y0 + this.a * r * (this.cos_p14 * i - this.sin_p14 * a * s)), t.x = h, t.y = o, t;
}
function bn(t) {
  var i, a, e, s, r, n, h;
  return t.x -= this.x0, t.y -= this.y0, i = Math.sqrt(t.x * t.x + t.y * t.y), a = rt(i / this.a), e = Math.sin(a), s = Math.cos(a), n = this.long0, Math.abs(i) <= _ ? (h = this.lat0, t.x = n, t.y = h, t) : (h = rt(s * this.sin_p14 + t.y * e * this.cos_p14 / i), r = Math.abs(this.lat0) - m, Math.abs(r) <= _ ? (this.lat0 >= 0 ? n = g(this.long0 + Math.atan2(t.x, -t.y)) : n = g(this.long0 - Math.atan2(-t.x, t.y)), t.x = n, t.y = h, t) : (n = g(this.long0 + Math.atan2(t.x * e, i * this.cos_p14 * s - t.y * this.sin_p14 * e)), t.x = n, t.y = h, t));
}
var Sn = ["ortho"];
const En = {
  init: gn,
  forward: xn,
  inverse: bn,
  names: Sn
};
var O = {
  FRONT: 1,
  RIGHT: 2,
  BACK: 3,
  LEFT: 4,
  TOP: 5,
  BOTTOM: 6
}, I = {
  AREA_0: 1,
  AREA_1: 2,
  AREA_2: 3,
  AREA_3: 4
};
function An() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_ts || 0, this.title = this.title || "Quadrilateralized Spherical Cube", this.lat0 >= m - T / 2 ? this.face = O.TOP : this.lat0 <= -(m - T / 2) ? this.face = O.BOTTOM : Math.abs(this.long0) <= T ? this.face = O.FRONT : Math.abs(this.long0) <= m + T ? this.face = this.long0 > 0 ? O.RIGHT : O.LEFT : this.face = O.BACK, this.es !== 0 && (this.one_minus_f = 1 - (this.a - this.b) / this.a, this.one_minus_f_squared = this.one_minus_f * this.one_minus_f);
}
function Cn(t) {
  var i = { x: 0, y: 0 }, a, e, s, r, n, h, o = { value: 0 };
  if (t.x -= this.long0, this.es !== 0 ? a = Math.atan(this.one_minus_f_squared * Math.tan(t.y)) : a = t.y, e = t.x, this.face === O.TOP)
    r = m - a, e >= T && e <= m + T ? (o.value = I.AREA_0, s = e - m) : e > m + T || e <= -(m + T) ? (o.value = I.AREA_1, s = e > 0 ? e - G : e + G) : e > -(m + T) && e <= -T ? (o.value = I.AREA_2, s = e + m) : (o.value = I.AREA_3, s = e);
  else if (this.face === O.BOTTOM)
    r = m + a, e >= T && e <= m + T ? (o.value = I.AREA_0, s = -e + m) : e < T && e >= -T ? (o.value = I.AREA_1, s = -e) : e < -T && e >= -(m + T) ? (o.value = I.AREA_2, s = -e - m) : (o.value = I.AREA_3, s = e > 0 ? -e + G : -e - G);
  else {
    var l, u, f, c, v, M, d;
    this.face === O.RIGHT ? e = dt(e, +m) : this.face === O.BACK ? e = dt(e, +G) : this.face === O.LEFT && (e = dt(e, -m)), c = Math.sin(a), v = Math.cos(a), M = Math.sin(e), d = Math.cos(e), l = v * d, u = v * M, f = c, this.face === O.FRONT ? (r = Math.acos(l), s = qt(r, f, u, o)) : this.face === O.RIGHT ? (r = Math.acos(u), s = qt(r, f, -l, o)) : this.face === O.BACK ? (r = Math.acos(-l), s = qt(r, f, -u, o)) : this.face === O.LEFT ? (r = Math.acos(-u), s = qt(r, f, l, o)) : (r = s = 0, o.value = I.AREA_0);
  }
  return h = Math.atan(12 / G * (s + Math.acos(Math.sin(s) * Math.cos(T)) - m)), n = Math.sqrt((1 - Math.cos(r)) / (Math.cos(h) * Math.cos(h)) / (1 - Math.cos(Math.atan(1 / Math.cos(s))))), o.value === I.AREA_1 ? h += m : o.value === I.AREA_2 ? h += G : o.value === I.AREA_3 && (h += 1.5 * G), i.x = n * Math.cos(h), i.y = n * Math.sin(h), i.x = i.x * this.a + this.x0, i.y = i.y * this.a + this.y0, t.x = i.x, t.y = i.y, t;
}
function Nn(t) {
  var i = { lam: 0, phi: 0 }, a, e, s, r, n, h, o, l, u, f = { value: 0 };
  if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, e = Math.atan(Math.sqrt(t.x * t.x + t.y * t.y)), a = Math.atan2(t.y, t.x), t.x >= 0 && t.x >= Math.abs(t.y) ? f.value = I.AREA_0 : t.y >= 0 && t.y >= Math.abs(t.x) ? (f.value = I.AREA_1, a -= m) : t.x < 0 && -t.x >= Math.abs(t.y) ? (f.value = I.AREA_2, a = a < 0 ? a + G : a - G) : (f.value = I.AREA_3, a += m), u = G / 12 * Math.tan(a), n = Math.sin(u) / (Math.cos(u) - 1 / Math.sqrt(2)), h = Math.atan(n), s = Math.cos(a), r = Math.tan(e), o = 1 - s * s * r * r * (1 - Math.cos(Math.atan(1 / Math.cos(h)))), o < -1 ? o = -1 : o > 1 && (o = 1), this.face === O.TOP)
    l = Math.acos(o), i.phi = m - l, f.value === I.AREA_0 ? i.lam = h + m : f.value === I.AREA_1 ? i.lam = h < 0 ? h + G : h - G : f.value === I.AREA_2 ? i.lam = h - m : i.lam = h;
  else if (this.face === O.BOTTOM)
    l = Math.acos(o), i.phi = l - m, f.value === I.AREA_0 ? i.lam = -h + m : f.value === I.AREA_1 ? i.lam = -h : f.value === I.AREA_2 ? i.lam = -h - m : i.lam = h < 0 ? -h - G : -h + G;
  else {
    var c, v, M;
    c = o, u = c * c, u >= 1 ? M = 0 : M = Math.sqrt(1 - u) * Math.sin(h), u += M * M, u >= 1 ? v = 0 : v = Math.sqrt(1 - u), f.value === I.AREA_1 ? (u = v, v = -M, M = u) : f.value === I.AREA_2 ? (v = -v, M = -M) : f.value === I.AREA_3 && (u = v, v = M, M = -u), this.face === O.RIGHT ? (u = c, c = -v, v = u) : this.face === O.BACK ? (c = -c, v = -v) : this.face === O.LEFT && (u = c, c = v, v = -u), i.phi = Math.acos(-M) - m, i.lam = Math.atan2(v, c), this.face === O.RIGHT ? i.lam = dt(i.lam, -m) : this.face === O.BACK ? i.lam = dt(i.lam, -G) : this.face === O.LEFT && (i.lam = dt(i.lam, +m));
  }
  if (this.es !== 0) {
    var d, y, x;
    d = i.phi < 0 ? 1 : 0, y = Math.tan(i.phi), x = this.b / Math.sqrt(y * y + this.one_minus_f_squared), i.phi = Math.atan(Math.sqrt(this.a * this.a - x * x) / (this.one_minus_f * x)), d && (i.phi = -i.phi);
  }
  return i.lam += this.long0, t.x = i.lam, t.y = i.phi, t;
}
function qt(t, i, a, e) {
  var s;
  return t < _ ? (e.value = I.AREA_0, s = 0) : (s = Math.atan2(i, a), Math.abs(s) <= T ? e.value = I.AREA_0 : s > T && s <= m + T ? (e.value = I.AREA_1, s -= m) : s > m + T || s <= -(m + T) ? (e.value = I.AREA_2, s = s >= 0 ? s - G : s + G) : (e.value = I.AREA_3, s += m)), s;
}
function dt(t, i) {
  var a = t + i;
  return a < -G ? a += Ct : a > +G && (a -= Ct), a;
}
var Pn = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
const Tn = {
  init: An,
  forward: Cn,
  inverse: Nn,
  names: Pn
};
var ai = [
  [1, 22199e-21, -715515e-10, 31103e-10],
  [0.9986, -482243e-9, -24897e-9, -13309e-10],
  [0.9954, -83103e-8, -448605e-10, -986701e-12],
  [0.99, -135364e-8, -59661e-9, 36777e-10],
  [0.9822, -167442e-8, -449547e-11, -572411e-11],
  [0.973, -214868e-8, -903571e-10, 18736e-12],
  [0.96, -305085e-8, -900761e-10, 164917e-11],
  [0.9427, -382792e-8, -653386e-10, -26154e-10],
  [0.9216, -467746e-8, -10457e-8, 481243e-11],
  [0.8962, -536223e-8, -323831e-10, -543432e-11],
  [0.8679, -609363e-8, -113898e-9, 332484e-11],
  [0.835, -698325e-8, -640253e-10, 934959e-12],
  [0.7986, -755338e-8, -500009e-10, 935324e-12],
  [0.7597, -798324e-8, -35971e-9, -227626e-11],
  [0.7186, -851367e-8, -701149e-10, -86303e-10],
  [0.6732, -986209e-8, -199569e-9, 191974e-10],
  [0.6213, -0.010418, 883923e-10, 624051e-11],
  [0.5722, -906601e-8, 182e-6, 624051e-11],
  [0.5322, -677797e-8, 275608e-9, 624051e-11]
], Et = [
  [-520417e-23, 0.0124, 121431e-23, -845284e-16],
  [0.062, 0.0124, -126793e-14, 422642e-15],
  [0.124, 0.0124, 507171e-14, -160604e-14],
  [0.186, 0.0123999, -190189e-13, 600152e-14],
  [0.248, 0.0124002, 710039e-13, -224e-10],
  [0.31, 0.0123992, -264997e-12, 835986e-13],
  [0.372, 0.0124029, 988983e-12, -311994e-12],
  [0.434, 0.0123893, -369093e-11, -435621e-12],
  [0.4958, 0.0123198, -102252e-10, -345523e-12],
  [0.5571, 0.0121916, -154081e-10, -582288e-12],
  [0.6176, 0.0119938, -241424e-10, -525327e-12],
  [0.6769, 0.011713, -320223e-10, -516405e-12],
  [0.7346, 0.0113541, -397684e-10, -609052e-12],
  [0.7903, 0.0109107, -489042e-10, -104739e-11],
  [0.8435, 0.0103431, -64615e-9, -140374e-14],
  [0.8936, 969686e-8, -64636e-9, -8547e-9],
  [0.9394, 840947e-8, -192841e-9, -42106e-10],
  [0.9761, 616527e-8, -256e-6, -42106e-10],
  [1, 328947e-8, -319159e-9, -42106e-10]
], Yi = 0.8487, ta = 1.3523, ia = K / 5, In = 1 / ia, vt = 18, jt = function(t, i) {
  return t[0] + i * (t[1] + i * (t[2] + i * t[3]));
}, wn = function(t, i) {
  return t[1] + i * (2 * t[2] + i * 3 * t[3]);
};
function Rn(t, i, a, e) {
  for (var s = i; e; --e) {
    var r = t(s);
    if (s -= r, Math.abs(r) < a)
      break;
  }
  return s;
}
function pn() {
  this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.long0 = this.long0 || 0, this.es = 0, this.title = this.title || "Robinson";
}
function On(t) {
  var i = g(t.x - this.long0), a = Math.abs(t.y), e = Math.floor(a * ia);
  e < 0 ? e = 0 : e >= vt && (e = vt - 1), a = K * (a - In * e);
  var s = {
    x: jt(ai[e], a) * i,
    y: jt(Et[e], a)
  };
  return t.y < 0 && (s.y = -s.y), s.x = s.x * this.a * Yi + this.x0, s.y = s.y * this.a * ta + this.y0, s;
}
function Ln(t) {
  var i = {
    x: (t.x - this.x0) / (this.a * Yi),
    y: Math.abs(t.y - this.y0) / (this.a * ta)
  };
  if (i.y >= 1)
    i.x /= ai[vt][0], i.y = t.y < 0 ? -m : m;
  else {
    var a = Math.floor(i.y * vt);
    for (a < 0 ? a = 0 : a >= vt && (a = vt - 1); ; )
      if (Et[a][0] > i.y)
        --a;
      else if (Et[a + 1][0] <= i.y)
        ++a;
      else
        break;
    var e = Et[a], s = 5 * (i.y - e[0]) / (Et[a + 1][0] - e[0]);
    s = Rn(function(r) {
      return (jt(e, r) - i.y) / wn(e, r);
    }, s, _, 100), i.x /= jt(ai[a], s), i.y = (5 * a + s) * D, t.y < 0 && (i.y = -i.y);
  }
  return i.x = g(i.x + this.long0), i;
}
var qn = ["Robinson", "robin"];
const Gn = {
  init: pn,
  forward: On,
  inverse: Ln,
  names: qn
};
function $n() {
  this.name = "geocent";
}
function Dn(t) {
  var i = ki(t, this.es, this.a);
  return i;
}
function Bn(t) {
  var i = zi(t, this.es, this.a, this.b);
  return i;
}
var kn = ["Geocentric", "geocentric", "geocent", "Geocent"];
const zn = {
  init: $n,
  forward: Dn,
  inverse: Bn,
  names: kn
};
var k = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
}, xt = {
  h: { def: 1e5, num: !0 },
  azi: { def: 0, num: !0, degrees: !0 },
  tilt: { def: 0, num: !0, degrees: !0 },
  long0: { def: 0, num: !0 },
  lat0: { def: 0, num: !0 }
};
function Fn() {
  if (Object.keys(xt).forEach(function(a) {
    if (typeof this[a] > "u")
      this[a] = xt[a].def;
    else {
      if (xt[a].num && isNaN(this[a]))
        throw new Error("Invalid parameter value, must be numeric " + a + " = " + this[a]);
      xt[a].num && (this[a] = parseFloat(this[a]));
    }
    xt[a].degrees && (this[a] = this[a] * D);
  }.bind(this)), Math.abs(Math.abs(this.lat0) - m) < _ ? this.mode = this.lat0 < 0 ? k.S_POLE : k.N_POLE : Math.abs(this.lat0) < _ ? this.mode = k.EQUIT : (this.mode = k.OBLIQ, this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0)), this.pn1 = this.h / this.a, this.pn1 <= 0 || this.pn1 > 1e10)
    throw new Error("Invalid height");
  this.p = 1 + this.pn1, this.rp = 1 / this.p, this.h1 = 1 / this.pn1, this.pfact = (this.p + 1) * this.h1, this.es = 0;
  var t = this.tilt, i = this.azi;
  this.cg = Math.cos(i), this.sg = Math.sin(i), this.cw = Math.cos(t), this.sw = Math.sin(t);
}
function Un(t) {
  t.x -= this.long0;
  var i = Math.sin(t.y), a = Math.cos(t.y), e = Math.cos(t.x), s, r;
  switch (this.mode) {
    case k.OBLIQ:
      r = this.sinph0 * i + this.cosph0 * a * e;
      break;
    case k.EQUIT:
      r = a * e;
      break;
    case k.S_POLE:
      r = -i;
      break;
    case k.N_POLE:
      r = i;
      break;
  }
  switch (r = this.pn1 / (this.p - r), s = r * a * Math.sin(t.x), this.mode) {
    case k.OBLIQ:
      r *= this.cosph0 * i - this.sinph0 * a * e;
      break;
    case k.EQUIT:
      r *= i;
      break;
    case k.N_POLE:
      r *= -(a * e);
      break;
    case k.S_POLE:
      r *= a * e;
      break;
  }
  var n, h;
  return n = r * this.cg + s * this.sg, h = 1 / (n * this.sw * this.h1 + this.cw), s = (s * this.cg - r * this.sg) * this.cw * h, r = n * h, t.x = s * this.a, t.y = r * this.a, t;
}
function Wn(t) {
  t.x /= this.a, t.y /= this.a;
  var i = { x: t.x, y: t.y }, a, e, s;
  s = 1 / (this.pn1 - t.y * this.sw), a = this.pn1 * t.x * s, e = this.pn1 * t.y * this.cw * s, t.x = a * this.cg + e * this.sg, t.y = e * this.cg - a * this.sg;
  var r = Xt(t.x, t.y);
  if (Math.abs(r) < _)
    i.x = 0, i.y = t.y;
  else {
    var n, h;
    switch (h = 1 - r * r * this.pfact, h = (this.p - Math.sqrt(h)) / (this.pn1 / r + r / this.pn1), n = Math.sqrt(1 - h * h), this.mode) {
      case k.OBLIQ:
        i.y = Math.asin(n * this.sinph0 + t.y * h * this.cosph0 / r), t.y = (n - this.sinph0 * Math.sin(i.y)) * r, t.x *= h * this.cosph0;
        break;
      case k.EQUIT:
        i.y = Math.asin(t.y * h / r), t.y = n * r, t.x *= h;
        break;
      case k.N_POLE:
        i.y = Math.asin(n), t.y = -t.y;
        break;
      case k.S_POLE:
        i.y = -Math.asin(n);
        break;
    }
    i.x = Math.atan2(t.x, t.y);
  }
  return t.x = i.x + this.long0, t.y = i.y, t;
}
var jn = ["Tilted_Perspective", "tpers"];
const Qn = {
  init: Fn,
  forward: Un,
  inverse: Wn,
  names: jn
};
function Hn(t) {
  t.Proj.projections.add(Dt), t.Proj.projections.add(Bt), t.Proj.projections.add(sr), t.Proj.projections.add(Mr), t.Proj.projections.add(gr), t.Proj.projections.add(Ar), t.Proj.projections.add(wr), t.Proj.projections.add(qr), t.Proj.projections.add(kr), t.Proj.projections.add(jr), t.Proj.projections.add(oh), t.Proj.projections.add(vh), t.Proj.projections.add(gh), t.Proj.projections.add(Ch), t.Proj.projections.add(wh), t.Proj.projections.add(qh), t.Proj.projections.add(kh), t.Proj.projections.add(jh), t.Proj.projections.add(Jh), t.Proj.projections.add(sn), t.Proj.projections.add(on), t.Proj.projections.add(Mn), t.Proj.projections.add(_n), t.Proj.projections.add(En), t.Proj.projections.add(Tn), t.Proj.projections.add(Gn), t.Proj.projections.add(zn), t.Proj.projections.add(Qn);
}
q.defaultDatum = "WGS84";
q.Proj = J;
q.WGS84 = new q.Proj("WGS84");
q.Point = mt;
q.toPoint = Fi;
q.defs = z;
q.nadgrid = re;
q.transform = Ut;
q.mgrs = be;
q.version = "__VERSION__";
Hn(q);
q.defs("urn:ogc:def:crs:EPSG:6.18.3:3857", q.defs("EPSG:3857"));
q.defs("urn:ogc:def:crs:EPSG:3857", q.defs("EPSG:3857"));
q.defs("urn:ogc:def:crs:EPSG::3857", q.defs("EPSG:3857"));
const Ti = (t, i, a = { x: 0, y: 0 }) => (e) => {
  const s = t.imageToViewportCoordinates(e[0] + a.x, e[1] + a.y);
  return sa(i)([s.x, s.y]);
}, Ii = (t, i, a = { x: 0, y: 0 }) => (e) => {
  const s = kt(i)(e), { x: r, y: n } = t.viewportToImageCoordinates(s[0], s[1]);
  return [r - a.x, n - a.y];
}, Xn = (t) => (i) => q("EPSG:4326", t.code, i), kt = (t) => (i) => {
  const a = q("EPSG:4326", t.code, i);
  return aa(t.extent)(a);
}, Vn = (t) => (i) => q(t.code, "EPSG:4326", i), aa = (t) => (i) => {
  const [a, e] = i, [s, r] = t, [n, h] = [s / 2, r / 2], o = a + n, l = h - e;
  return [o / s, l / r];
}, sa = (t) => (i) => {
  const a = ea(t.extent)(i);
  return q(t.code, "EPSG:4326", a);
}, ea = (t) => (i) => {
  const [a, e] = i, [s, r] = t, [n, h] = [s / 2, r / 2], o = a * s - n, l = h - e * r;
  return [o, l];
}, Kn = (t, i) => {
  const { url: a } = i;
  return new Promise((e, s) => {
    fetch(a).then((r) => r.text()).then((r) => {
      const { tileSource: n, mapBounds: h, projection: o } = gs(r, i), l = kt(o)([
        Math.min(h[0], h[2]),
        Math.max(h[3], h[1])
      ]), u = kt(o)([
        Math.max(h[2], h[0]),
        Math.min(h[3], h[1])
      ]);
      t.addTiledImage({
        tileSource: n,
        success: () => {
          const f = new OpenSeadragon.Rect(l[0], l[1], u[0] - l[0], u[1] - l[1]);
          t.viewport.fitBounds(f, !0);
          const c = t.viewport.viewportToImageCoordinates(l[0], l[1]), v = t.viewport.viewportToImageCoordinates(u[0], u[1]), M = {
            x: c.x,
            y: c.y,
            width: v.x - c.x,
            height: v.y - c.y
          };
          e({
            mapBounds: h,
            viewportRegion: f,
            imageRegion: M,
            imageToLonLat: Ti(t.viewport, o),
            imageRegionToLonLat: Ti(t.viewport, o, c),
            lonLatToImage: Ii(t.viewport, o),
            lonLatToImageRegion: Ii(t.viewport, o, c),
            mapToLonLat: Vn(o),
            mapToViewportCoordinates: aa(o.extent),
            lonLatToMapCoordinates: Xn(o),
            lonLatToViewportCoordinates: kt(o),
            viewportToLonLat: sa(o),
            viewportToMapCoordinates: ea(o.extent)
          });
        },
        error: (f) => s(f)
      });
    });
  });
};
export {
  Kn as default
};
//# sourceMappingURL=openseadragon-wmts.js.map

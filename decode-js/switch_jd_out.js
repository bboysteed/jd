var D_ = function () {
  var kp = {
    INLNQ: "16|12|11|14|10|15|9|5|7|13|4|6|0|3|2|8|1",
    Otxda: "4.1",
    TZPTg: function (t, r, n, e) {
      return t(r, n, e);
    },
    rEjmW: function (t, r, n) {
      return t(r, n);
    },
    NITUZ: function (t, r) {
      return t > r;
    },
    RIIkR: function (t, r) {
      return t !== r;
    },
    flbDN: "settings.appId mustbe a non-empty string",
    aUXxw: function (t, r) {
      return t || r;
    },
    LVjbA: function (t, r) {
      return t(r);
    },
    BrQtw: function (t, r) {
      return t(r);
    },
    SZJya: function (t, r) {
      return t(r);
    },
    Yirbv: function (t, r, n) {
      return t(r, n);
    },
    RkUGk: "create instance withappId=",
    aNQiy: function (t, r, n) {
      return t(r, n);
    },
    OISeT: function (t, r) {
      return t(r);
    },
    zprao: function (t, r) {
      return t >= r;
    },
    DDvrX: "2475%+",
    eNksc: function (t, r) {
      return t(r);
    },
    WkEaU: function (t, r) {
      return t(r);
    },
    TCZdg: function (t, r) {
      return t(r);
    },
    sGKoB: function (t, r, n) {
      return t(r, n);
    },
    fByeQ: function (t, r) {
      return t + r;
    },
    dkupc: function (t, r) {
      return t + r;
    },
    dPnLQ: "__genDefaultKey input=",
    yUOqa: ",express=",
    ZIPCf: ",key=",
    LgGSH: function (t, r) {
      return t === r;
    },
    dPhEj: function (t, r, n) {
      return t(r, n);
    },
    lzgJn: "return ",
    nrOom: "use normalToken",
    yFtEs: "use defaultToken",
    UdVfD: function (t, r) {
      return t(r);
    },
    MmKKy: function (t, r) {
      return t(r);
    },
    TWGdv: function (t, r) {
      return t + r;
    },
    KjUbg: function (t, r) {
      return t + r;
    },
    FBmsZ: "__genSign, paramsStr:",
    bwNPA: ", signedStr:",
    Ejkbs: function (t, r) {
      return t(r);
    },
    lwzrb: ", _formatVersion:",
    VSvaU: function (t, r) {
      return t * r;
    },
    SpeMU: "__requestDeps use new fp, fp:",
    EqITg: function (t, r) {
      return t && r;
    },
    zfLWL: "__requestDeps, use cache token, token:",
    PuZWk: "return",
    GuSKa: "__requestDeps, end __requestAlgorithm, fp:",
    Frucd: "1|5|4|0|2|3",
    PvmKF: function (t, r) {
      return t * r;
    },
    jTRtB: function (t, r) {
      return t * r;
    },
    dnkDV: function (t, r) {
      return t(r);
    },
    GbHtS: ", fp:",
    gLyRt: "__requestAlgorithm envCollect=",
    GoZXH: "8|4|0|2|1|7|6|10|11|3|9|5",
    ylllf: function (t, r) {
      return t(r);
    },
    IIBtU: "params is empty",
    VmEHo: function (t, r) {
      return t(r);
    },
    YVgIm: "params is not a plain object",
    eYjJe: "params is empty after excluding \"unsafe\" params",
    aQSrQ: function (t, r) {
      return t(r);
    },
    CEOMT: "1|6|3|0|2|5|4",
    AqAHu: function (t, r) {
      return t(r);
    },
    qbgpB: "yyyyMMddhhmmssSSS",
    WLBfs: "5|0|3|7|1|2|4|6",
    vJFed: function (t, r) {
      return t(r);
    },
    KKJPZ: function (t, r) {
      return t + r;
    },
    nBWrf: "__makeSign, result:",
    PvUhB: "success",
    tjKSX: "token is empty",
    Wzsfy: function (t) {
      return t();
    },
    KRyWp: function (t, r) {
      return t(r);
    },
    ANOsz: function (t, r, n) {
      return t(r, n);
    },
    jdBkS: "__collect envCollect=",
    eqvzb: function (t, r) {
      return t == r;
    },
    dAiwc: function (t, r) {
      return t - r;
    },
    WKoxG: function (t) {
      return t();
    },
    wtzsw: "end",
    LxYVU: function (t, r) {
      return t(r);
    },
    gZmEb: function (t, r, n) {
      return t(r, n);
    },
    iJcFo: "__algorithm",
    IjWus: "__genSignParams",
    brLRh: "__requestDeps",
    cdEeS: "__requestAlgorithm",
    fgEHx: "__makeSign",
    ZiQKL: "__collect",
    ojlLt: "sign"
  };

  function Tp() {
    var r = "16|12|11|14|10|15|9|5|7|13|4|6|0|3|2|8|1".split("|"),
        n = 0;
    var a = kp.NITUZ(arguments.length, 0) && kp.RIIkR(arguments[0], void 0) ? arguments[0] : {};
    kp.rEjmW(qv, this, Tp);
    this["_storagetokenKey"] = Jx["DYNAMIC_TOKEN"];
    this["_storageAlgnKey"] = Jx["DYNAMIC_ALGORITHM"];
    this["_storageFormatVersionKey"] = Jx.FLAG;
    this["_storageFpKey"] = Jx.VK;
    this._token = "";
    this["_defaultToken"] = "";
    this._isNormal = !1;
    this._appId = "";
    var i = {};
    i.local_key_1 = Db;
    i.local_key_2 = kb;
    i["local_key_3"] = Ib;
    this["_defaultAlgorithm"] = i;
    var u = {};
    u.MD5 = Db;
    u.SHA256 = kb;
    u.SHA512 = Nb;
    u.HmacSHA256 = Ib;
    u.HmacSHA512 = Gb;
    u.HmacMD5 = Hb;
    this.algos = u;
    this._version = kp.Otxda;
    this["_formatVersion"] = 4.1;
    this["_fingerprint"] = "";
    a = kp.TZPTg(Jy, {}, Tp.settings, a);
    this["__iniConfig"](a);
  }

  function Ip(t, r, n, e) {
    return A_(e - -897, t);
  }

  function Pp(t, r, n, e) {
    return A_(n - 402, e);
  }

  kp.gZmEb(Id, Tp, [{
    key: "__iniConfig",
    value: function (t) {
      var r,
          n,
          e,
          o,
          c = t.appId,
          f = t.preRequest,
          s = t.debug,
          v = t.timeout,
          l = t.onSign,
          h = t["onRequestToken"],
          p = t["onRequestTokenRemotely"];
      ((!gx(t.appId) || !t.appId) && console.error(kp.flbDN), this._appId = kp.aUXxw(c, ""), this._appId) && (this["_storagetokenKey"] = kp.LVjbA(ng, r = "".concat(this["_storagetokenKey"], "_")).call(r, this._appId), this["_storageAlgnKey"] = ng(n = "".concat(this["_storageAlgnKey"], "_")).call(n, this._appId), this["_storageFormatVersionKey"] = ng(e = "".concat(this["_storageFormatVersionKey"], "_")).call(e, this._appId), this["_storageFpKey"] = kp.BrQtw(ng, o = "".concat(this._storageFpKey, "_")).call(o, this._appId));

      function d(t, r, n, e) {
        return Pp(t - 160, r - 220, r - -275, n);
      }

      function y(t, r, n, e) {
        return Ip(n, r - 130, n - 101, t - 688);
      }

      if (this._timeout = kp.LVjbA(Number, v), this._debug = Boolean(s), this._onSign = mx(l) ? l : yx, this["_onRequestToken"] = kp.SZJya(mx, h) ? h : yx, this["_onRequestTokenRemotely"] = mx(p) ? p : yx, kp.Yirbv(Ax, this._debug, kp.RkUGk.concat(this._appId)), kp.aNQiy(Ax, this._debug, "create instance with timeout=".concat(this._timeout)), f) {
        this["__requestDeps"]();
      }
    }
  }, {
    key: "__genDefaultKey",
    value: function (t, r, n, e) {
      function _(t, r, n, e) {
        return Pp(t - 316, r - 485, t - -722, e);
      }

      var C,
          z,
          A,
          B,
          D = this,
          S = "",
          L = kp.DDvrX,
          j = kp.eNksc(ng, C = kp.eNksc(ng, z = kp.WkEaU(ng, A = kp.eNksc(ng, B = "".concat(t)).call(B, r)).call(A, n)).call(z, e)).call(C, L),
          O = zb.stringify(wb.parse(kp.TCZdg(Cx, this.__parseToken(t, 16, 28)))),
          M = O.match(/^[123]([x+][123])+/);

      function E(t, r, n, e) {
        return Ip(t, r - 116, n - 482, r - 1085);
      }

      if (M) {
        var k = M[0].split(""),
            T = this["_defaultAlgorithm"],
            I = "";
        kp.TCZdg(uy, k).call(k, function (r) {
          var n, e;

          function b(t, r, n, e) {
            return E(r, n - -707, n - 199);
          }

          function __1691913421940(t, r, n, e) {
            return E(r, n - -620, n - 252);
          }

          if (kp.LVjbA(isNaN, r)) {
            kp.zprao(kp.OISeT(lg, e = ["+", "x"]).call(e, r), 0) && (I = r);
          } else {
            var C,
                z = ng(C = "".concat(tw)).call(C, r);

            if (T[z]) {
              switch ("") {
                case "+":
                  S = kp.OISeT(ng, n = "".concat(S)).call(n, D["__algorithm"](z, j, t));
                  break;

                case "x":
                  S = D["__algorithm"](z, S, t);
                  break;

                default:
                  S = D["__algorithm"](z, j, t);
              }
            }
          }
        });
      }

      kp.sGKoB(Ax, this._debug, kp.fByeQ(kp.fByeQ(kp.dkupc(kp.fByeQ(kp.dPnLQ, j) + kp.yUOqa, O), kp.ZIPCf), S));
      return S;
    }
  }, {
    key: kp.iJcFo,
    value: function (t, r, n) {
      function i(t, r, n, e) {
        return Pp(t - 236, r - 187, r - 155, e);
      }

      var u = this["_defaultAlgorithm"][t];
      return kp.LgGSH(t, "local_key_3") ? kp.dPhEj(u, r, n).toString(_b) : kp.eNksc(u, r).toString(_b);
    }
  }, {
    key: "__parseToken",
    value: function (t, r, n) {
      if (t) {
        return kp.OISeT(Ty, t).call(t, r, n);
      }

      return "";
    }
  }, {
    key: "__parseAlgorithm",
    value: function (t, r) {
      function a(t, r, n, e) {
        return Pp(t - 238, r - 466, n - 367, e);
      }

      function c(t, r, o, i) {
        return Pp(t - 82, r - 83, r - -572, i);
      }

      if (this._token = kp.aUXxw(t, ""), this.__genKey = r && new Function(kp.lzgJn.concat(r))() || null, this._isNormal = this._token && this.__genKey, this._isNormal) {
        var f = {};
        f.code = 0;
        f.message = kp.nrOom;
        this["_onRequestToken"](f);
      } else {
        var s = {};
        s.code = 1;
        s.message = kp.yFtEs;
        this["_onRequestToken"](s);
      }
    }
  }, {
    key: kp.IjWus,
    value: function (t, r, n, e) {
      function c_1691913421943(t, r, n, e) {
        return Pp(t - 368, r - 384, r - 480, e);
      }

      function f(t, r, n, e) {
        return Ip(n, r - 0, n - 177, e - 182);
      }

      return ["".concat(n), "".concat(this["_fingerprint"]), "".concat(this._appId), "".concat(this._isNormal ? this._token : this["_defaultToken"]), "".concat(t), "".concat(this._version), "".concat(r), "".concat(e)].join(";");
    }
  }, {
    key: "__genSign",
    value: function (t, r) {
      var n;

      function s(t, r, n, e) {
        return Pp(t - 442, r - 432, n - -350, e);
      }

      function v(t, r, n, e) {
        return Ip(r, r - 407, n - 265, e - 459);
      }

      var l = kp.UdVfD(mg, r).call(r, function (t) {
        function s_1691913421943(t, r, n, e) {
          return v(0, e, n - 112, r - -11);
        }

        return kp.dkupc(t.key, ":") + t.value;
      }).join("&"),
          h = kp.MmKKy(Db, kp.TWGdv(kp.KjUbg(t, l), t)).toString(_b);
      kp.Yirbv(Ax, this._debug, kp.TCZdg(ng, n = kp.FBmsZ.concat(l, kp.bwNPA)).call(n, h));
      return h;
    }
  }, {
    key: kp.brLRh,
    value: function () {
      var T = {
        LSvAj: function (t, r) {
          return kp.Ejkbs(t, r);
        },
        GhRtB: kp.lwzrb,
        pTcuX: function (t, r) {
          return kp.VSvaU(t, r);
        },
        VVKjt: function (t, r) {
          return kp.VSvaU(t, r);
        },
        wbbqe: kp.SpeMU,
        wtjjX: "__requestDeps use cache fp, fp:",
        Mhrqn: function (t, r) {
          return kp.EqITg(t, r);
        },
        aaVsD: kp.zfLWL,
        lNUYJ: kp.PuZWk,
        bXGGN: function (t, r, n) {
          return kp.dPhEj(t, r, n);
        },
        uTJUk: kp.GuSKa
      };

      function I(t, r, n, e) {
        return Pp(t - 432, r - 231, r - -498, n);
      }

      var P = Nv(Py.mark(function D() {
        var Lr = {
          qyoKK: function (t, r, n) {
            return t(r, n);
          },
          nCdLz: function (t, r, n) {
            return t(r, n);
          },
          OfOEV: function (t, r) {
            return T.LSvAj(t, r);
          },
          kGCnT: "__requestDeps, storageFormatVersion:",
          ZysVW: T.GhRtB,
          BSXnP: function (t, r) {
            return t !== r;
          },
          clwqk: function (t, r) {
            return T.pTcuX(t, r);
          },
          UVjfk: function (t, r) {
            return T.VVKjt(t, r);
          },
          LBslZ: function (t, r) {
            return T.pTcuX(t, r);
          },
          yJrxz: T.wbbqe,
          tjXUW: T.wtjjX,
          nRIBO: function (t, r) {
            return T.Mhrqn(t, r);
          },
          nXkYl: T.aaVsD,
          DWQzf: T.lNUYJ,
          EowmC: function (t, r, n) {
            return T.bXGGN(t, r, n);
          },
          amckF: T.uTJUk
        };

        function jr(t, r, n, e) {
          return I(t - 227, n - 416, t);
        }

        function Or(t, r, n, e) {
          return I(t - 74, e - -3, r);
        }

        var Mr,
            Er,
            kr,
            Tr,
            Ir = this;
        return Py.wrap(function (t) {
          var l = function (t, r, n) {
            return Lr.qyoKK(t, r, n);
          };

          function h(t, r, n, e) {
            return jr(t, 0, n - 504);
          }

          function p(t, r, n, e) {
            return jr(n, 0, r - 551);
          }

          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                if (Er = hx.getSync(this["_storageFormatVersionKey"]), Lr.nCdLz(Ax, this._debug, Lr.OfOEV(ng, Mr = Lr.kGCnT.concat(Er, Lr.ZysVW)).call(Mr, this["_formatVersion"])), (!Er || Lr.BSXnP(Er, this["_formatVersion"])) && (hx.removeSync(this["_storageFpKey"]), lx.removeSync(this["_storagetokenKey"]), hx.removeSync(this["_storageAlgnKey"]), hx.setSync(this["_storageFormatVersionKey"], this["_formatVersion"], {
                  expire: 365 * Lr.clwqk(3600, 24)
                })), this["_fingerprint"] = hx.getSync(this["_storageFpKey"]), this["_fingerprint"] ? Lr.nCdLz(Ax, this._debug, Lr.tjXUW.concat(this["_fingerprint"])) : (this["_fingerprint"] = Xb(), hx.setSync(this["_storageFpKey"], this["_fingerprint"], {
                  expire: Lr.UVjfk(Lr.LBslZ(3600, 24), 365)
                }), Lr.nCdLz(Ax, this._debug, Lr.yJrxz.concat(this._fingerprint))), kr = zb.stringify(wb.parse(lx.getSync(this["_storagetokenKey"]) || "")), Tr = zb.stringify(wb.parse(hx.getSync(this["_storageAlgnKey"]) || "")), !Lr.nRIBO(kr, Tr)) {
                  t.next = 12;
                  break;
                }

                this["__parseAlgorithm"](kr, Tr);
                Ax(this._debug, Lr.nXkYl.concat(this._token));
                return t.abrupt(Lr.DWQzf);

              case 12:
                Lr.EowmC(Ax, this._debug, "__requestDeps, start __requestAlgorithm, fp:".concat(this["_fingerprint"]));
                this["__requestAlgorithm"]().catch(function (t) {
                  var f, s;

                  function v_1691913421945(t, r, n, e) {
                    return p(0, t - -479, r);
                  }

                  l(Ax, Ir._debug, ("__requestDeps request token fa" + (f = -790, s = -795, p(0, f - -1860, s) + "r: ")).concat(t));
                });
                Ax(this._debug, Lr.amckF.concat(this["_fingerprint"]));

              case 15:
              case "end":
                return t.stop();
            }
          }
        }, D, this);
      }));

      function W(t, r, n, e) {
        return Ip(t, r - 424, n - 225, r - 1246);
      }

      return function () {
        return P.apply(this, arguments);
      };
    }()
  }, {
    key: kp.cdEeS,
    value: function () {
      var s = {
        YtcVu: kp.Frucd,
        ryQMm: function (t, r, n) {
          return t(r, n);
        },
        jvYtZ: function (t, r) {
          return kp.PvmKF(t, r);
        },
        AuDDs: function (t, r) {
          return kp.jTRtB(t, r);
        },
        efBJM: function (t, r) {
          return kp.dnkDV(t, r);
        },
        SzVqC: kp.GbHtS,
        SEdXc: kp.gLyRt
      },
          v = kp.Ejkbs(Nv, Py.mark(function t() {
        var r,
            n,
            f,
            v,
            h,
            p,
            d,
            y,
            g,
            jr = {
          eMUcN: s.YtcVu,
          mobyl: function (t, r, n) {
            return s.ryQMm(t, r, n);
          },
          EPkBC: "__requestAlgorithm request success!, token:",
          evNrH: function (t, r) {
            return s.jvYtZ(t, r);
          },
          hmtIu: function (t, r) {
            return s.AuDDs(t, r);
          },
          hbakm: function (t, r) {
            return s.efBJM(t, r);
          },
          LUkvp: ", storageFp:",
          fiSVY: s.SzVqC,
          YDuOI: s.SEdXc,
          INFHC: "0!@",
          SIrAc: "l1fl",
          LZhAF: function (t, r, n) {
            return t(r, n);
          },
          kGicU: "end"
        },
            Or = this;

        function Mr(t, r, n, e) {
          return l(t, r - 87, n - 268, n - 123);
        }

        function Er(t, r, n, u) {
          return l(n, r - 85, n - 296, r - 677);
        }

        return Py.wrap(function (t) {
          function u_1691913422001(t, r, n, e) {
            return Er(0, e - -716, r);
          }

          function a_1691913422002(t, r, n, e) {
            return Mr(e, r - 328, t - 666);
          }

          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                t.next = 2;
                return jr.hbakm(b_, 0);

              case 2:
                (r = t.sent).ai = this._appId;
                r.fp = this["_fingerprint"];
                n = bg(r, null, 2);
                Ax(this._debug, jr.YDuOI.concat(n));
                f = Mb.encrypt(n, zb.parse(["wm", jr.INFHC, "w-", "s#l", jr.SIrAc, "o("].join("")), {
                  iv: zb.parse(["01", "02", "03", "04", "05", "06", "07", "08"].join(""))
                });
                v = f.ciphertext.toString();
                h = this["_fingerprint"];
                p = this._appId;
                d = this._version;
                y = this._timeout;
                g = this._debug;
                t.next = 16;
                var c = {};
                c["fingerprint"] = h;
                c.appId = p;
                c.version = d;
                c.timeout = y;
                c.env = v;
                c.debug = g;
                return jr.LZhAF(ow, c, this["_onRequestTokenRemotely"]).then(function (t) {
                  var n = t.algo,
                      o = t.token,
                      i = t.fp;

                  function c_1691913421968_1691913422003(t, r, n, o) {
                    return a_1691913422002(t - 127, r - 20, 0, n);
                  }

                  function f_1691913422003(t, n, e, o) {
                    return u_1691913422001(0, e, 0, n - -47);
                  }

                  Or["__parseAlgorithm"](o, n);
                  var s,
                      v,
                      l = hx.getSync(Or["_storageFpKey"], 1);

                  if (!i || l && i === l) {
                    var y = Or["__parseToken"](o, 13, 15);
                    var x = Hg(y, 16);
                    var m = jr.evNrH(jr.hmtIu(x, 60), 60);
                    var d = {};
                    d.expire = m;
                    hx.setSync(Or["_storagetokenKey"], wb.stringify(zb.parse(o)), d);
                    var g = {};
                    g.expire = m;
                    lx.setSync(Or["_storageAlgnKey"], wb.stringify(zb.parse(n)), g);
                    jr.mobyl(Ax, Or._debug, jr.EPkBC.concat(o));
                  } else {
                    Ax(Or._debug, jr.hbakm(ng, s = jr.hbakm(ng, v = "__requestAlgorithm request success!,  but not save token:".concat(o, jr.LUkvp)).call(v, l, jr.fiSVY)).call(s, i));
                  }
                });

              case 16:
              case jr.kGicU:
                return t.stop();
            }
          }
        }, t, this);
      }));

      function l(t, r, n, e) {
        return Ip(t, r - 125, n - 60, e - 151);
      }

      return function () {
        function e(e, o, i, u) {
          return l(u, o - 499, i - 407, i - 1453);
        }

        return v.apply(this, arguments);
      };
    }()
  }, {
    key: "__checkParams",
    value: function (t) {
      function m(t, r, n, e) {
        return Pp(t - 16, r - 56, r - 241, t);
      }

      function x(t, r, n, e) {
        return Pp(t - 333, r - 198, e - 237, n);
      }

      var S = {
        wKHkS: function (t, r) {
          return t(r);
        }
      };
      var C, z, A;
      var w = null;
      var _ = null;

      if (!this._appId) {
        var b = {};
        b.code = yb["APPID_ABSENT"];
        b.message = "appId is required";
        _ = b;
      }

      if (!kp.VmEHo(Sw, t)) {
        var D = {};
        D.code = yb["UNSIGNABLE_PARAMS"];
        D.message = kp.YVgIm;
        _ = D;
      }

      if (Sw(r = t) && !Wm(r).length) {
        var B = {};
        B.code = yb["UNSIGNABLE_PARAMS"];
        B.message = kp.IIBtU;
        _ = B;
      }

      if (kp.aQSrQ(bx, t)) {
        var j = {};
        j.code = yb["UNSIGNABLE_PARAMS"];
        j.message = "params contains reserved param name.";
        _ = j;
      }

      if (_) {
        this._onSign(_);

        return null;
      }

      w = kp.SZJya(Vg, C = mg(z = kp.ylllf(Tm, A = Wm(t)).call(A)).call(z, function (r) {
        function h_1691913421969(t, r, n, e) {
          return x(t - 181, r - 319, e, n - -1185);
        }

        var p = {};
        p.key = r;
        p.value = t[r];
        return p;
      })).call(C, function (t) {
        function r(t, r, n, e) {
          return m(e, t - -635);
        }

        return S.wKHkS(xx, t.value);
      });

      if (kp.LgGSH(w.length, 0)) {
        var L = {};
        L.code = yb["UNSIGNABLE_PARAMS"];
        L.message = kp.eYjJe;

        this._onSign(L);

        return null;
      }

      return w;
    }
  }, {
    key: kp.fgEHx,
    value: function (t, r) {
      var e = "1|6|3|0|2|5|4".split("|");

      function o(t, r, n, e) {
        return Pp(t - 462, r - 199, n - 80, t);
      }

      function u(t, r, e, o) {
        return Ip(r, r - 38, e - 405, t - 792);
      }

      var c = "";
      var z = kp.Wzsfy(Km);
      var v = pb(z, kp.qbgpB);
      var a = kp.TWGdv(v, "04");

      if (this._isNormal) {
        var f = {
          code: 0
        };
        f.message = kp.nrOom;
        this["_onRequestToken"](f);
        c = this.__genKey(this._token, this["_fingerprint"], a, this._appId, this.algos).toString() || "";
      } else {
        this["_defaultToken"] = kp.AqAHu(a_, this["_fingerprint"]);
        var s = {
          code: 1
        };
        s.message = kp.yFtEs;
        this["_onRequestToken"](s);
        c = this["__genDefaultKey"](this["_defaultToken"], this["_fingerprint"], a, this._appId);
      }

      var C = {};

      if (!c) {
        if (this._token || this["_defaultToken"]) {
          var l = {};
          l.code = yb["GENERATE_SIGNATURE_FAILED"];
          l.message = "generate key failed";

          this._onSign(l);
        } else {
          var h = {};
          h.code = yb["TOKEN_EMPTY"];
          h.message = kp.tjKSX;

          this._onSign(h);
        }

        return C;
      }

      var b = this.__genSign(c, t);

      var y = kp.vJFed(mg, t).call(t, function (t) {
        return t.key;
      }).join(",");

      var _ = this["__genSignParams"](b, z, v, r);

      var g = {};
      g.key = c;
      g.signStr = b;
      g._stk = y;
      g._ste = 1;
      g.h5st = _;
      Ax(this._debug, kp.KKJPZ(kp.nBWrf, bg(g, null, 2)));
      var m = {};
      m._stk = y;
      m._ste = 1;
      m.h5st = _;
      C = m;
      var w = {};
      w.code = 0;
      w.message = kp.PvUhB;

      this._onSign(w);

      return C;
    }
  }, {
    key: kp.ZiQKL,
    value: function () {
      var s = kp.VmEHo(Nv, Py.mark(function t() {
        function K_1691913422004(t, r, n, e) {
          return v_1691913421971(t - 191, r - 283, e - -198, t);
        }

        var H,
            R,
            F,
            U = {
          txRYb: function (t, r) {
            return kp.KRyWp(t, r);
          },
          ABTlX: function (t, r, n, e) {
            return kp.TZPTg(t, r, n, e);
          },
          nyWvb: function (t, r, n) {
            return kp.ANOsz(t, r, n);
          },
          UjTex: kp.jdBkS,
          MVhun: "HL4|FW#Chc3#q?0)",
          EArIC: kp.PuZWk
        };

        function Z_1691913422005(t, r, n, e) {
          return v_1691913421971(t - 123, r - 300, n - -12, t);
        }

        return Py.wrap(function (t) {
          function I_1691913421970_1691913422006(t, r, n, e) {
            return K_1691913422004(r, r - 176, 0, t - 200);
          }

          function P_1691913422006(t, r, n, e) {
            return Z_1691913422005(e, r - 338, n - -1441);
          }

          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                t.next = 2;
                return U.txRYb(b_, 1);

              case 2:
                (H = t.sent).fp = this["_fingerprint"];
                R = U.ABTlX(bg, H, null, 2);
                U.nyWvb(Ax, this._debug, U.UjTex.concat(R));
                F = Mb.encrypt(R, zb.parse(U.MVhun), {
                  iv: zb.parse(["01", "02", "03", "04", "05", "06", "07", "08"].join(""))
                });
                return t.abrupt(U.EArIC, F.ciphertext.toString());

              case 8:
              case "end":
                return t.stop();
            }
          }
        }, t, this);
      }));

      function v_1691913421971(t, r, n, e) {
        return Ip(e, r - 409, n - 265, n - 1442);
      }

      return function () {
        function r_1691913421971(r, n, e, o) {
          return v_1691913421971(285, n - 302, o - -372, e);
        }

        return s.apply(this, arguments);
      };
    }()
  }, {
    key: kp.ojlLt,
    value: function () {
      var Z = {
        rBjtE: function (t, r) {
          return kp.eqvzb(t, r);
        },
        vAKUO: kp.PuZWk,
        NAVMu: function (t, r, n) {
          return kp.sGKoB(t, r, n);
        },
        kBWBv: "sign elapsed time!",
        btxJK: function (t, r) {
          return kp.dAiwc(t, r);
        },
        QWVPo: function (t) {
          return kp.WKoxG(t);
        },
        KPeAZ: kp.wtzsw
      },
          X = kp.LxYVU(Nv, Py.mark(function t(r) {
        var n, e, R, F;

        function tt(t, r, n, e) {
          return V(r - -907, r - 195, n - 11, e);
        }

        return Py.wrap(function (t) {
          function o_1691913422006(t, r, n, e) {
            return tt(0, r - -634, n - 396, n);
          }

          function i_1691913422007(t, r, n, e) {
            return tt(0, n - 1288, n - 396, r);
          }

          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                if (t.prev = 0, n = Km(), e = this["__checkParams"](r), !Z.rBjtE(e, null)) {
                  t.next = 5;
                  break;
                }

                return t.abrupt(Z.vAKUO, r);

              case 5:
                t.next = 7;
                return this["__requestDeps"]();

              case 7:
                t.next = 9;
                return this.__collect();

              case 9:
                R = t.sent;
                F = this.__makeSign(e, R);
                Z.NAVMu(Ax, this._debug, Z.kBWBv.concat(Z.btxJK(Z.QWVPo(Km), n), "ms"));
                return t.abrupt("return", Jy({}, r, F));

              case 15:
                t.prev = 15;
                t.t0 = t.catch(0);
                var V = {};
                V.code = yb["UNHANDLED_ERROR"];
                V.message = "unknown error";

                this._onSign(V);

                return t.abrupt(Z.vAKUO, r);

              case 19:
              case Z.KPeAZ:
                return t.stop();
            }
          }
        }, t, this, [[0, 15]]);
      }));

      function V(t, r, n, o) {
        return Pp(t - 97, r - 80, t - 199, o);
      }

      function Y(t, r, n, e) {
        return Ip(r, r - 52, n - 150, t - 341);
      }

      return function (e) {
        function i_1691913421972(t, r, n, e) {
          return Y(t - 1460, r, n - 150);
        }

        return X.apply(this, arguments);
      };
    }()
  }]);
  return Tp;
}(),
    S_ = {};

S_.debug = !1;
S_.preRequest = !1;
S_.timeout = 2;
D_.settings = S_;
D_;
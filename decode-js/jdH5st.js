const CryptoJS = require("crypto-js");

function dx() {
  var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = r.size,
    e = void 0 === n ? 10 : n, o = r.dictType, i = void 0 === o ? "number" : o, u = r.customDict, a = "";
  if (u && "string" == typeof u)
    t = u;
  else
    switch (i) {
      case "alphabet":
        t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      case "number":
      default:
        t = "0123456789"
    }
  for (; e--;)
    a += t[Math.random() * t.length | 0];
  return a
}
function pb(t) {
  function generateTimeReqestNumber() {
    var date = new Date(t);
    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds()) + pad2(date.getMilliseconds());
  }

  function pad2(n) {
    return n < 10 ? '0' + n : n
  }

  return generateTimeReqestNumber()
}

var algos = {
  SHA512: function (str) {
    return CryptoJS.SHA512(str).toString();

  }
}

function __genKey(tk, fp, ts, ai, algo) {
  var rd = 'mSG1CtL41Upx';
  var str = "".concat(tk).concat(fp).concat(ts).concat(ai).concat(rd);
  return algo.SHA512(str)
}
function __genSign(t, r) {
  var n;
  var l = Array.prototype.map.call(r, function (t) {
      return t.key + ":" + t.value;
    }).join("&"),
    h = CryptoJS.MD5(t + l + t).toString();
  n = "__genSign, paramsStr:".concat(l, ", signedStr:")
  //Ax(false, n+h);  //Ax为日志接口
  return h;

}
function __genSignParams(t, r, n, e) {
  return ["".concat(n), "".concat(fingerPrint), "".concat(appid), "".concat(jd_tk), "".concat(t), "".concat(version), "".concat(r), "".concat(e)].join(";");
}
function get_AES_cipherText() {

  let text = `{
  "sua": "Windows NT 10.0; Win64; x64",
  "pp": {
    "p2": "jd_57f0869b40c7e"
  },
  "extend": {
    "pm": 0,
    "wd": 0,
    "l": 0,
    "ls": 5,
    "wk": 0
  },
  "random": ${dx({
    "size": 10,
    "dictType": "max",
    "customDict": null
  })},
  "referer": "https://item.jd.com/100003671746.html",
  "v": "v1.6.1",
  "fp": "39gm5i6z6zn6nt68"
}`
  console.log(text)

  var key = CryptoJS.enc.Utf8.parse(unescape(encodeURIComponent("HL4|FW#Chc3#q?0)")));
  var iv = CryptoJS.enc.Utf8.parse(unescape(encodeURIComponent("0102030405060708")));
  // console.log(key, iv)
  let ans = CryptoJS.AES.encrypt(text, key, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    "iv": iv
  }).ciphertext.toString()
  console.log(ans);
  return ans


}

var jd_tk = "tk03wa3611be618n0wTHHoft1TvSaZZv4J37Wp7On5ug6g1y3k4iZxt7dE8Ye2wrFMwVwmRjU05d4anZMj2IPE-uMjn2"

var fingerPrint = "39gm5i6z6zn6nt68"

var appid = "fb5df"

var version = "4.1"

function get_jd_params() {


  var c = "";
  var z = new Date().getTime();
  var v = pb(z);
  var a = v + "04";

  var f = {
    code: 0
  };
  f.message = "use normalToken";
  //this["_onRequestToken"](f); //日志点，_onxxxxx()
  console.log(jd_tk, fingerPrint, a, appid, algos)
  c = __genKey(jd_tk, fingerPrint, a, appid, algos) || "";
  console.log(c)
  // console.log("6589399b4bfaca79b5d885f3d4fad3c116dbd7411a2a432fe5a841460499d8af06a20b3b5b2a0eed1e23ea4da0021bb74e0115e7e46f08cdfa254fb10897f35c".length, c.length);
  // console.log(c === "6589399b4bfaca79b5d885f3d4fad3c116dbd7411a2a432fe5a841460499d8af06a20b3b5b2a0eed1e23ea4da0021bb74e0115e7e46f08cdfa254fb10897f35c")


  var n = {
    "skuId": 100008169496,
    "cat": "16750,16751,16756",
    "area": "22_1930_50948_71603",
    "shopId": "1000405041",
    "venderId": 1000405041,
    "paramJson": "{\"platform2\":\"1\",\"specialAttrStr\":\"p0ppppppppp2pp1pppppppppppp\",\"skuMarkStr\":\"00\"}",
    "num": 1,
    "bbTraffic": ""
  }

  var s = JSON.stringify(n)
    , aa = z - 50
    , rr = {
    appid: "pc-item-soa",
    functionId: "pc_detailpage_wareBusiness",
    client: "pc",
    clientVersion: "1.0.0",
    t: aa,
    body: s
  };

  var d = JSON.parse(JSON.stringify(rr));
  d.body = CryptoJS.SHA256(s).toString()


// var C = {};
  var t = [
    {
      "key": "appid",
      "value": "item-v3"
    },
    {
      "key": "body",
      "value": d.body
    },
    {
      "key": "client",
      "value": "pc"
    },
    {
      "key": "clientVersion",
      "value": "1.0.0"
    },
    {
      "key": "functionId",
      "value": "recDivinerApi"
    },
    {
      "key": "t",
      "value": a
    }
  ]

// c = "6589399b4bfaca79b5d885f3d4fad3c116dbd7411a2a432fe5a841460499d8af06a20b3b5b2a0eed1e23ea4da0021bb74e0115e7e46f08cdfa254fb10897f35c"
  var b = __genSign(c, t);
  console.log("__genSign->", b)
// console.log(b==="1b1e7029d941c9395fa290ac63b77311")

  var y = t.map(function (t) {
    return t.key;
  }).join(",");
  console.log(y)

  var r = get_AES_cipherText()
  var _ = __genSignParams(b, z, v, r);

  var g = {};
  g.key = c;
  g.signStr = b;
  g._stk = y;
  g._ste = 1;
  g.h5st = _;
// Ax(this._debug, kp.KKJPZ(kp.nBWrf, bg(g, null, 2)));
  var m = {};
  m._stk = y;
  m._ste = 1;
  m.h5st = _;
  console.log(m.h5st, m.h5st.length)

  rr.h5st = _
  rr['x-api-eid-token'] = 'jdd03LK4YZNCK3LLWYD4GERHEGQ6XB7ARKDWHHEACG7NO72IBKK6WLJSLZCZXIVMER2IPOB366TDYKGDPUA7M3OWEAKEXOIAAAAMJ55FX2GQAAAAADCSU4GEK2D7AX4X'
  rr['loginType'] = '3'
  rr['uuid'] = '122270672.1682783299125347623149.1682783299.1691933614.1691935863.11'
  return rr
}

console.log(get_jd_params());
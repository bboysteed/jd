
import CryptoJS from 'crypto-js';


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
  "random": "Z7c8NWGOhA",
  "referer": "https://item.jd.com/100003671746.html",
  "v": "v1.6.1",
  "fp": "39gm5i6z6zn6nt68"
}`



var key = CryptoJS.enc.Utf8.parse(unescape(encodeURIComponent("HL4|FW#Chc3#q?0)")));
var iv = CryptoJS.enc.Utf8.parse(unescape(encodeURIComponent("0102030405060708")));
console.log(key,iv)
console.log(CryptoJS.AES.encrypt(text,key,{
   mode: CryptoJS.mode.CBC,
   padding: CryptoJS.pad.Pkcs7,
  "iv":iv
}).ciphertext.toString());
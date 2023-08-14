# `j`东`h5st`参数多局部多次`ob`加密（`js_security_v3_0.1.4.js`）

---

**大家好呀，我是你们的好兄弟，【星云`horseAK`】，今天的主题真的是千呼万唤始出来，某东东的`h5st`参数，这个加密的`js`文件使用了`obfuscator`进行了混淆，而且是局部多次加密，不算嵌套，直接进行调试的话，看着确实头疼，没事，且看我一步一步带你还原、手撕这个参数的加密过程，记得关注我，并加入粉丝群呀：`qq群：529528142`**

#### 1.接口预览

![image-20230813234124507](https://s2.loli.net/2023/08/13/eFDnCQ4NRpoLWZi.png)

![image-20230813234248459](https://s2.loli.net/2023/08/13/GsXaqxgQRL6yEMw.png)

#### 2.接口分析

![image-20230813234538524](https://s2.loli.net/2023/08/13/raB5ED3iZdIRFnG.png)

#### 3.`js`调试

- 如何找到加密代码的位置，我列举几个，这个步骤就是经验的问题了，经验充足，就容易定位【/斜眼笑/】

  - 看启动器

    ![image-20230813235350947](https://s2.loli.net/2023/08/13/W4bYHmvFuAltie9.png)

  - 搜关键字
  - 使用`hook`+`debugger`

- 关键位置

![image-20230813235819865](https://s2.loli.net/2023/08/13/Qbn1h3qxcY9y7RZ.png)

![image-20230814000202478](https://s2.loli.net/2023/08/14/ZAgrli6jWUbaqsx.png)

如图，搜索到`h5st`的位置，这里就是典型的`ob`混淆的`switch`控制流平展化混淆，可以跟着我一步一步用`AST`思想使用`@babel`解混淆，当然你也可以直接刚它。

解混淆效果对比：

![image-20230814001108251](https://s2.loli.net/2023/08/14/sdXpqIlwL9o61v4.png)

`h5st`加密部分的解混淆效果：

![image-20230814001315350](https://s2.loli.net/2023/08/14/ATVhn2grEXjabM6.png)

那么我们就得到了，比较关键的加密逻辑如下：

```js
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
```

接下来就是扣代码环节，今天时间有点晚了，后面的内容我会放在下一篇文章里，谢谢~记得加群，精彩内容提前尝鲜哦。

先放一张运行截图：

![image-20230814002149613](https://s2.loli.net/2023/08/14/6QFBqTlj5ngJOUw.png)
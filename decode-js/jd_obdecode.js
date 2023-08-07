import fs from 'fs'
import {parse} from '@babel/parser'
import _generate from '@babel/generator'
import _traverse from '@babel/traverse'
import * as t from '@babel/types'
import * as vm from 'node:vm'
import {VM} from 'vm2'


let encodeFile = 'jd_in.js'
let decodeFile = 'jd_out.js'

const sourceCode = fs.readFileSync(encodeFile, {encoding: 'utf-8'})
const generator = _generate.default
const traverse = _traverse.default

let globalContext = vm.createContext()
let vm2 = new VM({
    allowAsync: false,
    sandbox: globalContext,
})

function virtualGlobalEval(jsStr) {
    return vm2.run(String(jsStr))
}


let ast = parse(sourceCode)
// 清理二进制显示内容
// traverse(ast, {
//     StringLiteral: ({node}) => {
//         delete node.extra
//     },
// })
const updateParamNameVisitor = {
    Identifier(path) {
        if (path.node.name === this.paramName) {
            path.node.name = "x";
        }
    }
};

const MyVisitor = {
    FunctionDeclaration(path) {
        const param = path.node.params[0];
        const paramName = param.name;
        param.name = "x";

        path.traverse(updateParamNameVisitor, {paramName});
    }
};

// traverse(ast,MyVisitor);

// traverse(ast, {
//   enter(path) {
//     if (t.isIdentifier(path.node, { name: "n" })) {
//       path.node.name = "x";
//     }
//   }
// });

let exist_names = ["nw"]
function do_parse_value(path) {
    let name = path.node.callee.name
    if (path.node.callee && exist_names.indexOf(name) !== -1) {

        for (const arg of path.arguments) {
            if (!t.isLiteral(arg)){ //如果不是常量的参数，那么准备去bindings中去寻找

            }
        }

        let old_call = path + ''
        try {
            // 运行成功则说明函数为直接调用并返回字符串
            let new_str = virtualGlobalEval(old_call)
            console.log(`map: ${old_call} -> ${new_str}`)
            call_dict[old_call] = new_str
        } catch (e) {
            // 运行失败则说明函数为其它混淆函数的子函数
            console.log(`sub: ${old_call}`)
        }
    }
}

traverse(ast,{ CallExpression: do_parse_value })


let {code} = generator(ast)
if (code) {
    fs.writeFile(decodeFile, code, () => {
    })
}
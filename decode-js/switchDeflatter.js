import {parse} from '@babel/parser'
import _generate from '@babel/generator'
import _traverse from '@babel/traverse'
import * as t from '@babel/types'
import fs from 'fs'
import * as vm from 'node:vm'
import {VM} from 'vm2'
import {call} from "@babel/traverse/lib/path/context.js";

const generator = _generate.default
const traverse = _traverse.default

function cleanSwitchCode(path) {
  // 扁平控制：
  // for (; ;) {
  // 首先碰断是否符合这种情况
  const node = path.node
  let valid = false
  if (node.test === null && node.init === null && node.update === null) {
    valid = true
  }
  if (!valid) {
    return
  }
  if (!t.isBlockStatement(node.body)) {
    return
  }
  const body = node.body.body
  if (
    !t.isSwitchStatement(body[0]) ||
    !t.isMemberExpression(body[0].discriminant) ||
    !t.isBreakStatement(body[1])
  ) {
    return
  }
  // switch语句的两个变量
  const swithStm = body[0]
  const arrName = swithStm.discriminant.object.name
  const argName = swithStm.discriminant.property.argument.name
  console.log(`扁平化还原: ${arrName}[${argName}]`)
  // 在for上面的节点寻找这两个变量
  let arr = []

  //获取cases的执行顺序
  path.getAllPrevSiblings().forEach((pre_path) => {
    const {declarations} = pre_path.node
    if (!declarations) {
      return
    }
    declarations.forEach((laration)=>{
      let {id, init} = laration
      if (!init){
        return
      }
      if (arrName === id.name) {
        console.log(`[debug] 准备执行:${init.callee.object.value + "." + init.callee.property.name}('|')`)
        // let res = virtualGlobalEval(init.callee.object.object.name + "." + init.callee.object.property.name)
        arr = init.callee.object.value.split("|")
        //pre_path.remove()
      }
      if (argName === id.name) {
        pre_path.remove()
      }
    })

  })

  console.log("【switchDeFlatter】arr：",arr)
  // 重建代码块
  const caseList = swithStm.cases
  let resultBody = []
  arr.map((targetIdx) => {
    // 从当前序号开始直到遇到continue
    let valid = true
    targetIdx = parseInt(targetIdx)
    while (valid && targetIdx < caseList.length) {
      const targetBody = caseList[targetIdx].consequent
      const test = caseList[targetIdx].test
      if (!t.isStringLiteral(test) || parseInt(test.value) !== targetIdx) {
        console.log(`switch中出现乱序的序号: ${test.value}:${targetIdx}`)
      }
      for (let i = 0; i < targetBody.length; ++i) {
        const s = targetBody[i]
        if (t.isContinueStatement(s)) {
          valid = false
          break
        }
        if (t.isReturnStatement(s)) {
          valid = false
          resultBody.push(s)
          break
        }
        if (t.isBreakStatement(s)) {
          console.log(`switch中出现意外的break: ${arrName}[${argName}]`)
        } else {
          resultBody.push(s)
        }
      }
      targetIdx++
    }
  })
  // 替换整个while语句
  // console.log("【switchDeFlatter】替换为：",resultBody)
  path.replaceInline(resultBody)
}




// 读取源代码
const sourceCode = fs.readFileSync("./jd_out.js", { encoding: 'utf-8' })
let ast = parse(sourceCode)

//switchDeFlatter
traverse(ast,{ForStatement:cleanSwitchCode})

//string plus


function stringPlus(path){
  if  (!t.isStringLiteral(path.node.left) || !t.isStringLiteral(path.node.right)){
    return
  }
  count++
  let ans = path.node.left.value + path.node.right.value
  path.replaceWith(t.stringLiteral(ans))
}

let count= 1
while(count!==0) {
  count = 0
  traverse(ast,{BinaryExpression:stringPlus})
}




let {code} = generator(ast, {
    comments: false,
    jsescOption: {minimal: false},
  })
// 输出代码
if (code) {
  fs.writeFile('switch_jd_out.js', code, () => { })
}




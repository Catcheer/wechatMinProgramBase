/*
 * @Description:
 * @Author: zhangchuangye
 * @Date: 2020-12-04 16:37:58
 */

const through = require("through2"); // // through2 是一个对 node 的 transform streams 简单封装
const path = require("path");
const fs = require("fs");


const  constantPath=path.resolve(__dirname,'../dist/utils/constant.js')
const headCommonent = `/**
*createBy catcheer 
*/`;
  const start = `
module.exports =`;

module.exports = function (env = "dev") {
  return through.obj((file, encoding, cb) => {
    const constant= JSON.parse(file.contents.toString())
    let host = constant[env];
    delete constant.dev;
    delete constant.test;
    delete constant.prod;

    let newConstantJson = Object.assign({}, constant, host);

    let str = headCommonent + start + JSON.stringify(newConstantJson, "", 2);
   fs.writeFileSync(constantPath,str)
    cb(null);
  });
};

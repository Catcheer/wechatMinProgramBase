/*
 * @Description: 
 * @Author: zhangchuangye
 * @Date: 2020-12-03 17:23:00
 */




const { src, dest ,series,parallel,watch} = require('gulp');
const  clean = require('gulp-clean');
const  less = require('gulp-less');
const rename = require('gulp-rename')
const changed = require('gulp-changed') // 仅仅传递更改过的文件

const fs=require('fs')


const DIST='dist/'

const allWxssPath=["src/**/*.less"]
const allJsPath=["src/**/*.js"]
const allWxmlPath=["src/**/*.wxml"]
const allJsonPath=["src/**/*.json"]
const allWxsPath=["src/**/*.wxs"]


function wxss(){
      return src(allWxssPath)
      .pipe(less())
      .pipe(changed(DIST))
      .pipe(rename({
         extname: '.wxss'
      }))
      .pipe(dest(DIST))
}

function js(){
   return src(allJsPath)
   .pipe(changed(DIST))
   .pipe(dest(DIST))
}

function wxml(){
   return src(allWxmlPath)
   .pipe(changed(DIST))
   .pipe(dest(DIST))
}

function json(){
      return src(allJsonPath)
      .pipe(changed(DIST))
      .pipe(dest(DIST))
}

function wxs(){
   return src(allWxsPath)
   .pipe(changed(DIST))
   .pipe(dest(DIST))
}



function devBuild(cb){
     watch(allJsPath,js)
     watch(allWxmlPath,wxml)
     watch(allJsonPath,json)
     watch(allWxsPath,wxs)
     watch(allWxssPath,wxss)
     console.log('\r\n....start watch....')
     cb()
}

function cleanDist(){
   return src(DIST,{read: false, allowEmpty: true})
            .pipe(clean({allowEmpty: true}))
}



 exports.default=series(cleanDist,parallel(wxss,js,json,wxml,wxs),devBuild)
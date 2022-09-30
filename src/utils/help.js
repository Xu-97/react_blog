// 日期格式化
export const parseTime =  function(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), "/").replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 随机生成16进制颜色
export const getRandColor = () => {
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  const color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
  return color;
}

export function setRandColor(){
  //使用字符串把十六进制数存起来
  var str='0123456789abcde';
  //用另一个字符串来存储#
  var colorStr='#';
  for(var i=1;i<=6;i++){
    colorStr+=str[parseInt(Math.random()*str.length)];
  }
  return colorStr;
}

// 防抖函数封装
// 防抖函数
export function debounde(fn, wait, immediate) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }
    const callNow = !timeout
    if (immediate) {
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) fn.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        fn.apply(context, args)
      }, wait)
    }
  }
}

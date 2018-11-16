/**
 * 得到鼠标在元素内的坐标
 * @param {object} evt 事件对象
 * @param {object} ele 相对的元素
 */

export function captureMouse(evt, ele) {
  const $ele = $(ele)
  let x = 0,
    y = 0
  if (evt.pageX || evt.pageY) {
    x = evt.pageX
    y = evt.pageY
  } else {
    x = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    y = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }
  x -= $ele.offset().left
  y -= $ele.offset().top
  return { x, y }
}

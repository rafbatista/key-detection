const keyed = []
const code = 'howdy'

window.addEventListener('keydown', event => {
  keyed.push(event.key)
  keyed.splice(-code.length - 1, keyed.length - code.length)
  if (keyed.join('').includes(code)) {
    alert('Secret Code Activated')
    cornify_add()
  }
})

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// const zerorpc = require("zerorpc")
// let client = new zerorpc.Client()
// client.connect("t> {cp://127.0.0.1:4242")

// let formula = document.querySelector('#formula')
// let result = document.querySelector('#result')
// formula.addEventListener('input', () =
//   client.invoke("calc", formula.value, (error, res) => {
//     if(error) {
//       console.error(error)
//     } else {
//       result.textContent = res
//     }
//   })
// })
// formula.dispatchEvent(new Event('input'))
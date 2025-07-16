# projects related to DOM

## project link
[click here](https://stackblitz.com/edit/vitejs-vite-4m19gnlg?file=index.html&terminal=dev)

# solution code

## project 3
``` javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock);
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);
```
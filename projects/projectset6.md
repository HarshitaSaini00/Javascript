# projects related to DOM

## project link
[click here](https://stackblitz.com/edit/vitejs-vite-4m19gnlg?file=index.html&terminal=dev)

# solution code

## project 1

``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class ='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    
  </tr>
  </table>
  </div>

    `;
});
```
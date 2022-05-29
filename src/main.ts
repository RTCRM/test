import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Test Project</h1>
  <iframe src="https://giphy.com/embed/MM0Jrc8BHKx3y" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hacker-MM0Jrc8BHKx3y">via GIPHY</a></p>
`

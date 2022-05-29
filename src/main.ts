import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Test Project</h1>
  <iframe src="https://giphy.com/embed/Rznz8HjrKQAOQ" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-cute-pet-Rznz8HjrKQAOQ">via GIPHY</a></p>
`

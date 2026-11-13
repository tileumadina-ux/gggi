import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Мой React сайт</h1>
      <p>Добро пожаловать на мой первый сайт!</p>
      <button onClick={() => alert('Привет!')}>
        Нажми меня
      </button>
    </div>
  )
}

export default App
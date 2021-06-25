import './App.css';
import { Header } from './Components/Header.js'
import { Content } from './Components/Content'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header name="Sample Project" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

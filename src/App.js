import './App.css';
import { Header } from './Components/Header'
import { Content } from './Components/Content'
import { Footer } from './Components/Footer'


const Nav = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  {name: "Third link", link: "/third"}
]


function App() {
  return (
    <div className="App">
      <Header name="Sample Project" navigation={Nav}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;

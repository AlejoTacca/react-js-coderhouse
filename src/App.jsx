// App.js
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/Navbar/Navbar'; // el componente NavBar
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // El componente ItemListContainer

function App() {
  return (
    <main>
      <NavBar />
      <ItemListContainer />
    </main>
  );
}

export default App;


import MenuLeft from "./components/menu";
import sidebarJsonData from './services/menu/index.json';

function App() {
  return (
    <div className="App">
      <MenuLeft menuData={sidebarJsonData}/>
    </div>
  );
}

export default App;

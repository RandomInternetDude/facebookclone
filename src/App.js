import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />

      <div className="app__body">
        <Sidebar />
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </div>

    </div>
  );
}

export default App;

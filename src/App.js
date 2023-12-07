import './App.css';

import Head from './components/header/head.js';
import Main from './components/main/main.js';
import Float from './components/float-page/float.js';
import Face from './components/face-page/face.js';
import Footer from './components/footer/footer.js';
function App() {
  return (
    <div className="App">
      <Head />
      <Main />
      <Float />
      <h1>What People Are Saying...</h1>
      <Face />
      <Footer />
    </div>
  );
}

export default App;


import { IndexProvider } from './contexts/IndexProvider';
import Header from './components/Header';
import DrawingArea from './components/DrawingArea';
import Toolbox from './components/Toolbox';

function App() {

  return (
    <IndexProvider>

      <Header />
      <DrawingArea />
      <Toolbox />

    </IndexProvider>
  );
}

export default App;


import { DrawingsProvider } from './contexts/DrawingsContext';
import Header from './components/Header';
import DrawingArea from './components/DrawingArea';
import Toolbox from './components/Toolbox';

function App() {

  return (
    <DrawingsProvider>

      <Header />
      <DrawingArea />
      <Toolbox />

    </DrawingsProvider>
  );
}

export default App;

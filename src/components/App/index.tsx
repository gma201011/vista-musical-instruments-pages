import { ResetStyle } from './ResetStyle';
import ArtistPage from '../../pages/Artist';
import { ViewportProvider } from '../../contexts/viewportContext';

const App = () => {
  return (
    <ViewportProvider>
      <ResetStyle />
      <ArtistPage />
    </ViewportProvider>
  );
};

export default App;

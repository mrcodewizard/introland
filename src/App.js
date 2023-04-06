import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import './App.css';
import Topbar from './frontend/components/Topbar';
import MainMenu from './frontend/components/MainMenu';
import Sidebar from './frontend/components/Sidebar';

function App() {
  return (
    <div className="App">
      <Container>
          <Topbar />
          <MainMenu />
      </Container>
    </div>
  );
}

export default App;

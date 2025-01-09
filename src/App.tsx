import './index.css';
import { Colors } from './theme/colors';
import Icon from './components/icon/Icon';
import { Icons } from './theme/icons';

function App() {
  return (
    <>
      <div className='container' style={{ paddingTop: 140 }}>
        <Icon
          color={Colors.indigo400}
          source={Icons.mail}
          size={{ width: 24, height: 24 }}
        />
      </div>
    </>
  );
}

export default App;

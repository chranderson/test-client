import './App.css';
// import { Loader } from '@chranderson/ui';
// import { DingDong } from '@chranderson/ui';
// import { Logo } from '@chranderson/ui';
// import * as UIComponents from '@chranderson/ui';
import { Logo } from './Logo/index';

// console.log(UIComponents);

function App() {
  return (
    <div className="App">
      {/* <DingDong /> */}
      <Logo />
      {/* <Loader show message="doin' a 'lil something.." /> */}
    </div>
  );
}

export default App;

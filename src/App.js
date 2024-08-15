import Logo from './components/Logo/Logo';
import Tag from './components/Tag/Tag';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Logo />

      <Tag text="New Zealand, 2012" />
    </div>
  );
}

export default App;

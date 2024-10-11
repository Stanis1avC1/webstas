import React from 'react';

// import resizeHook from '@hooks/resize';
import styles from './App.css';
// import * as styles from './App.css';

const App = () => {
    return (
        <div className={styles.main} data-testid="app">
            My first application
            <h1>Привіт я стас</h1>
            <a>Привіт</a>
        </div>
    );
};

// export { App };
export default App;

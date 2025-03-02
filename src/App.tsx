import styles from './App.module.css';
import Container from './Container';
import Header from './Header';

function App() {
    return (
        <div className={styles.background}>
            <Header/>
            <Container/>
        </div>

    )
}

export default App

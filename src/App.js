import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import Theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';

function App() {
  return (
    <ThemeProvider theme = {Theme}>
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Theme from './components/styles/Theme';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme = {Theme}>
    <>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;

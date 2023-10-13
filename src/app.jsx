import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Filter } from './components/filter/filter';
import { Form } from './components/form/form';
import { List } from './components/list/list';

import './styles/app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="main__cell">
          <Form />
          <Filter />
        </div>
        <div className="main__cell">
          <List />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

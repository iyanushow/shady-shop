import Header from './components/Header';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Featured from './components/Featured';

const headerData: { id: number; title: string }[] = [
  {
    id: 1,
    title: 'home',
  },
  {
    id: 2,
    title: 'featured',
  },
  {
    id: 3,
    title: 'new',
  },
  {
    id: 4,
    title: 'subscribed',
  },
];
const App = () => {
  return (
    <>
      <Header data={headerData} />
      <main>
        <Hero />
        <Collection />
        <Featured />
      </main>
    </>
  );
};

export default App;

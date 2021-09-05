import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';
import Arrivals from './components/Arrivals';
import Featured from './components/Featured';
import Sponsors from './components/Sponsors';
import NewsLetter from './components/NewsLetter';
import Collection from './components/Collection';
import Offer from './components/Offer';

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
        <Offer />
        <Arrivals />
        <NewsLetter />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
};

export default App;

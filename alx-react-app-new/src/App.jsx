import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; 

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Hosam" age="25" bio="Frontend developer learning React at ALX." />
      <Counter />  
      <Footer />
    </div>
  );
}

export default App;

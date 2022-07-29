import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {

  const monga = '뭔가...';
  const DATA = [
    { id: 1, name: '하나' },
    { id: 2, name: '두나' },
    { id: 3, name: '세나' },
    { id: 4, name: '네나' },
    { id: 5, name: '오나' },
    { id: 6, name: '육나' },
    { id: 7, name: '칠나' },
  ]
  return (
    <>
      <Header monga={monga} member={DATA} />
      <Main />
      <div>div는 component가 아님 - 태그</div>
      <Footer />
    </>
  );
}

export default App;

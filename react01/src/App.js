import Wrapper from "./Wrapper";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
    return (
        <Wrapper>
            <Header />
            <Main dog="강아지" work="밥먹기" />
            <Main dog="댕댕이" work="앉아" />
            <Main dog="멍멍이" work="손줘" />
            <Main dog="바둑이" />
            <Footer />
        </Wrapper>
    )
}

export default App;
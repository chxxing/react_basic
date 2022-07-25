import Test from "./test";
import Nav from "./Nav";

const App = () => {
  // console.log('두번적힌다')
  return (
    <>
      <Test />
      <Test />
      <h1>H1</h1>
      <Nav />
      <Test />
      <Test />
      {/* <h2>에이치투</h2> */}
    </>
  )

}
export default App;
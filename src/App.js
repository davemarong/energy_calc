// IMPORT

// Components
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { SliderMui } from "./components/Slider/SliderMui";

function App() {
  return (
    <>
      <Nav />
      <Header h="h3">Energy calculator</Header>
      <Filters />
      <div style={{ margin: 100 }}></div>
      <SliderMui />
    </>
  );
}

export default App;

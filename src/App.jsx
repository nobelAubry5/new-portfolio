/**
 * @copyright 2024 Aubry Nobel Niyonkuru
 * @license Apache-2.0
 */

/**
 * Components
 */
import Apropos from "./components/Apropos";
import Entete from "./components/Entete";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Entete />
      <main>
        <Hero />
        <Apropos />
      </main>
    </>
  );
};

export default App;

import { GlobalStyles } from './components/GlobalStyles';
import Hero from './components/Hero/Hero';
import Latest from './components/Latest/Latest';
import ComponentsSection from './components/ComponentsSection/ComponentsSection';

function App() {
    return (
        <>
            <GlobalStyles />
            <Hero />
            <Latest />
            <ComponentsSection />
        </>
    );
}

export default App;

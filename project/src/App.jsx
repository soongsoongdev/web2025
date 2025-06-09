import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomeView from './pages/WelcomeView';
import InputView from './pages/InputView.jsx';
import AltitudeView from './pages/AltitudeView.jsx';
import JourneyView from './pages/JourneyView.jsx';

function App() {
    return (
        <BrowserRouter basename="/web2025/project">
            <Routes>
                <Route path="/" element={<WelcomeView/>}/>
                <Route path="/input" element={<InputView/>}/>
                <Route path="/altitude" element={<AltitudeView/>}/>
                <Route path="/journey" element={<JourneyView/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

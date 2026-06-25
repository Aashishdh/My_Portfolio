import { useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
function App() {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {
                loading?<Loader finishLoading={() => setLoading(false)} />:<Home />

            }
        </>
    );
}

export default App;
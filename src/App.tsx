import "./App.css";
import { IModal } from "./components/commons/hooks/useOpenModal";
import Routers from "./routers/routes";

function App(props: IModal) {
    return <Routers {...props} />;
}

export default App;

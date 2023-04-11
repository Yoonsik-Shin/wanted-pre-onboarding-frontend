import { Routes, Route } from "react-router-dom";
import { IModal } from "../components/commons/hooks/useOpenModal";
import MainPage from "../pages";
import SigninPage from "../pages/auth/signin";
import SignupPage from "../pages/auth/signup";
import TodoPage from "../pages/todos";

export default function Routers(props: IModal) {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage {...props} />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="*" element={<div>404페이지</div>} />
        </Routes>
    );
}

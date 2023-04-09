import { Routes, Route } from "react-router-dom";
import SignupPage from "../pages/auth/signup";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<div>메인</div>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<div>로그인</div>} />
            <Route path="/todo" element={<div>TODO</div>} />
            <Route path="*" element={<div>404페이지</div>} />
        </Routes>
    );
}

import { Routes, Route } from "react-router-dom";

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<div>메인</div>} />
            <Route path="/signup" element={<div>회원가입</div>} />
            <Route path="/signin" element={<div>로그인</div>} />
            <Route path="/todo" element={<div>TODO</div>} />
            <Route path="*" element={<div>404페이지</div>} />
        </Routes>
    );
}

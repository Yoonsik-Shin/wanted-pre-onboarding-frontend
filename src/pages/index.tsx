import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <h1>메인페이지</h1>
            <Link to="/signup">회원가입페이지</Link>
            <Link to="/signin">로그인페이지</Link>
            <Link to="/todo">TODO페이지</Link>
        </>
    );
}

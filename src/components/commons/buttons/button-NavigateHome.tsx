import { useNavigate } from "react-router-dom";

export default function NavigateHome() {
    const navigate = useNavigate();

    const onClickNavigateHome = () => {
        navigate("/");
    };

    return <button onClick={onClickNavigateHome}>홈으로가기</button>;
}

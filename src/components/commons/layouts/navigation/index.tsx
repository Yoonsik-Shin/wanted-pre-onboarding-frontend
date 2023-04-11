import { AppBar, styled, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useOpenModal } from "../../hooks/useOpenModal";

export default function LayoutNavigation() {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("access_token");
    const { handleOpen } = useOpenModal();
    const linkList = [
        { to: "/signup", value: "SIGNUP" },
        { to: "/signin", value: "SIGNIN" },
        { to: "/todo", value: "TODO" },
    ];
    const onClickLogout = () => {
        localStorage.removeItem("access_token");
        handleOpen("signout");
        navigate("/signin");
    };

    return (
        <>
            <Navbar position="static">
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    원티드 프리온보딩 프론트엔드 인턴쉽
                </Typography>
                <div style={{ display: "flex" }}>
                    {linkList.map((el) => (
                        <Link
                            key={el.to}
                            to={el.to}
                            style={{
                                padding: "10px",
                                color: "#fff",
                                textDecoration: "none",
                            }}
                        >
                            {el.value}
                        </Link>
                    ))}
                    <div
                        onClick={onClickLogout}
                        style={{
                            display: isLogin ? "block" : "none",
                            cursor: "pointer",
                            padding: "10px",
                        }}
                    >
                        로그아웃
                    </div>
                </div>
            </Navbar>
        </>
    );
}

const Navbar = styled(AppBar)({
    backgroundColor: "skyblue",
});

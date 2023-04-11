import { DeployUrlAxios } from "../../../../commons/lib/deploy-url-axios";
import { IInfoModal } from "./signup.types";

export const onClickSubmit =
    ({ email, password, navigate, handleOpen }: IInfoModal) =>
    async () => {
        try {
            await DeployUrlAxios({
                method: "post",
                url: "/auth/signup",
                headers: { "Content-Type": "application/json" },
                data: { email, password },
            });
            handleOpen("signup");
            navigate("/signin");
        } catch (error) {
            alert(error);
        }
    };

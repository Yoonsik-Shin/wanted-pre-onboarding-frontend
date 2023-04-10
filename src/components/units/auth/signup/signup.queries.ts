import { DeployUrlAxios } from "../../../../commons/lib/deploy-url-axios";
import { IInfo } from "./signup.types";

export const onClickSubmit =
    ({ email, password, navigate }: IInfo) =>
    async () => {
        try {
            await DeployUrlAxios({
                method: "post",
                url: "/auth/signup",
                headers: { "Content-Type": "application/json" },
                data: { email, password },
            });
            navigate("/signin");
        } catch (error) {
            alert(error);
        }
    };

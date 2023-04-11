import { Box, Button, Modal, Typography } from "@mui/material";

export default function CustomModal(props: any) {
    const { open, setOpen, type } = props;

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    const Content = (type: any) => {
        let content = "";

        switch (type) {
            case "signout":
                content = "정상적으로 로그아웃 되었습니다.";
                break;
            case "signin":
                content = "정상적으로 로그인 되었습니다.";
                break;
            case "signup":
                content = "정상적으로 회원가입 되었습니다.";
                break;
        }

        return content;
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {Content(type)}
                </Typography>
                <Button onClick={handleClose}>확인</Button>
            </Box>
        </Modal>
    );
}

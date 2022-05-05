import {
  SpeedDial,
  SpeedDialIcon,
  Modal,
  Typography,
  Box,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import img from "./avtar.jpg";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const UserBox = styled(Box)({
  display: "flex",
  gap: "12px",
  alignItems: "center",
  marginBottom: "20px",
});

function Add() {
  const [open, setopen] = React.useState(false);
  return (
    <>
      <SpeedDial
        onClick={() => setopen(true)}
        ariaLabel="Navigation"
        sx={{ position: "fixed", bottom: 16, left: 30 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      ></SpeedDial>

      <StyledModal
        open={open}
        onClose={() => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: { xs: "300px", sm: "400px" },
          }}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant="h6"
            fontWeight={500}
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={img} />
            <Typography fontWeight={500} variant="span">
              Vilas Mathpati
            </Typography>
          </UserBox>
          <TextField
            sx={{
              width: "100%",
            }}
            id="filled-multiline-static"
            multiline
            placeholder="Whats On Your Mind"
            rows={4}
            variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup variant="contained" fullWidth>
            <Button> POST</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;

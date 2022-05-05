import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
  Badge,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "36%",

  borderRadius: "6px",
  padding: "8px 10px",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  paddingRight: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setopen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box display="flex">
          <FacebookIcon
            color="inherit"
            sx={{
              fontSize: {
                xs: "40px",
                sm: "28px",
              },
            }}
          />
          <Typography
            variant="h6"
            ml={1}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            FACEBOOK
          </Typography>
        </Box>
        <Search>
          <TextField
            fullWidth
            underlineddisabled
            size="small"
            variant="standard"
            id="standard-bare"
            placeholder="Seacrh here..."
            InputProps={{
              disableUnderline: true,
              style: {
                height: "25px",
              },
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon
              color="action"
              sx={{
                color: "white",
              }}
            />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon
              color="action"
              sx={{
                color: "white",
              }}
            />
          </Badge>

          <Avatar
            sx={{
              width: "25px",
              height: "25px",
            }}
            src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7"
            onClick={(e) => setopen(true)}
          />
          <Button variant="contained">Login</Button>
        </Icons>
        <UserBox>
          <Avatar
            onClick={(e) => setopen(true)}
            sx={{
              width: "25px",
              height: "25px",
            }}
            src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7"
          />
          <Typography>Vilas</Typography>
          <MenuIcon
            sx={{
              fontSize: "40px",
              marginLeft: "10px",
            }}
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        open={open}
        onClose={() => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={(e) => setopen(false)}>Profile</MenuItem>
        <MenuItem onClick={(e) => setopen(false)}>My account</MenuItem>
        <MenuItem onClick={(e) => setopen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;

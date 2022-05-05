import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItemAvatar,
  Divider,
  ListItemText,
  ListItem,
} from "@mui/material";

import React from "react";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box
        position="fixed"
        width="550px"
        height="800px"
        style={{
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Typography variant="h6" fontWeight="300">
          Online Friends
        </Typography>
        <Box>
          <AvatarGroup
            max={6}
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "start",
              alignItems: "flex-start",
            }}
          >
            <Avatar
              sx={{ height: 50, width: 50 }}
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="gender"
            />
            <Avatar
              sx={{ height: 50, width: 50 }}
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt="gender"
            />
            <Avatar
              sx={{ height: 50, width: 50 }}
              src="https://randomuser.me/api/portraits/women/74.jpg"
              alt="gender"
            />
            <Avatar
              sx={{ height: 50, width: 50 }}
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="gender"
            />
            <Avatar
              sx={{ height: 50, width: 50 }}
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt="gender"
            />
            <Avatar
              sx={{ height: 50, width: 50 }}
              src="https://randomuser.me/api/portraits/women/74.jpg"
              alt="gender"
            />
            <Avatar
              sx={{ height: 50, width: 50 }}
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="gender"
            />
          </AvatarGroup>
        </Box>

        <Typography variant="h5" fontWeight="300" mt={3}>
          Letest Photos
        </Typography>

        <ImageList
          sx={{ width: "450px", height: "200px", marginTop: "20px" }}
          cols={3}
          rowHeight={160}
          gap="10px"
        >
          <ImageListItem>
            <img src="https://picsum.photos/id/101/2621/1747" alt="some" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/1001/5616/3744" alt="some" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/id/1008/5616/3744" alt="some" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h5" fontWeight="300" mt={3}>
          Letest Conversation
        </Typography>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            marginTop: "15px",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/women/59.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://randomuser.me/api/portraits/women/89.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/women/45.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/women/22.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/women/39.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/women/71.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/women/29.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;

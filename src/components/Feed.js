import { Box } from "@mui/material";
import React from "react";
import Posts from "./Posts";

import { Mydata } from "./Mydata";
import { Key } from "@mui/icons-material";
import { keys } from "@mui/system";

function Feed() {
  //   React.useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/photos")
  //       .then((response) => {
  //         setphoto(response.data);
  //       })
  //       .catch((err) => {
  //         console.log("err");
  //       });
  //   }, []);
  //   console.log(photo);
  console.log(Mydata);

  const Some = Mydata.map((item) => {
    return <Posts {...item} />;
  });

  return (
    <Box flex={4} p={2}>
      {Some}
    </Box>
  );
}

export default Feed;

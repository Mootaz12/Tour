import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { data } from "./data";

export default function App() {
  const [dataTour, setDataTour] = useState(data);

  const handleDelete = (id) => {
    setDataTour((prevDataTour) =>
      prevDataTour.filter((item) => item.id !== id)
    );
  };

  return (
    <Box
      mt={4}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignContent="center"
      gap={4}
    >
      <Typography variant="h2" marginX="auto">
        Our Tour
      </Typography>
      <Grid container justifyContent="center" gap={4}>
        {dataTour.map((dataItem) => (
          <ItemCard
            key={dataItem.id}
            dataItem={dataItem}
            onDelete={handleDelete}
          />
        ))}
      </Grid>
    </Box>
  );
}

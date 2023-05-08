/* eslint-disable react/prop-types */
import "./style.scss";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
export default function ItemCard({ dataItem, onDelete }) {
  const { id, title, desc, img, price } = dataItem;
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prevShow) => !prevShow);
  };
  useEffect(() => {
    const getImage = async () => {
      const { default: newImage } = await import(
        /* @vite-ignore*/ `./assets/images/item-${id}.jpeg`
      );
      setImage((prevImage) => newImage);
    };
    getImage();
  }, [dataItem]);
  const handleDelete = (id) => {
    onDelete(id);
  };
  return (
    <Grid item xs={12} ms={6} md={4} lg={3} className="card">
      <Card>
        <div className="price">{price}</div>
        <CardMedia component="img" src={image} alt={title} height={250} />
        <CardContent>
          <Typography varinat="h3">{title}</Typography>

          <Typography
            varinat="body2"
            className={show ? "" : "description-grid"}
          >
            {desc}
          </Typography>
          <Button onClick={handleShow}>
            {show ? "show less" : "...show more"}
          </Button>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Not Interrested
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

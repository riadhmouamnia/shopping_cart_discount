import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../features/cart/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem({ id, image, title, price, quantity, discount }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ display: "flex", margin: 2 }} variant="outlined">
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit: "cover" }}
        image={image}
        alt={title}
      />
      <CardContent
        sx={{
          flex: "1 0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#eee",
          border: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 250 }}>
            <Typography variant="h6">{title}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2">Quantity</Typography>
              <Button
                variant="text"
                color="error"
                onClick={() => dispatch(decrementQuantity(id))}
                disabled={quantity === 1 ? true : false}
                sx={{ ml: 2 }}
              >
                <RemoveIcon />
              </Button>
              <Typography variant="subtitle2" sx={{ mx: 2 }}>
                {quantity}
              </Typography>
              <Button
                variant="text"
                color="success"
                onClick={() => {
                  dispatch(incrementQuantity(id));
                }}
              >
                <AddIcon />
              </Button>
            </Box>
            <Button
              variant="text"
              color="error"
              onClick={() => dispatch(removeItem(id))}
            >
              Delete
            </Button>
          </Box>
        </Box>
        <Box sx={{ textAlign: "end" }}>
          {discount ? (
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "crimson", textDecoration: "line-through" }}
              >
                £{price.toFixed(2)}
              </Typography>
              <Typography variant="h4" color="text.secondary">
                £{discount.toFixed(2)}
              </Typography>
            </Box>
          ) : (
            <Typography variant="h4" color="text.secondary">
              £{price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CartItem;

import { Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

function ShoppingCart() {
  const { cart, total, subTotal, discount } = useSelector(
    (state) => state.cart
  );
  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        borderRadius: 1,
        p: 2,
        m: 1,
      }}
    >
      <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
        Cart <ShoppingCartOutlinedIcon sx={{ pl: 1 }} />
      </Typography>
      {cart?.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.photoUrl}
          title={item.name}
          price={item.price}
          quantity={item.quantity}
          discount={item.discount}
        />
      ))}
      {cart.length ? (
        <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Subtotal
          </Typography>
          <Typography variant="subtitle2">£{subTotal.toFixed(2)}</Typography>
          <Typography variant="h6" color="text.secondary">
            Discount
          </Typography>
          <Typography variant="subtitle2">£{-discount.toFixed(2)}</Typography>
          <Typography variant="h6" color="text.secondary">
            Total
          </Typography>
          <Typography variant="subtitle2">£{total.toFixed(2)}</Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default ShoppingCart;

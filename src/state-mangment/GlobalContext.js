import AuthContext from "./AuthContext";
import AuthModalContext from "./AuthModalContentContext";
import CartContext from "./CartContext";
import LightBoxModalContext from "./LightBoxModalContext";
import LoaderContext from "./LoaderContext";
import ProductsContext from "./ProductsContext";
import ToastContext from "./ToastContext";

function GlobalContext({ children }) {
  return (
    <ToastContext>
      <LightBoxModalContext>
        <AuthContext>
          <LoaderContext>
            <ProductsContext>
              <CartContext>
                <AuthModalContext>{children}</AuthModalContext>
              </CartContext>
            </ProductsContext>
          </LoaderContext>
        </AuthContext>
      </LightBoxModalContext>
    </ToastContext>
  );
}

export default GlobalContext;

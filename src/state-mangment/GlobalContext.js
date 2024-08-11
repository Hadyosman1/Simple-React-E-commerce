import AuthContext from "./AuthContext";
import AuthModalContext from "./AuthModalContentContext";
import CartContext from "./CartContext";
import LightBoxModalContext from "./LightBoxModalContext";
import LoaderContext from "./LoaderContext";
import ProductsContext from "./ProductsContext";
import ToastContext from "./ToastContext";

function GlobalContext({ children }) {
  return (
    <LightBoxModalContext>
      <ToastContext>
        <AuthContext>
          <LoaderContext>
            <ProductsContext>
              <CartContext>
                <AuthModalContext>{children}</AuthModalContext>
              </CartContext>
            </ProductsContext>
          </LoaderContext>
        </AuthContext>
      </ToastContext>
    </LightBoxModalContext>
  );
}

export default GlobalContext;

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
      <AuthContext>
        <LoaderContext>
          <ProductsContext>
            <CartContext>
              <ToastContext>
                <AuthModalContext>
                  {children}
                </AuthModalContext>
              </ToastContext>
            </CartContext>
          </ProductsContext>
        </LoaderContext>
      </AuthContext>
    </LightBoxModalContext>
  );
}

export default GlobalContext;

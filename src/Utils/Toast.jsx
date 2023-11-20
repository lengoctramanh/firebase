//LIB
import { toast } from "react-toastify";

// CONSTANTS
import { TIME, TOAST } from "../Constants";

// DEFINES OPTION TO CONFIG THE TOAST
const option = {
  autoClose: TIME._3_SECOND, //NOTIFY THE TOSAT WILL CLOSE AUTOMATICALYY AFTER 3SECONS
  closeOnClick: true, // THE TOAST WILL CLOSE WHEN USER CLICK ON IT
  position: TOAST.TOP_RIGHT,
  theme: TOAST.THEME.LIGHT,
};

// FUNTION SHOW A SUCCESS TOAST WITH A MESSAGE
const showSuccessToast = (message) => {
  toast.success(message, option);
};

// FUNTION SHOW A WARNING TOAST WITH A MESSAGE
const showWarningToast = (message) => {
  toast.warning(message, option);
};

// FUNTION SHOW A ERROR TOAST WITH A MESSAGE
const showErrorToast = (message) => {
  toast.error(message, option);
};

export { showErrorToast, showWarningToast, showSuccessToast };

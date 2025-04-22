// constants/toastMessages.ts
import { Position } from 'sonner';

export const toastMessages = {
  auth: {
    loginSuccess: {
      title: "Login Successful",
      description: "Welcome back!",
      type: "success",
      position: "top-right" as Position,
    },
    loginError: {
      title: "Login Failed",
      description: "Invalid username or password.",
      type: "error",
      position: "bottom-center" as Position,
    },
    customAlert: {
      jsx: (id) => (
        <div className="p-4 bg-blue-500 text-white rounded">
          Custom Toast with ID: {id}
        </div>
      ),
      position: "top-center" as Position ,
    },
  },
};

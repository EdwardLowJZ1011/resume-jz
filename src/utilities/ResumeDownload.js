import { saveAs } from "file-saver";
import resume from "../assets/resources/Low Jin Zhang.pdf";
import { rsa, logout, getOTP } from "../Components/rsa";


export const saveFile = async() => {
  const rsaToken = await rsa();
  const logoutToken = await logout();
  const otp = await getOTP();

  (rsaToken || (otp && !logoutToken)) && saveAs(resume, "Edward Low.pdf");
};

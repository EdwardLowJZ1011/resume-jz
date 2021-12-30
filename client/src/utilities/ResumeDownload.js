import { saveAs } from "file-saver";
import resume from "../assets/resources/Low Jin Zhang.pdf";

export const saveFile = () => {
  saveAs(resume, "Edward Low.pdf");
};

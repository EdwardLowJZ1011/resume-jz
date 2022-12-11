import { useContext, useState } from "react";
import "./linkedin.css";
import posts from "../assets/linkedin/linkedinPost.json";

function MyLinkedin() {

    console.log(posts.data.metadata)

    const linkedinPosts = [
    ].slice(1, 5)
    const [pageNo, setPageNo] = useState(5);
    const [pageIndex, setPageIndex] = useState(1);

    return (
    <div class="grid-container">
      {linkedinPosts.slice((pageIndex - 1) * pageNo, pageIndex * pageNo).map(item=><div class="grid-item"><iframe
          src={`https://www.linkedin.com/embed/feed/update/urn:li:share:${item}`}
          height="400"
          width="80%"
          frameborder="0"              
        ></iframe></div>)
    }
    </div>
  );
}

export default MyLinkedin;

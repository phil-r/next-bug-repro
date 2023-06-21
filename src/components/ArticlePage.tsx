import { PreviewData } from "next";

const ArticlePage: React.FC<{ uid: string }> = (props) => {
    return <h1>{props.uid}</h1>;
  };
  
  export default ArticlePage;
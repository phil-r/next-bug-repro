import ArticlePage from "@/components/ArticlePage";
import { GetStaticPaths, GetStaticProps, PreviewData } from "next";

export const getStaticProps: GetStaticProps<{ uid: string }> = ({
  params, previewData
}) => {
  console.log('previewData', previewData);
  
  // over simplification, also not async and stupid typing
  const result: { notFound: true } | { props: { uid: string } } =
    params?.uid === "awesome"
      ? { props: { uid: params?.uid } }
      : { notFound: true };

  return result;
};

export const getStaticPaths: GetStaticPaths<{
  uid: string;
}> = async () => ({
  paths: ["awesome"].map((category) => ({
    params: { uid: category },
    // previewData: 'awesomeData'
  })),
  fallback: false,
});

export default ArticlePage

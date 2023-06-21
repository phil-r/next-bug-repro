import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<{ uid: string }> = ({
  params,
}) => {
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
  })),
  fallback: false,
});

const CategoryPage: React.FC<{ uid: string }> = (props) => {
  return <h1>{props.uid}</h1>;
};

export default CategoryPage;

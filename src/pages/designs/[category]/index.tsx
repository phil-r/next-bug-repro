import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<{ category: string }> = ({
  params,
}) => {
  // over simplification, also not async and stupid typing
  const result: { notFound: true } | { props: { category: string } } =
    params?.category === "awesome"
      ? { props: { category: params?.category } }
      : { notFound: true };

  return result;
};

export const getStaticPaths: GetStaticPaths<{
  category: string;
}> = async () => ({
  paths: ["awesome"].map((category) => ({
    params: { category: category },
  })),
  fallback: false,
});

const CategoryPage: React.FC<{ category: string }> = (props) => {
  return <h1>{props.category}</h1>;
};

export default CategoryPage;

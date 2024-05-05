import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../lib/posts";
import Menu from "../../components/Menu/Menu";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, allPostsData }) {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <>
      <Menu allPostData={allPostsData} />

      <div className="content-holder">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </>
  );
}

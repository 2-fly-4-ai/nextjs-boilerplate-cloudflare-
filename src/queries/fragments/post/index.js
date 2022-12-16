const PostFragment = `
 fragment PostFragment on Post {
  id
  title
  excerpt
  content
  slug
  uri
  featuredImage {
    node {
      ...ImageFragment
    }
  }
 }
`;
export default PostFragment;

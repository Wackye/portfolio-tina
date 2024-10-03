import Layout from "../../components/layout/layout";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";

export default async function WorksPage() {
  const posts = await client.queries.postConnection();

  if (!posts) {
    return null;
  }

  return (
    <Layout>
      <ClientPage posts={posts} />
    </Layout>
  );
}

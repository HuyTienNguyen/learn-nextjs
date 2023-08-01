import { getPostList } from '@/utils/posts';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <>
      <div>Blog List Page</div>;
      <ul>
        {posts.map((e) => (
          <li key={e.id}>
            <Link href={`/posts/${e.id}`}> {e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  //convert markdown files into list of javascript object
  const data = await getPostList()
  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};

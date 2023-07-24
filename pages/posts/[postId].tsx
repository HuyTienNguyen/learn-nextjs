import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostPageProps) {
  const router = useRouter();
  return (
    <div>
      Post Detail Page
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext,
) => {
  console.log('\n GET Static paths', context.params?.postId);
  const postId = context.params.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\n GET Static paths');
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();

  return {
    paths: data.data.map((post) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

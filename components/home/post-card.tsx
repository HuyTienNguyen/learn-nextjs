import * as React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import { Post } from '@/models/post';
import { format } from 'date-fns';

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Typography variant="body1" my={2} sx={{ display: 'flex' }}>
          {format(new Date(post.publishedDate), 'dd MMM yyyy')}

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          {post.tagList.join(', ')}
        </Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}

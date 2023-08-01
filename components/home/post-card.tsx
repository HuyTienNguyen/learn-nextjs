import * as React from 'react';
import { Card, CardContent, Typography, Divider, Box, Stack } from '@mui/material';
import { format } from 'date-fns';
import { Post } from '@/models';

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" textAlign={{xs: 'center', md: 'left'}}>
          {post.title}
        </Typography>
        <Stack direction="row" my={2} justifyContent={{xs:'center', md:'flex-start'}}>
          <Typography variant="body1">
            {format(new Date(post.publishedDate), 'dd MMM yyyy')}
          </Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          <Typography variant="body1">
            {post.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography variant="body2" textAlign={{xs: 'center', md: 'left'}}>{post.description}</Typography>
      </CardContent>
    </Card>
  );
}

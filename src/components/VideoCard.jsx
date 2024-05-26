import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: {md: '320px', xs: '100%'}, borderRadius: 2, boxShadow: 'none' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{width: {md: '320px', xs: '100%'}, height: 180}}
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#3c3c3c', height: 70}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: 16,
              color: '#fff',
              fontWeight: '500'
            }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
              color: 'lightgrey',
              fontWeight: '500'
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: 'lightgrey', ml: '5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
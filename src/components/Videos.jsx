import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {

  if (!videos) return <div>Loading ...</div>

  return (
    <Stack direction={ direction || 'row' } flexWrap={'wrap'} justifyContent={{md: 'start', xs: 'center'}} gap={2}>
      {videos.map((item, idx) => (
        (item.id.videoId || item.id.channelId) && <Box key={idx} sx={{width: { xs: '356px', md: '320px' }}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
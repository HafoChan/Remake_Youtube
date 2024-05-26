import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box sx={{boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px' }, margin: 'auto', mt: marginTop}}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff'}}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2}}
        />
        <Typography sx={{fontSize: 18, fontWeight: '600', display: 'flex', alignItems: 'center'}}>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 16, color: 'lightgrey', ml: '5px'}}/>
        </Typography>
        <Typography sx={{mt: '10px'}}>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>
      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard
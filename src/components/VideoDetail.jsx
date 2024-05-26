import { Box, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'

const VideoDetail = () => {

  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videoRelated, setVideoRelated] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
      .then((data) => setVideoRelated(data.items))
  }, [id])

  if (!videoDetail)
    return <div>Loading ...</div>
  
  const { snippet, statistics } = videoDetail

  return (
    <Box px={2}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} pr={2}>
          <Box sx={{position: 'sticky', top: '78px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={'react-player'} controls/>
            <Typography fontSize={20} fontWeight={'500'} color={'#fff'} py={2} px={3}>
              {snippet?.title}
            </Typography>
            <Stack px={3} direction={'row'} justifyContent={'space-between'}>
              <Link to={`/channel/${snippet.channelId}`}>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 16,
                    color: 'lightgrey',
                    fontWeight: '500'
                  }}
                >
                  {snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: 16, color: 'lightgrey', ml: '5px'}}/>
                </Typography>
              </Link>
              <Stack direction={'row'} gap={'25px'} alignItems={'center'}>
                <Typography sx={{ color: 'lightgrey' }}>
                  {parseInt(statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography sx={{ color: 'lightgrey' }}>
                  {parseInt(statistics.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        
        <Box>
          <Videos videos={videoRelated} direction={'column'} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
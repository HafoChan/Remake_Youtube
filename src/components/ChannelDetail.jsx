import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'

const ChannelDetail = () => {

  const { id } = useParams()

  const [channelDetail, setChannelDetail] = useState(null)
  const [channelVideos, setChannelVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

      fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => setChannelVideos(data?.items))
  }, [id])

  return (
    <Box>
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
          zIndex: 10, 
          height: '200px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={'-90px'}/>
      </Box>
      
      <Box display={'flex'} p={2} sx={{ ml: { sm: '90px' } }}>
        <Videos videos={channelVideos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
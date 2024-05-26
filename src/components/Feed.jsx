import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { SideBar, Videos } from './'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    // sx: 'column', md : 'row' Tự động chuyển thành cột khi thay đổi kích thước màn hình
    <Stack sx={{ flexDirection: { sx: 'column', md : 'row'} }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '1150px' },
          borderRight: '1px solid #3d3d3d',
          px: {sx: 0, md: 2},
          paddingBottom: '40px'
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          sx={{
            mt: 1.5,
            color: '#fff',
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
        >
          Design by SoHan
          {'\n'}
          reference JSM
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '1150px', flex: 2 }}>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const { searchTerm } = useParams()

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '1150px', flex: 2, ml: { sm: '90px' } }}>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed



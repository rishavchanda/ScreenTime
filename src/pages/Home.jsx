import { SearchRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllShows } from '../api/index'
import ShowCard from '../components/ShowCard';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`
const Loader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Top = styled.div` 
  height: 45%;
  width: 100%;
  background-color: #000;
`
const ImageSlider = styled.div`
  height: 100%;
  width: 100%;
`

const Body = styled.div`
  height: 55%;
  padding: 2% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 5% 10%;
  }
`
const SearchBar = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  gap: 10px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 12px 30px;
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 22px;  
    padding: 10px 20px;
    gap: 8px;
  }
`

const Search = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-size: 20px !important;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background-color: transparent;
  outline: none;
  @media (max-width: 768px) {
    font-size: 16px !important;
  }
  `

const ShowWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-content: flex-start;
  margin: 0;
  padding: 40px 0;
  `

const Home = () => {

  // hooks for shows
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllShows().then((res) => {
      setShows(res.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Container>
      {loading ?
        <Loader>
          <CircularProgress />
        </Loader>
        :
        <>
          <Top>
            <ImageSlider></ImageSlider>
          </Top>
          <Body>
            <SearchBar>
              <SearchRounded sx={{ color: 'inherit', fontSize: 'inherit' }} />
              <Search placeholder="Search Tv shows ..."></Search>
            </SearchBar>
            <ShowWrapper
            >
              {
                shows.map((show, id) => {
                  return (
                    <ShowCard showData={show} key={id} />
                  )
                }
                )
              }
              <ShowCard />
            </ShowWrapper>
          </Body>
        </>
      }
    </Container>
  )
}

export default Home
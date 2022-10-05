import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import { ImageList } from '../components/ImageList';

const Home: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const eHandlers = React.useMemo(() => ({
    onAddImageBtnClick: () => {
      setModalIsOpen(true)
    },
    onCloseModal: () => {
      setModalIsOpen(false)
    }
  }), [])

  return (
    <>
      <button onClick={eHandlers.onAddImageBtnClick}>{'Add Image'}</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: 20, rowGap: 20 }}>
        {ImageList()}
        {ImageList()}
        {ImageList()}
      </div>
    </>
  )
}

export default Home

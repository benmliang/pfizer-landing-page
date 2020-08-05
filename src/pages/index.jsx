import React from 'react'
import { Box, Tooltip, IconButton } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export const useStyles = makeStyles((theme) => createStyles({
  root: {
    backgroundColor: '#263E53',
    color: 'white'
  },
  header: {
    height: '56px',
    backgroundColor: '#192B3A',
    fontSize: '20px',
    padding: '12px',
    margin: '0 auto',
    width: '100%',
    textAlign: 'center'
  },
  card: {
    position: 'relative',
    height: '200px',
    width: '290px',
    borderRadius: '1px',
    backgroundColor: '#2A475F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '24px',
    fontSize: '16px',
    flexDirection: 'column',
    '& img': {
      marginBottom: '20px'
    }
  },
  active: {
    '&:hover': {
      boxShadow: '0 7px 8px 0 rgba(0,0,0,0.1)',
      cursor: 'pointer'
    }
  },
  disabled: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: '#596C7C'
  },
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '1360px',
    margin: '16px auto'
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
  }
}))

export default function LandingPage () {
  const classes = useStyles()
  return (
    <Box className={classes.root} minHeight='100vh'>
      <Box className={classes.header}>
        Quality Analysis
      </Box>
      <Box className={classes.cardList}>
        <Box className={[classes.card, classes.disabled]}>
          <img src='/icons/qar.svg' />
          <span>QAR</span>
        </Box>
        <Box className={[classes.card, classes.disabled]}>
          <img src='/icons/qar-lite.svg' />
          <span>QAR Lite</span>
        </Box>
        <Link href='/er'>
          <Box className={[classes.card, classes.active]}>
            <Tooltip className={classes.icon} arrow title='Establish trending of ER’s to ensure the minimum of documentation is completed upon occurrence, and the CAPAs are selected at SQRT meeting.'>
              <IconButton>
                <InfoOutlinedIcon style={{ color: 'white' }}  />
              </IconButton>
            </Tooltip>
            <img src='/icons/er.svg' />
            <span>MIR Trending & Intelligence Portal</span>
          </Box>
        </Link>
        <Link href='/capa'>
          <Box className={[classes.card, classes.active]}>
            <Tooltip className={classes.icon} arrow title='The CAPA Portal illustrates open, upcoming or historical CAPAs for users to facilitate understanding and avoid duplication (in support of SMART CAPAs).'>
              <IconButton>
                <InfoOutlinedIcon style={{ color: 'white' }}  />
              </IconButton>
            </Tooltip>
            <img src='/icons/capa.svg' />
            <span>CAPA Portal</span>
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

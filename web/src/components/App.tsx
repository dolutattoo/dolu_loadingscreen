import React from 'react'
import { Center, Title, Image, Loader, Box } from '@mantine/core'

const App: React.FC = () => (
  <div style={{
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }}>
    <Box
      sx={(theme) => ({
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 50px -12px',
        textAlign: 'center',
        padding: '30px',
        borderRadius: theme.radius.lg
      })}
    >
      <Center>
        <Image
          width='256px'
          height='256px'
          alt='1'
          src='nui://dolu_loadingscreen/web/assets/img/logo.png'
          // src='/src/web/assets/img/logo.png'
          withPlaceholder={true}
          sx={{ marginTop: '10px', marginLeft: '30px', marginRight: '30px' }}
        />
      </Center>

      <Center style={{ paddingTop: '20px' }}>
        <Title color='dark'>{"Dolu FiveM Server"}</Title>
      </Center>


      <Center style={{ paddingTop: '20px' }}>
        <Loader size='xl' variant='bars' color='dark'/>
      </Center>
    </Box>
  </div>
)

export default App

import { Grid, Paper } from '@mui/material';
const data = [{
  label: 'モンブランケーキ',
  imgPath:
    '/service.png',
  price: '¥700'
}, {
  label: 'モンブランケーキ',
  imgPath:
    '/service.png',
  price: '¥700'
}, {
  label: 'モンブランケーキ',
  imgPath:
    '/service.png',
  price: '¥700'
}, {
  label: 'モンブランケーキ',
  imgPath:
    '/service.png',
  price: '¥700'
}, {
  label: 'モンブランケーキ',
  imgPath:
    '/service.png',
  price: '¥700'
}, {
  label: 'モンブランケーキ',
  imgPath:
    '/service.png',
  price: '¥700'
}]

function Service() {
  return (
    <div style={{padding:'2% 10% 5%'}}>
      <div className="font-20-bold" style={{marginBottom:'16px'}}>こちらも一緒にいかがですか？</div>
      <Grid container spacing={3}>
        {data.map((service, index) => {
          return (
            <Grid key={index} item xs='auto' lg='auto'>
              <Paper className='display-flex' sx={{padding:'16px', justifyContent:'space-between', alignItems:'center', }}>
                <img src={service.imgPath} alt={service.label} style={{height:'60px', marginRight:'10px'}}/>
                <div>
                  <div className='font-20-bold'>{service.label}</div>
                  <div className='font-20-bold'>{service.price}</div>
                </div>
              </Paper>
            </Grid>

          )
        }
        )}
      </Grid>
    </div>
  )
}

export default Service;
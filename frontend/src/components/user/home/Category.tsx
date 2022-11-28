import React from 'react';
import { Stack } from '@mui/material'

function Category(props: any) {

  const {categories, selectedIndex, typeChange}  = props;

  return (
    <>
      <Stack spacing={3} direction='row' sx={{ marginBottom: '10px' }}>
        <div onClick={typeChange('all', 0)} style={selectedIndex === 0 ? { borderRadius: 25, color: "rgb(237,191,6)", borderWidth: "0.5px", border: "solid", padding: "3px 15px", marginRight: '5px' } : { padding: "3px 15px", marginRight: "5px" }} className='font-20-bold cursor-pointer' >
        全て
        </div>
        {!!categories && categories.map((category: any, index: number) => {
          return (
            <div key={index} onClick={typeChange(category.title, index + 1)} style={index + 1 === selectedIndex ? { borderRadius: 25, color: "rgb(237,191,6)", borderWidth: "0.5px", border: "solid", padding: "3px 15px", marginRight: '5px' } : { padding: "3px 15px", marginRight: "5px" }} className='font-20-bold cursor-pointer' >
              {category.title}
            </div>
          )
        })}
      </Stack>
    </>
  )
}

export default Category;
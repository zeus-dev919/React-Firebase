

import React, { useState, useEffect } from 'react';
import Category from '../../components/user/home/Category';
import Product from '../../components/user/home/Product';
import Stepper from '../../components/user/home/Stepper';
import { Box, CircularProgress } from '@mui/material';
import { API } from '../../api';
import '../../style/user/user.css';

interface CategoryT {
	title: string | undefined,
	img_path: string | undefined
}

function Home() {
	//get cake data 
	const [menus, setMenus] = React.useState([]);
	//show images for advertisment from resturant
	const [topAdSlider, setTopAdSlider] = useState([]);
	//backend loading
	const [isLoading, setIsLoading] = useState(false);
	//for category select
	const [categories, setCategories] = useState<Array<CategoryT>>([]);
	//when category click, category id accept
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	//when category change, send API request
	const typeChange = (title: string, index: number) => () => {
		setSelectedIndex(index);
		API.get(`/menus/${title}`)
		.then((response) => {
			setIsLoading(false);
			setMenus(response.data);
		});
	  }
	//initial data
	useEffect(() => {
		setIsLoading(true);
		API.get('/weborder')
			.then((res) => {
				console.log(res.data);
			})
		API.get('/menu-type')
			.then((response) => {
				setCategories(response.data);
			});
		API.get('/menus/all')
			.then((response) => {
				setIsLoading(false);
				setMenus(response.data);
			});
		API.get('/top-slider')
			.then((response) => {
				setTopAdSlider(response.data);
			});
	}, []);
	return (
		<>      
			{isLoading ?
				<div style={{ height: '80vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<CircularProgress style={{ width: '60px', height: '60px' }} />
				</div>
				:
				<Box style={{ margin: '0% 10%' }}>
					<Stepper topAdSlider={topAdSlider} />
					<Category categories={categories} selectedIndex = {selectedIndex} typeChange ={typeChange}/>
					<Product menus={menus}  />
				</Box>
			}
		</>

	)
}

export default Home;
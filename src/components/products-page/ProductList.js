import React from 'react'
import { Box, Grid } from '@mui/material'
import FoodCard from '../food-card/FoodCard'
import { useSelector } from 'react-redux'
import CustomePagination from '../pagination/Pagination'
import useMediaQuery from '@mui/material/useMediaQuery'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import {
    Button,
    Stack,
    Typography,
    Tab,
    Tabs,
} from '@mui/material'


export default function ProductList({
    product_list,
    page_limit = 10,
    offset,
    setOffset,
    productType,
    plansDetails
}) {
    const { global } = useSelector((state) => state.globalSettings)
    const matchesToMd = useMediaQuery('(max-width:1200px)')
    const matches = useMediaQuery('(max-width:400px)')

    return (
        <>
        
            {productType === 'campaigns' ? (
                <>
                    {product_list?.products?.map((product) => {
                        if (
                            product?.variations === null ||
                            product?.variations[0]?.values ||
                            product?.variations?.length === 0
                        ) { 
                            return (
                                <Grid
                                    key={product?.id}
                                    item
                                    md={3}
                                    sm={4}
                                    xs={6}
                                   
                                    
                                >
                                    <FoodCard
                                        sm={1}
                                        xs={1}
                                        product={product}
                                        plansInfo={plansDetails}
                                        productImageUrl={
                                            global?.base_urls
                                                ?.campaign_image_url
                                        }
                                    />
                                </Grid>
                            )
                        }
                    })}
                </>
            ) : (
                <>
                    {product_list?.products?.map((product) => {
                        if (
                            product?.variations === null ||
                            product?.variations[0]?.values ||
                            product?.variations?.length === 0
                        ) {
                            return (
                                <Grid
                                    key={product?.id}
                                    item
                                    md={matchesToMd ? 3 : 2.4}
                                    sm={4}
                                    xs={6}
                                >
                                    <FoodCard
                                        product={product}
                                        plansInfo={plansDetails}
                                        productImageUrl={
                                            global?.base_urls?.product_image_url
                                        }
                                    />
                                </Grid>
                            )
                        }
                    })}
                </> 
            )}

            {product_list?.products.length > page_limit ? (
                <Grid item xs={12} sm={12} md={12} align="center">
                    <CustomePagination
                        total_size={product_list?.total_size}
                        page_limit={page_limit}
                        offset={offset}
                        setOffset={setOffset}
                    />
                </Grid>
            ) : (
                ''
            )}
        </>
    )
}

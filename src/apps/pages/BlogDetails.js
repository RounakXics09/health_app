import { Box, Grid2 } from '@mui/material'
import React from 'react'
import CalendarIcon from '../assests/CalendarIcon.png'
import ClockIcon from '../assests/ClockIcon.png'
import arrowUpRight from '../assests/arrowUpRight.png'
import BlogDetailImage from '../assests/BlogDetailImage.svg'
import BlogCards from '../assests/BlogCards.svg'
import BlogDetailsMainImage from '../assests/BlogDetailsMainImage.svg'

function BlogDetails() {
    return (
        <Box className='blog-details-container' sx={{ px: {xs:2,md:5,lg:5}, pt: '145px' }}>
            <Grid2 container columnSpacing={5}>
                <Grid2 size={{ sm: 12, md: 8, lg: 8, xl: 8 }}>
                    <Grid2 className='blog-card-heading'>Blog details</Grid2>
                    <Grid2 sx={{ display: 'flex', py: 2 }}>
                        <Grid2 className='div-center'><img src={CalendarIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> March 10, 2025</Grid2>
                        <Grid2 className='div-center' sx={{ pl: 2 }}><img src={ClockIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> 8:00 AM</Grid2>
                    </Grid2>
                    <Grid2 className='blog-detail-main-heading'>Keto Diet Meal Plan for Beginners</Grid2>
                    <Grid2 className='blog-card-chips' sx={{ display: 'flex' }}>
                        <Grid2 className='blog-chips'>
                            LiftingWeights
                        </Grid2>
                        <Grid2 className='blog-chips'>
                            Weight Loss
                        </Grid2>
                    </Grid2>
                    <Grid2 sx={{ py: 4 }}><img src={BlogDetailsMainImage} height={'100%'} width={'100%'} /></Grid2>
                    <Grid2 className='blog-detail-main-desc'>Starting a keto diet can feel overwhelming, but with the right approach, it becomes an effective and sustainable way to improve health and lose weight. The ketogenic diet focuses on low-carb, high-fat, and moderate protein intake to shift your body into a fat-burning state called ketosis.</Grid2>
                    <Grid2 sx={{ py: 2 }} className='blog-detail-main-desc'>In this guide, we'll cover the basics of keto, foods to eat and avoid, and provide a simple meal plan to get you started!</Grid2>

                    <Grid2>
                        <h1>What is the Keto Diet?</h1>
                        <Grid2 className='conclusion-text'>The ketogenic diet drastically reduces carbohydrate intake and replaces it with fat. This process helps your body use fat as its primary fuel source, leading to weight loss, increased energy levels, and improved mental clarity.</Grid2>

                        <h2>🔹Macronutrient Breakdown:</h2>
                        <ul>
                            <li>70-75% Fat 🥑🥓</li>
                            <li>20-25% Protein 🍗🍳</li>
                            <li>5-10% Carbs 🥦🍓</li>
                        </ul>

                        <h2>Foods to Eat on Keto</h2>
                        <ul>
                            <li>✅ <span>Healthy Fats:</span> Avocados, olive oil, coconut oil, butter, nuts, and seeds.</li>
                            <li>✅ <span>Protein:</span> Eggs, fatty fish (salmon, tuna), beef, chicken, and pork.</li>
                            <li>✅ <span>Low-Carb Vegetables:</span> Spinach, kale, broccoli, cauliflower, zucchini, and bell peppers.</li>
                            <li>✅ <span>Dairy:</span> Cheese, heavy cream, and Greek yogurt (unsweetened).</li>
                            <li>✅ <span>Keto-Friendly Sweeteners:</span> Stevia, monk fruit, and erythritol.</li>
                        </ul>

                        <h2>Foods to Avoid</h2>
                        <ul >
                            <li>🚫 <span>High-Carb Foods:</span> Bread, pasta, rice, cereals, and starchy vegetables (potatoes, corn).</li>
                            <li>🚫 <span>Sugary Foods:</span> Candy, soda, fruit juices, and desserts.</li>
                            <li>🚫 <span>Processed Foods:</span> Chips, fast food, and artificial additives.</li>
                        </ul>

                        <h2>Simple 7-Day Keto Meal Plan</h2>

                        <strong>Day 1</strong>
                        <ul>
                            <li>🥑 <span>Breakfast:</span> Scrambled eggs with avocado and cheese.</li>
                            <li>🍗 <span>Lunch:</span> Grilled chicken with spinach salad and olive oil dressing. </li>
                            <li>🥩 <span>Dinner:</span> Steak with garlic butter and roasted asparagus.</li>
                        </ul>
                        <strong>Day 2</strong>
                        <ul>
                            <li>🍳 <span>Breakfast:</span> Omelet with mushrooms and feta cheese.</li>
                            <li>🥗 <span>Lunch:</span> Tuna salad with mixed greens and avocado.</li>
                            <li>🐟 <span>Dinner:</span> Baked salmon with sautéed zucchini.</li>
                        </ul>
                        <strong>Day 3</strong>
                        <ul>
                            <li>🥣 <span>Breakfast:</span> Chia seed pudding with coconut milk.</li>
                            <li>🌯 <span>Lunch:</span> Chicken and avocado lettuce wraps.</li>
                            <li>🥡 <span>Dinner:</span> Beef stir-fry with bell peppers and cauliflower rice.</li>
                        </ul>
                        <strong>Day 4</strong>
                        <ul>
                            <li>🥚 <span>Breakfast:</span> Boiled eggs with a side of bacon.</li>
                            <li>🍤 <span>Lunch:</span> Shrimp and avocado salad.</li>
                            <li>🍖 <span>Dinner:</span> Grilled pork chops with steamed broccoli.</li>
                        </ul>
                        <strong>Day 5</strong>
                        <ul>
                            <li>🥞 <span>Breakfast:</span> Keto pancakes with almond butter.</li>
                            <li>🥗 <span>Lunch:</span> Chicken Caesar salad (no croutons).</li>
                            <li>🐠 <span>Dinner:</span> Grilled trout with roasted Brussels sprouts.</li>
                        </ul>
                        <strong>Day 6</strong>
                        <ul>
                            <li>🧀 <span>Breakfast:</span> Cheese omelet with spinach.</li>
                            <li>🥚 <span>Lunch:</span> Egg salad with cucumber slices.</li>
                            <li>🍗 <span>Dinner:</span> Bacon-wrapped chicken with garlic butter.</li>
                        </ul>
                        <strong>Day 7</strong>
                        <ul>
                            <li>🍳 <span>Breakfast:</span> Scrambled eggs with smoked salmon.</li>
                            <li>🥑 <span>Lunch:</span> Avocado and tuna-stuffed peppers.</li>
                            <li>🥩 <span>Dinner:</span> Ribeye steak with creamy garlic mushrooms.</li>
                        </ul>

                        <h2>Conclusion</h2>
                        <Grid2 className='conclusion-text'>The keto diet can be a powerful way to improve your health, lose weight, and boost energy levels.</Grid2>
                    </Grid2>

                </Grid2>
                <Grid2 size={{ sm: 12, md: 4, lg: 4, xl: 4 }}>

                    <Grid2 sx={{ px: 2, my: { xs: 2 } }} className='recent-blog-container'>
                        <Grid2>Recent Blog</Grid2>

                        <Grid2 container className='recent-blog-card'>
                            <Grid2 className=' div-center d-flex-row recent-blog-card-inner'>
                                <Grid2 size={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }} sx={{ display: 'flex' }}>
                                    <img src={BlogCards} style={{ maxHeight: '124px', maxWidth: '124px' }} />
                                </Grid2>
                                <Grid2 size={{ xs: 7, sm: 7, md: 7, lg: 7, xl: 7 }}>
                                    <Grid2 className='date-time-div' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Grid2 className='div-center' sx={{ pr: 2 }}><img src={CalendarIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> March 10, 2025</Grid2>
                                        <Grid2 className='div-center'><img src={ClockIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> 8:00 AM</Grid2>
                                    </Grid2>
                                    <Grid2 className='div-center'>
                                        <Grid2 className='recent-blog-cards-head'>
                                            Yoga vs. Pilates: Which One is Right for You?
                                        </Grid2>
                                        <img src={arrowUpRight} width={'24px'} height={'24px'} style={{ paddingLeft: '8px' }} />
                                    </Grid2>
                                    <Grid2 className='recent-blog-cards-desc'>Not sure whether to choose yoga or Pilates? We break down the differences and benefits.</Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 container className='recent-blog-card'>
                            <Grid2 className=' div-center d-flex-row recent-blog-card-inner'>
                                <Grid2 size={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }} sx={{ display: 'flex' }}>
                                    <img src={BlogCards} style={{ maxHeight: '124px', maxWidth: '124px' }} />
                                </Grid2>
                                <Grid2 size={{ xs: 7, sm: 7, md: 7, lg: 7, xl: 7 }}>
                                    <Grid2 className='date-time-div' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Grid2 className='div-center' sx={{ pr: 2 }}><img src={CalendarIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> March 10, 2025</Grid2>
                                        <Grid2 className='div-center'><img src={ClockIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> 8:00 AM</Grid2>
                                    </Grid2>
                                    <Grid2 className='div-center'>
                                        <Grid2 className='recent-blog-cards-head'>
                                            Yoga vs. Pilates: Which One is Right for You?
                                        </Grid2>
                                        <img src={arrowUpRight} width={'24px'} height={'24px'} style={{ paddingLeft: '8px' }} />
                                    </Grid2>
                                    <Grid2 className='recent-blog-cards-desc'>Not sure whether to choose yoga or Pilates? We break down the differences and benefits.</Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 container className='recent-blog-card'>
                            <Grid2 className=' div-center d-flex-row recent-blog-card-inner'>
                                <Grid2 size={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }} sx={{ display: 'flex' }}>
                                    <img src={BlogCards} style={{ maxHeight: '124px', maxWidth: '124px' }} />
                                </Grid2>
                                <Grid2 size={{ xs: 7, sm: 7, md: 7, lg: 7, xl: 7 }}>
                                    <Grid2 className='date-time-div' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Grid2 className='div-center' sx={{ pr: 2 }}><img src={CalendarIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> March 10, 2025</Grid2>
                                        <Grid2 className='div-center'><img src={ClockIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> 8:00 AM</Grid2>
                                    </Grid2>
                                    <Grid2 className='div-center'>
                                        <Grid2 className='recent-blog-cards-head'>
                                            Yoga vs. Pilates: Which One is Right for You?
                                        </Grid2>
                                        <img src={arrowUpRight} width={'24px'} height={'24px'} style={{ paddingLeft: '8px' }} />
                                    </Grid2>
                                    <Grid2 className='recent-blog-cards-desc'>Not sure whether to choose yoga or Pilates? We break down the differences and benefits.</Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>

                    </Grid2>
                    <Grid2 sx={{ py: 5 }}>
                        <img src={BlogDetailImage} height={'100%'} width={'100%'} />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default BlogDetails
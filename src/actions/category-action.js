

export const CATEGORY= 'CATEGORY';
export const getCategory = category => ({
    type: CATEGORY,
    category
});

export const HEADLINES= 'HEADLINES';
export const getHeadlineArticles = headlines => ({
    type: HEADLINES,
    headlines
});


export const getHeadlines = ()=>(dispatch)=>{
return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=722e175eefa74e1f9a66e5a9f5d86a76',{
    method: 'GET'
})
.then(res => res.json())
.then((res)=>{
    dispatch(getCategory('headlines'));
    dispatch(getHeadlineArticles(res.articles));

})

};
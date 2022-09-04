const { dispatch, subscribe } = require('./toolkit/app/store')
const { fetchSinglePost } = require('./toolkit/features/post/postSlice')
const {
  fetchRelatedPosts,
} = require('./toolkit/features/relatedPosts/relatedPostsSlice')

//Subscribe to Store
// subscribe(()=>console.log())

//Dispatch Actions
const actionsDispatch = async () => {
  let {
    payload: { title },
  } = await dispatch(fetchSinglePost())
  let searchQuery = title.split(' ').filter(Boolean).join('&title_like=')
  await dispatch(fetchRelatedPosts(searchQuery))
}
actionsDispatch()

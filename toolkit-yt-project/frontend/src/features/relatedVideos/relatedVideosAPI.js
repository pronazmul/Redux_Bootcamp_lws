import axios from '../../utils/axios'

export const getRelatedVideos = async ({ tags, id }) => {
  let searchQuery = tags.length
    ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=5`
    : `&id_ne=${id}&_limit=5`
  const response = await axios.get(`/videos?${searchQuery}`)
  return response.data
}

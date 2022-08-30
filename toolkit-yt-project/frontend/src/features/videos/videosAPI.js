import axios from '../../utils/axios'

export const getVideos = async ({ tags, search }) => {
  let searchQuery = ''
  if (tags.length > 0) {
    searchQuery += tags.map((tag) => `tags_like=${tag}`).join('&')
  }

  if (search) {
    searchQuery += `&q=${search}`
  }

  const response = await axios.get(`/videos?${searchQuery}`)
  return response.data
}

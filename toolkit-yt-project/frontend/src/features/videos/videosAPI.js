import axios from '../../utils/axios'

export const getVideos = async ({ tags, search, author, page, entities }) => {
  let searchQuery = ''
  if (author) {
    searchQuery += `author_like=${author}`
  }

  if (tags.length > 0) {
    searchQuery += tags.map((tag) => `tags_like=${tag}`).join('&')
  }
  if (search) {
    searchQuery += `&q=${search}`
  }
  if (page && entities) {
    searchQuery += `&_limit=${entities}&_page=${page}`
  }
  const response = await axios.get(`/videos?${searchQuery}`)
  return { data: response.data, totalCount: response.headers['x-total-count'] }
}

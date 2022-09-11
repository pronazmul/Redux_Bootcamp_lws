import TextArea from '../ui/TextArea'
import TextInput from '../ui/TextInput'
import { Toaster } from 'react-hot-toast'
import { Formik } from 'formik'
import toast from 'react-hot-toast'
import { useEditVideoMutation } from '../../features/api/apiSlice'

export default function Form({ video }) {
  const [editVideo, { isLoading }] = useEditVideoMutation()
  const {
    id,
    title,
    description,
    author,
    date,
    duration,
    views,
    link,
    thumbnail,
  } = video
  const updateVideoHandler = async (values, { resetForm }) => {
    try {
      await editVideo({ id, data: values })
      toast.success('Video Sucessfully Updated!')
      resetForm()
    } catch (error) {
      toast.error('Failed to Update Video!')
    }
  }
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Formik
        initialValues={{
          title: title,
          description: description,
          author: author,
          date: date,
          duration: duration,
          views: views,
          link: link,
          thumbnail: thumbnail,
        }}
        onSubmit={updateVideoHandler}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div className='shadow overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 bg-white sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <TextInput
                      name='title'
                      value={values.title}
                      onChange={handleChange}
                      title='Video Title'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <TextInput
                      name='author'
                      value={values.author}
                      onChange={handleChange}
                      title='Author'
                    />
                  </div>

                  <div className='col-span-6'>
                    <TextArea
                      name='description'
                      value={values.description}
                      onChange={handleChange}
                      title='Description'
                    />
                  </div>

                  <div className='col-span-6'>
                    <TextInput
                      name='link'
                      value={values.link}
                      onChange={handleChange}
                      title='YouTube Video link'
                    />
                  </div>

                  <div className='col-span-6'>
                    <TextInput
                      name='thumbnail'
                      value={values.thumbnail}
                      onChange={handleChange}
                      title='Thumbnail link'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <TextInput
                      name='date'
                      value={values.date}
                      onChange={handleChange}
                      title='Upload Date'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <TextInput
                      name='duration'
                      value={values.duration}
                      onChange={handleChange}
                      title='Video Duration'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <TextInput
                      name='views'
                      value={values.views}
                      onChange={handleChange}
                      title='Video no of views'
                    />
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  disabled={isLoading}
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500'
                >
                  Update Video
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

// import Success from "../ui/Success";
import { useAddVideoMutation } from '../../features/api/apiSlice'
import { Formik } from 'formik'
import TextArea from '../ui/TextArea'
import TextInput from '../ui/TextInput'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

export default function Form() {
  const [addVideo, { isLoading, isSuccess, isError }] = useAddVideoMutation()

  function addVideoHandler(values, { resetForm }) {
    addVideo(values)
    if (isSuccess) {
      toast.success('Video Added Sucessfully!')
      resetForm()
    }
    if (isError) {
      toast.error('Something Went Wrong')
    }
  }

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Formik
        initialValues={{
          title: '',
          description: '',
          author: '',
          avatar: 'https://avatars.githubusercontent.com/u/73503432?v=4',
          date: Date.now(),
          duration: '',
          views: '',
          link: '',
          thumbnail: '',
        }}
        onSubmit={addVideoHandler}
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
                  Save
                </button>
              </div>

              {/* <Success message="Video was added successfully" /> */}
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

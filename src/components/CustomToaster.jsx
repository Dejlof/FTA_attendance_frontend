import {Toaster, toast} from 'react-hot-toast'

const CustomToaster = () => {
  return (
    <Toaster
    position='top-right'
    reverseOrder={false}
    gutter={8}
    toastOptions={{
        duration: 3000,
        style: {
            backgroundColor: 'white',
            color: '#003B65',
            borderRadius: '5px',
            fontSize: '14px',
            padding: '12px 40px',
        },
        success: {
            duration: 3000,
            style: {
                backgroundColor: '#d7bd14',
                color: 'white',
                borderRadius: '5px',
                fontSize: '14px',
                padding: '12px 40px',
            }
        },
        error: {
            duration: 3000,
            style: {
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '5px',
                fontSize: '14px',
                padding: '12px 40px',
            }
        }
    }}
    />
  )
}

export default CustomToaster

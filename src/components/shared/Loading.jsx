import loading from '../assets/Loading.gif'

function Loading() {
  return <img src={loading} alt="Loading..." style={
    { width: '100px', margin: 'auto', display: 'block' }
  } />
}

export default Loading

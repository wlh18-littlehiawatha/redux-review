import React from 'react'
import { connect } from 'react-redux'
import { updateMovieList } from '../ducks/moviesReducer'
import styles from './styles'

const MovieConfirm = props => {
  const { title, poster, westenscale } = props
  const confirmMovie = () => {
    props.updateMovieList({ title, poster, westenscale })
    props.history.push('/list')
  }

  console.log(props)

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${title} - ${westenscale}`}</p>
      <img src={poster} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { title, poster, westenscale } = state

  return { title, poster, westenscale }
}

export default connect(
  mapStateToProps,
  { updateMovieList }
)(MovieConfirm)

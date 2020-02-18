import React from 'react'
import { connect } from 'react-redux'
import styles from './styles'

const MovieList = props => {
  const movieList = props.movies.map(element => {
    return (
      <div style={styles.movieListItem}>
        <img style={styles.poster} src={element.poster} alt={element.title} />
        <div style={styles.listItemInfo}>
          <p style={styles.listItemText}>{element.title}</p>
          <p style={styles.listItemText}>{element.westenscale}/10</p>
        </div>
      </div>
    )
  })

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>A LIST OF MOVIES</p>
      {movieList}
    </div>
  )
}

const mapStateToProps = state => {
  const { movies } = state
  return { movies }
}
export default connect(mapStateToProps)(MovieList)

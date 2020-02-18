import React from 'react'
import styles from './styles'

const MovieList = props => {
  const movieList = [].map(element => {
    return (
      <div style={styles.movieListItem}>
        <img style={styles.poster} src={element.poster} alt={element.title} />
        <div style={styles.listItemInfo}>
          <p style={styles.listItemText}>{element.title}</p>
          <p style={styles.listItemText}>{element.rating}/10</p>
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
export default MovieList

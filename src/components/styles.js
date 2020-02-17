const centerAll = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export default {
  container: {
    width: '100vw',
    height: '85vh',
    backgroundImage:
      'url(https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg)',
    backgroundSize: '100%',
    color: 'white',
    ...centerAll,
    justifyContent: 'flex-start',
  },
  containerHeading: {
    fontSize: '3rem',
  },
  form: {
    display: 'flex',
    ...centerAll,
    width: '50%',
  },
  formInput: {
    width: '100%',
    fontSize: '1.5rem',
    padding: '10px',
    margin: '10px',
  },
  formButton: {
    padding: '15px',
    fontSize: '1.5rem',
  },
  main: {
    width: '100vw',
    height: '15vh',
    background: '#f45678',
    ...centerAll,
  },
  nav: {
    width: '40%',
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}

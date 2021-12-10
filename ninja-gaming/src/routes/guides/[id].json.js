// import db

export async function get({ params }) {
  // connect to db to fetch & parse data
 
  const guides = [
    { id: 1, title: 'some title', body: 'lorem ipsum' },
    { id: 2, title: 'some title 2', body: 'lorem ipsum' },
    { id: 3, title: 'some title 3', body: 'lorem ipsum' },
    { id: 4, title: 'some title 4', body: 'lorem ipsum' },
    { id: 5, title: 'some title 5', body: 'lorem ipsum' },
  ]

  const guide = guides.find((g) => g.id == params.id)

  if (guide) {
    return {
      status: 200,
      body: { guide } 
    }
  }

  return {
    status: 404
  }
}
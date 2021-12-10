// import db

export async function get() {
  // connect to db to fetch & parse data
 
  const guides = [
    { id: 1, title: 'some title' },
    { id: 2, title: 'some title 2' },
    { id: 3, title: 'some title 3' },
    { id: 4, title: 'some title 4' },
    { id: 5, title: 'some title 5' },
  ]

  return {
    status: 200,
    body: { guides } 
  }
}

// other handlers
export async function post() {}
export async function del() {}
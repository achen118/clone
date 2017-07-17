```javascript
{
  currentUser: {
    id: 1,
    username: "demo-login"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]}
  },
  notes: {
    allIds: [1, 2],
    byId:
      1: {
        title: "Sample Note1",
        body: "sample note body",
        author_id: 1,
        notebook_id: 1,
        tags: [1, 2]
      },
      2 : {
        title: "Sample Note2",
        body: "sample note body",
        author_id: 1,
        notebook_id: 2,
        tags: [3, 4]
      },
    }
  },
  notebooks: {
    allIds: [1, 2],
    byId: {
      1: {
        title: "Sample Notebook1",
        author_id: 1,
        description: "sample notebook description"
      },
      2: {
        title: "Sample Notebook2",
        author_id: 1,
        description: "sample notebook description"
      }
    }
  }
  tags: {
    allIds: [1, 2, 3, 4],
    byId: {
      1: {
        id: 1,
        name: tag1
      },
      2: {
        id: 2,
        name: tag2
      },
      3: {
        id: 1,
        name: tag3
      },
      4: {
        id: 1,
        name: tag4
      }
    }
  }
}
```

```javascript
{
  currentUser: {
    id: 1,
    username: "demo-login"
  },
  notes: {
    allIds: [1, 2],
    byId:
      1: {
        id: 1,
        title: "Sample Note1",
        body: "sample note body",
        author_id: 1,
        notebook_id: 1,
        tags: ["tag1", "tag2"]
      },
      2 : {
        id: 2
        title: "Sample Note2",
        body: "sample note body",
        author_id: 1,
        notebook_id: 2,
        tags: ["tag3", "tag4"]
      },
    }
  },
  note: {
    id: 1,
    title: "Sample Note1",
    body: "sample note body",
    author_id: 1,
    notebook_id: 1,
    tags: ["tag1", "tag2"]
  }
  notebooks: {
    allIds: [1, 2],
    byId: {
      1: {
        id: 1
        title: "Sample Notebook1",
        author_id: 1,
        description: "sample notebook description"
      },
      2: {
        id: 2
        title: "Sample Notebook2",
        author_id: 1,
        description: "sample notebook description"
      }
    }
  }
  tags: {
    allNames: ["tag1", "tag2", "tag3", "tag4"],
    byName: {
      "tag1": {
        id: 1,
        name: "tag1"
      },
      "tag2": {
        id: 2,
        name: "tag2"
      },
      "tag3": {
        id: 1,
        name: "tag3"
      },
      "tag4": {
        id: 1,
        name: "tag4"
      }
    }
  },
  errors: []
}
```

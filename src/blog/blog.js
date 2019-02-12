import React, { Component } from "react";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBlogs: [
      
      ], // property that contains the array
      isLoading: false,
      title: "",
      newEntryTitle: "",
      newEntryContent: "",
      editBlogIndex: null
    };

    // bind the edit blog item to the Blog context
    this.editBlogItemClicked.bind(this);
    this.deleteBlogItemClicked.bind(this);

    // not working
    // this.handleClick.bind(this)
    // this.newBlogContentChanged.bind(this)
    // this.newBlogTitleChanged.bind(this)
    // this.renderBlogContent.bind(this)
  }

  deleteBlogItemClicked(blog) {
    let currentBlogArray = this.state.arrayOfBlogs;
    currentBlogArray.pop();

    //pop the last blog item;

    // update and rerender the list
    this.setState({
      arrayOfBlogs: currentBlogArray
    });
  }

  // not used
  renderBlogContent(blog) {
    return (
      <li>
        <button onClick={this.editBlogItemClicked}>edit</button>
        <button onClick={this.editBlogItemClicked}>delete</button>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </li>
    );
  }

  // Create
  handleClick() {
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
    //alert('clicked');
    //this.setState()
    // this.setState(prevState => ({
    //     arrayOfBlogs: [...prevState.arrayOfBlogs, {
    //         title: this.state.newEntryTitle,
    //         content: this.state.newEntryContent
    //     }],
    //     newEntryTitle: '',
    //     newEntryContent: ''
    //   }))

    // retrieving the previous contents of the array
    let currentBlogArray = this.state.arrayOfBlogs;

    if (this.state.editBlogIndex == null) {
      // not editing a blog entry
      // update the current array of blogs with the new entry
      currentBlogArray.push({
        title: this.state.newEntryTitle,
        content: this.state.newEntryContent
      });
    } else {
      // editing a blog entry
      // retrieve the blog from the array
      // update the array with the new blog title and content

      currentBlogArray[this.state.editBlogIndex] = {
        title: this.state.newEntryTitle,
        content: this.state.newEntryContent
      }
    }

    // update and rerender the list
    this.setState({
      arrayOfBlogs: currentBlogArray,
      editBlogIndex: null,
      newEntryTitle: '',
      newEntryContent: ''
    });
  }

  newBlogTitleChanged(e) {
    this.setState({ newEntryTitle: e.target.value });
    console.log("new blog title: " + this.state.newEntryTitle);
  }

  newBlogContentChanged(e) {
    this.setState({ newEntryContent: e.target.value });
    console.log("new blog content: " + this.state.newEntryContent);
  }

  // called when the edit button of the blog item is clicked
  editBlogItemClicked(blog, index) {
      // set the blog and it's index in the array that is being processed
    this.setState({
      newEntryTitle: blog.title,
      newEntryContent: blog.content,
      editBlogIndex: index
    });
  }

  // 1) Update the list to have an edit button
  // 2) Handle the click of the edit button

  render() {
    return (
      <div id="myblog" className="content">
             
        <h1 className="h1">
          My Blog {this.props.name} {this.props.title}
        </h1>
        <p>
          Follow my blog. 
        </p>

        <ul>
          {this.state.arrayOfBlogs.map((blog, index) => (
            <section>
              <button
                onClick={() => {
                  this.editBlogItemClicked(blog, index);
                }}
              >
                Edit
              </button>

              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </section>
          ))}
        </ul>
<div className="newblog">
        <h2>New Blog Entry:</h2>

        <section>Blog Title:</section>
<section>
        <input
          type="text"
          name="BlogTitle"
          onChange={this.newBlogTitleChanged.bind(this)}
          value={this.state.newEntryTitle}
        />
        </section>

<section>Blog Content:</section>
        <section>
        <textarea
          name="BlogContent"
          rows="4"
          cols="50"
          onChange={this.newBlogContentChanged.bind(this)}
          value={this.state.newEntryContent}
        />
</section>


        
        <button onClick={this.handleClick.bind(this)}>Save</button>
        <button onClick={this.deleteBlogItemClicked.bind(this)}>
          Delete Last Item
        </button>
        </div>
      </div>
    );
  }
}

export default Blog;

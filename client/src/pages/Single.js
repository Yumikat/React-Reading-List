import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
// import axios from "axios";
import API from "../utils/API";

// this component is to get ONE post by the id
class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.onDelete = this.onDelete.bind(this); // ******************
    }

    // when loaded, get one item by id
    componentDidMount() {
            this.getPost();
    }

    getPost = () => {
        API.getPost(this.props.match.params.id)
            .then(res =>
                this.setState({ post: res.data })
            )
            .catch(err => console.log(err));
    };

    // delete one item by id and update the history?
    onDelete(event) {
        event.preventDefault();
        API.deletePost(this.props.match.params.id)
            .then(post => {
                this.getPost();
                alert("Post successfully deleted.");
                this.props.history.push("/");  // ***********************
            })
            .catch(err => console.log(err));
    }

//     handleClick(event) {
// //         this.props.history.push("/edit")
// //     }
// //
// // <button
// //     // to={`/edit/${this.state.post._id}`}
// // onClick={this.handleClick}
// // className="bg-blue-light align-middle no-underline h-12 text-lg hover:bg-blue-dark text-white font-bold mx-4 py4 px-6 border-b-4 border-blue-dark hover:border-blue rounded"
// // >
// // Edit
// // </button>

    render() {
        return (
            <div className="container m-8 flex flex-wrap px-16 py-6">
                <div className="w-full md:w-3/4">
                    <h1 className="text-blue-light py-2">{this.state.post.title}</h1>
                    <h3 className="text-green-light py-2">{this.state.post.author}</h3>
                    <p className="text-black py-2 leading-loose">{this.state.post.body}</p>
                </div>

                <div className="w-full md:w-1/4">

                        <NavLink
                            to={`/edit/${this.state.post._id}`}
                            className="bg-blue-light align-middle no-underline h-12 text-lg hover:bg-blue-dark text-white font-bold mx-4 py4 px-6 border-b-4 border-blue-dark hover:border-blue rounded"
                        >
                            Edit
                        </NavLink>

                        <button
                            onClick={event => this.onDelete(event)}
                            className="bg-green-light h-12 text-lg hover:bg-green-dark text-white font-bold mx-4py4 px-6 border-b-4 border-green-dark hover:border-green rounded"
                        >
                            Delete
                        </button>


                </div>

            </div>

        )
    }

    //  end of class
}

export default withRouter(Single);














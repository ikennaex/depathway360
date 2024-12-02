import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blogdisplay.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../baseUrl";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { format } from "date-fns";
import Loader from "../../../Loader";

const Blogdisplay = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/publish`).then((response) => {
      setPost(response.data);
    });
  }, []);

  // console.log(post.id)

  const deletePost = async (id) => {
    const postId = id
    await axios.post(`${baseUrl}/publish/${postId}`, {
      postId
    })
  }

  return (
    <div className="blogmain-div">
      <Link to="/publish">
        <button>Publish</button>
      </Link>

      <div>
        <p>View and edit your recent blog posts</p>
      </div>

      <div className="blogbox-maindiv">
        {post.length > 0 ?
          post.map((data) => {
            return (
              <div className="blogbox-div ">
                <Link to={`/blog/${data._id}`}>
                  <img
                    className="blogbox-img"
                    src={`${baseUrl}` + "/" + data.image}
                    alt=""
                  />
                  <p className="blogbox-title">{data.title}</p>

                  <div className="date-authorinfo">
                    <p>De Pathway360</p>
                    <p>
                      <time>
                        {format(new Date(data.createdAt), "MMM d, yyyy HH:mm")}
                      </time>
                    </p>
                  </div>
                </Link>

                <div className="edit-deletebtn">
                  <Link to= {`/admin/edit/${data._id}`} >
                  <MdModeEdit size={30} className="editpost-btn" />
                  </Link>


                  <MdDelete onClick={() => deletePost(data._id)} size={30} className="deletepost-btn" />

                </div>
              </div>
            );
          }): <Loader />} 
      </div>
    </div>
  );
};

export default Blogdisplay;

import React, { useEffect, useState } from "react";
import "./blogpost.css";
import { baseUrl } from "../../baseUrl";
import axios from "axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/publish/${id}`).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, []);
  
  return (
    <div className="blogpost-div">
      <div className="flexprogramdiv">
        {
          <div className="programdetailsinner-div">
            <p className="programdetails-title">{post.title}</p>
            <div className="dateandauthor">
              <p>by De Pathway360</p>
              <p>
              {/* <time>{format(new Date(post.createdAt), 'MMM d, yyyy HH:mm')}</time> */}
              </p>
            </div>
            <div className="programdetails-imgdiv">
              <img
                className="program-details-img"
                src={`${baseUrl}` + "/" + post.image}
                alt=""
              />
            </div>
            <div  className="programdetails-subtext" dangerouslySetInnerHTML={{__html: post.body}} />
          </div>
        }
      </div>
    </div>
  );
};

export default BlogPost;

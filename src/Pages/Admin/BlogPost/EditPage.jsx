import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./publish.css";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";
import { pathway360logo } from "../../../imports";
import { Navigate, useParams } from "react-router-dom";

const EditPage = () => {

    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [body, setBody] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {id} = useParams()
  
    useEffect(() => {
      axios.get(`${baseUrl}/publish/${id}`)
      .then(response => {
          setTitle(response.data.title)
          setFile(response.data.file)
          setBody(response.data.body)

      })
    })

    const editPost = async (e) => {
      e.preventDefault();

      const data = new FormData();
      data.set("title", title);
      if (file?.[0]) {
          data.set("file", file?.[0]);
      }
      data.set("body", body);
      data.set("id", id);

      const response = await axios.put(`${baseUrl}/publish`, data)

      if (response.status === 200) {
        setRedirect(true);
      }
  
      // console.log(response)
    };
  
    if (redirect) {
      return <Navigate to={"/admin"} />;
    }

  return (
    <div>
        <div className="create-newpostdiv">
        <img className="publish-logo" src={pathway360logo} alt="logo" />
        <p className="createnewpost-txt">Edit Post</p>
      </div>
      <form onSubmit={editPost} className="publish-form" action="">
        <input
          className="publish-titletxt"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Input Title Here"
        />
        <input
          className="publish-imginput"
          type="file"
          onChange={(e) => setFile(e.target.files)}
        />
        <div  >

        <ReactQuill value={body} onChange={(e) => setBody(e)} />
        </div>
        <button>Update Post</button>
      </form>
    </div>
  )
}

export default EditPage
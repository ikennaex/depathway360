import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./publish.css";
import axios from "axios";
import { baseUrl } from "../../../baseUrl";
import { pathway360logo } from "../../../imports";
import { Navigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [body, setBody] = useState("");
  const [redirect, setRedirect] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const publishPost = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("file", file[0]);
    data.set("body", body);

    const response = axios
      .post(`${baseUrl}/publish`, data)
      .then((response) => {
        console.table(response);

        if (response.status === 200) {
          setRedirect(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(response)
  };

  if (redirect) {
    return <Navigate to={"/admin"} />;
  }

  return (
    <div>
      <div className="create-newpostdiv">
        <img className="publish-logo" src={pathway360logo} alt="logo" />
        <p className="createnewpost-txt">Create a New Post</p>
      </div>
      <form onSubmit={publishPost} className="publish-form" action="">
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
        <div >

        <ReactQuill theme = "snow" modules ={modules} formats = {formats} value={body} onChange={(e) => setBody(e)} />
        </div>
        <button>Publish</button>
      </form>
    </div>
  );
};

export default Publish;

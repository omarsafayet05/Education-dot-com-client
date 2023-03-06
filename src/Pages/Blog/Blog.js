import React from "react";
import classes from "./Blog.module.css";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-violet-800">Blog</h1>
      <ul className={classes.accordion}>
        <li>
          <input type="radio" name="accordion" id="first" checked />
          <label className={classes.Label} for="first">
            What is CORS?
          </label>
          <div className={classes.content}>
            <p>
              CORS stands for Cross-Origin_Resources Sharing.It is a node.js
              package and allows us to relax the security applied to an API.This
              is done by bypassing the Access-Control-Allow-Origin headers,which
              specify which origins can access the API.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="second" />
          <label className={classes.Label} for="second">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </label>
          <div className={classes.content}>
            <p>
              Firebase is a web app development platform created by Google.It
              lets you develop the whole app on the front-end without any
              server-side logic via firebase functions.It's easy to start a
              project with Firebase.It allows real-time database connection
              ,which means multiple users can see the changes in the data when
              the data gets created or edited.Data transmission is handled with
              web sockets so you don't have to send requests to get new data,you
              only need to subscribe once.Superbase,RxDB,Etebase and
              remoteStorage.They are mainly Game Dev tools but may also be used
              for Web Analytics Services or Social Networks.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third" />
          <label className={classes.Label} for="third">
            {" "}
            How does the private route work?{" "}
          </label>
          <div className={classes.content}>
            <p>
              The react private route component renders child
              components(children) if the user is logged in.If not logged in the
              user is redirected to the /login page with the return url passed
              in the location state property.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fourth" />
          <label className={classes.Label} for="fourth">
            What is Node? How does Node work?
          </label>
          <div className={classes.content}>
            <p>
              Node allows developers to write Javascript code that runs directly
              in a computer process itself instead of in a browser.Node
              can,therefore,be used to write server-side applications with
              access to the operating system,file system and everything else
              required to build full-funtional applications.Node. Node.js is an
              open-source backend javascript runtime environment. It is a used
              as backend service where javascript works on the server-side of
              the application. This way javascript is used on both frontend and
              backend. Node.js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Working of Node.js: Node.js
              accepts the request from the clients and sends the response, while
              working with the request node.js handles them with a single
              thread. To operate I/O operations or requests node.js use the
              concept of threads. Thread is a sequence of instructions that the
              server needs to perform. It runs parallel on the server to provide
              the information to multiple clients. Node.js is an event loop
              single-threaded language. It can handle concurrent requests with a
              single thread without blocking it for one request. Node.js
              basically works on two concept: 1.Asynchronous 2.Non-blocking I/O
              Non-blocking I/o: Non-blocking i/o means working with multiple
              requests without blocking the thread for a single request.
              Asynchronous: Asynchronous is executing a callback function. The
              moment we get the response from the other server or database it
              will execute a callback function.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Blog;

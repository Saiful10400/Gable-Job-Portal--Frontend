import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="lg:w-[1400px] mx-auto flex flex-col gap-5 px-3 lg:px-0 py-5">
      <Helmet>
           
           <title>Gable | Blog</title>
            
         </Helmet>
      <div>
        <h1 className="text-3xl">
          <span className=" text-red-500">Question:</span> What is an access
          token and refresh token? How do they work and where should we store
          them on the client-side?
        </h1>
        <p className="font-semibold">
          <span className="text-3xl text-green-500">Ans:</span>
          <br />
          Access Token: <br />
          An access token is a credential that represents the authorization
          granted to a client. It is typically short-lived and is used to access
          a protected resource (like an API) on behalf of a user or the client
          itself. Access tokens are sent with each request to the resource
          server to access protected resources. They are used to prove that the
          client has the right to access those resources.
          <br />
          Refresh Token: <br />
          A refresh token is a credential used to obtain a new access token.
          While access tokens are short-lived, refresh tokens are usually
          long-lived. When an access token expires, the client can use the
          refresh token to obtain a new access token without requiring the user
          to re-authenticate. This helps in maintaining the user's session
          without constantly asking for their credentials.
          <br />
          How They Work: <br /> <br />
          The user logs in, and upon successful authentication, the server
          responds with an access token and a refresh token. The client includes
          the access token in requests to access protected resources. When the
          access token expires, the client can use the refresh token to request
          a new access token without involving the user in the authentication
          process again.
          <br />
          Where to Store on the Client-Side:
          <br />
          <br />
          Access Token:
          <br />
          Store the access token in a secure manner. Commonly, it is stored in
          the browser's memory or a secure HTTP-only cookie. Avoid storing it in
          local storage due to security concerns. Use HTTPS to encrypt
          communication, preventing access token interception.
          <br />
          Refresh Token:
          <br />
          Store the refresh token securely as it has a longer lifespan. It's
          often stored on the server side or in an HTTP-only cookie. Transmit
          the refresh token over HTTPS to prevent interception.
        </p>
      </div>
      <div>
        <h1 className="text-3xl">
          <span className="text-3xl text-red-500">Question:</span> What is
          express js? What is Nest JS?
        </h1>
        <p className="font-semibold">
          <span className="text-3xl text-green-500">Ans:</span> <br />
          Express.js: <br />
          Express.js is a minimal and flexible Node.js web application framework
          that provides a robust set of features for web and mobile
          applications. It is designed to make it easier to build web
          applications and APIs in Node.js by providing a simple and expressive
          syntax. Express is widely used due to its simplicity, performance, and
          a large ecosystem of middleware. Key features of Express.js include
          routing, middleware support, template engines for rendering HTML, and
          the ability to create RESTful APIs. It's lightweight and allows
          developers to structure their applications in a way that suits their
          needs. <br />NestJS:
          <br />
          NestJS is a framework for building scalable and maintainable
          server-side applications. It is built on top of Express.js, utilizing
          its robust features, and adds a layer of structure and organization to
          the application. NestJS is often referred to as a "progressive"
          Node.js framework because it allows developers to start with a simple
          architecture and progressively adopt more advanced features as needed.
          Key features of NestJS include a modular architecture inspired by
          Angular, dependency injection, a powerful CLI (Command Line
          Interface), support for TypeScript, and a focus on building scalable
          and maintainable code. NestJS is particularly well-suited for building
          enterprise-level applications. In summary, while Express.js is a
          minimalistic and flexible framework for building web applications in
          Node.js, NestJS is built on top of Express.js and provides a more
          structured and opinionated approach to application architecture,
          making it suitable for larger and more complex projects.
        </p>
      </div>
    </div>
  );
};

export default Blog;

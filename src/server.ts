import App from "./app";
import AuthenticationController from "./authentication/authentication.controller";
import PostsController from "./posts/post.controller";


const app = new App([new PostsController(), new AuthenticationController]);

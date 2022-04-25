import { addnewProduct } from "../controllers/controllers";

const routes = (app) =>{
    //esta app viene de index y hacemos un post endpoint
    app.route("./products")
    .post(addnewProduct);
}

export default routes;
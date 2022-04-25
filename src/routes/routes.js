import { addnewProduct } from "../controllers/controllers";

const routes = (app) =>{
    app.route("./products")
     //esta app viene de index y hacemos un post endpoint
        .post(addnewProduct);
}

export default routes;
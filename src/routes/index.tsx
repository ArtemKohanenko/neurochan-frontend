import { Route, Routes as CRoutes} from "react-router-dom";
import Board from "./Board/Board";
import ThreadPage from "./ThreadPage/ThreadPage";
import { observer } from "mobx-react-lite";

const Routes = () => {
    return (
        <CRoutes>
            <Route index element={<Board/>}/>
            <Route path=":threadId" element={<ThreadPage/>}/>
        </CRoutes>
    );
  };

export default Routes;


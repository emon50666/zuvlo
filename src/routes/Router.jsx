import { Route, Routes } from "react-router";
import Root from "../layouts/Root";



const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </div>
  )
}

export default Router
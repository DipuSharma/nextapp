import { getToken } from "../utils/common";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
    let location = useLocation()
    const token = getToken()
    const router = useRouter()

    return token ? (
      children
    ) : (
      router.push('/userauth/login')
    )
  }
  
export default PrivateRoute;
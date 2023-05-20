import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Kids Toys`;
    }, [title])
}
export default useTitle;
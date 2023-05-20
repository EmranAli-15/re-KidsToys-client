import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Kids toys`;
    }, [title])
}
export default useTitle;
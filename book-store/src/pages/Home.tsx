import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { formatNumber } from "../utils/format";

function Home() {
    const COUNT = 10000
    return (
        <>
            <div>book store</div>
            <div>count: {formatNumber(COUNT)}</div>
        </>
    )
}

export default Home;
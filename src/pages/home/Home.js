import Topbar from '../../components/topbar/Topbar';
import './home.css';

export default function Home() {

    return (
        <div>
            <Topbar />
            <div className="pageTitle">
                <span>Latest Posts</span>
            </div>
        </div>
    )
}

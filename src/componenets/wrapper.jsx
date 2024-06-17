import { Helmet } from "react-helmet";
import Header from './header';
import * as Home from '../pages/Home';
import * as Hooks from '../pages/Hooks';
import * as Settings from '../pages/Settings';
import * as NotFound from '../pages/NotFound';
import Sidebar from './sidebar';
import data from '../data/data.json';

const wrapper = props => {
    const currentPage = getCurrentPageModule(props.id)

    return (
        <>
            <HeadTags pageName={props.id} />
            <Header jumpLinks={currentPage.jumpLinks} />
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-3 d-none d-md-block">
                        <Sidebar jumpLinks={currentPage.jumpLinks} />
                    </aside>
                    <main className="col-md-9 col-sm-12">
                        <currentPage.content />
                    </main>
                </div>
            </div>
        </>
    );
}

const HeadTags = ({ pageName }) => (
    <Helmet>
        <title>{`${data.pages[pageName].pageTitle} ${data.siteInfo.titleSeparator} ${data.siteInfo.title}`}</title>
        <meta name="description" content={data.pages[pageName].desc} />
        <meta property="og:title" content={`${data.pages[pageName].pageTitle} ${data.siteInfo.titleSeparator} ${data.siteInfo.title}`} />
        <meta property="og:description" content={data.pages[pageName].desc} />
        <link rel="canonical" href={process.env.PUBLIC_URL + data.pages[pageName].slug} />
    </Helmet>
)

const getCurrentPageModule = (name = '') => {
    let allPages = {
        Home: Home,
        Hooks: Hooks,
        Settings: Settings,
    }

    return allPages[name] ?? NotFound;
}

export default wrapper;
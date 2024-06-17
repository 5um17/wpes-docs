import Header from "../componenets/header";
import {ReactComponent as NotFoundIcon} from "../assets/icon-404.svg"

const NotFoundPage = () => (
    <>
        <Header jumpLinks={{}} />
        <div style={{ marginBottom: '50px' }} className="row">
            <main className="col-md-6 offset-md-3 text-center">
                <NotFoundIcon height={250} width={250} className="text-primary" />
                <h1 className="text-primary text-uppercase fw-bold">Oops! Page Not Found</h1>
                <p>We couldn't find the page you were looking for!</p>
                <a href='/' className="btn btn-primary text-light text-uppercase">Go to Homepage</a>
            </main>
        </div>
    </>
);

export default NotFoundPage
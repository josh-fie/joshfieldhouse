import MainNavigation from '../components/MainNavigation.js';

function Layout(props) {
    return (
        <>
            <MainNavigation />
            <main>
            {props.children}
            </main>
        </> )
}

export default Layout;
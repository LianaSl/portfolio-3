import { Hlavni } from "./pages/Hlavni";
import { About } from "./pages/Omne";
import { Kontakt } from "./pages/Kontakt";

// import { HomePage } from './pages/HomePage'
// import { About } from './pages/About'
// import { Contact } from './pages/Concact'
// import { ErrorPage } from './pages/ErrorPage';

export function navigateTo(url) {
    history.pushState(null, null, url);

    router();
}
export async function router() {
    const routes = [
            {path: "/", view: Hlavni },
            {path: "/about", view: O_mně },
            {path: "/contact", view: Kontakt },
    ];

    const potentialMatches = routes.map(route => {
        return {
            router: router,
            isMatch: location.pathname === route.path,
            view: route.view,
        }
    });
 let match = potentialMatches.find(el => el.isMatch);
    // if (!match) {
    //     match = {
    //         router: { view: () => `<h1>404 Not Found</h1>` },
    //         isMatch: true 
    //     };
    // };
    
    if (!match) {
        match = {
            router: { view: () => ErrorPage() },
            isMatch: true 
        };
    };
    const routerView = document.querySelector(".main");
    routerView.innerHTML = match.router.view();
}

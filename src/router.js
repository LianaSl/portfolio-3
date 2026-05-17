import { Hlavní } from "./pages/Hlavní.js";
import { About } from "./pages/Omne.js";
import { Kontakt } from "./pages/Kontakt.js";


export function navigateTo(url) {
    history.pushState(null, null, url);

    router();
}
export async function router() {
    const routes = [
            {path: "/", view: Hlavní },
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
    if (!match) {
        match = {
            router: { view: () => `<h1>404 Not Found</h1>` },
            isMatch: true 
        };
    };
    const routerView = document.querySelector(".main");
    routerView.innerHTML = match.router.view();
}

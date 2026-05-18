import { Hlavni } from "./pages/Hlavni";
import { About } from "./pages/Omne";
import { Kontakt } from "./pages/Kontakt";
import { ErrorPage } from "./pages/ErrorPage";  // ✅ добавить импорт
import { initKontakt } from "./pages/Kontakt";

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

export async function router() {
    const routes = [
        { path: "/", view: Hlavni },
        { path: "/about", view: About },    // ✅ было O_mně
        { path: "/contact", view: Kontakt },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,               // ✅ было router: router — это была ошибка
            isMatch: location.pathname === route.path,
        };
    });

    let match = potentialMatches.find(el => el.isMatch);

    if (!match) {
        match = {
            route: { view: () => ErrorPage() },
            isMatch: true
        };
    }

    const routerView = document.querySelector(".main");
    routerView.innerHTML = match.route.view();  // ✅ match.route, не match.router
    if (location.pathname === '/contact') {
    initKontakt();
}
}
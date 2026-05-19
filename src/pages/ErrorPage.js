export function ErrorPage() {
    return `
    <aside class="aside">
        <div class="parent" style="flex-direction: column; align-items: center; text-align: center;">
            <h1 style="font-size: 80px; font-family: 'Playfair Display', serif; color: rgb(55, 122, 223);">404</h1>
            <p style="font-size: 30px;">Stránka nenalezena </p>
            <a href="/" data-link style="margin-top: 20px; color: rgb(55, 122, 223); font-family: 'EB Garamond', serif; font-size: 24px;">← Zpět na hlavní</a>
        </div>
    </aside>
    `;
}
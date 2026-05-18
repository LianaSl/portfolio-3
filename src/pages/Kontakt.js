export function Kontakt() {
  return `
  <aside class="aside">
        <div class="parent">
            <div class="contact-block">
                <h1 class="contact-title">Kontakt</h1>
                <p class="contact-text">
                    Děkuji, že jste se dostali až na poslední stránku mého webu.<br>
                    Těší mě, že vás zde prezentované informace zaujaly.<br>
                    Pokud chcete, můžete mi napsat osobní zprávu<br>
                    nebo mě najít a sledovat na mých sociálních sítích.
                </p>
                <div class="divider"></div>
                <div class="socials">
                    <a class="social-link" href="https://www.instagram.com/liana_bizne/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a class="social-link" href="https://www.linkedin.com/in/liana-%C5%A1ljonkina/" target="_blank">
                        <i class="fa-brands fa-linkedin-in"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a class="social-link" href="https://github.com/LianaSl" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
                <button id="open-modal-btn" class="btn-contact">Napsat zprávu</button>
            </div>
        </div>
    </aside>

    <div class="modal-overlay" id="modal">
        <div class="modal">
            <button id="modal-close-btn" class="modal-close">&times;</button>
            <h2>Napište mi</h2>
            <form id="contact-form" action="https://formspree.io/f/mvzwkqwl" method="POST">
                <div class="field-wrap">
                    <label for="iname">Jméno</label>
                    <input type="text" id="iname" name="name" placeholder="Vaše jméno">
                </div>
                <div class="field-wrap">
                    <label for="iemail">E-mail</label>
                    <input type="email" id="iemail" name="email" placeholder="vas@email.cz">
                </div>
                <div class="field-wrap">
                    <label for="imessage">Zpráva</label>
                    <textarea id="imessage" name="message" placeholder="Vaše zpráva..."></textarea>
                </div>
                <button type="submit" class="btn-send">Odeslat zprávu</button>
            </form>
            <div id="success-msg" class="success-msg" style="display:none;">
                ✅ Děkuji! Vaše zpráva byla odeslána.
            </div>
        </div>
    </div>
  `;
}

export function initKontakt() {
    const openBtn      = document.getElementById('open-modal-btn');
    const modalOverlay = document.getElementById('modal');
    const closeBtn     = document.getElementById('modal-close-btn');
    const form         = document.getElementById('contact-form');
    const successMsg   = document.getElementById('success-msg');

    const fieldName    = document.getElementById('iname');
    const fieldEmail   = document.getElementById('iemail');
    const fieldMessage = document.getElementById('imessage');

    const fields = [
        { el: fieldName,    key: 'contact_name',    minLen: 2, label: 'Jméno' },
        { el: fieldEmail,   key: 'contact_email',   minLen: 0, label: 'E-mail' },
        { el: fieldMessage, key: 'contact_message', minLen: 5, label: 'Zpráva' },
    ];

    fields.forEach(({ el, key }) => {
        const saved = localStorage.getItem(key);
        if (saved) el.value = saved;
    });

    function validateField({ el, label, minLen }) {
        const val = el.value.trim();
        let error = '';
        if (!val) {
            error = `${label} je povinné pole.`;
        } else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            error = 'Zadejte platný e-mail.';
        } else if (minLen && val.length < minLen) {
            error = `${label} musí mít alespoň ${minLen} znaky.`;
        }
        showError(el, error);
        return error === '';
    }

    function showError(el, message) {
        const wrapper = el.parentElement;
        let span = wrapper.querySelector('.field-error');
        if (!span) {
            span = document.createElement('span');
            span.className = 'field-error';
            wrapper.appendChild(span);
        }
        span.textContent = message;
        el.classList.toggle('input-error', !!message);
        el.classList.toggle('input-ok', !message && el.value.trim() !== '');
    }

    fields.forEach(({ el, key, ...rest }) => {
        el.addEventListener('input', () => {
            localStorage.setItem(key, el.value);
            if (el.classList.contains('input-error')) {
                validateField({ el, key, ...rest });
            }
        });
    });

    fields.forEach((field) => {
        field.el.addEventListener('blur', () => validateField(field));
    });

    function openModal() {
        modalOverlay.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('modal-open');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const allValid = fields.map(validateField).every(Boolean);
        if (!allValid) return;

        const data = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' },
        });

        if (response.ok) {
            form.style.display = 'none';
            successMsg.style.display = 'block';
            fields.forEach(({ key }) => localStorage.removeItem(key));
        }
    });
}
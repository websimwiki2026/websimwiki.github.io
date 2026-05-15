document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("secret-audio.html")) {
        return;
    }

    const files = [
        { name: "MAIN PAGE", path: "index.html" }
    ];

    const navHTML = `
        <div style="background: #000; border-bottom: 2px solid #ff0000; padding: 10px 20px; display: flex; align-items: center; font-family: 'Courier New', monospace; position: sticky; top: 0; z-index: 9999;">
            <div style="color: #ff0000; font-weight: bold; margin-right: 30px; letter-spacing: 2px;">WEBSIM-OS</div>
            
            <div style="display: flex; gap: 20px;">
                ${files.map(file => `
                    <a href="${file.path}" class="nav-link" style="color: #888; text-decoration: none; font-size: 14px; border: 1px solid #333; padding: 5px 10px; transition: 0.2s;">
                        [ ${file.name} ]
                    </a>
                `).join('')}
            </div>
            
            <div style="margin-left: auto; color: #444; font-size: 12px;">SYSTEM-STATUS: ONLINE</div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const style = document.createElement('style');
    style.textContent = `
        .nav-link:hover {
            background-color: #ff0000 !important;
            color: #000 !important;
        }
        body {
            margin: 0;
        }
    `;
    document.head.appendChild(style);
});
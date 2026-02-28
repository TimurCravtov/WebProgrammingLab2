/**
 * Mascot Logic
 * Handles visibility, hover, focus, and interaction for the site mascot.
 * The mascot appears only after 5 seconds of the DOM content Being loaded.
 */

class Mascot {
    constructor(appearanceDelay = 5000) {
        this.mascot = document.getElementById('site-mascot');
        this.info = document.getElementById('mascot-info');
        this.appearanceDelay = appearanceDelay;

        if (!this.mascot) return;

        this.init();
    }

    init() {
        // Delayed appearance
        setTimeout(() => {
            this.show();
        }, this.appearanceDelay);

        // Interaction listeners
        this.mascot.addEventListener('mouseenter', () => this.showInfo());
        this.mascot.addEventListener('focus', () => this.showInfo());
        this.mascot.addEventListener('mouseleave', () => this.hideInfo());
        this.mascot.addEventListener('blur', () => this.hideInfo());

        this.mascot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isHidden = this.info.getAttribute('aria-hidden') === 'true';
                if (isHidden) this.showInfo(); else this.hideInfo();
            }
        });
    }

    show() {
        this.mascot.style.opacity = '1';
        this.mascot.style.pointerEvents = 'auto';
    }

    showInfo() {
        this.info.setAttribute('aria-hidden', 'false');
    }

    hideInfo() {
        this.info.setAttribute('aria-hidden', 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Mascot(4000);
});

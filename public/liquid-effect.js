class LiquidEffect {
    constructor() {
        this.canvas = document.getElementById('liquid-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.mascot = document.getElementById('site-mascot');
        this.blobs = [];
        this.isAnimating = false;
        this.colors = ['#FF3B30', '#4CD964', '#1089FF', '#FF9500', '#5856D6', '#FF2D55']; // Vibrant vibrant palette
        this.scale = window.devicePixelRatio || 1;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.mascot.addEventListener('click', (e) => this.trigger(e));
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;
        this.ctx.scale(this.scale, this.scale);
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
    }

    trigger(e) {
        if (this.isAnimating) return;

        const rect = this.mascot.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        this.createBlobs(originX, originY);
        this.isAnimating = true;
        this.animate();

        // Dissolve after 3 seconds
        setTimeout(() => {
            this.dissolve();
        }, 2000); // Start dissolving earlier to finish by 3s
    }

    createBlobs(x, y) {
        this.blobs = [];
        const count = 30;
        for (let i = 0; i < count; i++) {
            this.blobs.push({
                x: x,
                y: y,
                radius: Math.random() * 40 + 20,
                targetRadius: Math.random() * 200 + 100,
                vx: (Math.random() - 0.5) * 40,
                vy: (Math.random() - 0.5) * 40,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                opacity: 1,
                growing: true
            });
        }
    }

    dissolve() {
        this.blobs.forEach(blob => {
            blob.growing = false;
        });

        setTimeout(() => {
            this.isAnimating = false;
            this.blobs = [];
            this.ctx.clearRect(0, 0, this.width, this.height);
        }, 1000);
    }

    animate() {
        if (!this.isAnimating) return;

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.filter = 'url(#goo)';

        this.blobs.forEach(blob => {
            if (blob.growing) {
                blob.x += blob.vx;
                blob.y += blob.vy;
                blob.radius += (blob.targetRadius - blob.radius) * 0.05;
                blob.vx *= 0.95;
                blob.vy *= 0.95;
            } else {
                blob.opacity -= 0.02;
                blob.radius *= 1.02; // Expand slightly as it fades
            }

            this.ctx.beginPath();
            this.ctx.arc(blob.x, blob.y, Math.max(0, blob.radius), 0, Math.PI * 2);
            this.ctx.fillStyle = blob.color;
            this.ctx.globalAlpha = Math.max(0, blob.opacity);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new LiquidEffect();
});

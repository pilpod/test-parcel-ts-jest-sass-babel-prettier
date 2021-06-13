export class GridComponent {

    private element:HTMLElement;

    constructor()
    {
        this.element = document.getElementById('welcome-grid')!;
        this.render();
    }

    render()
    {
        this.element.innerHTML = this.createTemplate();
    }

    createTemplate()
    {
        const grid = /* html */ `
            <div class="grid">
                <div class="foto1"></div>
                <div class="foto2"></div>
                <div class="foto3"></div>
                <div class="foto4"></div>
                <div class="foto5"></div>
            </div>
        `;

        return grid;
    }

}
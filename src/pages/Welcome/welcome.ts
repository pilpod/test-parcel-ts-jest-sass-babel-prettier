
export class WelcomePage {

    constructor()
    {
        this.renderWelcomePage();
    }

    renderWelcomePage()
    {
        const welcome = /* html */ `
            <section class="welcome">
                <h1 class="fs-1">Welcome</h1>
                <div id="welcome-grid"></div>
            </section>
        `;
        
        return welcome;
    }

}
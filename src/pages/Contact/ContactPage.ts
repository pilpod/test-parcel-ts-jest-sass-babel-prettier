export class ContactPage {

    constructor()
    {
        
    }

    render()
    {
        
    }

    createTemplate()
    {
        const template = /* html */ `
        <section id="contact-title" class="contact-title">
            <h1 class="fs-1">Contact</h1>
        </section>
        `

        return template;
    }

    showContactPage()
    {
        const content = document.getElementById('content') as HTMLBodyElement;
        content.innerHTML = this.createTemplate();
    }

}
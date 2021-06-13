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
                <div class="foto1"><img src="https://i.blogs.es/d93d8d/marvel/1366_2000.jpeg"></div>
                <div class="foto3"><img src="https://as.com/meristation/imagenes/2021/04/26/noticias/1619428263_077178_1619428501_noticia_normal_recorte1.jpg"></div>
                <div class="foto4"><img src="https://media.vandal.net/i/640x360/10-2020/2020102013243495_1.jpg"></div>
                <div class="foto2"><img src="https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/06/Estos-son-los-comics-que-inspiraron-la-nueva-obra-de-Marvel-Loki-1.png?fit=1280%2C720&quality=80&ssl=1"></div>
                <div class="foto5"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0wttOnMEfqS3PEMhemSSkE4x9WCO_MiYSA&usqp=CAU"></div>
            </div>
        `;

        return grid;
    }

}
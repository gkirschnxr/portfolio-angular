import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

interface ItemHabilidade {
  icone: string;
  titulo: string;
  descricao?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements AfterViewInit {
  @ViewChild('nav', { static: false }) navRef?: ElementRef<HTMLElement>;
  @ViewChild('sobreSec', { static: false }) sobreRef?: ElementRef<HTMLElement>;

  navOnSobre = false;

  ngAfterViewInit(): void {
    const navEl = this.navRef?.nativeElement;
    const sobreEl = this.sobreRef?.nativeElement;
    if (!navEl || !sobreEl) return;

    const navH = navEl.offsetHeight || 64;

    const io = new IntersectionObserver(
      ([entry]) => {
        this.navOnSobre = entry.isIntersecting;
      },
      {
        root: null,
        threshold: 0.9 | 0.1,
        rootMargin: `-${navH}px 0px 0px 0px`,
      }
    );

    io.observe(sobreEl);
  }

  public itensHabilidades: ItemHabilidade [] = [
    {
      icone: 'bi-window-fullscreen',
      titulo: 'Web Design',
      descricao: `Design e desenvolvimento de sistemas web atraentes e responsivos.`,
    },
    {
      icone: 'bi-server',
      titulo: 'Aplicações Back-End',
      descricao: `Desenvolvimento de sistemas robustos para solucionar problemas simples ou compplexos.`,
    },
    {
      icone: 'bi-graph-up',
      titulo: 'Testes Automatizados',
      descricao: `Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.`,
    },
    {
      icone: 'bi-wrench',
      titulo: 'Engenharia de Software',
      descricao: `Planejamento e execução de sistemas multi-camadas, integrando várias tecnologias de forma organizada e escalável.`,
    },
    {
      icone: 'bi-people',
      titulo: 'Liderança',
      descricao: `Habilidade de liderar e tomar decisões técnicas em projetos em equipe.`,
    },
    {
      icone: 'bi-building-up',
      titulo: 'Implantação',
      descricao: `Implantação e manutenção de sistemas em servidores VPS e em nuvem.`,
    }
  ];
}

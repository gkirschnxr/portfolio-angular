import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

interface ItemHabilidade {
  icone: string;
  titulo: string;
  descricao?: string;
}

interface ItemPortfolio {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGif: string;
  urlRepositorio: string;
  stack: string[];
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

  public itensHabilidades2: ItemHabilidade[] = [
    {
      icone: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
    },
    {
      icone: 'https://skillicons.dev/icons?i=css&theme=dark',
      titulo: 'CSS',
    },
    {
      icone: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
    },
    {
      icone: 'https://skillicons.dev/icons?i=js&theme=dark',
      titulo: 'JavaScript',
    },
    {
      icone: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
    },
    {
      icone: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
      titulo: 'Bootstrap',
    },
    {
      icone: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
    },
    {
      icone: 'https://skillicons.dev/icons?i=npm&theme=dark',
      titulo: 'NPM',
    },
    {
      icone: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
    },
    {
      icone: 'https://skillicons.dev/icons?i=net&theme=dark',
      titulo: '.NET',
    },
    {
      icone: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
    },
    {
      icone: 'https://skillicons.dev/icons?i=sqlite&theme=dark',
      titulo: 'SQLite',
    },
    {
      icone: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'Postgres',
    },
    {
      icone: 'https://skillicons.dev/icons?i=redis&theme=dark',
      titulo: 'Redis',
    },
    {
      icone: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
    },
    {
      icone: 'https://skillicons.dev/icons?i=selenium&theme=dark',
      titulo: 'Selenium',
    },
    {
      icone: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
    },
    {
      icone: 'https://skillicons.dev/icons?i=powershell&theme=dark',
      titulo: 'PowerShell',
    },
    {
      icone: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
    },
    {
      icone: 'https://skillicons.dev/icons?i=github&theme=dark',
      titulo: 'GitHub',
    },
    {
      icone: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'Azure',
    },
    {
      icone: 'https://skillicons.dev/icons?i=visualstudio&theme=dark',
      titulo: 'Visual Studio',
    },
    {
      icone: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VSCode',
    },
  ]

  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Controle de Medicamentos',
      urlImagem: 'controle-de-medicamentos.png',
      urlGif: 'https://i.imgur.com/EPe6P6I.gif',
      urlRepositorio: 'https://github.com/gkirschnxr/Controle-de-Medicamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde, com o controle de fornecimento, estoque, funcionários, pacientes e retirada de prescrições — com foco na rastreabilidade das movimentações de estoque.`
    },
    {
      titulo: 'Gestão de Equipamentos',
      urlImagem: 'gestao-de-equipamentos.png',
      urlGif: '',
      urlRepositorio: 'https://github.com/gkirschnxr/GestaoDeEquipamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`
    }
  ]

  public itemPortfolioSelecionado?: ItemPortfolio;
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Banner } from "./components/banner/banner";
import { Sobre } from "./components/sobre/sobre";
import { Habilidades } from "./components/habilidades/habilidades";
import { IconesHabilidades } from "./components/icones-habilidades/icones-habilidades";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contato } from "./components/contato/contato";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Banner, Sobre, Habilidades, IconesHabilidades, Portfolio, Contato],
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
}
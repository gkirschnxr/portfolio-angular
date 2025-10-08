import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements AfterViewInit{
  @ViewChild('nav',        { static: false }) navRef!: ElementRef<HTMLElement>;
  @ViewChild('sobreSec',   { static: false }) sobreRef!: ElementRef<HTMLElement>;
  @ViewChild('sobreStart', { static: false }) sobreStartRef!: ElementRef<HTMLElement>;
  @ViewChild('sobreEnd',   { static: false }) sobreEndRef!: ElementRef<HTMLElement>;

  public navOnSobre: boolean = false;

  ngAfterViewInit(): void {
    const navH = this.navRef?.nativeElement?.offsetHeight ?? 64;

    // OBSERVER 1: ativa quando o topo do #sobre passa por baixo da navbar
    const enterObserver = new IntersectionObserver(
      ([e]) => { this.navOnSobre = !!e?.isIntersecting; },
      {
        root: null,
        threshold: 0,                 // dispara assim que encosta
        rootMargin: `-${navH}px 0px -100% 0px`, // “linha” no topo da navbar
      }
    );

    // OBSERVER 2: desativa quando o fim do #sobre sobe além da navbar
    const leaveObserver = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) this.navOnSobre = false; },
      {
        root: null,
        threshold: 0,
        rootMargin: `0px 0px -${window.innerHeight - navH}px 0px`,
        // Esse margin faz o sentinel do fim “tocar” o topo lógico ao aproximar da navbar
      }
    );

    enterObserver.observe(this.sobreStartRef.nativeElement);
    leaveObserver.observe(this.sobreEndRef.nativeElement);
  }
}

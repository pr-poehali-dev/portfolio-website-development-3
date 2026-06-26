import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HERO = 'https://cdn.poehali.dev/projects/d25cc35d-38b6-4c08-939d-92ad57b6b889/files/241ab469-4d0e-468f-831f-32490a7a2318.jpg';
const AUTHOR = 'https://cdn.poehali.dev/projects/d25cc35d-38b6-4c08-939d-92ad57b6b889/files/949b6717-9f00-4942-ac3d-6f8091231f05.jpg';
const PRODUCT = 'https://cdn.poehali.dev/projects/d25cc35d-38b6-4c08-939d-92ad57b6b889/files/24238fc9-e10e-4875-a8f1-2f0bcc47dc4c.jpg';

const NAV = [
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О фотографе' },
  { id: 'price', label: 'Прайс' },
  { id: 'contact', label: 'Контакты' },
];

const PORTFOLIO = [
  { img: HERO, title: 'Свадьба у моря', desc: 'Анна и Дмитрий, Сочи' },
  { img: AUTHOR, title: 'Портрет в студии', desc: 'Естественный свет' },
  { img: PRODUCT, title: 'Предметная съёмка', desc: 'Керамика ручной работы' },
  { img: HERO, title: 'Утро невесты', desc: 'Репортажная серия' },
  { img: PRODUCT, title: 'Интерьер кафе', desc: 'Коммерческий проект' },
  { img: AUTHOR, title: 'Lifestyle портрет', desc: 'На пленэре' },
];

const SERVICES = [
  {
    icon: 'User',
    title: 'Портретная съёмка',
    duration: '1–2 часа',
    photos: '30 обработанных фото',
    includes: 'Помощь с позированием, базовая ретушь',
  },
  {
    icon: 'Heart',
    title: 'Свадебная съёмка',
    duration: 'до 10 часов',
    photos: '300+ обработанных фото',
    includes: 'Выезд по городу, полная ретушь, фотокнига',
  },
  {
    icon: 'Camera',
    title: 'Предметная / Интерьерная',
    duration: '2–4 часа',
    photos: '40 обработанных фото',
    includes: 'Студия, выезд, цветокоррекция, ретушь',
  },
];

const PRICES = [
  {
    name: 'Стандарт',
    price: '15 000 ₽',
    features: ['1 час съёмки', '20 фото в обработке', '1 локация', 'Готовность 7 дней'],
    featured: false,
  },
  {
    name: 'Премиум',
    price: '30 000 ₽',
    features: ['3 часа съёмки', '60 фото в обработке', '2 локации', 'Выезд включён', 'Готовность 5 дней'],
    featured: true,
  },
  {
    name: 'VIP',
    price: '60 000 ₽',
    features: ['Полный день', '150+ фото', 'Любые локации', 'Фотокнига в подарок', 'Готовность 3 дня'],
    featured: false,
  },
];

const Index = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="font-display text-2xl tracking-wide">
            Анна Светлова
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm tracking-wide text-muted-foreground hover:text-accent transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {open && (
          <nav className="md:hidden flex flex-col gap-4 px-6 pb-6 border-t border-border bg-background animate-fade-in">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left text-base text-muted-foreground hover:text-accent"
              >
                {n.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative text-center text-background px-6 animate-fade-up">
          <p className="tracking-[0.4em] uppercase text-sm mb-6">Профессиональный фотограф</p>
          <h1 className="font-display text-5xl md:text-8xl font-medium leading-tight">
            Останавливаю
            <br />
            мгновения
          </h1>
          <p className="mt-8 text-lg opacity-90 max-w-md mx-auto font-light">
            Свадебная, портретная и предметная съёмка с душой и вниманием к деталям
          </p>
          <Button
            onClick={() => scrollTo('portfolio')}
            className="mt-10 bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-none px-10 h-12 tracking-wide"
          >
            Смотреть работы
          </Button>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 container">
        <div className="text-center mb-16">
          <p className="tracking-[0.3em] uppercase text-xs text-accent mb-4">Избранное</p>
          <h2 className="font-display text-5xl md:text-6xl">Портфолио</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((p, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-500 flex flex-col items-center justify-center text-background opacity-0 group-hover:opacity-100">
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="text-sm mt-2 tracking-wide">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] uppercase text-xs text-accent mb-4">Что я снимаю</p>
            <h2 className="font-display text-5xl md:text-6xl">Услуги</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-card p-10 border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <Icon name={s.icon} size={28} />
                </div>
                <h3 className="font-display text-2xl mb-6">{s.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Clock" size={16} className="text-accent" /> {s.duration}
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Image" size={16} className="text-accent" /> {s.photos}
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Sparkles" size={16} className="text-accent" /> {s.includes}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={AUTHOR} alt="Анна Светлова" className="w-full h-[560px] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground px-8 py-6">
              <p className="font-display text-4xl">12 лет</p>
              <p className="text-xs tracking-wide uppercase">в профессии</p>
            </div>
          </div>
          <div>
            <p className="tracking-[0.3em] uppercase text-xs text-accent mb-4">О фотографе</p>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Анна Светлова</h2>
            <p className="font-display italic text-2xl text-accent mb-8">
              «Свет — это язык, на котором говорят чувства»
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Уже более 12 лет я создаю снимки, которые хочется пересматривать. Снимала более 300
              свадеб, сотрудничала с ведущими брендами и изданиями.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Моя философия проста: фотография должна быть живой и честной. Я ловлю настоящие эмоции,
              а не постановочные позы.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="font-display text-4xl">300+</p>
                <p className="text-sm text-muted-foreground">свадеб</p>
              </div>
              <div>
                <p className="font-display text-4xl">15</p>
                <p className="text-sm text-muted-foreground">наград</p>
              </div>
              <div>
                <p className="font-display text-4xl">5K</p>
                <p className="text-sm text-muted-foreground">съёмок</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="price" className="py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] uppercase text-xs text-accent mb-4">Тарифы</p>
            <h2 className="font-display text-5xl md:text-6xl">Прайс</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICES.map((p, i) => (
              <div
                key={i}
                className={`p-10 flex flex-col border ${
                  p.featured
                    ? 'bg-primary text-primary-foreground border-primary md:scale-105 shadow-xl'
                    : 'bg-card border-border'
                }`}
              >
                {p.featured && (
                  <span className="self-start mb-4 text-xs uppercase tracking-wide bg-accent text-accent-foreground px-3 py-1">
                    Популярный
                  </span>
                )}
                <h3 className="font-display text-3xl mb-2">{p.name}</h3>
                <p className="font-display text-5xl mb-8">{p.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Icon name="Check" size={16} className="text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollTo('contact')}
                  className={`rounded-none h-12 tracking-wide ${
                    p.featured
                      ? 'bg-background text-foreground hover:bg-accent hover:text-accent-foreground'
                      : 'bg-primary text-primary-foreground hover:bg-accent'
                  }`}
                >
                  Выбрать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] uppercase text-xs text-accent mb-4">Давайте знакомиться</p>
            <h2 className="font-display text-5xl md:text-6xl">Связаться со мной</h2>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" placeholder="Как к вам обращаться" className="rounded-none h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="you@mail.ru" className="rounded-none h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Тип съёмки</Label>
              <Select>
                <SelectTrigger className="rounded-none h-12">
                  <SelectValue placeholder="Выберите тип съёмки" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portrait">Портретная</SelectItem>
                  <SelectItem value="wedding">Свадебная</SelectItem>
                  <SelectItem value="product">Предметная / Интерьерная</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea
                id="comment"
                placeholder="Расскажите о вашем событии"
                className="rounded-none min-h-32"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-none h-12 bg-accent text-accent-foreground hover:bg-primary tracking-wide"
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
          <div>
            <p className="font-display text-2xl mb-2">Анна Светлова</p>
            <p className="text-sm opacity-70">© 2026. Все права защищены</p>
          </div>
          <div className="space-y-2 text-sm opacity-90">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Icon name="Phone" size={16} /> +7 (999) 123-45-67
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Icon name="Mail" size={16} /> hello@svetlova.photo
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-end">
            {['Instagram', 'Send', 'Youtube'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-11 h-11 flex items-center justify-center border border-primary-foreground/30 hover:bg-accent hover:border-accent transition-colors"
              >
                <Icon name={s} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

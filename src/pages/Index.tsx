import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: 'Target',
      title: 'Go-to-Market',
      description: 'Стратегия, анализ рынка, медиапланирование по регионам',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Radio',
      title: 'Медиазакупки',
      description: 'ТВ, радио, digital и наружная реклама',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: 'MessageSquare',
      title: 'Контент / SMM',
      description: 'Локализация, видео, фото, ведение соцсетей',
      color: 'from-orange-500 to-pink-500'
    },
    {
      icon: 'Newspaper',
      title: 'PR и GR',
      description: 'Публикации в СМИ, работа с органами власти',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: 'Video',
      title: 'Видеопродакшн',
      description: 'Собственная команда, все форматы контента',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Отчётность по ключевым KPI в реальном времени',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const kpis = [
    { value: '5M+', label: 'Уникальных контактов', icon: 'Users' },
    { value: '1000+', label: 'Заявок в месяц', icon: 'TrendingUp' },
    { value: '50+', label: 'Публикаций в СМИ', icon: 'Newspaper' },
    { value: '19', label: 'Лет экспертизы', icon: 'Award' }
  ];

  const solutions = [
    {
      title: 'Выход на рынок',
      description: 'Без открытия офиса — мы ваша российская команда',
      icon: 'Rocket'
    },
    {
      title: 'Узнаваемость бренда',
      description: 'От первых продаж до прочной деловой репутации',
      icon: 'Sparkles'
    },
    {
      title: 'Региональный рост',
      description: '85% покупателей — вне Москвы и Петербурга',
      icon: 'MapPin'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-gradient">Centre digital & media</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Услуги', 'Решения', 'КПИ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-purple-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="gradient-primary text-white">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold">
                🚀 19 лет экспертизы на российском рынке
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ваш мост на
              <span className="text-gradient block">российский рынок</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Комплексные услуги продвижения иностранных брендов в России. 
              146 миллионов цифровых потребителей ждут ваши продукты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white text-lg px-8 py-6">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-purple-300">
                Скачать презентацию
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {kpis.map((kpi, index) => (
              <Card 
                key={index} 
                className="p-6 text-center card-hover bg-white/80 backdrop-blur border-purple-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                  <Icon name={kpi.icon} className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{kpi.value}</div>
                <div className="text-sm text-gray-600">{kpi.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="решения" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ваши задачи — <span className="text-gradient">наши решения</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Фокус на результате: от запуска первых продаж до долгосрочного роста
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card 
                key={index}
                className="p-8 card-hover bg-gradient-to-br from-white to-purple-50/50 border-purple-100"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 animate-float">
                  <Icon name={solution.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Услуги: <span className="text-gradient">единое окно</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Глубокая локализация и экспертиза российского рынка
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group p-8 card-hover bg-white/80 backdrop-blur border-purple-100 overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Структурировано и быстро — от анализа до масштабирования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Анализ', desc: 'Изучаем рынок, города, аудиторию и конкурентов', time: 'до 15 дней' },
              { step: '02', title: 'Запуск', desc: 'Адаптация коммуникаций, производство контента, старт кампаний', time: 'до 15 дней' },
              { step: '03', title: 'Рост', desc: 'Масштабирование охвата, наращивание лидов и продаж', time: 'постоянно' }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-6xl font-bold text-white/20 mb-4">{phase.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-purple-100 mb-4">{phase.desc}</p>
                  <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-semibold">
                    {phase.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section id="кпи" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Измеримые <span className="text-gradient">KPI</span>
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачное отслеживание — никаких «чёрных ящиков»
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { metric: 'Охват', range: '100K - 5M+', description: 'уникальных контактов' },
              { metric: 'Лиды', range: '50 - 1000+', description: 'заявок в месяц' },
              { metric: 'СМИ', range: '10 - 50+', description: 'публикаций (федеральные + локальные)' },
              { metric: 'Видео', range: '450K+', description: 'просмотров, включая вирусные кейсы' }
            ].map((kpi, index) => (
              <Card key={index} className="p-8 card-hover bg-white border-purple-100">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-purple-600 mb-2">{kpi.metric}</div>
                    <div className="text-4xl font-bold text-gradient mb-2">{kpi.range}</div>
                    <div className="text-gray-600">{kpi.description}</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="контакты" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white border-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-purple-100 mb-8">
                Три простых шага до запуска вашего бренда в России
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { num: '1', text: 'Заполните бриф — получите консультацию' },
                  { num: '2', text: '30-минутный Zoom с экспертом' },
                  { num: '3', text: 'Получите медиаплан и стартуйте за 5 дней' }
                ].map((step, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6">
                    <div className="text-3xl font-bold mb-3">{step.num}</div>
                    <div className="text-sm">{step.text}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-10 py-6 font-semibold">
                Начать сейчас
              </Button>

              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="text-sm text-purple-100 mb-4">Софья Самойлова — Директор по экспорту</div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="mailto:export@centredigital.ru" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                    <Icon name="Mail" size={18} />
                    export@centredigital.ru
                  </a>
                  <a href="tel:+79220000000" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                    <Icon name="Phone" size={18} />
                    +7 922 000-0000
                  </a>
                  <a href="https://centredigital.ru" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                    <Icon name="Globe" size={18} />
                    www.centredigital.ru
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="text-sm text-gray-400">
            © 2026 Centre digital & media. Ижевск, Россия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

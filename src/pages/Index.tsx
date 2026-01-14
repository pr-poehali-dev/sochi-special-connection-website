import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [weight, setWeight] = useState('');
  const [serviceType, setServiceType] = useState('');

  const cities = [
    'Сочи', 'Москва', 'Санкт-Петербург', 'Краснодар', 'Ростов-на-Дону', 
    'Екатеринбург', 'Новосибирск', 'Казань', 'Нижний Новгород', 'Челябинск'
  ];

  const services = [
    { id: 'secret', name: 'Секретная почта', icon: 'ShieldCheck', color: 'bg-primary' },
    { id: 'precious', name: 'Драгоценные посылки', icon: 'Gem', color: 'bg-accent' },
    { id: 'documents', name: 'Документы', icon: 'FileText', color: 'bg-secondary' },
    { id: 'express', name: 'Экспресс доставка', icon: 'Zap', color: 'bg-primary' }
  ];

  const calculatePrice = () => {
    if (!fromCity || !toCity || !weight || !serviceType) return null;
    
    const basePrice = parseFloat(weight) * 150;
    const serviceMultiplier = serviceType === 'secret' ? 2.5 : 
                             serviceType === 'precious' ? 3 : 
                             serviceType === 'documents' ? 1.5 : 2;
    const distanceMultiplier = fromCity === toCity ? 1 : 1.8;
    
    return Math.round(basePrice * serviceMultiplier * distanceMultiplier);
  };

  const price = calculatePrice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <header className="bg-secondary/95 backdrop-blur-sm text-secondary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Icon name="Shield" size={32} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Спецсвязь Сочи</h1>
              <p className="text-sm opacity-90">Надёжная доставка ценных грузов</p>
            </div>
          </div>
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Государственная служба защищённой связи</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-accent">
            Безопасная доставка ценных грузов
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Спецсвязь — это федеральная государственная информационная система, обеспечивающая защищённую передачу конфиденциальной информации, документов и ценных отправлений с максимальным уровнем безопасности
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
              <Icon name="Lock" size={20} className="text-primary" />
              <span className="font-medium">Шифрование данных</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
              <Icon name="Camera" size={20} className="text-primary" />
              <span className="font-medium">Видеоконтроль 24/7</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span className="font-medium">GPS-отслеживание</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наши услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>
                    {service.id === 'secret' && 'Конфиденциальная корреспонденция с государственной защитой'}
                    {service.id === 'precious' && 'Бронированная перевозка ювелирных изделий и ценностей'}
                    {service.id === 'documents' && 'Срочная доставка важных юридических документов'}
                    {service.id === 'express' && 'Ускоренная перевозка с гарантией времени доставки'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Страхование груза</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Сопровождение</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Отчётность</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="calculator">
        <div className="container mx-auto max-w-3xl">
          <Card className="shadow-2xl border-2">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Icon name="Calculator" size={32} />
                Калькулятор стоимости доставки
              </CardTitle>
              <CardDescription className="text-white/90">
                Рассчитайте примерную стоимость перевозки вашего груза
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="from" className="text-base font-medium">Откуда</Label>
                  <Select value={fromCity} onValueChange={setFromCity}>
                    <SelectTrigger id="from" className="h-12">
                      <SelectValue placeholder="Выберите город отправления" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to" className="text-base font-medium">Куда</Label>
                  <Select value={toCity} onValueChange={setToCity}>
                    <SelectTrigger id="to" className="h-12">
                      <SelectValue placeholder="Выберите город назначения" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-base font-medium">Тип услуги</Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger id="service" className="h-12">
                    <SelectValue placeholder="Выберите тип перевозки" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight" className="text-base font-medium">Вес груза (кг)</Label>
                <Input 
                  id="weight"
                  type="number" 
                  placeholder="Введите вес в килограммах"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="h-12 text-base"
                  min="0.1"
                  step="0.1"
                />
              </div>

              {price && (
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border-2 border-primary/20 animate-scale-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Примерная стоимость</p>
                      <p className="text-4xl font-bold text-primary">{price.toLocaleString()} ₽</p>
                    </div>
                    <Icon name="TrendingUp" size={48} className="text-accent opacity-50" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Окончательная стоимость рассчитывается менеджером с учётом дополнительных услуг
                  </p>
                </div>
              )}

              <Button className="w-full h-12 text-base font-semibold" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Оформить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Icon name="MapPin" size={24} />
                  Адрес офиса
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <p className="text-lg">г. Сочи, Курортный проспект, 75</p>
                <p className="text-sm mt-2 opacity-75">Пн-Пт: 9:00 - 18:00<br/>Сб: 10:00 - 15:00</p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Icon name="Phone" size={24} />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <p className="text-lg font-semibold">+7 (862) 123-45-67</p>
                <p className="text-sm mt-2 opacity-75">Звонки принимаются круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Icon name="Mail" size={24} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <p className="text-lg">info@specsvyaz-sochi.ru</p>
                <p className="text-sm mt-2 opacity-75">Ответим в течение 1 часа</p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Icon name="MessageCircle" size={24} />
                  Мессенджеры
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                <div className="flex gap-4 text-2xl">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Icon name="Send" size={24} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Icon name="MessageSquare" size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-secondary-foreground py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Shield" size={24} className="text-primary" />
            <span className="font-bold text-lg">Спецсвязь Сочи</span>
          </div>
          <p className="text-sm opacity-75">© 2024 Все права защищены. Федеральная служба охраны РФ</p>
          <p className="text-xs opacity-50 mt-2">Лицензия на деятельность по защите информации</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

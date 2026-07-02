import { Building2, CalendarDays, CircleDollarSign, ReceiptText, TrendingUp, Users } from 'lucide-react';

const cards = [
  { title: 'إجمالي الوحدات', value: '0', icon: Building2 },
  { title: 'حجوزات الشهر', value: '0', icon: CalendarDays },
  { title: 'دخل الشهر', value: '0 AED', icon: CircleDollarSign },
  { title: 'مصروفات الشهر', value: '0 AED', icon: ReceiptText },
  { title: 'صافي الربح', value: '0 AED', icon: TrendingUp },
  { title: 'الملاك', value: '0', icon: Users },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">BLUE WORLD VACATION HOMES RENTAL L.L.C</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Blue World PMS</h1>
          <p className="mt-2 text-slate-600">نظام إدارة بيوت العطلات - الإصدار الأول</p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{card.title}</p>
                    <p className="mt-2 text-2xl font-bold">{card.value}</p>
                  </div>
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">القائمة الرئيسية</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {['الوحدات', 'الحجوزات', 'الملاك', 'الضيوف', 'الإيرادات', 'المصروفات', 'التقارير', 'الصيانة', 'الإعدادات'].map((item) => (
              <div key={item} className="rounded-xl border p-4 text-center font-semibold hover:bg-slate-50">{item}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

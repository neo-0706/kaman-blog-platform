import { Link } from "react-router-dom";

export default function AboutUs() {
  const stats = [
    { label: "مقاله تخصصی", value: "۵۰+" },
    { label: "خواننده فعال", value: "۱۰K+" },
    { label: "نویسنده و متخصص", value: "۱۲" },
    { label: "رضایت مخاطبان", value: "۹۹٪" },
  ];

  const values = [
    {
      title: "محتوای تخصصی و کاربردی",
      description: "تمامی مقالات با بررسی دقیق آخرین استانداردهای دنیای وب و به صورت عمیق نگارش می‌شوند.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "آپدیت و بروز بودن",
      description: "تکنولوژی‌ها با سرعت بالایی تغییر می‌کنند؛ ما همیشه جدیدترین ابزارها و فریم‌ورک‌ها را پوشش می‌دهیم.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "جامعه‌محور و آزاد",
      description: "اشتراک‌گذاری دانش و پاسخ به سوالات توسعه‌دهندگان از اولویت‌های اصلی رسانه ماست.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const team = [
    {
      name: "علی محمدی",
      role: "بنیان‌گذار و نویسنده ارشد",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "سارا حسینی",
      role: "طراح ارشد UI/UX",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "رضا کریمی",
      role: "توسعه‌دهنده و تولیدکننده محتوا",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 space-y-16">
      
      {/* هدر اصلی */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 text-xs font-medium text-indigo-400">
          درباره رسانه ما
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
          ما ماموریت داریم دانش تکنولوژی را ساده و کاربردی منتقل کنیم.
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          مجله <span className="text-indigo-400 font-semibold">Project</span> در سال ۱۴۰۵ با هدف ساخت پایگاه داده‌ای غنی از آموزش‌ها، تحلیل‌ها و مقالات تخصصی برنامه‌نویسی و طراحی وب متولد شد.
        </p>
      </section>

      {/* آمار و ارقام (Stats Grid) */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center backdrop-blur-xl"
          >
            <div className="text-2xl sm:text-4xl font-bold text-indigo-400">{stat.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* ارزش‌های ما (Values Grid) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">چرا مقالات ما را دنبال کنید؟</h2>
          <p className="text-xs sm:text-sm text-slate-400">ارزش‌هایی که بر اساس آن‌ها محتوا تولید می‌کنیم</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* تیم ما */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">تیم توسعه و محتوا</h2>
          <p className="text-xs sm:text-sm text-slate-400">افرادی که پشت تولید و مدیریت کدهای این وب‌سایت هستند</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center backdrop-blur-xl transition-all hover:border-slate-700"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-indigo-500/30 group-hover:border-indigo-500 transition-colors"
              />
              <h3 className="mt-4 text-base font-semibold text-slate-100">{member.name}</h3>
              <p className="mt-1 text-xs text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* باکس فراخوان (Call to Action) */}
      <section className="rounded-3xl border border-indigo-500/30 bg-linear-to-r from-indigo-950/40 via-slate-900/80 to-indigo-950/40 p-8 text-center space-y-4 backdrop-blur-xl">
        <h2 className="text-xl sm:text-3xl font-bold text-slate-100">آماده خواندن مقالات جدید هستید؟</h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          همین حالا به صفحه اصلی بروید و مطالعه موضوعات مورد علاقه خود در حوزه فرانت‌اند و UI را شروع کنید.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors"
          >
            مشاهده آخرین مقالات
          </Link>
        </div>
      </section>
    </div>
  );
}
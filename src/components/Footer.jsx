import { Link } from "react-router-dom";
import kaman from '../assets/kaman-logo.png'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900/60 backdrop-blur-xl text-slate-400 text-sm">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* ۱. معرفی برند (در موبایل ۲ ستون، در دسکتاپ ۱ ستون) */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src={kaman} alt="kaman-logo" className="size-12"/>
              <span className="text-lg font-semibold tracking-wide text-slate-100">
                Kaman<span className="text-indigo-500">.</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              پلتفرم انتشار مقالات تخصصی و اخبار روز حوزه فناوری، طراحی رابط
              کاربری و توسعه وب.
            </p>
          </div>

          {/* ۲. دسترسی سریع (در موبایل ۱ ستون، در دسکتاپ ۱ ستون) */}
          <div className="col-span-1">
            <h3 className="mb-3 text-sm font-semibold text-slate-200">
              دسترسی سریع
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="hover:text-indigo-400 transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-indigo-400 transition-colors"
                >
                  محصولات و مقالات
                </Link>
              </li>
            </ul>
          </div>

          {/* ۳. دسته‌بندی‌ها (در موبایل ۱ ستون، در دسکتاپ ۱ ستون) */}
          <div className="col-span-1">
            <h3 className="mb-3 text-sm font-semibold text-slate-200">
              دسته‌بندی‌ها
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  توسعه فرانت‌اند
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  طراحی رابط کاربری (UI)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  هوش مصنوعی
                </a>
              </li>
            </ul>
          </div>

          {/* ۴. خبرنامه (در موبایل ۲ ستون، در دسکتاپ ۱ ستون) */}
          <div className="space-y-2.5 col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-slate-200">خبرنامه</h3>
            <p className="text-xs text-slate-400">
              جدیدترین مقالات را در ایمیل خود دریافت کنید.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ایمیل..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="button"
                className="rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors shrink-0 cursor-pointer"
              >
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
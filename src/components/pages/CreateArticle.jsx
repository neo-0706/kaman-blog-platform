import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function CreateArticle() {
  const navigate = useNavigate();

  // استیت فرم
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "برنامه‌نویسی",
    readTime: "",
    image: "",
    authorName: "",
    authorRole: "",
    authorAvatar: "",
    content: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // مدیریت تغییرات ورودی‌های فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ارسال فرم به API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // آماده‌سازی دیتای نهایی مطابق با ساختار db.json
    const newArticle = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      date: new Date().toLocaleDateString("fa-IR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      readTime: formData.readTime ? `${formData.readTime} دقیقه` : "۵ دقیقه",
      author: {
        name: formData.authorName || "نویسنده ناشناس",
        role: formData.authorRole || "توسعه‌دهنده وب",
        avatar:
          formData.authorAvatar ||
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
      },
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/articles",
        newArticle
      );
      // هدایت کاربر به صفحه مقاله جدید یا صفحه اصلی بعد از ثبت موفق
      navigate(`/articles/${response.data.id}`);
    } catch (err) {
      setError("خطا در ایجاد مقاله. لطفاً مجدداً تلاش کنید.\n", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* دکمه بازگشت */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-colors"
        >
          <span>→</span>
          <span>بازگشت به صفحه اصلی</span>
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl">
        <h1 className="text-2xl font-bold text-slate-100 mb-6">
          ایجاد مقاله جدید
        </h1>

        {/* نمایش پیام خطا */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* عنوان مقاله */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">
              عنوان مقاله <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="مثلاً: آموزش جامع React 19"
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* چکیده مقاله */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">
              چکیده (توضیح کوتاه) <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="excerpt"
              required
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="خلاصه‌ای کوتاهی از موضوع مقاله..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* دسته‌بندی و زمان مطالعه */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                دسته‌بندی
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="برنامه‌نویسی">برنامه‌نویسی</option>
                <option value="طراحی UI">طراحی UI</option>
                <option value="هوش مصنوعی">هوش مصنوعی</option>
                <option value="امنیتی">امنیتی</option>
                <option value="بهینه‌سازی">بهینه‌سازی</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                زمان مطالعه (به دقیقه)
              </label>
              <input
                type="number"
                name="readTime"
                min="1"
                value={formData.readTime}
                onChange={handleChange}
                placeholder="مثلاً: ۵"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* تصویر مقاله */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">
              لینک تصویر کاور مقاله
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dir-ltr text-left"
            />
          </div>

          {/* اطلاعات نویسنده */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800/80 pt-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                نام نویسنده
              </label>
              <input
                type="text"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                placeholder="علی محمدی"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                نقش نویسنده
              </label>
              <input
                type="text"
                name="authorRole"
                value={formData.authorRole}
                onChange={handleChange}
                placeholder="توسعه‌دهنده فرانت‌اند"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">
                لینک آواتار نویسنده
              </label>
              <input
                type="url"
                name="authorAvatar"
                value={formData.authorAvatar}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dir-ltr text-left"
              />
            </div>
          </div>

          {/* متن کامل مقاله */}
          <div className="space-y-2 border-t border-slate-800/80 pt-4">
            <label className="text-xs font-medium text-slate-300">
              متن کامل مقاله <span className="text-red-400">*</span>
            </label>
            <textarea
              name="content"
              required
              rows="8"
              value={formData.content}
              onChange={handleChange}
              placeholder="متن اصلی مقاله را اینجا بنویسید..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-100 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 leading-relaxed"
            ></textarea>
          </div>

          {/* دکمه ارسال */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors cursor-pointer"
            >
              {submitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>در حال انتشار...</span>
                </>
              ) : (
                <span>انتشار مقاله</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
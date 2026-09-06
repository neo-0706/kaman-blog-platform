import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"; // اصلاح Import
import Spinner from "../Spinner";


export default function ArticleDetail() {
  const { id } = useParams();

  const [article, setArticle] = useState(null); // ذخیره مستقیم یک مقاله
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        // درخواست مستقیم فقط برای مقاله با شناسه مشخص
        const response = await axios.get(`http://localhost:8000/articles/${id}`);
        setArticle(response.data);
      } catch (err) {
        setArticle(null);
        setError("ارتباط با سرور برقرار نشد یا مقاله مورد نظر پیدا نشد!", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchArticle();
    }
  }, [id]); // وابستگی به id برای اجرای مجدد در صورت تغییر URL

  if (loading) {
        return <Spinner fullScreen={true}/>;
  }

  if (error || !article) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-100">
          {error || "مقاله مورد نظر پیدا نشد!"}
        </h2>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-colors"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-8">
      {/* دکمه بازگشت */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-400 hover:border-slate-700 hover:text-slate-200 transition-colors backdrop-blur-xl"
        >
          <span>→</span>
          <span>بازگشت به مقالات</span>
        </Link>
      </div>

      {/* هدر مقاله */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="rounded-xl border border-indigo-500/30 bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-400">
            {article.category}
          </span>
          <span className="text-xs text-slate-500">{article.date}</span>
          <span className="text-xs text-slate-500">•</span>
          <span className="text-xs text-slate-500">
            زمان مطالعه: {article.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-slate-100">
          {article.title}
        </h1>

        {/* اطلاعات نویسنده */}
        <div className="flex items-center gap-3 pt-2">
          {article.author?.avatar && (
            <img
              src={article.author.avatar}
              alt={
                typeof article.author === "object"
                  ? article.author.name
                  : article.author
              }
              className="h-10 w-10 rounded-full object-cover border border-slate-700"
            />
          )}
          <div>
            <div className="text-sm font-medium text-slate-200">
              {typeof article.author === "object"
                ? article.author.name
                : article.author}
            </div>
            {article.author?.role && (
              <div className="text-xs text-slate-400">
                {article.author.role}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* تصویر اصلی مقاله */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <img
          src={article.image}
          alt={article.title}
          className="h-72 sm:h-96 w-full object-cover"
        />
      </div>

      {/* متن اصلی مقاله */}
      <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
        {Array.isArray(article.content) ? (
          article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{article.content}</p>
        )}
      </div>

      {/* فوتر مقاله و اشتراک‌گذاری */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-6 text-xs text-slate-400">
        <span>شناسه مقاله: #{id}</span>
        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5 hover:border-slate-700 hover:text-slate-200 transition-colors cursor-pointer"
        >
          اشتراک‌گذاری لینک
        </button>
      </div>
    </article>
  );
}
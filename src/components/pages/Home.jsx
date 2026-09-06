import { Link } from "react-router-dom";
import { ArticleBox } from "../ArticleBox";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // تعریف تابع دریافت داده
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // ارسال درخواست GET به json-server
        const response = await axios.get("http://localhost:8000/articles");
        setArticles(response.data); // ذخیره داده در استیت
      } catch (err) {
        setError("ارتباط با سرور برقرار نشد!", err);
      } finally {
        setLoading(false); // پایان حالت در حال بارگذاری
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <Spinner fullScreen={true}/>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-10">
      {/* هدر صفحه اصلی */}
      <section className="text-center space-y-3 max-w-2xl mx-auto py-4">
        <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 text-xs font-medium text-indigo-400">
          مجله تخصصی وب و فناوری
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
          جدیدترین مقالات و آموزش‌ها
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          مجموعه‌ای از بهترین مقالات در زمینه برنامه‌نویسی وب، طراحی رابط کاربری
          و تکنولوژی.
        </p>
      </section>

      {/* شبکه کارت مقالات (Grid) */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.id} to={`/articles/${article.id}`}>
            <ArticleBox article={article} />
          </Link>
        ))}
      </section>
    </div>
  );
}

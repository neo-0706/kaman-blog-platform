export function ArticleBox({ article }) {
  if (!article) return null;

  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer">
      {/* تصویر مقاله */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-xl bg-slate-950/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-indigo-400 border border-slate-800">
          {article.category}
        </span>
      </div>

      {/* بدنه کارت */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{article.date}</span>
            <span>•</span>
            <span>زمان مطالعه: {article.readTime}</span>
          </div>
          <h2 className="text-base font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors leading-snug">
            {article.title}
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        {/* نویسنده */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs">
          <span className="font-medium text-slate-400">
            {article.author.name}
          </span>
          <span className="font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
            مطالعه ←
          </span>
        </div>
      </div>
    </article>
  );
}

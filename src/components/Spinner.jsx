export default function Spinner({
  size = "md", // اندازه‌ها: 'sm' | 'md' | 'lg'
  text = "در حال بارگذاری...",
  fullScreen = false,
}) {
  // سایزهای مختلف آیکون
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const spinnerJSX = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md animate-pulse"></div>

        <svg
          className={`animate-spin text-indigo-500 ${sizeClasses[size] || sizeClasses.md}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-100"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      {/* متن بارگذاری */}
      {text && (
        <p className="text-xs sm:text-sm font-medium text-slate-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  // اگر حالت تمام‌صفحه فعال باشد (برای لودینگ‌های کلی صفحه)
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
        {spinnerJSX}
      </div>
    );
  }

  // حالت معمولی (داخل بخشی از صفحه)
  return (
    <div className="flex w-full items-center justify-center py-12">
      {spinnerJSX}
    </div>
  );
}
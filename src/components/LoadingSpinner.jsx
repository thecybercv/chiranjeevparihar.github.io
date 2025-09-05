function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyberorange/20 rounded-full animate-spin border-t-cyberorange"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-cyberorange"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;

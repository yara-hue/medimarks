export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-navy-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-10 h-10 border-2 border-navy-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-gray-500 tracking-[0.3em] uppercase">Loading</p>
      </div>
    </div>
  );
}

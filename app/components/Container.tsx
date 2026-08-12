export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-sm:px-5 max-w-285 w-full items-center m-auto">
      {children}
    </div>
  );
}

export default function Section({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      {title && <h2 className="text-4xl font-bold mb-12"> {title} </h2>}
      <div className="prose prose-lg lg:prose-xl mx-auto">
        {children}
      </div>
    </section>
  );
}

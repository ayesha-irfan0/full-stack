type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}

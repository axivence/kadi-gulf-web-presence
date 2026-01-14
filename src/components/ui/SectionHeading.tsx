interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-foreground" : "text-gold"
        }`}
      >
        {title}
      </h2>
      <div className={`divider-gold ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

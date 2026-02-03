interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md"
}: CardProps) {
  return (
    <div
      className={`
        bg-slate-800/50 rounded-2xl shadow-sm border border-slate-700/50
        ${hover ? "transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 hover:border-indigo-500/30" : ""}
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, className = "", as: Component = "h3" }: CardTitleProps) {
  return (
    <Component className={`text-xl font-bold text-white ${className}`}>
      {children}
    </Component>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return (
    <p className={`text-slate-300 ${className}`}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
